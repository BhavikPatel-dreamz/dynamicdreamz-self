# AI Services Page Visual Parity Capture

Live URL: `https://www.dynamicdreamz.com/ai-services/`  
Local route: `/ai-services`  
Date checked: 2026-10-05  
Browser / source: Headless Google Chrome (`154.0.8037.57`), DOM dump (`scratch/live-ai-services.html`), live CSS (`scratch/live-ai-services.css`), live screenshots (`docs/visual-captures/source/ai-services/live-desktop-1440x900.png`, `docs/visual-captures/source/ai-services/live-tablet-768x1024.png`, `docs/visual-captures/source/ai-services/live-mobile-390x844.png`), local screenshots (`docs/visual-captures/source/ai-services/local-desktop-1440x900.png`, `docs/visual-captures/source/ai-services/local-tablet-768x1024.png`, `docs/visual-captures/source/ai-services/local-mobile-390x844.png`), and live Yoast SEO JSON-LD graph.

## Viewports & Screenshot Evidence

- **Desktop (1440x900)**:
  - Live: `docs/visual-captures/source/ai-services/live-desktop-1440x900.png`
  - Local: `docs/visual-captures/source/ai-services/local-desktop-1440x900.png`
  - Result: Complete visual match across hero section with static illustration, client logo marquee, 6-card numbered capabilities grid, 6-card detailed AI services grid with typical use cases, 4-card Shopify & ecommerce AI section on dark background, 8-step phased implementation framework, 4-card reliable AI section on dark background, 4-card why Dynamic Dreamz section with credentials, technical capabilities keyword box, client stories carousel, and split FAQs.
- **Tablet (768x1024)**:
  - Live: `docs/visual-captures/source/ai-services/live-tablet-768x1024.png`
  - Local: `docs/visual-captures/source/ai-services/local-tablet-768x1024.png`
  - Result: Clean responsive reflow; hero illustration hidden on ≤991px matching live CSS (`.hero-new-section .wrapper .right-col:has(.hero-img img) { display: none }`); grids collapse cleanly (2-column AI services, 2-column numbered capabilities, stacked technical keyword box).
- **Mobile (390x844)**:
  - Live: `docs/visual-captures/source/ai-services/live-mobile-390x844.png`
  - Local: `docs/visual-captures/source/ai-services/local-mobile-390x844.png`
  - Result: Single-column flow, touch-friendly tap targets, no horizontal overflow.

## Live CSS and JS Inspected

- `ai-services.css`:
  - `.hero-new-section`: background `#f7f4e9`, `padding-top: 91px` (`64px` on mobile), left column 51% desktop, right column 43.182%, `mix-blend-mode: darken` on hero illustration.
  - `.our-client-sec`: background `#fbeed5`, client logo marquee height 70px (60px on mobile).
  - `.theme-customization-services.yellow`: `#fafaf7` background, numbered badges (`01`–`06`) in `#fbefd7` circles with brand red text.
  - `.our-ai-services-section`: `#eff4ef` background, 2-column card grid with `service-label`, `h3`, `p`, and `.tech` footer with `h4` and `p`.
  - `.shopify-dev-team`: `#192019` background, white text, 2-column boxes grid with border `rgba(255,255,255,.12)` and background `rgba(255,255,255,.045)`.
  - `.how-to-choose-spa-sec`: 8-column phased methodology with numbered badges `01`–`08` in `#fbefd7` circles.
  - `.reliable_ai_section`: `#192019` background, 4-column cards with white text and `rgba(255,255,255,.13)` borders.
  - `.city-page-why-choose-boxes`: `#eff4ef` background, 4-column cards with brand red uppercase subtitle badges.
  - `.tech-keyword-box`: `#fafaf7` background, white inner card with border `var(--line)` and 2-column split (0.8fr title, 1.2fr capabilities copy).
  - `.happy-client-sec`: Testimonial review carousel with video modals, quotes, and reviewer avatars.
  - `.faq-sec`: Two-column split layout with circle-cross expandable accordion items.

