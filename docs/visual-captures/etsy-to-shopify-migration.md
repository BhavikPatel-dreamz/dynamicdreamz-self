# Visual Parity Capture: Etsy to Shopify Migration

**Route**: `/etsy-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/etsy-to-shopify-migration/`
**Date**: 2026-08-27
**Status**: Updated for carousel parity

## Benefits Carousel Update (2026-08-27)
- **Reference state**: The benefits cards now use the shared full-bleed carousel treatment instead of the earlier grid.
- **Desktop, tablet, and mobile viewport behavior**: The horizontal scroll viewport spans the browser width. The initial card alignment comes from a responsive container-equivalent offset on the inner track, not from padding or clipping on the viewport.
- **Scroll alignment**: `scroll-padding-inline-start` matches the inner-track offset at every breakpoint, so snapped cards align with the original container edge.
- **Interaction state**: The viewport uses horizontal overflow with mandatory inline snapping, and its content-width track supports mouse drag, touch swipe, trackpad, and native horizontal scrolling. After movement, preceding cards may remain partially visible between the browser edge and the container-aligned active card.
- **Responsive offsets inspected**: 16px mobile gutter; centered 540px, 720px, 960px, 1180px, and 1360px container widths with their matching inline gutters.
- **Background**: The benefits section uses the live-reference 97.18-degree gradient from `#e8f9ef` at 28.5% to `#e6fafd` at 91.82%, expressed with canonical Tailwind gradient utilities.
- **Implementation source inspected**: `ShopifyReasonsSection` and its `HorizontalDragScroll` full-bleed carousel path.
- **Remaining differences**: None identified for the requested viewport and track-offset behavior.

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/etsy-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "Etsy to Shopify Migration", introductory paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `etsy-to-shopify-migration-hero.svg` with alt "Etsy to Shopify Migration Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 10 partner brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why Migrate from Etsy to Shopify?" and full explanation paragraph.
- **Benefits Section**: `shopify-customization-services-sec` with 5 benefit cards: Greater Control Over Your Store, Scalability for Growth, Multiple Sales Channels, Access to Shopify Apps, SEO and Marketing Tools.
- **Considerations Section**: `why-choose-wordpress-sec two-col-center-img` layout with central Etsy graphic and 4 feature items (Data Transfer, Store Design, SEO Settings, Payment and Shipping Options).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Set Up a Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders, Coupons, Reviews, CMS Pages, Blogs)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **What After Migration Section**: `why_dynamic_dreamz_sec` with 4 post-migration cards (Optimize Your Store, Update SEO Settings, Marketing Integration, Monitor Store Performance).
- **Why Choose Dynamic Dreamz Section**: `why_dynamic_dreamz_sec` with gradient background for 4 reasons (Skilled Migration Experts, Complete Data Transfer, Custom Shopify Themes, Ongoing Support).
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 8 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 10 brand partner logos.
- `TextBoxSection`: Reused for "Why Migrate from Etsy to Shopify?".
- `ShopifyReasonsSection`: Reused for 5 benefits of moving to Shopify.
- `TwoColCenterImageSection`: Reused for 4-item considerations layout with central graphic.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `ThemeWhyChooseSection`: Reused with `variant="top-icon"` for "What After" items and `variant="left-icon"` with gradient background for "Why Choose Us".
- `HappyClientSection`: Reused for video client testimonials.
- `FaqSection`: Reused with `FaqAccordion` for 8 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/etsy-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/etsy-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- The testimonial section uses the shared client-stories carousel with content-owned eyebrow, items, and accessible previous/next control labels.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
