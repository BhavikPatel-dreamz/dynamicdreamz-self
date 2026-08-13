# White Label WordPress Development Services Visual Capture

Status: implemented and verified against the live reference  
Live URL: `https://www.dynamicdreamz.com/white-label-wordpress-development-services/`  
Local route: `/white-label-wordpress-development-services`

Checked: 2026-08-13  
Browser: Firefox headless (desktop, tablet, and mobile emulation)

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-wordpress-live-1440x900.png` | `/tmp/white-label-wordpress-local-final2-1440x900.png` | Compared; hero geometry, type, copy, artwork, CTA, and review marks align |
| 768x1024 | `/tmp/white-label-wordpress-live-768x1024.png` | `/tmp/white-label-wordpress-local-final2-768x1024.png` | Compared; tablet stacking and line breaks align |
| 390x844 | `/tmp/white-label-wordpress-live-390x844.png` | `/tmp/white-label-wordpress-local-final2-390x844.png` | Compared; mobile header, copy wrapping, CTA, reviews, and illustration entry align |
| 1440x8000 | `/tmp/white-label-wordpress-live-full-1440.png` | `/tmp/white-label-wordpress-local-full-1440.png` | Full-page section order, grids, accordions, plans, marquees, process, FAQ, CTA, and footer compared |
| 390x8000 | `/tmp/white-label-wordpress-live-full-390.png` | `/tmp/white-label-wordpress-local-full-390.png` | Full-page mobile stacking and section rhythm compared |

## Sources Inspected

| Source | Evidence captured |
| --- | --- |
| Rendered page and View Page Source | Exact visible copy, section and heading order, CTA paths, review links, media attributes, metadata, Yoast graph, page FAQ graph, header/footer, and initial accordion states |
| `style.css?ver=7.0.4` | Montserrat typography, 1180px container, global heading/button/FAQ patterns, and section rhythm |
| `assets/css/default-media.css?ver=1.0.0` | Global responsive typography, container, and button changes |
| `assets/css/services/main.css?ver=all` | WordPress hero, counters, comparison grid, service accordion, pricing, technology marquee, process cards, FAQ, CTA, gradients, dimensions, transitions, and keyframes |
| `assets/css/services/media.css?ver=1.0.0` | 1199px, 991px, 767px, 575px, 389px, and 359px page behavior |
| `assets/js/services.js?ver=1.0.0` | Single-open/closable service and FAQ accordions, 700ms service-panel transition, jQuery FAQ slide behavior, and counter observer mismatch |
| Live asset set | Hero SVG, service icons, proof/review assets, and 24 WordPress technology logos downloaded to temporary storage, visually identified, hash-compared, and migrated under descriptive local paths |

## Section Inventory And Implementation Map

| Live section | Captured behavior and styling | Local implementation decision |
| --- | --- | --- |
| Hero | Cream `#f7f4e9`; transparent header; 120px top padding; 55/45 desktop split; 50/66 H1 with red italic final phrase; illustration bleeds down/right; review marks below CTA | Extended the shared white-label hero with exact WordPress copy and the local hero SVG |
| Proof counters | Four equal columns, 42px icons, 40px values, subtle dividers; 2x2 at tablet and stacked on mobile | Reused the shared counter section with WordPress labels and canonical shared proof icons |
| Why Dynamic Dreamz | `#fafaf7`; centered title; six cards in a 3x2 gradient-rule grid | Extended the shared proof grid for the six-card dataset |
| WordPress services | Dark green `#171e16`; two columns; six service rows; first open; one open at a time; active row can close; 700ms transition | Reused the accessible service accordion with WordPress data and local icons |
| Flexible plans | Split heading/copy, three cream 20px-radius cards, centered CTA | Reused the shared pricing section with the live WordPress pricing order and copy |
| Technologies | `#fafaf7`; two continuously moving logo rows; 202x94 desktop cards; opposing 100s linear marquees | Reused the component-scoped marquee with 24 identified local logos and a reduced-motion static state |
| Partnership process | Four alternating cream/off-white cards with directional diamonds, dashed number rings, and confidentiality note | Reused the shared process section with exact WordPress copy |
| FAQ | Pale blue `#e6ecf0`; seven white rounded cards; first open; single-open and closable; roughly 400ms jQuery slide | Reused the accessible FAQ accordion; the UI and FAQPage schema share the same seven-item source |
| Final CTA | `#fafaf7`; text/button split desktop and stacked mobile | Reused the shared final CTA and canonical quote path |
| Site chrome | Transparent header over hero, existing hide/reveal scroll behavior, contact widget, footer, and mobile menu | Reused the root-layout chrome and added the route to the transparent-header allowlist |

## Captured Visual System

