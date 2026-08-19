# Request a Quote Page

Live URL: `https://www.dynamicdreamz.com/request-quote/`
Local route: `/request-quote`
Date checked: 2026-08-19
Browser/source: Google Chrome headless screenshots, rendered live page + View Page Source, live page-specific CSS (`assets/css/request-quote/main.css`, `assets/css/request-quote/media.css`, `assets/css/header-two.css`, `assets/css/default-media.css`, `style.css`), and local component/asset audit.

## Viewports

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `docs/visual-captures/source/request-quote/live-desktop-1440x900.png` | `docs/visual-captures/source/request-quote/local-desktop-1440x900.png` | recaptured and verified 2026-08-19 |
| 768x1024 | `docs/visual-captures/source/request-quote/live-tablet-768x1024.png` | `docs/visual-captures/source/request-quote/local-tablet-768x1024.png` | recaptured and verified 2026-08-19 |
| 390x844 | `docs/visual-captures/source/request-quote/live-mobile-390x844.png` | `docs/visual-captures/source/request-quote/local-mobile-390x844.png` | recaptured and verified 2026-08-19 |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page & View Page Source | Title (`Request Quote Today! \| Dynamic Dreamz`), meta description (140 chars), canonical (`https://www.dynamicdreamz.com/request-quote/`), Yoast JSON-LD (WebPage, ImageObject, BreadcrumbList, WebSite, Organization, FAQPage), HeaderTwo markup (logo + Go Back button with SVG arrow), Left column layout (H1 `Get a quote`, subtitle, 3 project counters: 5000+ Projects, 150+ Experts, 1100+ Happy Clients, 4 review badges: Shopify Platinum Partners, Clutch, Upwork Top Rated, Trustpilot, testimonial slider with 7 reviews), Right column layout (H2 `Let’s schedule a call or chat :)`, 7 form inputs: Full Name *, Email *, Mobile Phone, Company name, Website URL, Estimated Budget select, Brief about project textarea, Turnstile container, submit button `submit inquiry`) |
| Live `assets/css/header-two.css` | `.header-two` (padding: 30px 0, relative z-index: 1, ≤991px: padding 26.5px 0, ≥1300px: max-width 1360px padding 0 40px), `.header-row` flex space-between, `.go-back-btn .back_btn` font-size 16px font-weight 700 hover color `#d92128`, svg margin-right 8px hover fill `#d92128` |
| Live `assets/css/request-quote/main.css` | `.request-quote-sec` (overflow hidden, padding 0, margin-top -111px / full bleed container), `.request-quote-main .wrapper` flex, `.left-col` (50% width, padding 150px 46px 140px, full-bleed left background `#fbf7ed` via `:before`), `.right-col` (50% width, padding 150px 0 110px 46px), `.deliver-wrapper` (flex align-center, margin-top 50px), `.deliver-counter` (border-left 1px solid rgba(0,0,0,.08), padding-left 52px, margin-left 52px, first-child no border/margin), `.text-counter` (18px/600 uppercase color rgba(9,9,9,.63)), `.counter-text` (35px/700 color #000), `.review-wraper` (flex justify-between flex-wrap margin 50px 0), `.review-col` (width calc(25% - 5px)), `.review-link` (gradient border `#15c064` to `#00d1ff`, border-radius 9px, padding 1px, white inner box padding 19.5px 10px), `.testimonial-main` (gradient border radius 10px padding 1px), `.testimonial-content` (white bg, padding 32px 45px 32px 32px), `.testimonial-img` (48x48 rounded-full avatar), `.testimonial-name span` (18px/700 Montserrat), `.testimonial-info p` (16px/500/28px color `#535353`), form styling (labels 18px/600 color `#090909`, inputs border-radius 5px border 1.5px `#e4e4e4`, select with arrow, red submit button with hover slide) |
| Live `assets/css/request-quote/media.css` | ≤1299px: `.deliver-counter` padding-left 40px margin-left 40px; ≤1199px: left-col padding-right 30px, right-col padding-left 30px, deliver-wrapper margin-top 30px, deliver-counter 25px/25px, text-counter 16px, counter-text 30px, h2 29px, review-col calc(50% - 5px) with row-gap 10px, review-link height 76px, testimonial-content padding 20px; ≤991px: wrapper flex-direction column-reverse, right-col width 100% padding-left 0 padding-bottom 50px, left-col width 100% padding-top 50px padding-bottom 100px padding-right 0 with 100vw centered background, form-group margin-bottom 20px; ≤767px: col-md-6 100%, review-col 100% margin-bottom 10px, deliver-counter 15px/15px, text-counter 14px, counter-text 26px, left-col p 14px/28px; ≤359px: h2 24px, counter-text 24px, text-counter 12px |
| Live typography | Google Fonts loads Montserrat normal/italic variable weights `100 900`. The page H1 uses the global `.h2` contract and the form H2 uses the same 35px/700 Montserrat treatment with `48.475px` line-height and `-0.7px` letter spacing. Labels, controls, counters, and body copy inherit Montserrat. |
| Local assets reused | Reused canonical project assets: 7 WebP avatars from `public/assets/testimonials/` (`alec-torelli.webp`, `william-petz.webp`, `william-st-baker.webp`, `kerri-imrie.webp`, `brandon.webp`, `shari-leidich.webp`, `rebekah-wymer.webp`); 3 award badges from `public/assets/awards/` (`shopify-platinum-partner.svg`, `clutch-rating.svg`, `upwork-top-rated-plus.svg`); 1 review badge from `public/assets/reviews/` (`trustpilot-4-9-trustscore.svg`); local icons from `public/assets/request-quote/icons/` (`quote-icon.svg`, `request-star.svg`, `right-arrow.svg`, `select-arrow.svg`). Shared `Container` primitive reused from `src/components/ui/container.tsx`. |

## Section Inventory

| Section | Live Behavior & Styling | Local Implementation |
| --- | --- | --- |
| HeaderTwo | Static header, container max-w-[1360px], logo left, "Go back" button right with history.back() and hover transition to `#d92128` | Local `HeaderTwo` component; hide default `SiteHeader` on `data-page="request-quote"` |
| Left Col: Hero & Counters | H1 `Get a quote`, subtitle, 3 counters (`5000+ Projects`, `150+ Experts`, `1100+ Happy Clients`), full-bleed `#fbf7ed` background | Server-rendered component with responsive counter layout |
| Left Col: Review Badges | 4 badges (Shopify Platinum Partners, Clutch, Upwork Top Rated, Trustpilot) in 4-col grid (2-col ≤1199px, 1-col ≤767px) with green-to-cyan gradient border | Responsive badges grid with project-owned local SVGs and `target="_blank"` `rel="nofollow"` links |
| Left Col: Testimonials Slider | 7 client reviews in slick carousel with white cards, gradient border, 48px avatar, 5 stars, quote, and next/prev arrows | Client-side `QuoteTestimonialCarousel` using `react-slick` with responsive settings and local avatars |
| Right Col: Schedule Header | H2 `Let’s schedule a call or chat :)` | Server-rendered heading matching exact typography |
| Right Col: Form | 7 inputs (Full Name *, Email *, Mobile Phone, Company name, Website URL, Estimated Budget select, Brief about project textarea) + submit button `submit inquiry` + attribution fields + honeypot | Client `QuoteForm` using Server Action with full field validation, attribution tracking, and error/success states |

## Post-Merge Responsive Re-audit (2026-08-19)

The prior local screenshots predate the current merged component tree. Fresh
isolated Chrome captures were compared with the saved live captures at
1440x900, 768x1024, and 390x844 before this edit.

| Viewport | Current difference | Planned parity correction |
| --- | --- | --- |
| 1440x900 | Header/content begins about 9px too high; the subtitle and all following left-column content are another 16px too high; idle form status space leaves the submit button about 30px too low. | Increase only the desktop HeaderTwo block height, restore the live 24px H1-to-subtitle spacing, and collapse idle status space. |
| 768x1024 | Heading position matches; 49px controls and 20px row margins accumulate roughly 10px excess per two-column row; the cream left column starts 36px too low. | Use 44px controls and 15px row margins only at the tablet layout, collapse idle status space, and preserve the live left-column start with the measured right-column bottom padding. |
| 390x844 | Header matches; form heading starts about 25px too high, while the first input needs only about 9px downward movement; controls are about 5px too tall. | Add 25px mobile top space, reduce only the mobile heading bottom margin by 15px, and use 44px controls while retaining 20px stacked field spacing. |

- Current testimonial audit: the canonical 60x60 Alec thumbnail is a studio
  portrait, while the live first testimonial uses the striped-shirt poker-table
  crop. Restore the exact project-owned 573x324 asset from repository history
  under the descriptive neutral path
  `public/assets/testimonials/alec-torelli-striped-shirt.webp`.
- Interaction states retained: Go Back, external proof links, select control,
  field focus, form validation/status, submit pending state, testimonial
  previous/next arrows, and responsive slider peek.
- The live endpoint initially returned HTTP 429, then loaded successfully for a
  fresh source and stylesheet audit. The shipped implementation continues to
  use only the matching project-owned local Montserrat variable font.

### Re-audit result

- Desktop major anchors now match the saved live capture: H1 at 149px,
  counters at 297px, proof cards at 413px, testimonial at 549px, form heading at
  149px, textarea at 610px, and submit control within 4px of the live position.
- Tablet heading, labels, submit button, and cream-background transition match;
  controls and textarea are within approximately 1–3px of the live capture.
- Mobile header and heading match; stacked labels and controls remain within
  approximately 0–3px at most anchors without cumulative vertical drift.
- The local Montserrat font is registered across its real `100 900` variable
  axis and exposed as a Tailwind font token. This fixes headings that previously
  fell through to the global Neue Montreal heading rule. Final captures verify
  the Montserrat letterforms, 700 weight, line-height, and letter spacing.
- Final local screenshots replace the stale pre-merge captures listed above.
- No runtime dependency on the live site was introduced, and the asset hash
  audit reports zero duplicate groups.

## Testimonial Equal-height Follow-up (2026-08-19)

- Local state inspected: testimonial copy length changes the active card height
  because the Slick slide wrapper does not currently inherit the tallest track
  height, even though the gradient and white card already use `h-full`.
- Required behavior: all seven testimonial slides retain one shared height based
  on the tallest item at every responsive width; carousel arrows, padding,
  mobile peek, typography, and content remain unchanged.
- Implementation: keep Slick's track as a flex row, allow each `.slick-slide`
  to stretch with `height: auto`, and propagate `height: 100%` through Slick's
  generated inner wrapper to the existing card.
- Interaction states to verify: initial slide, previous/next navigation, longest
  and shortest testimonial items, desktop and mobile peek layout.
- Attached 375px mobile reference rechecked: the carousel keeps the live 40px
  right-side Slick padding and `-16px` list margin to reveal the next card. At
  widths up to 575px, cards now have a 285px minimum height and the flex track
  explicitly stretches every slide; longer content may still grow rather than
  clip. The 10px inter-card gap, 20px inner padding, and arrow positions are
  unchanged.
- Follow-up: applying the mobile minimum height only to the gradient wrapper
  exposed unused gradient space below shorter white panels. The gradient wrapper
  and white panel now form a flex pair, so the inner panel fills the complete
  equal-height card and leaves only the intended 1px gradient border visible.
- Mobile width follow-up: the attached reference shows a roughly 318px primary
  card at a 375px viewport plus a 30px preview of the following card. Slick's
  list padding did not reduce the generated slide width reliably in the local
  build, and fractional `slidesToShow` continued to use the full local track
  width. The mobile Slick viewport is now explicitly 25px narrower with visible
  overflow. Slick therefore calculates a 328px slide wrapper at 375px: after
  the existing 5px side padding, the bordered card is about 318px wide and the
  following card starts near 345px, matching the live screenshot. The 10px gap,
  285px minimum height, equal-height stretching, and controls remain intact.
- Clipping follow-up: the corrected primary card width was visible locally, but
  Slick's packaged `.slick-list { overflow: hidden }` continued clipping the
  next slide. Mobile list overflow is now explicitly forced visible while the
  page-level horizontal clip remains responsible for the browser-edge cutoff.
- Final mobile render verification at 375px confirmed the correct 318px card and
  right-side next-slide preview. Because infinite Slick also exposed 5px of its
  previous clone at the far left, the list uses a directional clip inset: 5px
  is clipped on the left while right overflow remains available to the browser
  edge, matching the live screenshot.

## Proof-logo Equal-height Follow-up (2026-08-19)

- The four source logos have different intrinsic aspect ratios and heights
  (32–43px). Allowing those intrinsic heights to size each link produced unequal
  proof-card heights at desktop widths.
- Each proof link now uses the live maximum card height of 84px on desktop and
  the existing 76px responsive height below 1200px. Logos remain undistorted in
  a shared 44px-high contain area, so all highlighted boxes align without
  stretching brand artwork.
- Logo-element correction: `max-height: 44px` still allowed shorter intrinsic
  SVGs to render at 32–43px. Every proof image now has an explicit 44px element
  height with automatic width and `object-contain`, matching the live row's
  shared logo height while preserving each mark's aspect ratio.
