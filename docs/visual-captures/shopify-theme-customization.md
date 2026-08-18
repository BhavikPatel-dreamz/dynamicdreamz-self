# Visual Parity Capture: Shopify Theme Customization

- **Route**: `/shopify-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-theme-customization/`
- **Capture Date**: 2026-08-18
- **Status**: Verified

---

## 1. Visual References

### Live Screenshots Captured
- Desktop (1440x900): `docs/visual-captures/source/shopify-theme-customization/live-desktop-1440x900.png`
- Tablet (768x1024): `docs/visual-captures/source/shopify-theme-customization/live-tablet-768x1024.png`
- Mobile (390x844): `docs/visual-captures/source/shopify-theme-customization/live-mobile-390x844.png`

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Title / Purpose | Component / Implementation | Reused / Dedicated |
|---|---|---|---|
| 1 | Hero Section (`Shopify Theme Customization Services`) | `HiringHeroSection` / Inner Hero with `ReviewAnimation` | Reused / Composed |
| 2 | Trusted by Leading Brands | `IndustryBrandsSection` | Reused |
| 3 | Our Shopify Customization Services (6 service cards) | `ShopifyCustomizationServicesSection` | Section Component |
| 4 | Why do you need Shopify Theme customization services? (4 reason cards) | `ShopifyThemeWhyNeedSection` | Section Component |
| 5 | Benefits of the Shopify Theme Customization Service (11 benefit cards) | `ShopifyThemeBenefitsSection` | Section Component |
| 6 | Process of Shopify Theme Customization Services (6 steps + center illustration) | `ShopifyThemeProcessSection` | Section Component |
| 7 | Technology & Frameworks We Use (6 tech cards) | `ShopifyThemeTechSection` | Section Component |
| 8 | Shopify Themes We Customize (31 theme cards) | `ShopifyThemesGridSection` | Section Component |
| 9 | Why Choose Dynamic Dreamz For Shopify Theme Customization? (4 cards) | `ShopifyAdvantagesSection` / Why Choose Grid | Reused / Composed |
| 10 | Snippets of Shopify Theme Customization Portfolio (6 projects) | `PortfolioShowcaseSection` & `PortfolioProjectCard` | Reused |
| 11 | Don't Just Take Our Word For It (11 video testimonials) | `HappyClientSection` | Reused |
| 12 | Frequently Asked Questions (11 accordion items) | `FaqSection` & `FaqAccordion` | Reused |
| 13 | Consultation CTA Banner | `CtaBannerSection` | Reused |

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`) matching live site computed font hierarchy.
- **Hero Title**: `text-[42px] leading-[52px]` on desktop, `text-[32px] leading-[40px]` on tablet, `text-[26px] leading-[34px]` on mobile.
- **Section Headings**: `text-[35px] leading-[48px] font-bold text-ink` (desktop), `text-[28px] leading-[36px]` (tablet), `text-[22px] leading-[30px]` (mobile).
- **Body / Subtitles**: `text-base leading-[27px] font-medium text-muted`.
- **Card Backgrounds**: `#ffffff` with subtle borders (`#f1f1f1` or `#e8e8e8`) and hover elevation / border highlight.
- **Theme Cards**: Clean rounded-2xl cards with top screenshot (`aspect-[4/3] object-cover rounded-xl`), title (`text-lg font-bold text-ink`), and pill tag (`Shopify Theme`).
- **Brand Colors**: Accent `#15c064` / `#00d1ff` gradients, dark `#0c1523`, muted `#555555`.

---

## 4. Asset Deduplication & Integrity

- Total unique assets indexed in `public/assets/`: 0 duplicate sha256 checksums.
- Testimonial video posters & client avatars: 100% reused from canonical `/assets/testimonials/` and `/assets/shopify-plus-agency/testimonials/`.
- Brand partner badges & awards: 100% reused from `/assets/awards/`, `/assets/proof/`, and `/assets/brand/`.
- Portfolio store screens: Reused from `/assets/healthcare/portfolio/`, `/assets/food-beverages/portfolio/`, `/assets/pet-industry/portfolio/`, `/assets/beauty-cosmetics/portfolio/`, and `/assets/our-work/projects/`.
- Unique theme thumbnails and icons saved under `/assets/shopify-theme-customization/` with clean kebab-case names.
