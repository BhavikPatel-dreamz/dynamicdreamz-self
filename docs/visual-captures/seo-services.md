# Visual Parity Capture: SEO Services

**Route**: `/seo-services`
**Live URL**: `https://www.dynamicdreamz.com/seo-services/`
**Date**: 2026-09-02
**Status**: Parity Achieved

## Live Site Inspection
- **URL**: `https://www.dynamicdreamz.com/seo-services/`
- **Hero Section**: `inner-hero-sec full-width-sec shopify-theme-customization-sec` centered layout with H1 "Reduce Ad Spend by 70% With Organic Marketing", intro paragraph explaining organic growth and cost reduction, bold italic emphasis note (`<em><strong>...</strong></em>`), and 3 review badges (Clutch 132 reviews / 5.0, Upwork 2000+ reviews / 5.0, GoodFirms 72 reviews / 5.0) centered within `max-w-[480px]`.
- **Why Choose SEO Service Section**: `why_choose_seo_service bg-gradient-light` with H2 "Why Choose SEO Service", 5 bullet point pill items (`border-radius: 50px`, white background, icon bullet), and centered explanatory paragraph detailing reduction of ad spend by up to 70%.
- **Our SEO Services Section**: `what-we-provide-sec` (id="services") with H2 "Our SEO Services", split description on right, and 12 service cards (`services-box` in 2-column desktop grid with `#fafaf7` background, rounded corners, icons, and `#ad5151` `READ MORE ↗` links):
  1. Keyword Research & Strategy
  2. Link Building
  3. Technical SEO
  4. Local SEO
  5. On-Page SEO
  6. Off-Page SEO
  7. Franchise SEO
  8. Shopify SEO
  9. Amazon SEO
  10. eCommerce SEO
  11. Content Writing
  12. Conversion Rate Optimization (CRO)
- **SEO Services Designed to Deliver Outcomes Section**: `shopify-customization-services-sec` with centered H2 "SEO Services Designed to Deliver Outcomes", intro text, and 7 carousel outcome cards:
  1. Site Audit
  2. Competition Analysis
  3. Keyword Research
  4. Keyword Gap Analysis
  5. On-Page Optimization
  6. Off-Page Optimization
  7. Tracking and Reporting
- **Tools We Use Section**: `wordpress-page-builders_sec` (id="technologies") with H2 "Tools We Use", 11 tool cards in 5 columns with `.builder-logo` boxes (min-height 146px, 1px solid #d9d9d9 border, custom gradients) and logos (Google Analytics, Google Search Console, Ahrefs, SEMrush, Moz, Screaming Frog, Ubersuggest, Surfer SEO, Yoast SEO, GTmetrix, PageSpeed Insights), and bottom summary text.
- **Why Choose Us Section**: `why_dynamic_dreamz_sec dev two-column-icon-text-bg bg-gradient-light` with H2 "Why Choose Us", intro subtitle, and 6 reason cards in a 2-column bordered grid (Experience Matters, Dedicated SEO Professionals, Relationships & Results, We Are Consistently Getting Better, We Play Fair, Transparent Reporting).
- **Industries We Serve Section**: `industries-served-sec pb-80` with H2 "Industries We Serve", 13 industry cards in horizontal draggable carousel (Beauty & Cosmetics, Fashion & Apparel, Health & Nutrition, Food & Beverages, Pet Industry, eCommerce & Online Stores, Real Estate, Education & Online Courses, Travel & Hospitality, Finance & Insurance, Legal Services, Local Businesses, IT & Tech Startups), and bottom tailoring note.
- **FAQs Section**: `faq-sec` containing split 2-column layout with left heading "FAQs" and 8 right accordion FAQ items.
- **Let's Build / CTA Banner Section**: `lets-build-section` with gradient background, decorative circular shapes, H2 "Ready to Grow Without Paying for Ads Forever?", paragraph, and primary CTA button "Book a Free SEO Audit Today!" linking to `/request-quote`.

## Local Implementation & Component Reuse
- `ServiceHeroSection`: Reused with `variant="centered"`, centered `max-w-[880px]` text, italic bold secondary description, and centered review badges.
- `PillListSection`: Generalized reusable section matching `.why_choose_seo_service.bg-gradient-light` and `.seo_service_list`.
- `AgencyServicesSection`: Reused with `variant="compact"`, `headerLayout="split"`, `columns={2}`, `cardVariant="services-box"` for 12 SEO service boxes with `READ MORE ↗` links.
- `ShopifyReasonsSection`: Reused with `layout="carousel"` and `carouselFullBleed` for 7 outcome cards.
- `ShopifyThemeTechSection`: Reused with `columns={5}` for "Tools We Use" with custom tool gradients and logos in 5 columns.
- `ThemeWhyChooseSection`: Reused with `backgroundVariant="gradient"` for 6 reasons in a 2-column bordered grid.
- `IndustriesServedSection`: Reused with `description` and `bottomDescription` for 13 industry cards.
- `SplitFaqSection`: Reused with 2-column layout for 8 FAQ items.
- `LetsBuildSection`: Reusable CTA banner component matching `.lets-build-section`.

## Asset Discovery & Deduplication
- 0 duplicated assets generated (SHA-256 duplicate audit verified).
- Canonical assets reused for review badges, existing industry slides, and CTA background shapes.
- Clean dedicated assets stored under `public/assets/seo-services/`.

## Responsive & Parity Checks
- [x] Desktop (1200px+ / 1440px)
- [x] Tablet (768px - 1199px)
- [x] Mobile (320px - 767px / 390px)
- [x] No text overlap or layout shifts
- [x] Correct heading hierarchy (single H1, structured H2/H3)
- [x] No-trailing-slash URL policy enforced (`/seo-services`)

## Animation & Interaction
- Interactive FAQ accordions toggle smoothly with single-open state.
- Industry and outcome sliders support responsive touch/drag navigation.
- All CTA buttons and internal links resolve correctly.

## Unresolved Discrepancies
- None. Exact live visual structure, copy, and interaction model preserved and verified against side-by-side screenshot comparisons.
