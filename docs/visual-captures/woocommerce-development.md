# WooCommerce Development Page

Live URL: `https://www.dynamicdreamz.com/woocommerce-development/`
Local route: `/woocommerce-development`
Date checked: 2026-09-29
Browser/source: Google Chrome inspection, rendered live page + View Page Source, live page-specific CSS (`assets/css/flexible-css/hero_new_section.css`, `assets/css/flexible-css/trusted_by_leading_brands_section.css`, `assets/css/services/main.css`, `assets/css/flexible-css/projects_section.css`, `assets/css/flexible-css/client_review_section.css`, `assets/css/flexible-css/faqs_section.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified layout structure, heading hierarchy, 2-column hero with tablet mockup slider (7 slides) and 2 floating badges, 10-brand logo slider ("Trusted by Leading Brands"), 9 service cards ("What We Provide") with red outline SVGs, 4 portfolio showcase cards, 11 video testimonials slider, and split FAQ accordions. |
| 768x1024 (Tablet) | Verified responsive stacking: tablet slider hidden on `<= 991px`, 3 review badges centered in hero, 2-column service cards, 2-column portfolio cards, 2-item testimonial carousel, and touch-friendly FAQ accordions. |
| 390x844 (Mobile) | Verified single-column hero with cross-divider 3-badge grid, single-column service cards, single-column portfolio cards, 1-item testimonial carousel, and full-width CTA buttons. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Title (`Woocommerce Development Company | Dynamic Dreamz`), meta description (145 chars), canonical, publish/modified dates (`2026-09-21T13:15:56+00:00`), Open Graph, Yoast JSON-LD, H1, hero copy, 3 visible review badges (Shopify Platinum Partner hidden via `.hide-logo`), right-col tablet mockup with 7 slides and WooCommerce Agency Partner / WordPress Logo floating badges, 10 brand logos in `our-client-sec`, 9 service cards ("What We Provide"), 4 portfolio cards ("Glimpses of Our Woocommerce Development Services"), 11 video testimonials ("Don't Just Take Our Word For It"), and 10 FAQ items. |
| Live `assets/css/flexible-css/hero_new_section.css` | `.hero-new-section` (`bg: #f7f4e9; pt: 91px; overflow: hidden`), `.hero-new-section.hide-logo .global_brands_item:first-child` (`display: none`), `.wrapper .left-col` (51% width, 60px padding), `.wrapper .right-col:has(.tablet-slider-wrap)` (43.182% width, hidden on `<= 991px`), `.tablet-frame` (420x593px, #171326 background, 22px radius, slide_bg_shape.svg background pseudo-element), `.tablet-badge-top` (top 100px, -15px right), `.tablet-badge-bottom` (bottom 80px, -5px left). |
| Live `assets/css/flexible-css/trusted_by_leading_brands_section.css` | `.our-client-sec` (`background: #fbeed5; padding: 17px 0; min-height: 49px`), `.main-wrapper` flex (left 30% / right 69%), h2 (`font-size: 20px; font-weight: 500; line-height: 26.4px`), `.logo-block` flex center, slide marquee padding and slick transitions. |
| Live `assets/css/services/main.css` | `.what-we-provide-sec` heading-text (title 41% / text 55%), `.services-box` 2-col cards (50% width, 8px padding, hover translateY(-10px), `.services-text` gradient border on hover, `#fafaf7` card background with 10px radius and 20px padding), stroke `#AD5151` line SVGs. |
| Live `assets/css/flexible-css/projects_section.css` | `.our-work-sec` 4-col grid (`.our_work_team` cards with 15px gap, image aspect ratio, dark hover overlay, View Project arrow icon, `Woocommerce` eyebrow in h6, title in h4). |
| Live `assets/css/flexible-css/client_review_section.css` | `.happy-client-sec` (`.happy-client-col` 15px radius 1px #d9d9d9, `.card-item` min-height 324px, `.client-img` 100% cover + rgba(0,0,0,.3) overlay, `.client-name` white pill radius 30px 16px/600, `.play-video` 76px centered with pulse-border keyframe, `.qoute-icon` top-right 46x40, `.client-review-text` 16px/400 28.64px padding 33px 36px 39px). |
| Live `assets/css/flexible-css/faqs_section.css` | FAQ styling: 10 items, accordions, title, and content. Reused project-wide `SplitFaqSection` conforming to project architectural standards. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero | `.hero-new-section.hide-logo`: left eyebrow `Established in 2006` • `WooCommerce Agency`, h1 `Your Trusted Partner for WooCommerce Development`, description paragraph, `REQUEST A QUOTE` red pill to `/request-quote`; 3 badges (Clutch, Trustpilot, Upwork; Shopify Platinum hidden by `.hide-logo`); right: 420x593px tablet mockup with 7 auto-sliding projects, top `WooCommerce Agency Partner` badge, bottom `WordPress Logo` badge. Hidden on `<= 991px`. | Reused `CityPageHeroSection` with `hide-logo` modifier, `tabletSlider` configuration, and typed content in `src/content/woocommerce-development.ts`. |
| Brand Partners | `.our-client-sec`: `#fbeed5` background with left `Trusted by Leading Brands` and right infinite logo marquee with 10 brand logos (Ranavat, Prolash, Tropicfeel, Perfect Locks, Bombay Shirt Company, Kayfi, Sims Direct, Kvaser, Nekter, Circuit City). | Reused `IndustryBrandsSection` with typed `woocommerceDevelopmentBrands`. |
| Services ("What We Provide") | `.what-we-provide-sec` heading-text + 9 `.services-box` cards (Store Design and Development, Figma to WooCommerce Conversion, Theme Development & Customization, API Development, Plugin Development, Payment and Shipping Method Integration, Product Migration, WooCommerce Support & Maintenance, Facebook Store Support and Sync) with red outline SVGs (`stroke="#AD5151"`). No CTA button. | Reused `AgencyServicesSection` with `cardVariant="services-box"`, `columns={2}`, `hideCta={true}`, and mapped `WooCommerceServiceIcon` SVGs. |
| Portfolio ("Glimpses of Our Woocommerce Development Services") | `.our-work-sec` 4-col grid of `.our_work_team` cards (Temple Day Spa, Ziniosa, Square Foot Homes, The Pole Room) with `Woocommerce` eyebrow, dark hover overlay, and `View Project` link + `View our work` CTA button to `/our-work`. | Reused `PortfolioShowcaseSection` with `columns={4}`, `cardVariant="ourWorkRefresh"`, `variant="liveGrid"`, and typed `woocommerceDevelopmentPortfolio`. |
| Testimonials ("Don't Just Take Our Word For It") | `.happy-client-sec` header `Don't Just Take Our Word For It` + carousel of 11 video testimonial cards (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe wang, Clinton De Vere, Fernando Arias). | Reused `HappyClientSection` with `woocommerceDevelopmentTestimonials.items`. |
| FAQs | Split FAQ layout: h2 `Frequently Asked Questions` + 10 accordion items (first open), plus/minus icon, 16px/500 answers. | Reused `SplitFaqSection` conforming to project-wide rollout. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero tablet carousel | Auto-slides through 7 projects every 2000ms with seamless loop; paused under `prefers-reduced-motion` | Replicated via `CityHeroTabletSlider` | verified |
| Brand logo marquee | Smooth continuous horizontal marquee scroll | Replicated via `ClientLogoSlider` | verified |
| Service cards hover | translateY(-10px) over .3s, subtle shadow/border change | CSS transition + hover states | verified |
| Portfolio hover | 40% black overlay, View Project arrow rises, platform mark fades in | Matches `PortfolioProjectCard` | verified |
| Testimonials carousel | Drag/swipe carousel with responsive slide count (1 on mobile, 2 on desktop) | react-slick configured to match live carousel | verified |
| Accordion | First item open; plus/minus swap | `FaqAccordion` via `SplitFaqSection` | verified |

## Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical/og:url have trailing slash | Slashless `/woocommerce-development` per project URL policy | implemented |
| Live title length | `Woocommerce Development Company \| Dynamic Dreamz` (48 chars - within 60-char budget) | implemented |
| Live description length | Preserved live description (145 chars - within 70-160 char budget) | implemented |
| Live modified time | `2026-09-21T13:15:56+00:00` | implemented |
| Live first brand badge hidden | Handled via `.hide-logo` selector on hero | implemented |
| Live FAQ uses SplitFaqSection | Conforms to project-wide FAQ architectural rollout | implemented |
