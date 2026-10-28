# Research catalog

**Snapshot: 2026-10-27 (America/Denver).** Source checks use UTC dates.

[Interactive Explorer](https://herbertofury.github.io/Engineering-Atlas/explorer/) · [Ranking methodology](research-explorer.md) · [Test queue](research-test-queue.md)

Every entry below is a research candidate. Priority is an editorial test queue, not a performance score. Existing local measurements are exposed separately by exact cohort. No universal winner is implied.

## AI systems (18)

### MLX LM

**repository · established · P1** · ID: mlx-lm

MLX package for language-model generation, quantization, and fine-tuning on Apple Silicon.

**Current signal:** See the dated primary sources.

**Test:** Compare inference and a small LoRA training task against equivalent Apple Silicon alternatives.

**Measure:** TTFT; tokens/s; unified memory peak; training time; held-out task accuracy.

**Constraints:** Apple Silicon results do not imply NVIDIA or CPU performance. Keep model and quantization equivalent.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX006](https://github.com/ml-explore/mlx-lm)

### SGLang

**framework · established · P1** · ID: sglang

Serving framework with prefix reuse, speculative decoding, and separate prefill/decode execution.

**Current signal:** Opened release notes describe Rust-backed prefix caching and live switching between prefill and decode roles.

**Test:** Replay the same desktop assistant and multi-turn workload used for vLLM, with cache reuse reported separately.

**Measure:** p95 TTFT; p95 inter-token latency; requests/s under SLO; peak VRAM; failure rate.

**Constraints:** Model architecture and kernel support differ by hardware. Document cache hit distribution and queueing.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX002](https://github.com/sgl-project/sglang/releases)

### llama.cpp

**repository · established · P1** · ID: llama-cpp

C/C++ inference runtime supporting quantized models and CPU/GPU execution across desktop hardware.

**Current signal:** See the dated primary sources.

**Test:** Run a fixed local coding-assistant workload on representative Windows, Linux, and Apple Silicon systems.

**Measure:** prompt tokens/s; generation tokens/s; resident memory; energy per task; answer quality.

**Constraints:** Treat each device/backend/quantization as a separate cohort. Quantized model quality must be checked against the reference checkpoint.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX005](https://github.com/ggml-org/llama.cpp)

### vLLM

**framework · established · P1** · ID: vllm

LLM serving engine with paged KV memory, continuous batching, prefix caching, quantization, and distributed inference.

**Current signal:** Current docs list DFlash speculation and separated prefill/decode alongside multiple hardware plugins.

**Test:** Compare one pinned model and precision against SGLang under identical prompt lengths, arrivals, hardware, and quality checks.

**Measure:** p50/p95 TTFT; p50/p95 inter-token latency; successful tokens/s; peak VRAM; cost per successful request.

**Constraints:** Pin kernels and engine commit. Warm cache and cold cache are separate cohorts. Throughput alone can hide tail latency regressions.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX001](https://github.com/vllm-project/vllm/blob/main/docs/README.md)

### FlashInfer

**repository · established · P2** · ID: flashinfer

Kernel library for serving language models, including attention and mixture-of-experts operations.

**Current signal:** v0.7.2.post1 was released on October 23, 2026; release notes cover newer GPU backends and fused operations.

**Test:** Microbenchmark representative tensor shapes, then confirm effects in an end-to-end serving engine.

**Measure:** kernel latency; memory bandwidth; numerical error; end-to-end request latency.

**Constraints:** Kernel-only gains do not establish application speedup. Pin GPU architecture, CUDA, and precision.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX003](https://github.com/flashinfer-ai/flashinfer/releases)

### LMCache

**framework · emerging · P2** · ID: lmcache

KV-cache layer offering shared caching and separate cache processes for serving engines.

**Current signal:** See the dated primary sources.

**Test:** Replay multi-turn assistant requests with controlled prefix overlap and compare cold, warm, and post-restart cache behavior.

**Measure:** TTFT; cache hit rate; transfer overhead; memory; recovery latency.

**Constraints:** Benefit depends on workload reuse and storage bandwidth. The inspected multiprocess guide targets the development branch; pin a tested commit.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX036](https://docs.lmcache.ai/mp/)

### MLC LLM

**framework · established · P2** · ID: mlc-llm

Compiler-based model deployment across desktop GPUs, mobile devices, and browser WebGPU.

**Current signal:** See the dated primary sources.

**Test:** Build the same small assistant model for desktop and browser targets and record portability costs.

**Measure:** compile time; artifact size; cold start; tokens/s; memory; quality.

**Constraints:** Compilation settings and target GPU must be recorded. Browser and native deployments need separate cohorts.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX007](https://github.com/mlc-ai/mlc-llm/blob/main/README.md)

### PEFT

**framework · established · P2** · ID: peft

Library for adapting pretrained models by training a small subset of additional or modified parameters.

**Current signal:** See the dated primary sources.

**Test:** Compare LoRA and a selected alternative against full fine-tuning where feasible, holding data and evaluation constant.

**Measure:** held-out accuracy; trainable parameters; training time; peak memory; artifact size.

**Constraints:** Parameter efficiency does not guarantee equal quality. Tune on validation data and keep final tests untouched.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX040](https://huggingface.co/docs/peft/index)

### TRL

**framework · established · P2** · ID: trl

Post-training library providing supervised fine-tuning, preference optimization, and reinforcement-learning trainers.

**Current signal:** See the dated primary sources.

**Test:** Fine-tune a small local coding model on licensed training tasks and evaluate strictly held-out repositories.

**Measure:** held-out accuracy; training GPU-hours; peak VRAM; stability; regression rate.

**Constraints:** Training quality depends strongly on data and reward design. Do not train on benchmark test tasks.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX033](https://github.com/huggingface/trl/blob/main/README.md)

### TensorRT LLM

**framework · established · P2** · ID: tensorrt-llm

NVIDIA-oriented inference library with a Python runtime, quantization, speculative decoding, and distributed serving.

**Current signal:** See the dated primary sources.

**Test:** Compare against vLLM and SGLang on the same NVIDIA GPU, checkpoint, quantization, and latency SLO.

**Measure:** tokens/s under SLO; TTFT; inter-token latency; VRAM; startup time.

**Constraints:** Hardware-specific results should not become a cross-platform winner. Include conversion and engine preparation costs.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX004](https://developer.nvidia.com/tensorrt-llm)

### Unsloth

**framework · established · P2** · ID: unsloth

Local model running and training toolkit with an open-source user interface.

**Current signal:** See the dated primary sources.

**Test:** Compare a small local fine-tuning job with a plain Transformers/PEFT baseline on the same device.

**Measure:** training time; peak VRAM; held-out quality; export compatibility; setup time.

**Constraints:** Vendor-reported speedups require reproduction. Check exact model, precision, and hardware support.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX035](https://unsloth.ai/docs)

### DFlash

**paper · experimental · P3** · ID: dflash

Speculative decoding approach using a lightweight block-diffusion drafter and parallel target verification.

**Current signal:** The ICML 2026 camera-ready paper was revised May 28, 2026.

**Test:** Compare with autoregressive decoding and EAGLE-3 using the same target model, output distribution, hardware, and concurrency.

**Measure:** accepted draft tokens/step; tokens/s; p95 latency; quality equivalence; extra VRAM.

**Constraints:** Lossless claims need the exact sampling and verification procedure. Low-concurrency gains may not persist at saturation.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX010](https://arxiv.org/abs/2602.06036)

### EAGLE-3

**paper · established · P3** · ID: eagle-3

Speculative-decoding method using direct draft-token prediction and fused target-model features.

**Current signal:** NeurIPS 2025 baseline remains relevant to 2026 serving comparisons.

**Test:** Use as a speculative-decoding baseline against DFlash with matched target, sampling, and concurrency.

**Measure:** accepted tokens/step; tokens/s; p95 latency; quality equivalence; memory.

**Constraints:** Draft training data and checkpoint compatibility affect performance. Source maxima should not be imported as Atlas results.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX038](https://www.microsoft.com/en-us/research/publication/eagle-3-scaling-up-inference-acceleration-of-large-language-models-via-training-time-test/)

### FlashAttention-4

**paper · experimental · P3** · ID: flashattention-4

Attention algorithm and kernel pipeline designed around Blackwell hardware bottlenecks, implemented using CuTe DSL.

**Current signal:** 2026 paper; authors target asymmetric scaling on Blackwell.

**Test:** Reproduce a bounded subset of forward/backward shape sweeps against pinned attention baselines on supported hardware.

**Measure:** kernel latency; TFLOP/s; numerical error; compile time; end-to-end training time.

**Constraints:** Paper-reported maxima are not universal gains. Requires appropriate hardware and shape coverage.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX008](https://arxiv.org/abs/2603.05451)

### Liger Kernel

**repository · established · P3** · ID: liger-kernel

Triton kernels for transformer training and post-training loss operations.

**Current signal:** See the dated primary sources.

**Test:** Replace one training operation at a time and verify gradients before measuring a complete training step.

**Measure:** step time; peak VRAM; gradient error; loss trajectory; end-to-end throughput.

**Constraints:** Kernel speedups can vanish when another operation dominates. Check numerical and convergence equivalence.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX039](https://linkedin.github.io/Liger-Kernel/)

### NVIDIA Dynamo

**framework · emerging · P3** · ID: nvidia-dynamo

Distributed inference runtime coordinating routing, prefill/decode workers, cache reuse, and cluster scaling.

**Current signal:** See the dated primary sources.

**Test:** After single-node baselines, test bursty shared-service traffic and worker failures under an explicit latency SLO.

**Measure:** SLO attainment; GPU utilization; cost per successful request; failure recovery; cache reuse.

**Constraints:** Cluster results require topology and network details. Sidecar and integrated backends have different feature coverage.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX037](https://github.com/ai-dynamo/dynamo/blob/main/docs/fern/pages/developer-guide/knowledge-base/overview.md)

### TorchTPU serving backends

**framework · emerging · P3** · ID: torchtpu-serving

Native PyTorch TPU stack supporting new vLLM and SGLang serving backends.

**Current signal:** Google announced native PyTorch TPU serving backends on October 20, 2026.

**Test:** Assess a remote inference tier for the same local-app requests, including network latency and total service cost.

**Measure:** end-to-end p95 latency; cost per successful request; throughput under SLO; cold start.

**Constraints:** Separate hardware economics from engine quality. Cloud access and quota are prerequisites; no paid tests run here.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX009](https://developers.googleblog.com/announcing-new-vllm-and-sglang-inference-engines-on-tpu/)

### verl

**framework · emerging · P3** · ID: verl

Distributed reinforcement-learning post-training framework integrating training and generation engines.

**Current signal:** 2026 project news includes observability and speculative-decoding co-training work; current repository is verl-project/verl.

**Test:** Compare a small controlled RL workload with another trainer using identical data, rewards, and resource budgets.

**Measure:** reward on held-out tasks; GPU-hours; rollout throughput; policy lag; training stability.

**Constraints:** Reward increases can reflect reward hacking. Backend and rollout-policy mismatch must be tracked.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX034](https://github.com/verl-project/verl)

## AI agents (6)

### LangGraph

**framework · established · P1** · ID: langgraph

Stateful agent orchestration framework with durable execution, checkpoints, and human review points.

**Current signal:** See the dated primary sources.

**Test:** Implement a resumable code-maintenance workflow and inject interruptions at model and tool boundaries.

**Measure:** task completion; resume correctness; duplicate side effects; latency; implementation effort.

**Constraints:** A framework does not determine the base model capability. Persistence configuration and side-effect semantics matter.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX012](https://github.com/langchain-ai/langgraph/blob/main/README.md)

### Pydantic AI

**framework · established · P1** · ID: pydantic-ai

Agent framework with typed integrations and durable execution backends for recoverable model and tool workflows.

**Current signal:** See the dated primary sources.

**Test:** Build a typed maintenance agent and verify recovery after process termination using one selected durable backend.

**Measure:** schema errors; resume correctness; duplicate effects; latency; task completion.

**Constraints:** Check exactly which operations the chosen backend journals. Snapshot persistence and durable execution are different capabilities.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX016](https://pydantic.dev/docs/ai/capabilities/durable_execution/overview/)

### CrewAI

**framework · established · P2** · ID: crewai

Agent framework combining role-based collaboration with explicit event-driven workflows.

**Current signal:** See the dated primary sources.

**Test:** Compare a single agent, a deterministic workflow, and a small crew on identical bounded research tasks.

**Measure:** evidence accuracy; completion rate; cost; wall time; coordination failures.

**Constraints:** More agents can add cost without increasing quality. Pin delegation policy and per-agent budgets.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX015](https://github.com/crewAIInc/crewAI/blob/main/README.md)

### DSPy

**framework · established · P2** · ID: dspy

Framework for composing and optimizing language-model programs with structured signatures and reusable modules.

**Current signal:** See the dated primary sources.

**Test:** Optimize a repository triage workflow on training tasks, then evaluate unseen repositories with a fixed budget.

**Measure:** held-out accuracy; optimization cost; inference cost; schema validity; run variance.

**Constraints:** Keep optimization data out of the final test set. Compare against a simple fixed-prompt baseline.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX011](https://dspy.ai/current/)

### OpenHands Software Agent SDK

**framework · established · P2** · ID: openhands-sdk

SDK for coding agents with local or ephemeral workspaces and Python, TypeScript, and REST interfaces.

**Current signal:** See the dated primary sources.

**Test:** Run isolated maintenance and refactoring tasks against pinned desktop-tool repositories with pristine final regrading.

**Measure:** resolved tasks; regressions; cost per accepted patch; wall time; review burden.

**Constraints:** Evaluate model plus harness plus tools, not the SDK name alone. Workspace and evaluator must have independent boundaries.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX013](https://github.com/OpenHands/software-agent-sdk)

### smolagents

**framework · emerging · P2** · ID: smolagents

Small agent library supporting executable code actions and conventional structured tool calls.

**Current signal:** See the dated primary sources.

**Test:** Compare code actions with JSON tool calls on the same tools and model inside an isolated sandbox.

**Measure:** task completion; model calls; tool error rate; cost; wall time.

**Constraints:** Executed model code needs a real sandbox. Development documentation and stable package versions may differ.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX014](https://huggingface.co/docs/smolagents/main/index)

## AI evaluation & methods (18)

### ProgramBench

**benchmark · emerging · P1** · ID: programbench

Program-reconstruction benchmark where agents implement behavior from an executable and its documentation, then face hidden behavioral tests.

**Current signal:** Official leaderboard snapshot was updated October 22, 2026.

**Test:** Use a small representative subset to assess whole-program design, keeping exact task and harness snapshots.

**Measure:** fully resolved programs; behavioral test pass rate; API cost per task; wall time.

**Constraints:** Passing available tests does not establish complete behavioral equivalence. Partial test success is diagnostic, not a fully resolved program.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX042](https://programbench.com/)

### Resource-calibrated agent evaluations

**method · emerging · P1** · ID: agent-eval-resource-calibration

Evaluation method treating sandbox resource allocation, hard limits, timeouts, and infrastructure failures as explicit experimental variables.

**Current signal:** 2026 primary study motivates explicit allocation and enforcement metadata for agent rankings.

**Test:** Calibrate resource floors and ceilings, then repeat candidate comparisons on the same fixed task set across several runs.

**Measure:** task success; infrastructure failures; resource peak; confidence interval; runtime variance.

**Constraints:** A single resource multiplier is not valid for every benchmark. Model, task, and infrastructure failures need distinct accounting.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX041](https://www.anthropic.com/research/infrastructure-noise)

### SWE-Bench Pro V2

**benchmark · emerging · P1** · ID: swe-bench-pro-v2

Repository-task evaluation with refreshed tasks, restricted agent networking, and independent patch regrading.

**Current signal:** V2 changes tasks and evaluation protocol; preserve its version with every external observation.

**Test:** Adopt its pristine-image regrading and reference/empty-patch checks for Atlas coding evaluations.

**Measure:** resolve rate; regressions; verifier disagreements; cost.

**Constraints:** Public and private sets remain different cohorts. Network locking cannot remove training-time exposure.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### SWE-bench-Live

**benchmark · emerging · P1** · ID: swe-bench-live

Continuously maintained repository-task benchmark with language and Windows-specific evaluation tracks.

**Current signal:** 2026 updates add language/OS tracks and require trajectories for verified submissions.

**Test:** Prioritize the Windows and relevant language tracks for desktop tools, with frozen task snapshots and complete trajectories.

**Measure:** resolved rate; valid task count; environment failures; cost.

**Constraints:** Do not mix Python-only frozen splits with language-specific tracks. Dataset freshness alone does not prove absence of training exposure.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX019](https://swe-bench-live.github.io/)

### Terminal-Bench 4.0

**benchmark · emerging · P1** · ID: terminal-bench-4

Versioned terminal-agent tasks with calibrated resources and revised task environments and verifiers.

**Current signal:** Current official family page identifies 4.0; opened release notes explain resource and task changes.

**Test:** Use a bounded task subset after resource calibration; store exact dataset version and sandbox limits.

**Measure:** resolution rate; infrastructure error rate; wall time; cost; confidence interval.

**Constraints:** 4.0 task/environment changes require rerunning rather than mixing older scores. Some tasks need GPU-enabled sandboxes.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX021](https://www.tbench.ai/news/terminal-bench-4-0)

### Berkeley Function Calling Leaderboard V4

**benchmark · established · P2** · ID: bfcl-v4

Tool-use benchmark covering function calls, multi-turn interaction, and agentic evaluation.

**Current signal:** See the dated primary sources.

**Test:** Select relevant tool schemas and preserve native-function versus prompted-tool-call configurations.

**Measure:** tool-call accuracy; category accuracy; latency; benchmark cost.

**Constraints:** Overall accuracy is an unweighted category average. Source page identifies a fixed code checkpoint; do not silently substitute main.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX023](https://gorilla.cs.berkeley.edu/leaderboard)

### CodeClash

**benchmark · experimental · P2** · ID: codeclash

Goal-oriented software-engineering benchmark where agents evolve codebases across repeated competitive game arenas.

**Current signal:** Relevant game-oriented baseline; official displayed leaderboard date is November 3, 2025.

**Test:** Evaluate a game-agent task across repeated edit-and-compete rounds, preserving opponents, seeds, and arena versions.

**Measure:** win rate; rating interval; improvement across rounds; cost; code regression rate.

**Constraints:** Ratings depend on the opponent pool and arena. Its opened leaderboard was last updated in 2025, so it is a baseline rather than a fresh 2026 ranking.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX043](https://codeclash.ai/)

### Harbor

**framework · emerging · P2** · ID: harbor

Framework for sandboxed agent evaluations, reusable environments, and optimization rollouts.

**Current signal:** See the dated primary sources.

**Test:** Implement the first Atlas task suite with immutable environments and an independently executed verifier.

**Measure:** replay success; environment startup time; infrastructure failures; trace completeness.

**Constraints:** Provider-specific container limits affect comparability. Report setup failures separately from task failures.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX025](https://github.com/harbor-framework/harbor)

### Inspect AI

**framework · established · P2** · ID: inspect-ai

Evaluation framework with datasets, agents, tools, scorers, sandboxing, and inspectable execution logs.

**Current signal:** See the dated primary sources.

**Test:** Build a small coding and document-grounding suite with inspectable scorer decisions and replayable logs.

**Measure:** scorer agreement; replay consistency; trace completeness; evaluation cost.

**Constraints:** Judge-based metrics need calibration against human or deterministic checks. Do not let task code alter evaluation artifacts.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX026](https://inspect.aisi.org.uk/)

### LM Evaluation Harness

**framework · established · P2** · ID: lm-evaluation-harness

Reusable model-evaluation harness with versioned benchmark configurations and multiple model backends.

**Current signal:** v0.4.13 notes fixes for few-shot leakage, answer filtering, and grouped uncertainty estimates.

**Test:** Pin a corrected release and use a small capability-regression suite when changing inference kernels or quantization.

**Measure:** task accuracy; standard error; runtime; regression delta.

**Constraints:** Release fixes can change historical scores. Pin few-shot sampler, task configuration, and chat template.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX027](https://github.com/EleutherAI/lm-evaluation-harness/releases)

### LiveCodeBench

**benchmark · established · P2** · ID: livecodebench

Versioned coding benchmark supporting generation, execution, and test-output prediction scenarios.

**Current signal:** See the dated primary sources.

**Test:** Evaluate coding models on an explicit release and date window, using pinned sampling settings and a sandboxed checker.

**Measure:** pass@1; pass@5; execution failures; cost.

**Constraints:** Never store release_latest as a reproducible dataset identifier. Contest-style success does not establish repository-maintenance skill.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX024](https://github.com/LiveCodeBench/LiveCodeBench)

### Ragas

**framework · established · P2** · ID: ragas

Evaluation toolkit with metrics for retrieval, grounding, answers, and tool-use workflows.

**Current signal:** See the dated primary sources.

**Test:** Calibrate faithfulness and retrieval metrics on manually adjudicated project-document questions.

**Measure:** human agreement; false acceptance; faithfulness; context precision; judge cost.

**Constraints:** LLM-based scores inherit judge bias and variability. Store judge model, prompt, and rubric versions.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX031](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/)

