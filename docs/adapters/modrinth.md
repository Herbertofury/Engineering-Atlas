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
