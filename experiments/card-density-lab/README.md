# Card-density browser experiment

The [published harness source](../../docs/card-lab/index.html) measures generated complete records, not a target application's baseline.

## Excluded first run

[Raw first run](excluded-initial-run-2026-10-26.json) is preserved but **excluded from performance conclusions**. The workload container was below the visible page fold, so its scheduling proxy did not prove that the required visible cards were ready. A full accessibility-tree inspection also timed out during the run and may have disturbed its timing. These are harness/measurement defects, not evidence of an application improvement.

Revision v2 scrolls the workload viewport fully into view before each timed sample, checks and records its bounds, and keeps full-tree automation out of timed runs. A new run is required; do not pool the excluded samples with corrected measurements.

## Excluded cached-script run

A second run loaded a stale browser-cached v1 script despite the newer page and origin files. Its [raw evidence](excluded-cached-v1-run-2026-10-26.json) identifies v1 and lacks onscreen geometry, so it is also excluded. Asset integrity checks against a separate HTTP client did not establish the browser's loaded script identity. Revision v3 uses content-addressed JS, module and CSS filenames plus an explicit loaded-harness marker. Acceptance requires the exported harness version and per-sample geometry, not just a page reload.

## Corrected visible-workload v3 measurements

Two seven-pair Chrome 155/Linux runs retained all 1,000 records and 8 KiB metadata per record, verified every DOM field, and recorded fully onscreen workload bounds. Raw [initial-render samples](initial-1000-8k-v3-2026-10-26.json) and [1% update samples](update-1000-8k-v3-2026-10-26.json).

| Work | Baseline frame-ready proxy median | Candidate median | Median per-sample maximum scroll-frame wait | Decision |
|---|---:|---:|---:|---|
| Full DOM versus containment | 2768.9 ms | 208.8 ms | 98.4 → 178.1 ms | Initial improvement but scrolling regression; stabilization required |
| Full rebuild versus keyed 1% update | 3084.2 ms | 108.9 ms | 80.2 → 72.7 ms | Promising for this generated update workload only |

Keyed update DOM work fell from 37.2 to 0.9 ms. These are scheduling proxies, not physical paint or INP; there are no images, network loads or peak-memory measurements. Incremental setup occurs outside the update timer. No target-project baseline was tested and no project recommendation was made.

The v3 long-frame/task attribution filtered by entry start time and could miss an overlapping event that began just before a sample. Those observer counts are incomplete and must not support a zero-blocking claim. V4 uses interval overlap with regression tests. This correction does not rewrite the raw v3 evidence or silently combine different harness versions.
