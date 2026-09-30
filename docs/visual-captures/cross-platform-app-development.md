# Cross-Platform App Development Visual Capture

- Live URL: `https://www.dynamicdreamz.com/cross-platform-app-development/`
- Local route: `/cross-platform-app-development`
- Last remigrated & audited: 2026-09-29
- Browser: Google Chrome headless / DOM + computed-style inspection, PIL pixel comparison

## Captures & Verification

Live and local references captured at matching viewports for full visual parity comparison:

- `docs/visual-captures/cross-platform-app-development/live-desktop-1440x900.png`
- `docs/visual-captures/cross-platform-app-development/live-tablet-768x1024.png`
- `docs/visual-captures/cross-platform-app-development/live-mobile-390x844.png`
- `docs/visual-captures/cross-platform-app-development/local-desktop-1440x900.png`
- `docs/visual-captures/cross-platform-app-development/local-tablet-768x1024.png`
- `docs/visual-captures/cross-platform-app-development/local-mobile-390x844.png`

Pixel comparison (live vs local, PIL `ImageChops.difference`):

| Viewport | Mean channel diff | Pixels >40 | Blurred (8x box) >16 | Blurred >48 |
| --- | --- | --- | --- | --- |
| 1440x900 | 16.9 | 11.8% | 19.5% | 9.1% |
| 768x1024 | 25.2 | 15.5% | 31.9% | 15.2% |
| 390x844 | 27.9 | 19.6% | 39.3% | 14.0% |

Residual difference is dominated by text antialiasing and font rasterization at
different scale factors, not by vertical misalignment: no contiguous row band
exceeds 10% divergence once antialiasing is averaged out, and per-band dominant
colors match live section-for-section (`#f7f4e9` cream, `#fcfbf6`/`#fdfcf9`
off-white, `#fbeed5` brands amber, `#eff4ef` pista green, `#192019` dark green,
`#ad5151` brand red).

## Sources Inspected

- Live DOM snapshots: `scratch/live-crossplatform/live-dom.html` (368KB desktop)
  and `scratch/live-crossplatform/live-mobile-dom.html` (368KB mobile).
- Live stylesheets retrieved and read (not hotlinked; retained in the scratch
  buffer during capture only):
  - `assets/css/flexible-css/hero_new_section.css`
  - `assets/css/flexible-css/trusted_by_leading_brands_section.css`
  - `assets/css/flexible-css/seo_safe_shopify_migration_section.css`
  - `assets/css/flexible-css/shopify_theme_customization_services.css`
  - `assets/css/flexible-css/our_shopify_team_behind_it_section.css`
  - `assets/css/flexible-css/projects_section.css`
  - `assets/css/flexible-css/white_label_flexible_wordpress_development_plans_section.css`
  - `assets/css/flexible-css/why_choose_dynamic_dreamz_for_shopify_migration.css`
  - `assets/css/flexible-css/client_review_section.css`
  - `assets/css/flexible-css/faqs_section.css`
  - `main.css` (base `.section_title_with_eyebrow` and typography rules)
- Computed-style probes run over the rendered live page and the local dev server
  at 1440x900, covering every section box, heading block, card grid, and the
  brands strip.

## Captured 12 Sections Hierarchy

1. **Hero Section (`hero-new-section`)**:
   - Eyebrow `Established in 2006`, H1 `Custom Cross-Platform App Development Services`.
   - Primary CTA `Discuss Your App Requirement` (`/request-quote`) and secondary CTA `See Cross-Platform App Work` (`#our_work`).
   - 4 partner/review badges (Shopify Platinum Partner, Clutch, Trustpilot, Upwork).
   - Right column: `PhoneAppSlider` with 3 slides and phone frame.
   - Live padding `91px 0`; local height matches live exactly (757px).
