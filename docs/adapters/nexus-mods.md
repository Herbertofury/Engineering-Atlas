# Nexus Mods adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Official v2 GraphQL documentation marks it experimental; stable v1 remains. Most v2 queries are public, while some need OAuth. Preserve game-domain plus mod ID.

## Reuse before replacement

Evaluate the official node-nexus-api SDK and existing identity/media adapters before rewriting. Review licensing and integration boundaries; no universal winner selected.

## Acceptance workload

Separate Skyrim Special Edition, Fallout 4 and Starfield fixtures. Test galleries, videos, file versions, hidden/deleted items, ownership and schema changes.

## Evidence status

Anonymous game identities and SkyUI metadata verified live; full gallery and authenticated downloads not accepted. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://graphql.nexusmods.com/) · [Shared collection contract](contract.md)
