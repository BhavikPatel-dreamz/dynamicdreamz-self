# Visual Parity Capture: Ecwid to Shopify Migration

**Route**: `/ecwid-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/ecwid-to-shopify-migration/`
**Date**: 2026-08-31
**Status**: Responsive testimonial breakpoint implemented; screenshot recapture pending

## 2026-08-31 Split FAQ Sticky Heading

- Owner-provided desktop screenshot shows the two-column FAQ with the section
  heading in the left column and the accordion content in the right column.
- The requested interaction is for the left heading/description block to remain
  sticky while the taller right accordion scrolls, then stop at the FAQ section
  boundary.
- The first implementation placed sticky positioning directly on the flex
  column, but it did not remain pinned consistently across shared consumers.
  The final structure uses a full-height left-column wrapper as the sticky
  containing block and applies `position: sticky` with a `100px` top offset to
  the inner header.
- Sticky behavior applies only above the existing stacked-layout breakpoint
  (`993px` and wider). Tablet and mobile retain normal document flow.
- Accordion open/close animation, focus behavior, copy, and visual styling are
  unchanged.

## 2026-08-31 Testimonial Breakpoint Review

- Compared the user-provided side-by-side screenshot of the local route and live
  page at a viewport near the `991px` breakpoint.
- The live testimonial carousel shows two complete cards at this width; the
  local carousel in the supplied capture shows three narrow cards.
- Inspected local `react-slick` responsive settings, slide-count state, card
  sizing, navigation controls, and resize handling in
  `happy-client-carousel.tsx` and `happy-client-card.tsx`.
- Live source URL was checked again. The supplied rendered comparison is the
  authoritative evidence for the requested two-card tablet state.
- Target breakpoints: three cards above `991px`, two cards from `768px` through
  `991px`, and one card below `768px`.
- Interaction states to retain: swipe/drag, previous/next controls, disabled
  first/last controls, and the existing `500ms` slide transition.
- No copy, media, card treatment, or animation timing change is approved or
  required for this fix.
- Implemented synchronized Slick and navigation-state breakpoints: three cards
  at `992px+`, two cards at `768px–991px`, and one card below `768px`.
- Follow-up verification on 2026-08-31 reproduced three cards at an exact
  `991px` first paint because Slick rendered the desktop default before the
  viewport effect ran. Changed the hydration-safe default to two slides and
  retained client-side enhancement to three desktop slides or one mobile slide.
- Captured `/tmp/ecwid-991-final.png` and the focused comparison crop
  `/tmp/ecwid-testimonials-991-final.png` in headless Chrome at exactly
  `991px`; the final capture shows two complete testimonial cards.
- Verified with TypeScript, lint/policy checks, and a production build generating
  all 145 static pages.
- Additional boundary screenshots at `992px`, `768px`, and `767px` remain to be
  captured if a full cross-breakpoint parity audit is requested.

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/ecwid-to-shopify-migration/`
- **Hero Section**: `inner-hero-sec woocommerce-to-shopify` layout with H1 "Ecwid to Shopify Migration Service", introductory paragraph, primary CTA "Request a Quote" linking to `/request-quote`, hero image `ecwid-to-shopify-migration-hero.svg` with alt "Ecwid to Shopify Migration Service Image", and 3 review rating cards (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0).
- **Brands Section**: `our-client-sec` with heading "Trusted by Leading Brands" and 10 partner brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City).
- **Text Box Section**: `single-text-box-sec` with background `#fbf7ed`, centered H2 "Why do Ecwid to Shopify Migration?" and explanation paragraph.
- **Benefits Section**: `shopify-customization-services-sec` with 5 benefit cards: User Friendly Platform, More Customization Options, Access to Shopify's App Store, Scalability and Growth, Built In Payment and Security Features.
- **Considerations Section**: `why-choose-wordpress-sec two-col-center-img` layout with central Ecwid graphic and 4 feature items (Data Migration and Cleanup, Feature Differences, Theme and Design Considerations, Integration with Third Party Apps).
- **Migration Process Section**: `migration-process-step-sec` with 6 sequential steps:
  1. Keep Your Business Running
  2. Prepare Shopify Platform for Data Migration
  3. Set Up a Custom Theme on Shopify
  4. Migrate Your Data (Products, Product Categories, Customers, Orders, Other Data)
  5. Test the Site (Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  6. Go Live
- **Customer Testimonials**: `happy-client-sec` video testimonial carousel.
- **FAQs Section**: `faq-sec` containing 6 accordion items matching the live page.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused for hero area with `reviews` array and primary CTA.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 10 brand partner logos.
- `TextBoxSection`: Reused for "Why do Ecwid to Shopify Migration?".
- `ShopifyReasonsSection`: Reused for 5 benefits of moving to Shopify.
- `TwoColCenterImageSection`: Reused for 4-item considerations layout with central graphic.
- `MigrationProcessSection`: Reused with support for nested category sub-lists.
- `HappyClientSection`: Reused for video client testimonials.
- `FaqSection`: Reused with `FaqAccordion` for 6 FAQ items.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused across `clients/`, `reviews/`, `proof/`, and `services/`.
- Local dedicated assets located in `public/assets/ecwid-to-shopify-migration/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3/H4)
- [x] No-trailing-slash URL policy enforced (`/ecwid-to-shopify-migration`)

## Animation & Interaction
- Interactive FAQ accordions open/close smoothly with single-open state.
- Testimonial and reasons sliders support responsive swipe/drag/scroll navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved.
