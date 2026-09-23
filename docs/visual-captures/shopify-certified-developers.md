# Shopify Certified Developers visual capture

Route: `/shopify-certified-developers`
Live reference: `https://www.dynamicdreamz.com/shopify-certified-developers/`
Capture date: 2026-09-23
Status: implementation and live/local visual verification complete

## Screenshots

- Live desktop, 1440 × 900: `docs/visual-captures/shopify-certified-developers/live-desktop-1440.png`
- Live tablet, 768 × 1024: `docs/visual-captures/shopify-certified-developers/live-tablet-768.png`
- Live mobile, 390 × 844: `docs/visual-captures/shopify-certified-developers/live-mobile-390.png`
- Local desktop, 1440 × 900: `docs/visual-captures/shopify-certified-developers/local-desktop-1440.png`
- Local tablet, 768 × 1024: `docs/visual-captures/shopify-certified-developers/local-tablet-768.png`
- Local mobile, 390 × 844: `docs/visual-captures/shopify-certified-developers/local-mobile-390.png`
- Full-page working captures were compared for section order, tab states, FAQ layout, closing CTA, and footer continuity across 1440px, 768px, and 390px viewports.

## Sources inspected

- Rendered live page at desktop, tablet, and mobile viewports.
- View Page Source saved as `scratch/shopify-certified-developers/live.html`.
- Theme stylesheet `style.css?ver=7.1`.
- Theme responsive stylesheet `assets/css/default-media.css?ver=1787234939`.
- Service stylesheets `assets/css/services/main.css?ver=all` and `assets/css/services/media.css?ver=1787234939`.
- Hero stylesheet `assets/css/hero_new_section.css`.
- FAQ stylesheet `assets/css/faqs_section.css`.
- Service interaction script `assets/js/services.js?ver=1787234939`.
- Shared interaction script `assets/js/custom.js?ver=1787230067`.
- Yoast metadata and JSON-LD source graph, heading hierarchy, links, image alts, and ARIA labels.

## Live visual system and section order

1. Shared header over a warm cream hero (`#f7f4e9`).
2. Hero section (`.hero-new-section`) with eyebrow ("Established in 2006 • Shopify Platinum Partner"), H1, description, two button CTAs ("DISCUSS YOUR SHOPIFY PROJECT", "SEE OUR CERTIFICATIONS" linking to `#see_our_certifications`), four proof badges (Shopify Platinum Partner, Clutch 130+ reviews, Trustpilot 4.9, Upwork Top Rated Plus), and right-column video wrapper playing `why-dynamic-dreamz.mp4`.
3. White three-column verified-knowledge benefits with numbered icons and vertical separators.
4. Warm off-white four-column credential evidence grid (`id="see_our_certifications"`) with Credly credential badges over decorative wings.
5. White credential-matching tab control with four equal tabs and one visible detail panel.
6. Dark green-black agency-support section (`#171e16`) with four checked proof cards.
7. White six-card delivery-services grid using alternating cream backgrounds.
8. Warm off-white Partner Directory proof panel with four equal statistics (Shopify Platinum Partner tier, 5.0 rating, 80+ reviews, partner since 2013).
9. Warm off-white (`#fafaf7`) two-column split FAQ section (`.faq-sec.bg-sky-blue`) with sticky left heading "Frequently Asked Questions" and right accordion with circle-cross icons.
10. Clean white (`#ffffff`) closing CTA section with 560px content block and "discuss your shopify project" button.
11. Shared footer.

Primary colors observed: ink `#282828`, body text `#535353`, brand red `#ad5151`, hero `#f7f4e9`, cream panels `#fafaf7`, dark section `#171e16`, and success check `#35f3a3`. Desktop section headings use Montserrat; hero H1 uses Montreal Medium; body copy uses 16px/30.4px.

## Responsive behavior and breakpoints

- `1199px`: desktop typography and column gutters tighten; evidence badge images and Partner Directory statistics reduce in size.
- `991px`: hero video hides; split section headings stack and center; verified benefits become one column; evidence and service cards become two columns; directory proof becomes two columns; credential panel intro stacks above its information grid.
- `767px`: shared section padding and heading sizes reduce; hero buttons stack full-width; the header becomes the compact mobile variant.
- `575px`: credential and agency-support cards become one column; credential tabs stack vertically; Partner Directory proof becomes one column.
- `390px`: mobile hero H1 is 30px/40px; evidence badge images are 150px; tabs and panel padding tighten.

No horizontal overflow was observed in the captured 1440px, 768px, or 390px default states.

## Interaction and motion

- Hero video plays muted on loop with rounded corners.
- Credential tabs switch immediately on click. Only the active panel is displayed.
- The secondary hero CTA scrolls smoothly to `#see_our_certifications`.
- FAQ behavior is single-open accordion. The first item is expanded on load; opening another item closes the previous answer with smooth animation.
- Credential badge images translate upward by 8px on hover with a 300ms transition.
- Shared pill buttons use the sitewide sliding-fill hover treatment.
- External review, Credly, and Shopify Directory links open in a new tab.
- Local implementation provides keyboard focus states, ARIA tabs/tabpanel relationships, arrow-key tab navigation, and reduced-motion handling while preserving the visible default state.

## Parity findings and verification

- All 10 sections match the live site in structure, visual styling, colors, typography, and responsive stacking.
- Hero now uses the canonical `ServiceHeroVideoSection` matching live `.hero-new-section`.
- FAQ section now uses `SplitFaqSection` matching live `.faq-sec.bg-sky-blue`.
- Closing CTA now renders clean `bg-white` matching live `.white_label_lets_build_cta_section.shopify-certified`.
- Verification passed across 1440px, 768px, and 390px viewports.
- All assets are project-owned with zero runtime dependencies on `dynamicdreamz.com`.
