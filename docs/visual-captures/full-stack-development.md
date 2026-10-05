# Full Stack Development Services Page Visual Parity Capture

Live URL: `https://www.dynamicdreamz.com/full-stack-development/`  
Local route: `/full-stack-development`  
Date checked: 2026-10-05  
Browser / source: Headless Google Chrome (`154.0.8037.57`), DOM dump (`scratch/live-full-stack-development.html`), live CSS (`technologies_we_work_with_section.css`, `recent_architecture_patterns_section.css`, `shopify_development_services.css`), live screenshots (`docs/visual-captures/source/full-stack-development/live-desktop-1440x900.png`, `docs/visual-captures/source/full-stack-development/live-tablet-768x1024.png`, `docs/visual-captures/source/full-stack-development/live-mobile-390x844.png`), and live Yoast SEO JSON-LD graph.

## Viewports & Screenshot Evidence

- **Desktop (1440x900)**:
  - Live: `docs/visual-captures/source/full-stack-development/live-desktop-1440x900.png`
  - Local: `docs/visual-captures/source/full-stack-development/local-desktop-1440x900.png`
  - Result: Complete visual match across hero section with interactive tablet mockup slider, client logo marquee, 6-card numbered products grid on green background, 6-card full-stack services grid with tech tags, 4-column tech stack section with pill tags, 4-column recent architecture patterns section, 3-card case studies listing with project images, 8-step phased methodology framework, 4-card why Dynamic Dreamz section, client stories carousel, and split FAQs.
- **Tablet (768x1024)**:
  - Live: `docs/visual-captures/source/full-stack-development/live-tablet-768x1024.png`
  - Local: `docs/visual-captures/source/full-stack-development/local-tablet-768x1024.png`
  - Result: Clean responsive reflow; hero tablet mockup reflows / hides on ≤991px matching live CSS; grids collapse cleanly into 2 columns (tech stack, architecture patterns, numbered boxes).
- **Mobile (390x844)**:
  - Live: `docs/visual-captures/source/full-stack-development/live-mobile-390x844.png`
  - Local: `docs/visual-captures/source/full-stack-development/local-mobile-390x844.png`
  - Result: Single-column flow, touch-friendly tap targets, no horizontal overflow.

## Live CSS and JS Inspected

- `shopify_development_services.css`:
  - `.shopify-development-services.six-cards .wrapper .item:nth-child(5)`: `grid-column: span 2;`.
  - Item 1 spans 2 rows (`grid-row: span 2; min-height: 440px; background: #f7f4ea;`).
  - Item 4 spans 2 columns (`grid-column: span 2; background: rgba(239, 244, 239, 1);`).
  - Item 5 spans 2 columns in `six-cards` variant.
  - Tech pills with border `rgba(40, 40, 40, .08)` and pill radius `50px`.
- `technologies_we_work_with_section.css`:
  - Background `#EFF4EF`, 4-column flex wrapper with negative horizontal margins (`-7.5px`), cards with white background, border `rgba(40, 40, 40, 0.10)`, rounded `20px`.
  - Category titles `#AD5151`, font size `20px`, font weight `500`.
  - Individual tech items with background `#FAFAF7`, border `#D0D0CE`, box shadow `2px 2px 0 0 rgba(40, 40, 40, 0.20)`.
- `recent_architecture_patterns_section.css`:
  - Background `#FFFFFF`, 4-column flex wrapper, card borders `rgba(23, 30, 22, 0.10)`.
  - Uppercase category labels `#AD5151`, font weight `700`, font size `14px`.
  - Bottom tech summary badge in `#FAFAF7` with `#D0D0CE` border and uppercase/bold styling.
- `services_case_study_section.css`:
  - Background `#EFF4EF`, 3-column layout on desktop, rounded `20px` cards with hover scale effect on case study images.
- `how_to_choose_the_right_shopify_plus_agency_sec.css`:
  - 8-column phased methodology with numbered badges `01`–`08` in `#fbefd7` circles.
- `city_page_why_choose_boxes.css`:
  - 4-column cards with red uppercase subtitle badges.

