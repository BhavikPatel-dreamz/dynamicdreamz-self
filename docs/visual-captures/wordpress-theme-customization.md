# Visual Capture: WordPress Theme Customization Services

- **Route**: `/wordpress-theme-customization-services`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-theme-customization-services/`
- **Remigration / Audit Date**: 2026-10-05

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` (`hideLogo={true}`, tablet slider + 4 trust badges) | 3 tablet slide mockups, 4 trust badge SVGs |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 10 client brand SVGs from `public/assets/clients/` |
| 3 | What We Provide (6 Cards) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | 6 canonical service SVG icons |
| 4 | Why Customize (2x2 Dark Grid) | `ShopifyTeamBoxesSection` (Dark container with 4 numbered cards) | Clean typography & dark border styling |
| 5 | Benefits of Customization (10 Cards) | `ThemeCustomizationServicesSection` (`variant="transparent"`) | 10 canonical benefit SVG icons |
| 6 | Development Process (6 Steps) | `OurDevelopmentProcessSection` (`columns={3}`) | 6 numbered step cards with step indicators |
| 7 | Themes We Customize (17 Themes) | `ShopifyThemesGridSection` (`variant="pista"`) | 17 WebP theme screenshots from `public/assets/wordpress-theme-customization/themes/` |
| 8 | Why Choose Dynamic Dreamz (4 Columns) | `EvaluationFrameworkSection` | 4 numbered framework columns |
| 9 | Portfolio Showcase (8 Projects) | `PortfolioShowcaseSection` (`variant="liveGrid"`, `cardVariant="ourWorkRefresh"`, `columns={4}`) | 8 project cards from `public/assets/our-work/projects/` |
| 10 | Client Video Reviews Carousel | `HappyClientSection` | Video testimonial thumbnails + video modals |
| 11 | Centered FAQs Accordion (6 Items) | `SplitFaqSection` (`layout="centered"`) | Centered accordion layout with schema |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: All brand logos, service icons, process icons, why-choose icons, testimonial assets, portfolio mockups, and theme cards reused from canonical paths in `public/assets/**`.
- **Total Files Audited**: 1791 public assets.
- **SHA-256 Duplicate Groups**: 0 byte duplicates, 0 SVG duplicates, 0 raster duplicates.

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**:
  - Hero: 2-column layout with left copy/badges and right tablet slider mockup.
  - Services: 3-column grid with yellow hover cards (`#FFF8F0` background / `#FEE3C8` border).
  - Why Customize: 2x2 grid in dark themed container (`#111111`).
  - Benefits: 3-column / 4-column responsive grid with transparent cards and hover elevation.
  - Process: 3-column grid showing 6 sequential development steps.
  - Themes: 4-column pista green cards (`#003323` text / pista background) with live theme tags.
  - Why Choose: 4-column numbered framework cards.
  - Portfolio: 4-column grid of 8 live projects with hover overlay and preview modal.
  - Testimonials: Multi-item client video carousel with play controls.
  - FAQ: Centered container single-column accordion with expand/collapse animations.
- **Tablet (768px-1199px)**: Responsive 2-column card layouts, centered headlines where appropriate.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly accordion FAQs, responsive tablet slider sizing.
