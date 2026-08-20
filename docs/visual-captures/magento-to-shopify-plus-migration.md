# Visual Parity Capture: Magento to Shopify Plus Migration

**Route**: `/magento-to-shopify-plus-migration`
**Live URL**: `https://www.dynamicdreamz.com/magento-to-shopify-plus-migration/`
**Date**: 2026-08-20
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/magento-to-shopify-plus-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "Magento to Shopify Plus Migration", 2 intro paragraphs, primary CTA "Request a Quote" linking to `/request-quote`, hero image `magento-to-shopify-plus-migration-hero.svg` with alt "Magento to Shopify Plus Migration Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Benefits Section**: `benefit_box_sec justify-left` with heading "Why Choose Magento to Shopify Plus Migration?", intro paragraph, and 14 benefit cards (No Server Management, No Reindexing, No Security Issues, Multiple Stores Feature, Built-in B2B Module, Best Checkout Experience, Ease of Use, 24/7 Support, Simplified Operations, Scalability, Advanced Features, Cost Efficiency, Enhanced Security, Better Performance).
- **What Data Transfer Section**: `what-during-migration-sec` with gradient background `linear-gradient(97deg, #E8F9EF 28.5%, #E6FAFD 91.82%)`, centered header, and 5 data categories (Products & Categories, Customer Data, Orders & Transactions, Content, SEO Settings).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Audit & Plan
  2. Custom Design
  3. Development
  4. Data Migration
  5. Testing
  6. Launch
- **Partner Why Choose Section**: `hiring-services-sec` with gradient background, heading "Why Choose Dynamic Dreamz for Migration Services?", Shopify Plus Partner highlight, "Verify Our Partnership" CTA button linking to Shopify partner directory, and 5 reason cards (Proven Track Record, Expertise, Custom Solutions, Minimum Downtime, Post-Migration Support).
- **FAQs Section**: `faq-sec` containing 8 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 brand partner logos.
- `ShopifyAppBenefitsSection`: Reused with optional `description` for 14 benefit cards.
- `WhatDataTransferSection`: Reusable component for 5 data migration categories.
- `MigrationProcessSection`: Reused for 6-step sequential migration process.
- `PartnerWhyChooseSection`: Reusable component for Shopify Plus Partner proof and 5 reason cards.
- `FaqSection`: Reused with `FaqAccordion` for 8 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, and `services/`.
- Local dedicated assets located in `public/assets/magento-to-shopify-plus-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/magento-to-shopify-plus-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
