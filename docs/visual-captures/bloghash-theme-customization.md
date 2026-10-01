# Visual Parity Capture: BlogHash Theme Customization

- **Route**: `/bloghash-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/bloghash-theme-customization/`
- **Capture Date**: 2026-10-01
- **Status**: Verified (Exact Live Site Visual Parity Remigrated)
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.theme-customize-hero`: Hero section layout (`bg-[#f7f4e9]`, zero bottom padding, hero graphic sits flush on the bottom edge against the `#FBEED5` brand section below).
  - `.our-client-sec.indian_brand`: 10 Indian brand client logos (Supertails, Eleven Eleven, Bella Vita Organic, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee Cosmetics, Royce Chocolate, Tego).
  - `.theme-customization-services.yellow`: 3-column feature cards with yellow/neutral background (`#fafaf7`), rounded-20px white cards, `#AD5151` SVGs. Used for Section 3 (Features, 8 boxes) and Section 5 (Benefits, 6 boxes).
  - `.what-we-provide-sec.only-text`: 2-column service cards with `#AD5151` SVGs.
  - `.how-to-choose-spa-sec`: 4-column numbered framework cards (`01`–`04`) with circular badge and borders `rgba(40,40,40,0.11)`.
  - `.our-work-sec.pt-0`: 4-column portfolio showcase grid with 8 WordPress project cards and "View our work" CTA button.
  - `.faq-sec`: Centered accordion FAQ layout with 6 expandable questions and answers.

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`BlogHash Theme Customization Service`) | `ThemeHeroSection` (flush bottom alignment) | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` (`indian_brand`) | Reused |
| 3 | Features of BlogHash Theme (8 boxes) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused |
| 4 | Our WordPress Theme Customization Services (6 boxes) | `AgencyServicesSection` (`what-we-provide-sec only-text`) | Reused |
| 5 | Benefits of BlogHash Theme Customization (6 boxes) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `EvaluationFrameworkSection` (`how-to-choose-spa-sec`) | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` (`ourWorkRefresh`) | Reused |
| 8 | Frequently Asked Questions (6 accordion items) | `SplitFaqSection` (`idPrefix="bloghash-faq"`) | Reused |

*(Note: Live site has no client stories / happy client section on this route; exactly 8 sections total).*

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat / PP Neue Montreal (`font-sans font-bold text-ink`).
- **Hero Title**: `text-[50px] leading-[66px]` on desktop, `text-[40px] leading-[50px]` on tablet, `text-[30px] leading-[40px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink` (desktop), `text-[30px] leading-10` (tablet), `text-2xl leading-[33px]` (mobile).
- **Body / Subtitles**: `text-base leading-[30.4px] font-normal text-muted` (hero), `text-base leading-[27px]` (cards).
- **Hero Image Zero Gap**: Sits completely flush on the bottom edge (`pb-0`, `items-end`, `self-end`) meeting the `#FBEED5` brand section below with zero pixel gap across all viewports.
- **Primary CTA**: `#df4644` / `#cd3735` button link.

---

## 4. Asset Deduplication & Integrity

- Hero image: `public/assets/bloghash-theme-customization/hero/bloghash-theme-customization-service-img.webp` (1202x948 WebP).
- 10 Indian brand logos reused directly from `public/assets/clients/` via `industryBrandLogos`.
- Clean React SVG icons in `src/components/sections/bloghash-theme-customization/bloghash-icons.tsx`.
- 8 portfolio project cards reused from `public/assets/our-work/projects/`.
- Total duplicate hash groups across `public/assets/`: 0.
