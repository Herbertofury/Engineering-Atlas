# Run-scoped browser observation retention

2026-10-28; baseline `e1400186505647d8eea4d066982aac76d154d69d`.

The actual card-lab PerformanceObserver callbacks retained every delivered long-task/animation/input record, including idle activity before any run and after the measured window. Output filtering later hid those idle records but did not release the growing arrays until another run started. This is unnecessary retained state, not evidence that all browser memory grows without limit.

The repair reuses the existing overlap rule before inserting a record. Every delivered record overlapping the active or completed run remains intact, including frames beginning before the window and callbacks delivered late. Idle observations outside the run are not benchmark evidence and no longer accumulate. Existing sample and input filters, workload generation, complete card data, render strategies and completed-run retention remain unchanged. There is no arbitrary cap or sampling of in-scope observations.

[Actual callback replay](run.mjs) executes the preserved baseline and repaired callback bodies with generated delivery fixtures. For each callback family, 100,003 records were formerly retained before any run; the new version retains zero. Against a completed window it retains exactly the three overlapping records, byte-equivalent to the baseline's own output filter. [Raw results](results.json) preserve both outcomes. This measures retained record counts, not real browser heap bytes, peak memory or a speedup. No third-party prototype or provider request is involved.

Three focused unit tests cover idle growth, overlap/late delivery and absent/invalid windows. Full local regressions and content-addressed asset checks are retained. The browser harness becomes `atlas-card-density-v8-scoped-observations`; live workload and exported-receipt checks remain separately recorded. PerformanceObserver delivery itself is browser-defined, and this does not fix every possible delayed-export timing issue or turn Event Timing into a complete INP score.

No recommendation is made to another project. Preserve the baseline source, old assets and existing completed evidence.
