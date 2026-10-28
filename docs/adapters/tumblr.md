# Tumblr adapter recipe

[Adapter laboratory](README.md) · [Social-platform recipes](social-platforms.md) · Checked 2026-10-28 UTC

## Preferred candidate and evidence

Start with Tumblr's official API and Neue Post Format (NPF). The API and block specification are documented; this research did not execute an authenticated feed import or implement an accepted adapter. An RSS route remains a useful discovery or compatibility input only after measuring its omissions against the API and actual post. [Official API](https://raw.githubusercontent.com/tumblr/docs/master/api.md) · [NPF specification](https://github.com/tumblr/docs/blob/master/npf-spec.md)

## Author and avatar

Prefer the blog UUID as the stable provider identity. Blog name, handle and custom domain are aliases. Resolve profile/avatar through blog information or the documented avatar operation. The publishing blog, original/root creator and contributors in a reblog trail may differ; retain their respective identities and roles. A quoted contributor's avatar must not silently become the publishing author's portrait. The official API and NPF trail describe these relationships; field-level fixtures still need to establish the chosen response representation. [API reference](https://raw.githubusercontent.com/tumblr/docs/master/api.md)

## Body, media and history

Request the NPF representation where supported. Preserve `content`, `layout` and `trail` rather than flattening every image from the page into one gallery. Text formatting, image variants, captions, layout order and embedded audio/video belong to distinct blocks. Treat legacy post output as compatibility data whose completeness must be compared, not assumed. Follow returned pagination/cursor semantics and retain partial-history state. [NPF specification](https://github.com/tumblr/docs/blob/master/npf-spec.md)

Proposed implementation tests should include a custom-domain blog, a renamed blog, an original mixed-media post, a reblog with additional text, a multi-contributor trail, an edited old post, a missing/default avatar and an external Sims File Share or Patreon link. The external destination uses its own adapter and entitlement; Tumblr access does not authorize the linked file. Sanitize renderable text and keep original attribution inspectable.

## Following and sign-in

The official API documents OAuth user operations for following, unfollowing and reading the user's follows. Local app tracking stays independent. An import is read-only; a native mutation needs a deliberate user-selected target and a read-back check. Public key-authenticated reads do not establish every private or restricted blog case. [Official API](https://raw.githubusercontent.com/tumblr/docs/master/api.md)

Acceptance requires the same corpus to produce correct author/avatar, complete accessible body, ordered media and history, plus separate follow/import and expired-session results. No native follow was changed in this research. See [secure login fixtures](authenticated-research.md) and [adoption criteria](validation-and-adoption.md).
