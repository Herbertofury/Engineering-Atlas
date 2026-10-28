# Site adapter coverage catalog

[Adapter laboratory](README.md) · Checked **2026-10-28 UTC** (October 27 in America/Denver).

This catalog has **162 distinct service/scope entries**, **3 feed protocols**, and **406 deduplicated source URLs**. It includes unverified candidates, file hosts, funding references and development tools. These are **research entries, not 162 implemented adapters**. No new authenticated content acceptance was obtained in this pass.

[Machine-readable catalog](../../data/site-adapter-catalog.json) · [Author/post/media contract](author-post-media-contract.md) · [Secure login research](authenticated-research.md) · [Acceptance and adoption](validation-and-adoption.md)

## How to read this catalog

Each row states the preferred starting route and follow semantics. Open the linked guide for identities, avatars, body/media, file delivery, pagination, failure cases and primary sources. The JSON retains per-source retrieval status: a search excerpt, JavaScript shell or failed page must not be treated as a verified API response. Some mod-host public observations came from first-party indexed pages; their exact selectors and complete behavior still require current fixtures.

`primary_documented` means a primary source describes the scoped behavior; `public_observed` means public page/media evidence; `candidate` means current extraction still needs establishment. None means full support. The original 13 workbenches and their earlier receipts remain authoritative for their narrowly tested cases.

## Mod hosts, repositories and distribution tools

65 entries.

