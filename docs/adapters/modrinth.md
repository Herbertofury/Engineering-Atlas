# Modrinth adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Most public metadata requests need no token. Use canonical IDs, an identifiable User-Agent and provider limits; keep private operations separate.

## Reuse before replacement

The bounded Rust public-project adapter is the baseline. Expand official metadata/media fields and established tests, not a parallel scraper.

## Acceptance workload

Project identity; gallery order; originals/previews; version IDs; malformed/oversized responses; rate limits; failed-refresh preservation.

## Evidence status

Live metadata collection, durable receipt and all six returned gallery entries/original URLs tested. Description-linked media remains outside the projection. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://docs.modrinth.com/api/) · [Shared collection contract](contract.md)

## Bounded batch lane · 2026-10-27

An optional Rust CLI collector uses the official multiple-project API with 1–20 canonical IDs, the existing 2 MiB total response budget, transport guards, explicit missing IDs and atomic snapshot/attempt writes. Five real public comparisons retained identical typed gallery/metadata projections with one request instead of three. Timing was mixed (batch faster in three pairs), not a universal speed claim. The local Collection form and queue now support the same bounded batch. Separate loopback checks verified real results, security guards and reopened durable output; visual browser acceptance is not claimed. [Raw evidence and scope](https://github.com/Herbertofury/Engineering-Atlas/blob/main/experiments/modrinth-batch-lab/README.md).
