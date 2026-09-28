# Visual Parity Capture: Startup Theme Customization

- **Route**: `/startup-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/startup-theme-customization/`
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
  - `.theme-customize-hero` (background: `#f7f4e9`, padding-top: `91px`, overflow: hidden, dual CTAs: red primary button + transparent secondary button with border)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (brand trust section with left column heading "Trusted by \nLeading Brands" and 12 partner logos)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features` (split beige `#fbefd7` banner with left title/description block and right 8-item feature grid)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light` (3-column benefits grid with outline SVG icons, 7 benefit items)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0` (2-column services grid with red SVG icons, 6 service cards)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4-item numbered framework cards `01`–`04` with circular badge and white background)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css` and `services/main.css`
  - `.our-work-sec.pt-0` (Shopify portfolio project showcase, 4 columns desktop / 3 cols tablet / 2 cols small tablet / 1 col mobile, 8 project cards with arrow up hover button, bottom "View our work" CTA linking to `/our-work`)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec` (7 accordion items with active/expanded states, bold question titles, smooth collapse)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Startup Theme Customization Service`) | `ThemeHeroSection` | Reused (`theme-customize-hero` layout) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused (`brands.items`) |
| 3 | Features of Startup Theme (8 features) | `ThemeFeaturesBannerSection` | Reused (`theme-features` banner layout) |
| 4 | Benefits of Startup Theme Customization (7 cards) | `CityWhyChooseBoxesSection` | Reused (`city-page-why-choose-dynamic` 3-col layout) |
| 5 | Our Shopify Theme Customization Services (6 cards) | `AgencyServicesSection` | Reused (`services-box` variant) |
| 6 | Why Choose Dynamic Dreamz (4 numbered items) | `EvaluationFrameworkSection` | Reused (`how-to-choose-spa-sec` framework) |
| 7 | Snippets of Shopify Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` | Reused (`ourWorkRefresh` card variant, 4 cols, bottom CTA) |
| 8 | Frequently Asked Questions (7 accordion items) | `SplitFaqSection` | Reused (`faq-sec` accordion) |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Neue Montreal Medium (`font-montreal-medium text-ink`).
- **Hero Title**: `text-[50px] leading-[60px] font-medium` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9` with overflow hidden.
- **Hero Image**: Optimized 1224x948 WebP image (`startup-theme-customization-service-img.webp`, 69KB).
- **Hero CTAs**:
  - Primary: `Request a Quote` linking to `/request-quote` (`btn btn-red`)
  - Secondary: `View Startup on Shopify` linking to `https://themes.shopify.com/themes/startup/presets/startup` (`target="_blank"`)
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[28px] font-medium text-muted`.

---

## 4. Asset Deduplication & Integrity

- 12 brand partner logos reused directly from canonical `public/assets/clients/`:
  - `supertails.svg`, `eleven-eleven.svg`, `bellavita.svg`, `bombay-shirt-company.svg`, `popclub_co.svg`, `sri-sri-tattva.svg`, `tropicfeel.svg`, `renee.svg`, `royce-chocolate.svg`, `tego.svg`, `nekter-colored.svg`, `rare-rabbit.svg`
- 7 benefit outline SVGs reused from canonical `public/assets/dawn-theme-customization/benefits/`.
- 6 service outline SVGs reused from canonical `public/assets/` directories.
- All 8 Shopify portfolio projects reused from canonical paths:
  - `/assets/healthcare/portfolio/nufyx-protein-products.webp`
  - `/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/beauty-cosmetics/portfolio/luxxi-nails.webp`
  - `/assets/our-work/projects/eco-soul.webp`
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/holy-plantz.webp`
- Unique theme hero asset saved under `public/assets/startup-theme-customization/hero/`:
  - `hero/startup-theme-customization-service-img.webp` (1224x948 WebP, 69KB)
- Total duplicate hash groups across `public/assets/`: 0.
