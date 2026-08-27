# Visual Parity Capture: Wix to Shopify Migration

**Route**: `/wix-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/wix-to-shopify-migration/`
**Date**: 2026-08-27
**Status**: Testimonial and FAQ wiring corrected

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/wix-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout featuring H1 "Wix to Shopify Migration", introductory paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `wix-to-shopify-migration-img.svg` with alt "Wix to Shopify Migration Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 10 partner brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why Migrate from Wix to Shopify?" and full explanation paragraph.
- **Considerations Section**: `why-choose-wordpress-sec two-col-center-img` layout with central WIX graphic and 4 feature items (SEO Settings, App Compatibility, Custom Designs, Payment & Shipping Settings).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Setup Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **What After Migration Section**: `why_dynamic_dreamz_sec` with 4 post-migration cards (SEO & Redirects, App Setup, Testing & Functionality, Analytics & Tracking).
- **Why Choose Dynamic Dreamz Section**: `shopify-customization-services-sec` with carousel/grid for reasons (Expertise, Full Data Migration, Custom Themes, Ongoing Support).
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 10 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for the hero area with `reviews` array support and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 10 brand partner logos.
- `TextBoxSection`: Reused with background `#fbf7ed` for "Why Migrate from Wix to Shopify?".
- `TwoColCenterImageSection`: Reused for the 4-item considerations layout with central graphic.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `ThemeWhyChooseSection`: Reused with `variant="top-icon"` for "What After" items.
- `ShopifyReasonsSection`: Reused for the 4 reasons carousel/grid.
- `HappyClientSection`: Reused for video client testimonials.
- `FaqSection`: Reused with `FaqAccordion` for 10 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/wix-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/wix-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- The Wix testimonial section uses the shared client-stories carousel with Wix-specific accessible control labels and locally configured testimonial items.
- The split FAQ section uses the Wix FAQ collection and a Wix-specific accordion ID prefix.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
