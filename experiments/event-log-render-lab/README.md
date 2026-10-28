# Incremental event-log rendering candidate

Created 2026-10-28. Baseline Atlas commit: `03f10eeca4c2eced6bb33d97dbdd3e695a8ae000`.

The existing real-media laboratory serializes and replaces the entire visible event-history JSON after every image/player observation. This repeats prior work as history grows. The isolated candidate formats each immutable event once and appends a text node before the closing bracket. All events, fields, ordering and final pretty-JSON text remain intact; nothing is sampled or truncated. Provider strings remain inert text. It adds DOM nodes instead of repeatedly replacing one large text node, so memory/layout tradeoffs must be measured, not assumed away.

The production media path is unchanged while this candidate is evaluated. The new [browser comparison](../../docs/media-lab/event-log-benchmark.html) uses the retained public v10 event sequence, then optional explicitly generated 8×/32× replay. Seven alternating-order pairs compare the actual prior full-history write pattern with the candidate against the same complete data. It records synchronous component work, double-rAF frame proxy, scroll waits, optional non-peak heap snapshots, DOM-node count and complete output equality. No new provider requests are made by the benchmark.

Four focused tests check every real event prefix, nested/escaped/Unicode/markup-like text, rejected serialization without partial changes, and index validation. Node DOM doubles establish logic only; real browser results are required before any performance or adoption decision. A snapshot append contract does not promise to redisplay subsequent mutation of a previously appended event; current media callbacks supply immutable scalar observation details. This is not a general mutable-object renderer.

No full-card paint, INP, peak-memory, other-project or universal ranking is established. Keep original failures and working versions. Browser observations will be added after the exact candidate build is deployed and verified.
