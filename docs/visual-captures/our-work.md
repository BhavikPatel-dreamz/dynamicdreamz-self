# Our Work Page

Live URL: `https://www.dynamicdreamz.com/our-work/`
Local route: `/our-work`
Date checked: 2026-08-24
Browser/source: Google Chrome headless screenshots, Xvfb-backed Chrome
interaction audit, rendered live page, View Page Source, live page-specific
CSS/JavaScript, and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/our-work/live-refresh-desktop-1440x900.png` | `docs/visual-captures/source/our-work/local-refresh-desktop-1440x900.png` | compared; split hero, proof badges, trusted-brand band, and portfolio intro align with refreshed live composition |
| 768x1024 | `docs/visual-captures/source/our-work/live-refresh-tablet-768x1024.png` | `docs/visual-captures/source/our-work/local-refresh-tablet-768x1024.png` | compared; stacked hero, proof grid, trusted-brand band, and two-column portfolio intro verified |
| 390x844 | `docs/visual-captures/source/our-work/live-refresh-mobile-390x844.png` | `docs/visual-captures/source/our-work/local-refresh-mobile-390x844.png` | compared; mobile stack, proof grid, horizontal filters, and contact widget verified |
| 1440x1200 project anchor | live refreshed project anchor reviewed in source/CSS | `docs/visual-captures/source/our-work/local-refresh-desktop-projects-1440x1200.png` | project grid, red filter pill, and internal case-study teaser render after the refreshed intro |

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
| Live page replaced the centered scroll-control hero with a cream split hero and storefront animation | Reuse hash-matched local showcase assets with a reduced-motion fallback | in progress |
| Live page added three case-study teaser cards | Reuse governed case-study entries and slashless internal routes | in progress |

## Asset Map and Duplicate Audit

- 126 live project records were migrated in the original order: 70 Shopify, 30
  WordPress, 16 mobile apps, 6 Magento, and 4 BigCommerce.
- 31 exact project images were reused from existing project-owned assets.
- 100 distinct project/platform/app-store assets were added under
  `public/assets/our-work/**`; the largest is 153,602 bytes and all added
  project rasters are WebP.
- Shared Shopify, Shopify Plus, WordPress/WooCommerce, Magento, BigCommerce,
  Apple, Google Play, and arrow marks use canonical local asset paths.
- Every referenced media path resolves locally; no production-domain asset or
  runtime data request remains.

## Final Verification (refreshed implementation)

- Rendered 126 server-visible cards and verified counts of 70 Shopify, 30
  WordPress, 16 mobile apps, 6 Magento, and 4 BigCommerce projects.
- Selected WordPress by pointer and Magento by keyboard; `aria-pressed`, live
  result announcements, visible counts, wrong-platform exclusion, and the 3px
  focus-visible outline all passed.
- Verified desktop hover media and fine-pointer behavior: overlay opacity `1`,
  project-link bottom `30px`, and platform opacity `1` after transitions.
- At 390px, the document and body remain 390px wide while the 888px filter rail
  scrolls inside its 358px container; BigCommerce exposes exactly four cards.
- No completed image was broken, and no `dynamicdreamz.com` or `ipapi.co`
  resource appeared in the local runtime request log.
- Rendered title, slashless canonical, H1, and JSON-LD were checked. Schema
  types are Organization, WebSite, CollectionPage, BreadcrumbList, and
  ItemList.
- The previous archive audit remains valid: 126 server-visible cards, exact
  project ordering, and zero duplicate asset hashes. `npm run check:urls`,
  `npm run lint`, and `npm run build` pass after the refreshed composition.
  `npx tsc --noEmit` can report a stale generated `.next/types` reference to
  the pre-existing missing `/php-development` route when the dev cache is
  active; the clean production build TypeScript phase passes.

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
