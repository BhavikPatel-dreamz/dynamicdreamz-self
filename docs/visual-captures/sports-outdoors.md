# Sports & Outdoors Industry Page

Live URL: `https://www.dynamicdreamz.com/industries/sports-outdoors/`
Local route: `/sports-outdoors`
Date checked: 2026-09-30
Browser/source: View Page Source of the live page, cleaned and stored as
`scratch/sports-outdoors/live-body-clean.html` (source of truth for copy, order,
alt text, and anchor targets), the live Yoast SEO JSON-LD graph, and
server-rendered inspection of `http://localhost:3000/sports-outdoors`.

> **Visual parity is NOT claimed for this page.** Desktop browser tooling was
> disconnected for the whole of this task
> (`[browser.disconnected] No desktop browser is connected to this session`), and
> no headless browser is installed locally (`playwright` and `puppeteer` are both
> absent from `node_modules`). No live or local screenshot could be captured at
> any viewport, and no computed-style, animation, or interaction-state capture
> could be taken. Parity below is **structural/markup-level only**, verified by
> diffing server-rendered live source against server-rendered local HTML.
> See "Remaining Differences" for what that leaves unverified.

Live CSS/JS, animation, and responsive rules are **not** re-derived here. This
page renders the same `template-services-template` as `/health-nutrition`, whose
full stylesheet/animation/breakpoint audit is already recorded in
`docs/visual-captures/health-nutrition.md` and
`docs/visual-captures/theme-why-choose-variants.md`. Re-running that capture is
the outstanding prerequisite before this page can be called visually verified.

## Viewports & Parity Audit

| Viewport | Status | Visual Parity Evidence |
| --- | --- | --- |
| 1440x900 (Desktop) | Blocked — no screenshot capability | Not captured. Browser tooling unavailable for the entire task. Desktop styling is inherited unchanged from the shared sections already audited for `/health-nutrition`, but this has **not** been visually confirmed for this route. |
| 768x1024 (Tablet) | Blocked — no screenshot capability | Not captured. Same blocker as desktop. |
| 390x844 (Mobile) | Blocked — no screenshot capability | Not captured. Same blocker as desktop. |

## Screenshot Evidence

- Live screenshots: **none captured** (browser tooling disconnected).
- Local screenshots: **none captured** (no headless browser available).
- No `docs/visual-captures/sports-outdoors/` directory was created, because there
  is nothing to put in it. Creating empty placeholder files would misrepresent
  the evidence as captured.

## Structural Parity Evidence (substitute for screenshots)

These checks were completed against the cleaned live source and the local
server-rendered response.

| Check | Result |
| --- | --- |
| HTTP status / route | `200` on `/sports-outdoors` (slashless, per repo URL policy) |
| `<title>` | `Shopify Agency for Sports & Outdoor Brands \| Dynamic Dreamz` — matches live |
| Canonical | `https://www.dynamicdreamz.com/sports-outdoors` |
| `h1` | Exactly one, `Ecommerce Solutions for Sports, Fitness & Outdoor Brands` — matches live |
| `h2` count | Live has 10, local has 9. All 10 live `h2` texts are present locally in the same order, but live's `20+ Years of Ecommerce Delivery` is an `<h2 class="h3">` while local renders it as an `<h3>` with equivalent styling — see Remaining Differences |
| Section order | All 10 live sections present in live order (see inventory below) |
| Hero eyebrow | `Industry Solutions` + `Sports & Outdoors` — matches live |
| Hero CTAs | `Discuss Your Project` → `/request-quote`; `See Relevant Work` → `#our_work` — both match live, and `#our_work` resolves to a real rendered `id` locally |
| Proof badges | 4 badges, alts match live verbatim |
| Brand links | 12 brand links, alts and `href`s match live |
| Portfolio | 8 cards, `href` + `alt` match live 1:1 |
| Why Dynamic Dreamz | 4 items; all 4 SVG `viewBox` + path data verified path-identical to live |
| Client stories | 11 testimonials, names and companies match live in order |
| FAQs | 6 questions, text and order match live 1:1 |
| Missing `alt` attributes | 0 `<img>` elements without an `alt` |
| JSON-LD `@graph` | `[Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage]`; 6 `hasOfferCatalog` offers matching the live "Solutions We Build" headings; 6 `FAQPage` entries; breadcrumb `Home → Sports & Outdoors`; `audienceType` `Sports, fitness and outdoor brands`; live `datePublished`/`dateModified` preserved |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| View Page Source | Full live body captured and cleaned to `scratch/sports-outdoors/live-body-clean.html`; comments stripped, then used for the heading, alt-text, anchor, and section-order diffs above. |
| Live `<section>` / wrapper classes | `div.hero-new-section`, `div.our-client-sec`, `section.theme-customization-services.transparent`, `section.theme-customization-services.green`, `section.industry-custom-development`, `section.white_label_wide_range_technologies_section`, `section#our_work.our-work-sec`, `section.why_choose_dynamic_dreamz_for_shopify_migration`, `section.happy-client-sec.pt-80`, `section.faq-sec` |
| Live inline SVG | The 4 why-choose icons, saved to `scratch/sports-outdoors/why-choose-icons.txt` and diffed against the local `MigrationFeatureIcon` path data |
| Live Yoast SEO JSON-LD | `@graph` contents, `hasOfferCatalog`, `audienceType`, breadcrumb, and article dates |
| Live stylesheets / DevTools computed styles | **Not inspected this session** — no browser available. Inherited from the `/health-nutrition` audit of the identical template. |
| Live JS behaviour | **Not inspected this session** — no browser available. |
| Assets | 8 portfolio images and the OG image hashed/compared against all of `public/assets/**`; see "Asset Handling" below. |

