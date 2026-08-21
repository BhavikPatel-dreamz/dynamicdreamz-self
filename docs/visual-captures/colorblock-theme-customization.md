# Visual Parity Capture: Colorblock Theme Customization

- **Route**: `/colorblock-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/colorblock-theme-customization/`
- **Capture Date**: 2026-08-21
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.theme-customization-service-sec` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, bottom-aligned hero graphic, internal CTA "request a quote" linking to `/request-quote`)
  - `.three_col_icon_sec` (features section with 8 icon cards with descriptions and rounded-15px borders `#efefef`)
  - `.shopify-customization-services-sec` (benefits grid with gradient background, white cards, hover gradient border, 7 cards)
  - `.what-we-provide-sec` (2-column services grid, 10px rounded cards with hover gradient border, 5 cards)
  - `.why_dynamic_dreamz_sec.two-column-icon-text-bg` (2-column horizontal icon-text list with borders `rgba(0,0,0,0.05)`)
  - `.our-work-sec` (Shopify portfolio project showcase with 6 project cards: Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier)
  - `.faq-sec` (accordion items with active/expanded states, 7 FAQs)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Colorblock Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features of Colorblock Theme (8 icon cards with descriptions) | `ThemeFeaturesSection` | Reused |
| 4 | Benefits of Colorblock Theme Customization (7 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our Colorblock Shopify Theme Customization Services (5 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of Shopify Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (7 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 601x462 WebP image (`colorblock-theme-customization-service-img.webp`).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

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
- Feature icons reused directly from canonical paths:
  - `/assets/generatepress-theme-customization/features/modular-design.svg`
  - `/assets/savor-theme-customization/features/customizable-sections.svg`
  - `/assets/impulse-theme-customization/features/customizable-sections.svg`
  - `/assets/atelier-theme-customization/features/high-resolution-image-support.svg`
  - `/assets/savor-theme-customization/features/flexible-navigation.svg`
  - `/assets/be-yours-theme-customization/features/promotional-banner-options.svg`
  - `/assets/astra-theme-customization/features/seo-optimized.svg`
  - `/assets/generatepress-theme-customization/features/mobile-responsive-design.svg`
- 7 benefit icons and 5 service icons reused from `public/assets/shopify-theme-customization/`.
- 4 why-choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- 6 Shopify portfolio project screenshots reused from canonical paths:
  - `/assets/healthcare/portfolio/nufyx-protein-products.webp`
  - `/assets/food-beverages/portfolio/nekter-juice-bar.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/beauty-cosmetics/portfolio/luxxi-nails.webp`
  - `/assets/our-work/projects/eco-soul.webp`
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
- Unique theme hero asset saved under `public/assets/colorblock-theme-customization/hero/`:
  - `hero/colorblock-theme-customization-service-img.webp` (601x462 WebP, 28KB)
- Total duplicate hash groups across `public/assets/`: 0.
