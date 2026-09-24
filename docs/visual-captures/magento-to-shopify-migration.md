# Visual Parity Capture: Magento to Shopify Migration

**Route**: `/magento-to-shopify-migration`  
**Live URL**: `https://www.dynamicdreamz.com/magento-to-shopify-migration/`  
**Date Checked**: 2026-09-24  
**Status**: Remigrated to exact live parity; verified against live DOM, CSS, assets, and responsive layout  

## Live Site Inspection & Structure

Inspection of `https://www.dynamicdreamz.com/magento-to-shopify-migration/` revealed the live page consists of 7 sections in order:

1. **Hero Section (`hero-new-section`)**:
   - Layout: Two-column split layout with `#f7f4e9` background.
   - Eyebrow: Dual tags `Established in 2006` and `Shopify Platinum Partner` with red accent bar.
   - H1: `Magento to Shopify Migration Services`.
   - Description: "Transform your eCommerce experience with our seamless Magento to Shopify migration services and unlock the full potential of your online store with Shopify."
   - Primary CTA: "REQUEST A QUOTE" linking to `/request-quote`.
   - Credibility Badges: 4 verification badges with external links:
     - Shopify Platinum Partner (`shopify-platinum-partner.svg`)
     - Clutch 4.9 rating (`clutch-rating.svg`)
     - Trustpilot 4.9 TrustScore (`trustpilot-rating.svg`)
     - Upwork Top Rated Plus (`upwork-top-rated-plus.svg`)
   - Visual: Right-column illustration `migration-to-shopify-img.svg` (493x292).

2. **Brand Partners Section (`our-client-sec`)**:
   - Background: `#FBEED5`.
   - Left column H2: `Trusted by Leading Brands`.
   - Right column: Infinite logo slider with 10 partner brands:
     - Ranavat (`/assets/clients/ranavat.svg`)
     - Prolash (`/assets/clients/prolash.svg`)
     - Tropicfeel (`/assets/clients/tropicfeel.svg`)
     - Perfect Locks (`/assets/clients/perfect-locks.svg`)
     - Bombay Shirt Company (`/assets/clients/bombay-shirt-company.svg`)
     - Kayfi (`/assets/clients/kayfi.svg`)
     - SimsDirect (`/assets/clients/simsdirect.svg`)
     - Kvaser (`/assets/clients/kvaser.svg`)
     - Nekter (`/assets/clients/nekter-colored.svg`)
     - Circuit City (`/assets/clients/circuit-city.svg`)

3. **Why Migrate Cards Section (`theme-customization-services yellow`)**:
   - Background: `#FAFAF7` (`var(--lightcream)`).
   - Eyebrow: `Why migrate`.
   - H2: `Why Do You Need to migrate from Magento to Shopify?`.
   - Description paragraph with inline strong tags for options.
   - 3-column card grid (2-column on tablet, single on mobile) with 6 distinct cards:
     1. Clock icon | `Magento 1 Is No Longer Supported`
     2. Dollar icon | `Reduce Maintenance Costs`
     3. Up-arrow graph icon | `Better Store Performance`
     4. Checklist icon | `Easy to Manage`
     5. Scalability icon | `Scalable for Business Growth`
     6. Shield icon | `Enhanced Security & Reliability`

4. **Migration Process Section (`process-steps-section migration-process`)**:
   - Eyebrow: `Migration Process` (`.eyebrow` with red accent bar: 30x2px desktop, 15x2px mobile, uppercase `#535353`).
   - H2: `Magento to Shopify Migration Process` (Neue Montreal Medium, 35px/49px desktop, 30px/42px tablet, 24px/31.2px mobile).
   - Card Padding & Borders: 25px desktop, 20px tablet/mobile; border `1px solid rgba(40,40,40,0.11)`; rounded `20px`; background `#fff`.
   - Typography:
     - Card H3: Neue Montreal Medium (`font-montreal-medium text-[20px] max-[991px]:text-[18px] font-normal leading-[1.44] text-ink`).
     - Card description: Montserrat Regular (`font-montserrat text-sm font-normal leading-6 text-[#535353]`).
     - Step indicator: `STEP 01` (`font-montserrat text-xs font-semibold uppercase text-brand-red mb-2.5`).
   - 6 sequential steps:
     - Steps 1–3: 3-column cards on desktop (`width: calc(33.3333% - 11px)`), tablet (`width: calc(50% - 8px)` for Steps 1 & 2; Step 3 is `width: 100%`), mobile (`width: 100% mb-4`):
       - Step 01: `Keep Your Business Running`
       - Step 02: `Prepare Shopify Platform for Data Migration`
       - Step 03: `Setup Custom Theme on the Shopify Platform`
     - Steps 4–6: Full-width container cards (`width: 100%`):
       - Step 04: `Migrate Your Data` with 6 nested sub-boxes in a 2-column grid desktop / 1-column tablet (Products, Categories, Manufacturers, Customers, Orders, Coupons), each with 3-column bullet lists (5-column on tablet, 4-column on 991px, 2-column on mobile, block on 575px) with 4px red circular dots. Sub-box titles use Neue Montreal Medium 18px.
       - Step 05: `Test the site` with 4 validation sub-boxes in a 4-column grid desktop / 2-column tablet / block mobile (Functional and Business Rule Validation, Data validation, Performance Test, Go live Checklist).
       - Step 06: `Go live` with 2 deployment procedure sub-boxes in a 2-column grid desktop / block mobile.
   - Section Spacing: `py-[50px]` with no artificial bottom margins, matching live page flow exactly.

