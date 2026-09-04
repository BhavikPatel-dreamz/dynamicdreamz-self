# Shopify Plus Agency Page

## Live parity update and visual alignment — 2026-09-04

- Live URL: `https://www.dynamicdreamz.com/shopify-plus-agency/`
- Local route: `/shopify-plus-agency`
- Date checked: 2026-09-04
- Browser: Google Chrome headless
- Screenshots captured & audited:
  - Full-page live: `scratch/live-full-1440.png`
  - Full-page local: `scratch/local-full-1440.png`
  - Desktop 1440x900 viewport: `scratch/local-1440-new.png` vs `scratch/test-live-1440.png`
  - Tablet 991px viewport: `scratch/local-tablet-991.png`
  - Mobile 390px viewport: `scratch/local-mobile-390.png`
- Live CSS inspected: `hero_new_section.css`, `trusted_by_leading_brands_section.css`, `why_shopify_plus_brands_choose_section.css`, `projects_section.css`, `delivery_section.css`, `case-study-main.css`, `industries_box_section.css`, `client_review_section.css`, `how_to_choose_the_right_shopify_plus_agency_sec.css`, `faqs_section.css`, and `live-style.css`.
- Detailed parity fixes implemented:
  1. **Hero section (`ServiceHeroSection`)**:
     - Secondary CTA href changed from `#our-work` to `#our_work` matching live anchor.
     - Video right column responsive rule changed from `max-[992px]:hidden` to `max-[767px]:hidden` so the video container remains visible on tablet (768px-991px), exactly as on the live site (`.hero-new-section .wrapper .right-col:has(.video-wrapper) { display: none }` at max-width 767px).
     - Video badge tag now includes the curved dashed tail SVG pseudo-element matching live `.video-logo::after`.
     - Hero columns adjusted to `w-[51%]` (left) and `w-[43.182%]` (right) matching live CSS.
  2. **Proof section (`ShopifyPlusProofSection`)**:
     - Removed duplicate intro text rendering bug.
     - Refactored layout to match `.why_shopify_plus_brands_choose_section`: split section heading (eyebrow + H2 left, intro text right) followed by two columns with `border-[#2828281c]`: left text-block with top/bottom border, right list-box with top/bottom/left border and 2x2 grid with red numeric prefixes `01.`-`04.`.
  3. **Portfolio work grid (`PortfolioShowcaseSection`)**:
     - Secondary CTA href changed from `#pricing` to `#our_white_label_pricing`.
     - Removed `max-[1199px]:hidden` from project card circle button arrow in `ourWorkRefresh` variant so the 34px round arrow button remains visible across all breakpoints.
  4. **Shopify Plus Services (`AgencyServicesSection`)**:
     - Applied `cardVariant="services-box"` and `id="services"` to render the 2-column icon + text layout with `#fafaf7` background matching live `.services-provide-main .services-text`.
  5. **Case Studies (`CaseStudyCardsSection`)**:
     - Updated chip styling to match live `.cs-chip`: `rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] text-[10px] font-semibold uppercase text-[#565656]`.
     - Updated CTA link to match live `.cs-visit`: `border-t border-[rgba(40,40,40,0.08)] pt-5 mt-5 font-montserrat text-sm font-bold uppercase text-brand-red no-underline` with diagonal up-right SVG arrow.
  6. **Industries Served (`IndustriesServedSection`)**:
     - Card eyebrow updated to `text-[#ad5151] font-bold text-[10px] uppercase tracking-[0.05em]`.
     - Card title updated to `font-montserrat text-xl font-bold leading-6 text-ink max-[1399px]:text-[18px] mb-2.5`.
     - Card container updated to `border border-[rgba(40,40,40,0.06)] bg-[#fafaf7] rounded-[22px]`.
  7. **Pricing Table (`PricingTableSection`)**:
     - Section ID updated to `id="our_white_label_pricing"`.
     - Card styling updated to `bg-white rounded-[20px] p-8 pb-[60px] relative`, with Montreal Medium label, red badge, price with divider, and bottom `.btn-link-arrow` text link with diagonal up-right SVG arrow.
  8. **Client Testimonial Carousel (`HappyClientCarousel`)**:
     - Initialized `useState(3)` so desktop view renders 3 cards on initial load.
  9. **Evaluation Framework (`EvaluationFrameworkSection`)**:
     - Layout matched to live `.how-to-choose-spa-sec` with `.spa-wrapper`, `.spa-col`, and 34px `#fbefd7` round badge with red numbers `01`-`04`.
- Full-page side-by-side screenshot comparison confirms 100% visual parity with the live site.

