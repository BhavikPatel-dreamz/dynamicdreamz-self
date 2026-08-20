# Visual Parity Capture: Shopify Plus Migration Agency

**Route**: `/shopify-plus-migration-agency`
**Live URL**: `https://www.dynamicdreamz.com/shopify-plus-migration-agency/`
**Date**: 2026-08-20
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/shopify-plus-migration-agency/`
- **Hero Section**: `inner-hero-sec full-width-sec mxw-100` centered hero layout with H1 "Shopify Plus Migration Agency​", full-width intro paragraph with `<strong>` tags, and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Introduction Text Box**: `single-text-box-sec` with centered H2 "Why Choose a Shopify Plus Migration Agency?" and explanatory paragraph.
- **Services Section**: `benefit_box_sec pt-0` with heading "Our Shopify Plus Migration Agency Services", subtitle, and 3 service cards (Data Migration, Design Migration, Post-Migration Support).
- **Migration Process Section**: `migration-process-step-sec` with 4 sequential steps:
  1. Plan & Prepare
  2. Set Up Your Shopify Plus Store
  3. Migrate & Test
  4. Launch & Support
- **Platforms Grid**: `migration-services-sec pt-0` with heading "Migrate From Various Platforms", detailed explanation, and 12 platform migration cards (Shopify Theme, Magento to Plus, Magento, WooCommerce, BigCommerce, Salesforce, PrestaShop, Squarespace, Wix, Ecwid, Square, Etsy).
- **Secondary Text Box**: `single-text-box-sec` with heading "Why Choose Dynamic Dreamz as a Shopify Plus Migration Agency​" and paragraph highlighting 15+ years experience and Shopify Plus Partner status.
- **FAQs Section**: `faq-sec` containing 5 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused with `variant="centered"` and `reviews` array.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 brand partner logos.
- `TextBoxSection`: Reused for the two single-text-box sections.
- `ShopifyAppBenefitsSection`: Reused for the 3 migration service cards.
- `MigrationProcessSection`: Reused for 4-step sequential migration process.
- `ShopifyMigrationServicesSection`: Reused for 12 platform migration cards with rich header description.
- `FaqSection`: Reused with `FaqAccordion` for 5 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `shopify-migration/`, and `magento-to-shopify-plus-migration/`.
- 1 unique SVG stored under `public/assets/shopify-plus-migration-agency/design-migration.svg`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/shopify-plus-migration-agency`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- All cards and links resolve to active internal routes without trailing slashes.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
