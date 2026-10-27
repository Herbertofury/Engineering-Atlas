//! Safe collection diagnostics: categories only, never raw URLs, headers or response bodies.
use std::error::Error;

pub fn safe_message(error: &(dyn Error + 'static)) -> &'static str {
    if let Some(e) = error.downcast_ref::<reqwest::Error>() {
        if e.is_timeout() {
            return "Collection request timed out; previous results are retained";
        }
        if e.is_dns() {
            return "Collection hostname could not be resolved; previous results are retained";
        }
        if e.is_connect() {
            return "Collection connection failed; previous results are retained";
        }
        if e.is_decode() || e.is_body() {
            return "Collection response transport failed; previous results are retained";
        }
        return "Collection transport failed; previous results are retained";
    }
    if error.is::<serde_json::Error>() {
        return "Collection response was not valid expected JSON; previous results are retained";
    }
    // These strings are only matched, never copied to output. Unknown text stays private.
    match error.to_string().as_str() {
        "Provider cooldown active; retry later"
        | "Provider cooldown active; retry later; previous results retained" => {
            "Provider cooldown active; retry later; previous results are retained"
        }
        "Provider rate limited the request; no snapshot changed" => {
            "Provider rate limited collection; previous results are retained"
        }
        "Collection cancelled before request; previous results retained" => {
            "Collection cancelled before request; previous results are retained"
        }
        "Response exceeds size budget"
        | "Response exceeds size budget; no partial snapshot accepted" => {
            "Collection response exceeded its size budget; previous results are retained"
        }
        _ => "Collection failed validation or provider checks; previous results are retained",
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn transport_error_does_not_expose_attached_url() {
        let error = reqwest::blocking::Client::new()
            .get("not a URL")
            .build()
            .unwrap_err()
            .with_url(
                reqwest::Url::parse("https://example.invalid/?secret=DO_NOT_DISCLOSE").unwrap(),
            );
        let message = safe_message(&error);
        assert_eq!(
            message,
            "Collection transport failed; previous results are retained"
        );
        assert!(!message.contains("DO_NOT_DISCLOSE"));
        assert!(!message.contains("example.invalid"));
    }
    #[test]
    fn malformed_json_and_unknown_details_are_not_echoed() {
        let error =
            serde_json::from_str::<serde_json::Value>("private invalid payload").unwrap_err();
        assert_eq!(
            safe_message(&error),
            "Collection response was not valid expected JSON; previous results are retained"
        );
        let unknown: Box<dyn Error> = "password=DO_NOT_DISCLOSE".into();
        assert_eq!(
            safe_message(unknown.as_ref()),
            "Collection failed validation or provider checks; previous results are retained"
        );
    }
    #[test]
    fn controlled_failures_keep_distinct_categories() {
        for (input, expected) in [
            (
                "Provider cooldown active; retry later",
                "Provider cooldown active; retry later; previous results are retained",
            ),
            (
                "Provider rate limited the request; no snapshot changed",
                "Provider rate limited collection; previous results are retained",
            ),
            (
                "Collection cancelled before request; previous results retained",
                "Collection cancelled before request; previous results are retained",
            ),
            (
                "Response exceeds size budget",
                "Collection response exceeded its size budget; previous results are retained",
            ),
        ] {
            let error: Box<dyn Error> = input.into();
            assert_eq!(safe_message(error.as_ref()), expected);
        }
    }
}
