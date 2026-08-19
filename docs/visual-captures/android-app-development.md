# Android App Development Page

Live URL: `https://www.dynamicdreamz.com/android-app-development/`
Local route: `/android-app-development`
Date checked: 2026-08-19
Browser/source: Google Chrome headless inspection, rendered live page + View Page Source, live page-specific CSS (`assets/css/services/main.css`, `assets/css/services/media.css`, `assets/css/default-media.css`, `style.css`), live JS (`assets/js/custom.js`, `assets/js/services.js`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure, heading hierarchy, 2-column hero with 420px animated review wheel, 12-logo brand slider, 9 service cards ("What We Provide"), 4-column portfolio showcase ("Glimpses of Our Android App Developments"), 11 video testimonials slider ("Don't Just Take Our Word For It"), 6 FAQ accordions, and bottom CTA banner. |
| 768x1024 (Tablet) | Verified responsive stacking, 420px review wheel centered below hero text, stacked brand section, 2-column service cards, 2-column portfolio cards (with portrait aspect ratio), 2-item testimonial carousel, touch-friendly FAQ accordions, and centered CTA banner. |
| 390x844 (Mobile) | Verified single-column hero with 275px scaled review wheel, single-column brand section with horizontal slider, single-column service cards, single-column portfolio cards, 1-item testimonial carousel, full-width CTA buttons, and stacked banner. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, publish/modified dates, Open Graph, Yoast JSON-LD, H1 (`Top Notch Custom Android App Development Services`), hero copy, review animation markup (3 inline wordmark SVGs + star SVGs + review pills), 12 client brand logos, 9 service cards ("What We Provide") with red CTA button ("LET ME GIVE YOU A HAND TO HELP YOU"), 4 portfolio cards ("Glimpses of Our Android App Developments") with Google Play Store links, 11 video testimonials ("Don't Just Take Our Word For It"), 6 FAQ items, and request CTA banner. |
| Live `assets/css/services/main.css` | `.inner-hero-sec` (pt 190px, pb 55px, #fff, overflow hidden), `.inner-wrapper` flex (left 55.7% / right 41%), `.inner-hero-content h1` (base h1 50px/66px/700/-1px Montserrat), `.review_animation` 420px circle opacity .8 absolute top/left/right 0, `.our-client-sec` (#faf4ee, py 40px), `.what-we-provide-sec` heading-text (title 41% / text 55%), `.services-box` 2-col cards (50% width, 8px padding, hover translateY(-10px), `.services-text` gradient border on hover), `.our-work-sec` (`.our-work-main.grid-column-4 .our_work_team` width calc(25% - 12px), `.ourwork_team_image` pb 154.5%, overlay gradient rgba(0,0,0,.4), View Project slides to bottom 30px on hover, `.project-cate` android platform mark top-right fade/translate, `.ourwork_team_content` h6 eyebrow rgba(0,0,0,.7) 19.6px tracking 1.12px uppercase + h4 18px/700), `.happy-client-sec` (`.happy-client-col` 15px radius 1px #d9d9d9, `.card-item` min-height 324px, `.client-img` 100% cover + rgba(0,0,0,.3) overlay, `.client-name` white pill radius 30px 16px/600, `.play-video` 76px centered with pulse-border keyframe, `.qoute-icon` top-right 46x40, `.client-review-text` 16px/400 28.64px padding 33px 36px 39px), `.faq-sec` (`.accrodion-item` 10px radius 1.3px #efefef border, `.accrodion-title` 24px 70px 24px 32px padding, plus/minus 32px icon, `.accrodion-content` 16px/500/32px #535353, first item open), `.request-banner` (linear-gradient(97.18deg, #15c064 28.5%, #00d1ff 91.82%), py 35px, h3 30px/700/-0.6px, btn-white). |
| Live `assets/css/services/media.css` | ≤1199px: h1 40/50, p 16/30.4, left-col 100% centered, right-col 50% margin 50px auto 0, review_animation 420px; ≤991px: right-col 100%, services-box 100%, `.our-work-main.grid-column-4 .our_work_team` calc(50% - 8px); ≤767px: h1 30/40, review_animation 275px circle, text 14px, ratings 15px, portfolio 1-col (width 100%, pb 115%); ≤359px: h1 34/44. |
| Live `assets/js/custom.js` | Review animation: `showNextReview()` on load, then every 5000ms; active circle gets `zoom-in show active` at +100ms, wrapper `show` at +300ms, 5 star paths `show` staggered 200ms each, ratings `show` at 1300ms, pill `show` at 1600ms; reset removes all classes first; pill `translateY(150px)→0` over 1s cubic-bezier(.95,-.42,.15,1.26). |
| Live `assets/js/services.js` | `.owl-carousel.happy-client-slider`: items 1 (<767) / 2 (≥767, ≥1200), margin 25 (10 mobile), stagePadding 50 (25 mobile). |
| Assets | Canonical brand logos in `public/assets/clients/`, 7 unique service SVGs in `public/assets/services/android-app-development/` + 2 reused canonical SVGs, 4 canonical portfolio project screenshots in `public/assets/our-work/projects/` (Llama, Bombay Shirt Company, Bellavita Organic, Supertails) with Android platform icon, and 11 testimonial photos. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.inner-hero-sec`: left h1 `Top Notch Custom Android App Development Services` (50/66 → 40/50 → 30/40 → 34/44), paragraph, `REQUEST A QUOTE` red pill to `/request-quote`; right: 3 rotating 420px circles (Clutch #F8DDD7, Upwork #E3F1D5, GoodFirms #D8E5FF) with ratings & review counts; 275px circle ≤767px. | Reused `ServiceHeroSection` + client `ReviewAnimation` component with full timing parity; links to internal `/request-quote`. |
| Brands | `.our-client-sec` #faf4ee with heading `Trusted by <br>Leading Brands` + 12 brand logos (Supertails, Eleven Eleven, Bella Vita, Bombay Shirts, Popclub, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit). | Reused `IndustryBrandsSection` with typed `androidAppDevelopmentBrands`. |
| Services ("What We Provide") | `.what-we-provide-sec` heading-text + 9 `.services-box` cards (Prototyping, Wireframes & Mockups; Native Android App Development; Material Design Implementation; App Testing and Quality Assurance; Google Play Store Deployment; App Maintenance and Support; Existing App Customization; Shopify App Development; Hybrid Android App Development) + centered `LET ME GIVE YOU A HAND TO HELP YOU` red pill to `/request-quote`. | Reused `AgencyServicesSection` with typed `androidAppDevelopmentServices`. |
| Portfolio ("Glimpses of Our Android App Developments") | `.our-work-sec` 4-col grid (`.grid-column-4`) of `.our_work_team.mobile_apps` cards (Llama – An App By CWRB, Bombay Shirt Company, Bellavita Organic, Supertails) with `ANDROID APP DEVELOPMENT` eyebrow, `padding-bottom: 154.5%`, dark hover overlay, Google Play Store links, and `View Project` link + `VIEW OUR WORK` CTA button to `/our-work`. | Reused `PortfolioShowcaseSection` with `columns={4}`, `imageAspectClassName="pb-[154.5%] max-[767px]:pb-[115%]"`, and typed `androidAppDevelopmentPortfolio`. |
| Testimonials ("Don't Just Take Our Word For It") | `.happy-client-sec` header `Don't Just Take Our Word For It` + carousel of 11 video testimonial cards (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe wang, Clinton De Vere, Fernando Arias). | Reused `HappyClientSection` with `shopifyPlusAgencyTestimonials.items`. |
| FAQs | `.faq-sec` white bg: h2 `Frequently Asked Questions` + 6 accordion items (first open), plus/minus icon, 16px/500 answers. | Reused `FaqSection` with `androidAppDevelopmentFaqs`. |
| CTA Banner | `.request-banner` gradient background, h3 `Want us to help you with your online store?`, and `REQUEST A QUOTE` white pill to `/request-quote`. | Reused `CtaBannerSection`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | First review circle activates on load with timed animations | Replicated with effect timers in `ReviewAnimation` | verified |
| Rotating | Circles swap every 5000ms; paused under `prefers-reduced-motion` | Replicated | verified |
| Brands marquee | Infinite smooth horizontal scroll across viewports | `ClientLogoSlider` | verified |
| Service cards hover | translateY(-10px) over .3s, gradient border | CSS transition + gradient border pseudo | verified |
| Portfolio hover | 40% black overlay, View Project rises to 30px, Android platform mark fades in | Matches `PortfolioProjectCard` | verified |
| Testimonials carousel | Drag/swipe carousel with responsive slide count (1 on mobile, 2 on desktop) | react-slick configured to match live owl-carousel | verified |
| Accordion | First item open; plus/minus swap | `FaqAccordion` | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/android-app-development` per project URL policy | implemented |
| Live title length | `Android App Development Services | Dynamic Dreamz` (49 chars - within 60-char budget) | implemented |
| Live description length | Preserved live description (154 chars - within 70-160 char budget) | implemented |
| Brand & Service assets deduplication | Reused canonical files across `public/assets/` without creating duplicate copies | implemented |
