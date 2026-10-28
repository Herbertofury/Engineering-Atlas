# Complete prepared-data verification in the card harness

2026-10-28. The working card-density harness previously checked metadata identity prefixes and lengths but did not bind every tail byte or the supplied digest before installing prepared data. The [generated reproduction](baseline.json) changes the final metadata character while retaining the original digest; the old shape validator accepts it. Historical successful timing receipts are retained, not retroactively relabeled corrupted.

Harness v12 reuses the already-tested bounded complete receiver from the receiver lab for both main-thread and worker preparation. The four-field generated schema, every metadata byte, exact serialized length and SHA-256 must pass before the dataset is installed. Encoding remains record-wise using the existing encodeInto implementation; no replacement parser, skipped validation or warm-cache shortcut is added.

Complete validation time is now reported separately and remains included in preparation request-to-ready time. This is a correctness repair with additional validation work, not a speedup claim against the unsafe baseline. Render/scroll timings retain their existing scope. The receiver laboratory and historical baseline remain unchanged.

Three integration regressions cover tail damage, well-shaped wrong digests, wrong serialized lengths, unexpected hidden fields and actual main/worker wiring. Full suite and live browser results are recorded separately. Existing input/visibility/cadence controls, cancellation and last-good receipts remain acceptance requirements. No other project is changed.
