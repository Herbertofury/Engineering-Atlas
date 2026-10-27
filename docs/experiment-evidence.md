# Experiment evidence directory

Updated 2026-10-27. Follow each study's source commit, harness identity, raw
results and limitations. A working demo, upstream claim or passing fixture is
not a general recommendation or approval to change another project.

## Interactive laboratories

- [Card density laboratory](https://herbertofury.github.io/Engineering-Atlas/card-lab/): generated records, complete-field comparisons and separately measured preparation/rendering. Not a target application's performance test.
- [Real media laboratory](https://herbertofury.github.io/Engineering-Atlas/media-lab/): dated public-source cards, explicit image/player loading, autoplay off. Player-ready and actually playing are separate evidence states.
- [Rust application prototype](../apps/atlas-lab/README.md): local-only collection queue, durable snapshots and bounded experiments. This link is source/documentation, not a hosted authenticated service or finished installer.

## Collection and complete records

| Study | Evidence available | Important boundary |
|---|---|---|
| [Public project batching](../experiments/modrinth-batch-lab/README.md) | Real API comparison, explicit missing IDs, atomic snapshots | Fewer requests; timing mixed, not universal speedup |
| [Long-description retention](../experiments/body-projection-lab/README.md) | Exact body text and previous fields retained; reopen checks | More data costs additional parsing; linked media not collected automatically |
| [Queued version collection](../experiments/version-collection-queue-lab/README.md) | 32 real HTTP checks: collect → exact durable snapshot → fixed experiment; 47 runner regressions | Native-browser interaction unverified; no downloads or speed claim |
| [Version/file metadata](../experiments/modrinth-version-lab/README.md) | Three real public records; original JSON and unknown fields survive reopen | Original CLI study; queued collection evaluated separately below; file links/hashes remain metadata |
| [Collection diagnostics](../experiments/collection-diagnostics-lab/worker-http-2026-10-27.json) | Safe error categories and actual loopback checks | No private URL, credential or response-body logging |
| [Real media](../experiments/real-media-lab/README.md) | Source-owned galleries, official player and Steam trailer evidence | Selected dated snapshots, not exhaustive or authenticated platform coverage |

## Performance and correctness

| Study | Evidence available | Decision boundary |
|---|---|---|
| [Card density and preparation](../experiments/card-density-lab/README.md) | Complete generated data, paired render proxies, scroll waits, worker costs, cancellation receipts | Worker remains optional; no target adoption or peak-memory claim |
| [Queue dispatch](../experiments/queue-wakeup-lab/README.md) | Actual loopback queue delay comparison and provider-pacing repair | Dispatch latency is not provider/network speed |
| [HTTP overview serialization](../experiments/overview-http-lab/README.md) | Actual HTTP comparisons, snapshot-coherence repair, retained regression evidence | Normal route gets correctness repair; raw serializer remains isolated |
| [Exact version-validation candidate](../experiments/version-validation-lab/README.md) | Actual Atlas parser baseline, three real responses, complete payload/persistence checks and allocation evidence | Isolated component win; default collector and other projects unchanged |
| [Rust parser stabilization](../experiments/rust-json-parser-lab/README.md) | Six real public inputs, all failed Unicode cases, source backport, accurate-reference diagnosis | Mixed speed and incompatible integer behavior; no app dependency changed |
| [HTML image extraction](../experiments/html-image-parser-lab/README.md) | Differential fixtures and parser repairs | No complete provider or target-application acceptance |
| [Python JSON](../experiments/json-lab/README.md) | Generated-corpus timings and adversarial numeric/Unicode differences | Runtime packaging and target workload remain separate gates |
| [Storage](../experiments/rust-storage-lab/README.md) | Configured durable writes, readback and complete records | Do not compare different durability contracts or infer hardware power-loss survival |

## Recovery and the experimentation engine

- [Media recovery](../experiments/media-recovery-lab/README.md): retained rejected-promise failure, explicit retry repair, actual playback-state discrepancy and verification status.
- [Saved-record runner](../experiments/saved-version-runner-lab/README.md): actual stored-input comparisons, build/source fingerprints, partial samples and explicit no-promotion gates.
- [Bounded runner](../experiments/bounded-runner-lab/README.md): fixed experiments, budgets, cancellation and retained partial results. Not general autonomous self-modification.
- [Checked raw JSON](../experiments/overview-serialization-lab/README.md): naive forwarding failures, strict validation repair and isolated measurements.

## How to use the directory

1. Identify the required data, correctness, access and durability contract.
2. Check whether evidence is generated, fixture-tested, real public, authenticated,
   player-ready or actually playing. Never substitute one for another.
3. Read failed cases, tail regressions and missing measurements before ranking.
4. Reproduce on the actual target implementation before recommending adoption.
5. Keep source-owned text, private fixtures and accounts out of public evidence;
   retain public hashes/counts and authorized local raw data where appropriate.

[Research method](research-method.md) · [Source register](sources.md) ·
[Adapter directory](adapters/README.md) · [Scoped recommendations](ranked-recommendations.md)

## Additional media lifecycle regression

[HLS loader cleanup](../experiments/hls-recovery-lab/README.md) reproduces stale-ready events after a failed timeout and repairs timer/script/handler cleanup. Four before failures become passing fixture checks; real playback and served-asset checks remain separate evidence. No collection or performance ranking is implied.

## Lossless storage density

[Compressed snapshot component](../experiments/compressed-snapshot-lab/README.md) compares raw BLOBs with per-record and reused-context Zstd under identical FULL commit boundaries. Six actual public records plus explicitly generated replay data retain every byte. Compression saves space but loses end-to-end latency versus raw storage; context reuse improves only parts of the compression lane. No default migration or project recommendation follows.

## Official Bilibili player

[Public official embed lane](../experiments/bilibili-player-lab/README.md) preserves the original four cards and adds one provider-documented media example. Real sandboxed iframe play/pause and reload/unload passed with autoplay off; application events intentionally report only frame lifecycle, not cross-origin playback. No authenticated or full-post collection claim.

## Preview lifecycle recovery

[Image preview retry and cleanup](../experiments/preview-recovery-lab/README.md) repairs settled timers, one-shot failure handling and early-click gating. A real 23-element batch decoded 22; explicit retry attempted only the remaining failed thumbnail, which stayed unavailable. Previous success and failure evidence were preserved; no universal recovery or speedup claim.

## Advisory and representation eligibility checks

- [Pinned dependency advisory checks](../experiments/dependency-audit-lab/README.md): freshly fetched database, clean worktree, exact remote lock hashes and zero known matches in three scoped lockfiles. Not a whole-system security clearance.
- [Representation contract probe](../experiments/representation-contract-lab/README.md): independently written exact-rational cases expose a positive-threshold fidelity boundary. Not a paper implementation, performance reproduction or target adoption result.
