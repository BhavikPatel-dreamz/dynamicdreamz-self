# Visual Capture: Sitewide AOS Animations Parity

## Migration Intent
Apply exact live-site AOS (Animate On Scroll) animations throughout the entire site. Match the animation style, timing, easing, offset, and behavior exactly as used on the live site `https://www.dynamicdreamz.com/`.

## Live Site Inspection Evidence
- **Source Scripts Inspected**:
  - `https://www.dynamicdreamz.com/wp-content/themes/dynamicdreamz/assets/js/custom.js` (line 9):
    ```javascript
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 80,
      delay: 0,
      mirror: false
    });
    ```
  - `https://www.dynamicdreamz.com/wp-content/themes/dynamicdreamz/assets/css/aos.css`:
    - `[data-aos^=fade][data-aos^=fade] { opacity: 0; transition-property: opacity, transform; }`
    - `[data-aos^=fade][data-aos^=fade].aos-animate { opacity: 1; transform: translateZ(0); }`
    - `[data-aos=fade-up] { transform: translate3d(0, 100px, 0); }`
    - `body[data-aos-duration="800"] [data-aos] { transition-duration: 0.8s; }`
    - `body[data-aos-easing="ease-in-out"] [data-aos] { transition-timing-function: ease-in-out; }`
- **Animation Style**: `data-aos="fade-up"` (100% of all AOS elements on the live site use `fade-up`).
- **Timing & Parameters**:
  - Duration: `800ms`
  - Easing: `ease-in-out` (`cubic-bezier(0.42, 0, 0.58, 1)`)
  - Offset: `80px`
  - Once: `true` (elements animate once on scroll and remain visible)
  - Mirror: `false`
  - Delay: `0` default (can be overridden via `data-aos-delay`)

## Live Elements Carrying `data-aos="fade-up"` Across Sections:
1. **Section Heading Blocks**:
   - `.section_title_with_eyebrow`, `.section_title`, `.col_heading`, `.header-text`
2. **Content Cards & Grids**:
   - `.box` (benefit, feature, why-choose cards)
   - `.item` (service cards, stage cards, process cards)
   - `.pricing_card` (pricing table cards)
   - `.why-choose-box` (city and industry why-choose cards)
   - `.our_work_team` / `.ourwork_team_link` (portfolio showcase items)
   - `.our-founders-col` (team cards)
   - `.office-card-col` (contact office cards)
   - `.spa-col` (evaluation framework columns)
   - `.col` (two-column split blocks)
3. **Wrappers & Carousels**:
   - `.wrapper` (feature split blocks, process steps wrappers, white-label banners)
   - `.accordion-main` / `.col_accordian` (FAQ and expertise accordions)
   - `.carousel-section` / `.brand_testimonial_slider_wrap` (testimonial / review sliders)
   - `.trusted_leading_logo_grid` / `.trusted_leading_logo_scrolling` / `.our_partners_logo_wrap` (logo rails and marquee tracks)
   - `.btn_wrap` / `.post_btn` / `.view-our-work` / `.pricing_cta_wrapper` (CTA button wrappers)
   - `.team-deliver-wrap`, `.hero-vide-wrap`, `.how-we-start-wraper` (about page components)

## Above-The-Fold / Hero Behavior:
- Main hero sections (`.home_shopify_banner`, `.hero-new-section`, `.theme-customize-hero`) on the live site do NOT have `data-aos="fade-up"` to ensure optimal Largest Contentful Paint (LCP) and zero entrance delay on primary viewport content.

## Implementation Architecture:
1. **Styles**: `src/app/(frontend)/aos.css` imported in `src/app/(frontend)/layout.tsx` providing exact AOS transition CSS (`[data-aos="fade-up"]`, `.aos-init`, `.aos-animate`, 800ms duration, ease-in-out curve, reduced-motion accessibility).
2. **Client Controller**: `src/components/layout/aos-init.tsx` Client Component using `IntersectionObserver` with `rootMargin: '0px 0px -80px 0px'` (`offset: 80`), `usePathname()` support for App Router client navigation, and `MutationObserver` for dynamically inserted content.
3. **Section Markup**: Adding `data-aos="fade-up"` to section headings, cards, grids, accordions, and CTA wrappers across all shared components and page-specific sections.

