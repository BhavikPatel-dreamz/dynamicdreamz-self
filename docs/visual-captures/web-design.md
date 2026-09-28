# Web Design Page

Live URL: `https://www.dynamicdreamz.com/web-design/`
Local route: `/web-design`
Date checked: 2026-09-28
Browser/source: Google Chrome inspection, rendered live page + View Page Source, live page-specific CSS (`services/main.css`, `services/media.css`, `style.css`, `default-media.css`, `flexible-css/hero_new_section.css`, `flexible-css/white_label_flexible_wordpress_development_plans_section.css`, `flexible-css/delivery_section.css`, `flexible-css/projects_section.css`, `flexible-css/client_review_section.css`, `flexible-css/faqs_section.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Split hero section (`.hero-new-section`) with H1 `UI/UX Design Services`, dual eyebrow tags (`ESTABLISHED IN 2006` and `WEB DESIGN AGENCY`), intro paragraph, `Request a Quote` button, 4 rating/partner badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus), and right-column tablet mockup slider with 4 store preview slides (`greenfutureenergy`, `bellavita`, `thehuddlesportsgrill`, `kalki`) plus floating Figma and Adobe XD badges. 10-logo client marquee (`.our-client-sec`). "What We Provide" 8-service card grid (`.what-we-provide-sec` / `.services-provide-main`) in 2-column cards layout with 24x24 single-stroke icons. "Choose the Right Web Design Engagement" 3-card pricing table (`#our_white_label_pricing`). "Glimpses of Our UI/UX Design Outcomes" 8-card portfolio grid (`#our_work`) in 4-column layout with hover overlays and `View our work` button. 11-video testimonial carousel with modal playback. 9-item FAQ accordion (`.faq-sec`). |
| 768x1024 (Tablet) | Centered text alignment for hero with tablet preview hidden, 2-column service card layout, 2-column pricing table layout, 2-column portfolio project grid, responsive padding and touch-friendly interactive targets. |
| 390x844 (Mobile) | Single-column stacked layouts, responsive heading typography scaling, 2x2 grid for hero review/partner badges, full-width button styling, single-column service cards, single-column pricing cards, and touch-optimized FAQ accordion items. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Document title (`UI/UX & Web Design Services \| DynamicDreamz`), meta description (`UI/UX and web design services forwebsites, ecommerce and mobile apps,including wireframes, prototypes,interface design, UX strategy and designhandoff.`), canonical URL (`https://www.dynamicdreamz.com/web-design/`), H1 heading, 8 service items with inline SVGs, 3 engagement pricing cards, 8 portfolio showcase cards, 11 video testimonials, 9 FAQ items, and Yoast structured data graph. |
| Live CSS (`services/main.css`, `style.css`, flexible-css) | `.hero-new-section`, `.tablet-slider-wrap`, `.our-client-sec`, `.what-we-provide-sec`, `.services-provide-main`, `.services-box`, `#our_white_label_pricing`, `.pricing_card`, `.our-work-sec`, `.our-work-main.grid-column-4`, `.happy-client-sec`, `.faq-sec`, typography, paddings, borders, hover effects, and transitions. |
| Assets | Hero slide images (`greenfutureenergy`, `bellavita`, `thehuddlesportsgrill`, `kalki`) deduplicated and reused from existing canonical paths; 4 rating/partner badges reused from canonical paths; Figma and Adobe XD logos optimized to WebP in `public/assets/services/web-design/hero/`; 10 brand logos deduplicated and reused from canonical paths; 8 service icons saved as clean SVG files in `public/assets/services/web-design/`; 8 portfolio showcase screenshots deduplicated from canonical paths (Brilliant Pet, Joburg Meats, Go Float, Lana’s Holistic Centre, Rocksolid Fitness, Bright Cuties, Parts Prime, Daniel Walters); OG image optimized to WebP at 43KB in `public/assets/og/web-design-services.webp`. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero Section | `.hero-new-section` with H1 `UI/UX Design Services`, dual eyebrows, paragraph, `Request a Quote` CTA, 4 partner badges, and tablet mockup slider with 4 slides + floating Figma/XD badges | Reused `CityPageHeroSection` / `CityHeroTabletSlider` with typed `webDesignHero` content |
| Brand Marquee | `.our-client-sec` with 10 client brand logos in continuous marquee | Reused `IndustryBrandsSection` with 10 canonical brand logos (`webDesignBrands`) |
| What We Provide | `.what-we-provide-sec` / `.services-provide-main` with 8 service cards in 2-column grid with 24x24 single-stroke icons and updated copy | Reused `AgencyServicesSection` with `cardVariant="services-box"`, 2 columns, and typed `webDesignServices` content |
| Web Design Engagement Pricing | `.white_label_wp_develop_plan_section.shopify-plus-engagement.mb-0` (#our_white_label_pricing) with 3 pricing cards (`Project-Based`, `Flexible Hourly Support`, `Dedicated Designer / Team`) | Reused `PricingTableSection` with typed `webDesignPricing` content |
| Portfolio Showcase | `.our-work-sec` (#our_work) with 8 real-world project cards in 4-column grid, hover overlay, and `View our work` CTA | Reused `PortfolioShowcaseSection` with `columns={4}`, `cardVariant="ourWorkRefresh"`, and typed `webDesignPortfolio` content |
| Client Video Testimonials | `.happy-client-sec` with 11 video review items and modal playback | Reused `HappyClientSection` with canonical testimonials (`webDesignTestimonials`) |
| FAQ Section | `.faq-sec` with 9 collapsible question/answer accordion items with circle-cross expand icons | Reused `SplitFaqSection` with typed `webDesignFaqs` content |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero tablet slider | Automated cycling of 4 website screenshots with pause on hover | Client component `CityHeroTabletSlider` with smooth translateX transition | verified |
| Hero floating badges | Floating Figma top badge and Adobe XD bottom badge positioned over tablet frame | Absolute positioning with responsive breakpoints matching live CSS | verified |
| Service card hover | Subtle border change and elevation on hover (`services-box`) | CSS transition with Tailwind utility classes | verified |
| Pricing card hover | Shadow and border styling on pricing cards | CSS transition matching live site | verified |
| Portfolio card hover | Dark overlay with animated "View Project" link sliding up | `PortfolioProjectCard` with `ourWorkRefresh` variant | verified |
| Video modal playback | Clicking play icon opens YouTube video embed modal | Client component `HappyClientSection` with YouTube iframe API integration | verified |
| FAQ accordion | Click to expand/collapse answer with circle-cross icon | Client component `SplitFaqSection` / `FaqAccordion` with accessible ARIA attributes | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has trailing slash | Slashless `/web-design` per repo URL policy | implemented |
| Live meta title (`UI/UX & Web Design Services \| DynamicDreamz`) | 44 chars, within 60-char budget | implemented in metadata |
| Live meta description | Preserved live meta description (152 chars) within 70-160 budget | implemented in metadata |
| Live OG image (1.1MB PNG) | Optimized to 43KB WebP (`/assets/og/web-design-services.webp`), zero visual degradation | implemented |

## Styling and Layout Refinements

1. **Hero Section Spacing and Clipping**:
   - Live `.hero-new-section` computes to `padding-top: 91px; padding-bottom: 0; overflow: hidden;` with the bottom 40px of the tablet slider clipped by container overflow.
   - Updated `CityPageHeroSection` padding to `pt-[91px] pb-0 max-[991px]:pt-16 max-[991px]:pb-0` to eliminate excess top whitespace and match tablet frame positioning.
   - Partner badges grid adjusted to `mt-[30px] -mx-[15px]` with badges constrained to `max-w-[100px]` matching live `.global_brands_grid_wrap img`.
2. **Hero Review Badges**:
   - Replaced older rectangular `/assets/awards/` badges with live canonical SVGs in `/assets/proof/`:
     - `shopify-platinum-partner.svg` (136x44)
     - `clutch-rating.svg` (111x44 with bold Clutch wordmark and 5 red stars)
     - `trustpilot-rating.svg` (148x50 with green stars)
     - `upwork-top-rated-plus.svg` (126x54 with green heart icon)
   - Removed `max-h-11` override, enabling exact natural aspect ratio scaling matching live computed styles.
3. **Hero Eyebrow & Button**:
   - Updated hero eyebrow to Montserrat font (`text-[#535353]`), `top: 7px` red dash (`w-[30px] h-[2px]`), and vertically centered bullet separator dot (`top-1/2 -translate-y-1/2`).
   - Converted hero CTA from raw `<Link>` to canonical `ButtonLink` (`variant="primary"`), providing the exact 30px rounded corners, 2px border, and signature slide-out hover animation matching `.btn.btn-red`.
4. **Hero Tablet Slider & Background Shape**:
   - Connected `bgShapeSrc` (`slide-bg-shape.svg`), rendering the peach curved background shape behind the dark tablet frame.
   - Fixed the `translateX` percentage formula to `-(activeIndex * 100) / extendedSlides.length %` so each slide advances by exactly 1 slide (388px) in an infinite loop without skipping slides.
   - Enabled continuous autoplay without hover pause matching live Slick carousel configuration (`pauseOnHover: false`).
5. **Split Section Headings and Eyebrows**:
   - Added `eyebrow: "Our Services"` to `webDesignServices`, rendering the red-dash `— OUR SERVICES` eyebrow above `What We Provide`.
   - Configured `titleColumnClassName="w-[44%] max-[992px]:w-full"` and `textColumnClassName="w-[48.3%] max-[992px]:w-full"` across `AgencyServicesSection`, `PricingTableSection`, and `PortfolioShowcaseSection` to match live `.section_title_with_eyebrow` column geometry and achieve exact two-line title wrapping (`Glimpses of Our UI/UX Design \n Outcomes`).
6. **Card Grids & Interactive Sliders**:
   - 8-service card grid in 2-column layout with 24x24 single-stroke clean SVG icons.
   - 3-card pricing table for Project-Based, Flexible Hourly Support, and Dedicated Designer.
   - 8-project portfolio grid with 4 columns (`#our_work`).
   - 11-video testimonial carousel with modal playback (`.happy-client-sec`).
   - Sticky 2-column FAQ layout with circle-cross accordion icons (`.faq-sec`).
7. **Visual Parity Verification**:
   - Headless Chrome screenshots captured at 1440x900, 1440x7000 (desktop), and 375x4000 (mobile) comparing live `https://www.dynamicdreamz.com/web-design/` against local `http://localhost:3000/web-design`.
   - Side-by-side diff slices verified for Hero (left column, right column, full hero), Brands Marquee, Services, Pricing, Portfolio, Reviews, and FAQs.


