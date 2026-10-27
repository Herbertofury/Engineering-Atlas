# Bilibili adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

The official open platform describes authorized account and video capabilities. Dynamically rendered documentation needs further endpoint and permission review.

## Reuse before replacement

Evaluate maintained yt-dlp support and existing adapters after checking exact routes and terms. Prefer official playback/access paths where supported.

## Acceptance workload

BV/AV identity; multi-part videos; gallery boundaries; subtitles; region/access failures; signed-media expiry; playable versus poster-only results.

## Evidence status

Research entry created; no live complete-media or authenticated acceptance. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://openhome.bilibili.com/doc) · [Shared collection contract](contract.md)

## Official embed lane · 2026-10-27

[Documented external player](https://player.bilibili.com/) provides a supported public route distinct from authenticated open-platform APIs. Its selected sample played and paused in the cloud browser with autoplay off. A bounded official-iframe lane is implemented in the Atlas media workbench; iframe load is deliberately not labeled ready or playing. The [evidence and exact limits](../../experiments/bilibili-player-lab/README.md) distinguish the direct-player observation, fixture tests and pending deployed-iframe acceptance. No account grant or full-media scraper is claimed.
