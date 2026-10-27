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

## Stabilize the reference without deleting information

If baseline results change while testing, retain the before/after outputs and identify whether inputs, discovered metadata or actual semantics changed. A richer ownership explanation or newly discovered warning is not timing noise to strip. Re-run against the same recorded discovery generation, or explicitly report the comparison as unresolved. Measure in-application readiness separately from automation waiting, and keep first-use discovery distinct from steady-state results. See the [benchmark contract](benchmark-format.md#mutable-discovery-is-part-of-the-workload).

## Card density and storage workloads

Card performance needs independent measurements of time until the required visible cards are usable, input/scroll latency, layout shifts, image decoding, peak memory and complete data availability. Vary both record count and bytes/fields per record. Measure cold navigation separately from revisits and incremental updates. Keep filtering, keyboard navigation, details, accessibility and full-record search working under every candidate strategy.

Compare keyed incremental DOM updates, containment, windowing and data projections against a measured baseline. A projection is acceptable only when the complete record remains available through an explicit tested path; it must not masquerade as a complete response. Offscreen rendering optimizations do not excuse missing records. Use browser frame/input instrumentation and label proxies such as a double-animation-frame wait honestly: they are not direct proof of physical pixel presentation or an INP score.

For storage, retain the same transaction boundaries and durability configuration across the comparison. Measure committed writes, reopening/readback, full payload equality and integrity, not only in-memory inserts. More data per card can shift bottlenecks from queries to serialization, transport, parsing, image decode, layout or memory. Identify the dominant stage before choosing the intervention.

General lab wins remain research candidates until they outperform a target project's actual current implementation with its requirements intact.

Primary background for these experiments: [UI01], [UI02], [DB06], [DB07]. Documented methods are not measured wins.

## Full-result serialization: isolated Atlas evidence

The [checked JSON forwarding experiment](https://github.com/Herbertofury/Engineering-Atlas/blob/main/experiments/overview-serialization-lab/README.md) removes repeated result-tree allocation without dropping fields or relying on a result cache. Naive raw forwarding weakened number, Unicode and depth checks; the repaired streaming validator retained those checks. Complete-output comparisons and qualified Linux memory readings are published. This is component evidence, not a universal method or an accepted replacement for the normal HTTP route.
