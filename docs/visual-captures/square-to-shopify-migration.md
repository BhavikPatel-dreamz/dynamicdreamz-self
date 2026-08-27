# Visual Capture: Square to Shopify Migration (`/square-to-shopify-migration`)

- **Live URL**: `https://www.dynamicdreamz.com/square-to-shopify-migration/`
- **Local Route**: `/square-to-shopify-migration`
- **Date Checked**: 2026-08-20
- **Viewports Inspected**: Desktop (1440x900), Tablet (768x1024), Mobile (390x844)

---

## 1. Structure and Section Sequence (Exact Live Match)

1. **Header**: Site header with navigation and "Get a Quote" button (`site-header dd-new`).
2. **Hero Section (`inner-hero-sec woocommerce-to-shopify`)**:
   - Reused shared component: `ServiceHeroSection` with `variant="split"`.
   - Left column (58% desktop, 100% mobile): H1 (`Square to Shopify Migration Service`), description paragraph, "Request a Quote" CTA button (`/request-quote`).
   - Right column (40% desktop, 100% mobile): Service hero illustration (`square-to-shopify-migration-hero.svg`) + `review-wrap` featuring Clutch (132 reviews, 5.0 rating), Upwork (2000+ reviews, 5.0 rating), and GoodFirms (72 reviews, 5.0 rating) with star ratings and gradient borders.
3. **Client Logos Section (`our-client-sec`)**:
   - Reused shared component: `IndustryBrandsSection`.
   - Heading: `Trusted by Leading Brands`.
   - Infinite brand logo slider with 12 brands (Supertails, Eleven Eleven, Bella Vita, Bombay Shirt Company, Pop Club, Sri Sri Tattva, Tropicfeel, Renee, Royce Chocolate, Tego, Nekter, Rare Rabbit).
4. **Single Text Box Section (`single-text-box-sec`)**:
   - Reused shared component: `TextBoxSection`.
   - Background `#fbf7ed`, rounded 20px, padding 70px 55px (mobile 30px 20px).
   - Heading: `Why do Square to Shopify Migration?`.
   - Text explaining user-friendly interface, customization, app store, and scalability.
5. **Migration Process Section (`migration-process-step-sec px-0`)**:
   - Reused shared component: `MigrationProcessSection`.
   - Heading: `Square to Shopify Migration Process`.
   - 6 sequential steps with gradient `STEP` pill badges, gradient numbers `01`-`06`, titles, and descriptions.
6. **Testimonials Section (`happy-client-sec`)**:
   - Reused shared component: `HappyClientSection`.
   - Heading: `Our Customer's Testimonials`.
   - Description: `We have faith in our work, but what truly matters is the outcomes we serve our clients. <br> Happy clients make happy stories: Check out how our services empower them to evolve.`
   - Video testimonial cards carousel with modal playback.
7. **FAQ Section (`faq-sec`)**:
   - Reused shared component: `FaqSection`.
   - Heading: `Frequently Asked Questions`.
   - 6 accordion FAQ items (FAQ 1 includes bulleted list with bold labels; first item active by default).
8. **Footer (`site-footer`)**: Standard site footer (no extra CTA banner, matching live site).

---

## 2. Typography, Spacing, and Colors

- **Headings**:
  - H1: Montserrat, 50px / 66px bold (mobile: 30px / 40px), color `#282828`.
  - H2: Montserrat, 35px / 48.475px bold, letter-spacing `-0.7px` (mobile: 24px / 33px).
  - H3: Montserrat, 20px / 28px bold, color `#282828`.
- **Body**: Montserrat, 16px / 30.4px or 27.2px, color `#535353` / `#666666`.
- **Backgrounds**:
  - Hero & Process: `#ffffff`
  - Client Logos & Single Text Box: `#fbf7ed`
- **CTAs**:
  - Primary: `#e01936` with hover `#ba132b`, rounded-full, 16px font-bold, padding `15px 35px`.

