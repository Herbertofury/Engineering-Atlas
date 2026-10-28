# Cyberpunk 2077: creator ecosystem and public extraction evidence

Checked **2026-10-28 UTC**. This pass covers **29 distinct scopes** and **11 opened primary item/profile pairs**. It extends discovery; it does not establish implemented adapters, authenticated access, full-gallery completeness, downloadable archive integrity, video playback or follow writes. Existing stronger evidence remains in the original catalog and workbenches.

## Decisions and useful discovery paths

Use Nexus as the primary item/author/file graph, and original creator announcements to find work beyond its trending feed. The strongest less-visible routes in this pass are the [community guide directory](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/community-guides) (CPX005), original Tumblr announcements, creator Ko-fi/Patreon pages, Word in Progress and cyberpunk.codes. The directory exposes Kala PSD/blend resources, Roelani archives, Wingdeer MEGA collections, PinkyDude Drive resources and Vesna/86maylin tutorials; each downstream destination needs its own current retrieval and rights check. A directory credit is a discovery lead, not proof that an old download still works.

[CDPR support](https://www.cyberpunk.net/en/modding-support) (CPX001) currently documents both Nexus and mod.io distribution handoffs. REDmod, NativeDB, REDmodding wiki and tool documentation are reference/tool scopes. GitHub releases are actual tool/framework distribution scopes; none implies that it hosts every clothing, quest or photo-mode asset. The RED4ext release establishes a patch2.5 minimum for that release; it does not authorize upgrading an existing pinned game.

The original 162-entry catalog warned that Cybermods could not be safely aliased to another service. This pass preserves that warning: exact legacy wiki links timed out/502, and no first-party redirect was observed. ModGames search results about Cyberpunk equipment in Fallout 4 must remain Fallout-scoped. TESall CET pages preserve historical install text; a newer version heading does not update every paragraph.

## Scope map

| Scope | Role and observed result | Evidence |
|---|---|---|
| [Nexus Mods: Cyberpunk items and author profiles](https://www.nexusmods.com/cyberpunk2077/mods/107) | High-priority original distribution scope; preserve mod author, uploader, gallery uploader and dependency roles. File list and one image/one avatar retrieved; bytes and follow untested. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX007, CPX008, CPX009, CPX010, CPX011, CPX012 |
| [CDPR REDmod official support](https://www.cyberpunk.net/en/modding-support) | Official tool/reference downloads and distribution handoffs. Never count it as an independent creator platform. Retrieval: `retrieved_public_text`. | CPX001 |
| [CDPR public Cyberpunk forums](https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/) | Public creator/support threads worth discovery. Query normalization returned listing rather than chosen thread; exact thread extraction still blocked. Retrieval: `retrieved_listing_route_ambiguity; retrieved_public_text`. | CPX002, CPX003 |
| [RED Modding community hub](https://redmodding.org/) | Best verified starting hub for original project links, community contacts and author-tool graph. Retrieval: `retrieved_public_text`. | CPX004 |
| [REDmodding community guide directory](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/community-guides) | Useful less-visible creator links: Kala free PSD/blend resources, Roelani personal archive, Wingdeer MEGA, PinkyDude Drive, Vesna tutorials; directories can be old. Retrieval: `retrieved_public_text`. | CPX005 |
| [REDmodding Discord community](https://discord.com/invite/redmodding) | Public invite verified; channels/announcements/private attachments not read. Retain public originating announcement URLs and author verification chain; joining and authentication require a separate authorized browser session. Retrieval: `javascript_shell; retrieved_public_text`. | CPX006, CPX004 |
| [psiberx framework and Equipment-EX hub](https://github.com/psiberx/cp2077-archive-xl/releases/tag/v1.28.1) | Upstream framework distribution and creator discovery, not universal asset host. ArchiveXL/TweakXL/Codeware/Equipment-EX cross-links. Retrieval: `retrieved_body_assets_loading_error; retrieved_public_text; retrieved_image_rendered`. | CPX013, CPX014, CPX015 |
| [redscript upstream releases](https://github.com/jac3km4/redscript/releases/tag/v0.5.32) | Repository owner, bot release publisher and human contributors distinct. Asset count not downloaded files. Retrieval: `retrieved_body_assets_loading_error; retrieved_public_text`. | CPX016, CPX017 |
| [RED4ext upstream releases](https://github.com/wopss/RED4ext/releases/tag/v1.31.0) | Original runtime/framework release. Public body and names/hashes observed; no local archive/hash check. Retrieval: `retrieved_body_assets_loading_error; retrieved_public_text`. | CPX018, CPX019 |
| [WolvenKit tool and resource ecosystem](https://github.com/WolvenKit/WolvenKit/releases/tag/10.0.0-beta.1) | Separate stable/prerelease; organization owns code, automated account publishes. Blender/Substance resource repositories are useful discovery. Retrieval: `retrieved_body_assets_loading_error; retrieved_public_text`. | CPX020, CPX021 |
| [Cyber Engine Tweaks upstream](https://github.com/maximegmd/CyberEngineTweaks) | Canonical repository from original community hub; link Nexus release and docs without equating all identity roles. Retrieval: `retrieved_public_text`. | CPX022, CPX004 |
| [NativeDB class reference](https://nativedb.red4ext.com/) | Reference-only JS application; do not count as mod-download or creator-post host. Retrieval: `javascript_shell`. | CPX023 |
| [ModDB Cyberpunk project pages](https://www.moddb.com/mods/disappearance-of-8ug8ear) | QuestRunners original company/project chain available. Preserve project Follow separately from company membership. Retrieval: `retrieved_public_text`. | CPX024, CPX025, CPX026 |
| [CurseForge Cyberpunk projects](https://www.curseforge.com/cyberpunk-2077/mods/character-preset-manager) | Smaller alternative original-distribution scope. Dnydd profile explicitly explains dklyntly alias; preserve file uploader identity. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX027, CPX028, CPX029, CPX030 |
| [Lokiina Tumblr original mod announcements](https://lokiina.tumblr.com/post/755584944094478336/hair-for-masc-v) | Original post -> Nexus file-host handoff proved. Reblog-chain accounts and preview image must not overwrite creator identity; image request403 retained. Retrieval: `retrieved_public_text; http_403`. | CPX031, CPX032, CPX033, CPX034 |
| [Katsigian independent creator Ko-fi](https://ko-fi.com/katsigian) | Original clothing/customization creator profile and avatar. No public full post retrieved; commissions closed on observed profile. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX035, CPX036 |
| [Peachu Ko-fi creator scope](https://ko-fi.com/peachu3d) | Original Cyberpunk custom-content profile; do not infer platform-to-platform identity from matching names alone. Retrieval: `retrieved_public_text`. | CPX037 |
| [Antrakt92 Ko-fi creator updates](https://ko-fi.com/antrakt92) | Profile links original project sites. Smart Vendor and Nearby Auto Loot indexed excerpts useful discovery; opened feed unpopulated. Retrieval: `retrieved_profile_feed_shell`. | CPX038 |
| [Kala Patreon mod resources](https://www.patreon.com/kalahira) | Wiki labels linked resources free; access must be verified per post, not assumed from membership page. Specific post robots denied. Retrieval: `retrieved_public_text; robots_denied`. | CPX039, CPX040, CPX005 |
| [Peachu Patreon public release chain](https://www.patreon.com/cw/comfypeach) | Public release announcement body and image retrieved; links Nexus mod and atelier. Membership content/files not read. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX041, CPX042, CPX043 |
| [Word in Progress personal mod archive](https://wordinprogress.com/section/mods) | Useful creator-attributed personal mirror; historical 2021 assets, named external credited photography. Author profile challenged and ZIP unsupported. Retrieval: `retrieved_public_text; challenge_page; unsupported_content_type_zip`. | CPX044, CPX045, CPX046, CPX047 |
| [cyberpunk.codes original quest hub](https://cyberpunk.codes/) | Original quest/project details and source graph. A video-looking thumbnail is JPEG; no playback proof. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX048, CPX049, CPX050, CPX051 |
| [3DM Cyberpunk translations and uploads](https://mod.3dmgame.com/mod/227678) | Regional original/translated/reposted roles must be separated. Empty opened document; indexed original author is only a lead. Retrieval: `empty_document`. | CPX052 |
| [PlayGround Cyberpunk regional releases](https://www.playground.ru/cyberpunk_2077/file/cyberpunk_2077_sborka_nova_city_2_0_mini_v_6_v_2_31a-1766831) | Regional curated packs and translations; follow original Nexus source and record uploader versus stated author. Long body includes spoiler/hidden regions. Retrieval: `retrieved_public_text`. | CPX053, CPX054 |
| [TESall Cyberpunk translation archive](https://tesall.club/files/file/11582-cyber-engine-tweaks/) | Strong explicit original-author/translator separation. Historical compatibility text and login download gate preserved; no file bytes. Retrieval: `retrieved_public_text; retrieved_image_rendered`. | CPX055, CPX056, CPX057 |
| [ModGames Cyberpunk discussion scope](https://modgames.net/forum/259-43304-1) | Verified game discussion; current CP download ecosystem not established. Fallout mods using Cyberpunk assets are a different game scope. Retrieval: `retrieved_public_text`. | CPX058 |
| [Cybermods legacy reference scope](https://wiki.cybermods.net/cyber-engine-tweaks/console/how-do-i) | Historical reference, currently unavailable; no redirect verification, no invented API. Preserve existing catalog warning. Retrieval: `timeout; retrieved_public_text`. | CPX059, CPX055 |
| [2077MODS independent catalog and hosting claims](https://www.2077mods.com/mods/cyber-engine-tweaks) | Promising metadata/API candidate but provenance/permission claims require item-specific verification. API docs do not establish runtime extraction. Retrieval: `retrieved_public_text; tool_inaccessible`. | CPX060, CPX061, CPX062 |
| [YouTube original tutorial and showcase discovery](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/community-guides) | 86maylin/Vesna/CDPR tutorial links from original community directory. One video page footer-only; media streams/playback and channel profile unproven. Retrieval: `retrieved_public_text; footer_only`. | CPX005, CPX063 |

## Item and profile extraction records

Paths below refer to observed semantic headings, labels and followed links from the retrieval snapshots. They are not fabricated CSS selectors or untested API response fields. Both primary pages were opened for all 11 pairs; this means accessible identity/body evidence, not a complete runnable adapter.

### CPPAIR01: CET -> yamashi

[Item](https://www.nexusmods.com/cyberpunk2077/mods/107) → [profile](https://www.nexusmods.com/profile/yamashi). Sources: CPX007, CPX008, CPX011, CPX010, CPX012, CPX009.

- **Author/profile/avatar:** Item heading/file information -> Created by string and Uploaded by link; legacy users/3386513 redirects /profile/yamashi. Profile image resolved to avatars.nexusmods.com/3386513/100; opened/rendered.
- **Body:** Description section and historical changelogs readable; full tab/expanded-content completeness not runtime tested.
- **Media:** Images tab has five author-image links; one screenshot opened/rendered. Gallery uploaders include ArsenicTouch and yamashi. Videos count0 applies only to this item.
- **Files:** Files tab main row CET1.38.1 game2.5, 33.3MB and old rows readable; bytes untested.
- **Follow:** Profile Track label observed. Logged-in tracking state/read and write untested.

### CPPAIR02: ArchiveXL release -> psiberx

[Item](https://github.com/psiberx/cp2077-archive-xl/releases/tag/v1.28.1) → [profile](https://github.com/psiberx). Sources: CPX013, CPX014, CPX015.

- **Author/profile/avatar:** Release heading and released-by anchor -> psiberx; profile heading and avatar link agree. Avatar opened/rendered.
- **Body:** Three visible change bullets; no ellipsis detected in this short release.
- **Media:** Public avatar rendered; no release screenshot/video in observed body.
- **Files:** Assets4 count; lazy region error, no resolved filenames/bytes.
- **Follow:** Profile Follow link points to login. No relationship read/write.

### CPPAIR03: redscript -> jac3km4 project owner

[Item](https://github.com/jac3km4/redscript/releases/tag/v0.5.32) → [profile](https://github.com/jac3km4). Sources: CPX016, CPX017.

- **Author/profile/avatar:** Repository breadcrumb -> owner jac3km4; publisher github-actions and contributor alphanin9 retained as separate roles. Owner profile avatar link visible, not opened.
- **Body:** Release change, contributor and changelog links readable.
- **Media:** Avatar link only; no animation/video validation.
- **Files:** Assets6 region loading error; none fetched.
- **Follow:** Owner profile Follow login link observed; no relationship state.

### CPPAIR04: RED4ext -> wopss

[Item](https://github.com/wopss/RED4ext/releases/tag/v1.31.0) → [profile](https://github.com/wopss). Sources: CPX018, CPX019.

- **Author/profile/avatar:** Repository owner/releaser wopss -> profile name Octavian Dima and avatar link.
- **Body:** Added/Changed sections and filename/SHA table visible.
- **Media:** Avatar URL exposed, not opened.
- **Files:** Body lists red4ext-1.31.0.zip and symbols ZIP with hashes; assets4 failed, hashes unverified locally.
- **Follow:** Follow login link observed, neither read nor write tested.

### CPPAIR05: WolvenKit prerelease -> organization

[Item](https://github.com/WolvenKit/WolvenKit/releases/tag/10.0.0-beta.1) → [profile](https://github.com/WolvenKit). Sources: CPX020, CPX021.

- **Author/profile/avatar:** Breadcrumb owner WolvenKit -> RED Modding tools organization/avatar. github-actions publisher; named contributors preserved.
- **Body:** Prerelease body, prerequisites, contributors readable. Stable9.1.0 was a separate index entry.
- **Media:** Organization avatar linked, not decoded; no release video.
- **Files:** Assets7 failed loading; no bytes.
- **Follow:** Organization membership/individual follow must not be conflated; untested.

### CPPAIR06: Hair for Masc V -> Lokiina

[Item](https://lokiina.tumblr.com/post/755584944094478336/hair-for-masc-v) → [profile](https://lokiina.tumblr.com/). Sources: CPX031, CPX032, CPX033, CPX034.

- **Author/profile/avatar:** Permalink original author blog and home link identify Lokiina. Public blog avatar not confidently isolated. Notes contain likers/rebloggers, excluded from author identity.
- **Body:** Title and all short visible paragraphs/tags/date read from post; no hidden/full-blog coverage claimed.
- **Media:** Two actual media.tumblr URLs observed. First fetched403; no decode. URL rendition is s500x750; larger URL not invented.
- **Files:** Original announcement links Nexus15692; no attachment bytes.
- **Follow:** Custom-theme follow state absent. Account API/browser needed; untested.

### CPPAIR07: 8ug8ear -> QuestRunners company

[Item](https://www.moddb.com/mods/disappearance-of-8ug8ear) → [profile](https://www.moddb.com/company/questrunners). Sources: CPX024, CPX025, CPX026.

- **Author/profile/avatar:** Project Developer link -> /company/questrunners; identity type organization. Company thumbnail not assumed to be individual avatar.
- **Body:** Project summary and install/prerequisite paragraphs read.
- **Media:** Images/videos tabs present, media completeness/playback untested.
- **Files:** One downloads entry and advertised size read; no archive request completed.
- **Follow:** Project Follow and company Follow/Join distinct controls; no state mutation.

### CPPAIR08: Character Preset Manager -> Dnydd

[Item](https://www.curseforge.com/cyberpunk-2077/mods/character-preset-manager) → [profile](https://www.curseforge.com/members/dnydd/projects). Sources: CPX027, CPX028, CPX029, CPX030.

- **Author/profile/avatar:** Project By link -> /members/dnydd/projects; profile describes former dklyntly. Avatar link opened/rendered. File uploader DKLYNTLY retained.
- **Body:** Long description sections visible, guide version4.0.1 versus main-file3.1.1 preserved; total completeness not accepted.
- **Media:** Profile PNG rendered. Gallery not enumerated end to end.
- **Files:** Project1689093; file8846950 ZIP filename/size and uploader read; bytes untested.
- **Follow:** 22 followers shown on retrieved profile. Caller following state and write untested.

### CPPAIR09: Public Peachu Patreon announcement -> creator

[Item](https://www.patreon.com/comfypeach/posts/new-release-171202048) → [profile](https://www.patreon.com/cw/comfypeach). Sources: CPX042, CPX041, CPX043.

- **Author/profile/avatar:** Post creator picture/byline links Peachu creator; creator page links Nexus PeachuHime. Do not infer identity of Ko-fi solely from name.
- **Body:** Short public announcement body consists of Nexus34562 link and atelier27589 update link; surrounding loading regions retained as incomplete page state.
- **Media:** Post image link18 opened/rendered. Signed query not durable asset identity; creator profile image link distinct.
- **Files:** Nexus destinations; no Patreon file attachment observed, no paid bytes.
- **Follow:** Join controls visible; free-follow state/read and membership purchase untested.

### CPPAIR10: Nova City -> LOMU uploader

[Item](https://www.playground.ru/cyberpunk_2077/file/cyberpunk_2077_sborka_nova_city_2_0_mini_v_6_v_2_31a-1766831) → [profile](https://users.playground.ru/5077783/). Sources: CPX053, CPX054.

- **Author/profile/avatar:** Post uploader link -> users.playground.ru/5077783; body separately says original author juliolomu. Profile confirms LOMU posts, not original-author equivalence. Avatar unresolved.
- **Body:** Long description, requirements and source link visible; spoiler/hidden regions require browser expansion before completeness.
- **Media:** Page image links present; no first-party pack media decoded in this pass.
- **Files:** No successful attachment byte retrieval.
- **Follow:** Profile subscriber count/Subscribe button visible; current caller state and write untested.

### CPPAIR11: TESall CET -> gkalian translator

[Item](https://tesall.club/files/file/11582-cyber-engine-tweaks/) → [profile](https://tesall.club/profile/95-gkalian/). Sources: CPX055, CPX056, CPX057.

- **Author/profile/avatar:** Local author line links /profile/95-gkalian; information fields explicitly credit original author yamashi, translator gkalian. Profile image link not confused with CET screenshot.
- **Body:** Information body/tables readable; historical1.04-1.06 instructions coexist with header1.35.1.
- **Media:** Five gallery entries; one thumbnail rendered. Not original-resolution/full-gallery validation.
- **Files:** Public page explicitly requires account to download; bytes not attempted.
- **Follow:** File follower count0/profile followers55 exposed; logged-in follows and write untested.

## Additional partial and blocked chains

- Word in Progress: [Indy post](https://wordinprogress.com/2021/10/mods/indys-bloody-v) exposes the article author and two download rows; [author archive](https://wordinprogress.com/author/indy) returns a challenge. The actual fem ZIP link returned unsupported `application/zip`, and the post image fetch errored. This is a listed file and attempted media fetch, not a downloaded archive (CPX045, CPX046, CPX047).
- Kala: [creator](https://www.patreon.com/kalahira) is readable, but the [specific resource/terms post](https://www.patreon.com/posts/mod-tou-80670201) is robots-denied. No paid or free attachment claims follow from its wiki label (CPX039, CPX040).
- Ko-fi: original Katsigian, Peachu and Antrakt92 profiles and visible Follow labels are readable; Katsigian avatar was opened/rendered. Feed templates and search excerpts do not prove full posts. Generic logout/billing controls are application templates, not a signed-in session (CPX035, CPX036, CPX037, CPX038).
- 3DM: [item227678](https://mod.3dmgame.com/mod/227678) opened as a zero-line document. Search credited Roms1383, but uploader/profile/avatar and full body remain unverified (CPX052).
- CDPR forum: the homepage is readable; selecting MODS or a thread produced merged query parameters and the same listing. Record route ambiguity instead of pretending a thread was parsed. mod.io, NativeDB and the REDmodding Discord invite returned JS shells (CPX002, CPX064, CPX023, CPX006).
- 2077MODS: public item and API documentation read; actual API endpoint inaccessible. `slug`, `name`, `versions`, `compatibility`, `download_url`, `manifest_version`, `hosting` and hashes are documented schema, not captured JSON response fields. Public page ownership/permission statements require corroboration. Preserve the observed GitHub-labelled link whose destination is Nexus (CPX060, CPX061, CPX062).
- Video: [YouTube tutorial](https://www.youtube.com/watch?v=5gR3rsL-sCs) yielded footer-only content. cyberpunk.codes video-looking thumbnail yielded a JPEG; no MP4, HLS, DASH or playback was established. No GIF animation was tested (CPX063, CPX051).

## Extraction contract and remaining acceptance gates

Store provider IDs separately from names and URLs. For each source retain canonical item identity, original author, local uploader, translator, image uploader, organization owner, automated release publisher and credited contributors as separate roles. Keep announcement-to-download and dependency links instead of flattening every page into a mod. Do not attach an image author’s avatar to the mod author or use a cover image as a missing avatar.

Full content requires collecting all ordered body blocks, expanded spoilers, pagination, attachment variants and media arrays. Public rendered paragraphs can establish a candidate extraction path, while loading regions, route mistakes and entitlement walls remain explicit failures. Image URL retrieval, tool rendering, independent byte decode and application rendering need separate states; animation and video require duration/frame/audio/playback evidence. A successful avatar must not mask a failed post image.

File rows need filename, version, provider file ID, uploader, bytes, checksum, dependency/game-patch applicability and actual download evidence. A published SHA is a claim until compared with downloaded bytes. Follow labels/counts establish discoverability; reading the caller’s subscriptions needs an authorized session, and writing follow/subscribe is a separate side effect. A local-follow implementation can be planned without claiming native follow synchronization.

The next acceptance fixture should deliberately include original announcements linking another host, one multi-image gallery, a GIF, a playable video, a stale mirror, a translator/uploader split, a bot release publisher and a login-only download. Compare normalized complete outputs with the actual target baseline before cross-project adoption. No GameSync change or authenticated acceptance was made.

## Observed login routes and remaining account tests

The exact observed Nexus login target is `https://users.nexusmods.com/auth/sign_in?redirect_url=https://www.nexusmods.com/cyberpunk2077/mods/107`. CDPR forum login was followed to its account OIDC page (CPX003); TESall exposes `https://tesall.club/login/`. Other unvisited account-entry leads: `https://www.patreon.com/login`, `https://ko-fi.com/account/login`, `https://www.tumblr.com/login`, `https://discord.com/login`. These URLs do not establish login, consent, entitlement or session access.

## Source register

The [sanitized game manifest](../../../experiments/site-adapter-discovery/game-research-2026-10-28.json) contains source records CPX001–CPX064 with dated retrievalStatus and the eleven structured pair records. Sources below are original/public pages or their actual linked media; no search-only claim is promoted to working support.

- **CPX001** [CDPR modding support](https://www.cyberpunk.net/en/modding-support) — `retrieved_public_text`; observed Public page on check date. Official mod distribution links include Nexus and mod.io; REDmod is a tool. Manual downloads and tutorials listed. Not a creator-post platform.
- **CPX002** [CDPR Cyberpunk forum](https://forums.cdprojektred.com/index.php?forums/cyberpunk.21/) — `retrieved_listing_route_ambiguity`; observed Public forum listing. Public listing exposed MODS and account-login links. Thread/category clicks returned the same listing with merged query parameters; thread extraction not established.
- **CPX003** [CDPR forum account sign in](https://accounts.cdprojektred.com) — `retrieved_public_text`; observed Sign-in page. Login target obtained by following official forum Log in. No credentials or authentication attempted.
- **CPX004** [RED Modding community](https://redmodding.org/) — `retrieved_public_text`; observed Page reports updated 2026-10-27. Public first-party hub links GitHub, Discord, Patreon, wiki, CET and Blender tools; community rather than universal download host.
- **CPX005** [REDmodding community guides](https://wiki.redmodding.org/cyberpunk-2077-modding/modding-guides/community-guides) — `retrieved_public_text`; observed Last documented edit 2025-10-23. Readable Markdown includes original creator/resource links, including Kala, Roelani, Wingdeer, PinkyDude, 86maylin and Vesna. Warns guides can be outdated.
- **CPX006** [REDmodding Discord invite](https://discord.com/invite/redmodding) — `javascript_shell`; observed Public invite redirect. Official community hub links invite; retrieved application required JavaScript. No channels, message history or profile extracted.
- **CPX007** [CET Nexus item](https://www.nexusmods.com/cyberpunk2077/mods/107) — `retrieved_public_text`; observed 1.38.1, updated 2026-10-26. Title, Created by and Uploaded by yamashi, description, permissions and tab counts readable; description still says supported game 2.31, while file row says 2.5. Preserve both.
- **CPX008** [yamashi Nexus profile](https://www.nexusmods.com/profile/yamashi) — `retrieved_public_text`; observed Public profile; legacy numeric ID 3386513. Legacy uploader link redirects to named profile; avatar, verified-author label and Track control observed. Empty mod counts are dynamic placeholders, not zero records.
- **CPX009** [CET Nexus files](https://www.nexusmods.com/cyberpunk2077/mods/107?tab=files) — `retrieved_public_text`; observed CET 1.38.1 / game 2.5. Main and old file names, sizes, versions and download links readable. Archive bytes not retrieved.
- **CPX010** [CET Nexus images](https://www.nexusmods.com/cyberpunk2077/mods/107?tab=images) — `retrieved_public_text`; observed Five author images listed. Gallery separates image uploader ArsenicTouch from mod author yamashi. Full image link opened and rendered; all-gallery completeness not established.
- **CPX011** [yamashi Nexus avatar](https://avatars.nexusmods.com/3386513/100) — `retrieved_image_rendered`; observed Image opened 2026-10-28. Public avatar link followed from actual profile and rendered by retrieval tool. No independent decoder or cache implementation tested.
- **CPX012** [CET keybind screenshot](https://staticdelivery.nexusmods.com/mods/3333/images/107/107-1613641770-185635979.png) — `retrieved_image_rendered`; observed Image opened 2026-10-28. Screenshot opened from gallery; tool rendered actual image. This proves one image retrieval, not all images or video.
- **CPX013** [ArchiveXL release](https://github.com/psiberx/cp2077-archive-xl/releases/tag/v1.28.1) — `retrieved_body_assets_loading_error`; observed v1.28.1 / 2026-10-27. Release title, psiberx releaser, three change bullets and Assets 4 visible. Asset region failed to load, so filenames/bytes unproven.
- **CPX014** [psiberx GitHub profile](https://github.com/psiberx) — `retrieved_public_text`; observed Public profile. Name Pavel Siberx, account psiberx, avatar and Follow login link; pinned frameworks, Equipment-EX and CET modules are useful original-author discovery.
- **CPX015** [psiberx GitHub avatar](https://avatars.githubusercontent.com/u/4366745?s=40&v=4) — `retrieved_image_rendered`; observed Image opened 2026-10-28. Actual release-avatar image rendered by retrieval tool.
- **CPX016** [redscript release](https://github.com/jac3km4/redscript/releases/tag/v0.5.32) — `retrieved_body_assets_loading_error`; observed v0.5.32 / 2026-10-22. Release owner jac3km4 differs from publisher github-actions and credited contributor alphanin9. Release body readable; six assets failed to load.
- **CPX017** [jac3km4 GitHub profile](https://github.com/jac3km4) — `retrieved_public_text`; observed Public profile. Account jac3km4, display jekky, avatar and Follow link observed; pinned redscript repository links back to project.
- **CPX018** [RED4ext release](https://github.com/wopss/RED4ext/releases/tag/v1.31.0) — `retrieved_body_assets_loading_error`; observed v1.31.0 / 2026-10-24. wopss release; body states minimum game patch 2.5 and lists two ZIP names with SHA256. Assets 4 failed to load; published hashes are not locally verified downloads.
- **CPX019** [wopss GitHub profile](https://github.com/wopss) — `retrieved_public_text`; observed Public profile. Account wopss, display Octavian Dima, avatar and Follow login link observed; RED4ext and SDK listed.
- **CPX020** [WolvenKit release](https://github.com/WolvenKit/WolvenKit/releases/tag/10.0.0-beta.1) — `retrieved_body_assets_loading_error`; observed 10.0.0-beta.1 / 2026-10-24. Prerelease body and contributors readable; github-actions published, WolvenKit organization owns repository. Seven assets region failed to load. Stable 9.1.0 separately visible in release index.
- **CPX021** [WolvenKit GitHub organization](https://github.com/WolvenKit) — `retrieved_public_text`; observed RED Modding tools organization. Organization avatar, repository list and Blender/Substance resources observed. Organization identity is not an individual releaser.
- **CPX022** [CET upstream repository](https://github.com/maximegmd/CyberEngineTweaks) — `retrieved_public_text`; observed Public upstream repository. First-party redmodding hub links this repository. Keep Nexus author, upstream owner and contributors as different identity roles.
- **CPX023** [NativeDB](https://nativedb.red4ext.com/) — `javascript_shell`; observed Public application. Page required JavaScript; reference tool only. No downloadable-mod catalog or creator stream established.
- **CPX024** [Disappearance Of 8ug8ear](https://www.moddb.com/mods/disappearance-of-8ug8ear) — `retrieved_public_text`; observed Released August 2024. Body includes story prerequisite and install/dependency notes; Developer links QuestRunners company. One file listed; project Follow present.
- **CPX025** [QuestRunners ModDB company](https://www.moddb.com/company/questrunners) — `retrieved_public_text`; observed Public developer company. Company profile links back to 8ug8ear; Public privacy and apply-to-join membership distinct from Follow. No individual author inferred.
- **CPX026** [8ug8ear file listing](https://www.moddb.com/mods/disappearance-of-8ug8ear/downloads) — `retrieved_public_text`; observed One August 2024 file listing. Named full-version entry and size rendered. Contradictory generic no-files fallback also present; do not interpret fallback as empty list. No archive bytes.
- **CPX027** [Character Preset Manager CurseForge](https://www.curseforge.com/cyberpunk-2077/mods/character-preset-manager) — `retrieved_public_text`; observed Project 1689093; main file 3.1.1; guide 4.0.1. By Dnydd links profile; long description, project ID, gallery/files/relations tabs and main-file link visible. Description guide version differs from main file; retain both.
- **CPX028** [Dnydd CurseForge profile](https://www.curseforge.com/members/dnydd/projects) — `retrieved_public_text`; observed Public author profile. Profile says former name dklyntly, includes avatar, follower count and Cyberpunk/Minecraft project list. Do not infer numeric provider ID from slug.
- **CPX029** [Character Preset Manager file](https://www.curseforge.com/cyberpunk-2077/mods/character-preset-manager/files/8846950) — `retrieved_public_text`; observed File 8846950; 3.1.1; September 9 2026. Filename, 320.9KB size, uploader DKLYNTLY and no-changelog state visible. Profile alias provides provenance; no archive fetched.
- **CPX030** [Dnydd CurseForge avatar](https://media.forgecdn.net/avatars/2151/923/639286556267200684.png) — `retrieved_image_rendered`; observed Image opened 2026-10-28. Profile avatar opened and rendered by retrieval tool.
- **CPX031** [Lokiina Hair for Masc V post](https://lokiina.tumblr.com/post/755584944094478336/hair-for-masc-v) — `retrieved_public_text`; observed Post 755584944094478336 / 2024-07-09. Original blog permalink exposes title, paragraphs, two image links, timestamp/tags and Nexus destination 15692. Reblog notes are separate provenance, not post author.
- **CPX032** [Lokiina blog](https://lokiina.tumblr.com/) — `retrieved_public_text`; observed Public custom-theme blog. Blog identity and self-description readable alongside reblogs. No avatar source confidently identified; do not label a post image as avatar.
- **CPX033** [Lokiina first post image](https://64.media.tumblr.com/5e2ef1d2dbdf3b7b417837d9c3896034/e480615ba8ccd3f4-70/s500x750/c06c9bb7ce75e389abb55de043d86e8b9600de7d.png) — `http_403`; observed Image link followed 2026-10-28. Actual image request returned 403. Preserve observed rendition URL without inventing larger dimensions or claiming successful decode.
- **CPX034** [Hair for Masc V Nexus destination](https://www.nexusmods.com/cyberpunk2077/mods/15692) — `retrieved_public_text`; observed Linked mod 15692. Nexus target opened by following original Tumblr post download link. Announcement is separate object from file-host item.
- **CPX035** [Katsigian Ko-fi](https://ko-fi.com/katsigian) — `retrieved_public_text`; observed Public profile. Cyberpunk clothing/customization creator self-description, profile picture and Follow visible. Feed empty/loading in retrieved text; no post completeness inferred.
- **CPX036** [Katsigian Ko-fi avatar](https://storage.ko-fi.com/cdn/useruploads/ecb4199d-61dc-4368-b7ed-c1751c81cf8f_f9e3252d-961a-49f8-8e-d405d3f8c2d5.png) — `retrieved_image_rendered`; observed Image opened 2026-10-28. Profile picture opened and rendered. Generic application billing templates in page do not indicate an authenticated account.
- **CPX037** [Peachu Ko-fi](https://ko-fi.com/peachu3d) — `retrieved_public_text`; observed Public profile. Self-described Cyberpunk custom-mod creator; profile picture and Follow visible. Posts and membership fields remained unpopulated templates.
- **CPX038** [Antrakt92 Ko-fi](https://ko-fi.com/antrakt92) — `retrieved_profile_feed_shell`; observed Public profile; search index contained recent post excerpts. Original profile lists Cyberpunk projects and links Nexus/GitHub/CurseForge. Open page exposed profile but feed remained shell. Indexed Smart Vendor text is a lead, not full post extraction.
- **CPX039** [Kala Patreon](https://www.patreon.com/kalahira) — `retrieved_public_text`; observed Public creator page. Creator name/avatar and membership surface retrieved; source wiki links free resource posts. Post list remained loading.
- **CPX040** [Kala mod terms/resources post](https://www.patreon.com/posts/mod-tou-80670201) — `robots_denied`; observed Post 80670201 linked by community wiki. Specific linked resource post denied by robots.txt. Its body, files and entitlement not verified in this pass.
- **CPX041** [Peachu Patreon](https://www.patreon.com/cw/comfypeach) — `retrieved_public_text`; observed Public creator page. Name/avatar, creator bio, Nexus link and latest-public-post link retrieved. The /comfypeach profile route redirected to /cw/comfypeach.
- **CPX042** [Peachu release announcement](https://www.patreon.com/comfypeach/posts/new-release-171202048) — `retrieved_public_text`; observed Post 171202048; displayed October 2. Public post body exposes Nexus 34562 and atelier 27589 links plus one media image. Creator attribution link is explicit. Page still has loading regions; no paid payload inferred.
- **CPX043** [Peachu release post image](https://www.patreon.com/comfypeach/posts/new-release-171202048) — `retrieved_image_rendered`; observed Media link 18 from source page. Followed signed patreonusercontent image; tool rendered image. Expiring query token deliberately not retained as stable asset identity.
- **CPX044** [Word in Progress mod archive](https://wordinprogress.com/section/mods) — `retrieved_public_text`; observed Personal mod mirror; 2021 posts. Community guide points here for Roelani resources. Posts have named authors; this archive is not automatically endorsed or current for installed game.
- **CPX045** [Indy Bloody V](https://wordinprogress.com/2021/10/mods/indys-bloody-v) — `retrieved_public_text`; observed 2021-10-23. Post credits Indy, Roe photography; full visible paragraphs plus two named ZIP download links/sizes. Separate image returned retrieval error.
- **CPX046** [Indy archive author](https://wordinprogress.com/author/indy) — `challenge_page`; observed Author archive. Author link returned One moment please challenge; profile/avatar extraction blocked.
- **CPX047** [Indy fem archive link](https://wordinprogress.com/wordpress/wp-content/uploads/2021/10/aCC_BLOODY_V_FEM_TEX01.zip) — `unsupported_content_type_zip`; observed Named ZIP; post lists 11.92MB. Followed actual post Download; retrieval tool reported unsupported application/zip. This is not a completed byte download or hash verification.
- **CPX048** [cyberpunk.codes creator hub](https://cyberpunk.codes/) — `retrieved_public_text`; observed Public hub; three quest projects. Hub links Nexus downloads, long project details, source repository and screenshot comics. Page claims gameplay features; no gameplay execution performed.
- **CPX049** [Acceptable Loss project details](https://cyberpunk.codes/gigs/acceptable-loss.html) — `retrieved_public_text`; observed Linked project detail. First-party detailed quest page opened; treat game patch requirements as project-specific, not an ecosystem-wide recommendation.
- **CPX050** [cyberpunk.codes upstream source](https://github.com/andreaolivato/cyberpunk-codes) — `retrieved_public_text`; observed Public repository. Hub GitHub link opened. Repository ownership establishes project provenance, not equivalence with every voice actor or screenshot contributor.
- **CPX051** [Acceptable Loss screenshot](https://cyberpunk.codes/assets/img/acceptable-loss-04.jpg) — `retrieved_image_rendered`; observed Image opened 2026-10-28. First-party screenshot opened/rendered. Video-looking thumbnail click yielded JPEG, not playable video.
- **CPX052** [3DM Addiction System item](https://mod.3dmgame.com/mod/227678) — `empty_document`; observed Indexed mod 227678. Open yielded zero lines; search result separately credited Roms1383 and described translation/audio dependency. No profile/avatar/body extraction confirmed.
- **CPX053** [PlayGround Nova City item](https://www.playground.ru/cyberpunk_2077/file/cyberpunk_2077_sborka_nova_city_2_0_mini_v_6_v_2_31a-1766831) — `retrieved_public_text`; observed Item 1766831; version v6 / game 2.31a. Title, uploader LOMU, explicit author juliolomu, many paragraphs, spoiler region and Nexus source link observed. Do not equate uploader and original author solely by name.
- **CPX054** [LOMU PlayGround profile](https://users.playground.ru/5077783/) — `retrieved_public_text`; observed Public user 5077783. Profile links Cyberpunk posts; subscriber count and Subscribe button visible. Avatar absent from retrieved semantic links; extraction unresolved.
- **CPX055** [TESall Cyber Engine Tweaks](https://tesall.club/files/file/11582-cyber-engine-tweaks/) — `retrieved_public_text`; observed 1.35.1; updated 2025-05-18. Explicit original author yamashi and translator gkalian; five images; login required to download. Long body includes historical game 1.04-1.06 instructions; preserve stale applicability.
- **CPX056** [gkalian TESall profile](https://tesall.club/profile/95-gkalian/) — `retrieved_public_text`; observed Public user 95. Name/avatar link, administrator role and follower count readable. Attribute avatar to translator/uploader, not original CET author.
- **CPX057** [TESall CET image](https://tesall.club/uploads/monthly_2021_01/1609930484783-jpg.thumb.jpeg.9ay7qvb3ceiduomthlfxjpkg6n20rw1z.jpeg) — `retrieved_image_rendered`; observed Gallery thumbnail opened. Actual listed image rendered. Thumbnail only; original resolution and complete gallery not validated.
- **CPX058** [ModGames Cyberpunk discussion](https://modgames.net/forum/259-43304-1) — `retrieved_public_text`; observed Public thread; December 2020-January 2021 posts. Game-specific discussion, per-post nicknames, timestamps and avatars visible. No strong evidence of a Cyberpunk-specific download section in this pass. Search hit for Bounce Back Injector was Fallout 4; exclude it from CP downloads.
- **CPX059** [Cybermods historical wiki](https://wiki.cybermods.net/cyber-engine-tweaks/console/how-do-i) — `timeout`; observed Historical URL linked by TESall. Exact legacy documentation URL timed out; teleportation URL returned 502, homepage inaccessible. No first-party redirect to Thunderstore observed.
- **CPX060** [2077MODS CET listing](https://www.2077mods.com/mods/cyber-engine-tweaks) — `retrieved_public_text`; observed Lists v1.38.1. Independent hub lists versions/downloads and claims hosting permission. A GitHub-labelled link actually points to Nexus. Do not promote claim or label into verified author ownership.
- **CPX061** [2077MODS developer API documentation](https://www.2077mods.com/developers) — `retrieved_public_text`; observed Documented API v1. Documents read endpoints, manifest fields, hosting enum and rate limits. Example data is documentation, not observed API output or authenticated follow support.
- **CPX062** [2077MODS CET API route](https://www.2077mods.com/api/v1/mods/cyber-engine-tweaks) — `tool_inaccessible`; observed Route attempted on check date. Documented route could not be retrieved by this tool; runtime response/schema/complete output unverified.
- **CPX063** [Cyberpunk mod tutorial on YouTube](https://www.youtube.com/watch?v=5gR3rsL-sCs) — `footer_only`; observed Public tutorial linked by 2077MODS. Open exposed only generic footer; channel identity, description, stream and playback not recovered.
- **CPX064** [mod.io Cyberpunk game scope](https://mod.io/g/cyberpunk-2077) — `javascript_shell`; observed Official linked game scope. First-party game route required JavaScript. Official CDPR page documents account linking; this pass did not retrieve item/profile/API payloads.
