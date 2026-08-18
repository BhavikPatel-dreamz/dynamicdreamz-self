# Hire WordPress Developers

- Live URL: https://www.dynamicdreamz.com/hire-wordpress-developers/
- Local route: `/hire-wordpress-developers`
- Date checked: 2026-08-18
- Browser: Chromium 151 (Playwright)
- Viewports captured: 1440x900, 768x1024, 390x844 (full-page screenshots)
- Live screenshots: `docs/visual-captures/source/hire-wordpress-developers/live-desktop-1440x900.png`, `live-tablet-768x1024.png`, `live-mobile-390x844.png`
- Local screenshots: `docs/visual-captures/source/hire-wordpress-developers/local-desktop-1440x900.png`, `local-tablet-768x1024.png`, `local-mobile-390x844.png`
- Local capture wait: 2500ms before each full-page screenshot so the staged review animation and eager portfolio media were visible

## Sources inspected

- View source metadata, JSON-LD, headings, CTA links, image alts, FAQ markup, and footer navigation.
- `assets/css/hiring/main.css`: `.inner-hero-sec`, `.total-deliver-wrap`, `.hiring-process-sec`, `.what-make-dynamic-dreamz-sec`, `.why_dynamic_dreamz_sec`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`, gradients, card borders, hover states, and pulse animation.
- `assets/css/hiring/media.css`: 1199px, 991px, 767px, 389px, and 359px responsive rules.
- `assets/js/hiring.js`: review animation, carousel/accordion initialization, and video popup behavior.
- Shared live CSS for header/footer and the rendered live page at desktop, tablet, and mobile widths.

## Visual contract

- Hero: white background, approximately 215px top offset on desktop, centered 50px/66px Montserrat heading, centered paragraph, red pill CTA, five counters with vertical separators, and animated review circle below. Tablet reduces the top offset and type; mobile stacks counters with horizontal separators.
- Brand strip: 164px cream band on desktop, compact stacked layout below 991px, with “Trusted by Leading Brands” and the existing local client logos.
- Hiring process: four equal desktop columns with 94px white icon tiles, green-to-cyan gradient outlines and dotted connectors; two columns at tablet, one column at mobile.
- Proof grids: six bordered tiles in three columns desktop, two columns tablet, one column mobile. Advantage section uses a six-item border grid and red inquiry CTA.
- Portfolio: six 370x422-ish portrait cards, three columns desktop, two tablet, one mobile; hover dark overlay, “View Project”, WordPress mark, and local project links.
- Testimonials: heading and paragraph followed by a horizontally draggable two-up desktop carousel, one-up mobile cards, video play buttons, client name pill, quote, and quote icon.
- FAQ: first item open by default, bordered 10px rows with plus/minus controls, ten questions, stacked on all narrow widths.

## Interaction and motion

- Review circle rotates through Clutch, Upwork, and GoodFirms with staged scale/opacity, stars, rating, and review-pill reveals; approximately 5s per item and disabled/reduced for `prefers-reduced-motion`.
- Portfolio overlay fades in and the project link rises from the bottom on hover/focus.
- Testimonials are draggable/swipeable; video links open a modal iframe.
- FAQ defaults to the first panel open and toggles one panel at a time.

## Remaining differences to verify

- Local header/footer use the migrated shared shell and local assets rather than the legacy WordPress DOM.
- Local review animation reuses the existing migrated implementation and local review assets.
- The review platform/background differs between individual screenshots because the shared Clutch, Upwork, and GoodFirms animation rotates every five seconds.
- Local portfolio images are intentionally eager on this route so full-page captures and fast scrolling do not reproduce the legacy page's tablet/mobile lazy-image gaps.
- Local desktop testimonials align with the content edge and show two complete cards; mobile retains the centered single-card treatment with the next slide visible at the edge.

## Local verification

- Desktop, tablet, and mobile screenshots show all six portfolio images with stable aspect ratios and no content overlap.
- The first FAQ item is open by default, the remaining nine items are collapsed, and the pricing-model list remains inside its accordion panel.
- Headings, counters, CTA labels, process steps, proof grids, portfolio names, testimonial copy, and FAQ wording preserve the live-visible content.
- No horizontal overflow or clipped text is visible at 1440px, 768px, or 390px.
- Remaining visual differences are limited to the migrated shared header/footer/contact widget, review-animation timing, and the intentional removal of legacy lazy-loading gaps.
