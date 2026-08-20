# Visual Parity Capture: Magento to Shopify Migration

**Route**: `/magento-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/magento-to-shopify-migration/`
**Date**: 2026-08-20
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/magento-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec magento-to-shopify` layout with H1 "Migration from Magento to Shopify", intro paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `magento-to-shopify-migration-hero.svg` with alt "Magento to Shopify Migration Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why Do You Need to migrate from Magento to Shopify?" and 2 explanation paragraphs discussing Magento 1 End-of-Life and platform choices.
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Setup Custom Theme on the Shopify Platform
  4. Migrate Your Data (Products, Product Categories, Manufacturers, Customers, Orders, Coupons)
  5. Test the site (QA process validation, data verification, speed tests, go-live checklist)
  6. Go live (Deployment process checklist and off-hours domain switch)
- **FAQs Section**: `faq-sec` containing 9 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 brand partner logos.
- `TextBoxSection`: Reused with `paragraphs` array for the 2-paragraph "Why Do You Need to migrate from Magento to Shopify?".
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `FaqSection`: Reused with `FaqAccordion` for 9 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/magento-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/magento-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
