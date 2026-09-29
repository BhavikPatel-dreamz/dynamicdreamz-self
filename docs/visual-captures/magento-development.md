# Magento Development Page

Live URL: `https://www.dynamicdreamz.com/magento-development/`  
Local route: `/magento-development`  
Date checked: 2026-09-29  
Browser/source: Google Chrome headless DOM dump + View Page Source, live page styling (`style.css`), live layout sections (`hero-new-section hide-logo`, `our-client-sec`, `what-we-provide-sec`, `how-to-choose-spa-sec`, `white_label_wp_develop_plan_section`, `our-work-sec`, `happy-client-sec`, `faq-sec`, `request-banner`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure: hero with "Magento Development Agency" eyebrow, H1 "Magento Development Services", 3 review badges (Clutch, Trustpilot, Upwork; Shopify badge hidden via `.hide-logo`), tablet mockup slider with floating Magento logos, continuous 12-brand marquee, 6 service cards with red line SVGs (`#AD5151`), 4-item capabilities grid ("Magento Open Source & Adobe Commerce Capabilities"), 3-card pricing engagement section ("Choose the Right Magento Engagement"), 4-column portfolio grid ("See Our Magento Work in Action"), 11 video testimonials slider ("Hear from Our Clients"), 9 split FAQ accordions, and bottom CTA banner. |
| 768x1024 (Tablet) | Verified responsive stacking: tablet mockup centered below hero text, 2-column service cards, 2-column capabilities items, 2-column pricing cards, 2-column portfolio cards, 2-item testimonial carousel, touch-friendly split FAQs, and full-width CTA buttons. |
| 390x844 (Mobile) | Verified single-column hero, continuous brand carousel, single-column service cards, single-column capabilities items, single-column pricing cards, single-column portfolio cards, 1-item testimonial carousel, and touch-friendly accordion FAQs. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title (`Magento Development Services \| Magento Development Company`), meta description, canonical, article:modified_time (`2026-09-29T06:08:09+00:00`), Yoast JSON-LD, H1 (`Magento Development Services`), 3 review badges, tablet slider mockup with 4 slides & 2 badges, 12 client brand logos, 6 service cards ("What We Provide"), 4 capabilities ("Magento Open Source & Adobe Commerce Capabilities"), 3 pricing plans ("Choose the Right Magento Engagement"), 4 portfolio cards ("See Our Magento Work in Action"), 11 video testimonials, 9 FAQ items, and request CTA banner. |
| Live CSS (`style.css`) | `.hero-new-section.hide-logo` (hides first global brand item, flex layout, tablet frame with `.tablet-badge-top` and `.tablet-badge-bottom`), `.our-client-sec` (#faf4ee with continuous marquee), `.what-we-provide-sec` (split heading, `#fafaf7` rounded cards with border `rgba(40,40,40,0.08)`, 24x24 line SVGs with `#AD5151` stroke, no trailing CTA), `.how-to-choose-spa-sec` (pt-0, 4-col capabilities grid with top/left/right borders), `.white_label_wp_develop_plan_section.shopify-plus-engagement` (bg `#edf2ee`, 3 pricing cards with badges, prices, and arrow CTA links), `.our-work-sec` (4-column responsive grid with dark hover overlay, platform mark, View Project arrow icon, and "View our work" CTA button to `/our-work`), `.happy-client-sec` (video testimonial carousel), `.faq-sec` (split FAQ layout with sticky left text and right accordion items), `.request-banner` (gradient background with CTA button). |
| Assets | Canonical brand logos in `public/assets/clients/`, 6 exact red line SVGs in `src/components/sections/magento/magento-service-icons.tsx`, canonical portfolio project screenshots in `public/assets/our-work/projects/`, tablet slider assets in `public/assets/services/magento-development/hero/`, and 11 testimonial photos. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.hero-new-section.hide-logo`: left eyebrow `Magento Development Agency`, H1 `Magento Development Services`, description, `REQUEST A QUOTE` button to `/request-quote`, 3 review badges (Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus); right tablet frame with 4 slides, top badge (`magento-rectangle-logo.webp`), bottom badge (`magento-square-logo.webp`), and background decorative shape. | Reused `CityPageHeroSection` with `className="hide-logo"` and typed `magentoDevelopmentHero`. |
| Brands | `.our-client-sec` #faf4ee with heading `Trusted by <br>Leading Brands` + 12 brand logos (Tego, Nekter, Rare Rabbit, Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate). | Reused `IndustryBrandsSection` with typed `magentoDevelopmentBrands`. |
| Services ("What We Provide") | `.what-we-provide-sec` split heading + 6 `.services-box` cards (Custom Store Solutions, Easy Migration, Speed Optimization, Custom Themes Development, Custom Modules, Ongoing Support) with `#AD5151` red stroke SVGs in `#fafaf7` rounded cards; no trailing CTA. | Reused `AgencyServicesSection` with `cardVariant="services-box"`, `columns={2}`, `hideCta={true}`, and `MagentoServiceIcon`. |
| Capabilities | `.how-to-choose-spa-sec.pt-0`: H2 `Magento Open Source & Adobe Commerce Capabilities` + description + 4 items (API & Third-Party Integrations, Multi-Store & International Setup, Version Upgrades & Compatibility, Complex Commerce Workflows). | Reused `EvaluationFrameworkSection` with `className="how-to-choose-spa-sec pt-0 pb-20 max-[992px]:pt-0 max-[992px]:pb-[50px]"` and typed `magentoDevelopmentCapabilities`. |
| Pricing / Engagements | `.white_label_wp_develop_plan_section.shopify-plus-engagement.mb-0`: eyebrow `Flexible Magento Engagements`, H2 `Choose the Right Magento Engagement` + 3 cards (Project-Based / Custom Quote, Flexible Hourly Support / $20/hour, Dedicated Developer / Team / From $2,000/month). | Reused `PricingTableSection` with typed `magentoDevelopmentEngagements`. |
| Portfolio ("See Our Magento Work in Action") | `.our-work-sec`: eyebrow `Portfolio`, H2 `See Our Magento Work in Action`, 4 projects (Maxi Cosi, Caves Santa Cruz, City Circuit, United Cheer Apparel) in 4 columns with `Magento` eyebrow, hover effects, and `View our work` button to `/our-work`. | Reused `PortfolioShowcaseSection` with `cardVariant="ourWorkRefresh"`, `columns={4}`, `variant="liveGrid"`, and `sectionId="our_work"`. |
| Testimonials ("Hear from Our Clients") | `.happy-client-sec`: H2 `Hear from Our Clients` + carousel of 11 video testimonial cards. | Reused `HappyClientSection` with `shopifyPlusAgencyTestimonials.items`. |
| FAQs | `.faq-sec`: split FAQ layout with H2 `Frequently Asked Questions` + 9 accordion items matching live. | Reused `SplitFaqSection` with `magentoDevelopmentFaqs`. |
| CTA Banner | `.request-banner`: gradient background, H3 `Want us to help you with your online store?`, and `request a quote` pill to `/request-quote`. | Reused `CtaBannerSection`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero tablet slider | Slick slider transitioning through 4 project mockups with auto-scroll and floating badges | Replicated in `CityHeroTabletSlider` | verified |
| Brands marquee | Infinite smooth horizontal scroll across viewports | Replicated in `ClientLogoSlider` | verified |
| Service cards hover | Border shadow and background transition | Clean Tailwind transitions | verified |
| Capabilities cards | Subtle border grid layout with numbered indicator | Replicated in `EvaluationFrameworkSection` | verified |
| Pricing cards hover | translateY and arrow slide on link hover | Replicated in `PricingTableSection` | verified |
| Portfolio hover | Dark hover overlay, View Project rises, link navigates to live URL | Replicated in `PortfolioProjectCard` | verified |
| Testimonials carousel | Drag/swipe video carousel with responsive slide count | Replicated in `HappyClientSection` | verified |
| Accordion | Plus/minus icon toggle, first item open by default | Replicated in `SplitFaqSection` | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/magento-development` per project URL policy | implemented |
| Live meta description length | 160 characters (trimmed spaces to meet 70-160 char length budget without altering meaning, matching og:description) | implemented |
| Brand & Service assets deduplication | Ingested unique assets to `public/assets/services/magento-development/hero/`, converted to WebP; verified zero duplicate hash groups | implemented |