| Platform / scope | Starting route and access | Follow behavior | Research state |
|---|---|---|---|
| [3DM Mod Station](mod-hosts.md) | Homepage timed out; indexed first-party detail currently accessible in search | Local uploader/credited creator follow; visible native 关注 label; import unverified | `candidate` |
| [9DM / 9damaogame](mod-hosts.md) | Primary domain inaccessible; no reliable primary search result this pass | Historical candidate only; no native/import/API assertion | `candidate` |
| [AFK Mods](mod-hosts.md) | Public forum/download navigation; account actions separate | Local member follow; native follow/import fixture needed | `public_observed` |
| [Aqxaro Mods](mod-hosts.md) | Primary page inaccessible in this pass | Unverified candidate; no author/API/follow claim | `candidate` |
| [Around the Sims](mod-hosts.md) | Public static pages; some release announcements link Patreon early access | Local site/creator follow; newsletter/Patreon follow not auto-imported | `public_observed` |
| [BeamNG Repository](mod-hosts.md) | Public resource/member pages; account actions separate | Local author follow; People You Follow UI observed; import fixture needed | `public_observed` |
| [Bethesda.net Creations](mod-hosts.md) | Public catalog plus legitimate Bethesda account; purchased/verified content entitlement and platform constraints | Local creator follow; library/subscription is distinct from author follow; authenticated import fixture needed | `candidate` |
| [BuiltByBit](mod-hosts.md) | V2 tokens/OAuth; some operations free, others Ultimate/invite permission | Local creator follow only where API permits; imports need explicit endpoint entitlement | `primary_documented` |
| [CurseForge](mod-hosts.md) | Developer x-api-key; game/project availability and distribution controls | Local author follow via authorId search; native follow/import not established here | `primary_documented` |
| [Cybermods](mod-hosts.md) | No direct accessible primary page this pass | No support claim; historical alias/candidate only | `candidate` |
| [Daymarr Workshop](mod-hosts.md) | Public Wix posts/gallery; external Nexus downloads observed | Local site/creator follow; email newsletter is separate consent action; no bulk follow import proven | `public_observed` |
| [ENBDev](mod-hosts.md) | Official download pages indexed; direct fetch redirect loop | Local project/tool release watch; no author follow/import contract | `candidate` |
| [Factorio Mod Portal](mod-hosts.md) | Public metadata API; authenticated download token/session and bookmarks | Local owner follow; authenticated native bookmark import documented | `primary_documented` |
| [GameBanana](mod-hosts.md) | Public entity/RSS docs; signed-in app scope for account operations requires fixture | Local member follow; native subscriptions/import require confirmed auth endpoints | `primary_documented` |
| [Gamer-Mods](mod-hosts.md) | Public Russian catalog and file bylines; login shown | Local uploader/translator follow; native/import unconfirmed | `public_observed` |
| [GIANTS ModHub](mod-hosts.md) | Public official catalog and details | Local named-author follow only if supported by author listing; native/import unconfirmed | `public_observed` |
| [GTA5-Mods](mod-hosts.md) | Public creator/submission pages; account gates need per-action fixtures | Local creator follow; native follow and bulk import unconfirmed | `public_observed` |
| [GTAall](mod-hosts.md) | Public category/submission listing | Local author/uploader follow; native/import unconfirmed | `public_observed` |
| [GTAinside](mod-hosts.md) | Public game/category listing | Local author follow after detail/profile fixture; native/import unconfirmed | `public_observed` |
| [Hangar](mod-hosts.md) | Anonymous public info; API key -> expiring HangarAuth JWT for authenticated actions | Local user/organization follow; native watch/import support requires fixture | `primary_documented` |
| [HytaleHub](mod-hosts.md) | 403 during retrieval | Discovery candidate; local follow only after content fixtures; native/import unconfirmed | `candidate` |
| [Indie DB](mod-hosts.md) | Public RSS/profiles; account for watch state | Local creator/project follow; native watch observed; import unproven | `primary_documented` |
| [LCPDFR](mod-hosts.md) | 403 during retrieval; legitimate browser/account fixture required | Local member follow plan; native/import unconfirmed | `candidate` |
| [LoversLab](mod-hosts.md) | Direct retrieval unavailable; legitimate member/age/content access fixture required | Local profile follow plan; native follow/import and file access untested | `candidate` |
| [ManiaExchange / TrackmaniaExchange](mod-hosts.md) | Public catalog explicitly links official API | Local creator follow; Favorite Author Maps observed; import needs docs/auth fixture | `public_observed` |
| [MCPEDL](mod-hosts.md) | Public JS catalog; login/VIP shown | Local creator follow; native follow/import unverified | `public_observed` |
| [MCreator Community](mod-hosts.md) | Public news/community mod pages; account for member actions | Local creator follow; native/import unconfirmed | `public_observed` |
| [Minecraft Forum](mod-hosts.md) | Public forum threads/profile pages; signed-in account for watch state | Local member/thread follow; native subscriptions import fixture needed | `public_observed` |
| [MinecraftMaps](mod-hosts.md) | Initial retrieval 403; public page fixture needed | Local author follow plan; native/import unconfirmed | `candidate` |
| [Mod Collective](mod-hosts.md) | Public artist catalog; ClubMOD/early access entitlement | Local artist follow; native artist Follow/Followers observed; import fixture needed | `public_observed` |
| [Mod DB](mod-hosts.md) | Public RSS and profiles; legitimate login for account features | Local member/team/project follow; native watch exists but import fixture needed | `primary_documented` |
| [Mod The Sims](mod-hosts.md) | Public downloads; member account for follow/favorites/history | Local creator follow; native creator follow documented; import needs signed-in fixture | `public_observed` |
| [mod.io](mod-hosts.md) | Read API key using assigned game/user API host; scoped OAuth for user state | Local author follow; documented native mod subscriptions and /me/subscribed import | `primary_documented` |
| [ModBay](mod-hosts.md) | Public author/byline/feed; account for member actions | Local author follow; native follow/import needs fixture | `public_observed` |
| [ModLand](mod-hosts.md) | Public game/category catalog | Local uploader/origin creator follow; native/import unconfirmed | `public_observed` |
| [Modrinth](mod-hosts.md) | Public metadata; PAT/OAuth for private data and writes | Local author follow; documented native project follow and followed-project import | `primary_documented` |
| [Modtale](mod-hosts.md) | Official v1 API examples; X-MODTALE-KEY scoped permissions | Local owner/organization follow; native/import unverified | `candidate` |
| [ModWorkshop](mod-hosts.md) | Public mods and member bylines | Local member follow; native/import/API details unconfirmed | `public_observed` |
| [Nexus Mods](mod-hosts.md) | API key/SSO for v1; public v2 reads and selected OAuth operations | Local author follow; native mod/author tracking and imports need scoped authenticated fixtures | `primary_documented` |
| [Openplanet](mod-hosts.md) | 403 during retrieval | Local plugin-publisher follow plan; native/import unconfirmed | `candidate` |
| [OverTake](mod-hosts.md) | Public download catalog; account/premium download fixture needed | Local member follow; resource watch/import unconfirmed | `public_observed` |
| [Planet Minecraft](mod-hosts.md) | Public site/search; first retrieval 403; registration page uses Turnstile | Local creator follow; account page explicitly advertises following content/creators; import fixture needed | `candidate` |
| [PlayGround.ru](mod-hosts.md) | Generic /files unavailable; current first-party per-game /file catalog indexed | Local uploader/origin author follow; native/import unconfirmed | `candidate` |
| [Polymart / voxel.shop](mod-hosts.md) | Documented delegated user authorization and purchase-aware URLs | Local author follow; native follow/import unproven; delegated downloads documented | `primary_documented` |
| [REDmod](mod-hosts.md) (reference/integration) | Official CDPR tool/docs | Dependency/tool source, not an author feed or mod-host adapter | `candidate` |
| [Schaken-Mods](mod-hosts.md) | Public catalog; login, subscriptions and Guild Mods visible | Local member follow; native follow/import and Guild entitlement fixture needed | `public_observed` |
| [Silverlock Script Extenders](mod-hosts.md) | Public static official release/compatibility pages, some links to Nexus | Local team/project release watch; no native creator follow/import | `public_observed` |
| [Sims 4 Studio Forum](mod-hosts.md) | Homepage timed out; legitimate forum fixture needed | Local member/creator-studio thread follow plan; native/import unconfirmed | `candidate` |
| [Sims File Share](mod-hosts.md) | Downloads explicitly require no login; invite account for upload | Local folder/file watch possible; no verified creator-follow stream/import | `public_observed` |
| [SimsDom](mod-hosts.md) | Current retrieved landing page limited | Local creator follow only after actual creator fixture; native/import unconfirmed | `public_observed` |
| [SimsFinds](mod-hosts.md) | Public catalog; premium page advertises skipping wait/direct source | Local displayed-creator follow with proven origin mapping; native/import unconfirmed | `public_observed` |
| [SpaceDock](mod-hosts.md) | Public mod/version pages; account for email follows | Local author follow; native per-mod email updates observed; import unproven | `public_observed` |
| [SpigotMC](mod-hosts.md) | Official simple JSON API public; premium downloads require legitimate account purchase | Local author follow; resource watch differs; native import unverified | `primary_documented` |
| [Steam Store / public game media](steam.md) | Preserve the existing Steam workbench: public game metadata/media, official widgets and separate account/library capabilities. Workshop has its own entry. | Local author/publisher references are separate from wishlists and Workshop subscriptions; native author following not certified. | `public_observed` |
| [Steam Workshop](mod-hosts.md) | Public details vary by method; API key/Steam user context or publisher credentials for restricted operations | Local creator follow; Workshop item subscription is installation/update state; creator-follow/import separate | `primary_documented` |
| [SteamDB](mod-hosts.md) (reference/integration) | Public informational site; scraping prohibited; no public API promised | Do not implement host/author-feed scraping; link-out/reference only | `primary_documented` |
| [Synthira](mod-hosts.md) | Primary page inaccessible in this pass | Unverified candidate; no author/API/follow claim | `candidate` |
| [TES Alliance](mod-hosts.md) | Public forum; membership page advertises unlimited downloads | Local member follow; native follow/import fixture needed | `public_observed` |
| [TESAll](mod-hosts.md) | Public Russian mod/news/forum pages; sign-in shown | Local uploader/translator/member follow; native/import fixture needed | `public_observed` |
| [The Sims Catalog](mod-hosts.md) | Public catalog with login/favorites; outgoing creator downloads | Local attributed creator follow; favorite/collection differs from author follow; import unproven | `public_observed` |
| [The Sims Resource](mod-hosts.md) | JS public catalog; login/VIP and download-state fixtures required | Local artist follow; native Following/Followers UI observed; import unproven | `public_observed` |
| [Thunderstore](mod-hosts.md) | Public package API; account/team context for upload | Local namespace/team follow; do not assert native creator follow/import | `primary_documented` |
| [Transport Fever Community](mod-hosts.md) | Filebase redirects to mandatory terms acceptance; account/consent fixture required | Local member follow plan; native/import unconfirmed | `public_observed` |
| [VectorPlexus](mod-hosts.md) | Both domain fetches timed out; current status unconfirmed | Historical/local locator only until live proof; native/import unconfirmed | `candidate` |
| [WolvenKit](mod-hosts.md) (reference/integration) | Official project/wiki and GitHub releases | Project release watch; not a multi-author content feed | `candidate` |

