# Shopify Development Agency Page

Live URL: https://www.dynamicdreamz.com/shopify-development-agency/
Local route: /shopify-development-agency
Date checked: 2026-08-19
Browser/source: Google Chrome headless inspection, rendered live page + View Page Source, live page-specific CSS (ssets/css/services/main.css, ssets/css/services/media.css, ssets/css/default-media.css, style.css), live JS (ssets/js/custom.js, ssets/js/services.js), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure, heading hierarchy, 2-column hero with 420px animated review wheel, 10 brand logos marquee, 8 service cards, 6 portfolio showcase cards, 11 video testimonials slider, 9 FAQ accordions, and bottom CTA banner. |
| 768x1024 (Tablet) | Verified responsive stacking, 420px review wheel centered below hero text, 3-visible brand logos, 2-column service cards, 2-column portfolio cards, 2-item testimonial carousel, and touch-friendly FAQ accordions. |
| 390x844 (Mobile) | Verified single-column hero with 275px scaled review wheel, 2-visible brand logos, single-column service cards, single-column portfolio cards, 1-item testimonial carousel, and full-width CTA banner. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title, description, canonical, publish/modified dates, Open Graph, Yoast JSON-LD, H1, hero copy, review animation markup (3 inline wordmark SVGs + star SVGs + review pills), 10 brand logo links, 8 service cards (What We Provide), 6 portfolio cards (Glimpses of Our Shopify Development), 11 video testimonials (Don't Just Take Our Word For It), 9 FAQ items, and bottom CTA banner (Want us to help you with your online store?). |
| Live ssets/css/services/main.css | .inner-hero-sec (pt 190px, pb 55px, #fff, overflow hidden), .inner-wrapper flex (left 55.7% / right 41%), .inner-hero-content h1 (base h1 50px/66px/700/-1px Montserrat), .review_animation 420px circle opacity .8 absolute top/left/right 0, .review_animation.active relative z-1, wrapper/ratings/pill transitions, .review_total_ratings a red pill (border-radius 60.664px, 19.413px/700, padding 8px 18px), .our-client-sec (32px py, bg --bg-theme-color #fbf7ed, left 33% / right 67%, 84px logo rail), .what-we-provide-sec heading-text (title 41% / text 55%), .services-box 2-col cards (50% width, 8px padding, hover translateY(-10px), .services-text gradient border on hover), .our-work-sec (.our-work-main 3-col, 15px column gap, 60px row gap, .ourwork_team_image pb 115%, overlay gradient rgba(0,0,0,.4), View Project slides to bottom 30px on hover, .project-cate platform mark top-right fade/translate, .ourwork_team_content h6 eyebrow rgba(0,0,0,.7) 19.6px tracking 1.12px uppercase + h4 18px/700), .happy-client-sec (.happy-client-col 15px radius 1px #d9d9d9, .card-item min-height 324px, .client-img 100% cover + rgba(0,0,0,.3) overlay, .client-name white pill radius 30px 16px/600, .play-video 76px centered with pulse-border keyframe, .qoute-icon top-right 46x40, .client-review-text 16px/400 28.64px padding 33px 36px 39px), .faq-sec (.accrodion-item 10px radius 1.3px #efefef border, .accrodion-title 24px 70px 24px 32px padding, plus/minus 32px icon, .accrodion-content 16px/500/32px #535353, first item open), .request-banner (gradient bg, center aligned CTA). |
| Live ssets/css/services/media.css | ≤1199px: h1 40/50, p 16/30.4, left-col 100% centered, right-col 50% margin 50px auto 0, review_animation 420px; ≤991px: right-col 100%, services-box 100%, portfolio 2-col; ≤767px: h1 30/40, review_animation 275px circle, text 14px, logo max 130x40, ratings 15px, portfolio 1-col; ≤359px: h1 34/44. |
| Live ssets/js/custom.js | Review animation: showNextReview() on load, then every 5000ms; active circle gets zoom-in show active at +100ms, wrapper show at +300ms, 5 star paths show staggered 200ms each, ratings show at 1300ms, pill show at 1600ms; reset removes all classes first; pill 	ranslateY(150px)→0 over 1s cubic-bezier(.95,-.42,.15,1.26). |
| Live ssets/js/services.js | .owl-carousel.happy-client-slider: items 1 (<767) / 2 (≥767, ≥1200), margin 25 (10 mobile), stagePadding 50 (25 mobile). |
| Assets | 8 service icons in public/assets/services/shopify-development-agency/, 10 brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter, Circuit City), 6 portfolio screenshots (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier), 11 testimonial photos and video IDs. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | .inner-hero-sec: left h1 Shopify Development Agency (50/66 → 40/50 → 30/40 → 34/44), 2 paragraphs, equest a quote red pill to /request-quote; right: 3 rotating 420px circles (Clutch #F8DDD7, Upwork #E3F1D5, GoodFirms #D8E5FF) with ratings & review counts; 275px circle ≤767px. | Reused ServiceHeroSection + client ReviewAnimation component with full timing parity; links to internal /request-quote. |
| Trusted brands | .our-client-sec bg #fbf7ed: Trusted by Leading Brands h2 25px/600 left, 10-logo autoplay rail right (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, SimsDirect, Kvaser, Nekter, Circuit City). | Reused IndustryBrandsSection + ClientLogoSlider with local SVG client assets. |
| Services (What We Provide) | .what-we-provide-sec heading-text + 8 .services-box cards (Shopify Plus Store Development, Shopify Theme Customization, Figma/XD to Shopify, Shopify App Integration, Shopify Migration, Shopify Maintenance, Shopify 2.0 Migration, Shopify White Label Development) + centered Let me give you a hand to help you red pill. | Reused AgencyServicesSection with typed shopifyDevelopmentAgencyServices. |
| Portfolio (Glimpses of Our Shopify Development) | .our-work-sec 3-col grid of .our_work_team cards (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier) with SHOPIFY eyebrow, dark hover overlay, and View Project link + View our work CTA. | Reused PortfolioShowcaseSection with typed shopifyDevelopmentAgencyPortfolio. |
| Testimonials (Don't Just Take Our Word For It) | .happy-client-sec header Don't Just Take Our Word For It + carousel of 11 video testimonial cards (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe wang, Clinton De Vere, Fernando Arias). | Reused HappyClientSection with shopifyDevelopmentAgencyTestimonials.items. |
| FAQs | .faq-sec white bg: h2 Frequently Asked Questions + 9 accordion items (first open), plus/minus icon, 16px/500 answers. | Reused FaqSection with shopifyDevelopmentAgencyFaqs. |
| Closing CTA | .request-banner: gradient banner with Want us to help you with your online store? + REQUEST A QUOTE button. | Reused CtaBannerSection. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | First review circle activates on load with timed animations | Replicated with effect timers in ReviewAnimation | verified |
| Rotating | Circles swap every 5000ms; paused under prefers-reduced-motion | Replicated | verified |
| Service cards hover | translateY(-10px) over .3s, gradient border | CSS transition + gradient border pseudo | verified |
| Portfolio hover | 40% black overlay, View Project rises to 30px, platform mark fades in | Matches PortfolioProjectCard | verified |
| Testimonials carousel | Drag/swipe carousel with responsive slide count (1 on mobile, 2 on desktop) | react-slick configured to match live owl-carousel | verified |
| Accordion | First item open; plus/minus swap | FaqAccordion | verified |
| Brands rail | Autoplay every 2s, no hover pause | ClientLogoSlider industry variant | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless /shopify-development-agency per project URL policy | implemented |
| Live title exceeds the 60-char build guard | Shortened to Shopify Development Agency & Services | Dynamic Dreamz (54 chars) | implemented |
| Live description exceeds 160 chars | Shortened to 154 chars preserving all core services and keywords | implemented |
| Live carousels use jQuery owl-carousel | react-slick with identical items, margin, and responsive breakpoints | implemented |
