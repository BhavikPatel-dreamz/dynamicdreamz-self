# Visual Parity Capture: Prestige Theme Customization

- **Route**: `/prestige-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/prestige-theme-customization/`
- **Capture Date**: 2026-08-19
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.theme-customization-service-sec` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, image bottom-aligned)
  - `.three_col_icon_sec` (3-column features grid, 55px icons, centered bold text, rounded-15px card border `#efefef`)
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
| 1 | Hero (`Prestige Theme Customization Service`) | `ThemeHeroSection` | Reusable / Generalized |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Features of Prestige Theme (6 cards) | `ThemeFeaturesSection` | Reusable / Generalized |
| 4 | Benefits of Prestige Theme Customization (9 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our Prestige Theme Customization Services (6 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reusable / Generalized |
| 7 | Snippets of Prestige Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (6 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 570x458 WebP image (`prestige-theme-customization-service-img.webp`).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 10 brand partner logos reused directly from `public/assets/clients/` (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City).
- 9 benefit icons and 5 service icons reused from `public/assets/shopify-theme-customization/`.
- All 6 portfolio screenshots reused from canonical project paths:
  - `/assets/our-work/projects/atolea-jewelry.webp`
  - `/assets/fashion/portfolio/bombay-shirt-company-fashion.webp`
  - `/assets/our-work/projects/sims-direct.webp`
  - `/assets/our-work/projects/bonbon-lingerie.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/our-work/projects/weardiop.webp`
- Unique theme assets cleanly saved under `public/assets/prestige-theme-customization/` with clean kebab-case names:
  - `hero/prestige-theme-customization-service-img.webp`
  - `features/slideshow-high-impact-images.svg`
  - `features/advanced-product-filtering.svg`
  - `features/image-galleries.svg`
  - `features/home-page-video-integration.svg`
  - `features/marketing-promotion-tools.svg`
  - `features/sticky-navigation.svg`
- Total duplicate hash groups across `public/assets/`: 0.
