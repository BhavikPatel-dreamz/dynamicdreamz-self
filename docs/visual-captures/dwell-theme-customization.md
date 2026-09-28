# Visual Parity Capture: Dwell Theme Customization

- **Route**: `/dwell-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/dwell-theme-customization/`
- **Capture Date**: 2026-09-28
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_customize_hero.css`
  - `.theme-customize-hero` (background: `#f7f4e9`, padding-top: `91px`, overflow: hidden, dual CTAs: red primary button "Request a Quote" + transparent secondary button "View Dwell on Shopify")
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (brand trust section with left column heading "Trusted by <br>Leading Brands" and right partner logos)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features` (split beige `#fbefd7` banner with left title/description block and right 8-item feature grid)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light` (3-column benefits grid with 24x24 outline SVG icons, 8 benefit items)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0` (2-column services grid with 24x24 red SVG icons `#AD5151`, 6 service cards)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4-item numbered framework cards `01`–`04` with circular badge and white background)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css` and `services/main.css`
  - `.our-work-sec.pt-0` (Shopify portfolio project showcase, 3 columns desktop / 2 cols tablet / 1 col mobile, 6 project cards with arrow up hover button, bottom "View our work" CTA linking to `/our-work`)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec` (6 accordion items with active/expanded states, bold question titles, smooth collapse)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Dwell Theme Customization Service`) | `ThemeHeroSection` | Reused (`theme-customize-hero` layout) |
| 2 | Trusted by Leading Brands (11 client logos) | `IndustryBrandsSection` | Reused (`brands.items`) |
| 3 | Features of Dwell Theme (8 features) | `ThemeFeaturesBannerSection` | Reused (`theme-features` banner layout) |
| 4 | Benefits of Dwell Theme Customization (8 cards) | `CityWhyChooseBoxesSection` | Reused (`city-page-why-choose-dynamic` 3-col layout) |
| 5 | Our Shopify Theme Customization Services (6 cards) | `AgencyServicesSection` | Reused (`services-box` variant) |
| 6 | Why Choose Dynamic Dreamz (4 numbered items) | `EvaluationFrameworkSection` | Reused (`how-to-choose-spa-sec` framework) |
| 7 | Snippets of Shopify Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` | Reused (`ourWorkRefresh` card variant, 3 cols, bottom CTA) |
| 8 | Frequently Asked Questions (6 accordion items) | `SplitFaqSection` | Reused (`faq-sec` accordion) |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9` with overflow hidden.
- **Hero Image**: Optimized 1224x948 WebP image (`dwell-theme-customization-service-img.webp`, 80KB).
- **Hero CTAs**:
  - Primary: `Request a Quote` linking to `/request-quote` (`btn btn-red`)
  - Secondary: `View Dwell on Shopify` linking to `https://themes.shopify.com/themes/dwell/presets/dwell` (`target="_blank"`)
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[28px] font-medium text-muted`.

---

## 4. Asset Deduplication & Integrity

- 11 brand partner logos reused directly from `public/assets/clients/`:
  - `supertails.svg`
  - `eleven-eleven.svg`
  - `bellavita.svg`
  - `bombay-shirt-company.svg`
  - `sri-sri-tattva.svg`
  - `tropicfeel.svg`
  - `renee.svg`
  - `royce-chocolate.svg`
  - `tego.svg`
  - `nekter-colored.svg`
  - `rare-rabbit.svg`
- 8 benefit icons (24x24 red outline `#AD5151` SVGs) reused from canonical paths:
  - `/assets/dawn-theme-customization/benefits/fully-customizable-store.svg`
  - `/assets/dawn-theme-customization/benefits/responsive-design.svg`
  - `/assets/dawn-theme-customization/benefits/unique-brand-identity.svg`
  - `/assets/dawn-theme-customization/benefits/improved-user-experience.svg`
  - `/assets/dawn-theme-customization/benefits/multiple-third-party-plugins.svg`
  - `/assets/dawn-theme-customization/benefits/higher-conversion-rates.svg`
  - `/assets/dawn-theme-customization/benefits/safe-and-secure-payments.svg`
  - `/assets/dawn-theme-customization/benefits/zero-maintenance-cost.svg`
- 6 service icons (24x24 red outline `#AD5151` SVGs) reused from canonical paths:
  - `/assets/services/shopify-development-in-bangalore/why-choose/customizable-themes.svg`
  - `/assets/dawn-theme-customization/services/custom-design-and-branding.svg`
  - `/assets/dawn-theme-customization/benefits/responsive-design.svg`
  - `/assets/dawn-theme-customization/services/advanced-features-integration.svg`
  - `/assets/dawn-theme-customization/services/performance-optimization.svg`
  - `/assets/services/upgrade-to-shopify-plus/why-choose/ongoing-support-and-maintenance.svg`
- All 6 Shopify portfolio projects reused from canonical paths:
  - `/assets/our-work/projects/atolea-jewelry.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/sims-direct.webp`
  - `/assets/our-work/projects/bonbon-lingerie.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/our-work/projects/weardiop.webp`
- Unique theme hero asset saved under `public/assets/dwell-theme-customization/hero/`:
  - `hero/dwell-theme-customization-service-img.webp` (1224x948 WebP, 80KB)
- Total duplicate hash groups across `public/assets/`: 0.
