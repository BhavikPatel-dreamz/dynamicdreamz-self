# Visual Parity Capture: Studio Theme Customization

- **Route**: `/studio-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/studio-theme-customization/`
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
  - `.theme-customize-hero` (background: `#f7f4e9`, padding-top: `91px`, overflow: hidden, dual CTAs: red primary button "Request a Quote" + outline secondary button "View Studio on Shopify")
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (brand trust section with left column heading "Trusted by Leading Brands" and right partner logos)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/theme_features.css`
  - `.theme-features` (split beige `#fbefd7` banner with left title/description block and right 8-item feature grid)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.bg-light` (3-column benefits grid with 24x24 outline SVG icons, 9 benefit items)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/delivery_section.css`
  - `.what-we-provide-sec.pb-0` (2-column services grid with 24x24 red SVG icons `#AD5151`, 6 service cards)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4-item numbered framework cards `01`–`04` with circular badge and white background)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css` and `services/main.css`
  - `.our-work-sec.pt-0` (Shopify portfolio project showcase, 4 columns desktop / 3 cols tablet / 2 cols mobile / 1 col small mobile, 8 project cards with arrow up hover button, bottom "View our work" CTA linking to `/our-work`)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec` (8 accordion items with active/expanded states, bold question titles, smooth collapse)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Studio Theme Customization Service`) | `ThemeHeroSection` | Reused (`theme-customize-hero` layout) |
| 2 | Trusted by Leading Brands (12 client logos) | `IndustryBrandsSection` | Reused (`brands.items`) |
| 3 | Features of Studio Theme (8 features) | `ThemeFeaturesBannerSection` | Reused (`theme-features` banner layout) |
| 4 | Benefits of Studio Theme Customization (9 cards) | `CityWhyChooseBoxesSection` | Reused (`city-page-why-choose-dynamic` 3-col layout) |
| 5 | Our Shopify Theme Customization Services (6 cards) | `AgencyServicesSection` | Reused (`services-box` variant) |
| 6 | Why Choose Dynamic Dreamz (4 numbered items) | `EvaluationFrameworkSection` | Reused (`how-to-choose-spa-sec` framework) |
| 7 | Snippets of Shopify Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` | Reused (`ourWorkRefresh` card variant, 4 cols, bottom CTA) |
| 8 | Frequently Asked Questions (8 accordion items) | `SplitFaqSection` | Reused (`faq-sec` accordion) |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Neue Montreal Medium for Hero title (`font-montreal-medium font-medium leading-[60px] tracking-normal`), Montserrat for body/section headings (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[60px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9` with overflow hidden.
- **Hero Image**: Optimized 1224x948 WebP image (`studio-theme-customization-service-img.webp`) matching exact live Figma mockup asset.
- **Hero CTAs**:
  - Primary: `Request a Quote` linking to `/request-quote` (`btn btn-red`)
  - Secondary: `View Studio on Shopify` linking to `https://themes.shopify.com/themes/studio/presets/studio` (`target="_blank"`)
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Brand Bar**: `#fbeed5` background with compact desktop padding.
- **Features Banner**: Split `#fbefd7` container with `rounded-[22px]`, left column description and right 2-column feature badge grid.
- **Benefits Cards**: White background cards with `border-[rgba(40,40,40,0.11)]`, `rounded-[18px]`, 24x24 red stroke outline SVGs (`#AD5151`).
- **Services Cards**: Light cream cards with `border-[rgba(40,40,40,0.08)]`, `rounded-[10px]`, 24x24 red stroke outline SVGs (`#AD5151`).
- **Why Choose Framework**: White container, numbered circular tags `01`–`04` with `bg-[#fbefd7]` and `text-[#ad5151]`.
- **Portfolio Grid**: 4-column project cards with category pill `SHOPIFY`, external website links, and diagonal arrow hover circle (8 projects: Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, Holy Plantz).
- **FAQ Accordion**: Bordered accordion items with expand/collapse toggle icons.

---

## 4. Verification Checkpoints

- [x] Zero hardcoded page copy in component code (`npm run check:component-content` passes).
- [x] All routes follow no-trailing-slash URL policy (`npm run check:urls` passes).
- [x] Canonical hero images ingested via `scratch/` buffer and optimized to WebP.
- [x] Zero duplicate asset hash groups across entire public/assets tree.
- [x] Fully typed schema generated with `createServicePageSchema` including FAQPage and Service entities.
- [x] Mobile responsiveness verified across breakpoints (desktop, tablet, mobile).