## Section Inventory & Component Mapping

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
|---|---|---|---|
| 1 | Hero | `div.hero-new-section.hide-logo`: eyebrow `Full Stack Development Services`, `h1` `Full Stack Development for Custom Web Apps, Ecommerce & Digital Products`, subtitle `span.h4`, description, 2 CTAs, 3 visible proof badges (Shopify Platinum Partner omitted as live site hid it via `hide-logo` `display: none`), right-side tablet mockup slider. | Reused `CityPageHeroSection`, with `CityHeroTabletSlider` using WebP assets (`paramountextrusions.webp`, `donjjewellery.webp`, `homeopathway.webp`) and WebP badges (`node-js-development-badge.webp`, `next-js-development-badge.webp`). |
| 2 | Brands | `div.our-client-sec`: heading `Trusted by Leading Brands`, client logo slider. | Reused `IndustryBrandsSection` with `density="flexible"`. |
| 3 | What we Build | `section#our_services.theme-customization-services.green`: eyebrow `What we Build`, `h2` `Complete Digital Products, not just Isolated Development Tasks`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="green"`, `id="our_services"`). |
| 4 | Full Stack Development Services | `section#shopify-services.shopify-development-services.pt-80.six-cards`: eyebrow `Full Stack Development Services`, `h2` `One Team across Frontend, Backend and Integrations`, 6 capability cards with tech pills. | Reused and slightly extended `ShopifyStageServicesSection` (`sixCards` layout support). |
| 5 | Technologies We Work With | `section.technologies_we_work_with_section.pt-80.pb-80`: eyebrow `Technologies We Work With`, `h2` `A modern stack selected around the product, not around one framework.`, 4 tech categories with pill badges. | Generalized component `TechnologiesWorkWithSection` (`src/components/sections/technologies-work-with-section.tsx`). |
| 6 | Recent Architecture Patterns | `section.recent_architecture_patterns_section`: eyebrow `Recent Architecture Patterns`, `h2` `Examples of the Type of Full Stack Work We Handle`, 4 architecture pattern cards with tech stack badges. | Generalized component `RecentArchitecturePatternsSection` (`src/components/sections/recent-architecture-patterns-section.tsx`). |
| 7 | Case Studies | `section.see-the-work-sec`: eyebrow `CASE STUDIES`, `h2` `Real Projects across Headless Commerce, Custom Apps and Integrations`, 3 case study cards (`sandf-product-group`, `beauty-software`, `blubox`). | Reused `ServicesCaseStudiesSection`. |
| 8 | How We Work | `section.how-to-choose-spa-sec`: eyebrow `How We Work`, `h2` `From Requirements to a Maintainable Production Application`, 8 numbered phased steps. | Reused `EvaluationFrameworkSection`. |
| 9 | Why Dynamic Dreamz | `section.city-page-why-choose-boxes`: eyebrow `Why Dynamic Dreamz`, `h2` `A Full Stack Team that also Understands Ecommerce and Product Delivery`, 4 cards. | Reused `CityWhyChooseBoxesSection` (`theme="light"`, `columns={4}`). |
| 10 | Client Stories | `section.happy-client-sec.pt-80`: eyebrow `Client Stories`, `h2` `Don't Just Take Our Word For It`, video testimonial cards. | Reused `HappyClientSection`. |
| 11 | FAQs | `section.faq-sec`: eyebrow `Full Stack Development FAQ`, `h2` `Questions clients ask before starting a full stack project`, 10 accordion items in two-column split layout with circle-cross icons. | Reused `SplitFaqSection` (`iconVariant="circle-cross"`). |

## Intentional Differences & Preserved Live Copy

- **Preserved Live Heading & Copy Phrasing**: All live headings, descriptions, labels, tech pills, and case studies are preserved verbatim from the live page source.
- **URL Normalization**: Canonical URL normalized to slashless `/full-stack-development` per repo URL policy; permanent redirect from legacy live URL `/full-stack-development/` handled automatically via `next.config.ts`.
- **Assets**: Tablet slider assets and OG image ingested into project-owned paths (`/assets/services/full-stack-development/` and `/assets/og/full-stack-development.png`) with zero duplicate SHA-256 hashes.
