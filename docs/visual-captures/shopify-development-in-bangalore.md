# Visual Capture: Shopify Development in Bangalore

- **Route**: `/shopify-development-in-bangalore`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-bangalore/`
- **Capture & Remigration Date**: 2026-09-22
- **Target Breakpoints**: Desktop (1440px), Tablet (992px & 768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Inspected full HTML of `https://www.dynamicdreamz.com/shopify-development-in-bangalore/` for exact section order, headings, paragraphs, eyebrows, links, badges, portfolio items, testimonials, and FAQs |
| Live CSS Files | Inspected `hero_new_section.css`, `city_page_counter.css`, `city_page_why_choose_boxes.css`, `city_page_why_choose_dynamic_dreamz.css`, `our_development_process.css`, `trusted_by_leading_brands_section.css`, `projects_section.css`, `client_review_section.css`, and `faqs_section.css` |
| Live JS Files | Inspected `scratch/custom.js` for `.tablet-slick` settings (autoplay 2000ms, speed 600ms, cubic-bezier(.65,.05,.36,1), slidesToShow 1, no arrows, no dots) |
| Component Parity Corrections | 1. **Hero**: Corrected background `#f7f4e9`; implemented missing `right-col` with `.tablet-frame`, background shape SVG, 7-slide infinite carousel, and top/bottom floating badges. Hidden on `<= 991px`.<br>2. **Section 4 ("Why Choose Shopify")**: Fixed eyebrow to exact live `"Why Shopify"`.<br>3. **Section 5 ("Services")**: Updated service card 6 Read More link to `/buy-shopify-development-hours`.<br>4. **Section 6 ("Our Development Process")**: Replaced incorrect wave timeline with `OurDevelopmentProcessSection` (`.our-development-process` with `Step 01` to `Step 04`).<br>5. **Section 7 ("Why Dynamic Dreamz")**: Replaced incorrect cyan-gradient carousel with `CityWhyChooseBoxesSection` (`columns={3}`, white cards, red SVGs, `.city-page-why-choose-dynamic.pb-0`).<br>6. **Section 8 ("Our Work")**: Replaced mismatched projects with exact live 8 projects (Renee, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, nekter juice bar, Rare Rabbit) with `category: "Shopify / Shopify Plus"` and CTA to `/our-work`.<br>7. **Section 9 ("Client Stories")**: Updated live description ending with `...and choose Dynamic Dreamz as a Shopify Development Partner in Bengaluru.`.<br>8. **Section 10 ("FAQs")**: Switched to centered `FaqSection` matching live `.faq-sec` layout. |

---

## 2. Page Composition & Component Architecture

| Section # | Visual Role | Component | Assets Reused / Added |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` (`bg-[#f7f4e9]`, 2 eyebrow tags, 2 CTA buttons, 4 partner badges, plus `CityHeroTabletSlider` in right column on `> 991px`) | Reused 4 canonical badges + 10 unique hero assets (7 slide webps, 2 badges, 1 bg shape SVG) in `public/assets/services/shopify-development-in-bangalore/hero/` |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`, `items={industryBrandLogos}`) | Canonical brand logos |
| 3 | Counter & Stats | `CityPageCounterSection` (Eyebrow, title, description, 4 bordered stat counters: 20+ Years, 60+, 150+, 5,000+) | Modular container with responsive borders |
| 4 | Why Choose Shopify | `CityWhyChooseBoxesSection` (`bg-[#eff4ef]`, eyebrow `"Why Shopify"`, 5 white cards with red SVGs) | `public/assets/services/shopify-development-in-bangalore/why-choose/*.svg` (5 clean icons) |
| 5 | Services Grid | `AgencyServicesSection` (`cardVariant="services-box"`, `cardBgClassName="bg-white"`, `columns={2}`, `eyebrow="Shopify Services in Bangalore / Bengaluru"`, Read More links) | `public/assets/services/shopify-development-in-bangalore/services/*.svg` (8 clean icons) |
| 6 | Development Process | `OurDevelopmentProcessSection` (`.our-development-process`, eyebrow `"How We Work"`, 4 bordered steps `Step 01` - `Step 04`) | Semantic responsive 4-step grid |
| 7 | Why Dynamic Dreamz | `CityWhyChooseBoxesSection` (`columns={3}`, `bgClassName="bg-white"`, `className="city-page-why-choose-dynamic !pb-0"`, eyebrow `"Why Dynamic Dreamz"`, 6 white cards) | `public/assets/services/shopify-development-in-bangalore/why-choose-dynamic/*.svg` (6 clean icons) |
| 8 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`columns={4}`, `headerLayout="split"`, `cardVariant="ourWorkRefresh"`, eyebrow `"Portfolio"`, CTA `"View our work"` to `/our-work`) | 8 portfolio cards: Renee, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, nekter juice bar, Rare Rabbit |
| 9 | Client Stories | `HappyClientSection` (`variant="client-stories"`) | Video review carousel with modal playback |
| 10 | FAQs Accordion (5 Q&As) | `FaqSection` (`heading="Frequently Asked Questions"`, centered layout) | Accordion items matching live questions |
| 11 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer in `scratch/`.
- **Deduplication Result**: Checked all slide images and SVGs against the entire asset tree.
  - Section 8 portfolio items: All 8 images matched existing canonical assets in `public/assets/` (`renee.webp`, `11-11.webp`, `bombay-shirt-company-fashion.webp`, `royce-chocolate.webp`, `tropicfeel-fashion.webp`, `tego-fit-activewear.webp`, `nekter-juice-bar.webp`, `rare-rabbit.webp`). Zero duplicates created.
  - Hero tablet slider: 7 slide images + 2 badges + 1 bg shape SVG were confirmed unique and ingested into `public/assets/services/shopify-development-in-bangalore/hero/`.
  - Section 7 icons: 6 unique SVGs cleaned (scripts removed) and ingested into `public/assets/services/shopify-development-in-bangalore/why-choose-dynamic/`.
- **SHA-256 Duplicate Groups**: 0 duplicate hash groups across the entire repository.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: Verified 100% visual parity:
  - Hero with split columns, tablet mockup frame with autoplaying infinite slider and floating badges.
  - 4-column counter stats.
  - 5-column "Why Shopify" cards.
  - 2-column service cards with active Read More links.
  - 4-column horizontal development process steps (`Step 01` to `Step 04`).
  - 3-column "Why Dynamic Dreamz" white cards with red SVGs.
  - 4-column portfolio grid with live project imagery, categories, titles, and hover arrow buttons.
  - Client video stories carousel.
  - Centered FAQ accordion.
  - Gradient CTA banner.
- **Medium / Tablet (992px - 1199px)**:
  - Hero slider frame scales proportionally (345px x 500px).
  - 3-column card layouts for why-choose boxes.
  - 2x2 grid for process steps.
- **Tablet / Mobile (<= 991px)**:
  - Hero right-column tablet slider hidden (`max-[991px]:hidden`), left-column centered.
  - Stacked 1-column layouts for mobile touch screens.
