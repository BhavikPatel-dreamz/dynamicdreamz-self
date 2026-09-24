# Visual Parity Capture: Expanse Theme Customization

- **Route**: `/expanse-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/expanse-theme-customization/`
- **Capture Date**: 2026-09-24 (Remigrated and styled to exact live-site parity)
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
  - H1: `Expanse Theme Customization Service`, `margin-bottom: 10px`, `50px` font size on desktop.
  - Paragraph: `text-base`, `line-height: 28px`, font-weight `500`.
  - Button group: flex row on desktop with `10px` gap (`Request a Quote` red primary button, `View Expanse on Shopify` outline button to `https://themes.shopify.com/themes/expanse/presets/expanse`), switches to column on mobile `<=767px`.
  - Right column: `width: 43.182%`, bottom-aligned `1224x948` image (`expanse-theme-customization-service-img.webp` with `mix-blend-mode: darken`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - Title: `Trusted by Leading Brands`.
  - 12 brand logos: Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee Cosmetics, Royce Chocolate, Tego, Nekter, Rare Rabbit.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - Container with rounded-22px border (`rgba(40,40,40,0.11)`).
  - Left block: `37%` width, `#fbefd7` beige background, `Features` eyebrow, `Features of Expanse Theme` H2 heading, and description.
  - Right block: `63%` width with 8 feature items (`Product Filtering`, `Customizable Homepage Sections`, `Product Quick View`, `Wide Layout Design`, `Product Badges`, `Optimized for Large Inventories`, `Collection Page Navigation`, `Product Filtering and Sorting`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light`: Eyebrow `Benefits`, H2 `Benefits of Expanse Theme Customization`, 9 cards in a 3-column grid with custom 24x24 outline SVGs.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0`: Eyebrow `Our Services`, H2 `Our Shopify Theme Customization Services`, 6 cards in a 2-column grid (`services-box` with 24px SVG icons).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec`: Eyebrow `Why Us`, H2 `Why Choose Dynamic Dreamz`, 4 numbered cards (`01`-`04` circular badges in `#fbefd7` with brand-red numbers).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css`
  - `.our-work-sec.pt-0`: Eyebrow `Portfolio`, H2 `Snippets of Shopify Theme Customization Portfolio`, 2 portfolio showcase cards (`The Whisky Stock`, `Podrum`) using `ourWorkRefresh` card style, with centered bottom `View our work` CTA button.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec`: Split 2-column layout (sticky left title `Frequently Asked Questions`, borderless right-column accordion with 1px border-b dividers and circle-cross icons). 6 accordion items.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Expanse Theme Customization Service`) | `ThemeHeroSection` (`theme-customize-hero bg-[#f7f4e9]`) | Reused (extended) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` (`bg-[#FBEED5]`) | Reused |
| 3 | Features of Expanse Theme (Beige split container + 8 items) | `ThemeFeaturesBannerSection` | Reused |
| 4 | Benefits of Expanse Theme Customization (9 cards, 3 columns) | `CityWhyChooseBoxesSection` (`bg-[#fafaf7]`, `columns={3}`) | Reused |
| 5 | Our Shopify Theme Customization Services (6 cards, 2 columns) | `AgencyServicesSection` (`cardVariant="services-box"`, `pb-0`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4 numbered cards `01`-`04`) | `EvaluationFrameworkSection` (`how-to-choose-spa-sec`) | Reused |
| 7 | Snippets of Shopify Theme Customization Portfolio (2 projects + CTA) | `PortfolioShowcaseSection` (`columns={4}`, `cardVariant="ourWorkRefresh"`) | Reused |
| 8 | Frequently Asked Questions (6 accordion items, 2-column split) | `SplitFaqSection` (`bg-[#fafaf7]`, 2-column sticky split layout) | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / System sans (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Hero Background**: `#f7f4e9`.
- **Feature Left Box**: `#fbefd7`.
- **Benefits Background**: `#fafaf7`.
- **Brand Colors**: Red primary CTA `#ad5151` / `#df4644`.

---

## 4. Asset Deduplication & Integrity

- Hero image:
  - `/assets/expanse-theme-customization/hero/expanse-theme-customization-service-img.webp` (1224x948, 73 KB WebP, converted from live 498KB PNG)
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
- 9 Benefit Icons:
  - 8 outline SVGs canonically reused from `public/assets/dawn-theme-customization/benefits/`
  - 1 unique outline SVG saved under `public/assets/expanse-theme-customization/benefits/multiple-third-party-apps.svg`
- 6 Service Icons canonically reused:
  - `Theme Installation`: `/assets/services/shopify-development-in-bangalore/why-choose/customizable-themes.svg`
  - `Custom Design and Branding`: `/assets/dawn-theme-customization/services/custom-design-and-branding.svg`
  - `Responsive Design`: `/assets/dawn-theme-customization/benefits/responsive-design.svg`
  - `Advanced Features Integration`: `/assets/dawn-theme-customization/services/advanced-features-integration.svg`
  - `Performance Optimization`: `/assets/dawn-theme-customization/services/performance-optimization.svg`
  - `Ongoing Support and Maintenance`: `/assets/services/upgrade-to-shopify-plus/why-choose/ongoing-support-and-maintenance.svg`
- 2 Portfolio Projects:
  - `/assets/our-work/projects/the-whisky-stock.webp`
  - `/assets/our-work/projects/podrum.webp`
- Total duplicate hash groups across `public/assets/`: 0.
