# Skyrim SE/AE ecosystem: public content, identity and real-media inspection

Checked **2026-10-28 UTC**; user-facing review date **October 27, 2026, Denver**. This is an anonymous research pass, not implemented adapter support, authenticated acceptance, a mod-quality ranking, or a compatibility guarantee. Existing research and target projects remain intact.

The pass covers **35 service/host scopes** and **11 detailed inspection cases**. Eight different services had both a representative post/project page and a public author/contributor profile opened: Nexus, TES Alliance, Dwemer Mods, TESAll, PlayGround, Schaken-Mods, Step Modifications and GitHub. That count means actual page retrieval, not complete extraction of every field. Dwemer's inspected detail page was a media shell; Schaken and Step did not expose a confirmed avatar URL. Additional creator-author and regional-profile routes were opened on immyneedscake and ModGames. AFK's representative file worked while the attempted Arthmoor profile returned 403. [SKY1] [SKY2] [SKY8] [SKY9] [SKY12] [SKY13] [SKY15] [SKY16] [SKY19] [SKY20] [SKY24] [SKY25] [SKY26] [SKY27] [SKY30] [SKY32] [SKY6] [SKY7]

## What was actually observed

The following are concise field-level findings. The linked pages remain the primary sources; no third-party page bodies or mod archives are republished here.

