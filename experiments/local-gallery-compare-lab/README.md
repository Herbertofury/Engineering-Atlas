# Local Modrinth gallery comparison candidate

2026-11-05. This isolated Atlas media-workbench candidate lets a user choose a local Modrinth project JSON file and compare ordered gallery preview/original URL pairs with a retained card. It does not fetch the provider, upload the selected file, decode images, establish fresh source state, or claim full project/media completeness. A canonical ID match is required. Missing/unsupported data reports unknown; changed pairs report changed; results remain accessible after later failures or superseded reads. The selected file is limited to 2 MiB and its read bytes are hashed. No file path or contents are recorded in the event log.

## Reuse and scope

Atlas already has a bounded Modrinth client with an identifying User-Agent and a locally retained, hash-receipted archive endpoint. This UI candidate does not yet connect to that collector: a user explicitly selects a saved JSON file. The optional test excerpt contains six public Sodium gallery URL pairs from a transformed web-readable API response, not original HTTP bytes. The existing public card remains unchanged. Source: https://api.modrinth.com/v2/project/AANobbMI ; API usage and User-Agent rules: https://docs.modrinth.com/api/ .

## Evidence

- Exact PR #8 head `990447b5f82b51d4a77f2d1c404836f3781e485f`: 21 build input blobs verified before edits. Existing media source blob `963a73bd32cd7f3a2d2b190e12d000c391a6aca3`; template blob `1c85a11563e98ec957e5109a669ea80591e125cc`.
- Twelve focused Node tests cover a public-source-derived excerpt, changed and missing data, identity, invalid/oversized input, retained last result, cancel/supersession and stale read/hash ordering. A generated-module smoke test verifies all 20 manifest hashes and six URL-pair matches in Node.
- A 288-test reconstructed older source tree passed after updating the exact harness identity expectation; this is not an exact full-head suite. The first reconstruction had three test failures caused by handler placement interfering with a YouTube test's source extraction. Moving handlers after `render` restored those tests; no test was disabled. A later expected harness-version assertion failed until updated to v14. Prior errors and raw results remain in the private retained experiment archive.
- The exact media build inputs were regenerated and `build_media_lab.py --check` passed locally. No full repository, real browser, screen reader, Windows/macOS, actual image decode or playback, live collector integration, deployment or loaded served-asset check has run. This is a draft candidate, not a speed ranking or a recommendation for another project.

## Required before promotion

Run the exact branch's complete CI; test actual browsers with file selection, keyboard/screen reader and race/cancel interactions; verify all generated asset URLs, hashes and loaded harness identity after deployment; test provider/source receipt and last-good integration without bypassing Modrinth's User-Agent and rate-limit requirements; and verify behavior with actual complete provider responses, not the excerpt alone. Preserve all failed evidence and prior assets.