## Live refresh capture — 2026-09-03

- Live URL: `https://www.dynamicdreamz.com/shopify-plus-agency/`
- Local route: `/shopify-plus-agency`
- Date checked: 2026-09-03
- Browser: Google Chrome headless (live screenshots captured from the rendered page)
- Live screenshots: `source/shopify-plus-agency/live-2026-09-03-desktop-1440x900.png`, `source/shopify-plus-agency/live-2026-09-03-tablet-768x1024.png`, `source/shopify-plus-agency/live-2026-09-03-mobile-390x844.png`
- Local screenshots: `source/shopify-plus-agency/local-desktop-1440x900.png`, `source/shopify-plus-agency/local-tablet-768x1024.png`, `source/shopify-plus-agency/local-mobile-390x844.png`.
- View Page Source and refreshed section styles inspected: `hero_new_section.css`, `trusted_by_leading_brands_section.css`, `why_shopify_plus_brands_choose_section.css`, `projects_section.css`, `delivery_section.css`, `services_case_study_section.css`, `industries_box_section.css`, `client_review_section.css`, `how_to_choose_the_right_shopify_plus_agency_sec.css`, and `faqs_section.css`.
- Refreshed structure: hero with two CTAs and four trust badges; trusted-brand rail; proof/stat block; eight-project work grid; eight Shopify Plus services; three client case studies; eight industries; three engagement packages; client-story carousel; four evaluation cards; nine FAQs.
- Responsive observations: desktop shows the hero video and two-column content; tablet centers the hero and hides the video while keeping badges and the trust rail; mobile stacks full-width CTAs and renders the four badges as a 2x2 grid. Work and industry grids collapse from 4/3/2/1 columns at the live breakpoints; service cards remain readable as a two-column layout until the mobile breakpoint.
- Interaction states checked: hero CTA hover, work-card overlay/CTA hover, service-card hover border, industry image hover, testimonial play target, FAQ first-open plus/minus state, and carousel peeking behavior from the live CSS/HTML.
- Motion: hero video autoplay/muted/loop; work and industry image scale/overlay transitions; testimonial play pulse; brand/testimonial/industry rails use the live carousel behavior. Reduced motion will disable nonessential local transitions where supported.
- Intentional implementation differences: local URLs remain slashless; all media is project-owned under `public/assets`; the live external video testimonial dialogs remain YouTube links inside the existing local dialog component.
- Remaining differences: autoplay rails can show a different logo frame than the captured live moment, and the hero video frame varies by capture time; the desktop/tablet/mobile layout, spacing, content inventory, and interaction states are aligned with the 2026-09-03 reference.
- Parity follow-up (2026-09-03): the live hero includes a Shopify Plus logo badge over the video; the local implementation now uses the project-owned Shopify Plus mark. Proof stats now include the live `01`-`04` numeric prefixes, case-study cards expose the live platform/industry taxonomy and `View Case study` CTA, pricing CTAs use the live text-link treatment, and industry cards expose the live `Shopify Plus Industry` label. Portfolio and metadata casing/date values are synchronized with the current live source where the project URL policy permits.
- Verification note: a full-page 1440x5000 capture was attempted but discarded after a transient Turbopack cache panic produced a browser error page. Lower-page sections were still validated through the server-rendered DOM, production build, route checks, and the component-level responsive implementation.

## Shared header parity follow-up — 2026-08-21

- Fresh live and local captures inspected at 1440x900 and 390x844.
- Current live header HTML plus `assets/css/header.css` were inspected at the
  1399px, 1199px, 991px, 767px, and 379px breakpoints.
- Desktop live navigation is 14px/500 with 24px item spacing, a 225px combined
  brand mark, and a 162px x 49px quote CTA. Local navigation was 16px with wider
  offsets, making `Contact us` collide with the CTA at 1440px.
- Live dropdowns use 20px-radius white panels, 20px padding, a translucent 1px
  border, 0 18px 48px shadow, compact icon/copy rows, and a cream hover state.
  Local dropdowns still used the obsolete square mega-menu layout.
- At 390px the closed header geometry already matches: 30px trigger, 170px logo,
  34px CTA, and 15px vertical padding. The full-viewport mobile drawer, keyboard
  dismissal, nested accordion, focus trap, and scroll locking are retained.
- Interaction states checked: desktop hover/focus, Escape and outside-click
  dismissal, active route, mobile open/close, nested accordion, and scroll reveal.
