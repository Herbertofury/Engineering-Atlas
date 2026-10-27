# Maintained upstream candidates, not automatic winners

[Adapter laboratory](README.md) · Checked October 26, 2026

| Candidate | Observed release | Starting use | Adoption gate |
|---|---|---|---|
| [yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/tag/2026.10.26) | 2026.10.26 | Permitted specialist video metadata/extraction | Exact route, access, media completeness, security and measured advantage |
| [gallery-dl](https://github.com/mikf/gallery-dl/releases/tag/v1.32.18) | 1.32.18, October 25 | Gallery-oriented extraction | Active upstream moved to [Codeberg](https://codeberg.org/mikf/gallery-dl); verify extractor/access, do not export sessions |
| [Crawlee](https://github.com/apify/crawlee/releases/tag/v3.18.2) | 3.18.2 | Established crawl orchestration | Bounded concurrency/recovery; no stealth or network-identity evasion |
| [Scrapy](https://github.com/scrapy/scrapy/releases/tag/2.19.0) | 2.19.0 | Queues and adaptive throttling | Lifecycle, memory, completeness and integration cost; remote control off unless authorized |
| [Nexus official SDK](https://github.com/Nexus-Mods/node-nexus-api) | Repository inspected; no latest GitHub release object | Existing official API integration | Exact API generation, license and capability parity |

Repository license metadata: yt-dlp Unlicense, gallery-dl GPL-2.0, Crawlee Apache-2.0, Scrapy BSD-3-Clause, Nexus SDK GPL-3.0. Bundled dependencies and distribution forms may add terms; review actual files before redistribution. This is not a legal compatibility determination.

[Scrapy AutoThrottle](https://docs.scrapy.org/en/latest/topics/autothrottle.html) adjusts delay from latency and bounded concurrency; fast error responses must not accelerate traffic. [Crawlee families](https://crawlee.dev/js/docs/quick-start) distinguish static HTML parsing from JavaScript rendering. Choose by required work, not browser-everything or regex-everything.

These packages were researched, not benchmarked or accepted as Atlas dependencies. No credentials, paid requests or third-party extractor downloads were used.

## HTML image-token candidates · 2026-10-27

[Controlled parser study](https://github.com/Herbertofury/Engineering-Atlas/blob/main/experiments/html-image-parser-lab/README.md): maintained parse5/SAX and htmlparser2 candidates correct 21 targeted image-token fixtures while preserving the pinned adapter's other guards. Repaired htmlparser2 improved larger clean-workload medians but regressed small-input time and one observed maximum. A streaming allocation variant did not beat its median. These are isolated candidates, not a universal parser ranking or a live-platform deployment.

## Live-web wrapper evaluation · 2026-10-27

[LiveWeb-IE review](../../research/2026-10-27-liveweb-ie.md) distinguishes reported extraction quality from simple-page latency, complete-media coverage and dataset reuse restrictions. This is a methodology candidate only; its non-commercial dataset has not been downloaded or used. No automatic adoption or target-project recommendation.

## Extractor release refresh · 2026-10-27

[Release and advisory review](../../research/2026-10-27-extractor-release-review.md): yt-dlp 2026.10.26 changes Python/Windows compatibility and bundled security dependencies. It remains a researched candidate, not an installed or benchmark-accepted Atlas adapter. No paywall or session-export route was tested.
