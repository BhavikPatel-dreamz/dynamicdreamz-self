# Web Design Page

Live URL: `https://www.dynamicdreamz.com/web-design/`
Local route: `/web-design`
Date checked: 2026-08-19
Browser/source: Google Chrome inspection, rendered live page + View Page Source, live page-specific CSS (`services/main.css`, `services/media.css`, `dynamicdreamz-style.css`, `default-media.css`, `style.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Split hero section with H1 `UI/UX Design Services`, intro paragraph, `Request a Quote` button, and rotating review badge. 10-logo client marquee. "What We Provide" 8-service card grid with gradient borders and CTA button. "Glimpses of Our UI UX Design Outcomes" 6-card portfolio grid with hover overlays and `View our work` button. 11-video testimonial carousel with modal playback. 11-item FAQ accordion. |
| 768x1024 (Tablet) | Centered text alignment for hero, 2-column service card layout, 2-column portfolio project grid, responsive padding and touch-friendly interactive targets. |
| 390x844 (Mobile) | Single-column stacked layouts, responsive heading typography scaling, full-width button styling, and touch-optimized FAQ accordion items. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Document title (`Web Design Company – Contact Us for Web Design Services - Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz`), meta description, canonical URL (`https://www.dynamicdreamz.com/web-design/`), H1 heading, 8 service items with icons, 6 portfolio showcase cards, 11 video testimonials, 11 FAQ items, and Yoast structured data graph. |
| Live `services/main.css` & `style.css` | `.inner-hero-sec`, `.what-we-provide-sec`, `.services-box`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`, typography, paddings, borders, gradient hover effects, and transitions. |
| Assets | 8 service icons, 1 portfolio badge, and 5 unique portfolio screenshots ingested via 2-step buffer workflow; 1 portfolio image (`joburg-meats.webp`) and 10 brand logos deduplicated and reused from canonical paths. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Hero Section | `.inner-hero-sec.ui-ux-design` with H1, paragraph, CTA button, and rotating review badge | Reused `ServiceHeroSection` with typed `webDesignHero` content |
| Brand Marquee | `.our-client-sec` with 10 client brand logos in continuous marquee | Reused `IndustryBrandsSection` with 10 canonical brand logos |
| What We Provide | `.what-we-provide-sec` with 8 service cards, hover gradients, and bottom CTA button | Reused `AgencyServicesSection` with typed `webDesignServices` content |
| Portfolio Showcase | `.our-work-sec` with 6 real-world project cards, hover overlay, and `View our work` CTA | Reused `PortfolioShowcaseSection` with typed `webDesignPortfolio` content |
| Client Video Testimonials | `.happy-client-sec` with 11 video review items and modal playback | Reused `HappyClientSection` with canonical testimonials |
| FAQ Section | `.faq-sec` with 11 collapsible question/answer accordion items | Reused `FaqSection` with typed `webDesignFaqs` content |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Hero review card rotation | Automated cycling of Clutch, Upwork, and GoodFirms review summaries | Interactive client component `ReviewAnimation` | verified |
| Service card hover | Subtle upward lift (`hover:-translate-y-2.5`) with gradient border transition | CSS transition with Tailwind utility classes | verified |
| Portfolio card hover | Dark overlay with animated "View Project" link sliding up | CSS transition on hover/focus matching live site | verified |
| Video modal playback | Clicking play icon opens YouTube video embed modal | Client component `VideoModal` with YouTube iframe API integration | verified |
| FAQ accordion | Click to expand/collapse answer with animated plus/minus icon | Client component `Accordion` / `FaqSection` with accessible ARIA attributes | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has trailing slash | Slashless `/web-design` per repo URL policy | implemented |
| Live meta title is 134 chars (exceeds 60-char budget) | Cleaned title to `Web Design Company & UI/UX Design Services \| Dynamic Dreamz` (59 chars) | implemented in metadata |
| Live meta description is 118 chars | Preserved live meta description (118 chars) within 70-160 budget | implemented in metadata |
