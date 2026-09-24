# Visual Parity Capture: Horizon Theme Customization

- **Route**: `/horizon-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/horizon-theme-customization/`
- **Capture Date**: 2026-09-24
- **Status**: Production Ready & Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_customize_hero.css`
  - `.theme-customize-hero`: background `#f7f4e9`, padding-top `91px`, overflow hidden.
  - Left column: `width: 51%` (desktop), `padding: 60px 0`, flex-column.
  - Eyebrow: `<span>Shopify Platinum Partner</span><span>Theme Customization</span>` with red dash `width: 30px`, `height: 2px` and dot separator.
  - H1: `Horizon Theme Customization Service`, `margin-bottom: 10px`, `50px` font size on desktop.
  - Paragraph: `text-base`, `line-height: 28px`, font-weight `500`.
  - Button group: flex row on desktop with `10px` gap (`Customize My Horizon Theme` red primary button, `View Horizon on Shopify` outline button to `https://themes.shopify.com/themes/horizon/presets/horizon`), switches to column on mobile `<=767px`.
  - Right column: `width: 43.182%`, bottom-aligned `1224x948` image (`horizon-theme-customization-service-img.webp`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - Title: `Trusted by <br>Leading Brands`.
  - 12 brand logos: Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee Cosmetics, Royce Chocolate, Tego, Nekter, Rare Rabbit.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - Container with rounded-22px border (`rgba(40,40,40,0.11)`).
  - Left block: `37%` width, `#fbefd7` beige background, `Features` eyebrow, `Features of Horizon Theme` H2 heading, and description.
  - Right block: `63%` width with 8 feature pill boxes (`Product Filtering and Sorting`, `Enhanced Search`, `Promo Banners`, `Quick View`, `Mobile Optimized`, `Flexible Cart Experience`, `Customizable Contact Form`, `Size Chart`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light`: Eyebrow `Benefits`, H2 `Benefits of Horizon Theme Customization`, 6 cards in a 3-column grid with custom 42x42 SVGs.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0`: Eyebrow `Our Services`, H2 `Our Horizon Theme Customization Services`, 6 cards in a 2-column grid (`services-box` with 24px SVG icons).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec`: Eyebrow `Why Us`, H2 `Why Choose Dynamic Dreamz`, 4 numbered cards (`01`-`04` circular badges in `#fbefd7` with brand-red numbers).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css`
  - `.our-work-sec.pt-0`: Eyebrow `Portfolio`, H2 `Snippets of Horizon Theme Customization Portfolio`, 6 portfolio showcase cards (`Bombay Shirt Company`, `Weardiop`, `Pagerie`, `Bonbon Lingerie`, `Sims Direct`, `Atolea Jewelry`) using `ourWorkRefresh` card style.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec`: Split 2-column layout (sticky left title `Frequently Asked Questions`, borderless right-column accordion with 1px border-b dividers and circle-cross icons). 10 accordion items. No CTA banner at the bottom before footer.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Horizon Theme Customization Service`) | `ThemeHeroSection` (`theme-customize-hero bg-[#f7f4e9]`) | Reused (extended) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features of Horizon Theme (Beige split container + 8 items) | `ThemeFeaturesBannerSection` | Shared Section |
| 4 | Benefits of Horizon Theme Customization (6 cards, 3 columns) | `CityWhyChooseBoxesSection` (`bg-[#fafaf7]`, `columns={3}`) | Reused |
| 5 | Our Horizon Theme Customization Services (6 cards, 2 columns) | `AgencyServicesSection` (`cardVariant="services-box"`, `pb-0`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4 numbered cards `01`-`04`) | `EvaluationFrameworkSection` (`how-to-choose-spa-sec`) | Reused |
| 7 | Snippets of Horizon Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` (`columns={4}`, `cardVariant="ourWorkRefresh"`, `hideCta={true}`) | Reused |
| 8 | Frequently Asked Questions (10 accordion items, 2-column split) | `SplitFaqSection` (`bg-[#fafaf7]`, 2-column sticky split layout) | Reused |

*(Note: Live site has no CTA banner after FAQ; page transitions directly to footer.)*

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / System sans (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Hero Background**: `#f7f4e9`.
- **Feature Left Box**: `#fbefd7`.
- **Benefits Background**: `#fafaf7` / `bg-light`.
- **Brand Colors**: Red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- Hero image:
  - `/assets/horizon-theme-customization/hero/horizon-theme-customization-service-img.webp` (1224x948, 113 KB WebP)
- 12 brand partner logos reused directly from `public/assets/clients/`:
  - `supertails.svg`
  - `eleven-eleven.svg`
  - `bellavita.svg`
  - `bombay-shirt-company.svg`
  - `popclub.svg`
  - `srisri-tattva.svg`
  - `tropicfeel.svg`
  - `renee.svg`
  - `royce-chocolate.svg`
  - `tego.svg`
  - `nekter.svg`
  - `rare-rabbit.svg`
- 6 Benefit SVGs:
  - `/assets/horizon-theme-customization/benefits/nested-theme-blocks.svg`
  - `/assets/horizon-theme-customization/benefits/product-discovery.svg`
  - `/assets/horizon-theme-customization/benefits/product-merchandising.svg`
  - `/assets/horizon-theme-customization/benefits/conversion-features.svg`
  - `/assets/horizon-theme-customization/benefits/flexible-cart-experience.svg`
  - `/assets/horizon-theme-customization/benefits/modern-brand-styling.svg`
- 6 Service SVGs:
  - `/assets/horizon-theme-customization/services/horizon-setup-configuration.svg`
  - `/assets/horizon-theme-customization/services/branding-visual-customization.svg`
  - `/assets/horizon-theme-customization/services/custom-sections-theme-blocks.svg`
  - `/assets/horizon-theme-customization/services/pdp-collection-customization.svg`
  - `/assets/horizon-theme-customization/services/apps-metafields-integrations.svg`
  - `/assets/horizon-theme-customization/services/performance-qa-support.svg`
- 6 Portfolio Projects reused from canonical existing assets:
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/weardiop.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/our-work/projects/bonbon-lingerie.webp`
  - `/assets/our-work/projects/sims-direct.webp`
  - `/assets/our-work/projects/atolea-jewelry.webp`
- Total Duplicate Hash Groups across `public/assets/`: 0.
