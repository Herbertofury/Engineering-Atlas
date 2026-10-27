# Preserve media-event identity and provider error category

October 27, 2026. Actual public-media application repair, not a performance ranking.

The previous event constructor spread provider details after its envelope. The fatal HLS callback supplied a detail named `type`, so a `hls_error` event became `networkError` (or another provider category), losing the observation identity. A generated fixture exercising the extracted actual callback reproduces this overwrite. No live provider outage was induced.

The callback now stores the category in `error_type`. A shared constructor rejects reserved `type`/`at_ms` detail keys and invalid envelope inputs before insertion, then freezes the top-level record. Ordinary and unknown detail fields remain present; this is not deep immutability or provider-ownership validation. Event display/export still retains the complete receipt, and autoplay remains off.

[Before](before.log) retains three failing functions out of the original four checks. [After](after.log) passes those checks plus the actual-callback fixture control, including stale and nonfatal events. The [baseline callback](baseline-handler.txt) is from source commit beb354be5dd5321ab7931270329dfd37023ff3be. Full tests and build identities are retained alongside this note.

Harness v9 distinguishes repaired receipts from v8. Earlier saved receipts are not rewritten: a provider-category `type` in those logs may be affected. Browser regression and actual playback are separate from the generated fatal-error fixture. No card-density, memory, latency or other-project improvement is claimed by this correctness repair.
