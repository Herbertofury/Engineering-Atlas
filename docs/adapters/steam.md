# Steam adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Separate public game metadata/media, user-library authorization, official widgets and client actions. Sign-in proves identity, not arbitrary wishlist-write permission.

## Reuse before replacement

Reuse exact-AppID integration and official APIs/widgets. Evaluate maintained SDKs for the required capability, not a replacement authentication stack.

## Acceptance workload

AppID identity; regional metadata; trailers versus screenshots; unknown ownership; private libraries; stale refresh; player failures.

## Evidence status

Official API route reviewed; Atlas has not inherited another app’s credentials. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://partner.steamgames.com/doc/webapi_overview) · [Shared collection contract](contract.md)
