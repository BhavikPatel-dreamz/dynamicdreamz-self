# Visual Parity Capture: Go Theme Customization

- **Route**: `/go-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/go-theme-customization/`
- **Capture Date**: 2026-08-20
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.theme-customization-service-sec` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, bottom-aligned hero graphic)
  - `.three_col_icon_sec` (features grid with 8 theme cards, 55px icons, centered bold text, description paragraph, rounded-15px card border `#efefef`)
  - `.shopify-customization-services-sec` (benefits grid with gradient background, white cards, hover gradient border)
  - `.what-we-provide-sec` (2-column services grid, 10px rounded cards with hover gradient border)
  - `.why_dynamic_dreamz_sec.two-column-icon-text-bg` (2-column horizontal icon-text list with borders `rgba(0,0,0,0.05)`)
  - `.our-work-sec` (3-column portfolio project showcase cards with hover "View Project" arrow and category badge)
  - `.faq-sec` (accordion items with active/expanded states)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px / <=991px), mobile (<=767px / <=575px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Go Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features Of Go Theme (8 cards) | `ThemeFeaturesSection` | Reused |
| 4 | Benefits of Go Theme Customization (8 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our WordPress Theme Customization Services (6 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (8 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 1202x948 WebP image (`go-theme-customization-service-img.webp`).
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
  - `/assets/bloghash-theme-customization/features/minimal-and-clean-design.svg`
  - `/assets/kadence-theme-customization/features/drag-and-drop-header-footer-builder.svg`
  - `/assets/astra-theme-customization/features/lightning-fast-performance.svg`
  - `/assets/astra-theme-customization/features/woocommerce-ready.svg`
  - `/assets/astra-theme-customization/features/fully-responsive.svg`
- Unique feature icons saved under `public/assets/go-theme-customization/features/`:
  - `block-editor-support.svg`
  - `typography-control.svg`
  - `color-and-style-options.svg`
- 8 benefit icons and 6 service icons reused from `public/assets/shopify-theme-customization/`.
- 4 why-choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- All 6 portfolio screenshots reused from canonical project paths:
  - `/assets/our-work/projects/quite-events.webp`
  - `/assets/our-work/projects/les-etoiles.webp`
  - `/assets/our-work/projects/valents.webp`
  - `/assets/our-work/projects/get-sunsights.webp`
  - `/assets/our-work/projects/lipari-design.webp`
  - `/assets/our-work/projects/nexventur.webp`
- Unique theme hero asset cleanly optimized to WebP and saved under `public/assets/go-theme-customization/hero/`:
  - `hero/go-theme-customization-service-img.webp` (1202x948, 66KB WebP)
- Total duplicate hash groups across `public/assets/`: 0.
