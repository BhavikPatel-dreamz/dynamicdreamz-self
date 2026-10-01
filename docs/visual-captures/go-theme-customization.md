# Visual Parity Capture: Go Theme Customization

- **Route**: `/go-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/go-theme-customization/`
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
  - `.theme-customize-hero`: Hero section layout (`bg-[#f7f4e9]`, zero bottom padding, hero graphic sits flush on the bottom edge against the `#FBEED5` brand section below). `.btn-group` container adds `pt-2.5` spacing with responsive centering on tablet/mobile.
  - `.our-client-sec`: 10 client brand trust logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter, Circuit City).
  - `.theme-customization-services.yellow`: 3-column feature cards with yellow/neutral background (`#fafaf7`), rounded-20px white cards, `#AD5151` SVGs. Used for Section 3 (Features, 8 boxes).
  - `.what-we-provide-sec.only-text`: 2-column service cards with `#AD5151` SVGs (Section 4, 6 boxes, preserved paragraph linebreaks).
  - `.theme-customization-services.green`: 3-column benefit cards with green/neutral background (`#eff4ef`), rounded-20px white cards, `#AD5151` SVGs. Used for Section 5 (Benefits, 8 boxes).
  - `.how-to-choose-spa-sec`: 4-column numbered framework cards (`01`–`04`) with circular badge and borders `rgba(40,40,40,0.11)` (Section 6, 4 items).
  - `.our-work-sec.pt-0`: 4-column portfolio showcase grid with 8 WordPress project cards and "View our work" CTA button (Section 7, 8 projects).
  - `.faq-sec`: Centered accordion FAQ layout with 8 expandable questions and answers (Section 8, 8 items).

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero (`Go Theme Customization Service`) | `ThemeHeroSection` (flush bottom alignment, `.btn-group` wrapper) | Reused |
| 2 | Trusted by Leading Brands (10 client logos) | `IndustryBrandsSection` (`rest_of_brand`, `density="flexible"`) | Reused |
| 3 | Features of Go Theme (8 boxes) | `ThemeCustomizationServicesSection` (`variant="yellow"`) | Reused |
| 4 | Our WordPress Theme Customization Services (6 boxes) | `AgencyServicesSection` (`what-we-provide-sec only-text`, `preserveBreaks`) | Reused |
| 5 | Benefits of Go Theme Customization (8 boxes) | `ThemeCustomizationServicesSection` (`variant="green"`) | Reused |
| 6 | Why Choose Dynamic Dreamz (4 items) | `EvaluationFrameworkSection` (`how-to-choose-spa-sec`) | Reused |
| 7 | Snippets of WordPress Theme Customization Portfolio (8 projects) | `PortfolioShowcaseSection` (`ourWorkRefresh`) | Reused |
| 8 | Frequently Asked Questions (8 accordion items) | `SplitFaqSection` (`idPrefix="go-theme-faq"`, `className="faq-sec"`) | Reused |

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

- Hero image: `public/assets/go-theme-customization/hero/go-theme-customization-service-img.webp` (1202x948 WebP).
- 10 brand partner logos reused directly from `public/assets/clients/`.
- Clean React SVG icons in `src/components/sections/go-theme-customization/go-icons.tsx`.
- 8 portfolio project cards reused from `public/assets/our-work/projects/`.
- Total duplicate hash groups across `public/assets/`: 0.
