# Homepage AEO/GEO Update

## 2026-10-06 Homepage Selected Shopify Plus & Enterprise Ecommerce Work Layout Parity

- Owner-supplied screenshot: https://prnt.sc/OmRDjnhIvc6B highlighting the card slider area where the local layout displayed cards as "so big box".
- Live sources inspected: `https://www.dynamicdreamz.com/` rendered DOM and computed styles from `scratch/live-home.css` (`.our_portfolio_wrap`, `.portfolio_items_scroll`, `.portfolio_item_box`, `.img_wrap`, `.portfolio_title`).
- Live vs. Prior Local Comparison at 1843px Desktop Viewport:
  - Live card width: `777px` (42.5vw with 15% peek on right for 3rd slide)
  - Prior local card width: `921.5px` (50vw taking exactly half screen, no 3rd slide peek)
  - Live card height: `544.4px` (image `437px` via `padding-bottom: 56.25%`, title `107.34px`)
  - Prior local card height: `733.6px` (image `626.6px` via `padding-bottom: 68%`, title `107px`)
  - Live section height: `918.4px`
  - Prior local section height: `1096.2px` (plus artificial `min-h-[932.83px]`)
- Root cause:
  1. Motion container width was hardcoded to `500%` across all desktop viewports, which divided by 2 lists and 5 cards per list made each card 50% viewport width instead of 42.5% viewport width. On the live site at `>= 1600px`, `.our_portfolio_wrap .slick-list` has `padding-right: 15%`, resulting in each slide taking `(100% - 15%) / 2 = 42.5%` viewport width and revealing a 15% peek of the subsequent slide on the right.
  2. The image wrapper used `pb-[68%]` for desktop (`>= 993px`), whereas the live site specifies `padding-bottom: 56.25%` (16:9) at `>= 1600px` and `padding-bottom: 56.25%` at `992px - 1199px`.
  3. Responsive title font size and arrow clearance were scoped to `max-[992px]` instead of the live site's `max-[1380px]` breakpoint (`font-size: 24px; padding: 20px; right: 20px`).
  4. The section had artificial `min-height` constraints (`min-h-[932.83px]`, `min-h-[774.81px]`, `min-h-[649.77px]`) that stretched the section.
- Correction applied:
  1. Updated motion container width to `min-[1600px]:w-[calc(425%+5px)] w-[calc(500%+5px)] max-[767px]:w-max`, matching 42.5vw slide width on large desktop and 50vw on medium desktop, while preserving `w-max` on mobile.
  2. Aligned image aspect ratio classes to match live responsive rules: `pb-[70%] min-[992px]:pb-[56.25%] min-[1200px]:pb-[68%] min-[1600px]:pb-[56.25%]`.
  3. Scoped card title styling to `max-[1380px]:p-5 max-[1380px]:text-2xl` and arrow to `max-[1380px]:right-5`, and subtitle to `max-[1199px]:text-[11px]`.
  4. Removed artificial section min-heights, leaving natural padding `pt-[60px] pb-[52px]` (desktop) and `py-[30px]` (mobile).
  5. Added `(prefers-reduced-motion: reduce)` in `selected-work-section.module.css`.
- Responsive Verification:
  - 1843px (Desktop >= 1600px): Local card width `777.39px` (Live `777px`), card height `544.6px` (Live `544.4px`), section height `911.6px` (Live `918.4px`).
  - 1440px (Desktop): Local card width `713px` (Live `713px`), card height `592.17px` (Live `592.17px`), section height `959.17px` (Live `966.17px`).
  - 1199px: Local card width `592.5px` (Live `592px`), card height `433.4px` (Live `427.98px`), section height `849.4px`.
  - 991px (Tablet): Local card width `488.5px` (Live `488px`), card height `436.9px` (Live `436.58px`), section height `848.9px`.
  - 768px (Tablet): Local section height `770.88px` (Live `769.88px` — 1px difference).
  - 390px (Mobile): Local section height `722.58px` (Live `719.97px` — 2.6px difference), card width `435px` with 50px peek.
- Captured screenshots:
  - Local fixed desktop: `scratch/local-fixed-1843.png`
  - Live desktop: `scratch/live-selected-work.png`
  - Local tablet: `scratch/local-768.png`
  - Live tablet: `scratch/live-768.png`
  - Local mobile: `scratch/local-390.png`
  - Live mobile: `scratch/live-390.png`