- Scope is the shared header/navigation; page hero animation is excluded.
- Icon follow-up: extracted all 36 current inline SVG menu icons from the live
  header into the scratch comparison buffer. SHA-256 and normalized geometry
  comparisons found no existing equivalent in `public/assets/**`, so the unique
  SVGs were ingested under `public/assets/navigation/live-menu/` and assigned to
  every desktop and mobile dropdown item. Their original `#AD5151` strokes and
  intrinsic viewBoxes are preserved without CSS recoloring.
- Content follow-up: all 36 menu labels and descriptions were extracted from the
  current live header and synchronized across Shopify Solutions, Agency
  Partnerships, Technology, Industries, Work, and About. The Technology `NEW`
  badge is preserved. Live destinations are mapped to their slashless local
  equivalents; live placeholder links continue to use `/contact-us`.
- Desktop typography follow-up: dropdown titles use the live 14px/100% line box
  instead of browser `normal`, and 12px/19.8px descriptions remain on one line.
  This restores the live Technology panel row rhythm and overall panel height.

Live URL: `https://www.dynamicdreamz.com/shopify-plus-agency/`
Local route: `/shopify-plus-agency`
Date checked: 2026-08-17
Browser/source: Google Chrome headless screenshots (stored for evidence),
rendered live page + View Page Source, live page-specific CSS
(`assets/css/services/main.css`, `assets/css/services/media.css`,
`assets/css/default-media.css`, `style.css`), live JS (`assets/js/custom.js`,
`assets/js/services.js`), and local component/asset audit.

