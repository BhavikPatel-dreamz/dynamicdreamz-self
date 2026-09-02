# Visual Capture: Shopify Development in Bangalore

- **Route**: `/shopify-development-in-bangalore`
- **Live Reference**: `https://www.dynamicdreamz.com/shopify-development-in-bangalore/`
- **Capture Date**: 2026-09-02
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured title ("No.1 Company For Shopify Development in Bangalore | Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/shopify-development-in-bangalore/`), 11 content sections, images, alts, and links |
| Live CSS Files | Inspected `hero_new_section.css`, `city_page_counter.css`, `city_page_why_choose_boxes.css`, `trusted_by_leading_brands_section.css`, `delivery_section.css`, `projects_section.css`, `client_review_section.css`, and `faqs_section.css` |
| Live Screenshots Captured | Edge headless captures at 1440px (`scratch/shopify-bangalore/live-desktop-full.png`), 768px (`scratch/shopify-bangalore/live-tablet.png`), and 390px (`scratch/shopify-bangalore/live-mobile.png`) |
| Local Component Discovery | Created generalized `CityPageHeroSection`, `CityPageCounterSection`, and `CityWhyChooseBoxesSection`. Reused `IndustryBrandsSection`, `AgencyServicesSection`, `ProcessWaveSection`, `ShopifyReasonsSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | Ingested 13 clean vector SVGs to `public/assets/services/shopify-development-in-bangalore/` (5 why-choose, 8 services). Reused canonical proof badges, brand logos, portfolio graphics, and testimonial videos |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Component | Assets Reused / Added |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` (`bg-[#fafaf7]`, 2 eyebrow tags, 2 CTA buttons, 4 partner badges) | Canonical badges: Shopify Platinum Partner, Clutch, Trustpilot, Upwork |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`, `items={industryBrandLogos}`) | 10 canonical brand logos |
| 3 | Counter & Stats | `CityPageCounterSection` (Eyebrow, title, description, 4 bordered stat counters: 20+ Years, 60+, 150+, 5,000+) | Modular container with responsive borders |
| 4 | Why Choose Shopify | `CityWhyChooseBoxesSection` (`bg-[#eff4ef]`, 5 white cards with red SVGs) | `why-choose/*.svg` (5 clean icons) |
| 5 | Services Grid | `AgencyServicesSection` (`cardVariant="services-box"`, `cardBgClassName="bg-white"`, `columns={2}`, `eyebrow="Shopify Services in Bangalore / Bengaluru"`, Read More links) | `services/*.svg` (8 clean icons) |
| 6 | Development Process | `ProcessWaveSection` | 4 wave timeline steps with gradient numerals (`01`-`04`) |
| 7 | Reasons Carousel | `ShopifyReasonsSection` (`layout="carousel"`, `className="shopify-customization-services-sec mb-20 bg-linear-[97.18deg] ..."`) | 6 proof cards with icons on mint-cyan gradient background |
| 8 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`columns={4}`, `headerLayout="split"`, `cardVariant="ourWorkRefresh"`, `eyebrow="PORTFOLIO"`) | 8 portfolio cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, Holy Plantz) |
| 9 | Client Stories | `HappyClientSection` (`variant="client-stories"`) | 3-video-card carousel with video modal playback |
| 10 | FAQs Accordion (5 Q&As) | `SplitFaqSection` (`heading="Frequently Asked Questions"`) | 2-column split FAQ layout with underlined items, circle-cross icons, first item expanded |
| 11 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer in `scratch/shopify-bangalore/svgs`.
- **Deduplication Result**: Checked 13 unique SVGs against 1,556 assets. Cleaned and saved under `public/assets/services/shopify-development-in-bangalore/`.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with split header layouts, 4-col portfolio grid, 3-card testimonials, 5-col why choose boxes, and 2-col FAQs.
- **Tablet (768px)**: 3-col why choose boxes, 2-column service card layouts, and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified.
