# Buy Shopify Development Hours visual capture

Route: `/buy-shopify-development-hours`
Live reference: `https://www.dynamicdreamz.com/buy-shopify-development-hours/`
Capture date: 2026-10-01 (full page) and 2026-10-01 (hero parity pass, see "Hero parity pass")
Browser: Microsoft Edge (headless) / Google Chrome
Status: live-site remigration pass and full visual parity styling complete; section order, split headers, brand logos, comparison tables, tasks pills, timeline, and pricing slider match live site exactly

## Screenshots

- Live desktop, 1440 × 900: `docs/visual-captures/buy-shopify-development-hours/live-desktop-1440.png`
- Live tablet, 768 × 1024: `docs/visual-captures/buy-shopify-development-hours/live-tablet-768.png`
- Live mobile, 390 × 844: `docs/visual-captures/buy-shopify-development-hours/live-mobile-390.png`
- Local desktop, 1440 × 900: `docs/visual-captures/buy-shopify-development-hours/local-desktop-1440.png`
- Local tablet, 768 × 1024: `docs/visual-captures/buy-shopify-development-hours/local-tablet-768.png`
- Local mobile, 390 × 844: `docs/visual-captures/buy-shopify-development-hours/local-mobile-390.png`
- Tall live/local working captures were compared section by section during implementation; temporary review files are removed after verification.
- All six hero-viewport captures above were re-taken on 2026-10-01 after the hero parity fixes described below. The Next.js dev-tools indicator (`nextjs-portal`) is removed from local captures before the screenshot is taken because it is a dev-only fixed overlay that does not exist in production or on the live site.

## Hero parity pass (2026-10-01)

The hero (`.inner-hero-sec.hire-shopify-dev-flexi-hours`) and the pricing package
selector card inside it were re-verified against the live page at 1440, 768 and
390 px widths. Verification combined code/CSS comparison of the live sources
with exact `getBoundingClientRect()` / `getComputedStyle()` probes of both pages
and a numeric per-pixel comparison of matching screenshots.

### Live sources inspected

- `style.css?ver=7.1.2` — `.eyebrow` cascade (`:141-145`, `:155`, `:399-400`,
  `:449-452`) and `ul li { line-height: normal }`.
- `common.css` — `:6` mobile `.eyebrow` overrides (`top:4px; width:15px`,
  `.section_title_with_eyebrow .eyebrow { padding-left: 23px }`).
- `assets/css/shopify-bulk/main.css` — hero, list, card and slider rules.
- `assets/css/shopify-bulk/media.css` — 1199 / 991 / 767 breakpoints.
- Theme JS — the pricing slider handler (thumb geometry, `data-val` swap).
- View Page Source of the live page — hero markup (`.title > .eyebrow` with two
  `<span>` items, `<h1>…<span>Flexible Hours</span></h1>`, `.hire-shopify-dev-list h5`).

### Measurements after the pass

Both pages report identical geometry at all three widths (values in px):

| Element | 1440 | 768 | 390 |
| --- | --- | --- | --- |
| Hero section height | 790.6 | 1387.2 | 1328.2 |
| Hero row y / height | 150 / 560.6 | 100 / 1247.2 | 100 / 1188.2 |
| Left column x / y | 60 / 195.1 | 44 / 100 | 16 / 100 |
| Eyebrow y / height | 199.1 / 16.8 | 106 / 14.4 | 108 / 12 |
| H1 y / height | 229.1 / 120 | 134 / 100 | 134 / 80 |
| Intro paragraph y | 361.1 | 246 | 226 |
| Highlights list y | 460.1 | 345 | 381 |
| Right (pricing) column x / y | 733.2 / 150 | 44 / 550.4 | 16 / 646.4 |
| Next section top | 871 | 1447 | 1388 |

Screenshot pixel comparison (live vs local, same viewport):

| Width | Differing pixels (>24 channel-sum) | Mean abs diff | Mean horizontal centroid shift |
| --- | --- | --- | --- |
| 1440 | 26 467 (2.04 %) | 2.67 | 0.09 px |
| 768 | 24 380 (3.53 %) | 4.26 | 0.02 px |
| 390 | 46 013 (13.11 %) | 12.77 | 0.08 px |

A live-vs-live control capture of the same page is byte-identical (0 differing
pixels), so the residual difference above is real rendering difference rather
than capture noise. Per-region ink bounding boxes and column/row ink profiles
were compared for the header, the H1, the paragraph, the highlights list and the
pricing card at every width: all bounding boxes are identical and all profiles
match to within antialiasing. The residual is glyph rasterization only — the
local build ships Montserrat as a variable font (`montserrat`, weight axis
400–800) while the live site serves static Montserrat per-weight files, so stem
and curve edges antialias slightly differently on the cream `#F7F4E9` hero
background. No element is offset, resized, recoloured or re-ordered.

