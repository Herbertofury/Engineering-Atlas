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
        project_type: "mod".into(),
        versions: vec!["abc".into()],
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
        assert_eq!(s.attempts().unwrap(), 2);
    }
    let c = rusqlite::Connection::open(&scratch.0).unwrap();
    assert_eq!(
        c.query_row("PRAGMA integrity_check", [], |r| r.get::<_, String>(0))
            .unwrap(),
        "ok"
    );
}
