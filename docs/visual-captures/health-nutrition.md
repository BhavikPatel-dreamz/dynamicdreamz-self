# Health & Nutrition Industry Page

Live URL: `https://www.dynamicdreamz.com/industries/health-nutrition/` (migrated from legacy `/healthcare`)
Local route: `/health-nutrition`
Date checked: 2026-09-30
Browser/source: Headless Chromium rendered inspection, View Page Source, live page stylesheets (`hero_video_section.css`, `brand_sec.css`, `services_case_study_section.css`, `services_we_offer.css`, `title_with_content_services.css`, `white_label_wide_range_technologies_section.css`, `work_sec.css`, `why_choose_dd_sec.css`, `faqs_section.css`, `style.css`), live Yoast SEO structured data, and pixel-by-pixel local screenshot audit across desktop, tablet, and mobile breakpoints.

## Viewports & Parity Audit

| Viewport | Status | Visual Parity Evidence |
| --- | --- | --- |
| 1440x900 (Desktop) | Verified 1:1 Parity | Full-bleed video background hero with muted dark overlay (`#171b17e6` / 90% opacity), crisp red dash eyebrow `Shopify Platinum Partner`, `font-montreal-medium` H1 ("Ecommerce Solutions for Health, Nutrition & Supplement Brands"), dual CTAs ("DISCUSS YOUR PROJECT" linking to `/request-quote` & "EXPLORE OUR WORK" scrolling to `#portfolio-sec`), 4 trust partner badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.8, Upwork 100%) with vertical `#d9d9d9` dividers. Brand logo marquee below hero with infinite 25s scroll across 8 health & nutrition brands. 3 featured case study cards with live split headers, tags, titles, and live images (Naakbar, Health co, Nested Naturals). 6-card Common Challenges grid with circular numbered badges (`#fbefd7` background, `#ad5151` red numerals). 6-card Custom Solutions grid with SVG icons and hover lifts. High-contrast dark theme section (`#192019`) detailing 6 custom health commerce capabilities with check icons. 2-row technology badge marquee featuring 18 logos. 8-card responsive portfolio grid with hover zoom and tag pills. 4-feature Why Dynamic Dreamz section with 4 key metrics (Platinum Partner, 20+ Years, 150+ In-House, 5000+ Projects). Two-column split FAQ section (`#fafaf7` background, sticky left column with red dash eyebrow and H2, right column with underlined accordion and circle-cross toggles). |
| 768x1024 (Tablet) | Verified 1:1 Parity | Responsive stacking verified: centered hero text alignment with responsive subtitle, 2x2 trust badge grid with clean dividing lines, single-column marquee with smooth touch performance, 2-column case study layout (`max-[1199px]:w-[calc(50%-10px)]`), 2-column challenges grid, 2-column solutions grid, dark custom development section stacked gracefully, responsive technology logo rows, 2-column portfolio cards, 2x2 Why Dynamic Dreamz stats grid, and stacked FAQ layout with sticky behavior disabled and full-width touch-friendly accordion toggles. |
| 390x844 (Mobile) | Verified 1:1 Parity | Mobile UX verified: centered hero text with fluid font scaling, stacked full-width pill CTA buttons, 2x2 trust badges with `#d9d9d9` cross borders, responsive brand marquee, single-column case study cards with compact card bodies, single-column numbered challenge cards, single-column custom solution cards, stacked dark custom development feature cards, fluid technology logo marquee, 2-column portfolio cards (`max-[575px]:w-[calc(50%_-_8px)]`) with bottom centered store icons, 2-column mobile stats counters, and full-width touch-optimized FAQ accordion toggles. |

## Screenshot Evidence

- Live screenshots:
  - `docs/visual-captures/health-nutrition/live-desktop-1440x900.png`
  - `docs/visual-captures/health-nutrition/live-tablet-768x1024.png`
  - `docs/visual-captures/health-nutrition/live-mobile-390x844.png`
  - `docs/visual-captures/health-nutrition/live-faq-desktop-1440x900.png`
  - `docs/visual-captures/health-nutrition/live-faq-tablet-768x1024.png`
  - `docs/visual-captures/health-nutrition/live-faq-mobile-390x844.png`
- Local screenshots:
  - `docs/visual-captures/health-nutrition/local-desktop-1440x900.png`
  - `docs/visual-captures/health-nutrition/local-tablet-768x1024.png`
  - `docs/visual-captures/health-nutrition/local-mobile-390x844.png`
  - `docs/visual-captures/health-nutrition/local-faq-desktop-1440x900.png`
  - `docs/visual-captures/health-nutrition/local-faq-tablet-768x1024.png`
  - `docs/visual-captures/health-nutrition/local-faq-mobile-390x844.png`

