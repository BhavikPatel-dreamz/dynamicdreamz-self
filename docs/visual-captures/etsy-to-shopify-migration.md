# Visual Parity Capture: Etsy to Shopify Migration

**Route**: `/etsy-to-shopify-migration`
**Live URL**: `https://www.dynamicdreamz.com/etsy-to-shopify-migration/`
**Date**: 2026-09-28
**Status**: Parity Achieved (100% Match with Live Site)

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/etsy-to-shopify-migration/`
- **Hero Section**: `hero-new-section` with dual eyebrow ("Established in 2006", "Shopify Platinum Partner"), H1 "Etsy to Shopify Migration Services", description paragraph, primary CTA "REQUEST A QUOTE" (`/request-quote`), 4 proof/rating badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus), and right illustration graphic `etsy-to-shopify-migration-hero.svg` (469x224).
- **Brands Section**: `our-client-sec` with background `#FBEED5`, heading "Trusted by Leading Brands", and 12 partner brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
- **Why Migrate Section**: `theme-customization-services yellow` (`#fafaf7`) with eyebrow "Why Migrate", H2 "Why Migrate from Etsy to Shopify?", intro paragraph, and 6 feature cards with red SVG icons:
  1. Better Store Customization
  2. Advanced eCommerce Features
  3. Improved Scalability
  4. Powerful App Ecosystem
  5. Enhanced User Experience
  6. Better SEO & Marketing
- **Benefits Section**: `theme-customization-services transparent` with eyebrow "Benefits", H2 "Benefits of Moving from Etsy to Shopify", intro paragraph, and 5 benefit cards with red SVG icons:
  1. Greater Control Over Your Store
  2. Scalability for Growth
  3. Multiple Sales Channels
  4. Access to Shopify Apps
  5. SEO and Marketing Tools
- **Migration Process Section**: `process-steps-section migration-process` (`variant="cards"`) with eyebrow "Migration Process", H2 "Etsy to Shopify Migration Process", and 6 sequential step cards:
  - Step 01: Keep Your Business Running (3-col desktop layout, 50% tablet, stacked mobile)
  - Step 02: Prepare Shopify Platform for Data Migration (3-col desktop layout, 50% tablet, stacked mobile)
  - Step 03: Set Up a Custom Theme on Shopify (3-col desktop layout, 100% tablet, stacked mobile)
  - Step 04: Migrate Your Data (Full width card with 8 sub-boxes: Products, Product Categories, Customers, Orders, Coupons, Reviews, CMS Pages, Blogs, each featuring multi-column bullet lists with red dot markers)
  - Step 05: Test the Site (Full width card with 4 sub-boxes: Functional Validation, Data Validation, Performance Tests, Go Live Checklist)
  - Step 06: Go Live (Full width card with migration completion details)
- **Client Stories Section**: `happy-client-sec` with eyebrow "Client Stories", H2 "Our Customers' Testimonials", description, and video review carousel with 11 client testimonials and video player modal dialog.
- **FAQs Section**: `faq-sec` in two-column split sticky layout (`SplitFaqSection`) containing 8 accordion items with expandable plus/minus buttons matching live copy.

## Local Implementation & Component Reuse
- `ServiceHeroVideoSection`: Reused for the split hero section with dual eyebrow badges, 4 rating badges, primary CTA button, and hero graphic.
- `IndustryBrandsSection`: Reused with `ClientLogoSlider` for 12 canonical brand partner logos.
- `ThemeCustomizationServicesSection`: Reused with `variant="yellow"` and typed `MigrationPlatformIcon` components for the 6 why-migrate cards.
- `ThemeCustomizationServicesSection`: Reused with `variant="transparent"` and typed `MigrationPlatformIcon` components for the 5 benefits cards.
- `MigrationProcessSection`: Reused with `variant="cards"`, grid-based sub-boxes, and bullet-list rendering for Steps 4 and 5.
- `HappyClientSection`: Reused for the 11 video client review cards and responsive carousel.
- `SplitFaqSection`: Reused for the 8 FAQ items with two-column split layout, sticky title, and circle-cross accordions.

## Asset Discovery & Deduplication
- 0 duplicated assets generated.
- Hero graphic `/assets/etsy-to-shopify-migration/etsy-to-shopify-migration-hero.svg` verified.
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