| Service and exact sample | Body and author evidence | Media, files, follow and remaining boundary |
|---|---|---|
| [Nexus Mysticism](https://www.nexusmods.com/skyrimspecialedition/mods/27839), [SimonMagus](https://www.nexusmods.com/profile/SimonMagus?gameId=1704) | Description, permissions and changelog retrieved. Creator and uploader are separate fields. | Avatar and one PNG opened successfully. Separate image/video tabs expose gallery pages and YouTube links. Track control observed; binary transfer and video playback untested. [SKY1] [SKY2] [SKY3] [SKY4] |
| [AFK USSEP](https://www.afkmods.com/index.php?/files/file/1888-unofficial-skyrim-special-edition-patch/) | About This File and Arthmoor byline retrieved. Attempted profile forbidden. | Avatar URL observed but media fetch failed; 22 screenshot links. Download and Followers require sign-in. No authenticated/file acceptance. [SKY6] [SKY7] |
| [TESA resource kit](https://tesalliance.org/forums/index.php?/files/file/1330-the-tesa-skyrim-resource-kit-project/), [Hanaisse](https://tesalliance.org/forums/index.php?/profile/1515-hanaisse/) | File body, project/resource links and author profile retrieved. | One screenshot and inline PNG linked. Image chosen from profile resolved to theme art; rank art is not an avatar. Download requires sign-in. Legacy resources need SE applicability review. [SKY8] [SKY9] |
| [Dwemer MXPBD](https://dwemermods.com/mods/5123), [Motherhydra](https://dwemermods.com/users/motherhydra) | Listing text and uploader profile retrieved; detail body absent from extracted text. Uploader is not automatically original author. | Avatar and WebP thumbnail opened. Extra-image link observed; full gallery/file/follow operation unresolved. This case is a partial extraction. [SKY10] [SKY11] [SKY12] [SKY13] |
| [TESAll Legendary Loot](https://tesall.club/files/file/14648-legendary-loot/), [Arkanion Eternal](https://tesall.club/profile/719805-arkanion-eternal/) | Body and profile retrieved. Original author FabioJoose differs from translator/uploader Arkanion Eternal. | Four gallery links and one loaded WebP thumbnail. Profile avatar unresolved. File access and Followers link gated by sign-in; six category pages observed. [SKY14] [SKY15] [SKY16] |
| [PlayGround PapyrusUtil](https://www.playground.ru/elder_scrolls_5_skyrim/file/skyrim_se_papyrusutil_se_rasshirenie_skriptovyh_funktsij_dlya_modov-1853437), [Gutsz](https://users.playground.ru/1938322/) | Long body and uploader profile retrieved. Body credits two original authors. | Profile Subscribe button visible. Game artwork/comment image must not be misclassified as post gallery or author avatar. No archive confirmed. [SKY19] [SKY20] |
| [Schaken SKSE list](https://schaken-mods.com/forums/topic/143-skse-update-list/), [Schaken](https://schaken-mods.com/profile/3-schaken/) | Technical table, replies and administrator profile retrieved. | Inline image filenames visible; usable media URLs not confirmed. Followers links sign-in. Old table dates limit compatibility authority. [SKY24] [SKY25] |
| [Step Grass LOD discussion](https://stepmodifications.org/forum/topic/16314-skyrim-special-edition-grass-lod-guide/), [DoubleYou](https://stepmodifications.org/forum/profile/1198-doubleyou/) | Initial discussion, replies, profile and linked wiki source identified. | Four topic pages and post permalinks. Rank image is not avatar evidence. Followers targets sign-in; technical discussion is not a downloadable release. [SKY26] [SKY27] |
| [GitHub Community Shaders](https://github.com/doodlum/skyrim-community-shaders), [doodlum](https://github.com/doodlum) | Rendered README and matching owner profile retrieved. | Profile avatar link and Follow observed. Releases page says no releases; do not fabricate binary assets from repository existence. [SKY30] [SKY31] [SKY32] |
| [immyneedscake Shinobu Katana](https://www.immyneedscake.com/skyrim-se-mods/shinobu-katana), [creator](https://www.immyneedscake.com/) | SFW technical post has byline, requirements, crafting and original-texture permission text. Byline links an author-filtered listing. | Five gallery images and four renders linked; duplicate rendered links need deduplication. MEGA target observed, fetch unavailable. Avatar and native follow unconfirmed. [SKY33] [SKY34] [SKY35] [SKY36] |
| [ModGames Unlimited Fast Travel](https://modgames.net/load/skyrim_special_edition/gejmplej/unlimited-fast-travel-se-ae-neogranichennye-bystrye-puteshestviya/459-1-0-26354), [ApeX](https://modgames.net/user/ApeX/) | Detailed body separates original author SlavicPotato from translator ApeX. Profile response is a short shell. | Two named 7z file links divide runtime families. Screenshot heading lacks extracted children. No avatar decode, archive transfer or follow acceptance. [SKY22] [SKY23] |

The measured media boundary is small: successful image opens on Nexus, Dwemer and TESAll establish that those particular URLs returned decodable images through the retrieval tool. They do not establish complete image enumeration, original-resolution recovery, GIF animation, video playback, file integrity, or browser rendering parity. No GIF was observed in these chosen samples; this does not establish that a service lacks GIF support. YouTube links/iframe markers were observed, but neither a poster nor an embed URL is playback evidence. [SKY3] [SKY4] [SKY12] [SKY13] [SKY15]

## Discovery map and why each surface matters

This is a discovery queue with explicit evidence limits. A useful community or index can have no working adapter yet. A timed-out request is not proof that a site is down, requires login or no longer serves Skyrim.

| Surface | Useful scope | Current inspection result / decision |
|---|---|---|
| Nexus | Mods, author profiles, separate image/video/files tabs | Strong public body/identity candidate; authenticated operations remain separate. [SKY1] [SKY2] [SKY3] [SKY4] |
| AFK Mods | Author-managed releases, bugfixes, resources | File text works; downloads gated, attempted profile forbidden. [SKY6] [SKY7] |
| TES Alliance | Resource kits, modding school and forum history | Body/profile works; legacy game applicability and file gate retained. [SKY8] [SKY9] |
| Dwemer Mods | Archive, niche/reuploaded mods, author/uploader discovery | Listing/profile richer than inspected detail shell; provenance review required. [SKY10] [SKY12] [SKY13] |
| TESAll Club | Russian translations, separate SE/AE categories | Original author versus translator fields materially improve identity handling. [SKY14] [SKY15] |
| Tes-Game | Russian SE/AE releases and external file links | Handguns page body works; no profile/media confirmation. [SKY17] [SKY18] |
| PlayGround | Regional releases, guides and uploader subscriptions | Detailed post and Subscribe profile UI work; original credits remain separate. [SKY19] [SKY20] |
| ModGames | Localization community and runtime-specific archives | Exact mod works despite homepage timeout; two archives listed. [SKY22] [SKY23] |
| Schaken-Mods | Original communities, technical threads and RSS discovery | Technical post/profile works; distinguish feed account from original creator. [SKY24] [SKY25] |
| Step Modifications | Guide discussions, tools, LOD and support | Post/profile pagination candidate; keep technical dates and post identity. [SKY26] [SKY27] [SKY28] |
| GitHub | Creator code, README, releases and issue discussions | Source/project ownership works; chosen releases page empty. [SKY30] [SKY31] [SKY32] |
| immyneedscake | Free creator releases, custom physics and assets | SFW post body, author listing and external files identified. [SKY33] [SKY34] [SKY35] [SKY36] |
| Darkfox127 | Creator projects, Papyrus learning and resources | Public creator mod index and Nexus download links. [SKY37] |
| Daymarr Workshop | Creator collective and SE/LE/body-specific release taxonomy | Public index, pagination and newsletter control; per-post extraction pending. [SKY38] |
| Phereniki Mods | Creator portfolio spanning Free and Verified Creations | Public creator identity and original platform/profile links. [SKY39] |
| Canalpa | Small creator host with Skyrim SE among several games | Public homepage; actual Skyrim post and quality review pending. [SKY40] |
| Beyond Skyrim / Arcane University | Expansion teams, teaching and asset pipeline training | Public project links distinguish SE/LE; school disciplines and wiki/Discord links observed. [SKY41] [SKY42] |
| SureAI | Enderal project, team, wiki and forum history | Public news/navigation; classify non-Skyrim games independently. [SKY43] |
| ModDB | Project news, files, images, videos and RSS | Public Enderal surface works; inspected files are old original-Skyrim packages. [SKY44] [SKY45] |
| TamrielMods | Cross-host creator hubs and collections | Public index says original-host downloads; dynamic cards not extracted. [SKY46] |
| Nolvus | Curated modlist requirements and external-host discovery | Home works; `/modlist` is a soft 404, not usable mod data. [SKY47] [SKY48] |
| 2game.info SE database | Japanese discovery/comments and upstream Nexus IDs | Public catalog; explicit AI-summary warnings require preserving source type. [SKY49] |
| Official SKSE | Authoritative build/runtime/storefront mapping | Public build list; identity is a development team, not a social profile. [SKY50] |
| ENBDev | Official ENB binary source | SSE download page redirect loop; current binary retrieval unresolved. [SKY51] |
| Wabbajack | Modlist discovery and installer project | Current homepage gave zero readable lines; no gallery acceptance. [SKY52] |
| Bethesda Creations | Official console/PC release marketplace | Current Skyrim landing page gave zero readable lines; no author/file acceptance. [SKY53] |
| LoversLab technical scope | Technical threads and regular-mod research | Public retrieval unavailable; the research browser was blocked by its site-safety policy before login. No further attempts, no downtime/login-only inference. [SKY54] [SKY55] [SKY56] |
| Skyrim Guild / Modding Guild routes | Animation ecosystem historical links | Exact current/historical routes failed; no current migration or original hosting endorsed. [SKY57] [SKY58] [SKY59] [SKY60] |
| VectorPlexus / Vectorplexis | Historical community lead | First spelling timed out; second redirected to a parked host. Do not treat variants as trusted equivalents. [SKY61] [SKY62] |
| 3DM Mod Station / forum | Chinese mods, translations and technical threads | Two indexed mod pages returned zero readable lines; forum unavailable. [SKY63] [SKY64] [SKY65] |
| 9DM historical candidates | Chinese creator/community leads | Direct candidate domains failed; similar 10DM naming does not establish continuity. [SKY66] [SKY67] |
| FKMods | Chinese translation/modding discovery lead | Search indexed relevant threads; actual homepage timed out. [SKY68] |
| Tullius on Arca.live | Korean modding community lead | Public channel unavailable to retrieval; no restriction workaround attempted. [SKY69] |
| SunJeong | Creator-host lead | Exact site timed out; post/media/profile inspection pending. [SKY70] |
| TalesOfStar | Creator-host lead | Direct request 403; indexed free/exclusive-tier descriptions remain leads. [SKY71] |

The old `https://www.distaranimation.com/` route was also opened and redirected to unrelated gambling content at `https://www.brazilianmarket4you.com/`. It is excluded from the useful-host count and should not receive creator-service credentials. This is an observed origin/content change, not a claim about who controls the domain. [SKY72] The live Nexus [Attack–MCO Updated page](https://www.nexusmods.com/skyrimspecialedition/mods/181779) separately exposes its credited creators, uploader, requirements and embedded YouTube overview; that does not prove the former Guild endpoint still hosts its dependencies. [SKY5]

## Adapter decisions supported by this evidence

Preserve at least three independent identities: original author, local uploader/translator, and platform account. TESAll and ModGames explicitly demonstrate why flattening them into one `author` loses provenance. Schaken RSS feed identities introduce a fourth role, the syndicating account. An author label must not silently inherit the uploader's avatar or follow target. The source page, canonical account URL and stable account ID should each keep their origin. [SKY15] [SKY16] [SKY22] [SKY23] [SKY24]

Use separate fields for content completeness, identity confirmation, image enumeration, image decode, video playback and authenticated files. Dwemer demonstrates a title/thumbnail success with missing body; ModGames demonstrates a detailed body with incomplete profile and screenshot extraction; GitHub demonstrates a repository with no release assets. These are useful, recoverable partial states, and none should be converted into a fully supported service. [SKY12] [SKY13] [SKY22] [SKY23] [SKY30] [SKY31]

Follow/watch semantics are also independent. Nexus Track, PlayGround author Subscribe, Invision file/topic Followers, GitHub Follow and creator newsletters serve different objects. A local bookmark may be useful, but it is not proof that any native platform follow action succeeded. No follow, subscription, message or email was sent. [SKY2] [SKY6] [SKY15] [SKY20] [SKY26] [SKY32] [SKY38]

SE/AE labels cannot replace exact runtime and storefront applicability. The official SKSE page observed in this pass lists AE 2.3.1 against game 1.7.104, while the inspected regional PapyrusUtil body still describes an older runtime as current. This conflict makes the original-version/date fields essential; it does not authorize upgrading a target executable. Archive names, modlist pins and original author requirements need to survive normalization. [SKY50] [SKY19] [SKY22]

Archive availability does not establish redistribution rights. Dwemer's archive/reupload scope, Tes-Game's explicit redistribution restriction, and immyneedscake's permission request are reasons to store provenance and permissions separately from a download URL. Preserve the original source link, rights statement and author/uploader distinction; do not turn discoverability into authorization to republish a file or its media. [SKY10] [SKY18] [SKY35]

## Evidence and next acceptance gates

No raw-page parser selectors or embedded JSON paths are claimed. Anonymous `urllib` retrieval was denied by the execution environment before a response, so this pass used actual web open/click/find output. HTML selectors guessed from generic Invision, Wix or Squarespace conventions would be unjustified. The observed field labels and URL structures above are evidence to guide later capture, not a substitute for inspecting the actual DOM and exact response representation.

A useful next fixture for each service should capture an authorized public post and its canonical profile, enumerate all body blocks and gallery pages, distinguish thumbnail/original media, resolve signed/external file links without publishing sensitive query data, preserve version edits and deletion states, and explicitly record gated fields. A playable video requires a real playback/decode result; a GIF requires verified animation; an archive requires file/version/integrity evidence. Authentication or a successful metadata query alone closes none of those gates.

The [sanitized game manifest](../../../experiments/site-adapter-discovery/game-research-2026-10-28.json) contains 35 scopes, 11 cases, 72 source records, observed media URLs, per-field states and failed retrievals. Source IDs **SKY1–SKY72** are included in the [source register](../../../data/sources.json). Failed/empty/blocked records explicitly keep `primaryContentObserved: false`; their register presence is not evidence that source content was read. There are **zero new implemented adapters and zero authenticated or full-content acceptances** from this pass.
