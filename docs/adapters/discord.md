# Discord adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Messages expose attachments and embeds through permission-controlled APIs. Check message-content access and channel-history permissions for the actual application. Attachment availability can expire.

## Reuse before replacement

Use maintained official-API libraries and explicitly authorized bot/application access. Do not automate personal user tokens or export sessions into a scraper.

## Acceptance workload

Guild/channel/message identity; attachments versus embeds; spoilers; edit/delete reconciliation; expiry; rate limits; denied channels.

## Evidence status

Message schema reviewed; no bot grant or private-message collection configured. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://docs.discord.com/developers/resources/message) · [Shared collection contract](contract.md)

## October 28 research expansion

[Current platform-family research](social-platforms.md) adds author/avatar attribution, full body/media/files, follow/import distinctions and current interface limits. [Coverage catalog](coverage-catalog.md) and [authenticated fixtures](authenticated-research.md) describe the remaining work. This update preserves the evidence status above; it does not broaden an earlier narrow success or erase a failure.
