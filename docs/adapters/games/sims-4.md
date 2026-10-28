# Sims 4 creator, mod and custom-content ecosystem

[Adapter laboratory](../README.md) · [Identity, body, media and follow contract](../author-post-media-contract.md) · [Validation gate](../validation-and-adoption.md)

**Checked October 28, 2026 UTC (October 27 in America/Denver).** This pass records public first-party page inspection across 32 services/scopes, including creator-owned release sites and compatibility references. It does not establish 32 functioning adapters. The public subpass did not authenticate an account, change follows, download a mod binary or accept full extraction. A subsequent [Mod Collective browser fixture](../mod-collective.md) verified one signed-in free download, body extraction, three gallery images and the linked creator avatar.

## What the public inspection established

Sixteen services have detailed page observations below. Actual item and creator/profile routes were opened where exposed. Two content previews actually displayed: a SimsFinds JPEG and a SnootySims PNG. Link presence, page-readable text, media loading, authenticated access and accepted extraction are separate states. No video/GIF playback was validated. No creator-avatar decode was accepted in this public subpass; the subsequent Mod Collective receipt records a separate successful decode.

The attempted anonymous Python retrieval was denied before a response. This subpass therefore used retrieved first-party pages and small-field transcription. The field locations below identify observed headings, labels and links; they are **not guessed CSS selectors or embedded JSON paths**. A real parser must acquire permitted DOM/schema fixtures before implementation.

### High-value failures to preserve

- Mod Collective’s text retrieval exposed an Avatar image label whose observed URL ends in `.null`; that specific fetch failed. A later authenticated browser fixture decoded the sampled avatar, so this is a source-bound retrieval failure, not a universal avatar outage. Its visible `ImageObject.creator.name` strings name creations and cannot identify the human account.
- The MTS Creator image is a generic `paint.gif` role badge. The AML profile-adjacent Image link opened a theme pattern. A Simszoo post Image link opened a Sims logo. None is an author avatar.
- WCIF landing pages expose many search rows while `/creators` remains “Loading creators”; rows explicitly say “No Preview Image”. Index metadata is not an ingested creator post.
- SimsFinds post text includes Show More, a blank Published field in this retrieval, download wait text and a separate tracked Patreon link. A single preview loading does not establish complete content or downloads.
- Around the Sims returned Pharmacy/Drugstore body under a retrieval metadata title saying Nail salon furniture. TSR live index labels and returned creation identity also diverged. Preserve actual resolved IDs/URL/body identity.
- Simszoo download action redirects to MediaFire and failed there. Download record, outbound host and file binary are distinct objects.
- The Russian sims-new item visibly substitutes users-only notices for file regions; the homepage separately announces no more updates/support. Do not erase either limitation.

## Service coverage