- Owner-supplied screenshot: https://prnt.sc/q6oXa8RRu0Fp highlighting the accordion card subtitle/summary and expanded accordion body paragraph.
- Live sources inspected: `https://www.dynamicdreamz.com/` rendered DOM and computed styles from stylesheet (`.our_expertise_shopify.ct-solutions-sec`).
- Live computed styles:
  - Accordion Card Subtitle (`.accrodion-title span`):
    - Font Family: `neue_montrealmedium, sans-serif` (`font-display`)
    - Color: `#282828` (`text-ink`)
    - Font Size: `14px` (`text-sm`), mobile: `13px` (`max-[767px]:text-[13px]`)
    - Font Weight: `500` (`font-medium`)
    - Line Height: `100%` (`leading-none`), mobile: `normal` (`max-[767px]:leading-normal`)
    - Margin Top: `10px` (`mt-2.5`), mobile: `5px` (`max-[767px]:mt-[5px]`)
  - Accordion Body Paragraph (`.accrodion-content p`):
    - Font Family: `Montserrat, sans-serif` (`font-sans`)
    - Color: `#535353` (`text-muted`)
    - Font Size: `14px` (`text-sm`)
    - Font Weight: `400` (`font-normal`)
    - Line Height: `24px` (`leading-6`)
    - Margin Bottom: `15px` (`mb-[15px]`)
  - Card padding & spacing:
    - Card padding: `20px` (`p-5`), mobile: `15px` (`max-[767px]:p-[15px]`)
    - Content top margin & padding: `16px` (`pt-4`), mobile: `10px` (`max-[767px]:pt-2.5`)
