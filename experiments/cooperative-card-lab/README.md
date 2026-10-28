# Cooperative complete-card construction candidate

2026-10-28. Scope: the existing Atlas card-density experiment, not another project's renderer. This adds an explicit comparison operation; earlier operations and the default remain unchanged.

## Hypothesis and implementation

Split detached DOM creation into cooperative slices to let the browser handle other tasks between slices, while constructing every card and metadata field. Compare against synchronous creation with the **same metadata-only containment CSS**, data, final DOM and insertion behavior. Both lanes validate every prepared byte/digest before rendering. Both commit the complete new DOM only after construction; no partial card dataset is called complete.

The candidate reuses the baseline card constructor, full receiver and pairing/last-good checks. It calls native `scheduler.yield()` after a creation slice reaches 4 ms. This is a target budget, not preemption: one expensive record can exceed it. Measured maximum creation slice, yield count and final DOM commit time are retained. Creation/insertion elapsed time includes waiting across yields, not just CPU work. It can regress total latency or memory and is not automatically preferred.

Source [SCHEDY01](../../docs/sources.md#schedy01) is a Draft Community Group Report, not a W3C Standard. Unsupported browsers fail this explicit lane rather than silently switching to another scheduler. Tests cover exact identities/order, partial cancellation, oversized records, task failures, reversed clocks, pairing, unchanged strategy names and delayed-input corrections to last-good receipts. The shared receiver-lab module graph is unchanged.

The existing browser gates still require foreground focus, stable empty-frame cadence, complete output verification and retained failed evidence. Double-rAF and scroll waits are proxies, not physical paint or INP. Peak memory is not measured by this lane. Generated workloads do not establish target-project adoption; actual browser measurements are pending.

## First actual browser results: not accepted

[Sanitized measured summary](browser-summary.json). At 1,000 × 8-KiB records, seven pairs had frame-ready proxy medians 402.2 / 334.0 ms, but candidate construction elapsed time and scroll maxima regressed. A candidate final DOM commit reached 699 ms. At 1,000 × 64-KiB records, three pairs regressed from 398.8 to 582.6 ms frame-ready proxy. All 20 samples retained full output and passed cadence checks. A dense-run automation status read timed out; the completed receipt was recovered without changing protocol settings. Full traces stay private.

The failed acceptance result remains retained. Creation slices alone do not bound the final insertion or later layout. GC or specific engine internals have not been established as the cause.

## Container-commit stabilization experiment

V14 adds a separate operation, preserving the original cooperative candidate. It constructs the same complete fragment and replaces the unmanaged `#cards` container instead of replacing its children. The outer scroll viewport remains unchanged. [DOMREPL01](../../docs/source-dom-replacement.md) establishes the distinct algorithms, not a performance advantage. This is a hypothesis targeting the measured commit stage.

The change is restricted to this listener-free experimental host. Arbitrary application event listeners, object references and state on a container do not survive cloning, so it is not a generic recommendation. Card attributes, text, identities, complete metadata, pairing and last-good evidence still require exact checks. Failed insertion retains the old host; no partial fragment is published. The default operation stays unchanged. Native comparison results are pending.
