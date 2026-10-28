# Research catalog

**Snapshot: 2026-10-27 (America/Denver).** Source checks use UTC dates.

[Interactive Explorer](https://herbertofury.github.io/Engineering-Atlas/explorer/) · [Ranking methodology](research-explorer.md) · [Test queue](research-test-queue.md)

Every entry below is a research candidate. Priority is an editorial test queue, not a performance score. Existing local measurements are exposed separately by exact cohort. No universal winner is implied.

## AI systems (18)

### MLX LM

**repository · established · P1** · ID: mlx-lm

MLX package for language-model generation, quantization, and fine-tuning on Apple Silicon.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare inference and a small LoRA training task against equivalent Apple Silicon alternatives.

**Measure:** TTFT; tokens/s; unified memory peak; training time; held-out task accuracy.

**Constraints:** Apple Silicon results do not imply NVIDIA or CPU performance. Keep model and quantization equivalent.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX006](https://github.com/ml-explore/mlx-lm)

### SGLang

**framework · established · P1** · ID: sglang

Serving framework with prefix reuse, speculative decoding, and separate prefill/decode execution.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Opened release notes describe Rust-backed prefix caching and live switching between prefill and decode roles.

**Test:** Replay the same desktop assistant and multi-turn workload used for vLLM, with cache reuse reported separately.

**Measure:** p95 TTFT; p95 inter-token latency; requests/s under SLO; peak VRAM; failure rate.

**Constraints:** Model architecture and kernel support differ by hardware. Document cache hit distribution and queueing.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX002](https://github.com/sgl-project/sglang/releases)

### llama.cpp

**repository · established · P1** · ID: llama-cpp

C/C++ inference runtime supporting quantized models and CPU/GPU execution across desktop hardware.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Run a fixed local coding-assistant workload on representative Windows, Linux, and Apple Silicon systems.

**Measure:** prompt tokens/s; generation tokens/s; resident memory; energy per task; answer quality.

**Constraints:** Treat each device/backend/quantization as a separate cohort. Quantized model quality must be checked against the reference checkpoint.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX005](https://github.com/ggml-org/llama.cpp)

### vLLM

**framework · established · P1** · ID: vllm

LLM serving engine with paged KV memory, continuous batching, prefix caching, quantization, and distributed inference.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Current docs list DFlash speculation and separated prefill/decode alongside multiple hardware plugins.

**Test:** Compare one pinned model and precision against SGLang under identical prompt lengths, arrivals, hardware, and quality checks.

**Measure:** p50/p95 TTFT; p50/p95 inter-token latency; successful tokens/s; peak VRAM; cost per successful request.

**Constraints:** Pin kernels and engine commit. Warm cache and cold cache are separate cohorts. Throughput alone can hide tail latency regressions.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX001](https://github.com/vllm-project/vllm/blob/main/docs/README.md)

### FlashInfer

**repository · established · P2** · ID: flashinfer

Kernel library for serving language models, including attention and mixture-of-experts operations.

**Stack layers:** Optional AI & developer tools.

**Current signal:** v0.7.2.post1 was released on October 23, 2026; release notes cover newer GPU backends and fused operations.

**Test:** Microbenchmark representative tensor shapes, then confirm effects in an end-to-end serving engine.

**Measure:** kernel latency; memory bandwidth; numerical error; end-to-end request latency.

**Constraints:** Kernel-only gains do not establish application speedup. Pin GPU architecture, CUDA, and precision.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX003](https://github.com/flashinfer-ai/flashinfer/releases)

### LMCache

**framework · emerging · P2** · ID: lmcache

KV-cache layer offering shared caching and separate cache processes for serving engines.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Replay multi-turn assistant requests with controlled prefix overlap and compare cold, warm, and post-restart cache behavior.

**Measure:** TTFT; cache hit rate; transfer overhead; memory; recovery latency.

**Constraints:** Benefit depends on workload reuse and storage bandwidth. The inspected multiprocess guide targets the development branch; pin a tested commit.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX036](https://docs.lmcache.ai/mp/)

### MLC LLM

**framework · established · P2** · ID: mlc-llm

Compiler-based model deployment across desktop GPUs, mobile devices, and browser WebGPU.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Build the same small assistant model for desktop and browser targets and record portability costs.

**Measure:** compile time; artifact size; cold start; tokens/s; memory; quality.

**Constraints:** Compilation settings and target GPU must be recorded. Browser and native deployments need separate cohorts.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX007](https://github.com/mlc-ai/mlc-llm/blob/main/README.md)

### PEFT

**framework · established · P2** · ID: peft

Library for adapting pretrained models by training a small subset of additional or modified parameters.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare LoRA and a selected alternative against full fine-tuning where feasible, holding data and evaluation constant.

**Measure:** held-out accuracy; trainable parameters; training time; peak memory; artifact size.

**Constraints:** Parameter efficiency does not guarantee equal quality. Tune on validation data and keep final tests untouched.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX040](https://huggingface.co/docs/peft/index)

### TRL

**framework · established · P2** · ID: trl

Post-training library providing supervised fine-tuning, preference optimization, and reinforcement-learning trainers.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Fine-tune a small local coding model on licensed training tasks and evaluate strictly held-out repositories.

**Measure:** held-out accuracy; training GPU-hours; peak VRAM; stability; regression rate.

**Constraints:** Training quality depends strongly on data and reward design. Do not train on benchmark test tasks.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX033](https://github.com/huggingface/trl/blob/main/README.md)

### TensorRT LLM

**framework · established · P2** · ID: tensorrt-llm

NVIDIA-oriented inference library with a Python runtime, quantization, speculative decoding, and distributed serving.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare against vLLM and SGLang on the same NVIDIA GPU, checkpoint, quantization, and latency SLO.

**Measure:** tokens/s under SLO; TTFT; inter-token latency; VRAM; startup time.

**Constraints:** Hardware-specific results should not become a cross-platform winner. Include conversion and engine preparation costs.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX004](https://developer.nvidia.com/tensorrt-llm)

### Unsloth

**framework · established · P2** · ID: unsloth

Local model running and training toolkit with an open-source user interface.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare a small local fine-tuning job with a plain Transformers/PEFT baseline on the same device.

**Measure:** training time; peak VRAM; held-out quality; export compatibility; setup time.

**Constraints:** Vendor-reported speedups require reproduction. Check exact model, precision, and hardware support.

**Priority rationale:** Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX035](https://unsloth.ai/docs)

### DFlash

**paper · experimental · P3** · ID: dflash

Speculative decoding approach using a lightweight block-diffusion drafter and parallel target verification.

**Stack layers:** Optional AI & developer tools.

**Current signal:** The ICML 2026 camera-ready paper was revised May 28, 2026.

**Test:** Compare with autoregressive decoding and EAGLE-3 using the same target model, output distribution, hardware, and concurrency.

**Measure:** accepted draft tokens/step; tokens/s; p95 latency; quality equivalence; extra VRAM.

**Constraints:** Lossless claims need the exact sampling and verification procedure. Low-concurrency gains may not persist at saturation.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX010](https://arxiv.org/abs/2602.06036)

### EAGLE-3

**paper · established · P3** · ID: eagle-3

Speculative-decoding method using direct draft-token prediction and fused target-model features.

**Stack layers:** Optional AI & developer tools.

**Current signal:** NeurIPS 2025 baseline remains relevant to 2026 serving comparisons.

**Test:** Use as a speculative-decoding baseline against DFlash with matched target, sampling, and concurrency.

**Measure:** accepted tokens/step; tokens/s; p95 latency; quality equivalence; memory.

**Constraints:** Draft training data and checkpoint compatibility affect performance. Source maxima should not be imported as Atlas results.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX038](https://www.microsoft.com/en-us/research/publication/eagle-3-scaling-up-inference-acceleration-of-large-language-models-via-training-time-test/)

### FlashAttention-4

**paper · experimental · P3** · ID: flashattention-4

Attention algorithm and kernel pipeline designed around Blackwell hardware bottlenecks, implemented using CuTe DSL.

**Stack layers:** Optional AI & developer tools.

**Current signal:** 2026 paper; authors target asymmetric scaling on Blackwell.

**Test:** Reproduce a bounded subset of forward/backward shape sweeps against pinned attention baselines on supported hardware.

**Measure:** kernel latency; TFLOP/s; numerical error; compile time; end-to-end training time.

**Constraints:** Paper-reported maxima are not universal gains. Requires appropriate hardware and shape coverage.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX008](https://arxiv.org/abs/2603.05451)

### Liger Kernel

**repository · established · P3** · ID: liger-kernel

Triton kernels for transformer training and post-training loss operations.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Replace one training operation at a time and verify gradients before measuring a complete training step.

**Measure:** step time; peak VRAM; gradient error; loss trajectory; end-to-end throughput.

**Constraints:** Kernel speedups can vanish when another operation dominates. Check numerical and convergence equivalence.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX039](https://linkedin.github.io/Liger-Kernel/)

### NVIDIA Dynamo

**framework · emerging · P3** · ID: nvidia-dynamo

Distributed inference runtime coordinating routing, prefill/decode workers, cache reuse, and cluster scaling.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** After single-node baselines, test bursty shared-service traffic and worker failures under an explicit latency SLO.

**Measure:** SLO attainment; GPU utilization; cost per successful request; failure recovery; cache reuse.

**Constraints:** Cluster results require topology and network details. Sidecar and integrated backends have different feature coverage.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX037](https://github.com/ai-dynamo/dynamo/blob/main/docs/fern/pages/developer-guide/knowledge-base/overview.md)

### TorchTPU serving backends

**framework · emerging · P3** · ID: torchtpu-serving

Native PyTorch TPU stack supporting new vLLM and SGLang serving backends.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Google announced native PyTorch TPU serving backends on October 20, 2026.

**Test:** Assess a remote inference tier for the same local-app requests, including network latency and total service cost.

**Measure:** end-to-end p95 latency; cost per successful request; throughput under SLO; cold start.

**Constraints:** Separate hardware economics from engine quality. Cloud access and quota are prerequisites; no paid tests run here.

**Priority rationale:** Watch-stage proposal: Establish a quality-controlled device and serving baseline before adding kernel, cache or distributed complexity.

**Sources:** [RX009](https://developers.googleblog.com/announcing-new-vllm-and-sglang-inference-engines-on-tpu/)

### verl

**framework · emerging · P3** · ID: verl

Distributed reinforcement-learning post-training framework integrating training and generation engines.

**Stack layers:** Optional AI & developer tools.

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

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Implement a resumable code-maintenance workflow and inject interruptions at model and tool boundaries.

**Measure:** task completion; resume correctness; duplicate side effects; latency; implementation effort.

**Constraints:** A framework does not determine the base model capability. Persistence configuration and side-effect semantics matter.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX012](https://github.com/langchain-ai/langgraph/blob/main/README.md)

### Pydantic AI

**framework · established · P1** · ID: pydantic-ai

Agent framework with typed integrations and durable execution backends for recoverable model and tool workflows.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Build a typed maintenance agent and verify recovery after process termination using one selected durable backend.

**Measure:** schema errors; resume correctness; duplicate effects; latency; task completion.

**Constraints:** Check exactly which operations the chosen backend journals. Snapshot persistence and durable execution are different capabilities.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX016](https://pydantic.dev/docs/ai/capabilities/durable_execution/overview/)

### CrewAI

**framework · established · P2** · ID: crewai

Agent framework combining role-based collaboration with explicit event-driven workflows.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare a single agent, a deterministic workflow, and a small crew on identical bounded research tasks.

**Measure:** evidence accuracy; completion rate; cost; wall time; coordination failures.

**Constraints:** More agents can add cost without increasing quality. Pin delegation policy and per-agent budgets.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX015](https://github.com/crewAIInc/crewAI/blob/main/README.md)

### DSPy

**framework · established · P2** · ID: dspy

Framework for composing and optimizing language-model programs with structured signatures and reusable modules.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Optimize a repository triage workflow on training tasks, then evaluate unseen repositories with a fixed budget.

**Measure:** held-out accuracy; optimization cost; inference cost; schema validity; run variance.

**Constraints:** Keep optimization data out of the final test set. Compare against a simple fixed-prompt baseline.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX011](https://dspy.ai/current/)

### OpenHands Software Agent SDK

**framework · established · P2** · ID: openhands-sdk

SDK for coding agents with local or ephemeral workspaces and Python, TypeScript, and REST interfaces.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Run isolated maintenance and refactoring tasks against pinned desktop-tool repositories with pristine final regrading.

**Measure:** resolved tasks; regressions; cost per accepted patch; wall time; review burden.

**Constraints:** Evaluate model plus harness plus tools, not the SDK name alone. Workspace and evaluator must have independent boundaries.

**Priority rationale:** Compare orchestration overhead, interruption and recovery against one simple agent using the same model and tools.

**Sources:** [RX013](https://github.com/OpenHands/software-agent-sdk)

### smolagents

**framework · emerging · P2** · ID: smolagents

Small agent library supporting executable code actions and conventional structured tool calls.

**Stack layers:** Optional AI & developer tools.

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

**Stack layers:** Optional AI & developer tools.

**Current signal:** Official leaderboard snapshot was updated October 22, 2026.

**Test:** Use a small representative subset to assess whole-program design, keeping exact task and harness snapshots.

**Measure:** fully resolved programs; behavioral test pass rate; API cost per task; wall time.

**Constraints:** Passing available tests does not establish complete behavioral equivalence. Partial test success is diagnostic, not a fully resolved program.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX042](https://programbench.com/)

### Resource-calibrated agent evaluations

**method · emerging · P1** · ID: agent-eval-resource-calibration

Evaluation method treating sandbox resource allocation, hard limits, timeouts, and infrastructure failures as explicit experimental variables.

**Stack layers:** Optional AI & developer tools.

**Current signal:** 2026 primary study motivates explicit allocation and enforcement metadata for agent rankings.

**Test:** Calibrate resource floors and ceilings, then repeat candidate comparisons on the same fixed task set across several runs.

**Measure:** task success; infrastructure failures; resource peak; confidence interval; runtime variance.

**Constraints:** A single resource multiplier is not valid for every benchmark. Model, task, and infrastructure failures need distinct accounting.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX041](https://www.anthropic.com/research/infrastructure-noise)

### SWE-Bench Pro V2

**benchmark · emerging · P1** · ID: swe-bench-pro-v2

Repository-task evaluation with refreshed tasks, restricted agent networking, and independent patch regrading.

**Stack layers:** Optional AI & developer tools.

**Current signal:** V2 changes tasks and evaluation protocol; preserve its version with every external observation.

**Test:** Adopt its pristine-image regrading and reference/empty-patch checks for Atlas coding evaluations.

**Measure:** resolve rate; regressions; verifier disagreements; cost.

**Constraints:** Public and private sets remain different cohorts. Network locking cannot remove training-time exposure.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### SWE-bench-Live

**benchmark · emerging · P1** · ID: swe-bench-live

Continuously maintained repository-task benchmark with language and Windows-specific evaluation tracks.

**Stack layers:** Optional AI & developer tools.

**Current signal:** 2026 updates add language/OS tracks and require trajectories for verified submissions.

**Test:** Prioritize the Windows and relevant language tracks for desktop tools, with frozen task snapshots and complete trajectories.

**Measure:** resolved rate; valid task count; environment failures; cost.

**Constraints:** Do not mix Python-only frozen splits with language-specific tracks. Dataset freshness alone does not prove absence of training exposure.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX019](https://swe-bench-live.github.io/)

### Terminal-Bench 4.0

**benchmark · emerging · P1** · ID: terminal-bench-4

Versioned terminal-agent tasks with calibrated resources and revised task environments and verifiers.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Current official family page identifies 4.0; opened release notes explain resource and task changes.

**Test:** Use a bounded task subset after resource calibration; store exact dataset version and sandbox limits.

**Measure:** resolution rate; infrastructure error rate; wall time; cost; confidence interval.

**Constraints:** 4.0 task/environment changes require rerunning rather than mixing older scores. Some tasks need GPU-enabled sandboxes.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX021](https://www.tbench.ai/news/terminal-bench-4-0)

### Berkeley Function Calling Leaderboard V4

**benchmark · established · P2** · ID: bfcl-v4

Tool-use benchmark covering function calls, multi-turn interaction, and agentic evaluation.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Select relevant tool schemas and preserve native-function versus prompted-tool-call configurations.

**Measure:** tool-call accuracy; category accuracy; latency; benchmark cost.

**Constraints:** Overall accuracy is an unweighted category average. Source page identifies a fixed code checkpoint; do not silently substitute main.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX023](https://gorilla.cs.berkeley.edu/leaderboard)

### CodeClash

**benchmark · experimental · P2** · ID: codeclash

Goal-oriented software-engineering benchmark where agents evolve codebases across repeated competitive game arenas.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Relevant game-oriented baseline; official displayed leaderboard date is November 3, 2025.

**Test:** Evaluate a game-agent task across repeated edit-and-compete rounds, preserving opponents, seeds, and arena versions.

**Measure:** win rate; rating interval; improvement across rounds; cost; code regression rate.

**Constraints:** Ratings depend on the opponent pool and arena. Its opened leaderboard was last updated in 2025, so it is a baseline rather than a fresh 2026 ranking.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX043](https://codeclash.ai/)

### Harbor

**framework · emerging · P2** · ID: harbor

Framework for sandboxed agent evaluations, reusable environments, and optimization rollouts.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Implement the first Atlas task suite with immutable environments and an independently executed verifier.

**Measure:** replay success; environment startup time; infrastructure failures; trace completeness.

**Constraints:** Provider-specific container limits affect comparability. Report setup failures separately from task failures.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX025](https://github.com/harbor-framework/harbor)

### Inspect AI

**framework · established · P2** · ID: inspect-ai

Evaluation framework with datasets, agents, tools, scorers, sandboxing, and inspectable execution logs.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Build a small coding and document-grounding suite with inspectable scorer decisions and replayable logs.

**Measure:** scorer agreement; replay consistency; trace completeness; evaluation cost.

**Constraints:** Judge-based metrics need calibration against human or deterministic checks. Do not let task code alter evaluation artifacts.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX026](https://inspect.aisi.org.uk/)

### LM Evaluation Harness

**framework · established · P2** · ID: lm-evaluation-harness

Reusable model-evaluation harness with versioned benchmark configurations and multiple model backends.

**Stack layers:** Optional AI & developer tools.

**Current signal:** v0.4.13 notes fixes for few-shot leakage, answer filtering, and grouped uncertainty estimates.

**Test:** Pin a corrected release and use a small capability-regression suite when changing inference kernels or quantization.

**Measure:** task accuracy; standard error; runtime; regression delta.

**Constraints:** Release fixes can change historical scores. Pin few-shot sampler, task configuration, and chat template.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX027](https://github.com/EleutherAI/lm-evaluation-harness/releases)

### LiveCodeBench

**benchmark · established · P2** · ID: livecodebench

Versioned coding benchmark supporting generation, execution, and test-output prediction scenarios.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Evaluate coding models on an explicit release and date window, using pinned sampling settings and a sandboxed checker.

**Measure:** pass@1; pass@5; execution failures; cost.

**Constraints:** Never store release_latest as a reproducible dataset identifier. Contest-style success does not establish repository-maintenance skill.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX024](https://github.com/LiveCodeBench/LiveCodeBench)

### Ragas

**framework · established · P2** · ID: ragas

Evaluation toolkit with metrics for retrieval, grounding, answers, and tool-use workflows.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Calibrate faithfulness and retrieval metrics on manually adjudicated project-document questions.

**Measure:** human agreement; false acceptance; faithfulness; context precision; judge cost.

**Constraints:** LLM-based scores inherit judge bias and variability. Store judge model, prompt, and rubric versions.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX031](https://docs.ragas.io/en/latest/concepts/metrics/available_metrics/)

### SWE-Skills-Bench: Do Agent Skills Actually Help in Real-World Software Engineering?

**paper · experimental · P2** · ID: swe-skills-bench-paper

A paired benchmark isolates the utility of individual agent skills using pinned repositories, explicit requirements, and executable verifiers.

**Stack layers:** Optional AI & developer tools.

**Current signal:** v2 published 2026-10-27; use the revised 98-skill protocol and current ControllableModel artifact.

**Test:** Run the same pinned agent/model/task twice, with and without one skill, using clean equivalent environments and fixed budgets; audit requirement verifiers and repeat paired runs before estimating benefit.

**Measure:** paired requirement pass-rate delta; confidence interval across repeated runs; token and monetary cost; wall time; instruction-conflict regressions; verifier false-positive rate.

**Constraints:** Skill utility is configuration-dependent; do not transfer a score across models, harnesses, versions, or tasks. Requirements and verifiers are generated within the benchmark construction process and need independent quality review. Public source and environment setup are available; inference endpoints and execution budgets must be pinned.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX146](https://arxiv.org/html/2603.15401v2) · [RX147](https://github.com/ControllableModel/SWE-Skills-Bench)

### SWE-bench Verified

**benchmark · established · P2** · ID: swe-bench-verified

Human-filtered software-issue benchmark with a standard bash-only leaderboard cohort.

**Stack layers:** Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Use as a historical baseline alongside newer private tasks, preserving harness and dataset versions.

**Measure:** resolved rate; regressions; cost per task; trajectory completeness.

**Constraints:** Public task exposure can contaminate evaluation. Different agent harnesses are separate configurations.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX018](https://www.swebench.com/)

### TEBench: Breaking, Stale, or Missing? Project-Level Test Evolution

**paper · experimental · P2** · ID: tebench-paper

A repository-level benchmark asks coding agents to find and update failing, stale, and missing tests after production-code changes.

**Stack layers:** Optional AI & developer tools.

**Current signal:** 2026-05-07 preprint with public dataset and evaluation pipeline; explicitly includes tests that pass while becoming stale.

**Test:** Give agents only the allowed repository revision and production change; compare their identification and test patches against retained developer changes and independent mutation checks, stratified by breaking, stale, and missing behavior.

**Measure:** identification precision/recall/F1 by evolution type; patch execution rate; changed-behavior branch coverage; held-out mutation score; false assertion count; tokens and wall time.

**Constraints:** Current corpus emphasizes Java/Maven projects and historically selected commits; it does not establish cross-language performance. A patch that compiles or resembles the developer patch can still miss the changed behavior. Preserve ground-truth isolation and count all failed or timed-out tasks.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX148](https://arxiv.org/html/2605.06125v1) · [RX149](https://github.com/iSEngLab/TEBench)

### TestSuiteBench: Coding Agents Struggle to Generate Strong Test Suites from Specifications

**paper · experimental · P2** · ID: testsuitebench-paper

Specification-driven test generation is evaluated against reference executables and targeted behavior mutants from real command-line applications.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Original preprint published 2026-10-09; code, specifications and dataset pointers checked.

**Test:** Compare agents generating tests from the same held-out specifications under equal budgets; run tests on both correct executables and behavior mutants, keeping test validity separate from mutation detection.

**Measure:** mutation kill rate; valid test rate; requirements covered; false failures on reference executables; cost per detected mutant; wall time; repeated-run variance.

**Constraints:** Generated mutants sample specific requirements and need not match the distribution of real faults. Specifications and ground truth inherit reference-implementation assumptions; audit ambiguous or incidental behavior. Artifact targets compiled CLI applications on Linux amd64 with Docker; full optional dataset download is substantial.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX150](https://arxiv.org/html/2610.13065v1) · [RX151](https://github.com/eth-sri/testsuitebench)

### τ-bench 2.0

**benchmark · emerging · P2** · ID: tau-bench-2

Tool-agent-user benchmark with versioned text and voice task frames across six languages.

**Stack layers:** Optional AI & developer tools.

**Current signal:** October 19 release changes communication checks, judging, prompts, and benchmark manifests.

**Test:** Evaluate structured interactive task completion on one pinned text domain before extending to other languages.

**Measure:** task success; consistency across trials; tool errors; cost; latency.

**Constraints:** 2.0 scores are explicitly incomparable with 1.x. Keep user simulator and judge versions fixed.

**Priority rationale:** Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX022](https://github.com/sierra-research/tau2-bench/releases)

### GEPA reflective prompt optimization

**paper · emerging · P3** · ID: gepa

Prompt optimizer that reflects on execution traces and evolves candidates along a Pareto frontier.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Published in the ICLR 2026 proceedings.

**Test:** Optimize tool-use prompts on a training split and measure transfer across held-out repositories and several seeds.

**Measure:** held-out success; optimization calls; inference cost; seed variance.

**Constraints:** Reported comparisons are task-specific. Use topic-disjoint evaluation and inspect evolved prompts for answer leakage.

**Priority rationale:** Watch-stage proposal: Resolve benchmark validity and protocol differences before using any coding-agent leaderboard to choose a stack.

**Sources:** [RX017](https://proceedings.iclr.cc/paper_files/paper/2026/hash/0e9e708b6f48e14fd0ac29e167413f76-Abstract-Conference.html)

## Retrieval & search (9)

### ColBERTv2

**repository · established · P2** · ID: colbert

Late-interaction retriever that compares token-level query and passage embeddings.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare retrieval quality and storage with BM25 and single-vector search on the same held-out queries.

**Measure:** nDCG@10; recall@k; query latency; index bytes; build time.

**Constraints:** Embedding checkpoint and indexing parameters must be pinned. A retrieval metric is not end-to-end answer quality.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX030](https://github.com/stanford-futuredata/ColBERT/blob/main/README.md)

### FlashRAG

**framework · established · P2** · ID: flashrag

Research toolkit providing reusable retrieval, reranking, generation, compression, and evaluation components.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Build a common baseline harness for retrieval strategies before testing each on Atlas-specific documents.

**Measure:** answer correctness; retrieval recall; latency; token cost; reproducibility.

**Constraints:** Keep corpus, generator, and evaluation split fixed. Published benchmark results may not transfer to project-specific documents.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX032](https://github.com/RUC-NLPIR/FlashRAG/blob/main/README.md)

### LanceDB

**repository · emerging · P2** · ID: lancedb

Local and service retrieval candidate combining vector indexing with the Lance data ecosystem.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** September ecosystem update reports Lance SDK 12.0.0 with file format 2.2; these are not LanceDB version numbers.

**Test:** Evaluate fixed embedding corpora with lexical and exact-search controls, retaining complete metadata. Test append/update/delete visibility before and after index optimization, unindexed-tail queries, cold reads and recovery; keep native FTS configuration distinct from legacy Tantivy integration.

**Measure:** recall@k; full metadata and ID parity; p95/p99 latency; commit-to-visible latency; index size; build/update/optimize time; unindexed-tail query cost.

**Constraints:** Lance SDK, file format, and LanceDB versions are different. Treat newsletter throughput claims as vendor reports until reproduced. Native FTS scans unindexed fragments to retain results before optimize; excluding that tail changes correctness. Native FTS and legacy Tantivy integration expose different contracts and must not share unlabeled settings. Require a labeled semantic-retrieval need before accepting embedding, index and model-maintenance cost.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX099](https://www.lancedb.com/blog/newsletter-september-2026) · [ST128](https://docs.lancedb.com/search/full-text-search)

### LightRAG

**framework · emerging · P2** · ID: lightrag

Retrieval framework combining graph-oriented knowledge access with configurable document processing and retrieval components.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** 2026 project updates document selectable chunking and role-specific model configurations.

**Test:** Evaluate project-document search with incremental updates, fixed embeddings, and identical answer generation.

**Measure:** retrieval recall; answer correctness; citation precision; index/update time; query cost.

**Constraints:** Chunking and reranking can dominate outcome. Record document-processing configurations.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX029](https://github.com/HKUDS/LightRAG)

### Microsoft GraphRAG

**framework · established · P2** · ID: graphrag

Graph-based retrieval pipeline using entities, relationships, communities, and summaries for corpus questions.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** See the dated primary sources.

**Test:** Compare global and entity-focused questions against BM25 and dense retrieval over the same project-document corpus.

**Measure:** answer correctness; citation precision; indexing cost; query latency; refresh cost.

**Constraints:** Graph extraction can be expensive and error-prone. Include simple retrieval baselines and corpus-update workloads.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX028](https://microsoft.github.io/graphrag/)

### Milvus

**repository · established · P2** · ID: milvus

Vector retrieval service candidate for larger corpora and multi-stage search pipelines.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** Milvus 3.0.3 release notes dated 2026-10-14 document Function Chain support for hybrid search.

**Test:** Evaluate dense and hybrid pipelines under fixed recall targets, update rates, and resource ceilings.

**Measure:** recall@k; p95/p99 latency; CPU/RAM usage; ingest throughput.

**Constraints:** Separate standalone and distributed deployments. Server-side reranking must use the same models as competitors.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX102](https://milvus.io/docs/release_notes.md)

### Qdrant

**repository · established · P2** · ID: qdrant

Vector and hybrid retrieval engine candidate for searchable code, asset, and research catalogs.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** Qdrant 1.20 release announced on 2026-10-22 adds BM25 on text indexes and a code tokenizer.

**Test:** Compare dense, BM25, and hybrid retrieval on labeled code and document queries, including tenant filters.

**Measure:** nDCG@10; recall@k; p95/p99 latency; index memory.

**Constraints:** Use the same embedding models and labeled queries. Quantization tradeoffs require measured recall, not vendor accuracy language.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX101](https://qdrant.tech/blog/qdrant-1.20.x/)

### Tantivy

**repository · established · P2** · ID: tantivy

Embedded Rust lexical search library for evaluating tokenized catalog search against an authoritative SQLite and FTS5 control.

**Stack layers:** Local storage & search.

**Current signal:** The opened release page marks 0.26.1 as latest; its displayed May 10 date lacks a year, so no exact publication date is asserted.

**Test:** Compare SQLite FTS5 and Tantivy on the same complete public catalog, labels and query set, with exact identifier lookup retained. Test tokenization, filters, updates, deletions, crash/rebuild recovery and commit-to-visible latency while resolving every hit to complete metadata.

**Measure:** retrieval quality on labeled queries; exact identifier correctness; p95/p99 query latency; commit-to-visible latency; index size; rebuild time; metadata parity.

**Constraints:** Tantivy is a search library, not an authoritative transactional catalog or an off-the-shelf server. Document replacement uses delete/reindex; commit, reader reload and a new searcher determine visibility. Different tokenizers and ranking semantics require relevance judgments; do not mistake unlike result sets for a speed win.

**Priority rationale:** A separate search index is justified only if measured relevance or latency improves without losing complete catalog data.

**Sources:** [ST115](https://github.com/quickwit-oss/tantivy) · [ST116](https://github.com/quickwit-oss/tantivy/releases) · [ST117](https://www.sqlite.org/fts5.html)

### pgvector

**repository · established · P2** · ID: pgvector

PostgreSQL vector-search extension for comparing integrated relational retrieval with dedicated engines.

**Stack layers:** Local storage & search; Optional AI & developer tools.

**Current signal:** Current README documents exact and approximate search plus dense, half-precision, binary, and sparse vectors.

**Test:** Compare exact, HNSW, and IVFFlat searches on identical embeddings with selective relational filters.

**Measure:** recall@k; p95/p99 latency; index size; transaction overhead.

**Constraints:** Approximate recall and filter selectivity must be reported. Include database memory and maintenance cost.

**Priority rationale:** Start with a small labeled corpus and simple retrieval controls; only pursue complexity if quality improves within budget.

**Sources:** [RX100](https://github.com/pgvector/pgvector)

## Languages & runtimes (17)

### Bun

**platform · emerging · P1** · ID: bun

Integrated JavaScript runtime and development toolchain combining execution, packages, tests, builds, and formatting.

**Stack layers:** Languages & runtimes.

**Current signal:** Bun v1.4.4 introduces the built-in bun fmt formatter.

**Test:** Compare application behavior and complete toolchain cycles against Node-based baselines with equivalent checks enabled.

**Measure:** compatibility pass rate; install seconds cold and warm; test seconds; peak RSS MiB; formatter agreement rate.

**Constraints:** Keep formatter and runtime rankings separate. Vendor benchmark numbers remain external claims.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX057](https://bun.sh/blog/bun-v1.4.4)

### Deno

**platform · established · P1** · ID: deno

JavaScript and TypeScript runtime with integrated tools and an experimental desktop application workflow.

**Stack layers:** Languages & runtimes.

**Current signal:** Deno 2.9 introduces experimental deno desktop and expanded lockfile migration support.

**Test:** Compare server and CLI compatibility, then evaluate desktop packaging in a separately labeled experimental track.

**Measure:** compatibility pass rate; startup milliseconds; install seconds; artifact MiB; platform test pass rate.

**Constraints:** Desktop functionality is experimental in the cited release. Permission configuration and Node compatibility must be recorded.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX058](https://deno.com/blog/v2.9)

### Go

**language · established · P1** · ID: go

Compiled language and standard library for network services, command-line utilities, and concurrent workloads.

**Stack layers:** Languages & runtimes.

**Current signal:** Release history lists Go 1.27.3 on 2026-10-19.

**Test:** Run a fixed JSON API with database access, cancellation, and graceful shutdown under identical load profiles.

**Measure:** requests per second at SLO; p95 latency milliseconds; p99 latency milliseconds; heap MiB; GC pause milliseconds.

**Constraints:** Fix connection pools and CPU budgets. Do not compare a bare router against a fully validated application.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX045](https://go.dev/doc/devel/release)

### Luau

**language · established · P1** · ID: luau

Embeddable Lua-derived language and runtime offering gradual typing, sandbox-oriented libraries, and host-controlled execution for application scripting.

**Stack layers:** Mod loaders & compatibility; Plugins & process isolation.

**Current signal:** Current sandbox documentation explicitly covers VM separation, untrusted-bytecode constraints, memory configuration, and interrupt-based runaway-script handling.

**Test:** Expose a small capability API to the same deterministic plugin workload as a Wasm implementation; use separate trusted/untrusted VMs, host memory budgets, cancellation, and denied filesystem/network cases.

**Measure:** script compile and start milliseconds; host call microseconds; peak RSS MiB; throughput; interrupt latency milliseconds; capability and isolation pass rate.

**Constraints:** MIT; an embeddable language is not by itself a complete host permission policy. The sandbox assumes compiler-produced bytecode; never accept arbitrary untrusted bytecode as validated source. Separate VMs are recommended across trust levels; exposed host APIs and mutable environments need explicit controls. Memory is unlimited by default; VM interrupts do not make expensive or blocking host APIs safe. Use a separate isolation-qualified cohort; native unsandboxed script execution is only a performance control.

**Priority rationale:** Useful bounded scripting candidate where the host controls APIs and authoring ergonomics matter.

**Sources:** [ST054](https://github.com/luau-lang/luau) · [ST055](https://luau.org/sandbox/)

### Node.js

**platform · established · P1** · ID: nodejs

JavaScript runtime and compatibility baseline for server applications, build tools, and package ecosystems.

**Stack layers:** Languages & runtimes; APIs & shared services.

**Current signal:** Release index lists 26.12.1 Current and 24.22.1 LTS on 2026-10-21.

**Test:** Run the same HTTP, streams, filesystem, package, and test workloads across pinned Node, Bun, and Deno builds.

**Measure:** compatibility pass rate; startup milliseconds; p99 latency milliseconds; peak RSS MiB; wall time seconds.

**Constraints:** Current and LTS are distinct cohorts. Use identical dependency graphs and application semantics.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX056](https://nodejs.org/en/blog)

### Python / CPython

**language · established · P1** · ID: python

General-purpose language and runtime for automation, data workflows, services, and extension-based acceleration.

**Stack layers:** Languages & runtimes.

**Current signal:** Python 3.15.0 launched 2026-10-09; its page now points to a newer patch release.

**Test:** Compare pinned standard, free-threaded, and experimental JIT builds on startup, CPU, and extension-heavy application workloads.

**Measure:** startup milliseconds; wall time seconds; threads scaling ratio; peak RSS MiB; extension compatibility pass rate.

**Constraints:** Do not mix interpreter build modes in one ranking. Verify extension wheels and numerical correctness; JIT remains a separate experimental lane.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX048](https://www.python.org/downloads/release/python-3150/)

### Rust

**language · established · P1** · ID: rust

Systems language for native tools and services, with ownership-based memory management and a mature compiler ecosystem.

**Stack layers:** Languages & runtimes.

**Current signal:** Release notes list Rust 1.99.1 on 2026-10-15 and 1.99.0 on 2026-10-01.

**Test:** Implement the same archive-indexing CLI with identical formats and error behavior; compare stable compiler profiles.

**Measure:** cold build seconds; incremental build seconds; wall time milliseconds; peak RSS MiB; correctness pass rate.

**Constraints:** Compiler flags, allocator, target CPU, and dependency versions must be pinned. Language comparisons are workload-specific; safety and maintenance are separate dimensions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX044](https://doc.rust-lang.org/releases.html)

### TypeScript 7 native compiler

**language · established · P1** · ID: typescript-native

Native TypeScript compiler and language-server candidate for reducing feedback time in large JavaScript and TypeScript projects.

**Stack layers:** Languages & runtimes; Shared core & native boundaries; Builds & reproducibility.

**Current signal:** TypeScript 7.0 was announced 2026-07-08 as the native compiler release.

**Test:** Compare pinned TypeScript 6 and 7 on identical monorepo commits, complete builds, incremental edits, and diagnostic agreement.

**Measure:** full check seconds; incremental check milliseconds; peak RSS MiB; diagnostic agreement rate; tooling compatibility pass rate.

**Constraints:** Compiler API compatibility needs explicit testing. Vendor benchmarks are leads, not independent Atlas measurements.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX050](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)

### .NET / C# stack

**platform · established · P2** · ID: dotnet

Managed runtime and application ecosystem spanning services, desktop tools, native compilation, and game tooling.

**Stack layers:** Languages & runtimes; Shared core & native boundaries; Desktop shells & native UI; Mod loaders & compatibility.

**Current signal:** Microsoft released .NET 10.0.14 and .NET 11 RC3 on 2026-10-25; RC3 remains prerelease.

**Test:** Run the same managed application core on patched stable JIT and Native AOT only where its dependencies and plugin model are supported; keep .NET 11 previews separate and include reflection, serialization, native interop, and plugin scenarios.

**Measure:** startup milliseconds; steady throughput; peak RSS MiB; binary MiB; reflection and trimming compatibility pass rate; plugin lifecycle pass rate; native interop pass rate.

**Constraints:** Do not label .NET 11 RC as generally available. Native AOT does not support arbitrary runtime assembly loading or runtime code generation; a dynamic managed-plugin requirement can disqualify it. Native AOT requires trimming and does not support C++/CLI; the documented Windows restriction concerns built-in COM, not every possible COM approach. Do not generalize an AOT-friendly CLI result to an unsupported desktop framework. Pin architecture, runtime mode, native libraries, and all reflection-heavy dependencies.

**Priority rationale:** Select runtime mode from actual UI, interop, and plugin compatibility requirements; startup gains cannot override missing functionality.

**Sources:** [RX085](https://devblogs.microsoft.com/dotnet/dotnet-october-2026-oob-security-updates/) · [ST073](https://learn.microsoft.com/en-us/dotnet/core/deploying/native-aot/)

### Elixir

**language · established · P2** · ID: elixir

BEAM language for concurrent services, with evolving gradual type analysis and established fault-tolerant process patterns.

**Stack layers:** Languages & runtimes.

**Current signal:** Elixir 1.20 announcement describes type inference across language constructs without requiring type annotations.

**Test:** Exercise a supervised service with injected worker failures, a fixed messaging workload, and a labeled defect corpus.

**Measure:** recovery milliseconds; message throughput; p99 latency milliseconds; diagnostic precision; diagnostic recall.

**Constraints:** Type-checker claims need an independently labeled corpus. Pin Erlang/OTP and scheduler configuration.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX055](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)

### Gleam

**language · emerging · P2** · ID: gleam

Typed functional language targeting the Erlang VM and JavaScript, with integrated build tooling.

**Stack layers:** Languages & runtimes.

**Current signal:** Gleam 1.19.0 changes Erlang-target output to Erlang abstract forms.

**Test:** Compare complete and incremental builds for realistic applications plus a disclosed synthetic compile workload.

**Measure:** clean build seconds; incremental build milliseconds; test cycle seconds; stacktrace source accuracy.

**Constraints:** Synthetic compile-only tests do not establish general language superiority. Fix Erlang/OTP and JavaScript target versions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX052](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/)

### Java / JDK

**language · established · P2** · ID: java-jdk

JVM language and runtime ecosystem for services, tools, and long-lived applications.

**Stack layers:** Languages & runtimes; Mod loaders & compatibility.

**Current signal:** Oracle's current release notes include JDK 27 and October 2026 updates.

**Test:** Compare supported JDK baselines and JDK 27 on the same service after correctness checks and a declared warmup.

**Measure:** cold startup milliseconds; steady-state throughput; p99 latency milliseconds; heap MiB; GC pause milliseconds.

**Constraints:** Pin vendor build and garbage collector. Preview language features and incubator APIs require separate labeling.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX054](https://www.oracle.com/java/technologies/javase/27all-relnotes.html)

### Kotlin

**language · established · P2** · ID: kotlin

Typed language with JVM and multiplatform toolchains for shared application logic and native targets.

**Stack layers:** Languages & runtimes; Shared core & native boundaries.

**Current signal:** The official release history lists Kotlin 2.4.21 on 2026-10-08.

**Test:** Implement shared serialization and domain logic for JVM and native targets; validate common tests on each.

**Measure:** clean build seconds; incremental build seconds; startup milliseconds; artifact MiB; shared test pass rate.

**Constraints:** JVM and native runtimes require separate performance cohorts. Record Gradle, JDK, Compose, and platform SDK versions.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX049](https://kotlinlang.org/docs/releases.html)

### Swift

**language · established · P2** · ID: swift

Language for applications and systems work, with native interoperability and expanding cross-platform tooling.

**Stack layers:** Languages & runtimes.

**Current signal:** Swift 6.4 announcement describes Swift Build becoming the default in Swift Package Manager.

**Test:** Compile a shared library and CLI on macOS, Linux, and Windows; exercise asynchronous cancellation and C interoperability.

**Measure:** build seconds; startup milliseconds; binary MiB; platform pass rate; interop defect count.

**Constraints:** SDK availability and platform libraries must be recorded. Embedded, mobile, and server results need separate cohorts.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX047](https://www.swift.org/blog/swift-6.4-released/)

### Zig

**language · emerging · P2** · ID: zig

Systems language and toolchain candidate for portable native utilities, explicit allocation, and integration with C.

**Stack layers:** Languages & runtimes.

**Current signal:** Official 0.17.0 announcement is dated 2026-10-02; do not infer the binary publication timestamp.

**Test:** Build a portable file-indexing CLI and a small C-library wrapper across Linux and Windows.

**Measure:** compile seconds; binary MiB; peak RSS MiB; cross-platform test pass rate; migration edits.

**Constraints:** Pre-1.0 language and library changes can dominate upgrade cost. Record the exact Zig archive and target triple.

**Priority rationale:** Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX046](https://ziglang.org/news/0.17.0-released/)

### Mojo

**language · emerging · P3** · ID: mojo

Systems language targeting CPU and accelerator kernels, with compile-time specialization and Python interoperability.

**Stack layers:** Languages & runtimes.

**Current signal:** Mojo v1.2.0 announcement adds pattern matching and additional GPU math implementations.

**Test:** Implement reduction and image-processing kernels with matched precision and validate against a CPU reference before timing.

**Measure:** kernel milliseconds; end-to-end milliseconds; compile seconds; absolute numeric error; supported hardware count.

**Constraints:** Device transfers and compilation must be reported separately. Do not equate a kernel microbenchmark with application speed.

**Priority rationale:** Watch-stage proposal: Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX051](https://mojolang.static.modular.com/releases/v1.2.0/)

### Roc

**language · experimental · P3** · ID: roc

Experimental functional language exploring a compact language model and native or WebAssembly compilation.

**Stack layers:** Languages & runtimes.

**Current signal:** Upstream README still says Roc is not ready for a 0.1 release.

**Test:** Port a small deterministic CLI and track unsupported features, build reliability, and migration work.

**Measure:** functional test pass rate; compile seconds; runtime milliseconds; blocking issue count.

**Constraints:** Treat as a research candidate, not a production baseline. Pin compiler commit because language and tooling are evolving.

**Priority rationale:** Watch-stage proposal: Pin a representative workload and compatibility contract before considering a compiler or runtime migration.

**Sources:** [RX053](https://github.com/roc-lang/roc)

## Compilers & build tools (12)

### CXX Rust–C++ bridge

**tool · established · P1** · ID: cxx

Generates checked Rust–C++ interfaces for reusing native libraries while expressing shared ownership and data boundaries explicitly.

**Stack layers:** Shared core & native boundaries; Mod loaders & compatibility.

**Current signal:** Current guide and repository describe checked bridge generation and clearly state that all C++ code still requires safety review.

**Test:** Wrap one existing public native asset/codec library through a narrow typed interface; compare scalar and batched calls against an equivalent audited C ABI with identical ownership and error behavior.

**Measure:** boundary call microseconds; batch throughput; bytes copied per operation; peak RSS MiB; ownership and failure-path pass rate; integration and build minutes.

**Constraints:** MIT OR Apache-2.0; current README requires Rust 1.88 or newer and C++11 or newer. C++ remains unsafe and needs audit; CXX is an interoperability aid, not a containment boundary for untrusted plugins. Compiler ABI, threading, callbacks, panic/exception translation, and native dependency deployment must be pinned. Prefer batched interfaces when they preserve semantics; compare copy and ownership costs explicitly.

**Priority rationale:** Provides a concrete migration path for trusted native functionality without forcing an engine or language rewrite.

**Sources:** [ST043](https://cxx.rs/) · [ST044](https://github.com/dtolnay/cxx)

### Nix

**tool · established · P1** · ID: nix

Declarative package and build environment manager for pinning toolchains and comparing independent, repeatable release builds.

**Stack layers:** Builds & reproducibility.

**Current signal:** Nix manual 2.35.4 observed on 2026-10-28; 2.35.0 release notes date the family release to 2026-06-22, while stable NixOS 26.05 still lists 2.34.

**Test:** Pin compiler, dependencies, environment inputs and build command for a public native/Wasm module. Rebuild without substituting the final artifact on two clean hosts, varying path, time and locale; compare raw hashes and use diffoscope to explain differences.

**Measure:** independent byte-identical build rate; clean build success; cold build time; cache-assisted build time; closure size; unexplained artifact differences.

**Constraints:** Nix core is LGPL-2.1; package licenses in Nixpkgs are separate. Linux/macOS/Unix hosting is distinct from native Windows toolchain validation. Manual 2.35.4 is the checked version; NixOS 26.05 channel lists 2.34. Do not silently change a stable environment to the newest family. Input pinning and a cache hit do not prove bit-reproducible outputs. Rebuild independently and preserve nondeterminism evidence. Platform codesigning timestamps and store notarization can intentionally change outer release artifacts; compare the appropriate pre-signing payload and record that scope.

**Priority rationale:** Conditional environment baseline for Linux/macOS build reproducibility; retain platform-native release jobs for unsupported targets and signing.

**Sources:** [ST156](https://nix.dev/manual/nix/2.35/) · [ST157](https://nix.dev/manual/nix/2.35/release-notes/rl-2.35) · [ST158](https://nix.dev/tutorials/first-steps/towards-reproducibility-pinning-nixpkgs) · [ST159](https://nix.dev/install-nix) · [ST160](https://github.com/NixOS/nix)

### Rolldown

**tool · emerging · P1** · ID: rolldown

Rust-based JavaScript bundler with a Rollup-compatible plugin interface and configurable chunking.

**Stack layers:** Builds & reproducibility.

**Current signal:** Rolldown 1.0 stable was announced 2026-05-07.

**Test:** Bundle a pinned fixture corpus across Rolldown, Rollup, and esbuild with matched output targets and plugins.

**Measure:** build seconds; peak RSS MiB; gzip bytes; sourcemap validity; runtime conformance pass rate.

**Constraints:** Chunking and dead-code decisions can change without API changes. Report unsupported plugins instead of silently dropping them.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX060](https://voidzero.dev/posts/announcing-rolldown-1-0)

### Vite

**tool · established · P1** · ID: vite

Frontend development server and build orchestrator with a unified Rolldown-based bundling pipeline.

**Stack layers:** Builds & reproducibility.

**Current signal:** Vite 8 replaces the earlier dual-bundler pipeline with Rolldown.

**Test:** Run identical small, medium, and monorepo applications through cold builds, hot updates, and production smoke tests.

**Measure:** cold build seconds; HMR p95 milliseconds; peak RSS MiB; compressed output bytes; plugin compatibility pass rate.

**Constraints:** Match browser targets, minification, source maps, and cache state. Faster builds must preserve runtime behavior.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX059](https://vite.dev/blog/announcing-vite8)

### WXT

**framework · emerging · P1** · ID: wxt

Browser-extension build framework with typed entrypoints and generated manifests across browser targets.

**Stack layers:** Browser extensions.

**Current signal:** WXT 0.21.5 was published October 26; the 0.21 migration requires Node.js 22+ and changes peer dependencies. Treat each 0.x minor transition as potentially breaking.

**Test:** Compare a pinned WXT build against the existing explicit manifest/build pipeline on the same extension package, permissions, assets, content scripts and update identity.

**Measure:** cold build and edit-to-ready time; installed package size; complete manifest/asset parity; same-identity update success; background/content-script reload failures.

**Constraints:** A dev-mode reload is not an installed-store update test. Generated permissions, CSP and browser-specific manifest conversions must be reviewed. Pin Node, Vite, TypeScript and browser versions; retain all runtime assets and warnings.

**Priority rationale:** Compare a pinned WXT build against the existing explicit manifest/build pipeline on the same extension package, permissions, assets, content scripts and update identity.

**Sources:** [ST001](https://github.com/wxt-dev/wxt/releases/tag/wxt-v0.21.5) · [ST002](https://wxt.dev/guide/resources/upgrading)

### libsolv

**tool · established · P1** · ID: libsolv

SAT-based native dependency solver with conflict explanations, useful as a baseline for resolving versioned mod and package constraints.

**Stack layers:** Dependencies & conflict solving.

**Current signal:** Official changelog records 0.7.41 on 2026-10-23, including metadata-parser hardening; checked 2026-10-28.

**Test:** Compare libsolv 0.7.41 with Resolvo on the same public synthetic mod manifests. Encode mandatory, optional, pinned, conflicting and game-version constraints identically. Check small cases against exhaustive enumeration, then scale satisfiable and unsatisfiable graphs separately.

**Measure:** solution validity; unsatisfiable-case correctness; solve p50/p95; peak memory; explanation usefulness; determinism.

**Constraints:** BSD-3-Clause; native C integration. Establish Windows/macOS target builds before promising support; no browser deployment is established here. Dependency satisfiability does not determine load order, overwritten assets or actual runtime compatibility; those need separate explicit policies. Benchmark identical preference policies and metadata-loading costs; a different valid solution is not automatically an error. Use a patched pinned release and bounded metadata parsing. Upstream speed statements are unverified on Atlas workloads.

**Priority rationale:** Conditional baseline for native dependency resolution: mature solver behavior and explainable failures provide the control for a Rust challenger.

**Sources:** [ST132](https://github.com/openSUSE/libsolv) · [ST133](https://github.com/openSUSE/libsolv/blob/master/package/libsolv.changes) · [ST134](https://github.com/openSUSE/libsolv/blob/master/LICENSE.BSD)

### uv

**tool · established · P1** · ID: uv

Python package and project manager providing lockfiles, workspaces, environment management, and script execution.

**Stack layers:** Builds & reproducibility.

**Current signal:** Experimental uv and ty integration was announced 2026-10-13.

**Test:** Resolve and install identical pinned Python applications with isolated empty and populated caches.

**Measure:** resolve seconds; install seconds; disk MiB; lock reproducibility rate; platform compatibility pass rate.

**Constraints:** Separate network time from resolver time. Compare the same wheel/source-build choices and index snapshots.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX064](https://docs.astral.sh/uv/) · [RX065](https://astral.sh/blog/uv-ty-integration)

### OpenTofu

**tool · established · P2** · ID: opentofu

Infrastructure-as-code candidate for reproducible remote benchmark environments and explicit resource configuration.

**Stack layers:** Builds & reproducibility.

**Current signal:** OpenTofu 1.13.0 release on 2026-09-29 labels built-in linting and Symbol Libraries experimental.

**Test:** Provision and destroy a small disposable benchmark environment from pinned configuration and verify drift detection.

**Measure:** reproduction success; plan/apply time; drift detection; cleanup completeness.

**Constraints:** Remote resources incur real costs and require separate execution authorization. Pin provider versions and protect state.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX129](https://opentofu.org/blog/opentofu-1-13-0/)

### Oxc / Oxlint / Oxfmt

**tool · emerging · P2** · ID: oxc

Rust-based JavaScript tooling family for parsing, transformation, linting, minification, and formatting.

**Stack layers:** Builds & reproducibility.

**Current signal:** Upstream lists Oxlint 1.90.0 and Oxfmt 0.75.0 releases on 2026-10-27.

**Test:** Use a fixed corpus with matched lint rules and formatting policy; compare diagnostics and safe-fix behavior before timing.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; diagnostic recall; format idempotence rate.

**Constraints:** Oxc components have independent versions and maturity. Rule coverage and type-aware mode must be matched.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX061](https://github.com/oxc-project/oxc/releases)

### Resolvo

**framework · emerging · P2** · ID: resolvo

Rust CDCL dependency solver with extensible package metadata and conflict reporting, suited to comparing native mod-resolution implementations.

**Stack layers:** Dependencies & conflict solving.

**Current signal:** Published API documents version 0.12.2 as checked 2026-10-28; the earlier 0.12.0 changelog describes multiversion support.

**Test:** Run the libsolv fixture suite through a common manifest contract. Include metadata fetch delays, cancellation, multi-version coexistence, unavailable packages and deterministic tie-breaking. Require equivalent validity and explanation quality before comparing elapsed time.

**Measure:** solution validity; solve p50/p95; metadata requests; peak memory; cancellation latency; conflict explanation coverage.

**Constraints:** BSD-3-Clause; Rust library with C++ bindings. Build and runtime support for each intended desktop target must be tested; browser/WASM support is not claimed. Async metadata fetching is distinct from solver parallelism. Do not credit a network-cache difference as a solver improvement. Multi-version rules must be explicitly compatible with the game or plugin ABI; package coexistence does not establish content compatibility. The 0.12.0 changelog date and observed 0.12.2 API version refer to different releases.

**Priority rationale:** Conditional challenger when a Rust core and lazy metadata fit the product; promote only after matching libsolv correctness and improving the actual workload.

**Sources:** [ST135](https://github.com/prefix-dev/resolvo) · [ST136](https://docs.rs/resolvo/0.12.2/resolvo/) · [ST137](https://github.com/prefix-dev/resolvo/blob/main/CHANGELOG.md)

### Rspack

**tool · emerging · P2** · ID: rspack

Rust-based bundler designed around webpack compatibility, incremental compilation, and production build optimization.

**Stack layers:** Builds & reproducibility.

**Current signal:** Rspack 2.0 announcement introduces updated defaults and APIs while targeting webpack ecosystem compatibility.

**Test:** Migrate a pinned webpack application and measure cold builds, rebuilds, plugin coverage, and migration effort.

**Measure:** cold build seconds; incremental build milliseconds; peak RSS MiB; plugin pass rate; migration hours.

**Constraints:** Record unsupported webpack APIs explicitly. Pin plugin and loader versions as part of the experiment.

**Priority rationale:** Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX062](https://www.rspack.dev/blog/announcing-2-0)

### Dagger

**tool · emerging · P3** · ID: dagger

Programmable container-based CI candidate for repeatable local builds and reusable cached pipelines.

**Stack layers:** Builds & reproducibility.

**Current signal:** Official 2026-10-23 announcement introduces Dagger 1.0 beta.

**Test:** Run identical clean, incremental, and no-op builds locally and in CI; compare outputs and cache correctness.

**Measure:** cold build time; incremental build time; cache hit correctness; developer setup effort.

**Constraints:** Dagger 1.0 is beta, not stable. Include engine startup and cache storage in cost accounting.

**Priority rationale:** Watch-stage proposal: Build loops are a bounded, reproducible comparison with direct developer-time and diagnostic-correctness effects.

**Sources:** [RX130](https://dagger.io/blog/dagger-10-beta/)

## Web & API stacks (20)

### Lit / Web Components

**framework · established · P1** · ID: lit

Custom-element UI components with reactive updates, explicit lifecycle hooks and encapsulated styles.

**Stack layers:** Browser extensions; Large collections & interaction.

**Current signal:** Lit 3.3.3 was published May 14, 2026. Component portability depends on public properties/events and host adapters, not copying a complete application framework.

**Test:** Move the same interactive feature between a plain page, a framework host and a desktop webview; compare Lit custom elements with the current shared-component approach.

**Measure:** behavior and event-contract parity; keyboard/screen-reader completion; style leakage; bundle and hydration cost; effort to replace a host adapter.

**Constraints:** Shadow DOM is a style/DOM boundary, not an untrusted-code sandbox. Test focus, forms, composed events, theme tokens and framework wrappers. Retain complete feature behavior and public API types.

**Priority rationale:** Move the same interactive feature between a plain page, a framework host and a desktop webview; compare Lit custom elements with the current shared-component approach.

**Sources:** [ST003](https://lit.dev/docs/components/overview/) · [ST004](https://github.com/lit/lit/releases/tag/lit%403.3.3)

### TanStack Virtual

**tool · established · P1** · ID: tanstack-virtual

Headless virtualization with framework adapters and dynamic item measurement for large interactive collections.

**Stack layers:** Large collections & interaction.

**Current signal:** virtual-core 3.19.8 was published October 26; recent patches address scroll margins, stale anchor work and touch compensation.

**Test:** Compare complete keyed rendering, paginated rendering and virtualized rendering of the same collection with variable-height cards, live media, selection, find, keyboard navigation and updates.

**Measure:** p95 input/frame delay; time to complete first usable view; DOM and memory footprint; scroll/selection/focus parity; all-item export and search completeness.

**Constraints:** Virtualization must not become a data cap or omit offscreen records from export/search. Browser find, print, accessibility and media lifecycle need explicit equivalent behavior. Measure real image decode and layout changes; fixed empty rows do not represent rich cards.

**Priority rationale:** Compare complete keyed rendering, paginated rendering and virtualized rendering of the same collection with variable-height cards, live media, selection, find, keyboard navigation and updates.

**Sources:** [ST007](https://github.com/TanStack/virtual/releases/tag/%40tanstack/virtual-core%403.19.8) · [ST008](https://tanstack.com/virtual/latest/docs/api/virtualizer)

### Validated native messaging boundary

**method · established · P1** · ID: native-messaging-boundary

Explicit, validated extension-to-native protocol with framed messages, permitted origins and recoverable jobs.

**Stack layers:** Browser extensions.

**Current signal:** Current Chrome documentation distinguishes persistent ports from one-message host processes and documents asymmetric frame limits and sender validation requirements.

**Test:** Exercise complete native jobs through a versioned command schema with origin checks, partial frames, restart, cancellation, reordered messages and large results transferred in verified chunks.

**Measure:** full result/error parity; framing and origin rejection; end-to-end completion and cancellation; restart recovery; peak queued bytes.

**Constraints:** Native code has privileges independent of browser isolation; expose narrow commands and validated paths. A framing limit requires chunking/backpressure, not silent truncation of user data. Logs must not corrupt protocol stdout; validate UTF-8 byte lengths and exact caller/command identity.

**Priority rationale:** Exercise complete native jobs through a versioned command schema with origin checks, partial frames, restart, cancellation, reordered messages and large results transferred in verified chunks.

**Sources:** [ST023](https://developer.chrome.com/docs/extensions/develop/concepts/native-messaging)

### Validator-bound HTTP resumption

**method · established · P1** · ID: http-range-resumption

Resumable download protocol that binds partial bytes to a specific HTTP representation and verifies the completed artifact.

**Stack layers:** Downloads, transfer & sync.

**Current signal:** RFC 9110 provides stable Range/If-Range semantics; this is a correctness method, not a new 2026 transport release.

**Test:** Persist partial length, representation identity and a strong validator. Test Range/If-Range against changed resources, ignored ranges, wrong ranges, encoding changes, disconnects and 416 responses; restart safely where required and verify the final trusted digest before installation.

**Measure:** final-byte parity; incorrect-append count; resumed bytes saved; total completion time; retry overhead; cancellation/restart correctness.

**Constraints:** If-Range cannot use a weak entity tag; validator mismatch requires treating the server response as a new representation. A 200 response must not be appended to a previous partial range; validate 206 offsets and handle 416 explicitly. An ETag is not publisher authentication, and a partial-file length is not proof that an artifact is complete.

**Priority rationale:** Resumption is valuable only when changed resources, encodings and fallback responses cannot corrupt the final output.

**Sources:** [ST112](https://www.rfc-editor.org/rfc/rfc9110.html) · [ST110](https://docs.rs/reqwest/latest/reqwest/struct.ClientBuilder.html)

### reqwest

**repository · established · P1** · ID: reqwest

Rust HTTP client baseline for bounded, cancellable downloads with explicit byte-representation and timeout controls.

**Stack layers:** Downloads, transfer & sync.

**Current signal:** reqwest 0.13.5 was released on 2026-09-08 and is already pinned in Atlas Lab; HTTP/3 remains documented as unstable.

**Test:** Extend the already pinned reqwest baseline with a controlled public-fixture server. Test bounded streaming, explicit timeouts, cancellation, redirects, retries, disk failures and identity-encoded range resumption; retain all response and integrity failures.

**Measure:** verified complete downloads; p95/p99 completion time; peak RSS; cancel-to-stop latency; retry and transferred-byte overhead; error preservation.

**Constraints:** Transparent content decoding changes representation headers and byte offsets; disable or consistently account for it when resuming. HTTP/3 is documented as unstable and belongs in a separate opt-in configuration, not the baseline. Timeout, retry, redirect and concurrency budgets are application policy; merely selecting the library does not provide them.

**Priority rationale:** Improve and verify the existing transport before evaluating a replacement or an experimental protocol.

**Sources:** [ST108](https://docs.rs/reqwest/latest/reqwest/) · [ST109](https://docs.rs/crate/reqwest/latest) · [ST110](https://docs.rs/reqwest/latest/reqwest/struct.ClientBuilder.html) · [ST111](https://github.com/seanmonstar/reqwest)

### Astro

**framework · established · P2** · ID: astro

Content-oriented web framework with selective interactivity, prerendering, and server-rendered routes.

**Stack layers:** APIs & shared services.

**Current signal:** Astro 7.4 adds build timings; parallel prerendering is explicitly experimental.

**Test:** Build the same large documentation corpus with selected interactive widgets and fixed images.

**Measure:** build seconds; incremental build seconds; initial JS bytes; LCP milliseconds; broken-link count.

**Constraints:** Keep dynamic app and content-site cohorts distinct. Experimental parallel builds need a separate correctness run.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX070](https://astro.build/blog/astro-740/)

### Axum

**framework · established · P2** · ID: axum

Rust HTTP routing and request-handling library using the Tokio, Hyper, and Tower ecosystem.

**Stack layers:** APIs & shared services.

**Current signal:** Current documentation shows Axum 0.8.9 and explicitly targets Tokio and Hyper.

**Test:** Implement the reference API with equivalent validation, tracing, timeouts, and database pool settings.

**Measure:** p95 latency milliseconds; p99 latency milliseconds; throughput at SLO; peak RSS MiB; build seconds.

**Constraints:** Record all middleware and optimization flags. Axum intentionally does not claim runtime independence.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX080](https://docs.rs/axum/latest/axum/)

### Comlink

**tool · established · P2** · ID: comlink

Asynchronous worker RPC wrapper with structured-clone values, explicit transferables and proxy lifecycle APIs.

**Stack layers:** Shared core & native boundaries; Browser extensions.

**Current signal:** The checked release is 4.4.2 from November 2024; current docs remain useful as a worker-boundary baseline, without presenting it as a 2026 release.

**Test:** Compare direct typed postMessage with Comlink on complete parsing/asset jobs, including transferred buffers, cancellation, worker restart and propagated errors.

**Measure:** input latency during work; total completion time including transfers; peak retained memory; cancellation latency; lost or duplicated responses.

**Constraints:** Copied and transferred buffers have different ownership semantics. Explicitly restrict origins for window endpoints; the documented allowedOrigins default is permissive. Worker offloading does not eliminate CPU cost or provide a native security sandbox.

**Priority rationale:** Compare direct typed postMessage with Comlink on complete parsing/asset jobs, including transferred buffers, cancellation, worker restart and propagated errors.

**Sources:** [ST005](https://github.com/GoogleChromeLabs/comlink) · [ST006](https://github.com/GoogleChromeLabs/comlink/releases/tag/v4.4.2)

### Django

**framework · established · P2** · ID: django

Python web framework with an ORM, authentication, administrative tooling, and integrated application conventions.

**Stack layers:** APIs & shared services.

**Current signal:** Django issued 6.1.2, 6.0.9, and 5.2.18 security releases on 2026-10-06.

**Test:** Build the reference CRUD application with authentication and migrations; compare both runtime and implementation effort.

**Measure:** p95 request milliseconds; query count per action; migration correctness pass rate; test coverage; implementation hours.

**Constraints:** Compare equivalent application features. LTS and feature-release cohorts need separate maintenance evaluation.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX078](https://www.djangoproject.com/weblog/2026/oct/06/security-releases/)

### FastAPI

**framework · established · P2** · ID: fastapi

Python API framework with typed request models, dependency injection, and OpenAPI generation.

**Stack layers:** APIs & shared services.

**Current signal:** FastAPI 0.162.0 on 2026-10-23 changes omitted boolean form-field handling.

**Test:** Compare full validated APIs using identical schemas, databases, worker counts, and lifecycle hooks.

**Measure:** p95 latency milliseconds; throughput at SLO; schema correctness pass rate; memory per worker MiB; startup milliseconds.

**Constraints:** Pin Starlette, Pydantic, ASGI server, and Python versions. Include invalid requests and omitted fields in correctness tests.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX077](https://fastapi.tiangolo.com/release-notes/)

### Hono

**framework · established · P2** · ID: hono

HTTP framework built around Web Standard APIs, intended for multiple JavaScript runtimes.

**Stack layers:** APIs & shared services.

**Current signal:** Official overview describes a shared Web Standards API across multiple runtime targets.

**Test:** Run a validated JSON API unchanged across Node, Bun, Deno, and a selected worker runtime.

**Measure:** runtime compatibility pass rate; p95 latency milliseconds; throughput at SLO; bundle bytes; cold start milliseconds.

**Constraints:** Runtime effects must be separated from framework effects. Bare routing benchmarks omit validation, logging, and database costs.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX075](https://hono.dev/)

### Next.js

**framework · established · P2** · ID: nextjs

React application framework combining server rendering, routing, caching, and a Rust-based build pipeline.

**Stack layers:** APIs & shared services.

**Current signal:** Next.js 16.4 introduces updated Cache Components defaults and development/build improvements.

**Test:** Build the same authenticated content-and-search application with explicit rendering and cache rules.

**Measure:** LCP milliseconds; INP milliseconds; navigation p95 milliseconds; build seconds; server memory MiB; cache correctness pass rate.

**Constraints:** Hosting, caching, and rendering modes must match. Security patch level is part of the pinned environment.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX068](https://nextjs.org/blog/next-16-4)

### Nuxt

**framework · established · P2** · ID: nuxt

Vue application framework with server rendering, routing, deployment integration, and typed application utilities.

**Stack layers:** APIs & shared services.

**Current signal:** Nuxt 4.6.3 is listed on 2026-10-27 with security and performance fixes.

**Test:** Build the reference SSR application and exercise routing, caching, forms, and hydration under pinned deployment settings.

**Measure:** LCP milliseconds; INP milliseconds; build seconds; server memory MiB; hydration defect count.

**Constraints:** Use a current patched release for any public test deployment. Separate framework behavior from platform-specific hosting optimizations.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX073](https://github.com/nuxt/nuxt/releases)

### Phoenix LiveView

**framework · established · P2** · ID: phoenix-liveview

Server-driven interactive UI framework on the BEAM, useful for assessing persistent connections and thin-client application designs.

**Stack layers:** APIs & shared services.

**Current signal:** LiveView 1.2 adds colocated CSS in HEEx templates.

**Test:** Implement the same live dashboard and test reconnects, server restarts, and increasing network latency.

**Measure:** interaction p95 milliseconds; memory per connection KiB; reconnect success rate; bytes per update; CPU per active user.

**Constraints:** Server-driven and client-driven approaches differ under poor networks. Measure capacity and failure recovery, not just first paint.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX079](https://www.phoenixframework.org/blog/phoenix-liveview-1-2-released)

### React

**framework · established · P2** · ID: react

Component library for interactive interfaces, with concurrent rendering and ecosystem-wide server integration.

**Stack layers:** Large collections & interaction.

**Current signal:** React 19.3 stabilizes View Transitions and Fragment Refs.

**Test:** Run the same interactive table, editor, and dashboard behavior under identical browser and device profiles.

**Measure:** INP milliseconds; frame time p95 milliseconds; heap MiB; initial JS bytes; accessibility pass rate.

**Constraints:** React alone is not a full-stack framework. Control compiler use, memoization, virtualization, and rendering semantics.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX071](https://react.dev/blog/2026/09/09/react-19-3)

### SvelteKit

**framework · established · P2** · ID: sveltekit

Svelte application framework for routing, server rendering, and integrated client-server applications.

**Stack layers:** APIs & shared services.

**Current signal:** SvelteKit 3.0 released 2026-10-01; remote functions still require experimental Async Svelte in the announcement.

**Test:** Implement the reference application with server rendering, progressive forms, and a fixed deployment target.

**Measure:** LCP milliseconds; INP milliseconds; initial JS bytes; build seconds; request correctness pass rate.

**Constraints:** Experimental remote functions are a separate lane. Migration automation success should be measured rather than assumed.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX069](https://svelte.dev/blog/sveltekit-3-is-here)

### TanStack Start

**framework · emerging · P2** · ID: tanstack-start

Application framework centered on typed routing, server functions, and full-stack TypeScript workflows.

**Stack layers:** APIs & shared services.

**Current signal:** TanStack Start's stable 1.0 milestone was announced 2026-10-13.

**Test:** Implement the reference app and evaluate route typing, server-function validation, SSR behavior, and migration effort.

**Measure:** type-error detection rate; LCP milliseconds; navigation p95 milliseconds; build seconds; defect count.

**Constraints:** Product milestone 1.0 is not a claim that every package version is 1.0.0. Pin the selected server integration and hosting target.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX074](https://tanstack.com/blog/tanstack-start-1-0)

### Vue

**framework · established · P2** · ID: vue

Component-based UI framework with stable and prerelease branches that should be evaluated as separate cohorts.

**Stack layers:** Large collections & interaction.

**Current signal:** Upstream lists Vue 3.6.0-rc.13 as prerelease and keeps stable 3.5 releases distinct.

**Test:** Run the shared interactive UI corpus on a pinned stable build and an independently labeled prerelease build.

**Measure:** INP milliseconds; frame time p95 milliseconds; heap MiB; initial JS bytes; behavioral pass rate.

**Constraints:** Do not describe release candidates as stable. Preserve identical feature sets across renderers.

**Priority rationale:** Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX072](https://github.com/vuejs/core/releases)

### Elysia 2

**framework · experimental · P3** · ID: elysia2

TypeScript HTTP framework candidate with ahead-of-time compilation and end-to-end type-oriented APIs.

**Stack layers:** APIs & shared services.

**Current signal:** Elysia 2 RC was announced 2026-10-19 and remains a prerelease candidate.

**Test:** Compare pinned stable Elysia and Elysia 2 RC with matched validation, headers, errors, and runtime.

**Measure:** p95 latency milliseconds; p99 latency milliseconds; throughput at SLO; startup RSS MiB; peak RSS MiB; type-check seconds.

**Constraints:** Keep RC and stable cohorts separate. Measure retained memory after sustained traffic, not only peak throughput.

**Priority rationale:** Watch-stage proposal: Use an identical vertical slice including validation, persistence and deployment; isolated request speed is insufficient.

**Sources:** [RX076](https://next.elysiajs.com/blog/elysia-20-rc/)

### iroh-blobs

**repository · experimental · P3** · ID: iroh-blobs

Experimental verified blob and range transfer over QUIC for a separately scoped peer-delivery feasibility study.

**Stack layers:** Downloads, transfer & sync.

**Current signal:** The changelog lists 0.103.1 on 2026-10-06, while the current README still warns that the version is not production quality.

**Test:** Run an isolated feasibility comparison against validated HTTP for public immutable blobs, including partial ranges, corrupt peers, reconnects and interrupted local persistence. Require full final-byte verification and explicit source authorization before any application integration proposal.

**Measure:** verified transfer success; total completion time; bytes transferred; peak RSS and disk; resume/recovery correctness; operational dependency count.

**Constraints:** The current upstream README explicitly says this version is not production quality and recommends 0.35 for production use. The current 0.103.x line and the suggested 0.35 production line are separate configurations, not interchangeable evidence. Content hashes verify bytes, not publisher identity; blob payloads do not supply application metadata or an installation transaction.

**Priority rationale:** Watchlist only until version-specific production readiness, operational scope and a useful peer-delivery workload are established.

**Sources:** [ST113](https://github.com/n0-computer/iroh-blobs) · [ST114](https://github.com/n0-computer/iroh-blobs/blob/main/CHANGELOG.md)

## Desktop & game engines (26)

### Avalonia

**framework · established · P1** · ID: avalonia

Cross-platform .NET UI framework with its own rendering layer, declarative layouts, data binding, and desktop application controls.

**Stack layers:** Desktop shells & native UI.

**Current signal:** Official releases currently show 12.1.4; Avalonia 12's April announcement emphasizes UI foundations and virtualization fixes.

**Test:** Implement the shared collection workload in .NET with virtualized cards and identical native features; run Windows first, then each required macOS/Linux configuration and renderer.

**Measure:** cold start milliseconds; input-to-paint p95 milliseconds; scroll frame p95 milliseconds; peak RSS MiB; accessibility pass rate; platform parity pass rate; implementation and migration hours.

**Constraints:** Framework is MIT; separately offered commercial controls and media components require their own evaluation. Platform support has explicit tiers; current documentation places older Windows variants below the newest tested configurations. Linux uses X11 by default; native Wayland is opt-in from 12.1.0 and needs its own cohort. Rendered controls do not establish native accessibility, IME, media playback, or drag/drop parity without tests.

**Priority rationale:** Useful .NET desktop baseline when cross-platform distribution and rich native integration matter.

**Sources:** [ST030](https://avaloniaui.net/blog/avalonia-12/) · [ST031](https://docs.avaloniaui.net/docs/supported-platforms) · [ST032](https://github.com/AvaloniaUI/Avalonia/releases) · [ST033](https://github.com/AvaloniaUI/Avalonia/blob/main/licence.md)

### Basis Universal / KTX2 texture pipeline

**tool · established · P1** · ID: basis-universal

Texture compression and transcoding toolkit supporting portable delivery formats and multiple target GPU texture formats across native and web pipelines.

**Stack layers:** Assets, textures & delivery.

**Current signal:** Current README identifies v2.5 and distinguishes mature codec interchange from the newer XUASTC KTX2 integration work.

**Test:** Compare ETC1S/UASTC delivery and supported target GPU formats at matched visual error using public albedo, normal, ORM, alpha, and HDR fixtures; include mipmaps, cubemaps, runtime transcode, and browser/desktop memory.

**Measure:** compressed and transfer MiB; encode seconds; transcode and upload milliseconds; peak host and GPU MiB; per-channel reference error; alpha and normal-map correctness pass rate; runtime interoperability pass rate.

**Constraints:** Apache-2.0; tool and test-image licenses should be recorded separately. README v2.5 still describes XUASTC KTX2 integration as ongoing standardization work; do not assume all KTX2 tools or engines support it. Baseline existing supported codecs separately from newer XUASTC/HDR configurations and optional shader deblocking. Same resolution, mip chain, colorspace, alpha semantics, normal reconstruction, and material channels are mandatory. 32-bit Wasm address-space limits and peak encoder allocations require explicit large-image tests.

**Priority rationale:** Portable compressed textures can benefit delivery and GPU memory, but only after per-target fidelity and interchange checks.

**Sources:** [ST062](https://github.com/BinomialLLC/basis_universal)

### BepInEx

**platform · established · P1** · ID: bepinex

Plugin loader and patching ecosystem for Unity and other managed game targets, with separate runtime, architecture, and release-channel requirements.

**Stack layers:** Mod loaders & compatibility.

**Current signal:** Current releases show 5.4.23.6 with macOS ARM64 and universal-build fixes; target-specific installation guidance remains essential.

**Test:** Pin a public test game or authorized fixture, Unity backend, game build, CPU architecture, loader channel, and plugin dependencies; check startup, patch ordering, unload/restart behavior, and save integrity.

**Measure:** plugin load pass rate; patch-order correctness pass rate; startup seconds; frame p95 milliseconds; crash-free scenario pass rate; upgrade compatibility pass rate.

**Constraints:** LGPL-2.1; distribution terms for target games and plugins remain separate. Repository identifies Unity Mono as the stable target; IL2CPP and other configurations require separate channel/support checks. The support matrix does not offer every OS/backend/architecture combination; macOS IL2CPP must not be assumed supported. Plugins execute with game-process authority; this does not meet an untrusted-code isolation requirement. Do not combine 5.x LTS results with 6.x development builds in one stability ranking.

**Priority rationale:** Relevant baseline for compatible Unity mod targets, selected by exact runtime and game constraints.

**Sources:** [ST051](https://github.com/BepInEx/BepInEx) · [ST052](https://github.com/BepInEx/BepInEx/releases) · [ST053](https://docs.bepinex.dev/master/articles/user_guide/installation/index.html)

### Blender and glTF export

**tool · established · P1** · ID: blender

Open-source content-authoring suite with an integrated glTF import/export path for reproducible game and application asset pipelines.

**Stack layers:** Assets, textures & delivery.

**Current signal:** Official source and Khronos exporter repositories were verified; exact current Blender release remains deliberately unasserted.

**Test:** Pin Blender and exporter versions, automate public fixture exports, validate glTF, reimport, and compare scene hierarchy, materials, skins, morph targets, animation, and runtime renders on desktop and browser.

**Measure:** export and import seconds; artifact MiB; semantic roundtrip pass rate; animation sample error; rendered reference error; manual repair minutes.

**Constraints:** Blender overall is GPLv3; the Khronos exporter repository is Apache-2.0, and source asset licenses are separate. Exact current stable/LTS version was not verified because official release pages failed to open; choose and record a verified release before running. Exporter support for glTF extensions does not guarantee every target engine/browser imports them equivalently. Preserve original authoring files and full-fidelity exports; optimization variants need explicit quality gates.

**Priority rationale:** Established authoring/export baseline, with full asset roundtrip fidelity as the first gate.

**Sources:** [ST056](https://github.com/blender/blender) · [ST057](https://github.com/KhronosGroup/glTF-Blender-IO)

### Electron

**framework · established · P1** · ID: electron

Desktop application platform bundling Chromium and Node.js for web-based interfaces and native integrations.

**Stack layers:** Desktop shells & native UI.

**Current signal:** Electron 45 released 2026-10-21 with updated Chromium, V8, Node.js, and preload behavior.

**Test:** Package the same rich collection app and complete feature contract as Tauri and native candidates; test imported media, multiple windows, native file flows, permissions, accessibility, and signed update/recovery behavior on each required OS.

**Measure:** cold start milliseconds; input-to-paint p95 milliseconds; scroll frame p95 milliseconds; idle and peak RSS MiB; installer MiB; native-feature and media parity pass rate; permission-denial pass rate; update success rate.

**Constraints:** Bundled Chromium and system webviews have different distribution and update costs; count the complete installed configuration. Electron's checklist requires context isolation, renderer sandboxing, appropriate Node integration policy, permission handlers, and IPC sender validation. Treat untrusted frames and imported/remote content as separate permission cases; a secure configuration cannot be inferred from framework choice. Performance results are eligible only after equivalent media, accessibility, native integration, and update behavior pass.

**Priority rationale:** Production baseline for a shared web UI; compare resource cost only with the same complete feature and security contract.

**Sources:** [RX082](https://www.electronjs.org/blog/electron-45-0) · [ST067](https://www.electronjs.org/docs/latest/tutorial/security)

### Fabric Loader and toolchain

**platform · established · P1** · ID: fabric-loader

Minecraft mod loader and development ecosystem whose loader, API, mappings, build tools, and Java requirements must match the targeted game version.

**Stack layers:** Mod loaders & compatibility.

**Current signal:** Fabric's 2026-09-15 guide documents Minecraft 26.3 toolchain and API migrations.

**Test:** For each exact public game/modpack target, pin game, loader, API, mappings, JDK, and dependencies; run install, client/server loading, save roundtrip, input/render hooks, resource reload, and multiplayer scenarios.

**Measure:** compatibility pass rate; launch seconds; server tick p95 milliseconds; client frame p95 milliseconds; save roundtrip pass rate; migration and maintenance hours.

**Constraints:** Loader is Apache-2.0; game distribution and individual mod licenses are separate. The 26.3 article's Loom 1.17, Gradle 9.6.0, and Loader 0.19.5 values are release-time guidance, not a permanent latest-version claim. The 26.1 Java 25 and migration requirements cannot be applied blindly to older supported modpacks. Do not rank Fabric against another loader using different game versions or non-equivalent available mods. An in-process mod loader is not containment for hostile native or managed mod code.

**Priority rationale:** The required game version and mod ecosystem determine eligibility before any performance comparison.

**Sources:** [ST045](https://fabricmc.net/2026/09/15/263.html) · [ST046](https://fabricmc.net/2026/03/14/261.html) · [ST047](https://github.com/FabricMC/fabric-loader)

### Identity-preserving collection virtualization

**method · established · P1** · ID: collection-virtualization

Realize only visible collection elements while preserving stable item identity, selection, scroll anchors, keyboard focus, and accessible navigation during updates.

**Stack layers:** Large collections & interaction.

**Current signal:** Current WinUI documentation distinguishes a full collection control from a lower-level virtualization building block.

**Test:** Use identical 1k/10k/100k public rich-card datasets with bounded media caches; compare viewport virtualization to a bounded fully realized control while filtering, inserting, reordering, selecting, and navigating by keyboard.

**Measure:** input-to-paint p95 milliseconds; scroll frame p95 milliseconds; realized element count; peak RSS and GPU MiB; lost focus or scroll-anchor count; content identity pass rate; screen-reader navigation pass rate.

**Constraints:** This is an established technique checked in 2026, not a newly invented 2026 method. ItemsRepeater supplies a building block, not complete interaction policy; application-level focus, selection, and accessibility behavior still need implementation. Media decode/cache work must be measured separately; virtualization cannot justify dropped images, animations, or metadata. Use native and browser implementations in separate cohorts unless their interaction and fidelity contracts match.

**Priority rationale:** Likely first intervention for many rich cards because it can reduce UI work without changing the dataset or user-visible feature contract.

**Sources:** [ST065](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls/itemsview) · [ST066](https://learn.microsoft.com/en-us/windows/apps/develop/ui/controls/items-repeater)

### NeoForge

**platform · established · P1** · ID: neoforge

Minecraft modding platform with versioned development guidance and migration documentation for tightly coupled game and mod APIs.

**Stack layers:** Mod loaders & compatibility.

**Current signal:** Current primary documentation covers Java 25 for the 26.1 setup and vanilla 26.2-to-26.3 migration, including SDL input changes.

**Test:** Use a game-version-matched compatibility suite for required public mods, client/server lifecycles, input hooks, data migrations, resource reload, and save preservation; measure only configurations that pass.

**Measure:** required-mod compatibility pass rate; launch seconds; server tick p95 milliseconds; client frame p95 milliseconds; save roundtrip pass rate; porting hours.

**Constraints:** NeoForge repository is LGPL-2.1; individual mods and the game have separate terms. The opened getting-started page targets 26.1; do not infer a current 26.3 stable loader from the vanilla migration primer. The primer is CC BY 4.0 and explicitly does not cover a specific mod loader. Loader ecosystems are constrained by the exact required mods; an abstract global loader ranking would be misleading. Game-process mod execution is not an untrusted plugin sandbox.

**Priority rationale:** Primary baseline when required mods or APIs select NeoForge; compatibility and migration cost precede speed.

**Sources:** [ST048](https://docs.neoforged.net/docs/gettingstarted/) · [ST049](https://docs.neoforged.net/primer/docs/26.3/) · [ST050](https://github.com/neoforged/NeoForge)

### PixiJS

**framework · established · P1** · ID: pixijs

GPU-accelerated 2D scene rendering and interaction framework for browser games and graphical tools.

**Stack layers:** Games, graphics & physics.

**Current signal:** PixiJS 8.22.0 was published October 1 with keyboard accessibility repairs, context-menu events and WebGPU texture/rendering changes.

**Test:** Compare the existing complete 2D scene with pinned PixiJS WebGL and WebGPU backends using the same sprites, text, input, accessibility layer and animation schedule.

**Measure:** p95 frame and input delay; cold texture upload and first frame; memory/texture retention; text and hit-test parity; keyboard navigation completeness.

**Constraints:** WebGL and WebGPU are different configurations and must both pass target-device tests. Canvas pixels alone do not preserve semantic accessibility. Do not exclude decoded textures, text shaping or real input events from the measured work.

**Priority rationale:** Compare the existing complete 2D scene with pinned PixiJS WebGL and WebGPU backends using the same sprites, text, input, accessibility layer and animation schedule.

**Sources:** [ST013](https://github.com/pixijs/pixijs/releases/tag/v8.22.0)

### Tauri

**framework · established · P1** · ID: tauri

Rust-backed application framework using platform webviews for desktop and mobile interfaces.

**Stack layers:** Desktop shells & native UI.

**Current signal:** Tauri 2.12 adds a webview permission request handler and changes supported platform/toolchain requirements.

**Test:** Package the identical browser UI and public media corpus as Electron; test each required system webview, native command allowlist, local/remote frame origin, denied operation, file flow, and signed update/recovery path.

**Measure:** cold start milliseconds; input-to-paint p95 milliseconds; scroll frame p95 milliseconds; idle and peak RSS MiB; installer MiB; media and native-feature parity pass rate; capability-denial pass rate; update success rate.

**Constraints:** Pin OS and system-webview versions; codec, rendering, accessibility, and permission behavior require end-to-end checks. Capabilities assigned to a window or webview combine permissions; multiple files do not imply independent containment. Registered application commands are allowed for all windows/webviews by default unless restricted through the application manifest. Official documentation warns that Linux and Android cannot distinguish iframe requests from their containing window for the discussed remote access boundary. Capabilities do not protect against malicious Rust/core code or overly broad scopes; native plugin execution needs a separate trust decision.

**Priority rationale:** Credible shell challenger where actual target-webview media and permission behavior passes the shared web UI contract.

**Sources:** [RX081](https://v2.tauri.app/blog/tauri-2.12/) · [ST068](https://v2.tauri.app/security/capabilities/)

### Three.js

**framework · established · P1** · ID: threejs

Browser 3D rendering library with WebGL and a separate WebGPU/node-material rendering path.

**Stack layers:** Games, graphics & physics.

**Current signal:** The latest published release observed is r186 (September 24); r187 is a future milestone in the checked snapshot. The current WebGPU guide still labels that renderer experimental.

**Test:** Render the same asset scene with pinned WebGL and WebGPU configurations, matching materials, lighting, animation, picking, transparency and post-processing before timing.

**Measure:** visual and interaction parity; cold shader/asset startup; p95 frame time; VRAM and RAM peaks; device-loss and fallback recovery.

**Constraints:** ShaderMaterial/onBeforeCompile and EffectComposer do not directly transfer to the WebGPU path. Fallback support does not prove equivalent visuals or speed on a target GPU. A planned milestone or migration heading is not a published release.

**Priority rationale:** Render the same asset scene with pinned WebGL and WebGPU configurations, matching materials, lighting, animation, picking, transparency and post-processing before timing.

**Sources:** [ST011](https://github.com/mrdoob/three.js/releases/tag/r186) · [ST012](https://threejs.org/manual/pages/webgpurenderer)

### WinUI 3 / Windows App SDK

**framework · established · P1** · ID: windows-app-sdk

Windows desktop application stack combining WinUI controls, windowing, lifecycle, deployment, and native APIs for C# and C++ applications.

**Stack layers:** Desktop shells & native UI.

**Current signal:** Microsoft's stable release notes list Windows App SDK 2.6.4 released 2026-10-27.

**Test:** Build the Windows variant of the same rich collection app using native controls, identical public media, file import, search, keyboard navigation, and update/signing flows; compare only the Windows cohort.

**Measure:** cold start milliseconds; input-to-paint p95 milliseconds; scroll frame p95 milliseconds; idle and peak RSS MiB; native-feature pass rate; accessibility pass rate; update success rate.

**Constraints:** Windows-specific; SDK overview supports Windows 10 version 1809 and later, but exact feature and deployment requirements must be pinned. Repository is MIT; Windows SDK/runtime distribution terms and app dependencies are separate inputs. Native shell eligibility requires complete media, drag/drop, IME, accessibility, and high-DPI behavior; a lighter incomplete UI does not win. Use stable release packages for the production cohort; preview and experimental channels require separate cohorts.

**Priority rationale:** Strong Windows-native baseline when Windows integration is a hard requirement; evaluate reuse cost separately from UI performance.

**Sources:** [ST026](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/) · [ST027](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/release-notes/windows-app-sdk-2-0?pivots=stable) · [ST028](https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/release-channels) · [ST029](https://github.com/microsoft/WindowsAppSDK)

### glTF Transform

**tool · established · P1** · ID: gltf-transform

JavaScript and TypeScript toolkit for reproducible glTF inspection, transformation, compression, and extension-aware asset processing.

**Stack layers:** Assets, textures & delivery.

**Current signal:** Current documentation exposes explicit mesh/texture transformations; its decode model separates transfer savings from rendering performance.

**Test:** Build an explicit transformation pipeline over versioned public GLB fixtures; compare no-op, lossless cleanup, mesh compression, and declared lossy variants separately across the same desktop/browser loaders.

**Measure:** pipeline seconds; artifact and transfer MiB; decode and first-render milliseconds; peak decode RSS MiB; semantic retention pass rate; reference image error.

**Constraints:** MIT code; documentation has a separate CC BY 3.0 license. Convenience optimization presets must not silently drop hierarchy, animation, material extensions, or texture quality. Mesh compression is decoded before GPU upload; smaller downloads alone do not establish a faster frame rate. Pin codec, extension, and loader versions; retain uncompressed masters and publish transformation parameters.

**Priority rationale:** Makes asset choices reproducible and testable while preserving source assets and declared quality budgets.

**Sources:** [ST058](https://gltf-transform.dev/) · [ST059](https://gltf-transform.dev/modules/extensions/classes/EXTMeshoptCompression)

### meshoptimizer / gltfpack

**tool · established · P1** · ID: meshoptimizer

Mesh processing library and tooling for vertex/index optimization, compression, and controlled level-of-detail or geometry transformations.

**Stack layers:** Assets, textures & delivery.

**Current signal:** Version 1.3 adds experimental voxel remeshing alongside the existing optimization toolkit; quality-sensitive use needs separate gates.

**Test:** Compare unchanged geometry, lossless layout/compression changes, and separately budgeted LOD/remeshing variants on the same animated and static asset set and target renderer.

**Measure:** encoded MiB; decode milliseconds; GPU frame p95 milliseconds; vertex processing and cache metrics; silhouette and surface error; animation and topology retention pass rate.

**Constraints:** MIT; native and language bindings differ in coverage and must be pinned. Reordering/compression and lossy simplification/remeshing are separate comparison lanes. Experimental voxel remeshing may merge features, close gaps, erase thin structures, or alter interior geometry; reject when those semantics matter. No speed or size gain is admissible if it comes from undisclosed material, animation, or geometric loss.

**Priority rationale:** Established optimization baseline with experimental geometry-changing features isolated from fidelity-preserving comparisons.

**Sources:** [ST060](https://github.com/zeux/meshoptimizer) · [ST061](https://github.com/zeux/meshoptimizer/releases/tag/v1.3)

### wgpu

**framework · established · P1** · ID: wgpu

Portable Rust graphics abstraction supporting native GPU backends and browser WebGPU or WebGL2 paths, with related C bindings.

**Stack layers:** Games, graphics & physics.

**Current signal:** Official releases show v30.0.1; current repository documentation separates native GPU backends from browser WebGPU/WebGL2 support.

**Test:** Render an identical public 2D/3D scene and shader set through the actual target backends; test low-end integrated GPUs, device loss, resize, missing features, and browser fallback independently.

**Measure:** GPU frame p95 milliseconds; CPU submission p95 milliseconds; VRAM MiB; shader compilation milliseconds; visual parity pass rate; adapter and fallback pass rate; device recovery success rate.

**Constraints:** MIT OR Apache-2.0; backend coverage differs across Windows, macOS, Linux, and browser targets. A graphics abstraction is not a UI toolkit, game engine, media stack, or plugin sandbox. Do not compare native DX12/Vulkan to browser WebGL2 without recording changed capabilities and visual output. Downlevel backends and adapter features require explicit detection rather than assumption.

**Priority rationale:** Useful shared graphics foundation when the same rendering workload must run on desktop and in browsers.

**Sources:** [ST039](https://github.com/gfx-rs/wgpu) · [ST040](https://github.com/gfx-rs/wgpu/releases)

### Bevy

**framework · emerging · P2** · ID: bevy

Rust game engine organized around data-driven entities, reusable systems, and programmable rendering.

**Stack layers:** Games, graphics & physics.

**Current signal:** Bevy 0.20 released 2026-10-08 with Feathers editor widgets, scene improvements, and changes to texture compression and mipmap generation.

**Test:** Build the same deterministic native/browser game and editor slice as the established engine control; pin backend, shaders, assets, texture compressor, mipmaps, and renderer features, and measure both authoring and shipped behavior.

**Measure:** CPU and GPU frame p95 milliseconds; first-interactive milliseconds; asset processing and loading seconds; peak RSS and VRAM MiB; build and iteration seconds; asset fidelity pass rate; platform parity pass rate.

**Constraints:** New renderer features are not automatically available on every platform; match visual quality and feature sets before comparing. Bevy 0.20 introduces a new CompressedImageSaver backend and mipmap generation; preserve codec, colorspace, normal-map, and mip-chain semantics. Renderer-specific upscaling or neural features require separate quality and hardware cohorts. Public editor widgets do not alone establish a complete editor workflow; count authoring, migration, and integration work.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX083](https://bevy.org/news/bevy-0-20/) · [ST071](https://bevy.org/news/bevy-0-20/) · [ST072](https://bevy.org/learn/quick-start/getting-started/setup/)

### Godot

**platform · established · P2** · ID: godot

Open-source game engine and editor for 2D and 3D projects, with stable and development release channels.

**Stack layers:** Games, graphics & physics.

**Current signal:** Archive lists 4.7.2 stable on 2026-08-18 and 4.8 beta1 on 2026-10-15.

**Test:** Ship an identical small game/tool slice to Windows and the browser with the same public assets, input, audio, animation, save/load behavior, and fixed visual settings; run native and web renderer cohorts separately.

**Measure:** CPU and GPU frame p95 milliseconds; first-interactive milliseconds; asset import and export seconds; artifact and transfer MiB; peak RSS and VRAM MiB; asset fidelity pass rate; platform parity pass rate.

**Constraints:** Keep 4.7.2 stable and 4.8 beta1 in separate production/preview cohorts. Godot 4 C# projects cannot currently export to the web according to stable documentation; this disqualifies that configuration when the same game must ship in browsers. Web export uses the Compatibility renderer and WebGL2; Forward+ and Mobile renderers are not browser substitutes. Threaded web exports require the documented cross-origin isolation conditions; include actual hosting constraints. Match visuals, asset semantics, audio, input, and persistence before comparing frame time.

**Priority rationale:** The existing Atlas focus makes native integration, responsiveness, asset fidelity and target-device behavior central.

**Sources:** [RX084](https://godotengine.org/download/archive/) · [ST069](https://godotengine.org/download/archive/) · [ST070](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html)

### Rapier JavaScript / WASM physics

**framework · established · P2** · ID: rapier-js

Rigid-body physics through WebAssembly with snapshot-based replay and documented same-version determinism conditions.

**Stack layers:** Games, graphics & physics.

**Current signal:** Current JavaScript docs identify the 0.21 guide and require identical initialization and insertion order for deterministic results; native and JavaScript version numbers must be pinned independently.

**Test:** Replay the same input/timestep trace across browser hosts and machines; compare full state and contacts against the chosen physics baseline before evaluating throughput.

**Measure:** state/snapshot agreement; missed collision and contact events; step and frame latency; restore/replay consistency; peak memory.

**Constraints:** Identical timesteps, initial values and body insertion order are part of the contract. Host Math.sin/Math.cos or other nondeterministic initialization can defeat cross-platform replay. A native crate release does not establish the JavaScript package revision; verify packaged WASM separately.

**Priority rationale:** Replay the same input/timestep trace across browser hosts and machines; compare full state and contacts against the chosen physics baseline before evaluating throughput.

**Sources:** [ST014](https://rapier.rs/docs/user_guides/javascript/determinism/)

### Slint

**framework · emerging · P2** · ID: slint

Declarative UI toolkit targeting desktop and embedded applications with Rust, C++, and additional language integrations.

**Stack layers:** Desktop shells & native UI.

**Current signal:** Current release list includes 1.18.1; the 1.18 announcement adds layout/text improvements and an experimental Vello renderer.

**Test:** Build the same desktop collection slice with identical card content, input behavior, file integration, and platform coverage; compare Slint's default renderer separately from experimental Vello.

**Measure:** startup milliseconds; input-to-paint p95 milliseconds; frame p95 milliseconds; peak RSS MiB; binary and installer MiB; platform parity pass rate; accessibility and IME pass rate.

**Constraints:** Licensing is GPLv3 or another offered license with conditions; do not label this a permissively licensed MIT toolkit. Confirm permitted deployment type, attribution, and applicable license for each evaluated configuration. The 1.18 Vello backend is experimental and must not silently replace the production renderer baseline. Small packaged size cannot compensate for missing media, accessibility, or native-integration requirements.

**Priority rationale:** Credible native UI challenger for constrained app surfaces; require licensing and end-to-end parity gates.

**Sources:** [ST034](https://slint.dev/blog/slint-1.18-released) · [ST035](https://github.com/slint-ui/slint/releases) · [ST036](https://slint.dev/pricing)

### Vello CPU/GPU and Sparse Strips

**framework · emerging · P2** · ID: vello-sparse-strips

Rust vector renderers with CPU and hybrid GPU paths, accompanied by a separate compute-based research renderer.

**Stack layers:** Large collections & interaction.

**Current signal:** Current release list separates Sparse Strips 0.3.0 from Vello Research 0.11.0; Vello Hybrid is now named Vello GPU.

**Test:** Render identical card, vector-path, clipping, gradient, text, and image scenes against a pinned established renderer; separate CPU, GPU, and research configurations and test low-end GPU fallback.

**Measure:** CPU and GPU frame p95 milliseconds; peak RSS and VRAM MiB; reference image error; text and glyph correctness pass rate; unsupported feature count; build and migration hours.

**Constraints:** MIT OR Apache-2.0; CPU/GPU and compute-based Research implementations have different capabilities and maturity. Sparse Strips 0.3.0 has no API-stability guarantee; do not equate a release tag with a stable application framework. The release page warns its performance dashboard is not locked to a release, so its figures cannot become reproducible Atlas measurements. A vector renderer alone does not supply layout, accessibility, text editing, native dialogs, or media playback.

**Priority rationale:** Promising renderer challenger once a complete UI stack and reference-image contract are specified.

**Sources:** [ST041](https://github.com/linebender/vello) · [ST042](https://github.com/linebender/vello/releases)

### egui / eframe

**framework · established · P2** · ID: egui

Immediate-mode Rust GUI library with native and web application integrations, suitable for tools, inspectors, and custom interactive panels.

**Stack layers:** Desktop shells & native UI; Large collections & interaction.

**Current signal:** The opened 0.37.0 release adds font/glyph-provider work; repository guidance explicitly discusses visible-only layout for long scrolling content.

**Test:** Implement a tool-oriented collection inspector with the same data, visible assets, selection, filtering, and editing; compare virtualized visible-item rendering and a deliberately bounded nonvirtualized control.

**Measure:** input-to-paint p95 milliseconds; frame p95 milliseconds; idle CPU percent; peak RSS MiB; realized item count; keyboard and screen-reader pass rate.

**Constraints:** MIT OR Apache-2.0; eframe supports native targets and browser WebAssembly, but backend and platform differences must be pinned. Immediate-mode layout still needs explicit control of large scrollable content; stable IDs are required for reliable item state. Full HTML/media fidelity and native controls are not implied by web/native availability. Treat experimental StyleProvider behavior separately from stable public APIs.

**Priority rationale:** Strong candidate for inspectors and mod tools; qualify richer consumer UI requirements before comparing resource use.

**Sources:** [ST037](https://github.com/emilk/egui) · [ST038](https://github.com/emilk/egui/releases/tag/0.37.0)

### Compatibility-Guided Neighbor Selection for ReSTIR

**paper · experimental · P3** · ID: restir-cgns-paper

Geometry-aware weighted neighbor selection improves spatial reuse quality in reservoir-based real-time rendering.

**Stack layers:** Games, graphics & physics.

**Current signal:** HPG 2026 paper; official implementation and method documentation checked, paper page dated July 2026.

**Test:** Within the same path tracer, compare uniform neighbors with compatibility-guided selection under equal sampling budgets; sweep candidate/selected neighbor counts across motion, disocclusion, and geometric discontinuities.

**Measure:** GPU milliseconds per frame; SMAPE against reference; temporal covariance; flicker/error over camera paths; reservoir memory; variance versus correlation tradeoff.

**Constraints:** Compare the same ReSTIR variant and denoiser; a change in rendering budget or temporal reuse can confound results. Author code is available atop Falcor 8.0; verify compatible hardware, dependencies, and scene licenses. Full PDF could not be retrieved due to size; reviewed primary project method and artifact README, with no local benchmark claims.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX162](https://research.nvidia.com/labs/rtr/publication/junkins2026compatibility/) · [RX163](https://github.com/orion-junkins/ReSTIR-CGNS)

### Evolution Strategies for neural block texture compression

**method · experimental · P3** · ID: neural-texture-es

Experimental public C++ testbed training compact neural texture representations with Evolution Strategies for rate–distortion and runtime decoding experiments.

**Stack layers:** Assets, textures & delivery.

**Current signal:** The repository dates its first public disclosure to 2026-09-05 and provides a testbed with explicit implementation and asset-license limits.

**Test:** Reproduce only implemented public code on redistributable PBR texture sets; compare standard GPU codecs at matched total bytes and rendered error, including model weights, training, all material channels, and decoder integration.

**Measure:** total encoded bits per texel; training seconds and energy; decoder GPU milliseconds; peak VRAM MiB; rendered spatial and temporal error; full-material parity pass rate.

**Constraints:** Author-released method/testbed, not a peer-reviewed paper or an established engine integration. Code is Unlicense; example PNG assets are excluded, so use separately licensed public fixtures. README includes later disclosed or private/unimplemented ideas; evaluate only the pinned public commit's executable path. Count weight/metadata overhead and test mipmaps, normals, alpha, dynamic lighting, and low-end devices before judging quality. No author benchmark is promoted to a local Atlas score.

**Priority rationale:** Frontier watchlist for texture compression; integration and matched-quality reproduction must precede adoption.

**Sources:** [ST063](https://github.com/richgel999/neural_tex_block_compression)

### Multi-Layer Reservoir Splatting for Temporal Reuse under Disocclusion

**paper · experimental · P3** · ID: restir-multilayer-splatting-paper

A ReSTIR method retains multiple screen-space sample layers and reuses occluded history to reduce noise when previously hidden surfaces become visible.

**Stack layers:** Games, graphics & physics.

**Current signal:** Authors' project page identifies a July 2026 SIGGRAPH Conference Track paper on multilayer temporal reuse under disocclusion.

**Test:** After full-paper and artifact review, compare a reproduced multilayer implementation to a matched single-layer ReSTIR baseline using identical scenes, ray/sample budgets, resolution, shading, and camera/occluder trajectories.

**Measure:** disocclusion reference error; temporal error and flicker; GPU frame p95 milliseconds; VRAM MiB; ray and sample counts; reproduction pass rate.

**Constraints:** Primary project abstract was read; full approximately 98 MB PDF could not be retrieved in this pass, so detailed implementation validation remains pending. The opened page links a paper and video but no source-code artifact; code availability and implementation license remain unverified. Do not publish a numeric rank from the abstract's qualitative performance claims. Separate quality-matched and time-matched comparisons and include thin surfaces, moving occluders, and fast camera motion.

**Priority rationale:** Relevant graphics research watchlist; requires full-paper review and an executable artifact before measured comparison.

**Sources:** [ST064](https://research.nvidia.com/labs/rtr/publication/hong2026multilayer/)

### Real-Time Level-of-Detail Rendering with ReSTIR

**paper · experimental · P3** · ID: restir-lod-paper

Surface-point correspondence maintains spatiotemporal sample reuse when geometry level-of-detail changes alter mesh topology.

**Stack layers:** Games, graphics & physics.

**Current signal:** SIGGRAPH 2026 paper; official page dated July 2026, exact publication day unverified.

**Test:** Compare the same renderer with baseline reservoir reuse and LoD-aware mapping on scripted camera/LoD transitions; keep meshes, lighting, sample budget, resolution, and reference images fixed.

**Measure:** GPU frame-time distribution; error against reference images; temporal error around LoD changes; memory per reservoir; transition artifact duration; mapping overhead.

**Constraints:** Requires consistent UV mappings across LoD representations; missing or degenerate mappings can disqualify the method. The paper implementation restricts an object to one LoD per frame; per-ray LoD is not established. The checked official page supplies a paper and video but no code link; a reproducible implementation still needs to be obtained or built.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX160](https://research.nvidia.com/labs/rtr/publication/wang2026levelofdetail/) · [RX161](https://research.nvidia.com/labs/rtr/publication/wang2026levelOfDetail/wang2026levelOfDetail.pdf)

### Taming Optimization Variance in Compact Neural Shading Networks

**paper · experimental · P3** · ID: neural-shading-variance-paper

Multi-instance training, selective pruning, and adaptive batch sizes reduce seed sensitivity when fitting compact neural material models.

**Stack layers:** Games, graphics & physics.

**Current signal:** SIGGRAPH 2026 paper; official page dated July 2026 and current training artifact checked.

**Test:** Fit identical materials with single-instance and multi-instance training at equal wall-time and final network size; repeat seeds and evaluate held-out views, difficult highlights, and runtime shading cost.

**Measure:** quality distribution across seeds; held-out reflectance error; training wall time; peak GPU memory; inference milliseconds; failure-to-quality-threshold rate.

**Constraints:** The checked artifact requires a Vulkan-capable NVIDIA GPU with Cooperative Vector support and compatible driver/toolchain. Keep final model capacity and training budget fixed; better training loss alone does not establish better rendered appearance. Source and paper configs are available, but no local training or rendering experiment was run.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX164](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/) · [RX165](https://research.nvidia.com/labs/rtr/publication/bitterli2026taming/bitterli2026taming.pdf) · [RX166](https://github.com/NVlabs/neuralappearance)

## WebAssembly & sandboxes (9)

### Wasmtime

**platform · established · P1** · ID: wasmtime

WebAssembly runtime with native code generation, embedding APIs, configurable resource limits, and WASI support.

**Stack layers:** Shared core & native boundaries; Plugins & process isolation.

**Current signal:** Current overview documents JIT/AOT execution, WASI, and multiple host-language embeddings.

**Test:** Run equivalent deterministic plugins behind an explicit capability interface, with fixed CPU/memory/output budgets; test malformed modules, infinite loops, memory growth, denied paths/network, blocked host I/O, and cancellation before throughput.

**Measure:** compile and instantiate milliseconds; host call microseconds; throughput; peak host RSS MiB; linear memory MiB; cancellation latency milliseconds; capability and limit-enforcement pass rate; trap correctness pass rate.

**Constraints:** Native execution is a performance control with a different isolation contract, so it cannot rank as an equivalent sandbox. Fuel and epoch interruption trade determinism for overhead; record the configured mechanism. Store memory limits apply per linear memory and are unlimited by default; also bound total host memory, instance count, outputs, and host work. Host capabilities and blocking APIs require their own validation and timeouts; a Wasm memory boundary does not enforce application permissions. Record compilation separately and pin stable runtime, interface, and binding versions; latest online API docs may track a development branch.

**Priority rationale:** Primary portable isolation candidate once capability, cancellation, and complete host-resource budgets are enforceable.

**Sources:** [RX088](https://wasmtime.dev/) · [RX089](https://github.com/bytecodealliance/wasmtime/releases) · [ST074](https://docs.wasmtime.dev/security.html) · [ST075](https://docs.wasmtime.dev/examples-interrupting-wasm.html) · [ST076](https://docs.rs/wasmtime/latest/wasmtime/struct.StoreLimitsBuilder.html)

### Windows AppContainer and LPAC

**platform · established · P1** · ID: appcontainer-lpac

Windows process isolation using package identities and explicit capabilities, including a stricter LPAC option for risky native helper work.

**Stack layers:** Plugins & process isolation.

**Current signal:** Official docs checked 2026-10-28 distinguish established AppContainer/LPAC APIs from the Win32 app-isolation preview requiring Windows 11 24H2+.

**Test:** Run the same public parser-helper contract as the Linux sandbox on supported Windows builds. Grant only input/output access and required IPC. Test filesystem, registry, network and inherited-handle denials, malformed requests, cancellation and broker authorization.

**Measure:** capability denial correctness; allowed workload success; broker validation coverage; startup overhead; cancellation latency; target OS compatibility.

**Constraints:** Windows platform APIs and SDK terms apply; this is not a separately licensed open-source runtime. AppContainer dates to Windows 8. Confirm LPAC behavior on each supported Windows target rather than assigning all APIs the same minimum. The separate Win32 app-isolation packaging wrapper remains preview in the opened docs and requires Windows 11 24H2+; keep that path watchlisted. File packaging and low integrity alone do not define the capability policy. Validate the broker and every shared handle. Native plugins running inside a privileged host retain that host boundary; isolate the execution itself where the product permits.

**Priority rationale:** Windows native-helper baseline when a small capability and broker contract is practical; the newer packaging wrapper is a separate preview experiment.

**Sources:** [ST154](https://learn.microsoft.com/en-us/windows/win32/secauthz/implementing-an-appcontainer) · [ST155](https://learn.microsoft.com/en-us/windows/win32/secauthz/app-isolation-overview)

### bubblewrap

**tool · established · P1** · ID: bubblewrap

Linux namespace sandbox construction tool for isolating untrusted helper processes under an explicit filesystem, network and IPC policy.

**Stack layers:** Plugins & process isolation.

**Current signal:** Version 0.13.0 observed on 2026-10-28; it uses mount_setattr on supporting kernels and tightens path argument handling.

**Test:** Run a public archive/parser worker with a minimal read-only runtime, explicit input, private scratch, no network and a narrow parent channel. Probe denied filesystem writes, unexpected inherited descriptors and network access. Check cancellation, output bounds and resource exhaustion.

**Measure:** forbidden capability denial; allowed workload correctness; sandbox setup failures; startup overhead; cancellation latency; resource-limit behavior.

**Constraints:** Linux only; current code uses unprivileged user namespaces. Distribution kernel policies can disable or restrict them. LGPL-2.1-or-later as documented by 0.12.0; pin 0.13.0 and the target distribution patch level. This builds a sandbox; it does not supply a complete safe policy. Do not use --not-a-security-boundary for an untrusted worker. A sandboxed helper cannot protect a host from native plugin code loaded inside the host process. Portable Wasm is a separate boundary option. Build flags that assume a kernel version can raise runtime requirements; test setup failure without falling back to unrestricted execution.

**Priority rationale:** Linux native-helper baseline when the application can enforce a minimal capability policy and fail closed; it is not a portable plugin runtime.

**Sources:** [ST151](https://github.com/containers/bubblewrap) · [ST152](https://github.com/containers/bubblewrap/releases/tag/v0.13.0) · [ST153](https://github.com/containers/bubblewrap/releases/tag/v0.12.0)

### Spin

**framework · emerging · P2** · ID: spin

WebAssembly application framework candidate for small portable services and composable plugin endpoints.

**Stack layers:** Plugins & process isolation.

**Current signal:** Spin 4.1 announcement dated 2026-08-26 documents final WASI 0.3 support and composable HTTP middleware.

**Test:** Implement the same HTTP transform and streaming task in Spin and a native service with matching limits.

**Measure:** cold start; p95/p99 latency; peak RSS; stream correctness.

**Constraints:** Framework and WASI versions must be pinned together. Compare the same networking and persistence semantics.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX114](https://spinframework.dev/blog/announcing-spin-4-1)

### WASI 0.3 and Component Model async

**method · emerging · P2** · ID: wasi-component-async

Portable component interfaces with native asynchronous operations for composable WebAssembly applications.

**Stack layers:** Shared core & native boundaries; Plugins & process isolation.

**Current signal:** Official releases identify WASI 0.3 as current; roadmap marks 0.3.0 and 0.3.1 shipped, while language and host coverage remains uneven.

**Test:** Build the same small cross-language plugin chain with pinned WIT versions and bindings; compare supported 0.2 and 0.3 host configurations for streaming, backpressure, cancellation, handle lifetime, and error propagation.

**Measure:** component call microseconds; stream throughput MiB/s; startup milliseconds; peak host RSS MiB; interface conformance pass rate; cross-host portability pass rate; cancellation and handle-lifetime pass rate.

**Constraints:** WASI 0.3 is current, but the release page says most other toolchains still target 0.2; support must be verified for each language and host. Wasmtime 46+ supports 0.3; jco's 0.3 Node.js shim is explicitly experimental and must not imply browser or production parity. The checked roadmap labels 0.3.2 planned; a past planned date is not proof that a release shipped. Record WIT package versions and actual implemented interfaces; a shared binary format does not guarantee identical filesystem/network/GPU capabilities. Do not conflate stable WASI 0.3 with a hypothetical fully standardized WASI 1.0.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX086](https://bytecodealliance.org/articles/WASI-0.3) · [RX087](https://wasi.dev/releases) · [ST077](https://wasi.dev/releases) · [ST078](https://wasi.dev/roadmap)

### Wasure: A Modular Toolkit for Comprehensive WebAssembly Benchmarking

**paper · experimental · P2** · ID: wasure-paper

A configurable runtime comparison toolkit that combines repeated execution, memory observation, feature checks, and benchmark diversity analysis.

**Stack layers:** Plugins & process isolation.

**Current signal:** 2026-02-05 preprint; a public Python toolkit and benchmark-management source were checked.

**Test:** Run one output-checked Wasm corpus across pinned engines and execution tiers; separate compile, instantiate, cold execution, and steady execution, with host-call-heavy and memory-heavy workloads.

**Measure:** complete-output parity; compile and instantiate milliseconds; cold and steady execution milliseconds; peak RSS and VMS MiB; required-feature pass rate.

**Constraints:** Paper describes Linux/macOS support with limited Windows support; verify the target OS and exact engine features. Upstream warns that package updates can remove results and installed runtimes unless stored separately; retain immutable experiment outputs. Toolkit availability does not establish a universal runtime winner; preserve per-workload results.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX138](https://arxiv.org/html/2602.05488v1) · [RX139](https://github.com/r-carissimi/wasure)

### containerd

**repository · established · P2** · ID: containerd

Container runtime building block for repeatable, isolated benchmark and build environments.

**Stack layers:** Builds & reproducibility.

**Current signal:** Official release policy documents a four-month minor-release cadence starting with v2.3 in April 2026.

**Test:** Launch the same pinned image and workload repeatedly with restricted resources and recorded host configuration.

**Measure:** cold start time; warm start time; runtime overhead; cleanup correctness.

**Constraints:** Containers share the host kernel; isolation requirements must be explicit. Keep image download time separate from process startup.

**Priority rationale:** Portable plugin execution needs a concrete capability and cancellation contract before runtime speed matters.

**Sources:** [RX113](https://containerd.io/releases/)

### GenWasym: Compiling WebAssembly Concolic Execution with Staging, Continuations, and Snapshots

**paper · experimental · P3** · ID: genwasym-paper

A staged concolic interpreter produces compiled executables and uses continuation snapshots to avoid repeatedly exploring common execution prefixes.

**Stack layers:** Plugins & process isolation.

**Current signal:** OOPSLA 2026 paper; current artifact record is v9 published 2026-09-22.

**Test:** Use identical Wasm programs and symbolic-input budgets to compare WASP, compiled execution without snapshots, unconditional snapshots, and heuristic reuse; retain path coverage and bug findings before evaluating time.

**Measure:** distinct feasible paths; bugs reproduced; total wall time including compilation; solver time; peak memory; snapshot storage and reuse overhead; timeout count.

**Constraints:** A downloadable Docker artifact is available; its documented environment was tested on Ubuntu 22.04, so verify target architecture and toolchain. Compilation costs, solver costs, and timeouts must remain in the end-to-end accounting. Do not generalize the paper benchmark suites to arbitrary Wasm features or production applications without feature and output checks.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX143](https://2026.splashcon.org/details/oopsla-2026/124/Compiling-WebAssembly-Concolic-Execution-with-Staging-Continuations-and-Snapshots) · [RX144](https://zenodo.org/records/22886998) · [RX145](https://zenodo.org/records/22886998/files/Readme.md?download=1)

### WarpL: Debugging Performance Issues in WebAssembly Runtimes via Mutation-based Inference

**paper · experimental · P3** · ID: warpl-paper

Mutation and machine-code comparison help localize inefficient instruction sequences in WebAssembly runtimes.

**Stack layers:** Plugins & process isolation.

**Current signal:** ICSE 2026 paper with arXiv v1 published 2026-04-15; public research artifact checked.

**Test:** Use retained, minimized runtime regressions with pinned compiler revisions; compare WarpL with profiling and reduction baselines on finding the responsible instructions and producing actionable diagnoses.

**Measure:** diagnosed regression count; localization precision; diagnosis wall time; mutants compiled and executed; human root-cause review time.

**Constraints:** Functionally similar mutants are diagnostic probes, not automatically semantics-preserving production fixes. The paper uses a small case-based evaluation and still requires developer root-cause analysis. Prototype source and experiment data are available; verify reuse licensing and dependencies before importing code.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX140](https://arxiv.org/html/2604.13693v1) · [RX141](https://github.com/BZTesting/WarpL)

## Storage & databases (5)

### Dexie / IndexedDB

**tool · established · P1** · ID: dexie

Typed IndexedDB wrapper for browser-local transactional data, queries and live-query subscriptions.

**Stack layers:** Browser extensions; Local storage & search.

**Current signal:** Dexie 4.4.7 was published October 19 with query, live-query, bulk-update and database-lifecycle fixes; local Dexie and cloud add-on versions have distinct contracts.

**Test:** Compare raw IndexedDB and Dexie for the same complete offline catalog and migration workload, with multiple tabs, interrupted transactions and quota failures.

**Measure:** transaction completion latency; full query result parity; migration/reopen success; write amplification and storage use; failure visibility and recovery.

**Constraints:** Catching a transaction error can accidentally make the operation commit; preserve rejection semantics. Do not hold IndexedDB transactions across unrelated asynchronous work. Browser quota/eviction and cloud synchronization are separate acceptance gates; preserve offline behavior.

**Priority rationale:** Compare raw IndexedDB and Dexie for the same complete offline catalog and migration workload, with multiple tabs, interrupted transactions and quota failures.

**Sources:** [ST009](https://github.com/dexie/Dexie.js/releases/tag/v4.4.7) · [ST010](https://dexie.org/docs/Tutorial/Best-Practices)

### RocksDB

**repository · established · P1** · ID: rocksdb

Embedded key-value engine candidate for high-volume caches, asset indexes, and local metadata stores.

**Stack layers:** Local storage & search.

**Current signal:** Opened current releases documenting asynchronous filesystem-read controls in the 11.8 series.

**Test:** Replay sustained manifest/cache key-value traces against redb and an SQLite key-value schema with equal durable acknowledgements. Include complete value/error checks, background compaction, constrained disk, process kills, restart and a separately specified machine-failure experiment.

**Measure:** full value and error parity; p95/p99 operation latency; write amplification; space amplification; background CPU and I/O; committed-write survival; recovery correctness.

**Constraints:** Compaction and durability settings strongly affect results. Include background work and sustained rather than burst throughput. WriteBatch is atomic inside the database, not across arbitrary extracted files and database state. Default asynchronous writes, sync writes and disabled WAL are different failure contracts. Process-crash survival must not be reported as machine-crash or power-loss survival.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX103](https://github.com/facebook/rocksdb/releases) · [ST125](https://github.com/facebook/rocksdb/wiki/Basic-Operations)

### SQLite

**repository · established · P1** · ID: sqlite

Embedded SQL storage for desktop catalogs, settings, test metadata, and offline tools.

**Stack layers:** Local storage & search.

**Current signal:** Release history lists SQLite 3.54.1 on 2026-10-16.

**Test:** Retain SQLite as the authoritative complete catalog control. Replay imports, FTS5/exact searches and interrupted writes with every metadata field and warning preserved; separately compare journal/durability modes and test external-content FTS consistency, backfill, rebuild and crash recovery.

**Measure:** full row and warning parity; p50/p95/p99 query latency; import throughput; commit-to-visible latency; database/index size; committed-write survival; recovery correctness.

**Constraints:** Fix durability and journal settings across comparisons. SQLite is maintained in Fossil; a GitHub mirror is not the canonical repository. External-content FTS indexes must stay synchronized; adding triggers alone does not backfill existing rows. The retained Rust storage lab used DELETE/FULL and measured process-level reopen/readback, not power-loss durability. Use a fixed durability contract; a faster relaxed-acknowledgement configuration is a separate cohort.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX092](https://www.sqlite.org/changes.html) · [ST117](https://www.sqlite.org/fts5.html) · [ST122](https://www.sqlite.org/releaselog/3_54_1.html)

### redb

**repository · emerging · P1** · ID: redb

Pure Rust embedded key-value store using copy-on-write B-trees for local transactional metadata.

**Stack layers:** Local storage & search.

**Current signal:** redb 4.4.0 was released on 2026-10-13; its changelog includes stable cursor APIs and value/type encoding changes.

**Test:** Replay persistent manifest/key-value traces against RocksDB and an SQLite key-value schema with equal durability acknowledgements. Preserve full values/errors, pin types and encoding, test savepoint/migration paths and inject failures during commit, reopen and recovery.

**Measure:** full value and error parity; p95/p99 operation latency; database size; peak RSS; committed-write survival; recovery correctness.

**Constraints:** Use supported stable APIs for the baseline. Do not translate upstream benchmark claims into Atlas rankings. Immediate and None durability have different persistence guarantees; record the selected mode. The 4.4.0 changelog includes type/encoding changes; pin schema and migration behavior instead of treating a version upgrade as transparent. A key-value store comparison does not replace SQL joins or FTS without equivalent application work.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX104](https://github.com/cberner/redb) · [ST123](https://docs.rs/crate/redb/latest/source/CHANGELOG.md) · [ST124](https://docs.rs/redb/latest/redb/enum.Durability.html)

### PostgreSQL

**repository · established · P2** · ID: postgresql

Relational server baseline for shared catalogs, transactional metadata, and multi-user ranking services.

**Stack layers:** Local storage & search; APIs & shared services.

**Current signal:** Official release page announces PostgreSQL 19 RC1 dated 2026-10-15; do not treat it as GA.

**Test:** Run identical catalog transactions and search requests under concurrent clients; verify committed data after restart.

**Measure:** transaction throughput; p95/p99 latency; recovery time; incorrect results.

**Constraints:** Server deployment cost differs from embedded databases. PostgreSQL 19 RC1 is a prerelease; benchmark stable and prerelease lanes separately.

**Priority rationale:** Complete imports, indexed reads and crash recovery directly serve Atlas-style local catalogs and archives.

**Sources:** [RX093](https://www.postgresql.org/docs/release/)

## Analytics & data formats (7)

### DuckDB

**repository · established · P1** · ID: duckdb

Embedded analytical SQL engine for querying benchmark runs, telemetry, and large local files.

**Stack layers:** Analytics & result formats.

**Current signal:** DuckDB 2.0.0 LTS was announced on 2026-10-21 with asynchronous I/O and other major features.

**Test:** Build an analytical read model from immutable committed catalog snapshots and retained experiment data. Compare equivalent complete SQL outputs with Polars/DataFusion under memory pressure, cancellation and cold/warm caches; keep embedded deployment and any Quack service configuration in separate cohorts.

**Measure:** full query-result parity; query geometric mean; p95 query latency; peak RSS; bytes read and spilled; cancellation latency; snapshot freshness.

**Constraints:** Validate result equivalence before measuring speed. Separate filesystem cache effects and extension versions. Native embedded concurrency rules differ from DuckDB 2.0 Quack client/server multi-process writing. Treat analytical snapshots as derived data unless a separate transactional-authority workload is established. Concurrent write conflicts and cancellation must preserve complete errors rather than partial successful output.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX094](https://duckdb.org/2026/10/21/announcing-duckdb-200) · [ST126](https://duckdb.org/docs/2.0/connect/concurrency)

### Polars

**repository · established · P1** · ID: polars

DataFrame and SQL engine for typed local data transformations and memory-bounded analytical pipelines.

**Stack layers:** Analytics & result formats.

**Current signal:** Polars 2.1 was announced on 2026-10-27; out-of-core group-by and recursive CTE support are documented.

**Test:** Execute identical complete catalog/telemetry transformations against DuckDB and DataFusion, including joins, nulls, Unicode, high-cardinality groups and data larger than RAM. Record physical plans, actual streaming/fallback behavior, cancellation and output schema/order requirements.

**Measure:** full output and error parity; wall time; peak RSS; spill bytes; cancellation latency; physical-plan/fallback coverage.

**Constraints:** Do not compare eager and lazy implementations without describing the difference. Control row-order requirements and available memory. A requested streaming engine can still fall back to in-memory operations; inspect and retain the actual physical plan. A faster partial projection is not comparable with a complete metadata output. DataFrame transforms are not a replacement for an authoritative transactional installation catalog.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX095](https://pola.rs/posts/polars-2-1-changelog/) · [ST127](https://docs.pola.rs/user-guide/concepts/streaming/)

### Apache DataFusion

**framework · established · P2** · ID: apache-datafusion

Rust query engine toolkit for embedding SQL and custom analytical operators in engineering tools.

**Stack layers:** Analytics & result formats.

**Current signal:** DataFusion 55.0.0 release documents range partitioning, MERGE INTO planning, and runtime pruning.

**Test:** Embed a fixed SQL workload in a Rust tool; compare default and custom physical operators with reproducible inputs.

**Measure:** query latency; peak RSS; startup time; extension complexity.

**Constraints:** A toolkit needs application integration; compare whole deployed implementations. Lock optimizer configuration and spill backends.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX096](https://datafusion.apache.org/blog/output/2026/08/25/datafusion-55.0.0/)

### Apache Iceberg

**repository · established · P2** · ID: apache-iceberg

Table-format candidate for versioned benchmark datasets and interoperable analytical storage.

**Stack layers:** Analytics & result formats.

**Current signal:** Official release notes list Iceberg 1.12.0 released on 2026-09-29.

**Test:** Write and evolve equivalent datasets across two engines, then test snapshot reads, schema changes, and interrupted commits.

**Measure:** read/write throughput; metadata growth; compatibility failures; recovery correctness.

**Constraints:** A table format is not a query engine. Track format version and engine connector compatibility separately.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX098](https://iceberg.apache.org/releases/)

### ClickHouse

**repository · established · P2** · ID: clickhouse

Column-oriented analytical database candidate for larger telemetry and benchmark-result services.

**Stack layers:** Analytics & result formats.

**Current signal:** ClickHouse 26.9 release highlights incremental materialized-view refreshes and DISTINCT spilling.

**Test:** Import the same time-series and event datasets, then measure aggregate queries at fixed resource budgets.

**Measure:** ingest rows/s; p95 query latency; compressed size; CPU-seconds/query.

**Constraints:** Keep single-node and distributed results separate. Materialized views change ingestion cost and freshness guarantees.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX097](https://clickhouse.com/blog/clickhouse-release-26-09)

### Vortex columnar format

**repository · emerging · P2** · ID: vortex

Compressed columnar format candidate for local analytical files and fast selective scans.

**Stack layers:** Analytics & result formats.

**Current signal:** Official 2026-10-21 integration post documents Vortex as a DuckDB core extension on Linux and macOS.

**Test:** Store identical telemetry in Vortex, Parquet, and a native database; verify results before cold and warm scans.

**Measure:** compressed size; scan latency; decode CPU; cross-version readability.

**Constraints:** Match encodings, compression effort, and projected columns. Frozen format editions and draft extensions have different compatibility guarantees.

**Priority rationale:** Saved experiment results make a realistic controlled corpus for equivalent analytics and memory-pressure tests.

**Sources:** [RX131](https://spiraldb.com/blog/duckdb-and-vortex) · [RX132](https://docs.vortex.dev/specs/file-format)

### Zstandard

**repository · established · P2** · ID: zstandard

Lossless compression control for asset transport and cached metadata, including explicitly versioned dictionaries for correlated small records.

**Stack layers:** Files, hashing & archives.

**Current signal:** No latest stable version is asserted: the opened release index showed 1.5.7 while the development changelog contained a later 1.6.0 heading.

**Test:** Compare no compression, the existing codec and pinned Zstandard settings over the same public archives and metadata. Measure compression plus transfer plus decoding and final verification, including dictionary distribution, memory caps, cancellation and truncated inputs.

**Measure:** byte-for-byte round-trip parity; total wall time; transferred bytes; compression and decoding CPU; peak RSS; dictionary bytes; failure and cancellation latency.

**Constraints:** Do not rank only compression throughput or omit decoder and dictionary costs. A missing or mismatched dictionary is a recovery case; persist its identity with the artifact. The retrieved release index and development changelog disagreed about later versions; resolve an exact released artifact before measurement.

**Priority rationale:** Use a complete round-trip and deployment cost comparison before changing an asset format.

**Sources:** [ST099](https://facebook.github.io/zstd/) · [ST100](https://github.com/facebook/zstd/blob/dev/README.md) · [ST101](https://github.com/facebook/zstd/releases) · [ST102](https://github.com/facebook/zstd/blob/dev/CHANGELOG)

## Durable workflows (5)

### Journaled staged installation

**method · experimental · P1** · ID: journaled-staged-install

Proposed install protocol combining private staging, verified manifests, recoverable intent records and explicit commit/rollback boundaries.

**Stack layers:** Files, hashing & archives; Signed distribution & updates; Background work & recovery.

**Current signal:** This is an Atlas experiment proposal derived from documented Windows primitives; no implementation, benchmark or durability proof is claimed.

**Test:** Specify and model a staged-install state machine, then fault-inject each write, verification, journal, replacement and cleanup boundary on disposable public fixtures. Recover to a fully described old or new version, preserve conflicts and warnings, and compare filesystem plus catalog state after restart.

**Measure:** committed-version integrity; recoverable old/new state; untracked partial-file count; conflict and warning preservation; recovery time; peak staging disk; cancellation latency.

**Constraints:** ReplaceFileW is a same-volume single-file primitive, not a multi-file atomic transaction. FlushFileBuffers does not alone establish power-loss durability; process-kill, OS crash and power-loss claims require separate evidence. Define locked-file behavior, reparse/rename races, concurrent writers, journal corruption and cross-volume fallback before any rollout. Microsoft recommends alternatives to new reliance on TxF; this protocol remains planned and unvalidated.

**Priority rationale:** Failure-safe installation and preservation of complete state are gates for every extraction or delta-transfer optimization.

**Sources:** [ST118](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-replacefilew) · [ST119](https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-flushfilebuffers) · [ST120](https://learn.microsoft.com/en-us/windows/win32/fileio/deprecation-of-txf) · [ST121](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file)

### Recoverable Manifest V3 jobs

**method · established · P1** · ID: mv3-durable-lifecycle

Persisted job/state-machine design for extension workers that may terminate and later restart.

**Stack layers:** Browser extensions; Background work & recovery.

**Current signal:** Current Chrome docs require resilience to worker termination; offscreen documents have explicit reasons, permissions and a restricted extension API surface.

**Test:** Terminate the worker and native connection at each job transition, then reopen the UI and verify the complete outcome, progress, warnings, retry state and cancellation.

**Measure:** lost/duplicated operations; correct state after restart; time to resume or cancel; complete result persistence; idle CPU and retained memory.

**Constraints:** Global worker variables do not survive shutdown. An offscreen document is not a general permanently running background page; document its permitted reason and lifecycle. Keep idempotent job IDs and committed state separate from UI-only progress; test minimum supported browsers.

**Priority rationale:** Terminate the worker and native connection at each job transition, then reopen the UI and verify the complete outcome, progress, warnings, retry state and cancellation.

**Sources:** [ST024](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle) · [ST025](https://developer.chrome.com/docs/extensions/reference/api/offscreen)

### DBOS

**framework · emerging · P2** · ID: dbos

PostgreSQL-backed durable workflows for recoverable Python and TypeScript engineering pipelines.

**Stack layers:** Background work & recovery.

**Current signal:** September update announces Python v3.0, TypeScript v5.0, and improved fair queueing.

**Test:** Use the same failure-injected processing pipeline with an existing PostgreSQL instance and bounded concurrency.

**Measure:** completed jobs/s; p95 step overhead; recovery correctness; database growth.

**Constraints:** Include PostgreSQL operations in resource accounting. The documented major-version upgrade has directional compatibility constraints.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX107](https://www.dbos.dev/blog/whats-new-in-dbos-september-2026)

### Restate

**platform · emerging · P2** · ID: restate

Durable execution system candidate for resumable services and recoverable multi-step tooling tasks.

**Stack layers:** Background work & recovery.

**Current signal:** Shared-log architecture reviewed against the primary article; no unverified 2026 release number is asserted.

**Test:** Implement the same crash-injected task pipeline as Temporal and DBOS, including idempotent external writes.

**Measure:** completion correctness; recovery time; p95 task overhead; storage growth.

**Constraints:** Replay and external side effects must be tested separately. The opened shared-log architecture article is dated 2025, despite a newer date in a search index.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX106](https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications)

### Temporal

**platform · established · P2** · ID: temporal

Durable execution platform candidate for recoverable test orchestration and long-running evaluation jobs.

**Stack layers:** Background work & recovery.

**Current signal:** Official changelog lists Standalone Activities GA on 2026-09-15.

**Test:** Run a multi-step benchmark pipeline with worker crashes, retries, duplicate delivery, and version upgrades.

**Measure:** completion correctness; duplicate side effects; recovery time; CPU/storage per job.

**Constraints:** Activities can repeat; external effects need explicit idempotency. Separate managed-cloud and self-hosted measurements.

**Priority rationale:** Adoption depends on a real recovery need; compare against a simple durable queue before adding operational dependencies.

**Sources:** [RX105](https://temporal.io/changelog)

## Profiling & observability (6)

### Perfetto

**tool · established · P1** · ID: perfetto

Trace capture and local analysis suite for diagnosing application scheduling, memory, and cross-process performance.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** The latest release announcement visible in the official blog index remains v58.2, dated 2026-08-24, as checked 2026-10-28; pin capture, processor and UI revisions independently.

**Test:** Capture a public UI-to-worker import/cancel flow with stable correlation IDs. Compare in-process traces with available target-OS system probes, validate clock alignment, and diagnose seeded queue/scheduling/memory regressions from saved traces.

**Measure:** capture overhead; trace/event loss; clock alignment error; trace parse p95; peak analyzer memory; seeded-regression diagnosis.

**Constraints:** Apache-2.0. In-process SDK mode supports Android, Linux, macOS and Windows; Linux/Android system probes are not interchangeable with portable custom events. A merged timeline requires valid clock relationships and compatible capture configurations; visual overlap does not establish causal ordering. Pin trace producer, processor and UI versions and retain raw traces. A current hosted UI is not a stable experiment identifier. Compare equal event scopes and measure instrumentation overhead before claiming an application speedup.

**Priority rationale:** Baseline cross-process trace and memory investigation layer; use Tracy for complementary frame/zone detail when its integration is practical.

**Sources:** [RX111](https://perfetto.dev/blog/perfetto-v58) · [ST195](https://perfetto.dev/blog/perfetto-v58) · [ST196](https://perfetto.dev/blog/) · [ST197](https://perfetto.dev/docs/instrumentation/tracing-sdk) · [ST198](https://github.com/google/perfetto)

### Tracy Profiler

**tool · established · P1** · ID: tracy

CPU, GPU, allocation, and synchronization profiler for games and interactive engineering applications.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Tracy 0.14.1 is the current observed release on 2026-10-28; it drops loading pre-0.11 traces and documents allocation/manual-lifetime instrumentation requirements.

**Test:** Instrument the same public frame/import/cancel workload and compare disabled instrumentation, enabled capture and system-only tracing. Pin client/viewer versions, graphics backend and event scope. Inject known stalls and allocation contention to measure diagnosis quality.

**Measure:** frame-time overhead p95; import throughput overhead; trace/event loss; trace bytes; known-stall identification; capture compatibility.

**Constraints:** BSD-3-Clause. Native graphics and system-tracing coverage depends on OS, GPU API and binding; validate the selected Windows/macOS/Linux target rather than assuming parity. Direct C/C++/Lua/Python/Fortran integration and third-party language bindings have different maintenance and coverage. Version 0.14.1 drops loading pre-0.11 traces; preserve compatible viewers with long-lived evidence. Profiler overhead, on-demand boundaries and allocation instrumentation requirements must be included in the experiment.

**Priority rationale:** Conditional frame/zone profiling baseline for native interactive code; Perfetto remains the complementary cross-process and system timeline control.

**Sources:** [RX110](https://github.com/wolfpld/tracy/blob/master/README.md) · [ST192](https://github.com/wolfpld/tracy/releases) · [ST193](https://github.com/wolfpld/tracy) · [ST194](https://github.com/wolfpld/tracy/blob/master/LICENSE)

### rr record and replay

**tool · established · P1** · ID: rr

Linux execution recording and replay debugger for reproducing native process-tree failures and inspecting execution backward with GDB.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** The current release list marks 5.10.0 Latest as checked 2026-10-28; notes cover CONFIG_PROC_MEM_FORCE_PTRACE and Intel hybrid cores.

**Test:** Record a public native import worker with seeded intermittent cancellation and process-tree faults, then replay the same failure repeatedly. Compare diagnosis time and capture overhead with ordinary logs; include the intended Linux host or VM hardware-counter configuration.

**Measure:** failure replay rate; capture overhead; trace bytes; diagnosis time; recording compatibility; replay determinism.

**Constraints:** Linux kernel 4.7+ in the README, with supported CPU microarchitectures and hardware performance counters; VM support requires counter virtualization. MIT core with additional bundled component/test notices. Read the pinned artifact license inventory before redistribution. A captured execution is not all possible schedules. Replay does not prove race freedom or cover Windows/macOS execution behavior. The recorded runtime may perturb timing; preserve both failing trace and uninstrumented reproduction evidence.

**Priority rationale:** Conditional Linux diagnosis baseline when hardware and kernel requirements are met; complement portable assertions and target-OS integration tests.

**Sources:** [ST163](https://github.com/rr-debugger/rr) · [ST164](https://github.com/rr-debugger/rr/releases/tag/5.10.0) · [ST165](https://github.com/rr-debugger/rr/releases) · [ST166](https://github.com/rr-debugger/rr/blob/master/LICENSE)

### Grafana Beyla

**tool · established · P2** · ID: grafana-beyla

Linux eBPF instrumentation candidate for collecting service metrics and traces without modifying application code.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Opened documentation distinguishes RED metrics coverage from tracing limitations and SDK coexistence.

**Test:** Measure identical HTTP/gRPC services with no instrumentation, Beyla, and explicit OpenTelemetry SDK instrumentation.

**Measure:** CPU overhead; p99 latency overhead; span coverage; dropped events.

**Constraints:** Linux support and tracing limitations constrain applicability. Avoid duplicate spans when SDK instrumentation already exists.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX109](https://grafana.com/docs/beyla/latest/)

### OpenTelemetry Collector and OTTL

**framework · established · P2** · ID: opentelemetry-ottl

Vendor-neutral telemetry collection and transformation for consistent benchmark traces, metrics, and logs.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** OTTL v1 was announced on 2026-10-27; stable traces, metrics, and logs support begins with contrib v0.164.0.

**Test:** Replay a fixed telemetry corpus through equivalent filtering, redaction, and export configurations.

**Measure:** events/s; CPU per event; dropped events; end-to-end latency.

**Constraints:** OTTL v1 stability excludes explicitly experimental features. Validate semantic equivalence and sensitive-field redaction before throughput scoring.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX108](https://opentelemetry.io/blog/2026/ottl-v1/)

### RenderDoc

**tool · established · P2** · ID: renderdoc

Frame-capture graphics debugger for inspecting rendering state, resources, and draw calls in supported APIs.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Opened canonical README documenting frame capture and supported graphics APIs.

**Test:** Capture owned reference scenes with seeded rendering faults and score diagnosis accuracy and capture compatibility.

**Measure:** capture success rate; fault localization accuracy; capture overhead; artifact size.

**Constraints:** Debug only supported applications and graphics APIs. Frame-debugger capability is not directly comparable to continuous CPU profiling.

**Priority rationale:** Reliable diagnosis and its overhead should precede a performance rewrite.

**Sources:** [RX112](https://github.com/baldurk/renderdoc)

## Testing & verification (18)

### Ajv standalone schema validation

**tool · established · P1** · ID: ajv-standalone

JSON Schema validation compiled at build time for strict-CSP runtimes and explicit data contracts.

**Stack layers:** Shared core & native boundaries; Browser extensions; Testing, profiling & correctness.

**Current signal:** Ajv 8.20.0 was published April 24, 2026. Standalone generation can move schema compilation out of the runtime while preserving the declared validation configuration.

**Test:** Compare full-diagnostic validation of the same trusted schemas and adversarial messages with pinned Ajv standalone and the current validator under the target CSP.

**Measure:** complete error/result equivalence; cold import and validation time; bundle bytes including runtime helpers; peak memory; invalid-input worst-case cost.

**Constraints:** Boolean-only checks are not equivalent to full diagnostic and transformation outputs. Generated modules can retain runtime helper dependencies; include them in bundle measurements. Schema authors and formats are a trust boundary; assess regex worst cases and do not relax CSP to enable code generation.

**Priority rationale:** Compare full-diagnostic validation of the same trusted schemas and adversarial messages with pinned Ajv standalone and the current validator under the target CSP.

**Sources:** [ST015](https://github.com/ajv-validator/ajv/releases/tag/v8.20.0) · [ST016](https://ajv.js.org/standalone.html) · [ST017](https://ajv.js.org/security.html)

### Hypothesis

**framework · established · P1** · ID: hypothesis

Property-based testing for Python parsers, serializers, transformation pipelines, and stateful tools.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Opened current documentation describing generated inputs and edge-case exploration.

**Test:** Use seeded parser and state-machine defects; compare discovered bugs and minimized counterexamples under equal budgets.

**Measure:** unique defects found; time to first failure; counterexample size; reproducibility.

**Constraints:** Properties and generators determine test effectiveness. Report seeded and naturally occurring failures separately.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX115](https://hypothesis.readthedocs.io/en/latest/)

### Loom

**tool · established · P1** · ID: loom

Rust concurrency permutation tester for small synchronization components, with explicit modeling and memory-model limitations.

**Stack layers:** Files, hashing & archives; Testing, profiling & correctness.

**Current signal:** Published docs show Loom 0.7.2 as checked 2026-10-28; its limitations remain material to interpreting any test outcome.

**Test:** Model a small cancel/publish state machine and bounded work queue using Loom primitives. Assert one terminal state, no publication after cancel and no lost wakeup. Seed known defects, record explored schedules and bounds, then rerun ordinary OS integration tests.

**Measure:** seeded bug detection; invariant failures; explored schedules; execution time; peak memory; instrumented operation coverage.

**Constraints:** MIT. This is a host-side Rust test dependency, not a runtime sandbox or a claim of identical OS scheduler behavior. Every relevant dependency and synchronization operation must use modeled primitives; uninstrumented operations are invisible. Upstream documents missed relaxed-memory/load-buffering executions and possible SeqCst false alarms. A passing run is not a general proof. Preemption bounds and maximum threads limit coverage; include them in the result and retain failing schedules.

**Priority rationale:** Baseline targeted check for small Rust concurrency primitives where comprehensive instrumentation is feasible; use with sanitizers and real-platform tests.

**Sources:** [ST167](https://docs.rs/loom/0.7.2/loom/) · [ST168](https://github.com/tokio-rs/loom)

### Playwright

**tool · established · P1** · ID: playwright

Browser automation and testing toolkit for cross-browser application verification, traces, and repeatable interaction workflows.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** The release notes describe Playwright 1.64 WebMCP APIs and test-order shuffling.

**Test:** Validate the same application flows across Chromium, Firefox, and WebKit with fixed browser versions and trace collection.

**Measure:** workflow pass rate; flaky failure rate; suite seconds; trace diagnostic usefulness; cross-browser defect count; flake rate; wall time; fault detection; trace usefulness.

**Constraints:** Experimental browser APIs require feature flags and separate labeling. Test quality and determinism matter more than raw suite speed. Browser binaries are part of the test version. Retries must not hide first-attempt failures.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX091](https://playwright.dev/docs/release-notes)

### Ruff

**tool · established · P1** · ID: ruff

Python linter and formatter implemented in Rust, with caching, automated fixes, and editor integration.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Current documentation lists Python 3.15 compatibility.

**Test:** Evaluate matched lint rules and formatting policy against a labeled Python corpus and existing baseline tools.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; diagnostic recall; safe-fix regression count.

**Constraints:** Formatter parity is not identical to rule parity. Record preview rules and exclude them from stable comparisons.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX066](https://docs.astral.sh/ruff/)

### Zod

**tool · established · P1** · ID: zod

TypeScript-first runtime schemas with inferred types, parsing and structured validation errors.

**Stack layers:** Shared core & native boundaries; Browser extensions; Testing, profiling & correctness.

**Current signal:** Zod 4.6.7 was published October 12; the 4.6 series adds boolean validation and externally generated parser installation. Those modes have different output contracts.

**Test:** Compare Zod and generated JSON Schema validators with identical accepted/rejected inputs, transformations, unknown-key policy and complete diagnostics before timing.

**Measure:** accepted/rejected set equivalence; complete error and transformed-output parity; typecheck/build cost; cold startup and runtime latency; recursive-input memory retention.

**Constraints:** Boolean validate() omits error construction and is a separate workload from safeParse(). fromJSONSchema remains documented as experimental; conversion can lose unsupported semantics. Generated parser installation must return the same transformed object and honor a strict CSP.

**Priority rationale:** Compare Zod and generated JSON Schema validators with identical accepted/rejected inputs, transformations, unknown-key policy and complete diagnostics before timing.

**Sources:** [ST018](https://github.com/colinhacks/zod/releases/tag/v4.6.7) · [ST019](https://zod.dev/blog/zod-4-6) · [ST020](https://zod.dev/json-schema)

### cargo-nextest

**tool · established · P1** · ID: cargo-nextest

Rust test runner candidate for isolated parallel execution, test selection, and reproducible CI feedback.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Current changelog lists 0.9.150 on 2026-10-26, including a portable-recording security fix.

**Test:** Run the same Rust suite with cargo test and nextest at fixed concurrency; include intentionally flaky and slow tests.

**Measure:** suite wall time; flake visibility; peak RSS; failure isolation.

**Constraints:** Report first-run compilation separately. Use a patched release when importing run recordings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX120](https://www.nexte.st/changelog/)

### diffoscope

**tool · established · P1** · ID: diffoscope

Recursive artifact comparison tool that exposes differences inside archives, executables and package formats to diagnose non-reproducible builds.

**Stack layers:** Builds & reproducibility.

**Current signal:** Release 335 was published 2026-10-23; checked 2026-10-28. Its release change is a PDF-tool naming compatibility fix, not a new performance result.

**Test:** Compare two independent builds of public ZIP, PE/ELF, asar and Wasm fixtures after raw digest checks. Seed timestamps, path leakage, reordered metadata and a real code change. Record which differences the pinned toolchain explains and its resource costs.

**Measure:** seeded difference detection; unexplained difference count; comparison time; peak memory; report completeness; raw digest agreement.

**Constraints:** GPL-3.0-or-later; canonical source is hosted on Debian Salsa, so no GitHub popularity score should be invented. Format support depends on installed external tools. Pin those tools and report unavailable parsers. It diagnoses differences; it neither creates reproducible builds nor proves application equivalence. Run comparisons of untrusted archives with output, memory, time and decompression limits; retain raw hashes beside readable reports.

**Priority rationale:** Baseline diagnostic companion to independent rebuilds; choose it for explainable artifact differences, not as a substitute for a controlled build.

**Sources:** [ST161](https://diffoscope.org/) · [ST162](https://diffoscope.org/news/diffoscope-335-released/)

### AFL++

**tool · established · P2** · ID: aflplusplus

Coverage-guided fuzzing candidate for native file parsers, archive readers, codecs, and import pipelines.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Checked 2026-10-28: README distinguishes release 5.03c from GitHub 5.04a. Current stable licensing is AGPL-3.0-or-later with individual Apache-2.0 files; inspect the chosen tag separately.

**Test:** Fuzz public manifest, archive and binary-format fixture parsers with fixed seed corpora, dictionaries, sanitizers and equal CPU-hour budgets. Compare patched and deliberately flawed controls, deduplicate root causes, and preserve minimized reproductions plus compiler/fuzzer digests.

**Measure:** confirmed unique defects; seeded bug detection; time-to-defect distribution; coverage growth; reproduction rate; harness false positives.

**Constraints:** Current stable tree says AGPL-3.0-or-later overall and Apache-2.0 for harness-compiled parts; this does not automatically describe every historical release. Record exact file/tag notices. Linux is the baseline host. macOS is documented with mode/toolchain restrictions; do not claim identical coverage or speed. Development 5.04a, release 5.03c and moving container tags are distinct experiment identities. Deduplicate crashes by confirmed root cause, include multiple fixed random seeds, and report censored runs; raw crash count is not quality. Use owned/public fixture parsers and bound resource use; a passing fuzz campaign does not prove absence of defects.

**Priority rationale:** Baseline coverage-guided native parser fuzzing after a useful harness is established; compare exact toolchains and licensing before adopting development builds.

**Sources:** [RX122](https://github.com/AFLplusplus/AFLplusplus) · [ST199](https://github.com/AFLplusplus/AFLplusplus) · [ST200](https://github.com/AFLplusplus/AFLplusplus/blob/stable/LICENSING.md) · [ST201](https://github.com/AFLplusplus/AFLplusplus/blob/stable/docs/INSTALL.md)

### Biome

**tool · established · P2** · ID: biome

Integrated formatter and linter with expanding language support and configurable analysis rules.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Biome 2.6 announcement dated 2026-10-15 adds Markdown, YAML, and SCSS support; JavaScript plugins are preview.

**Test:** Compare a shared rule subset and complete formatting corpus with ESLint, Prettier, and Oxc.

**Measure:** analysis seconds; peak RSS MiB; diagnostic precision; safe-fix regression count; format idempotence rate.

**Constraints:** Preview plugins must be separated from stable features. Do not count unimplemented rules as passing.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX063](https://biomejs.dev/blog/)

### Criterion.rs

**tool · established · P2** · ID: criterion-rs

Statistical Rust microbenchmarking for detecting regressions in parsers, indexing, and core algorithms.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Opened canonical repository documenting statistical regression detection and stable Rust support.

**Test:** Measure known controlled slowdowns across repeated clean runs and compare sensitivity with false-alarm rate.

**Measure:** effect-size accuracy; confidence interval width; false-positive rate; run cost.

**Constraints:** Microbenchmarks do not replace end-to-end workloads. Control thermal state, CPU frequency, background load, and compiler settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX121](https://github.com/criterion-rs/criterion.rs)

### DedupBench

**benchmark · emerging · P2** · ID: dedupbench

Research harness for comparing chunkers, fingerprints and SIMD configurations before integrating a delta-storage pipeline.

**Stack layers:** Files, hashing & archives.

**Current signal:** The opened repository includes 2026 vectorized-chunking publication notices and links the FAST 2025 VectorCDC work; no reported speedup is imported.

**Test:** Use pinned benchmark implementations as research instruments, matching chunk-size targets and separately comparing scalar/SIMD variants of the same algorithm. Extend findings to full reconstruction and transfer on public asset revisions before considering any deployment decision.

**Measure:** boundary equivalence within algorithm; chunk-size distribution; deduplication ratio; CPU time; metadata bytes; full reconstruction time; architecture coverage.

**Constraints:** Benchmark-only chunking throughput does not rank a complete download or installation pipeline. Record CPU instruction support, compiler flags and fallback paths; Windows deployment integration is a separate gate. The README lists 2026 follow-up papers, but exact publication dates and inaccessible full texts must not be inferred.

**Priority rationale:** Provides diverse algorithm controls and architecture checks without pretending a microbenchmark is a product result.

**Sources:** [ST096](https://github.com/UWASL/dedup-bench) · [ST097](https://www.usenix.org/conference/fast25/presentation/udayashankar)

### Jepsen

**framework · established · P2** · ID: jepsen

Failure-injection and consistency-testing framework for databases, queues, and durable execution services.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Jepsen news records 0.3.15 on 2026-10-16 and a checker-correctness fix.

**Test:** Record client histories while applying process crashes, network partitions, and clock faults to an isolated service.

**Measure:** consistency violations; acknowledged data loss; recovery time; availability under faults.

**Constraints:** Passing a bounded campaign does not prove universal safety. Pin checker versions because the checker can contain bugs.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX118](https://jepsen.io/)

### TLA+ and TLC

**tool · established · P2** · ID: tla-tlc

Finite-state modeling and model checking for synchronization, queues, and transactional workflow invariants.

**Stack layers:** Signed distribution & updates; Testing, profiling & correctness; Background work & recovery.

**Current signal:** Opened TLC documentation describing explicit-state verification of TLA+ models.

**Test:** Model staged installation, cancellation, crash/recovery and concurrent conflicting writers before implementation. Check that a committed catalog points only to verified content, recovery preserves an old or new usable version, and garbage collection cannot delete content referenced by active or recoverable generations.

**Measure:** counterexamples found; states explored; verification time; model/implementation agreement; fault-boundary coverage.

**Constraints:** A checked finite model is not a proof of every implementation or unbounded configuration. Record model assumptions and bounds. Model the filesystem guarantees actually available, including single-file replacement scope and failure at every journal boundary. Liveness depends on stated fairness/retry assumptions; a finite successful run does not prove unbounded recovery. Retain the model, bounds and counterexamples alongside later fault-injection traces.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX117](https://www.docs.tlapl.us/using:tlc:start)

### Testcontainers

**framework · established · P2** · ID: testcontainers

Disposable real-service dependencies for repeatable local and CI integration tests.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Opened official guide explaining lifecycle-managed real-service containers for integration testing.

**Test:** Create isolated database fixtures for the same integration suite; compare startup, cleanup, and cross-run interference.

**Measure:** fixture startup time; suite wall time; flake rate; resource leaks.

**Constraints:** Each language implementation has separate capabilities and versions. Containerized services still need production-relevant settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX119](https://testcontainers.com/guides/introducing-testcontainers/)

### Vitest

**tool · established · P2** · ID: vitest

JavaScript and TypeScript test runner with multiple worker pools, environments, and browser execution modes.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Vitest 5 announcement includes a reference-app benchmark matrix across worker pools and environments.

**Test:** Run the same meaningful application tests across supported runners with identical isolation, environment, and coverage settings.

**Measure:** suite seconds; incremental test milliseconds; peak RSS MiB; flaky failure rate; coverage agreement.

**Constraints:** Disabling isolation changes semantics and must be labeled. Do not compare different test counts or mock environments.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX090](https://vitest.dev/blog/vitest-5)

### fast-check

**framework · established · P2** · ID: fast-check

Property-based testing for JavaScript and TypeScript data handling and asynchronous state transitions.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** Maintainer blog documents fast-check 4.10.0 on 2026-09-13 and migration work toward v5.

**Test:** Exercise the same serialization and state-machine contracts as the Python lane with equivalent seeded defects.

**Measure:** unique defects found; failure discovery time; shrink quality; test runtime.

**Constraints:** Compare equivalent properties rather than raw generated-case counts. Pin plugin APIs and preserve replay seeds.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX116](https://fast-check.dev/blog/)

### ty

**tool · emerging · P2** · ID: ty

Python type checker and language server implemented in Rust, with incremental analysis and editor diagnostics.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** The 2026-10-13 uv integration announcement still describes work toward ty's stable release.

**Test:** Compare ty, mypy, and Pyright on the same typed projects and a labeled defect suite.

**Measure:** cold check seconds; incremental milliseconds; peak RSS MiB; diagnostic precision; diagnostic recall.

**Constraints:** A faster checker is not better if it misses relevant defects. Pin stubs, dependency environments, and strictness settings.

**Priority rationale:** First establish that the method catches known defects while preserving complete results; then measure execution cost.

**Sources:** [RX067](https://docs.astral.sh/ty/) · [RX065](https://astral.sh/blog/uv-ty-integration)

## Software supply chain (11)

### DOMPurify

**tool · established · P1** · ID: dompurify

DOM-based sanitization for untrusted rich HTML, SVG and MathML using an explicit content policy.

**Stack layers:** Browser extensions; Large collections & interaction.

**Current signal:** DOMPurify 3.4.17 was published October 12 with fixes around in-place sanitization, shadow roots and XHTML/SMIL handling.

**Test:** Replay permitted rich-content fixtures and malicious parser/context cases through the complete render pipeline, including downstream transforms and browser differences.

**Measure:** executable-content rejection; required text/media/link preservation; policy and warning parity; full sanitization/render latency; cross-engine regression coverage.

**Constraints:** Post-sanitization mutation or context changes can invalidate the safety result. Keep policy, DOM implementation and browser versions pinned; server DOM compatibility is part of the trusted base. Security success cannot be inferred from removed-node counts or from stripping all required rich content.

**Priority rationale:** Replay permitted rich-content fixtures and malicious parser/context cases through the complete render pipeline, including downstream transforms and browser differences.

**Sources:** [ST021](https://github.com/cure53/DOMPurify/releases/tag/3.4.17) · [ST022](https://github.com/cure53/DOMPurify/blob/main/README.md)

### OSV-Scanner

**tool · established · P1** · ID: osv-scanner

Dependency vulnerability scanner using the OSV advisory ecosystem and machine-readable version ranges.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** v2.7.0 is marked Latest as checked 2026-10-28; it includes package URLs in JSON and improved package extraction/offline behavior. No unsourced exact release date is assigned.

**Test:** Scan known-vulnerable, fixed, unknown-version, vendored and local-workspace fixture dependencies against a frozen OSV snapshot. Compare Trivy only on shared supported ecosystems and separate unknown identity from clean. Verify network silence in full offline mode.

**Measure:** advisory precision; advisory recall; package identity coverage; unknown package count; scan p95; offline network requests.

**Constraints:** Apache-2.0; official Linux, macOS and Windows binaries are documented. Record scanner digest and each ecosystem database snapshot; advisory churn must not masquerade as a tool improvement. --offline-vulnerabilities is not equivalent to no network; full --offline and explicit database availability need separate tests. Unmapped local modules, unknown versions or unsupported extractors are unresolved inventory, not evidence of safety.

**Priority rationale:** Conditional dependency-advisory baseline for supported source manifests; compare package identity and actionable recall before raw finding totals.

**Sources:** [RX128](https://google.github.io/osv-scanner/) · [ST181](https://github.com/google/osv-scanner/releases/tag/v2.7.0) · [ST182](https://google.github.io/osv-scanner/usage/offline-mode/) · [ST183](https://google.github.io/osv-scanner/installation/) · [ST184](https://github.com/google/osv-scanner)

### Sigstore Cosign

**tool · established · P1** · ID: sigstore-cosign

Artifact signing and verification candidate for trusted test binaries, datasets, and release packages.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** v3.1.4 remains the current observed release, dated 2026-10-20; checked 2026-10-28. Explicit signer/issuer and artifact-digest verification are separate from merely possessing a signature.

**Test:** Verify identical public release artifacts and bundles under exact trusted identity and issuer policies. Include tampering, wrong workflow identity, wrong repository, wrong digest, untrusted roots and offline operation with captured trust material. Check the actual installer verification path.

**Measure:** invalid artifact rejection; wrong identity rejection; verification p95; bundle bytes; offline verification success; release-path enforcement.

**Constraints:** Apache-2.0; official Linux, macOS and Windows binaries are available. A valid signature authenticates an artifact under a policy; it does not establish code quality, update freshness or safe data migration. Pin the exact expected identity/issuer and preserve digest claims; broad matching or skipped claim verification changes the security contract. Sigstore verification does not replace platform-specific Developer ID/notarization, Authenticode or TUF update metadata.

**Priority rationale:** Baseline release-artifact verification layer when trust identity and offline requirements are explicit; test enforcement before adding popularity or benchmark scores.

**Sources:** [RX123](https://github.com/sigstore/cosign/releases) · [ST176](https://github.com/sigstore/cosign/releases) · [ST177](https://docs.sigstore.dev/cosign/verifying/verify/) · [ST178](https://github.com/sigstore/cosign)

### Sparkle

**framework · established · P1** · ID: sparkle

Native macOS update framework with signed appcasts and archive verification options, suitable for testing trusted self-updates outside an app store.

**Stack layers:** Signed distribution & updates.

**Current signal:** Sparkle 2.10.1 is marked Latest as checked 2026-10-28; its release notes require macOS 12+ and include Unicode-path/appcast fixes.

**Test:** Compare a signed Sparkle 2.10.1 release against the current macOS update path using notarized fixture apps. Enable and test signed-feed and pre-extraction verification. Cover Unicode paths, delta/full updates, key rotation, interrupted installs and preservation of user state.

**Measure:** tamper rejection; key rotation success; update success; recovery correctness; download bytes; user-data preservation.

**Constraints:** MIT-style core license with bundled third-party notices. Version 2.10.1 requires macOS 12 or later and drops CocoaPods support. Signed feeds and verification before extraction require explicit configuration; their availability is not proof they are enabled. Developer ID, EdDSA rotation and archive format interact; test the actual release configuration and keep signing keys away from public hosting. This is a macOS baseline, not a cross-platform updater or an assertion of TUF-equivalent protection.

**Priority rationale:** Conditional baseline for native macOS self-updates when macOS 12+ and explicit signature configuration fit the distribution policy.

**Sources:** [ST148](https://github.com/sparkle-project/Sparkle/releases/tag/2.10.1) · [ST149](https://sparkle-project.org/documentation/) · [ST150](https://github.com/sparkle-project/Sparkle/blob/2.x/LICENSE)

### The Update Framework (TUF)

**method · established · P1** · ID: tuf

Versioned update-metadata protocol for authenticating targets and limiting rollback, freeze and repository-compromise risks in app or plugin distribution.

**Stack layers:** Signed distribution & updates.

**Current signal:** The official specification identifies 1.0.37 and last modification on 2026-10-08; checked 2026-10-28.

**Test:** Use a pinned reference client as the metadata control. Test wrong target digest, stale or expired metadata, duplicate signatures, mixed snapshots, delegated paths, root-key rotation and interrupted persistence. Exercise an authorized application downgrade using fresh trusted metadata.

**Measure:** invalid update rejection; valid rotation success; metadata recovery correctness; verification p95; metadata bandwidth; offline-expiry behavior.

**Constraints:** Specification 1.0.37 is not a python-tuf package version. Record the exact implementation version and supported specification behavior separately. The reference implementation is MIT OR Apache-2.0; it is a Python client, not a universal native installer. TUF does not perform application installation, database migration, atomic file replacement or initial trust bootstrap. Test those layers separately. An authorized rollback is a policy decision under fresh metadata; disabling expiry or version checks is not a safe rollback design.

**Priority rationale:** Security-protocol baseline for independently hosted app or mod updates; adopt when its role/key operations are supportable, alongside an installer rather than as its substitute.

**Sources:** [ST138](https://theupdateframework.github.io/specification/latest/) · [ST139](https://github.com/theupdateframework/python-tuf)

### OpenSSF Scorecard

**tool · established · P2** · ID: openssf-scorecard

Automated repository-security signals for evaluating dependency hygiene with visible check-level evidence.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** Opened official project overview describing automated repository security assessment.

**Test:** Collect versioned check-level reports for candidate repos and manually verify a sample of positive and negative findings.

**Measure:** check coverage; false positives; data freshness; manual agreement.

**Constraints:** Security hygiene is not runtime correctness or performance. Missing checks must remain unknown rather than zero-quality judgments.

**Priority rationale:** Verify artifact identity, dependency coverage and actionable findings independently of popularity.

**Sources:** [RX125](https://openssf.org/scorecard/)

### SLSA supply-chain framework

**method · established · P2** · ID: slsa

Provenance and source-security framework for documenting how benchmark artifacts are built and reviewed.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** Approved SLSA v1.2 remains current in opened documentation on 2026-10-28; verify provenance fields and trust configuration rather than inferring assurance from an attached document.

**Test:** For each public test build, verify provenance signature, subject digest, trusted builder, source repository/ref, build type and permitted parameters. Deliberately swap a source fork, artifact and build argument. Record independent rebuild results separately.

**Measure:** provenance completeness; tampering rejection; unexpected parameter rejection; verification latency; trusted builder coverage.

**Constraints:** SLSA is an OS-neutral specification, not an installer, reproducible-build tool or runtime implementation license. Keep build and source tracks distinct and state the exact scoped level and trust assumptions. An attestation that parses is not verified provenance. Artifact identity and expected source/build parameters must match. Provenance does not prove absence of malicious source code, runtime vulnerabilities or byte-reproducible builds.

**Priority rationale:** Baseline provenance policy for comparing artifact-producing CI systems; rank verified guarantees and integration burden within the same build cohort.

**Sources:** [RX124](https://slsa.dev/spec/v1.2/) · [ST179](https://slsa.dev/spec/v1.2/) · [ST180](https://slsa.dev/spec/v1.2/verifying-artifacts)

### Syft

**tool · established · P2** · ID: syft

Software bill-of-materials generator for inventorying container images, filesystems, and release bundles.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** Syft v1.55.0 release assets are dated 2026-10-19; checked 2026-10-28. It adds IPK scanning and includes package-preservation fixes.

**Test:** Inventory a public app bundle, its unpacked tree and build container with known direct, transitive, vendored and generated dependencies. Compare canonical package identities and relationships against a fixture manifest; validate SPDX/CycloneDX serialization and unexplained omissions.

**Measure:** inventory precision; inventory recall; relationship recall; unknown component count; schema validity; scan p95.

**Constraints:** Apache-2.0; official Linux, macOS and Windows builds are documented. SBOM generation is distinct from vulnerability matching, licensing conclusions and runtime reachability. Packed and unpacked artifacts may expose different metadata; report scan target, enabled catalogers and missing parser coverage. A signed inventory can still omit a bundled dependency; preserve an independent fixture ground truth.

**Priority rationale:** Conditional SBOM baseline for release inventory; promote on measured coverage and traceable package identity, not document length.

**Sources:** [RX127](https://github.com/anchore/syft/blob/main/README.md) · [ST185](https://github.com/anchore/syft/releases) · [ST186](https://github.com/anchore/syft/blob/main/README.md) · [ST187](https://oss.anchore.com/docs/installation/syft/) · [ST188](https://github.com/anchore/syft)

### Trivy

**tool · established · P2** · ID: trivy

Scanner candidate for dependency, container, and configuration findings in reproducible build environments.

**Stack layers:** Signed distribution & updates; Builds & reproducibility.

**Current signal:** v0.76.1 remains current as checked 2026-10-28; release notes document Go/CA trust-store mitigations. Record the actual binary or container digest rather than an unpinned tag.

**Test:** Compare pinned official Trivy artifacts with OSV-Scanner on shared known-vulnerable/fixed fixtures and record the scanner/database pair. Separate dependency findings, misconfiguration and secrets into different outputs. Test unsupported packages and stale database behavior explicitly.

**Measure:** advisory precision; advisory recall; unknown package coverage; scan p95; database freshness; finding reproducibility.

**Constraints:** Apache-2.0; official Linux, macOS/Homebrew and Windows install paths are documented. Different database sources, ecosystem coverage and severity mappings prevent a direct ranking by finding count. Pin and verify the scanner itself, including container/base-image identity; a scanner is another supply-chain component. Do not turn advisory severity into a universal project score or suppress unresolved packages to improve precision.

**Priority rationale:** Challenger or complementary scanner when its container/configuration coverage is needed; compare shared scopes independently from extra scanners.

**Sources:** [RX126](https://github.com/aquasecurity/trivy/releases) · [ST189](https://github.com/aquasecurity/trivy/releases) · [ST190](https://trivy.dev/docs/latest/getting-started/installation/) · [ST191](https://github.com/aquasecurity/trivy)

### Velopack

**tool · emerging · P2** · ID: velopack

Desktop packaging and update toolkit with language bindings, release channels and delta distribution across Windows, macOS and Linux.

**Stack layers:** Signed distribution & updates.

**Current signal:** As checked 2026-10-28, the release list marks 1.2.161 Latest and 1.3.39-g8d2844f Pre-release; 1.3 signing and recovery changes remain a challenger channel.

**Test:** Compare stable 1.2.161 against the existing native installer on Windows, macOS and Linux. Keep 1.3.39-g8d2844f in a separate prerelease cohort. Kill each update phase, fill the disk, corrupt deltas, hold files open and test architecture mismatch, uninstall and data-preserving recovery.

**Measure:** clean install success; update/recovery success; user-data preservation; download bytes; update p95; uninstall residue.

**Constraints:** MIT. Desktop runtime and CPU targets must match the application; RID metadata does not cross-compile application code. Stable 1.2.161 and prerelease 1.3.39-g8d2844f are different channels. Current docs include 1.3 behavior before it is stable. Codesigning, feed trust, anti-rollback policy, atomic replacement and application-data migration are separate acceptance gates. Native signatures or notoriety checks do not establish release freshness. Do not infer TUF-equivalent metadata protections from packaging support.

**Priority rationale:** Cross-platform distribution challenger where one toolkit reduces installer complexity without weakening native signing, updates or user-data recovery.

**Sources:** [ST144](https://github.com/velopack/velopack) · [ST145](https://github.com/velopack/velopack/releases) · [ST146](https://docs.velopack.io/packaging/runtime) · [ST147](https://docs.velopack.io/packaging/signing)

### tough

**framework · emerging · P2** · ID: tough

Rust TUF client and repository tooling candidate for a native updater that needs explicit trust metadata and failure handling.

**Stack layers:** Signed distribution & updates.

**Current signal:** API version 0.24.0 observed on 2026-10-28; maintainer advisories dated 2026-04-24 identify fixes in 0.22.0.

**Test:** Compare pinned tough 0.24.0 with the reference client on the TUF fixture corpus. Add regression cases for delegated metadata expiration, incorrect length/hash and duplicate signatures. Fail closed on truncated metadata and interrupted trusted-state persistence.

**Measure:** conformance case pass rate; invalid metadata rejection; target verification correctness; recovery behavior; verification p95; memory bounds.

**Constraints:** Apache-2.0 OR MIT. Native Rust integration needs target-specific transport, TLS and filesystem validation; no browser or complete OS compatibility claim is made here. Two 2026 advisories are fixed in 0.22.0; do not test affected older clients as a production baseline. Current API overview and delegated-role advisories conflict. Resolve exact supported behavior through the pinned implementation and conformance tests before adoption. A library version newer than an advisory fix does not establish full TUF 1.0.37 conformance or crash-safe application installation.

**Priority rationale:** Conditional Rust challenger after explicit conformance and advisory regression gates; retain reference-client fixtures as the control.

**Sources:** [ST140](https://github.com/awslabs/tough) · [ST141](https://docs.rs/tough/0.24.0/tough/) · [ST142](https://github.com/awslabs/tough/security/advisories/GHSA-4v58-8p28-2rq3) · [ST143](https://github.com/awslabs/tough/security/advisories/GHSA-8m7c-8m39-rv4x)

## Systems research (17)

### WalkDir

**repository · established · P1** · ID: walkdir

Cross-platform recursive traversal control for complete file inventories with explicit error, symlink and descriptor policies.

**Stack layers:** Files, hashing & archives.

**Current signal:** The opened crate release list identifies 2.5.0 from 2024-03-01; it is a mature control, not a new 2026 release.

**Test:** Build a serial reference inventory over public generated trees, retaining every metadata field and traversal error. Compare exact manifests and warnings with bounded parallel traversal; test Windows locking, inaccessible directories, reparse points and mutation during enumeration.

**Measure:** complete manifest parity; error and warning parity; wall time; p95 cancellation latency; peak RSS; peak open handles.

**Constraints:** Do not copy examples that discard traversal errors with filter_map(Result::ok). Following links changes the inventory contract; record root and child-link policy explicitly. Traversal is not an atomic filesystem snapshot; concurrent mutation needs generation and reconciliation rules.

**Priority rationale:** Establish a complete, portable inventory before evaluating incremental shortcuts or parallel workers.

**Sources:** [ST079](https://docs.rs/walkdir/latest/walkdir/) · [ST080](https://docs.rs/crate/walkdir/latest) · [ST081](https://github.com/BurntSushi/walkdir)

### ignore parallel traversal

**repository · established · P1** · ID: ignore-parallel-walk

Parallel directory traversal candidate with configurable ignore rules that must be disabled for complete installed-asset inventories.

**Stack layers:** Files, hashing & archives.

**Current signal:** The current API/master describes 0.4.34, but release metadata disagreed; no exact latest release date is asserted.

**Test:** Compare WalkBuilder parallel traversal with the same serial WalkDir manifest, disabling standard ignore filters and preserving errors. Sweep bounded worker counts, then verify all metadata and warnings under hidden files, ignored paths, symlinks and concurrent changes.

**Measure:** complete manifest parity; error and warning parity; wall time; CPU time; peak RSS; peak open handles; cancellation latency.

**Constraints:** Hidden and ignore filters are enabled by default; default settings silently change the requested dataset. Parallel callback order is not a stable listing order; canonicalize only fields whose order is contractually irrelevant. The opened crate overview showed 0.4.33 while API/master showed 0.4.34; verify and pin the downloaded released artifact.

**Priority rationale:** A bounded parallel scan can be useful only after it preserves the serial inventory and errors exactly.

**Sources:** [ST082](https://docs.rs/ignore/latest/ignore/struct.WalkBuilder.html) · [ST083](https://github.com/BurntSushi/ripgrep/blob/master/crates/ignore/Cargo.toml) · [ST084](https://docs.rs/crate/ignore/latest)

### libarchive

**repository · established · P1** · ID: libarchive

Streaming multi-format archive library for testing a shared extraction policy across desktop asset and installer formats.

**Stack layers:** Files, hashing & archives.

**Current signal:** The official site lists libarchive 3.8.10 released on 2026-10-14.

**Test:** Compare the current extractor and libarchive on the intersection of supported formats, preserving bytes, metadata, warnings and errors. Use private staging, explicit secure path/symlink flags, resource budgets and injected cancellation before journaled installation.

**Measure:** extracted byte and metadata parity; warning/error parity; wall time; peak RSS and handles; expanded-byte budget enforcement; recovery correctness.

**Constraints:** Secure path and symlink flags are explicit options, not an assumed default. SAFE_WRITES concerns individual writes; it does not establish atomic multi-file installation or prevent every concurrent destination race. Format and codec support, encryption and dependency licenses must be pinned; compare format coverage separately from equal-work performance.

**Priority rationale:** A practical multi-format candidate after a shared extraction policy and Windows adversarial corpus exist.

**Sources:** [ST103](https://www.libarchive.org/) · [ST104](https://github.com/libarchive/libarchive/blob/master/libarchive/archive.h)

### notify filesystem watching

**repository · established · P1** · ID: notify

Cross-platform filesystem notifications for invalidating cached inventories, with polling and full reconciliation as correctness controls.

**Stack layers:** Files, hashing & archives.

**Current signal:** The release page lists stable 8.2.1 under 2026-10-25 and prerelease 9.0.0-rc.7 under 2026-10-28; the rc.7 display timestamp is Oct 27.

**Test:** Pair stable notify with a complete inventory and explicit dirty generations. Replay create, replace, rename, delete and burst workloads; force overflow, root replacement, startup gaps and cancellation, then compare the final manifest and warnings with a fresh full scan.

**Measure:** final manifest parity; missed-change count; event-to-visible p95/p99; reconciliation wall time; idle CPU; cancellation and shutdown latency.

**Constraints:** Events are invalidation hints, not a complete change log or a content-integrity proof. ReadDirectoryChangesW overflow requires enumeration; root replacement and startup failure need explicit recovery. Stable 8.2.1 and 9.0.0-rc.7 are distinct test configurations; prerelease fixes are not stable guarantees.

**Priority rationale:** Test reconciliation and shutdown behavior before claiming incremental scan speedups.

**Sources:** [ST085](https://github.com/notify-rs/notify/releases) · [ST086](https://github.com/notify-rs/notify) · [ST087](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-readdirectorychangesw)

### zip-rs

**repository · established · P1** · ID: zip-rs

Rust ZIP reader and extractor for controlled ZIP/JAR asset pipelines with explicit staging and metadata reuse invariants.

**Stack layers:** Files, hashing & archives.

**Current signal:** The opened v9.1.3 release fixes Windows symlink-follow truncation with FILE_FLAG_OPEN_REPARSE_POINT; the displayed timestamp is Oct 27.

**Test:** Pin 9.1.3 and compare ZIP/JAR extraction with the current baseline using identical archive bytes, full metadata and errors. Exercise duplicate entries, case conflicts, overlapping data, malformed headers, Unicode paths and reparse-point races in private staging.

**Measure:** extracted byte and metadata parity; warning/error parity; wall time; CPU time; peak handles and RSS; cancellation latency; recovery correctness.

**Constraints:** Documented extraction is non-atomic and does not protect against concurrent destination changes. Unsafe metadata reuse requires compatible archive bytes; path and length equality alone are insufficient. Keep historical 9.1.2 experiments dated; the 9.1.3 Windows fix is a new source signal, not a retroactive validation.

**Priority rationale:** Directly relevant Windows extraction correctness deserves testing before archive throughput tuning.

**Sources:** [ST105](https://docs.rs/zip/latest/zip/read/struct.ZipArchive.html) · [ST106](https://github.com/zip-rs/zip2/releases) · [ST107](https://docs.rs/crate/zip/latest/source/Cargo.toml)

### BLAKE3 hashing

**repository · established · P2** · ID: blake3

Parallel cryptographic hashing candidate for internal content identity, chunk verification and content-addressed asset storage.

**Stack layers:** Files, hashing & archives.

**Current signal:** BLAKE3 1.8.7 was published on 2026-08-20; the opened release also records removal of the arrayref dependency.

**Test:** Compare the current SHA-256 path with pinned BLAKE3 for internal digest work on tiny-file and large-asset corpora. Validate each algorithm against its own vectors and full bytes; include mutation during read, incremental invalidation, cancellation and complete manifest production.

**Measure:** full-byte verification success; wall and CPU time; bytes read; peak RSS; manifest storage cost; cancellation latency.

**Constraints:** Different hash algorithms must not be compared by expecting identical digest strings. Retain SHA-256 wherever external manifests, signatures or compatibility require it. Tree hashing alone does not provide persistent dirty-block tracking, trustworthy metadata caching or publisher authentication.

**Priority rationale:** Consider internal digest acceleration only after complete-byte correctness and compatibility requirements are fixed.

**Sources:** [ST090](https://github.com/BLAKE3-team/BLAKE3) · [ST091](https://docs.rs/crate/blake3/latest) · [ST092](https://github.com/BLAKE3-team/BLAKE3/releases/tag/1.8.7)

### FastCDC for Rust

**repository · emerging · P2** · ID: fastcdc-rs

Content-defined chunking implementation for testing reusable asset chunks across insertions, revisions and interrupted downloads.

**Stack layers:** Files, hashing & archives.

**Current signal:** fastcdc 5.0.0 was published on 2026-08-22; its underlying FastCDC method is an established 2016 research control.

**Test:** Compare fixed-size blocks with pinned FastCDC variants at matched target chunk sizes on generated revisions, insertions, repeated regions and already compressed assets. Reconstruct and cryptographically verify the complete output, accounting for chunk metadata, CPU, storage and transfer.

**Measure:** reconstruction parity; transferred bytes including metadata; end-to-end wall time; chunk-size distribution; CPU time; peak RSS; index size.

**Constraints:** Algorithm variants and min/target/max parameters change boundaries; record all of them. Chunk boundaries are not cryptographic integrity checks; fingerprint and verify independently. CDC can lose its benefit on encrypted or recompressed artifacts; metadata and indexing cost belong in the result.

**Priority rationale:** Test only where repeated asset revisions provide actual chunk reuse and full reconstruction is retained.

**Sources:** [ST093](https://github.com/nlfiedler/fastcdc-rs) · [ST094](https://docs.rs/crate/fastcdc/latest) · [ST095](https://www.usenix.org/conference/atc16/technical-sessions/presentation/xia)

### NTFS USN reconciliation

**method · established · P2** · ID: ntfs-usn-reconciliation

Windows-specific journal-assisted invalidation with journal-identity checkpoints and full-scan recovery when continuity cannot be established.

**Stack layers:** Files, hashing & archives; Background work & recovery.

**Current signal:** Current Microsoft documentation supports journal-assisted recovery, with explicit identity and access preconditions; no new 2026 API release is claimed.

**Test:** Compare full rescan, portable watcher reconciliation and NTFS journal-assisted reconciliation on the same Windows tree. Persist volume/journal identity and USN checkpoints, interrupt processing, rotate or invalidate the journal, and verify exact full-scan output after recovery.

**Measure:** final manifest parity; recovery success; changed-byte verification cost; reconciliation p95/p99; checkpoint size; privilege and fallback coverage.

**Constraints:** The documented journal-query workflow requires administrative privileges; preserve an unprivileged full-scan or watcher fallback. NTFS-specific journals do not cover every filesystem, remote share or replacement volume. A journal record does not prove current bytes; recompute affected content and handle journal gaps or identity changes conservatively.

**Priority rationale:** Useful for large Windows inventories only when access and continuity are available and full output survives fallback.

**Sources:** [ST088](https://learn.microsoft.com/en-us/windows/win32/fileio/change-journals) · [ST089](https://learn.microsoft.com/en-us/windows/win32/fileio/using-the-change-journal-identifier) · [ST087](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-readdirectorychangesw)

### bita / bitar

**repository · emerging · P2** · ID: bita

HTTP range-based delta cloning that reuses local chunks and verifies downloaded chunks before producing a revised artifact.

**Stack layers:** Downloads, transfer & sync.

**Current signal:** The opened README documents HTTP/HTTPS range reuse and BLAKE2 chunk verification; no exact recent release date is asserted.

**Test:** Compare a full validated HTTP download with bitar reconstruction into private staging, using identical source revisions and final hashes. Vary local reuse, compression, latency, corruption, interruptions and disk pressure; retain complete network, CPU, error and recovery cost.

**Measure:** final artifact parity; transferred bytes including index; end-to-end wall time; CPU time; peak staging disk; resume correctness; cancellation latency.

**Constraints:** A server must support the required HTTP range behavior and published chunk metadata. In-place updates are supported upstream, but the installation experiment must protect the currently usable version with staging and a recovery journal. Chunk verification and final digest checks do not establish publisher identity or release authorization.

**Priority rationale:** A focused delta-transfer challenger when real revisions reuse enough bytes to offset chunk and staging overhead.

**Sources:** [ST098](https://github.com/oll3/bita)

### AtomSanitizer / Fast Atomicity Monitoring

**paper · experimental · P3** · ID: atomsanitizer-paper

PLDI 2026 atomicity-monitoring algorithm and ThreadSanitizer prototype for detecting specified transactional concurrency violations beyond ordinary race reports.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** arXiv v2 was revised 2026-10-06; PLDI 2026 paper and author-linked artifact v2 are available as checked 2026-10-28.

**Test:** First reproduce the archived artifact, then annotate atomic operations in a public native asset-index fixture. Compare TSAN alone and the prototype on seeded race-free atomicity bugs and correct controls, preserving observed traces, compiler settings and event scope.

**Measure:** seeded atomicity bug detection; false alarms; runtime overhead; peak memory; trace sensitivity; artifact reproduction success.

**Constraints:** Paper is CC-BY-4.0. Artifact software licensing and supported host/compiler matrix remain unverified; establish both before embedding or redistribution. Monitoring checks observed executions against supplied atomicity regions; it does not explore all schedules or infer every intended invariant. Paper comparisons against RegionTrack, Aerodrome and TSAN are author results, not Atlas ranks. Use a frozen prototype and distinguish the April artifact from the October arXiv revision; verify that their algorithms and configurations correspond.

**Priority rationale:** Watchlist challenger when an actual atomicity failure escapes existing race and state-machine tests; require artifact reproduction before product use.

**Sources:** [ST172](https://arxiv.org/abs/2604.11369) · [ST173](https://pldi26.sigplan.org/details/pldi-2026-papers/5/Fast-Atomicity-Monitoring) · [ST174](https://hcantunc.github.io/papers/pldi26/paper.pdf) · [ST175](https://zenodo.org/records/19615809)

### HARE: Cache-Centric Multi-Resource Allocation for Storage Services

**paper · experimental · P3** · ID: hare-storage-allocation-paper

A harvest-and-redistribute allocation method couples cache capacity with I/O and other resources to improve multi-tenant storage fairness.

**Stack layers:** Local storage & search; APIs & shared services.

**Current signal:** FAST 2026 paper (February venue record); full method and artifact references checked, code retrieval unresolved.

**Test:** Compare equal resource partition, dominant-resource fairness, cache-only policies, and HARE under fixed total budgets; sweep skew, working-set size, read/write mix, and tenant arrivals.

**Measure:** minimum per-tenant normalized throughput; aggregate completed throughput; p99/p99.9 latency; cache hit rate; adaptation time; resource-accounting overhead; I/O correctness.

**Constraints:** A higher aggregate rate is insufficient if any tenant loses the required sharing incentive or latency guarantee. Miss-ratio and demand estimates can change with workload phases; test estimation errors and adaptation explicitly. Paper references public BunnyFS/HopperKV code, but live artifact availability and build/license details were not verified in this pass.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX158](https://www.usenix.org/conference/fast26/presentation/ye) · [RX159](https://www.usenix.org/system/files/fast26-ye.pdf)

### Incr: Faster Re-Execution via Bolt-On Incrementalization

**paper · experimental · P3** · ID: incr-paper

Dependency and effect tracking reuse intermediate shell-command results across program reruns while preserving relevant side effects.

**Stack layers:** Builds & reproducibility.

**Current signal:** OSDI 2026 paper, dated July in the venue record; public source and retained evaluation tooling checked.

**Test:** Replay real build/analysis scripts under Bash and Incr across unchanged reruns, file edits, renames, deletions, environment changes, and non-idempotent steps; compare all outputs, exit codes, and filesystem effects.

**Measure:** cold first-run wall time; changed-input rerun wall time; complete output and side-effect parity; p95 invalidation latency; retained-state bytes; tracking overhead.

**Constraints:** The full paper reports Bash corner-case divergences and excludes parser-error cases; require target-script equivalence before acceptance. Default artifact setup uses a privileged container; use an isolated reproduction machine and review host dependencies. An unchanged-cache result alone does not establish a meaningful end-to-end improvement.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX152](https://www.usenix.org/conference/osdi26/presentation/xie-yizheng) · [RX153](https://www.usenix.org/system/files/osdi26-xie-yizheng.pdf) · [RX154](https://github.com/atlas-brown/incr)

### Maintaining Queries under Updates Using Heavy-Light Partitioning of the Input Relations

**paper · experimental · P3** · ID: heavy-light-ivm-paper

A theoretical framework combines delta queries, materialized-view trees, and heavy/light partitions to maintain joins under inserts and deletes.

**Stack layers:** Analytics & result formats.

**Current signal:** Original arXiv v1 published 2026-05-08; theory candidate with no local performance reproduction.

**Test:** Prototype a profiled join workload against indexed recomputation and simpler incremental views; replay inserts, deletions, skew shifts, and bursts while checking the complete result after every update.

**Measure:** full-result parity after every update; p50/p95/p99 update milliseconds; enumeration delay; materialized-state bytes; rebalancing time; recovery time.

**Constraints:** Asymptotic bounds assume a fixed query and specific data/indexing model; they do not establish application tail latency. No checked executable artifact is available from this review; implementation work is required. Reject if rebalancing, materialized-state size, or query restrictions violate the target workload.

**Priority rationale:** Paper-reviewed proposal: establish a reproducible artifact and a matching baseline before testing the stated mechanism. Preserve its documented limitations and rejected cases.

**Sources:** [RX142](https://arxiv.org/html/2605.08397v1)

### PETRA: Trustworthy and Confidential SBOM Exchange

**paper · experimental · P3** · ID: petra-sbom-paper

USENIX Security 2026 research on composing and selectively revealing SBOM data with integrity proofs for multi-publisher software supply chains.

**Stack layers:** Signed distribution & updates.

**Current signal:** USENIX Security 2026 paper with an archived v1 implementation/evaluation artifact; checked 2026-10-28.

**Test:** Only if selective disclosure is required, reproduce the archived artifact on public synthetic publisher/dependency graphs. Compare plain signed SBOMs with PETRA on allowed/denied queries, tamper detection, composition and key-policy changes; retain a complete local ground truth.

**Measure:** authorized query correctness; unauthorized disclosure count; tampering detection; query p95; storage overhead; key-policy maintenance effort.

**Constraints:** Research artifact is Apache-2.0 per the paper; host/OS and cryptographic dependency reproduction remain to be established from the archived environment. The v1 artifact was published 2025-12-12; the paper is USENIX Security 2026. These are different dates, not contradictory freshness signals. Integrity of submitted SBOM data cannot establish that the inventory was complete or truthful when generated. Keep plain signed SBOMs as the baseline unless confidentiality requirements justify additional crypto and key operations. Paper performance claims are external results and must not appear as Atlas measurements.

**Priority rationale:** Watchlist for multi-publisher selective SBOM disclosure; ordinary public mod inventories should start with complete signed SBOMs.

**Sources:** [ST169](https://www.usenix.org/conference/usenixsecurity26/presentation/abu-ishgair) · [ST170](https://www.usenix.org/system/files/conference/usenixsecurity26/sec26_prepub_ishgair.pdf) · [ST171](https://zenodo.org/records/17906622)

### SysSpec generative file systems

**paper · experimental · P3** · ID: sysspec-paper

Specification-centered file-system generation research for studying the correctness of AI-produced systems code.

**Stack layers:** Testing, profiling & correctness.

**Current signal:** FAST '26 publisher page lists Best Paper and Distinguished Artifact awards.

**Test:** Recover the published artifact and reproduce specification-to-implementation tasks with held-out invariants and crash tests.

**Measure:** functional correctness; crash consistency; human repair effort; reproduction success.

**Constraints:** Publication awards are external recognition, not Atlas test scores. Artifact availability and exact model versions must be confirmed before execution.

**Priority rationale:** Watch-stage proposal: Reproduce a narrow mechanism and check assumptions before translating a paper into an application recommendation.

**Sources:** [RX134](https://www.usenix.org/conference/fast26/presentation/liu-qingyuan)

### VS-Flash

**paper · experimental · P3** · ID: vs-flash-paper

Research proposal combining flash-backed vector capacity with batch-aware placement of CPU and device computation.

**Stack layers:** Local storage & search.

**Current signal:** arXiv v1 is dated 2026-10-18; the paper describes mixed-workload vector search.

**Test:** Reproduce baseline query mixes and recall targets; evaluate whether the specialized hardware setup is obtainable before scheduling runs.

**Measure:** recall@k; bulk throughput; small-query p99; host/device memory.

**Constraints:** Preprint author results are not independently reproduced here. Specialized computational flash may prevent direct desktop reproduction.

**Priority rationale:** Watch-stage proposal: Reproduce a narrow mechanism and check assumptions before translating a paper into an application recommendation.

**Sources:** [RX133](https://arxiv.org/html/2610.26960v1)

### hS: Speculative Script Reordering at Subprocess Granularity

**paper · experimental · P3** · ID: hs-speculative-shell-paper

Speculative subprocess execution detects effects dynamically and commits independent work while rerunning conflicting portions.

**Stack layers:** Builds & reproducibility.

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

**Stack layers:** Shared core & native boundaries.

**Current signal:** Existing Atlas experiment used CPython 3.12.14. Versioned 3.12 documentation is the compatibility reference; this is not a current-runtime benchmark.

**Test:** Reproduce the retained generated corpus, then add representative files, large integers, duplicate keys, UTF-8 errors, cold startup and peak memory under the required output contract.

**Measure:** Complete encode/decode latency; Peak memory and allocations; Semantic equality and rejected-input behavior; Cold startup and packaging compatibility.

**Constraints:** Existing results are warmed generated workloads on one Linux host, not application acceptance. All three default decoders collapse duplicate keys. The retained orjson probe rounds the integer above u64.

**Priority rationale:** Retained Atlas evidence provides a reproducible starting point, with explicit numeric and duplicate-key disqualifiers.

**Sources:** [RX135](https://docs.python.org/3.12/library/json.html)

### UltraJSON (ujson)

**repository · established · P1** · ID: ultrajson

C-backed Python JSON implementation retained as an explicit compatibility and performance comparison.

**Stack layers:** Shared core & native boundaries.

**Current signal:** Existing Atlas experiment used ujson 6.0.0. Upstream describes a maintenance-only policy; evaluate that lifecycle before selecting it for new work.

**Test:** Reproduce the retained generated corpus, then add representative files, large integers, duplicate keys, UTF-8 errors, cold startup and peak memory under the required output contract.

**Measure:** Complete encode/decode latency; Peak memory and allocations; Semantic equality and rejected-input behavior; Cold startup and packaging compatibility.

**Constraints:** Existing results are warmed generated workloads on one Linux host, not application acceptance. All three default decoders collapse duplicate keys. The retained orjson probe rounds the integer above u64.

**Priority rationale:** Retained Atlas evidence provides a reproducible starting point, with explicit numeric and duplicate-key disqualifiers.

**Sources:** [RX137](https://github.com/ultrajson/ultrajson)

### orjson

**repository · established · P1** · ID: orjson

Rust-backed Python JSON implementation with UTF-8 byte output and a defined serialization contract.

**Stack layers:** Shared core & native boundaries.

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

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 9.0% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $56.84 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Claude Opus 5.5 / mini-SWE-agent / xhigh

**platform · emerging · P3** · ID: config-claude-opus-5-5-mini-swe-agent-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 18.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $36.36 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Fable 5.1 / Claude Code / high

**platform · emerging · P3** · ID: config-fable-5-1-claude-code-high

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 99.1% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.5; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Gemini 4 Argon / mini-swe-agent / high

**platform · emerging · P3** · ID: config-gemini-4-argon-mini-swe-agent-high

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 99.22% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.45; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Kimi-K3 / mini-swe-agent / max

**platform · emerging · P3** · ID: config-kimi-k3-mini-swe-agent-max

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 97.7% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.9; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)

### Muse Wonder / mini-SWE-agent / xhigh

**platform · emerging · P3** · ID: config-muse-wonder-mini-swe-agent-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 5.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently. Reported mean API cost: $36.53 per task; not a common cost cap.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Muse Wonder Full / mini-SWE-agent / effort unreported

**platform · emerging · P3** · ID: config-muse-wonder-full-mini-swe-agent-unspecified

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 8.5% on ProgramBench (fully resolved). This scores the complete configuration, not the model or harness independently.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** No confidence intervals are provided in the opened table. Average API cost is reported, not an imposed common spend limit. Exact model snapshots and harness commit must be recovered before Atlas replication. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX042](https://programbench.com/)

### Opus 5 / Claude Code / xhigh

**platform · emerging · P3** · ID: config-opus-5-claude-code-xhigh

Published model, agent harness and reasoning configuration, preserved as one evaluation subject with its benchmark scope and resource limits.

**Stack layers:** Optional AI & developer tools.

**Current signal:** Reported 99.4% on SWE-Bench Pro V2 (resolve rate). This scores the complete configuration, not the model or harness independently. Source displays ±0.4; confidence level not captured.

**Test:** Recover exact model snapshot, harness revision and resource budget, then run held-out tasks with pristine grading, complete trajectories and equal constraints.

**Measure:** Fully resolved task rate; Cost per successful task; Failure and timeout counts; Repeated-run uncertainty.

**Constraints:** The source distinguishes budget categories by gray styling; text extraction did not preserve that styling. Budget-normalized comparisons are unavailable. Public task exposure remains a limitation. Source order is not statistical proof of superiority. Source order is not evidence of statistically significant superiority.

**Priority rationale:** Watch-stage proposal: External results are a research lead; recover the missing protocol details before committing to a reproduction.

**Sources:** [RX020](https://labs.scale.com/leaderboard/swe_bench_pro_public_v2?tab=full)
