# Media library failure recovery · 2026-10-27

The v3 YouTube API loader cached its rejected promise indefinitely. Its next
explicit Load action returned the same rejection rather than trying again.
The retained baseline function reproduces that behavior in an isolated mocked
script environment. No network failure was manufactured on a real provider.

The v4 loader deduplicates only pending attempts, requires actual player
capability before reporting library readiness, and releases the failed attempt
for a later explicit retry. It cleans up its timer, failed script node and owned
global readiness callback. There is no automatic retry loop. Script attachment
failure, network-error events and timeout events are fixture-tested using the
actual current loader source. Successful retry and subsequent ready-state reuse
are tested separately. Older asynchronous player-load errors cannot overwrite
newer selected-player state.

All 45 Node and 53 Python repository tests passed locally. Existing public-fixture
validation, provider-bound media URLs, pinned HLS bundle/SRI, explicit load controls
and autoplay-off behavior remain. This is a recovery repair, not a throughput win,
complete adapter implementation, guarantee of playable YouTube content or target
project recommendation. Full browser verification of the published v4 player
still follows publication; simulated failures are not live-provider evidence.

Official callback contract:
https://developers.google.com/youtube/iframe_api_reference

Source tests:
- tests/resource-loader.test.mjs: pending-request sharing and manual retry lifecycle.
- tests/youtube-recovery.test.mjs: actual loader with mocked script/timer environment,
  plus retained v3 failure reproduction.
- tests/media-lab.test.mjs: unchanged full public fixture and provider binding checks.
