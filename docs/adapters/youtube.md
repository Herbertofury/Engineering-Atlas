# YouTube adapter research

[Adapter laboratory](README.md) · Reviewed October 26, 2026

## Current route

Use the official IFrame player for playback. Metadata, player availability and account authorization are distinct capabilities. Owners can disable embedding; missing client identification can also fail playback.

## Reuse before replacement

Compare official API/player routes with maintained yt-dlp metadata extraction only where permitted. Extractor coverage is not permission to bypass restrictions.

## Acceptance workload

Exact video/channel ID; thumbnails; playlists; captions; live state; embed errors; user-initiated playback; no autoplay by default.

## Evidence status

Public metadata and official player-ready verified. Playback remained buffering; a 30-second unverified state is tested. Thumbnail response was unavailable in this environment. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://developers.google.com/youtube/iframe_api_reference) · [Shared collection contract](contract.md)