5. **Why Choose Dynamic Dreamz Section (`how-to-choose-spa-sec pt-0`)**:
   - Eyebrow: `Why Dynamic Dreamz`.
   - H2: `Why Choose Dynamic Dreamz for Migration Services?`.
   - Description: "As a proud Shopify Plus Partner, we have been vetted and recognized by Shopify for our expertise in delivering Shopify solutions and exceptional results. Trust us to bring your business the full power of Shopify Plus with our migration from Magento to Shopify Plus​."
   - 8-card grid (4 columns on desktop, 2 on tablet, 1 on mobile) with circular numbered badges (`01` through `08`):
     1. `Proven Track Record`
     2. `Expertise`
     3. `Custom Solutions`
     4. `Smooth Data Transfer`
     5. `SEO Expertise`
     6. `Comprehensive Services`
     7. `Minimal Downtime`
     8. `Post-Migration Support`

6. **Client Video Testimonials Section (`happy-client-sec`)**:
   - Eyebrow: `Client Stories`.
   - H2: `Don't Just Take Our Word For It`.
   - Description: "Our client's satisfaction is the real test of our success. Discover how our specialized app development services have enabled companies to grow in the digital economy."
   - Interactive testimonial video carousel featuring 11 authentic client videos with video dialog modal.

7. **Frequently Asked Questions Section (`faq-sec`)**:
   - H2: `Frequently Asked Questions`.
   - Split layout with sticky header on desktop and 9 accordion items matching live questions & answers.

## Local Implementation & Component Reuse

- Reused `ServiceHeroVideoSection` for the hero area with `eyebrowSpans`, primary CTA, rating badges, and SVG graphic.
- Reused `IndustryBrandsSection` with `ClientLogoSlider` for the 10 brand partner logos.
- Reused `ThemeCustomizationServicesSection` with `variant="yellow"` and typed `MagentoMigrationIcon` helper for the 6 why-migrate cards.
- Extended `MigrationProcessSection` with `variant="cards"` to support the live site's card grid and nested sub-boxes layout while keeping all existing consumers intact.
- Reused `EvaluationFrameworkSection` (`className="pt-0"`) for the 8-item Why Choose Dynamic Dreamz grid.
- Reused `HappyClientSection` with `shopifyPlusAgencyTestimonials` for the 11 video testimonial stories.
- Reused `SplitFaqSection` for the 9 FAQ accordion items.

## Asset Discovery & Zero Duplicates

- 0 duplicate asset files created (SHA-256 duplicate audit verified across all 1723 assets).
- Reused canonical partner logos (`/assets/clients/*`), rating badges (`/assets/proof/*`), and hero graphic (`/assets/magento-to-shopify-migration/magento-to-shopify-migration-hero.svg`).
- Stored canonical 1200x630 OG image under `/assets/magento-to-shopify-migration/magento-to-shopify-migration-og.png` (41KB).

## Responsive Verification

- **Desktop (1440px / 1200px+)**: Multi-column grids, split hero, 3-column process steps, 4-column framework items, sticky FAQ header.
- **Tablet (768px - 1199px)**: 2-column why-migrate cards, 2-column process steps, 2-column framework items.
- **Mobile (320px - 767px / 390px)**: Single-column stacked cards, full-width buttons, horizontal drag/scroll sliders, responsive typography.
- No horizontal overflow, no text collision, correct heading order (one H1, structured H2/H3/H4).
- No trailing slashes in route or internal links (`/magento-to-shopify-migration`).
