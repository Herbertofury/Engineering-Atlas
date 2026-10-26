//! Loopback-only interface. No remote hosting, external scripts, credentials or self-deployment.
use crate::jobs::{Job, Queue};
use axum::{
    Json, Router,
    extract::{DefaultBodyLimit, Request, State},
    http::{HeaderMap, StatusCode, header},
    middleware::{self, Next},
    response::{Html, IntoResponse, Response},
    routing::{get, post},
};
use std::{
    path::PathBuf,
    sync::{
        Arc,
        atomic::{AtomicBool, AtomicU8, Ordering},
    },
    time::{Duration, SystemTime, UNIX_EPOCH},
};
const HOST: &str = "127.0.0.1:41379";
const ORIGIN: &str = "http://127.0.0.1:41379";
#[derive(Clone)]
struct App {
    path: PathBuf,
    db_slots: Arc<tokio::sync::Semaphore>,
    worker_status: Arc<AtomicU8>,
}
fn now() -> i64 {
    SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.as_millis().min(i64::MAX as u128) as i64)
        .unwrap_or(0)
}
fn permitted(headers: &HeaderMap, write: bool) -> bool {
    headers.get(header::HOST).and_then(|v| v.to_str().ok()) == Some(HOST)
        && (!write
            || (headers.get(header::ORIGIN).and_then(|v| v.to_str().ok()) == Some(ORIGIN)
                && headers.get("x-atlas-request").and_then(|v| v.to_str().ok())
                    == Some("local-ui")))
}
async fn guard(request: Request, next: Next) -> Response {
    if !permitted(
        request.headers(),
        request.method() != axum::http::Method::GET,
    ) {
        return StatusCode::FORBIDDEN.into_response();
    }
    let mut response = next.run(request).await;
    let h = response.headers_mut();
    h.insert(header::CACHE_CONTROL, "no-store".parse().unwrap());
    h.insert(header::CONTENT_SECURITY_POLICY,"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'".parse().unwrap());
    h.insert(header::X_CONTENT_TYPE_OPTIONS, "nosniff".parse().unwrap());
    h.insert(header::REFERRER_POLICY, "no-referrer".parse().unwrap());
    response
}
async fn overview(State(app): State<App>) -> Result<Json<serde_json::Value>, StatusCode> {
    let permit = app
        .db_slots
        .try_acquire_owned()
        .map_err(|_| StatusCode::TOO_MANY_REQUESTS)?;
    tokio::task::spawn_blocking(move || {
        let _permit = permit;
        Queue::open(&app.path)
            .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
            .overview()
            .map(|mut value| {
                value["worker_status"] = match app.worker_status.load(Ordering::Relaxed) {
                    1 => "running",
                    2 => "failed",
                    _ => "starting_or_stopped",
                }
                .into();
                Json(value)
            })
            .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)
    })
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
}
async fn enqueue(
    State(app): State<App>,
    Json(job): Json<Job>,
) -> Result<Json<serde_json::Value>, StatusCode> {
    if matches!(job, Job::DedupExperiment) {
        return Err(StatusCode::NOT_IMPLEMENTED);
    }
    let permit = app
        .db_slots
        .try_acquire_owned()
        .map_err(|_| StatusCode::TOO_MANY_REQUESTS)?;
    tokio::task::spawn_blocking(move || {
        let _permit = permit;
        let mut q = Queue::open(&app.path).map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
        q.enqueue(&job, now())
            .map(|id| Json(serde_json::json!({"id":id})))
            .map_err(|_| StatusCode::BAD_REQUEST)
    })
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?
}
fn worker(path: PathBuf, stop: Arc<AtomicBool>, status: Arc<AtomicU8>) {
    let mut q = match Queue::open(&path) {
        Ok(q) => q,
        Err(_) => {
            status.store(2, Ordering::Relaxed);
            return;
        }
    };
    let mut client = match crate::modrinth::PublicClient::new() {
        Ok(c) => c,
        Err(_) => {
            status.store(2, Ordering::Relaxed);
            return;
        }
    };
    status.store(1, Ordering::Relaxed);
    while !stop.load(Ordering::Relaxed) {
        match q.claim("local-worker", now(), 60_000) {
            Ok(Some(claim)) => {
                let result=match &claim.job {
                    Job::CollectModrinth {project}=>client.project(project).map(|p|serde_json::json!({"project":p,"scope":"one public metadata projection"})).map_err(|_|"Collection failed; previous results are retained"),
                    Job::DedupExperiment=>Err("Background experiment runner is not enabled yet; use the CLI lab"),
                };
                let succeeded = result.is_ok();
                let output = match result {
                    Ok(v) => v,
                    Err(e) => serde_json::json!({"error":e}),
                };
                if q.finish_output(&claim, succeeded, now(), Some(&output))
                    .is_err()
                {
                    eprintln!("A job could not be finalized; its lease remains recoverable");
                }
            }
            Ok(None) => {}
            Err(_) => eprintln!("Queue temporarily unavailable"),
        }
        std::thread::sleep(Duration::from_secs(1));
    }
}
pub async fn serve(path: PathBuf) -> Result<(), Box<dyn std::error::Error>> {
    Queue::open(&path)?;
    let listener = tokio::net::TcpListener::bind(HOST).await?;
    let stop = Arc::new(AtomicBool::new(false));
    let worker_stop = stop.clone();
    let worker_path = path.clone();
    let worker_status = Arc::new(AtomicU8::new(0));
    let status_for_thread = worker_status.clone();
    let worker_handle =
        std::thread::spawn(move || worker(worker_path, worker_stop, status_for_thread));
    let app = Router::new()
        .route(
            "/",
            get(|| async { Html(include_str!("../ui/index.html")) }),
        )
        .route(
            "/app.js",
            get(|| async {
                (
                    [(header::CONTENT_TYPE, "text/javascript")],
                    include_str!("../ui/app.js"),
                )
            }),
        )
        .route(
            "/style.css",
            get(|| async {
                (
                    [(header::CONTENT_TYPE, "text/css")],
                    include_str!("../ui/style.css"),
                )
            }),
        )
        .route("/api/overview", get(overview))
        .route("/api/jobs", post(enqueue))
        .layer(DefaultBodyLimit::max(4096))
        .layer(middleware::from_fn(guard))
        .with_state(App {
            path,
            worker_status,
            db_slots: Arc::new(tokio::sync::Semaphore::new(4)),
        });
    println!(
        "Atlas Lab local interface: {ORIGIN}. Press Ctrl+C to stop. No remote access is enabled."
    );
    let served = axum::serve(listener, app)
        .with_graceful_shutdown(async {
            let _ = tokio::signal::ctrl_c().await;
        })
        .await;
    stop.store(true, Ordering::Relaxed);
    let _ = tokio::task::spawn_blocking(move || worker_handle.join()).await;
    served?;
    Ok(())
}
#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn rejects_cross_site_and_dns_rebinding() {
        let mut h = HeaderMap::new();
        h.insert(header::HOST, "evil.example:41379".parse().unwrap());
        assert!(!permitted(&h, false));
        h.insert(header::HOST, HOST.parse().unwrap());
        assert!(permitted(&h, false));
        assert!(!permitted(&h, true));
        h.insert(header::ORIGIN, "https://evil.example".parse().unwrap());
        h.insert("x-atlas-request", "local-ui".parse().unwrap());
        assert!(!permitted(&h, true));
        h.insert(header::ORIGIN, ORIGIN.parse().unwrap());
        assert!(permitted(&h, true));
    }
}