## Section Inventory (Live Hierarchy)

| # | Section | Live CSS & Markup Role | Local Implementation & Reuse Notes |
| --- | --- | --- | --- |
| 1 | Hero | `div.hero-new-section`: two-column layout, left column with two-span eyebrow, `h1`, one paragraph, `.btn-group` (`.btn.btn-red` + `.btn.scroll_down_link`), and a `.global_brands_grid_wrap` of 4 proof badges; right column is the muted looping `why-dynamic-dreamz.mp4` video. | Reused shared server component `ServiceHeroVideoSection` via typed `sportsOutdoorsHero`. |
| 2 | Brand Marquee | `div.our-client-sec` → `.main-wrapper` with left-column `h2` `Trusted by Leading Brands` and right-column `.wrapper.indian_brand` of 12 `.logo-block` links. | Reused shared `IndustryBrandsSection` + client `ClientLogoSlider`. Heading passed as the `Trusted by Leading Brands` string. Logos reuse the existing 12-item `industryBrandLogos`. A page-specific `sportsOutdoorsBrandsConfig` supplies the aria label, mirroring the `/health-nutrition` approach, so the shared `brandTrustAriaLabels` map was left untouched. |
| 3 | Industry Challenges | `section.theme-customization-services.transparent`: eyebrow `Industry Challenges`, `h2` `Built for Spec-driven Buyers and Seasonal Demand`, 6 numbered cards (`01`–`06`) with `#fbefd7` circular badges. | Reused shared `ThemeCustomizationServicesSection` in the `transparent` variant. |
| 4 | Solutions We Build | `section.theme-customization-services.green`: same component in the `green` variant, 6 numbered cards, eyebrow `Solutions We Build`. | Reused the same `ThemeCustomizationServicesSection` in the `green` variant. The 6 titles feed the `hasOfferCatalog` in schema. |
| 5 | Custom Development | `section.industry-custom-development`: dark section with eyebrow + `h2` + description and 4 check-marked capability items. | Reused shared `IndustryCustomDevelopmentSection`. **The live heading contains a copy bug that was preserved on purpose — see Remaining Differences.** |
| 6 | Technology Stack | `section.white_label_wide_range_technologies_section`: two marquee rows, 18 technology logos (10 + 8). | Reused shared `WhiteLabelToolsSection`; all 18 badges are pre-existing lossless WebP files in `public/assets/technologies/`. |
| 7 | Portfolio | `section#our_work.our-work-sec`: split header (eyebrow `Portfolio` + `h2` `Selected Sports & Outdoors Experience`), 8 `.our_work_team` cards with platform pill, project name, hover overlay, and external `target="_blank" rel="nofollow"` link. | Reused shared `PortfolioShowcaseSection`; `id="our_work"` is emitted so the hero anchor resolves. 8 projects, 6 `Shopify / Shopify Plus`, plus BigCommerce (Country & Stable) and WordPress (Totum), matching live. |
| 8 | Why Dynamic Dreamz | `section.why_choose_dynamic_dreamz_for_shopify_migration`: split header, 4 capability items with inline SVG icons, Shopify Platinum partner block, and a 4-box stats strip. | Reused shared `WhyChooseShopifyMigrationSection`. Its `MigrationFeatureIcon` was **extended** with three new branches (`shopify-bag`, `custom-build`, `long-term-support`); item 1 reuses the existing `certified` branch. The extension is additive — the `icon` union was widened and no existing consumer was changed. All 4 rendered SVGs were verified path-identical to live. |
| 9 | Client Stories | `section.happy-client-sec.pt-80`: 11 `.carousel-item` cards, each with a video-lightbox image, a logo, a `h3` name + company, a quote icon, and a review paragraph. | Reused shared `HappyClientSection`. The live `pt-80` top spacing was reproduced with `className="pt-80 max-[992px]:pt-12.5"`, matching the existing precedent in `shopify-plus-migration-agency-page.tsx`. The 11 testimonials are reused verbatim from `shopifyPlusAgencyPageTestimonials`, which already matches this live carousel exactly — no new content module was needed. |
| 10 | FAQs | `section.faq-sec`: centered eyebrow `Frequently Asked Questions` + `h2` `What Sports & Outdoors Brands Ask before They Scale`, then 6 `.accrodion-item` accordions with `h3` questions and circle-cross toggles; first item is `active` on load. | Reused shared `SplitFaqSection`; 6 panel/trigger id pairs emitted as `sports-outdoors-faq-*`. |

