//! Atomic metadata generations. Failed refreshes never replace a successful snapshot.
use crate::modrinth::Project;
use rusqlite::{Connection, OptionalExtension, params};
use std::path::Path;
pub struct SnapshotStore(Connection);
impl SnapshotStore {
    pub fn open(path: &Path) -> rusqlite::Result<Self> {
        let c = Connection::open(path)?;
        c.busy_timeout(std::time::Duration::from_secs(5))?;
        c.execute_batch("PRAGMA foreign_keys=ON; PRAGMA synchronous=FULL;
            CREATE TABLE IF NOT EXISTS snapshots (
              generation INTEGER PRIMARY KEY, provider TEXT NOT NULL,
              canonical_id TEXT NOT NULL, observed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
              payload TEXT NOT NULL);
            CREATE INDEX IF NOT EXISTS latest_snapshot ON snapshots(provider,canonical_id,generation DESC);
            CREATE TABLE IF NOT EXISTS collection_attempts (
              id INTEGER PRIMARY KEY, requested_id TEXT NOT NULL,
              outcome TEXT NOT NULL CHECK(outcome IN ('success','failure')),
              generation INTEGER REFERENCES snapshots(generation),
              recorded_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
              CHECK((outcome='success' AND generation IS NOT NULL) OR (outcome='failure' AND generation IS NULL)));")?;
        Ok(Self(c))
    }
    pub fn save_modrinth(
        &mut self,
        requested_id: &str,
        p: &Project,
    ) -> Result<i64, Box<dyn std::error::Error>> {
        crate::modrinth::project_url(requested_id)?;
        let body = serde_json::to_vec(p)?;
        // Enforce the same validation for callers as for network responses.
        crate::modrinth::parse_project(&body)?;
        let body = String::from_utf8(body)?;
        let tx = self.0.transaction()?;
        tx.execute(
            "INSERT INTO snapshots(provider,canonical_id,payload) VALUES('modrinth',?1,?2)",
            params![p.id, body],
        )?;
        let generation = tx.last_insert_rowid();
        tx.execute("INSERT INTO collection_attempts(requested_id,outcome,generation) VALUES(?1,'success',?2)",params![requested_id,generation])?;
        tx.commit()?;
        Ok(generation)
    }
    pub fn save_modrinth_batch(
        &mut self,
        batch: &crate::modrinth::ProjectBatch,
    ) -> Result<Vec<(String, i64)>, Box<dyn std::error::Error>> {
        // Revalidate before opening the transaction, including forged missing-state metadata.
        let validated = crate::modrinth::parse_projects(
            &serde_json::to_vec(&batch.projects)?,
            &batch.requested_ids,
        )?;
        if validated.missing_ids != batch.missing_ids {
            return Err("Inconsistent missing project identities".into());
        }
        let tx = self.0.transaction()?;
        let mut generations = Vec::new();
        for project in validated.projects {
            let body = serde_json::to_string(&project)?;
            tx.execute(
                "INSERT INTO snapshots(provider,canonical_id,payload) VALUES('modrinth',?1,?2)",
                params![project.id, body],
            )?;
            let generation = tx.last_insert_rowid();
            tx.execute("INSERT INTO collection_attempts(requested_id,outcome,generation) VALUES(?1,'success',?2)",params![project.id,generation])?;
            generations.push((project.id, generation));
        }
        for id in validated.missing_ids {
            tx.execute(
                "INSERT INTO collection_attempts(requested_id,outcome) VALUES(?1,'failure')",
                [id],
            )?;
        }
        tx.commit()?;
        Ok(generations)
    }
    pub fn record_batch_failure(
        &mut self,
        ids: &[String],
    ) -> Result<(), Box<dyn std::error::Error>> {
        crate::modrinth::projects_url(ids)?;
        let tx = self.0.transaction()?;
        for id in ids {
            tx.execute(
                "INSERT INTO collection_attempts(requested_id,outcome) VALUES(?1,'failure')",
                [id],
            )?;
        }
        tx.commit()?;
        Ok(())
    }
    pub fn record_failure(&self, requested_id: &str) -> rusqlite::Result<()> {
        // Intentionally do not persist error URLs, response bodies or credentials.
        self.0.execute(
            "INSERT INTO collection_attempts(requested_id,outcome) VALUES(?1,'failure')",
            [requested_id],
        )?;
        Ok(())
    }
    pub fn latest_modrinth(
        &self,
        canonical_id: &str,
    ) -> Result<Option<Project>, Box<dyn std::error::Error>> {
        let body: Option<String>=self.0.query_row("SELECT payload FROM snapshots WHERE provider='modrinth' AND canonical_id=?1 ORDER BY generation DESC LIMIT 1",[canonical_id],|r|r.get(0)).optional()?;
        body.map(|b| crate::modrinth::parse_project(b.as_bytes()))
            .transpose()
    }
    pub fn attempts(&self) -> rusqlite::Result<i64> {
        self.0
            .query_row("SELECT count(*) FROM collection_attempts", [], |r| r.get(0))
    }
}
#[cfg(test)]
mod tests {
    use super::*;
    fn project() -> Project {
        Project {
            id: "AANobbMI".into(),
            slug: "sodium".into(),
            title: "Sodium fixture".into(),
            description: "unit fixture only".into(),
            body: Some("full description fixture".into()),
            project_type: "mod".into(),
            versions: vec!["version-a".into()],
            icon_url: None,
            gallery: None,
        }
    }
    #[test]
    fn partial_batch_keeps_last_good_and_records_each_identity() {
        let mut store = SnapshotStore::open(Path::new(":memory:")).unwrap();
        store.save_modrinth("AANobbMI", &project()).unwrap();
        let mut other = project();
        other.id = "P7dR8mSH".into();
        let batch = crate::modrinth::ProjectBatch {
            requested_ids: vec!["AANobbMI".into(), "P7dR8mSH".into()],
            projects: vec![other],
            missing_ids: vec!["AANobbMI".into()],
        };
        assert_eq!(store.save_modrinth_batch(&batch).unwrap().len(), 1);
        assert_eq!(store.attempts().unwrap(), 3);
        assert_eq!(
            store.latest_modrinth("AANobbMI").unwrap().unwrap().title,
            "Sodium fixture"
        );
        assert!(store.latest_modrinth("P7dR8mSH").unwrap().is_some());
    }
    #[test]
    fn database_failure_rolls_back_earlier_batch_rows() {
        let mut store = SnapshotStore::open(Path::new(":memory:")).unwrap();
        store.0.execute_batch("CREATE TRIGGER reject_second BEFORE INSERT ON snapshots WHEN NEW.canonical_id='P7dR8mSH' BEGIN SELECT RAISE(ABORT,'injected fixture failure'); END;").unwrap();
        let mut other = project();
        other.id = "P7dR8mSH".into();
        let batch = crate::modrinth::ProjectBatch {
            requested_ids: vec!["AANobbMI".into(), "P7dR8mSH".into()],
            projects: vec![project(), other],
            missing_ids: vec![],
        };
        assert!(store.save_modrinth_batch(&batch).is_err());
        assert_eq!(store.attempts().unwrap(), 0);
        assert!(store.latest_modrinth("AANobbMI").unwrap().is_none());
    }
    #[test]
    fn invalid_batch_cannot_partially_commit() {
        let mut store = SnapshotStore::open(Path::new(":memory:")).unwrap();
        let batch = crate::modrinth::ProjectBatch {
            requested_ids: vec!["AANobbMI".into()],
            projects: vec![project()],
            missing_ids: vec!["AANobbMI".into()],
        };
        assert!(store.save_modrinth_batch(&batch).is_err());
        assert_eq!(store.attempts().unwrap(), 0);
        assert!(store.latest_modrinth("AANobbMI").unwrap().is_none());
    }
    #[test]
    fn failure_preserves_last_verified_generation() {
        let mut s = SnapshotStore::open(Path::new(":memory:")).unwrap();
        s.save_modrinth("sodium", &project()).unwrap();
        s.record_failure("sodium").unwrap();
        assert_eq!(
            s.latest_modrinth("AANobbMI").unwrap().unwrap().versions,
            ["version-a"]
        );
        assert_eq!(s.attempts().unwrap(), 2);
    }
    #[test]
    fn invalid_snapshot_does_not_replace_good_one() {
        let mut s = SnapshotStore::open(Path::new(":memory:")).unwrap();
        s.save_modrinth("sodium", &project()).unwrap();
        let mut bad = project();
        bad.title.clear();
        assert!(s.save_modrinth("sodium", &bad).is_err());
        assert_eq!(s.attempts().unwrap(), 1);
        assert_eq!(
            s.latest_modrinth("AANobbMI").unwrap().unwrap().title,
            "Sodium fixture"
        );
    }
    #[test]
    fn canonical_id_survives_slug_change() {
        let mut s = SnapshotStore::open(Path::new(":memory:")).unwrap();
        s.save_modrinth("sodium", &project()).unwrap();
        let mut p = project();
        p.slug = "new-name".into();
        s.save_modrinth("new-name", &p).unwrap();
        assert_eq!(
            s.latest_modrinth("AANobbMI").unwrap().unwrap().slug,
            "new-name"
        );
        assert!(s.latest_modrinth("missing").unwrap().is_none());
    }
}
