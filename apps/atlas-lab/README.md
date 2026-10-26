# Atlas Lab · executable R&D foundation

**Status: early working CLI, not a finished autonomous self-improving application.**

This Rust application starts the evidence and collection core. It does not replace the Atlas research library. It cannot yet generate arbitrary code changes, deploy itself, run an unattended experiment queue, or collect every platform. There is no GUI or Windows installer yet.

## What executes now

- A complete-output comparison gate separates incomplete evidence, stabilization work, insufficient improvement and eligibility for review. Eligibility is not deployment permission.
- SQLite records experiments transactionally. Repairs create a new linked record; they cannot overwrite the failed record through this API. The decision is computed by the gate, not supplied by the caller. Repair records must keep the baseline/workload and identify a new candidate revision.
- A real algorithm experiment compares linear exact identifier deduplication with a hash-indexed implementation. Both retain first-seen order, case, Unicode distinctions and arbitrarily long string identifiers. Ten thousand generated differential cases run in the unit suite.
- A read-only Modrinth adapter retrieves one public project's defined metadata projection from the official HTTPS endpoint. It rejects arbitrary URLs, redirects, malformed fields and oversized responses; supplies a specific User-Agent; imposes timeouts and a serial cooldown; respects rate-limit responses. It downloads no mod files and accepts no credentials.
- Successful project snapshots are committed with their collection receipt. Failed refreshes do not replace a previous generation. Canonical IDs survive slug changes. This is a selected metadata projection, **not all fields, descriptions/assets/downloads or a complete platform catalogue**.

## Run

Install the official Rust toolchain selected by `rust-toolchain.toml`, then run in this directory:

```sh
cargo test --locked
cargo clippy --locked --all-targets -- -D warnings
cargo run --locked -- modrinth-project sodium
cargo run --locked -- collect-modrinth sodium local.sqlite
cargo run --locked --release -- dedup-lab experiments.sqlite
```

The first two commands make no platform requests. Cargo may download pinned registry dependencies. The Modrinth commands explicitly make public API requests. The lab runs only built-in code on generated identifiers, not downloaded third-party implementations.

The dedup lab intentionally remains ineligible for review: it does not yet measure peak memory, exercise cancellation or attach run-specific stress evidence. Unit test coverage is not silently substituted for runtime evidence. Timings from this narrow generated workload are not end-to-end application speed claims.

## Safety and limitations

- No credentials, account sessions, paywall bypasses or arbitrary command execution.
- The journal is append-only through the application API, not cryptographically tamper-proof against local database edits.
- A timeout, HTTP failure or schema failure is not an empty successful collection.
- Cooldowns are per client instance, not yet a cross-process provider scheduler. Do not launch parallel processes to evade provider limits.
- No crash/power-loss durability certification, process sandbox, concurrent collector orchestration or production promotion/rollback mechanism yet. SQLite transactions are not a substitute for those tests.
- Native dependency builds and platform behavior need separate Linux and Windows CI evidence. A Linux pass is not a Windows release.
- Rust/SQLite/reqwest are evaluated starting choices, not universal winners. Storage alternatives and UI choices remain an explicit experimental decision.

## Next implementation milestones

1. Durable bounded jobs, cancellation and restart recovery; preserve failed attempts and last verified snapshots.
2. Isolated benchmark workers with resource measurements, exact source/workload identities and baseline/candidate replay.
3. Stabilization cases with reproducible failures, diagnosis, actual code repairs, retained speed and adversarial regression suites.
4. A responsive local UI for evidence, experiments, collector coverage and repair progress.
5. Candidate patches in isolated worktrees, locked checks and rollback verification before any controlled promotion. A model-backed patch generator is not configured; general recursive self-improvement is not claimed.
6. More official-platform adapters with explicit authentication and content-access capabilities, not an “all websites work” badge.

## Primary references checked October 26, 2026

Source-register IDs: [R05], [DB05], [NET01], [COL01], [COL02].

- [Rust installation](https://rust-lang.org/tools/install/) · actual local compiler 1.99.1.
- [rusqlite](https://docs.rs/rusqlite/0.41.0/rusqlite/) · pinned 0.41.0 with bundled SQLite.
- [reqwest client](https://docs.rs/reqwest/0.13.5/reqwest/blocking/struct.ClientBuilder.html) · pinned 0.13.5; blocking CLI client, not a UI-thread architecture recommendation.
- [Modrinth API overview](https://docs.modrinth.com/api/) and [project operation](https://docs.modrinth.com/api/operations/getproject/) · public metadata, canonical identifiers and provider limits.
