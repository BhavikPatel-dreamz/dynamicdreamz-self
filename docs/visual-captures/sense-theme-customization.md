# Visual Parity Capture: Sense Theme Customization

- **Route**: `/sense-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/sense-theme-customization/`
- **Capture Date**: 2026-09-24
- **Status**: Production-ready remigration matching refreshed live theme layout (7 sections)
- **Viewports Inspected**:
  - Desktop: 1440x900 / 1200px+
  - Tablet: 768x1024 / 991px
  - Mobile: 390x844 / 575px

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_customize_hero.css`
  - `.theme-customize-hero`: Background `#f7f4e9`, padding-top 91px, padding-bottom 0 (tablet: 64px, mobile: 40px).
  - Left column: 51% width, red-dash eyebrow `Theme Customization` + `Shopify Platinum Partner` badge, H1 `font-size: 50px; line-height: 66px; font-weight: 700`, description paragraph `font-size: 16px; line-height: 28px; color: #535353`, dual button group (Primary red button `Request a Quote` linking to `/request-quote` and secondary black pill button `View Sense on Shopify` linking to `https://themes.shopify.com/themes/sense/presets/sense` with `target="_blank"`).
  - Right column: 43.182% width, bottom-aligned 1224x948 storefront preview image with dark blend mode.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec`: Marquee logo slider with 12 enterprise brands (`industryBrandLogos`), grayscale-to-color hover transition.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features`: Rounded container (`22px` border-radius, `border: 1px solid rgba(40,40,40,0.11)`).
  - Left column: `37%` width, beige background `#fbefd7`, H2 `Features of Sense Theme`, paragraph copy.
  - Right column: `63%` width, 2-column grid of 8 theme features (`Clean and Modern Design`, `Optimized for Speed`, `Built in Product Filtering`, `Customizable Header and Footer`, `Multiple Layout Options`, `Mobile Optimized`, `Size Chart`, `Slideshow`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light`: Background `#fafaf7`, 3-column boxed grid of 9 benefits with 24x24 outline SVG icons, rounded borders, and hover elevations.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0`: 2-column service cards with `cardVariant="services-box"`, 24x24 icon in top-left, title, description, and hover border highlight.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec`: 4-column numbered framework cards (`01`–`04` step indicators) matching live copy: `Expert Team`, `Proven Process`, `Ongoing Support`, `Client Focused Approach`.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec`: Sticky 2-column split FAQ layout (`SplitFaqSection`) containing all 5 live questions and answers.

> [!NOTE]
> The live Sense Theme Customization page does not include a portfolio showcase section (`our-work-sec`). The layout seamlessly flows from Why Choose Dynamic Dreamz directly into the FAQs, matching the live page exactly with 7 total sections.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Sense Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Features of Sense Theme (8 features) | `ThemeFeaturesBannerSection` | Reused |
| 4 | Benefits of Sense Theme Customization (9 boxed cards) | `CityWhyChooseBoxesSection` | Reused |
| 5 | Our Shopify Theme Customization Services (6 service cards) | `AgencyServicesSection` (`services-box`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4-step framework) | `EvaluationFrameworkSection` | Reused |
| 7 | Frequently Asked Questions (5 accordion items) | `SplitFaqSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / System Sans (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px] font-bold text-ink tracking-[-0.7px]` (desktop), `text-[40px] leading-[50px]` (tablet), `text-[30px] leading-[40px]` (mobile).
- **Hero Background**: `#f7f4e9` with mix-blend-darken storefront image.
- **Section Headings**: `text-[35px] leading-[48px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body & Subtitles**: `text-base leading-[28px] font-medium text-[#535353]`.
- **Brand Colors**: Red primary CTA `#ad5151` / `#cd3735`, black secondary pill button `#282828`.

---

## 4. Asset Deduplication & Integrity

- **Hero Asset**:
  - `public/assets/sense-theme-customization/hero/sense-theme-customization-service-img.webp` (WebP-optimized from live 1224x948 source, 69KB vs 788KB original PNG).
- **Brand Logos**: Reused 12 canonical brand logos from `public/assets/clients/` via `industryBrandLogos`.
- **Theme Benefits Icons**: Reused canonical 24x24 outline SVGs from `dawn-theme-customization/benefits/` and `expanse-theme-customization/benefits/`.
- **Services Icons**: Reused canonical service icons from `services/` and `dawn-theme-customization/services/`.
- **Total Asset Duplicates**: Verified 0 duplicate hash groups across all public assets.
