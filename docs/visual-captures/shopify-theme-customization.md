# Visual Parity Capture: Shopify Theme Customization

- **Route**: `/shopify-theme-customization`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-theme-customization/`
- **Capture Date**: 2026-09-23
- **Status**: Completed & Verified (100% Section Order & Visual Parity with Live Site)

---

## 1. Visual References

### Live Screenshots Captured
- Desktop (1440x900): `scratch/live-desktop.png`
- Tablet (768x1024): `scratch/live-tablet.png`
- Mobile (390x844): `scratch/live-mobile.png`

### CSS / JS Sources Inspected
- `flexible-css/hero_new_section.css`
- `flexible-css/trusted_by_leading_brands_section.css`
- `flexible-css/shopify_theme_customization_services.css`
- `flexible-css/shopify_team_boxes.css`
- `flexible-css/our_development_process.css`
- `flexible-css/choose_the_right_approach.css`
- `flexible-css/shopify_themes_we_customize_section.css`
- `flexible-css/seo_safe_shopify_migration_section.css`
- `flexible-css/why_choose_dynamic_dreamz_for_shopify_migration.css`
- `flexible-css/projects_section.css`
- `flexible-css/white_label_flexible_wordpress_development_plans_section.css`
- `flexible-css/client_review_section.css`
- `flexible-css/faqs_section.css`

---

## 2. Page Section Order & Component Mapping (Updated to Exact Live)

| Section # | Live Section Title / Purpose | Live Class / ID | Component / Implementation | Reused / Dedicated |
|---|---|---|---|---|
| 1 | Hero Section (`Shopify Theme Customization Services`) | `hero-new-section` | `ServiceHeroVideoSection` (`bg-[#f7f4e9]`, 2 eyebrow spans, title, 2 CTAs, 4 partner badges, right looping video `why-dynamic-dreamz.mp4`) | Reused |
| 2 | Trusted by Leading Brands (12 brands) | `our-client-sec` | `IndustryBrandsSection` | Reused |
| 3 | Our Shopify Theme Customization Services (6 service cards) | `theme-customization-services yellow` | `ThemeCustomizationServicesSection` (`variant="yellow"`, 3 columns) | Reused |
| 4 | You like the theme. We make it work for your brand. (Split 2-col with 4 dark boxes) | `shopify-dev-team` | `ShopifyTeamBoxesSection` | Reused |
| 5 | Shopify Theme Customization Process (6 steps) | `our-development-process` | `OurDevelopmentProcessSection` (`columns={3}`) | Reused & Extended |
| 6 | Theme Customization vs. Custom Shopify Theme Development (2 comparison cards) | `choose-the-right-approach` | `ThemeCustomizationApproachSection` | Dedicated Reusable |
| 7 | Shopify Themes We Customize (32 theme cards) | `shopify-themes-customize-section` (`#customized-theme`) | `ShopifyThemesGridSection` (pista bg `#eff4ef`, 3 columns, clean card styling) | Reused & Updated |
| 8 | Experienced Shopify theme developers, supported by modern AI tools. (4 AI cards + callout) | `seo_safe_shopify_migration_section` | `AiEmpoweredDeliverySection` | Reused |
| 9 | Why choose us for Shopify theme customization? + 20+ Years of Ecommerce Delivery | `why_choose_dynamic_dreamz_for_shopify_migration` | `WhyChooseShopifyMigrationSection` | Reused |
| 10 | Snippets of Shopify Theme Customization Portfolio (8 projects) | `our-work-sec` (`#our_work`) | `PortfolioShowcaseSection` (`columns={4}`) | Reused |
| 11 | Choose the right theme customization engagement (3 pricing cards) | `white_label_wp_develop_plan_section shopify-plus-engagement mb-0` (`#our_white_label_pricing`) | `PricingTableSection` | Reused |
| 12 | Don't Just Take Our Word For It (11 video testimonials) | `happy-client-sec` | `HappyClientSection` | Reused |
| 13 | Frequently Asked Questions (10 accordion items) | `faq-sec` | `FaqSection` | Reused |

*Note: The live page ends with the FAQ Section; there is no bottom CTA banner on the live page.*

---

## 3. Typography & Styling Specifications

- **Heading Font**: Montserrat (`font-sans font-bold text-ink`) matching live site computed font hierarchy.
- **Hero Title**: `text-[50px] leading-[60px] font-medium font-montreal-medium text-ink` (desktop), `text-[40px] leading-[50px]` (tablet), `text-[30px] leading-[40px]` (mobile).
- **Hero Background**: `#f7f4e9` (`var(--lightcream)`).
- **Pista Background**: `#eff4ef` (`var(--pista)`), used in Themes section and Left Approach card.
- **Dark Backgrounds**: `#192019` (`shopify-dev-team`), `#171e16` (`why_choose_dynamic_dreamz_for_shopify_migration`).
- **Brand Colors**: Theme red `#ad5151`, text `#282828`, muted `#535353`, border line `rgba(40,40,40,0.1)`.
- **Card Backgrounds**: `#ffffff` with subtle borders (`rgba(40,40,40,0.1)`) and border-radius `20px` / `24px`.
- **Theme Cards**: Clean rounded-3xl cards with top screenshot (`pb-[90.75%] object-cover rounded-[17px]`), title (`text-lg font-bold text-ink`), and `Customize <Name>` with up-right arrow SVG.

---

## 4. Asset Deduplication & Integrity

- Total unique assets indexed in `public/assets/`: 0 duplicate sha256 checksums.
- All portfolio store screens reused from canonical paths in `public/assets/`.
- All client logos reused from canonical `public/assets/clients/`.
- All partner badges reused from canonical `public/assets/proof/` and `public/assets/reviews/`.
- Theme thumbnails canonical in `public/assets/shopify-theme-customization/themes/`.

---

## 5. Visual Verification & Comparison

- **Live vs Local Screenshots**:
  - Desktop (1440x900): `scratch/live-desktop.png` vs `scratch/local-desktop.png` - Visual parity confirmed for hero video, double eyebrows, 4 badges, trusted brands, service cards, and grid alignment.
  - Tablet (768x1024): `scratch/live-tablet.png` vs `scratch/local-tablet.png` - Responsive layout confirmed.
  - Mobile (390x844): `scratch/live-mobile.png` vs `scratch/local-mobile.png` - Responsive layout confirmed with stacked columns, proper touch targets, and correct font scalings.
  - Full Page Sections: `scratch/live-full-1.png` vs `scratch/local-full-1.png` - Exactly 13 sections in 1-to-1 order matching live site. No extra CTA banner at the bottom (live page ends cleanly at FAQ).
  - Portfolio Section: `scratch/live-portfolio-viewport.png` vs `scratch/local-portfolio-viewport.png` - All 8 portfolio project cards display their authentic canonical images with 100% SHA-256 match to live assets, correct tags, titles, and round up-right arrow buttons.
  - FAQ Section: `scratch/live-faq-viewport.png` vs `scratch/local-faq-viewport.png` - Exactly matches live site 2-column layout (41% left sticky title, 57% right accordion), circle-cross expandable icons, transparent background with `rgba(40,40,40,0.1)` divider borders, and `#fafaf7` background.
- **Automated Verification Passes**:
  - `npm run check:urls`: Pass (all URLs slashless, no trailing slash).
  - `npm run check:component-content`: Pass (all text in `src/content/**`, strict content boundary honored).
  - `npm run check:asset-duplicates`: Pass (0 duplicate hash groups across all 1,708+ assets in `public/assets/`).
  - `npm run lint`: Pass (0 errors or warnings).
  - `npm run build`: Pass (successful production App Router prerendering of `/shopify-theme-customization`).


