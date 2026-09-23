# Shopify Development Agency Page

Live URL: https://www.dynamicdreamz.com/shopify-development-agency/
Local route: /shopify-development-agency
Date refreshed: 2026-09-22
Browser/source: Headless Google Chrome full & viewport captures, rendered live DOM inspection (`docs/visual-captures/source/shopify-development-agency/live-page.html`), visual slice comparison (`docs/visual-captures/source/shopify-development-agency/*.png`), and local component/asset audit.

## Viewports & Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 (Desktop) | `docs/visual-captures/source/shopify-development-agency/live-desktop-1440x900.png` | `docs/visual-captures/source/shopify-development-agency/local-desktop-1440x900.png` | verified 1:1 match |
| 768x1024 (Tablet) | `docs/visual-captures/source/shopify-development-agency/live-tablet-768x1024.png` | `docs/visual-captures/source/shopify-development-agency/local-tablet-768x1024.png` | verified responsive stacking |
| 375x812 (Mobile) | `docs/visual-captures/source/shopify-development-agency/live-mobile-375x812.png` | `docs/visual-captures/source/shopify-development-agency/local-mobile-375x812.png` | verified responsive stacking |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title ("Shopify Development Agency & Services | Dynamic Dreamz"), description, canonical (`https://www.dynamicdreamz.com/shopify-development-agency/`), publish/modified dates (`2026-08-31T13:14:09+00:00`), Open Graph card image (`/assets/og/shopify-development-agency.png`), JSON-LD schema, H1, hero copy, 4 proof badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus), hero video (`why-dynamic-dreamz.mp4`), 12 brand logos marquee (Tego, Nekter, Rare Rabbit, Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce), 9 service cards (Custom Store Development, Figma/XD Conversion, Theme Customization, App Integration, Migration, Maintenance, 2.0 Migration, White Label, Plus Mobile App), 8 portfolio cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, Bombay Shirt Company, Holy Plantz, Atolea Jewelry), 4 multidisciplinary team boxes, 3 engagement pricing models ($25/hr support, $2000/mo team, custom quote), 5 process steps (Assess, Plan, Develop, QA, Launch & Improve), 11 video testimonials, 10 FAQs, and bottom CTA banner. |
| Live CSS (`live-page.html`) | Extracted CSS rules for `.hero-new-section`, `.our-client-sec`, `.shopify-development-services`, `.our-work-sec`, `.shopify-dev-team`, `.white_label_wp_develop_plan_section`, `.shopify-development-process`, `.happy-client-sec`, `.faq-sec`, `.request-banner`. |
| Assets & Deduplication | Reused canonical assets across `public/assets/` (`why-dynamic-dreamz.mp4`, 4 proof SVGs, 12 brand SVGs, 8 portfolio WebPs). Added unique OG card image `public/assets/og/shopify-development-agency.png`. `npm run check:asset-duplicates` verified 0 duplicate hash groups across 1,707 public assets. |

