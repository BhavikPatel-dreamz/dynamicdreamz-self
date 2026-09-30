# Visual Parity Capture: Kadence Theme Customization

- **Route**: `/kadence-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/kadence-theme-customization/`
- **Capture Date**: 2026-09-30 (remigrated to 100% exact live page structure)
- **Status**: Production-ready, exact live visual parity verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/theme_customize_hero.css`
  - `.theme-customize-hero` (background `#f7f4e9`, left/right column split, double eyebrow badges, image bottom-aligned)
- `/wp-content/themes/dynamicdreamz/assets/css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (12 brand partner logo carousel/grid)
- `/wp-content/themes/dynamicdreamz/assets/css/shopify_theme_customization_services.css`
  - `.theme-customization-services.yellow` (yellow background `#fafaf7`, 6 feature boxes with `#ad5151` icons)
  - `.theme-customization-services.green` (green background `#eff4ef`, 9 benefit boxes with `#ad5151` icons)
- `/wp-content/themes/dynamicdreamz/assets/css/delivery_section.css`
  - `.what-we-provide-sec.only-text` (2-column services grid, `#fafaf7` boxes, `#ad5151` stroke icons)
- `/wp-content/themes/dynamicdreamz/assets/css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4-column numbered framework cards `01`-`04`)
- `/wp-content/themes/dynamicdreamz/assets/css/projects_section.css`
  - `.our-work-sec.pt-0` (4-column portfolio showcase grid with 8 WordPress project cards and CTA button)
- `/wp-content/themes/dynamicdreamz/assets/css/client_review_section.css`
  - `.happy-client-sec` (video testimonial carousel with client stories)
- `/wp-content/themes/dynamicdreamz/assets/css/faqs_section.css`
  - `.faq-sec` (accordion items with independent entrance and interactive expansion)

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Kadence Theme Customization Service`) | `ThemeHeroSection` | Reused (`bg-[#f7f4e9]`, dual eyebrow badges) |
| 2 | Trusted by Leading Brands (12 brand logos) | `IndustryBrandsSection` | Reused (`industryBrandLogos`) |
| 3 | Features of Kadence Theme (6 feature boxes) | `ThemeCustomizationServicesSection` | Reused (`variant="yellow"`, `KadenceFeatureIcon`) |
| 4 | Our Kadence Theme Customization Services (6 service boxes) | `AgencyServicesSection` | Reused (`cardVariant="services-box"`, `KadenceServiceIcon`) |
| 5 | Benefits of Kadence Theme Customization (9 benefit boxes) | `ThemeCustomizationServicesSection` | Reused (`variant="green"`, `KadenceBenefitIcon`) |
| 6 | Why Choose Dynamic Dreamz (4 numbered cards) | `EvaluationFrameworkSection` | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` | Reused (`cardVariant="ourWorkRefresh"`, `columns={4}`) |
| 8 | Client Stories / Don't Just Take Our Word For It | `HappyClientSection` | Reused |
| 9 | Frequently Asked Questions (5 accordion items) | `SplitFaqSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / PP Neue Montreal (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9`.
- **Eyebrow Badges**: Dual eyebrow pills `Wordpress Agency` and `Theme Customization`.
- **Feature & Benefit Cards**: Rounded-20px white cards with borders `rgba(40,40,40,0.11)` and `#ad5151` themed SVG icons.
- **Service Boxes**: 2-column `#fafaf7` rounded cards (`repeat(2, 1fr)`) with 24x24 icon box, PP Neue Montreal Medium 20px h3 (`font-montreal-medium text-[20px] leading-[28.8px] font-normal`), and Montserrat 14px font-normal body (`text-[14px] leading-6 font-normal`), matching live `delivery_section.css`.
- **Why Choose Cards**: 4-column border grid with numbered pill badges (`01` to `04`).
- **Portfolio Showcase**: 4-column grid with 8 WordPress project cards (`Quite Events`, `Les Etoiles`, `Valents`, `Get Sunsights`, `Lipari Design`, `Nexventur`, `Awaken Media`, `Budget Maids`).
- **CTA Buttons**: Primary red button `#df4644` / `#cd3735` with hover/focus states.

---

## 4. Asset Deduplication & Integrity

- **Hero Artwork**: Reused canonical 601x474 WebP image at `/assets/kadence-theme-customization/hero/kadence-theme-customization-service-img.webp`.
- **Brands**: 12 client logos reused from canonical `public/assets/clients/` via `industryBrandLogos`.
- **Icons**: Clean inline SVG helper components (`KadenceFeatureIcon`, `KadenceServiceIcon`, `KadenceBenefitIcon`) matching live dimensions and `#ad5151` theme coloring without creating duplicate asset files.
- **Portfolio Artwork**: Reused 8 project assets from canonical `public/assets/our-work/projects/`:
  - `quite-events.webp`
  - `les-etoiles.webp`
  - `valents.webp`
  - `get-sunsights.webp`
  - `lipari-design.webp`
  - `nexventur.webp`
  - `awaken-media.webp`
  - `budget-maids.webp`
- **Mandatory Verification**:
  - Exact byte duplicate groups across `public/assets/**`: 0
  - Visual SVG duplicate groups across `public/assets/**`: 0
  - Pixel raster duplicate groups across `public/assets/**`: 0
