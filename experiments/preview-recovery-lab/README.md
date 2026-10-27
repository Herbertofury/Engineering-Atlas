# Preview decode lifecycle and explicit retry

2026-10-27. This repairs the existing public-media workbench, not a claim of faster complete adapters or fewer required fields.

## Reproduced baseline failures

The [retained v7 handler](baseline-preview-handler.mjs) creates a timeout for every decode but never clears it after success/failure. Its one-shot loaded flag also prevents retrying a failed preview. In a separate generated fixture, clicking before metadata arrived consumes the only load attempt, leaving later images unrequested. These are actual-handler VM reproductions, not observed provider outages.

## Implementation

A bounded four-worker loader now clears settled timers, distinguishes rejection even without an Error object, ignores late decode completion after timeout, and keeps explicit per-image attempt state. Retry failed previews attempts only failed/unattempted entries, preserving previously decoded images and source references. There is no automatic retry loop. Progress counters update in constant time instead of rescanning every entry per event. Metadata must validate/render before the initial button becomes enabled.

Observer failures are counted separately rather than mislabeling a successfully decoded image as failed. Failure records remain in the exported history. The complete five-card fixture, provider binding, gallery order, player routes and autoplay defaults are unchanged. No URL cache-busting, session export or image-quality reduction is introduced.

Ten [focused fixtures](../../tests/preview-loader.test.mjs) cover baseline timer/retry/early-click failures, settled cleanup, repeated failure/recovery counters, late completion, concurrency bounds, rejection without an Error, and observer failures. A timeout stops waiting; it does not prove the browser cancelled underlying network work. This is not an exact heap measurement or end-to-end speed ranking.

Native public-image results and exact deployed asset identities will be recorded separately. Fixture recovery is not proof that a specific provider outage recovers in the live browser. Last-good media and earlier receipts remain available.