### SWE-Skills-Bench: Do Agent Skills Actually Help in Real-World Software Engineering?

**paper · experimental · P2** · ID: swe-skills-bench-paper

A paired benchmark isolates the utility of individual agent skills using pinned repositories, explicit requirements, and executable verifiers.

**Current signal:** v2 published 2026-10-27; use the revised 98-skill protocol and current ControllableModel artifact.

**Test:** Run the same pinned agent/model/task twice, with and without one skill, using clean equivalent environments and fixed budgets; audit requirement verifiers and repeat paired runs before estimating benefit.

**Measure:** paired requirement pass-rate delta; confidence interval across repeated runs; token and monetary cost; wall time; instruction-conflict regressions; verifier false-positive rate.

**Constraints:** Skill utility is configuration-dependent; do not transfer a score across models, harnesses, versions, or tasks. Requirements and verifiers are generated within the benchmark construction process and need independent quality review. Public source and environment setup are available; inference endpoints and execution budgets must be pinned.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX146](https://arxiv.org/html/2603.15401v2) · [RX147](https://github.com/ControllableModel/SWE-Skills-Bench)

### SWE-bench Verified

**benchmark · established · P2** · ID: swe-bench-verified

Human-filtered software-issue benchmark with a standard bash-only leaderboard cohort.

**Current signal:** See the dated primary sources.

**Test:** Use as a historical baseline alongside newer private tasks, preserving harness and dataset versions.

**Measure:** resolved rate; regressions; cost per task; trajectory completeness.

**Constraints:** Public task exposure can contaminate evaluation. Different agent harnesses are separate configurations.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX018](https://www.swebench.com/)

### TEBench: Breaking, Stale, or Missing? Project-Level Test Evolution

**paper · experimental · P2** · ID: tebench-paper

A repository-level benchmark asks coding agents to find and update failing, stale, and missing tests after production-code changes.

**Current signal:** 2026-05-07 preprint with public dataset and evaluation pipeline; explicitly includes tests that pass while becoming stale.

**Test:** Give agents only the allowed repository revision and production change; compare their identification and test patches against retained developer changes and independent mutation checks, stratified by breaking, stale, and missing behavior.

**Measure:** identification precision/recall/F1 by evolution type; patch execution rate; changed-behavior branch coverage; held-out mutation score; false assertion count; tokens and wall time.

**Constraints:** Current corpus emphasizes Java/Maven projects and historically selected commits; it does not establish cross-language performance. A patch that compiles or resembles the developer patch can still miss the changed behavior. Preserve ground-truth isolation and count all failed or timed-out tasks.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX148](https://arxiv.org/html/2605.06125v1) · [RX149](https://github.com/iSEngLab/TEBench)

### TestSuiteBench: Coding Agents Struggle to Generate Strong Test Suites from Specifications

**paper · experimental · P2** · ID: testsuitebench-paper

Specification-driven test generation is evaluated against reference executables and targeted behavior mutants from real command-line applications.

**Current signal:** Original preprint published 2026-10-09; code, specifications and dataset pointers checked.

**Test:** Compare agents generating tests from the same held-out specifications under equal budgets; run tests on both correct executables and behavior mutants, keeping test validity separate from mutation detection.

**Measure:** mutation kill rate; valid test rate; requirements covered; false failures on reference executables; cost per detected mutant; wall time; repeated-run variance.

**Constraints:** Generated mutants sample specific requirements and need not match the distribution of real faults. Specifications and ground truth inherit reference-implementation assumptions; audit ambiguous or incidental behavior. Artifact targets compiled CLI applications on Linux amd64 with Docker; full optional dataset download is substantial.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX150](https://arxiv.org/html/2610.13065v1) · [RX151](https://github.com/eth-sri/testsuitebench)

### τ-bench 2.0

**benchmark · emerging · P2** · ID: tau-bench-2

Tool-agent-user benchmark with versioned text and voice task frames across six languages.

**Current signal:** October 19 release changes communication checks, judging, prompts, and benchmark manifests.

**Test:** Evaluate structured interactive task completion on one pinned text domain before extending to other languages.

**Measure:** task success; consistency across trials; tool errors; cost; latency.

**Constraints:** 2.0 scores are explicitly incomparable with 1.x. Keep user simulator and judge versions fixed.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX022](https://github.com/sierra-research/tau2-bench/releases)

### GEPA reflective prompt optimization

**paper · emerging · P3** · ID: gepa

Prompt optimizer that reflects on execution traces and evolves candidates along a Pareto frontier.

**Current signal:** Published in the ICLR 2026 proceedings.

**Test:** Optimize tool-use prompts on a training split and measure transfer across held-out repositories and several seeds.

**Measure:** held-out success; optimization calls; inference cost; seed variance.

**Constraints:** Reported comparisons are task-specific. Use topic-disjoint evaluation and inspect evolved prompts for answer leakage.

**Priority rationale:** Watch-stage proposal: Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX017](https://proceedings.iclr.cc/paper_files/paper/2026/hash/0e9e708b6f48e14fd0ac29e167413f76-Abstract-Conference.html)

## Retrieval & search (8)

### ColBERTv2

**repository · established · P2** · ID: colbert

Late-interaction retriever that compares token-level query and passage embeddings.

**Current signal:** See the dated primary sources.

**Test:** Compare retrieval quality and storage with BM25 and single-vector search on the same held-out queries.

**Measure:** nDCG@10; recall@k; query latency; index bytes; build time.

**Constraints:** Embedding checkpoint and indexing parameters must be pinned. A retrieval metric is not end-to-end answer quality.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX030](https://github.com/stanford-futuredata/ColBERT/blob/main/README.md)

### FlashRAG

**framework · established · P2** · ID: flashrag

Research toolkit providing reusable retrieval, reranking, generation, compression, and evaluation components.

**Current signal:** See the dated primary sources.

**Test:** Build a common baseline harness for retrieval strategies before testing each on Atlas-specific documents.

**Measure:** answer correctness; retrieval recall; latency; token cost; reproducibility.

**Constraints:** Keep corpus, generator, and evaluation split fixed. Published benchmark results may not transfer to project-specific documents.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX032](https://github.com/RUC-NLPIR/FlashRAG/blob/main/README.md)

### LanceDB

**repository · emerging · P2** · ID: lancedb

Local and service retrieval candidate combining vector indexing with the Lance data ecosystem.

**Current signal:** September ecosystem update reports Lance SDK 12.0.0 with file format 2.2; these are not LanceDB version numbers.

**Test:** Run fixed embedding corpora with filters, updates, and cold-cache reads; retain exact-search ground truth.

**Measure:** recall@k; p95/p99 latency; index size; build/update time.

**Constraints:** Lance SDK, file format, and LanceDB versions are different. Treat newsletter throughput claims as vendor reports until reproduced.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX099](https://www.lancedb.com/blog/newsletter-september-2026)

### LightRAG

**framework · emerging · P2** · ID: lightrag

Retrieval framework combining graph-oriented knowledge access with configurable document processing and retrieval components.

**Current signal:** 2026 project updates document selectable chunking and role-specific model configurations.

**Test:** Evaluate project-document search with incremental updates, fixed embeddings, and identical answer generation.

**Measure:** retrieval recall; answer correctness; citation precision; index/update time; query cost.

**Constraints:** Chunking and reranking can dominate outcome. Record document-processing configurations.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX029](https://github.com/HKUDS/LightRAG)

### Microsoft GraphRAG

**framework · established · P2** · ID: graphrag

Graph-based retrieval pipeline using entities, relationships, communities, and summaries for corpus questions.

**Current signal:** See the dated primary sources.

**Test:** Compare global and entity-focused questions against BM25 and dense retrieval over the same project-document corpus.

**Measure:** answer correctness; citation precision; indexing cost; query latency; refresh cost.

**Constraints:** Graph extraction can be expensive and error-prone. Include simple retrieval baselines and corpus-update workloads.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX028](https://microsoft.github.io/graphrag/)

### Milvus

**repository · established · P2** · ID: milvus

Vector retrieval service candidate for larger corpora and multi-stage search pipelines.

**Current signal:** Milvus 3.0.3 release notes dated 2026-10-14 document Function Chain support for hybrid search.

**Test:** Evaluate dense and hybrid pipelines under fixed recall targets, update rates, and resource ceilings.

**Measure:** recall@k; p95/p99 latency; CPU/RAM usage; ingest throughput.

**Constraints:** Separate standalone and distributed deployments. Server-side reranking must use the same models as competitors.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX102](https://milvus.io/docs/release_notes.md)

### Qdrant

**repository · established · P2** · ID: qdrant

Vector and hybrid retrieval engine candidate for searchable code, asset, and research catalogs.

**Current signal:** Qdrant 1.20 release announced on 2026-10-22 adds BM25 on text indexes and a code tokenizer.

**Test:** Compare dense, BM25, and hybrid retrieval on labeled code and document queries, including tenant filters.

**Measure:** nDCG@10; recall@k; p95/p99 latency; index memory.

**Constraints:** Use the same embedding models and labeled queries. Quantization tradeoffs require measured recall, not vendor accuracy language.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX101](https://qdrant.tech/blog/qdrant-1.20.x/)

### pgvector

**repository · established · P2** · ID: pgvector

PostgreSQL vector-search extension for comparing integrated relational retrieval with dedicated engines.

**Current signal:** Current README documents exact and approximate search plus dense, half-precision, binary, and sparse vectors.

**Test:** Compare exact, HNSW, and IVFFlat searches on identical embeddings with selective relational filters.

**Measure:** recall@k; p95/p99 latency; index size; transaction overhead.

**Constraints:** Approximate recall and filter selectivity must be reported. Include database memory and maintenance cost.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX100](https://github.com/pgvector/pgvector)

## Languages & runtimes (16)

### Bun

**platform · emerging · P1** · ID: bun

Integrated JavaScript runtime and development toolchain combining execution, packages, tests, builds, and formatting.

**Current signal:** Bun v1.4.4 introduces the built-in bun fmt formatter.

**Test:** Compare application behavior and complete toolchain cycles against Node-based baselines with equivalent checks enabled.

**Measure:** compatibility pass rate; install seconds cold and warm; test seconds; peak RSS MiB; formatter agreement rate.

**Constraints:** Keep formatter and runtime rankings separate. Vendor benchmark numbers remain external claims.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX057](https://bun.sh/blog/bun-v1.4.4)

### Deno

**platform · established · P1** · ID: deno

JavaScript and TypeScript runtime with integrated tools and an experimental desktop application workflow.

**Current signal:** Deno 2.9 introduces experimental deno desktop and expanded lockfile migration support.

**Test:** Compare server and CLI compatibility, then evaluate desktop packaging in a separately labeled experimental track.

**Measure:** compatibility pass rate; startup milliseconds; install seconds; artifact MiB; platform test pass rate.

**Constraints:** Desktop functionality is experimental in the cited release. Permission configuration and Node compatibility must be recorded.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX058](https://deno.com/blog/v2.9)

### Go

**language · established · P1** · ID: go

Compiled language and standard library for network services, command-line utilities, and concurrent workloads.

**Current signal:** Release history lists Go 1.27.3 on 2026-10-19.

**Test:** Run a fixed JSON API with database access, cancellation, and graceful shutdown under identical load profiles.

**Measure:** requests per second at SLO; p95 latency milliseconds; p99 latency milliseconds; heap MiB; GC pause milliseconds.

**Constraints:** Fix connection pools and CPU budgets. Do not compare a bare router against a fully validated application.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX045](https://go.dev/doc/devel/release)

### Node.js

**platform · established · P1** · ID: nodejs

JavaScript runtime and compatibility baseline for server applications, build tools, and package ecosystems.

**Current signal:** Release index lists 26.12.1 Current and 24.22.1 LTS on 2026-10-21.

**Test:** Run the same HTTP, streams, filesystem, package, and test workloads across pinned Node, Bun, and Deno builds.

**Measure:** compatibility pass rate; startup milliseconds; p99 latency milliseconds; peak RSS MiB; wall time seconds.

**Constraints:** Current and LTS are distinct cohorts. Use identical dependency graphs and application semantics.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX056](https://nodejs.org/en/blog)

### Python / CPython

**language · established · P1** · ID: python

General-purpose language and runtime for automation, data workflows, services, and extension-based acceleration.

**Current signal:** Python 3.15.0 launched 2026-10-09; its page now points to a newer patch release.

**Test:** Compare pinned standard, free-threaded, and experimental JIT builds on startup, CPU, and extension-heavy application workloads.

**Measure:** startup milliseconds; wall time seconds; threads scaling ratio; peak RSS MiB; extension compatibility pass rate.

**Constraints:** Do not mix interpreter build modes in one ranking. Verify extension wheels and numerical correctness; JIT remains a separate experimental lane.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX048](https://www.python.org/downloads/release/python-3150/)

### Rust

**language · established · P1** · ID: rust

Systems language for native tools and services, with ownership-based memory management and a mature compiler ecosystem.

**Current signal:** Release notes list Rust 1.99.1 on 2026-10-15 and 1.99.0 on 2026-10-01.

**Test:** Implement the same archive-indexing CLI with identical formats and error behavior; compare stable compiler profiles.

**Measure:** cold build seconds; incremental build seconds; wall time milliseconds; peak RSS MiB; correctness pass rate.

**Constraints:** Compiler flags, allocator, target CPU, and dependency versions must be pinned. Language comparisons are workload-specific; safety and maintenance are separate dimensions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX044](https://doc.rust-lang.org/releases.html)

### TypeScript 7 native compiler

**language · established · P1** · ID: typescript-native

Native TypeScript compiler and language-server candidate for reducing feedback time in large JavaScript and TypeScript projects.

**Current signal:** TypeScript 7.0 was announced 2026-07-08 as the native compiler release.

**Test:** Compare pinned TypeScript 6 and 7 on identical monorepo commits, complete builds, incremental edits, and diagnostic agreement.

**Measure:** full check seconds; incremental check milliseconds; peak RSS MiB; diagnostic agreement rate; tooling compatibility pass rate.

**Constraints:** Compiler API compatibility needs explicit testing. Vendor benchmarks are leads, not independent Atlas measurements.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX050](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)

