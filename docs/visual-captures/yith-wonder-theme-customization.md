# Visual Parity Capture: YITH Wonder Theme Customization

- **Route**: `/yith-wonder-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/yith-wonder-theme-customization/`
- **Capture Date**: 2026-09-02
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/hero_section.css`
  - `.inner-hero-sec.theme-customization-service-sec` (split hero with H1, paragraph, "request a quote" red button, right-side image preview and Clutch/Upwork/GoodFirms review boxes)
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` (brand marquee/slider with 10 partner logos)
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.three_col_icon_sec` (8 feature cards with icon, H3, and description)
  - `.shopify-customization-services-sec` (8 benefit cards in carousel layout with linear gradient background)
  - `.what-we-provide-sec` (6 service cards with icon, title, description, and text arrow link)
  - `.why_dynamic_dreamz_sec.two-column-icon-text-bg` (4 why choose benefit items with icon, title, and paragraph)
  - `.our-work-sec` (8 WordPress portfolio cards with image hover zoom, category label, project title, and arrow link)
  - `.faq-sec` (6 accordion FAQ items with expand/collapse states)
- `/wp-content/themes/dynamicdreamz/assets/css/services/media.css`
  - Breakpoints: desktop (>=1200px), tablet (768px-1199px), mobile (<=767px).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`YITH Wonder Theme Customization Service`) | `ThemeHeroSection` | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` | Reused |
| 3 | Features Of YITH Wonder Theme (8 cards) | `ThemeFeaturesSection` | Reused |
| 4 | Benefits of YITH Wonder Theme Customization (8 cards) | `ShopifyReasonsSection` | Reused |
| 5 | Our WordPress Theme Customization Services (6 cards) | `AgencyServicesSection` | Reused |
| 6 | Why Choose Dynamic Dreamz (4 cards) | `ThemeWhyChooseSection` | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 8 | Frequently Asked Questions (6 accordion items) | `SplitFaqSection` & `FaqAccordion` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image**: `/assets/yith-wonder-theme-customization/hero/yith-wonder-theme-customization-service-img.webp` (601x474).
- **Brand Colors**: Light gradient `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`, red primary CTA `#df4644` / `#cd3735`.

---

## 4. Asset Deduplication & Integrity

- 10 brand partner logos reused directly from `public/assets/clients/`.
- 8 feature icons reused from canonical paths across `public/assets/` (`woocommerce-ready.svg`, `drag-and-drop-header-footer-builder.svg`, `fully-responsive.svg`, `seo-optimized.svg`, `lightning-fast-performance.svg`, `pre-built-templates.svg`, `page-builder-compatibility.svg`, `custom-hooks-and-filters.svg`).
- 8 benefit icons reused from canonical paths in `public/assets/shopify-theme-customization/benefits/`.
- 6 service icons reused from `public/assets/shopify-theme-customization/services/` and `public/assets/services/wordpress/`.
- 4 why choose icons reused from `public/assets/shopify-theme-customization/why-choose/`.
- 8 WordPress portfolio project cards reused from `public/assets/our-work/projects/`.
- Total duplicate hash groups across `public/assets/`: 0.
