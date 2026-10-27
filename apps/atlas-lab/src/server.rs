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
fn batch_output(batch: crate::modrinth::ProjectBatch) -> (bool, serde_json::Value) {
    let complete = batch.missing_ids.is_empty();
    (
        complete,
        serde_json::json!({"batch":batch,"status":if complete {"complete"} else {"partial"},"scope":"bounded public metadata projections; missing identities retained explicitly"}),
    )
}
fn bounded_output(succeeded: bool, output: serde_json::Value) -> (bool, serde_json::Value) {
    match serde_json::to_vec(&output) {
        Ok(bytes) if bytes.len() <= crate::jobs::MAX_JOB_OUTPUT_BYTES => (succeeded, output),
        Ok(bytes) => (
            false,
            serde_json::json!({"error":"Result exceeds job output budget; no truncated success recorded. Try a smaller batch.","rejected_serialized_bytes":bytes.len()}),
        ),
        Err(_) => (
            false,
            serde_json::json!({"error":"Result serialization failed; previous results retained"}),
        ),
    }
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
                    Job::CollectModrinth {project}=>client.project(project).map(|p|(true,serde_json::json!({"project":p,"scope":"one public metadata projection"}))).map_err(|_|"Collection failed; previous results are retained"),
                    Job::CollectModrinthBatch {projects}=>client.projects(projects).map(batch_output).map_err(|_|"Batch collection failed; previous results are retained"),
                    Job::DedupExperiment=>crate::experiment_runner::run_builtin(||stop.load(Ordering::Relaxed)).map(|run|{
                        let completed=run.completed;
                        let mut output=serde_json::json!({"experiment":run});
                        match crate::journal::Journal::open(&path).map_err(|_|()).and_then(|mut journal|journal.record(&run.evidence,&crate::experiment_runner::policy(),None).map_err(|_|())) {
                            Ok(id)=>{output["experiment_id"]=id.into();(completed,output)}
                            Err(())=>{output["error"]="Could not append the experiment journal; raw evidence is retained in this job result".into();(false,output)}
                        }
                    }).map_err(|_|"Built-in experiment configuration rejected"),
                };
                let (succeeded, output) = match result {
                    Ok((complete, value)) => bounded_output(complete, value),
                    Err(error) => (false, serde_json::json!({"error":error})),
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
        .route(
            "/collection-input.mjs",
            get(|| async {
                (
                    [(header::CONTENT_TYPE, "text/javascript")],
                    include_str!("../ui/collection-input.mjs"),
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
    fn partial_batch_is_not_reported_as_success() {
        let batch = crate::modrinth::ProjectBatch {
            requested_ids: vec!["AANobbMI".into()],
            projects: vec![],
            missing_ids: vec!["AANobbMI".into()],
        };
        let (success, value) = batch_output(batch);
        assert!(!success);
        assert_eq!(value["status"], "partial");
        assert_eq!(value["batch"]["missing_ids"][0], "AANobbMI");
    }
    #[test]
    fn oversized_result_fails_explicitly_instead_of_looping_on_finalization() {
        let (success, value) = bounded_output(
            true,
            serde_json::json!({"data":"x".repeat(crate::jobs::MAX_JOB_OUTPUT_BYTES)}),
        );
        assert!(!success);
        assert!(
            value["error"]
                .as_str()
                .unwrap()
                .contains("no truncated success")
        );
        let original = serde_json::json!({"complete":"exact"});
        assert_eq!(bounded_output(true, original.clone()), (true, original));
    }
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
