# Jewellery & Accessories Industry Page Visual Parity Capture

Live URL: `https://www.dynamicdreamz.com/industries/jewellery-accessories/`  
Local route: `/jewellery-accessories`  
Date checked: 2026-10-01  
Browser / source: Headless Google Chrome (`120.0.0.0`) DOM dump (`scratch/jewellery-accessories.html`), live screenshots (`docs/visual-captures/jewellery-accessories/live-1440.png`, `docs/visual-captures/jewellery-accessories/live-768.png`, `docs/visual-captures/jewellery-accessories/live-390.png`), and live Yoast SEO JSON-LD graph.

## Viewports & Screenshot Evidence

- **Desktop (1440x2400)**:
  - Live: `docs/visual-captures/jewellery-accessories/live-1440.png`
  - Local: `docs/visual-captures/jewellery-accessories/local-1440.png`
  - Result: Verification confirms visual alignment across hero, brand logo slider, 3-column case studies grid, challenges, solutions, custom development, technologies marquee, portfolio cards, why choose stats, client stories, and split FAQs.
- **Tablet (768x2400)**:
  - Live: `docs/visual-captures/jewellery-accessories/live-768.png`
  - Local: `docs/visual-captures/jewellery-accessories/local-768.png`
  - Result: Responsive grid collapses cleanly (2-column challenges/solutions, 2-column portfolio, stacked why choose).
- **Mobile (390x2400)**:
  - Live: `docs/visual-captures/jewellery-accessories/live-390.png`
  - Local: `docs/visual-captures/jewellery-accessories/local-390.png`
  - Result: Single-column flow, touch-friendly tap targets, no horizontal overflow.

## Live CSS and JS Inspected

- `hero_new_section.css`: Two-column flex container, left title/copy/buttons/proof badges, right 16:9 looping video.
- `trusted_by_leading_brands_section.css`: Marquee logo slider with 12 brand partner logos.
- `services_case_study_section.css`: `.see-the-work-sec` container with `#eff4ef` background, `.cs-listing-main.three-col` 3-column card grid, tag chips, category label with red bullet, hover zoom on images.
- `shopify_theme_customization_services.css`: Numbered cards (`01`–`06`) in transparent and green (`#eff4ef`) variants.
- `industry_custom_development.css`: Dark `#192019` container with red eyebrow, white text, 4 border-separated capability items.
- `projects_section.css` (`our-work-sec`): 4-column portfolio grid with project tags, project name, arrow icon, and hover overlay.
- `why_choose_dynamic_dreamz_for_shopify_migration.css`: Split container with 4 capability icons/items on left, partner block and 4 stat counter boxes on right.
- `client_review_section.css`: Review carousel slider with video modals, client quotes, and ratings.
- `faqs_section.css`: Split accordion list with expand/collapse states.

## Section Inventory & Component Mapping

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
|---|---|---|---|
| 1 | Hero | `div.hero-new-section`: eyebrow `Industry Solutions` + `Jewellery & Accessories`, `h1` `Ecommerce & Custom Technology for Jewellery & Accessories Brands`, CTAs (`Discuss Your Project` -> `/request-quote`, `See Relevant Work` -> `#our_work`), 4 proof badges, looping background video. | Reused `ServiceHeroVideoSection` with typed `jewelleryAccessoriesHero`. |
| 2 | Brands | `div.our-client-sec`: heading `Trusted by Leading Brands`, 12 client logos. | Reused `IndustryBrandsSection` with `industryBrandLogos`. |
| 3 | Case Studies | `section.see-the-work-sec`: eyebrow `CASE STUDIES`, `h2` `Proof from Real Ecommerce and Technology Work`, 3 cards (Daniel Walters, Santosh Jewellers, DONJ Jewellery) with tags, category bullet, and link. The card description `<p>` exists in live markup but is `display: none` under `.cs-listing-main.three-col`. | Reused `ServicesCaseStudiesSection`. Card description is not rendered at all (see "Case Studies Card Description Removal"). |
| 4 | Industry Challenges | `section.theme-customization-services.transparent`: eyebrow `Industry Challenges`, `h2` `Built for Trust, Personalization and High-value Purchase Journeys`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="transparent"`). |
| 5 | Solutions We Build | `section.theme-customization-services.green`: eyebrow `Solutions We Build`, `h2` `What We Build for Jewellery & Accessories Brands`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="green"`). |
| 6 | Custom Development | `section.industry-custom-development`: eyebrow `Custom Development`, `h2` `Custom Jewellery Commerce Built around Real Product Logic`, 4 capability items. | Reused `IndustryCustomDevelopmentSection`. |
| 7 | Technology Stack | `section.white_label_wide_range_technologies_section`: `Platforms, Frameworks & Mobile Capabilities`, 2 marquee rows of technology logos. | Reused `WhiteLabelToolsSection` with canonical `/assets/technologies/` WebP logos. |
| 8 | Portfolio | `section#our_work.our-work-sec`: eyebrow `Portfolio`, `h2` `Selected Jewellery & Accessories Experience`, 8 cards (Atolea Jewelry, Pagerie, Donj Jewellery, Twojeys, Daniel Walters Eyewear, Projectlobster, Raen, Santosh Jewellers). | Reused `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`). |
| 9 | Why Dynamic Dreamz | `section.why_choose_dynamic_dreamz_for_shopify_migration`: eyebrow `Why Dynamic Dreamz`, `h2` `One Team Across Ecommerce, Custom Development and Mobile`, 4 capability items with inline SVGs, 4 stat counter boxes. | Reused `WhyChooseShopifyMigrationSection` with icons `certified`, `shopify-bag`, `custom-build`, `long-term-support`. |
| 10 | Client Stories | `section.happy-client-sec.pt-80`: eyebrow `Client Stories`, `h2` `Don't Just Take Our Word For It`, video testimonial cards. | Reused `HappyClientSection` with `shopifyPlusAgencyPageTestimonials.items`. |
| 11 | FAQs | `section.faq-sec`: eyebrow `Frequently Asked Questions`, `h2` `What Jewellery Brands Ask before They Customize the Buying Journey`, 6 accordion items in a 2-column split layout. | Reused `SplitFaqSection` with default two-column split layout. |