## Components Updated Sitewide:
- **Shared Primitives & Layout**:
  - `src/components/layout/aos-init.tsx` (mounted in `src/app/(frontend)/layout.tsx`)
  - `src/app/(frontend)/aos.css` (imported in root layout)
  - `src/components/ui/split-section-heading.tsx` (`data-aos="fade-up"` on all split and centered headers sitewide)
  - `src/components/ui/portfolio-project-card.tsx` (`data-aos="fade-up"` on all portfolio cards)
- **Shared Sections**:
  - `src/components/sections/split-faq-section.tsx` (heading col and accordion col)
  - `src/components/sections/industry/industry-brands-section.tsx` (left-col and right-col)
  - `src/components/sections/portfolio-showcase-section.tsx` (CTA button wrap)
  - `src/components/sections/agency-services-section.tsx` (boxes, cards, CTA wrap, fallback headers)
  - `src/components/sections/happy-client-section.tsx` (heading and carousel)
  - `src/components/sections/shopify-plus-agency/evaluation-framework-section.tsx` (spa-wrapper)
  - `src/components/sections/shopify-plus-agency/pricing-table-section.tsx` (pricing cards and CTA wrapper)
  - `src/components/sections/theme-customization-services-section.tsx` (box items and bottom text)
  - `src/components/sections/theme-customization/theme-features-banner-section.tsx` (wrapper)
  - `src/components/sections/city-why-choose-boxes-section.tsx` (heading and why-choose cards)
  - `src/components/sections/city-page-counter-section.tsx` (heading and counter wrapper)
  - `src/components/sections/our-development-process-section.tsx` (heading and steps wrapper)
  - `src/components/sections/cta-banner-section.tsx` (content wrapper)
  - `src/components/sections/why-choose-shopify-migration-section.tsx` (left-col and right-col)
  - `src/components/sections/migration-process-section.tsx` (cards variant and default step wrapper)
  - `src/components/sections/white-label/white-label-tools-section.tsx` (heading and logo wrapper)
  - `src/components/sections/white-label/white-label-proof-section.tsx` (stats and why-choose grid)
  - `src/components/sections/white-label-shopify/white-label-counter-section.tsx` (stats container)
  - `src/components/sections/white-label-shopify/delivery-model-comparison-section.tsx` (heading and table wrapper)
  - `src/components/sections/white-label-shopify/shopify-support-scenarios-section.tsx` (heading, tabs shell, mobile scroll)
  - `src/components/sections/white-label-shopify/shopify-team-behind-it-section.tsx` (heading, card grid, CTA wrapper)
  - `src/components/sections/white-label-shopify/how-agencies-use-section.tsx` (heading and cards grid)
  - `src/components/sections/shopify-migration/seo-safe-migration-section.tsx` (seo-safe-main wrapper)
  - `src/components/sections/ai-empowered-delivery-section.tsx` (seo-safe-main wrapper)
  - `src/components/sections/shopify-stage-services-section.tsx` (service card articles)
  - `src/components/sections/case-studies/case-studies-listing.tsx` (case study cards)
  - `src/components/sections/services-case-studies-section.tsx` (heading and case study cards)
  - `src/components/sections/our-work/our-work-case-studies-section.tsx` (heading and case study cards)
- **Homepage Sections**:
  - `src/components/sections/home/brand-partners-section.tsx` (heading, desktop logo grid, mobile scroll track)
  - `src/components/sections/home/shopify-plus-agency-section.tsx` (heading, stats column, video column)
  - `src/components/sections/home/white-label-partner-section.tsx` (banner wrapper)
  - `src/components/sections/home/commerce-solutions-section.tsx` (heading, accordion columns)
  - `src/components/sections/home/selected-work-section.tsx` (heading, project scroll rail, CTA button)
  - `src/components/sections/home/testimonials-section.tsx` (heading, testimonial slider wrapper)
  - `src/components/sections/home/integrations-section.tsx` (heading, partner logo track)
  - `src/components/sections/home/insights-section.tsx` (heading, blog grid, view-all button)
