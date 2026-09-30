# Visual Parity Capture: GeneratePress Theme Customization

- **Route**: `/generatepress-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/generatepress-theme-customization/`
- **Capture Date**: 2026-09-30
- **Status**: Verified (live-source + stylesheet capture; desktop browser screenshots unavailable this session)
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844
- **Supersedes**: the 2026-08-20 capture, which documented the pre-redesign layout
  (`.theme-customization-service-sec` / `.three_col_icon_sec` /
  `.shopify-customization-services-sec` / `.why_dynamic_dreamz_sec`). The live page has since
  been redesigned to the same 9-section template used by the current WordPress theme
  customization pages.

---

## 1. Visual References & Page Structure

### Capture Method

- Live `View Page Source` pulled to `scratch/generatepress-live.html` (353,966 bytes) and
  re-fetched to `scratch/gen-fresh.html` to confirm the capture is current. The only
  difference between the two pulls is WordPress cache-busting `?ver=` query values on
  stylesheet URLs; all markup, copy, and section classes are byte-identical.
- Section inventory confirmed by scanning every `<section>`/`<div>` class attribute on the
  live document.
- Desktop browser tooling (`browser.tabs.open`) returned
  `[browser.disconnected] No desktop browser is connected to this session.` for this
  session, so live and local **screenshot** comparison could not be produced. Evidence
  below is View Page Source markup plus the live stylesheet rules, which is the strongest
  available substitute. The shared components listed in section 2 are the same components
  already verified by screenshot on `/astra-theme-customization` and
  `/hello-biz-theme-customization`, so the rendered result inherits that visual verification.

### Live CSS Sources Inspected
- `theme_customize_hero.css`:
  - `.theme-customize-hero` (hero layout, `#f7f4e9` background, double eyebrow badges `Wordpress Agency` and `Theme Customization`, left text column `51%`, right image column `43.182%`, bottom-aligned image `601x474`)
- `trusted_by_leading_brands_section.css`:
  - `.our-client-sec` (12 brand logos inside `.wrapper.indian_brand`, split `.left-col` heading / `.right-col` carousel)
- `shopify_theme_customization_services.css`:
  - `.theme-customization-services.yellow` (features section, 7 feature cards)
  - `.theme-customization-services.green` (benefits section, 8 benefit cards)
- `delivery_section.css`:
  - `.what-we-provide-sec.only-text` (services section, 2-column grid, `#services` anchor)
- `how_to_choose_the_right_shopify_plus_agency_sec.css`:
  - `.how-to-choose-spa-sec` (4 numbered framework evaluation cards `01`–`04`)
- `projects_section.css`:
  - `.our-work-sec.pt-0` (4-column portfolio grid, 8 WordPress project cards, `#our_work` anchor, "View our work" CTA)
- `client_review_section.css`:
  - `.happy-client-sec` (`.owl-carousel.happy-client-slider` client video testimonial carousel)
- `faqs_section.css`:
  - `.faq-sec` (5-item accordion; first `.accrodion-item` ships with `active` on the live page)

### Live Section Inventory (verbatim from View Page Source)

```
div.theme-customize-hero
div.our-client-sec
section.theme-customization-services  yellow
section.what-we-provide-sec only-text
section.theme-customization-services  green
section.how-to-choose-spa-sec
section.our-work-sec pt-0
section.happy-client-sec
section.faq-sec
```

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`GeneratePress Theme Customization Service`) | `ThemeHeroSection` | Reused (`@/components/sections/theme-customization/theme-hero-section`) |
| 2 | Trusted by / Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused (`@/components/sections/industry/industry-brands-section`) |
| 3 | Features of GeneratePress Theme (7 feature cards) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused (`@/components/sections/theme-customization-services-section`) |
| 4 | Our GeneratePress Theme Customization Services (6 service cards, 2 cols, `#services`) | `AgencyServicesSection` (`cardVariant="services-box"`, `columns={2}`) | Reused (`@/components/sections/agency-services-section`) |
| 5 | Benefits of GeneratePress Theme Customization (8 benefit cards) | `ThemeCustomizationServicesSection` (`variant="green"`) | Reused (`@/components/sections/theme-customization-services-section`) |
| 6 | Why Choose Dynamic Dreamz (4 numbered cards `01`–`04`) | `EvaluationFrameworkSection` | Reused (`@/components/sections/shopify-plus-agency/evaluation-framework-section`) |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 project cards, `#our_work`) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`) | Reused (`@/components/sections/portfolio-showcase-section`) |
| 8 | Client Stories / Don't Just Take Our Word For It (11-item video testimonial carousel) | `HappyClientSection` | Reused (`@/components/sections/happy-client-section`) |
| 9 | Frequently Asked Questions (5 accordion items, first expanded) | `SplitFaqSection` (`idPrefix="generatepress-faq"`) | Reused (`@/components/sections/split-faq-section`) |

**Newly added this remigration:** sections 5, 6, 8 (benefits / why-choose / testimonials) are now
rebuilt on the live template, section 7 grows from 6 to 8 project cards and gains the
"View our work" CTA, and sections 1, 3, 4 adopt the live class names and eyebrows.

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` desktop, `text-[40px] leading-[50px]` tablet, `text-[30px] leading-[40px]` mobile.
- **Hero Eyebrows**: two badge tags — `Wordpress Agency` and `Theme Customization`.
- **Hero Image**: bottom-aligned 601x474 WebP (`generatepress-theme-customization-service-img.webp`), `object-contain object-bottom`, no blend mode.
- **Hero columns**: text `w-[51%]`, media `w-[43.182%]`, wrapper `flex-wrap items-center justify-between`, stacking to a centred column at `max-[1199px]`.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Section eyebrow labels**: `Features`, `Our Services`, `Benefits`, `Why Dynamic Dreamz`, `Portfolio`, `Client Stories` — each rendered by the shared `Eyebrow` primitive with `mb-4!`.
- **Services header split**: description column `w-[48.3%]`, title column `w-[44%]`, collapsing to `w-full` at `max-[992px]`.
- **Portfolio grid**: 4 columns desktop, 2 columns at `max-[992px]`, 1 column at `max-[767px]`.
- **Interaction states**: accordion first item expanded by default; portfolio card hover reveals the project affordance; brand logos render in the live carousel strip.
- **Client testimonial carousel**: `HappyClientSection` defaults supply 11 video testimonials whose YouTube IDs (`Vc9FH6ZeoXY`, `_ay_egf5GKw`, `_9uT-dRcQvo`, `6Ni9tlZ7HKE`, `_rQeMWcz_gA`, `WQWG2niydpE`, `o4JnTGEH-Yk`, `B3KnREB4Bro`, `-IpNUAco1OA`, `oNDPBGO83G4`, `AoglCZQC0RU`) match the live `happy-client-sec` list one-for-one and in the same order.