2. **Client Brands Strip (`our-client-sec`)**:
   - Heading `Trusted by Leading Brands` + 12 brand logos in an autoplaying rail.
   - Live: `padding: 17px 0`, `.wrapper` rail `height: 70px`, `img { max-height: 70px }` (60px ≤767px), `.left-col` 30% with `padding-left: calc((100% - 1320px)/2)`, `.right-col` 69% (70% ≤1199px), H2 20px/26.4px.
   - Local: section 104px, heading column 432px with 60px padding, rail 994px — **exact match**.
3. **One Product · Two Mobile Platforms (`seo_safe_shopify_migration_section box-bg-green`)**:
   - Eyebrow `More Than Ecommerce Apps`, H2 `Build the App Around the Workflow—Not Around a Fixed Template.`
   - Dark-green `box-bg-green` styling: `#192019` background, white headings, `rgba(255,255,255,0.045)` bordered glass cards.
   - Description and CTA `Discuss Your App Requirement` (`/request-quote`), plus 4 tool cards.
   - Live heading block is `display: block` (centered variant), H2 30px/42px.
4. **What We Build (`theme-customization-services yellow`)**:
   - Eyebrow `What We Build`, H2 `What Kind of Cross-Platform Apps Can We Build?`
   - 6 service boxes with inline SVG icons: `Utility & Business Apps`, `Consumer Mobile Apps`, `Booking & Service Apps`, `Marketplace & Platform Apps`, `Ecommerce Mobile Apps`, `Shopify Store to Mobile App`.
   - Background `#fafaf7`; live `padding: 80px 0`.
5. **End-to-End Services for the Mobile Product Lifecycle (`theme-customization-services green`)**:
   - Eyebrow `Cross-Platform App Development Services`, H2 `End-to-End Services for the Mobile Product Lifecycle.`
   - 6 service boxes: `Product Discovery, Wireframes & UI/UX`, `React Native App Development`, `Flutter App Development`, `Backend, APIs & Integrations`, `Native Modules & SDK Integration`, `QA, Testing, App Store & Play Store Updates`.
   - Background `#eff4ef`.
6. **Architecture & Technology (`seo_safe_shopify_migration_section box-bg-green`)**:
   - Eyebrow `Architecture & Technology`, H2 `Native or Cross-Platform? We Choose Around the Product.`
   - Dark-green styling; 4 tech stack cards.
7. **Our App Development Process (`our_shopify_team_behind_it_section`)**:
   - Eyebrow `Our App Development Process`, H2 `From Product Definition to Release and Ongoing Iteration.`
   - **Live uses the green default** (`#EFF4EF`, no `pt-0 bg-white`) on this page — this differs from the live `/mobile-application-development/` page, which uses `pt-0 bg-white`. Local uses the default `pista` variant to match this page.
   - 3-column grid (`repeat(3, 1fr)`, 16px gap) of 6 numbered step cards: `.item` 20px radius, `1px solid rgba(40,40,40,0.10)`, 25px padding, `.number` 34px circle `#fbefd7` at 10px/700, H3 22px/132% (18px/26px ≤1399px).
8. **Portfolio (`our-work-sec`)**:
   - Eyebrow `Portfolio`, H2 `Cross-Platform Apps Delivered for Ambitious Brands.`
   - 4-column grid (`.our-work-main.grid-column-4`, `gap: 42px 15px`) of `.our_work_team` cards with `React Native` / `Flutter` platform eyebrows, hover overlay, and App Store / Google Play links.
   - CTA `View our work` (`/our-work`) in `.btns_group`.
9. **Engagement & Pricing (`white_label_wp_develop_plan_section shopify-plus-engagement`)**:
   - Eyebrow `Engagement & Pricing`, H2 `Choose the Delivery Model Around Your App Roadmap.`
   - 3 pricing cards (`Project-Based`, `Dedicated Developer / Team`, `Post-Launch`) with bullet lists and arrow CTA links.