---

## 3. Responsive Breakpoints

- **Desktop (1440px)**:
  - 2-column hero with 58% left copy and 40% right illustration + review badges.
  - Process steps with 75px left step counter badges and right content.
- **Tablet (768px - 991px)**:
  - Hero stacks illustration below text with centered alignment; review badges adjust to horizontal cards.
- **Mobile (< 768px)**:
  - Hero stacks vertically; review badges wrap into full-width cards.
  - Process step badges and numbers stack cleanly with left-to-right alignment.
  - Zero horizontal overflow.

---

## 4. Asset Mapping & Deduplication

- **Reused Canonical Assets**:
  - `cluth_review_services.svg` -> `/assets/reviews/clutch-wordmark.svg`
  - `upwork_review_services.svg` -> `/assets/reviews/upwork-wordmark.svg`
  - `goodfirms_review_services.svg` -> `/assets/reviews/goodfirms-wordmark.svg`
  - `star_icon_services.svg` -> `/assets/reviews/five-stars.svg`
  - 12 Client logos in `/assets/clients/`
- **Unique Assets Ingested**:
  - `/assets/square-to-shopify-migration/square-to-shopify-migration-hero.svg`

---

## 5. Testimonial Parity Update (2026-08-26)

- **References compared**: owner-supplied live desktop screenshot (1850px wide)
  and owner-supplied local desktop screenshot (1850px wide).
- **Live layout**: `CLIENT STORIES` eyebrow with a short red rule; heading and
  description in a two-column header; three equal testimonial cards inside the
  content container; 285px poster area; translucent black client badge with a
  red left border; compact quote panel; centered previous/next controls.
- **Local difference before editing**: centered one-column header; two oversized
  cards in a full-viewport drag rail; white pill identity badge; decorative quote
  mark in the poster; no visible previous/next controls.
- **Existing assets/components inspected**: both `HappyClientSection` export
  paths, `HorizontalDragScroll`, `VideoDialog`, all current section consumers,
  and the canonical testimonial poster assets under `public/assets/testimonials/`.
- **Implementation decision**: retain the shared server-rendered testimonial
  component and add a backward-compatible `client-stories` variant plus generic
  carousel controls. Scope the new variant and Shari-first item order to this
  route; preserve all other consumers.
- **Responsive targets**: three cards at 1200px and wider, two cards from 768px,
  one card below 768px; stacked heading copy below 992px; touch/drag, keyboard
  focus, dialog playback, disabled control state, and reduced-motion scrolling
  remain supported.
- **Motion/interaction**: previous/next buttons smooth-scroll one testimonial at
  a time, with motion disabled when the visitor requests reduced motion. The
  first previous button and final next button are disabled.
- **Post-edit captures**:
  `docs/visual-captures/source/square-to-shopify-migration/local-testimonial-parity-1850.png`,
  `local-testimonial-parity-768.png`, and `local-testimonial-parity-390.png`.
  The three/two/one-card layouts, stacked mobile header, disabled first control,
  poster crops, identity badges, quote panels, and absence of horizontal page
  overflow were visually checked. The owner-supplied live reference does not
  include tablet/mobile states, so those follow the established responsive
  component behavior rather than an exact live screenshot comparison.

## 6. Client Logo Section Alignment (2026-08-27)

- References compared: local `/square-to-shopify-migration` and the owner-approved
  local `/prestashop-to-shopify-migration` client sections.
- Difference found: both routes use `IndustryBrandsSection` and equivalent
  12-logo data, but PrestaShop selects the shared `compact` density while Square
  selected the default `standard` density.
- Approved target: follow the PrestaShop section UI at desktop, tablet, and
  mobile sizes.
- Planned correction: select `density="compact"` for Square, inheriting the same
  section height, background, padding, column sizing, logo rail, and responsive
  spacing without duplicating markup or styles.
- Interaction and animation: unchanged; the shared slider behavior remains the
  source of truth.