## Memberships, paid content and marketplaces

37 entries.

| Platform / scope | Starting route and access | Follow behavior | Research state |
|---|---|---|---|
| [Afdian / 爱发电](paid-platforms.md) | Official developer guide describes creator order/sponsor API and webhooks, not patron-wide post export. Official game guide explicitly includes mod creators. Full paid body/files need authorized session fixtures. | Local follow. Native following, sponsoring and entitlement must be separately observed; no payment mutation included. | `primary_documented` |
| [ArtStation Marketplace](paid-platforms.md) | Official help documents account Library with view/download asset links. Public portfolio/project content and store product are separate resource types. | Official seller help says product purchase/download automatically follows creator; record this native state independently of app local follow. Automation untested. | `candidate` |
| [Boosty](paid-platforms.md) | Public creator pages show subscription tiers and individual project offerings. Official help app is JavaScript-only in this research fetch. Full body/media/attachments and entitlement require legitimate logged-in fixture; no public reader API verified. | Local follow. Native free follow/subscription status and mutations unverified. | `candidate` |
| [BOOTH](paid-platforms.md) | Official buyer guide documents download products via paid order history/library/email. Files removed by shop owner become unavailable. Public shop/item content separate from buyer downloadable files. | Official native shop follow supports new-item feed; local follow. Purchase does not equal follow. | `primary_documented` |
| [Buy Me a Coffee](paid-platforms.md) | Official help distinguishes public, supporter and member content; creator webhooks report account events. No patron-wide content-reading API established in reviewed sources. | Official free follow/unfollow UI distinct from support and membership; local follow. Native automation untested. | `candidate` |
| [CGTrader](paid-platforms.md) | Official buyer help provides /profile/purchases for model files and invoices. API-access help exists but no buyer library API was verified. | Local follow; native follow status unverified. | `candidate` |
| [Ci-en](paid-platforms.md) | Official help documents restricted creator articles/benefits, support-month access, separately purchasable backnumbers and creator-set viewing windows. No public reader API established. Exact bodies/files/history need authorized login fixtures. | Official free Follow is distinct from paid plan, tips, backnumbers and crowdfunding. Local follow supported by app design; native automation untested. | `candidate` |
| [Cults3D](paid-platforms.md) | Official GraphQL search extracts identify a metadata/photo interface and exclude model files; direct page retrieval remains unverified. Inspect the current schema before implementation. Buyer library/order help is a separate authenticated delivery route. | Official FAQ confirms following creators; local follow. Native mutation untested. | `candidate` |
| [DLsite](paid-platforms.md) | Official service notices establish purchased download access and creator/circle follows. Current help/purchase pages were inaccessible to research fetch; treat complete buyer library/files parser as login-needed and unverified. No public buyer API verified. | Official circle/brand/publisher Follow and follow-list documented in service notice; local follow. Current native state/action selectors untested. | `candidate` |
| [DonationAlerts](paid-platforms.md) (reference/integration) | Official authenticated REST/OAuth API covers donation/account alerts, not Boosty subscriber posts. Useful as author support link and creator-owned donation integration only. | Local follow of author link; payment/donation is not follow. Never initiate payment. | `candidate` |
| [Fansly](paid-platforms.md) | Official help documents timeline visibility separately from media permissions, with follow, tier, purchase and other conditions. Logged-in entitlement is per object; no public reader API verified. | Native free follow is documented, sometimes requiring verified payment method; subscription auto-follows. Local follow. | `candidate` |
| [Fantia](paid-platforms.md) | Official help documents post attachment/file types and downloadable works, with one-time goods separate from fanclub posts. No public reader API established; paid/age/account state must be observed through authorized user session. | Local follow. Free fanclub plan is distinct from a generic social follow and from paid membership. Native mutations untested. | `primary_documented` |
| [Fanvue](paid-platforms.md) | Official September 2026 help says API keys are restricted and gradually issued; general user access unavailable. No universal fan-content API claim. Authorized session and rights check needed for any integration. | Follow-for-free referenced in official creator onboarding; local follow. Native follow automation untested. | `candidate` |
| [Fourthwall](paid-platforms.md) | Official Platform/Storefront APIs and a Memberships API with List/Get Posts exist; shop RSS/JSON product feeds also documented. Shop-admin access is distinct from patron-wide paid reading, which remains unverified. | Local follow. Mailing-list membership, paid subscription and supporter state must remain separate; native free follow unverified. | `primary_documented` |
| [Ghost publications](paid-platforms.md) | Official Content API is read-only published public data keyed per site; it is not subscriber authentication or permission to retrieve protected body. Member session on publication needed for paid content. | Local follow; newsletter subscription and paid tier read separately. No universal cross-Ghost follow. | `public_observed` |
| [Gumroad](paid-platforms.md) | Public product/profile surface plus buyer Library or receipt link for owned files. Official API/licensing docs focus creator products/sales/licenses; do not mistake these for arbitrary buyer-library export. | Local follow; native email/follow state needs separate verification. Product ownership is not author follow. | `candidate` |
| [itch.io](paid-platforms.md) | Official authenticated server API includes buyer /profile/owned-keys with profile:owned scope, game and creator records. Free downloads need not create ownership. Authorized download pages handle the actual entitled upload set. | Official native follow exists and populates feed; local follow. Follow mutation API not established. | `primary_documented` |
| [Jinxxy](paid-platforms.md) | Official Creator API help confirms creator store/product/order/customer/license integration. The current API docs URL returned no readable body, so exact headers, scopes and rate limits remain a schema-verification gap. No buyer-wide library export established. | Local follow; native follow/customer subscription state and actions unverified. | `primary_documented` |
| [Ko-fi (posts, memberships and shop)](paid-platforms.md) | Official integration is payment-event webhook for creators, not documented reader feed. Supporter posts require linked Ko-fi account; shop delivery uses purchase download page/email. Use authorized web fixtures for content extraction. | Native follows exist per notification help; local follow available. Native follow action/read selectors untested; membership is separate. | `primary_documented` |
| [Lemon Squeezy](paid-platforms.md) | Official store API covers merchant data. Customer My Orders separately provides owned downloads/links via email magic-link sign-in. API files have expiring signed URLs; no general buyer API assumed. | Local follow; store customer/subscription is not author follow. | `candidate` |
| [Liberapay](paid-platforms.md) (reference/integration) | Public funding profile and connected-account identity are relevant author links. Official rules make it donations without promised recompense; not a paid-file or exclusive-post source. | Local follow. Donation recurrence is financial support, not follow; never initiate donation. | `candidate` |
| [Locals](paid-platforms.md) | Official per-account RSS supported when community enables it. User obtains link while signed in; secret URL can be regenerated; supporter access loss stops new feed updates. Full text/history/files beyond feed coverage need session fixtures. | Local follow; community membership/supporter state separately observed. No follow API verified. | `primary_documented` |
| [LoyalFans](paid-platforms.md) | Current official terms restrict automated scraping/monitoring. Page extraction is policy-blocked absent separate platform authorization. Fallback is user-provided metadata, expressly approved embed/share data and ordinary source links. | Native Follow UI publicly observed on creator pages; local follow. Paid subscription separate; automation untested. | `public_observed` |
| [Memberful-powered sites](paid-platforms.md) | Official GraphQL/API and webhooks integrate a creator membership business. Content may live on separate WordPress/custom origin. No universal patron-content reader established. | Local follow of actual author/site; Memberful subscription is entitlement, not a social follow. | `candidate` |
| [MyMiniFactory / Tribes](paid-platforms.md) | Official Tribes help sends subscribers to Library > My Tribes for distributed files; release timing depends on creator. Supports mixed 3D/PDF/ZIP objects. Reader API unverified. | Local follow; native follow and Tribe tier read/action require authorized verification. | `candidate` |
| [OnlyFans](paid-platforms.md) | Official terms URL identified but research fetch could not open it. Public reader API, full post extraction, downloadable files and permitted archiving not verified. Treat as manual/metadata/open-in-site candidate pending current official review. | Local follow only in current evidence; native free/paid states and actions need authorized verification. | `candidate` |
| [Open Collective](paid-platforms.md) | Official legacy docs identify GraphQL v2, OAuth/personal tokens. Useful funding collective identity/public updates; not presumed per-patron mod archive or download source. | Local follow; native follower/contributor/financial supporter distinctions must be verified against current schema. | `candidate` |
| [Patreon](paid-platforms.md) | Official API v2 documents campaign posts, HTML content and embed attributes; campaigns.posts authorization must be validated for the requested campaign. Do not assume an ordinary patron token can read arbitrary paid campaigns or that all web attachment formats are covered. | Local follow supported by app design. Native free membership, paid entitlement and renewal are separate states; native action integration unverified. | `primary_documented` |
| [Payhip](paid-platforms.md) | Official Public API currently covers coupons and license keys, not general buyer library. Official help documents customer download pages and revoked access after refund/cancellation. | Local follow; customer membership/subscription is separate. Native social follow unverified. | `primary_documented` |
| [pixivFANBOX](paid-platforms.md) | Official help documents Blog/Image/File/Text/Video-or-Music post styles and embedded files. Reader API not established. Authorized user session needed for supported tiers and age settings. | Native Follow and Supporting are documented different states; supporting replaces followed status. Local follow independent. | `primary_documented` |
| [RenderHub](paid-platforms.md) | Platform admin response confirms normal purchased downloads and account troubleshooting. Public product pages expose seller/follow UI. No reader API established; authorized account fixture needed. | Public + Follow UI observed; local follow. Native read/action untested. | `candidate` |
| [Renderosity](paid-platforms.md) | Official support covers marketplace download access, removed products and secure downloader constraints. No public patron/buyer library API verified. | Local follow; native favorite/vendor watch/follow semantics unverified. | `candidate` |
| [Sellfy](paid-platforms.md) | Official creator webhooks/store-management MCP and oEmbed documented. No buyer-wide content-reading API established by these sources. Use authorized customer download page fixtures. | Local follow. Mailing list/customer/subscription status distinct; native social follow unverified. | `candidate` |
| [SubscribeStar](paid-platforms.md) | Official read-only OAuth2 GraphQL API documents account, subscription and payment scopes plus cursor connections. Public docs do not establish complete patron-post/media export. API usage restrictions require review before out-of-platform content use. The API forbids using it to provide benefits outside the platform; an off-platform full-content reader remains unaccepted without applicable platform permission. | Local follow. Native subscription read can be scoped; API explicitly cannot manage subscriptions or make platform changes. | `primary_documented` |
| [SubscribeStar.adult](paid-platforms.md) | Separate official OAuth2 GraphQL API. Published reference is read-only and lists creator financial scopes; verify exact subscriber schema rather than copying .com assumptions. Help documents post attachments and external archive links. The API forbids using it to provide benefits outside the platform; an off-platform full-content reader remains unaccepted without applicable platform permission. | Local follow. Subscription entitlement observed only through authorized account; no API subscription mutation. | `primary_documented` |
| [Substack](paid-platforms.md) | Public feeds/pages plus authorized subscriber web/app. Official help says RSS sees Not subscribed variant for audience-specific sections; free and paid versions can differ within one post. No public paid-reader API verified. | Free publication subscription is documented; local author follow and native author-follow state should not be conflated with newsletter subscription or paid entitlement. | `primary_documented` |
| [Thangs](paid-platforms.md) | Official help describes creator-specific memberships with download-credit, monthly-release and chapter models. Download may consume credits, so indexing cannot trigger it automatically. | Local follow; native follow/subscriber status unverified in this research. | `candidate` |

