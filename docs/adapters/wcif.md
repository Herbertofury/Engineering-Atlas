# WCIF.cc adapter research

[Adapter laboratory](README.md) · Public review: October 28, 2026 UTC

## Site role and preferred candidate

WCIF is both a discovery/index surface and a site with its own hosted-item and community views. Its [home page](https://wcif.cc/) names Patreon, Tumblr, CurseForge, The Sims Resource, other websites and Sim File Share as search sources, and links its own latest uploads separately. Preserve that distinction in every record: an indexed Patreon result is not a Patreon API response or an entitlement grant.

The [creator directory](https://wcif.cc/creators) exposes source/social-link columns and category filters. In the inspected unauthenticated HTTP response, the directory body remained a loading placeholder. That response establishes the page shell, not a successful creator-list extraction. Do not ship a static scraper that interprets this state as zero creators.

Preferred next candidate: a permitted rendered-page extraction of the actual creator/item component, with the network contract investigated only through authorized first-party behavior. No public developer API or stable internal endpoint was verified here. Do not invent an `/api/…` route from the framework or site name.

## Proposed field and follow mapping

Store WCIF's own item/creator identity when visible, the original content URL and provider, uploader/indexer identity, claimed original creator, tags, game/type/style, preview images and original-source links. Resolve author portraits from the correct creator/profile component; a WCIF result thumbnail does not establish an avatar. Keep source timestamps separate from the time WCIF added the index entry.

For indexed content, dispatch to the original provider adapter to retrieve the full authorized post and files. For hosted content, use a WCIF-specific file record and verify its access/download behavior. Preserve the connection between the index record and the original record instead of creating duplicate feed entries or replacing original author links.

The page advertises favorites/following concepts, but no authenticated native operation was tested. Support local follows as app state; mark native follows, favorite import and native-state read-back as `authenticated_fixture_needed`. A search filter for paywalled items classifies a result; it does not unlock the source post.

## Acceptance fixtures

Require one rendered creator profile with a custom avatar and several source accounts, a hosted item, an external Patreon/Tumblr item, paginated search results, changed original URLs, an incorrect creator match, missing images, and guest versus authenticated follow state. Confirm that loading, no-results and denied-access states are distinguishable. Return partial results with a continuation when pagination has not finished.

[Search UI observed from the site's own latest-upload link](https://wcif.cc/search?hostedOnly=true&sortBy=normalizedAdded&sortOrder=desc&sources=patreon,tumblr,curseforge,thesimsresource,website) · [Public observation receipt](../../experiments/site-adapter-discovery/public-observations-2026-10-28.json) · [Login workflow](authenticated-research.md)