**Not present on live, and correctly not implemented here:** `/health-nutrition`
carries a `see-the-work-sec` featured-case-studies block. The live
sports-outdoors page has no such section, so none was added.

## Motion, Interaction & Responsive States

All rows below are **inherited from the shared components and the shared-template
audit, not independently re-verified on this route.** No browser was available to
observe any state.

| State | Live behavior (from shared-template audit) | Local behavior | Result |
| --- | --- | --- | --- |
| Hero video | Muted, looping, `playsinline` background video with dark overlay | Same shared component | Unverified on this route |
| Brand marquee | Infinite horizontal logo scroll, pauses on hover | Same shared component | Unverified on this route |
| Portfolio cards | Hover overlay fade + project arrow affordance | Same shared component | Unverified on this route |
| Why-choose icons | 4 inline SVGs, one per capability item | Same, with 3 newly added icon branches | Path data verified identical; hover/active states unverified |
| Client stories | Slick carousel with arrow controls and YouTube lightbox | Same shared component | Unverified on this route |
| FAQ accordion | Single-open accordion, first item `active` on load, circle-cross toggle | Same shared component | Unverified on this route |
| Anchor scroll | `See Relevant Work` smooth-scrolls to `#our_work` | Target `id` verified present in rendered HTML | Unverified on this route |
| Responsive breakpoints | 1399/1199/991/992/768/575 tiers from the shared sections | Same shared components | **Unverified — this is the largest open gap** |

## Asset Handling

- All 8 live portfolio images were downloaded to `scratch/`, hashed, and compared
  against the entire `public/assets/**` tree. Every one proved to be a
  byte-identical re-encode of an asset the project already owns (same dimensions,
  average pixel difference 0.000 at 64x64 downsample). **All 8 reuse existing
  canonical local paths; nothing was ingested.**
- The only unique asset is the live Open Graph image
  (`Sports_Outdoors_OG_image.png`, 1730x909, 1.1 MB). It was resized to
  1200x630 and palette-quantized into `public/assets/og/sports-outdoors.png`
  (248 KB), following the existing `health-nutrition.png` pattern.
- `npm run check:asset-duplicates`: 1,777 assets, **0 duplicate hash groups**
  (exact, visual-SVG, and pixel-raster comparisons all clean).