## Social, publishing, code and file platforms

47 entries.

| Platform / scope | Starting route and access | Follow behavior | Research state |
|---|---|---|---|
| [ArtStation](social-platforms.md) | documented RSS announcement; current creator feed availability requires check | Local feed subscription; native follow/import not certified. | `primary_documented` |
| [Behance](social-platforms.md) | documented sharing/embed; no current new-app reader API certified | Local; native following/import not certified. | `primary_documented` |
| [Bilibili](social-platforms.md) | restricted: approved Open Platform app and creator authorization | Local; native following/import requires approved documented capability. | `candidate` |
| [Blogger](social-platforms.md) | documented v3 API; API key public data, OAuth private/user operations | Local; public post API is not a native Reader-follow API. | `primary_documented` |
| [Bluesky / AT Protocol](social-platforms.md) | documented AppView / PDS API; authenticated writes | Local plus authorized app.bsky.graph.follow record; import via graph API after endpoint verification. | `primary_documented` |
| [Cara](social-platforms.md) | candidate: official public site/help; no reader API verified | Local only; native follow/import not documented in retrieved source. | `candidate` |
| [Codeberg / Forgejo](social-platforms.md) | documented Forgejo instance API; inspect actual server version/schema | Local release tracking; native follow/watch/import only per actual schema. | `primary_documented` |
| [DeviantArt](social-platforms.md) | documented OAuth API; access and download flags vary | Local; watching/native follow operations require separate reference and consent. | `primary_documented` |
| [Discord](social-platforms.md) | restricted: installed bot with channel permissions and needed message-content intent | Local channel watch; native announcement follow is a webhook into a target channel. | `candidate` |
| [Dropbox](social-platforms.md) | documented shared-link download/API permissions | Local attachment reference; no author follow/import. | `primary_documented` |
| [Facebook](social-platforms.md) | restricted: Meta app review/access; public-reader API not verified in this research | Local only until a current supported native graph capability is proven. | `candidate` |
| [Fur Affinity](social-platforms.md) | restricted: official API closed beta announced June 2026 | Local; native watch/import requires beta API evidence. | `candidate` |
| [GitHub](social-platforms.md) | documented REST; public reads with limits; tokens for private/user actions | Local release tracking; user follow differs from repo watch/star. | `primary_documented` |
| [GitLab](social-platforms.md) | documented instance API; public/private project access varies | Local release tracking; native project notifications/import needs separate docs. | `primary_documented` |
| [Gofile](social-platforms.md) | documented beta API; bearer token and premium for most reads | Local attachment reference; no author follow/import. | `candidate` |
| [Google Drive](social-platforms.md) | documented Drive API; link-sharing and OAuth permissions apply | Local attachment reference; not a mod-author follow source. | `primary_documented` |
| [Instagram](social-platforms.md) | restricted: Meta professional-account authorization and review | Local; no general personal following import promised. | `candidate` |
| [Internet Archive](social-platforms.md) | documented metadata API; restricted/dark/download-disabled items differ | Local item/collection tracking; no verified mod-author native follow/import. | `primary_documented` |
| [Livedoor Blog / blog.jp](social-platforms.md) | documented public RSS; authenticated AtomPub is author-management API | Local feed subscription; AtomPub does not import native follows. | `primary_documented` |
| [Mastodon / compatible Fediverse](social-platforms.md) | documented instance API; visibility/auth depends on server | Local plus user OAuth native follow and following read. | `primary_documented` |
| [MediaFire](social-platforms.md) | documented Core API 1.5; auth requirements per endpoint | Local attachment reference; resource-follow is storage sync, not author follow. | `primary_documented` |
| [MEGA](social-platforms.md) | documented official SDK; public links vs account access separated | Local attachment reference; no author follow/import. | `primary_documented` |
| [Misskey](social-platforms.md) | documented instance API; MiAuth/OAuth user grants | Local plus authorized following permissions; no Mastodon endpoint assumptions. | `primary_documented` |
| [Newgrounds](social-platforms.md) | candidate public-source reader; official game API is not author feed API | Local; no native following import API verified. | `candidate` |
| [OneDrive / SharePoint](social-platforms.md) | documented Graph; sharing permissions and OAuth | Local attachment reference; no author follow/import. | `primary_documented` |
| [Pinterest](social-platforms.md) | restricted: approved app and OAuth; operation-user scope | Local; general arbitrary creator follow/import not certified. | `candidate` |
| [Pixeldrain](social-platforms.md) | documented API; public reads and authenticated mutations/premium constraints | Local attachment reference; no author follow/import. | `primary_documented` |
| [Pixelfed](social-platforms.md) | documented instance API; user token for documented account statuses | Local plus authorized instance follow/import after scope checks. | `primary_documented` |
| [Printables](social-platforms.md) | candidate: public site and official product download flow; public API unverified | Local; native follow/import unverified. | `candidate` |
| [Reddit](social-platforms.md) | restricted: explicit API approval plus OAuth; commercial use requires agreement | Local; native user-follow/import is not certified by the legacy friend API. | `candidate` |
| [Sketchfab](social-platforms.md) | documented Data API; OAuth for downloads | Local creator/model watch; native follow/import not certified. | `candidate` |
| [Squarespace](social-platforms.md) | documented RSS for supported collections | Local feed subscription; no platform-wide native graph. | `primary_documented` |
| [Telegram](social-platforms.md) | documented Bot API for installed bots; separate authorized user MTProto client | Local channel watch; user-only MTProto joinChannel changes subscriptions. | `primary_documented` |
| [Thingiverse](social-platforms.md) | documented legacy developer API; current v2 transition requires check | Local; native follow/import not certified. | `primary_documented` |
| [Threads](social-platforms.md) | restricted: Meta OAuth app product; arbitrary creator retrieval not verified | Local; native follow/import unsupported until documented and entitled. | `candidate` |
| [TikTok](social-platforms.md) | restricted: approved Login Kit / Display API and consenting creator | Local; Display API is not a general follow graph API. | `candidate` |
| [Tistory](social-platforms.md) | retired: Open API; public page/feed fallback requires validation | Local feed/site subscription; native subscriber graph not certified. | `candidate` |
| [Tumblr](social-platforms.md) | documented API; key for public reads; OAuth for user operations | Local plus OAuth native follow/unfollow and following import. | `primary_documented` |
| [Twitch](social-platforms.md) | documented Helix with app/user token as required | Local plus authorized followed-channel import; create/delete follows were removed. | `primary_documented` |
| [VK](social-platforms.md) | documented official schema; access/scopes require deployment verification | Local; users.getSubscriptions documented in official schema; native changes need explicit scope verification. | `candidate` |
| [Webflow](social-platforms.md) | documented owner-authorized CMS API; public visitor reading through site/RSS | Local; CMS access is not a cross-site native follow graph. | `candidate` |
| [Weibo](social-platforms.md) | restricted: official platform surface; full endpoint entitlement/schema not verified | Local; native follow/import not certified. | `candidate` |
| [Wix](social-platforms.md) | documented site-scoped Blog API; authorization/current permission check required | Local; arbitrary-site following import not documented. | `candidate` |
| [WordPress (self-hosted)](social-platforms.md) | documented distributed REST API if enabled; public posts generally public | Local RSS/API subscription; no universal native follow graph. | `primary_documented` |
| [WordPress.com](social-platforms.md) | documented WordPress.com REST; private/user operations OAuth | Local; Reader-native subscription/import needs separately verified endpoint. | `candidate` |
| [X / Twitter](social-platforms.md) | restricted: developer access and metered API | Local; native follow/import remains entitlement and endpoint verification work. | `candidate` |
| [YouTube](social-platforms.md) | documented Data API; API key/public data and OAuth user operations | Local plus OAuth subscriptions list/insert/delete; private lists need owner grant. | `primary_documented` |

