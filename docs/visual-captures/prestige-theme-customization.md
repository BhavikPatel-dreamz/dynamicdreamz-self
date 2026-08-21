# Visual Parity Capture: Prestige Theme Customization

- **Route**: `/prestige-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/prestige-theme-customization/`
- **Capture Date**: 2026-08-21
- **Status**: Main-page parity verified; shared global navigation taxonomy tracked separately
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### 2026-08-21 Capture Files

- Live and local screenshots were refreshed at 1440x900, 768x1024, and 390x844 under `docs/visual-captures/source/prestige-theme-customization/`.
- The rendered live page and View Page Source were downloaded to temporary comparison files; production code will not depend on them.
- Comparison covers default, hover/focus, FAQ expanded, benefit drag behavior, logo-slider movement, responsive stacking, and the floating contact control.

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
- `/wp-content/themes/dynamicdreamz/style.css`
  - Global Montserrat body typography, heading weights, container widths, buttons, and base spacing.
- `/wp-content/themes/dynamicdreamz/assets/css/owl.carousel.min.css`
  - Logo-slider track/item behavior and transition primitives.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Prestige Theme Customization Service`) | `ThemeHeroSection` | Reusable / Generalized |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Features of Prestige Theme (6 cards) | `ThemeFeaturesSection` | Reusable / Generalized |
| 4 | Benefits of Prestige Theme Customization (9 cards) | `ShopifyReasonsSection` + `HorizontalDragScroll` | Reused / Backward-compatible carousel variant |
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

- 12 brand partner logos reused directly from `public/assets/clients/` (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- 9 benefit icons and 5 service icons reused from `public/assets/shopify-theme-customization/`.
- Four portfolio screenshots reuse canonical project paths and two unique live creative variants were ingested after scratch-buffer hash and visual comparison:
  - `/assets/our-work/projects/atolea-jewelry-model.webp`
  - `/assets/our-work/projects/bombay-shirt-company-model.webp`
  - `/assets/our-work/projects/sims-direct.webp`
  - `/assets/our-work/projects/bonbon-lingerie.webp`
  - `/assets/pet-industry/portfolio/pagerie-dog-accessories.webp`
  - `/assets/our-work/projects/weardiop.webp`
- Unique theme assets cleanly saved under `public/assets/prestige-theme-customization/` with clean kebab-case names:
  - `hero/prestige-theme-customization-service-img.webp`
  - `features/image-galleries.svg`
  - `features/home-page-video-integration.svg`
  - `features/marketing-promotion-tools.svg`
- The slideshow, advanced-filtering, and sticky-navigation visuals reuse byte-identical canonical SVGs already stored under the Be Yours and Savor theme asset folders.
- The two ingested portfolio images introduce no duplicate hashes. Repository-wide duplicate hash groups: 0.

## 5. Interaction & Responsive Verification

- Benefits carousel: no autoplay, no arrows, no dots; pointer/touch drag enabled; 2 cards from 767px upward, 1 card below 767px, 16px desktop/tablet gap, 10px live mobile intent, and 25px edge reveal. The viewport spans the browser width while the initial track offset and matching scroll padding align the first card with the container content edge; after scrolling, earlier cards can remain visible at the browser edge.
- Benefits heading: the authored `<br>` remains active at every breakpoint on this route, matching the live two-line heading instead of being hidden below desktop.
- Brand slider: 4/3/2 visible logos across desktop/tablet/mobile, 2-second autoplay, 500ms transition, infinite looping, draggable/swipe interaction, and pause-on-focus accessibility behavior.
- Feature grid: 3/2/1 columns across desktop/tablet/mobile.
- Service cards: 2/1 columns; live 16px/27px paragraph typography retained on mobile for this route.
- Why-choose grid: 2/1 columns; each card stacks its 66x70px icon, title, and description on separate lines, and the live 16px/27.2px paragraph typography is retained on mobile for this route.
- Portfolio: 3/2/1 columns with the live hover overlay, category badge, project label, and external-link behavior.
- FAQ: first item expanded by default; hover/focus and expanded controls preserve the shared accessible accordion behavior.
- Hero artwork: stretched to the live desktop width, half-width at tablet, full-width on mobile, with the measured 25px tablet/mobile offset below the CTA.

## 6. Remaining Difference

- The main Prestige page content, typography, section spacing, cards, sliders, portfolio media, FAQ, and responsive behavior now match the current live reference. The site-wide desktop navigation taxonomy is managed by the shared global header and still reflects the migration navigation model rather than the live site's newest menu grouping; changing it safely requires a site-wide header/menu parity task because it affects every route and mega-menu interaction.