## 10-Section Architecture (1:1 Live Parity)

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| 1. Hero | `.hero-new-section`: Dual eyebrow ("Established in 2006 • Shopify Platinum Partner" rendered with two `<span>` elements, a 30px red line `::before` at desktop / 15px at mobile, and a 3px circular dot separator), H1 ("Shopify Development Agency" in `neue_montrealmedium` 50px/60px desktop, 40px/50px tablet, 30px/40px mobile), subtitle (`<span class="h4">Custom Shopify development for brands that need more than a theme setup.</span>` in `Montserrat` 16px/28px font-semibold), intro paragraph, 2 pill CTAs (Primary red fill `#ad5151`, secondary outline `#4f4f4f`), 4 trust badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus) separated by vertical `#d9d9d9` borders on desktop and a 2x2 crosshair divider on mobile, and right-column video player (`why-dynamic-dreamz.mp4`, rounded 20px). Video hides on tablet/mobile (<=991px). | Implemented via `ServiceHeroVideoSection` using Server Component with typed props from `shopifyDevelopmentAgencyHero`. Subtitle restored matching live DOM; updated Trustpilot alt text. |
| 2. Trusted Brands | `.our-client-sec`: "Trusted by Leading Brands" heading with 12-brand logo marquee (Tego, Nekter, Rare Rabbit, Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce). | Implemented via `IndustryBrandsSection` with `shopifyDevelopmentAgencyBrandConfig` and updated `shopifyDevelopmentAgencyBrands` (12 exact live brands). |
| 3. Stage Services | `.shopify-development-services` (`id="shopify-services"`): Asymmetric 3-column CSS grid (`1.2fr 0.8fr 0.8fr`) with 9 service cards. Card 1 spans 2 rows with `#f7f4ee` background, red tags, pill badges, and CTA arrow button. Cards 4 and 8 span 2 columns. | Implemented via `ShopifyStageServicesSection` with `shopifyDevelopmentAgencyServices`. Cleaned Card 9 trailing period. |
| 4. Portfolio Showcase | `.our-work-sec` (`#our_work`): 4-column grid (2-column on mobile) displaying 8 projects with circular arrow button (`showMobileArrow={true}`), category pill, and "View Our Work" button. | Implemented via `PortfolioShowcaseSection` with `cardVariant="ourWorkRefresh"`, `columns={4}`, `mobileColumns={2}`, `showMobileArrow={true}`. |
| 5. Team Behind It | `.shopify-dev-team`: Dark background (`#192019`) with left-column copy and 4 team boxes. All 4 boxes are uniform dark cards (`bg-white/[0.045]`, `border-white/12`, rounded `18px`, `p-[22px]`, title `#fff`, text `rgba(255,255,255,0.58)`). No active red card or red hover type color exists on live. | Implemented via `ShopifyTeamBoxesSection` with `shopifyDevelopmentAgencyTeam`. |
| 6. Pricing Models | `.white_label_wp_develop_plan_section` (`#our_white_label_pricing`): 3 pricing cards (Project-Based, Flexible Hourly Support from $25/hour, Dedicated Developer / Team from $2,000/month). | Implemented via `PricingTableSection` with `shopifyDevelopmentAgencyPricing`. |
| 7. Development Process | `.shopify-development-process`: 5-step horizontal timeline (Assess, Plan, Develop, QA, Launch & Improve) with numbered circles "01"–"05" and connecting line. Stacks vertically on mobile. | Implemented via `ShopifyHorizontalProcessSection` with `shopifyDevelopmentAgencyProcess`. |
| 8. Client Stories | `.happy-client-sec`: Eyebrow "Client Stories", H2 "Don't Just Take Our Word For It", carousel with 11 video testimonial cards and next/previous controls. | Implemented via `HappyClientSection` with `shopifyDevelopmentAgencyTestimonials`. |
| 9. FAQs | `.faq-sec`: "Frequently Asked Questions" heading with 10 accordion items (first item open by default), plus/minus icon, and rich text answer markup. | Implemented via `SplitFaqSection` with `shopifyDevelopmentAgencyFaqs`. Updated FAQ 6 bold tags (`<strong>$25/hour</strong>`, `<strong>$2,000/month</strong>`). |
| 10. Closing CTA | `.request-banner`: Gradient background with "Want us to help you with your online store?" and "REQUEST A QUOTE" button linking to `/request-quote`. | Implemented via `CtaBannerSection` with `shopifyDevelopmentAgencyCtaBanner`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero video | Autoplays muted, loops continuously, playsinline | Implemented with native video element | verified |
| Brand marquee | Seamless infinite scrolling marquee | Implemented via ClientLogoSlider | verified |
| Service card hover | Hover borders, button text transition, pill hover | CSS transitions | verified |
| Portfolio card hover | Scale zoom on image, circular arrow turns theme-red | CSS transitions | verified |
| Team cards | Uniform dark cards with subtle hover transition (`hover:border-white/20 hover:bg-white/[0.07]`), no red background or text | CSS transitions | verified |
| Process timeline | Hover on circles transitions border and number color | CSS transitions | verified |
| Video testimonials | Drag/swipe react-slick carousel with responsive slide count (1 mobile, 2 tablet, 3 desktop) | Configured with responsive breakpoints | verified |
| Accordion | First item open by default; click toggles single open item | FaqAccordion state | verified |

## Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/shopify-development-agency` per project URL policy | implemented |
| Live title | "Shopify Development Agency & Services \| Dynamic Dreamz" (55 chars <= 60 chars) | implemented |
| Live description | "Looking for a Shopify development agency? Work with a Shopify Platinum Partner for custom builds, migrations, integrations, CRO and ongoing support." (154 chars) | implemented |
| Portfolio CTA link destination | Live site links to `/our-work` with label "View our work" | implemented |
| Hero secondary anchor CTA | Native `<a>` rendering enabled in `ButtonLink` for in-page `#shopify-services` hash navigation | implemented |
| FAQ 9 raw HTML link rendering | `formatBrText` parses `<a>` tags into interactive Next.js `<Link>` elements with live styling | implemented |
| Zero asset duplicates | Reused existing project assets and stored unique OG image | verified 0 duplicates |
