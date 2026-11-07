# Do not certify coerced gallery URL fields as matching

November 7, 2026. A correctness repair in the shared gallery comparator used by
Atlas Lab's local-file form and the public media workbench. The baseline is draft
PR #10 at `a75b72424f7fd291632ec75fd3ee2859c2d02aa0`; this work changes no Overview
code and does not merge or promote the existing draft stack.

## Reproduced failure

`new URL(value)` accepts more than strings. A JSON array containing a URL, or a
nested singleton array, is coerced into that URL's text. As a result, a malformed
saved project whose `url` fields were arrays and whose `raw_url` fields were nested
arrays was reported as **matching**, including in the downloadable comparison
receipt. The input hash was valid, but hashing did not establish the field types.

The [baseline receipt](baseline.json) retains five false matches through the actual
`createLocalComparison.load` and `comparisonReceipt` functions: source preview,
source original, card preview, card original, and all source URLs wrapped. The
input is the existing six-image public-source-derived Sodium excerpt with
**deliberately synthetic malformations**. These are ordinary JSON bytes, not
custom objects or a claim that Modrinth returned malformed data. The complete
wrapped-source input has SHA-256
`52f26aa2fd7872d2ac1249dd48c1159b32ada77e6ee4f84eeb90912ffc043567`.

The [candidate receipt](candidate.json) shows all five classified **unknown**.
Both receipts retain exact comparator, loader and fixture hashes, input hashes
and Node version. No provider request, account access, image fetch or upload is
performed by this reproduction.

## Contract and repair

Only primitive string URL fields proceed to the existing URL normalization and
HTTPS/CDN/credential/port checks. Unsupported values produce the existing
`unknown` result, not `matching`, `changed`, or a fabricated empty gallery.

This follows the already documented [local-comparison contract](../local-gallery-compare-lab/README.md)
and the collector's `GalleryMedia` string/optional-string fields in
[`modrinth.rs`](../../apps/atlas-lab/src/modrinth.rs). Missing original URLs remain
unknown. Valid string normalization, ordered-pair comparison and explicit empty
arrays keep their prior behavior. No response field, full input byte sequence,
license or provider policy is changed.

Explicitly coercing values with `String()` was rejected because it would preserve
the false match. Dropping malformed entries was rejected because it could certify
an incomplete gallery. Rejecting every comparison as an exception was unnecessary:
`unknown` already expresses incomplete/unsupported comparison evidence. A completed
unknown result can be retained as the latest comparison; a subsequent read failure
retains that result, without turning it into a match.

The media workbench is identified as `atlas-real-media-v15-gallery-url-contract`.
Its comparator, dependent local-file module and entry module were regenerated with
new content-addressed filenames. The current manifest and HTML reference those
files. Earlier hashed assets and the original public fixtures remain unchanged
for historical evidence. Atlas Lab serves the same comparator source through its
existing fixed module route; its app UI and Rust routes are unchanged.

## Reproduction and tests

From the repository root with Node.js and the baseline commit available:

```sh
node experiments/gallery-url-contract-lab/reproduce.mjs a75b72424f7fd291632ec75fd3ee2859c2d02aa0
node experiments/gallery-url-contract-lab/reproduce.mjs
node --test tests/gallery-url-contract.test.mjs
python scripts/build_media_lab.py --check
```

An optional second positional argument after the revision writes a new receipt.
Omit it to inspect results without replacing retained evidence. Use an empty
revision argument to select working-tree code when writing a new candidate receipt.

Six new tests cover 216 malformed JSON field/position/type combinations, actual
local-file hashing and receipt export, healthy URL normalization and order,
existing URL restrictions, matching/unknown/failed-read recovery, and the generated
content-addressed module actually imported by the workbench. These checks use
Node.js v24.22.1, not browser file selection, image decoding or playback.

## Remaining gates

This repairs one false-match condition. It does not prove image bytes, source
freshness, full project contents, complete schema validation, or target-project
performance. No native-browser execution or fresh real Rust-server run occurred
in this pass. The workspace's prior Chromium process-socket restriction was not
retried or bypassed. Separate browser, transport and full adapter acceptance gates
remain in force. No new dependency, grant, installation, automatic deployment or
change in another project is included.

Local candidate checks passed: 321 Python tests, 320 JavaScript tests with no
skips, source-register/internal-link validation, generated Explorer verification,
card/media asset identity checks, the existing synthetic benchmark fixture, and
`git diff --check`. The benchmark fixture is unrelated to the repair and makes no
speed claim. All previous content-addressed media assets and both referenced
public fixtures were independently checked unchanged.