## Case Studies Card Description Removal

The in-card description paragraph was removed from `ServicesCaseStudiesSection`
entirely, on every consuming route. This is parity work, not a redesign.

Live evidence (`assets/css/services_case_study_section.css`):

```css
.cs-listing-main.three-col .cs-listing-row .cs-title p {
    display: none;
}
```

Live renders the `<p>` in markup and then hides it, so it contributes nothing
visible and occupies zero height. Local now omits the node. Verified with
`row.querySelectorAll(".cs-title p").length === 0` on all 3 cards at 1440 /
768 / 390.

Because the paragraph carried the `excerpt` text, the dead data was also
removed rather than left stranded:

- `description` dropped from the `CaseStudyPreviewItem` type.
- `description` stripped from 28 case-study items across 10 content modules
  (`beauty-cosmetics`, `fashion`, `food-beverages`, `health-nutrition`,
  `home-living`, `jewellery-accessories`, `shopify-migration`,
  `shopify-plus-migration-agency`, `shopify-mobile-app-development`,
  `food-beverage-shopify-plus-agency`).
- The `hideCardDescription` prop and its 6 call sites were deleted, as was the
  `description: caseStudy.excerpt` mapping in `src/components/blocks/block-renderer.tsx`.
- `sharedUiCopy.viewCaseStudy` set to the live casing `"View Case study"`.

## Card Computed-Style Verification

Measured with headless Chrome at 1440 / 768 / 390 against
`https://www.dynamicdreamz.com/industries/jewellery-accessories/`. Live values
are from the live page; local values are from `/jewellery-accessories`.

| Property | Live | Local | Match |
|---|---|---|---|
| Card width @1440 | `430` | `430` | yes |
| Card height @1440 | `428` | `428` | yes |
| Card height @768 | `553` | `553` | yes |
| Card height @390 | `392` | `392` | yes |
| Card `border-radius` | `20px` | `20px` | yes |
| Card `border` | `1px solid rgba(40,40,40,.06)` | same | yes |
| Card `min-height` | `100%` | `100%` | yes |
| Card `transition` | `0.23s ease` | `0.23s ease` | yes |
| Card `position` | `relative` | `relative` | yes |
| Card `padding` / `margin` | `0` / `0 0 20px` | same | yes |
| Grid container | `flex wrap; justify-content: space-between; margin-bottom:-20px` | same | yes |
| Grid item width | `calc(33.33% - 10px)` | same | yes |
| `.cs-col-right` height | `212` | `212` | yes |
| `.cs-col-right` `padding` | `18px` | `18px` | yes |
| `.cs-cate-wrapp` height | `21` | `21` | yes |
| Category label | 10px/1.4/700/ls .8px/`#ad5151`, `margin-bottom:7px` | same | yes |
| Category dot | 3px `#ad5151` `::after`, `margin: 0 7px` | same | yes |
| `h2` height / colour | `56` / `rgb(40,40,40)` | `56` / `rgb(40,40,40)` | yes |
| `.cs-meta` gap | `8px` | `8px` | yes |
| `.cs-meta` height | `29` | `29` | yes |
| `.cs-chip` height | `29` | `29` | yes |
| `.cs-chip` `border-radius` | `50px` | `50px` | yes |
| `.cs-chip` `line-height` | `normal` (13px content) | `normal` (13px content) | yes |
| `.cs-visit` | `margin-top:20px; padding-top:20px; border-top:1px` | same | yes |
| `.cs-visit` height | `35` | `35` | yes |
| Section padding | `80px` → `50px` (≤991) → `40px` (≤575) | same | yes |
| Header `margin-bottom` | `40px` → `30px` (≤991) | same | yes |
| Section total height @1440 | `762.8` | `762.8` | yes |

