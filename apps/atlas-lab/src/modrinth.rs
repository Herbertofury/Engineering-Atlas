//! Read-only public project metadata. Not a complete catalogue, download client or account integration.
use serde::{Deserialize, Serialize};
use std::{
    io::Read,
    time::{Duration, Instant},
};

const MAX_BODY: u64 = 2 * 1024 * 1024;
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Project {
    pub id: String,
    pub slug: String,
    pub title: String,
    pub description: String,
    pub project_type: String,
    pub versions: Vec<String>,
    #[serde(default)]
    pub icon_url: Option<String>,
    #[serde(default)]
    pub gallery: Option<Vec<GalleryMedia>>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GalleryMedia {
    pub url: String,
    pub raw_url: Option<String>,
    pub featured: bool,
    pub title: Option<String>,
    pub description: Option<String>,
    pub created: String,
    pub ordering: i64,
}

pub fn project_url(id: &str) -> Result<String, &'static str> {
    if id.is_empty()
        || id.len() > 128
        || !id
            .bytes()
            .all(|b| b.is_ascii_alphanumeric() || b == b'-' || b == b'_')
    {
        return Err("Expected a Modrinth project ID or slug, not a URL or path");
    }
    Ok(format!("https://api.modrinth.com/v2/project/{id}"))
}

pub fn parse_project(body: &[u8]) -> Result<Project, Box<dyn std::error::Error>> {
    if body.len() as u64 > MAX_BODY {
        return Err("Response exceeds size budget".into());
    }
    let project: Project = serde_json::from_slice(body)?;
    if project.id.len() != 8 || !project.id.bytes().all(|b| b.is_ascii_alphanumeric()) {
        return Err("Invalid canonical project identifier".into());
    }
    project_url(&project.slug)?;
    if project.title.trim().is_empty() {
        return Err("Missing project title".into());
    }
    Ok(project)
}

pub struct PublicClient {
    client: reqwest::blocking::Client,
    next_request: Instant,
}
impl PublicClient {
    pub fn new() -> Result<Self, reqwest::Error> {
        Ok(Self {client: reqwest::blocking::Client::builder()
            .user_agent("Herbertofury/Engineering-Atlas/0.1.0 (https://github.com/Herbertofury/Engineering-Atlas)")
            .https_only(true).redirect(reqwest::redirect::Policy::none())
            .connect_timeout(Duration::from_secs(10)).timeout(Duration::from_secs(30))
            .build()?, next_request: Instant::now()})
    }
    pub fn project(&mut self, id: &str) -> Result<Project, Box<dyn std::error::Error>> {
        let url = project_url(id)?;
        if Instant::now() < self.next_request {
            return Err("Provider cooldown active; retry later".into());
        }
        // Serial client caps request initiation at one per second, below the documented nominal limit.
        self.next_request = Instant::now() + Duration::from_secs(1);
        let response = self.client.get(url).send()?;
        let status = response.status();
        if status.as_u16() == 429 {
            let seconds = response
                .headers()
                .get("x-ratelimit-reset")
                .and_then(|h| h.to_str().ok())
                .and_then(|s| s.parse::<u64>().ok())
                .unwrap_or(60);
            self.next_request = Instant::now() + Duration::from_secs(seconds.clamp(1, 86400));
            return Err("Provider rate limited the request; no snapshot changed".into());
        }
        if !status.is_success() {
            return Err(format!(
                "Provider returned HTTP {}; no snapshot changed",
                status.as_u16()
            )
            .into());
        }
        let content_type = response
            .headers()
            .get(reqwest::header::CONTENT_TYPE)
            .and_then(|h| h.to_str().ok())
            .unwrap_or("");
        if !content_type
            .split(';')
            .next()
            .unwrap_or("")
            .trim()
            .eq_ignore_ascii_case("application/json")
        {
            return Err("Expected a JSON response".into());
        }
        if response.content_length().is_some_and(|n| n > MAX_BODY) {
            return Err("Response exceeds size budget".into());
        }
        let mut bytes = Vec::new();
        response.take(MAX_BODY + 1).read_to_end(&mut bytes)?;
        parse_project(&bytes)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn rejects_url_path_query_and_unicode_injection() {
        for id in [
            "",
            "../secret",
            "https://example.org",
            "a?b",
            "a#b",
            "%2f",
            "a\\b",
            "café",
        ] {
            assert!(project_url(id).is_err(), "{id}");
        }
    }
    #[test]
    fn gallery_is_not_silently_capped_at_eight() {
        let gallery: Vec<serde_json::Value> = (0..12).map(|i|serde_json::json!({"url":format!("https://cdn.modrinth.com/data/AANobbMI/{i}.webp"),"raw_url":format!("https://cdn.modrinth.com/data/AANobbMI/{i}.png"),"featured":false,"title":format!("Image {i}"),"description":null,"created":"2026-10-26T00:00:00Z","ordering":i})).collect();
        let body=serde_json::to_vec(&serde_json::json!({"id":"AANobbMI","slug":"sodium","title":"Fixture","description":"fixture","project_type":"mod","versions":[],"gallery":gallery})).unwrap();
        let p = parse_project(&body).unwrap();
        assert_eq!(p.gallery.as_ref().unwrap().len(), 12);
        assert_eq!(p.gallery.as_ref().unwrap()[11].ordering, 11);
        assert!(
            p.gallery.as_ref().unwrap()[11]
                .raw_url
                .as_ref()
                .unwrap()
                .ends_with("11.png")
        );
    }
    #[test]
    fn missing_gallery_is_unknown_not_verified_empty() {
        let mut value = serde_json::json!({"id":"AANobbMI","slug":"sodium","title":"Fixture","description":"fixture","project_type":"mod","versions":[]});
        assert!(
            parse_project(&serde_json::to_vec(&value).unwrap())
                .unwrap()
                .gallery
                .is_none()
        );
        value["gallery"] = serde_json::json!([]);
        assert!(
            parse_project(&serde_json::to_vec(&value).unwrap())
                .unwrap()
                .gallery
                .unwrap()
                .is_empty()
        );
    }
    #[test]
    fn accepts_id_or_slug() {
        assert_eq!(
            project_url("sodium").unwrap(),
            "https://api.modrinth.com/v2/project/sodium"
        );
    }
    #[test]
    fn requires_complete_typed_metadata() {
        assert!(parse_project(br#"{"id":"AANobbMI"}"#).is_err());
        let p=parse_project(br#"{"id":"AANobbMI","slug":"sodium","title":"Sodium","description":"fixture","project_type":"mod","versions":[],"additional_field":"forward-compatible"}"#).unwrap();
        assert_eq!(p.id, "AANobbMI");
    }
    #[test]
    fn limits_body_before_json_parse() {
        assert!(parse_project(&vec![b' '; MAX_BODY as usize + 1]).is_err());
    }
}
