# Real public-media browser check

[Workbench source](../../docs/media-lab/README.md) · October 26, 2026 · Chrome 155/Linux

The [first exported receipt](first-browser-receipt-2026-10-26.json) contains real browser events, not simulated player success. Four public records retain 19 known gallery entries and 18 video entries. This is selected source-snapshot completeness, not every post or every provider.

- 22 of 23 preview image nodes decoded. The YouTube thumbnail failed; a separate fetch of that exact URL returned HTTP 200 with a short text/html “Site Unavailable” response, not an image. Its source reference was retained, not replaced or hidden.
- One real Steam trailer reached metadata/canplay, played to 13.36 seconds with a 640×360 video surface, and paused successfully. Other trailer entries were not all playback-tested.
- This browser used native HLS support, so the fallback HLS.js library was not loaded. A native success does not certify the fallback route.
- The official YouTube IFrame API reached ready, but actual playing was not verified; the visible player remained buffering. Readiness is not playback success.

No target-project recommendation follows from this check. No private account data or authenticated post media is included. The follow-up implementation adds explicit buffering, scripted-playback-blocked and unverified-timeout states rather than leaving a misleading ready label after a failed play request.