## Specialist indexes, forums and mirrors

5 entries.

| Platform / scope | Starting route and access | Follow behavior | Research state |
|---|---|---|---|
| [Dwemer Mods](dwemer-mods.md) | Public list/profile and detail JSON-LD observed; full rendered detail and authorized files need fixtures. | Local creator/account follow; native follow/import unverified. | `public_observed` |
| [Kemono](mirrors-and-provenance.md) | Candidate only: official documentation URL returned no readable body in this review; no endpoint or content retrieval accepted. | Local source-reference tracking; native favorites/import unverified. | `candidate` |
| [Plumbdex / Plumdex](plumbdex.md) | SSR creator links/avatar URLs and creator page observed; official wiki describes file index and native follow. | Local follow; account-gated native follow documented, implementation/read-back untested. | `primary_documented` |
| [TS4 Rebels](ts4-rebels.md) | Public phpBB-style index, topic links and advertised feeds observed. Hidden links/account-only reads not tested. | Local member/creator tracking; topic subscription/bookmark versus author follow must be verified separately. | `public_observed` |
| [WCIF.cc](wcif.md) | Public search/index and creator shell; initial creator HTML remains loading. Rendered-page candidate needs a fixture. | Local follow; native favorites/follows/import need authenticated fixtures. | `public_observed` |