- **About Us Sections**:
  - `src/components/sections/about/about-hero-section.tsx` (inner hero content, delivery counter card)
  - `src/components/sections/about/about-story-section.tsx` (story heading row, video wrapper)
  - `src/components/sections/about/about-timeline-section.tsx` (heading row, timeline horizontal drag wrapper)
  - `src/components/sections/about/about-founders-section.tsx` (heading, founder cards)
  - `src/components/sections/about/about-team-section.tsx` (all team cards)
  - `src/components/sections/about/about-values-section.tsx` (values boxes and bottom text via ThemeCustomizationServicesSection)
- **Careers & Contact Us Sections**:
  - `src/components/sections/career/career-opportunities-section.tsx` (heading via SplitSectionHeading)
  - `src/components/sections/career/career-location-filter.tsx` (filter dropdown bar, job listing container)
  - `src/components/sections/contact-page.tsx` (hero content, reach-out form container, offices heading, office cards, contact details heading, contact details grid)
- **Theme Customization & Approach (Group 1)**:
  - `src/components/sections/split-image-hero-section.tsx` (left-col and right-col)
  - `src/components/sections/shopify-theme-customization/shopify-themes-grid-section.tsx` (wrapper, heading, cards)
  - `src/components/sections/shopify-theme-customization/shopify-theme-tech-section.tsx` (heading, builder-wrapper, builder-col, bottom-text)
  - `src/components/sections/theme-customization/theme-why-choose-section.tsx` (heading, main wrapper, cards)
  - `src/components/sections/theme-customization-approach-section.tsx` (wrapper and cards)
- **Shopify CRO Agency (Group 2)**:
  - `src/components/sections/shopify-cro/shopify-cro-barriers-section.tsx` (wrapper and items)
  - `src/components/sections/shopify-cro/shopify-cro-revenue-impact-section.tsx` (revenue-impact-wrapper and revenue-impact-footer)
  - `src/components/sections/shopify-cro/shopify-cro-services-section.tsx` (each shopify-cro-services-item)
  - `src/components/sections/shopify-cro/shopify-cro-why-section.tsx` (cro-dynamic-dreamz-wrap and content-box)
  - `src/components/sections/shopify-cro/shopify-cro-process-section.tsx` (wrapper)
  - `src/components/sections/shopify-cro/shopify-cro-engagement-section.tsx` (section-title and shopify-cro-engagement-card)
  - `src/components/sections/shopify-cro/shopify-cro-assessment-section.tsx` (content-box)
- **Shopify Certified Developers (Group 3)**:
  - `src/components/sections/shopify-certified-developers/verified-knowledge-section.tsx` (articles)
  - `src/components/sections/shopify-certified-developers/credential-evidence-section.tsx` (evidence articles)
  - `src/components/sections/shopify-certified-developers/credential-tabs-section.tsx` (header)
  - `src/components/sections/shopify-certified-developers/credential-tabs.tsx` (wrapper)
  - `src/components/sections/shopify-certified-developers/certified-services-section.tsx` (service articles)
  - `src/components/sections/shopify-certified-developers/certified-agency-support-section.tsx` (articles)
  - `src/components/sections/shopify-certified-developers/partner-directory-proof-section.tsx` (container)
- **Shopify Mobile App Development (Group 4)**:
  - `src/components/sections/shopify-mobile-app/shopify-app-benefits-section.tsx` (wrapper and benefit_box)
  - `src/components/sections/shopify-mobile-app/shopify-app-features-section.tsx` (heading-text, features-col-1, features-col-2, features-col-3)
  - `src/components/sections/shopify-mobile-app/shopify-app-process-section.tsx` (heading-text, wrapper, col-block)
  - `src/components/sections/shopify-mobile-app/shopify-mobile-app-comparison-section.tsx` (table-main)
  - `src/components/sections/shopify-mobile-app/shopify-mobile-app-dtc-section.tsx` (wrapper and mobile-app-col)
  - `src/components/sections/shopify-mobile-app/shopify-mobile-app-experience-section.tsx` (wrapper and eperience-col)
  - `src/components/sections/shopify-mobile-app/shopify-mobile-app-work-section.tsx` (our_work_team apps and btns_group)