### .NET / C# stack

**platform · established · P2** · ID: dotnet

Managed runtime and application ecosystem spanning services, desktop tools, native compilation, and game tooling.

**Current signal:** Microsoft released .NET 10.0.14 and .NET 11 RC3 on 2026-10-25; RC3 remains prerelease.

**Test:** Compare the same CLI and API on patched stable .NET, Native AOT where supported, and a separate .NET 11 preview lane.

**Measure:** startup milliseconds; steady throughput; peak RSS MiB; binary MiB; AOT compatibility pass rate.

**Constraints:** Do not label .NET 11 RC as generally available. Pin runtime mode, architecture, and reflection-heavy dependencies.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX085](https://devblogs.microsoft.com/dotnet/dotnet-october-2026-oob-security-updates/)

### Elixir

**language · established · P2** · ID: elixir

BEAM language for concurrent services, with evolving gradual type analysis and established fault-tolerant process patterns.

**Current signal:** Elixir 1.20 announcement describes type inference across language constructs without requiring type annotations.

**Test:** Exercise a supervised service with injected worker failures, a fixed messaging workload, and a labeled defect corpus.

**Measure:** recovery milliseconds; message throughput; p99 latency milliseconds; diagnostic precision; diagnostic recall.

**Constraints:** Type-checker claims need an independently labeled corpus. Pin Erlang/OTP and scheduler configuration.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX055](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)

### Gleam

**language · emerging · P2** · ID: gleam

Typed functional language targeting the Erlang VM and JavaScript, with integrated build tooling.

**Current signal:** Gleam 1.19.0 changes Erlang-target output to Erlang abstract forms.