## Section Inventory & Component Mapping

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
|---|---|---|---|
| 1 | Hero | `div.hero-new-section`: eyebrow `AI Development Services`, `h1` `AI Solutions That Make Your Business Smarter and More Efficient`, sub-heading `span.h4`, description, 2 CTAs, 4 proof badges, right-side hero image. | Reused `ServiceHeroVideoSection` with optimized local WebP asset `/assets/services/ai-services/ai-development-services-hero.webp`. |
| 2 | Brands | `div.our-client-sec`: heading `Trusted by Leading Brands`, 12 client logos slider. | Reused `IndustryBrandsSection` with `density="flexible"`. |
| 3 | What We Can Build | `section.theme-customization-services.yellow`: eyebrow `What We Can Build`, `h2` `AI Tools Built around Real Business Needs`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="yellow"`). |
| 4 | Our AI Services | `section#our_ai_services.our-ai-services-section`: eyebrow `Our AI Services`, `h2` `From customer-facing AI to internal business automation.`, 6 cards with service label, description, and typical use cases. | Generalized component `AiServicesGridSection` (`src/components/sections/ai-services-grid-section.tsx`). |
| 5 | AI for Shopify & Ecommerce | `section.shopify-dev-team.pt-80.pb-80`: eyebrow `AI for Shopify & Ecommerce`, `h2` `Use AI where it genuinely Improves the Shopping or Store Experience`, 4 capability boxes on dark background. | Reused `ShopifyTeamBoxesSection`. |
| 6 | How We Work | `section.how-to-choose-spa-sec`: eyebrow `How We Work`, `h2` `Start with One Useful Problem, Prove it Works, then Expand`, 8 numbered phased delivery steps. | Reused `EvaluationFrameworkSection`. |
| 7 | Reliable AI | `section.reliable_ai_section`: eyebrow `Reliable AI`, `h2` `AI should be useful, controlled and ready for real users.`, 4 evaluation/safety cards on dark background. | Reused `CityWhyChooseBoxesSection` (`theme="dark"`, `columns={4}`). |
| 8 | Why Dynamic Dreamz | `section.city-page-why-choose-boxes`: eyebrow `Why Dynamic Dreamz`, `h2` `AI Combined with the Development Experience Needed to Make it Useful`, 4 cards with brand red uppercase credentials. | Reused `CityWhyChooseBoxesSection` (`theme="light"`, `columns={4}`). |
| 9 | Technical Capabilities | `section.tech-keyword-box`: eyebrow `Technical AI Capabilities`, `h2` `For technical teams evaluating implementation options.`, 2-column container with detailed technical capability tags. | Generalized component `TechKeywordSection` (`src/components/sections/tech-keyword-section.tsx`). |
| 10 | Client Stories | `section.happy-client-sec.pt-80`: eyebrow `Client Stories`, `h2` `Don't Just Take Our Word For It`, video testimonial cards. | Reused `HappyClientSection`. |
| 11 | FAQs | `section.faq-sec`: eyebrow `AI Development FAQ`, `h2` `Questions Clients Ask before Starting an AI Project`, 10 accordion items in two-column split layout with circle-cross icons. | Reused `SplitFaqSection` (`iconVariant="circle-cross"`). |

## Intentional Differences & Preserved Live Copy

- **Preserved Live Heading & Copy Phrasing**: All live headings, descriptions, labels, and typical use cases are preserved verbatim from the live page source.
- **URL Normalization**: Canonical URL normalized to slashless `/ai-services` per repo URL policy; permanent redirect from legacy live URL `/ai-services/` handled automatically via `next.config.ts`.
- **Assets**: Hero illustration optimized from 553KB PNG to 43KB WebP (`/assets/services/ai-services/ai-development-services-hero.webp`) with zero duplicate SHA-256 hashes. OG image saved at `/assets/og/ai-services.png`.
