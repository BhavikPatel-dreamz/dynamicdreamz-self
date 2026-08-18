# Shopify Experts Page

Live URL: `https://www.dynamicdreamz.com/shopify-experts/`
Local route: `/shopify-experts`
Date checked: 2026-08-18
Browser/source: Google Chrome headless screenshots (stored for evidence),
rendered live page + View Page Source, live page-specific CSS
(`hiring-main.css`, `hiring-media.css`, `style.css`), live JS
(`assets/js/custom.js`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/shopify-experts/live-desktop-1440x900.png` | `docs/visual-captures/source/shopify-experts/local-desktop-1440x900.png` | captured |
| 768x1024 | `docs/visual-captures/source/shopify-experts/live-tablet-768x1024.png` | `docs/visual-captures/source/shopify-experts/local-tablet-768x1024.png` | captured |
| 390x844 | `docs/visual-captures/source/shopify-experts/live-mobile-390x844.png` | `docs/visual-captures/source/shopify-experts/local-mobile-390x844.png` | captured |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, Open Graph, Yoast JSON-LD, H1 `Hire Dedicated Shopify Experts & Developers`, hero proof counters (50+ Agile developers, 5000+ Completed Projects, 20+ Years Experience, 1000+ Happy Clients, 1000+ Shopify Developments), Review animation widget (Clutch 5.0 50+ reviews, Upwork 5.0 2000+ reviews, GoodFirms 5.0 72 reviews), 12 client logos strip, 4-step hiring process cards with numbered badges, 3 hiring choice cards (Experience, Extensive verticals, Talented pool), 6 advantages cards in 3x2 grid, 6 AI & automation cards with tool pills, 4 AI search visibility cards (AEO, GEO, Agentic commerce, Trust signals), 5 Shopify development service cards, 5 industries served slides, 6 selected portfolio projects (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHoc Atler), 11 video client testimonials with modal player, 7 accordion FAQs, closing CTA banner |
| Live CSS (`hiring-main.css`, `hiring-media.css`) | Hero padding (pt 215px, pb 80px), heading typography (50px / 66px Montserrat), client rail (#fbf7ed background), process step numbered badge (34px circle gradient #15c064→#00d1ff with white border), choice cards (linear-gradient #e8f9ef→#e6fafd background, white cards with hover shadow), advantages 3x3/3x2 grid with subtle borders (#efefef), darker AI automation section (#171E16 background with 10% opacity card fills and tool pills), 4-col AI discovery layout with right border dividers (#2828281A), service cards hover lift (-10px), portfolio cards (pb 115% image ratio with View Project hover slide), testimonial cards (rounded-15px with border and video modal), FAQ accordion styling, gradient CTA banner (#15c064→#00d1ff) |
| Local Assets | Review badges, process icons, choice icons, advantage icons, service icons, industry slide images, project store thumbnails, client logos, testimonial avatars and quote marks |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| 1. Hero | `.inner-hero-sec`: H1, subtitle, 5 stat counters, review animation slider, CTA button `Schedule a Consultation` | `ShopifyExpertsHero` |
| 2. Client Logos | `.our-client-sec dev` bg #fbf7ed: `Trusted by high-growth eCommerce brands worldwide` H2 left (31%), 12-brand logo slider right (69%) | `IndustryBrandsSection` using `ClientLogoSlider` |
| 3. Hiring Process | `.hiring-process-sec`: H2, subtitle, 4 `.process-col` cards (25% width desktop, 50% tablet, 100% mobile) with numbered gradient badge (1, 2, 3, 4) and icon | `HiringProcessSection` with `showStepNumbers` |
| 4. Hiring Choice | `.hiring-services-sec` bg gradient: H2, subtitle, 3 `.carousel-card` items | `ShopifyReasonsSection` |
| 5. Advantages | `.why_dynamic_dreamz_sec`: H2, subtitle, 6 advantage items in bordered 3x2 grid | `ShopifyAdvantagesSection` |
| 6. AI & Automation | `.smarter-shopify-store` bg #171E16: H2, subtitle, 6 cards with tool pill badges (Gorgias, Klaviyo, Zapier, etc.) | `ShopifyExpertsAiAutomation` |
| 7. AI Discovery | `.ai-driven-shopping`: H2, subtitle, 4 column cards (AEO, GEO, Agentic Commerce, Trust Signals) | `ShopifyExpertsAiDiscovery` |
| 8. Services | `.shopify-development-services`: H2, subtitle, 5 service cards with hover lift | `ShopifyServicesSection` |
| 9. Industries | `.industries-served-sec`: H2, subtitle, 5 industry vertical cards (Beauty, Fashion, Health, Food, Pet) | `IndustriesServedSection` |
| 10. Selected Work | `.our-work-sec`: H2, subtitle, 6 project cards with hover dark overlay, View Project slide, Shopify mark, View Our Work CTA | `ShopifyPortfolioSection` using `PortfolioProjectCard` |
| 11. Testimonials | `.happy-client-sec`: H2, subtitle, 11 video testimonial cards with modal playback | `HappyClientSection` |
| 12. FAQ | `.faq-sec`: H2, 7 accordion FAQs | `ShopifyFaqSection` using `FaqAccordion` |
| 13. CTA Banner | `.request-banner` bg gradient: H3 `Want us to help you with your online store?` + white pill CTA button `REQUEST A QUOTE` | `ResourcesCtaSection` |
