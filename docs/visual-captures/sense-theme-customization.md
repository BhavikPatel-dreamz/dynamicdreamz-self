# Visual Capture Note: Sense Theme Customization (`/sense-theme-customization`)

## Capture Context
- **Live URL**: `https://www.dynamicdreamz.com/sense-theme-customization/`
- **Local URL**: `http://localhost:3000/sense-theme-customization`
- **Migration Target**: 1:1 visual, copy, semantic, and structural parity with the live page in Next.js 16 App Router using clean Tailwind CSS and server components.
- **Date**: 2026-08-19
- **Last UI Review**: 2026-08-24
- **Route-specific correction**: Keep the hero right column at 50% through the `max-width: 991px` tablet state; it returns to full width at `max-width: 767px`.
- **Trusted-brands desktop recheck**: The owner-supplied live/local captures
  were reviewed at approximately 1850px. The live section uses the shared
  compact treatment: `#fbeed5`, 104px total height, 17px vertical padding, and
  20px/26.4px heading typography on a single line. Its visible rail begins
  Popclub, SriSri Tattva, Tropicfeel, and Renee. The previous local treatment
  was 164px tall with a 25px/33px two-line title and route-specific logos.
- **Responsive behavior**: The compact shared treatment becomes 150px tall at
  `max-width: 991px` and 135px tall at `max-width: 767px`. The logo rail keeps
  drag/swipe and 2-second autoplay behavior; hover does not pause this industry
  variant, while reduced-motion disables autoplay.
- **Local verification capture**: `scratch/sense-local-1850.png` (1850x1000,
  headless Chrome) confirms the 104px desktop band, single-line 20px/26.4px
  title, shared logo rail, and section-to-features spacing. The exact logos in
  view depend on the rail's autoplay position.
- **Benefits carousel desktop recheck**: The owner-supplied live capture shows
  a browser-wide horizontal viewport with its first 627px card initially
  aligned to the desktop container edge, a 16px gap, and an approximately
  305px card height. After advancing, the preceding card remains partially
  visible at the left browser edge while the active card snaps to the original
  container alignment. The responsive container offset therefore belongs on
  the inner track and is mirrored by viewport scroll padding; the viewport
  itself must remain full width. Hover/focus shows the green-to-cyan border and
  bottom accent already provided by the shared proof card.
- **Why Choose mobile recheck**: Direct 423px live/local captures were made on
  2026-08-24 (`scratch/sense-live-why-mobile.png` and
  `scratch/sense-local-why-mobile.png`). The live section stacks each icon above
  its copy at `max-width: 767px`, uses 20px vertical and zero horizontal item
  padding inside the container, and keeps full-width dividers. Mobile card
  headings retain the base 18px/30.6px typography and 5px bottom margin;
  descriptions remain 16px/27.2px. The live markup uses `div.text`, so the
  legacy mobile rule targeting `span.text h3` does not apply. The prior local
  row layout and 30px/20px item padding did not match the rendered live page.
- **Services grid recheck**: The rendered live section and current
  `services/main.css` / `services/media.css` define three columns at 1200px and
  wider, two columns from 992px through 1199px, and one column at 991px and
  below. Cards use 16px column gaps, 24px row gaps, 32px icons, transparent
  backgrounds, 2px borders, and 20px padding on wide desktop; below
  1200px card padding becomes 30px vertically and 20px horizontally. Titles
  and descriptions remain 16px/27px across breakpoints. Hover and focus-within
  replace the neutral border with the live green-to-cyan gradient while the
  card interior remains visually white; hover also translates the card upward
  by 10px over 300ms. The gradient is a persistent pseudo-element layer whose
  opacity transitions over the same 300ms ease-in-out timing; it is not swapped
  as a background image because gradients do not interpolate smoothly. The
  card itself follows the live `.services-box` contract of `transition: all
  .3s ease-in-out` with `transform: translateY(-10px)` on hover.

---

## Live Page Structure & Visual Hierarchy

1. **Hero Section (`.inner-hero-sec.theme-customization-service-sec`)**:
   - Split hero layout with H1 heading: `Sense Theme Customization Service`
   - Descriptive paragraph about Sense theme clean modern design and customization benefits
   - Primary CTA: `request a quote` linking to `/request-quote`
   - Right column: High-resolution Sense Theme device preview graphic (`/assets/sense-theme-customization/hero/sense-theme-customization-service-img.webp`) with rotating review badges (Clutch 132 Reviews 5.0, Upwork 2000+ Reviews 5.0, Goodfirms 72 Reviews 5.0)

2. **Client Brands Section (`.our-client-sec`)**:
   - Heading: `Trusted by Leading Brands` (single line on desktop)
   - Shared brand rail beginning with *Popclub, SriSri Tattva, Tropicfeel, and Renee*
   - Compact horizontal marquee layout matching the live 104px desktop strip

