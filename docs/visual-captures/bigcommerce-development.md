# BigCommerce Development Page

Live URL: `https://www.dynamicdreamz.com/bigcommerce-development/`
Local route: `/bigcommerce-development`
Date checked: 2026-08-19
Browser/source: Google Chrome headless inspection, rendered live page + View Page Source, live page-specific CSS (`assets/css/services/main.css`, `assets/css/services/media.css`, `assets/css/default-media.css`, `style.css`), live JS (`assets/js/custom.js`, `assets/js/services.js`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure, heading hierarchy, 2-column hero with 420px animated review wheel, 12-logo brand slider, single text box intro (`.single-text-box-sec`), 5 service cards ("Our BigCommerce Development Services"), 5 platform benefit cards ("Why Choose BigCommerce for Your Business"), 4-step wave process ("Our BigCommerce Development Process"), 6 agency advantage items ("Why Choose Dynamic Dreamz" in 3-column bordered grid), 6 portfolio showcase cards ("Insights into Our BigCommerce Development"), 11 video testimonials slider ("Don't Just Take Our Word For It"), 6 FAQ accordions, and bottom CTA banner. |
| 768x1024 (Tablet) | Verified responsive stacking, 420px review wheel centered below hero text, stacked brand section, 2-column service cards, 2-item carousel / 2-column benefit cards, stacked process steps with wave hidden, 2-column advantage grid, 2-column portfolio cards, 2-item testimonial carousel, touch-friendly FAQ accordions, and centered CTA banner. |
| 390x844 (Mobile) | Verified single-column hero with 275px scaled review wheel, single-column brand section with horizontal slider, single-column service cards, 1-item carousel benefit cards, single-column process steps, 1-column advantage list, single-column portfolio cards, 1-item testimonial carousel, full-width CTA buttons, and stacked banner. |

### Process wave responsive parity update — 2026-09-01

- Reference: owner-provided screenshot of the four-step BigCommerce process wave.
- Sources rechecked: bundled live `assets/css/services/main.css` and `assets/css/services/media.css` captures listed below.
- Desktop target: continuous rising wave, four staggered unboxed steps, gradient numbers, white shadowed icon tiles, and left-aligned step copy.
- Responsive target: hide the decorative wave below 992px; use two unboxed columns through tablet widths and one column below 576px.
- Interaction and animation: the section is informational with no interactive state; no motion is required.
- Local screenshots: `/tmp/process-wave-desktop.png` (1440px), `/tmp/process-wave-tablet.png` (768px), and `/tmp/process-wave-mobile.png` (390px).
- Verification result: desktop wave/marker alignment, tablet two-column flow, mobile single-column flow, typography, icon sizing, and content overflow checked in rendered output.
- Follow-up spacing adjustment: increased the desktop icon-to-title gap from 10px to 48px so the decorative curve remains visually separated from all step titles.
- Marker alignment follow-up: moved the desktop wave, step numbers, and icon tiles upward by 16px while keeping titles and descriptions stationary.
- Remaining differences: browser font rasterization only.

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, publish/modified dates, Open Graph, Yoast JSON-LD, H1, hero copy, review animation markup (3 inline wordmark SVGs + star SVGs + review pills), 12 client brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit), single text box intro, 5 service cards ("Our BigCommerce Development Services"), 5 benefit cards ("Why Choose BigCommerce for Your Business"), 4 process steps with wave SVG ("Our BigCommerce Development Process"), 6 advantage items ("Why Choose Dynamic Dreamz"), 6 portfolio cards ("Insights into Our BigCommerce Development"), 11 video testimonials ("Don't Just Take Our Word For It"), 6 FAQ items, and request CTA banner. |
| Live `assets/css/services/main.css` | `.inner-hero-sec` (pt 190px, pb 55px, #fff, overflow hidden), `.inner-wrapper` flex (left 55.7% / right 41%), `.inner-hero-content h1` (base h1 50px/66px/700/-1px Montserrat), `.review_animation` 420px circle opacity .8 absolute top/left/right 0, `.our-client-sec` (#faf4ee, py 40px), `.single-text-box-sec` (`.text-box-wrap` #fbf7ed, padding 70px 55px, radius 20px, h2 35px/48.475px/700, p 18px/34.2px/500 #535353), `.what-we-provide-sec` heading-text (title 41% / text 55%), `.services-box` 2-col cards (50% width, 8px padding, hover translateY(-10px), `.services-text` gradient border on hover), `.shopify-customization-services-sec` (gradient bg #e8f9ef to #e6fafd, py 80px, `.carousel-card` radius 15px, padding 30px 20px 80px 30px, hover gradient border before/after), `.our-process-sec.big-commerce-process` (wave SVG top 190px, `.process-box` staggered offsets: step 1 w 28% mt 110px icon top -50px left 86px, step 2 w 28% mt 30px icon top -55px left 90px, step 3 w 21% mt 10px icon top -40px left 65px, step 4 w 22% -mt 8% icon top -50px left 70px, step numbers "01"-"04" 50px gradient font), `.three-column-icon-with-text-sec` (`.why_dynamic_dreamz_main ul li` 33.33% width, padding 34px 28px, 1px solid #efefef borders, icon 58x58), `.our-work-sec` (3-col, 15px column gap, 60px row gap, `.ourwork_team_image` pb 115%, overlay gradient rgba(0,0,0,.4), View Project slides on hover, platform mark top-right), `.happy-client-sec` (`.happy-client-col` 15px radius 1px #d9d9d9, min-height 324px, 100% cover img, play-video 76px centered, qoute-icon 46x40), `.faq-sec` (10px radius 1.3px #efefef border, 24px 70px 24px 32px padding, plus/minus icon, first item open), `.request-banner` (gradient bg, py 35px, h3 30px/700, btn-white). |
| Live `assets/css/services/media.css` | <=1199px: hero h1 40/50, text-box-wrap p 30px 20px; <=991px: hero stacked, services 1-col, advantages 2-col, process stacked with wave hidden, portfolio 2-col; <=767px: hero h1 30/40, review wheel 275px, advantages 1-col, portfolio 1-col; <=575px: full-width review boxes. |
| Live `assets/js/custom.js` & `services.js` | Review animation: `showNextReview()` on load, then every 5000ms; owl-carousel `.scs-slider` and `.happy-client-slider` settings. |
| Assets | 12 client brand logos in `public/assets/clients/`, 5 service icons in `public/assets/services/bigcommerce-development/` & shared paths, 5 why-choose icons in `public/assets/services/bigcommerce-development/why-choose/`, 4 process icons in `public/assets/services/bigcommerce-development/process/`, 6 advantage icons in `public/assets/services/bigcommerce-development/advantages/`, 6 portfolio screenshots in `public/assets/our-work/projects/`, and 11 testimonial photos. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.inner-hero-sec`: left h1 `BigCommerce Development Company` (50/66 -> 40/50 -> 30/40), paragraph, `request a quote` red pill to `/request-quote`; right: 3 rotating 420px circles (Clutch #F8DDD7, Upwork #E3F1D5, GoodFirms #D8E5FF) with ratings & review counts; 275px circle <=767px. | Reused `ServiceHeroSection` + client `ReviewAnimation` component with full timing parity; links to internal `/request-quote`. |
| Brands | `.our-client-sec` #faf4ee with heading `Trusted by <br>Leading Brands` + 12 brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Popclub, SriSri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit). | Reused `IndustryBrandsSection` with typed `bigCommerceDevelopmentBrands`. |
| Intro Text Box | `.single-text-box-sec pb-0`: `.text-box-wrap` #fbf7ed, 20px rounded, 70px 55px padding, h2 `Start Your eCommerce Business with <br> BigCommerce Development Company`, 2 paragraphs. | Reused & extended `TextBoxSection` with typed `bigCommerceDevelopmentIntro`. |
| Services ("Our BigCommerce Development Services") | `.what-we-provide-sec` heading-text + 5 `.services-box` cards (Theme Customization, App Configuration, Private App Creation, Figma to BigCommerce Conversion, BigCommerce Maintenance) + centered `Let me give you a hand to help you` red pill to `/request-quote`. | Reused `AgencyServicesSection` with typed `bigCommerceDevelopmentServices`. |
| Platform Benefits ("Why Choose BigCommerce for Your Business") | `.shopify-customization-services-sec mt-80` gradient bg + 5 `.carousel-card` items (Ease of Use, Scalable Solutions, SEO Friendly, Secure and Reliable, Customizable Design) with hover gradient borders. | Reused & extended `ShopifyReasonsSection` with typed `bigCommerceWhyChoosePlatform`. |
| Process ("Our BigCommerce Development Process") | `.our-process-sec.inner-process-sec.big-commerce-process`: title + description + background wave SVG + 4 staggered `.process-box` cards (Initial Consultation, Planning and Strategy, Development and Implementation, Testing, Launch, and Support) with gradient step numbers "01"-"04". | Built generalized `ProcessWaveSection` with responsive desktop/tablet/mobile parity. |
| Agency Advantages ("Why Choose Dynamic Dreamz") | `.three-column-icon-with-text-sec` / `.why_dynamic_dreamz_sec`: title + description + 6 bordered items in 3-column grid (Expertise in Custom Development, Focus on Security, Commitment to Quality, Timely Delivery, Transparent Communication, Ongoing Support and Maintenance). | Reused `ShopifyAdvantagesSection` with typed `bigCommerceWhyChooseAgency`. |
| Portfolio ("Insights into Our BigCommerce Development") | `.our-work-sec` 3-col grid of `.our_work_team` cards (Kayfi, Maple Syrup, Knobs, Daniel Walters, Country & Stable, Jolie Perfume) with `BIGCOMMERCE` eyebrow, dark hover overlay, and `View Project` link + `View our work` CTA button to `/our-work`. | Reused `PortfolioShowcaseSection` with typed `bigCommerceDevelopmentPortfolio`. |
| Testimonials ("Don't Just Take Our Word For It") | `.happy-client-sec` header `Don't Just Take Our Word For It` + carousel of 11 video testimonial cards (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe wang, Clinton De Vere, Fernando Arias). | Reused `HappyClientSection` with `shopifyPlusAgencyTestimonials.items`. |
| FAQs | `.faq-sec` white bg: h2 `Frequently Asked Questions` + 6 accordion items (first open), plus/minus icon, 16px/500 answers. | Reused `FaqSection` with `bigCommerceDevelopmentFaqs`. |
| CTA Banner | `.request-banner` gradient background, h3 `Want us to help you with your online store?`, and `Request a Quote` white pill to `/request-quote`. | Reused `CtaBannerSection`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | First review circle activates on load with timed animations | Replicated with effect timers in `ReviewAnimation` | verified |
| Rotating | Circles swap every 5000ms; paused under `prefers-reduced-motion` | Replicated | verified |
| Brands marquee | Infinite smooth horizontal scroll across viewports | `ClientLogoSlider` | verified |
| Service cards hover | translateY(-10px) over .3s, gradient border | CSS transition + gradient border pseudo | verified |
| Benefit cards hover | Gradient border before/after highlight on hover | CSS transition + gradient border pseudo | verified |
| Portfolio hover | 40% black overlay, View Project rises, platform mark fades in | Matches `PortfolioProjectCard` | verified |
| Testimonials carousel | Drag/swipe carousel with responsive slide count | react-slick configured to match live owl-carousel | verified |
| Accordion | First item open; plus/minus swap | `FaqAccordion` | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/bigcommerce-development` per project URL policy | implemented |
| Live title length | `BigCommerce Development Company India \| Dynamic Dreamz` (54 chars - within 60-char budget) | implemented |
| Live description length | Preserved live description (137 chars - within 70-160 char budget) | implemented |
| Live visible typos in BigCommerce descriptions | Preserved live visible wording per Hard Rules; logged proposed corrections in `docs/page-content-improvements.md` | implemented |
| Brand & Service assets deduplication | Reused canonical files across `public/assets/` without creating duplicate copies | implemented |
