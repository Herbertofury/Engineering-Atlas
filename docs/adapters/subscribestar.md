# SubscribeStar and SubscribeStar.adult adapter recipe

[Adapter laboratory](README.md) · [Paid-platform recipes](paid-platforms.md) · Checked 2026-10-28 UTC

## Two origins, scoped documented APIs

Both services publish read-only OAuth 2.0/GraphQL documentation. Keep `subscribestar.com` and `subscribestar.adult` separate in provider identity, OAuth registration, sessions, consent, policies and caches. Their account/subscription interfaces are a research starting point; this does not establish a general patron feed with complete paid posts, attachments and media. [SubscribeStar API](https://www.subscribestar.com/api) · [SubscribeStar.adult API](https://www.subscribestar.adult/api)

The API pages restrict using the API to provide benefits outside the platform. Consequently an off-platform full-content reader is not accepted merely because OAuth succeeds; the intended use needs to fit current platform permission. Preserve the distinction between subscription/account metadata and access to creator benefits. Do not substitute undocumented requests or mirrored files as evidence of supported API access. [SubscribeStar API conditions](https://www.subscribestar.com/api) · [Adult API conditions](https://www.subscribestar.adult/api)

## Proposed identity and post mapping

Where an authorized response actually supplies stable creator/account IDs, retain them with the provider origin. Keep the public creator URL, mutable display name, avatar evidence and campaign/profile identity separate. If only a public profile name is available, it is a provisional profile record. Resolve the author portrait from a creator-scoped profile element or documented field; never substitute a tier illustration, post cover or subscriber avatar.

For any permitted reader route, compare a public text post, mixed-image post, entitled post and locked preview. Preserve ordered body/media, attachment filenames and access state at both post and file level. Do not label a successful HTML response complete when it is a login screen, preview or challenge. No exact private endpoint, selector or complete post schema is asserted by this proposal.

## Follow versus membership

Local app following records the creator and schedules only the permitted retrieval capability. Native following, subscription tier, billing, supporter entitlement and notifications are different states. Read-only API documentation cannot establish a native follow-write operation. Importing subscriptions must not silently create local subscriptions to unrelated content or initiate payment.

The next proof step is a user-authorized account session and a permitted representative post on each relevant origin, followed by field-level comparison. Verify positive sign-in, account scope, membership/preview differences, avatar ownership, pagination and expiring delivery links. Test no purchase or follow mutation without an explicitly selected action. [Authenticated research workflow](authenticated-research.md)

## Acceptance status

Documentation reviewed; full-content API suitability, authenticated post/media extraction, complete follow import and native follow writes are **not accepted**. Useful link/profile tracking can still be designed with those limits visible. Only a candidate that beats the exact private GameSync Next baseline while preserving correct output can be transferred. [Validation and adoption](validation-and-adoption.md)