- Desktop hero H1: Montserrat 700, 50px/66px, `-1px` tracking; 44px/55px at 1199px, 40px/50px at 991px and below.
- General section rhythm: 80px desktop and 50px at 991px, with captured page-specific 70/82px, 60px, 40px, and 30px exceptions.
- Primary colors: ink `#282828`, muted text `#535353`, brand red `#ad5151`, cream `#f7f4e9`, off-white `#fafaf7`, dark green `#171e16`, pale blue `#e6ecf0`.
- Hero stacks at 991px; counters become 2x2 at 991px and one column at 767px; services and process stack at 991px; pricing stacks at 767px.
- Mobile hero uses a 30px bottom radius, 70px top padding, and smaller review-mark gutters. The 390px capture shows the illustration beginning below the first viewport.

## Interaction And Motion

| State | Live behavior | Local target |
| --- | --- | --- |
| Header initial/scrolled | Transparent initially; shared white hide/reveal header after scroll | Existing shared route-aware behavior |
| Button hover/focus | Existing red/white fill transition over about 600ms | Shared `ButtonLink` with the existing accessible focus state |
| Service accordion | First open; plus/minus icon; single-open; current item can close; `max-height` transition 700ms ease | Existing accessible Client Component behavior and timing |
| FAQ accordion | First open; single-open; current item can close; jQuery slide default about 400ms | Existing accessible FAQ component and timing |
| Technology marquee | Top row moves left, bottom row moves right, both 100s linear infinite | Existing scoped marquee; static when reduced motion is requested |
| Counter | Source observes `.stats_sections`, but markup uses `.stats_section`; values render at their final state | Keep stable server-rendered final values and avoid client counter JavaScript |

## Asset Map

- Clutch, Trustpilot, Upwork, years, developers, reviews, and sites-delivered
  artwork now lives in neutral shared `reviews` and `proof` folders; brand,
  header, footer, and contact-widget assets remain canonical shared assets.
- The WordPress hero and five distinct service icons were migrated under
  `public/assets/white-label-wordpress`. The byte-identical Figma icon is shared
  from `public/assets/services/figma-design-conversion.svg`.
- All 24 live technology files were visually identified as Astra, Avada,
  GeneratePress, Kadence WP, OceanWP, Elementor, WPBakery, Beaver Builder,
  Brizy, Oxygen Builder, Advanced Custom Fields, WP Rocket, Rank Math, Yoast,
  Gravity Forms, WPML, Polylang, MemberPress, WP Engine, Kinsta, Cloudways,
  SiteGround, Bluehost, and AWS. They use descriptive local filenames and
  product/company alt text on the canonical marquee instances; repeated
  animation clones are intentionally hidden and use empty alt text.
- The hero is meaningful content imagery and retains page-specific alt text.
  Service and counter icons are decorative because adjacent labels repeat their
  meaning. Technology logos receive product/company names as alt text.

## Documented Differences And Production Improvements

- The live Yoast graph contains an unrelated sitewide FAQPage plus a separate
  correct page FAQPage. Local output emits only the seven visible FAQs.
- Live metadata says `18+` years and `97% Client Retention Rate`, while the page
  visibly says `20+` years and does not show a retention rate. Local metadata
  preserves search intent without repeating the unsupported mismatch.
- Accordion triggers are semantic buttons with ARIA relationships, keyboard
  support, visible focus, and reduced-motion handling.
- Live-visible wording, including duplicated or awkward copy, remains unchanged.
  Recommendations are queued in `docs/page-content-improvements.md`.
- The shared local header marks the matching Services and White Label menu
  groups in brand red; the captured live header leaves them black. This is the
  existing route-aware local navigation behavior shared with the Shopify page.
- The shared local contact widget is slightly wider than the live WordPress
  widget at tablet/mobile sizes. It was not changed page-locally because doing
  so would diverge the established site-wide component.
- One full-page live capture caught the first service trigger in its open-icon
  state while its body was between animation frames. The live script, source,
  and stable local state all confirm the intended first-open behavior.

## Local Verification Result

- The route returns `200` and is statically prerendered. Visible content is
  server-rendered with one H1, and all 113 rendered image instances have an
  intentional `alt` attribute.
- Canonical, Open Graph, Twitter, sitemap, robots, internal links, and JSON-LD
  use the slashless route. No live `wp-content` or other production asset URL is
  present in rendered output.
- JSON-LD parses as Organization, WebSite, WebPage, Service, BreadcrumbList,
  and exactly one FAQPage; it contains the seven visible FAQs and six visible
  service offers.
- Accordion output contains 28 unique `aria-controls` relationships whose
  target IDs all exist, with the first service and first FAQ initially open.
  Focus and reduced-motion behavior are implemented in the shared controls.
- Desktop, tablet, mobile, and full-page comparisons passed. The existing
  white-label Shopify page was recaptured after the shared-section refactor and
  remained visually intact.
- `npm run check:urls`, `npm run lint`, `npx tsc --noEmit`, and
  `npm run build` pass on 2026-08-13. The build emits the route as static
  content.
