# Benchmark input contract

Use JSON schema version 1 with label, source_revision, kind (`measured` or `synthetic`), condition, environment_id, workload_sha256 and a normalization object containing name, version and excluded_fields. Record the environment's detailed hardware/OS/toolchain and raw trace location in the experiment record. environment_id must refer to the same actual environment for both files, not merely use matching text.

Each sample requires a unique pair_id, positive finite elapsed_ms, status `complete`, a SHA-256 of the normalized complete result, result_count and a warnings list. At least five matched pairs are required by this helper; that minimum does not establish statistical confidence or representativeness.

The comparator rejects different workloads, conditions, environments, normalization contracts, result hashes, counts or warning lists. It reports median timing, a sample p95 and paired ratios, including regressions. It does not certify that a supplied hash is truthful, that excluded fields are nonsemantic, or that memory/security/UI budgets passed. Review the actual evidence.

[The baseline fixture](../tests/fixtures/synthetic-baseline.json) and [candidate fixture](../tests/fixtures/synthetic-candidate.json) are synthetic demonstrations only. Their intentional 2× ratio is not a performance claim for any application.
