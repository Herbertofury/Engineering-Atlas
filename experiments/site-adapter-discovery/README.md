# Site discovery and scoped extraction observations

## Six-game expansion and authenticated fixture

The [six-game manifest](game-research-2026-10-28.json) retains 179 game scope records, actual item/profile observations and 420 new source records. Of those source records, 321 represent primary observations and 99 retain failed, partial, shell or search-only retrieval attempts. The [game guides](../../docs/adapters/games/README.md) explain the extraction boundaries and source-specific identity roles. Shared domains are canonicalized in the 248-entry catalog.

The [Mod Collective browser receipt](modcollective-browser-2026-10-28.json) records a separate user-authorized sign-in and one real creation: a 400-character body, linked creator, decoded creator avatar, three ordered decoded images and a 3,407,157-byte DBPF file delivered through the site's normal free-download flow. The file's hash and magic are retained; its binary, full post body and private account details are not published. This is a scoped observation, not a reusable accepted adapter.

The [connection ledger](authentication-observations-2026-10-28.json) distinguishes successful sign-ins, tool-policy blocks before login and a later browser-backend outage. The [expansion validation receipt](game-expansion-validation-2026-10-28.json) records repository verification. The [wiki publication queue](wiki-publication-queue-2026-10-28.json) retains all 40 projected-page hashes and the additive sidebar navigation; it explicitly remains unpublished.

## Initial public specialist-site pass

The initial pass inspected a few publicly available pages to distinguish a feasible extraction candidate from an assumed implementation. That earlier pass did not run an authenticated adapter, retrieve paid content, download files or benchmark GameSync Next. Its receipts remain unchanged; the later Mod Collective observation is recorded separately above.

[Sanitized receipt](public-observations-2026-10-28.json) records the observed surface, failures and fields not established. Raw HTML is deliberately not published: it can contain volatile guest-session identifiers and unnecessary third-party content.

[Focused source verification](source-verification-2026-10-28.json) records direct review of 34 primary-document URLs, including retained empty/failed results and precise corrections. This distinguishes source-section inspection from broad search discovery; it is not live API or authenticated adapter acceptance.

[Documentation validation receipt](validation-2026-10-28.json) records repository checks, catalog integrity, preserved wiki history and the separate pending wiki-publication step. The Python suite passed 74 tests; the Node command passed all 17 JavaScript contract files. Both existing asset-identity checks passed. None of these checks is an authenticated site fixture.

The useful findings are an actual author/uploader mismatch on Dwemer Mods, a loading shell on WCIF's initial HTML, server-rendered creator/avatar links on Plumbdex, and a public forum/feed-discovery surface on TS4 Rebels. Each needs a separate completeness and authenticated-access test before a working-support claim.

[Dwemer Mods](../../docs/adapters/dwemer-mods.md) · [WCIF](../../docs/adapters/wcif.md) · [Plumbdex](../../docs/adapters/plumbdex.md) · [TS4 Rebels](../../docs/adapters/ts4-rebels.md)
