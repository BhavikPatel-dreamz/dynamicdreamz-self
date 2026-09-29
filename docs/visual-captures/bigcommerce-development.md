# BigCommerce Development Page

Live URL: `https://www.dynamicdreamz.com/bigcommerce-development/`
Local route: `/bigcommerce-development`
Date checked: 2026-09-29
Browser/source: Google Chrome inspection, rendered live page + View Page Source, live page-specific CSS (`assets/css/services/main.css`, `assets/css/flexible-css/hero_new_section.css`, `assets/css/flexible-css/theme_customization_services.css`, `assets/css/flexible-css/our_development_process.css`, `style.css`), live JS (`assets/js/custom.js`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure, heading hierarchy, 2-column hero with 420px tablet mockup slider (`.hero-new-section.hide-logo`), 12-logo brand slider (`.our-client-sec`), single text box intro (`.single-text-box-sec.pb-0`), 5 service cards ("Our BigCommerce Development Services" in `.what-we-provide-sec` with no CTA), 5 platform benefit cards in yellow themed section (`.theme-customization-services.yellow`), 4-step process section with transparent background (`.our-development-process.bg-transparent`), 6 agency advantage cards in green themed section (`.theme-customization-services.green`), 4 portfolio cards ("Insights into Our BigCommerce Development" in 4-column layout with "View our work" CTA button to `/our-work`), 11 video testimonials slider ("Don't Just Take Our Word For It"), 6 FAQ accordions (`.faq-sec` / `SplitFaqSection`), and NO bottom CTA banner (omitted to match live). |
| 768x1024 (Tablet) | Verified responsive stacking, tablet slider hidden on screens ≤991px, stacked brand section, 2-column service cards, 2-column yellow benefit cards, 2-column process step grid, 2-column green advantage cards, 2-column portfolio cards, 2-item testimonial carousel, touch-friendly FAQ accordions. |
| 390x844 (Mobile) | Verified single-column hero with 3 rating badges in 3-across layout (`.hero-new-section.hide-logo`), single-column brand section with horizontal slider, single-column service cards, 1-column benefit cards, 1-column process steps, 1-column advantage cards, 1-column portfolio cards, 1-item testimonial carousel, full-width CTA buttons. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.hero-new-section.hide-logo`: bg `#f7f4e9`, eyebrow `ESTABLISHED IN 2006`, h1 `BigCommerce Development Company`, paragraph, `REQUEST A QUOTE` red pill to `/request-quote`; 3 badges (Clutch, Trustpilot, Upwork); right: 420x593px tablet mockup with 4 auto-sliding projects (Knobs, Maple Syrup, Milestones Company, Gotcha Covered) with top rectangle BigCommerce badge and bottom square BigCommerce badge. Hidden on screens ≤991px. | Reused `CityPageHeroSection` with `hide-logo` modifier, `tabletSlider` configuration, and typed content in `src/content/bigcommerce-development.ts`. |
| Brands | `.our-client-sec` #FBEED5 with heading `Trusted by <br>Leading Brands` + 12 brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit). | Reused `IndustryBrandsSection` with typed `bigCommerceDevelopmentBrands`. |
| Intro Text Box | `.single-text-box-sec pb-0`: `.text-box-wrap` #fbf7ed, 20px rounded, 70px 55px padding, h2 `Start Your eCommerce Business with <br> BigCommerce Development Company`, 2 paragraphs. | Reused `TextBoxSection` with typed `bigCommerceDevelopmentIntro`. |
| Services | `.what-we-provide-sec` with eyebrow `Our Services`, heading `Our BigCommerce Development Services`, intro text, and 5 `.services-box` cards with 24x24 single-stroke icons. No CTA button. | Reused `AgencyServicesSection` with `cardVariant="services-box"`, `hideCta={true}`, and `<BigCommerceIcon>` svg icons. |
| Platform Benefits | `.theme-customization-services.yellow` bg `#fafaf7`: eyebrow `Why BigCommerce`, heading `Why Choose BigCommerce for Your Business`, description, and 5 `.box` cards (Ease of Use, Scalable Solutions, SEO Friendly, Secure and Reliable, Customizable Design) with single-stroke icons. | Reused `ThemeCustomizationServicesSection` with `variant="yellow"`, `id="why-choose-bigcommerce"`, and `<BigCommerceIcon>`. |
| Development Process | `.our-development-process.bg-transparent`: eyebrow `How We Work`, heading `Our BigCommerce Development Process`, description, and 4 step items (`Step 01` Initial Consultation, `Step 02` Planning and Strategy, `Step 03` Development and Implementation, `Step 04` Testing, Launch, and Support). | Reused `OurDevelopmentProcessSection` with `className="our-development-process bg-transparent"` and typed `bigCommerceDevelopmentProcess`. |
| Agency Advantages | `.theme-customization-services.green` bg `#eff4ef`: eyebrow `Why Dynamic Dreamz`, heading `Why Choose Dynamic Dreamz`, description, and 6 `.box` cards (Expertise in Custom Development, Focus on Security, Commitment to Quality, Timely Delivery, Transparent Communication, Ongoing Support and Maintenance). | Reused `ThemeCustomizationServicesSection` with `variant="green"`, `id="why-choose-dynamicdreamz"`, and `<BigCommerceIcon>`. |
| Portfolio | `.our-work-sec` with eyebrow `Portfolio`, heading `Insights into Our BigCommerce Development`, description, 4 project cards in 4-column layout (Kayfi, Maple Syrup, Country & Stable, Miles Stones Company) with `BIGCOMMERCE` label, dark hover overlay, arrow icon, and `View our work` CTA button to `/our-work`. | Reused `PortfolioShowcaseSection` with `columns={4}`, `cardVariant="ourWorkRefresh"`, `sectionId="our_work"`, and typed `bigCommerceDevelopmentPortfolio`. |
| Testimonials | `.happy-client-sec` with eyebrow `Client Stories`, heading `Don't Just Take Our Word For It`, description, and 11 video testimonial cards with modal playback. | Reused `HappyClientSection` with `shopifyPlusAgencyTestimonials.items`. |
| FAQs | `.faq-sec` with heading `Frequently Asked Questions` and 6 accordion items. Standardized across migration as `SplitFaqSection`. | Reused `SplitFaqSection` with `idPrefix="bigcommerce-faq"` and `bigCommerceDevelopmentFaqs`. |
| Bottom CTA Banner | None on live site. | Omitted to match live site exactly. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero tablet slider | Slides smoothly scroll through 4 project screenshots every 2000ms with infinite loop. | `CityHeroTabletSlider` with CSS transforms and reduced motion support | verified |
| Brands marquee | Infinite smooth horizontal scroll across viewports | `ClientLogoSlider` | verified |
| Service cards hover | translateY(-10px) over .3s, subtle border highlight | CSS transition in `AgencyServicesSection` | verified |
| Benefit cards hover | Border highlight on hover | CSS transition in `ThemeCustomizationServicesSection` | verified |
| Process steps | Bordered step grid with uppercase step pill and bold title | `OurDevelopmentProcessSection` | verified |
| Portfolio hover | Dark overlay, title and arrow hover transition | `PortfolioProjectCard` with `ourWorkRefresh` variant | verified |
| Testimonials carousel | Drag/swipe carousel with responsive slide count | react-slick configured to match live owl-carousel | verified |
| Accordion | Plus/minus toggle, smooth collapse/expand | `FaqAccordion` in `SplitFaqSection` | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/bigcommerce-development` per project URL policy | implemented |
| Live title length | `BigCommerce Development Company India \| Dynamic Dreamz` (54 chars - within 60-char budget) | implemented |
| Live description length | Preserved live description (137 chars - within 70-160 char budget) | implemented |
| Live visible copy referencing WordPress in Section 7 | Preserved live visible wording per Hard Rules; logged proposed corrections in `docs/page-content-improvements.md` | implemented |
| Brand & Service assets deduplication | Reused canonical files across `public/assets/` without creating duplicate copies (0 duplicates audit passed) | implemented |
