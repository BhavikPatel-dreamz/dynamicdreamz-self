# Hire Shopify Developers

- Live URL: https://www.dynamicdreamz.com/hire-shopify-developers/
- Local route: `/hire-shopify-developers`
- Date checked: 2026-08-18
- Viewports captured: 1440x900, 768x1024, 390x844
- Live screenshots: `docs/visual-captures/source/hire-shopify-developers/live-desktop-1440x900.png`, `live-tablet-768x1024.png`, `live-mobile-390x844.png`
- Local screenshots: `docs/visual-captures/source/hire-shopify-developers/local-desktop-1440x900.png`, `local-tablet-768x1024.png`, `local-mobile-390x844.png`
- Local capture wait: 5000ms before each tall viewport screenshot so the review animation, carousels, testimonial media, and eager portfolio images were rendered

## Sources inspected

- Saved live page source, metadata, headings, CTA destinations, image alts, FAQ markup and JSON-LD.
- `assets/css/hiring/main.css` and `media.css`, captured locally as `source/hire-shopify-developers/hiring-main.css` and `hiring-media.css`.
- `assets/js/hiring.js`, captured locally as `source/hire-shopify-developers/hiring.js`.
- Shared header/footer styles and migrated local components.

## Visual contract

- White hero with centered 50px desktop heading, paragraph, red pill CTA, five counters, and the animated review circle. Counters stack with separators on mobile.
- Cream trusted-brand strip, four-step hiring process with gradient icon tiles/connectors, four Shopify service cards, cyan/mint three-card proof section, six-item advantages grid, five horizontally browsable industry cards, six portrait Shopify portfolio cards, testimonial carousel, and five-item FAQ.
- Cards use subtle gray borders, 10-15px radii, gradient hover outlines, and stable image dimensions. Portfolio overlays reveal “View Project” and the Shopify mark on hover/focus.

## Responsive and interaction states

- Live breakpoints are 1199px, 991px, 767px, 389px and 359px. Industry/testimonial carousels show two cards on desktop/tablet and one on mobile with stage padding.
- Review animation rotates Clutch, Upwork and GoodFirms approximately every five seconds; local shared animation is reused.
- FAQ opens the first item by default and closes other items when one is opened. Portfolio and industry cards lift/scale on hover.
- Local implementation uses eager, intrinsic-size portfolio media to avoid the live page’s lazy-image gaps while preserving the rendered composition.

## Why-choose hover and typography re-audit (2026-08-19)

- Rechecked saved live HTML plus `hiring-main.css` and `hiring-media.css`
  against the supplied live/local hover screenshots.
- Live desktop heading is 35px/48.475px/700 Montserrat with `-0.7px` tracking
  and an intentional break before “Shopify Development”. The 16px/30.4px intro
  uses two intentional breaks; both breaks disappear below 1200px.
- Cards use 30px horizontal padding, 40px top padding, 60px bottom padding,
  60px icons, 16px/26.72px headings, and 16px/27.2px body copy with `0.32px`
  tracking.
- Live hover/focus appearance: a 2px green-to-cyan outline surrounding the
  15px card and a 12px green-to-cyan bar inside its bottom edge, transitioning
  over 300ms. Local previously used its `::after` layer as a permanent white
  cover, preventing the bottom gradient bar from rendering.
- Hover correction after rendered comparison: a negative-z gradient
  pseudo-element filled the entire local card because of its stacking context.
  The card now uses an explicit 2px outer shell and a separate white inner
  panel; only the shell background and independent 12px bottom overlay become
  gradient on hover/focus. Text, icons, and the full card interior remain white
  exactly as shown in the live screenshot.

## Remaining differences

- Shared migrated header/footer and local contact widget differ from the legacy WordPress shell.
- The live “inquire now” CTA points to `/career/`; local migration routes it to `/request-quote` because it is an obvious conversion-path error.
- Local portfolio images are intentionally eager and visible; the live desktop/mobile captures contain legacy lazy-loading gaps.

## Local verification

- Desktop, tablet, and narrow captures show the expected section order with no overlapping content.
- The Shopify process includes numbered badges; service cards are two columns on desktop and one column below 992px.
- Proof and advantage grids use three desktop columns, two tablet columns, and one mobile column.
- The industry carousel starts at the content edge on desktop and retains a single-card swipe treatment below 992px.
- All six portfolio images render from canonical local asset paths with stable 115% card aspect ratios.
- The testimonial carousel renders local poster media, and the FAQ defaults to its first panel open.
