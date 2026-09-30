# Visual Parity Capture: Neve Theme Customization

- **Route**: `/neve-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/neve-theme-customization/`
- **Capture Date**: 2026-09-30
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `theme_customize_hero.css`: `.theme-customize-hero` (background `#f7f4e9`, double eyebrow badges `["Wordpress Agency", "Theme Customization"]`, padding `pt-[91px] pb-0`, left column `w-[51%]`, right column `w-[43.182%]`, clean bottom image alignment without blend modes).
- `trusted_by_leading_brands_section.css`: `.our-client-sec` (10 global brand logos: Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nékter, Circuit City).
- `shopify_theme_customization_services.css`:
  - `.theme-customization-services.yellow`: 6 features of Neve theme with `#ad5151` vector SVG icons (Lightweight & Fast, Mobile-Optimized, Customizable Header & Footer, WooCommerce Ready, Page Builder Compatibility, SEO-Friendly).
  - `.theme-customization-services.green`: 8 benefits of Neve theme customization with `#ad5151` vector SVG icons (Fully Customizable Store, Responsive Design, Unique Brand Identity, Improved User Experience, Multiple Third-Party Plugins, Higher Conversion Rates, Safe and Secure Payments, Minimal Maintenance Cost).
- `delivery_section.css`: `.what-we-provide-sec.only-text` (6 WordPress theme customization services in 2-column layout: Theme Installation, Custom Design and Branding, Responsive Design, Advanced Features Integration, Performance Optimization, Ongoing Support and Maintenance).
- `how_to_choose_the_right_shopify_plus_agency_sec.css`: `.how-to-choose-spa-sec` (4 numbered framework cards `01`–`04`: Expert Team, Proven Process, Ongoing Support, Client-Focused Approach).
- `projects_section.css`: `.our-work-sec.pt-0` (8 WordPress portfolio projects: Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids with `ourWorkRefresh` card variant and "View our work" CTA).
- `client_review_section.css`: `.happy-client-sec` (video testimonial carousel).
- `faqs_section.css`: `.faq-sec` (6 accordion items).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Neve Theme Customization Service`) | `ThemeHeroSection` (`theme-customize-hero`, `#f7f4e9`) | Reused |
| 2 | Client Brands (`Trusted by Leading Brands`) | `IndustryBrandsSection` (10 brand logos) | Reused |
| 3 | Features of Neve Theme (6 items) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused |
| 4 | Our WordPress Theme Customization Services (6 items) | `AgencyServicesSection` (`cardVariant="services-box"`, 2 columns) | Reused |
| 5 | Benefits of Neve Theme Customization (8 items) | `ThemeCustomizationServicesSection` (`variant="green"`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `EvaluationFrameworkSection` | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 items) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, 4 columns) | Reused |
| 8 | Client Stories (`Don't Just Take Our Word For It`) | `HappyClientSection` | Reused |
| 9 | Frequently Asked Questions (6 items) | `SplitFaqSection` (`idPrefix="neve-faq"`) | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px] tracking-[-0.7px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Hero Background**: `#f7f4e9` without dark blend modes (`mix-blend-darken` removed to prevent image discoloration).
- **Hero Image**: Clean alpha-transparent 601x474 WebP image (`/assets/neve-theme-customization/hero/neve-theme-customization-service-img.webp`).
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-medium text-muted` (hero), `text-base leading-[27px]` (cards).
- **Brand Colors**: Red primary CTA `#df4644` / `#cd3735`, `#ad5151` vector icon accents.

---

## 4. Asset Deduplication & Integrity

- 10 brand logos reused directly from `public/assets/clients/` (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nelter, Circuit City).
- Vector icons reused from `AstraBenefitIcon`, `AstraServiceIcon`, `AstraFeatureIcon`, and `NeveFeatureIcon`.
- 8 portfolio project cards reused from canonical paths in `public/assets/our-work/projects/`:
  - `quite-events.webp`
  - `les-etoiles.webp`
  - `valents.webp`
  - `get-sunsights.webp`
  - `lipari-design.webp`
  - `nexventur.webp`
  - `awaken-media.webp`
  - `budget-maids.webp`
- Single canonical hero image under `public/assets/neve-theme-customization/hero/neve-theme-customization-service-img.webp` (601x474 WebP).
- Total duplicate hash groups across `public/assets/`: 0.