## 7. Client Story Card Shadow (2026-08-27)

- Owner-provided local screenshot inspected at desktop width: the testimonial
  card edges blend into the white section and the existing 6% shadow is barely
  visible.
- Root cause: the shadow is too faint and the horizontal scroll viewport clips
  part of its blur at the carousel boundary.
- Approved target: a visible but soft live-style card elevation on every edge,
  with no changes to card dimensions, copy, media, controls, or interaction.
- Planned correction: strengthen the `client-stories` card shadow and add
  balanced viewport padding/negative margin so the shadow has room to render.

### Follow-up correction

- Owner screenshot showed that balanced horizontal padding plus negative margin
  widened the scroll viewport, exposed the next card at the right edge, and
  allowed an internal vertical scrollbar.
- Final target: retain the original container width, provide shadow space only
  on the vertical axis, and explicitly hide vertical overflow. This preserves
  three exact desktop cards with no fourth-card sliver or inner scrollbar.

### Shadow visibility correction

- The 10% shadow remains visually lost against the white section in the owner's
  follow-up screenshot.
- Final treatment: use a clearly visible 22% soft elevation plus a subtle 5%
  edge ring. Keep the established vertical viewport space so the elevation is
  visible without restoring either scrollbar or next-card leakage.

## 8. Finite Client Story Carousel (2026-08-27)

- Owner references: first-position desktop state and requested disabled-arrow
  state shown in the second screenshot.
- Current issue: the extracted React Slick carousel uses `infinite: true` and
  does not track the active slide, so both controls remain enabled indefinitely.
- Approved behavior: no looping; disable Previous at the first slide and disable
  Next when the final item is visible.
- Responsive end calculation: three visible cards at 1200px+, two from 768px to
  1199px, and one below 768px.
- Keyboard, swipe, drag, focus, and reduced-motion behavior remain unchanged.

### Testimonial slider engine — react-slick (owl-equivalent) whole-slide scroll (2026-08-27)

- **Owner report**: on the local `client-stories` testimonial slider the cards
  rest at a half-card position when scrolled/dragged (owner wants a *whole* card
  to advance, never a half slide), and the first card cannot be brought fully
  back into view when scrolling right-to-left. Owner asked to use the live
  site's Owl-Carousel-style slider so the sliding snaps to whole slides.
- **Live reference**: `https://www.dynamicdreamz.com/square-to-shopify-migration/`
  drives this section with Owl Carousel (`.owl-carousel .owl-stage`) — an
  infinite loop that translates by whole item widths, so every slide (including
  the first) is always reachable in both directions and slides never rest on a
  fraction of a card.
- **Root cause of local artifact**: the `client-stories` variant reused the
  free-scroll `HorizontalDragScroll` drag rail. A CSS/drag rail lets the pointer
  release on any pixel offset (half-card rest) and, with per-card scroll math,
  the leading card could not be re-centered when scrolling back to the start.
- **Implementation decision**: replace the drag rail *only for the
  `client-stories` variant* with a small `"use client"` react-slick carousel
  (`HappyClientCarousel`), the project's already-installed, jQuery-free React
  equivalent of Owl Carousel (same engine already used by
  `quote-testimonials.tsx` and `client-logo-slider.tsx`; `slick.css` is imported
  once in `layout.tsx`). react-slick advances the `.slick-track` by whole slide
  widths and, with `swipeToSlide`, snaps drags to the nearest *whole* slide —
  fixing the half-slide rest. `infinite: true` loops the track so the first slide
  is always reachable scrolling either direction — fixing the unreachable-first
  bug. The 28 `classic`-variant consumers are untouched and keep the existing
  `HorizontalDragScroll`; the shared per-card markup is extracted to
  `HappyClientCard` so both paths render identical cards.
