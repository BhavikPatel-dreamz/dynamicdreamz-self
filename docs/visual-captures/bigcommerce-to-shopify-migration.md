# Visual Parity Capture: BigCommerce to Shopify Migration

**Route**: `/bigcommerce-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/bigcommerce-to-shopify-migration/`
**Date**: 2026-09-02
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/bigcommerce-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "BigCommerce to Shopify Migration", intro paragraph "Are you looking for BigCommerce to Shopify Migration without downtime and data loss? Hire a Shopify expert from Dynamic Dreamz for a smooth and successful migration.", primary CTA "Request a Quote" linking to `/request-quote`, hero image `bigcommerce-shopify-migration-hero.svg` with alt "BigCommerce to Shopify Migration icon", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by\nLeading Brands" and 10 partner brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter Juice Bar, Circuit City).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why Migrate from BigCommerce to Shopify?" and explanation paragraph.
- **Difference Cards Section**: `difference_card_section bg-gradient-light mb-80` with H2 "BigCommerce VS Shopify" and 2 side-by-side platform comparison cards:
  - Shopify Card: Shopify logo, 4.5/5 rating with star image, Starting Price: $39/month, Free plan or trial: 3-day free trial then Starter Plan for $5/month, Number of templates: 200++, Pros: AI powered Shopify Magic tool, Unlimited products, Huge app market, 100+ payment options, Mobile responsive store, Cons: Additional app costs, Limited customization options, Lacks built in features, Most templates cost extra.
  - BigCommerce Card: BigCommerce logo, 4.3/5 rating with star image, Starting Price: $39/month, Free plan or trial: 15-day free trial, Number of templates: 160++, Pros: 0% transaction fees on all plans, Unlimited products, Multiple storefronts, International shipping options, Mobile responsive store, Cons: Slow performance, Limited customization options, No AI tools, No free custom domain.
- **Migration Process Section**: `migration-process-step-sec px-0` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Setup Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders, Coupon, Reviews, CMS Pages, Blogs)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **Why Choose Dynamic Dreamz Section**: `shopify-customization-services-sec mb-0` with carousel layout for 5 reasons:
  1. Professional Squad of Shopify Experts:
  2. End to End Migration Support
  3. Customizable Shopify Solutions
  4. Minimal Downtime Guarantee
  5. Post Migration Support
- **What We Provide / Data Secured Section**: `what-we-provide-sec` with id="services" containing 5 security feature boxes:
  1. Encrypted Data Transfer
  2. Comprehensive Backup Plans
  3. Secure Server Environment
  4. Data Integrity Checks
  5. Compliance with Shopify's Security Standards
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 9 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for split hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 10 brand partner logos.
- `TextBoxSection`: Reused for "Why Migrate from BigCommerce to Shopify?".
- `DifferenceCardSection`: Generalized reusable comparison card section for "BigCommerce VS Shopify" comparison.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `ShopifyReasonsSection`: Reused with `layout="carousel"` and `carouselFullBleed` for "Why Choose Dynamic Dreamz".
- `AgencyServicesSection`: Reused for "How Our Data Is Secured During Migration?" with 5 security boxes.
- `HappyClientSection`: Reused for video client testimonials.
- `SplitFaqSection`: Reused with `FaqAccordion` for 9 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/bigcommerce-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/bigcommerce-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
