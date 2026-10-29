# Saved archive stream retention repair

October 29, 2026. Baseline: Atlas `0f03be4d33c4aaf10e2131096e3c6776fb74e1f2`.

The actual saved-response reader enforced a two-MiB payload limit but retained an array entry and typed-array object for every transport chunk, including empty chunks. Its retained-object count therefore was not bounded by its byte budget. This is a local reader hardening finding, not evidence of an exploited remote vulnerability.

The reader now copies accepted chunks immediately into a geometrically growing buffer capped at two MiB, skips allocating for empty chunks, and returns an exact-size byte array. During growth, old and new byte buffers can coexist; garbage collection, fetch internals, hashing and text decoding still contribute to process memory. This is not a two-MiB total-process cap. Hash, original bytes, UTF-8, generation, identity, length, cancellation and last-good checks remain unchanged. Default timeout remains cooperative with the browser event loop.

A retained baseline module and `probe.mjs` run 262,144 generated one-byte chunks through the actual loader in a fresh Node process. Three baseline/current pairs retained identical complete output hashes. Raw observations in [results](results.json) show reduced sampled heap and peak process RSS for this pathological stream only. This is not live provider, browser, whole-app performance, or grounds for another project's recommendation. Small responses can now reserve up to a 16-KiB initial buffer; no across-workload speed claim is made.

The added tests include empty/tiny chunks, a producer that reuses its one-byte array, exact two-MiB acceptance, and overflow cancellation. The reused-array case fails baseline hash verification and passes after immediate copying; it is a generated producer case, not evidence that native Fetch reuses buffers. The baseline failure was retained privately. Existing last-good and cancellation tests remain mandatory.

Reproduce with `node probe.mjs baseline` and `node probe.mjs current`, each in a fresh process, from this directory. Run `node --test tests/archive-view.test.mjs` from the repository root. Preserve failures and verify the recorded module hashes when comparing these observations. No dependencies, provider requests or credentials are added.

Final checks: 227 Python tests, 211 Node tests, 127 Rust unit tests and eight Rust integration tests passed. The rebuilt release binary passed 73 existing local HTTP checks and eight actual JavaScript-reader checks with retained public responses. [HTTP receipt](http-receipt.json) and [verification](verification.json) retain exact scope and binary/module identities. Browser-loaded identity and visual interaction remain unverified.
