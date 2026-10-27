use atlas_lab::{modrinth::Project, snapshots::SnapshotStore};
use std::{
    fs::OpenOptions,
    path::PathBuf,
    time::{SystemTime, UNIX_EPOCH},
};
struct Scratch(PathBuf);
impl Scratch {
    fn new() -> Self {
        let n = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_nanos();
        let path =
            std::env::temp_dir().join(format!("atlas-lab-test-{}-{n}.sqlite", std::process::id()));
        OpenOptions::new()
            .create_new(true)
            .write(true)
            .open(&path)
            .unwrap();
        Self(path)
    }
}
impl Drop for Scratch {
    fn drop(&mut self) {
        let _ = std::fs::remove_file(&self.0);
    }
}
#[test]
fn snapshots_survive_close_reopen_and_failure() {
    let scratch = Scratch::new();
    let project = Project {
        id: "AANobbMI".into(),
        slug: "sodium".into(),
        title: "fixture".into(),
        description: "not a live result".into(),
        body: Some("# Full fixture\n![image](https://example.invalid/a.png)".into()),
        project_type: "mod".into(),
        versions: vec!["abc".into()],
        icon_url: None,
        gallery: None,
    };
    {
        let mut s = SnapshotStore::open(&scratch.0).unwrap();
        s.save_modrinth("sodium", &project).unwrap();
    }
    {
        let s = SnapshotStore::open(&scratch.0).unwrap();
        s.record_failure("sodium").unwrap();
        assert_eq!(
            s.latest_modrinth("AANobbMI").unwrap().unwrap().versions,
            vec!["abc"]
        );
        assert_eq!(
            s.latest_modrinth("AANobbMI").unwrap().unwrap().body,
            project.body
        );
        assert_eq!(s.attempts().unwrap(), 2);
    }
    let c = rusqlite::Connection::open(&scratch.0).unwrap();
    assert_eq!(
        c.query_row("PRAGMA integrity_check", [], |r| r.get::<_, String>(0))
            .unwrap(),
        "ok"
    );
}

#[test]
fn separate_connections_cannot_claim_the_same_live_job() {
    use atlas_lab::jobs::{Job, Queue};
    let scratch = Scratch::new();
    let mut first = Queue::open(&scratch.0).unwrap();
    let mut second = Queue::open(&scratch.0).unwrap();
    first.enqueue(&Job::DedupExperiment, 0).unwrap();
    let a = first.claim("worker-a", 1, 1000).unwrap().unwrap();
    assert!(second.claim("worker-b", 2, 1000).unwrap().is_none());
    drop(first);
    let b = second.claim("worker-b", 1001, 1000).unwrap().unwrap();
    assert_eq!(a.id, b.id);
    assert!(second.finish(&a, true, 1002).is_err());
    second.finish(&b, true, 1003).unwrap();
}

#[test]
fn batch_survives_reopen_without_replacing_missing_project() {
    let scratch = Scratch::new();
    let ids = vec!["AANobbMI".into(), "P7dR8mSH".into()];
    let body=br#"[{"id":"AANobbMI","slug":"fixture","title":"Full fixture","description":"test","project_type":"mod","versions":["all1","all2"],"gallery":[]}]"#;
    let batch = atlas_lab::modrinth::parse_projects(body, &ids).unwrap();
    {
        let mut store = SnapshotStore::open(&scratch.0).unwrap();
        store.save_modrinth_batch(&batch).unwrap();
        store.record_batch_failure(&ids).unwrap();
    }
    let store = SnapshotStore::open(&scratch.0).unwrap();
    assert_eq!(store.attempts().unwrap(), 4);
    assert_eq!(
        serde_json::to_value(store.latest_modrinth("AANobbMI").unwrap().unwrap()).unwrap(),
        serde_json::to_value(&batch.projects[0]).unwrap()
    );
    assert!(store.latest_modrinth("P7dR8mSH").unwrap().is_none());
    let connection = rusqlite::Connection::open(&scratch.0).unwrap();
    assert_eq!(
        connection
            .query_row("PRAGMA integrity_check", [], |r| r.get::<_, String>(0))
            .unwrap(),
        "ok"
    );
}
