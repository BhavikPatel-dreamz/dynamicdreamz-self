# Visual Parity Capture: Squarespace to Shopify Migration

**Route**: `/squarespace-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/squarespace-to-shopify-migration/`
**Date**: 2026-08-20
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/squarespace-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "Squarespace to Shopify Migration", intro paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `squarespace-shopify-migration-hero.svg` with alt "Squarespace to Shopify Migration Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why do Squarespace to Shopify Migration?" and explanation paragraph.
- **Benefits Section**: `shopify-customization-services-sec` with subtitle and 5 benefit cards: Enhanced eCommerce Features, Robust App Store, Better Payment Options, Scalability, 24/7 Customer Support.
- **Considerations Section**: `why-choose-wordpress-sec two-col-center-img` layout with subtitle, central Squarespace graphic, and 4 feature items (SEO Impact, Store Design, Apps & Integrations, Payment & Shipping Settings).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Setup Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders, Coupons, Reviews, CMS Pages, Blogs)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **What After Section**: `why_dynamic_dreamz_sec` with 4 post-migration tasks (SEO Redirects, App Integration, Store Testing, Performance Optimization).
- **Why Choose Dynamic Dreamz Section**: `why_dynamic_dreamz_sec` with gradient background for 4 reasons (Experienced Team, Comprehensive Data Migration, Custom Theme Development, Reliable Support).
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 7 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 brand partner logos.
- `TextBoxSection`: Reused for "Why do Squarespace to Shopify Migration?".
- `ShopifyReasonsSection`: Reused for 5 benefits of moving to Shopify.
- `TwoColCenterImageSection`: Reused for 4-item considerations layout with central graphic.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `ThemeWhyChooseSection`: Reused with `variant="top-icon"` for "What After" and `variant="left-icon"` with gradient background for "Why Choose Us".
- `HappyClientSection`: Reused for video client testimonials.
- `FaqSection`: Reused with `FaqAccordion` for 7 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/squarespace-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/squarespace-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
