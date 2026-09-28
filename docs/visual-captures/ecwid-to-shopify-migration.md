# Visual Parity Capture: Ecwid to Shopify Migration

**Route**: `/ecwid-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/ecwid-to-shopify-migration/`
**Date**: 2026-09-28
**Status**: Parity Achieved (100% Match with Live Site)

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/ecwid-to-shopify-migration/`
- **Hero Section**: `hero-new-section` with dual eyebrow ("Established in 2006", "Shopify Platinum Partner"), H1 "Ecwid to Shopify Migration Services", description paragraph, primary CTA "REQUEST A QUOTE" (`/request-quote`), 4 proof/rating badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus), and right illustration graphic `ecwid-to-shopify-migration-hero.svg` (469x224).
- **Brands Section**: `our-client-sec` with background `#FBEED5`, heading "Trusted by Leading Brands", and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Benefits Section**: `theme-customization-services yellow` (`#fafaf7`) with eyebrow "Benefits", H2 "Benefits of Moving from Ecwid to Shopify", intro paragraph, and 5 benefit cards with red SVG icons:
  1. User Friendly Platform
  2. More Customization Options
  3. Access to Shopify's App Store
  4. Scalability and Growth
  5. Built In Payment and Security Features
- **Migration Process Section**: `process-steps-section migration-process` (`variant="cards"`) with eyebrow "Migration process", H2 "Ecwid to Shopify Migration Process", and 6 sequential step cards:
  - Step 01: Keep Your Business Running (3-col desktop layout, 50% tablet, stacked mobile)
  - Step 02: Prepare Shopify Platform for Data Migration (3-col desktop layout, 50% tablet, stacked mobile)
  - Step 03: Set Up a Custom Theme on Shopify (3-col desktop layout, 100% tablet, stacked mobile)
  - Step 04: Migrate Your Data (Full width card with 5 sub-boxes: Products, Product Categories, Customers, Orders, Other Data, each featuring multi-column bullet lists with red dot markers)
  - Step 05: Test the Site (Full width card with 4 sub-boxes: Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  - Step 06: Go Live (Full width card with migration completion details)
- **Client Stories Section**: `happy-client-sec` with eyebrow "Client Stories", H2 "Our Customers' Testimonials", description, and video review carousel with 11 client testimonials and video player modal dialog.
- **FAQs Section**: `faq-sec` in two-column split sticky layout (`SplitFaqSection`) containing 6 accordion items with expandable plus/minus buttons matching live copy.

## Local Implementation & Component Reuse
- `ServiceHeroVideoSection`: Reused for the split hero section with dual eyebrow badges, 4 rating badges, primary CTA button, and hero graphic.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 canonical brand partner logos.
- `ThemeCustomizationServicesSection`: Reused with `variant="yellow"` and typed `MigrationPlatformIcon` components for the 5 benefits cards.
- `MigrationProcessSection`: Reused with `variant="cards"`, grid-based sub-boxes, and bullet-list rendering for Steps 4 and 5.
- `HappyClientSection`: Reused for the 11 video client review cards and responsive carousel.
- `SplitFaqSection`: Reused for the 6 FAQ items with two-column split layout, sticky title, and circle-cross accordions.

## Asset Discovery & Deduplication
- 0 duplicated assets generated.
- Hero graphic `/assets/ecwid-to-shopify-migration/ecwid-to-shopify-migration-hero.svg` verified.
- All 12 partner brand logos reused from canonical `public/assets/clients/`.
- All 4 proof badges reused from canonical `public/assets/proof/`.

## Responsive & Parity Checks
- [x] Desktop (1440px): Verified visual match with live Chrome structure.
- [x] Tablet (1024px): Verified responsive grid wrapping and layout parity.
- [x] Mobile (375px): Verified single-column stacked layout, bullet margins, and card padding.
- [x] No layout shifts or text overlaps.
- [x] Strict content boundary preserved: 0 business copy hardcoded in component files (`npm run check:component-content`).
- [x] Strict URL policy enforced (`npm run check:urls`).
- [x] Production build passes cleanly.

## Unresolved Discrepancies
- None. Exact live visual structure, section order, copy, responsive behavior, and schema achieved.
