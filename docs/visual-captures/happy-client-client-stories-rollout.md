# Happy Client Client-Stories Rollout

- Date checked: 2026-09-01
- Scope: heading/description-only `HappyClientSection` consumers in Salesforce,
  Squarespace, PrestaShop, hire Shopify developers, hire WordPress developers,
  Shopify theme customization, and WordPress development pages.
- Shared design source: the Wix/Ecwid client-stories configuration, including
  eyebrow, testimonial items, accessible control labels, carousel controls, and
  responsive client-story cards.
- Page-specific content preserved: each route retains its existing testimonial
  heading and description.
- Interaction states: previous/next controls, horizontal carousel movement,
  video-dialog controls, keyboard focus, and shared responsive behavior.
- Responsive breakpoints and animation timings: inherited unchanged from
  `HappyClientSection` and `HappyClientCarousel`.
- Existing sections that already provide page-specific items or specialized
  classes were not changed.

## Project-wide default — 2026-09-01

- Owner direction: retire the classic `HappyClientSection` presentation on all
  current and future pages.
- The client-stories header, three/two/one-card carousel, video cards, and
  previous/next controls are now the only section rendering path.
- Calls without a variant inherit the new design automatically; existing
  `variant="client-stories"` calls remain source-compatible.
- Shared fallback content now supplies the `Client Stories` eyebrow and
  accessible carousel/control labels when a page does not provide its own.
- Legacy page-level `pt-0` testimonial class overrides are removed so spacing is
  consistent across all consumers.
- Page-specific headings, descriptions, testimonial items, and explicit control
  labels remain unchanged.
