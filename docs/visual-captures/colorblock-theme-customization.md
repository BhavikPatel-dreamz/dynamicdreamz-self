# Visual Parity Capture: Colorblock Theme Customization

- **Route**: `/colorblock-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/colorblock-theme-customization/`
- **Capture Date**: 2026-09-30 (Remigrated to match live site flexible template refresh)
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_customize_hero.css`
  - `.theme-customize-hero` (background: `#f7f4e9`, padding-top: `91px`, overflow: `hidden`)
  - `.wrapper`: flex layout, left-col 51% width with eyebrow badges, H1, description, button group ("Request a Quote" primary red button and "View Colorblock on Shopify" outline button); right-col with 1224x948 theme screenshot bottom-aligned with `mix-blend-mode: darken`
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec`: `.wrapper.indian_brand` logo track displaying 12 leading client brands
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features`: 2-column feature block banner with light cream/yellow background (`#fbefd7`), left block with eyebrow, H2, and description; right block with 8 feature titles in a 2x4 bordered grid
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light`: background `#fafaf7`, 3-column grid of white cards with 18px rounded borders, red stroke icons (24x24), title, and description (7 benefit cards)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0`: 2-column service card grid with 10px rounded corners, `#fafaf7` background, 24x24 red stroke icons, title, and description (5 service cards)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec`: split heading + 4 evaluation framework columns with `#fbefd7` circular step badges (`01`, `02`, `03`, `04`), title, and description
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css`
  - `.our-work-sec.pt-0`: split heading, 4-column project grid with 8 portfolio project cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, Holy Plantz) and "View our work" CTA button linking to `/our-work`
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec`: centered heading + accordion with 7 questions and answers

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`theme-customize-hero`: `Colorblock Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands (`our-client-sec`: 12 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features of Colorblock Theme (`theme-features`: 8 feature items banner) | `ThemeFeaturesBannerSection` | Reused |
| 4 | Benefits of Colorblock Theme Customization (`city-page-why-choose-dynamic`: 7 cards) | `CityWhyChooseBoxesSection` | Reused |
| 5 | Our Shopify Theme Customization Services (`what-we-provide-sec`: 5 cards) | `AgencyServicesSection` (`cardVariant="services-box"`, `columns={2}`) | Reused |
| 6 | Why Choose Dynamic Dreamz (`how-to-choose-spa-sec`: 4 numbered items) | `EvaluationFrameworkSection` | Reused |
| 7 | Snippets of Shopify Theme Customization Portfolio (`our-work-sec`: 8 projects + CTA) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`) | Reused |
| 8 | Frequently Asked Questions (`faq-sec`: 7 accordion items) | `SplitFaqSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9` cream background.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-7 font-medium text-muted` (hero), `text-sm font-medium leading-[22px] text-[#535353]` (cards).
- **Hero Image**: 1224x948 optimized WebP (`colorblock-theme-customization-service-img.webp`, 96.8 KB, mix-blend-mode: darken).
- **Brand Colors**: Red primary CTA `#df4644` / `#cd3735`, border accent `#AD5151`, background `#fafaf7` and `#fbefd7`.

---

## 4. Asset Deduplication & Integrity

- 12 brand partner logos reused directly from `public/assets/clients/` via `industryBrandLogos`:
  - `supertails.svg`
  - `eleven-eleven.svg`
  - `bella-vita.svg`
  - `bombay-shirt-company.svg`
  - `popclub.svg`
  - `sri-sri-tattva.svg`
  - `tropicfeel.svg`
  - `renee.svg`
  - `royce-chocolate.svg`
  - `tego.svg`
  - `nelter.svg`
  - `rare-rabbit.svg`
- 7 benefit icons reused from canonical paths:
  - `/assets/dawn-theme-customization/benefits/fully-customizable-store.svg`
  - `/assets/dawn-theme-customization/benefits/unique-brand-identity.svg`
  - `/assets/dawn-theme-customization/benefits/improved-user-experience.svg`
  - `/assets/dawn-theme-customization/benefits/multiple-third-party-plugins.svg`
  - `/assets/dawn-theme-customization/benefits/higher-conversion-rates.svg`
  - `/assets/dawn-theme-customization/benefits/safe-and-secure-payments.svg`
  - `/assets/dawn-theme-customization/benefits/zero-maintenance-cost.svg`
- 5 service icons reused from canonical paths:
  - `/assets/services/shopify-development-in-bangalore/why-choose/customizable-themes.svg`
  - `/assets/dawn-theme-customization/services/custom-design-and-branding.svg`
  - `/assets/dawn-theme-customization/services/advanced-features-integration.svg`
  - `/assets/dawn-theme-customization/services/performance-optimization.svg`
  - `/assets/services/upgrade-to-shopify-plus/why-choose/ongoing-support-and-maintenance.svg`
- 8 Shopify portfolio project screenshots reused from canonical paths:
  - `/assets/healthcare/portfolio/nufyx-protein-products.webp`
  - `/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/beauty-cosmetics/portfolio/luxxi-nails.webp`
  - `/assets/our-work/projects/eco-soul.webp`
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/holy-plantz.webp`
- Hero theme preview asset:
  - `public/assets/colorblock-theme-customization/hero/colorblock-theme-customization-service-img.webp` (1224x948 WebP, 96.8 KB, converted from live 800KB PNG via sharp buffer).
- Total duplicate hash groups across `public/assets/`: 0.