**Test:** Compare complete and incremental builds for realistic applications plus a disclosed synthetic compile workload.

**Measure:** clean build seconds; incremental build milliseconds; test cycle seconds; stacktrace source accuracy.

**Constraints:** Synthetic compile-only tests do not establish general language superiority. Fix Erlang/OTP and JavaScript target versions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX052](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)

### Java / JDK

**language · established · P2** · ID: java-jdk

JVM language and runtime ecosystem for services, tools, and long-lived applications.

**Current signal:** Oracle's current release notes include JDK 27 and October 2026 updates.

**Test:** Compare supported JDK baselines and JDK 27 on the same service after correctness checks and a declared warmup.

**Measure:** cold startup milliseconds; steady-state throughput; p99 latency milliseconds; heap MiB; GC pause milliseconds.

**Constraints:** Pin vendor build and garbage collector. Preview language features and incubator APIs require separate labeling.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX054](https://www.oracle.com/java/technologies/javase/27all-relnotes.html)

### Kotlin

**language · established · P2** · ID: kotlin

Typed language with JVM and multiplatform toolchains for shared application logic and native targets.

**Current signal:** The official release history lists Kotlin 2.4.21 on 2026-10-08.

**Test:** Implement shared serialization and domain logic for JVM and native targets; validate common tests on each.

**Measure:** clean build seconds; incremental build seconds; startup milliseconds; artifact MiB; shared test pass rate.

**Constraints:** JVM and native runtimes require separate performance cohorts. Record Gradle, JDK, Compose, and platform SDK versions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX049](https://kotlinlang.org/docs/releases.html)

### Swift

**language · established · P2** · ID: swift

Language for applications and systems work, with native interoperability and expanding cross-platform tooling.

**Current signal:** Swift 6.4 announcement describes Swift Build becoming the default in Swift Package Manager.

**Test:** Compile a shared library and CLI on macOS, Linux, and Windows; exercise asynchronous cancellation and C interoperability.

**Measure:** build seconds; startup milliseconds; binary MiB; platform pass rate; interop defect count.

**Constraints:** SDK availability and platform libraries must be recorded. Embedded, mobile, and server results need separate cohorts.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX047](https://www.swift.org/blog/swift-6.4-released/)

### Zig

**language · emerging · P2** · ID: zig

Systems language and toolchain candidate for portable native utilities, explicit allocation, and integration with C.

**Current signal:** Official 0.17.0 announcement is dated 2026-10-02; do not infer the binary publication timestamp.

**Test:** Build a portable file-indexing CLI and a small C-library wrapper across Linux and Windows.

**Measure:** compile seconds; binary MiB; peak RSS MiB; cross-platform test pass rate; migration edits.

**Constraints:** Pre-1.0 language and library changes can dominate upgrade cost. Record the exact Zig archive and target triple.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX046](https://ziglang.org/news/0.17.0-released/)

### Mojo

**language · emerging · P3** · ID: mojo

Systems language targeting CPU and accelerator kernels, with compile-time specialization and Python interoperability.

**Current signal:** Mojo v1.2.0 announcement adds pattern matching and additional GPU math implementations.

**Test:** Implement reduction and image-processing kernels with matched precision and validate against a CPU reference before timing.

**Measure:** kernel milliseconds; end-to-end milliseconds; compile seconds; absolute numeric error; supported hardware count.

**Constraints:** Device transfers and compilation must be reported separately. Do not equate a kernel microbenchmark with application speed.

**Priority rationale:** Watch-stage proposal: Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX051](https://mojolang.static.modular.com/releases/v1.2.0/)

### Roc

**language · experimental · P3** · ID: roc

Experimental functional language exploring a compact language model and native or WebAssembly compilation.

**Current signal:** Upstream README still says Roc is not ready for a 0.1 release.

**Test:** Port a small deterministic CLI and track unsupported features, build reliability, and migration work.

**Measure:** functional test pass rate; compile seconds; runtime milliseconds; blocking issue count.

**Constraints:** Treat as a research candidate, not a production baseline. Pin compiler commit because language and tooling are evolving.

**Priority rationale:** Watch-stage proposal: Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX053](https://github.com/roc-lang/roc)

## Compilers & build tools (7)

### Rolldown

**tool · emerging · P1** · ID: rolldown

Rust-based JavaScript bundler with a Rollup-compatible plugin interface and configurable chunking.

**Current signal:** Rolldown 1.0 stable was announced 2026-05-07.

**Test:** Bundle a pinned fixture corpus across Rolldown, Rollup, and esbuild with matched output targets and plugins.

**Measure:** build seconds; peak RSS MiB; gzip bytes; sourcemap validity; runtime conformance pass rate.

**Constraints:** Chunking and dead-code decisions can change without API changes. Report unsupported plugins instead of silently dropping them.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX060](https://voidzero.dev/posts/announcing-rolldown-1-0)

### Vite

**tool · established · P1** · ID: vite

Frontend development server and build orchestrator with a unified Rolldown-based bundling pipeline.

**Current signal:** Vite 8 replaces the earlier dual-bundler pipeline with Rolldown.

**Test:** Run identical small, medium, and monorepo applications through cold builds, hot updates, and production smoke tests.

**Measure:** cold build seconds; HMR p95 milliseconds; peak RSS MiB; compressed output bytes; plugin compatibility pass rate.

**Constraints:** Match browser targets, minification, source maps, and cache state. Faster builds must preserve runtime behavior.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX059](https://vite.dev/blog/announcing-vite8)

### uv

**tool · established · P1** · ID: uv

Python package and project manager providing lockfiles, workspaces, environment management, and script execution.

**Current signal:** Experimental uv and ty integration was announced 2026-10-13.

**Test:** Resolve and install identical pinned Python applications with isolated empty and populated caches.

**Measure:** resolve seconds; install seconds; disk MiB; lock reproducibility rate; platform compatibility pass rate.

**Constraints:** Separate network time from resolver time. Compare the same wheel/source-build choices and index snapshots.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX064](https://docs.astral.sh/uv/) · [RX065](https://astral.sh/blog/uv-ty-integration)

### OpenTofu

**tool · established · P2** · ID: opentofu

Infrastructure-as-code candidate for reproducible remote benchmark environments and explicit resource configuration.

**Current signal:** OpenTofu 1.13.0 release on 2026-09-29 labels built-in linting and Symbol Libraries experimental.

**Test:** Provision and destroy a small disposable benchmark environment from pinned configuration and verify drift detection.

**Measure:** reproduction success; plan/apply time; drift detection; cleanup completeness.

**Constraints:** Remote resources incur real costs and require separate execution authorization. Pin provider versions and protect state.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX129](https://opentofu.org/blog/opentofu-1-13-0/)

### Oxc / Oxlint / Oxfmt

**tool · emerging · P2** · ID: oxc

Rust-based JavaScript tooling family for parsing, transformation, linting, minification, and formatting.

**Current signal:** Upstream lists Oxlint 1.90.0 and Oxfmt 0.75.0 releases on 2026-10-27.

**Test:** Use a fixed corpus with matched lint rules and formatting policy; compare diagnostics and safe-fix behavior before timing.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; diagnostic recall; format idempotence rate.

**Constraints:** Oxc components have independent versions and maturity. Rule coverage and type-aware mode must be matched.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX061](https://github.com/oxc-project/oxc/releases)

### Rspack

**tool · emerging · P2** · ID: rspack

Rust-based bundler designed around webpack compatibility, incremental compilation, and production build optimization.

**Current signal:** Rspack 2.0 announcement introduces updated defaults and APIs while targeting webpack ecosystem compatibility.

**Test:** Migrate a pinned webpack application and measure cold builds, rebuilds, plugin coverage, and migration effort.

**Measure:** cold build seconds; incremental build milliseconds; peak RSS MiB; plugin pass rate; migration hours.

**Constraints:** Record unsupported webpack APIs explicitly. Pin plugin and loader versions as part of the experiment.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX062](https://www.rspack.dev/blog/announcing-2-0)

### Dagger

**tool · emerging · P3** · ID: dagger

Programmable container-based CI candidate for repeatable local builds and reusable cached pipelines.

**Current signal:** Official 2026-10-23 announcement introduces Dagger 1.0 beta.

**Test:** Run identical clean, incremental, and no-op builds locally and in CI; compare outputs and cache correctness.

**Measure:** cold build time; incremental build time; cache hit correctness; developer setup effort.

**Constraints:** Dagger 1.0 is beta, not stable. Include engine startup and cache storage in cost accounting.

**Priority rationale:** Watch-stage proposal: Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX130](https://dagger.io/blog/dagger-10-beta/)

## Web & API stacks (13)

### Astro

**framework · established · P2** · ID: astro

Content-oriented web framework with selective interactivity, prerendering, and server-rendered routes.

**Current signal:** Astro 7.4 adds build timings; parallel prerendering is explicitly experimental.

**Test:** Build the same large documentation corpus with selected interactive widgets and fixed images.

**Measure:** build seconds; incremental build seconds; initial JS bytes; LCP milliseconds; broken-link count.

**Constraints:** Keep dynamic app and content-site cohorts distinct. Experimental parallel builds need a separate correctness run.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX070](https://astro.build/blog/astro-740/)

### Axum

**framework · established · P2** · ID: axum

Rust HTTP routing and request-handling library using the Tokio, Hyper, and Tower ecosystem.

**Current signal:** Current documentation shows Axum 0.8.9 and explicitly targets Tokio and Hyper.

**Test:** Implement the reference API with equivalent validation, tracing, timeouts, and database pool settings.

**Measure:** p95 latency milliseconds; p99 latency milliseconds; throughput at SLO; peak RSS MiB; build seconds.

**Constraints:** Record all middleware and optimization flags. Axum intentionally does not claim runtime independence.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX080](https://docs.rs/axum/latest/axum/)

### Django

**framework · established · P2** · ID: django

Python web framework with an ORM, authentication, administrative tooling, and integrated application conventions.

**Current signal:** Django issued 6.1.2, 6.0.9, and 5.2.18 security releases on 2026-10-06.

**Test:** Build the reference CRUD application with authentication and migrations; compare both runtime and implementation effort.

**Measure:** p95 request milliseconds; query count per action; migration correctness pass rate; test coverage; implementation hours.

**Constraints:** Compare equivalent application features. LTS and feature-release cohorts need separate maintenance evaluation.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX078](https://www.djangoproject.com/weblog/2026/oct/06/security-releases/)

### FastAPI

**framework · established · P2** · ID: fastapi

Python API framework with typed request models, dependency injection, and OpenAPI generation.

**Current signal:** FastAPI 0.162.0 on 2026-10-23 changes omitted boolean form-field handling.

**Test:** Compare full validated APIs using identical schemas, databases, worker counts, and lifecycle hooks.

**Measure:** p95 latency milliseconds; throughput at SLO; schema correctness pass rate; memory per worker MiB; startup milliseconds.

**Constraints:** Pin Starlette, Pydantic, ASGI server, and Python versions. Include invalid requests and omitted fields in correctness tests.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX077](https://fastapi.tiangolo.com/release-notes/)

### Hono

**framework · established · P2** · ID: hono

HTTP framework built around Web Standard APIs, intended for multiple JavaScript runtimes.

**Current signal:** Official overview describes a shared Web Standards API across multiple runtime targets.

**Test:** Run a validated JSON API unchanged across Node, Bun, Deno, and a selected worker runtime.

**Measure:** runtime compatibility pass rate; p95 latency milliseconds; throughput at SLO; bundle bytes; cold start milliseconds.

**Constraints:** Runtime effects must be separated from framework effects. Bare routing benchmarks omit validation, logging, and database costs.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX075](https://hono.dev/)

### Next.js

**framework · established · P2** · ID: nextjs

React application framework combining server rendering, routing, caching, and a Rust-based build pipeline.

**Current signal:** Next.js 16.4 introduces updated Cache Components defaults and development/build improvements.

**Test:** Build the same authenticated content-and-search application with explicit rendering and cache rules.

**Measure:** LCP milliseconds; INP milliseconds; navigation p95 milliseconds; build seconds; server memory MiB; cache correctness pass rate.

**Constraints:** Hosting, caching, and rendering modes must match. Security patch level is part of the pinned environment.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX068](https://nextjs.org/blog/next-16-4)

### Nuxt

**framework · established · P2** · ID: nuxt

Vue application framework with server rendering, routing, deployment integration, and typed application utilities.

**Current signal:** Nuxt 4.6.3 is listed on 2026-10-27 with security and performance fixes.

**Test:** Build the reference SSR application and exercise routing, caching, forms, and hydration under pinned deployment settings.

**Measure:** LCP milliseconds; INP milliseconds; build seconds; server memory MiB; hydration defect count.

**Constraints:** Use a current patched release for any public test deployment. Separate framework behavior from platform-specific hosting optimizations.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX073](https://github.com/nuxt/nuxt/releases)

### Phoenix LiveView

**framework · established · P2** · ID: phoenix-liveview

Server-driven interactive UI framework on the BEAM, useful for assessing persistent connections and thin-client application designs.

**Current signal:** LiveView 1.2 adds colocated CSS in HEEx templates.

**Test:** Implement the same live dashboard and test reconnects, server restarts, and increasing network latency.

**Measure:** interaction p95 milliseconds; memory per connection KiB; reconnect success rate; bytes per update; CPU per active user.

**Constraints:** Server-driven and client-driven approaches differ under poor networks. Measure capacity and failure recovery, not just first paint.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX079](https://www.phoenixframework.org/blog/phoenix-liveview-1-2-released)

### React

**framework · established · P2** · ID: react

Component library for interactive interfaces, with concurrent rendering and ecosystem-wide server integration.

**Current signal:** React 19.3 stabilizes View Transitions and Fragment Refs.

**Test:** Run the same interactive table, editor, and dashboard behavior under identical browser and device profiles.

**Measure:** INP milliseconds; frame time p95 milliseconds; heap MiB; initial JS bytes; accessibility pass rate.

**Constraints:** React alone is not a full-stack framework. Control compiler use, memoization, virtualization, and rendering semantics.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX071](https://react.dev/blog/2026/09/09/react-19-3)

### SvelteKit

**framework · established · P2** · ID: sveltekit

Svelte application framework for routing, server rendering, and integrated client-server applications.

**Current signal:** SvelteKit 3.0 released 2026-10-01; remote functions still require experimental Async Svelte in the announcement.

**Test:** Implement the reference application with server rendering, progressive forms, and a fixed deployment target.

**Measure:** LCP milliseconds; INP milliseconds; initial JS bytes; build seconds; request correctness pass rate.

**Constraints:** Experimental remote functions are a separate lane. Migration automation success should be measured rather than assumed.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX069](https://svelte.dev/blog/sveltekit-3-is-here)

### TanStack Start

**framework · emerging · P2** · ID: tanstack-start

Application framework centered on typed routing, server functions, and full-stack TypeScript workflows.

**Current signal:** TanStack Start's stable 1.0 milestone was announced 2026-10-13.

**Test:** Implement the reference app and evaluate route typing, server-function validation, SSR behavior, and migration effort.

**Measure:** type-error detection rate; LCP milliseconds; navigation p95 milliseconds; build seconds; defect count.

**Constraints:** Product milestone 1.0 is not a claim that every package version is 1.0.0. Pin the selected server integration and hosting target.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX074](https://tanstack.com/blog/tanstack-start-1-0)

### Vue

**framework · established · P2** · ID: vue

Component-based UI framework with stable and prerelease branches that should be evaluated as separate cohorts.

**Current signal:** Upstream lists Vue 3.6.0-rc.13 as prerelease and keeps stable 3.5 releases distinct.

**Test:** Run the shared interactive UI corpus on a pinned stable build and an independently labeled prerelease build.

**Measure:** INP milliseconds; frame time p95 milliseconds; heap MiB; initial JS bytes; behavioral pass rate.

**Constraints:** Do not describe release candidates as stable. Preserve identical feature sets across renderers.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX072](https://github.com/vuejs/core/releases)

### Elysia 2

**framework · experimental · P3** · ID: elysia2

TypeScript HTTP framework candidate with ahead-of-time compilation and end-to-end type-oriented APIs.

**Current signal:** Elysia 2 RC was announced 2026-10-19 and remains a prerelease candidate.

**Test:** Compare pinned stable Elysia and Elysia 2 RC with matched validation, headers, errors, and runtime.

**Measure:** p95 latency milliseconds; p99 latency milliseconds; throughput at SLO; startup RSS MiB; peak RSS MiB; type-check seconds.

**Constraints:** Keep RC and stable cohorts separate. Measure retained memory after sustained traffic, not only peak throughput.

**Priority rationale:** Watch-stage proposal: Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX076](https://next.elysiajs.com/blog/elysia-20-rc/)

## Desktop & game engines (7)

### Electron

**framework · established · P1** · ID: electron

Desktop application platform bundling Chromium and Node.js for web-based interfaces and native integrations.

**Current signal:** Electron 45 released 2026-10-21 with updated Chromium, V8, Node.js, and preload behavior.

**Test:** Package the same desktop library application as Tauri with equivalent features and sandbox policy.

**Measure:** cold start milliseconds; idle RSS MiB; installer MiB; native-feature pass rate; update success rate.

**Constraints:** Bundled and system webviews imply different size and update tradeoffs. Measure multiple windows and native-addon compatibility.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX082](https://www.electronjs.org/blog/electron-45-0)

### Tauri

**framework · established · P1** · ID: tauri

Rust-backed application framework using platform webviews for desktop and mobile interfaces.

**Current signal:** Tauri 2.12 adds a webview permission request handler and changes supported platform/toolchain requirements.

**Test:** Package the same searchable local library UI with file import, tray behavior, and native dialogs on each target OS.

**Measure:** cold start milliseconds; idle RSS MiB; installer MiB; update success rate; native-feature pass rate.

**Constraints:** System webview versions vary by OS. Include signing, update handling, accessibility, and native permission behavior.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX081](https://v2.tauri.app/blog/tauri-2.12/)

### Bevy

**framework · emerging · P2** · ID: bevy

Rust game engine organized around data-driven entities, reusable systems, and programmable rendering.

**Current signal:** Bevy 0.20 announcement includes Solari rendering and scene-system improvements.

**Test:** Use matched 2D and 3D scenes with deterministic simulation, asset loading, and a documented graphics backend.

**Measure:** CPU frame p95 milliseconds; GPU frame p95 milliseconds; asset load seconds; memory MiB; build seconds.

**Constraints:** Match visual quality and renderer features before comparing frame rates. Engine upgrade and content-authoring effort need separate metrics.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX083](https://bevy.org/news/bevy-0-20/)

### Godot

**platform · established · P2** · ID: godot

Open-source game engine and editor for 2D and 3D projects, with stable and development release channels.

**Current signal:** Archive lists 4.7.2 stable on 2026-08-18 and 4.8 beta1 on 2026-10-15.

**Test:** Implement identical deterministic scenes and test export, frame pacing, asset imports, and editing workflows.

**Measure:** CPU frame p95 milliseconds; GPU frame p95 milliseconds; export seconds; artifact MiB; platform pass rate.

**Constraints:** Stable and beta versions cannot share a production ranking. Match renderer, resolution, lighting, and asset quality.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX084](https://godotengine.org/download/archive/)

### Compatibility-Guided Neighbor Selection for ReSTIR

**paper · experimental · P3** · ID: restir-cgns-paper

Geometry-aware weighted neighbor selection improves spatial reuse quality in reservoir-based real-time rendering.

**Current signal:** HPG 2026 paper; official implementation and method documentation checked, paper page dated July 2026.

**Test:** Within the same path tracer, compare uniform neighbors with compatibility-guided selection under equal sampling budgets; sweep candidate/selected neighbor counts across motion, disocclusion, and geometric discontinuities.

**Measure:** GPU milliseconds per frame; SMAPE against reference; temporal covariance; flicker/error over camera paths; reservoir memory; variance versus correlation tradeoff.

**Constraints:** Compare the same ReSTIR variant and denoiser; a change in rendering budget or temporal reuse can confound results. Author code is available atop Falcor 8.0; verify compatible hardware, dependencies, and scene licenses. Full PDF could not be retrieved due to size; reviewed primary project method and artifact README, with no local benchmark claims.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX162](https://research.nvidia.com/labs/rtr/publication/junkins2026compatibility/) · [RX163](https://github.com/orion-junkins/ReSTIR-CGNS)

### Real-Time Level-of-Detail Rendering with ReSTIR

**paper · experimental · P3** · ID: restir-lod-paper

Surface-point correspondence maintains spatiotemporal sample reuse when geometry level-of-detail changes alter mesh topology.

**Current signal:** SIGGRAPH 2026 paper; official page dated July 2026, exact publication day unverified.

**Test:** Compare the same renderer with baseline reservoir reuse and LoD-aware mapping on scripted camera/LoD transitions; keep meshes, lighting, sample budget, resolution, and reference images fixed.

**Measure:** GPU frame-time distribution; error against reference images; temporal error around LoD changes; memory per reservoir; transition artifact duration; mapping overhead.

**Constraints:** Requires consistent UV mappings across LoD representations; missing or degenerate mappings can disqualify the method. The paper implementation restricts an object to one LoD per frame; per-ray LoD is not established. The checked official page supplies a paper and video but no code link; a reproducible implementation still needs to be obtained or built.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX160](https://research.nvidia.com/labs/rtr/publication/wang2026levelofdetail/) · [RX161](https://research.nvidia.com/labs/rtr/publication/wang2026levelOfDetail/wang2026levelOfDetail.pdf)

### Taming Optimization Variance in Compact Neural Shading Networks

**paper · experimental · P3** · ID: neural-shading-variance-paper

Multi-instance training, selective pruning, and adaptive batch sizes reduce seed sensitivity when fitting compact neural material models.

**Current signal:** SIGGRAPH 2026 paper; official page dated July 2026 and current training artifact checked.

**Test:** Fit identical materials with single-instance and multi-instance training at equal wall-time and final network size; repeat seeds and evaluate held-out views, difficult highlights, and runtime shading cost.

**Measure:** quality distribution across seeds; held-out reflectance error; training wall time; peak GPU memory; inference milliseconds; failure-to-quality-threshold rate.

**Constraints:** The checked artifact requires a Vulkan-capable NVIDIA GPU with Cooperative Vector support and compatible driver/toolchain. Keep final model capacity and training budget fixed; better training loss alone does not establish better rendered appearance. Source and paper configs are available, but no local training or rendering experiment was run.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX164](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/) · [RX165](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/bitterli2026taming.pdf) · [RX166](https://github.com/NVlabs/neuralappearance)

## WebAssembly & sandboxes (7)

### Spin

**framework · emerging · P2** · ID: spin

WebAssembly application framework candidate for small portable services and composable plugin endpoints.

**Current signal:** Spin 4.1 announcement dated 2026-08-26 documents final WASI 0.3 support and composable HTTP middleware.

**Test:** Implement the same HTTP transform and streaming task in Spin and a native service with matching limits.

**Measure:** cold start; p95/p99 latency; peak RSS; stream correctness.

**Constraints:** Framework and WASI versions must be pinned together. Compare the same networking and persistence semantics.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX114](https://spinframework.dev/blog/announcing-spin-4-1)

### WASI 0.3 and Component Model async

**method · emerging · P2** · ID: wasi-component-async

Portable component interfaces with native asynchronous operations for composable WebAssembly applications.

**Current signal:** WASI 0.3.0 ratification was announced 2026-06-11.

**Test:** Build a small cross-language plugin chain using streaming I/O and compare with an equivalent WASI 0.2 implementation.

**Measure:** component call microseconds; stream throughput MiB/s; startup milliseconds; memory MiB; conformance pass rate; portability pass rate; stream throughput; boundary overhead; cancellation correctness.

**Constraints:** Language binding and runtime support differ. Measure composition and cancellation correctness before throughput. Specification maturity does not guarantee toolchain coverage. Record which languages and runtimes support each interface.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX086](https://bytecodealliance.org/articles/WASI-0.3) · [RX087](https://wasi.dev/releases)

### Wasmtime

**platform · established · P2** · ID: wasmtime

WebAssembly runtime with native code generation, embedding APIs, configurable resource limits, and WASI support.

**Current signal:** Current overview documents JIT/AOT execution, WASI, and multiple host-language embeddings.

**Test:** Run deterministic plugin workloads with fixed CPU and memory limits; compare JIT, AOT, and native baselines.

**Measure:** instantiate milliseconds; call microseconds; peak RSS MiB; throughput; limit-enforcement pass rate; startup latency; steady-state throughput; memory overhead; trap correctness.

**Constraints:** Native execution lacks the same isolation boundary. Use explicit capability grants and record compilation cost separately. Record compilation versus execution costs separately. Sandbox guarantees depend on host APIs and configured capabilities.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX088](https://wasmtime.dev/) · [RX089](https://github.com/bytecodealliance/wasmtime/releases)

### Wasure: A Modular Toolkit for Comprehensive WebAssembly Benchmarking

**paper · experimental · P2** · ID: wasure-paper

A configurable runtime comparison toolkit that combines repeated execution, memory observation, feature checks, and benchmark diversity analysis.

**Current signal:** 2026-02-05 preprint; a public Python toolkit and benchmark-management source were checked.

**Test:** Run one output-checked Wasm corpus across pinned engines and execution tiers; separate compile, instantiate, cold execution, and steady execution, with host-call-heavy and memory-heavy workloads.

**Measure:** complete-output parity; compile and instantiate milliseconds; cold and steady execution milliseconds; peak RSS and VMS MiB; required-feature pass rate.

**Constraints:** Paper describes Linux/macOS support with limited Windows support; verify the target OS and exact engine features. Upstream warns that package updates can remove results and installed runtimes unless stored separately; retain immutable experiment outputs. Toolkit availability does not establish a universal runtime winner; preserve per-workload results.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX138](https://arxiv.org/html/2602.05488v1) · [RX139](https://github.com/r-carissimi/wasure)

### containerd

**repository · established · P2** · ID: containerd

Container runtime building block for repeatable, isolated benchmark and build environments.

**Current signal:** Official release policy documents a four-month minor-release cadence starting with v2.3 in April 2026.

**Test:** Launch the same pinned image and workload repeatedly with restricted resources and recorded host configuration.

**Measure:** cold start time; warm start time; runtime overhead; cleanup correctness.

**Constraints:** Containers share the host kernel; isolation requirements must be explicit. Keep image download time separate from process startup.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX113](https://containerd.io/releases/)

### GenWasym: Compiling WebAssembly Concolic Execution with Staging, Continuations, and Snapshots

**paper · experimental · P3** · ID: genwasym-paper

A staged concolic interpreter produces compiled executables and uses continuation snapshots to avoid repeatedly exploring common execution prefixes.

**Current signal:** OOPSLA 2026 paper; current artifact record is v9 published 2026-09-22.

**Test:** Use identical Wasm programs and symbolic-input budgets to compare WASP, compiled execution without snapshots, unconditional snapshots, and heuristic reuse; retain path coverage and bug findings before evaluating time.

**Measure:** distinct feasible paths; bugs reproduced; total wall time including compilation; solver time; peak memory; snapshot storage and reuse overhead; timeout count.

**Constraints:** A downloadable Docker artifact is available; its documented environment was tested on Ubuntu 22.04, so verify target architecture and toolchain. Compilation costs, solver costs, and timeouts must remain in the end-to-end accounting. Do not generalize the paper benchmark suites to arbitrary Wasm features or production applications without feature and output checks.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX143](https://2026.splashcon.org/details/oopsla-2026/124/Compiling-WebAssembly-Concolic-Execution-with-Staging-Continuations-and-Snapshots) · [RX144](https://zenodo.org/records/22886998) · [RX145](https://zenodo.org/records/22886998/files/Readme.md?download=1)

### WarpL: Debugging Performance Issues in WebAssembly Runtimes via Mutation-based Inference

**paper · experimental · P3** · ID: warpl-paper

Mutation and machine-code comparison help localize inefficient instruction sequences in WebAssembly runtimes.

**Current signal:** ICSE 2026 paper with arXiv v1 published 2026-04-15; public research artifact checked.

**Test:** Use retained, minimized runtime regressions with pinned compiler revisions; compare WarpL with profiling and reduction baselines on finding the responsible instructions and producing actionable diagnoses.

**Measure:** diagnosed regression count; localization precision; diagnosis wall time; mutants compiled and executed; human root-cause review time.

**Constraints:** Functionally similar mutants are diagnostic probes, not automatically semantics-preserving production fixes. The paper uses a small case-based evaluation and still requires developer root-cause analysis. Prototype source and experiment data are available; verify reuse licensing and dependencies before importing code.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX140](https://arxiv.org/html/2604.13693v1) · [RX141](https://github.com/BZTesting/WarpL)

## Storage & databases (4)

### RocksDB

**repository · established · P1** · ID: rocksdb

Embedded key-value engine candidate for high-volume caches, asset indexes, and local metadata stores.

**Current signal:** Opened current releases documenting asynchronous filesystem-read controls in the 11.8 series.

**Test:** Replay identical write-heavy and read-heavy traces with forced restarts and constrained disk space.

**Measure:** p99 operation latency; write amplification; space amplification; recovery correctness.

**Constraints:** Compaction and durability settings strongly affect results. Include background work and sustained rather than burst throughput.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX103](https://github.com/facebook/rocksdb/releases)

### SQLite

**repository · established · P1** · ID: sqlite

Embedded SQL storage for desktop catalogs, settings, test metadata, and offline tools.

**Current signal:** Release history lists SQLite 3.54.1 on 2026-10-16.

**Test:** Replay catalog imports, indexed searches, concurrent readers, and interrupted writes on the same datasets.

**Measure:** p50/p95 query latency; import throughput; database size; recovery correctness.

**Constraints:** Fix durability and journal settings across comparisons. SQLite is maintained in Fossil; a GitHub mirror is not the canonical repository.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX092](https://www.sqlite.org/changes.html)

### redb

**repository · emerging · P1** · ID: redb

Pure Rust embedded key-value store using copy-on-write B-trees for local transactional metadata.

**Current signal:** Current README describes a pure Rust ACID store with copy-on-write B-trees and savepoints.

**Test:** Run the same persistent key-value traces as RocksDB and an SQLite key-value schema with restart validation.

**Measure:** p95/p99 operation latency; database size; peak RSS; committed-write survival.

**Constraints:** Use supported stable APIs for the baseline. Do not translate upstream benchmark claims into Atlas rankings.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX104](https://github.com/cberner/redb)

### PostgreSQL

**repository · established · P2** · ID: postgresql

Relational server baseline for shared catalogs, transactional metadata, and multi-user ranking services.

**Current signal:** Official release page announces PostgreSQL 19 RC1 dated 2026-10-15; do not treat it as GA.

**Test:** Run identical catalog transactions and search requests under concurrent clients; verify committed data after restart.

**Measure:** transaction throughput; p95/p99 latency; recovery time; incorrect results.

**Constraints:** Server deployment cost differs from embedded databases. PostgreSQL 19 RC1 is a prerelease; benchmark stable and prerelease lanes separately.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX093](https://www.postgresql.org/docs/release/)

## Analytics & data formats (6)

### DuckDB

**repository · established · P1** · ID: duckdb

Embedded analytical SQL engine for querying benchmark runs, telemetry, and large local files.

**Current signal:** DuckDB 2.0.0 LTS was announced on 2026-10-21 with asynchronous I/O and other major features.

**Test:** Use identical Parquet telemetry and benchmark datasets, including data larger than RAM, with cold and warm caches.

**Measure:** query geometric mean; p95 query latency; peak RSS; bytes read.

**Constraints:** Validate result equivalence before measuring speed. Separate filesystem cache effects and extension versions.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX094](https://duckdb.org/2026/10/21/announcing-duckdb-200)

### Polars

**repository · established · P1** · ID: polars

DataFrame and SQL engine for typed local data transformations and memory-bounded analytical pipelines.

**Current signal:** Polars 2.1 was announced on 2026-10-27; out-of-core group-by and recursive CTE support are documented.

**Test:** Execute equivalent joins, high-cardinality group-bys, scans, and transformations against DuckDB and DataFusion.

**Measure:** wall time; peak RSS; spill bytes; output equivalence.

**Constraints:** Do not compare eager and lazy implementations without describing the difference. Control row-order requirements and available memory.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX095](https://pola.rs/posts/polars-2-1-changelog/)

### Apache DataFusion

**framework · established · P2** · ID: apache-datafusion

Rust query engine toolkit for embedding SQL and custom analytical operators in engineering tools.

**Current signal:** DataFusion 55.0.0 release documents range partitioning, MERGE INTO planning, and runtime pruning.

**Test:** Embed a fixed SQL workload in a Rust tool; compare default and custom physical operators with reproducible inputs.

**Measure:** query latency; peak RSS; startup time; extension complexity.

**Constraints:** A toolkit needs application integration; compare whole deployed implementations. Lock optimizer configuration and spill backends.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX096](https://datafusion.apache.org/blog/output/2026/08/25/datafusion-55.0.0/)

### Apache Iceberg

**repository · established · P2** · ID: apache-iceberg

Table-format candidate for versioned benchmark datasets and interoperable analytical storage.

**Current signal:** Official release notes list Iceberg 1.12.0 released on 2026-09-29.

**Test:** Write and evolve equivalent datasets across two engines, then test snapshot reads, schema changes, and interrupted commits.

**Measure:** read/write throughput; metadata growth; compatibility failures; recovery correctness.

**Constraints:** A table format is not a query engine. Track format version and engine connector compatibility separately.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX098](https://iceberg.apache.org/releases/)

### ClickHouse

**repository · established · P2** · ID: clickhouse

Column-oriented analytical database candidate for larger telemetry and benchmark-result services.

**Current signal:** ClickHouse 26.9 release highlights incremental materialized-view refreshes and DISTINCT spilling.

**Test:** Import the same time-series and event datasets, then measure aggregate queries at fixed resource budgets.

**Measure:** ingest rows/s; p95 query latency; compressed size; CPU-seconds/query.

**Constraints:** Keep single-node and distributed results separate. Materialized views change ingestion cost and freshness guarantees.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX097](https://clickhouse.com/blog/clickhouse-release-26-09)

### Vortex columnar format

**repository · emerging · P2** · ID: vortex

Compressed columnar format candidate for local analytical files and fast selective scans.

**Current signal:** Official 2026-10-21 integration post documents Vortex as a DuckDB core extension on Linux and macOS.

**Test:** Store identical telemetry in Vortex, Parquet, and a native database; verify results before cold and warm scans.

**Measure:** compressed size; scan latency; decode CPU; cross-version readability.

**Constraints:** Match encodings, compression effort, and projected columns. Frozen format editions and draft extensions have different compatibility guarantees.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX131](https://spiraldb.com/blog/duckdb-and-vortex) · [RX132](https://docs.vortex.dev/specs/file-format)

## Durable workflows (3)

### DBOS

**framework · emerging · P2** · ID: dbos

PostgreSQL-backed durable workflows for recoverable Python and TypeScript engineering pipelines.

**Current signal:** September update announces Python v3.0, TypeScript v5.0, and improved fair queueing.

**Test:** Use the same failure-injected processing pipeline with an existing PostgreSQL instance and bounded concurrency.

**Measure:** completed jobs/s; p95 step overhead; recovery correctness; database growth.

**Constraints:** Include PostgreSQL operations in resource accounting. The documented major-version upgrade has directional compatibility constraints.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX107](https://www.dbos.dev/blog/whats-new-in-dbos-september-2026)

### Restate

**platform · emerging · P2** · ID: restate

Durable execution system candidate for resumable services and recoverable multi-step tooling tasks.

**Current signal:** Shared-log architecture reviewed against the primary article; no unverified 2026 release number is asserted.

**Test:** Implement the same crash-injected task pipeline as Temporal and DBOS, including idempotent external writes.

**Measure:** completion correctness; recovery time; p95 task overhead; storage growth.

**Constraints:** Replay and external side effects must be tested separately. The opened shared-log architecture article is dated 2025, despite a newer date in a search index.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX106](https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications)

