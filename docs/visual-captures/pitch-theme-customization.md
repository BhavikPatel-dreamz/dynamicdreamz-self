# Visual Parity Capture: Pitch Theme Customization

- **Route**: `/pitch-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/pitch-theme-customization/`
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
  - `.theme-customization-service-sec` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, bottom-aligned hero graphic, external demo store CTA "View Demo Store" with target `_blank`)
  - `.three_col_icon_sec` (features section with 3 visual preview highlight cards followed by 9 icon cards with rounded-15px borders `#efefef`)
  - `.shopify-customization-services-sec` (benefits grid with gradient background, white cards, hover gradient border)
  - `.what-we-provide-sec` (2-column services grid, 10px rounded cards with hover gradient border)
  - `.why_dynamic_dreamz_sec.two-column-icon-text-bg` (2-column horizontal icon-text list with borders `rgba(0,0,0,0.05)`)
  - `.our-work-sec` (3-column Shopify portfolio project showcase cards with hover "View Project" arrow and category badge)
  - `.faq-sec` (accordion items with active/expanded states)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Pitch Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features Of Pitch Theme (3 highlight cards + 9 icon cards) | `ThemeFeaturesSection` | Reused |
| 4 | Benefits of Pitch Theme Customization (9 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our Shopify Theme Customization Services (6 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of Shopify Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (6 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 601x462 WebP image (`pitch-theme-customization-services-img.webp`).
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
- Feature preview highlight cards:
  - `public/assets/pitch-theme-customization/features/show-off-your-product-details-img.webp` (unique)
  - `public/assets/pitch-theme-customization/features/bold-brand-storytelling-img.webp` (unique)
  - `/assets/fabric-theme-customization/features/fromthe-horizon-collection-img.webp` (reused canonical)
- Feature icons reused directly from canonical paths:
  - `/assets/fabric-theme-customization/features/visual-storytelling.svg`
  - `/assets/savor-theme-customization/features/customizable-sections.svg`
  - `/assets/fabric-theme-customization/features/quick-setup.svg`
  - `/assets/savor-theme-customization/features/flexible-navigation.svg`
  - `/assets/astra-theme-customization/features/seo-optimized.svg`
  - `/assets/be-yours-theme-customization/features/built-in-product-filtering.svg`
  - `public/assets/pitch-theme-customization/features/slideshow-video-support.svg` (unique)
  - `/assets/generatepress-theme-customization/features/mobile-responsive-design.svg`
  - `/assets/go-theme-customization/features/typography-control.svg`
- 9 benefit icons and 6 service icons reused from `public/assets/shopify-theme-customization/`.
- 4 why-choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- All 6 Shopify portfolio screenshots reused from canonical project paths:
  - `/assets/our-work/projects/atolea-jewelry.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/sims-direct.webp`
  - `/assets/our-work/projects/bonbon-lingerie.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/our-work/projects/weardiop.webp`
- Unique theme hero asset saved under `public/assets/pitch-theme-customization/hero/`:
  - `hero/pitch-theme-customization-services-img.webp` (601x462 WebP, 22KB)
- Total duplicate hash groups across `public/assets/`: 0.
