# Visual Parity Capture: Impulse Theme Customization

- **Route**: `/impulse-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/impulse-theme-customization/`
- **Capture Date**: 2026-08-19
- **Last UI Review**: 2026-08-21 (live/local full-page comparison)
- **Status**: Verified after parity corrections
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
- `/wp-content/themes/dynamicdreamz/assets/css/header.css`
- `/wp-content/themes/dynamicdreamz/assets/css/footer.css`

### Live JavaScript Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/js/services.js`
  - `.scs-slider`: Owl carousel, non-looping, no dots/arrows, 16px desktop gap, 25px stage padding, 2 desktop/tablet items and 1 mobile item.

### Comparison Inputs
- User-provided full-page live screenshot at 1850px source width.
- User-provided full-page local screenshot at 1850px source width.
- Live rendered HTML and page source inspected on 2026-08-21.
- Live portfolio source currently renders an intentionally empty `.our-work-main` while preserving the split heading, description, and CTA.
- Local desktop capture: `/tmp/impulse-local-desktop-final.png` at 1850px width after hydration.
- Local mobile capture: `/tmp/impulse-local-mobile.png` at 390x844 after hydration.
- User-provided live/local full-page comparison at the 991px media-query state reviewed on 2026-08-21.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Impulse Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Features of Impulse Theme (6 cards) | `ThemeFeaturesSection` | Reused |
| 4 | Benefits of Impulse Theme Customization (9 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our Impulse Theme Customization Services (6 cards) | `ShopifyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of Shopify Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (7 accordion items) | `FaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: Bottom-aligned 570x449 WebP image (`impulse-theme-customization-service-img.webp`); the Impulse page opts out of the shared 570px CSS max-width so the image can fill its hero column while retaining its intrinsic aspect ratio.
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
- 9 benefit icons and 5 service icons reused from `public/assets/shopify-theme-customization/`.
- 1 service icon (`custom-design-branding.svg`) reused from `public/assets/services/wordpress/wordpress-plugin-development.svg`.
- 4 why-choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- All 6 portfolio screenshots reused from canonical project paths:
  - `/assets/hire-shopify-developers/portfolio/adhoc-atler.webp`
  - `/assets/our-work/projects/lace-laboratory.webp`
  - `/assets/our-work/projects/purra-performance.webp`
  - `/assets/our-work/projects/lash-affair.webp`
  - `/assets/our-work/projects/iridescent-sea.webp`
  - `/assets/our-work/projects/boutique-jacques.webp`
- Unique theme assets cleanly saved under `public/assets/impulse-theme-customization/` with clean kebab-case names:
  - `hero/impulse-theme-customization-service-img.webp`
  - `features/advanced-product-filtering.svg`
  - `features/promotional-banner-options.svg`
  - `features/customizable-sections.svg`
  - `features/collection-page-sidebar.svg`
  - `features/fast-loading-speed.svg`
  - `features/product-quick-view.svg`
- Total duplicate hash groups across `public/assets/`: 0.

---

## 5. Page-Specific Hero Adjustment

- Verified live state: the image is declared at 570x449 and uses `width: 100%` inside the right hero column.
- Shared behavior: `ThemeHeroSection` retains its default 570px image constraint and intrinsic aspect ratio.
- Approved route override: `/impulse-theme-customization` enables `imageStretchesOnDesktop`, producing `w-full max-w-none h-auto` only for its hero image.
- Interaction and animation impact: none; this is a static sizing override.
- Remaining differences identified before correction: two broken feature asset paths, incorrect client-logo dataset, grid benefits instead of the live two-item horizontal carousel, centered portfolio introduction instead of the live split layout, and six local portfolio cards absent from the current live render.
- Corrected state: feature assets render locally, the client strip uses the current live dataset and compact geometry, benefits use the live non-looping horizontal track, and the portfolio matches the current empty live project container.
- Portfolio description: its authored `<br>` is hidden at every breakpoint on this route, matching the live split-header CSS while preserving the source copy.
- Responsive verification: desktop 1850px and mobile 390px captures completed; hero stacking, horizontal carousel clipping, navigation, section order, FAQ state, and footer were inspected.
- 991px corrections: retain the live half-width hero image column until 767px, preserve the 25px live gap above that image, show the live tablet portfolio eyebrow, and keep footer accordions before contact details.
- Benefits carousel cards use a route-scoped 340px minimum height and live-sized responsive bases (308px at the supplied tablet viewport), while other shared carousel consumers retain their existing dimensions.
- At mobile widths, Why Choose items stack each live-sized 66x70px icon above its heading and retain the live 16px description typography; tablet and desktop retain their existing alignment.
- Interaction verification: benefits track remains pointer/touch draggable; FAQ open/closed controls preserve their existing keyboard-accessible behavior; portfolio CTA remains available while the empty live project container is mirrored.
- Final verification: URL policy, ESLint, production build, and SHA-256 duplicate audit passed on 2026-08-21.
