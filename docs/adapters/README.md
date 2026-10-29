# Adapter laboratory

**Collect real data. Preserve source identity. Prove complete media and responsive cards together.**

Research and implementation status are separate. A platform listing is not proof that all pages, paid content or media work. Existing adapters and maintained upstream tools are baselines, not disposable scaffolding.

## Expanded research: 248 service and scope entries

Reviewed **October 28, 2026 UTC** (October 27 in America/Denver). The [coverage catalog](coverage-catalog.md) spans mod hosts, paid creator platforms, social networks, regional communities, blogs, code forges, file hosts and specialist indexes. Six game research passes added 86 canonical entries, 179 game scope records and 420 source records. The resulting 248 entries include research candidates and reference-only tools. One [authenticated Mod Collective fixture](mod-collective.md) establishes specific body, identity, image and free-file observations; complete platform acceptance remains pending.

| Research area | Start here |
|---|---|
| Every entry, route, follow semantics and evidence state | [Coverage catalog](coverage-catalog.md) · [Machine-readable records and source statuses](../../data/site-adapter-catalog.json) |
| Skyrim SE/AE, Fallout 4, Minecraft, Sims 4, Cyberpunk 2077 and Hytale | [Game community guides, actual item/profile inspections and source records](games/README.md) |
| Mod distribution, projects, creators, releases and files | [Mod hosts: 15 deep recipes](mod-hosts.md) |
| Membership posts, paid downloads and creator stores | [Paid platforms: 12 deep recipes](paid-platforms.md) |
| Social posts, reblogs, videos, blogs, code and cloud files | [Social and publishing: 15 deep recipes](social-platforms.md) |
| Korean/Japanese/Chinese blogs and regional mod communities | [Regional platforms: 8 detailed plans](regional-platforms.md) |
| Tumblr | [Dedicated NPF, author/avatar, media and following recipe](tumblr.md) |
| SubscribeStar and SubscribeStar.adult | [Separate-origin API, access and following review](subscribestar.md) |
| Dwemer Mods | [Credited author versus uploader; structured-data limits](dwemer-mods.md) |
| WCIF.cc | [Index versus hosted files; loading-shell handling](wcif.md) |
| Plumbdex / Plumdex | [Creator matches, file index, avatars and account follows](plumbdex.md) |
| Mod Collective | [Signed-in body, author/avatar, ordered gallery and actual mod-file receipt](mod-collective.md) |
| TS4 Rebels | [Forum identities, hidden links, feeds and attachment provenance](ts4-rebels.md) |
| Mirrors and reuploads | [Provenance and original-source relationships](mirrors-and-provenance.md) |

The catalog includes LoversLab, Planet Minecraft, The Sims Resource, Mod The Sims, SimsFinds, SimsDom, Sims File Share, Mod Collective, Daymarr, Nexus Mods, CurseForge, Modrinth, mod.io, Thunderstore, Bethesda Creations, Hangar, SpigotMC, BuiltByBit, Polymart/voxel.shop, ModDB, Hytale sources, Patreon, FANBOX, Fantia, Boosty, Afdian, Ko-fi, Gumroad, itch.io, BOOTH, Ci-en, Fourthwall and many more. Cross-game creators require separate Skyrim SE, Fallout 4, Minecraft, Sims 4, Hytale and Cyberpunk 2077 fixtures; a shared domain does not establish every game/file format.

## What a complete author-following app needs

- Stable creator identity, correct profile image and reversible links between the creator's own accounts; uploader, team, translator and reblogger roles preserved.
- Complete accessible post body, ordered images/video/audio, captions, edits, external embeds and distinct download attachments.
- Project/release/file identity, version and game/loader compatibility, dependencies, provenance and entitlement-aware delivery.
- Separate local follows, source follows, follow-list imports, project watches, notification settings and paid memberships.
- Resumable history, edit/removal detection, honest partial results, account-scoped caches, expiry recovery and measured rate control.

The [author, post, media and follow contract](author-post-media-contract.md) defines these requirements. The [login workflow](authenticated-research.md) describes protected sign-in and account-specific fixtures. The [validation and adoption gate](validation-and-adoption.md) defines what must be proven before an implementation or a GameSync Next change is accepted.

## Existing platform workbenches and retained evidence

- [Patreon](patreon.md)
- [Afdian](afdian.md)
- [YouTube](youtube.md)
- [Bilibili](bilibili.md)
- [X](x.md)
- [Facebook](facebook.md)
- [Discord](discord.md)
- [Steam](steam.md)
- [SteamDB](steamdb.md)
- [CurseForge](curseforge.md)
- [Nexus Mods](nexus-mods.md)
- [Modrinth](modrinth.md)
- [GitHub](github.md) · selected public upstream metadata, not release-asset coverage
- [Wikimedia Commons](wikimedia-commons.md) · selected public audio metadata/file verification, not browser playback or full-platform coverage

Nexus Mods groups Skyrim Special Edition, Fallout 4 and Starfield with distinct game-domain fixtures.

## Shared engineering

- [Author, post, media and follow contract](author-post-media-contract.md)
- [Login and authenticated research](authenticated-research.md)
- [Correctness, adoption and maintenance](validation-and-adoption.md)
- [Collection, media and session contract](contract.md)
- [Maintained upstream candidates](upstream-candidates.md)
- [Browser card-density lab](../card-lab/index.html)
- [Measured storage workload](../../experiments/rust-storage-lab/README.md)
- [Dated research decision and source register references](../../research/2026-10-28-site-adapters.md)
- [Six-game expansion and authenticated fixture decision](../../research/2026-10-28-game-adapter-expansion.md)
- [Public specialist-site observation receipt](../../experiments/site-adapter-discovery/README.md)

## Next proof work

1. Build permitted public fixtures for the structured candidates: Tumblr NPF, Modrinth, CurseForge, Nexus, Hangar, Steam Workshop, mod.io and creator-owned feeds. Compare identity/body/media completeness, not just request speed.
2. Use existing authorized accounts for Patreon, SubscribeStar, Boosty, FANBOX, Fantia, Afdian and the requested specialist forums/indexes. Record guest/nonmember/member differences, follow semantics and file access; do not assume an API for creator administration can read every patron's subscriptions.
3. Extend to the remaining catalog using real creator links and the same acceptance corpus. Where a site only permits embeds, links or creator-installed integrations, expose that capability accurately instead of substituting an unverified scraper.

Each provider keeps its actual review date and source status. The [wiki projection instructions](wiki-sync.md) keep this source and the wiki aligned without overwriting unrelated pages.

## Promotion rule

General results stay here. Only verified improvement against a target project's current implementation earns a recommendation in that project's wiki/TODO. No new project recommendations were made from generated card or storage workloads.

## Real-media workbench

[Open the public media laboratory](https://herbertofury.github.io/Engineering-Atlas/media-lab/) for real source snapshots, image decode and explicit player states. [Retained browser evidence](../../experiments/real-media-lab/README.md) distinguishes working Steam playback, delayed YouTube playback with a failed thumbnail, and unknown gallery coverage.
