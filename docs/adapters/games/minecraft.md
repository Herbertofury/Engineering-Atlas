# Minecraft communities, project files and creator identity

Checked **2026-10-28 UTC**; user-facing research date **October 27, 2026, America/Denver**. Evidence level: **public observation plus primary documentation**, with failed requests preserved. This pass studies 31 distinct services/scopes, including blocked candidates and independent creator hubs. It does not add 31 working adapters, certify an entire domain, or establish a download, avatar decode, video playback, authenticated follow/import or complete-history acceptance.

The most actionable starting points are Modrinth for documented structured project content, CurseForge for its approved API plus page-only author avatars, Hangar for plugin pages and its current OpenAPI, and the actual linked Planet Minecraft, ModBay and MinecraftMaps project/profile pairs. Regional community pages reveal useful author roles and original release links, but a regional article, uploader and original mod developer are separate entities. BuiltByBit permits only its official API for programmatic interaction. These recommendations are conditional on the field and operation evidence below.

## What was actually inspected

Opened public project and linked author/organization pages on **nine services**: Modrinth, CurseForge, Hangar, Planet Minecraft, ModBay, MinecraftMaps, GitHub, MC百科 and MCBBS Memorial. “Pair inspected” does not mean the profile supplied every required field: several lack a usable avatar URL, and encyclopedia authors are not automatically site accounts. Minecraft Forum release-thread page 1 and page 2 also opened, but its author's profile returned 403. Spigot's project opened while its correct author route returned 503. MCPEDL returned a partial project and a broken author shell.

Observations came from public retrieval, not an authenticated browser. Semantic headings, link destinations and image labels below are observed field sources. No CSS selector or DOM script was executed. Treat suggested anchor matching as an implementation candidate until verified against a permitted HTML fixture. Search snippets were used only to locate primary pages. A local `urllib` network attempt was blocked by the sandbox; no alternate network or access bypass was attempted.

## Public project/profile recipes

### Modrinth: structured body and galleries, creator join still incomplete

