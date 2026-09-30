# Visual Parity Capture: Kubio Theme Customization

- **Route**: `/kubio-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/kubio-theme-customization/`
- **Capture Date**: 2026-09-30
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/theme_customize_hero.css`
  - `.theme-customize-hero` (hero layout, background `#f7f4e9`, double eyebrow badges `["Wordpress Agency", "Theme Customization"]`, 50%/50% split, bottom-aligned 1219x948 WebP image without `mix-blend-darken`)
- `/wp-content/themes/dynamicdreamz/assets/css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (split layout: left heading `Trusted by \nLeading Brands`, right infinite logo track with 10 global brand logos)
- `/wp-content/themes/dynamicdreamz/assets/css/shopify_theme_customization_services.css`
  - `.theme-customization-services.yellow` (7 Features cards with `#AD5151` icons, `#FCF6EC` badge styling, rounded card borders)
  - `.theme-customization-services.green` (9 Benefits cards with `#AD5151` icons, `#E9F9F0` badge styling, rounded card borders)
- `/wp-content/themes/dynamicdreamz/assets/css/delivery_section.css`
  - `.what-we-provide-sec.only-text` (2-column services box layout with `#AD5151` inline SVGs, title, and descriptive text)
- `/wp-content/themes/dynamicdreamz/assets/css/how_to_choose_the_right_shopify_plus_agency_sec.css`
  - `.how-to-choose-spa-sec` (4 numbered framework items `01` - `04` with title and description)
- `/wp-content/themes/dynamicdreamz/assets/css/projects_section.css`
  - `.our-work-sec.pt-0` (4-column grid of 8 WordPress project cards, rounded corners, category badge `WORDPRESS`, title, diagonal arrow link, and centered `View our work` CTA button linking to `/our-work`)
- `/wp-content/themes/dynamicdreamz/assets/css/client_review_section.css`
  - `.happy-client-sec` (video testimonial carousel with client stories and reviewer ratings)
- `/wp-content/themes/dynamicdreamz/assets/css/faqs_section.css`
  - `.faq-sec` (5 accordion items with expand/collapse interactive behavior)

---

## 2. Page Section Order & Component Mapping (9 Sections)

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`theme-customize-hero`) | `ThemeHeroSection` (bg `#f7f4e9`, double eyebrow badges, 1219x948 WebP, no blend mode) | Reused |
| 2 | Trusted by Leading Brands (`our-client-sec`) | `IndustryBrandsSection` (10 global brand logos) | Reused |
| 3 | Features of Kubio Theme (`theme-customization-services yellow`) | `ThemeCustomizationServicesSection` (`variant="yellow"`, 7 feature items) | Reused |
| 4 | Our WordPress Theme Customization Services (`what-we-provide-sec only-text`) | `AgencyServicesSection` (`cardVariant="services-box"`, 2 columns, 6 services) | Reused |
| 5 | Benefits of Kubio Theme Customization (`theme-customization-services green`) | `ThemeCustomizationServicesSection` (`variant="green"`, 9 benefit items) | Reused |
| 6 | Why Choose Dynamic Dreamz (`how-to-choose-spa-sec`) | `EvaluationFrameworkSection` (4 numbered framework items `01`–`04`) | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (`our-work-sec pt-0`) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, 4 columns, 8 projects, "View our work" CTA) | Reused |
| 8 | Client Stories (`happy-client-sec`) | `HappyClientSection` (client video testimonial carousel) | Reused |
| 9 | Frequently Asked Questions (`faq-sec`) | `SplitFaqSection` (`idPrefix="kubio-faq"`, 5 accordion items) | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 1219x948 WebP image (`kubio-theme-customization-service-img.webp`) with clean alpha transparency, no `mix-blend-darken`.
- **Brand Colors**: `#f7f4e9` hero background, `#AD5151` icon stroke/fill, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 10 brand partner logos reused directly from `public/assets/clients/`:
  - `ranavat.svg`
  - `prolash.svg`
  - `tropicfeel.svg`
  - `perfect-locks.svg`
  - `bombay-shirt-company.svg`
  - `kayfi.svg`
  - `simsdirect.svg`
  - `kvaser.svg`
  - `nelter.svg`
  - `circuit-city.svg`
- 8 portfolio project images reused from canonical `public/assets/our-work/projects/`:
  - `quite-events.webp`
  - `les-etoiles.webp`
  - `valents.webp`
  - `get-sunsights.webp`
  - `lipari-design.webp`
  - `nexventur.webp`
  - `awaken-media.webp`
  - `budget-maids.webp`
- Reused modular inline SVG components in `src/components/sections/kubio-theme-customization/kubio-icons.tsx`.
- Total duplicate hash groups across `public/assets/`: 0.
