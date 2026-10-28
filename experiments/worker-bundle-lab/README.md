# Worker module-graph bundling experiment

Prepared 2026-10-28. This tests the same Atlas worker, not a new validator or a default application upgrade. Source checkpoints BUNDLE01/BUNDLE02: [esbuild 0.28.2](https://github.com/evanw/esbuild/releases/tag/v0.28.2), published August 8; [Rolldown 1.2.15](https://github.com/rolldown/rolldown/releases/tag/v1.2.15), published October 21. Both were stable latest releases when checked. Language and recency do not establish superiority.

## Exact build scope

Five content-addressed source modules total 13,810 uncompressed bytes. Both pinned tools bundle and minify that same graph into one ESM worker, preserving the complete validator, receipt/transfer modes, request checks and phase instrumentation. The esbuild output is 3,966 bytes; Rolldown output is 3,904 bytes. These are source-file bytes, not compressed transfer bytes or measured startup speed.

[Build receipt](build-receipt.json) binds every source input, tool version and output hash. The site builder refuses stale source graphs, mismatched tool versions or changed artifact hashes. It never silently rebuilds with an unpinned latest tool. Original modules remain the default and both bundles remain isolated choices.

[Six fresh-process compiler results](evidence/compilations.json) preserve all warnings and outputs. All three outputs per tool were byte-identical; relocated private installs produced the same hashes. Internal compile-time medians were 52.21 ms esbuild and 105.66 ms Rolldown for this tiny graph on Node 24.22.1. Process startup, OS caches, graph size and API initialization matter; this is not a universal bundler or language ranking. The first pair lacks separate outer process timing. A final summary-printing error occurred after all raw build data was saved; readback verified all six outputs without rerunning builds to hide it.

Tools were installed from the npm registry with exact versions, an isolated writable cache and lifecycle install scripts disabled. The original default-cache failure is retained. [Explicit npm audit](evidence/npm-audit.json) reported zero known advisories for this tool dependency tree, not whole-toolchain safety. Package locks retain registry integrity metadata. Vendor node_modules stay outside the repository and are not published or scanned as Atlas-owned research.

## Correctness before browser timing

Two differential test functions cover 29 generated protocol cases across original modules and both bundles: 87 executions. They compare all output fields and complete transferred bytes, excluding only nondeterministic execution timestamps, which are separately checked for finite ordered values. Inputs include 200 records × 64 KiB metadata; the original caller data remains unchanged. Five corruption classes across all three transports and invalid request/transport identities retain the same failures. This is bounded fixture coverage, not a formal compiler proof or cross-browser guarantee.

The browser's build-comparison mode uses the same full validation-only receipt contract in all three lanes. Each sample creates a new worker; three rounds rotate lane order so each tool occupies each position. The original records stay fully owned by the caller. Preparation and independent full-parity verification remain outside the sample timer in all lanes. Initial fetches and caching are not concealed or described as cold-cache testing. Actual runtime evidence is required separately before making any startup claim.

Reproduction: copy tools/package.json, tools/package-lock.json and tools/compile.mjs to a separate private tool directory, install locked dependencies there with npm ci --ignore-scripts, set ATLAS_BUNDLE_REPO to the Atlas checkout, and invoke the fixed compiler with esbuild or rolldown and a new output path. The output file cannot overwrite prior evidence. The compiler uses the stable rolldown/generate API, closes native resources, and uses esbuild's bundled browser ESM API without dropping checks or console output. No third-party plugins or arbitrary downloaded prototypes execute.