- **react-slick settings**: `slidesToShow: 3` (desktop) / `2` (≤1200px) / `1`
  (≤768px), `slidesToScroll: 1`, `swipeToSlide: true`, `infinite: true`,
  `arrows: false` with an external ref-driven previous/next control row
  (`slickPrev()` / `slickNext()`). Card gutter reproduces live exactly:
  slide inner wrapper `px-[15px]` (30px between cards) + `.happy-client-slider`
  `-mx-[15px]` only at ≥1400px (live `.happy-client-slider { margin: 0 -15px }`
  ≥1400px), and `pb-5` (20px) gives the soft card shadow room inside
  `.slick-list { overflow: hidden }` (live `.carousel-item { margin-bottom:20px }`).
  Equal-height cards via `[&_.slick-slide]:h-auto [&_.slick-slide>div]:h-full
  [&_.slick-track]:flex [&_.slick-track]:items-stretch`.
- **Intentional interaction change (called out)**: the previous/next controls
  now loop continuously (no disabled state at the first/last card), replacing the
  drag rail's `disabled` end states. This matches the live Owl Carousel's
  infinite behavior and is the direct fix for the "first slide not reachable"
  report; it is a deliberate deviation from the prior local disabled-end
  controls. All card copy, media, dimensions, poster crops, identity badges,
  quote panels, shadow value, and the 3/2/1 responsive card counts are unchanged.
- **Verification pending in this task**: dev-server screenshots at 1850 / 768 /
  390 confirming whole-slide advance on drag and arrows, first slide reachable
  looping right-to-left, 3/2/1 card counts, soft shadow rendering, VideoDialog
  modal playback from both original and cloned slides, and no console errors.

### Shadow overflow-clip fix — match live (2026-08-27)

- **Owner report**: the local card box-shadow is clipped (hard cut-off line) by
  the carousel's `overflow` boundary. Owner directed matching the live site
  exactly for this section's shadow/overflow treatment.
- **Live CSS inspected** (`wp-content/themes/dynamicdreamz/style.css?ver=7.1`,
  fetched to `scratch/`):
  - `body .happy-client-col { border-radius: 15px; border: 0; overflow: hidden;
    box-shadow: 0 4px 18px rgba(0,0,0,0.08); }` — a soft 8% elevation, no ring.
  - `.happy-client-sec .carousel-item { margin: 0 15px 20px 15px; }` — the 20px
    bottom margin gives the shadow room inside the owl `overflow: hidden` stage.
  - `.happy-client-slider { margin: 0 -15px; }` only at ≥1400px; `0` below, so
    the live outer side shadows also clip at common desktop widths.
- **Root cause of local artifact**: the prior local treatment over-strengthened
  the shadow to `0 12px 32px rgb(40 40 40 / 22%)` plus a `ring-1 ring-black/5`
  (~44px downward reach), while the `client-stories` scroll viewport only
  provided `py-4` (16px) under `overflow-y-hidden`. The strong shadow was hard
  clipped on the vertical (and outer horizontal) edges.
- **Correction applied**:
  1. Card shadow → live value `shadow-[0_4px_18px_rgb(0_0_0/8%)]`, ring removed
     (live uses `border: 0`, single soft shadow).
  2. Scroll viewport vertical room `py-4` → `py-6` (24px) so the soft shadow's
     22px bottom / 14px top reach renders fully inside `overflow-y-hidden`.
  Container width, horizontal padding, scroll-padding, card dimensions, copy,
  media, controls, and interaction are unchanged (no next-card leakage, no
  restored scrollbar). Scoped to the `client-stories` variant, which only the
  Square route consumes.

### Equal-height testimonial slides (2026-08-27)

- **Owner report**: on mobile the client-stories testimonial cards render at
  different heights while swiping; owner wants every slide the same height.
