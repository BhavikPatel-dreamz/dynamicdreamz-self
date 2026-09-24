# Visual Parity Capture: Magento to Shopify Plus Migration

**Route**: `/magento-to-shopify-plus-migration`  
**Live URL**: `https://www.dynamicdreamz.com/magento-to-shopify-plus-migration/`  
**Date**: 2026-09-24  
**Status**: Production Ready & Exact Live Parity Achieved  

## Live Site Inspection & Structure

Inspection of `https://www.dynamicdreamz.com/magento-to-shopify-plus-migration/` and View Page Source confirmed 8 sections in exact order:

1. **Hero Section (`hero-new-section`)**:
   - Eyebrows: `Established in 2006` | `Shopify Platinum Partner`
   - Heading (H1): `Magento to Shopify Plus Migration Services`
   - Subtitle (`span.h4`): `Do you want to switch from Magento to Shopify Plus?`
   - Description: `Hire our Magento to Shopify Plus Migration expert by Dynamic Dreamz. It offers a smooth, scalable, and user-friendly eCommerce solution. Simplify operations, boost performance, and unlock advanced tools for growth.`
   - Primary CTA: `Request a Quote` -> `/request-quote`
   - 4 Partner / Review Badges (`global_brands_grid_wrap`):
     - Shopify Platinum Partner (`/assets/proof/shopify-platinum-partner.svg`)
     - Clutch 4.9 rating (`/assets/proof/clutch-rating.svg`)
     - Trustpilot 4.9 TrustScore (`/assets/proof/trustpilot-rating.svg`)
     - Upwork Top Rated Plus (`/assets/proof/upwork-top-rated-plus.svg`)
   - Hero Image (`hero-img`): `/assets/magento-to-shopify-plus-migration/magento-to-shopify-plus-migration-hero.svg` (SHA256 verified identical to live) with `mix-blend-mode: darken`.

2. **Brands Section (`our-client-sec`)**:
   - Heading (H2): `Trusted by Leading Brands`
   - 12 Partner brand logos: Supertails, Eleven Eleven, Bellavita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit.

3. **Why Choose Magento to Shopify Plus Migration? (`theme-customization-services yellow`)**:
   - Eyebrow: `Why Migrate`
   - Heading (H2): `Why Choose Magento to Shopify Plus Migration?`
   - Intro paragraph explaining scalability, simplicity, and features.
   - 12 Benefit cards in a 3-column grid with 24x24 line SVGs (`stroke="#AD5151"`):
     1. No Server Management
     2. No Reindexing
     3. No Security Issues
     4. Multiple Stores Feature
     5. Built-in B2B Module
     6. Best Checkout Experience
     7. Ease of Use
     8. 24/7 Support
     9. Simplified Operations
     10. Scalability
     11. Advanced Features
     12. Cost Efficiency

4. **What Data Can We Transfer During Migration? (`city-page-why-choose-boxes`)**:
   - Eyebrow: `Data We Can Transfer`
   - Heading (H2): `What Data Can We Transfer During Migration?`
   - Intro paragraph on seamless and secure data migration.
   - 5 Data category cards in a 5-column grid (`bg-[#eff4ef]`):
     1. Products & Categories
     2. Customer Data
     3. Orders & Transactions
     4. Content
     5. SEO Settings

5. **How do We Migrate from Magento to Shopify plus​? (`theme-customization-services pb-0 transparent`)**:
   - Eyebrow: `How We Migrate`
   - Heading (H2): `How do We Migrate from Magento to Shopify plus​?`
   - Intro paragraph on step-by-step migration process.
   - 6 Process step boxes with 24x24 line SVGs (`stroke="#AD5151"`):
     1. Audit & Plan
     2. Custom Design
     3. Development
     4. Data Migration
     5. Testing
     6. Launch

6. **Why Choose Dynamic Dreamz for Migration Services? (`how-to-choose-spa-sec`)**:
   - Eyebrow: `Why Dynamic Dreamz`
   - Heading (H2): `Why Choose Dynamic Dreamz for Migration Services?`
   - Intro paragraph highlighting Shopify Plus Partner recognition.
   - 8 Numbered reason cards (01 to 08) in a 4-column border grid with circular numbering badges:
     1. Proven Track Record (migrated 100+ stores worldwide)
     2. Expertise
     3. Custom Solutions
     4. Smooth Data Transfer
     5. SEO Expertise
     6. Comprehensive Services
     7. Minimal Downtime
     8. Post-Migration Support

7. **Client Stories / Testimonials Section (`happy-client-sec`)**:
   - Eyebrow: `Client Stories`
   - Heading (H2): `Don't Just Take Our Word For It`
   - Intro paragraph on direct client experiences.
   - 11 Video testimonial cards in an interactive slider with video popups:
     1. Shari Leidich (Max Sweets)
     2. Rebekah Wymer (Myla Jane)
     3. Thommas Linnrose (Art Copenhagen)
     4. Zoe wang (Maison Zifan)
     5. Clinton De Vere (Clinton De Vere Art)
     6. Fernando Arias (LGXNDS)
     7. Alec Torelli (Conscious Poker)
     8. William Petz (Quite Events)
     9. William ST Baker (Elite Element Electronics)
     10. Kerri Imrie (teanow.com.au)
     11. Brandon (USA)

8. **Frequently Asked Questions (`faq-sec`)**:
   - Heading (H2): `Frequently Asked Questions`
   - 8 Accordion items with accurate live answers.

## Local Implementation & Component Reuse

- `ServiceHeroVideoSection`: Reused for the exact `hero-new-section` layout with eyebrows, title, subtitle, CTA button, 4 partner/review badges, and hero SVG image.
- `IndustryBrandsSection`: Reused for `our-client-sec` with `ClientLogoSlider` for 12 brand logos.
- `ThemeCustomizationServicesSection`: Reused twice:
  - Variant `yellow` for Section 3 (12 benefit cards with SVG icons).
  - Variant `transparent` with `pb-0` for Section 5 (6 migration process steps).
- `CityWhyChooseBoxesSection`: Reused for Section 4 with `columns={5}`, `bgClassName="bg-[#eff4ef]"`, and optional `iconNode` for crisp SVG rendering.
- `EvaluationFrameworkSection`: Reused for Section 6 (`how-to-choose-spa-sec`) with 8 numbered cards.
- `HappyClientSection`: Reused for Section 7 (`happy-client-sec`) with 11 video testimonial cards.
- `SplitFaqSection`: Reused for Section 8 (`faq-sec`) with 8 accordion FAQs.
- `MagentoPlusIcon`: Generalized SVG icon component rendering the exact 23 live line SVGs with zero runtime image latency.

## Asset Discovery & Deduplication

- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `proof/`, and `testimonials/`.
- Canonical hero asset preserved in `public/assets/magento-to-shopify-plus-migration/magento-to-shopify-plus-migration-hero.svg` (SHA256 verified identical to live).
- Cleaned up 25 obsolete/unused gradient SVGs from previous incomplete migration.

## Responsive & Parity Checks

- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/magento-to-shopify-plus-migration`)
- [x] Valid VideoObject schema matching visible video testimonials
- [x] Valid Service, FAQPage, BreadcrumbList schema matching visible page content
