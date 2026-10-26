# Engineering Atlas

**Build better software. Prove the improvement. Keep the evidence.**

A practical, evolving research library for desktop apps, web services, Minecraft mods, game tooling and asset pipelines. Reviewed starting point: **October 26, 2026**. This is a curated foundation, not a claim that every technology has been exhaustively benchmarked.

## Start here

| Need | Guide |
|---|---|
| Choose a stack without hype | [Stack decision map](docs/stack-selection.md) |
| Reduce repeated algorithm/storage work | [Algorithms, storage and concurrency](docs/algorithms-storage-concurrency.md) |
| Make an application substantially faster | [Performance engineering](docs/performance.md) |
| Scan files, configs and archives safely and quickly | [File pipelines and worker tuning](docs/file-pipelines.md) |
| Build responsive desktop applications | [Desktop architecture](docs/desktop.md) |
| Build a web service and account integration | [Web and security](docs/web-security.md) |
| Build or extend a mod | [Mod development](docs/mods.md) |
| Build models, animation and game assets | [Game and asset pipelines](docs/game-assets.md) |
| Prove correctness and ship the tested build | [Testing and release](docs/testing-release.md) |
| Find the latest research and distinguish evidence | [Research method](docs/research-method.md) · [2026 review](research/2026-10-26.md) |

## The standard

A substantial improvement changes the actual end-to-end experience while retaining the required output and behavior. Caching, warm-up and perceived responsiveness can help, but they do not replace completing the work. Do not skip validation, hide warnings, lower fidelity or call stale results current to produce a better number.

“Best” is conditional on the workload, platform, security boundary, team and deployment constraints. A new version is a candidate, not a performance result. Keep stable production baselines and test experimental methods in isolated comparisons.

## Reusable tools

- `python3 scripts/check_research.py`: validate the source register, internal links and evidence metadata without network access.
- `python3 -m unittest discover -s tests -v`: run the checking-tool tests.
- `python3 scripts/compare_benchmarks.py BASELINE.json CANDIDATE.json`: compare paired complete results; reject mismatched workloads, environments, conditions or output hashes.
- [Experiment template](templates/experiment.md) · [Decision record](templates/decision.md) · [Benchmark format](docs/benchmark-format.md).

The fixture data is **synthetic test data**, never evidence that a real application is faster. This repository contains no validated universal stack rankings or private project logs.

[Primary-source register](data/sources.json) · [Research backlog](docs/roadmap.md) · [Contribution rules](CONTRIBUTING.md) · [Wiki](https://github.com/Herbertofury/Engineering-Atlas/wiki)