| Entry ID | Service | Role and observed access |
|---|---|---|
| `modcollective` | [Mod Collective](https://www.modcollective.gg/sims4) | page-observed; Marketplace combines free, early-access and membership content; real creation and artist pages were opened. |
| `simsfinds` | [SimsFinds](https://www.simsfinds.com/) | page-observed; Actual creation, creator profile and public preview image inspected; listing text and downloadable entitlement are separate. |
| `aml-name` | [Adult Mods Localized](https://aml.name/forums/topic/4957-zlye-prihoti-18-nswf/) | page-observed; Russian Invision community; inspect neutral author, pagination, hidden-section and attachment structure only; no explicit material retained. |
| `f95zone` | [F95zone](https://f95zone.to/threads/the-sims-4-nsfw-modding.73299/page-681) | retrieval-failed; Exact requested page returned non-retryable error. No body, identity, media or login-only classification established. |
| `loverslab` | [LoversLab](https://www.loverslab.com/files/category/161-the-sims-4/) | retrieval-failed; Category and homepage failed non-retryably. Existing adapter research must remain baseline; no new authenticated or media acceptance. |
| `wcif` | [WCIF.cc](https://wcif.cc/) | page-observed; Home, category landing search, creator directory and sign-in page inspected. Search rows can exist while creator directory remains an empty loading shell. |
| `plumbdex` | [PlumbDex](https://www.patreon.com/gametimedev/posts/small-update-for-168780169) | page-observed; Creator describes PlumbDex as mod-file information/community/discovery database without file hosting. Preserve retained baseline development origin dev-pd.gametimedev.de and specialist guide; fresh directory/profile/wiki web retrieval attempts failed in this subpass. |
| `ts4-rebels` | [TS4 Rebels](https://ts4rebels.cc/) | retrieval-blocked; Initial restricted-fetch error and later explicit robots.txt fetch denial. No current files, body, profiles, avatars or access entitlement inspected. |
| `simszoo` | [Simszoo](https://www.simszoo.de/) | page-observed; German WoltLab community with Sims 4/3/2 downloads; actual file record and limited member profile opened. |
| `mod-the-sims` | [Mod The Sims](https://modthesims.info/downloads/ts4/) | page-observed; Actual scripting-mod record, file table and numeric creator profile inspected. Archive filenames and internal script files have separate identities. |
| `tsr` | [The Sims Resource](https://www.thesimsresource.com/downloads/browse/category/sims4/skipsetitems/1/) | page-observed; Real creation and Jolea profile opened; source text includes placeholder account/menu/download dialogs that must not be mistaken for an authenticated session. |
| `sims4studio` | [Sims 4 Studio Forum](https://sims4studio.com/) | retrieval-failed; Homepage timed out twice; custom-content board inaccessible. Tool/site provenance remains separate from an accepted forum collector. |
| `simsworkshop` | [SimsWorkshop](https://simsworkshop.net/resources/categories/the-sims-4-mods.9/) | retrieval-blocked; First-party search excerpts show XenForo resources and unmaintained labels, but actual opens failed robots-unreachable/403. No post/profile extraction accepted. |
| `sims4updates` | [Sims 4 Updates](https://sims4updates.net/) | page-observed; Broad finds archive whose currently exposed newest entries date April 5 2022; distinguish archive discovery from current mod compatibility. |
| `sims4downloads` | [Sims 4 Downloads](https://sims4downloads.net/) | page-observed; Separate finds archive; latest observed entries also April 2022. Preserve separate source record even where both sites index same creator work. |
| `sims4-cc` | [SIMS 4 CC](https://sims4.cc/) | page-observed; First-party about page states directory-only operation and no file hosting; detail and creator directory routes verified. |
| `sims4mods-cc` | [Sims4Mods CC database](https://sims4mods.cc/) | retrieval-blocked; Search discovery advertised creator-linked catalog; direct first-party homepage returned 403. No detail/profile/body acceptance. |
| `sims-catalog` | [The Sims Catalog](https://thesimscatalog.com/sims4/) | page-observed; Actual item shows full Description separately from short teaser, gallery links, creator facet and external-host download warning. |
| `simsdom` | [SimsDom](https://www.simsdom.com/) | page-shell; Current homepage exposes wallpaper/Halloween navigation and cookie policy; original rich Sims catalog not established. Do not silently merge identities with SimsFinds. |
| `sim-file-share` | [Sim File Share](https://simfileshare.net/support/faq/) | page-observed; Official FAQ says downloads do not require accounts, uploads do; no global browse/listing even after login. Follow original creator links to scoped public files/folders. |
| `around-the-sims` | [Around the Sims](https://sims4.aroundthesims3.com/) | page-observed; Legacy Sims4 subdomain redirects to aroundthesims4.com. Valuable bilingual static catalog archetype: per-item free files, donor bundles and creator-specific terms. |
| `syboulette` | [Syboulette CC](https://s4cc.syboulette.fr/) | page-observed; Creator-owned site describes Patreon early access, later free releases and paid direct-link library. Homepage body loaded; Free Downloads route returned 404. |
| `lot51` | [Lot 51](https://lot51.cc/) | page-observed; Independent scripted-mod release catalog exposes versions/dates and support routes. Useful release/project distinction; no detail parser/API or author-avatar acceptance. |
| `scarlets-realm` | [Scarlet’s Realm](https://scarletsrealm.com/the-mod-list/) | page-observed; Compatibility/status discovery reference with public and patron editions; not a mod-file host. Preserve patch-specific status/source time separately from download availability. |
| `maxis-match-cc-world` | [Maxis Match CC World](https://maxismatchccworld.tumblr.com/) | page-observed; High-value Sims Tumblr reblog/finder archetype; actual post and original creator blog opened. Curator, original author and file-host roles all differ. |
| `sims-new` | [sims-new](https://sims-new.my1.ru/) | page-observed; Homepage announces no further additions/support after image-host cost changes. Existing large Russian archive remains discoverable; actual item hides download regions from guests. |
| `sims3pack` | [Sims3Pack.ru](https://sims3pack.ru/sims-4/) | page-observed; Russian Sims community catalog exposes separate Sims 4 clothing/build/mod/program categories. Listing observed only; no original-author rights or current file compatibility acceptance. |
| `luniversims` | [L’UniverSims](https://luniversims.fr/) | retrieval-failed; Homepage timed out and guessed Sims4 category could not be opened. Current detail/profile/media/account states not verified. |
| `snootysims` | [SnootySims](https://snootysims.com/) | page-observed; Current first-party landing advertises creator follow/favorites and direct-hosted sets alongside outbound finds. Real paid-early-access set inspected. |
| `sims-community` | [Sims Community](https://simscommunity.info/) | page-observed; Editorial/discovery hub with Sims mod/CC navigation; useful original reporting and creator discovery, not established universal mod-file hosting. |
| `sims4modhub` | [Sims 4 Mod Hub](https://sims4modhub.com/) | page-observed; Category directory and upload entry point visible. Original author/file provenance must be verified per item before trusting reindexed content. |
| `mccc-project` | [MC Command Center project site](https://deaderpool-mccc.com/) | page-observed; Creator-maintained supported-public-release and documentation/support hub. Retained as valuable release archetype, not another multi-creator community. |

## Detailed public-page observations

### Mod Collective

**Later verified result:** the [dedicated workbench](../mod-collective.md) records signed-in DOM extraction and a completed free download for the same creation. The following entries retain the earlier public-tool results, including its avatar-fetch failure.

**[Royal Dining Room Wallpaper by Philo](https://www.modcollective.gg/sims4/details/creation/philo-royal-dining-room-elegant-wallpaper)** — SIMS002; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: Rendered H1, line 11 of initial detail retrieval; body: About tab text after tabs; initial lines 34–35; creator: Created by -> Philo -> /sims4/artist/philo; files: Rendered 1 FILES and 1 VERSIONS sections, lines 68–83; identity: creationID label, line 106.

Body: About text and file/version labels visible; actual file URLs and full comments not established. Identity/avatar: Artist linked separately; creator ID slug philo. Avatar belongs to artist profile, not wallpaper preview.

Media: Three detail image links observed. One image request failed. GIF/video presence and full-gallery coverage unverified. Files: One free-access file and one version visible; binary URL absent in retrieved text.

Follow: Artist profile displays Follow and Followers; source action/import untested. Access: Guest-readable post. Membership/download behavior requires browser fixture.

Remaining gap: Files tab first retrieval omitted file rows; later retrieval exposed them. Preserve partial initial state.

**[Philo — Amazing Artist](https://www.modcollective.gg/sims4/artist/philo)** — SIMS003; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: profileName: Rendered Philo Amazing Artist heading; avatar: Image: Avatar link, line 52; imageMetadata: Rendered linked ImageObject.contentUrl and creator.name JSON, lines 112+; creator.name here names a creation, not the human author.

Body: Profile, join date, counts, specialty and creation list visible; not a complete history. Identity/avatar: Avatar link resolves to images.modcollectivegg.com/6117e75a-3a6f-4a0d-8709-250c5d283331.null?format=auto&width=128; retrieval failed.

Media: Avatar was not decoded. ImageObject creator.name values describe content titles; do not resolve account identity from them. Files: Profile lists creations; no downloaded files.

Follow: Follow label and follower count present; do not equate with paid ClubMOD. Access: Public profile.

Remaining gap: No avatar acceptance; cached retrieval listing dates vary.

### SimsFinds

**[Robin Hair — RIGHT](https://www.simsfinds.com/downloads/407711/robin-hair-right-sims4)** — SIMS005; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 145; description: Text line 151 plus separate Patreon paragraph line 157, each followed by Show More; image: Image link line 149; download: Download labels lines 166–170 with wait/Premium message.

Body: Description paragraphs visible, but Show More remains and published timestamp is blank in this retrieval. No complete-body assertion. Identity/avatar: Post links Patreon SonyaSims through outbound tracking; creator profile independently opened.

Media: JPG https://img.simsfinds.com.br/downloads/2026/10/09/33eada95fcfe6ca11e91a94937a2148b-big.jpg actually displayed. It is content preview, not avatar. No animation/video established. Files: Download timer text; no file URL or binary acceptance.

Follow: Account creation offered to save favorites/lists. This is not verified native creator-follow mutation. Access: Guest detail available; download wait and Premium skip visible.

Remaining gap: Non-www request failed; www route succeeded. Do not interpret a successful tracked Patreon link shell as downloaded post.

**[SonyaSims — SimsFinds](https://www.simsfinds.com/sonyasims)** — SIMS006; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: name: H1 SonyaSims, line 43; bio: Line 47; recommendations: Simmers also follow section lines 32+; history: Creation labels and paid flags lines 49–102.

Body: Creator bio and partial list exposed; no complete history. Identity/avatar: Canonical profile slug sonyasims. No avatar source exposed in retrieved profile text.

Media: No profile image was identified as avatar. Files: Paid labels visible; files remain untested.

Follow: Simmers also follow is a recommendation label; exact relationship control/import not exposed. Access: Public profile.

Remaining gap: No numeric creator ID or avatar mapping proven.

### Adult Mods Localized

**[Requested Sims 4 topic — neutral structure](https://aml.name/forums/topic/4957-zlye-prihoti-18-nswf/)** — SIMS008; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: author: By Just -> /profile/214-just/, line 113; follow: Sign in to follow this and follower count lines 108–110; pagination: Page 1 of 10, lines 124–132; body: Recommended Posts plus extensive structured sections, spoiler/hidden labels and external links.

Body: Extensive public first-page text retrieved; ten topic pages and hidden/spoiler sections prevent complete-topic assertion. Identity/avatar: Topic author Just resolves profile ID 214; repliers remain separate accounts.

Media: Images/hidden sections observed as structure only; no explicit image opened or stored. The inspected profile Image link was a site theme pattern, not avatar. Files: Many external file-host links; no attachment binaries or entitlement accepted.

Follow: Native topic follow requires sign-in. Profile separately shows followers; topic and user following are different objects. Access: Guest topic; https://aml.name/login/ login form was actually opened.

Remaining gap: Do not promote hidden labels or plain URLs into complete attachments.

**[Just — Adult Mods Localized](https://aml.name/profile/214-just/)** — SIMS009; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: name: Profile H1 line 82; followers: 113 Followers heading line 106; activity: Activity entries with source topic links lines 149+.

Body: Public profile summary/activity readable, not complete account history. Identity/avatar: Member 214; account display name Just. Avatar unverified.

Media: Clicked generic Image resolved uploads/set_resources_3/..._pattern.png; this is theme/background and must be rejected as avatar. Files: Activity links do not constitute downloadable files.

Follow: Follower heading observed, no mutation/import executed. Access: Public profile; login options shown.

Remaining gap: Avoid storing unnecessary personal information or account activity.

### WCIF.cc

**[Sims 4 Hair CC](https://wcif.cc/lp/hair)** — SIMS014; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: searchRows: Rendered H4 item titles and H5 shared-by names, lines 88+; media: No Preview Image per row; filters: Sources and Free Accessible/paywall controls lines 14–82.

Body: Many result rows retrieved; rows are index metadata, not the creator post body or complete history. Identity/avatar: Shared-by creator labels are unresolved identities; creator directory says Loading creators.

Media: No Preview Image explicitly shown. Do not fabricate thumbnails or avatars. Files: Download from Patreon labels lack exposed URLs in this text; hosted-only route separately returned shell.

Follow: Homepage advertises discovering/following creators; native follow/import unverified. Access: Public search; actual login https://wcif.cc/auth/signin.

Remaining gap: No exact post route, account ID or underlying JSON API verified.

### PlumbDex

**[GameTimeDev PlumbDex announcement](https://www.patreon.com/gametimedev/posts/small-update-for-168780169)** — SIMS018; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: announcement: Plans for the next weeks heading and paragraph lines 133–148; profile: GameTimeDev creator links, lines 103–105.

Body: Public announcement body readable; plans are not proof that service features shipped. Identity/avatar: GameTimeDev is announcement author. No PlumbDex account/profile tested in this subpass; retained specialist guide has earlier public observations.

Media: Creator profile picture link visible on Patreon; not fetched. Files: Author explicitly describes metadata storage without downloadable-file hosting.

Follow: Patreon Join for free is membership, not a verified PlumbDex follow. Access: Public announcement; no new PlumbDex login URL established in this subpass; retain earlier specialist-guide follow/account evidence.

Remaining gap: Do not use guessed plumbdex.com. Retained baseline identifies dev-pd.gametimedev.de; this subpass could not re-open those exact routes.

### Simszoo

**[S4-Herbstbild 2026](https://www.simszoo.de/filebase/file/5597-s4-herbstbild-2026/)** — SIMS022; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 32; author: Chalipo link line 34; body: Overview text lines 45–55; version: Version 1.0.0 line 59; download: Download link /filebase/download/5608/.

Body: Overview, requirement and version exposed; no complete profile/history. Identity/avatar: Member profile /user/388-chalipo/ opened; explicitly limits who may view full profile.

Media: Post Image link clicked later resolved a Sims4 symbol, not painting preview; do not label every post-adjacent image gallery content. Files: Download action redirected to MediaFire S4-Bild-Herbst_2026.rar and failed retrieval; external-host provenance preserved.

Follow: No follow control observed. Access: Guest overview and limited profile; https://www.simszoo.de/login/ form opened.

Remaining gap: No file bytes; profile restriction must survive login retries.

### Mod The Sims

**[Straight to Pajamas — V.1.3 Update](https://modthesims.info/d/701054/straight-to-pajamas-v-1-3-update.html)** — SIMS026; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: body: Overview requirements/installation/compatibility sections lines 126–147; files: Filename/Type/Size table lines 150–153; Files link lines 170–172; author: Author -> SuoSoup, lines 191–195; images: SCREENSHOTS filenames and dimensions lines 112–116.

Body: Overview, requirements, compatibility, installation and file names visible; comments say Loading comments. Identity/avatar: Author resolves /m/10426623; Creator icon /images/icons/paint.gif is a role badge, not an avatar.

Media: Two JPEG screenshot filenames/dimensions visible; no full-resolution screenshot loaded. GIF fetch for role badge rejected unsupported content-type. Files: ZIP archive linked on chii.modthesims.info; internal .ts4script row size 8770. File bytes untested.

Follow: Thanks and Favourited counts visible; author follow not proven. Access: Guest detail and creator profile readable; sign-in form embedded.

Remaining gap: Keep page-title version, stated compatibility and artifact version distinct.

### The Sims Resource

**[SIM inspired by Inde Navarrette](https://www.thesimsresource.com/downloads/details/category/sims4-sims-female-youngadult/title/sim-inspired-by-inde-navarrette/id/1795813/)** — SIMS029; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: creator: Created By -> Jolea lines 564–568; fileMetadata: Published, Downloads and 263 KB lines 570–574; requirements: Required downloads panel versus note that a separate additional list is not required; profileId: Jolea profile heading exposes (7645121).

Body: Creation body and dependency labels visible; lazy/hidden content and download dialogs remain. Identity/avatar: Creation ID 1795813; creator member ID 7645121; Germany flag is not avatar.

Media: Creation media links present but no gallery playback/load verification. Files: 263 KB metadata and required-download count visible; no binary downloaded.

Follow: Jolea profile has Follow control; Artists I Follow menu present. No action/import. Access: Public page; Sign In and account placeholder menus both appear, so menu text is not authentication proof.

Remaining gap: Index label/link target diverged during live retrieval. Record actual returned creation, not original index label.

### Sims 4 Updates

**[Chain Skirt at My Stuff Origin](https://sims4updates.net/clothing/chain-skirt-at-my-stuff-origin/)** — SIMS035; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: Rendered heading lines 94–96; preview: Image link line 98; body: Summary lines 100–102; outbound: Download -> www.mystufforigin.com line 104; date: Filed Under/Tagged With date line 108.

Body: Short index summary is readable; original creator post body is external. Identity/avatar: Credited My Stuff Origin; creator tag is not numeric account/profile.

Media: One preview image link; not media-loaded. Files: External Download link, no host file metadata or binary.

Follow: Unobserved. Access: Public index post.

Remaining gap: Do not claim creator avatar/profile or native follow from a tag page.

### Sims 4 Downloads

**[Chain Skirt from My Stuff Origin](https://sims4downloads.net/chain-skirt-from-my-stuff-origin/)** — SIMS037; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 19; body: Lines 23–25; creatorLink: More from My Stuff Origin line 28; date: Category/tags line 30.

Body: Index summary only; original creator body is not ingested. Identity/avatar: Creator credit and taxonomy link; no verified account ID/avatar.

Media: One image link, no decode test. Files: External Download here link.

Follow: Unobserved. Access: Public archive.

Remaining gap: Duplicate subject across indexes must link as independent observations of original creator work.

### SIMS 4 CC

**[Edible Wedding Cake and Toppers](https://sims4.cc/download/edible-wedding-cake-and-toppers-by-around-the-sims-4/)** — SIMS039; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 9; creator: by Around the Sims 4 line 11; creator link /creators/around-the-sims-4/; summary: Description paragraph line 13; access caveat line 14; attributes: Price/Creator/Category/Hosted on/Added/Updated/Link lines 16–29; outbound: Get it on aroundthesims4.com line 30.

Body: Editorial index summary and source-check status visible; no creator post ingestion. Identity/avatar: Creator page is directory listing, not proved creator-controlled account. No avatar exposed.

Media: Preview Image link observed, not loaded. Files: Outgoing original-host link; individual free downloads versus donor bundle stated as directory summary, not tested entitlement.

Follow: No follow control observed. Access: Public detail and /creators/pralinesims/ page opened.

Remaining gap: A directory Checked and working label is not independent verification of original file.

### The Sims Catalog

**[Halloween Wallpapers](https://thesimscatalog.com/sims4/downloads/build-mode/wallpapers/halloween-wallpapers/)** — SIMS044; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 126; creator: BY MDE line 128 -> creator facet query; gallery: Eight Image links line 123; fullBody: Description section lines 142–157, separate from teaser line 132; outbound: Download from Creator lines 174–196; listingKey: SKU line 138.

Body: Full visible Description differs from short teaser; neither is original external host body. Identity/avatar: MDE creator facet /all-downloads/?post_type=product&tsc_creator=MDE opened; not a verified profile account/avatar.

Media: Eight gallery links observed; no gallery image decoded. Files: External hosted file; Download from Creator button and leaving-site dialog.

Follow: Add to Favourites and Add to Collection visible; creator follow not established. Access: Public item; actual WordPress login route opened.

Remaining gap: Do not normalize favorites/collections into creator follows.

### Around the Sims

**[Pharmacy/Drugstore content; metadata title says Nail salon furniture](https://aroundthesims4.com/objects/room_community_53.shtml)** — SIMS051; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: bodyIdentity: Rendered Pharmacy/Drugstore line 39 differs from retrieval title Nail salon furniture; access: Donators privilege and per-file free download statement lines 41–43; creator: Per-object designed by Sandy lines 47+; gallery: Object-specific Image: Pharmacy links lines 49+; policy: Terms of Use lines 170–179.

Body: Bilingual item descriptions and upload dates visible; download URLs were not exposed by text retrieval. Identity/avatar: Creator credit Sandy repeats per item; no account/profile/avatar.

Media: Per-item images linked. No gallery fully loaded. Files: Source states free individual files, donor whole-set convenience; bytes and member entitlement untested.

Follow: No native follow observed; external Patreon early access separately linked on homepage. Access: Guest item page.

Remaining gap: Metadata title/body identity mismatch requires body-aware matching. Do not label donor bundle as only available file.

### Maxis Match CC World

**[Rindle House reblog on Maxis Match CC World](https://maxismatchccworld.tumblr.com/post/745485207111680000)** — SIMS056; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: sourceAuthor: qubedesign name/link line 6; gallery: Eleven ordered image links lines 7–27; provenance: Reblogged from and Originally from line 42; files: SFS and CurseForge links lines 33–37; notes: Notes count and note continuation lines 44+ and 135.

Body: Visible reblog body and original attribution readable; note continuation and creator history incomplete. Identity/avatar: Curator maxismatchccworld and origin qubedesign distinct; original creator page opened. No avatar confirmed.

Media: Eleven image links observed, no gallery decode or NPF JSON inspected. GIF/video in other posts not ruled out. Files: Creator links both CurseForge and SFS; SFS page failed. No binary.

Follow: Theme Follow my Instagram is external; Tumblr native follow/import not verified in this pass. Access: Public themed post and original blog.

Remaining gap: Do not treat reblog curator as content author or post note list as follow list.

### sims-new

**[BUDAPEST Set by lilis-palace](https://sims-new.my1.ru/publ/ctroitelstvo_v_sims_4/okna_dveri_i_arki/nabory_dlja_stroitelstva_124_budapest_set_by_lilis_palace/48-1-0-78463)** — SIMS059; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: body: Title/date/package format lines 53–55; sub-set headings/counts lines 57–79; hidden: Repeated users-only notices lines 59+; uploader: Added by Helen line 91; login: Guest email/password form lines 98–105.

Body: Set headings/counts visible; repeated users-only placeholders replace links/content. Incomplete guest body explicitly retained. Identity/avatar: Credited original creator lilis-palace differs from uploader Helen. No verified numeric account/profile/avatar.

Media: Product previews absent from retrieved body; global site icons are not post media. Files: Users-only download regions; no file links/bytes accepted.

Follow: RSS link exists; native creator follow not observed. Access: Guest login form embedded; exact item is priority authorized-login return URL.

Remaining gap: Archive shutdown statement and hidden links are independent limits.

### SnootySims

**[Tumbly Set](https://snootysims.com/cc-downloads/snootysims-tumbly-set/)** — SIMS063; page observed, fields transcribed, full extraction/authentication/acceptance absent.

Field sources: title: H1 line 16; body: Description line 18 and Inside the Tumbly Set list lines 29–37; entitlement: Early access/date/12MB RAR lines 20–27; creator: Hosted directly and Created by SNOOTYSIMS line 27; authDocumentation: Embedded privacy section says Clerk, lines 103–105.

Body: Visible body, item list and installation instructions readable; paid file bytes not accessible in this pass. Identity/avatar: Creator label SNOOTYSIMS; no avatar exposed. Miliniki creator link opened but resolved search results, not a profile.

Media: Tumbly PNG https://snootysims.com/wp-content/uploads/2026/10/SNOOTYSIMS-Tumbly-Set-04.png actually displayed. Other promotional images are separate from set gallery. Files: 12 MB RAR metadata; paid Premium until November 4 2026; download not attempted.

Follow: Landing says save favorites and follow creators; no native relationship control/import accepted. Access: Guest body with paid entitlement gate; login/sign-up controls visible, site-owned policy says Clerk.

Remaining gap: Date reaching release does not authorize assuming access; recheck actual download state.

## Login and access verification queue

Use the [secure interactive login workflow](../authenticated-research.md) for authorized account access. Exact item return URLs matter. A blocked guest fetch does not establish that login will help, and a login cannot override profile privacy or paid entitlement. Use existing authorized access; do not purchase access, bypass anti-bot/robots controls or move credentials into research files.

| Priority | Exact URL | Observed reason |
|---|---|---|
| 1 | [Return page](https://f95zone.to/threads/the-sims-4-nsfw-modding.73299/page-681) | Browser site-safety policy denied navigation before login. Do not retry through alternate surfaces or bypass. Preserve blocked-policy state. |
| 2 | [Return page](https://www.loverslab.com/files/category/161-the-sims-4/) | Browser site-safety policy denied navigation before login. Do not retry through alternate surfaces or bypass. Preserve blocked-policy state. |
| 3 | [Return page](https://ts4rebels.cc/) | Explicit robots fetch denial; no bypass. Use legitimate permitted browser only if allowed. |
| 4 | [Return page](https://sims-new.my1.ru/publ/ctroitelstvo_v_sims_4/okna_dveri_i_arki/nabory_dlja_stroitelstva_124_budapest_set_by_lilis_palace/48-1-0-78463); [observed login](https://sims-new.my1.ru/) | Actual item displays users-only hidden regions and login form. |
| 5 | [Return page](https://aml.name/forums/topic/4957-zlye-prihoti-18-nswf/); [observed login](https://aml.name/login/) | Native topic follow sign-in gated; compare authorized body without retaining explicit content. |
| 6 | [Return page](https://wcif.cc/creators); [observed login](https://wcif.cc/auth/signin) | Creator directory loading shell; distinguish client hydration from account requirement. |
| 7 | [Return page](https://www.modcollective.gg/sims4/details/creation/philo-royal-dining-room-elegant-wallpaper) | Verify actual public/free download and artist follow; no exact standalone login route observed. |
| 8 | [Return page](https://snootysims.com/cc-downloads/snootysims-tumbly-set/) | Premium early-access entitlement; use already-authorized account only, no purchase. |
| 9 | [Return page](https://www.simszoo.de/user/388-chalipo/); [observed login](https://www.simszoo.de/login/) | Profile privacy restriction; login may still not authorize full profile. |
| 10 | [Return page](https://www.simsfinds.com/sonyasims) | Verify source creator-follow and avatar; exact standalone login route not observed. |
| 11 | [Return page](https://thesimscatalog.com/sims4/downloads/build-mode/wallpapers/halloween-wallpapers/); [observed login](https://thesimscatalog.com/sims4/account-login/) | Favorites/collections controls; creator facet is not a follow. |
| 12 | [Return page](https://www.thesimsresource.com/members/Jolea/) | Actual Follow control; no mutation without explicit authorization. |

## Implementation decisions and rejected alternative

Prefer creator-origin content and retain every intermediary as a separate provenance node. A directory listing, reblog, uploader, original creator, project release and hosted file must not collapse into one author/post. Accept missing avatars explicitly. Keep `.package`, `.ts4script`, archives, sets, lots and dependencies separate from media. Preserve access state and publication/update/version fields independently.

Reject a universal title/thumbnail scraper as the default implementation: these observed pages contain excerpts, hidden regions, moving link identities, placeholders, external hosts, generic role icons and entitlement boundaries. Site-specific parsing costs more maintenance but can preserve complete accessible content and correct identity. The alternative remains acceptable only for an explicitly labeled discovery-only card that makes its partial state clear.

Use common platform adapters where evidence supports them: Tumblr for reblog provenance, WordPress for relevant independent sites, Invision for AML/LoversLab where permitted, and WoltLab for Simszoo. These are reuse candidates, not proof that one selector set works across installations. No API endpoint, rate limit, direct-file URL construction, native follow mutation or account import was invented.

Acceptance requires permitted real DOM/JSON fixtures, correct account/avatar mapping, complete accessible body and ordered media parity, full gallery/media loads, authorized file delivery, continuation/edit handling and access-boundary tests. Preserve the current target baseline; these findings alone do not justify target application changes.

## Source register identifiers

The machine-readable companion contains each primary source URL, observed title/retrieval result, original notes and detailed evidence. The following source IDs are included in the [source register](../../../data/sources.json); failed/shell sources remain registered as failures, not promoted to successful extraction:

SIMS001, SIMS002, SIMS003, SIMS004, SIMS005, SIMS006, SIMS007, SIMS008, SIMS009, SIMS010, SIMS011, SIMS012, SIMS013, SIMS014, SIMS015, SIMS016, SIMS017, SIMS018, SIMS019, SIMS020, SIMS021, SIMS022, SIMS023, SIMS024, SIMS025, SIMS026, SIMS027, SIMS028, SIMS029, SIMS030, SIMS031, SIMS032, SIMS033, SIMS034, SIMS035, SIMS036, SIMS037, SIMS038, SIMS039, SIMS040, SIMS041, SIMS042, SIMS043, SIMS044, SIMS045, SIMS046, SIMS047, SIMS048, SIMS049, SIMS050, SIMS051, SIMS052, SIMS053, SIMS054, SIMS055, SIMS056, SIMS057, SIMS058, SIMS059, SIMS060, SIMS061, SIMS062, SIMS063, SIMS064, SIMS065, SIMS066, SIMS067, SIMS068, SIMS069, SIMS070, SIMS071.