- **Shopify Plus Agency (Group 5)**:
  - `src/components/sections/shopify-plus-agency/industries-served-section.tsx` (grid, horizontal scroll, bottom-text)
  - `src/components/sections/shopify-plus-agency/shopify-plus-proof-section.tsx` (wrapper)
  - `src/components/sections/shopify-plus-agency/text-box-section.tsx` (text-box-wrap)
- **White Label Agency (Group 6)**:
  - `src/components/sections/white-label/white-label-services-section.tsx` (heading, description, CTA wrap)
  - `src/components/sections/white-label/white-label-service-accordion.tsx` (accordion container)
  - `src/components/sections/white-label/white-label-process-section.tsx` (title, steps wrapper, step cards, note box)
  - `src/components/sections/white-label/white-label-closing-sections.tsx` (FAQ heading, final CTA container)
  - `src/components/sections/white-label-website-design/design-reasons-accordion.tsx` (space-y-3 wrapper and articles)
  - `src/components/sections/white-label-website-design-page.tsx` (accordion column)
- **Flexi Hours, Migration & Hire Developers (Group 7)**:
  - `src/components/sections/buy-shopify-development-hours/shopify-hours-hero-section.tsx` (hire-shopify-dev-flexi-hours-row, hire-shopify-dev-right)
  - `src/components/sections/buy-shopify-development-hours/shopify-hours-content-sections.tsx` (bulk-shopify-fulltime-resources-box, can-you-use-shopify-hours-list)
  - `src/components/sections/shopify-migration/shopify-migration-numbered-grid-section.tsx` (title, wrapper, col)
  - `src/components/sections/shopify-migration/shopify-migration-services-section.tsx` (title, migration-wrapper, migration-col, banner wrapper)
  - `src/components/sections/hire-shopify-developers/shopify-proof-sections.tsx` (reasons heading & grid & cards, advantages heading & grid & articles & CTA)
- **Shared Primitives (Group 8)**:
  - `src/components/sections/two-col-image-with-text-section.tsx` (wrapper, left-col, right-col)
  - `src/components/sections/features-grid-section.tsx` (title, grid, columns)
  - `src/components/sections/technologies-work-with-section.tsx` (wrapper, columns)
  - `src/components/sections/tech-keyword-section.tsx` (wrapper)
  - `src/components/sections/shopify-team-boxes-section.tsx` (title, boxes-wrapper, item)
  - `src/components/sections/proof-counter-section.tsx` (heading)
  - `src/components/sections/resources/resources-counter-grid.tsx` (grid, cards)
  - `src/components/sections/numbered-process-timeline-section.tsx` (header, ol, li)
  - `src/components/sections/recent-architecture-patterns-section.tsx` (wrapper, col)
  - `src/components/sections/lets-build-section.tsx` (lets-build-text)
  - `src/components/sections/image-cta-section.tsx` (banner container)
  - `src/components/sections/pill-list-section.tsx` (heading, list container)
  - `src/components/sections/static-faq-accordion.tsx` (list, articles)
  - `src/components/sections/ai-services-grid-section.tsx` (grid, col)
  - `src/components/sections/shopify-horizontal-process-section.tsx` (wrapper, item)
  - `src/components/sections/our-work/our-work-projects-section.tsx` (heading, project items)

## Verification
- `npm run check:urls` passed.
- `npm run check:component-content` passed (525 source files verified).
- `npm run check:case-studies` passed.
- `npm run check:blog-posts` passed.
- `npm run check:asset-duplicates` passed (0 duplicates).
- `npm run lint` passed with 0 errors.
- `npm run build` completed successfully, prerendering and compiling all static, SSG, and dynamic routes.
