# Privacy Policy Visual Capture

Status: implemented; responsive parity verified on 2026-08-18

## Reference

- Live URL: `https://www.dynamicdreamz.com/privacy-policy/`
- Local route: `/privacy-policy`
- Date checked: 2026-08-18
- Browser: Microsoft Edge headless; mobile verification also used DevTools
  device metrics emulation at a true 390px CSS viewport
- Live screenshots: `privacy-policy-live-desktop.png` (1440x900), `privacy-policy-live-tablet.png` (768x1024), `privacy-policy-live-mobile.png` (390x844)
- Local screenshots: `privacy-policy-local-desktop.png` (1440x900),
  `privacy-policy-local-tablet.png` (768x1024), and
  `privacy-policy-local-mobile.png` (390x844)

## Source inspection

- HTML source: `docs/visual-captures/source/privacy-policy-live.html`
- CSS: `privacy-policy-style.css`, `privacy-policy-default-media.css`, `privacy-policy-standard-page.css`, `privacy-policy-header.css`, `privacy-policy-footer.css`
- JS: `privacy-policy-custom.js.txt`
- The page has no page-specific interaction or animation beyond shared header scroll behavior, mobile navigation, footer disclosure groups, and the floating contact widget.

## Captured visual values

- Header: shared fixed translucent white header; desktop height is approximately 90px, with the logo/navigation/quote CTA aligned inside the 1360px container. Tablet and mobile use the compact menu/header treatment.
- Hero: `linear-gradient(97.18deg, #e8f9ef 28.5%, #e6fafd 91.82%)`; desktop top padding 160px and bottom padding 85px, with page-specific mobile/tablet padding of 140px/46px at 992px and below.
- Hero heading: live global Montserrat, 50px/66px and 700 on desktop; 40px/50px below 992px; 30px/40px below 768px.
- Content: white `section` with 80px vertical padding on desktop and 50px below 992px. The 1360px container uses 20px side gutters.
- Content headings: h2 24px/31.2px, h3 18px with 10px bottom margin; below 768px h2 is 20px and h3 is 16px.
- Content body: Montserrat, 16px, weight 500, 30.4px line-height, `#535353`; list items are 16px/27px with 18px bottom margin. Privacy page intentionally uses native disc bullets rather than the site's custom bullet icon.
- Contact links: red `#d92128` and underlined, removing the underline on hover.
- Responsive observation: the original live mobile reference crop clips the long
  hero heading and long-form lines because that capture used a wider CSS viewport
  than its 390px output. A true 390px CSS viewport check confirms the local page
  wraps the heading and policy text, with `document.documentElement.scrollWidth`
  equal to 390px.

## Interaction and animation states

- Header scroll-up/down behavior, mobile navigation open/closed state, footer mobile disclosure groups, contact-widget hover, and link hover/focus states were inspected from the shared local components and live `custom.js`/header/footer sources.
- No privacy-page-specific transitions, sliders, accordions, forms, or timed animations are present.
- `prefers-reduced-motion` is handled by the existing global base styles.

## Comparison result

- Desktop and tablet captures match the live hero gradient, typography hierarchy,
  content spacing, header treatment, native policy bullets, and floating contact
  widget closely. Local container gutters are a few pixels tighter at the
  captured widths, while the shared widget is slightly wider on tablet.
- The local mobile capture preserves the live typography and spacing intent while
  correctly wrapping text at 390px CSS width instead of shipping horizontal
  overflow.
- No privacy-page-specific animations or interactive states remain unverified;
  shared header, footer, and contact-widget states are covered by their existing
  components.
