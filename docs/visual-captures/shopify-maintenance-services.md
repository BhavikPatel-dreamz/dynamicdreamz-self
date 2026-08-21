# Visual Capture: Top Shopify Maintenance Services

- **Route**: `/shopify-maintenance-services`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-maintenance-services/`
- **Capture Date**: 2026-08-21

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` | Hero graphic (`467x351` WebP) + 3 review badges (Clutch, Upwork, GoodFirms) |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 12 client brand SVGs from `public/assets/clients/` |
| 3 | What We Provide (6 Cards) | `AgencyServicesSection` (centered header) | 5 unique service SVGs + 1 canonical maintenance SVG + CTA |
| 4 | Our Work (6 Projects) | `PortfolioShowcaseSection` | 6 WebP Shopify case studies + `/our-work` CTA |
| 5 | Client Video Reviews Carousel | `HappyClientSection` | WebP testimonial thumbnails + videos |
| 6 | Frequently Asked Questions (12 Q&As) | `FaqSection` | 12 interactive accordion FAQ items with schema |
| 7 | Request a Quote Banner | `CtaBannerSection` | Gradient banner with `/request-quote` CTA |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: 1 SVG matched `/assets/services/wordpress/wordpress-maintenance.svg`. All 12 client logos and 6 portfolio images reused from canonical paths.
- **Unique Assets Ingested**: Hero WebP (`public/assets/shopify-maintenance-services/hero/shopify-maintenance-service-img.webp`) and 5 service SVGs (`public/assets/shopify-maintenance-services/services/`).
- **SHA-256 Duplicate Groups**: 0.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**: Split hero banner with graphic and 3 review badges, 2-column service cards with bullet list items and bottom CTA button, 3-column portfolio grid, testimonials slider with video popups, 12 accordion FAQs.
- **Tablet (768px-1199px)**: Responsive 2-column card layouts, centered headlines.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly accordion FAQs, full-width CTA buttons.