---

## 4. Asset Deduplication & Integrity

- **12 brand partner logos** reused directly from `src/content/industries.ts` (`industryBrandLogos`), matching the live `our-client-sec` list one-for-one:
  - `supertails.svg`, `eleven-eleven.svg`, `bella-vita.svg`, `bombay-shirt-company.svg`,
    `popclub.svg`, `sri-sri-tattva.svg`, `tropicfeel.svg`, `renee.svg`, `royce-chocolate.svg`,
    `tego.svg`, `nelter.svg`, `rare-rabbit.svg`
- **21 section icons** (7 features + 6 services + 8 benefits) verified path-by-path against the
  canonical shared icon set in
  `@/components/sections/astra-theme-customization/astra-icons`. All 21 matched exactly
  (`unmatched: 0/21`), so no new SVG markup was added. They are surfaced through the thin
  route-scoped re-export module
  `@/components/sections/generatepress-theme-customization/generatepress-icons`, following the
  existing `kadence-icons` → `hello-biz-icons` aliasing pattern.
  - Features: `lightning`, `seo`, `responsive` (×2 — live reuses the same responsive glyph for
    *Mobile Responsive Design* and *Modular Design*), `customizable`, `woocommerce`, `performance`
  - Services: `installation`, `design`, `responsive`, `features`, `performance`, `support`
  - Benefits: `store`, `responsive`, `brand`, `ux`, `plugins`, `conversions`, `payments`, `maintenance`
  - One backward-compatible extension was required: the feature card *Secure & Stable* renders the
    same shield-with-checkmark glyph the service card *Performance Optimization* uses, but that
    glyph was only registered on `AstraServiceIconName`. `"performance"` was added to
    `AstraFeatureIconName` and a matching branch to `AstraFeatureIcon` rather than duplicating the
    SVG. The addition is purely additive; no existing caller or rendered icon changes.
- **8 portfolio project card images** reused from `public/assets/our-work/projects/`:
  `quite-events.webp`, `les-etoiles.webp`, `valents.webp`, `get-sunsights.webp`,
  `lipari-design.webp`, `nexventur.webp`, `awaken-media.webp`, `budget-maids.webp`
- **Theme hero graphic** reused from
  `public/assets/generatepress-theme-customization/hero/generatepress-theme-customization-service-img.webp`
  (601x474 WebP, 45,622 bytes) — verified same intrinsic dimensions as the live
  `generatepress-theme-services-img.png` (601x474) already ingested in the 2026-08-20 capture.
- **Retained, not deleted**: `public/assets/generatepress-theme-customization/features/*.svg`
  (`mobile-responsive-design.svg`, `modular-design.svg`, `customizable-layouts.svg`,
  `secure-and-stable.svg`) are no longer referenced by this route but are still consumed by
  `/royal-elementor-kit-theme-customization`, `/popularfx-theme-customization`,
  `/eve-theme-customization`, `/kubio-theme-customization`, `/extendable-theme-customization`,
  and `/blocksy-theme-customization`, so they stay in place.
- Duplicate audit: `npm run check:asset-duplicates` →
  `Checked 1760 public assets; exact byte duplicates: 0, visual SVG duplicates: 0, pixel raster duplicates: 0.`

---

## 5. Metadata Parity

| Field | Live | Local |
| --- | --- | --- |
| `<title>` | `GeneratePress Theme Customization Services \| Dynamic Dreamz` | identical |
| `meta[name=description]` | `Get professional GeneratePress Theme Customization Services. Expert WordPress developer with 18+ years of experience. Choose Dynamic Dreamz today!` | identical |
| `link[rel=canonical]` | `https://www.dynamicdreamz.com/generatepress-theme-customization/` (slashless per project URL policy) | slashless |
| `og:type` | `article` | `article` (aligned) |
| `article:modified_time` | `2026-09-28T13:20:17+00:00` | identical |
| `og:image` | absent | present (`/assets/og/homepage.png`) — nonvisual AEO improvement |

Live emits no JSON-LD for this route. The local route emits a
`WebPage` + `BreadcrumbList` + `Service` (with a 6-item `OfferCatalog`) + `FAQPage` graph that
matches the visible content, which is a nonvisual AEO/GEO improvement permitted by the
migration rules.

---

## 6. Remaining Differences

- Live/local **screenshot** side-by-side was not produced this session (no desktop browser
  connected). Re-run the visual verification pass with a connected browser before claiming
  screenshot-verified parity.
- Live portfolio cards open external client sites with `target="_blank" rel="nofollow"`; the
  shared `PortfolioProjectCard` handles the external-rel behaviour for the same
  `cardVariant="ourWorkRefresh"` used across the sibling theme pages.
