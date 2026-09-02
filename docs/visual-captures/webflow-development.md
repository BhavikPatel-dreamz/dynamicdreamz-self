# Webflow Development Visual Capture

- **Route**: `/webflow-development`
- **Live URL reference**: `https://www.dynamicdreamz.com/webflow-development/`
- **Capture date**: 2026-09-02
- **Status**: Verified
- **Browser**: Google Chrome headless
- **Viewports**: 1440x900, 768x1024, 390x844

## References

- Live source and View Page Source: `/tmp/webflow-live.html`
- Live CSS: `/tmp/services-main.css`, `/tmp/services-media.css`
- Live screenshots:
  - `/tmp/webflow-live-1440.png`
  - `/tmp/webflow-live-768.png`
  - `/tmp/webflow-live-390.png`
- Local screenshots after implementation:
  - `/tmp/webflow-local-1440-final.png`
  - `/tmp/webflow-local-768-final.png`
  - `/tmp/webflow-local-390-final.png`

## Structure And Responsive Behavior

- Split white hero with Webflow illustration, quote and portfolio CTAs, and Clutch, Upwork, and GoodFirms review cards.
- Pale yellow trusted-brand marquee.
- Centered six-card Webflow services grid using pale yellow cards with 15px corners.
- Pale green/blue growth band with three white cards and gradient hover borders.
- Empty `Recent Projects` grid retained from the live page, including the `View our work` CTA.
- Client Stories testimonial carousel with video dialog behavior from the shared section.
- Light gray milestone section with three gradient-bordered cards and a desktop offset middle card.
- Eight-item underlined FAQ accordion with the first item open initially.
- Final quote CTA banner.
- Services and milestone cards change from three columns to two at tablet and one on mobile.
- Hero CTAs stay inline through tablet widths and stack below 575px; the illustration scales from 328px to 250px below 768px.

## Motion And Interaction

- Client logos and testimonials use the shared horizontal slider behavior.
- Testimonial cards retain the shared video dialog interaction.
- FAQ uses the shared open/close transition and keyboard-accessible buttons.
- Milestone values are server-rendered static values for crawlability. The live page animates these counters on intersection; preserving the values without client hydration is an intentional implementation difference.
- Nonessential motion remains subject to the shared reduced-motion behavior.

## Comparison Result

- Desktop: hero heading, circular gradient image frame, review cards, CTAs, and brand band align closely with the live reference. The local hero text block sits approximately 8px lower than the live text because the shared flex hero vertically centers its content; the image/review group is within approximately 10px horizontally.
- Tablet: hero copy, centered CTA row, 328px image frame, and stacked review cards match the live layout. The local illustration begins approximately 6px higher than the live reference.
- Mobile: 250px circular image frame, stacked CTAs, and hero copy match the live layout within normal font rasterization and contact-widget overlay differences.
- The brand marquee can show a different logo at the capture instant because autoplay position is time-dependent; the logo set and section geometry match.
- Local assets are project-owned canonical files. No runtime requests to the live site are used.

## Asset And Source Audit

- Hero and service/growth/milestone assets are stored under `public/assets/services/webflow-development/` after scratch-buffer comparison.
- Shared review logos, testimonial data, navigation, FAQ, and CTA primitives were reused.
- `npm run check:asset-duplicates` reports zero duplicate hash groups.
