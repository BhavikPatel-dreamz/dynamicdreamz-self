# Visual Parity Capture: Astra Theme Customization

- **Route**: `/astra-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/astra-theme-customization/`
- **Capture Date**: 2026-09-02 (hero comparison refreshed)
- **Status**: Hero parity correction implemented and responsively verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.theme-customization-service-sec` (hero layout, 50%/50% split, `.review-wrap { display: none; }`, image bottom-aligned)
  - `.three_col_icon_sec` (3-column features grid, 55px icons, centered bold text, description paragraph, rounded-15px card border `#efefef`)
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
| 1 | Hero (`Astra Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Features Of Astra Theme (7 cards) | `ThemeFeaturesSection` | Reused (Extended with description) |
| 4 | Benefits of Astra Theme Customization (9 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our Astra Theme Customization Services (6 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (5 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 601x474 WebP image (`astra-theme-customization-service-img.webp`).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

### FAQ reveal animation reference (2026-09-02)

- User-provided live desktop DevTools capture inspected on the Astra route.
- Each `.accordion-item` uses AOS `fade-up` and remains independently observed.
- Captured delays are `0`, `150`, `300`, `450`, and `600` milliseconds for the
  five visible FAQ rows; additional rows continue the same 150ms increment.
- Live `custom.js` initializes AOS with `duration: 800`,
  `easing: ease-out-cubic`, `once: true`, `offset: 80`, and `mirror: false`.
- Live `aos.css` defines `ease-out-cubic` as
  `cubic-bezier(.25,.46,.45,.94)` and `fade-up` as opacity plus a 100px
  `translate3d` vertical offset.
- Recreate those exact animation values locally rather than adding the full AOS
  runtime dependency.
- Reveal each row once when it enters the viewport; preserve accordion open/close
  transitions and interaction states independently from the entrance animation.
- Reduced-motion users receive the final visible state without movement or
  stagger delay.

### 2026-09-02 Hero Comparison

- Live and local desktop screenshots inspected at approximately 1850x790.
- The local body copy rendered at 18px/34.2px with medium weight; desktop
  screenshot line wrapping confirms the live service-body treatment is
  14px/24px with normal weight, expanding to the shared 16px/30.4px treatment
  below 1200px.
- The local artwork was capped at 570px; the live artwork fills its 50% column
  and remains bottom-aligned.
- The live desktop title uses a tighter 60px line height and a smaller gap before
  the description than the previous local implementation.
- CTA hover/focus behavior remains provided by the shared `ButtonLink`; no
  animation timing or interaction behavior changed in this correction.
- Fresh local screenshots captured after the correction at 1852x790, 768x1024,
  and 390x844. The tablet and mobile layouts retain the shared stacked hero,
  centered copy, responsive heading, CTA, and full-width artwork behavior.
- Remaining known difference: browser scrollbar position and viewport crop can
  change how much of the bottom-aligned artwork is visible in a screenshot.

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
- 9 benefit icons and 5 service icons reused from `public/assets/shopify-theme-customization/`.
- 1 service icon (`custom-design-branding.svg`) reused from `public/assets/services/wordpress/wordpress-plugin-development.svg`.
- 4 why-choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- All 6 portfolio screenshots reused from canonical project paths:
  - `/assets/our-work/projects/quite-events.webp`
  - `/assets/our-work/projects/les-etoiles.webp`
  - `/assets/our-work/projects/valents.webp`
  - `/assets/our-work/projects/get-sunsights.webp`
  - `/assets/our-work/projects/lipari-design.webp`
  - `/assets/our-work/projects/nexventur.webp`
- Unique theme assets cleanly saved under `public/assets/astra-theme-customization/` with clean kebab-case names:
  - `hero/astra-theme-customization-service-img.webp`
  - `features/lightning-fast-performance.svg`
  - `features/seo-optimized.svg`
  - `features/fully-responsive.svg`
  - `features/highly-customizable.svg`
  - `features/woocommerce-ready.svg`
  - `features/no-jquery-dependency.svg`
  - `features/pre-built-templates.svg`
- Total duplicate hash groups across `public/assets/`: 0.
