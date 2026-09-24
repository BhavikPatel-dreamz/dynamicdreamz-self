# Visual Parity Capture: Dawn Theme Customization

- **Route**: `/dawn-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/dawn-theme-customization/`
- **Capture Date**: 2026-09-24 (Remigrated and styled to exact live-site parity)
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_customize_hero.css`
  - `.theme-customize-hero` (Background `#f7f4e9`; 51% left-col with eyebrow array `["Shopify Platinum Partner", "Theme Customization"]`, `h1` "Dawn Theme Customization Service", paragraph description, dual CTA buttons: primary "Request a Quote" `/request-quote` and secondary external outline "View Dawn on Shopify"; 43.182% right-col with bottom-aligned 1224x948 theme image with `mix-blend-mode: darken`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (Background `#fbeed5`; Brands marquee with "Trusted by Leading Brands" and 12 partner logos: Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce, Tego, Nekter, Rare Rabbit).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features` (Split 2-column rounded card: 37% left column `#fbefd7` with eyebrow "Features", H2 "Features of Dawn Theme", description; 63% right column with 8 theme feature titles: Minimal Design Aesthetic, Built for Speed, Flexible Content Sections, High-Resolution Media Support, Mobile-Optimized, SEO-Friendly, Color Swatches, Size Chart).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light` (Benefits 3-column grid with 9 cards on `#fafaf7` light cream background, each with 24x24 outline SVG in `#AD5151`, H3 title, and description).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec pb-0` (2-column services grid with 6 cards on `#fafaf7` background with 24x24 outline icons, H3 titles, and description text).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4-column evaluation framework with circular `01`, `02`, `03`, `04` badges in `#fbefd7`, H3 titles: Expert Team, Proven Process, Ongoing Support, Client-Focused Approach).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css`
  - `.our-work-sec pt-0` (4-column portfolio showcase grid on desktop / 2-column on tablet / 1-column on mobile with 8 Shopify projects, category badges, hover arrow circle buttons, and centered bottom "View our work" CTA button).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec` (Two-column split flex layout on `#fafaf7` background: 41% left column with sticky top-20px H2 "Frequently Asked Questions", and 57% right column with borderless underlined accordion items, circular +/- expander icon, and 8 FAQ items).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Dawn Theme Customization Service`) | `ThemeHeroSection` (`bg-[#f7f4e9]`, mix-blend-darken) | Reused (`src/components/sections/theme-customization/theme-hero-section.tsx`) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` (`bg-[#fbeed5]`) | Reused (`src/components/sections/industry/industry-brands-section.tsx`) |
| 3 | Features of Dawn Theme (8 feature items) | `ThemeFeaturesBannerSection` (left `#fbefd7`, 8 items) | Reused (`src/components/sections/theme-customization/theme-features-banner-section.tsx`) |
| 4 | Benefits of Dawn Theme Customization (9 cards) | `CityWhyChooseBoxesSection` (`bg-[#fafaf7]`, 3 columns) | Reused (`src/components/sections/city-why-choose-boxes-section.tsx`) |
| 5 | Our Shopify Theme Customization Services (6 cards) | `AgencyServicesSection` (`cardVariant="services-box"`, 2 columns, `pb-0`) | Reused (`src/components/sections/agency-services-section.tsx`) |
| 6 | Why Choose Dynamic Dreamz (4 items, numbered 01-04) | `EvaluationFrameworkSection` (4 columns, circular badges) | Reused (`src/components/sections/shopify-plus-agency/evaluation-framework-section.tsx`) |
| 7 | Snippets of Shopify Theme Customization Portfolio (8 projects + CTA) | `PortfolioShowcaseSection` (`columns={4}`, `cardVariant="ourWorkRefresh"`, `pt-0`) | Reused (`src/components/sections/portfolio-showcase-section.tsx`) |
| 8 | Frequently Asked Questions (8 accordion items) | `SplitFaqSection` (`className="faq-sec"`, 2-column sticky split layout) | Reused (`src/components/sections/split-faq-section.tsx`) |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-7 font-medium text-muted` (hero), `text-base leading-[27px]` (section intro), `text-sm leading-[22px]` (cards).
- **Hero Graphic**: 1224x948 optimized WebP (`dawn-theme-customization-service-img.webp`, 69.9KB).
- **Colors**:
  - Hero Background: `#f7f4e9`
  - Brands Background: `#fbeed5`
  - Features Left Block: `#fbefd7`
  - Benefits & Services Cards Background: `#fafaf7`
  - Primary Red: `#ad5151` / `#df4644`
  - Border Lines: `rgba(40, 40, 40, 0.11)` / `#d9d9d9`

---

## 4. Asset Deduplication & Integrity

- **12 Brand Partner Logos** reused directly from `public/assets/clients/`:
  - `supertails.svg`
  - `eleven-eleven.svg`
  - `bellavita.svg`
  - `bombay-shirt-company.svg`
  - `popclub_co.svg`
  - `sri-sri-tattva.svg`
  - `tropicfeel.svg`
  - `renee.svg`
  - `royce-chocolate.svg`
  - `tego.svg`
  - `nekter-colored.svg`
  - `rare-rabbit.svg`
- **9 Benefit Icons** saved under `public/assets/dawn-theme-customization/benefits/`:
  - `fully-customizable-store.svg`
  - `responsive-design.svg` (shared with service 3)
  - `unique-brand-identity.svg`
  - `improved-user-experience.svg`
  - `multiple-third-party-plugins.svg`
  - `higher-conversion-rates.svg`
  - `mobile-optimization.svg`
  - `safe-and-secure-payments.svg`
  - `zero-maintenance-cost.svg`
- **6 Service Icons**:
  - `Theme Installation`: `/assets/services/shopify-development-in-bangalore/why-choose/customizable-themes.svg` (canonical reuse)
  - `Custom Design and Branding`: `/assets/dawn-theme-customization/services/custom-design-and-branding.svg`
  - `Responsive Design`: `/assets/dawn-theme-customization/benefits/responsive-design.svg` (canonical reuse)
  - `Advanced Features Integration`: `/assets/dawn-theme-customization/services/advanced-features-integration.svg`
  - `Performance Optimization`: `/assets/dawn-theme-customization/services/performance-optimization.svg`
  - `Ongoing Support and Maintenance`: `/assets/services/upgrade-to-shopify-plus/why-choose/ongoing-support-and-maintenance.svg` (canonical reuse)
- **All 8 Shopify Portfolio Screenshots** reused from canonical project paths:
  - `/assets/healthcare/portfolio/nufyx-protein-products.webp`
  - `/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/beauty-cosmetics/portfolio/luxxi-nails.webp`
  - `/assets/our-work/projects/eco-soul.webp`
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/holy-plantz.webp`
- **Unique Theme Hero Graphic**:
  - Saved under `public/assets/dawn-theme-customization/hero/dawn-theme-customization-service-img.webp` (1224x948 WebP, 69.9KB).
- **Asset Duplicate Audit**:
  - `node scripts/check-asset-duplicates.mjs`: Total duplicate content hash groups across all 1742 assets: 0.