### Defects found and fixed during the pass

1. **Eyebrow line box.** Live renders `.section_title_with_eyebrow .title` as a
   14 px / 24 px block and `.eyebrow` inline inside it, with the accent line as
   an absolutely positioned `::before` (`left:0; top:7px`, 30 × 2 px) plus
   `padding-left:40px`. The local eyebrow used the shared `Eyebrow` primitive
   in its default flex-line mode, so the accent line became a flex item and
   pushed the eyebrow text 3.4 px (1440), 2.8 px (768) and 2.0 px (390) below
   the live baseline. Fixed by adding a backward-compatible
   `linePosition?: "flow" | "overlay"` prop to `src/components/ui/eyebrow.tsx`
   (default `"flow"` — every other page is unchanged) and using
   `linePosition="overlay"` in the hero.
2. **Pricing card stat widths.** Live cascade is ≥1200 `31.8%`, ≤1199 `48.5%`
   with `:last-child { width:100% !important }`, and ≤991
   `calc(50% - 5px) !important` which wins over the `:last-child` rule. The
   local card had an extra `max-[767px]:w-full` that the live cascade does not
   produce. Fixed to mirror the live cascade exactly.
3. **Struck-through prices.** The two `<del>` elements were inline, producing a
   30.4 px inline line box on top of the 38 px live block box
   (`div.sub-old`). Added `block` so the package price rows keep the live box
   height on stacked mobile.
4. **Slider labels.** `margin-top: 15px` was replaced with
   `padding-top: 15px` so the labels sit at the live position.
5. **Slider measurement.** The thumb is now re-measured on
   `document.fonts.ready`, matching the live handler which recomputes on resize;
   without it the local thumb was 1 px off at 390 because it measured against
   fallback-font metrics.

### Deliberate differences

- **Reveal animation.** Live applies `data-aos="fade-up"` to
  `.hire-shopify-dev-flexi-hours-row`. The local hero renders immediately with
  no entrance animation, because the project has no AOS primitive and adding
  one would add client JavaScript and risk scroll-linked flashes for a
  decorative effect. Content and geometry are identical either way.
- **Heading level.** Live uses `<h5>` for "Key Highlights"; local uses `<h2>`
  for heading-order correctness. Rendered size, weight, colour and position are
  identical.
- **H1 accent colour.** The live `<span>Flexible Hours</span>` carries no colour
  class and renders `#282828`, identical to the surrounding `h1`. (An earlier
  version of this note claimed brand red; that was incorrect.) Local matches the
  live computed colour.
- **Container width step.** Live has a `min-[1300px]:max-w-[1280px]` step. The
  shared `Container` component was intentionally left unchanged so 1300–1399 px
  viewports keep one shared container behaviour across the site instead of
  diverging only on this route.
- **`ButtonLink` breakpoint.** The shared button component switches at
  `max-[992px]`; live switches at 991 px. A one-pixel-wide divergence at a
  single breakpoint, left unchanged to avoid a global visual change.

## Sources inspected

- Rendered live page and full-page scroll at desktop, tablet, and mobile sizes (inspected 2026-10-01).
- View Page Source fetched directly from `https://www.dynamicdreamz.com/buy-shopify-development-hours/`.
- Theme stylesheet `style.css?ver=7.1.2`.
- Page stylesheets `assets/css/shopify-bulk/main.css?ver=1790848630` and `assets/css/shopify-bulk/media.css?ver=1790848630`.
- Flexible component stylesheets `assets/css/flexible-css/shopify_theme_customization_services.css?ver=1790070491`, `assets/css/flexible-css/shopify_team_boxes.css?ver=1788863985`, `assets/css/flexible-css/partnering_with_ambitious_brands.css?ver=1788526891`, and `assets/css/flexible-css/faqs_section.css?ver=1788412226`.
- Yoast SEO metadata, Yoast graph, and separate visible FAQ JSON-LD graph.

## Live section order and visual system

1. Shared header above a cream split hero (`inner-hero-sec hire-shopify-dev-flexi-hours`):
   - Eyebrows: "Established in 2006" & "Shopify Platinum Partner"
   - H1: "Hire Shopify Developer with Flexible Hours" (the "Flexible Hours" `<span>` carries no colour class on live and renders `#282828`, the same colour as the rest of the H1)
   - Intro paragraph
   - "Key Highlights" list with custom red check icons
   - Bordered pricing package selector card with 4 discrete positions (10, 25, 50, 100 HRS), default 50 HRS selected, immediate rate/cost updates, active thumb label bubble ("50 HRS"), new-tab Razorpay purchase links, and "Request a Custom Quote" link.
