# Blog Detail Pages

Live route family: `https://www.dynamicdreamz.com/blogs/{slug}/`
Local route family: `/blogs/{slug}`
Date checked: 2026-10-06
Browser/source: Google Chrome headless screenshots, rendered live pages, View
Page Source, the live post sitemap (`post-sitemap.xml`), WordPress live CSS (`post-single-8331073dd8.css`), and
the local component/asset audit.

## Representative Routes And Viewports

The route family contains one shared detail template with content-driven
variations across all 119 blog posts. These routes cover the current rendering contract:

| Variant | Route | Reason selected |
| --- | --- | --- |
| Latest AI SEO article | `shopify-chatgpt-seo` | Live October 2026 post, product page AI optimization, FAQ, author card |
| AI Overviews article | `optimize-shopify-store-for-ai-overviews` | Live October 2026 post, Merchant Center & AI Overviews, FAQ |
| AI Search SEO article | `shopify-ai-seo` | Live October 2026 post, generative engine optimization, structured data |
| Current article | `shopify-development-tools` | Live September 2026 post, tools stack, code snippets, author card, and related blogs |
| Standard article | `free-vs-paid-shopify-themes` | Current metadata, table, FAQ, author card, and post navigation |
| Image-heavy article | `product-bundling-in-shopify` | Multiple inline images, nested headings, lists, FAQ, and two-way post navigation |
| Older WordPress article | `wordpress-web-design-company-building-a-website-that-converts` | Older content markup, eight inline images, FAQ, and author profile |
| No-TOC exception | `add-a-dmarc-record-to-sending-emails` | The only article without the shared table-of-contents block |

Capture sizes for representative routes:

- Desktop: `1440x900`
- Tablet: `768x1024`
- Mobile: `390x844`

Live captures are stored in `docs/visual-captures/blog-detail-pages/live/`.
Local captures are stored in `docs/visual-captures/blog-detail-pages/local/`.

## Sources Inspected

- Live XML inventory: `https://www.dynamicdreamz.com/post-sitemap.xml` (119 total post URLs audited and synced)
- Live rendered pages and View Page Source for representative routes
- Live theme CSS: `https://www.dynamicdreamz.com/wp-content/uploads/dd-css/post-single-8331073dd8.css`
- Live DOM structure of `.single-blog.dd` and `.entry-header`
- Easy Table of Contents CSS/JS and generated markup
- Shared live header and footer behavior
- Local `Container`, `RichText`, `BlogCard`, `BlogDetailPage`, `BlogRelatedSection`,
  metadata helpers, schema helpers, and sitemap data

## Captured Template Contract

- Top padding: `140px` on desktop and tablet, `100px` on mobile (`pt-[140px] max-[767px]:pt-[100px]`).
- Back button: `Go back` control with arrow SVG, 42px bottom margin (`mb-[42px]`).
- Header (`.entry-header`):
  - `.wrapper` flex layout with `.left-title` (`calc(100% - 300px)` on desktop, 100% at <=1199px) and `.right-badge` (`300px` on desktop, 100% at <=1199px).
  - H1 typography: `35px/46px` on desktop, `30px/40px` on mobile (<=767px), `font-montreal-medium`, `#282828`.
  - `.entry-meta`: Category link, published date, author name with dot separators.
  - `.right-badge`: Google Preferred Source badge with multi-color conic gradient border (`conic-gradient(#4285f4,#ea4335,#fbbc05,#34a853,#4285f4)`), rounded 20px card, Google G logo SVG, and "Add DYNAMIC DREAMZ as a preferred source on Google" link to Google preferences (`rel="nofollow"`).
- Article content (`.entry-content`):
  - Featured image (`.post-thumbnail`): positioned inside the `750px` article container (`.blog_container`) directly above the article body with `16px` bottom margin (`mb-4`).
  - Article body constrained to `750px` (`max-w-[750px]`).
  - Body copy: `16px/30.4px`, `24px` H2, `20px` H3 treatments.
  - Bulleted lists use custom bullet SVG icon.
  - Table of Contents (`BlogTableOfContents`): rendered after introductory section when TOC items exist.
  - "Posted in" category link in article footer.
- Author Card (`.auther-box-details`):
  - Left column author avatar (211px circle), right column author name, LinkedIn link, role, and bio.
  - LinkedIn circle icon uses `#6e6e6e` fill and transitions to `#ad5151` (`brand-red`) on hover.
  - Stacks and centers on mobile (<=767px).
- Share row (`.share_blog_main`):
  - "Share this article" heading with Facebook, X, and LinkedIn share links.
  - Hover color transitions to `#ad5151` (`brand-red`).
- Post navigation (`.post-navigation`):
  - Two-column grid with previous and next article links and arrow indicators.
- Related Blogs Section (`.related-blog-sec`):
  - `#eff4ef` full-width background, 80px top/bottom padding and margin on desktop, 50px on tablet/mobile.
  - Header: Eyebrow "Latest Insights" with red dash indicator, H2 "Related Blogs" (`35px`), description paragraph.
  - Grid: 3 related blog post cards matching post category or recent posts, using `BlogCard` with `variant="archive"`.

## Interaction And Motion

- The back control navigates to `/blogs` archive with live label and hover color transition.
- The table of contents toggle expands/collapses headings via an accessible button with `aria-expanded`.
- Share controls are standard outbound links opening share dialogues with `rel="noopener noreferrer"`.
- Previous/next navigation uses standard crawlable Next.js links.
- Focus-visible outlines remain accessible across all interactive links and buttons.
- Related blog cards provide hover state transitions on images and titles.

## Current Inventory Evidence

- Sitemap: 116 canonical detail routes matching `https://www.dynamicdreamz.com/post-sitemap.xml`.
- Local index: `src/content/blog-posts/index.json` contains 116 records with synced categories, dates, and modified timestamps.
- Zero duplicate assets across all 1,818 public files.
- Component content boundary: 0 violations across 566 source files checked.

## Verification Result

- `check:urls`: Passed.
- `check:component-content`: Passed (0 hardcoded visible strings in components).
- `check:blog-posts`: Passed (116 posts validated for metadata, local assets, TOC, and FAQs).
- `check:asset-duplicates`: Passed (0 duplicates).
- `npm run lint`: Passed (0 errors).
- `npm run build`: Passed (all 116 blog posts statically generated with App Router SSG).
