# Card-density browser experiment

The [published harness source](../../docs/card-lab/index.html) measures generated complete records, not a target application's baseline.

## Excluded first run

[Raw first run](excluded-initial-run-2026-10-26.json) is preserved but **excluded from performance conclusions**. The workload container was below the visible page fold, so its scheduling proxy did not prove that the required visible cards were ready. A full accessibility-tree inspection also timed out during the run and may have disturbed its timing. These are harness/measurement defects, not evidence of an application improvement.

Revision v2 scrolls the workload viewport fully into view before each timed sample, checks and records its bounds, and keeps full-tree automation out of timed runs. A new run is required; do not pool the excluded samples with corrected measurements.
