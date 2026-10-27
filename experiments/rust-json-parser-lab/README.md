# Rust JSON parser stabilization lane · 2026-10-27

Sources: SIMD01, SIMD02, JSON09. **Not promoted.** Application dependencies,
working collectors and other projects are unchanged. This is a bounded
component experiment and a specific source backport, not autonomous general
self-modification or a complete security assessment.

## Baseline, candidate and data

Six already-authorized public Modrinth project/version responses, 962–12,840
bytes, remain local. Only hashes, byte counts, timings and generated failure
inputs are published. No changelogs or private account data are republished.

Baseline: serde_json 1.0.154 Value parsing. Candidate: official crates.io
simd-json 0.18.1 with default features, including runtime CPU detection. A fresh
input copy is inside every candidate timer because parsing mutates its buffer.
Each result materializes the complete JSON Value; no fields are skipped. There
are 24 alternating-order pairs of 100 parses per fixture; four warmup pairs are
retained but excluded from summaries. Source, registry checksum, binary and
harness hashes are recorded in [provenance](provenance-2026-10-27.json).

Resource limits: at most eight local fixtures, 2 MiB each, cooperative 45-second
run budget, 10,000 deterministic generated stress cases, all 65,536 individual
BMP escape values and 32 boundary surrogate-pair cases. Budget exhaustion retains
partial results. Read/size preflight failures occur before measurements begin.

## Failures and diagnosis

The released candidate accepted a lone high surrogate as U+0000. Exhaustive
single-escape checks found 1,024 discrepancies; boundary pairs found eight.
The upstream already fixed this on October 25 (SIMD02), with a subsequent invalid
hex/range correction at commit 916833530bd562a3dccb5aa4da85d49b23dfa40b. Atlas
backported only that decoder logic into an isolated copy of the released crate.
The same exhaustive checks then had zero discrepancies. This is a real decoder
repair, not a wrapper that skips malformed records or replaces invalid data.

There were also 484 floating-point differences in 10,000 generated cases.
Independent 100-digit Decimal distance analysis found the candidate closer in
all 484 cases, not the baseline. A separately labeled reference build enables
serde_json's float_roundtrip feature; those stress differences become zero.
This does not retroactively turn mismatching runs into passes, and it is not
credited as an algorithmic speed improvement. All original failure outputs remain.

One compatibility difference remains: 18446744073709551617 is rejected by the
candidate but rounded by the ordinary Value reference. Neither behavior is exact
arbitrary-integer preservation. No lossy big-int-as-float option was enabled to
make a comparison pass. Atlas's version collector separately retains original
raw JSON bytes; this candidate has not replaced its validation path.

## Scoped performance result

In the final accurate-reference run, candidate medians including copying won on
three inputs and lost on three. Microseconds per parse, baseline → candidate:

| Public response | Bytes | Baseline | Candidate with copy |
|---|---:|---:|---:|
| Sodium project | 12,840 | 52.218 | 47.146 |
| Lithium project | 6,200 | 26.952 | 29.162 |
| Iris project | 7,267 | 44.251 | 38.856 |
| Iris version | 962 | 4.735 | 6.202 |
| Sodium version | 1,894 | 5.174 | 4.653 |
| Lithium version | 1,600 | 4.441 | 5.116 |

All six real-response Values matched in every timed pair. Process-to-process
timings varied materially, so do not infer the patch's cost from differences
between separate runs. There is no universal winner, accepted migration,
end-to-end adapter speedup, p95/peak-memory claim or cross-platform acceptance.
The repair covers one decoder, not all newer upstream changes or unsafe-code
paths. Other upstream changes and full sanitizer/platform testing remain open.

## Reproduce without changing the app

Build this standalone manifest with cargo --locked; its lock is separate from
the application. Supply one to eight local, authorized public response files to
the binary. Use analyze.py on the result JSON. prepare_backport.py takes the exact
official 0.18.1 registry source directory and a new destination, checks provenance
and source hashes, preserves upstream license files and applies the included
patch. It prepares repaired and accurate-reference runners without downloading,
compiling, modifying the app or overwriting an existing directory. Build those
runners offline once to update the copied path-dependency lock, then use --locked.

The included patch is derived from upstream simd-json under its Apache-2.0 OR MIT
license; the unchanged upstream MIT notice is included. No unrecognized prototype
was run. Clippy and release builds passed for all three final configurations;
this is not a claim that the full upstream test suite ran.

## Evidence files

- original-2026-10-27.json: released candidate, including all failed escape cases.
- repaired-2026-10-27.json: decoder backport, original reference behavior retained.
- accurate-reference-2026-10-27.json: decoder backport plus separately identified precise-float reference.
- Matching summary files and provenance identify the exact builds and corpus.
- Earlier exploratory outputs and failed build/lint logs remain locally retained,
  not pooled into the final comparison.
