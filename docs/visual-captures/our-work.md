# Our Work Page

Live URL: `https://www.dynamicdreamz.com/our-work/`
Local route: `/our-work`
Date checked: 2026-09-04
Browser/source: Google Chrome headless screenshots, remote CDP session capture,
interaction audit, rendered live page, View Page Source, live page-specific
CSS/JavaScript (`assets/css/our-work/main.css`, `assets/css/our-work/media.css`,
`assets/css/case-study/main.css`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 hero | `docs/visual-captures/source/our-work/live-refresh-desktop-1440x900.png` | `docs/visual-captures/source/our-work/local-refresh-desktop-1440x900.png` | verified; split hero, right-column scrolling storefront showcase track, proof badges, trusted-brand band, and portfolio intro match live composition |
| 1440x1200 projects | `docs/visual-captures/source/our-work/live-refresh-desktop-projects-1440x1200.png` | `docs/visual-captures/source/our-work/local-refresh-desktop-projects-1440x1200.png` | verified; left-aligned category filter bar with active red pill, 125 active projects (70 Shopify, 30 WordPress, 16 Mobile Apps, 5 Magento, 4 BigCommerce), 4-col desktop, 3-col at <=1199px |
| 1440x1200 case studies | `docs/visual-captures/source/our-work/live-refresh-desktop-casestudies-1440x1200.png` | `docs/visual-captures/source/our-work/local-refresh-desktop-casestudies-1440x1200.png` | verified; 3-column `.see-the-work-sec` case study cards (Ranavat, Bombay Shirt Company, Nekter Juice Bar) with live featured images, red categories, titles, tags, and VIEW CASE STUDY links |
| 768x1024 tablet | `docs/visual-captures/source/our-work/live-refresh-tablet-768x1024.png` | `docs/visual-captures/source/our-work/local-refresh-tablet-768x1024.png` | verified; stacked hero, full-bleed horizontal scrolling storefront track, proof grid, trusted-brand band, and 2-column project intro |
| 390x844 mobile | `docs/visual-captures/source/our-work/live-refresh-mobile-390x844.png` | `docs/visual-captures/source/our-work/local-refresh-mobile-390x844.png` | verified; mobile stack with hidden showcase track, 2x2 proof grid with dividing borders, horizontal filter rail, hidden project arrow links on mobile |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, publish/modified dates, Open Graph, JSON-LD, H1, hero copy, brand links, filter labels, project ordering, platform labels, external destinations, image URLs/dimensions/alts, header, footer, and contact widget |
| Live `assets/css/our-work/main.css` | Cream split hero, scrolling storefront track, proof-badge grid, portfolio title, red active filter pill, 3-column project grid, and case-study teaser cards |
| Live `assets/css/our-work/media.css` | 1199px, 991px, 767px, 575px, and 359px responsive behavior; showcase transition, stacked mobile hero, proof grid, filters, and case-study cards |
| Live `assets/js/our-work.js` | Three-second brand-slider initialization, 2000ms autoplay, project filter behavior, geolocation-biased Shopify filtering, scroll-to-work timing, and active-pill movement |
| Existing local components and content | Shared header/footer/contact widget, `Container`, client logo assets/slider, industry portfolio hover treatment, shared SEO/schema helpers, and sitemap records |

## Live Section Inventory (refreshed 2026-08-24)

| Section | Captured behavior and styling |
| --- | --- |
| Hero | Warm cream split layout with left eyebrow/H1/description/CTAs/proof badges and a right storefront showcase track. The desktop track loops vertically for 40s; it is hidden on mobile. |
| Trusted brands | Warm theme band, left-aligned `Trusted by Leading Brands` title on desktop, and a 12-logo autoplay rail showing 4/3/2 logos |
| Portfolio introduction | Eyebrow `PORTFOLIO`, heading `Explore Our Work`, and a right-aligned description above the project filters. |
| Project filters | Uppercase platform buttons with a red active pill: All Projects, Shopify / Shopify Plus, WordPress, Mobile Apps, Magento, and Bigcommerce; horizontally scrollable on narrow screens |
| Project grid | 15px column gap, 60px desktop row gap, 3/2/1 columns, 115% media aspect, uppercase platform eyebrow, and Montserrat 18px project name |
| Project hover | 40% black overlay over 300ms, View Project rises to 30px from the bottom over 500ms, and the platform mark fades/translates into place over 500ms |
| Case-study teaser | Eyebrow `CASE STUDIES`, heading `See the Story Behind the Work`, explanatory paragraph, and three internal cards for Ranavat, Bombay Shirt Company, and Nekter Juice Bar |
| Shared chrome | Existing desktop/mobile header, footer, and fixed contact widget should remain unchanged |

## Interaction and Animation Capture

- The refreshed hero showcase loops linearly over 40 seconds on desktop/tablet;
  it is hidden below 768px. Mobile uses a centered stacked text and proof grid.
- Brand logos begin autoplay after three seconds, advance every two seconds,
  loop infinitely, and do not pause on hover.
- Filter changes hide the current set and show the selected platform set. The
  legacy Shopify filter additionally narrows projects using `ipapi.co`; the
  local implementation must not retain this external runtime dependency.
- The active filter pill animates its width and left offset over 300ms.
- Project overlays use 300ms opacity and 500ms position/opacity transitions.
- Local reduced-motion emulation reduces the spinner and filter transitions to
  1ms, limits the spinner to one iteration, disables logo autoplay, and changes
  document smooth scrolling to `auto`.

## Metadata and Schema Baseline

- Live title: `Shopify, Web & Mobile App Development Portfolio | Dynamic Dreamz`
- Live description: `Explore selected work across Shopify and Shopify Plus, mobile apps, WordPress, Magento and BigCommerce — from premium DTC storefronts and B2B commerce to migrations, custom development and ongoing optimization.`
- Live publish date: `2024-05-13T12:16:21+00:00`
- Live modified date: `2026-08-20T11:13:16+00:00`
- Live schema includes WebPage, primary ImageObject, BreadcrumbList, WebSite,
  Organization, and an unrelated sitewide FAQPage. The local page should emit
  CollectionPage/ItemList plus shared page-relevant nodes only.

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has a trailing slash | Use the required slashless `/our-work` canonical | implemented |
| Live default and Shopify filters rely on `ipapi.co` location detection | Preserve the visible platform-filter experience without an external runtime API or location-dependent result ordering | implemented intentional reliability/privacy improvement |
| Live source has unrelated sitewide FAQPage and Organization aggregate rating | Emit only visible, governed page-relevant schema | implemented nonvisual SEO correction |
| Several live image alts are generic or name the wrong project | Use project-specific descriptions without changing the visible cards | implemented nonvisual accessibility correction |
| Live mobile filter geometry uses negative viewport margins | Preserve the horizontal filter rail while containing document overflow | implemented responsive/accessibility improvement |
| Live page replaced the centered scroll-control hero with a cream split hero and storefront animation | Rebuilt split hero with right-column storefront showcase track, tablet full-bleed horizontal track, and mobile hidden showcase matching live CSS | implemented |
| Live page added three case-study teaser cards | Rebuilt 3-column `.see-the-work-sec` case study section with live featured imagery (Ranavat, Bombay Shirt Company, Nekter Juice Bar), red uppercase categories, chips, and slashless `/case-studies/<slug>` links | implemented |

## Asset Map and Duplicate Audit

- 125 live project records migrated in exact 1-to-1 order matching active live DOM: 70 Shopify, 30
  WordPress, 16 mobile apps, 5 Magento, and 4 BigCommerce. (Legacy commented-out Sambazon entry excluded).
- 14 project category tags updated to `"shopify plus"` matching live site card copy.
- 3 case study teaser cards use canonical/optimized local assets:
  - Ranavat: `public/assets/case-studies/ranavat-ayurvedic-skincare.webp` (optimized WebP, 19KB)
  - Bombay Shirt Company: `public/assets/case-studies/bombay-shirt-company-smart-fit.webp` (optimized WebP, 57KB)
  - Nekter Juice Bar: `public/assets/shopify-plus-agency/case-studies/nekter-juice-bar.jpg` (reused canonical project asset)
- Zero duplicate hash groups: verified across all 1676 public assets via `npm run check:asset-duplicates`.
- Shared Shopify, Shopify Plus, WordPress/WooCommerce, Magento, BigCommerce,
  Apple, Google Play, and arrow marks use canonical local asset paths.
- Every referenced media path resolves locally; no production-domain asset or
  runtime data request remains.

## Final Verification (refreshed implementation)

- Rendered 125 server-visible cards and verified counts of 70 Shopify, 30
  WordPress, 16 mobile apps, 5 Magento, and 4 BigCommerce projects.
- Selected WordPress by pointer and Magento by keyboard; `aria-pressed`, live
  result announcements, visible counts, wrong-platform exclusion, and the 3px
  focus-visible outline all passed.
- Verified desktop hover media and fine-pointer behavior: overlay opacity `1`,
  project-link bottom `30px`, and platform mark opacity `1` after transitions.
- At <=767px (mobile), project card `.view-project` buttons hide matching live `.view-project { display: none; }`.
- At <=1199px (tablet/laptop), project grid uses 3 columns (`w-[calc(33.333%_-_10px)]`) matching live media breakpoint.
- At 390px, the document and body remain 390px wide while the filter rail
  scrolls inside its container.
- Case study teaser section verified across desktop, tablet, and mobile with exact typography, tags, and zoom hover interaction.
- No completed image was broken, and no `dynamicdreamz.com` or `ipapi.co`
  resource appeared in the local runtime request log.
- Rendered title, slashless canonical, H1, and JSON-LD were checked. Schema
  types are Organization, WebSite, CollectionPage, BreadcrumbList, and
  ItemList.
- `npm run check:urls`, `npm run check:component-content`, `npm run check:asset-duplicates`,
  `npm run lint`, and `npm run build` pass production-ready.

## Remaining Differences

- The local page always starts with All Projects. The live implementation may
  change its initial Shopify set by visitor location through `ipapi.co`; that
  dependency was intentionally removed for deterministic results and privacy.
- The local canonical and structured URLs are slashless by project policy,
  unlike the legacy live canonical.
- Incorrect or generic legacy image alternatives are replaced with
  project-specific alternatives without changing visible card copy.
- The unrelated legacy FAQPage and aggregate-rating nodes are intentionally
  omitted from local schema.
- Logo position at screenshot time varies because the preserved rail autoplays;
  logo inventory, responsive counts, interval, looping, and reduced-motion
  behavior match the intended interaction.
- Local comparison captures now cover desktop, tablet, and mobile. The live
  page retains a small narrow-viewport clipping/overflow behavior in its header
  and hero capture; the local route follows the same responsive breakpoint and
  preserves the horizontal filter rail without adding runtime dependencies.
