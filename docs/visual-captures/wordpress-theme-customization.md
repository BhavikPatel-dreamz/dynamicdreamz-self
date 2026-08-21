# Visual Capture: WordPress Theme Customization Services

- **Route**: `/wordpress-theme-customization-services`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-theme-customization-services/`
- **Capture Date**: 2026-08-21

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `ServiceHeroSection` (Centered/Full-width single text box) | Clean typography, centered layout |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 12 client brand SVGs from `public/assets/clients/` |
| 3 | What We Provide (6 Cards) | `ShopifyServicesSection` | Canonical service icons |
| 4 | Why Customize (2-col Cards) | `ShopifyAdvantagesSection` (`columns={2}`) | Canonical advantage icons |
| 5 | Benefits (10-Card Carousel/Grid) | `ShopifyReasonsSection` | Canonical benefit icons |
| 6 | Process (Serpentine 6 Steps) | `ShopifyThemeProcessSection` | `process-illustration.svg` + 6 step icons |
| 7 | Technology & Frameworks (11 items) | `ShopifyThemeTechSection` | WebP tech logos + SVGs |
| 8 | Themes We Customize (17 themes) | `ShopifyThemesGridSection` | 17 WebP theme screenshots + internal theme routes |
| 9 | Why Choose Dynamic Dreamz (2-col) | `ShopifyAdvantagesSection` (`columns={2}`) | Canonical why-choose icons |
| 10 | Portfolio Snippets (6 cards) | `PortfolioShowcaseSection` | 6 WebP case study images + `/our-work` CTA |
| 11 | Client Video Reviews Carousel | `HappyClientSection` | WebP testimonial thumbnails + videos |
| 12 | FAQs Accordion (6 Q&As) | `FaqSection` | FAQ accordion with schema |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: All brand logos, service icons, process icons, why-choose icons, testimonial assets, and theme cards reused from canonical paths in `public/assets/**`.
- **SHA-256 Duplicate Groups**: 0.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**: Centered hero banner, 6-card services grid, 2-column why-customize, 3-column benefits, serpentine 6-step process with center illustration, 4-column tech framework blocks, 3-column themes grid with hover zoom & gradient border, 3-column portfolio cards, testimonials carousel with video modals.
- **Tablet (768px-1199px)**: Responsive 2-column card layouts, centered headlines.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly accordion FAQs, vertical step list with step badges.
