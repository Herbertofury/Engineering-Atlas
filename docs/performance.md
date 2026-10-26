# Substantial performance engineering

**Goal:** reduce the user's actual time to a complete, correct outcome. Not merely a different loading screen.

## 1. Define the measured journey

Record input event → usable result → fully verified result → durable save where relevant. Break the trace into queue wait, IO, parsing, matching, hashing, IPC/serialization, rendering and commit time. Measure tail latency, not only average throughput. Test realistic small, typical and large workloads on target hardware.

## 2. Remove expensive work without removing required work

- Replace repeated linear owner/dependency searches with a prebuilt index when profiles show repeated matching.
- Parse each required archive index once per scan rather than reopening it for each candidate path.
- Share identical in-flight requests while preserving cancellation ownership and failure reporting.
- Batch small IO/IPC operations where per-call overhead dominates.
- Bound parallel work and queue memory. More workers can worsen storage contention and UI responsiveness.
- Keep expensive parsing/analysis out of the UI-critical process. Distinguish CPU-bound work from asynchronous IO. [E01](sources.md#e01)[N01](sources.md#n01)
- Use incremental computation with explicit invalidation, and verify the complete output against a full baseline. Cached display must be labeled when not yet revalidated.

## 3. Establish causality

Use paired baseline/candidate runs in alternating or randomized order. Keep the corpus, environment, correctness contract and condition identical. Record concurrent load and thermal/storage conditions. A cold-versus-warm comparison is not a code speedup. Separate profiler overhead from normal runtime.

## 4. Accept an improvement

Define the task-specific target before looking at results. Report absolute time saved, relative change, p50/p95, memory/IO, output equivalence and regressions. A single fast run is not a general claim. A faster first result with unchanged completion time is a responsiveness improvement, not full completion acceleration.

Keep separate results for cold, warm, incremental, cancellation/restart and error paths. Do not normalize away warnings, missing records, source identities, ordering that matters, confidence or correctness-relevant values. Only documented nonsemantic fields may be excluded from comparison.

## 5. Current-source caution

Node workers are appropriate for CPU-heavy JavaScript; its documentation warns that asynchronous IO need not benefit from workers. Tokio's filesystem facade uses blocking work internally and recommends batching. Use the right mechanism for the measured hotspot rather than renaming everything async. [N01](sources.md#n01)[R02](sources.md#r02)
