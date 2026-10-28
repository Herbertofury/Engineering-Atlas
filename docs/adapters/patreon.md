# Patreon adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Official v2 API and authorized browser access are separate lanes. The current documentation announces v1 retirement on October 7, 2026; posts require the campaigns.posts scope.

## Reuse before replacement

Evaluate maintained gallery-dl and the existing provider-specific parser before adding new extraction logic. An extractor listing does not prove every paid post or media variant works.

## Acceptance workload

Post/campaign identity; carousel order; embedded video versus attachments; pagination; entitlement changes; expiry; last-good preservation.

## Evidence status

Documentation reviewed; authenticated extraction and full-media parity not yet tested. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://docs.patreon.com/) · [Shared collection contract](contract.md)

## October 28 research expansion

[Current platform-family research](paid-platforms.md) adds author/avatar attribution, full body/media/files, follow/import distinctions and current interface limits. [Coverage catalog](coverage-catalog.md) and [authenticated fixtures](authenticated-research.md) describe the remaining work. This update preserves the evidence status above; it does not broaden an earlier narrow success or erase a failure.
