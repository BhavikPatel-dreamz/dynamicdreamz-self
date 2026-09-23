# Visual Parity Capture: Shopify Development in Miami

- **Route**: `/shopify-development-in-miami`
- **Live URL Reference**: `https://www.dynamicdreamz.com/shopify-development-in-miami/`
- **Capture Date**: 2026-09-23
- **Status**: Verified
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844
- **Captured Artifacts**:
  - `scratch/live-miami-desktop-1440.png`
  - `scratch/live-miami-desktop-full.png`
  - `scratch/live-miami-tablet-768.png`
  - `scratch/live-miami-tablet-full.png`
  - `scratch/live-miami-mobile-390.png`
  - `scratch/live-miami-mobile-full.png`

---

## 1. Visual References & Page Structure

### Live CSS Sources Inspected
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/hero_new_section.css`
  - `.hero-new-section` with dual eyebrow badges (`Shopify Development` • `Miami`), H1 heading, dual CTAs ("Get In Touch", "Explore Shopify Services"), 4 partner recognition badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus), and 7-slide tablet mockup slider (`CityHeroTabletSlider`) with floating badges.
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `.our-client-sec` with eyebrow "Trusted by Leading Brands" and 12 brand logos (`industryBrandLogos`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_counter.css`
  - `.city-page-counter` with eyebrow "Shopify Development Company in Miami", H2 "Choose Dynamic Dreamz as the Best Shopify Development Company in Miami", description, and 4 stat counter cards (20+, 150+, 5,000+, 2500+).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_boxes.css`
  - `.city-page-why-choose-boxes` with eyebrow "Why Shopify", H2 "Why Shopify is the Right Platform for Miami Businesses?", and 5 feature cards.
- `/wp-content/themes/dynamicdreamz/assets/css/services/main.css`
  - `.what-we-provide-sec` (2-column services grid, 8 cards with icons, descriptions, and read-more links where present).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/our_development_process.css`
  - `.our-development-process` with eyebrow "How We Work", H2 "Our Shopify Development Process", description, and 4 sequential process cards (`Step 01` to `Step 04`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/city_page_why_choose_dynamic_dreamz.css`
  - `.city-page-why-choose-dynamic.pb-0` (3-column benefits grid, 6 cards with icons and descriptions).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/projects_section.css`
  - `.our-work-sec` (4-column Shopify portfolio showcase with 8 featured projects, split-header layout, and CTA button "View our work" linking to `/our-work`).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/client_review_section.css`
  - `.happy-client-sec` (video testimonial carousel starting with Shari Leidich from Max Sweets).
- `/wp-content/themes/dynamicdreamz/assets/css/flexible-css/faqs_section.css`
  - `.faq-sec` (2-column split FAQ layout with sticky left heading and 8 accordion items with circular +/- indicators).
- Bottom CTAs:
  - `.request-banner`: centered H3 ("Want us to help you with your online store?") with button "request a quote" linking to `/request-quote`.
  - `.book-intro-call-section.pt-0`: split layout with inquiry form ("Let's Build Something Great Together") on the left and "Book an Intro Call" card on the right with button "Book A Call".

---

## 2. Page Section Order & Component Mapping

| Section # | Live Section Class / Purpose | Component / Implementation | Status |
|---|---|---|---|
| 1 | `hero-new-section` (dual eyebrow, H1, dual CTAs, 4 partner badges, 7-slide tablet mockup slider) | `CityPageHeroSection` | Replaced legacy `ServiceHeroSection` |
| 2 | `our-client-sec` (12 brand logos) | `IndustryBrandsSection` | Reused (`industryBrandLogos`) |
| 3 | `city-page-counter` (4 counters: 20+, 150+, 5,000+, 2500+) | `CityPageCounterSection` | Replaced legacy `TextBoxSection` |
| 4 | `city-page-why-choose-boxes` (Why Shopify: 5 cards) | `CityWhyChooseBoxesSection` | Replaced legacy `ShopifyAppBenefitsSection` |
| 5 | `what-we-provide-sec` (Our Shopify Development Services: 8 cards) | `AgencyServicesSection` | Reused |
| 6 | `our-development-process` (Our Shopify Development Process: 4 steps) | `OurDevelopmentProcessSection` | Replaced legacy `ProcessWaveSection` |
| 7 | `city-page-why-choose-dynamic pb-0` (Why Dynamic Dreamz: 6 cards) | `CityWhyChooseBoxesSection` (`columns={3}`) | Replaced legacy `ShopifyReasonsSection` |
| 8 | `our-work-sec` (Our Work: 8 portfolio cards, split header, "View our work" CTA) | `PortfolioShowcaseSection` | Reused |
| 9 | `happy-client-sec` (Client Stories: 11 video testimonial cards) | `HappyClientSection` | Reused |
| 10 | `faq-sec` (Frequently Asked Questions: 8 items in 2-column split layout) | `SplitFaqSection` | Reused |
| 11 | `request-banner` (Bottom CTA banner: "Want us to help you with your online store?") | `CtaBannerSection` | Reused |
| 12 | `book-intro-call-section pt-0` (Contact form + Book an Intro Call) | `BookIntroCallSection` | Reused (ordered exactly as live site) |

---

## 3. Responsive Breakpoints & Visual Inspection

- **Desktop (1440px)**:
  - Hero displays split layout: left content (eyebrows, H1, description, dual CTAs, 4 badges in a row) and right tablet mockup with auto-sliding project screenshots.
  - Counters display in a 4-column row.
  - Why Shopify displays in 5 equal columns.
  - Services display in a 2-column grid.
  - Process steps display in 4 horizontal cards.
  - Why Dynamic Dreamz displays in a 3-column grid.
  - Portfolio displays in a 4-column grid.
  - Testimonials display as carousel with full cards.
  - FAQ displays sticky left title and right accordion list.
  - Request banner and Book an Intro Call sections render cleanly with full styling.
- **Tablet (768px)**:
  - Hero stacks vertically with full-width text and centered tablet mockup slider.
  - Counters wrap to 2x2 grid.
  - Why Shopify wraps to 2-3 columns.
  - Services stack to 1 column or 2 columns with appropriate spacing.
  - Process steps stack vertically.
  - Why Dynamic Dreamz wraps to 2 columns.
  - Portfolio wraps to 2 columns.
  - FAQ header centers above the accordion list.
  - Book an Intro Call stacks form and call card vertically.
- **Mobile (390px)**:
  - Hero padding reduced, badges wrap cleanly, tablet slider scales within viewport width.
  - Counters stack in 1 column.
  - Why Shopify cards stack vertically with clean icon and typography alignment.
  - Services, process, and why-choose cards stack in 1 column.
  - Portfolio cards display in 1 column.
  - FAQ accordions expand/collapse smoothly.
  - All form inputs and buttons maintain full touch targets (minimum 44x44px).

---

## 4. SVG & Asset Parity Verification

- **Asset Alignment**:
  - `hero.tabletSlider.slides`: Replaced missing `slide-bombay-shirt-company.webp` and `slide-rare-rabbit.webp` with canonical `/assets/services/shopify-development-in-bangalore/hero/slide-bombay-tshirt.webp` and `/assets/services/shopify-development-in-bangalore/hero/slide-rarerabbit.webp`.
  - `whyChoose` item 0 ("Ease of Use"): Replaced missing `easy-to-use.svg` with canonical `/assets/services/shopify-development-in-bangalore/why-choose/user-friendly-interface.svg` (exact matching SVG vector path).
  - `services` item 6 ("Shopify 2.0 Migration"): Replaced missing `shopify-20-migration.svg` with canonical `/assets/services/shopify-development-in-delhi/services/shopify-2-0-upgrades.svg`.
  - `services` item 7 ("White Label Shopify Development"): Replaced missing `delhi/services/white-label-shopify-development.svg` with canonical `/assets/services/shopify-development-in-bangalore/services/white-label-shopify-development.svg`.
- **Render Verification**:
  - All 5 SVGs in `whyChoose` render cleanly with 24x24 viewBox and `#AD5151` brand stroke.
  - All 8 SVGs in `services` render cleanly inside the services cards.
  - All 6 SVGs in `whyDynamicDreamz` render with high visual parity.
  - All partner badges and brand logos render without 404s.
  - Zero duplicate assets across `public/assets/`.