- **Root cause (corrected — it is CSS cascade layers, not specificity)**: the
  media area is a constant 285px (an `object-cover` poster filling
  `min-h-[285px]`), so card height varies only with quote length in the
  `client-review-text` panel. Earlier attempts added the canonical react-slick
  equal-height utilities (`.slick-track` flex + `items-stretch`, slide `h-auto`,
  slide flex-col, card `h-full`/`grow`) as **normal** Tailwind classes and
  reasoned they would win on specificity — e.g. `.happy-client-slider
  .slick-initialized .slick-slide` (0,3,0) over slick's `.slick-initialized
  .slick-slide` (0,2,0). They do win on specificity, and the compiled dev CSS
  confirms every rule is emitted — yet none took effect. The reason:
  `globals.css` uses `@import "tailwindcss"` (**Tailwind v4**), which places all
  utilities in `@layer utilities`, while `slick.css` is imported as a plain,
  **unlayered** stylesheet in `layout.tsx`. In the CSS cascade, **unlayered
  normal declarations beat layered normal declarations regardless of
  specificity**. So slick's unlayered `.slick-track{display:block}`,
  `.slick-initialized .slick-slide{display:block}`, and `.slick-slide{height:100%}`
  silently overrode the layered Tailwind utilities. The track never became flex,
  the slides never stretched, and the cards sat at their natural heights.
- **Fix (scoped to `client-stories` only)**: mark the equal-height utilities
  `!important` (Tailwind `!` modifier) so they beat the unlayered vendor rules —
  important declarations outrank normal declarations across all layers. On the
  `.happy-client-slider` container: `[&_.slick-track]:!flex
  [&_.slick-track]:!items-stretch [&_.slick-slide]:!h-auto
  [&_.slick-initialized_.slick-slide]:!flex
  [&_.slick-initialized_.slick-slide]:!flex-col [&_.slick-slide>div]:!h-full`.
  The prefix `!` form was chosen because the compiled dev CSS already proves this
  project emits it as `!important` (matching existing `!rounded-none` /
  `!overflow-visible` usages). With the track now a flex row with
  `align-items:stretch` and the slides `h-auto`, every slide stretches to the
  tallest; with each slide forced to a flex column, the card's existing `flex
  grow flex-col` fills it, media stays `shrink-0` (285px), and the quote panel
  `grow` absorbs the surplus. The `.slick-initialized`-scoped slide rules never
  fire before react-slick mounts (no flash of stacked slides). The `classic`
  variant (`HorizontalDragScroll`) and its consumers are untouched — every new
  utility lives only in `HappyClientCarousel`, which the Square route alone
  consumes.
- **General note for this codebase**: any future attempt to restyle a
  react-slick/slick element (`.slick-track`, `.slick-slide`, `.slick-list`,
  `.slick-dots`, etc.) with Tailwind must use the `!` modifier, because slick.css
  is unlayered and will otherwise win over layered utilities no matter the
  selector specificity.
- **Result**: all slides equalize to the tallest card at every breakpoint
  (3 / 2 / 1), with the media area fixed and the quote panel filling the rest.
  Card copy, media, poster crops, identity badges, shadow value, controls, and
  responsive counts are unchanged.
- **Verification pending in this task**: browser confirmation on the running
  dev server (equal card heights across slides at 1850 / 768 / 390, no clipped
  shadow, VideoDialog playback intact); `npm run lint` / `npm run build` remain
  blocked by the current tool outage.

### Testimonial quote glyph → brand SVG icon (2026-08-27)

- **Owner request (explicit, visible change approved in-task)**: in the
  client-stories testimonial cards, replace the CSS typographic quote glyph
  (`before:content-['“']`, rendered `#b64a4a` at 34px bold) with an
  owner-supplied brand-red double-quote SVG icon.
- **Asset workflow**: the supplied SVG (fill `#ad5151`, `viewBox 0 0 30 23`)
  was dedupe-checked against `public/assets/**` first — `find -iname "*quote*"`
  found only `request-quote/icons/quote-icon.svg` (a **gray `#808080` stroked**
  outline quote at `viewBox 0 0 52 46`, used as the classic-variant corner
  overlay — different color, weight, dimensions, and role), and path-signature
  greps (`M2.71 21.14`, `viewBox='0 0 30 23'`) returned nothing. Confirmed
  unique, so it was ingested cleanly (double-quoted markup, explicit
  `width`/`height`/`viewBox`, no XML preamble) to the canonical
  `public/assets/testimonials/quote-mark.svg`. No duplicate created (proven by
  content-signature search; full `sha256sum` sweep pending classifier recovery).
