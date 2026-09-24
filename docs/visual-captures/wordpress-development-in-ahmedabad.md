# Visual Capture: WordPress Development in Ahmedabad

- **Route**: `/wordpress-development-in-ahmedabad`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-development-in-ahmedabad/`
- **Capture Date**: 2026-09-23
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Extracted full live DOM HTML (`scratch/live-ahmedabad-page.html`, 339,541 bytes), title ("Wordpress Development Company in Ahmedabad \| Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/wordpress-development-in-ahmedabad/`), 9 content sections, images, alts, and links |
| Live CSS Files | Inspected `flexible-css/hero_new_section.css`, `flexible-css/city_page_counter.css`, `flexible-css/our_development_process.css`, `flexible-css/city_page_why_choose_dynamic_dreamz.css`, `flexible-css/projects_section.css`, `flexible-css/client_review_section.css`, and `flexible-css/faqs_section.css` |
| Live Screenshots Captured | Chrome headless captures at 1440px (`scratch/live-ahmedabad-desktop-1440.png`, `scratch/live-ahmedabad-desktop-full.png`), 768px (`scratch/live-ahmedabad-tablet-768.png`, `scratch/live-ahmedabad-tablet-full.png`), and 390px (`scratch/live-ahmedabad-mobile-390.png`, `scratch/live-ahmedabad-mobile-full.png`) |
| Local Component Discovery | Reused `CityPageHeroSection`, `IndustryBrandsSection`, `CityPageCounterSection`, `OurDevelopmentProcessSection`, `CityWhyChooseBoxesSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | Ingested 9 unique hero assets (2 badges, 7 slides) into `public/assets/services/wordpress-development-in-ahmedabad/hero/` via the 2-step buffer workflow; 100% of remaining brand logos, proof icons, and portfolio assets reused from canonical `public/assets/` |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused Component | Assets Reused / Ingested |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` with `CityHeroTabletSlider` | 7 tablet slides, WooCommerce Agency Partner & WordPress Logo badges, Shopify/Clutch/Trustpilot/Upwork awards badges |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` (`heading="Trusted by Leading Brands"`) | 12 canonical brand SVGs (Supertails, Eleven Eleven, Bellavita, Bombay Shirt Company, POP, SriSri Tattva, Tropicfeel, Renee, Royce, Tego, Nekter, Rare Rabbit) |
| 3 | City Page Counter | `CityPageCounterSection` | 4 counter items (20+ Years, 150+ Experts, 5,000+ projects delivered, 2500+ Verified 5-star Reviews) |
| 4 | Development Process | `OurDevelopmentProcessSection` | 4 process cards (Discovery and Planning, Design and Development, Testing and Launch, Post Launch Support) |
| 5 | Why Choose Us | `CityWhyChooseBoxesSection` (`columns={3}`, `bgClassName="bg-white"`) | 6 proof cards with canonical SVGs (`expert-developers.svg`, `custom-solutions.svg`, `intuitive-design.svg`, `seo-expertise.svg`, `comprehensive-services.svg`, `proven-track-record.svg`) |
| 6 | Our Work (Portfolio) | `PortfolioShowcaseSection` (`columns={4}`, `headerLayout="split"`, `cardVariant="ourWorkRefresh"`, `hideCta={true}`) | 8 portfolio cards (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids) in a 4×2 grid |
| 7 | Client Stories (Testimonials) | `HappyClientSection` (`variant="client-stories"`) | 3-video-card carousel with video modal playback |
| 8 | FAQs Accordion (7 Q&As) | `SplitFaqSection` (`answerClassName="!text-sm !leading-6 font-medium text-[#535353]"`) | 2-column split FAQ layout with underlined items, circle-cross icons, first item expanded |
| 9 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "REQUEST A QUOTE" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer (`scratch/buffer/`).
- **Deduplication Result**: Checked 1,716 public assets. Reused 100% canonical assets across portfolio, client logos, review badges, and reason icons.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with tablet hero slider, 12-logo marquee, 4-stat counter, 4-step process cards, 3-col why choose boxes, 4-col portfolio grid, 3-card testimonials, and 2-col FAQs.
- **Tablet (768px)**: 2-column card layouts, responsive tablet hero, and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout and touch-friendly controls verified.