## Regional blogs and communities

8 entries.

| Platform / scope | Starting route and access | Follow behavior | Research state |
|---|---|---|---|
| [Ameba / Ameblo](regional-platforms.md) | Official HTTPS RSS and public pages support a reader candidate. Existing Amenber-authorized sessions are a separate restricted-content case; full extraction is untested. | Native follow exists with public/private notification choices and request statuses. Amenber access is separate from ordinary follow. Local follow independent. Do not automatically request public follow approval or Amenber membership. | `primary_documented` |
| [Arca.live / Tullius candidate](regional-platforms.md) | Discovered mod-community candidate. Official root, Tullius channel and notices URLs could not be retrieved by research tool. Current public/authorized read access, API/RSS, attachment semantics and site permissions are unverified. Include as researched candidate, not supported adapter. | Local author follow. Native account follow, channel subscribe and bookmarks must be independently verified; no native follow/API capability established by inaccessible primary pages. | `candidate` |
| [FC2 Blog](regional-platforms.md) | Official RSS documentation supports full or partial article feeds; private-mode restrictions and paid Magablo are separate. Public HTML/feed reader is the candidate route; authorized private/paid reading must use legitimate existing access and remains untested. | Local follow/RSS subscription. FC2 Blog documents Bro-tomo relationship and restricted posts; do not equate a friend/access request or paid Magablo subscription with a free social follow. Native simple-follow capability unverified. | `primary_documented` |
| [Hatena Blog](regional-platforms.md) | Official public Atom/RSS feeds support blog/category/author updates; default body can be full or owner-configured summary. Public page parsing fills observed gaps. Owner AtomPub API is a separate authenticated editing route, not an arbitrary follower reader. | Official native Read/Subscribe is free and confirmed through UI. Reader list is public; an account subscription-list feed contains a secret token. Local follow independent. Do not import native follow state from public reader count. | `primary_documented` |
| [Naver Blog](regional-platforms.md) | Use officially documented Blog Search API for discovery/snippets and public blog RSS for updates. Complete body/media/attachments need public page parsing or an authorized user session where access requires it; RSS/search alone cannot establish full history or private access. | Local author follow. Official Naver support describes subscriptions/neighbors for blog updates. Native neighbor versus mutual-neighbor/request state and API write capability require separate verification; never auto-request private access. | `primary_documented` |
| [Naver Cafe](regional-platforms.md) | Official Cafe Article Search API provides public search metadata/snippets. Full article, profile, files, membership/board access and history require publicly available page or legitimate authorized session fixtures. A search hit does not prove complete readable article or attachments. | Native member subscribe/unsubscribe is officially documented; creators can disable member subscriptions. Cafe membership, board permissions, member subscription and local author follow are separate states. Cafe join API is a mutation, not author follow. | `primary_documented` |
| [note.com](regional-platforms.md) | Official RSS/embed for public discovery; note pro enterprise/solution-partner API is documented by October 9, 2026. Ordinary feed is excerpt-limited; pro full-text RSS is a separate feature. No general patron reader API accepted. | Native creator follow/unfollow documented in official help. Local author follow separate from paid article purchase, membership and magazine follow. Exact native follow API unverified. | `primary_documented` |
| [Xiaohongshu / Rednote](regional-platforms.md) | Official account Open Platform currently exposes basic_info authorization while read_notes/read_followers are marked planned. Separate commerce Open Platform serves merchant/product/order flows. Main Explore fetch redirected to login. Arbitrary creator-note reader is not documented or runtime-verified. | Official privacy UI describes user-selected follow/unfollow. Native automation and follower-list import not verified; read_followers is planned in current account scope page. Local follow should remain primary app behavior. | `primary_documented` |

