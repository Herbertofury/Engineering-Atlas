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

## CODE01

[orjson Codeberg repository](https://codeberg.org/ijl/orjson) · Head bd00937c5c46ab20eb5d7fe1cfc034b906c4578f; 3.13.0

Direct browser repository/README inspection; head matches GitHub observation. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## CODE02

[Zig canonical Codeberg repository](https://codeberg.org/ziglang/zig) · Master cb6f0c25f176dbebf0c6801170c360c2c1198524 observed 2026-10-26

Direct browser metadata/README inspection; no build or full source audit. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R05

[Rust official installation](https://rust-lang.org/tools/install/) · Official installation; local compiler 1.99.1

Official Rust distribution and isolated toolchain setup. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB05

[rusqlite API](https://docs.rs/rusqlite/latest/rusqlite/) · 0.41.0 observed and pinned

Transactional Rust SQLite binding; selection is provisional. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## NET01

[reqwest blocking client configuration](https://docs.rs/reqwest/latest/reqwest/blocking/struct.ClientBuilder.html) · 0.13.5 observed and pinned

Timeout, HTTPS, redirect and TLS configuration for the bounded CLI adapter. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## COL01

[Modrinth API overview](https://docs.modrinth.com/api/) · v2.7.0/366f528 documentation observed

Public versus authenticated requests, canonical identifiers, User-Agent and provider rate limits. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## COL02

[Modrinth project operation](https://docs.modrinth.com/api/operations/getproject/) · Current v2 project operation

Single-project metadata endpoint and response fields. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## NET02

[Axum routing and state](https://docs.rs/axum/latest/axum/) · 0.8.9 observed

Rust HTTP routing and bounded local API implementation. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## R06

[Tokio runtime](https://docs.rs/tokio/latest/tokio/) · 1.54.1 observed and resolved

Async runtime with blocking work separated from executor threads. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## UI01

[Long Animation Frames working draft](https://www.w3.org/TR/long-animation-frames/) · W3C First Public Working Draft, 2026-04-28

Frame timing diagnostics; draft status and browser support limits. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## UI02

[CSS content visibility](https://web.dev/articles/content-visibility?hl=en) · Published 2020-08-05; Baseline support note 2025-09-15

Containment candidate; offscreen rendering and accessibility constraints. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB06

[SQLite synchronization modes](https://www.sqlite.org/pragma.html#pragma_synchronous) · Current official documentation

Read back configured durability and preserve commit boundaries. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## DB07

[SQLite blob/filesystem comparison](https://www.sqlite.org/fasterthanfs.html) · Historical measurements 2017; current caveats

Workload and cache limits; not a universal performance guarantee. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## ADP01

[Patreon v2 API](https://docs.patreon.com/) · Current v2 documentation; v1 retirement notice 2026-10-07

Posts scopes, pagination and access boundaries. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP02

[Afdian developer API](https://guide.afdian.com/creator/developer) · Current official creator documentation

Order/supporter API is distinct from post-media access. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP03

[YouTube IFrame player](https://developers.google.com/youtube/iframe_api_reference) · Current official player documentation

Playback events, owner restrictions and client identification. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP04

[Bilibili open platform](https://openhome.bilibili.com/doc) · Official landing page; detailed endpoint review pending

Authorized account/video capabilities; dynamic documentation limitation. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP05

[X API overview](https://docs.x.com/x-api/introduction) · Current v2 pay-per-use overview

API access and billing are separate from browser sessions. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP06

[Discord message resource](https://docs.discord.com/developers/resources/message) · Current official message schema

Permissions, attachments, embeds and expiry. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP07

[Steam Web API overview](https://partner.steamgames.com/doc/webapi_overview) · Current official documentation

Public data and authorized account capabilities. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP08

[SteamDB FAQ](https://steamdb.info/faq/) · Current FAQ reviewed 2026-10-26

Explicit prohibition on automated scraping/crawling. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP09

[CurseForge API](https://docs.curseforge.com/rest-api/) · Current official API documentation

API keys, project/file identity and pagination. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## ADP10

[Nexus GraphQL API](https://graphql.nexusmods.com/) · Experimental v2 documentation; live public query checked

Stable v1 alternative, public versus OAuth operations and typed identities. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT01

[yt-dlp release](https://github.com/yt-dlp/yt-dlp/releases/tag/2026.10.21) · 2026.10.21

Maintained video extractor candidate; not locally accepted. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT02

[gallery-dl release](https://github.com/mikf/gallery-dl/releases/tag/v1.32.18) · 1.32.18; released 2026-10-25

Canonical development moved to Codeberg; gallery candidate. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT03

[Crawlee release](https://github.com/apify/crawlee/releases/tag/v3.18.2) · 3.18.2; released 2026-09-29

Established orchestration candidate; recovery changes. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT04

[Scrapy release](https://github.com/scrapy/scrapy/releases/tag/2.19.0) · 2.19.0; released 2026-09-10

Established crawler candidate; remote-control additions not enabled. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT05

[Scrapy AutoThrottle](https://docs.scrapy.org/en/latest/topics/autothrottle.html) · 2.19.0 documentation

Bounded concurrency and error-aware throttling. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT06

[Crawlee crawler families](https://crawlee.dev/js/docs/quick-start) · 3.18 documentation

Static parser and browser-rendering lanes. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT07

[Nexus official Node SDK](https://github.com/Nexus-Mods/node-nexus-api) · Repository inspected; no latest release object

Official SDK candidate; GPL-3.0 repository metadata. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## EXT08

[HLS.js playback library](https://github.com/video-dev/hls.js/tree/v1.7.3) · 1.7.3; pinned npm bundle integrity verified

Maintained HLS playback candidate with original license and browser integrity check. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## E82

[Public media parser reference revision](https://github.com/Herbertofury/Enderloom/blob/fc55c422f93480d75604203b288a837bb87ed623/src/provider-media.js) · fc55c422f93480d75604203b288a837bb87ed623

Pinned public implementation, tested unchanged before an isolated allocation-reuse experiment; not installed-target acceptance. Evidence: primary documented. Review after 7 days or before a version-sensitive decision.

## E83

[RustSec zstd context-reuse advisory](https://rustsec.org/advisories/RUSTSEC-2026-0391.html) · Issued 2026-10-26; fixed >=0.14.3

Context reset prevents abandoned stream data crossing reused contexts; applicability must include transitive wrappers. Evidence: primary documented. Review after 7 days or before a version-sensitive decision.

## E84

[HLS.js security policy and published advisory listing](https://github.com/video-dev/hls.js/security) · Observed 2026-10-26

No published advisories shown at review; absence is not a security guarantee. Evidence: primary documented. Review after 7 days or before a version-sensitive decision.

## E85

[SQLite 3.54.1 release log](https://www.sqlite.org/releaselog/3_54_1.html) · 3.54.1; released 2026-10-16

Matches the storage-lab runtime version; no performance claim from release metadata. Evidence: primary documented. Review after 7 days or before a version-sensitive decision.

## UI03

[CSS Box Sizing Level 4 draft](https://www.w3.org/TR/2026/WD-css-sizing-4-20260904/) · Working Draft, 2026-09-04

Remembered intrinsic size and overflow semantics; draft, not a performance result. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## UI04

[TanStack Virtual core 3.19.8 source repair](https://github.com/TanStack/virtual/commit/23430040447e24bcfdd9665bd6b6c67d8fefd0ea) · virtual-core 3.19.8; released 2026-10-26

End-of-scroll calculation includes scrollMargin; source diff and upstream regression inspected, not locally installed or benchmarked. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## UI05

[Chrome guidance on complex layout interactions](https://github.com/GoogleChrome/modern-web-guidance-src/blob/main/guides/performance/interactions-in-complex-layouts/guide.md) · Official source reviewed 2026-10-26

Self-contained layout-region boundaries; hypothesis basis, not evidence that a particular grouping is faster. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## COL03

[Modrinth multiple-project operation](https://docs.modrinth.com/api/operations/getprojects/) · Official operation reviewed and live-tested 2026-10-27

JSON-array project identities and typed multi-project response; local budgets are separate from provider limits. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## PAPER06

[WCXB multi-type extraction benchmark](https://arxiv.org/html/2605.21097v1) · Preprint v1, 2026-05-20; reviewed 2026-10-27

Main-text extraction across seven types; not complete-media, authenticated-session or playback acceptance. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## UI06

[Measure Memory API draft](https://wicg.github.io/performance-measure-memory/) · Draft Community Group Report, 2021-05-28; reviewed 2026-10-27

Cross-origin-isolated estimated memory measurements; not peak process memory and not a W3C Standard. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.
