# Primary-source register

Updated through October 27, 2026. Entries retain their individual observed-version and review context; this is not a claim that every source was freshly rechecked today. These sources document behavior; they do not establish local performance wins.

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

[Nexus GraphQL API](https://graphql.nexusmods.com/) · Experimental v2 docs rechecked; prior public query evidence retained

Stable v1 alternative; public versus OAuth operations; game/mod identity and separate media union pagination Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

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

[Nexus official Node SDK](https://github.com/Nexus-Mods/node-nexus-api) · package 1.7.3; source c5eda4a46cafb5dc8000ed2a7986b22132625e2e (2026-10-07)

Official SDK candidate; package declares LGPL-3.0 while LICENSE.md contains GPLv3. Licensing ambiguity requires resolution before reuse; partial GraphQL result handling needs an explicit contract. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

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

## JSON07

[serde_json RawValue checked API](https://docs.rs/serde_json/latest/serde_json/value/struct.RawValue.html) · 1.0.154; reviewed 2026-10-27

Checked byte forwarding avoids building a value tree; naive validation differs from Value, reproduced locally. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## JSON08

[Serde custom Deserialize visitor](https://serde.rs/impl-deserialize.html) · Official visitor model reviewed 2026-10-27

Streaming validation through deserialize_any; not a substitute for differential tests. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## MEM01

[Linux process status memory accounting](https://man7.org/linux/man-pages/man5/proc_pid_status.5.html) · Manual reviewed 2026-10-27

VmHWM reports resident high-water usage but is explicitly documented as inaccurate; qualify measurements. Evidence: primary documented. Review after 30 days or before a version-sensitive decision.

## HTML01

[parse5 and SAX parser upstream](https://github.com/inikulin/parse5/releases/tag/v8.0.1) · parse5 8.0.1 and SAX 8.0.0 installed from official npm; reviewed 2026-10-27

Spec-focused upstream parser used as a scoped image-token reference; only local fixtures are accepted here. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## HTML02

[htmlparser2 12.0.0 release](https://github.com/fb55/htmlparser2/releases/tag/v12.0.0) · 12.0.0; released 2026-03-20; reviewed 2026-10-27

Maintained callback parser; raw-text and context fixes do not imply universal spec conformance. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## HTML03

[WHATWG HTML parsing rules](https://html.spec.whatwg.org/multipage/parsing.html) · Living Standard updated 2026-10-26; reviewed 2026-10-27

Input CR normalization precedes tokenization; NULL treatment is context dependent, including attribute replacement. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## OBS02

[Node performance GC diagnostics](https://nodejs.org/docs/latest-v24.x/api/perf_hooks.html) · Node 24.22.1 observed and used

Passive GC detail observations and timings; instrumentation and shared heap are not per-parser peak memory. Evidence: primary documented. Review after 14 days or before a version-sensitive decision.

## LIVE01

[LiveWeb-IE paper](https://arxiv.org/html/2603.13773v1) · v1, submitted 2026-03-14; ICLR 2026

Live-site methodology, limitations and latency tradeoffs; not locally benchmarked Evidence: primary documented. Reviewed 2026-10-27.

## LIVE02

[LiveWeb-IE official dataset and terms](https://github.com/sbY99/LiveWeb-IE) · README observed 2026-10-27

Non-commercial research restriction; no dataset downloaded or executed Evidence: primary documented. Reviewed 2026-10-27.

## WAKE01

[Rust bounded synchronous channel](https://doc.rust-lang.org/std/sync/mpsc/fn.sync_channel.html) · Rust 1.99.1

Bounded capacity and nonblocking send; local queue experiment is separate evidence Evidence: primary documented. Reviewed 2026-10-27.

## WAKE02

[Rust nonblocking channel send](https://doc.rust-lang.org/std/sync/mpsc/struct.SyncSender.html#method.try_send) · Rust 1.99.1

Bounded capacity and nonblocking send; local queue experiment is separate evidence Evidence: primary documented. Reviewed 2026-10-27.

## BROTLI01

[Brotli Python package advisory](https://github.com/advisories/GHSA-9v8h-qqgm-4m35) · Reviewed advisory updated 2026-10-23

Exact dependency scope and safe error categories; not a full-system audit Evidence: primary documented. Reviewed 2026-10-27.

## CERTIFI01

[certifi compromised intermediate root advisory](https://github.com/advisories/GHSA-6q48-6c7w-9gw2) · Reviewed advisory updated 2026-10-26

Exact dependency scope and safe error categories; not a full-system audit Evidence: primary documented. Reviewed 2026-10-27.

## NET03

[reqwest safe error inspection](https://docs.rs/reqwest/0.13.5/reqwest/struct.Error.html) · 0.13.5

Request error category inspection without emitting attached URLs Evidence: primary documented. Reviewed 2026-10-27.

## ISOL01

[SQLite isolation and read snapshots](https://www.sqlite.org/isolation.html) · Official isolation documentation; checked 2026-10-27

Multiple queries need one read transaction for one response snapshot Evidence: primary documented. Reviewed 2026-10-27.

## ISOL02

[rusqlite transaction source](https://github.com/rusqlite/rusqlite/blob/a60e76b5e86ee60442213efe79758a6c2ca8cf3d/src/transaction.rs) · 0.41.0, exact registry and release tag commit

DEFERRED transaction and runtime nested-transaction checks; JSON validation is separate Evidence: primary documented. Reviewed 2026-10-27.

## UI07

[Event Timing API working draft](https://www.w3.org/TR/2026/WD-event-timing-20261013/) · W3C Working Draft 2026-10-13

Trusted event types, observation thresholds and timing boundaries; not a complete INP score Evidence: primary documented. Reviewed 2026-10-27.

## UI08

[MDN Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) · Living documentation reviewed 2026-10-27

Dedicated worker execution and messaging; startup and clone cost must be measured rather than assumed beneficial. Evidence: primary documented. Reviewed 2026-10-27.

## UI09

[MDN structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) · Living documentation reviewed 2026-10-27

Plain records clone; DOM, functions and class metadata do not have general lossless clone semantics. Evidence: primary documented. Reviewed 2026-10-27.

## COL04

[Modrinth multiple-version operation](https://docs.modrinth.com/api/operations/getversions/) · v2 official API reviewed 2026-10-27

Version files, hashes, dependencies and compatibility fields; metadata only is not file verification or authorization to execute attachments. Evidence: primary documented. Reviewed 2026-10-27.

## SIMD01

[simd-json released source](https://github.com/simd-lite/simd-json/tree/61d649d13fae83ac6d9f587863696be2741f5b8b) · 0.18.1 published source; registry artifact verified

Default runtime SIMD detection; destructive input parsing requires counted copying for retained source bytes. Reviewed 2026-10-27.

## SIMD02

[Upstream Unicode surrogate correction](https://github.com/simd-lite/simd-json/commit/ff8f5c8bb75dfc56803321c2f5a92656c7de842f) · Fix committed 2026-10-25; not in tested 0.18.1 release

Missing low surrogate must return an error, not U+0000; isolated backport evaluated without application promotion. Reviewed 2026-10-27.

## JSON09

[serde_json precise-float feature contract](https://github.com/serde-rs/json/blob/v1.0.154/Cargo.toml) · 1.0.154 pinned

float_roundtrip and arbitrary_precision address different contracts; a reference parser can itself be less accurate. Reviewed 2026-10-27.

## MEM02

[Rust GlobalAlloc contracts and measurement limits](https://doc.rust-lang.org/std/alloc/trait.GlobalAlloc.html) · Rust 1.99.1 documentation; matches local toolchain

Forward exact allocation contracts without panics or re-entrant allocation; optimizer-visible counts are observations, not correctness assumptions or total process memory. Reviewed 2026-10-27.

## SHA01

[RustCrypto SHA-2 release source](https://github.com/RustCrypto/hashes/tree/138dc5a05b93f8e49cda177fc6cfd7cc43673e5d/sha2) · sha2 0.11.1 registry source; source revision verified

SHA-256 for input and build fingerprints, not authentication or automatic trust. Reviewed 2026-10-27.

## AUDIT01

[cargo-audit official package](https://github.com/RustSec/rustsec/blob/main/cargo-audit/Cargo.toml) · 0.22.2 installed from crates.io with locked dependencies; binary scanning disabled

Dependency advisory matching only; no claim of complete code security or malware assessment. Reviewed 2026-10-27.

## WCXB01

[WCXB multi-type extraction preprint](https://arxiv.org/abs/2605.21097) · v1, submitted 2026-05-20; reviewed 2026-10-27

Static text-extraction benchmark; category, annotation and internal-consistency limits require independent review. Reviewed 2026-10-27.

## WCXB02

[WCXB source repository and declared license](https://github.com/Murrough-Foley/web-content-extraction-benchmark) · c039d5ee9f5a3a984a0e167e63aacd04e76e78a9

README inspected, including count mismatch with paper; no dataset download or executable run. Reviewed 2026-10-27.

## GQL01

[GraphQL response and execution errors](https://spec.graphql.org/September2025/#sec-Response-Format) · September 2025 specification, not a new October 2026 release

Execution may return partial data with errors; retain both and distinguish request failure, partial execution and complete requested scope. Evidence: primary documented. Checked 2026-10-27; review after 90 days or before a version-sensitive decision.

## ZSTD01

[Zstandard upstream release](https://github.com/facebook/zstd/releases/tag/v1.5.7) · 1.5.7 released 2025-02-19; latest release endpoint observed 2026-10-27

Lossless codec candidate; release status does not establish faster application writes. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## ZSTD02

[Rust Zstandard binding](https://docs.rs/zstd/0.14.3/zstd/) · 0.14.3, zstd-sys 2.1.2+zstd.1.5.7 in isolated lock

Bulk context reuse and bounded decompression evaluated in an isolated SQLite component. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## LZ401

[lz4_flex Rust API](https://docs.rs/lz4_flex/0.14.0/lz4_flex/) · 0.14.0, default safe and checked features verified

Frame API recommended generally; isolated bounded database records deliberately evaluate block API. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## LZ402

[lz4_flex invalid-offset advisory](https://github.com/PSeitz/lz4_flex/security/advisories/GHSA-vvp9-7p8x-rfvv) · Published 2026-03-14; affected <=0.11.5 and 0.12.0, patched 0.11.6/0.12.1

Older block decoders could leak uninitialized or reused-buffer content. Tested 0.14.0 is outside stated affected range; this is not a full security assurance. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## LZ403

[lz4_flex changelog](https://github.com/PSeitz/lz4_flex/blob/1bffdcbbf906a234b913937cb2f57c0245915038/CHANGELOG.md) · 0.14.0 dated 2026-07-14; GitHub latest release object separately returned 0.13.1

Records alloc feature change, invalid-offset fixes and later short-dictionary fix; do not blindly use one latest endpoint. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## BILI01

[Bilibili official external player documentation](https://player.bilibili.com/) · Current documented HTTPS external player and provider-selected BV1B7411m7LV example

Explicit autoplay=0; canonical video identity and player frame are distinct from verified playing or complete post collection. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

## TLS01

[RustSec rustls-ffi lifetime advisory](https://github.com/RustSec/advisory-db/blob/99670cfc0bc574433034b75876a4b791ccaa2efb/crates/rustls-ffi/RUSTSEC-2026-0413.md) · RUSTSEC-2026-0413; assigned October 27 for advisory dated October 26

Affected rustls-ffi 0.12.0–0.15.6; distinct package identity, not all rustls users. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

## NXT01

[RustSec nextest portable-recording advisory](https://github.com/RustSec/advisory-db/blob/99670cfc0bc574433034b75876a4b791ccaa2efb/crates/cargo-nextest/RUSTSEC-2026-0412.md) · RUSTSEC-2026-0412 assignment October 27; fixed in 0.9.150

Untrusted experimental rerun recordings can inject build arguments in affected releases; no prototype executed. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

## SEM01

[SemanticZip pilot](https://arxiv.org/html/2605.24541v1) · Preprint submitted 2026-05-23; newly reviewed, not newly released

Explicitly lossy semantic reconstruction; not eligible as byte-exact raw snapshot compression. Evidence: primary documented. Checked 2026-10-27; review after 90 days or before a version-sensitive decision.

## MTS01

[MTS-1 telemetry encoding](https://arxiv.org/html/2601.01602v1) · Preprint 2026-01-04; specialized synthetic telemetry

Thresholded delta rule requires a fidelity budget; generated probe is not an author-code reproduction. Evidence: primary documented. Checked 2026-10-27; review after 90 days or before a version-sensitive decision.

## GHR01

[GitHub REST API versioning](https://docs.github.com/en/rest/about-the-rest-api/api-versions) · 2026-03-10 supported; old default 2022-11-28 ends March 10, 2028

Explicit request version and actual selected version recorded separately. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

## GHR02

[GitHub REST API rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api) · Anonymous public requests: 60/hour per originating IP

Provider headers outrank a local budget; reset is epoch seconds, retry-after is duration. Evidence: primary documented. Checked 2026-10-27; review after 14 days or before a version-sensitive decision.

## GUIFLOW01

[GUIFlow incremental inference](https://arxiv.org/html/2610.34959v1) · Preprint submitted 2026-10-26

FLOPs ratios are distinct from wall-clock latency; quality varies by model. Research only. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## FLINT01

[FlintKV durable NVM storage](https://arxiv.org/html/2607.02401v1) · Preprint submitted 2026-07-02; newly reviewed October 27

Hardware-specific persistent-memory study; not a SQLite replacement result. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## PAD01

[Padding to k: schema minimums and extraction lists](https://arxiv.org/html/2610.30997v1) · v1, submitted 2026-10-22

Model-extraction completeness risk; not replicated or promoted. Evidence: primary documented. Checked 2026-10-27; review after 30 days or before a version-sensitive decision.

## FOCUS01

[Document.hasFocus and active-element distinction](https://developer.mozilla.org/en-US/docs/Web/API/Document/hasFocus) · Documentation modified 2025-09-25

Focus differs from active-element presence. Used as an additional controlled-run guard, not physical-paint proof. Evidence: primary documented. Checked 2026-10-28; review after 90 days.

## FRAME01

[requestAnimationFrame scheduling and background behavior](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) · Current documentation

Callback scheduling ordinarily follows refresh; background content may pause. Not physical-paint or INP proof. Evidence: primary documented. Checked 2026-10-28; review after 90 days.

## Research Explorer expansion · checked 2026-10-28 UTC

This is the October 27 America/Denver research pass. Exact publications and source check dates are separate. New observations do not overwrite earlier dated reviews.

### RX001

[vLLM documentation README](https://github.com/vllm-project/vllm/blob/main/docs/README.md)

Current docs list DFlash speculation and separated prefill/decode alongside multiple hardware plugins.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX002

[SGLang official releases](https://github.com/sgl-project/sglang/releases)

Opened release notes describe Rust-backed prefix caching and live switching between prefill and decode roles.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX003

[FlashInfer official releases](https://github.com/flashinfer-ai/flashinfer/releases)

v0.7.2.post1 was released on October 23, 2026; release notes cover newer GPU backends and fused operations.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX004

[NVIDIA TensorRT LLM overview](https://developer.nvidia.com/tensorrt-llm)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX005

[llama.cpp README: Description](https://github.com/ggml-org/llama.cpp)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX006

[MLX LM README: Features](https://github.com/ml-explore/mlx-lm)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX007

[MLC LLM README: About](https://github.com/mlc-ai/mlc-llm/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX008

[FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling](https://arxiv.org/abs/2603.05451)

2026 paper; authors target asymmetric scaling on Blackwell.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX009

[Announcing New vLLM and SGLang Inference Engines on TPU](https://developers.googleblog.com/announcing-new-vllm-and-sglang-inference-engines-on-tpu/)

Google announced native PyTorch TPU serving backends on October 20, 2026.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX010

[DFlash: Block Diffusion for Flash Speculative Decoding](https://arxiv.org/abs/2602.06036)

The ICML 2026 camera-ready paper was revised May 28, 2026.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX011

[DSPy official overview](https://dspy.ai/current/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX012

[LangGraph README: Why use LangGraph](https://github.com/langchain-ai/langgraph/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX013

[OpenHands Software Agent SDK README](https://github.com/OpenHands/software-agent-sdk)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX014

[smolagents official documentation](https://huggingface.co/docs/smolagents/main/index)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX015

[CrewAI README: Framework overview](https://github.com/crewAIInc/crewAI/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX016

[Pydantic AI: Durable Execution](https://pydantic.dev/docs/ai/capabilities/durable_execution/overview/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX017

[GEPA: Reflective Prompt Evolution Can Outperform Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2026/hash/0e9e708b6f48e14fd0ac29e167413f76-Abstract-Conference.html)

Published in the ICLR 2026 proceedings.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX018

[SWE-bench official leaderboards](https://www.swebench.com/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX019

[SWE-bench-Live official leaderboard and news](https://swe-bench-live.github.io/)

2026 updates add language/OS tracks and require trajectories for verified submissions.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX020

[SWE-Bench Pro V2 official methodology and leaderboard](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

V2 changes tasks and evaluation protocol; preserve its version with every external observation.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX021

[Terminal-Bench 4.0 release explanation](https://www.tbench.ai/news/terminal-bench-4-0)

Current official family page identifies 4.0; opened release notes explain resource and task changes.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX022

[τ-bench 2.0.0 official release notes](https://github.com/sierra-research/tau2-bench/releases)

October 19 release changes communication checks, judging, prompts, and benchmark manifests.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX023

[Berkeley Function Calling Leaderboard V4](https://gorilla.cs.berkeley.edu/leaderboard)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX024

[LiveCodeBench README: Dataset Versions and Evaluation](https://github.com/LiveCodeBench/LiveCodeBench)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX025

[Harbor README: Overview](https://github.com/harbor-framework/harbor)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX026

[Inspect official documentation: Welcome](https://inspect.aisi.org.uk/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX027

[LM Evaluation Harness v0.4.13 release notes](https://github.com/EleutherAI/lm-evaluation-harness/releases)

v0.4.13 notes fixes for few-shot leakage, answer filtering, and grouped uncertainty estimates.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX028

[GraphRAG official documentation](https://microsoft.github.io/graphrag/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX029

[LightRAG README: News and installation](https://github.com/HKUDS/LightRAG)

2026 project updates document selectable chunking and role-specific model configurations.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX030

[ColBERT README: Model description](https://github.com/stanford-futuredata/ColBERT/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX031

[Ragas official available-metrics documentation](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX032

[FlashRAG README: Introduction and Features](https://github.com/RUC-NLPIR/FlashRAG/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX033

[TRL README: Overview and Highlights](https://github.com/huggingface/trl/blob/main/README.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX034

[verl README: Overview and News](https://github.com/verl-project/verl)

2026 project news includes observability and speculative-decoding co-training work; current repository is verl-project/verl.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX035

[Unsloth official documentation](https://unsloth.ai/docs)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX036

[LMCache multiprocess overview](https://docs.lmcache.ai/mp/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX037

[NVIDIA Dynamo architecture overview](https://github.com/ai-dynamo/dynamo/blob/main/docs/fern/pages/developer-guide/knowledge-base/overview.md)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX038

[EAGLE-3 Microsoft Research publication](https://www.microsoft.com/en-us/research/publication/eagle-3-scaling-up-inference-acceleration-of-large-language-models-via-training-time-test/)

NeurIPS 2025 baseline remains relevant to 2026 serving comparisons.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX039

[Liger Kernel official documentation](https://linkedin.github.io/Liger-Kernel/)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX040

[PEFT official overview](https://huggingface.co/docs/peft/index)

Current primary-source page; publication date unknown unless recorded in catalog

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX041

[Quantifying infrastructure noise in agentic coding evals](https://www.anthropic.com/research/infrastructure-noise)

2026 primary study motivates explicit allocation and enforcement metadata for agent rankings.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX042

[ProgramBench official methodology and leaderboard](https://programbench.com/)

Official leaderboard snapshot was updated October 22, 2026.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX043

[CodeClash official project and methodology](https://codeclash.ai/)

Relevant game-oriented baseline; official displayed leaderboard date is November 3, 2025.

Opened the relevant official documentation or project section. Evidence: primary documented; not Atlas reproduction.

### RX044

[Rust Release Notes](https://doc.rust-lang.org/releases.html)

Release notes list Rust 1.99.1 on 2026-10-15 and 1.99.0 on 2026-10-01.

Opened release sections 1.99.1 and 1.99.0; release dates differ from page publication date. Evidence: primary documented; not Atlas reproduction.

### RX045

[Go Release History](https://go.dev/doc/devel/release)

Release history lists Go 1.27.3 on 2026-10-19.

Opened current release history through go1.27.3. Evidence: primary documented; not Atlas reproduction.

### RX046

[Zig 0.17.0 announcement](https://ziglang.org/news/0.17.0-released/)

Official 0.17.0 announcement is dated 2026-10-02; do not infer the binary publication timestamp.

Full announcement explicitly says October 02; linked release notes contain no date. This is the announcement publication date. Evidence: primary documented; not Atlas reproduction.

### RX047

[Swift 6.4 Released](https://www.swift.org/blog/swift-6.4-released/)

Swift 6.4 announcement describes Swift Build becoming the default in Swift Package Manager.

Opened release introduction and feature sections. Evidence: primary documented; not Atlas reproduction.

### RX048

[Python 3.15.0 release](https://www.python.org/downloads/release/python-3150/)

Python 3.15.0 launched 2026-10-09; its page now points to a newer patch release.

Opened release page including interpreter, C API, and supersession notice. Evidence: primary documented; not Atlas reproduction.

### RX049

[Kotlin release process](https://kotlinlang.org/docs/releases.html)

The official release history lists Kotlin 2.4.21 on 2026-10-08.

Opened release-history table and update instructions. Evidence: primary documented; not Atlas reproduction.

### RX050

[Announcing TypeScript 7.0](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)

TypeScript 7.0 was announced 2026-07-08 as the native compiler release.

Opened native-port introduction; vendor speedup tables are not imported as Atlas results. Evidence: primary documented; not Atlas reproduction.

### RX051

[Mojo v1.2.0](https://mojolang.static.modular.com/releases/v1.2.0/)

Mojo v1.2.0 announcement adds pattern matching and additional GPU math implementations.

Opened release highlights and pattern matching section; official homepage linked modular/modular/Mojo. Evidence: primary documented; not Atlas reproduction.

### RX052

[Gleam does not compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)

Gleam 1.19.0 changes Erlang-target output to Erlang abstract forms.

Opened new compilation target and benchmark caveats sections. Evidence: primary documented; not Atlas reproduction.

### RX053

[Roc repository README](https://github.com/roc-lang/roc)

Upstream README still says Roc is not ready for a 0.1 release.

Opened README work-in-progress section and official language overview. Evidence: primary documented; not Atlas reproduction.

### RX054

[Consolidated JDK 27 Release Notes](https://www.oracle.com/java/technologies/javase/27all-relnotes.html)

Oracle's current release notes include JDK 27 and October 2026 updates.

Opened Oracle GA release notes; OpenJDK project-page fetch returned 403. Evidence: primary documented; not Atlas reproduction.

### RX055

[Elixir v1.20 released](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)

Elixir 1.20 announcement describes type inference across language constructs without requiring type annotations.

Opened gradual typing and narrowing explanation. Evidence: primary documented; not Atlas reproduction.

### RX056

[Node.js Blog](https://nodejs.org/en/blog)

Release index lists 26.12.1 Current and 24.22.1 LTS on 2026-10-21.

Opened latest release index; current and LTS are explicitly distinguished. Evidence: primary documented; not Atlas reproduction.

### RX057

[Bun v1.4.4](https://bun.sh/blog/bun-v1.4.4)

Bun v1.4.4 introduces the built-in bun fmt formatter.

Opened release date, formatter description, and benchmark reproduction section. Evidence: primary documented; not Atlas reproduction.

### RX058

[Deno 2.9](https://deno.com/blog/v2.9)

Deno 2.9 introduces experimental deno desktop and expanded lockfile migration support.

Opened release introduction and desktop section including experimental status. Evidence: primary documented; not Atlas reproduction.

### RX059

[Vite 8.0 is out](https://vite.dev/blog/announcing-vite8)

Vite 8 replaces the earlier dual-bundler pipeline with Rolldown.

Opened stable-release introduction and bundler architecture sections. Evidence: primary documented; not Atlas reproduction.

### RX060

[Announcing Rolldown 1.0](https://voidzero.dev/posts/announcing-rolldown-1-0)

Rolldown 1.0 stable was announced 2026-05-07.

Opened stability contract, output-behavior caveat, and architecture. Evidence: primary documented; not Atlas reproduction.

### RX061

[Oxc releases](https://github.com/oxc-project/oxc/releases)

Upstream lists Oxlint 1.90.0 and Oxfmt 0.75.0 releases on 2026-10-27.

Opened current Oxlint release and specific change list. Evidence: primary documented; not Atlas reproduction.

### RX062

[Announcing Rspack 2.0](https://www.rspack.dev/blog/announcing-2-0)

Rspack 2.0 announcement introduces updated defaults and APIs while targeting webpack ecosystem compatibility.

Opened 2.0 announcement and compatibility rationale. Evidence: primary documented; not Atlas reproduction.

### RX063

[Biome Blog](https://biomejs.dev/blog/)

Biome 2.6 announcement dated 2026-10-15 adds Markdown, YAML, and SCSS support; JavaScript plugins are preview.

Opened 2.6 release summary with developer-preview plugin labeling. Evidence: primary documented; not Atlas reproduction.

### RX064

[uv documentation](https://docs.astral.sh/uv/)

Experimental uv and ty integration was announced 2026-10-13.

Opened project, lockfile, script, and environment-management sections. Evidence: primary documented; not Atlas reproduction.

### RX065

[Bringing uv and ty together](https://astral.sh/blog/uv-ty-integration)

Experimental uv and ty integration was announced 2026-10-13.

Opened preview-status and unified-check sections. Evidence: primary documented; not Atlas reproduction.

### RX066

[Ruff documentation](https://docs.astral.sh/ruff/)

Current documentation lists Python 3.15 compatibility.

Opened overview and feature list; no speedup number imported. Evidence: primary documented; not Atlas reproduction.

### RX067

[ty documentation](https://docs.astral.sh/ty/)

The 2026-10-13 uv integration announcement still describes work toward ty's stable release.

Opened highlights, type-system, and editor capability overview. Evidence: primary documented; not Atlas reproduction.

### RX068

[Next.js 16.4](https://nextjs.org/blog/next-16-4)

Next.js 16.4 introduces updated Cache Components defaults and development/build improvements.

Opened Cache Components and release overview; future Next.js 17 is not claimed as released. Evidence: primary documented; not Atlas reproduction.

### RX069

[SvelteKit 3 is here](https://svelte.dev/blog/sveltekit-3-is-here)

SvelteKit 3.0 released 2026-10-01; remote functions still require experimental Async Svelte in the announcement.

Opened full release announcement and remote-functions experimental caveat. Evidence: primary documented; not Atlas reproduction.

### RX070

[Astro 7.4](https://astro.build/blog/astro-740/)

Astro 7.4 adds build timings; parallel prerendering is explicitly experimental.

Opened release introduction and build-timing explanation. Evidence: primary documented; not Atlas reproduction.

### RX071

[React 19.3](https://react.dev/blog/2026/09/09/react-19-3)

React 19.3 stabilizes View Transitions and Fragment Refs.

Opened feature overview and View Transitions section. Evidence: primary documented; not Atlas reproduction.

### RX072

[Vue releases](https://github.com/vuejs/core/releases)

Upstream lists Vue 3.6.0-rc.13 as prerelease and keeps stable 3.5 releases distinct.

Opened release list showing stable 3.5 and explicitly prerelease 3.6 entries; no unverified Vapor performance claim included. Evidence: primary documented; not Atlas reproduction.

### RX073

[Nuxt releases](https://github.com/nuxt/nuxt/releases)

Nuxt 4.6.3 is listed on 2026-10-27 with security and performance fixes.

Opened v4.6.3 release details and security-fix list. Evidence: primary documented; not Atlas reproduction.

### RX074

[TanStack Start 1.0 is Stable](https://tanstack.com/blog/tanstack-start-1-0)

TanStack Start's stable 1.0 milestone was announced 2026-10-13.

Opened stable-release announcement; package version numbering differs from product milestone. Evidence: primary documented; not Atlas reproduction.

### RX075

[Hono official overview](https://hono.dev/)

Official overview describes a shared Web Standards API across multiple runtime targets.

Opened features and supported-runtime sections. Evidence: primary documented; not Atlas reproduction.

### RX076

[Elysia 2 RC](https://next.elysiajs.com/blog/elysia-20-rc/)

Elysia 2 RC was announced 2026-10-19 and remains a prerelease candidate.

Opened RC announcement, architecture, and memory discussion; external performance claims not imported. Evidence: primary documented; not Atlas reproduction.

### RX077

[FastAPI Release Notes](https://fastapi.tiangolo.com/release-notes/)

FastAPI 0.162.0 on 2026-10-23 changes omitted boolean form-field handling.

Opened 0.162.0 entry and its breaking form-field semantics. Evidence: primary documented; not Atlas reproduction.

### RX078

[Django October 2026 security releases](https://www.djangoproject.com/weblog/2026/oct/06/security-releases/)

Django issued 6.1.2, 6.0.9, and 5.2.18 security releases on 2026-10-06.

Opened release notice and affected-version section. Evidence: primary documented; not Atlas reproduction.

### RX079

[Phoenix LiveView 1.2 released](https://www.phoenixframework.org/blog/phoenix-liveview-1-2-released)

LiveView 1.2 adds colocated CSS in HEEx templates.

Opened 1.2 introduction and colocated CSS explanation. Evidence: primary documented; not Atlas reproduction.

### RX080

[Axum documentation](https://docs.rs/axum/latest/axum/)

Current documentation shows Axum 0.8.9 and explicitly targets Tokio and Hyper.

Opened high-level features and compatibility sections. Evidence: primary documented; not Atlas reproduction.

### RX081

[Announcing Tauri 2.12](https://v2.tauri.app/blog/tauri-2.12/)

Tauri 2.12 adds a webview permission request handler and changes supported platform/toolchain requirements.

Opened release, supported-platform, permission-handler, and MSRV sections. Evidence: primary documented; not Atlas reproduction.

### RX082

[Electron 45](https://www.electronjs.org/blog/electron-45-0)

Electron 45 released 2026-10-21 with updated Chromium, V8, Node.js, and preload behavior.

Opened version, startup, and preload migration sections. Evidence: primary documented; not Atlas reproduction.

### RX083

[Bevy 0.20](https://bevy.org/news/bevy-0-20/)

Bevy 0.20 announcement includes Solari rendering and scene-system improvements.

Opened release introduction, scene-system, and renderer highlights. Evidence: primary documented; not Atlas reproduction.

### RX084

[Godot official release archive](https://godotengine.org/download/archive/)

Archive lists 4.7.2 stable on 2026-08-18 and 4.8 beta1 on 2026-10-15.

Opened stable and beta archive entries. Evidence: primary documented; not Atlas reproduction.

### RX085

[.NET October 2026 out-of-band updates](https://devblogs.microsoft.com/dotnet/dotnet-october-2026-oob-security-updates/)

Microsoft released .NET 10.0.14 and .NET 11 RC3 on 2026-10-25; RC3 remains prerelease.

Opened release table and preview labeling. Evidence: primary documented; not Atlas reproduction.

### RX086

[WASI 0.3 Launched](https://bytecodealliance.org/articles/WASI-0.3)

WASI 0.3.0 ratification was announced 2026-06-11.

Opened ratification and async-ABI sections. Evidence: primary documented; not Atlas reproduction.

### RX087

[WASI releases](https://wasi.dev/releases)

WASI 0.3.0 ratification was announced 2026-06-11.

Opened version/status table and toolchain caveats. Evidence: primary documented; not Atlas reproduction.

### RX088

[Wasmtime official overview](https://wasmtime.dev/)

Current overview documents JIT/AOT execution, WASI, and multiple host-language embeddings.

Opened code-generation, resource-configuration, standards, and embedding sections. Evidence: primary documented; not Atlas reproduction.

### RX089

[Wasmtime releases](https://github.com/bytecodealliance/wasmtime/releases)

Current overview documents JIT/AOT execution, WASI, and multiple host-language embeddings.

Opened release version and date; experimental proposals remain opt-in. Evidence: primary documented; not Atlas reproduction.

### RX090

[Vitest 5.0 is out](https://vitest.dev/blog/vitest-5)

Vitest 5 announcement includes a reference-app benchmark matrix across worker pools and environments.

Opened release and benchmark methodology sections. Evidence: primary documented; not Atlas reproduction.

### RX091

[Playwright release notes](https://playwright.dev/docs/release-notes)

The release notes describe Playwright 1.64 WebMCP APIs and test-order shuffling.

Opened 1.64 WebMCP and runner sections. Evidence: primary documented; not Atlas reproduction.

### RX092

[SQLite release history](https://www.sqlite.org/changes.html)

Release history lists SQLite 3.54.1 on 2026-10-16.

Opened the 3.54.1 and 3.54.0 release sections. Evidence: primary documented; not Atlas reproduction.

### RX093

[PostgreSQL release notes](https://www.postgresql.org/docs/release/)

Official release page announces PostgreSQL 19 RC1 dated 2026-10-15; do not treat it as GA.

Opened release archive header; PostgreSQL 19 is labeled RC1. Evidence: primary documented; not Atlas reproduction.

### RX094

[Announcing DuckDB 2.0.0 LTS](https://duckdb.org/2026/10/21/announcing-duckdb-200)

DuckDB 2.0.0 LTS was announced on 2026-10-21 with asynchronous I/O and other major features.

Opened release introduction; upgrade changes require explicit compatibility tests. Evidence: primary documented; not Atlas reproduction.

### RX095

[Announcing Polars 2.1](https://pola.rs/posts/polars-2-1-changelog/)

Polars 2.1 was announced on 2026-10-27; out-of-core group-by and recursive CTE support are documented.

Opened out-of-core and SQL sections; source states Python 3.10 support was dropped. Evidence: primary documented; not Atlas reproduction.

### RX096

[Apache DataFusion 55.0.0 Released](https://datafusion.apache.org/blog/output/2026/08/25/datafusion-55.0.0/)

DataFusion 55.0.0 release documents range partitioning, MERGE INTO planning, and runtime pruning.

Opened release introduction and range partitioning section. Evidence: primary documented; not Atlas reproduction.

### RX097

[ClickHouse release 26.9](https://clickhouse.com/blog/clickhouse-release-26-09)

ClickHouse 26.9 release highlights incremental materialized-view refreshes and DISTINCT spilling.

Opened release summary; vendor performance claims are not imported as scores. Evidence: primary documented; not Atlas reproduction.

### RX098

[Apache Iceberg releases](https://iceberg.apache.org/releases/)

Official release notes list Iceberg 1.12.0 released on 2026-09-29.

Opened 1.12.0 release section and compatibility removals. Evidence: primary documented; not Atlas reproduction.

### RX099

[LanceDB September 2026 newsletter](https://www.lancedb.com/blog/newsletter-september-2026)

September ecosystem update reports Lance SDK 12.0.0 with file format 2.2; these are not LanceDB version numbers.

Opened community release section; version layers are explicitly distinguished. Evidence: primary documented; not Atlas reproduction.

### RX100

[pgvector README](https://github.com/pgvector/pgvector)

Current README documents exact and approximate search plus dense, half-precision, binary, and sparse vectors.

Opened supported search and vector-type section. Evidence: primary documented; not Atlas reproduction.

### RX101

[Qdrant 1.20: Full-Text Search Improvements](https://qdrant.tech/blog/qdrant-1.20.x/)

Qdrant 1.20 release announced on 2026-10-22 adds BM25 on text indexes and a code tokenizer.

Opened release feature summary and BM25 section. Evidence: primary documented; not Atlas reproduction.

### RX102

[Milvus release notes](https://milvus.io/docs/release_notes.md)

Milvus 3.0.3 release notes dated 2026-10-14 document Function Chain support for hybrid search.

Opened v3.0.3 release section; track listed compatibility changes before testing. Evidence: primary documented; not Atlas reproduction.

### RX103

[RocksDB releases](https://github.com/facebook/rocksdb/releases)

Opened current releases documenting asynchronous filesystem-read controls in the 11.8 series.

Opened asynchronous-read API change; release-header dates differ, so no exact publication date is asserted. Evidence: primary documented; not Atlas reproduction.

### RX104

[redb README](https://github.com/cberner/redb)

Current README describes a pure Rust ACID store with copy-on-write B-trees and savepoints.

Opened design and transactional example section. Evidence: primary documented; not Atlas reproduction.

### RX105

[Temporal platform changelog](https://temporal.io/changelog)

Official changelog lists Standalone Activities GA on 2026-09-15.

Opened Standalone Activities entry and lifecycle capabilities. Evidence: primary documented; not Atlas reproduction.

### RX106

[Every System is a Log](https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications)

Shared-log architecture reviewed against the primary article; no unverified 2026 release number is asserted.

Opened article; primary page date overrides conflicting search-index date. Evidence: primary documented; not Atlas reproduction.

### RX107

[What's New in DBOS: September 2026](https://www.dbos.dev/blog/whats-new-in-dbos-september-2026)

September update announces Python v3.0, TypeScript v5.0, and improved fair queueing.

Opened major-version and workflow compatibility sections. Evidence: primary documented; not Atlas reproduction.

### RX108

[OpenTelemetry Transformation Language reaches v1](https://opentelemetry.io/blog/2026/ottl-v1/)

OTTL v1 was announced on 2026-10-27; stable traces, metrics, and logs support begins with contrib v0.164.0.

Opened v1 compatibility scope and exclusions. Evidence: primary documented; not Atlas reproduction.

### RX109

[Grafana Beyla documentation](https://grafana.com/docs/beyla/latest/)

Opened documentation distinguishes RED metrics coverage from tracing limitations and SDK coexistence.

Opened eBPF capture description and instrumentation comparison. Evidence: primary documented; not Atlas reproduction.

### RX110

[Tracy Profiler README](https://github.com/wolfpld/tracy/blob/master/README.md)

Current README lists CPU/GPU, allocation, lock, and context-switch profiling support.

Opened supported instrumentation surfaces and bindings. Evidence: primary documented; not Atlas reproduction.

### RX111

[Perfetto v58](https://perfetto.dev/blog/perfetto-v58)

Perfetto v58.2 announcement on 2026-08-24 describes merged timelines and memory investigation tooling.

Opened release introduction and trace-merging capability. Evidence: primary documented; not Atlas reproduction.

### RX112

[RenderDoc README](https://github.com/baldurk/renderdoc)

Opened canonical README documenting frame capture and supported graphics APIs.

Opened canonical repository description rather than a third-party fork. Evidence: primary documented; not Atlas reproduction.

### RX113

[containerd versioning and release policy](https://containerd.io/releases/)

Official release policy documents a four-month minor-release cadence starting with v2.3 in April 2026.

Opened 2026 release cadence and support policy. Evidence: primary documented; not Atlas reproduction.

### RX114

[Announcing Spin v4.1](https://spinframework.dev/blog/announcing-spin-4-1)

Spin 4.1 announcement dated 2026-08-26 documents final WASI 0.3 support and composable HTTP middleware.

Opened release foundation and middleware descriptions. Evidence: primary documented; not Atlas reproduction.

### RX115

[Hypothesis documentation](https://hypothesis.readthedocs.io/en/latest/)

Opened current documentation describing generated inputs and edge-case exploration.

Opened introduction to property-based testing. Evidence: primary documented; not Atlas reproduction.

### RX116

[fast-check release blog](https://fast-check.dev/blog/)

Maintainer blog documents fast-check 4.10.0 on 2026-09-13 and migration work toward v5.

Opened 4.10.0 announcement; v5 is future migration context, not a released-version claim. Evidence: primary documented; not Atlas reproduction.

### RX117

[TLC Model Checker documentation](https://www.docs.tlapl.us/using:tlc:start)

Opened TLC documentation describing explicit-state verification of TLA+ models.

Opened model-checker scope and runtime guidance. Evidence: primary documented; not Atlas reproduction.

### RX118

[Jepsen distributed systems safety research](https://jepsen.io/)

Jepsen news records 0.3.15 on 2026-10-16 and a checker-correctness fix.

Opened project scope and release news; checker validation is part of the proposed test design. Evidence: primary documented; not Atlas reproduction.

### RX119

[Introducing Testcontainers](https://testcontainers.com/guides/introducing-testcontainers/)

Opened official guide explaining lifecycle-managed real-service containers for integration testing.

Opened definition and lifecycle description; Java repository is a representative implementation. Evidence: primary documented; not Atlas reproduction.

### RX120

[cargo-nextest changelog](https://www.nexte.st/changelog/)

Current changelog lists 0.9.150 on 2026-10-26, including a portable-recording security fix.

Opened 0.9.150 security and version sections. Evidence: primary documented; not Atlas reproduction.

### RX121

[Criterion.rs README](https://github.com/criterion-rs/criterion.rs)

Opened canonical repository documenting statistical regression detection and stable Rust support.

Opened statistics-driven benchmarking description. Evidence: primary documented; not Atlas reproduction.

### RX122

[AFL++ README](https://github.com/AFLplusplus/AFLplusplus)

Opened current repository distinguishing release 5.03c from development version 5.04a.

Opened release/development version distinction and fuzzing workflow. Evidence: primary documented; not Atlas reproduction.

### RX123

[Cosign releases](https://github.com/sigstore/cosign/releases)

Opened Cosign v3.1.4 release dated 2026-10-20.

Opened latest release header and artifact timestamps. Evidence: primary documented; not Atlas reproduction.

### RX124

[SLSA specification v1.2](https://slsa.dev/spec/v1.2/)

Opened approved SLSA v1.2 specification; it includes source and build tracks.

Opened approved status and track definitions; no fabricated 2026 release date. Evidence: primary documented; not Atlas reproduction.

### RX125

[OpenSSF Scorecard overview](https://openssf.org/scorecard/)

Opened official project overview describing automated repository security assessment.

Opened foundation description and intended scoring scope. Evidence: primary documented; not Atlas reproduction.

### RX126

[Trivy releases](https://github.com/aquasecurity/trivy/releases)

Opened Trivy v0.76.1 release and its 2026-10-21 artifact timestamps.

Opened current release section; use patched binaries for tests. Evidence: primary documented; not Atlas reproduction.

### RX127

[Syft README](https://github.com/anchore/syft/blob/main/README.md)

Opened README documenting SBOM output and supported scan targets.

Opened tool purpose and inventory features. Evidence: primary documented; not Atlas reproduction.

### RX128

[OSV-Scanner documentation](https://google.github.io/osv-scanner/)

Opened official documentation for CLI and Go-library usage against the OSV database.

Opened dependency-to-advisory matching description. Evidence: primary documented; not Atlas reproduction.

### RX129

[OpenTofu v1.13.0](https://opentofu.org/blog/opentofu-1-13-0/)

OpenTofu 1.13.0 release on 2026-09-29 labels built-in linting and Symbol Libraries experimental.

Opened stable release and explicit experimental-feature labels. Evidence: primary documented; not Atlas reproduction.

### RX130

[Dagger 1.0 beta](https://dagger.io/blog/dagger-10-beta/)

Official 2026-10-23 announcement introduces Dagger 1.0 beta.

Opened release status; marketing performance claims are excluded from scoring. Evidence: primary documented; not Atlas reproduction.

### RX131

[Faster DuckDB Queries with Vortex](https://spiraldb.com/blog/duckdb-and-vortex)

Official 2026-10-21 integration post documents Vortex as a DuckDB core extension on Linux and macOS.

Opened integration details; vendor speedup claims are hypotheses for testing. Evidence: primary documented; not Atlas reproduction.

### RX132

[Vortex file-format specification](https://docs.vortex.dev/specs/file-format)

Official 2026-10-21 integration post documents Vortex as a DuckDB core extension on Linux and macOS.

Opened frozen-edition stability guarantee. Evidence: primary documented; not Atlas reproduction.

### RX133

[VS-Flash: Harnessing Vector Search with Computational Memory-Semantic Flash](https://arxiv.org/html/2610.26960v1)

arXiv v1 is dated 2026-10-18; the paper describes mixed-workload vector search.

Opened abstract, design, and evaluation sections; no numerical speedup is imported. Evidence: primary documented; not Atlas reproduction.

### RX134

[Sharpen the Spec, Cut the Code: A Case for Generative File System with SYSSPEC](https://www.usenix.org/conference/fast26/presentation/liu-qingyuan)

FAST '26 publisher page lists Best Paper and Distinguished Artifact awards.

Opened publisher abstract and award labels; no exact publication day is asserted. Evidence: primary documented; not Atlas reproduction.

### RX135

[Python standard-library json official reference](https://docs.python.org/3.12/library/json.html)

Existing Atlas experiment used CPython 3.12.14. Versioned 3.12 documentation is the compatibility reference; this is not a current-runtime benchmark.

Existing Atlas experiment used CPython 3.12.14. Versioned 3.12 documentation is the compatibility reference; this is not a current-runtime benchmark. Evidence: primary documented; not Atlas reproduction.

### RX136

[orjson official reference](https://github.com/ijl/orjson)

Existing Atlas experiment used orjson 3.13.0. Numeric policy and duplicate-key behavior remain adoption gates despite lower timings in that workload.

Existing Atlas experiment used orjson 3.13.0. Numeric policy and duplicate-key behavior remain adoption gates despite lower timings in that workload. Evidence: primary documented; not Atlas reproduction.

### RX137

[UltraJSON (ujson) official reference](https://github.com/ultrajson/ultrajson)

Existing Atlas experiment used ujson 6.0.0. Upstream describes a maintenance-only policy; evaluate that lifecycle before selecting it for new work.

Existing Atlas experiment used ujson 6.0.0. Upstream describes a maintenance-only policy; evaluate that lifecycle before selecting it for new work. Evidence: primary documented; not Atlas reproduction.


## Paper expansion and catalog governance

### RX138

[Wasure: A Modular Toolkit for Comprehensive WebAssembly Benchmarking](https://arxiv.org/html/2602.05488v1)

2026-02-05 preprint; a public Python toolkit and benchmark-management source were checked.

Opened v1, especially approach, execution, feature tracking, and portability. Date is the arXiv v1 submission/publication, not a software release. Evidence: primary documented.

### RX139

[Wasure upstream repository](https://github.com/r-carissimi/wasure)

2026-02-05 preprint; a public Python toolkit and benchmark-management source were checked.

Opened README, setup and artifact-output guidance; source is available and marked work in progress. No artifact was executed. Evidence: primary documented.

### RX140

[Debugging Performance Issues in WebAssembly Runtimes via Mutation-based Inference](https://arxiv.org/html/2604.13693v1)

ICSE 2026 paper with arXiv v1 published 2026-04-15; public research artifact checked.

Opened ICSE 2026 paper methods and discussion/limitations. Date is arXiv v1 publication; venue receipt and conference dates are different events. Evidence: primary documented.

### RX141

[WarpL source code and experiment data](https://github.com/BZTesting/WarpL)

ICSE 2026 paper with arXiv v1 published 2026-04-15; public research artifact checked.

Opened repository file listing and README area; source_code and experiment_data are public. A reuse license was not established. Evidence: primary documented.

### RX142

[Maintaining Queries under Updates Using Heavy-Light Partitioning of the Input Relations](https://arxiv.org/html/2605.08397v1)

Original arXiv v1 published 2026-05-08; theory candidate with no local performance reproduction.

Opened definitions, adaptive IVM overview, maintenance assumptions and conclusion. The paper supplies theoretical methods; no implementation artifact was identified in the checked paper. Evidence: primary documented.

### RX143

[GenWasym OOPSLA 2026 official paper page](https://2026.splashcon.org/details/oopsla-2026/124/Compiling-WebAssembly-Concolic-Execution-with-Staging-Continuations-and-Snapshots)

OOPSLA 2026 paper; current artifact record is v9 published 2026-09-22.

Opened the official abstract and presentation record. Conference date is not used as a publication date. Direct arXiv retrieval failed in this pass. Evidence: primary documented.

### RX144

[GenWasym OOPSLA 2026 artifact v9](https://zenodo.org/records/22886998)

OOPSLA 2026 paper; current artifact record is v9 published 2026-09-22.

Followed the older artifact to the current v9 record. This is the artifact publication date, not the paper publication date. Evidence: primary documented.

### RX145

[GenWasym v9 artifact evaluation README](https://zenodo.org/records/22886998/files/Readme.md?download=1)

OOPSLA 2026 paper; current artifact record is v9 published 2026-09-22.

Opened current artifact instructions: source, WASP baseline, benchmark suites, and container environment. Archive was not downloaded or executed. Evidence: primary documented.

### RX146

[SWE-Skills-Bench, revised v2](https://arxiv.org/html/2603.15401v2)

v2 published 2026-10-27; use the revised 98-skill protocol and current ControllableModel artifact.

Opened revised paper methods, paired assessment and discussion. v2 expands the benchmark to 98 skills; older v1 snippets describe a different experimental set. Evidence: primary documented.

### RX147

[SWE-Skills-Bench current upstream artifact](https://github.com/ControllableModel/SWE-Skills-Bench)

v2 published 2026-10-27; use the revised 98-skill protocol and current ControllableModel artifact.

Opened the repository linked by v2 and its paired-run setup. The older paper linked a different repository namespace. Evidence: primary documented.

### RX148

[Breaking, Stale, or Missing? Benchmarking Coding Agents on Project-Level Test Evolution](https://arxiv.org/html/2605.06125v1)

2026-05-07 preprint with public dataset and evaluation pipeline; explicitly includes tests that pass while becoming stale.

Opened task construction, version design, evaluation and limitations. The corpus is derived from Maven-based Java projects in the Defects4J ecosystem. Evidence: primary documented.

### RX149

[TEBench benchmark and evaluation artifact](https://github.com/iSEngLab/TEBench)

2026-05-07 preprint with public dataset and evaluation pipeline; explicitly includes tests that pass while becoming stale.

Opened dataset overview, task types and update-evaluation instructions. Public source and pipeline are available; not executed. Evidence: primary documented.

### RX150

[TestSuiteBench: Coding Agents Struggle to Generate Strong Test Suites from Specifications](https://arxiv.org/html/2610.13065v1)

Original preprint published 2026-10-09; code, specifications and dataset pointers checked.

Opened benchmark construction, mutation method, evaluation metrics and limitations. Published results are external evidence, not Atlas scores. Evidence: primary documented.

### RX151

[TestSuiteBench evaluation code and dataset pointers](https://github.com/eth-sri/testsuitebench)

Original preprint published 2026-10-09; code, specifications and dataset pointers checked.

Opened setup and evaluation instructions. Reference tests, mutants and executables are separately hosted; task images target Linux amd64. Evidence: primary documented.

### RX152

[Incr, OSDI 2026 official paper page](https://www.usenix.org/conference/osdi26/presentation/xie-yizheng)

OSDI 2026 paper, dated July in the venue record; public source and retained evaluation tooling checked.

Opened venue record; it gives July 2026 but no exact publication day. Evidence: primary documented.

### RX153

[Incr full OSDI 2026 paper](https://www.usenix.org/system/files/osdi26-xie-yizheng.pdf)

OSDI 2026 paper, dated July in the venue record; public source and retained evaluation tooling checked.

Opened full paper including behavioral-equivalence methodology and limitations. Corner-case divergences and excluded parser-error cases are retained as constraints. Evidence: primary documented.

### RX154

[Incr source and reproduction instructions](https://github.com/atlas-brown/incr)

OSDI 2026 paper, dated July in the venue record; public source and retained evaluation tooling checked.

Opened README: MIT-licensed source, evaluation harness, Docker wrapper and optional Ubuntu-native setup are available. Evidence: primary documented.

### RX155

[hS, OSDI 2026 official paper page](https://www.usenix.org/conference/osdi26/presentation/liargkovas)

OSDI 2026 paper; public prototype and dated 2026-07-10 author explanation checked.

Opened official abstract and venue record. The venue supplies July 2026, not an exact publication day; full PDF retrieval timed out. Evidence: primary documented.

### RX156

[hS speculative shell prototype](https://github.com/binpash/hs)

OSDI 2026 paper; public prototype and dated 2026-07-10 author explanation checked.

Opened source structure, setup and explicit security warning. Prototype code is available; no installation was performed. Evidence: primary documented.

### RX157

[Author explanation of try and hS at OSDI 2026](https://blog.greenberg.science/posts/osdi2026/)

OSDI 2026 paper; public prototype and dated 2026-07-10 author explanation checked.

Opened a paper coauthor explanation linking the prototype and describing selective effect handling. Date belongs to this article, not the venue paper. Evidence: primary documented.

### RX158

[Cache-Centric Multi-Resource Allocation for Storage Services, FAST 2026](https://www.usenix.org/conference/fast26/presentation/ye)

FAST 2026 paper (February venue record); full method and artifact references checked, code retrieval unresolved.

Opened venue record. February 2026 is supplied; no exact publication day was available. Evidence: primary documented.

### RX159

[HARE full FAST 2026 paper](https://www.usenix.org/system/files/fast26-ye.pdf)

FAST 2026 paper (February venue record); full method and artifact references checked, code retrieval unresolved.

Opened allocation model, fairness goal, evaluations and artifact references. Paper links WiscADSL/bunnyfs and WiscADSL/hopperkv, but direct repository retrieval failed. Evidence: primary documented.

### RX160

[Real-Time Level-of-Detail Rendering with ReSTIR, official project page](https://research.nvidia.com/labs/rtr/publication/wang2026levelofdetail/)

SIGGRAPH 2026 paper; official page dated July 2026, exact publication day unverified.

Opened author/lab abstract and artifact links. Page is dated July 2026, without an exact day. Evidence: primary documented.

### RX161

[Real-Time Level-of-Detail Rendering with ReSTIR, full paper](https://research.nvidia.com/labs/rtr/publication/wang2026levelOfDetail/wang2026levelOfDetail.pdf)

SIGGRAPH 2026 paper; official page dated July 2026, exact publication day unverified.

Opened experiment scenes and limitations: consistent texture mapping is required across LoD levels; current implementation uses one LoD per object per frame. Evidence: primary documented.

### RX162

[Compatibility-Guided Neighbor Selection for ReSTIR, official project page](https://research.nvidia.com/labs/rtr/publication/junkins2026compatibility/)

HPG 2026 paper; official implementation and method documentation checked, paper page dated July 2026.

Opened the author/lab abstract and code link; HPG 2026, page dated July. Full PDF exceeded retrieval size limits, so no numeric result is imported. Evidence: primary documented.

### RX163

[ReSTIR-CGNS author implementation](https://github.com/orion-junkins/ReSTIR-CGNS)

HPG 2026 paper; official implementation and method documentation checked, paper page dated July 2026.

Opened method and code layout: geometry compatibility, weighted reservoir selection, and Falcor 8.0 integration are documented. Evidence: primary documented.

### RX164

[Taming Optimization Variance in Compact Neural Shading Networks, official project page](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/)

SIGGRAPH 2026 paper; official page dated July 2026 and current training artifact checked.

Opened author/lab abstract. SIGGRAPH 2026 paper; page supplies July 2026 without an exact publication day. Evidence: primary documented.

### RX165

[Compact neural shading optimization variance full paper](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/bitterli2026taming.pdf)

SIGGRAPH 2026 paper; official page dated July 2026 and current training artifact checked.

Opened training-method discussion, loss/activation refinements and conclusion; no published speedup is treated as Atlas evidence. Evidence: primary documented.

### RX166

[Neural Appearance training and rendering artifact](https://github.com/NVlabs/neuralappearance)

SIGGRAPH 2026 paper; official page dated July 2026 and current training artifact checked.

Opened prerequisites and paper configurations. Public source includes single-instance and multi-instance configs and requires a supported NVIDIA Cooperative Vector GPU. Evidence: primary documented.

### GHS01

[GitHub REST issues](https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28)

Current official documentation checked 2026-10-28 UTC

Paginated public issue retrieval and issue metadata. Evidence: primary documented.

### GHS02

[GitHub REST issue comments](https://docs.github.com/en/rest/issues/comments?apiVersion=2022-11-28)

Current official documentation checked 2026-10-28 UTC

Paginated approval comment retrieval and author metadata. Evidence: primary documented.

### GHS03

[GitHub collaborator permission API](https://docs.github.com/en/rest/collaborators/collaborators?apiVersion=2022-11-28)

Current official documentation checked 2026-10-28 UTC

Current repository permission checks for non-owner approval authors. Evidence: primary documented.

### GHS04

[GitHub REST best practices](https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api)

Current official documentation checked 2026-10-28 UTC

Bounded serial requests, rate-limit handling and trusted redirects. Evidence: primary documented.

### GHS05

[GitHub issue form syntax](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)

Current official documentation checked 2026-10-28 UTC

Repository issue forms and explicit field definitions. Evidence: primary documented.

### GHS06

[GitHub form schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)

Current official documentation checked 2026-10-28 UTC

Field IDs support URL prefills; rating choice is not preselected. Evidence: primary documented.

### GHS07

[GitHub REST rate limits](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api)

Current official documentation checked 2026-10-28 UTC

Unauthenticated and authenticated request budgets; retrieval failures do not become zero counts. Evidence: primary documented.

### GHS08

[GitHub issue creation URL parameters](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-an-issue)

Current official documentation checked 2026-10-28 UTC

Explicit user submission through prefilled public issue forms. Evidence: primary documented.
