# Research test queue

[Explorer guide](https://github.com/Herbertofury/Engineering-Atlas/wiki/Research-Explorer) · [2026 research radar](https://github.com/Herbertofury/Engineering-Atlas/wiki/Research-Radar-2026) · [Planned test queue](https://github.com/Herbertofury/Engineering-Atlas/wiki/Research-Test-Queue) · [Community reports](https://github.com/Herbertofury/Engineering-Atlas/wiki/Research-Community)

**Canonical repository page:** [docs/research-test-queue.md](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/research-test-queue.md). This wiki edition preserves the documented evidence boundaries; repository commands below run from a project checkout.

**Planning snapshot: October 27, 2026. Every comparison below is planned and has not been run as part of this catalog contribution.** Priority describes the order in which a useful decision could be resolved; it is not a quality ranking or a promise to run cloud jobs.

The [research catalog](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/research-catalog.md) supplies candidate descriptions and dated primary sources. The [ranking methodology](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/research-explorer.md), [research method](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/research-method.md), and [benchmark format](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/benchmark-format.md) define the evidence boundary. Existing measurements remain in their original cohorts. In particular, the [retained Python JSON lab](https://github.com/Herbertofury/Engineering-Atlas/blob/main/experiments/json-lab/README.md) is an earlier run, not evidence that the expanded JSON study below has happened.

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

Candidate sources: [RX092](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx092), [RX103](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx103), [RX104](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx104), [RX093](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx093).

### 2. Local result analytics under memory pressure — `planned-local-analytics-v1`

**Decision:** how should Atlas inspect large benchmark and telemetry datasets on a developer machine?

Compare DuckDB, Polars, and DataFusion with equivalent scans, joins, selective filters, and high-cardinality aggregations. Include a corpus larger than the fixed memory allowance. Treat Vortex versus Parquet as a separately declared storage-format variable rather than changing engine and format together.

**Gates:** full result equivalence, explicit null/number/order semantics, successful out-of-core completion, and identical projections. **Measure:** cold and warmed query time, peak RSS, spill bytes, bytes read, and total analysis time. Retain unsupported-query results instead of shrinking the workload to each engine's strengths.

Candidate sources: [RX094](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx094), [RX095](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx095), [RX096](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx096), [RX131](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx131), [RX132](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx132).

### 3. Python JSON compatibility and complete application cost — `planned-json-contract-v2`

**Decision:** does a faster parser help the target without changing its data contract?

Extend the earlier stdlib/orjson/ujson study with representative publishable files, cold imports/startup, file I/O, downstream validation, allocations, and peak RSS. Retain the earlier lab's distinct nine operation/workload cohorts; do not mix their warmed samples into new trials.

**Gates:** declared duplicate-key policy, exact required integer behavior, Unicode handling, depth limits, nonfinite-number rules, complete outputs, and failure reporting. **Measure:** input-to-validated-result time, cold cost, memory, and per-case semantic outcomes. A library can be ineligible for one numeric contract while remaining a candidate for another.

Candidate sources: [RX135](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx135), [RX136](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx136), [RX137](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx137).

### 4. Complete native file pipeline — `planned-file-pipeline-v1`

**Decision:** would a language/runtime change improve an actual file-processing journey enough to justify migration?

Compare the pinned current implementation with bounded Rust, Zig, or Go prototypes of one complete scan/import operation. Keep filesystem fixtures, filtering, metadata, archive handling, hashing, warning generation, cancellation, and result serialization fixed. Treat a compiler update separately from a rewrite.

**Gates:** complete output hashes, preserved unreadable-file and malformed-input diagnostics, bounded resource use, cancellation/restart correctness, and target-platform packaging. **Measure:** cold full completion, steady-state completion, p95 UI impact, CPU, I/O, RSS, and build/deployment effort. Microkernel speed alone cannot decide the migration.

Candidate sources: [RX044](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx044), [RX045](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx045), [RX046](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx046).

### 5. Portable sandboxed plugin boundary — `planned-plugin-boundary-v1`

**Decision:** can portable plugins retain required behavior within the target's security and latency budget?

Run the same parser/transform plugin natively and in Wasmtime using a fixed WASI component interface. Add Spin only for a service-shaped workload with equivalent networking semantics. Test large streams, cancellation, denied capabilities, malformed inputs, and memory exhaustion.

**Gates:** output parity, declared host capabilities, bounded memory, correct cancellation and traps, and required OS/toolchain support. **Measure:** compilation cost separately from startup, boundary-copy cost, throughput, RSS, and portability failures. Host APIs are part of the security boundary and must remain fixed.

Candidate sources: [RX086](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx086), [RX087](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx087), [RX088](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx088), [RX089](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx089), [RX114](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx114).

### 6. Desktop vertical slice — `planned-desktop-slice-v1`

**Decision:** does Electron or Tauri better meet this application's actual desktop requirements?

Use the same UI and native-service contract for import, full-record search, large-card filtering, keyboard navigation, details, cancellation, durable save/reopen, update, and uninstall. Test supported Windows/macOS/Linux targets separately; include the current application's deployment and accessibility behavior.

**Gates:** feature parity, safe privileged IPC, complete records, accessibility, required webview behavior, and deployment correctness. **Measure:** installed cold startup, input-to-usable and fully verified results, p95 input delay, peak process-tree memory, package size, and maintenance effort. A smaller shell is insufficient if a required workflow fails.

Candidate sources: [RX081](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx081), [RX082](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx082).

## Priority 2: toolchain, rendering, and retrieval comparisons

### 7. Frontend build and edit loop — `planned-frontend-build-v1`

**Decision:** which compatible toolchain reduces the real edit-to-validated-preview loop?

Compare pinned production and development builds for one unchanged application. Vite is an application build driver, while Rolldown and Rspack are bundling components: compare complete supported configurations, not unrelated layer names. Include a declared type-checking baseline and, when compatible, TypeScript's native compiler as a separate variable.

**Gates:** route behavior, asset paths, source maps, type diagnostics, plugin compatibility, and executable output parity. **Measure:** clean builds, incremental rebuilds, HMR-to-usable UI, type-check time, peak RSS, output bytes, and setup effort. Cache state and type-check omission cannot explain a claimed win.

Candidate sources: [RX059](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx059), [RX060](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx060), [RX062](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx062), [RX050](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx050).

### 8. JavaScript service runtime — `planned-js-service-v1`

**Decision:** does Node.js, Bun, or Deno improve a small real service under its required contract?

Run an identical supported handler and dependency set with validation, database calls, structured logging, cancellation, and errors included. Use concurrency and payload distributions representative of the target. Pin framework and runtime versions independently and record unsupported dependencies.

**Gates:** response/body parity, TLS/auth behavior where required, cancellation, backpressure, dependency compatibility, and preserved errors. **Measure:** p50/p95/p99 request latency, throughput at a fixed error/latency budget, startup, RSS, and deployment burden. A no-op HTTP benchmark is a separate microbenchmark.

Candidate sources: [RX056](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx056), [RX057](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx057), [RX058](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx058).

### 9. Game/tool vertical slice — `planned-game-slice-v1`

**Decision:** which engine fits the target's rendering, asset, editing, and export needs?

Implement the same small interactive scene and asset-import workflow in the pinned baseline, Bevy, and Godot where the required target platforms are supported. Fix assets, lighting/quality settings, scripted behaviors, input, animation, and scene complexity. Preserve the target mod/tool ecosystem's pinned compatibility requirements.

**Gates:** visual and behavioral acceptance, import fidelity, input responsiveness, required export formats, target-device operation, and license compatibility. **Measure:** frame-time distribution, load/import time, memory/VRAM, iteration time, binary size, and implementation effort. Missing features are disqualifications, not faster frame times.

Candidate sources: [RX083](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx083), [RX084](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx084).

### 10. Labeled catalog retrieval — `planned-catalog-retrieval-v1`

**Decision:** which retrieval system best serves the catalog's actual search queries at the required quality?

Compare pgvector, Qdrant, LanceDB, and Milvus using the same corpus, embedding model, ground-truth neighbors, query labels, filter selectivities, updates, and resource limits. Maintain distinct dense, lexical, and hybrid configurations. Preserve code identifiers, exact terms, and tenant boundaries in the test set.

**Gates:** minimum declared recall/relevance, filter correctness, update visibility, and failure/recovery requirements. **Measure:** recall@k, nDCG@10, p95/p99 latency, build/update time, index size, and full-service resource cost. Report the quality/latency tradeoff; do not rank a lower-recall run as an unconditional winner.

Candidate sources: [RX099](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx099), [RX100](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx100), [RX101](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx101), [RX102](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx102).

### 11. Local model inference — `planned-local-inference-v1`

**Decision:** which supported local runtime meets a desktop assistant's response and memory requirements?

Compare llama.cpp, MLX LM, and MLC LLM only within hardware/OS combinations each supports. Fix model identity, weights, quantization, tokenizer, context, generation settings, task set, and output-quality gates. Separate initial model loading, prompt processing, and generation.

**Gates:** required task quality, complete output, supported context, deterministic settings where available, memory fit, and target packaging. **Measure:** time to first token, inter-token latency, prompt/decode throughput, peak RAM/VRAM, energy where instrumented, and setup burden. Cross-hardware results need separate cohorts; quantization changes need separate configurations.

Candidate sources: [RX005](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx005), [RX006](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx006), [RX007](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx007).

### 12. Desktop profiling effectiveness — `planned-desktop-diagnostics-v1`

**Decision:** which instrumentation exposes the target's frame, scheduling, allocation, or graphics fault with acceptable overhead?

Seed known performance and correctness faults in an owned reference scene/import pipeline. Compare uninstrumented execution with Tracy and Perfetto using a common event scope. Evaluate RenderDoc's frame-debugging task in a separate graphics-debugging cohort; it performs a different job from continuous CPU tracing.

**Gates:** required event/fault visibility, usable saved traces, supported graphics APIs/OS, and bounded capture overhead. **Measure:** diagnosis accuracy/time, frame-time overhead, event loss, trace size, and analysis memory. Do not combine distinct profiler roles into one score.

Candidate sources: [RX110](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx110), [RX111](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx111), [RX112](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx112).

## Priority 3: resource-dependent and longer-running studies

### 13. GPU inference serving — `planned-gpu-serving-v1`

**Decision:** which serving configuration gives the best useful capacity within a latency and quality budget?

Compare vLLM, SGLang, and TensorRT-LLM on matching supported GPU configurations, model weights, precision, context lengths, request traces, and batching policies. Run cold and warm cache lanes separately. Introduce attention kernels, speculative decoding, or KV-cache systems one variable at a time.

**Gates:** model/output-quality equivalence, request completion, declared latency SLO, memory limits, and timeout accounting. **Measure:** goodput meeting the SLO, time to first token, inter-token tails, GPU memory, energy where measured, and cost per completed valid task. Provisioning and resource spending are separate execution decisions.

Candidate sources: [RX001](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx001), [RX002](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx002), [RX004](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx004).

### 14. Coding-agent configurations — `planned-agent-protocol-v1`

**Decision:** which complete agent configuration resolves target-like work reliably within a fixed budget?

Choose one benchmark protocol and task split per cohort. Compare exact model, reasoning effort, agent/harness, tool permissions, network policy, token/time/cost limits, and retry policy. OpenHands, LangGraph, and smolagents are implementation candidates, not interchangeable evidence for a model ranking. Keep SWE-Bench Pro and ProgramBench results in their own protocols.

**Gates:** pristine independent regrading, held-out tests, sandbox integrity, no target-patch leakage, complete trajectories, and preserved failed attempts. **Measure:** resolved tasks, cost per valid resolution, wall time, intervention count, and uncertainty. A leaderboard report stays external until the matching protocol is reproduced locally.

Candidate sources: [RX012](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx012), [RX013](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx013), [RX014](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx014), [RX020](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx020), [RX042](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx042).

### 15. Recoverable experiment orchestration — `planned-durable-jobs-v1`

**Decision:** which workflow system reliably completes Atlas's multi-step jobs under failures?

Implement the same import, validate, execute, and artifact-publish workflow in the current baseline, Temporal, DBOS, and Restate. Use isolated fixtures and idempotent external effects. Inject worker termination, duplicate delivery, service restart, delayed dependencies, and an upgrade between workflow steps.

**Gates:** no lost acknowledged job, explicit retry semantics, no unaccounted duplicated effect, recoverable checkpoints, and retained error history. **Measure:** completed jobs, recovery time, p95 orchestration overhead, database/storage growth, and operating effort. Measure self-hosted and managed deployments separately.

Candidate sources: [RX105](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx105), [RX106](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx106), [RX107](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx107).

### 16. Reproducible release and evidence pipeline — `planned-release-evidence-v1`

**Decision:** can the release pipeline produce traceable, verifiable artifacts with acceptable developer cost?

Compare the existing pipeline with a pinned Dagger-based implementation of the same checks and outputs. Generate an SBOM with Syft, verify artifact identity with Cosign, and record applicable SLSA controls. Compare OSV-Scanner and Trivy on the same known dependency fixtures as a separate scanning sub-cohort; keep Scorecard repository checks as contextual signals.

**Gates:** identical artifacts or explained reproducible normalization, complete warnings, correct invalidation, tamper/identity rejection, SBOM ground-truth coverage, and safe secret handling. **Measure:** clean/incremental completion, cache correctness, provenance completeness, scan precision/recall, and developer effort. Signing, repository hygiene, and runtime correctness are separate properties.

Candidate sources: [RX130](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx130), [RX127](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx127), [RX123](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx123), [RX124](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx124), [RX128](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx128), [RX126](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx126), [RX125](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx125).

## Shared correctness instruments

Use Hypothesis or fast-check to explore input/state properties where those language ecosystems fit; AFL++ for owned native parser fixtures; TLA+/TLC for bounded concurrency invariants; Testcontainers for disposable service dependencies; and Jepsen-style histories for distributed consistency questions. These tools address different failure classes and are not interchangeable competitors. A tool's own correctness and version matter, so retain reproduction seeds, failing inputs, and checker revisions. Candidate sources: [RX115](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx115), [RX116](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx116), [RX122](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx122), [RX117](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx117), [RX119](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx119), [RX118](https://github.com/Herbertofury/Engineering-Atlas/blob/main/docs/sources.md#rx118).

All source identifiers above resolve through the [primary-source register](https://github.com/Herbertofury/Engineering-Atlas/blob/main/data/sources.json). Their presence supports candidate and methodology discovery; it does not establish a result for any planned cohort. The next durable artifact for a chosen plan is a completed [experiment definition](https://github.com/Herbertofury/Engineering-Atlas/blob/main/templates/experiment.md), followed by raw evidence and a conditional decision record.
