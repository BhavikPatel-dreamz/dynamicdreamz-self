# Pet Industry Page Visual Parity Capture

Live URL: `https://www.dynamicdreamz.com/industries/pet-industry/`  
Local route: `/pet-industry`  
Date checked: 2026-10-01  
Browser / source: Headless Google Chrome (`154.0.8037.57`) DOM dump (`scratch/live-pet-industry.html`), live screenshots (`docs/visual-captures/pet-industry/live-1440.png`, `docs/visual-captures/pet-industry/live-768.png`, `docs/visual-captures/pet-industry/live-390.png`), local screenshots (`docs/visual-captures/pet-industry/local-1440.png`, `docs/visual-captures/pet-industry/local-768.png`, `docs/visual-captures/pet-industry/local-390.png`), and live Yoast SEO JSON-LD graph.

## Viewports & Screenshot Evidence

- **Desktop (1440x2400)**:
  - Live: `docs/visual-captures/pet-industry/live-1440.png`
  - Local: `docs/visual-captures/pet-industry/local-1440.png`
  - Result: Verification confirms exact visual alignment across hero, brand logo slider, challenges, solutions, custom development, technologies marquee, portfolio cards, why choose stats, client stories, and split FAQs.
- **Tablet (768x2400)**:
  - Live: `docs/visual-captures/pet-industry/live-768.png`
  - Local: `docs/visual-captures/pet-industry/local-768.png`
  - Result: Responsive grid collapses cleanly (2-column challenges/solutions, 2-column portfolio, stacked why choose).
- **Mobile (390x2400)**:
  - Live: `docs/visual-captures/pet-industry/live-390.png`
  - Local: `docs/visual-captures/pet-industry/local-390.png`
  - Result: Single-column flow, touch-friendly tap targets, no horizontal overflow.

## Live CSS and JS Inspected

- `hero_new_section.css`: Two-column flex container, left title/copy/buttons/proof badges, right 16:9 looping video.
- `trusted_by_leading_brands_section.css`: Marquee logo slider with 12 brand partner logos.
- `shopify_theme_customization_services.css`: Numbered cards (`01`–`06`) in transparent and green (`#eff4ef`) variants.
- `industry_custom_development.css`: Dark `#192019` container with red eyebrow, white text, 4 border-separated capability items.
- `projects_section.css` (`our-work-sec`): 4-column portfolio grid with project tags, project name, arrow icon, and hover overlay.
- `why_choose_dynamic_dreamz_for_shopify_migration.css`: Split container with 4 capability icons/items on left, partner block and 4 stat counter boxes on right.
- `client_review_section.css`: Review carousel slider with video modals, client quotes, and ratings.
- `faqs_section.css`: Split accordion list with expand/collapse states.

## Section Inventory & Component Mapping

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
|---|---|---|---|
| 1 | Hero | `div.hero-new-section`: eyebrow `Industry Solutions` + `Pet Industry`, `h1` `Ecommerce Solutions for Pet Brands`, CTAs (`Discuss Your Project` -> `/request-quote`, `See Relevant Work` -> `#our_work`), 4 proof badges, looping background video. | Reused `ServiceHeroVideoSection` with typed `petIndustryHero`. |
| 2 | Brands | `div.our-client-sec`: heading `Trusted by Leading Brands`, 12 client logos. | Reused `IndustryBrandsSection` with `industryBrandLogos`. |
| 3 | Industry Challenges | `section.theme-customization-services.transparent`: eyebrow `Industry Challenges`, `h2` `Built around the Pet Profile and the Reorder Cycle`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="transparent"`). |
| 4 | Solutions We Build | `section.theme-customization-services.green`: eyebrow `Solutions We Build`, `h2` `What We Build for Pet Brands`, 6 numbered cards (`01`–`06`). | Reused `ThemeCustomizationServicesSection` (`variant="green"`). |
| 5 | Custom Development | `section.industry-custom-development`: eyebrow `Custom Development`, `h2` `Build around the Pet Profile, not Just the Product Catalogue`, 4 capability items. | Reused `IndustryCustomDevelopmentSection`. |
| 6 | Technology Stack | `section.white_label_wide_range_technologies_section`: `Platforms, Frameworks & Mobile Capabilities`, 2 marquee rows of technology logos. | Reused `WhiteLabelToolsSection` with canonical `/assets/technologies/` WebP logos. |
| 7 | Portfolio | `section#our_work.our-work-sec`: eyebrow `Portfolio`, `h2` `Selected Pet Industry Experience`, 6 cards (Supertails, Paw Labs, Neater Pets, My Pet Frame, Kentaur Australia, brilliantpetcare). | Reused `PortfolioShowcaseSection` (`cardVariant="ourWorkRefresh"`, `columns={4}`). |
| 8 | Why Dynamic Dreamz | `section.why_choose_dynamic_dreamz_for_shopify_migration`: eyebrow `Why Dynamic Dreamz`, `h2` `One Team Across Ecommerce, Custom Development and Mobile`, 4 capability items with inline SVGs, 4 stat counter boxes. | Reused `WhyChooseShopifyMigrationSection` with icons `certified`, `shopify-bag`, `custom-build`, `long-term-support`. |
| 9 | Client Stories | `section.happy-client-sec.pt-80`: eyebrow `Client Stories`, `h2` `Don't Just Take Our Word For It`, video testimonial cards. | Reused `HappyClientSection` with `shopifyPlusAgencyPageTestimonials.items`. |
| 10 | FAQs | `section.faq-sec`: eyebrow `Frequently Asked Questions`, `h2` `What Pet Brands Ask about Autoship, Profiles & Mobile`, 6 accordion items in a 2-column split layout. | Reused `SplitFaqSection` with default two-column split layout. |

## Intentional Differences & Preserved Live Copy

- **Preserved Live Structure (No Case Studies Section)**: The live Pet Industry page does not contain a `see-the-work-sec` case studies section. In strict compliance with migration parity rules, `ServicesCaseStudiesSection` is omitted locally so the page consists of the exact 10 live sections.
- **Preserved Live Headings & Copy**: All live headings, descriptions, and labels are preserved verbatim.
- **URL Normalization**: Canonical URL normalized to slashless `/pet-industry` per repo URL policy; permanent 301 redirect from legacy live URL `/industries/pet-industry` configured in `next.config.ts`.
- **Assets**: All 6 portfolio images verified byte-for-byte identical with existing canonical assets under `public/assets/pet-industry/portfolio/` and `public/assets/our-work/projects/`, with zero duplicates. OG image ingested and optimized to 1200x630 in `public/assets/og/pet-industry.png`.
