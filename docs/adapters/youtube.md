# YouTube adapter research

[Adapter laboratory](README.md) · Reviewed October 27, 2026

## Current route

Use the official IFrame player for playback. Metadata, player availability and account authorization are distinct capabilities. Owners can disable embedding; missing client identification can also fail playback.

## Reuse before replacement

Compare official API/player routes with maintained yt-dlp metadata extraction only where permitted. Extractor coverage is not permission to bypass restrictions.

## Acceptance workload

Exact video/channel ID; thumbnails; playlists; captions; live state; embed errors; user-initiated playback; no autoplay by default.

## Evidence status

Earlier tests reached player-ready but remained buffering. The v10 public test now reached actual official-player playback and Pause for M7lc1UVf-VE, after approximately 123.536 seconds from Play, including the retained 30-second unverified timeout. Its thumbnail still failed. This is one public example, not reliable playback or authenticated coverage. No recommendation transfers to a project until it beats that project's actual baseline without sacrificing requirements.

[Primary platform reference](https://developers.google.com/youtube/iframe_api_reference) · [Shared collection contract](contract.md)

## Scoped identity repair

The single-watch-video workbench now binds source, canonical card, player and thumbnail video IDs. Nine generated mismatches fail while all retained fields remain unchanged. Channels, playlists, Shorts source routes and multi-video collection schemas remain outside this contract. URL agreement does not establish ownership or complete collection. See [retained before/after and deployed evidence](../../experiments/youtube-identity-lab/README.md).
