# Case Studies Page

Live URL: `https://www.dynamicdreamz.com/case-studies/`
Local route: `/case-studies`
Date checked: 2026-08-24
Browser/source: Google Chrome headless screenshots, rendered live page + View Page Source, live CSS (`assets/css/case-study/main.css`, `assets/css/case-study/media.css`, `style.css`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/case-studies/live-desktop-1440x900.png` | `docs/visual-captures/source/case-studies/local-desktop-1440x900.png` | updated logo set captured and visually checked |
| 768x1024 | `docs/visual-captures/source/case-studies/live-tablet-768x1024.png` | `docs/visual-captures/source/case-studies/local-tablet-768x1024.png` | updated logo set captured and visually checked |
| 991x960 | `scratch/case-studies-brands/live-991.png` | `docs/visual-captures/source/case-studies/local-tablet-991x960.png` | exact inclusive breakpoint captured; tablet hero and brands layout aligned |
| 390x844 | `docs/visual-captures/source/case-studies/live-mobile-390x844.png` | `docs/visual-captures/source/case-studies/local-mobile-390x844.png` | updated logo set captured and visually checked |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title (`Case Study Archive - Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz`), meta description (`Explore every Shopify mobile app development case study from Dynamic Dreamz, and see how custom apps have helped boost engagement, retention, and growth.`), canonical (`https://www.dynamicdreamz.com/case-study/`), Yoast JSON-LD (CollectionPage, WebSite, Organization), Hero section (Eyebrow `CLIENT CASE STUDIES`, H1 `Shopify, Web & Mobile App Case Studies`, description, primary CTA `explore case studies`, secondary CTA `view our work`, proof logos), Client logo slider (`Trusted by Leading Brands`), Filter section (Search bar, Technology dropdown, Industry dropdown), Main listing section (Section title H2 `Explore Our Client Case Studies`, description, cards with image, category pills, title, excerpt, `view Case study` button), Infinite scroll loading |
| Live `assets/css/case-study/main.css` & `style.css` | `.hero-new-section` (background: #f7f4e9, padding-top: 91px, overflow: hidden), `.hero-content h1` (margin-bottom: 10px), `.scrolling_img_wrap` (flex-shrink: 0, overflow: hidden), `.scrolling_anim_img` (animation: tabscrollText 40s infinite linear), `.our-client-sec.dev` (bg: #fbeed5, py: 17px), `.cs-filter` (grid-template-columns: minmax(260px, 1fr) 260px 260px), `.cs-main-wrapp` (bg: #eff4ef, pt: 54px, pb: 120px) |
| Live `assets/css/case-study/media.css` | ≤1399px: `.cs-section-title .title` 35%, `.text` 56%; ≤1199px: `.cs-listing-row` padding 20px, `.hero-new-section .wrapper .left-col` 57%, `.right-col` 43%; ≤991px: `.hero-new-section` pt 64px, `.left-col` padding 30px 0 40px, `.scrolling_anim_img` horizontal flex, `.cs-listing-row` width 100%; ≤767px: `.scrolling_img_wrap` hidden, `.hero-new-section h1` 30px/40px |
| Local assets reused | `showcaseImages` from `src/content/home.ts`, `proofLogos` from `src/content/home.ts`, 36 project-owned local screenshots in `public/assets/case-studies/`, ten canonical matching logos from `public/assets/clients/`, `OurWorkHeroSection` from `src/components/sections/our-work/our-work-hero-section.tsx`, `IndustryBrandsSection` from `src/components/sections/industry/industry-brands-section.tsx`, `Container` primitive from `src/components/ui/container.tsx`. |
| 2026-08-24 live refresh | Hero updated from old centered gradient to the split hero (`hero-new-section`) with vertical scrolling showcase marquee, proof badges, dual CTA buttons, and client logo slider, exactly matching live `dynamicdreamz.com/case-studies/`. |
| 2026-08-24 logo refresh | Re-fetched the live client-slider markup and all 12 SVGs into `scratch/case-studies-brands/`; compared SHA-256 hashes and rendered SVG output against all canonical client assets. Ten matching assets are reused; the visually distinct live SuperTails and Sri Sri Tattva variants are ingested under `public/assets/case-studies/brands/`. |
| 2026-08-24 hero typography refresh | Re-fetched live `assets/css/case-study/main.css`, `assets/css/case-study/media.css`, and global `style.css`. The live H1 resolves to Montserrat 700, 50px/66px, `letter-spacing: -1px`; at ≤1199px it is 40px/50px and at ≤767px it is 30px/40px. Local inspection found the H1 incorrectly inherited Neue Montreal 500. Eyebrow, paragraph, and button typography already resolve to Montserrat and remain unchanged. |
| 2026-08-24 hero typography verification | Updated local desktop, tablet, and mobile captures confirm Montserrat 700 and the live responsive H1 sizes/line heights. The route-scoped typography variant does not affect `/our-work` or other shared-component consumers. |
| 2026-08-24 exact 991px breakpoint audit | New live/local 991×960 captures exposed Tailwind range semantics: live CSS `@media (max-width: 991px)` had switched the hero and brand row to tablet layout, while local `max-[991px]` remained on the desktop layout because Tailwind emits an exclusive upper bound. Use `max-[991.98px]` for the shared hero and industry-brand section so a 991px CSS viewport matches the live inclusive breakpoint. |
| 2026-08-24 exact 991px alignment follow-up | After correcting the exclusive breakpoint, local still retained the desktop left alignment and 90px top offset. The case-studies variant now applies the live tablet rules at 991px: centered hero content and a 64px section top offset. |
| 2026-08-24 920px parity comparison | The supplied side-by-side and a matching local 920×960 capture exposed the remaining ≤991px difference: live `media.css` uses 64px hero top padding, centered hero content, centered CTA group, and centered proof logos, while local retained desktop alignment and 90px top padding. The correction is scoped to the case-studies hero variant; desktop and other shared consumers remain unchanged. |

## Section Inventory

| Section | Live Behavior & Styling | Local Implementation |
| --- | --- | --- |
| Header & Navigation | Site header with active navigation item on "Work" > "Case Studies" | Reused shared `SiteHeader` with auto active state detection |
| Hero Section | Split hero `.hero-new-section` with eyebrow `CLIENT CASE STUDIES`, H1 `Shopify, Web & Mobile App Case Studies`, description, primary button `explore case studies` (`#explore_case_studies`), secondary button `view our work` (`/our-work`), 4 proof badges, and vertical infinite scrolling marquee of showcase images | Reused and generalized `OurWorkHeroSection` with typed `content` prop and CSS module animations |
| Client Logo Slider | `.our-client-sec dev` with heading `Trusted by Leading Brands` and the live case-studies-specific 12-logo sequence, intrinsic sizes, links, and continuous carousel | Reused shared `IndustryBrandsSection` with compact density and `ClientLogoSlider`, supplied with route-local logo data so other pages remain unchanged |
| Filter & Search Bar | Grid of Search input, Technology dropdown, Industry dropdown, and clear filters | Client-rendered `CaseStudiesFilter` with dynamic live search, dropdown filter selection, and URL search param sync |
| Section Title & Grid Listing | H2 `Explore Our Client Case Studies`, description, responsive 2-column card grid with hover effects, category pills with red separator dots, and CTA buttons | `CaseStudiesListing` component with responsive card grid and Server/Client component separation |
| Pagination / loading | Current live source uses an infinite-scroll sentinel after the initial ten cards | Local listing progressively reveals ten cards at a time with an accessible load-more sentinel fallback; filtered results reset to the first batch |
| Footer | Standard multi-column site footer with "Case Studies" link | Reused shared `SiteFooter` |

## Current Refresh Notes

- Live source inspected 2026-08-24: `https://www.dynamicdreamz.com/case-studies/` and its View Page Source.
- CSS/JS inspected: `assets/css/case-study/main.css`, `assets/css/case-study/media.css`, and `assets/js/case-study-infinite-scroll.js`.
- Interaction states checked in source: search input, technology and industry dropdown open/active states, clear-filters control, card image hover zoom, CTA arrow hover, and infinite-scroll loading sentinel.
- Responsive breakpoints retained: 1399px, 1199px, 991px, and 767px. Local implementation keeps the source card grid and collapses to one column at 991px.
- Logo-refresh verification completed at desktop, tablet, and mobile widths; the route-scoped sequence renders with the live SuperTails and Sri Sri Tattva artwork and matching brand links/alt text. Existing search, filters, keyboard focus, reduced-motion behavior, and progressive loading were not changed by this asset-only update.