## Shared feed protocols

| Protocol | Adapter requirement |
|---|---|
| RSS 2.0 | Use guid with its permalink flag; enclosures are separate typed resources; author field may be absent. A feed icon is site branding, not a person avatar. |
| Atom | Use atom:id; preserve author/source attribution, typed content, alternate links and enclosure links. Resolve relative IRIs using XML base. |
| WebSub | Discover advertised hub/topic, verify subscription callbacks, renew lease, and validate deliveries. This is update transport, not a native social follow or complete-history API. |

## Scope and discovery backlog

ArtStation portfolio and Marketplace are separate scopes; WordPress.org and WordPress.com have distinct deployment/auth models; Steam Store and Workshop are distinct capabilities; SubscribeStar and SubscribeStar.adult remain separate origins. Cults3D appeared in two research tracks and was merged once. These counting rules avoid presenting duplicate research as extra site support.

The next discovery sweep can cover creator-specific sites, Discourse/XenForo/Invision/phpBB communities, media/file hosts linked from real posts, Minecraft Marketplace and legacy Bukkit/DevBukkit. No guessed endpoint or domain match earns support. GOG, Epic and console storefront metadata are adjacent game-library work, not automatically author-post hosts. Add a provider when a real creator/post/file fixture establishes the need.

Keep mirror records linked to the original source and preserve uploader/creator uncertainty. A mirror is not an entitlement service; see [mirror and provenance rules](mirrors-and-provenance.md).

Excluded active-service claims are retained in the JSON (for example, Flurly has no established current operation in this pass). Historic names stay searchable without advertising a working adapter.
