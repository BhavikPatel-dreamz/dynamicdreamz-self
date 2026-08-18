# Case Studies Page

Live URL: `https://www.dynamicdreamz.com/case-studies/`
Local route: `/case-studies`
Date checked: 2026-08-18
Browser/source: Google Chrome headless screenshots, rendered live page + View Page Source, live CSS (`assets/css/case-study/main.css`, `assets/css/case-study/media.css`, `style.css`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/case-studies/live-desktop-1440x900.png` | `docs/visual-captures/source/case-studies/local-desktop-1440x900.png` | verified |
| 768x1024 | `docs/visual-captures/source/case-studies/live-tablet-768x1024.png` | `docs/visual-captures/source/case-studies/local-tablet-768x1024.png` | verified |
| 390x844 | `docs/visual-captures/source/case-studies/live-mobile-390x844.png` | `docs/visual-captures/source/case-studies/local-mobile-390x844.png` | verified |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title (`Case Study Archive - Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz`), meta description (`Explore every Shopify mobile app development case study from Dynamic Dreamz, and see how custom apps have helped boost engagement, retention, and growth.`), canonical (`https://www.dynamicdreamz.com/case-study/`), Yoast JSON-LD (CollectionPage, WebSite, Organization), Hero section (H1 `Explore our clients’ success stories through case studies`, subtitle), Filter section (Search bar, Technology dropdown, Industry dropdown, case studies count `12 case studies shown`), Main listing section (Section title H2 `Explore Our Client Case Studies`, description, 9 cards per page with 50% image ratio, red category labels, title, excerpt, "Case study" button), Pagination (1, 2, 3, 4, Next arrow) |
| Live `assets/css/case-study/main.css` | `.inner-hero-sec` (padding: 200px 0 130px; bg: linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)), `.inner-hero-content` (max-width: 770px), `form#filter_case_study` (max-width: 1170px, padding: 40px 0), `.cs-filter` (grid-template-columns: minmax(260px, 1fr) 210px 245px auto; gap: 12px; border-radius: 16px; bg: #fff; box-shadow: 0 8px 30px rgba(40,40,40,.035)), `.cs-search input` (height: 50px, border: 1px solid rgba(40,40,40,.12), padding-left: 44px with svg search icon), `.dropdown_menu` (border-radius: 5px, border: 1px solid #efefef, bg: rgba(254,254,254,.93), padding: 12px 32px 12px 16px, font-size: 13px, font-weight: 500, relative dropdown list height: 300px), `.cs-count` (12px/600 text-right), `.cs-main-wrapp` (bg: #eff4ef, padding: 80px 0), `.cs-section-title` (flex justify-between align-center mb: 40px; title 44%, text 49%), `.cs-listing-main` (flex flex-wrap justify-between), `.cs-listing-row` (width: calc(50% - 10px), bg: #fff, border-radius: 20px, overflow: hidden, border: 1px solid rgba(40,40,40,0.06), mb: 20px), `.cs_list_img` (padding-bottom: 50%, absolute img cover), `.cs-col-right` (padding: 30px), `.cs-cate-wrapp span` (10px/700 uppercase color: #d92128 with separator dot), `.cs-title h2` (24px/700), `.cs-visit a.btn` (min-width: 166px), `.cus-pagination` (margin-top: 42px, .current: bg #090909 color #fff rounded 6px) |
| Live `assets/css/case-study/media.css` | ≤1399px: `.cs-section-title .title` 35%, `.text` 56%; ≤1199px: `.cs-listing-row .cs-wrapper .cs-col-right` padding 20px, `.cs-section-title .title` 36%, `.text` 51%; ≤991px: `.inner-hero-sec` padding 170px 0 80px, `.cs-main-wrapp` padding 50px 0, `.cs-listing-main .cs-listing-row` width 100%, `.cs-listing-sec .cs-filter` grid-template-columns 1fr 1fr 1fr with `.cs-search` grid-column 1 / -1, `.cs-section-title .title` and `.text` 100%; ≤767px: `.inner-hero-content h1` line-height 40px, `.cs-listing-row .cs-wrapper .cs-col-right` padding 15px, `.cs-listing-sec .cs-filter` grid-template-columns 1fr, `.dropdown_menu` width 100% |
| Local assets reused | 36 project-owned local screenshots/covers stored in `public/assets/case-studies/` (`evrgreen.png`, `tipii.webp`, `daniel-walters.png`, `aetrex.png`, `rootedhuman.png`, `eczema-milk.png`, `yhus.png`, `nandi-medical.png`, `factsandsupps.png`, `zedmed.png`, `tankbar.png`, `atlantic-naturals.png`, `candy-prom.png`, `eddus-and-co.png`, `e2ip-technologies.png`, `alyve.png`, `santosh-jewellers.png`, `renee-cosmetics.png`, `essential-whitening.png`, `ranavat.png`, `don-j.png`, `d-shop.png`, `refacekit.png`, `beauti-software.png`, `blubox.png`, `furnified.png`, `bombay-shirt-company.png`, `sleepycat.png`, `ayusunless.webp`, `calmenta.png`, `holy-plantz.png`, `trendia.png`, `quite-events.png`, `nekter-juice-bar.jpg`, `banchharams.png`, `consciouspoker.png`). Shared `Container` primitive reused from `src/components/ui/container.tsx`. |

## Section Inventory

| Section | Live Behavior & Styling | Local Implementation |
| --- | --- | --- |
| Header & Navigation | Site header with active navigation item on "Work" > "Case Studies" | Reused shared `SiteHeader` with auto active state detection |
| Inner Hero | Title `Explore our clients’ success stories through case studies`, subtitle, gradient background | Server-rendered `CaseStudiesHero` section with container and exact typography |
| Filter & Search Bar | Grid of Search input, Technology dropdown, Industry dropdown, and case study count counter | Client-rendered `CaseStudiesFilter` with dynamic live search, dropdown filter selection, and URL search param sync |
| Section Title & Grid Listing | H2 `Explore Our Client Case Studies`, description, responsive 2-column card grid with hover effects, category pills with red separator dots, and CTA buttons | `CaseStudiesListing` component with responsive card grid and Server/Client component separation |
| Pagination | Numbered pagination (1, 2, 3, 4, Next) with active page indicator | Dynamic pagination supporting both client filtering and paginated viewing (9 items per page) |
| Footer | Standard multi-column site footer with "Case Studies" link | Reused shared `SiteFooter` |
