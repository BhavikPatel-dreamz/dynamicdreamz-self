# Shopify Development Agency Page

Live URL: https://www.dynamicdreamz.com/shopify-development-agency/
Local route: /shopify-development-agency
Date checked: 2026-09-04
Browser/source: Headless Google Chrome full & viewport captures, rendered live DOM inspection (`scratch/live-page.html`, `scratch/live-main-content.html`), section CSS extraction (`scratch/css/hero_new_section.css`, `scratch/css/shopify_development_services.css`, `scratch/css/our_work_section.css`, `scratch/css/shopify_team_boxes.css`, `scratch/css/shopify_development_process.css`, `scratch/css/client_review_section.css`, `scratch/css/faqs_section.css`), visual slice comparison (`scratch/compare-hero.png`, `compare-services.png`, `compare-portfolio.png`, `compare-team-pricing.png`, `compare-process-testi.png`, `compare-faq-cta.png`, `compare-mob-hero.png`, `compare-mob-work.png`, `compare-mob-bottom.png`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified redesigned layout: 2-column hero with video player and 4 proof badges, 10-logo marquee, 9 stage service cards (asymmetric 3-col grid with 2-row span Card 1, 2-col span Cards 4 & 8), 8 portfolio showcase cards in 4-column grid, 4 dark team boxes with red active card, 3 engagement pricing cards, 5-step horizontal process timeline, 11 video testimonials carousel, 10 FAQ accordions (first active), and gradient CTA banner. |
| 768x1024 (Tablet) | Verified responsive stacking: hero video hidden on tablet per live CSS (`.video-wrapper { display: none }` ≤991px), centered hero content and button group, 2-column service cards, 2-column portfolio cards, 2-column team boxes, 2-column pricing cards, horizontal process timeline, 2-item testimonial carousel, and touch-friendly FAQ accordions. |
| 390x844 (Mobile) | Verified single-column hero with single-line eyebrow (`— ESTABLISHED IN 2006 • SHOPIFY PLATINUM PARTNER`), 2x2 proof badge grid with gray container for Clutch/Upwork, single-column service cards with tags & pills, 2-column portfolio cards with visible circular arrow button, single-column team cards, single-column pricing cards, vertical process timeline with numbered circles & connecting line, 1-item testimonial carousel, and full-width CTA banner. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title ("Shopify Development Agency & Services | Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/shopify-development-agency/`), publish/modified dates (`2026-08-31T13:14:09+00:00`), Open Graph card image (`/assets/og/shopify-development-agency.png`), JSON-LD schema, H1, hero copy, 4 proof badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus), hero video (`why-dynamic-dreamz.mp4`), 10 brand logos marquee, 9 service cards (Custom Store Development, Figma/XD Conversion, Theme Customization, App Integration, Migration, Maintenance, 2.0 Migration, White Label, Plus Mobile App), 8 portfolio cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, Bombay Shirt Company, Holy Plantz, Atolea Jewelry), 4 multidisciplinary team boxes, 3 engagement pricing models ($25/hr support, $2000/mo team, custom quote), 5 process steps (Assess, Plan, Develop, QA, Launch & Improve), 11 video testimonials, 10 FAQs, and bottom CTA banner. |
| Live CSS (`scratch/css/`) | Extracted CSS rules for `.hero-new-section`, `.shopify-development-services`, `.our-work-sec`, `.shopify-dev-team`, `.white_label_wp_develop_plan_section`, `.shopify-development-process`, `.happy-client-sec`, `.faq-sec`, `.request-banner`. |
| Assets & Deduplication | Reused canonical assets across `public/assets/` (`why-dynamic-dreamz.mp4`, 4 proof SVGs, 10 brand SVGs, 8 portfolio WebPs). Added unique OG card image `public/assets/og/shopify-development-agency.png`. `npm run check:asset-duplicates` verified 0 duplicate hash groups across 1,677 public assets. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| 1. Hero | `.hero-new-section`: Eyebrow ("Established in 2006 • Shopify Platinum Partner" rendered with two `<span>` elements, a 30px red line `::before` at desktop / 15px at mobile, and a 3px circular dot separator), H1 ("Shopify Development Agency" in `neue_montrealmedium` 50px/60px desktop, 40px/50px tablet, 30px/40px mobile), H4 subtitle ("Custom Shopify development for brands that need more than a theme setup." in Montserrat 16px/28px), description (16px/28px), 2 pill CTAs (Primary red fill `#ad5151`, secondary outline `#4f4f4f`), 4 trust badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus) separated by vertical `#d9d9d9` borders on desktop and a 2x2 crosshair divider on mobile, and right-column video player (`why-dynamic-dreamz.mp4`, rounded 20px). Video hides on tablet/mobile (<=991px). | Implemented via `ServiceHeroVideoSection` using Server Component with typed props from `shopifyDevelopmentAgencyHero`. Verified parity across 1440px desktop, 768px tablet, and 390px mobile viewports. |
| 2. Trusted Brands | `.our-client-sec`: "Trusted by Leading Brands" heading with 10-brand logo marquee (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter, Circuit City). | Implemented via `IndustryBrandsSection` with `shopifyDevelopmentAgencyBrandConfig` and `shopifyDevelopmentAgencyBrands`. |
| 3. Stage Services | `.shopify-development-services`: Asymmetric 3-column CSS grid (`1.2fr 0.8fr 0.8fr`) with 9 service cards. Card 1 spans 2 rows with `#f7f4ee` background, red tags, pill badges, and CTA arrow button. Cards 4 and 8 span 2 columns. | Implemented via `ShopifyStageServicesSection` with `shopifyDevelopmentAgencyServices`. |
| 4. Portfolio Showcase | `.our-work-sec` (`#our_work`): 4-column grid (2-column on mobile) displaying 8 projects with circular arrow button (`showMobileArrow={true}`), category pill, and "View Our Work" button. | Implemented via `PortfolioShowcaseSection` with `cardVariant="ourWorkRefresh"`, `columns={4}`, `mobileColumns={2}`, `showMobileArrow={true}`. |
| 5. Team Behind It | `.shopify-dev-team`: Dark background (`#192019`) with left-column copy and 4 team boxes. Active card has theme red background (`#ad5151`), others have dark cards with subtle borders. | Implemented via `ShopifyTeamBoxesSection` with `shopifyDevelopmentAgencyTeam`. |
| 6. Pricing Models | `.white_label_wp_develop_plan_section` (`#our_white_label_pricing`): 3 pricing cards (Project-Based, Flexible Hourly Support from $25/hour, Dedicated Developer / Team from $2,000/month). | Implemented via `PricingTableSection` with `shopifyDevelopmentAgencyPricing`. |
| 7. Development Process | `.shopify-development-process`: 5-step horizontal timeline (Assess, Plan, Develop, QA, Launch & Improve) with numbered circles "01"–"05" and connecting line. Stacks vertically on mobile. | Implemented via `ShopifyHorizontalProcessSection` with `shopifyDevelopmentAgencyProcess`. |
| 8. Client Stories | `.happy-client-sec`: Eyebrow "Client Stories", H2 "Don't Just Take Our Word For It", carousel with 11 video testimonial cards and next/previous controls. | Implemented via `HappyClientSection` with `shopifyDevelopmentAgencyTestimonials`. |
| 9. FAQs | `.faq-sec`: "Frequently Asked Questions" heading with 10 accordion items (first item open by default), plus/minus icon, and rich text answer markup. | Implemented via `SplitFaqSection` with `shopifyDevelopmentAgencyFaqs`. |
| 10. Closing CTA | `.request-banner`: Gradient background with "Want us to help you with your online store?" and "REQUEST A QUOTE" button linking to `/request-quote`. | Implemented via `CtaBannerSection` with `shopifyDevelopmentAgencyCtaBanner`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero video | Autoplays muted, loops continuously, playsinline | Implemented with native video element | verified |
| Brand marquee | Seamless infinite scrolling marquee | Implemented via ClientLogoSlider | verified |
| Service card hover | Hover borders, button text transition, pill hover | CSS transitions | verified |
| Portfolio card hover | Scale zoom on image, circular arrow turns theme-red | CSS transitions | verified |
| Team cards | Active card in red `#ad5151`, hover on other cards transitions background | CSS transitions | verified |
| Process timeline | Hover on circles transitions border and number color | CSS transitions | verified |
| Video testimonials | Drag/swipe react-slick carousel with responsive slide count (1 mobile, 2 tablet, 3 desktop) | Configured with responsive breakpoints | verified |
| Accordion | First item open by default; click toggles single open item | FaqAccordion state | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/shopify-development-agency` per project URL policy | implemented |
| Live title exceeds 60 chars | Kept within 60 chars: "Shopify Development Agency & Services | Dynamic Dreamz" (55 chars) | implemented |
| Live description exceeds 160 chars | Kept at 151 chars: "Dynamic Dreamz is a Shopify Platinum Partner offering custom Shopify development, theme customization, integrations, migrations and ongoing maintenance." | implemented |
| Zero asset duplicates | Reused existing project assets and stored unique OG image | verified 0 duplicates |
