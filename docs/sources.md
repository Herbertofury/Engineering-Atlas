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

[Node worker threads](https://nodejs.org/download/release/latest/docs/api/worker_threads.html) · Observed v26.8.2 documentation

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

