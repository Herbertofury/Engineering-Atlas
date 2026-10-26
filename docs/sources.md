# Primary-source register

Checked October 26, 2026. These sources document behavior; they do not establish local performance wins.

## E01

[Electron performance](https://www.electronjs.org/docs/latest/tutorial/performance) · Current documentation

Main/renderer blocking and process-work guidance. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## E02

[Electron utilityProcess](https://www.electronjs.org/docs/latest/api/utility-process) · Current documentation

Node utility process and message ports. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## E03

[Electron 45 release](https://www.electronjs.org/blog/electron-45-0) · 45.0.0; published 2026-10-21

Release-specific startup and tracing changes. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## E04

[Electron breaking changes](https://www.electronjs.org/docs/latest/breaking-changes) · 45.0 section

Version-specific API migration. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## N01

[Node worker threads](https://nodejs.org/api/worker_threads.html) · Observed v26.12.1 documentation; separate from local v24 runtime

CPU workers, async IO and versioned profiling APIs. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R01

[Rust DirEntry](https://doc.rust-lang.org/std/fs/struct.DirEntry.html) · Stable standard-library API

Windows metadata/type syscall behavior. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R02

[Tokio filesystem](https://docs.rs/tokio/latest/tokio/fs/index.html) · Observed Tokio 1.53.1 documentation

Blocking implementation and batching guidance. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R03

[Tokio spawn_blocking](https://docs.rs/tokio/latest/tokio/task/fn.spawn_blocking.html) · Observed Tokio 1.53.1 documentation

Blocking-pool bounds and scheduling. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## T01

[Tauri process model](https://v2.tauri.app/concept/process-model/) · Tauri v2 documentation

Core/webview process boundaries. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## W01

[Windows App SDK](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/) · Current platform overview

Windows-native platform candidate. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## M01

[Fabric development setup](https://docs.fabricmc.net/develop/getting-started/setting-up) · Page selector 26.2; setup text references 26.1/JDK 25

Version-selector mismatch must be resolved for each target. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## M02

[NeoForge getting started](https://docs.neoforged.net/docs/gettingstarted/) · 26.1 documentation; JDK 25

Modern target setup, not older Forge compatibility. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## M03

[Forge 1.20.1 getting started](https://docs.minecraftforge.net/en/1.20.1/gettingstarted/) · Pinned 1.20.1 documentation

Historical compatibility lane. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## A01

[Khronos glTF registry](https://registry.khronos.org/glTF/) · glTF 2.0 registry

Asset-format specification entry point. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## A02

[Godot general optimization](https://docs.godotengine.org/en/stable/tutorials/performance/general_optimization.html) · Stable documentation

Separate load time, stalls and continuous throughput. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## SEC01

[OWASP ASVS](https://asvs.owasp.org/) · 5.0.0; published 2025-05-30

Versioned security requirements. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## G01

[GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) · Current documentation

Static hosting boundary. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## G02

[GitHub Actions execution governance](https://docs.github.com/en/actions/how-tos/administer/control-workflow-execution) · Current documentation

Immutable action dependencies and policy. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## S01

[Steam authentication](https://partner.steamgames.com/doc/features/auth) · Current Steamworks documentation

OpenID identity and capability boundaries. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## ALG01

[Aho-Corasick match semantics](https://docs.rs/aho-corasick/latest/aho_corasick/enum.MatchKind.html) · Observed 1.1.5

Matching modes and overlapping behavior. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## ALG02

[Globset](https://docs.rs/globset/latest/globset/) · Current crate documentation

Compiled multi-glob matching and separator semantics. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB01

[SQLite query planner](https://sqlite.org/queryplanner.html) · Current official documentation

Indexes and query plans. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB02

[SQLite WAL](https://sqlite.org/wal.html) · Official page updated 2026-08-25

Concurrency, durability and fixed WAL-reset race. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## IO01

[Windows IO completion ports](https://learn.microsoft.com/en-us/windows/win32/fileio/i-o-completion-ports) · Current Win32 documentation

Completion queues and runnable-thread concurrency. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R04

[Rayon ThreadPoolBuilder](https://docs.rs/rayon/latest/rayon/struct.ThreadPoolBuilder.html) · Observed Rayon 1.12.0

Explicit pool configuration and lifecycle. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## OBS01

[Perfetto Trace Processor](https://perfetto.dev/docs/analysis/trace-processor) · Current documentation

Programmatic trace analysis. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.


## ARCH01

[Rust zip archive reader](https://docs.rs/zip/latest/zip/read/struct.ZipArchive.html) · 9.1.2

Metadata reuse safety, extraction boundaries and reader APIs. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## ARCH02

[libzip reference and thread safety](https://libzip.org/documentation/libzip/) · 1.12.1

Independent archive objects, synchronization and member-name semantics. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## WATCH01

[Windows ReadDirectoryChangesW](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-readdirectorychangesw) · Current Win32 documentation

Overflow detection, reconciliation and network buffer limits. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON01

[orjson official repository](https://github.com/ijl/orjson) · 3.13.0 installed from PyPI

API constraints, performance claims and official Codeberg alternative. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON02

[UltraJSON project status](https://github.com/ultrajson/ultrajson) · 6.0.0 installed from PyPI

Maintenance-only policy and migration recommendation. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON03

[Python 3.12 JSON documentation](https://docs.python.org/3.12/library/json.html) · 3.12 docs; local interpreter 3.12.14

Decode hooks, default extensions and resource caution. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON04

[simdjson official repository](https://github.com/simdjson/simdjson) · 5.0.5; released 2026-10-14

SIMD parsing candidate and benchmark methodology. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON05

[yyjson official repository](https://github.com/ibireme/yyjson) · 0.13.0; released 2026-09-08

DOM benchmark scope and limitations. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON06

[Sonic official repository](https://github.com/bytedance/sonic) · 1.15.4; released 2026-09-11

Configuration, first-hit compilation and memory caveats. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## PAPER01

[Wasure](https://arxiv.org/html/2602.05488v1) · v1; submitted 2026-02-05

Multidimensional Wasm benchmarking; not reproduced locally. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## PAPER02

[WarpL performance debugging paper](https://arxiv.org/html/2604.13693v1) · v1; ICSE 2026

Mutation-based diagnosis and bounded case evaluation; not reproduced locally. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## PAPER03

[Heavy-light incremental join maintenance](https://arxiv.org/html/2605.08397v1) · v1; submitted 2026-05-08

Theoretical join maintenance; no local performance reproduction. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## TOOL01

[Zig canonical Codeberg migration](https://ziglang.org/news/migrating-from-github-to-codeberg/) · Announcement 2025-11-26

Official canonical repository location. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## TOOL02

[Zig 0.17.0 release notes](https://ziglang.org/download/0.17.0/release-notes.html) · 0.17.0; released 2026-10-01

Build dependency tracking, incremental compilation and compatibility constraints. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## SIM01

[Bevy 0.20 release](https://bevy.org/news/bevy-0-20/) · 0.20.0; released 2026-10-08

Change summaries, schedule testing and rendering quality tradeoffs. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## SIM02

[Jolt Physics architecture](https://github.com/jrouwe/JoltPhysics/blob/master/Docs/Architecture.md) · 5.6.0 latest release observed; current master documentation

Determinism conditions and broad-phase query caveats. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## SIM03

[NVIDIA broad-phase collision detection chapter](https://developer.nvidia.com/gpugems/gpugems3/part-v-physics-simulation/chapter-32-broad-phase-collision-detection-cuda) · GPU Gems 3; historical algorithm background

Spatial subdivision and workload-dependent behavior. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## PAPER04

[RepoMod-Bench](https://arxiv.org/html/2602.22518v1) · v1; submitted 2026-02-26

Implementation-agnostic modernization tests; not reproduced locally. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## PAPER05

[Last Secure Code Benchmark](https://arxiv.org/html/2610.14766v1) · v1; submitted 2026-10-10

Separate functional/security evaluation; author results not reproduced. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## REVIEW01

[GitHub ReviewBench announcement](https://github.blog/ai-and-ml/github-copilot/reviewbench-an-open-benchmark-for-ai-code-review/) · Published 2026-10-05

Severity, precision/recall and judge-version caveats. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## SEC02

[SLSA 1.2 artifact verification](https://slsa.dev/spec/v1.2/verifying-artifacts) · Approved v1.2 specification

Trusted builder, signature, digest and expected parameters. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## N02

[Node 24 worker transfer semantics](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html) · 24.22.1, matching local runtime

ArrayBuffer ownership, structured cloning and shared-memory distinction. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB03

[SQLite EXPLAIN QUERY PLAN](https://sqlite.org/eqp.html) · Current official documentation; local SQLite 3.53.1

Diagnostic plan interpretation and unstable text format. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB04

[SQLite ANALYZE guidance](https://sqlite.org/lang_analyze.html) · Current official documentation

Planner statistics, optimize guidance and potential regressions. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.
