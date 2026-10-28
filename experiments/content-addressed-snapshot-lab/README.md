# Content-addressed complete snapshot experiment

Reviewed 2026-10-28. Isolated candidate, not an application migration. The application continues using SnapshotStore. No other project's recommendations or code change follows.

## Reuse and real baseline

The reference calls the actual SnapshotStore save and latest-read methods. Both lanes reuse the existing immutable ProjectRecord parser, request-identity validation and storage_connection contract: foreign keys enabled and synchronous EXTRA, without changing journal mode. Each generation and collection attempt still commits separately. The candidate retains full original JSON in a payload table; identical bytes share that row, while every observation remains a separate generation. Digest matches are checked against complete stored text, not trusted as equality on their own.

Five retained public Modrinth response generations include three project identities, a repeated unchanged response and a changed response. The second workload repeats this sequence sixteen times: 80 generated replay observations, not 80 independent real projects. Raw responses and databases remain private.

## Stabilization, not suppressed regression

The first candidate wrote its application_id marker every time it opened an existing database. Its read measurements regressed. A regression test reproduced a changed database-file digest after read-only reopen. The repair writes the format marker only on initial creation. The same test now passes; initial source and failed evidence remain retained. This removes an actual unnecessary durable header write, not merely a warm-cache timing difference.

Six candidate tests cover duplicate observations, changed payloads, injected hash/payload mismatch, attempt-insert rollback, incorrect identity, stored-payload corruption, rejection of an existing app database without byte changes, read-only reopen byte stability, and 1,000 generated changed/duplicate generations with recovery after rejected writes.

## Measurement contract and open gates

Seven alternating-order pairs per workload use new databases. Write time includes parsing, candidate hashing/equality checking, generation/attempt inserts and commit. Setup is separately reported. Latest-read timing includes reopen, parsing, candidate hash verification and exact comparison to the input. Complete history, provider/identity, attempt linkage, original bytes, SQLite integrity and foreign keys are checked outside the timer.

Both lanes retain their observation timestamps. Those wall-clock values are format-checked but are not required to be identical across separately timed databases. Reopen is not cold-cache. This is a single-connection storage-component comparison, not full collection-job/network/UI latency. Peak memory, concurrent readers/writers, migration, broader crash recovery and physical power-loss behavior remain acceptance gates. EXTRA configuration is not proof of hardware durability.

The fixed harness accepts exactly five authorized public JSON files, at most 2 MiB each and 4 MiB total, and requires a new output directory. It never overwrites an existing evidence directory. It checks a cooperative 120-second budget; measured runs also use an external 150-second timeout. Partial JSONL samples and every database are retained. Database size is checked against 64 MiB after each sample. This is not a hard whole-process RSS limit.

Sources: SQLAPPID01, SQLROWID01, DB06 (SQLite synchronization contract). SQLite's [application identifier](https://www.sqlite.org/pragma.html#pragma_application_id) identifies a database file format. [WITHOUT ROWID guidance](https://www.sqlite.org/withoutrowid.html) warns that large rows may favor ordinary rowid tables; this experiment deliberately retains rowid payload storage and does not claim a measured comparison with WITHOUT ROWID.


## Retained measurements and decision

[Initial run](pass1-receipt.json), [repaired run](pass2-receipt.json), [independent repeat](pass3-receipt.json), [medians and exact source hashes](summary.json), and [verification](verification.json). All 84 samples passed complete payload/history, integrity and foreign-key checks. [Original implementation](initial-source/store.rs) preserves the rejected reopen behavior.

| Final repeat median | Actual SnapshotStore | Addressed candidate |
|---|---:|---:|
| Five retained generations: parse/write/commit | 12.255 ms | 12.694 ms |
| Five retained generations: reopen/latest/verify | 0.550 ms | 0.799 ms |
| Five retained generations: database bytes | 73,728 | 65,536 |
| Generated 80-observation replay: parse/write/commit | 206.544 ms | 176.666 ms |
| Generated replay: reopen/latest/verify | 0.578 ms | 0.650 ms |
| Generated replay: database bytes | 880,640 | 86,016 |

The repaired candidate's reopen cost fell substantially versus its initial implementation, and the replay write median improved versus the actual baseline in both repaired runs. It remains slower on the small real corpus and on latest-read medians. The approximately 90% space reduction belongs to the duplicate-heavy generated replay; the five retained real generations save about 11%. Neither is a universal workload estimate. No migration or default change is accepted. A real collection stream whose payload changes each refresh may receive little deduplication benefit.


## Process interruption checks

[Two retained runs](process-interruption.json) killed 24 newly created fixture processes after their first durable generation, at six requested delays while further commits were running. Both the actual SnapshotStore and addressed candidate reopened successfully. Every retained generation matched complete original bytes; attempts remained paired with generations; integrity and foreign-key checks passed. Candidate payload storage had no orphan or duplicated row. The exact instruction/transaction phase of each kill was not observed.

This is SIGKILL process-recovery evidence on Linux with SQLite 3.54.1, not a physical power-loss test, Windows recovery result or proof of every crash point. The second run uses strict duplicate-key/nonfinite/identity/completeness receipt validation, tested with and without Python optimization. All databases, original output and failures remain retained privately. The experimental format marker is local identification, not a globally registered ID or a security boundary.
