# Bilibili official-player lane

Checked 2026-10-27. Source [BILI01]. Reuses Bilibili's documented external player, not an unofficial media downloader or account-session exporter. The public example BV1B7411m7LV comes from that documentation. It is a media card, not a claim that the content is a game or owned by Atlas.

The [direct-player observation](direct-official-player-2026-10-27.json) records anonymous public title/creator, readiness, explicit play and pause with autoplay false in the cloud browser. An initial transient unavailable state is retained. This direct top-level test does not itself verify the new sandboxed Atlas iframe.

## Implementation and contract

The additional card retains canonical source/video identity and exact observed title/creator. No separate poster URL is guessed or copied; its cover state explicitly says the poster remains inside the official player. Gallery, captions and multipart completeness are uncollected, not verified empty. The original four source-card objects are unchanged.

Only a canonical BV identity can construct the fixed HTTPS official player URL, with autoplay=0. Player loading is explicit. No autoplay permission is granted to the iframe; sandbox allows only scripts, its own origin and presentation. It has a descriptive title and explicit unload control. Playback controls remain inside the official player because this route does not provide an implemented trusted playback-state API to Atlas.

A loaded frame therefore emits only frame-loaded, never ready/playing. Failure, unverified timeout and unloading remain separate. Reload/unload fences old callbacks, clears timers and removes the old frame. Invalid input is rejected before disturbing a prior valid frame. Network/attachment failures do not trigger automatic retry loops or discard the source.

[Controller fixtures](../../tests/bilibili-player.test.mjs) cover URL bounds, no autoplay, minimal sandbox, load-versus-playback distinction, failure/timeout/retry, stale callbacks, invalid-ID preservation and cleanup. Fixture validation additionally binds provider, canonical source URL, video ID and no-guessed-cover scope, and compares the previous four cards unchanged. These are generated lifecycle tests, not live provider failure tests.

The workbench now describes five cards, 19 known gallery entries and 19 video entries; only this selected public embed is added. No search API, full platform catalogue, private account access, automatic caption collection or universal playback claim is implemented. Deployed iframe testing and exact served identities must be recorded separately.