Three fixes were needed to close the card-height delta, each verified by
injecting candidate rules in the live-matching direction before editing source:

1. **`.cs-chip` line-height.** Tailwind's `leading-normal` resolves to
   `line-height: 1.5` (15px at 10px font), not CSS `normal` (13px). Live
   `.cs-chip` sets `line-height: normal`, giving a 29px chip. Local used
   `leading-normal` (31px chip). Corrected to `leading-[normal]`.
2. **`.cs-cate-wrapp` clamp placement.** Live clamps the label span
   (`.cs-cate-wrapp span:not(span span)` carries `-webkit-line-clamp: 1`), and
   the wrapper itself is only `overflow: hidden`. Local put `line-clamp-1` on
   the wrapper, which added the wrapper's own inherited 24px line box as a
   strut (24px vs live 21px). Moved the clamp to the span and left
   `overflow-hidden` on the wrapper.
3. **Card `position: relative`, `min-height: 100%`, `transition: 0.23s ease`.**
   Present on live `.cs-listing-row`; added locally for computed-style parity.

## Interaction State Verification

| State | Live | Local | Match |
|---|---|---|---|
| Image rest | `428px` wide, `box-shadow: 1px -3px 10px 0 rgba(0,0,0,.1)` | same | yes |
| Image hover | scales to `449.4px` (`scale(1.05)`), `transition: all 1s` | `scale: 1.05` → `449.4px`, `1s` | yes |
| Card hover shadow | none | none | yes |
| Card hover transform | none | none | yes |
| CTA rest colour | `rgb(173, 81, 81)` | `rgb(173, 81, 81)` | yes |
| CTA hover colour | `rgb(40, 40, 40)` | `rgb(40, 40, 40)` | yes |
| CTA arrow svg width | `10` | `10` | yes |
| CTA arrow `path` fill | `rgb(173, 81, 81)` → `rgb(40, 40, 40)` | same | yes |

Note on reading the hover transform: Tailwind v4's `hover:scale-105` emits the
standalone `scale` property, so `getComputedStyle(el).transform` stays `none`.
The probe must read `.scale` or compare rendered width against `offsetWidth`
(both confirm 1.05). The local `TextArrowLink` CTA was widened from `h-3 w-3`
(12px) to `w-[10px] h-auto` to match the global live rule
`.text-arrow-link svg { margin-left: 10px; width: 10px; height: auto }`.

## Intentional Differences & Preserved Live Copy

- **Missing AOS `fade-up` Reveal**: Live cards and the section header carry
  `aos-init` / `data-aos="fade-up"`, so live animates them in once on scroll.
  This project ships no AOS runtime, so the section renders its final state
  immediately. Other migrated sections behave the same way. This is a known,
  deliberate gap rather than an oversight — adding an animation library for one
  section would violate the "no unnecessary client JavaScript" bar.
- **Preserved Live Heading Phrasing**: All live headings, descriptions, and labels are preserved verbatim.
- **URL Normalization**: Canonical URL normalized to slashless `/jewellery-accessories` per repo URL policy; permanent redirect from legacy live URL `/industries/jewellery-accessories` added in `next.config.ts`.
- **Assets**: All case study and portfolio imagery reused canonically from `public/assets/case-studies/`, `public/assets/our-work/projects/`, `public/assets/pet-industry/portfolio/`, and `public/assets/fashion/portfolio/`, with zero duplicates. Unique Santosh Jewellers portfolio image added to `public/assets/jewellery-accessories/portfolio/santosh-jewellers.webp`. OG image generated and optimized to 1200x630 in `public/assets/og/jewellery-accessories.png`.
