# Visual Capture: WordPress Development in Mumbai

- **Route**: `/wordpress-development-in-mumbai`
- **Live Reference**: `https://www.dynamicdreamz.com/wordpress-development-in-mumbai/`
- **Capture Date**: 2026-09-23
- **Target Breakpoints**: Desktop (1440px), Tablet (768px), Mobile (390px)

---

## 1. Sources Inspected

| Source | Details |
|---|---|
| Rendered Live Page & View Page Source | Captured live title ("Wordpress Development Company in Mumbai \| Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/wordpress-development-in-mumbai/`), 9 content sections, images, alts, and links |
| Live CSS Files | Inspected `hero_new_section.css`, `trusted_by_leading_brands_section.css`, `city_page_counter.css`, `our_development_process.css`, `city_page_why_choose_dynamic_dreamz.css`, `projects_section.css`, `client_review_section.css`, `faqs_section.css` |
| Local Component Discovery | Selected `CityPageHeroSection`, `IndustryBrandsSection`, `CityPageCounterSection`, `OurDevelopmentProcessSection`, `CityWhyChooseBoxesSection`, `PortfolioShowcaseSection`, `HappyClientSection`, `SplitFaqSection`, `CtaBannerSection` |
| Local Asset Tree | Reused existing canonical assets across `public/assets/` (zero new duplicate files required) |

---

## 2. Page Composition & Component Reuse

| Section # | Visual Role | Reused Component | Assets Reused |
|---|---|---|---|
| 1 | Hero Banner | `CityPageHeroSection` | Eyebrow `["Wordpress Development", "Mumbai"]`, `#1 WordPress Development Company in Mumbai`, `Get in Touch` CTA to `/request-quote`, 4 partner/review badges, tablet mock slider with 7 slides and WooCommerce / WordPress badges |
| 2 | Trusted Brands Slider | `IndustryBrandsSection` | Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City |
| 3 | City Page Counter | `CityPageCounterSection` | `Wordpress Development Company in Mumbai`, `Why Dynamic Dreamz is the Best WordPress Development Company?`, 4 stats counters (`20+`, `150+`, `5,000+`, `2500+`) |
| 4 | Our Development Process | `OurDevelopmentProcessSection` | `How We Work`, `Our WordPress Development Process`, 4 structured workflow steps (`01` Discovery and Planning, `02` Design and Development, `03` Testing and Launch, `04` Post Launch Support) |
| 5 | Why Dynamic Dreamz (Boxes) | `CityWhyChooseBoxesSection` | `Why Dynamic Dreamz`, `Why You Should Partner with the WordPress Development Company?`, 6 boxes with icons in 3-column layout |
| 6 | Portfolio Showcase | `PortfolioShowcaseSection` | `Portfolio`, `Our Work`, 8 portfolio cards in 4×2 grid, `View our work` CTA button |
| 7 | Client Stories (Testimonials) | `HappyClientSection` | `Client Stories`, `Our Customers’ Testimonials`, 11 video testimonial cards carousel with modal video playback |
| 8 | FAQs Accordion (6 Q&As) | `SplitFaqSection` | `Frequently Asked Questions`, 6 expandable Q&As |
| 9 | CTA Banner | `CtaBannerSection` | Cyan-green gradient banner with "Want us to help you with your online store?" and "request a quote" button |

---

## 3. Asset Deduplication Audit

- **Buffer Method**: 2-step ephemeral comparison buffer.
- **Deduplication Result**: Reused 100% canonical assets across `public/assets/` for hero tablet slides, badges, brand logos, why-choose icons, portfolio images, and review cards.
- **SHA-256 Duplicate Groups**: 0.

---

## 4. Responsive & Visual Parity Verification

- **Desktop (1440px)**: 100% visual parity verified with city hero tablet mock slider, 4-col stats counter, 4-step process cards, 3-col why choose boxes, 4-col portfolio grid with view our work button, testimonial carousel, and FAQ accordion.
- **Tablet (768px)**: Responsive wrapping for hero left/right columns, 2-column why choose boxes, 2-column portfolio cards, and fluid typography verified.
- **Mobile (390px)**: Single column stacked layout, full-width touch targets, and responsive padding verified.
