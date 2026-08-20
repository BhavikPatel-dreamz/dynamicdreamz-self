# Visual Parity Capture: Salesforce to Shopify Migration

**Route**: `/salesforce-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/salesforce-to-shopify-migration/`
**Date**: 2026-08-20
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/salesforce-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "Salesforce to Shopify Migration Service", intro paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `salesforce-shopify-migration-hero.svg` with alt "Salesforce to Shopify Migration Service Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why Migrate from Salesforce to Shopify?" and explanation paragraph.
- **Benefits Section**: `shopify-customization-services-sec` with 5 benefit cards: User Friendly Interface, Better Customization Options, Secure and Reliable, Cost Effective Scalability, Access to Shopify’s App Store.
- **Considerations Section**: `why-choose-wordpress-sec two-col-center-img` layout with central Salesforce graphic and 4 feature items (Data Mapping and Cleanup, SEO Considerations, Feature Compatibility, Redirect Strategy).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Set Up a Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders, Manufacturers, Coupons, Reviews, CMS Pages, Blogs)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **Why Choose Dynamic Dreamz Section**: `why_dynamic_dreamz_sec` with gradient background for 4 reasons (Experienced Team, Comprehensive Data Migration, Custom Theme Development, Reliable Support).
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 6 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 brand partner logos.
- `TextBoxSection`: Reused for "Why Migrate from Salesforce to Shopify?".
- `ShopifyReasonsSection`: Reused for 5 benefits of moving to Shopify.
- `TwoColCenterImageSection`: Reused for 4-item considerations layout with central graphic.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `ThemeWhyChooseSection`: Reused with `variant="left-icon"` with gradient background for "Why Choose Us".
- `HappyClientSection`: Reused for video client testimonials.
- `FaqSection`: Reused with `FaqAccordion` for 6 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/salesforce-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/salesforce-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
