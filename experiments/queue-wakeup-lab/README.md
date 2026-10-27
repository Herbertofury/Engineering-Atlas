# Atlas queue wake-up comparison

2026-10-27. Actual Atlas loopback HTTP jobs, not another project's synthetic proxy. Baseline source: `519c249690396e53f14e23dbf9daac00d9e1feaa` (runner implementation unchanged from `f06dcb9`). Binary hashes and all 20 raw job receipts are retained.

## Implementation

Replace unconditional one-second sleeps after each claimed job with immediate durable-queue draining and a capacity-one notification channel. Successful enqueue sends a nonblocking wake token; a full buffer coalesces notifications rather than blocking HTTP. The worker still scans on a one-second idle timeout for external writes and expired leases. Shutdown signals both the stop flag and wake channel. Queue transactions, full result handling, claim fences, origin/host protections and provider cooldowns are unchanged.

This is event-driven scheduling, not shortening provider rate limits or skipping work. Sources: WAKE01, WAKE02, official Rust 1.99.1 bounded-channel and nonblocking-send documentation.

## Measurement

Four fresh server/database sessions in baseline/candidate/candidate/baseline order; five jobs per session. Same fixed algorithm workload, 15 pairs and 10,000 stress cases per job. Controlled varied submit delays expose polling-phase sensitivity.

| Metric (10 observations per implementation) | Baseline median / maximum | Candidate median / maximum |
|---|---:|---:|
| Durable queued-to-claimed event time | 745.5 / 925 ms | 0.5 / 1 ms |
| Request-to-complete response | 1547.160 / 1760.296 ms | 753.208 / 814.859 ms |

Event timestamps have millisecond resolution: zero does not mean zero work or zero latency. Response measurement includes 20-ms polling granularity. All jobs completed full correctness/stress work; reopened SQLite records exactly matched returned results and all four integrity checks passed. The separate 23-check guard/cancellation test passed after the change, retaining the cancelled partial run and previous success. Unit/integration tests and Clippy passed.

## Limits and rollback

This demonstrates removal of avoidable Atlas dispatch delay on one Linux host, not faster extraction, rendering, storage or the underlying algorithm. Peak memory, browser input responsiveness and provider throughput are not measured by this pass. Existing algorithm promotion remains Incomplete. No other project's code or TODO was changed. Previous source and binary remain retained; rollback is the isolated server scheduling diff.

To repeat, build the baseline and candidate from their identified source revisions using the pinned official toolchain, then run `compare_http.py --baseline /path/to/baseline --candidate /path/to/candidate --output NEW_DIRECTORY`. Only use locally built Atlas binaries. The output directory must not exist; port 41379 must be unused. No provider requests, credentials or downloaded prototypes are involved. Stop competing timed benchmarks while measuring.