2. `theme-customization-services pt-0 transparent`:
   - Eyebrow: "Why Bulk Hours"
   - H2: "Designed for Flexibility, Speed, and Control"
   - Description: "Get reliable Shopify development support without long-term commitments..."
   - 5 numbered boxes (01 to 05) with peach number badge and red font, rebuilt via canonical `ThemeCustomizationServicesSection`.
3. `shopify-dev-team pt-80 pb-80`:
   - Eyebrow: "Flexible Shopify Hours"
   - H2: "Who Should Buy Bulk Shopify Hours?"
   - Description: "Bulk Shopify hours are ideal for businesses that need reliable development support..."
   - 4 dark team boxes (Growing Brands, Shopify Plus Stores, Founders & E‑com Teams, Agencies), rebuilt via canonical `ShopifyTeamBoxesSection`.
4. `bulk-shopify-fulltime-resources`:
   - Eyebrow: "Engagement Options"
   - H2: "Bulk Shopify Hours vs Full-Time Resource"
   - Description: "Choosing the Right Engagement Mode."
   - Ribbon banner: "We offer both — you choose what fits your business."
   - 2-column comparison card: "Bulk Shopify Hours" (light yellow background, 4 bullets, "Bulk hours are ideal for flexibility.", button) vs "Full-Time Shopify Resource" (3 bullets, "Full-time resources are better for constant, ongoing development.", button).
5. `can-you-use-shopify-hours`:
   - Eyebrow: "Flexible Use Cases"
   - H2: "What Can You Use Shopify Hours For?"
   - Description: "Your bulk hours can be used for a wide range of Shopify design and development tasks, including:"
   - 11 rounded task pills with check icons.
6. `engagement-section`:
   - Eyebrow: "Engagement Process"
   - H2: "How the Engagement Works"
   - Description: "A simple, transparent process that lets you purchase Shopify development hours..."
   - 5-step numbered horizontal timeline with dashed connector line and red dots, rebuilt via `NumberedProcessTimelineSection`.
7. `trusted_leading_brands`:
   - H2: "Partnering with Ambitious Brands"
   - Description: "Selected brands our teams have supported across Shopify, Shopify Plus and digital commerce."
   - 20 client logos in 5 × 4 grid (desktop/tablet) and 3 animated continuous rows (mobile), rebuilt via `BrandPartnersSection`.
8. `faq-sec`:
   - H2: "Frequently Asked Questions"
   - 10 FAQs matching the live page, rendered via `SplitFaqSection` conforming to the project-wide FAQ standard.
9. Shared footer (NO closing CTA banner on live page).

## Pricing control and purchase states

- Packages:
  - 10 hours at $40/hour ($400, formerly $500) -> `https://rzp.io/rzp/dynamicdreamz-10hourspackage`
  - 25 hours at $35/hour ($875, formerly $1000) -> `https://rzp.io/rzp/dynamicdreamz-25hourspackage`
  - 50 hours at $30/hour ($1500, formerly $1750) -> `https://rzp.io/rzp/dynamicdreamz-50hourspackage`
  - 100 hours at $25/hour ($2500, formerly $3000) -> `https://rzp.io/rzp/dynamicdreamz-100hourspackage`
- The 50-hour package is selected by default.
- Range updates hours, rate, previous rate, cost, previous cost, button label ("BUY SHOPIFY HOURS - $1500"), and thumb bubble ("50 HRS") immediately.

## Component reuse & consolidation

- Reused `ThemeCustomizationServicesSection` with `variant="transparent"` and `className="pt-0"` for Section 2, eliminating previous custom border grid.
- Reused `ShopifyTeamBoxesSection` for Section 3, eliminating previous custom green-dot audience section.
- Reused `NumberedProcessTimelineSection` extended with backward-compatible optional `description` prop for Section 6.
- Reused `BrandPartnersSection` with canonical 20 logos for Section 7.
- Reused `SplitFaqSection` for Section 8.
- Removed extraneous `WhiteLabelFinalCtaSection` (which does not exist on live).

## Asset map

- Brand logos: 20 canonical client logos from `public/assets/clients/`.
- Icons: `public/assets/buy-shopify-development-hours/icons/` (`comparison-check.svg`, `key-highlights.svg`, `task-check.svg`).
- Social image: `public/assets/buy-shopify-development-hours/shopify-development-hours-packages.webp`.
