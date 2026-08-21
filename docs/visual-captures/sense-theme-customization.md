# Visual Capture Note: Sense Theme Customization (`/sense-theme-customization`)

## Capture Context
- **Live URL**: `https://www.dynamicdreamz.com/sense-theme-customization/`
- **Local URL**: `http://localhost:3000/sense-theme-customization`
- **Migration Target**: 1:1 visual, copy, semantic, and structural parity with the live page in Next.js 16 App Router using clean Tailwind CSS and server components.
- **Date**: 2026-08-19
- **Last UI Review**: 2026-08-21
- **Route-specific correction**: Keep the hero right column at 50% through the `max-width: 991px` tablet state; it returns to full width at `max-width: 767px`.

---

## Live Page Structure & Visual Hierarchy

1. **Hero Section (`.inner-hero-sec.theme-customization-service-sec`)**:
   - Split hero layout with H1 heading: `Sense Theme Customization Service`
   - Descriptive paragraph about Sense theme clean modern design and customization benefits
   - Primary CTA: `request a quote` linking to `/request-quote`
   - Right column: High-resolution Sense Theme device preview graphic (`/assets/sense-theme-customization/hero/sense-theme-customization-service-img.webp`) with rotating review badges (Clutch 132 Reviews 5.0, Upwork 2000+ Reviews 5.0, Goodfirms 72 Reviews 5.0)

2. **Client Brands Section (`.our-client-sec`)**:
   - Heading: `Trusted by <br>Leading Brands`
   - 10 Brand partner logos (*Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter Juice Bar, Circuit City*)
   - Horizontal marquee layout matching existing `IndustryBrandsSection`

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
   - Subtitle: `To fulfill your business objectives, we can change your store design and<br />functionality with Sense theme customization services.`
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
