# Blog Detail Pages

Live route family: `https://www.dynamicdreamz.com/blogs/{slug}/`
Local route family: `/blogs/{slug}`
Date checked: 2026-09-01
Browser/source: Google Chrome headless screenshots, rendered live pages, View
Page Source, the live post sitemap, WordPress REST export, blog-detail CSS, and
the local component/asset audit.

## Representative Routes And Viewports

The route family contains one shared detail template with content-driven
variations. These routes cover the current rendering contract:

| Variant | Route | Reason selected |
| --- | --- | --- |
| Current article | `free-vs-paid-shopify-themes` | Current metadata, table, FAQ, author card, and previous-post navigation |
| Image-heavy article | `product-bundling-in-shopify` | Multiple inline images, nested headings, lists, FAQ, and two-way post navigation |
| Older WordPress article | `wordpress-web-design-company-building-a-website-that-converts` | Older content markup, eight inline images, FAQ, and the second visible author profile |
| No-TOC exception | `add-a-dmarc-record-to-sending-emails` | The only current article without the shared table-of-contents block |

Capture sizes for each representative route:

- Desktop: `1440x900`
- Tablet: `768x1024`
- Mobile: `390x844`

Live captures are stored in `docs/visual-captures/blog-detail-pages/live/`.
Local captures are stored in
`docs/visual-captures/blog-detail-pages/local/`; each representative route has
desktop, tablet, and mobile captures.

## Sources Inspected

- Live XML inventory: `https://www.dynamicdreamz.com/post-sitemap.xml`
- Live rendered pages and View Page Source for all four representative routes
- Live `assets/css/blogs-details/main.css`
- Live `assets/css/blogs-details/media.css`
- Easy Table of Contents CSS/JS and generated markup
- Shared live header and footer behavior already represented by the local layout
- Existing local `Container`, `RichText`, `BlogCard`, shared header/footer,
  metadata helpers, schema helpers, case-study dynamic route, and sitemap data

## Captured Template Contract

- Shared header followed by the visible `Go back` control.
- One article H1, followed by category, published date, and visible author name.
- Featured image at full container width.
- Article body constrained to approximately `750px`.
- Desktop H1 is `35px/46px`; mobile H1 is `30px/40px`.
- Body copy is `16px/30.4px`, with `24px` H2 and `20px` H3 treatments.
- Tables become horizontally scrollable at constrained widths.
- Article lists use the live bullet treatment and nested ordered-list behavior.
- The table of contents appears after the article introduction on 83 of 84
  current posts and links to the legacy heading fragment IDs.
- The article footer includes the visible category, author profile, share links,
  and previous/next post navigation.
- Author cards stack and center below `768px`.

## Interaction And Motion

- The back control uses a standard archive link with the live label and hover
  color treatment.
- The table of contents preserves the live default state and uses a small client
  boundary only when a toggle is present.
- Share controls are normal external links and do not require client JavaScript.
- Previous/next navigation uses normal internal links.
- No article-specific entrance animation or autoplay media is present.
- Focus-visible states remain visible even where the legacy stylesheet relied
  only on hover treatment.
- Chrome DevTools interaction check: the current article starts with
  `aria-expanded="false"`; clicking the TOC toggle opens 14 heading links,
  preserves keyboard focus on the toggle, and closes cleanly.
- The no-TOC article renders no TOC toggle or TOC links.
- Body/document horizontal overflow is `0px` at the representative desktop and
  mobile checks. Table content is contained by the rich-text overflow wrapper.
- Share, previous/next, category, heading-fragment, and legacy redirect links
  use normal crawlable anchors; no client router dependency is required for
  article discovery.

## Current Inventory Evidence

- Sitemap: 84 canonical detail routes plus the `/blogs` archive.
- Local archive: the same 84 slugs, with no missing or extra entries.
- Source corpus: approximately 2.24 MB of article body HTML and 2,045 words per
  article on average.
- Media: 84 featured-image references and 282 inline-image references.
- Structured variants: 19 articles contain tables; 44 currently expose FAQ
  schema; one article omits the table of contents.

## Verification Result

- All four local variants were captured at `1440x900`, `768x1024`, and
  `390x844` after the final responsive spacing adjustment.
- The final pass aligned the article metadata separators, full-width table-of-contents panel and plugin-style toggle, article link/list typography, share icon spacing, and previous/next navigation gutters with the live CSS contract.
- The mobile share row remains horizontal at the live breakpoint, while author cards retain the live stacked, centered treatment below `768px`.
- Representative live/local first-view screenshots show the shared header,
  `Go back` control, metadata, featured image, article body width, fixed quote
  CTA, and mobile author/navigation geometry without material layout drift.
- Generated heading fragments, TOC targets, tables, long words, local image
  sources, author cards, and previous/next relations pass
  `npm run check:blog-posts`.
- The rendered article audit found no production `dynamicdreamz.com` asset or
  article-body dependency. Shared footer proof links, social share targets, and
  external references remain intentional outbound links.
- The historical `unnamed-1.png` source referenced by
  `product-bundling-in-shopify` returned a live 404; that dead image was omitted
  from local content so the shipped page makes no broken request.

## Remaining Differences And Governance

- Legacy article wording, dated claims, source enrichment, and FAQ phrasing are
  preserved for live parity and remain in the content-approval queue.
- Visible author profiles are implemented where captured. Reviewer identity and
  review-date governance remain deferred until editorial ownership is approved.
- The shared fixed quote/contact widget is part of the sitewide layout and is
  intentionally included in the local captures.