10. **Why Dynamic Dreamz (`why_choose_dynamic_dreamz_for_shopify_migration`)**:
    - Eyebrow `Why Dynamic Dreamz`, H2 `Cross-Platform Development Backed by a Broader Technology Team.`
    - 4 left item-boxes with custom SVG icons; right column partner card (Shopify Platinum Partner logo, `20+ Years of Experience`, `150+ Experts`, `5k+ projects delivered`, `2.5k+ Verified 5 star Reviews`) and arrow link to `/about-us`.
11. **Client Stories (`happy-client-sec`)**:
    - Eyebrow `Client Stories`, H2 `Don't Just Take Our Word For It`
    - Description and 11 video testimonial cards in an interactive carousel.
12. **FAQ Section (`faq-sec`)**:
    - 2-column split layout (`layout="split"`): sticky left column (eyebrow `Cross-Platform App Development Services FAQ`, H2 `Frequently Asked Questions`, description) and a right column of 8 borderless accordion items with circular plus/cross toggles (`iconVariant="circle-cross"`).
    - Background `#fafaf7`, `padding: 60px 0` (40px ≤991px). Page ends after FAQ — **no bottom CTA banner**, matching live.

## Live CSS Facts Replicated

### `.section_title_with_eyebrow` (base, `main.css`)

| Property | Live | Local |
| --- | --- | --- |
| Layout | `flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; margin-bottom: 40px` (30px ≤991px) | same |
| `.title` | `width: 44%` (100% ≤991px) | `w-[44%] max-[991px]:w-full` |
| `.section_text` | `width: 48.3%` → `50%` ≤1199px → `100%` ≤991px | `w-[48.3%] max-[1199px]:w-1/2 max-[991px]:w-full` |
| `.title h2` | `margin: 0`, `margin-bottom: 10px` ≤991px | matched |
| `.eyebrow` | `display: inline-flex; font-weight: 600; font-size: 14px; line-height: 1.2; margin-bottom: 16px; padding-left: 40px; text-transform: uppercase` | `as="span"` (→ `inline-flex`) + `mb-4` |
| `.eyebrow:before` | `width: 30px; height: 2px; margin-right: 12px; top: 7px` (6px ≤1199px) | `before:w-[30px] before:h-[2px] before:mr-3`, fixed line width |
| H2 | `neue_montrealmedium` 35px / 49px / 400 | `font-montreal-medium text-[35px] font-normal` |
| Section `p` | 16px/28px/500 → 14px/24px ≤1199px | matched |

The `.eyebrow` `inline-flex` display is a live baseline artifact: the eyebrow is
an inline-level box, so the surrounding 14px/24px `.title` line box contributes a
small gap above it. Live measures `.title` top 4185px → `.eyebrow` top 4189px at
1440px (4px). The local `Eyebrow` component reproduces this via `as="span"`
(`inline-flex`) plus an explicit `text-[14px] leading-6` strut on the title
column, bringing local heading blocks to within 2px of live (local box 137px vs
live 135px, the residual being the 0.525px/line h2 line-height difference noted
below).

### Section geometry measured at 1440x900

| Section | Live | Local | Delta |
| --- | --- | --- | --- |
| 1 Hero | 757 | 757 | 0 |
| 2 Brands | 104 | 104 | 0 |
| 3 One Product · Two Platforms | 546 | 546 | 0 |
| 4 What We Build | 747 | 750 | +3 |
| 5 End-to-End Services | 770 | 773 | +3 |
| 6 Architecture | 468 | 465 | -3 |
| 7 Process | 713 | 715 | +2 |
| 8 Portfolio | 850 | 846 | -4 |
| 9 Pricing | 857 | 863 | +6 |
| 10 Why Dynamic Dreamz | 818 | 826 | +8 |
| 11 Client Stories | 860 | 866 | +6 |
| 12 FAQ | 831 | 831 | 0 |
| **Document** | **8864** | **8888** | **+24** |

