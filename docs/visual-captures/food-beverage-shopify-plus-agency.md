# Visual Capture: Food & Beverage Shopify Plus Agency

- **Route**: `/food-beverage-shopify-plus-agency`
- **Live Reference**: `https://www.dynamicdreamz.com/food-beverage-shopify-plus-agency/`
- **Capture Date**: 2026-09-01
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("Food & Beverage Shopify Plus Agency \| Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/food-beverage-shopify-plus-agency/`), OpenGraph, article dates, 7 content sections, image URLs, alts, dimensions, internal links |
| Live CSS Files | Inspected `services_main.css`, `services_media.css`, `case_study_main.css`, `case_study_media.css`, and flexible CSS modules (`delivery_section.css`, `trusted_by_leading_brands_section.css`, `faqs_section.css`) downloaded into `scratch/css/` |
| Live Screenshots Captured | Edge headless full-height captures at 1440px (`scratch/live-desktop-full.png`), 768px (`scratch/live-tablet.png`), and 390px (`scratch/live-mobile.png`) |
| Local Screenshots Verified | Edge headless full-height captures at 1440px (`scratch/local-desktop-full.png`), 768px (`scratch/local-tablet.png`), and 390px (`scratch/local-mobile.png`) |
| Local Component Discovery & Extension | Extended `AgencyServicesSection` with `cardBgClassName` and 2-col horizontal flex card styling (`isServicesBox`). Used `IndustryHeroSection` (`variant="white"`), `IndustryBrandsSection`, `TwoColImageWithTextSection`, `MigrationProcessSection`, `ServicesCaseStudiesSection` (with red dash eyebrow, line-clamp-2, and responsive full-width), and `SplitFaqSection` (`className="bg-white py-[60px] max-[767px]:py-10"`) |
| Local Asset Tree | 2-step ephemeral comparison buffer in `scratch/`. Downloaded live Nekter case study image, converted to WebP (`public/assets/food-beverage-shopify-plus-agency/case-studies/nekter-juice-bar.webp`), checked SHA-256 (0 duplicates). Reused canonical brand logos and maintenance icon. |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused / Sourced |
|---|---|---|---|
| 1 | Hero Banner | `IndustryHeroSection` (`variant="white"`, `showEyebrow={false}`, `showCta={false}`) | `/assets/food-beverage-shopify-plus-agency/hero/food-and-beverage-shopify-plus-agency.webp` (854x529) |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by <br>Leading Brands"`, `items={industryBrandLogos}`) | Canonical brand SVGs matching live site (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, POP Club, SriSri Tattva, Tropicfeel, etc.) |
| 3 | Two-Col Image with Text | `TwoColImageWithTextSection` | `/assets/food-beverage-shopify-plus-agency/why-choose/why-choose-food-beverage-shopify-plus.webp` (469x500) |
| 4 | Services (7 Cards) | `AgencyServicesSection` (`headerLayout="split"`, `columns={2}`, `cardVariant="services-box"`, `cardBgClassName="bg-white"`, mint gradient section background) | 5 SVGs from `public/assets/food-beverage-shopify-plus-agency/services/` |
| 5 | Our Process (4 Steps) | `MigrationProcessSection` (`titleAlign="center"`) | Gradient number badges (`Step 01` - `Step 04`), clean divider lines |
| 6 | Case Studies (Nekter) | `ServicesCaseStudiesSection` (`— CASE STUDIES` red dash eyebrow, line-clamp-2 title, full width on mobile/tablet) | `/assets/food-beverage-shopify-plus-agency/case-studies/nekter-juice-bar.webp` + link to `/case-studies/nekter-juice-bar` |
| 7 | FAQs Accordion (6 Q&As) | `SplitFaqSection` (2-column layout on white background, underlined items, circle-cross icons, first item open) | Interactive accessible accordion, FAQPage schema |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: Reused canonical assets across `public/assets/` for brand logos and maintenance service icon. Converted live Nekter case study image to WebP (`138 KB`).
- **Unique Assets Stored**:
  - `public/assets/food-beverage-shopify-plus-agency/hero/food-and-beverage-shopify-plus-agency.webp` (854x529, 100 KB WebP)
  - `public/assets/food-beverage-shopify-plus-agency/why-choose/why-choose-food-beverage-shopify-plus.webp` (469x500, 53 KB WebP)
  - `public/assets/food-beverage-shopify-plus-agency/case-studies/nekter-juice-bar.webp` (1142x840, 138 KB WebP)
  - `public/assets/food-beverage-shopify-plus-agency/services/store-setup-icon.svg`
  - `public/assets/food-beverage-shopify-plus-agency/services/app-maintenance-icon.svg`
  - `public/assets/food-beverage-shopify-plus-agency/services/migration-upload-icon.svg`
  - `public/assets/food-beverage-shopify-plus-agency/services/custom-theme-icon.svg`
  - `public/assets/food-beverage-shopify-plus-agency/services/white-label-icon.svg`
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**:
  - Hero: centered heading and paragraph, collage image with bottom overlap matching live site.
  - Brands: warm tan background (`#fbeed5`), left title and infinite logo slider with live brand logos.
  - Why Choose: 41.229% / 53.685% two-column split, image with `rounded-[10px]`.
  - Services: `linear-gradient(97deg, #E8F9EF 28.5%, #E6FAFD 91.82%)` background, split header, 2 columns of white cards with 1px border and hover `translateY(-10px)`, 7th card centered.
  - Process: centered title, 4 step items with gradient counter badges.
  - Case Studies: `#eff4ef` background, red dash `— CASE STUDIES` eyebrow, Nekter juice bar image, chips, and CTA.
  - FAQs: white background, 2-column split layout, underlined items, circle-cross icons.
- **Tablet (768px)**:
  - Hero: padding-top 150px.
  - Brands: centered title stacked above logo slider.
  - Why Choose: stacked image above text.
  - Services: left-aligned split header, single-column stacked cards.
  - Case Studies: full-width card.
  - FAQs: full-width accordion.
- **Mobile (390px)**:
  - All sections stack to 100% width cleanly.
  - Services header is left-aligned with proper vertical rhythm.
  - Accessible touch targets across all links and accordion triggers.