[Sodium](https://modrinth.com/mod/sodium), [jellysquid3 profile](https://modrinth.com/user/jellysquid3), [actual project JSON](https://api.modrinth.com/v2/project/sodium), [project schema](https://docs.modrinth.com/api/operations/getproject/) and [user schema](https://docs.modrinth.com/api/operations/getuser/) were read (MCX001–MCX005).

The JSON identifies `id=AANobbMI`. Preserve `body` as Markdown/HTML and its inline-media order; `description` is a short summary. Project `icon_url`/`raw_icon_url` are project images. Six gallery records expose `url`, `raw_url`, caption fields and `ordering` values `0,1,10,30,999,1000`; a resized gallery URL must not replace its original source. Keep inline body media and gallery positions independently.

The profile supplies a separately named creator image. The documented user endpoint supplies `id`, `username`, optional display `name` and `avatar_url`; the project `team` joins to member roles. Live user/member and individual-version requests failed, so that creator join remains unverified. A later [version-list request by project ID](https://api.modrinth.com/v2/project/AANobbMI/version) succeeded (MCX067): version `g6ju16VJ` links project `AANobbMI`, uploader `TEZXhE2U`, Fabric/game-version compatibility and file `rbdNchdD`. The file manifest supplies original filename, CDN URL, size `1912496`, SHA-1/SHA-512 and primary flag. Separate NeoForge variants remain separate releases/files. No jar bytes were fetched. Project follow and followed-project import are distinct from a locally maintained creator follow. No follow action was performed.

### CurseForge: API description plus actual member avatar

[JEI](https://www.curseforge.com/minecraft/mc-mods/jei), [mezz](https://www.curseforge.com/members/mezz/projects), [file 9207610](https://www.curseforge.com/minecraft/mc-mods/jei/files/9207610) and [API docs](https://docs.curseforge.com/rest-api/) were inspected (MCX006–MCX009).

Project ID `238222` and author link `/members/mezz` are explicit. The Team block labels the owner and a **profile avatar**, distinct from the project item image and description screenshot. The member page has its own avatar plus Projects/Favorites/Followers. Description, gallery, file changelog and release metadata are separate channels. A rendered `Unfollow` label alone establishes neither authenticated state nor a successful write.

The documented API uses `x-api-key`; no key was supplied. Use `data.authors[].id/name/url` for author identity, not `data.logo`; the author schema lacks an avatar field. Fetch `/v1/mods/{id}/description`, screenshots and version files separately. Preserve a file's ID, compatibility, dependencies, hashes and authorized URL. API pagination is capped at 50/page and a 10,000-result window. Project/member pages being readable is not permission to evade API distribution controls.

### Hangar: organizations and plugin platforms

[ViaVersion project](https://hangar.papermc.io/ViaVersion/ViaVersion), [organization](https://hangar.papermc.io/ViaVersion) and [current OpenAPI JSON](https://hangar.papermc.io/v3/api-docs/public) were inspected (MCX026–MCX028).

The project body places a YouTube iframe before ordered external images. The profile identifies an **Organization**, six projects and member roles. Preserve organization ownership separately from human developers and version uploaders. OpenAPI `User.id/name/isOrganization/avatarUrl` describes creator identity; `Project.avatarUrl` is the project icon. `Project.mainPageContent` holds body content. `Version.downloads`, `platformDependencies` and `pluginDependencies` preserve platform-specific file choices.

The live project API request failed, so the schemas are documented rather than a passed payload fixture. Use only published routes: the specification says unlisted routes are internal. Anonymous access covers public information; nonpublic operations use API-key-derived expiring HangarAuth JWTs. `userActions.watching` and `stats.watchers` describe project watch semantics, not verified author-follow import. Media decoding, YouTube playback and file bytes remain untested.

### Planet Minecraft: inspect real links and collapsed sections

The [mod directory](https://www.planetminecraft.com/mods/) led to [More Music Discs](https://www.planetminecraft.com/mod/more-music-discs-fabric-forge-1-16-5-1-19-2/) and [MarsThePlanet](https://www.planetminecraft.com/member/marstheplanet/) (MCX010–MCX012). Earlier guessed project/profile URLs failed; these actual linked pages opened.

Use the project byline's member link as author provenance. Preserve the main description, collapsed “Click to reveal” copyright section and ordered Imgur media before Tags/Update Logs. Do not absorb comment avatars or recommendations into body media. The page reports 76 update logs but initially exposes only the latest plus `LOAD MORE LOGS`; complete history remains unproven. Profile Content Gallery, Subscribers, Subscriptions and personalized site feed are different channels. Creator avatar URL and a native Subscribe action were not exposed in the retrieved profile. Do not infer either from the member name or a commenter image. Native follow, download resolution and pagination need permitted client fixtures.

### ModBay: profile avatar and long body separate from comments

[Better on Bedrock post 365](https://modbay.org/mods/365-better-on-bedrock.html) links [XxPoggyisLitxX](https://modbay.org/user/xxpoggyislitxx/) (MCX022–MCX023). The lowercase canonical route matters; a guessed mixed-case URL failed.

The profile explicitly labels its image as the creator's profile avatar and supplies bio, join date and four posts. The post's Thumbnail is a different asset. Preserve the long main body and changelog, item/recipe images and headings through the Download links and Supported versions sections. Exclude sidebars, More articles and comments. The mcaddon link is a file-discovery observation; its final redirect and bytes were not verified. An inspected external-link interstitial was a **wiki** link, not the file. Comments expose pages 1–7 and Load more; no complete pagination acceptance. “Follow my Twitter” is external social follow, and hearts lead to login. Neither proves a native ModBay creator follow.

### MinecraftMaps: gallery, author and editions

The current [homepage](https://www.minecraftmaps.com/), [Parkour Spiral detail](https://www.minecraftmaps.com/29139-parkour-spiral) and [Hielke profile](https://www.minecraftmaps.com/user/Hielke) opened (MCX016–MCX018). This supersedes an earlier 403 only for these observed pages.

The detail exposes a seven-item gallery: trailer thumbnail plus six screenshots. Preserve gallery order, Description, Changelog and Videos as separate sections. The byline, creator card and Uploaded By link all point to Hielke. The `H` fallback is not an avatar image. Map version `3.0.3`, Minecraft version `26.2` and `11.8 MB` appear with Download Map; no file bytes were fetched. The page expressly identifies the Java map and links its distinct Bedrock Marketplace edition.

The profile shows Follow and a 14-map count, while the retrieval exposes only 12 map links. That discrepancy is a concrete completeness failure to resolve, not an exhausted history. Follow was observed but not clicked or imported.

### GitHub: owner, release author and source archive differ

[Sodium repository](https://github.com/CaffeineMC/sodium) and [CaffeineMC organization](https://github.com/CaffeineMC) opened (MCX035–MCX036). The owner profile has a separate `avatars.githubusercontent.com` organization image and verified-domain information. Keep repository owner, release uploader and contributors distinct.

Repository README/source/license/release navigation supplies provenance. Source archives are not automatically compiled mod jars. A future permitted adapter should inspect explicit release asset metadata and compatibility rather than turn every zip/tar link into a playable mod. Preserve inline README media and release-attachment order separately. The page explicitly requires sign-in for notifications and starring; those are not an imported creator-follow list. No release asset, avatar decode or embedded playback was tested in this scope.

### MC百科: author records versus editors

[CTNH modpack 897](https://www.mcmod.cn/modpack/897.html), [author 34953](https://www.mcmod.cn/author/34953.html) and [mod class 1702](https://www.mcmod.cn/class/1702.html) were inspected (MCX043–MCX045).

CTNH's author/development roster links `80802345` with a specific contributor role. Its author page has a separately named image on `i.mcmod.cn`, team and project relationships. This encyclopedia author entity differs from the `center.mcmod.cn` editors and recent visitors. `/modpack/897.html` and `/class/1702.html` are different namespaces.

Extract the long introduction with numbered image labels and section order, and preserve roster roles. Follow related official publisher links for release provenance; an encyclopedia entry is not necessarily the publisher. Class 1702 visibly reports zero mod downloads: do not manufacture a file URL. Native creator follow/import and author-image decoding remain unverified. The page's public editing license statement does not license every linked binary.

### MCBBS Memorial: repost provenance and actual gate

[Memorial home](https://www.mcbbs.co/), [thread 6667](https://www.mcbbs.co/thread-6667-1-1.html) and [UID 213929](https://www.mcbbs.co/space-uid-213929.html) opened; [original mcbbs.net](https://mcbbs.net/) did not (MCX046–MCX049).

Preserve thread ID, post identity and poster UID separately from original software authorship. This thread labels itself a repost and distinguishes original author Matterz from the community-maintained fork. Body cover art is not the poster avatar. The profile supplies UID and display name but no confirmed avatar URL. “Add friend” is not equivalent to creator follow.

The thread explicitly requires login to download/view an attachment area. The visible external GitHub URL is not a successful gated attachment retrieval. Preserve the blocker and do not attempt login or any alternate route to defeat it. The Memorial domain and archived original community must not be silently merged into one current account namespace.

## Remaining services and meaningful discovery scope

These entries add useful discovery choices without inflating the result into a full-support list. A blocked candidate is retained as blocked. An editorial index is useful for discovering original projects, not as evidence that all of its mirrors are authorized. None of the following has a passed complete creator/body/media/files/follow workflow in this pass.

| Service/scope | Observed primary evidence and practical boundary |
|---|---|
| [SpigotMC](https://www.spigotmc.org/resources/luckperms.28140/) | LuckPerms 28140 exposes Luck author route 100356, proxied body images, version and jar download label. Correct [author route](https://www.spigotmc.org/resources/authors/luck.100356/) returned 503. Keep Overview/Updates/History/Discussion and premium purchase entitlements separate. MCX024–MCX025. |
| [MCPEDL.com](https://mcpedl.com/actual-guns/) | Actual Guns shows author, dates, project image and mcaddon metadata; opened Description is empty and [author](https://mcpedl.com/user/azozgamer936/) says undefined in a shell. Search text does not repair the live completeness failure. MCX019–MCX020. |
| [MCPEDB](https://mcpedb.com/) | The homepage request failed with HTTP 520. Requested discovery candidate only; no working recipe and no assumed relationship to MCPEDL. MCX021. |
| [BuiltByBit / former MC-Market](https://builtbybit.com/help/developers/v2-api/v2-overview/) | October 6, 2026 overview permits **only official API programmatic interaction**. Base `/v2/`, token/OAuth and per-endpoint entitlements; some operations require Ultimate. Public index was read for research; no scraping fallback is proposed. MCX033–MCX034. |
| [Polymart / voxel.shop](https://voxel.shop/wiki/api) | Old Polymart docs redirect to voxel.shop. Current [product 323](https://voxel.shop/product/323/polymart-plugin) has publisher link, description, compatibility and jar label, but [publisher](https://voxel.shop/shop/1) returned 403. One service with aliases. MCX029–MCX031. |
| [Sponge Ore](https://ore.spongepowered.org/) | Public shell exposes API link. Retrieved [API documentation](https://docs.spongepowered.org/stable/en/ore/api.html) identifies SpongeDocs 8.0.0 and historical v1 route replacements. Recheck current linked spec before using it. MCX037–MCX038. |
| [Poggit](https://poggit.pmmp.io/) | Both home and old plugin route redirected to [official release archive](https://github.com/poggit/release-archive). Package paths, metadata and archived artifacts require per-package inspection; original live social API is not accepted. MCX039. |
| [MCreator](https://mcreator.net/modifications) | Directory exposes Load More. [Attribute Modifiers](https://mcreator.net/plugin/103319/attributes-nerdy-edition) shows numeric creator link, body/images, changelog and compatibility-specific ZIP rows, but profile 403. Sample is a tool plugin, not a playable mod; preserve the distinction. MCX040–MCX042. |
| [Minecraft Inside](https://minecraft-inside.ru/mods/) | Russian community directory exposes real credited authors and filters. Detail/profile/avatar/original-file authorization still pending; regional writer and mod developer may differ. MCX050. |
| [Ru-Minecraft](https://ru-minecraft.ru/mody-minecraft/) | Russian version/category directory opened. Discovery/editorial candidate; no passed author/profile/file recipe. MCX051. |
| [Minecraft.fr](https://minecraft.fr/categorie/mods/) | French dated editorial discovery with version/type navigation. Retain writer, original developer and translation roles; resolve files to original sources. MCX052. |
| [Technic](https://www.technicpack.net/) | Official landing describes launcher discovery, personalized update feeds and Solder version hosting. Pack author, constituent mod authors and pack distribution are separate. Pack/profile/API fixtures pending. MCX053. |
| [Feed The Beast](https://www.feed-the-beast.com/blog/p/ftb-api) | March 12, 2025 policy permits third-party reintegration, migrates API root and asks custom User-Agent. Manifest sample failed this pass. Distinguish client pack, server files, individual mods and Marketplace products. MCX054–MCX056. |
| [ATLauncher](https://atlauncher.com/) | Own packs and other-platform integrations are separate sources. Official 2024 news records restored FTB permission; no blanket creator/file license or native follow API inferred. MCX057. |
| [OptiFine](https://optifine.net/home) | First-party creator hub and authoritative link to original release thread. Official Downloads remains the file authority; no invented author avatar or rehost substitution. MCX058. |
| [Vanilla Tweaks](https://vanillatweaks.net/) | First-party resource/data/crafting pack builder and socials. Generated custom-pack ZIPs need an actual selection/result fixture. Team brand image is not automatically a human avatar. MCX059. |
| [Complementary Development](https://www.complementary.dev/) | Official shader description opened as a seven-line partial surface. Actual download/version/media/profile fixture pending. MCX060. |
| [MrCrayfish](https://mrcrayfish.com/mods) | First-party request returned 403. Retain creator candidate with unknown cause and no fabricated fields. MCX061. |
| [FoxyNoTail](https://foxynotail.com/add-ons/mini-blocks) | Mini Blocks detail exposes body/readme, 13 version rows, Bedrock metadata and separate video links. Download `/download/NDAy` blocked by retrieval policy. EULA directs users to share the page rather than reupload files. Native Subscribe points to YouTube. MCX062–MCX064. |
| [Vatonage](https://vatonage.com/) | Redirected root produced zero extracted lines. Rendering fixture required. MCX065. |
| [Minecraft Marketplace](https://www.minecraft.net/en-us/marketplace) | Official landing shell distinguishes add-ons/skins/textures and paid entitlements; catalog payload absent. No general public package download endpoint or reusable `.mcaddon` export was established. MCX066. |

## Public API evidence and failures

The [voxel.shop documented sample](https://api.voxel.shop/v1/getResourceInfo/?pretty_print_result=1&resource_id=4) returned JSON (MCX032). Sanitized field evidence: `response.success=true`, resource `id=4`, `owner_id=1`, `updates.latest.id=29604`, `version=3.1-RECOMPILE`, HTML update description present. **`owner.name`, `owner.id`, `thumbnailURL` and `headerURL` were null.** Never replace them with guessed creator identity or project icon. A subsequent direct open failed; reopening the first retrieved reference succeeded. Preserve both observations rather than claiming uniformly reliable live access.

The [API reference](https://voxel.shop/wiki/api) documents `getResourceUpdates` pagination through `more`, `next_start`, `total` and `remaining`; those fields are not a passed pagination run. User downloads use `getDownloadURL`, while updater verification uses `requestUpdateURL`; neither was exercised. The metadata endpoint does not establish complete project overview body or avatar availability.

The [Hangar specification](https://hangar.papermc.io/v3/api-docs/public) opened, but `GET /api/v1/projects/ViaVersion/ViaVersion` did not. The documented [FTB example](https://api.feed-the-beast.com/v1/modpacks/public/modpack/125) did not open. Modrinth's project JSON and project-ID version list succeeded; slug-version-list, individual-version and user/member requests failed separately. These are operation-specific retrieval outcomes, not universal API outage diagnoses or authorization failures.

## File, media and follow acceptance work

A usable adapter should keep a creator identity record, project identity, release identity, ordered content blocks, gallery entries and files separate. Each file needs an actual source response, original filename, bytes/hash, compatible game edition, loader/server platform and dependencies. A `.mcaddon`, `.mcpack`, mod jar, modpack manifest, server zip, map zip and Marketplace entitlement are different distributions. No binary was fetched or executed here.

Images require both the correct source identity and a successful decode. A gallery preview, project icon, body illustration, creator avatar and commenter avatar have different roles even when their URLs share a CDN. Preserve animation for GIF/WebP where present rather than claiming animation from a static thumbnail. Embedded YouTube videos observed on Hangar, MinecraftMaps and FoxyNoTail are provider references; thumbnails do not prove playback or permission to obtain provider media files. No playback was attempted.

Local creator follow can be designed around stable IDs/canonical profiles without mutating source accounts. Native project watch, member subscription, friend, favorites, Discord membership, paid membership and YouTube Subscribe must retain their actual semantics. Every native mutation/import remains untested. Source counts and “Load more” controls are evidence of pending continuation; missing content must remain visible as partial.

Prioritize a permitted fixture set that resolves the actual remaining failures: Modrinth creator/team join and actual file bytes; CurseForge authorized API description and files plus member avatar; PMC collapsed body, creator image and update continuation; MinecraftMaps missing two creator maps and native follow state; ModBay final file link and comment continuation; Hangar platform-specific downloads; Voxel null owner fields; login-gated MCBBS attachments only after the user completes authorized sign-in. A 403, 503, shell or null is a retained result, not a reason to probe internal endpoints or change domains to evade controls.

Source IDs MCX001–MCX067 refer to this pass's primary pages and attempted URLs; the accompanying integration evidence supplies the proposed register objects. Existing broader [mod-host guidance](../mod-hosts.md) retains its earlier scoped findings. No GameSync changes or target adoption were made.
