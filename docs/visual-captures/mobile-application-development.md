# Mobile Application Development Visual Capture

- Live URL: `https://www.dynamicdreamz.com/mobile-application-development/`
- Local route: `/mobile-application-development`
- Checked: 2026-08-21
- Browser: Google Chrome headless

## Captures

Live references captured before UI implementation:

- `docs/visual-captures/mobile-application-development/live-desktop-1440x900.png`
- `docs/visual-captures/mobile-application-development/live-tablet-768x1024.png`
- `docs/visual-captures/mobile-application-development/live-mobile-390x844.png`
- Tall desktop and mobile renders were used for the full-section comparison;
  the migration-only scratch buffer was removed after verification.

Local references captured after implementation:

- `docs/visual-captures/mobile-application-development/local-desktop-1440x900.png`
- `docs/visual-captures/mobile-application-development/local-tablet-768x1024.png`
- `docs/visual-captures/mobile-application-development/local-mobile-390x844.png`

## Sources Inspected

- Rendered live page and View Page Source.
- `style.css?ver=7.1` for Montserrat typography, the 1360px desktop container,
  global 80px section rhythm, link/button behavior, and brand tokens.
- `assets/css/mobile-app/main.css?ver=1787234941` for page sections, cards,
  counters, accordion presentation, backgrounds, and desktop geometry.
- `assets/css/mobile-app/media.css?ver=1787234941` for 1199px, 1023px, 991px,
  767px, 575px, and 359px responsive states.
- `assets/js/mobile-app-page.js?ver=1787234941` for the delayed Slick logo
  carousel, viewport-triggered odometer values, single-open FAQ behavior, and
  website URL validation/quote redirect.
- `assets/js/odometer.min.js?ver=1787234941` and the accompanying two-second
  counter ribbon transition.

## Captured Visual System

- Typeface: Montserrat; body copy is #535353 and headings are #282828.
- Brand red: #ad5151; mint/cyan accent gradient: #15c064 to #00d1ff.
- Hero: #f7f5ef panel, 34px radius, 45px outer desktop margins, two equal
  columns, 85px vertical content padding, and a local product/app montage.
- Desktop H1/H2: 32px/42px and 700 weight; mobile: 22px/32px.
- Primary form: 50px white pill input with a red pill submit action; the submit
  action stacks below the input at 575px and narrower.
- Split sections: 50/50 by default; the swapped and panel variants use 45/55.
  All become one column below 992px.
- Timeline: three desktop columns, with two stacked cards on either side of a
  central photo; below 992px the columns stack, and below 768px each card is
  full width.
- Proof: four cards at desktop, two per row below 992px, and one per row below
  768px. Live values animate to 18+, 150+, 5000+, and 1100+ only after the
  section enters the viewport.
- FAQ: first item open initially, one item open at a time, plus/minus control,
  20px gaps, and 1.3px #efefef borders.

## Interaction And Motion

- Brand logo carousel starts after three seconds, advances one slide every two
  seconds, loops infinitely, has no controls, and does not pause on hover.
- Desktop/tablet/mobile visible logo counts are 5/3/2 through Slick settings.
- Quote forms reject invalid website-like values and redirect valid entries to
  `/request-quote?URL=<encoded-value>`.
- FAQ changes use the legacy jQuery slide transition; the local build should
  retain one-open-at-a-time keyboard-accessible disclosure behavior.
- Red buttons use a roughly 600ms sliding fill hover treatment; text links use
  a 300ms color transition.
- Motion must honor `prefers-reduced-motion` locally.

## Responsive Observations

- At 1440px the full navigation is visible and the hero image is right aligned
  within a 1360px content system.
- At 768px the compact header is active; the hero content and visual stack
  inside a 30px-margin rounded panel while the quote input/button remain inline.
- At 390px the panel has 15px outer margins, the hero form stacks, the title
  underline is hidden, and split/timeline/proof layouts become single-column.
- The live closing CTA contains WordPress/white-label copy unrelated to the
  route. It is part of the visible migration baseline and will be preserved;
  replacement copy belongs in the content approval queue.

## Local Verification And Remaining Differences

- Same-viewport and tall-render comparison completed on 2026-08-21. The hero,
  logo rail, all three image/list sections, timeline, proof cards, contact box,
  FAQ, and closing message preserve the live section order and responsive
  geometry at the audited breakpoints.
- Verified the 50px quote controls, inline-to-stacked form transition, 5/3/2
  logo counts, delayed autoplay, one-open FAQ behavior, two-second proof count,
  focus-visible controls, and reduced-motion handling. Reviewed the website
  validation and slashless quote-redirect implementation in the local client
  boundary.
- The local page uses the shared migrated header/footer rather than the live
  WordPress chrome. Carousel logos can differ at the exact screenshot instant
  because both versions autoplay continuously.
- The live screenshot tool left proof values at `0+`; the local implementation
  retains the same zero-to-value viewport animation and exposes final values to
  assistive technology.
- The live closing WordPress/white-label message and seven visible FAQs remain
  unchanged. Proposed copy corrections are recorded in
  `docs/page-content-improvements.md`.