- Root cause: Local component used `font-sans text-sm leading-none font-medium text-muted` for subtitle (wrong font family and color #535353 instead of #282828) and `text-sm leading-[1.8] font-medium text-muted` for body (weight 500 instead of 400, leading 25.2px instead of 24px).
- Correction applied:
  - Updated subtitle to `font-display text-sm leading-none font-medium text-ink max-[767px]:mt-[5px] max-[767px]:text-[13px] max-[767px]:leading-normal`.
  - Updated body paragraph to `text-sm leading-6 font-normal text-muted mb-[15px]`.
  - Added responsive mobile padding `max-[767px]:p-[15px]` and `max-[767px]:pt-2.5` to match live responsive CSS.

## 2026-08-26 Homepage FAQ Question Typography

- Owner-supplied split screenshot shows the local FAQ question smaller than the
  current live question at the same responsive layout.
- Live CSS: Montreal Medium 500, 20px/120% desktop, 18px/26px at 1199px, and
  16px/24px at 767px.
- Root cause: `FaqSection`'s generic question override reduced the shared
  `FaqAccordion` typography to 18px desktop and 16px at 1199px, overriding the
  otherwise correct accordion defaults.
- Scope: apply the live scale through the existing homepage FAQ prop; do not
  change other shared FAQ consumers, copy, spacing, icons, or interactions.

## 2026-08-26 Our Partners Heading Typography

- Current live selectors inspected: `.our_partners .section_title h2` in
  `style.css?ver=7.1`, `shopify-premium-partner.css`, and its responsive CSS.
- Desktop: standalone Montreal Medium, weight 400, 43px/1.2, zero tracking,
  `#282828`, maximum width 540px, and zero base margin.
- Responsive: 35px/48.475px at 1199px, 30px/40px at 991px, and
  24px/33.24px at 767px. The heading is static with no interaction or animation
  states.
- Scope: Our Partners only; visible wording, logo marquees, spacing, and Latest
  Blogs remain unchanged in this edit.

## 2026-08-26 Testimonial Navigation Clearance

- Owner-supplied desktop reference shows the 56px previous/next controls in a
  dedicated right-aligned row below the section description and 19px above the
  testimonial card.
- Current local implementation absolutely positioned the controls above the
  carousel, allowing wrapped header text to occupy the same space.
- Preserve the live 56px controls, 14px gap, desktop right alignment, hover and
  disabled states, and the existing mobile 42px centered controls below the
  carousel.
- Implementation target: normal-flow ordering above the card on desktop and
  below the card at 991px and narrower, eliminating text overlap at every
  content height.

## 2026-08-26 Shopify Plus Agency Counter Typography

| Check | Result |
| --- | --- |
| Comparison supplied by owner | Split desktop screenshot: local on the left and current live homepage on the right; local counter numerals visibly render with a lighter/different face |
| Live sources inspected | Current rendered homepage, `style.css?ver=7.1`, `shopify-premium-partner.css?ver=1787720958`, and `shopify-premium-partner-media.css?ver=1787723456` |
| Live font setup | Four standalone Neue Montreal families (`neue_montreallight`, `neue_montrealregular`, `neue_montrealmedium`, and `neue_montrealbold`) rather than one weight-mapped family |
| Live counter value | `.counter-item h3`: standalone Montreal Medium family inherited from global `h3`, scoped `font-weight: 600`; local migration retains 35px/1.25 and the 30px 991px treatment |
| Interaction and animation | Static counter typography; no hover, focus, open, or animation state affects the font |
| Breakpoints checked | Live CSS at 1199px, 991px, and 767px; supplied comparison represents desktop |
| Implemented correction | Registered every local WOFF2 as its own Next.js font family, matching the live family isolation; applied Montreal Medium with weight 600 to the counter value |
| Local verification | Existing Turbopack dev server compiled and served the homepage with four distinct generated Neue Montreal variables and the scoped `font-montreal-medium` counter utility |
| Remaining difference | A new local desktop screenshot/overlay was not captured in this environment; use the owner-supplied split comparison as the next visual recheck baseline |

## 2026-08-26 Shared H2 Primitive

- Live reference: owner-supplied `.h2, h2` and responsive CSS from the current
  homepage task; the existing 2026-08-24 desktop, tablet, and mobile captures
  remain the visual baseline.
- Local source inspected: all 117 current `h2` usages, existing section-heading
  components, `src/app/globals.css`, the root font setup, and the homepage
  Shopify Plus agency section.
- Breakpoints: 35px/1.4 by default, 30px at 1199px and below, and
  24px/33.24px with -0.48px tracking at 767px and below.
- Interaction states and animations: headings are static; no hover, focus, or
  animation behavior changes.
- Implementation scope: introduce a Tailwind-only server-rendered heading
  primitive with inverse-color and fully custom `unstyled` escape hatches, then
  adopt it across the standard homepage H2s. Non-homepage intentional 43–50px,
  bold, centered, and decorated heading variants remain unchanged until their
  own live pages are reviewed.
- Local verification capture: `/tmp/dynamicdreamz-home-top-1850x900.png`.
  Header, hero geometry, typography, CTA row, proof badges, gradient, and first
  fold align with the supplied 1850px-wide full-page reference.
- Remaining differences: the homepage headings now match the supplied desktop,
  1199px, and mobile H2 rules. Existing section-specific width, margin,
  alignment, and inverse-color treatments are retained.

## 2026-08-25 Homepage Client Logo Monochrome Parity

Owner-supplied desktop screenshots were compared for the homepage
`Partnering with Ambitious Brands` section. The live reference uses monochrome
logo artwork, while the local capture showed brand colors in Royce Chocolate,
SriSri Tattva, Perfect Locks, Supertails, and PopClub.

- Live screenshot: owner-supplied 1515px-wide desktop capture in the task.
- Local screenshot: owner-supplied 1831px-wide desktop capture in the task.
- Sources inspected: `src/content/home.ts`, `BrandPartnersSection`,
  `ClientLogo`, all canonical SVGs under `public/assets/clients/`, and the
  previously buffered live SVGs under `scratch/case-studies-brands/`.
- Responsive breakpoints: the same canonical image sources feed the desktop
  grid, tablet grid, and three mobile marquee rows, so the correction applies
  consistently at all breakpoints without layout changes.
- Interaction states: client logos are static on desktop; mobile marquee
  movement and reduced-motion behavior remain unchanged.
- Animation timings: no timing changes; existing mobile logo-row animation is
  retained.
- Implementation: replace the five colored SVG artworks with their monochrome
  image variants. No CSS filter, grayscale utility, opacity treatment, or
  runtime dependency is used.
- Remaining differences in scope: none expected for logo color; spacing and
  section geometry are intentionally untouched by this asset-only correction.

## 2026-08-24 Homepage Live Refresh Capture

Live URL: `https://www.dynamicdreamz.com/`
Local route: `http://127.0.0.1:3100/`
Date checked: 2026-08-24
Browser: Google Chrome 140 headless capture

### Screenshots

| Viewport | Live screenshot | Local before update | Local after update |
| --- | --- | --- | --- |
| 1440x900 | `scratch/home-live/live-1440x900.png` | `scratch/home-live/local-before-1440x900.png` | `scratch/home-live/local-after-1440x900.png` |
| 768x1024 | `scratch/home-live/live-768x1024.png` | `scratch/home-live/local-before-768x1024.png` | `scratch/home-live/local-after-768x1024.png` |
| 390x844 | `scratch/home-live/live-390x844.png` | `scratch/home-live/local-before-390x844.png` | `scratch/home-live/local-after-390x844.png` |

### Sources inspected

- Live View Page Source: `scratch/home-live/index.html`
- Live styles: `scratch/home-live/style.css`, `default-media.css`, `shopify-premium-partner.css`, `shopify-premium-partner-media.css`, `header.css`, and `footer.css`
- Live scripts: `scratch/home-live/shopify-premium-partner.js` and `custom.js`
- Existing local homepage components, shared navigation, `ButtonLink`, `FaqSection`, `FaqAccordion`, blog cards, and all matching assets under `public/assets/**`

### Refresh delta

- Hero remains the same content and viewport geometry, with live proof badges retained from the canonical local SVG assets.
- The former visible `Globally Trusted Web & App Development Agency` overview is no longer rendered by the live page.
- The live page adds a green-tinted white-label agency banner after client brands.
- The live page also renders `A Shopify Plus Agency Built for Complex Ecommerce Growth`
  between client brands and the white-label banner, with the Why Dynamic Dreamz
  eyebrow, two supporting paragraphs, four proof counters, and an autoplaying
  project video.
- The live page replaces the previous expertise accordion with `Commerce & technology solutions.` and eight card-style service accordions split across two columns on desktop and one column on mobile.
- The live page adds `What Brands and Agencies Usually Want to Know` with six FAQ items before the footer.
- Blog cards now use the August 11 2026 CRO checklist, April 8 2026 Shopify Plus global brands, and February 18 2026 Shopify migration challenge articles.

### Responsive and interaction observations

- Desktop: commerce accordions use two columns; the first Shopify Plus item is open with a pale green surface. FAQ uses a left heading/description column and a right accordion column on wide screens.
- Tablet/mobile: both accordion groups collapse to one column; service cards retain rounded borders, while FAQ rows use full-width separators. The white-label CTA stays below the copy on mobile.
- Accordion behavior: one open item at a time, first item open on initial render, keyboard-focusable controls, and plus/close icon state changes.
- Motion: live client/partner marquees, selected-work rail, testimonial carousel, and existing local reduced-motion handling remain in scope; the new service/FAQ panels use short height transitions only.

### Intentional implementation differences

- Live external article and service URLs are represented by slashless local migration-intent paths, per repository URL policy.
- The new sections use existing server-rendered containers, `ButtonLink`, `FaqAccordion`, and local assets rather than copying the legacy stylesheet or hotlinking production files.

### 2026-08-24 Updated Local Capture Results

- First viewport captures at 1440x900, 768x1024, and 390x844 show the current
  hero, header variants, CTA wrapping, proof grid, and contact widget without
  clipping or horizontal overflow.
- `local-white-label-1440x900.png` confirms the green agency banner and its
  desktop CTA placement before the commerce heading.
- `local-agency-1440x900.png` and `local-agency-390x844.png` confirm the restored
  Shopify Plus agency section, responsive counter cards, and project video. At
  1440px the local section measures 817px versus 818px in the live runtime;
  the following white-label section starts at the corresponding position.
- `local-commerce-1440x900.png` confirms the live desktop item grouping: items
  1-4 in the left column and items 5-8 in the right column. The 390x844 capture
  confirms the single-column mobile layout and the open first panel.
- `local-faq-1440x900.png` and `local-faq-390x844.png` confirm the blog-to-FAQ
  transition and responsive FAQ section. The FAQ accordion is keyboard
  focusable, opens one item at a time, and exposes `aria-expanded` state.
- A CDP interaction check confirmed the first commerce panel is open by
  default and selecting item 5 closes item 1 while opening item 5.
- Remaining difference: lower-section captures include the fixed contact
  widget and scroll-position context, matching the local shared shell.

Live URL: `https://www.dynamicdreamz.com/`
Local route: `/`
Date checked: 2026-08-13
Browser: Google Chrome 151.0.7922.71 (headless capture)

## 2026-08-14 Homepage Hero Content Parity

The current live hero HTML, `style.css`, `shopify-premium-partner.css`, and
`shopify-premium-partner-media.css` were inspected again before aligning the
full hero content.

- Badge copy: `ESTABLISHED IN 2006` and `SHOPIFY PLATINUM PARTNER`.
- Badge sizing/spacing: 14px desktop, 13px tablet, 12px mobile; 22px space
  below; the two labels stack with a 10px gap below 641px and the separator dot
  is hidden there.
- Heading: 56px/114% with 20px bottom space on desktop, 38px/48px on tablet,
  and 27px/37px with 16px bottom space on mobile.
- Description: maximum width 940px; 16px/28px with 30px bottom space on
  desktop, 16px/24px on tablet, and 14px/24px with 24px bottom space on mobile.
- Buttons: live labels, 15px horizontal offset on non-mobile layouts, stacked
  with a 14px gap on mobile, and the existing 600ms shared hover treatment.
- Proof row: original image dimensions, 35px desktop item gutters, 20px tablet
  gutters, a 60px top offset, and the live two-by-two mobile separator grid.
- Mobile container gutter: 16px.
- Copy, links, alt text, and section order match the current live source.
- Direct comparison captures: live and local at 1440x900, 768x1024, and
  390x844 are stored under `/tmp/dd-live-hero-content-*.png` and
  `/tmp/dd-home-hero-content-*.png`; hero text, wrapping, controls, proof grid,
  section height, and spacing match at all three sizes.

## 2026-08-14 Homepage Hero Height Parity

The current live homepage and its public `shopify-premium-partner.css` and
`shopify-premium-partner-media.css` files were rechecked on 2026-08-14 before
editing the hero geometry.

- Live desktop section: `height: 100vh`, flex-centered in both axes, with
  `padding-top: 90px` for the fixed header.
- Live tablet/mobile section at `max-width: 991px`: retains the viewport height
  and centering, with `padding-top: 64px`.
- Previous local difference: content-driven section height with container top
  padding of 175px desktop, 135px tablet, and 95px mobile.
- Interaction and animation states: none are changed by this geometry update.
- Local screenshots: `/tmp/dd-home-hero-1440x900.png`,
  `/tmp/dd-home-hero-768x1024.png`, and
  `/tmp/dd-home-hero-390x844.png`.
- Result: the hero occupies exactly one viewport at all three required sizes;
  its content remains centered and fully visible without clipping or horizontal
  overflow.
- Remaining differences: none for the requested hero-height geometry.

## 2026-08-14 Services Menu CTA Hover Fix

The desktop Services mega-menu CTA was checked frame by frame against the
supplied 5.68-second live-site recording, `Shopify Plus Agency & Shopify
Platinum Partner _ Dynamic Dreamz.mp4`, and the supplied local Chrome
screenshot at `localhost:3000`.

- Sources inspected: the supplied recording,
  `src/components/layout/desktop-navigation.tsx`, and the shared
  `src/components/ui/button-link.tsx` variant, border, fill, and transition
  states.
- Affected breakpoint: desktop navigation at `min-width: 992px`; the recording
  is 1838px wide.
- Default state: white pill fill and border with dark-gray uppercase text.
- Hover state: the white fill translates to the right, revealing the card's
  green gradient while the border and text remain white.
- Pointer-leave state: the white fill returns from the right and the text
  returns to dark gray.
- Animation timing: the local shared 600ms color and transform transition is
  retained to match the recorded movement.
- Keyboard state: focus-visible mirrors the completed hover appearance.
- Remaining differences: none for the reported CTA hover effect.

## 2026-08-13 Live-UI Parity Rollback

The project owner requested that every visible UI change that differs from the
live site be reverted. The live page and View Page Source were checked again on
2026-08-13 before editing. The rollback restores the live hero H1 and answer,
the named AI-tools paragraph, and any later visible copy divergence while
preserving nonvisual metadata, schema, local-asset, accessibility, and
reduced-motion improvements.

| Viewport | Current live screenshot | Post-rollback local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-parity-live-home-1440x900.png` | `/tmp/dd-parity-local-home-1440x900.png` | passed; live hero wording and geometry restored |
| 768x1024 | `/tmp/dd-parity-live-home-768x1024.png` | `/tmp/dd-parity-local-home-768x1024.png` | passed; no copy or CTA overflow |
| 390x844 | `/tmp/dd-parity-live-home-390x844.png` | `/tmp/dd-parity-local-home-390x844.png` | passed; live mobile wrapping restored |

Current live source: `/tmp/dd-live-home-20260813.html`. The linked live
`style.css`, `default-media.css`, homepage CSS, and homepage/custom JavaScript
remain the governing style and interaction sources already enumerated below.
Default, responsive, hover/focus, header-scroll, accordion, carousel, marquee,
and reduced-motion states were rechecked after the rollback. The current live
August 11 article cards were synchronized locally with project-owned images.
Nonvisual Organization wording and explicit content dates remain intentional.

## 2026-08-12 Scope Revision

The project owner confirmed that planned-but-unbuilt route destinations may be
ignored while the migration is under development. The temporary email,
same-page anchor, and Resources-route CTA substitutions from the first AEO/GEO
pass will therefore be reverted to the migration/live-intent destinations.
The homepage service `OfferCatalog` will also be restored because its route
availability is governed by the same development-stage exception. These
reverts restore the captured pre-change CTA labels and geometry; no new visual
design is introduced.

## 2026-08-12 Proposal Captures (Superseded)

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-home-live-1440x900.png` | `/tmp/dd-home-local-final-1440x900.png` | passed; entity-first answer remains two lines and all hero controls/proof fit |
| 768x1024 | `/tmp/dd-home-live-768x1024.png` | `/tmp/dd-home-local-final-768x1024.png` | passed; answer remains three lines with no CTA or proof overflow |
| 390x844 | `/tmp/dd-home-live-390x844.png` | `/tmp/dd-home-local-final-390x844.png` | passed; answer wraps cleanly in the existing hero and two-by-two proof grid |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered homepage | Desktop, tablet, and mobile first-viewport layout; section order; H1 and hero answer; CTAs; proof badges; brand grid; expertise; work; testimonials; integrations; latest articles; header; footer; and contact widget |
| View Page Source captured at `/tmp/dynamicdreamz-home-source.html` | Title, meta description, robots, canonical, Open Graph/Twitter data, headings, visible copy, links, alt text, Yoast graph, separate rating schema, non-visible FAQ schema, service `OfferCatalog`, and source asset references |
| `style.css`, `default-media.css` | Shared Montserrat/Montreal typography, buttons, containers, header/footer behavior, colors, focus/hover treatment, and shared responsive rules |
| `shopify-premium-partner.css`, `shopify-premium-partner-media.css` | Hero geometry, 56px desktop H1, 18/28 hero copy, proof row, brand grid, overview, expertise columns, accordion, selected-work rail, testimonials, partner marquees, blog cards, and 1199/991/767/640/379/359px behavior |
| `shopify-premium-partner.js`, `custom.js` | Scroll-direction header state, accessible Slick tab-index repair, 600ms testimonial navigation, 12s linear work rail on desktop, swipe work rail on mobile, expertise accordion behavior, modal video behavior, and review animation triggers |

Temporary source files:

- `/tmp/dd-live-style.css`
- `/tmp/dd-live-media.css`
- `/tmp/dd-live-home.css`
- `/tmp/dd-live-home-media.css`
- `/tmp/dd-live-home.js`
- `/tmp/dd-live-custom.js`

## Captured Live Baseline

| Area | Live result |
| --- | --- |
| Hero H1 | `Shopify Plus & Enterprise Shopify Solutions` |
| Hero answer | States the DTC, B2B, agency, migration, integration, CRO, performance, and support audience/capabilities, but does not define Dynamic Dreamz by name or Shopify Partner status in one reusable sentence |
| Hero layout | 175px desktop top offset; warm gradient; centered 56px/114% H1 on desktop; 38px tablet and 27px mobile treatment; two CTAs; four proof profiles |
| Expertise AI paragraph | Names six AI tools but does not explain human review, security, QA, or delivery governance |
| Structured data | Separate ambiguous 4.6/103 rating node; Organization repeats that aggregate rating; non-visible FAQPage; Organization `OfferCatalog` contains service URLs that are not implemented locally; WebPage uses the live WordPress modification time |
| Section order | Hero, ambitious brands, global agency/stats, expertise, selected work, testimonials, partners, latest blogs |

## 2026-08-12 Proposed Homepage-Only Differences (Superseded)

| Difference | AEO/GEO reason | Visual impact |
| --- | --- | --- |
| Replace the hero answer with an entity-first statement naming Dynamic Dreamz, its Shopify Platinum Partner status, audiences, and core Shopify capabilities | Gives answer engines a concise visible definition that matches the Organization description and approved on-page proof | Copy-only change inside the existing hero paragraph; no new section or component |
| Reframe the expertise AI-tools paragraph around selective use, human review, security, and QA | Leads with buyer outcomes and governance instead of a tool list | Copy-only change inside the existing paragraph |
| Use an explicit homepage content-review date for `WebPage.dateModified` | Stops deployments from falsely appearing as substantive content updates | No visual impact |
| Retain the existing local omission of ambiguous rating and non-visible FAQ schema | Keeps structured data aligned with visible, source-specific proof and visible questions only | No visual impact |

## Interaction And Motion Baseline

| State | Live behavior | Local check after implementation |
| --- | --- | --- |
| Header scroll | Header switches direction classes after a 40px threshold | existing local direction-aware header remains unchanged and usable |
| Header/menu hover and open states | Desktop mega menus use hover-capable devices; mobile uses click/touch controls | existing shared desktop/mobile navigation remains unchanged; controls are keyboard focusable |
| Expertise accordion | First item is open; clicking another item closes the current panel and slides the selected panel | existing accessible accordion remains unchanged; first answer is visible in server HTML and controls expose ARIA state |
| Selected work | Continuous 12-second linear desktop rail; one-card mobile rail supports swipe and disables autoplay | existing scoped CSS rail remains animated on desktop and horizontally scrollable on mobile; CTA label and destination match the migration baseline |
| Testimonial | One slide, finite navigation, 600ms ease-in-out transition, disabled end arrows | existing accessible carousel remains unchanged; previous/next and video-dialog controls remain keyboard operable |
| Logo/integration motion | Infinite linear rows; direction alternates where applicable | existing scoped CSS marquee remains unchanged |
| Focus and reduced motion | Live has limited focus/reduced-motion handling; local improvements must remain usable and static when reduced motion is requested | existing local focus-visible and reduced-motion rules remain active; restored migration links retain the shared accessible button treatment |

## Responsive Baseline

- Desktop uses the full navigation, centered hero, horizontal CTA/proof rows,
  split content grids, and animated horizontal media rails.
- Tablet uses the mobile navigation, a 38px hero H1, stacked overview/expertise
  layouts, and a horizontal proof row.
- Mobile uses 16px gutters, a 27px hero H1, stacked hero CTAs, a two-by-two
  proof grid, single-column content, and touch-scrollable work cards.
- The captured live first viewport has no horizontal document overflow at the
  three required widths.

## Video Deferral Update (2026-09-02)

Captures inspected: live First View + View Page Source, local `home.ts`
media entries, local selected-work + shopify-plus-agency sections, Verdaccio
Layout Shift. Screenshots: local homepage before/after at `/` 1440/768/390;
poster images inspected in `public/assets/about/`, `public/assets/case-studies/`,
`public/assets/fashion/portfolio/`.

Change applied: the three below-the-fold autoplay MP4s
(`/assets/home/why-dynamic-dreamz.mp4` ~5.3 MB, `/assets/portfolio/sleepy-cat.mp4`
~3.6 MB, `/assets/portfolio/tropicfeel.mp4` ~6.3 MB) no longer download during
initial page load. A new reusable client component
`src/components/ui/deferred-autoplay-video.tsx` gates each MP4 behind an
IntersectionObserver:

- Server HTML renders the `<video>` with NO `<source>` child, so the initial
  HTML contains no eager MP4 request (verified: 5 `<video>` tags, 0
  `<source>` in `.next/server/app/index.html`).
- A static poster `<Image fill>` placeholder shows until the video approaches
  (default `rootMargin: 600px`); the `<source>` is attached only on approach,
  `play()` runs on viewport entry, `pause()` on exit.
- Existing semantics preserved: same classes (`absolute inset-0 h-full w-full
  object-cover`, selected-work `transition-transform duration-300
  group-hover/project:scale-[1.06]`), `muted loop playsInline`,
  `aria-hidden tabIndex={-1}`, `preload` values (`metadata` on shopify,
  `none` on selected work), and source `media="(min-width: 768px)"`.
- Selected-work videos intentionally never load below 768px (unchanged
  behavior); their posters use `max-[767px]:hidden` so mobile appearance is
  unchanged. The decorative duplicate `ProjectList` is kept and deferred
  identically.
- Posters reused from existing canonical assets (no new assets added):
  - `why-dynamic-dreamz.mp4` → `/assets/about/hero-video-poster.webp`
    (1140x492, ~38 KB, team collab). Best existing candidate; not confirmed
    to represent the montage content.
  - `sleepy-cat.mp4` → `/assets/case-studies/sleepycat.png` (571x405,
    SleepyCat migration storefront).
  - `tropicfeel.mp4` → `/assets/fashion/portfolio/tropicfeel-fashion.webp`
    (369x422, portrait 0.87 aspect in a ~1.47 landscape box; 782x892 default
    render size; object-cover crops). Only project-owned tropicfeel raster.
- Interaction state verified in DOM: video `preload` preserved; poster shown
  until first frame of attached source paints, then the poster is covered by
  the playing video (no removal flash).

Remaining differences: poster choices are the best existing canonical assets,
not pixel recreations of the first MP4 frames; please confirm the shopify
`why-dynamic-dreamz` poster and the tropicfeel portrait crop are acceptable, or
supply approved poster frames.

## Final Verification

- The live and updated local first viewport were visually inspected at 1440,
  768, and 390 pixels. The live H1, hero answer, CTA casing, and proof row are
  restored without overlap, clipping, horizontal scroll, or unintended section
  movement.
- The live AI-tools paragraph is restored. The current live August 11 article
  cards and their category links are synchronized locally with project-owned
  images.
- Rendered local source contains the expected canonical and metadata, one
  JSON-LD graph, stable Organization/WebSite/WebPage/BreadcrumbList nodes, and
  eleven supported testimonial `VideoObject` nodes.
- Local structured data contains the restored eight-offer `OfferCatalog` and no
  `aggregateRating` or non-visible `FAQPage`; `WebPage.datePublished` is
  `2025-12-12T09:55:48+00:00` and `dateModified` is the explicit homepage
  review date `2026-08-13T00:00:00+05:30`.
- `/request-quote/`, `/our-work/`, and `/blog/` were confirmed in rendered HTML.
  Their route availability is intentionally excluded during active migration
  and must be checked before launch. Lint and production-build results are
  recorded in the task handoff.

## Remaining Differences And Migration-Pending Items

| Difference | Reason | Status |
| --- | --- | --- |
| Entity-first hero and AI-governance proposals | The project owner requested live visual parity | reverted; retained only as deferred proposals in the content queue |
| Homepage, individual article, shared header/footer, and service destinations may still be unbuilt | The project owner approved ignoring planned-route availability during active migration | migration pending; mandatory prelaunch route audit |
| Organization OfferCatalog includes planned service destinations | The project owner requested restoration of route-related changes during active migration | retained for migration intent; revalidate before launch |
| Selected project cards still link to external storefronts | Internal evidence pages and approved outcomes are not available | deferred; link to internal case studies when built |
| Home displays `4500+` Shopify stores while Resources live story copy says `1000+` | Definitions, provenance, values, and approval date require leadership sign-off | blocked; live UI retained and ambiguous aggregate rating remains excluded |

## 2026-10-06 Homepage Hero Section & Header Audit

- Checked and synchronized all Header primary navigation menu links, labels, descriptions, and icons against the live site.
- Corrected icon filename and reference for AI Services: renamed `al-services.svg` to canonical `ai-services.svg`.
- Updated navigation icon dimensions in `src/data/navigation.ts` to match live SVG viewports: `shopify-plus-development` (20x24), `android-app-development` (20x22), `woocommerce-development` (25x21), and `magento-development` (21x24).
- Added missing legacy redirect for `/industries/sports-outdoors` to `/sports-outdoors` in `next.config.ts`.
- Verified Hero Section content paragraph (`homeAnswerSummary`): updated color from `text-muted/80` (80% opacity) to solid `text-muted` (`#535353`), retaining `font-medium` (font-weight 500) and Montserrat typography matching `.home_shopify_banner .inner_banner_content p` and user screenshot https://prnt.sc/IPcysSWXuXW3.
- Updated `loading="eager"` and `decoding="async"` attributes on the 4 proof logo images in the hero section (`HomeHeroSection`) and on the header logo (`SiteHeader`), matching the live site.
- Verification: `npm run check:urls`, `npm run check:component-content`, SHA-256 duplicate audit (0 duplicates), `npm run lint` (0 errors), and `npm run build` (success).