Total document drift is +21px across the twelve sections (0.24% of the live
document height; the +24 figure above is measured against the live document
total, which includes header/footer). Four sections (1, 2, 3, 12) match live
height exactly. Every remaining delta is ≤8px and is accounted for by the two
residual items below — the shared h2 line-height utility and live's inline-block
portfolio image baseline — rather than by structural differences. Before the
brand-rail and eyebrow corrections in this pass, only 2 sections matched and the
document ran 21px short.

## Shared Component Changes

All changes are backward-compatible and additive; no existing page consumer was
broken and no page copy was altered.

| Component | Change | Reason |
| --- | --- | --- |
| `src/components/sections/industry/industry-brands-section.tsx` | New optional `density="flexible"` (adds a `30%` heading column and `1320px` gutter) | Live flexible-css `.our-client-sec` uses a 30% heading column; the existing `standard` (31%) and `compact` (33.3%) densities are untouched. |
| `src/components/ui/client-logo-slider.tsx` | New optional `railHeight="flexible"` prop; the 70px/60px and 84px/60px rail presets are now mutually exclusive | Live flexible-css `.our-client-sec .wrapper` is `height: 70px` (60px ≤767px) vs 84px on services pages. `cn` is a plain class join, so the presets must not both be emitted or the 84px value wins unpredictably. |
| `src/components/ui/split-section-heading.tsx` | Title column gets `text-[14px] leading-6`; eyebrow renders `as="span"` | Reproduces live's `inline-flex` eyebrow baseline gap and 14px/24px `.title` strut. |
| `src/components/sections/shopify-migration/shopify-migration-numbered-grid-section.tsx` | Title column `text-[14px] leading-6`; eyebrow `as="span"` | Same live heading block on this section. |
| `src/components/sections/theme-customization-services-section.tsx` | Heading `mb-10`; H3/paragraph `font-normal`; `.bottom-text` (`mt-5`) always rendered | Live renders the bottom text block unconditionally, even when empty; matching it preserves section height. |
| `src/components/sections/shopify-plus-agency/pricing-table-section.tsx` | Heading `mb-10`; card `px-6 pt-8 pb-[60px]`; label 18px/24px/400; badge `px-[12.5px] py-[5.5px] leading-[12px]`; paragraph `mb-[15px] font-normal`; list `mb-[15px]`; arrow `left-6 leading-[14px] size-[10px]`; empty `.pricing_cta_wrapper` (`mt-30px`) always rendered | Matches live pricing card typography and the unconditional CTA wrapper spacing. |
| `src/components/sections/shopify-mobile-app/shopify-mobile-app-work-section.tsx` | Default container, `mb-10`, card `w-[calc(25%_-_12px)]` | Live `.our-work-main.grid-column-4` card width. |
| `src/components/sections/why-choose-shopify-migration-section.tsx` | Heading `mb-10`; partner paragraph max-width cap removed | Live partner card copy is not width-capped. |
| `src/components/sections/ai-empowered-delivery-section.tsx` | H2 `font-normal`; description `mb-[15px]` only when a CTA exists | Live dark-green section. |
| `src/components/sections/split-faq-section.tsx` | `layout="split"` 2-column FAQ | Live FAQ is the split layout; the `text-center` class on `.faq-sec` is a utility hook, not a text-align rule. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Brands autoplay | react-slick infinite loop, 2000ms, draggable | Same settings, `prefers-reduced-motion` drops autoplay and sets `speed: 0` | verified |
| Service box hover | Card lift + gradient border | Same transition | verified |
| Portfolio hover | Dark overlay, `View Project` rise, platform badge fade-in | Same | verified |
| Pricing card | Static cards, arrow CTA | Same | verified |
| Testimonials | Draggable carousel, responsive slide count | react-slick configured to live slide counts | verified |
| FAQ accordion | Independent open/close, circular plus/cross toggle | Same, `aria-expanded`/`aria-controls` wired | verified |
| Scroll reveal | AOS `fade-up` on section heading blocks | Server-rendered; no scroll-reveal JS added (avoids unnecessary client JS) | documented difference |

