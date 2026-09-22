# Visual Capture: Shopify Development in Delhi

- **Route**: `/shopify-development-in-delhi`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-delhi/`
- **Capture Date**: 2026-09-22
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Page Composition & Component Reuse

| Section # | Visual Role | Reused / Generalized Component | Assets Reused / Ingested |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` | Eyebrow red-dash ("Shopify Development" • "Delhi"), 4 award badges (Shopify Platinum, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus), tablet slider with 7 WebP slides (`bellavita`, `bombay-tshirt`, `kalki`, `nokt-1`, `ranavat`, `rarerabbit`, `renee-cosmetics`), top and bottom badges, and background shape |
| 2 | Brand Partners Slider | `IndustryBrandsSection` | 12 client brand SVGs from `public/assets/clients/` (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter Juice Bar, Rare Rabbit) |
| 3 | City Page Counter (Intro + Stats) | `CityPageCounterSection` (`eyebrowVariant="dash"`) | Eyebrow with red dash ("Shopify Development Company in Delhi"), H2, intro description, and 4 stat counters (`20+ Years`, `60+`, `150+`, `5,000+`) |
| 4 | Why Choose Shopify (5 Cards) | `CityWhyChooseBoxesSection` (`eyebrowVariant="dash"`) | Eyebrow with red dash ("Why Shopify"), H2, description, 5 cards with 24x24 SVGs (`user-friendly-interface`, `customizable-themes`, `scalability`, `marketing-tools`, `security-and-reliability`) |
| 5 | Services (8 Cards Grid) | `AgencyServicesSection` (`cardVariant="services-box"`, `columns={2}`) | Eyebrow with red dash ("Shopify Services in Delhi"), H2, description, 8 service cards with 24x24 icons and Read More links where present on live |
| 6 | Development Process (4 Steps) | `OurDevelopmentProcessSection` (`eyebrowVariant="dash"`) | Eyebrow with red dash ("How We Work"), H2, description, 4 steps ("Step 01" to "Step 04") in 4-column border grid |
| 7 | Why Dynamic Dreamz (5 Cards) | `CityWhyChooseBoxesSection` (`columns={3}`, `eyebrowVariant="dash"`) | Eyebrow with red dash ("Why Dynamic Dreamz"), H2, description, 5 cards with 24x24 SVGs (`expert-developers`, `custom-solutions`, `seo-expertise`, `comprehensive-services`, `proven-track-record`) |
| 8 | Our Work / Portfolio (8 Projects) | `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`) | Eyebrow with red dash ("Portfolio"), H2, description, 8 live project cards (Renee, 11 11, Bombay Shirt Company, Royce Chocolate, Tropicfeel, TEGO Fit, nekter juice bar, Rare Rabbit) + `/our-work` CTA |
| 9 | Client Stories (Happy Clients) | `HappyClientSection` | Eyebrow with red dash ("Client Stories"), H2, description, 11 video testimonial cards with modal video players |
| 10 | Frequently Asked Questions (5 Q&As) | `SplitFaqSection` | Split 2-column layout matching live site, 5 accordion items with question and answer copy matching live site |
| 11 | Bottom CTA Banner | `CtaBannerSection` | Heading "Want us to help you with your online store?" and button "request a quote" -> `/request-quote` |

---

## 2. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral `scratch/` comparison buffer.
- **Deduplication Result**: Reused canonical assets across `public/assets/` for 12 brand logos, 8 portfolio showcase images, 10 Why-Choose SVGs, 3 services SVGs, and 7 hero tablet slider WebP images.
- **Unique Assets Stored**: 5 unique SVGs in `public/assets/services/shopify-development-in-delhi/services/` (`shopify-plus-store-development.svg`, `shopify-theme-customization.svg`, `shopify-migration-services.svg`, `shopify-maintenance-support.svg`, `shopify-2-0-upgrades.svg`).
- **SHA-256 Duplicate Groups**: 0 (audited via `npm run check:asset-duplicates`).

---

## 3. Responsive & Interactive Behavior

- **Desktop (>=1200px)**: 2-column hero with live tablet slider, 4-stat counter layout, 5-column benefit cards, 2-column service cards with Read More arrow links, 4-step process grid, 3-column Why Dynamic Dreamz cards, 4-column portfolio showcase grid, split 2-column FAQ layout.
- **Tablet (768px-1199px)**: Responsive 2-column and 3-column card layouts, centered headlines, stacked hero illustration.
- **Mobile (<=767px)**: Stacked single-column layouts, touch-friendly accordion FAQs, responsive video modal dialogs.