### Temporal

**platform · established · P2** · ID: temporal

Durable execution platform candidate for recoverable test orchestration and long-running evaluation jobs.

**Current signal:** Official changelog lists Standalone Activities GA on 2026-09-15.

**Test:** Run a multi-step benchmark pipeline with worker crashes, retries, duplicate delivery, and version upgrades.

**Measure:** completion correctness; duplicate side effects; recovery time; CPU/storage per job.

**Constraints:** Activities can repeat; external effects need explicit idempotency. Separate managed-cloud and self-hosted measurements.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX105](https://temporal.io/changelog)

## Profiling & observability (5)

### Perfetto

**tool · established · P1** · ID: perfetto

Trace capture and local analysis suite for diagnosing application scheduling, memory, and cross-process performance.

**Current signal:** Perfetto v58.2 announcement on 2026-08-24 describes merged timelines and memory investigation tooling.

**Test:** Capture a repeatable import/render workload and analyze scheduling and memory regressions from saved traces.

**Measure:** capture overhead; trace parse time; peak analyzer memory; diagnostic coverage.

**Constraints:** Supported probes differ across operating systems. Compare equivalent event scopes rather than raw trace size alone.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX111](https://perfetto.dev/blog/perfetto-v58)

### Tracy Profiler

**tool · established · P1** · ID: tracy

CPU, GPU, allocation, and synchronization profiler for games and interactive engineering applications.

**Current signal:** Current README lists CPU/GPU, allocation, lock, and context-switch profiling support.

**Test:** Instrument a reproducible frame loop and asset-import workload, then compare capture overhead and diagnostic coverage.

**Measure:** frame-time overhead; event loss; trace size; diagnosis time.

**Constraints:** Graphics APIs and language bindings have different coverage. Profiler overhead is a measurement target, not application performance.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX110](https://github.com/wolfpld/tracy/blob/master/README.md)

### Grafana Beyla

**tool · established · P2** · ID: grafana-beyla

Linux eBPF instrumentation candidate for collecting service metrics and traces without modifying application code.

**Current signal:** Opened documentation distinguishes RED metrics coverage from tracing limitations and SDK coexistence.

**Test:** Measure identical HTTP/gRPC services with no instrumentation, Beyla, and explicit OpenTelemetry SDK instrumentation.

**Measure:** CPU overhead; p99 latency overhead; span coverage; dropped events.

**Constraints:** Linux support and tracing limitations constrain applicability. Avoid duplicate spans when SDK instrumentation already exists.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX109](https://grafana.com/docs/beyla/latest/)

### OpenTelemetry Collector and OTTL

**framework · established · P2** · ID: opentelemetry-ottl

Vendor-neutral telemetry collection and transformation for consistent benchmark traces, metrics, and logs.

**Current signal:** OTTL v1 was announced on 2026-10-27; stable traces, metrics, and logs support begins with contrib v0.164.0.

**Test:** Replay a fixed telemetry corpus through equivalent filtering, redaction, and export configurations.

**Measure:** events/s; CPU per event; dropped events; end-to-end latency.

**Constraints:** OTTL v1 stability excludes explicitly experimental features. Validate semantic equivalence and sensitive-field redaction before throughput scoring.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX108](https://opentelemetry.io/blog/2026/ottl-v1/)

### RenderDoc

**tool · established · P2** · ID: renderdoc

Frame-capture graphics debugger for inspecting rendering state, resources, and draw calls in supported APIs.

**Current signal:** Opened canonical README documenting frame capture and supported graphics APIs.

**Test:** Capture owned reference scenes with seeded rendering faults and score diagnosis accuracy and capture compatibility.

**Measure:** capture success rate; fault localization accuracy; capture overhead; artifact size.

**Constraints:** Debug only supported applications and graphics APIs. Frame-debugger capability is not directly comparable to continuous CPU profiling.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX112](https://github.com/baldurk/renderdoc)

## Testing & verification (13)

### Hypothesis

**framework · established · P1** · ID: hypothesis

Property-based testing for Python parsers, serializers, transformation pipelines, and stateful tools.

**Current signal:** Opened current documentation describing generated inputs and edge-case exploration.

**Test:** Use seeded parser and state-machine defects; compare discovered bugs and minimized counterexamples under equal budgets.

**Measure:** unique defects found; time to first failure; counterexample size; reproducibility.

**Constraints:** Properties and generators determine test effectiveness. Report seeded and naturally occurring failures separately.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX115](https://hypothesis.readthedocs.io/en/latest/)

### Playwright

**tool · established · P1** · ID: playwright

Browser automation and testing toolkit for cross-browser application verification, traces, and repeatable interaction workflows.

**Current signal:** The release notes describe Playwright 1.64 WebMCP APIs and test-order shuffling.

**Test:** Validate the same application flows across Chromium, Firefox, and WebKit with fixed browser versions and trace collection.

**Measure:** workflow pass rate; flaky failure rate; suite seconds; trace diagnostic usefulness; cross-browser defect count; flake rate; wall time; fault detection; trace usefulness.

**Constraints:** Experimental browser APIs require feature flags and separate labeling. Test quality and determinism matter more than raw suite speed. Browser binaries are part of the test version. Retries must not hide first-attempt failures.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX091](https://playwright.dev/docs/release-notes)

### Ruff

**tool · established · P1** · ID: ruff

Python linter and formatter implemented in Rust, with caching, automated fixes, and editor integration.

**Current signal:** Current documentation lists Python 3.15 compatibility.

**Test:** Evaluate matched lint rules and formatting policy against a labeled Python corpus and existing baseline tools.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; diagnostic recall; safe-fix regression count.

**Constraints:** Formatter parity is not identical to rule parity. Record preview rules and exclude them from stable comparisons.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX066](https://docs.astral.sh/ruff/)

### cargo-nextest

**tool · established · P1** · ID: cargo-nextest

Rust test runner candidate for isolated parallel execution, test selection, and reproducible CI feedback.

**Current signal:** Current changelog lists 0.9.150 on 2026-10-26, including a portable-recording security fix.

**Test:** Run the same Rust suite with cargo test and nextest at fixed concurrency; include intentionally flaky and slow tests.

**Measure:** suite wall time; flake visibility; peak RSS; failure isolation.

**Constraints:** Report first-run compilation separately. Use a patched release when importing run recordings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX120](https://www.nexte.st/changelog/)

### AFL++

**tool · established · P2** · ID: aflplusplus

Coverage-guided fuzzing candidate for native file parsers, archive readers, codecs, and import pipelines.

**Current signal:** Opened current repository distinguishing release 5.03c from development version 5.04a.

**Test:** Fuzz owned fixture parsers with identical seeded corpora, dictionaries, sanitizers, and CPU-hour budgets.

**Measure:** unique confirmed defects; time to first crash; coverage growth; reproduction rate.

**Constraints:** Deduplicate crashes by root cause. Do not treat upstream comparative marketing as an Atlas result.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX122](https://github.com/AFLplusplus/AFLplusplus)

### Biome

**tool · established · P2** · ID: biome

Integrated formatter and linter with expanding language support and configurable analysis rules.

**Current signal:** Biome 2.6 announcement dated 2026-10-15 adds Markdown, YAML, and SCSS support; JavaScript plugins are preview.

**Test:** Compare a shared rule subset and complete formatting corpus with ESLint, Prettier, and Oxc.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; safe-fix regression count; format idempotence rate.

**Constraints:** Preview plugins must be separated from stable features. Do not count unimplemented rules as passing.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX063](https://biomejs.dev/blog/)

### Criterion.rs

**tool · established · P2** · ID: criterion-rs

Statistical Rust microbenchmarking for detecting regressions in parsers, indexing, and core algorithms.

**Current signal:** Opened canonical repository documenting statistical regression detection and stable Rust support.

**Test:** Measure known controlled slowdowns across repeated clean runs and compare sensitivity with false-alarm rate.

**Measure:** effect-size accuracy; confidence interval width; false-positive rate; run cost.

**Constraints:** Microbenchmarks do not replace end-to-end workloads. Control thermal state, CPU frequency, background load, and compiler settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX121](https://github.com/criterion-rs/criterion.rs)

### Jepsen

**framework · established · P2** · ID: jepsen

Failure-injection and consistency-testing framework for databases, queues, and durable execution services.

**Current signal:** Jepsen news records 0.3.15 on 2026-10-16 and a checker-correctness fix.

**Test:** Record client histories while applying process crashes, network partitions, and clock faults to an isolated service.

**Measure:** consistency violations; acknowledged data loss; recovery time; availability under faults.

**Constraints:** Passing a bounded campaign does not prove universal safety. Pin checker versions because the checker can contain bugs.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX118](https://jepsen.io/)

### TLA+ and TLC

**tool · established · P2** · ID: tla-tlc

Finite-state modeling and model checking for synchronization, queues, and transactional workflow invariants.

**Current signal:** Opened TLC documentation describing explicit-state verification of TLA+ models.

**Test:** Model a catalog update or job queue and check safety invariants under bounded concurrency and injected failures.

**Measure:** counterexamples found; states explored; verification time; model/implementation agreement.

**Constraints:** A checked finite model is not a proof of every implementation or unbounded configuration. Record model assumptions and bounds.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX117](https://www.docs.tlapl.us/using:tlc:start)

### Testcontainers

**framework · established · P2** · ID: testcontainers

Disposable real-service dependencies for repeatable local and CI integration tests.

**Current signal:** Opened official guide explaining lifecycle-managed real-service containers for integration testing.

**Test:** Create isolated database fixtures for the same integration suite; compare startup, cleanup, and cross-run interference.

**Measure:** fixture startup time; suite wall time; flake rate; resource leaks.

**Constraints:** Each language implementation has separate capabilities and versions. Containerized services still need production-relevant settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX119](https://testcontainers.com/guides/introducing-testcontainers/)

### Vitest

**tool · established · P2** · ID: vitest

JavaScript and TypeScript test runner with multiple worker pools, environments, and browser execution modes.

**Current signal:** Vitest 5 announcement includes a reference-app benchmark matrix across worker pools and environments.

**Test:** Run the same meaningful application tests across supported runners with identical isolation, environment, and coverage settings.

**Measure:** suite seconds; incremental test milliseconds; peak RSS MiB; flaky failure rate; coverage agreement.

**Constraints:** Disabling isolation changes semantics and must be labeled. Do not compare different test counts or mock environments.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX090](https://vitest.dev/blog/vitest-5)

### fast-check

**framework · established · P2** · ID: fast-check

Property-based testing for JavaScript and TypeScript data handling and asynchronous state transitions.

**Current signal:** Maintainer blog documents fast-check 4.10.0 on 2026-09-13 and migration work toward v5.

**Test:** Exercise the same serialization and state-machine contracts as the Python lane with equivalent seeded defects.

**Measure:** unique defects found; failure discovery time; shrink quality; test runtime.

**Constraints:** Compare equivalent properties rather than raw generated-case counts. Pin plugin APIs and preserve replay seeds.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX116](https://fast-check.dev/blog/)

### ty

**tool · emerging · P2** · ID: ty

Python type checker and language server implemented in Rust, with incremental analysis and editor diagnostics.

**Current signal:** The 2026-10-13 uv integration announcement still describes work toward ty's stable release.

**Test:** Compare ty, mypy, and Pyright on the same typed projects and a labeled defect suite.

**Measure:** cold check seconds; incremental milliseconds; peak RSS MiB; diagnostic precision; diagnostic recall.

**Constraints:** A faster checker is not better if it misses relevant defects. Pin stubs, dependency environments, and strictness settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX067](https://docs.astral.sh/ty/) · [RX065](https://astral.sh/blog/uv-ty-integration)

## Software supply chain (6)

### OSV-Scanner

**tool · established · P1** · ID: osv-scanner

Dependency vulnerability scanner using the OSV advisory ecosystem and machine-readable version ranges.

**Current signal:** Opened official documentation for CLI and Go-library usage against the OSV database.

**Test:** Scan the same known-vulnerable and fixed dependency fixtures used for Trivy with a recorded advisory snapshot.

**Measure:** precision; recall; scan time; actionable findings.

**Constraints:** Different advisory ecosystems change coverage. Unknown package identity is not proof of safety.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX128](https://google.github.io/osv-scanner/)

### Sigstore Cosign

**tool · established · P1** · ID: sigstore-cosign

Artifact signing and verification candidate for trusted test binaries, datasets, and release packages.

**Current signal:** Opened Cosign v3.1.4 release dated 2026-10-20.

**Test:** Sign and verify fixture artifacts, then test tampered content, wrong identities, and offline bundle handling.

**Measure:** verification correctness; verification latency; artifact overhead; offline success rate.

**Constraints:** A valid signature establishes identity/integrity, not software quality. Pin trust roots and verification identity policy.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX123](https://github.com/sigstore/cosign/releases)

### OpenSSF Scorecard

**tool · established · P2** · ID: openssf-scorecard

Automated repository-security signals for evaluating dependency hygiene with visible check-level evidence.

**Current signal:** Opened official project overview describing automated repository security assessment.

**Test:** Collect versioned check-level reports for candidate repos and manually verify a sample of positive and negative findings.

**Measure:** check coverage; false positives; data freshness; manual agreement.

**Constraints:** Security hygiene is not runtime correctness or performance. Missing checks must remain unknown rather than zero-quality judgments.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX125](https://openssf.org/scorecard/)

### SLSA supply-chain framework

**method · established · P2** · ID: slsa

Provenance and source-security framework for documenting how benchmark artifacts are built and reviewed.

**Current signal:** Opened approved SLSA v1.2 specification; it includes source and build tracks.

**Test:** Define required provenance fields and verify a reference build against explicit source and build-track controls.

**Measure:** provenance completeness; tampering detection; verification effort; reproducible-build rate.

**Constraints:** SLSA levels are scoped guarantees, not an overall project quality score. Keep source and build tracks distinct.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX124](https://slsa.dev/spec/v1.2/)

### Syft

**tool · established · P2** · ID: syft

Software bill-of-materials generator for inventorying container images, filesystems, and release bundles.

**Current signal:** Opened README documenting SBOM output and supported scan targets.

**Test:** Generate inventories for known fixture packages and images; validate package identity and dependency coverage.

**Measure:** inventory precision; inventory recall; scan time; schema validity.

**Constraints:** SBOM generation and vulnerability assessment are separate tasks. Ground truth must include bundled and transitive packages.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX127](https://github.com/anchore/syft/blob/main/README.md)

### Trivy

**tool · established · P2** · ID: trivy

Scanner candidate for dependency, container, and configuration findings in reproducible build environments.

**Current signal:** Opened Trivy v0.76.1 release and its 2026-10-21 artifact timestamps.

**Test:** Scan controlled fixture images and lockfiles with known findings; compare detection, noise, and runtime.

**Measure:** precision; recall; scan time; database freshness.

**Constraints:** Record vulnerability database snapshot and supported ecosystems. Advisory severity must not become a universal project ranking.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX126](https://github.com/aquasecurity/trivy/releases)

## Systems research (6)

### HARE: Cache-Centric Multi-Resource Allocation for Storage Services

**paper · experimental · P3** · ID: hare-storage-allocation-paper

A harvest-and-redistribute allocation method couples cache capacity with I/O and other resources to improve multi-tenant storage fairness.

**Current signal:** FAST 2026 paper (February venue record); full method and artifact references checked, code retrieval unresolved.

**Test:** Compare equal resource partition, dominant-resource fairness, cache-only policies, and HARE under fixed total budgets; sweep skew, working-set size, read/write mix, and tenant arrivals.

**Measure:** minimum per-tenant normalized throughput; aggregate completed throughput; p99/p99.9 latency; cache hit rate; adaptation time; resource-accounting overhead; I/O correctness.

**Constraints:** A higher aggregate rate is insufficient if any tenant loses the required sharing incentive or latency guarantee. Miss-ratio and demand estimates can change with workload phases; test estimation errors and adaptation explicitly. Paper references public BunnyFS/HopperKV code, but live artifact availability and build/license details were not verified in this pass.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX158](https://www.usenix.org/conference/fast26/presentation/ye) · [RX159](https://www.usenix.org/system/files/fast26-ye.pdf)

### Incr: Faster Re-Execution via Bolt-On Incrementalization

**paper · experimental · P3** · ID: incr-paper

Dependency and effect tracking reuse intermediate shell-command results across program reruns while preserving relevant side effects.

**Current signal:** OSDI 2026 paper, dated July in the venue record; public source and retained evaluation tooling checked.

**Test:** Replay real build/analysis scripts under Bash and Incr across unchanged reruns, file edits, renames, deletions, environment changes, and non-idempotent steps; compare all outputs, exit codes, and filesystem effects.

**Measure:** cold first-run wall time; changed-input rerun wall time; complete output and side-effect parity; p95 invalidation latency; retained-state bytes; tracking overhead.

**Constraints:** The full paper reports Bash corner-case divergences and excludes parser-error cases; require target-script equivalence before acceptance. Default artifact setup uses a privileged container; use an isolated reproduction machine and review host dependencies. An unchanged-cache result alone does not establish a meaningful end-to-end improvement.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX152](https://www.usenix.org/conference/osdi26/presentation/xie-yizheng) · [RX153](https://www.usenix.org/system/files/osdi26-xie-yizheng.pdf) · [RX154](https://github.com/atlas-brown/incr)

### Maintaining Queries under Updates Using Heavy-Light Partitioning of the Input Relations

**paper · experimental · P3** · ID: heavy-light-ivm-paper

A theoretical framework combines delta queries, materialized-view trees, and heavy/light partitions to maintain joins under inserts and deletes.

**Current signal:** Original arXiv v1 published 2026-05-08; theory candidate with no local performance reproduction.

**Test:** Prototype a profiled join workload against indexed recomputation and simpler incremental views; replay inserts, deletions, skew shifts, and bursts while checking the complete result after every update.

**Measure:** full-result parity after every update; p50/p95/p99 update milliseconds; enumeration delay; materialized-state bytes; rebalancing time; recovery time.

**Constraints:** Asymptotic bounds assume a fixed query and specific data/indexing model; they do not establish application tail latency. No checked executable artifact is available from this review; implementation work is required. Reject if rebalancing, materialized-state size, or query restrictions violate the target workload.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX142](https://arxiv.org/html/2605.08397v1)

### SysSpec generative file systems

**paper · experimental · P3** · ID: sysspec-paper

Specification-centered file-system generation research for studying the correctness of AI-produced systems code.

**Current signal:** FAST '26 publisher page lists Best Paper and Distinguished Artifact awards.

**Test:** Recover the published artifact and reproduce specification-to-implementation tasks with held-out invariants and crash tests.

**Measure:** functional correctness; crash consistency; human repair effort; reproduction success.

**Constraints:** Publication awards are external recognition, not Atlas test scores. Artifact availability and exact model versions must be confirmed before execution.

**Priority rationale:** Watch-stage proposal: Reproduce a narrow mechanism and check assumptions before translating a paper into an application recommendation.

**Sources:** [RX134](https://www.usenix.org/conference/fast26/presentation/liu-qingyuan)

### VS-Flash

**paper · experimental · P3** · ID: vs-flash-paper

Research proposal combining flash-backed vector capacity with batch-aware placement of CPU and device computation.

**Current signal:** arXiv v1 is dated 2026-10-18; the paper describes mixed-workload vector search.

**Test:** Reproduce baseline query mixes and recall targets; evaluate whether the specialized hardware setup is obtainable before scheduling runs.

**Measure:** recall@k; bulk throughput; small-query p99; host/device memory.

**Constraints:** Preprint author results are not independently reproduced here. Specialized computational flash may prevent direct desktop reproduction.

**Priority rationale:** Watch-stage proposal: Reproduce a narrow mechanism and check assumptions before translating a paper into an application recommendation.

**Sources:** [RX133](https://arxiv.org/html/2610.26960v1)

### hS: Speculative Script Reordering at Subprocess Granularity

**paper · experimental · P3** · ID: hs-speculative-shell-paper

Speculative subprocess execution detects effects dynamically and commits independent work while rerunning conflicting portions.

**Current signal:** OSDI 2026 paper; public prototype and dated 2026-07-10 author explanation checked.

**Test:** Compare Bash, explicitly parallelized scripts, and hS on dependency-rich build/data pipelines; inject filesystem conflicts and non-replayable effects while checking byte outputs, exit statuses, and final state.

**Measure:** complete-effect parity; end-to-end wall time; rollback and reexecution count; CPU time; peak RSS; unsafe-effect blocking coverage.

**Constraints:** Upstream warns that the prototype changes cgroup.procs permissions to 0666; this is an isolated research-machine candidate, not a production drop-in. Network and other non-replayable effects require verified handling; disallow workloads outside the prototype effect model. Full paper PDF retrieval timed out; this entry relies on the official venue abstract, author explanation, and checked artifact README.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX155](https://www.usenix.org/conference/osdi26/presentation/liargkovas) · [RX156](https://github.com/binpash/hs) · [RX157](https://blog.greenberg.science/posts/osdi2026/)

## Serialization (3)

### Python standard-library json

**repository · established · P1** · ID: python-stdlib-json

Built-in Python JSON encoding and decoding baseline, including configurable numeric and duplicate-key handling.

**Current signal:** Existing Atlas experiment used CPython 3.12.14. Versioned 3.12 documentation is the compatibility reference; this is not a current-runtime benchmark.

**Test:** Reproduce the retained generated corpus, then add representative files, large integers, duplicate keys, UTF-8 errors, cold startup and peak memory under the required output contract.

**Measure:** Complete encode/decode latency; Peak memory and allocations; Semantic equality and rejected-input behavior; Cold startup and packaging compatibility.

**Constraints:** Existing results are warmed generated workloads on one Linux host, not application acceptance. All three default decoders collapse duplicate keys. The retained orjson probe rounds the integer above u64.

**Priority rationale:** Retained Atlas evidence provides a reproducible starting point, with explicit numeric and duplicate-key disqualifiers.

**Sources:** [RX135](https://docs.python.org/3.12/library/json.html)

### UltraJSON (ujson)

**repository · established · P1** · ID: ultrajson

C-backed Python JSON implementation retained as an explicit compatibility and performance comparison.

**Current signal:** Existing Atlas experiment used ujson 6.0.0. Upstream describes a maintenance-only policy; evaluate that lifecycle before selecting it for new work.

**Test:** Reproduce the retained generated corpus, then add representative files, large integers, duplicate keys, UTF-8 errors, cold startup and peak memory under the required output contract.

**Measure:** Complete encode/decode latency; Peak memory and allocations; Semantic equality and rejected-input behavior; Cold startup and packaging compatibility.

**Constraints:** Existing results are warmed generated workloads on one Linux host, not application acceptance. All three default decoders collapse duplicate keys. The retained orjson probe rounds the integer above u64.

**Priority rationale:** Retained Atlas evidence provides a reproducible starting point, with explicit numeric and duplicate-key disqualifiers.

**Sources:** [RX137](https://github.com/ultrajson/ultrajson)

### orjson

**repository · established · P1** · ID: orjson

Rust-backed Python JSON implementation with UTF-8 byte output and a defined serialization contract.

**Current signal:** Existing Atlas experiment used orjson 3.13.0. Numeric policy and duplicate-key behavior remain adoption gates despite lower timings in that workload.

**Test:** Reproduce the retained generated corpus, then add representative files, large integers, duplicate keys, UTF-8 errors, cold startup and peak memory under the required output contract.

**Measure:** Complete encode/decode latency; Peak memory and allocations; Semantic equality and rejected-input behavior; Cold startup and packaging compatibility.

**Constraints:** Existing results are warmed generated workloads on one Linux host, not application acceptance. All three default decoders collapse duplicate keys. The retained orjson probe rounds the integer above u64.

**Priority rationale:** Retained Atlas evidence provides a reproducible starting point, with explicit numeric and duplicate-key disqualifiers.

**Sources:** [RX136](https://github.com/ijl/orjson)

## Evaluated configurations (8)

### Claude Fable 5.1 / mini-SWE-agent / xhigh

**platform · emerging · P3** · ID: config-claude-fable-5-1-mini-swe-agent-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 9.0% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $56.84 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Claude Opus 5.5 / mini-SWE-agent / xhigh

**platform · emerging · P3** · ID: config-claude-opus-5-5-mini-swe-agent-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 18.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $36.36 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Fable 5.1 / Claude Code / high

**platform · emerging · P3** · ID: config-fable-5-1-claude-code-high

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 99.1% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.5; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Gemini 4 Argon / mini-swe-agent / high

**platform · emerging · P3** · ID: config-gemini-4-argon-mini-swe-agent-high

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 99.22% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.45; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Kimi-K3 / mini-swe-agent / max

**platform · emerging · P3** · ID: config-kimi-k3-mini-swe-agent-max

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 97.7% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.9; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Muse Wonder / mini-SWE-agent / xhigh

**platform · emerging · P3** · ID: config-muse-wonder-mini-swe-agent-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 5.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $36.53 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Muse Wonder Full / mini-SWE-agent / effort unreported

**platform · emerging · P3** · ID: config-muse-wonder-full-mini-swe-agent-unspecified

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 8.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Opus 5 / Claude Code / xhigh

**platform · emerging · P3** · ID: config-opus-5-claude-code-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Current signal:** Reported 99.4% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.4; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)
