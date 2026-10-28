# Research Explorer implementation validation

This record covers the searchable research catalog and its data pipeline on October 28, 2026 UTC. It is **software validation, not a new benchmark of any catalog candidate**. The research snapshot is dated October 27 in America/Denver.

## Retained checks

- [Machine-readable record](checks.json): catalog counts, generated-asset hashes, browser observations, limitations and repaired validation failures.
- [Python suite output](python-tests.log): 166 tests passed, including source contracts, ranking evidence, snapshot ingestion and pre-existing project guards.
- [JavaScript suite output](javascript-tests.log): 145 tests passed with test isolation disabled to expose the individual cases. The normal CI command also runs the same test files.

The browser checks used the managed local preview. Search, shortlist comparison, one retained JSON measurement cohort, one ProgramBench cohort, and the community empty state were inspected. A 390-pixel iframe had a 375-pixel content viewport and a matching 375-pixel document width. This establishes the inspected responsive layout, not physical-device compatibility or performance.

## Known verification limit

The CSV and JSON export controls triggered browser downloads, but the automation download provider reported failures and did not retain synchronized files. CSV payload, filtering, cohort scope, zero/missing handling and formula safety are covered by executable tests. An actual saved-file check remains unverified in this environment; no successful download is claimed here.

## Evidence boundaries

The Explorer imports 27 historical JSON observations and eight publisher-reported observations. It introduces 16 planned experiments and zero approved community ratings. None of these software checks converts a proposed experiment, external report, or popularity count into an Atlas performance win.

See the [ranking and data contract](../../docs/research-explorer.md), [research review](../../research/2026-10-27-explorer-review.md), and [test queue](../../docs/research-test-queue.md).

## Published deployment

[Publication receipt](published-2026-10-28.json) records the merged revision, successful Linux/Windows CI and Pages jobs, and actual live-browser observations. [Live Explorer screenshot](live-explorer-2026-10-28.jpg) shows the published overview. The saved-download verification limit also occurred on the deployed HTTPS site and remains open. The separate wiki publication state is recorded independently.
