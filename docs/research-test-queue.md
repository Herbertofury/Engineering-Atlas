# Research test queue

**Planning snapshot: October 27, 2026; stack-layer extension reviewed October 28 UTC. Every comparison below is planned and has not been run as part of this catalog contribution.** Priority describes the order in which a useful decision could be resolved; it is not a quality ranking or a promise to run cloud jobs.

The queue now contains **20 planned comparisons**. The [stack-layer comparison map](stack-selection.md#stack-layer-comparison-map) groups candidate roles without creating duplicate plans. The [research catalog](research-catalog.md) supplies candidate descriptions and dated primary sources. The [ranking methodology](research-explorer.md), [research method](research-method.md), and [benchmark format](benchmark-format.md) define the evidence boundary. Existing measurements remain in their original cohorts. In particular, the [retained Python JSON lab](../experiments/json-lab/README.md) is an earlier run, not evidence that the expanded JSON study below has happened.

## Admission and ranking rules

Start each experiment with the actual target's current implementation, its revision, required behavior, and a minimum useful improvement chosen before the results are seen. A comparison needs the same input corpus, complete output, warning/error policy, durability, security boundary, feature coverage, and resource budget. Record an explicit reason for rejecting an alternative.

The IDs below identify proposed plans. Do not add fabricated observations or empty measured cohorts to make the queue look populated. Before execution, register exact configuration identities and a cohort with the correct common evaluation track. Two candidates appearing in the same discovery category does not make their measurements compatible. Versions, model settings, hardware, protocols, and budgets that change the meaning of a result require separate configuration or cohort identities.

For every run, retain input and harness hashes, dependencies/build flags, OS and hardware, random seeds, run order, warm-up/cache conditions, timeouts, failures, full result artifacts, and resource measurements. Use paired or randomized runs when that design fits the workload. Do not delete failed attempts or pool cold and warmed measurements. Hash normalization must not remove warnings, missing records, numeric distinctions, or required ordering.

Apply correctness and required-feature gates before sorting eligible configurations by the declared primary metric. Publish tradeoffs, uncertainty, disqualifications, and ties. A faster but incompatible configuration remains disqualified; a vendor leaderboard result remains externally reported. Adoption into another project still requires that project's current baseline and acceptance gates.

## Priority 1: local decisions with reusable evidence

### 1. Local catalog transactions — `planned-local-catalog-v1`

**Decision:** which embedded store fits a desktop catalog's durable metadata workload?

Compare the current store with SQLite, redb, and RocksDB implementations of the same record and index contract. Use small, typical, and large catalogs; imports, indexed lookups, concurrent readers, deletion, rename, and interrupted transactions. Put shared PostgreSQL service operation in a separate deployment cohort.

**Gates:** identical committed records and warnings after reopen; declared transaction boundaries; no acknowledged-write loss under the selected failure model. **Measure:** import-to-durable-completion time, p95/p99 lookup latency, memory, storage amplification, recovery time, and integration burden. A faster cache-only write path is ineligible.

Candidate sources: [RX092], [RX103], [RX104], [RX093].

### 2. Local result analytics under memory pressure — `planned-local-analytics-v1`

**Decision:** how should Atlas inspect large benchmark and telemetry datasets on a developer machine?

Compare DuckDB, Polars, and DataFusion with equivalent scans, joins, selective filters, and high-cardinality aggregations. Include a corpus larger than the fixed memory allowance. Treat Vortex versus Parquet as a separately declared storage-format variable rather than changing engine and format together.

**Gates:** full result equivalence, explicit null/number/order semantics, successful out-of-core completion, and identical projections. **Measure:** cold and warmed query time, peak RSS, spill bytes, bytes read, and total analysis time. Retain unsupported-query results instead of shrinking the workload to each engine's strengths.

Candidate sources: [RX094], [RX095], [RX096], [RX131], [RX132].

### 3. Python JSON compatibility and complete application cost — `planned-json-contract-v2`

**Decision:** does a faster parser help the target without changing its data contract?

Extend the earlier stdlib/orjson/ujson study with representative publishable files, cold imports/startup, file I/O, downstream validation, allocations, and peak RSS. Retain the earlier lab's distinct nine operation/workload cohorts; do not mix their warmed samples into new trials.

**Gates:** declared duplicate-key policy, exact required integer behavior, Unicode handling, depth limits, nonfinite-number rules, complete outputs, and failure reporting. **Measure:** input-to-validated-result time, cold cost, memory, and per-case semantic outcomes. A library can be ineligible for one numeric contract while remaining a candidate for another.

Candidate sources: [RX135], [RX136], [RX137].

### 4. Complete native file pipeline — `planned-file-pipeline-v1`

**Decision:** would a language/runtime change improve an actual file-processing journey enough to justify migration?

Compare the pinned current implementation with bounded Rust, Zig, or Go prototypes of one complete scan/import operation. Keep filesystem fixtures, filtering, metadata, archive handling, hashing, warning generation, cancellation, and result serialization fixed. Treat a compiler update separately from a rewrite.

**Gates:** complete output hashes, preserved unreadable-file and malformed-input diagnostics, bounded resource use, cancellation/restart correctness, and target-platform packaging. **Measure:** cold full completion, steady-state completion, p95 UI impact, CPU, I/O, RSS, and build/deployment effort. Microkernel speed alone cannot decide the migration.

Split the workload into controlled variables: WalkDir versus `ignore` traversal with all required hidden/ignore filtering explicitly disabled; fresh scan versus watcher/USN reconciliation; hash choice; chunking/delta; compression; and archive implementation. Keep the complete end-to-end run as the deciding outcome. Include symlinks/reparse points, hard links, case/Unicode collisions, unreadable entries, concurrent mutation, archive bombs and traversal attempts. Never infer multi-file durability from a single replacement primitive.

Candidate sources: [RX044], [RX045], [RX046]. Extension sources: [ST079](../docs/sources.md#st079) · [ST082](../docs/sources.md#st082) · [ST085](../docs/sources.md#st085) · [ST088](../docs/sources.md#st088) · [ST090](../docs/sources.md#st090) · [ST093](../docs/sources.md#st093) · [ST099](../docs/sources.md#st099) · [ST103](../docs/sources.md#st103) · [ST105](../docs/sources.md#st105).

### 5. Portable sandboxed plugin boundary — `planned-plugin-boundary-v1`

**Decision:** can portable plugins retain required behavior within the target's security and latency budget?

Run the same parser/transform plugin natively and in Wasmtime using a fixed WASI component interface. Add Spin only for a service-shaped workload with equivalent networking semantics. Test large streams, cancellation, denied capabilities, malformed inputs, and memory exhaustion.

**Gates:** output parity, declared host capabilities, bounded memory, correct cancellation and traps, and required OS/toolchain support. **Measure:** compilation cost separately from startup, boundary-copy cost, throughput, RSS, and portability failures. Host APIs are part of the security boundary and must remain fixed.

Add Luau only as a separate embedded-language configuration with a fixed host API. Compare AppContainer/LPAC on eligible Windows systems and bubblewrap on eligible Linux systems for owned native-helper workloads. Do not treat an in-process VM, a native plugin ABI, an OS sandbox and an updater as equivalent security boundaries. Pin supported WASI/runtime/toolchain combinations; current 0.3 availability does not imply every browser or language path supports it.

Candidate sources: [RX086], [RX087], [RX088], [RX089], [RX114]. Extension sources: [ST054](../docs/sources.md#st054) · [ST055](../docs/sources.md#st055) · [ST154](../docs/sources.md#st154) · [ST155](../docs/sources.md#st155) · [ST151](../docs/sources.md#st151) · [ST152](../docs/sources.md#st152) · [ST077](../docs/sources.md#st077) · [ST078](../docs/sources.md#st078).

### 6. Desktop vertical slice — `planned-desktop-slice-v1`

**Decision:** which complete desktop configuration meets the application's actual platform and interaction requirements?

Use the same UI and native-service contract for import, full-record search, large-card filtering, keyboard navigation, details, cancellation, durable save/reopen, update, and uninstall. Test supported Windows/macOS/Linux targets separately; include the current application's deployment and accessibility behavior.

**Gates:** feature parity, safe privileged IPC, complete records, accessibility, required webview behavior, and deployment correctness. **Measure:** installed cold startup, input-to-usable and fully verified results, p95 input delay, peak process-tree memory, package size, and maintenance effort. A smaller shell is insufficient if a required workflow fails.

For a Windows-native cohort, add WinUI/Windows App SDK; compare Avalonia, Slint or egui only when the same required feature set can be implemented. Keep renderer, shell and language changes as separate declared variables. Virtualize presentation while retaining the complete collection and stable item identities. Include variable-height rows, media load/error, rapid filter/sort, keyboard focus, selection, screen readers, IME, high DPI and insert/delete while scrolling. TanStack Virtual and native collection virtualization are role-specific tools, not whole-app substitutes.

Candidate sources: [RX081], [RX082]. Extension sources: [ST026](../docs/sources.md#st026) · [ST027](../docs/sources.md#st027) · [ST030](../docs/sources.md#st030) · [ST031](../docs/sources.md#st031) · [ST034](../docs/sources.md#st034) · [ST035](../docs/sources.md#st035) · [ST037](../docs/sources.md#st037) · [ST038](../docs/sources.md#st038) · [ST065](../docs/sources.md#st065) · [ST066](../docs/sources.md#st066) · [ST007](../docs/sources.md#st007) · [ST008](../docs/sources.md#st008).

## Priority 2: toolchain, rendering, and retrieval comparisons

### 7. Frontend build and edit loop — `planned-frontend-build-v1`

**Decision:** which compatible toolchain reduces the real edit-to-validated-preview loop?

Compare pinned production and development builds for one unchanged application. Vite is an application build driver, while Rolldown and Rspack are bundling components: compare complete supported configurations, not unrelated layer names. Include a declared type-checking baseline and, when compatible, TypeScript's native compiler as a separate variable.

**Gates:** route behavior, asset paths, source maps, type diagnostics, plugin compatibility, and executable output parity. **Measure:** clean builds, incremental rebuilds, HMR-to-usable UI, type-check time, peak RSS, output bytes, and setup effort. Cache state and type-check omission cannot explain a claimed win.

Candidate sources: [RX059], [RX060], [RX062], [RX050].

### 8. JavaScript service runtime — `planned-js-service-v1`

**Decision:** does Node.js, Bun, or Deno improve a small real service under its required contract?

Run an identical supported handler and dependency set with validation, database calls, structured logging, cancellation, and errors included. Use concurrency and payload distributions representative of the target. Pin framework and runtime versions independently and record unsupported dependencies.

**Gates:** response/body parity, TLS/auth behavior where required, cancellation, backpressure, dependency compatibility, and preserved errors. **Measure:** p50/p95/p99 request latency, throughput at a fixed error/latency budget, startup, RSS, and deployment burden. A no-op HTTP benchmark is a separate microbenchmark.

Candidate sources: [RX056], [RX057], [RX058].

### 9. Game/tool vertical slice — `planned-game-slice-v1`

**Decision:** which engine fits the target's rendering, asset, editing, and export needs?

Implement the same small interactive scene and asset-import workflow in the pinned baseline, Bevy, and Godot where the required target platforms are supported. Fix assets, lighting/quality settings, scripted behaviors, input, animation, and scene complexity. Preserve the target mod/tool ecosystem's pinned compatibility requirements.

**Gates:** visual and behavioral acceptance, import fidelity, input responsiveness, required export formats, target-device operation, and license compatibility. **Measure:** frame-time distribution, load/import time, memory/VRAM, iteration time, binary size, and implementation effort. Missing features are disqualifications, not faster frame times.

For browser-specific slices, compare complete Three.js or PixiJS configurations in separate 3D/2D cohorts; add Rapier only where equivalent physics is required. Separate renderer/API migration from engine replacement. Record unsupported shaders, post-processing, physics determinism assumptions, browser fallback, context loss and export restrictions as eligibility outcomes. Browser export and native rendering cannot share a frame-time ranking without equivalent hardware and visual work.

Candidate sources: [RX083], [RX084]. Extension sources: [ST011](../docs/sources.md#st011) · [ST012](../docs/sources.md#st012) · [ST013](../docs/sources.md#st013) · [ST014](../docs/sources.md#st014) · [ST069](../docs/sources.md#st069) · [ST070](../docs/sources.md#st070) · [ST039](../docs/sources.md#st039) · [ST040](../docs/sources.md#st040).

### 10. Labeled catalog retrieval — `planned-catalog-retrieval-v1`

**Decision:** which retrieval system best serves the catalog's actual search queries at the required quality?

Compare pgvector, Qdrant, LanceDB, and Milvus using the same corpus, embedding model, ground-truth neighbors, query labels, filter selectivities, updates, and resource limits. Maintain distinct dense, lexical, and hybrid configurations. Preserve code identifiers, exact terms, and tenant boundaries in the test set.

**Gates:** minimum declared recall/relevance, filter correctness, update visibility, and failure/recovery requirements. **Measure:** recall@k, nDCG@10, p95/p99 latency, build/update time, index size, and full-service resource cost. Report the quality/latency tradeoff; do not rank a lower-recall run as an unconditional winner.

Keep a SQLite FTS5 or Tantivy lexical baseline for exact identifiers, names and paths. Add semantic or hybrid retrieval only when held-out relevance labels show the extra system is useful. Browser IndexedDB/Dexie persistence is a separate host contract; do not compare its transaction latency to a remote vector service as one storage score.

Candidate sources: [RX099], [RX100], [RX101], [RX102]. Extension sources: [ST117](../docs/sources.md#st117) · [ST122](../docs/sources.md#st122) · [ST115](../docs/sources.md#st115) · [ST116](../docs/sources.md#st116) · [ST009](../docs/sources.md#st009) · [ST010](../docs/sources.md#st010).

### 11. Local model inference — `planned-local-inference-v1`

**Decision:** which supported local runtime meets a desktop assistant's response and memory requirements?

Compare llama.cpp, MLX LM, and MLC LLM only within hardware/OS combinations each supports. Fix model identity, weights, quantization, tokenizer, context, generation settings, task set, and output-quality gates. Separate initial model loading, prompt processing, and generation.

**Gates:** required task quality, complete output, supported context, deterministic settings where available, memory fit, and target packaging. **Measure:** time to first token, inter-token latency, prompt/decode throughput, peak RAM/VRAM, energy where instrumented, and setup burden. Cross-hardware results need separate cohorts; quantization changes need separate configurations.

Candidate sources: [RX005], [RX006], [RX007].

### 12. Desktop profiling effectiveness — `planned-desktop-diagnostics-v1`

**Decision:** which instrumentation exposes the target's frame, scheduling, allocation, or graphics fault with acceptable overhead?

Seed known performance and correctness faults in an owned reference scene/import pipeline. Compare uninstrumented execution with Tracy and Perfetto using a common event scope. Evaluate RenderDoc's frame-debugging task in a separate graphics-debugging cohort; it performs a different job from continuous CPU tracing.

**Gates:** required event/fault visibility, usable saved traces, supported graphics APIs/OS, and bounded capture overhead. **Measure:** diagnosis accuracy/time, frame-time overhead, event loss, trace size, and analysis memory. Do not combine distinct profiler roles into one score.

Candidate sources: [RX110], [RX111], [RX112].

## Priority 3: resource-dependent and longer-running studies

### 13. GPU inference serving — `planned-gpu-serving-v1`

**Decision:** which serving configuration gives the best useful capacity within a latency and quality budget?

Compare vLLM, SGLang, and TensorRT-LLM on matching supported GPU configurations, model weights, precision, context lengths, request traces, and batching policies. Run cold and warm cache lanes separately. Introduce attention kernels, speculative decoding, or KV-cache systems one variable at a time.

**Gates:** model/output-quality equivalence, request completion, declared latency SLO, memory limits, and timeout accounting. **Measure:** goodput meeting the SLO, time to first token, inter-token tails, GPU memory, energy where measured, and cost per completed valid task. Provisioning and resource spending are separate execution decisions.

Candidate sources: [RX001], [RX002], [RX004].

### 14. Coding-agent configurations — `planned-agent-protocol-v1`

**Decision:** which complete agent configuration resolves target-like work reliably within a fixed budget?

Choose one benchmark protocol and task split per cohort. Compare exact model, reasoning effort, agent/harness, tool permissions, network policy, token/time/cost limits, and retry policy. OpenHands, LangGraph, and smolagents are implementation candidates, not interchangeable evidence for a model ranking. Keep SWE-Bench Pro and ProgramBench results in their own protocols.

**Gates:** pristine independent regrading, held-out tests, sandbox integrity, no target-patch leakage, complete trajectories, and preserved failed attempts. **Measure:** resolved tasks, cost per valid resolution, wall time, intervention count, and uncertainty. A leaderboard report stays external until the matching protocol is reproduced locally.

Candidate sources: [RX012], [RX013], [RX014], [RX020], [RX042].

### 15. Recoverable experiment orchestration — `planned-durable-jobs-v1`

**Decision:** which workflow system reliably completes Atlas's multi-step jobs under failures?

Implement the same import, validate, execute, and artifact-publish workflow in the current baseline, Temporal, DBOS, and Restate. Use isolated fixtures and idempotent external effects. Inject worker termination, duplicate delivery, service restart, delayed dependencies, and an upgrade between workflow steps.

**Gates:** no lost acknowledged job, explicit retry semantics, no unaccounted duplicated effect, recoverable checkpoints, and retained error history. **Measure:** completed jobs, recovery time, p95 orchestration overhead, database/storage growth, and operating effort. Measure self-hosted and managed deployments separately.

Candidate sources: [RX105], [RX106], [RX107].

### 16. Reproducible release and evidence pipeline — `planned-release-evidence-v1`

**Decision:** can the release pipeline produce traceable, verifiable artifacts with acceptable developer cost?

Compare the existing pipeline with a pinned Dagger-based implementation of the same checks and outputs. Generate an SBOM with Syft, verify artifact identity with Cosign, and record applicable SLSA controls. Compare OSV-Scanner and Trivy on the same known dependency fixtures as a separate scanning sub-cohort; keep Scorecard repository checks as contextual signals.

**Gates:** identical artifacts or explained reproducible normalization, complete warnings, correct invalidation, tamper/identity rejection, SBOM ground-truth coverage, and safe secret handling. **Measure:** clean/incremental completion, cache correctness, provenance completeness, scan precision/recall, and developer effort. Signing, repository hygiene, and runtime correctness are separate properties.

Include a Nix-pinned environment as its own build configuration and use diffoscope to inspect differing artifacts, with time/space limits for hostile or very large inputs. A Dagger beta belongs in a separate preview lane. Verify actual signer/issuer/digest policy and dependency extraction against ground truth; an attached signature, provenance file or SBOM is not itself a successful verification. Keep PETRA's confidential SBOM exchange protocol as a research follow-on rather than attributing its guarantees to ordinary SBOM generation.

Candidate sources: [RX130], [RX127], [RX123], [RX124], [RX128], [RX126], [RX125]. Extension sources: [ST156](../docs/sources.md#st156) · [ST161](../docs/sources.md#st161) · [ST176](../docs/sources.md#st176) · [ST179](../docs/sources.md#st179) · [ST185](../docs/sources.md#st185) · [ST181](../docs/sources.md#st181) · [ST189](../docs/sources.md#st189) · [ST169](../docs/sources.md#st169).

## Stack-layer extension: focused acceptance plans

### 17. Mod dependency and compatibility planning — `planned-mod-resolution-v1` — P1

**Decision:** which dependency solver produces correct, understandable and reproducible plans for a pinned game/runtime/loader ecosystem?

Compare the current resolver, libsolv and Resolvo on a common normalized contract for version ranges, optional dependencies, conflicts, replacements, features, preferred versions and installed state. Use publishable synthetic metadata plus a permitted real corpus; verify small cases with exhaustive enumeration. Fabric, NeoForge and BepInEx define separate compatibility fixtures for their actual ecosystems, not three interchangeable solvers. A migration primer is not proof that a specific stable loader artifact exists.

**Gates:** every requested dependency satisfied, all conflicts retained, deterministic preference handling, correct unsatisfiable explanation, cancellation and no mutation before acceptance. Keep large solver output and all warning/error records. Include corrupt metadata, dependency cycles, disappearing versions and game/runtime mismatch. **Measure:** complete plan latency and tails, peak RSS, explanation accuracy/completeness, decision stability and integration complexity. Then validate selected plans by actual startup/load-order tests in isolated licensed fixtures; solver satisfiability alone does not prove mod compatibility.

Candidate sources: [ST132](../docs/sources.md#st132) · [ST133](../docs/sources.md#st133) · [ST135](../docs/sources.md#st135) · [ST136](../docs/sources.md#st136) · [ST045](../docs/sources.md#st045) · [ST046](../docs/sources.md#st046) · [ST048](../docs/sources.md#st048) · [ST049](../docs/sources.md#st049) · [ST051](../docs/sources.md#st051) · [ST052](../docs/sources.md#st052).

### 18. Verified transfer, installation and rollback — `planned-verified-install-v1` — P1

**Decision:** can a bounded download/update pipeline preserve trusted content and recoverable installation through interruption and adversarial input?

Compare the current complete flow with validator-bound HTTP resume, a separately declared bita delta-transfer configuration, and a journaled staging/commit/rollback proposal. Keep full-download and full-reinstall controls. Test TUF/reference or tough metadata verification independently from Velopack/Sparkle platform packaging; then compose only configurations that pass both contracts. Pin stable and prerelease updater channels separately. iroh-blobs is a watchlist follow-on while its current-line production warning remains unresolved.

**Gates:** reject stale/expired or wrong-role metadata, threshold/signature failures, rollback/freeze attempts, untrusted destinations, path escape/reparse races and content mismatches. Never mix bytes from two origin versions after an ETag change or ignored Range. Inject disconnect, cancellation, disk full, process termination and OS restart at every durable transition. Preserve user files and owned-file boundaries; verify final trees and recovery journals. Single-file replacement is not a multi-file transaction or proof of power-loss durability. **Measure:** verified time-to-usable, transferred/written bytes, peak memory/disk, recovery time, unnecessary redownloads and complete error visibility. Publish every failed recovery.

Candidate sources: [ST112](../docs/sources.md#st112) · [ST108](../docs/sources.md#st108) · [ST098](../docs/sources.md#st098) · [ST118](../docs/sources.md#st118) · [ST138](../docs/sources.md#st138) · [ST140](../docs/sources.md#st140) · [ST144](../docs/sources.md#st144) · [ST148](../docs/sources.md#st148) · [ST113](../docs/sources.md#st113).

### 19. Browser worker and native-message lifecycle — `planned-extension-lifecycle-v1` — P1

**Decision:** which extension/core boundary survives browser lifecycle constraints with the required security and complete outputs?

Compare a minimal MV3 baseline with WXT as the build/configuration variable. Keep a versioned native-messaging protocol, origin/sender checks and capability allowlists fixed. Compare structured clone, transfer and Comlink only for the same worker contract. Keep UI framework and storage changes separate; evaluate Lit and Dexie where they fit the chosen host. Compare Ajv standalone and Zod only with the same validation, transforms, warnings and diagnostic output. A boolean-only validation fast path belongs in a separate contract from complete error reporting.

**Gates:** worker termination at every step, browser restart, native disconnect/reconnect, backpressure, cancellation, duplicate delivery, upgrade/version skew, corrupt/truncated frames and oversized payloads. Persist durable state and prove idempotency; a global variable is not a checkpoint. Limit offscreen documents to supported reasons and lifecycle requirements. Include CSP-compatible builds and DOMPurify at the actual untrusted markup boundary; post-sanitization mutation must not reintroduce unsafe markup. **Measure:** correct completed tasks, recovery latency, p95 message/input delay, serialization cost, CPU/memory and full diagnostic parity.

Candidate sources: [ST024](../docs/sources.md#st024) · [ST023](../docs/sources.md#st023) · [ST001](../docs/sources.md#st001) · [ST005](../docs/sources.md#st005) · [ST009](../docs/sources.md#st009) · [ST003](../docs/sources.md#st003) · [ST015](../docs/sources.md#st015) · [ST018](../docs/sources.md#st018) · [ST021](../docs/sources.md#st021).

### 20. Asset fidelity, decoding and delivery — `planned-asset-pipeline-v1` — P2

**Decision:** which asset transformations improve the complete import-to-frame journey without unacceptable visual or behavioral changes?

Use permitted public assets and a Blender/export baseline. Evaluate glTF Transform, meshoptimizer and Basis Universal one transformation at a time: mesh layout/quantization, geometry compression, texture format/quality and packaging. Fix animations, materials, color spaces, alpha, UVs, morph targets, metadata and target devices. Include unsupported extensions, huge textures, malformed data and cancellation. Neural texture ES and the multilayer ReSTIR paper remain separate research lanes with artifact, license and full-paper review gates; a source abstract is insufficient to import reported results.

**Gates:** predeclared perceptual and exact semantic checks, complete animation/material behavior, decoder/platform compatibility, retained metadata and verified asset licensing. **Measure:** network bytes, decode/transcode/upload time, first usable and complete frame, frame tails, CPU/RAM/VRAM and quality error. A smaller compressed file that increases startup or loses required visuals does not automatically win. Retain full quality metrics, per-asset failures and reference renders.

Candidate sources: [ST056](../docs/sources.md#st056) · [ST058](../docs/sources.md#st058) · [ST060](../docs/sources.md#st060) · [ST062](../docs/sources.md#st062) · [ST063](../docs/sources.md#st063) · [ST064](../docs/sources.md#st064).

## Shared correctness instruments

Use Hypothesis or fast-check to explore input/state properties where those language ecosystems fit; AFL++ for owned native parser fixtures; TLA+/TLC for bounded concurrency invariants; Testcontainers for disposable service dependencies; and Jepsen-style histories for distributed consistency questions. These tools address different failure classes and are not interchangeable competitors. A tool's own correctness and version matter, so retain reproduction seeds, failing inputs, and checker revisions. Candidate sources: [RX115], [RX116], [RX122], [RX117], [RX119], [RX118].

For race/atomicity work, add bounded Loom models and rr replay only on supported platforms; preserve Loom's documented memory-model limits and rr's coverage/hardware limits. AtomSanitizer is a research comparison with its own artifact/license gate. Inspect the exact AFL++ tag and its current licensing before reuse. Extension sources: [ST167](../docs/sources.md#st167) · [ST168](../docs/sources.md#st168) · [ST163](../docs/sources.md#st163) · [ST164](../docs/sources.md#st164) · [ST172](../docs/sources.md#st172) · [ST173](../docs/sources.md#st173) · [ST199](../docs/sources.md#st199) · [ST200](../docs/sources.md#st200).

All source identifiers above resolve through the [primary-source register](../data/sources.json). Their presence supports candidate and methodology discovery; it does not establish a result for any planned cohort. The next durable artifact for a chosen plan is a completed [experiment definition](../templates/experiment.md), followed by raw evidence and a conditional decision record.
