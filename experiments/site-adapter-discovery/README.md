# Public specialist-site discovery observations

This pass inspected a few publicly available pages to distinguish a feasible extraction candidate from an assumed implementation. It did not run an authenticated adapter, retrieve paid content, download files or benchmark GameSync Next.

[Sanitized receipt](public-observations-2026-10-28.json) records the observed surface, failures and fields not established. Raw HTML is deliberately not published: it can contain volatile guest-session identifiers and unnecessary third-party content.

[Focused source verification](source-verification-2026-10-28.json) records direct review of 34 primary-document URLs, including retained empty/failed results and precise corrections. This distinguishes source-section inspection from broad search discovery; it is not live API or authenticated adapter acceptance.

[Documentation validation receipt](validation-2026-10-28.json) records repository checks, catalog integrity, preserved wiki history and the separate pending wiki-publication step. The Python suite passed 74 tests; the Node command passed all 17 JavaScript contract files. Both existing asset-identity checks passed. None of these checks is an authenticated site fixture.

The useful findings are an actual author/uploader mismatch on Dwemer Mods, a loading shell on WCIF's initial HTML, server-rendered creator/avatar links on Plumbdex, and a public forum/feed-discovery surface on TS4 Rebels. Each needs a separate completeness and authenticated-access test before a working-support claim.

[Dwemer Mods](../../docs/adapters/dwemer-mods.md) · [WCIF](../../docs/adapters/wcif.md) · [Plumbdex](../../docs/adapters/plumbdex.md) · [TS4 Rebels](../../docs/adapters/ts4-rebels.md)
