# Shopify Certified Developers visual capture

Route: `/shopify-certified-developers`
Live reference: `https://www.dynamicdreamz.com/shopify-certified-developers/`
Capture date: 2026-08-21
Status: implementation and live/local visual verification complete

## Screenshots

- Live desktop, 1440 × 900: `docs/visual-captures/shopify-certified-developers/live-desktop-1440.png`
- Live tablet, 768 × 1024: `docs/visual-captures/shopify-certified-developers/live-tablet-768.png`
- Live mobile, 390 × 844: `docs/visual-captures/shopify-certified-developers/live-mobile-390.png`
- Local desktop, 1440 × 900: `docs/visual-captures/shopify-certified-developers/local-desktop-1440.png`
- Local tablet, 768 × 1024: `docs/visual-captures/shopify-certified-developers/local-tablet-768.png`
- Local mobile, 390 × 844: `docs/visual-captures/shopify-certified-developers/local-mobile-390.png`
- Full-page working captures were compared for section order, tab states, FAQ layout, closing CTA, and footer continuity, then removed with the temporary migration buffer.

## Sources inspected

- Rendered live page at desktop, tablet, and mobile viewports.
- View Page Source saved as `scratch/shopify-certified-developers/live/page.html`.
- Theme stylesheet `style.css?ver=7.1`.
- Theme responsive stylesheet `assets/css/default-media.css?ver=1787234939`.
- Service stylesheets `assets/css/services/main.css?ver=all` and `assets/css/services/media.css?ver=1787234939`.
- Service interaction script `assets/js/services.js?ver=1787234939`.
- Shared interaction script `assets/js/custom.js?ver=1787230067`.
- Yoast metadata and JSON-LD source graph, heading hierarchy, links, image alts, and ARIA labels.

## Live visual system and section order

1. Shared header over a warm off-white split hero.
2. Hero H1, description, two pill CTAs, three review profiles, and the certified-developer illustration.
3. White three-column verified-knowledge benefits with numbered icons and vertical separators.
4. Warm off-white four-column credential evidence grid with credential badges over decorative wings.
5. White credential-matching tab control with four equal tabs and one visible detail panel.
6. Dark green-black agency-support section with four checked proof cards.
7. White six-card delivery-services grid using alternating cream backgrounds.
8. Warm off-white Partner Directory proof panel with four equal statistics.
9. Pale blue FAQ section; the first answer is open by default.
10. Warm off-white split closing CTA followed by the shared footer.

Primary colors observed: ink `#282828`, body text `#535353`, brand red `#AD5151`, hero `#FAF8F5`, cream panels `#FAFAF7` / `#F7F4E9`, dark section `#171E16`, pale-blue FAQ `#E6ECF0`, and success check `#35F3A3`. Desktop section headings use approximately 35px/48.5px Montserrat; hero H1 uses 50px/66px; body copy commonly uses 16px/30.4px.

## Responsive behavior and breakpoints

- `1199px`: desktop typography and column gutters tighten; evidence badge images and Partner Directory statistics reduce in size.
- `991px`: hero becomes single-column with the illustration below the copy; split section headings stack and center; verified benefits become one column; evidence and service cards become two columns; directory proof becomes two columns; credential panel intro stacks above its information grid.
- `767px`: shared section padding and heading sizes reduce; the header becomes the compact mobile variant; hero corners reduce from 50px to 30px.
- `575px`: credential and agency-support cards become one column; credential tabs stack vertically; Partner Directory proof becomes one column.
- `389px`: mobile hero H1 is 30px/40px; evidence badge images are 150px; tabs and panel padding tighten.

No horizontal overflow was observed in the captured 1440px, 768px, or 390px default states.

## Interaction and motion

- Credential tabs switch immediately on click. Only the active panel is displayed; the live implementation has no panel-transition animation.
- The secondary hero CTA scrolls to the credential evidence section over 600ms.
- FAQ behavior is single-open accordion. The first item is expanded on load; opening another item closes the previous answer with jQuery slide motion.
- Credential badge images translate upward by 8px on hover with a 300ms transition.
- Shared pill buttons use the sitewide sliding-fill hover treatment.
- External review, Credly, and Shopify Directory links open in a new tab.
- Local implementation provides keyboard focus states, ARIA tabs/tabpanel relationships, arrow-key tab navigation, and reduced-motion handling while preserving the visible default state.
- Local verification confirms four tabs and four associated panels, ArrowRight/Home/End keyboard navigation, one active tab, a single-open FAQ with the first item expanded by default, visible focus treatment, and working in-page certification navigation.
- Reduced-motion emulation changes smooth scrolling to `auto` and reduces badge and FAQ transition durations to `0.001s` through the shared app-wide motion override.
- A forced full-page load confirmed that every page-specific raster image completed with a non-zero natural size. Reused Partner Directory and FAQ SVG paths were also verified as non-empty local files.

## Remaining differences

- Page-specific section order, wording, default states, colors, card treatment, responsive stacking, and hero/section geometry match the live reference at the three documented viewport sizes.
- The repository's shared desktop header and footer are retained. Its current desktop navigation grouping differs from the legacy live header captured for this page; mobile header geometry and all page-owned content remain aligned. No route-specific global-shell fork was introduced.
- The live 191-character description was shortened to 151 characters to satisfy the repository's production metadata budget; the visible page copy is unchanged.
- The live Yoast graph contains unrelated sitewide FAQ questions. The local graph intentionally emits only the eight FAQs visible on this page and connects them to the existing Organization, WebSite, WebPage, Breadcrumb, and Service entities.
- The live credential images have empty alt text. Local linked credentials use meaningful accessible labels, keyboard-visible focus, and accessible tab semantics without changing the default visual result.
- Production assets are local and optimized. Exact-match process, Partner Directory, FAQ, and review assets reuse their canonical repository paths; the final repository-wide SHA-256 audit reports zero duplicate hash groups.