- **Implementation (scoped to `client-stories` only)**: swapped the text-glyph
  `::before` for a background-image `::before` on the quote `<p>` —
  `before:mr-2 before:inline-block before:h-[23px] before:w-[30px]
  before:align-top before:bg-[url('/assets/testimonials/quote-mark.svg')]
  before:bg-contain before:bg-no-repeat before:content-['']`. Kept as a
  server-rendered pseudo-element (no markup change, no client JS, no `<Image>`);
  the mark is decorative so no alt is required, matching the prior glyph. The
  `classic` variant keeps its own gray corner overlay and is untouched.
- **Verification pending in this task**: browser confirmation of the icon's
  size/position (`before:align-top` vertical alignment is the one value to
  eyeball) and crispness across breakpoints; `npm run lint` / `npm run build`
  remain blocked by the current tool outage.

## 8. FAQ Section — adopt the two-column "split" design (2026-08-27)

- **Owner request (explicit, visible change approved in-task)**: use the home
  page's FAQ design on `/square-to-shopify-migration`, with two deviations —
  **no description** under the heading, and the heading text **"Frequently Asked
  Questions"**. All other aspects of that design carry over as requested.
- **Deviation from live, called out**: the live Square page FAQ (`faq-sec`,
  documented in §1.7) is a single-column, center-aligned block. This change
  intentionally replaces it with the home FAQ's two-column layout (left heading
  column at 41%, right accordion at 57%), `circle-cross` expand icons,
  borderless underlined accordion rows, `font-display` heading, and the
  `#fafaf7` background with `py-[60px]` (mobile `py-10`). This is an owner-driven
  design decision, not a live-parity match.
- **Implementation decision (reuse + generalize, no duplication)**: the home FAQ
  design previously lived as a ~10-prop className preset hardcoded inside
  `HomeFaqSection`. Extracted that preset into a new generalized, content-
  decoupled `SplitFaqSection` (`src/components/sections/split-faq-section.tsx`)
  that takes `items` / `idPrefix` / optional `heading` / optional `description` /
  optional `className` / `sectionId`. `HomeFaqSection` now delegates to it with
  the home content — byte-identical output, so `home-page.tsx` is unchanged and
  the home FAQ is unaffected. The shared `FaqSection` primitive is untouched, so
  all its other consumers are unaffected.
- **How the two exceptions are honored**: `heading` is omitted on the Square
  usage, so `FaqSection` falls back to the shared default
  `sharedUiCopy.faq.heading` = "Frequently Asked Questions"; `description` is
  omitted, and `FaqSection` renders no description paragraph when it is absent.
  No new content string was introduced (the title reuses the existing shared
  constant). FAQ items (`squareFaqs`) and their order, and any FAQ schema derived
  from them, are unchanged — no AEO/GEO or copy impact.
- **Responsive targets**: two columns (heading left, accordion right) at ≥992px;
  stacks to a single column below 992px (`max-[991px]:flex-col`); heading scales
  35px → 30px (≤1199px) → 24px (≤767px); accordion trigger/panel padding tightens
  at ≤767px. Keyboard focus and accordion expand/collapse behavior inherit the
  shared `FaqAccordion` and are unchanged.
- **Verification pending in this task**: dev-server screenshots at 1440 / 768 /
  390 confirming the two-column layout, heading "Frequently Asked Questions" with
  no description, `#fafaf7` background block, circle-cross icons, first-item
  expand/collapse, single-column stack below 992px, and no horizontal overflow;
  plus a home-page FAQ screenshot confirming it is visually identical to before.