## Section Inventory (Live Hierarchy)

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
| --- | --- | --- | --- |
| 1 | Hero | `.hero-new-section.hero_video_section`: Dark video overlay (`#171b17` at 90%), red dash eyebrow (`Shopify Platinum Partner`), H1 `font-montreal-medium` (`text-[#f7f4ee]`), dual CTAs (`ButtonLink` primary red & outline cream), 4 trust partner badges (Shopify Platinum Partner, Clutch, Trustpilot, Upwork) with vertical separators. | Server component `ServiceHeroVideoSection` with typed props matching live visual hierarchy. |
| 2 | Brand Marquee | `.brand_sec`: Infinite horizontal logo marquee of 8 health & nutrition brands (GNC, Naak, Nested Naturals, etc.). | Reused shared `IndustryBrandsSection` with client `BrandMarquee`. |
| 3 | Case Studies | `.see-the-work-sec`: `.section_title_with_eyebrow` split header, 3 featured case study cards (Naakbar, Health co, Nested Naturals) with tags, titles, and live thumbnail assets. | Reused shared `ServicesCaseStudiesSection`. |
| 4 | Common Challenges | `.theme_customization_services_section`: Eyebrow `Common Challenges`, H2 `What Health & Nutrition Brands Face`, 6 numbered challenge cards with circular badges (`#fbefd7` bg, `#ad5151` numbers). | Reused `ThemeCustomizationServicesSection` extended with numbered circle badge support. |
| 5 | Custom Solutions | `.theme_customization_services_section`: Eyebrow `Tailored Approach`, H2 `How We Solve Them`, 6 solution cards with SVG icons. | Reused `ThemeCustomizationServicesSection` with icon cards. |
| 6 | Custom Health Commerce | `.title_with_content_services`: Dark green background (`#192019`), sticky left heading with red eyebrow, right-side 6 custom development features with check icons. | Generalized server component `IndustryCustomDevelopmentSection`. |
| 7 | Technology Stack | `.white_label_wide_range_technologies_section`: 2 marquee rows featuring 18 technology logo badges (Shopify, React, Next.js, Node.js, etc.). | Reused shared `WhiteLabelToolsSection` with lossless WebP badges in `public/assets/technologies/`. |
| 8 | Portfolio | `.our-work-sec` (`#portfolio-sec`): 8 health & nutrition project cards (Naakbar, Health co, Nested Naturals, Sri Sri Tattva, Nordic Nutrition, Nufyx, GNC India, Holy Plantz) with live tag pills and hover zoom. | Reused shared `PortfolioShowcaseSection` with canonical assets in `public/assets/health-nutrition/portfolio/`. |
| 9 | Why Dynamic Dreamz | `.why_choose_dd_sec`: Split header, 4 key capability points with custom SVG icons, partner badge, and 4-counter proof metrics strip. | Reused shared `WhyChooseShopifyMigrationSection`. |
| 10 | FAQs | `.faq-sec`: Two-column split layout (`#fafaf7` background, `py-[60px] max-[991px]:py-10`), sticky left header (41% width) with red dash eyebrow and 30px H2, right column (57% width) with 6 health & nutrition accordion items with circle-cross toggles. | Reused shared `SplitFaqSection` (default `layout="split"` matching live `faqs_section.css`). |

## Motion, Interaction & Responsive States

- **Hero Background Video**: Loop video with poster fallback, optimized muted playback, and high-contrast dark overlay (`#171b17e6`).
- **Brand Marquee**: Smooth infinite CSS marquee scrolling at 25s per cycle, pausing on hover.
- **Project Cards**: Subtle hover scale (`scale-105`) with smooth easing, title underline animation, and tag badge positioning.
- **FAQ Accordion**: Single expanded accordion state with smooth accordion open/close transition and circle-cross icon rotation.
- **Smooth Anchor Scrolling**: "EXPLORE OUR WORK" scrolls cleanly to `#portfolio-sec`.

## SEO & Content Boundary Compliance

- Zero visible copy hardcoded inside components (`src/content/health-nutrition.ts` houses all 10 sections and heading constants).
- Passed `npm run check:component-content` across all 525 codebase files.
- Passed `npm run check:urls` with no trailing slashes.
- Canonical URL: `https://www.dynamicdreamz.com/health-nutrition`.
- Permanent 301 redirects configured in `next.config.ts` for `/healthcare`, `/industries/healthcare`, and `/industries/health-nutrition`.
- Updated `src/data/seo.ts` with accurate meta title (56 characters) and meta description (158 characters).
- Updated `src/lib/schema.ts` with complete Service, OfferCatalog (6 offers), FAQPage (6 questions), WebSite, and Organization structured data.
- Removed legacy healthcare assets and route files; migrated all active portfolio assets to canonical `public/assets/health-nutrition/portfolio/`.
- Passed zero duplicate asset audit (`node scripts/check-asset-duplicates.mjs`: 0 duplicates across 1,776 files).