- All `scratch/` candidates were deleted after the comparison except the two
  evidence files listed under "Live Sources Inspected".

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| No live/local screenshots at 1440x900, 768x1024, or 390x844 | Browser tooling disconnected and no headless browser installed | **Blocked** — must be re-run before claiming visual parity |
| No computed-style, animation-timing, or interaction-state capture | Same | **Blocked** |
| Section 5 heading reads `Custom Health Commerce where Standard Apps Stop` on a sports/outdoors page | This is a copy bug present on the **live** site (leftover from the health template). Preserved deliberately under the migration live-UI rule. | Tracked as `suggested` in `docs/page-content-improvements.md`; **not** fixed — needs owner approval |
| Portfolio card title is `<h3>` locally but `<span class="h4">` on live | Pre-existing behavior of the shared `PortfolioShowcaseSection`, used by many already-migrated routes. Not introduced by this page. | Documented; shared-component change out of scope for this task |
| Why-choose partner heading and stat values use different element levels locally vs live | Live renders the partner heading as `<h2 class="h3">` and each stat value as `<h3>`. Local renders the partner heading as `<h3>` and stat values as `<span>` + `<p>`. Visual styling is equivalent, but the document outline differs. Caused by pre-existing behavior of the shared `WhyChooseShopifyMigrationSection`, which was **not** changed for this page. This is why the local page has 9 `h2`s where live has 10. | Documented; shared-component change out of scope for this task |
| Testimonial name and company have no whitespace text node between them locally, so text extraction yields e.g. `Shari LeidichMax Sweets`; live yields `Shari Leidich Max Sweets` | JSX drops the newline between `{testimonial.name}` and the company `<span>` in the shared `happy-client-card.tsx`. The span is `display:block` in the client-stories variant, so the **rendered** result is identical; only the accessible text string differs. Pre-existing across every route using this card. | Documented; no visual impact, low a11y impact, shared component left unchanged |
| Found while verifying section 8: `/health-nutrition` has a **pre-existing** icon defect | Live `/industries/health-nutrition/` and live `/industries/sports-outdoors/` ship the *same* 4 why-choose capability icons (verified path-identical: `87d8f7a6`, `90deffcbff`, `ae64747e29`, `94cb3e6b1`). Local `/sports-outdoors` now renders all 4 correctly; local `/health-nutrition` renders **zero** matching icons, because it points at the `design`/`expertise`/`team`/`support` glyphs. | Recorded in the Health & Nutrition section of `docs/page-content-improvements.md` as `deferred`; out of scope for this route and needs its own fix |
| Portfolio image alt text is the generic live form (`Tropicfeel Image`, `Capri Bikes Image`, …) | Live uses this generic form. Descriptive, subject-specific alt text would satisfy the repo quality bar, but accurate alt text requires looking at each image, and this session has no image-viewing or screenshot capability. Inventing descriptions was not acceptable. | Tracked as `deferred` in `docs/page-content-improvements.md` |

## SEO & Content Boundary Compliance

- Zero visible copy hardcoded in `src/components/**` or `src/app/**`; all 10
  sections live in `src/content/sports-outdoors.ts`.
- `npm run check:component-content` passes across the codebase.
- `npm run check:urls` passes — the route and every canonical/OG/sitemap/JSON-LD
  URL are slashless, with the homepage as the only structural exception.
- Slashless public route `/sports-outdoors` (the live `/industries/sports-outdoors/`
  trailing-slash form was deliberately **not** copied, per the repo URL policy).
- `src/data/seo.ts` gained a `sportsOutdoors` entry with the live title (59
  characters), the 157-character live description, the live publish/modify dates,
  the new OG image, and sitemap priority 0.8. The sitemap derives from `pageSeoEntries`, so
  no separate `sitemap.ts` edit was required. `src/data/navigation.ts` already
  linked `/sports-outdoors`, so navigation needed no change.
- `src/lib/schema.ts` gained `createSportsOutdoorsPageSchema()` plus the matching
  `sportsOutdoorsPageUrl` / `PageId` / `BreadcrumbId` / `ServiceId` / `FaqId`
  constants.
- `npm run lint` and `npm run build` both pass; `/sports-outdoors` prerenders as
  a static route.