3. **Theme Features Section (`.three_col_icon_sec`)**:
   - Heading: `Features Of Sense Theme`
   - Subtitle: `The Sense theme is built to enhance your brand's online reputation <br> flexibly and efficiently. List of key features:`
   - 6 Feature cards in a 3-column responsive grid:
     1. Clean and Modern Design (`/assets/sense-theme-customization/features/clean-minimalistic-design.svg`)
     2. Optimized for Speed (`/assets/sense-theme-customization/features/optimized-for-speed.svg`)
     3. Built in Product Filtering (`/assets/impulse-theme-customization/features/advanced-product-filtering.svg`)
     4. Customizable Header and Footer (`/assets/sense-theme-customization/features/customizable-header-and-footer.svg`)
     5. Multiple Layout Options (`/assets/sense-theme-customization/features/multiple-layout-options.svg`)
     6. Mobile Optimized (`/assets/sense-theme-customization/features/mobile-optimized.svg`)

4. **Benefits Section (`.shopify-customization-services-sec`)**:
   - Heading: `Benefits of Sense <br> Theme Customization`
   - Subtitle: `To fulfill your business objectives, we can change your store design and <br />functionality with Sense theme customization services.`
   - 9 Benefit cards matching `ShopifyReasonsSection`:
     1. Fully Customizable Store
     2. Responsive Design
     3. Unique Brand Identity
     4. Improved User Experience
     5. Multiple Third party Apps
     6. Higher Conversion Rates
     7. Mobile Optimization
     8. Safe and Secure Payments
     9. Zero Maintenance Cost

5. **Services Section (`.what-we-provide-sec`)**:
   - Heading: `Our Sense Theme Customization Services`
   - Subtitle: `At Dynamic Dreamz, we offer complete customization services for the Sense Theme.`
   - 6 Service cards in a 3-column grid matching `ShopifyServicesSection`:
     1. Theme Installation
     2. Custom Design and Branding
     3. Responsive Design
     4. Advanced Features Integration
     5. Performance Optimization
     6. Ongoing Support and Maintenance

6. **Why Choose Section (`.why_dynamic_dreamz_sec`)**:
   - Heading: `Why Choose Dynamic Dreamz`
   - Subtitle: `We are the go-to experts for Shopify theme customization. Here's why we are best<br />for your theme customization:`
   - 4 Proof cards in a 2-column grid matching `ThemeWhyChooseSection`:
     1. Expert Team
     2. Proven Process
     3. Ongoing Support
     4. Client Focused Approach

7. **FAQ Section (`.faq-sec`)**:
   - Heading: `Frequently Asked Questions`
   - 5 Accordion items matching `FaqSection`

---

## Asset Provenance & Deduplication Table

| Asset Role | Live Filename | Local Canonical Path | Status |
|---|---|---|---|
| Hero Graphic | `sense-theme-image-img.webp` | `/assets/sense-theme-customization/hero/sense-theme-customization-service-img.webp` | Ingested (Unique) |
| Feature 1 Icon | `clean-minimalistic-design-icon.svg` | `/assets/sense-theme-customization/features/clean-minimalistic-design.svg` | Ingested (Unique) |
| Feature 2 Icon | `optimized-speed-icon.svg` | `/assets/sense-theme-customization/features/optimized-for-speed.svg` | Ingested (Unique) |
| Feature 3 Icon | `built-in-product-filtering.svg` | `/assets/impulse-theme-customization/features/advanced-product-filtering.svg` | Reused (Canonical SHA-256 Match) |
| Feature 4 Icon | `customizable-header-and-footer-icon.svg` | `/assets/sense-theme-customization/features/customizable-header-and-footer.svg` | Ingested (Unique) |
| Feature 5 Icon | `multiple-layout-otions-icon.svg` | `/assets/sense-theme-customization/features/multiple-layout-options.svg` | Ingested (Unique) |
| Feature 6 Icon | `mobile-optimized-icon.svg` | `/assets/sense-theme-customization/features/mobile-optimized.svg` | Ingested (Unique) |
| 10 Client Logos | `ranavat.svg`, `prolash_black.svg`, etc. | `/assets/clients/*` | Reused Existing |
| 9 Benefit Icons | `cs_icon_img.svg`, `responsive_design_icon.svg`, etc. | `/assets/shopify-theme-customization/benefits/*` | Reused Existing |
| 6 Service Icons | `app-maintenance-icon.svg`, `plugin-icon.svg`, etc. | `/assets/shopify-theme-customization/services/*` | Reused Existing |
| 4 Why-Choose Icons | `expert-team-bg.svg`, `proven-process-icon.svg`, etc. | `/assets/shopify-theme-customization/why-choose/*` | Reused Existing |

---

## Responsive Breakpoints & Typography
- **Desktop (>= 1200px)**: Container max width 1170px / 1280px, font Montserrat, primary text `#111111`, body font size 16px with line height 1.9 (30.4px).
- **Tablet (992px - 1199px)**: 2-column feature/service grids, adjusted spacing.
- **Mobile (< 992px)**: Single column layouts, reduced padding (py-[50px]), full-width hero with centered review rating cards.

---

## SEO & Schema Specifications
- **Title**: `Sense Theme Customization Service | Dynamic Dreamz` (52 chars <= 60 chars)
- **Description**: `Looking for a Sense Theme Customization service. Choose Dynamic Dreamz, they offer everything that you need. Get an Expert Team and Ongoing Support.` (150 chars <= 160 chars)
- **Canonical**: `https://www.dynamicdreamz.com/sense-theme-customization` (Slashless)
- **Structured Data**: `Service`, `OfferCatalog` (6 offers), `FAQPage` (5 Question/Answer pairs), `BreadcrumbList`, `Organization`, `WebSite`.
