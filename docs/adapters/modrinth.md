# Modrinth adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Most public metadata requests need no token. Use canonical IDs, an identifiable User-Agent and provider limits; keep private operations separate.

## Reuse before replacement

The bounded Rust public-project adapter is the baseline. Expand official metadata/media fields and established tests, not a parallel scraper.

## Acceptance workload

Project identity; gallery order; originals/previews; version IDs; malformed/oversized responses; rate limits; failed-refresh preservation.

## Evidence status

Live metadata collection, durable receipt and all six returned gallery entries/original URLs tested. Long description text is now retained verbatim when present; parsing or playing its linked media remains outside the implementation. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://docs.modrinth.com/api/) · [Shared collection contract](contract.md)

## Bounded batch lane · 2026-10-27

An optional Rust CLI collector uses the official multiple-project API with 1–20 canonical IDs, the existing 2 MiB total response budget, transport guards, explicit missing IDs and atomic snapshot/attempt writes. Five real public comparisons retained identical typed gallery/metadata projections with one request instead of three. Timing was mixed (batch faster in three pairs), not a universal speed claim. The local Collection form and queue now support the same bounded batch. Separate loopback checks verified real results, security guards and reopened durable output; visual browser acceptance is not claimed. [Raw evidence and scope](https://github.com/Herbertofury/Engineering-Atlas/blob/main/experiments/modrinth-batch-lab/README.md).

## Long description retention · 2026-10-27

[Measured body-projection study](../../experiments/body-projection-lab/README.md) preserves all earlier fields and exact long-form text in three public responses and reopened snapshots. The added data costs a small measured parse increase; it is not a speedup or proof of lag-free cards. Missing/legacy text stays unknown, markup is inert, and linked media are not fetched or executed.

## Public version/file metadata · 2026-10-27

The optional CLI now collects 1–20 official version records using the existing
bounded transport. Original per-version JSON retains files/hashes, dependency
metadata, compatibility and changelog fields without fetching or executing file
links. Separate atomic snapshots preserve last-good data on missing/failed
refreshes. Three public responses and reopened exact payloads passed; this is
coverage expansion, not a measured speedup. The original CLI-only study preceded the queued workflow documented below. [Evidence and limitations](../../experiments/modrinth-version-lab/README.md).

## Queued version workflow — 2026-10-27

The local Collection form and queue now reuse the version CLI's official client and complete raw snapshot store. A small hash/generation receipt avoids copying or rounding raw provider content in the UI result. Three real public versions, an explicit missing-ID refresh and a subsequent saved-record experiment passed 32 HTTP checks. Earlier generations remained intact; native-browser interaction is not yet verified. See [workflow evidence and crash/coverage limits](../../experiments/version-collection-queue-lab/README.md).

## Single-project request binding · 2026-10-27

The Rust single-project client and snapshot store now bind the returned canonical ID/current slug to the requested identity before accepting data. Three generated mismatches formerly created successful stored attempts; all now fail before writes. Canonical IDs retain exact case, slugs accept ASCII case differences, and eight-character slugs still work. Three retained public responses preserve the complete existing typed projection across canonical and slug request forms. This is offline correctness evidence, not new live collection or a performance claim. [Reproducer, primary lookup source and limitations](../../experiments/project-identity-lab/README.md).