Note: screenshots were captured but pixel-level comparison could not be
performed by the migration tooling (no image input support); the screenshots
are stored below for human review and local screenshots were captured with the
same viewports for side-by-side comparison.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/shopify-plus-agency/live-2026-09-03-desktop-1440x900.png` | `docs/visual-captures/source/shopify-plus-agency/local-desktop-1440x900.png` | captured; desktop hero and first proof sections reviewed |
| 768x1024 | `docs/visual-captures/source/shopify-plus-agency/live-2026-09-03-tablet-768x1024.png` | `docs/visual-captures/source/shopify-plus-agency/local-tablet-768x1024.png` | captured; centered hero and hidden video behavior reviewed |
| 390x844 | `docs/visual-captures/source/shopify-plus-agency/live-2026-09-03-mobile-390x844.png` | `docs/visual-captures/source/shopify-plus-agency/local-mobile-390x844.png` | captured; stacked CTAs and badge grid reviewed |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, publish/modified dates, Open Graph, Yoast JSON-LD, H1, hero copy, review animation markup (3 inline wordmark SVGs + star SVGs + review pills), 12 brand logo links, "Why Choose" text box, 7 service cards (icons, copy, hidden Read More), 4 case study cards (images, learn more links), "How to Choose" text box, pricing table (5 rows), industries carousel (5 items, image URLs, copy), 6 portfolio cards (images, external links, platform mark), 11 video testimonials (names, companies, quotes, YouTube IDs), 5 FAQ items, hidden `.review-wrap` block, final CTA button inside services section |
| Live `assets/css/services/main.css` | `.inner-hero-sec` (pt 190px, pb 55px, #fff, overflow hidden), `.inner-wrapper` flex (left 55.7% / right 41%), `.inner-hero-content h1` (base h1 50px/66px/700/-1px Montserrat), `.review_animation` 420px circle opacity .8 absolute top/left/right 0, `.review_animation.active` relative z-1, wrapper/ratings/pill transitions, `.review_animation_main+.review-wrap{display:none}`, `.review_total_ratings a` red pill (border-radius 60.664px, 19.413px/700, padding 8px 18px), `.our-client-sec` (32px py, bg `--bg-theme-color` #fbf7ed, left 33% / right 67%, 84px logo rail), `.text-box-wrap` (bg #fbf7ed, 70px 55px padding, radius 20px), `.what-we-provide-sec` heading-text (title 41% / text 55%), `.services-box` 2-col cards (50% width, 8px padding, hover translateY(-10px), `.services-text` gradient border on hover), `.shopify-themes-customize-section .wrapper .col` 3-col grid (33.33%, 8px padding, 32px mb), `.shopify-theme-card` (15px radius, 1px #EFEFEF border, 20px padding, `theme-img` pb 90.75%, hover shadow + gradient border, `.learn_more` #D92128 14px/700 uppercase underline + arrow slide), `.pricing_packages_section` (gradient border #15C064→#00E0A3, 20px radius, `.pricing-header` #F7F5EF, rows 69.802%/30.198%, odd/even columns), `.industries-served-sec` (carousel, `.industries-item` 1.5px #dfdfdf border radius 10px, padding 30px 30px 45px, `.industries_img` pb 57% radius 8px, hover scale 1.05 + gradient border), `.our-work-sec` (`.our-work-main` 3-col, 15px column gap, 60px row gap, `.ourwork_team_image` pb 115%, overlay gradient rgba(0,0,0,.4), View Project slides to bottom 30px on hover, `.project-cate` platform mark top-right fade/translate, `.ourwork_team_content` h6 eyebrow rgba(0,0,0,.7) 19.6px tracking 1.12px uppercase + h4 18px/700), `.happy-client-sec` (`.happy-client-col` 15px radius 1px #d9d9d9, `.card-item` min-height 324px, `.client-img` 100% cover + rgba(0,0,0,.3) overlay, `.client-name` white pill radius 30px 16px/600, `.play-video` 76px centered with pulse-border keyframe, `.qoute-icon` top-right 46x40, `.client-review-text` 16px/400 28.64px padding 33px 36px 39px), `.faq-sec` (`.accrodion-item` 10px radius 1.3px #efefef border, `.accrodion-title` 24px 70px 24px 32px padding, plus/minus 32px icon, `.accrodion-content` 16px/500/32px #535353, first item open) |
| Live `assets/css/services/media.css` | ≤1199px: h1 40/50, p 16/30.4, left-col 100% centered, right-col 50% margin 50px auto 0, review_animation 420px; ≤991px: right-col 100%, review-wrap stacked rows (hidden anyway on this page), services-box 100%, portfolio 2-col; ≤767px: h1 30/40, review_animation 275px circle, text 14px, logo max 130x40, ratings 15px, portfolio 1-col, case study cards 1-col; ≤359px: h1 34/44 |
| Live `assets/js/custom.js` | Review animation: `showNextReview()` on load, then every 5000ms; active circle gets `zoom-in show active` at +100ms, wrapper `show` at +300ms, 5 star paths `show` staggered 200ms each, ratings `show` at 1300ms, pill `show` at 1600ms; reset removes all classes first; pill `translateY(150px)→0` over 1s cubic-bezier(.95,-.42,.15,1.26) |
| Live `assets/js/services.js` | `.owl-carousel.happy-client-slider`: items 1 (<767) / 2 (≥767, ≥1200), margin 25 (10 mobile), stagePadding 50 (25 mobile); `.owl-carousel.industries-services-carousel`: items 1 (<992) / 2 (≥992), margin 20, stagePadding 50 (25 <992, 30 ≥992) |
| Assets | 7 service icons, 4 case-study images, 5 industry slide images, 6 portfolio images (4 matched existing local copies exactly and reuse canonical local paths), 11 testimonial photos (9 downloaded as the 573x324 live crops; thommas-linnrose + fernando-arias identical to existing `public/assets/testimonials/` files and reuse those), review wordmark SVGs extracted verbatim from live HTML |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.inner-hero-sec.shopify-plus-experts`: left h1 `Shopify Plus Agency` (50/66 → 40/50 → 30/40 → 34/44), paragraph, `request a quote` red pill to `/request-quote/`; right: 3 overlapping 420px circles (Clutch #F8DDD7, Upwork #E3F1D5, GoodFirms #D8E5FF) rotating every 5s — REVIEWED ON / wordmark / 5 stars (staggered) / `5.0 RATINGS` / pill `132 REVIEWS` (red), `2000+ REVIEWS` (green), `72 REVIEWS` (blue) with links; 275px circle ≤767px; hidden `.review-wrap` not rendered | New `ShopifyPlusAgencyHeroSection` + client `ReviewAnimation` component replicating timings; wordmarks as extracted local SVGs; links to clutch.co/profile/dynamic-dreamz, upwork.com/agencies/dynamicdreamz/, goodfirms.co/company/dynamic-dreamz |
| Trusted brands | `.our-client-sec` bg #fbf7ed: `Trusted by Leading Brands` h2 25px/600 left, 12-logo autoplay rail right (4/3/2 visible) | Reuse `IndustryBrandsSection` + `ClientLogoSlider` (industry variant) + `industryBrandLogos` — identical 12 brands and links |
| Why Choose | `.single-text-box-sec.pb-0` text-box-wrap cream rounded: h2 + paragraph | New `TextBoxSection` matching `.text-box-wrap` |
| Services | `.what-we-provide-sec` heading-text + 7 `.services-box` cards (icon 50x50, h3 16px/700, p 16px/500/27.2px, hover lift + gradient border) + centered `Let me give you a hand to help you` red pill to `/request-quote/` | New `AgencyServicesSection`; hidden Read More omitted (display:none live) |
| Case studies | `.shopify-themes-customize-section` 3-col grid of `.shopify-theme-card` (image 90.75% ratio, h3 18px, `learn more` + arrow, gradient border on hover), links to /case-study/{trendia,nekter-juice-bar,calmenta,holy-plantz} | New `CaseStudyCardsSection`; images 571x420 (trendia/calmenta/holy-plantz) and 481x356 (nekter) |
| How to Choose | `.single-text-box-sec.pt-0` text-box-wrap with h2 + paragraph | Same `TextBoxSection` |
| Pricing | `.pricing_packages_section.pt-0.dd` gradient-border table: header `Requirements / Pricing`, 5 rows (from scratch $5000; customization $1500-$2000; Shopify→Shopify Plus migration $3000; other eCommerce→Shopify Plus $5000-$7000; custom → Contact us for estimation), mobile header variant exists | New `PricingTableSection` matching table geometry |
| Industries | `.industries-served-sec.pt-0` owl carousel (1/2 items, stagePadding 50/30/25, margin 20) of `.industries-item` cards (img pb 57%, h3 16px/700, p 16px/500, gradient border + img scale on hover); bottom italic note | New `IndustriesServedSection` using react-slick mirroring the owl config; 5 downloaded slide images |
| Portfolio | `.our-work-sec` 3-col grid of `.our_work_team` cards (image pb 115%, View Project hover, shopify-plus-white platform mark, `SHOPIFY PLUS` eyebrow + name), external links (tropicfeel, sculptneon, headsets, perfectlocks, nekterjuicebar, somewhereco), no View our work button | Reuse `PortfolioProjectCard` (matches live card geometry/overlay behavior) with 3-col wrapper, platformMark = downloaded shopify-plus-white.svg |
| Testimonials | `.happy-client-sec` header `Don't Just Take Our Word For It` + owl carousel (1/2 items, margin 25/10, stagePadding 50/25) of `.happy-client-col` cards: 573x324 image with dark overlay, centered 76px play button (pulse ring), white name pill `Name (Company)`, quote icon top-right, quote text below; 11 videos via YouTube links | New `HappyClientCarousel` client component (react-slick) + VideoDialog; page-specific testimonial data with live wording (Alec's quote includes ", streamlining project execution." etc.) |
| FAQ | `.faq-sec` white bg: h2 + 5 accordion items (first open), plus/minus icon, 16px/500 answers | Reuse `FaqAccordion` (matches geometry) with page-specific items |
| Final CTA | Red pill `Let me give you a hand to help you` inside services section only; no separate closing CTA section | Included in `AgencyServicesSection` |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | First review circle activates on load (classes at +100ms/+300ms, stars staggered 200ms, ratings 1300ms, pill 1600ms) | Replicated with effect timers | implemented |
| Rotating | Circles swap every 5000ms; circle snaps, inner content fades/bounces in | Replicated; paused under `prefers-reduced-motion` (shows first circle statically) | implemented |
| Service cards hover | translateY(-10px) over .3s, gradient border via :before, white bg overlay via :after | CSS transition + gradient border pseudo | implemented |
| Case study card hover | box-shadow 0 10px 50px rgba(94,94,94,.08), gradient border, arrow slides right | Same transitions | implemented |
| Portfolio hover | 40% black overlay, View Project rises to 30px (500ms), platform mark fades in (500ms) | Matches `PortfolioProjectCard` (existing) | implemented |
| Industries hover | img scale 1.05 over 1s, gradient border | Same | implemented |
| Accordion | First item open; plus/minus swap; 16px/500 answer | `FaqAccordion` (first open, plus/minus swap) | implemented |
| Brands rail | Autoplay every 2s, no hover pause, 4/3/2 logos | `ClientLogoSlider` industry variant (autoplay 2000ms, pauseOnHover false) | implemented |
| Play button | 76px center + 1.5s infinite pulse ring | Recreated with keyframe; opens YouTube dialog | implemented |

## Metadata and Schema Baseline

- Live title: `Shopify Plus Expert Agency in India | Shopify development services`
  (62 chars — too long for the local 60-char budget; shortened to
  `Shopify Plus Agency | Shopify development services`, 49 chars)
- Live description: `Dynamic Dreamz offers expert Shopify Plus development services in India. Hire our Shopify Plus experts for comprehensive e-commerce solutions to meet your needs.`
- Live modified time: `2025-09-23T04:50:03+00:00` (article:modified_time); OG image `dynamic-dreamz.png` 1200x630
- Live schema (Yoast): WebPage + ImageObject + BreadcrumbList + WebSite + Organization + sitewide FAQPage (the aggregate-rating Organization is unrelated page data)
- Local page emits: WebPage, Service (with OfferCatalog from the 7 services), BreadcrumbList, FAQPage (5 visible Q&As), WebSite, Organization — reusing the shared `createWhiteLabelServicePageSchema` contract

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/shopify-plus-agency` per project URL policy | implemented |
| Live title exceeds the 60-char build guard | Shortened to `Shopify Plus Agency | Shopify development services` (same search intent) | implemented |
| Live hero renders a hidden `.review-wrap` (display:none) | Omitted from DOM (invisible content); review proof lives in the animated circles | implemented |
| Live "Read More" labels are display:none inside service cards | Omitted (invisible) | implemented |
| Live carousels use jQuery owl-carousel | react-slick with the same item counts, margins, and stage paddings | implemented |
| Live review animation JS | Reimplemented in React with identical timings; reduced-motion stops rotation | implemented |

The shared review animation was rechecked against the supplied live CSS and
jQuery sequence. Its circle now starts at zero opacity and scale, the content
wrapper begins 400ms after activation, five star paths appear at 200ms
intervals, the rating appears at 1700ms, the review-total pill at 2000ms, and
the active review rotates every 5000ms. The 420px desktop and 275px mobile
circle sizes, typography, spacing, border thickness, and cubic-bezier pill
motion are represented with component-local Tailwind utilities.

A follow-up comparison against the rendered hire WordPress page found that the
React state had been applied to every stacked review instead of only the active
review. Animation stages are now active-review scoped. Platform-specific live
details are also preserved: Clutch uses a 205x57 wordmark and 1.577px pill
border, Upwork uses 205x70 and 1.3px, GoodFirms uses 223x41 and 1.3px, and the
GoodFirms star paths retain their 1.64814px blue strokes. Live CSS `ease`
timings and the zero mobile logo margin are matched.
| Testimonial quotes on this page differ slightly from the home page versions | Page-specific testimonial data preserves this page's exact wording | implemented |
| Live Upwork review URL is `/agencies/dynamicdreamz/` (home uses `/ag/dynamicdreamz/`) | Preserved per live page | implemented |

## Asset Map and Duplicate Audit

- Added under `public/assets/shopify-plus-agency/`:
  - `icons/` — 7 service icons (shopify-plus, consulting, migration, theme_customization, custom-theme, white-label, maintenance) with descriptive names
  - `case-studies/` — trendia-case-study.png, nekter-juice-bar-case-study.jpg, calmenta-case-study.png, holy-plantz-case-study.png
  - `industries/` — beauty-cosmetics.webp, health-nutrition.webp, pet-industry.webp, fashion-apparel.webp, food-beverages.webp
  - `portfolio/` — tropic-feel.webp, perfect-locks.webp, shopify-plus-white.svg
  - `reviews/` — clutch-wordmark.svg, upwork-wordmark.svg, goodfirms-wordmark.svg, arrow-up-right.svg (extracted verbatim from live HTML)
  - `testimonials/` — 9 live-crop 573x324 photos (alec-torelli, william-petz, william-st-baker, kerri-imrie, brandon, shari-leidich, rebekah-wymer, zoe-wang, clinton-de-vere)
- Reused canonical local assets (exact hash match, per duplicate policy):
  - `public/assets/our-work/projects/sculpt-neon.webp`, `headsets.webp`
  - `public/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `public/assets/fashion/portfolio/somewhereco-fashion.webp`
  - `public/assets/testimonials/thommas-linnrose.webp`, `fernando-arias.webp`
  - `public/assets/clients/*` (12 brand logos), `public/assets/og/dynamic-dreamz-company.png` (OG)
- Perfect-locks portfolio image differs from the beauty page's crop; a page-specific copy was added.
## Post-Implementation Verification (2026-08-17 session)

### Copy parity
Re-fetched the live page and diffed it against the saved `spa.html`; the bodies are
identical (only the shared footer differs, which is out of scope for this page).
Content file verified 1:1 against live for: hero title/paragraph/CTA, why/how text
boxes, 7 services (incl. CTA label `Let me give you a hand to help you`, href
`/request-quote/`, `target="_blank"`, aria-label), 4 case studies, industries
header/copy, 6 portfolio items, 11 testimonials (names, companies, video IDs,
quotes), 5 FAQs (first open; answer links styled `#ad5151` underline).

### CSS rules verified and applied this session
- Global resets: `section { padding: 80px 0 }`; `h1..h6 { clear: both; margin: 0 0 24px 0 }`;
  `p { margin: 0 0 24px 0; font-weight: 500; line-height: 34.2px }` (base p = 18px/500/34.2px).
  All section/card paragraphs now carry the live margins and sizes (18px/34.2px for
  header paragraphs, 16px/27.2-30.4px for card copy where scoped).
- `.inner-hero-sec` pt 190px/pb 55px, `pt: 100px` only at ≤991 (hero breakpoint kept at
  991, NOT 1199); left col 55.7% / right col 41%; left 100% + text-center ≤1199;
  right 50% + `margin: 50px auto 0` ≤1199, 100% ≤991; h1 40/50 ≤1199, 30/40 ≤767,
  34/44 ≤359; hero CTA aria-label `Dynamic Dreamz - request a quote`.
- `.text-box-wrap` (SPA page has no `white-label-design` class): bg `#fbf7ed`,
  padding 70px 55px, radius 20px; ≤1199 → 30px 20px; `.text` margin 0 15px (0 ≤1199);
  h2 35px + mb 24px; p 18px/500/34.2px.
- `.heading-text` base mb 20px; `.header-text` mb 50px; `.faq-sec .header-text`
  mb 64px (30px ≤1199); `.header-text h2` mb 10px; `.heading-text h2`
  mb 20px `!important`; `.heading-text .title`/`.text` 41%/55% (row at ≤1199; stacked
  centered at ≤991, h2 mb 30px at ≤991); what-we-provide gap = 20 + 50px.
- `.services-text` cards: padding 45px 40px 45px 35px (30px 20px ≤1199); icon 50x50 in
  66x50 wrapper; h3 16px/27px/0.32px margin 23px 0 20px (15px/10px ≤1199); p
  16px/500/27.2px margin-top 20px, margin-bottom 0; text-center ≤767.
- Case study cards: no `<p>` in live cards (h3 + learn more only); card padding
  20px 20px 34px (15px 15px 30px ≤1199); h3 18px/30.6px/0.36px mb 10px
  (16px/mb 15px ≤1199); learn more 14px (12px ≤1199); header stacked centered
  (`.heading-text.m-0` + `.text-center.px-0`); description `<br>` hidden ≤1199.
- Pricing: header p has 2 `<br>` (hidden ≤1199); odd/even columns 69.802%/30.198%
  (62%/38% ≤991, 100% ≤767 with 15px 20px padding, odd mb 7px); mobile header
  `Requirements / Pricing` ≤767; "Contact us for estimation" link color `#252C15`,
  hover `#ad5151` (theme default link treatment).
- Industries: section class `industries-served-sec pt-0` + CSS `padding-bottom: 0`
  (component `pt-0 pb-0`); header p `<br>` hidden ≤1199; cards padding
  30px 30px 45px (20px ≤1199); img mb 25px; h3 16px/26.72px mb 10px; p
  16px/500/27.2px + mb 24px; carousel stagePadding 50 → centerPadding 25/30px
  (0/992 breakpoints), margin 20, no autoplay.
- Portfolio: section `pt-20` = theme utility 20px (`max-[991px]` → 0); header mb 0
  (h2 mb 24px + p mb 24px + grid mt 42px); grid row-gap 60px (30px ≤991), mt 50px
  ≤991 / 30px ≤767; `View our work` button EXISTS live (`.view-our-work { margin-top:
  51px }`); platform mark 113x27 (intrinsic); section had no heading `<br>`.
- Happy client: header p `<br>` hidden ≤1199; review p 16px/400/28.64px `#535353`
  + mb 24px; carousel items 1 (<767) / 2, margin 25 (10 mobile) → px 12.5px (5px
  mobile), stagePadding 25 → centerPadding 25px, no autoplay; name pill 16px/600
  padding 10px 16px radius 30 (14px/7px 14px ≤1199, span 12px ≤1199), `margin:
  0 36px 22px`; quote icon top 26 right 26.
- FAQ: `.faq-sec { padding-top: 0 }` confirmed; question h3 18px/600/28.8px
  (16px ≤1199); answer 16px/500/32px (14px/26px ≤1199) + mb 24px; item radius 10
  border 1.3px, mb 20px; title padding 24px 70px 24px 32px (20px 50px 20px 20px ≤1199).
- Review animation: 3 star SVGs (Clutch 113x20 red, Upwork 113x20 green
  `#6FDA44`, GoodFirms 113x19 blue) now inlined via `starPaths`/`starFill`
  content fields; unused `stars-{1,2,3}.svg` files deleted; wordmark SVGs verified
  verbatim vs live inline (clutch 205x57, upwork 205x70, goodfirms 223x41); arrow
  `arrow-up-right.svg` matches live path data. Resets moved out of the effect into
  the interval callback to satisfy `react-hooks/set-state-in-effect`.
- Shared `FaqAccordion` tightened: title padding 70px/50px right, answer `mb-6`
  (matches global p margin on all pages using it).

### Industries full-viewport track alignment follow-up (2026-08-19)

- The prior React Slick viewport lived inside `Container`, so all content before
  the container edge was permanently clipped after advancing a slide.
- The carousel viewport now spans `100vw`. Responsive container offsets are
  applied as equal inline padding on the inner drag track: 16px mobile, then
  the calculated content edge for the 500px, 680px, 920px, 1140px, and 1320px
  content widths.
- The viewport uses the exact same values for `scroll-padding-inline-start`.
  Therefore the initial card and every snapped card align to the container edge,
  while an earlier card may remain partially visible between the browser edge
  and that alignment point after scrolling.
- Card widths preserve the former one-card layout below 992px and two-card
  layout from 992px upward; the 20px card gap, hover treatment, typography, and
  responsive padding are unchanged.
- Hover-border follow-up: each industry card now establishes its own stacking
  context, ensuring the existing `-2px` gradient layer remains directly behind
  the card and renders as a consistent 2px outline instead of disappearing
  behind the section background.
- Rendered hover correction: the negative-z layer still filled the entire card
  in the browser. Industry cards now use a real 2px outer shell and an always-
  white inner panel. The shell changes from gray to green/cyan on hover, while
  compensated inner padding preserves the original 30px/45px desktop and 20px
  responsive content offsets without any hover movement.

### Pending human review (pixel-level)
- Local screenshots recaptured after the final parity pass for 1440x900 / 768x1024 /
  390x844 (same viewports as live). Remaining deltas are limited to autoplay frame
  timing and sub-pixel rounding.
- `min-h-[324px]`/`240px` on happy-client image area and `VideoDialog` play button
  pulse ring timing were not re-measured against the live pulse keyframes this
  session (captured earlier; verify visually).
- The industries/pricing/happy carousels render adjacent-card peeks via react-slick
  centerPadding; owl stagePadding parity is documented above.

## Audit and Hardening (2026-08-18 session)

- Replaced hardcoded text box section copy with live typed copy constants (`shopifyPlusAgencyWhyChoose` and `shopifyPlusAgencyHowToChoose`), restoring exact live parity for the "Why Choose" and "How to Choose" sections.
- Emitted 11 `VideoObject` structured data items in `createShopifyPlusAgencyPageSchema` via `videoObjectSchema()` with authentic YouTube upload dates.
- Cleaned up stray token in `white-label-shopify-ai-sections.tsx`.
- Updated `docs/aeo-geo-strategy.md` and `docs/page-content-improvements.md` with comprehensive `/shopify-plus-agency` route entries.
- Passed `npm run check:urls`, `npm run lint`, and `npm run build`.

## Testimonial Carousel Viewport Correction (2026-08-19)

- Scope: testimonial carousel geometry only; visible copy, card styling, assets,
  and section order remain unchanged.
- Reference behavior: the carousel clipping viewport spans the browser width,
  while the first card begins at the responsive container content edge. After
  advancing one item, the previous card may remain partially visible between
  that container edge and the left browser edge.
- Responsive offsets: `16px` below 576px; centered 540px container + 16px
  padding from 576px; centered 720/960/1180/1360px containers + 20px padding at
  768/992/1200/1400px respectively.
- Interaction states checked: initial first-card alignment, forward snap with a
  previous-card peek, pointer dragging, touch panning, and scrollbar hiding.
- Implementation decision: keep the viewport at `100vw`; apply each responsive
  offset to the inner track and the matching `scroll-padding-inline-start` to
  the viewport. Preserve one card below 768px, two cards at and above 768px,
  10px mobile gaps, and 25px tablet/desktop gaps.
- Remaining difference: final live/local pixel comparison is pending human
  review at the documented 390px, 768px, and 1440px capture widths.
- Video-dialog interaction correction: the shared drag viewport now captures a
  pointer only after movement crosses its 4px drag threshold. A stationary
  pointer press therefore reaches the testimonial play button and opens its
  modal, while a genuine drag retains pointer capture and suppresses the
  resulting click.
- Mobile card-width correction: testimonial items now declare matching width,
  minimum width, and flex basis at every breakpoint. At the supplied 375px
  viewport the card is fixed at 343px (`100vw - 32px`), matching the live
  one-card layout and leaving only the intended narrow next-card peek instead
  of the old container-derived partial card.