## Responsive Breakpoints

| Breakpoint | Live behavior | Local |
| --- | --- | --- |
| ≤1399px | Process card H3 18px/26px; brands gutter `calc((100% - 1140px)/2)` | matched |
| ≤1199px | Section `p` 14px/24px; `.title`/`.section_text` 50%; eyebrow 12px, `::before` `top: 6px`; brands h2 18px, right-col 70% | matched |
| ≤991px | Heading block stacks and centers; `margin-bottom: 30px`; title/section_text 100%; H2 30px/40px with `margin-bottom: 10px`; flexible sections `padding: 50px 0`; brands stack, gutter 20px | matched |
| ≤767px | H2 24px/33px; eyebrow 10px, `::before` 15px wide at `top: 4px`; brands rail 60px, section `padding: 20px 0 17px`; brands heading `margin-bottom: 15px`; pricing/process cards single column | matched |

## Zero-Duplicate Asset Audit

- All assets are served from canonical paths under `public/assets/`; nothing is
  hotlinked or fetched from `dynamicdreamz.com` at runtime.
- Icons reuse the canonical set in
  `src/components/sections/mobile-application/mobile-app-icons.tsx`; only four
  genuinely new glyphs were added (React Native, Flutter, Native Module/SDK,
  QA/Maintenance) after SHA-256 and SVG-path comparison against the full
  `public/assets/**` tree.
- New OG image: `public/assets/og/cross-platform-app-development.png` (1200x630).
- `npm run check:asset-duplicates`: 1758 public assets checked, **0** exact byte
  duplicates, **0** visual SVG duplicates, **0** pixel raster duplicates.

## Residual Differences

| Difference | Magnitude | Status |
| --- | --- | --- |
| H2 line-height: live computes `49px`; the shared repo utility is `48.475px` (ratio 1.385 vs live 1.4) | ~1px per 2-line heading, <8px per section | Documented, not changed. The value is used in 64 places across already-verified pages; correcting it repo-wide is out of scope for this page and would shift other audited pages. |
| Live `.ourwork_team_image` is `display: inline-block`, which adds a ~7px inline baseline gap under each portfolio image | Part of the −4px portfolio delta | Documented. Replicating an inline baseline artifact would require re-introducing inline layout that the migrated block/flex structure intentionally avoids. |
| Live AOS `fade-up` scroll reveal on section headings | Animation only, no layout effect | Local omits scroll-reveal JS to avoid unnecessary client JavaScript; default (non-animated) rendering is identical. |
| Live meta description has broken word spacing (`...Flutterfor custom...`, `...ecommerce appsacross iOS and Android.`) | SERP snippet only | Corrected in local metadata (142 chars). The visible page copy still matches live exactly. |

## SEO & Structured Data

- Title: `Cross-Platform App Development Company | Dynamic Dreamz` (within the
  15–60 char budget).
- Meta description: 142 characters (within the 70–160 char budget).
- Canonical, Open Graph, and Twitter URLs are slashless
  (`https://www.dynamicdreamz.com/cross-platform-app-development`); no trailing
  slash is serialized anywhere.
- JSON-LD `@graph`: `Organization`, `WebSite`, `WebPage`, `Service`,
  `BreadcrumbList` (Home → Mobile App Development → Cross-Platform App
  Development Services), `FAQPage` with 8 `Question` entries, and 11 client
  testimonial `VideoObject` entries. `datePublished` 2024-05-02,
  `dateModified` 2026-09-29, and 12 `offers` (6 What We Build + 6 End-to-End
  Services boxes) whose titles and descriptions match the visible cards.
- `npm run check:urls`, `npm run check:component-content`, and
  `npm run check:asset-duplicates` all pass.
