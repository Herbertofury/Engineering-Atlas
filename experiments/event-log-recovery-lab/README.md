# Bounded event-log insertion recovery

2026-10-28. Isolated media-rendering candidate only. Site adapters, their metadata contracts, the public card fixture and the working real-media renderer are unchanged.

## Reproduced failure

The [original candidate](baseline-event-log-view.mjs) assigned a new segment to its internal state before inserting that node into the DOM. If insertion failed on the first segment or a text-size boundary, a retry could append to the detached node instead of the visible log. The count advanced while the event was missing. [Retained generated reproduction](baseline-failure.json) and [reproduction script](reproduce.mjs). This is an injected structural failure, not a claimed provider outage.

## Actual repair

The renderer now constructs the node locally, inserts it, and only then commits its segment pointer and entry count. Failed insertions leave both the visible previous content and internal state intact. No events, fields or unknown values are omitted, no retry loop is added, and no new DOM-node growth policy is introduced. Existing 64-event / 16-KiB segment boundaries and oversized-event preservation remain.

Three boundary scenarios cover first insertion, the 64-event boundary and the text-size boundary. The original bounded candidate fails two of three; the repaired candidate and existing per-event control pass all three. Existing tests still compare every prefix of the retained public event sequence, escaping/Unicode/markup-like strings, oversized events and serialization failures. Local regression: 120 Node tests.

The browser comparison now includes a separate explicit DOM recovery check and export. It uses real browser nodes with generated removal/restoration of the closing text node. The original algorithm is retained as a control, and recovery receipts cannot overwrite timing receipts. Native-browser recovery and remeasurement will be recorded separately after exact deployed build verification. The production media app is not switched to the candidate.

This is stabilization of an actual code path, not universal performance acceptance. Full-card paint, INP, peak memory and other-project adoption remain unproven. Prior failed results and the working baseline stay available for rollback.
