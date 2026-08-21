# Buy Shopify Development Hours visual capture

Route: `/buy-shopify-development-hours`
Live reference: `https://www.dynamicdreamz.com/buy-shopify-development-hours/`
Capture date: 2026-08-21
Browser: headless Google Chrome
Status: live and local responsive correction pass complete; production verification rerun

## Screenshots

- Live desktop, 1440 × 900: `docs/visual-captures/buy-shopify-development-hours/live-desktop-1440.png`
- Live tablet, 768 × 1024: `docs/visual-captures/buy-shopify-development-hours/live-tablet-768.png`
- Live mobile, 390 × 844: `docs/visual-captures/buy-shopify-development-hours/live-mobile-390.png`
- Local desktop, 1440 × 900: `docs/visual-captures/buy-shopify-development-hours/local-desktop-1440.png`
- Local tablet, 768 × 1024: `docs/visual-captures/buy-shopify-development-hours/local-tablet-768.png`
- Local mobile, 390 × 844: `docs/visual-captures/buy-shopify-development-hours/local-mobile-390.png`
- Tall live/local working captures were compared section by section during implementation; temporary review files are removed after verification.

## Sources inspected

- Rendered live page and full-page scroll at desktop, tablet, and mobile sizes.
- View Page Source saved temporarily as `scratch/buy-shopify-development-hours/live/page.html`.
- Theme stylesheet `style.css?ver=7.1`.
- Theme responsive stylesheet `assets/css/default-media.css?ver=1787303692`.
- Page stylesheets `assets/css/shopify-bulk/main.css?ver=1787303692` and `assets/css/shopify-bulk/media.css?ver=1787303692`.
- Shared interaction scripts `assets/js/migration.js?ver=1787303692` and `assets/js/custom.js?ver=1787230067`.
- Inline pricing data and range-slider script.
- Yoast metadata and graph plus the separate visible FAQ JSON-LD block.

## Live section order and visual system

1. Shared header above a cream split hero with page copy and a bordered pricing selector card.
2. Centered `Designed for Flexibility, Speed, and Control` heading above a five-item divider grid.
3. Dark green-black audience section with a left heading and four green-dot buyer profiles.
4. Off-white engagement comparison section with a left heading and a two-column bordered comparison card.
5. White centered task-usage section with eleven rounded pill items.
6. Off-white five-step engagement timeline with outlined number circles, dashed connectors, red dots, and short step copy.
7. White `Brands That Trust Us` section with a 5 × 4 logo grid on desktop/tablet and three continuous marquee rows on mobile.
8. Pale-blue FAQ section with ten white accordion cards; the first answer is open by default.
9. Off-white split closing CTA followed by the shared footer.

Observed colors: ink `#282828`, muted text `#535353`, brand red `#AD5151`, cream `#F7F4E9`, off-white `#FAFAF7`, dark section `#171E16`, pale-blue FAQ `#E6ECF0`, green audience dots `#36F4A4`, and comparison tint `rgba(173,81,81,.10)`. Desktop H1 is 50px/66px Montserrat with -1px tracking; section headings are 35px/48.475px; body copy is commonly 16px/30.4px or 18px/34.2px. The shared content container reaches 1360px at 1400px and above.

## Pricing control and purchase states

- Packages are 10 hours at $40/hour ($400, formerly $500), 25 hours at $35/hour ($875, formerly $1000), 50 hours at $30/hour ($1500, formerly $1750), and 100 hours at $25/hour ($2500, formerly $3000).
- The 50-hour package is selected by default. The range has four discrete positions and updates hours, rate, previous rate, cost, previous cost, button label, red fill, and thumb bubble immediately on `input`.
- Each package purchase action opens its exact `rzp.io` Razorpay payment link in a new tab. All four links resolved to their corresponding Razorpay Pages destination with HTTP 200 during final verification. `Request a Custom Quote` uses `/request-quote`.
- The local native range preserves all four package states and keyboard operation, has an explicit accessible name and selected-package value text, and ships a valid default 50-hour purchase href before hydration.

## Responsive behavior and breakpoints

- `1399px`: audience-card widths tighten.
- `1199px`: pricing stats become two columns with Cost full width; comparison heading stacks above its card; primary section padding reduces to 60px.
- `991px`: the hero stacks copy over the pricing card; pricing card loses its left gutter; audience and comparison headings center; the brand grid becomes four columns.
- `767px`: headings reduce to 30px H1 and 24px H2; commitment and audience items become one column; comparison cards stack; task pills become full width; the process becomes a vertical timeline; the desktop logo grid is replaced by three animated rows.
- `599px`, `475px`, and `374px`: process circles and comparison ribbon reduce further for narrow screens.
- No horizontal overflow was observed on either live or local pages at 1440px, 768px, or 390px.

## Interaction and motion

- Shared buttons use the 600ms sliding-fill hover treatment.
- The underlined custom-quote link changes to brand red over 500ms.
- FAQ items use delegated click handling and jQuery slide motion (default 400ms). Opening one closes the prior item; selecting the open item closes all answers.
- Mobile client-logo rows animate linearly for 25 seconds per cycle. The top and bottom rows move left while the middle row moves right.
- The local browser audit confirmed 1ms reduced-motion animation/transition fallbacks, zero-or-one-open FAQ behavior, native slider keyboard control, and visible global keyboard focus handling.

## Asset map

- All twenty brand logos were reused from their canonical `public/assets/clients/` paths in the live order, with meaningful brand-specific alt text on the accessible desktop/tablet grid and intentionally decorative duplicates in the mobile marquees.
- The live plus and minus icons are byte-identical to `/assets/life-dynamicdreamz/faq/plus.svg` and `/assets/life-dynamicdreamz/faq/minus.svg`.
- The three unique page icons were compared in the scratch buffer, cleaned, and ingested under `public/assets/buy-shopify-development-hours/icons/`. A page-specific 1200 × 630 local WebP social image was generated from the verified local hero.

## Final comparison and intentional differences

- A second visual audit was completed after the initial migration review. It corrected the hero highlight rhythm, 16px visible pricing thumb, pricing-card flow, tablet hero sizing, audience card spacing/stacking, comparison ribbon and below-table buttons, task intro typography and checks, process line breaks, tablet FAQ padding, brand-row positioning, and closing CTA responsive type and spacing.
- The corrected hero is the same height as live at 1440px and 390px. At 768px, the hero and its 60px following gap also match live. The task section matches live height at all three audited widths; the mobile comparison and process sections also match live height exactly.
- Final full-page geometry is 6489px local vs 6456px live at 1440px, 8102px vs 8111px at 768px, and 9503px vs 9488px at 390px. The mobile page body through the closing CTA differs by 14px; the remaining full-page variance is predominantly the repository's shared footer. No page section is omitted.
- The repository's shared header/footer remain in use, so shared-shell navigation labels and mobile-footer behavior follow the migrated site system instead of introducing a route-only legacy shell.
- The 75-character live title was shortened to `Buy Shopify Development Hours | Dynamic Dreamz` in metadata only to meet the repository's enforced 60-character budget; visible copy is unchanged.
- The live source's unrelated sitewide Yoast FAQ graph was intentionally omitted. Local JSON-LD contains only the ten visible FAQs and the four visible USD package offers.
- Generic live logo alt text was replaced nonvisually with brand-specific alternatives. External purchase links add `noopener noreferrer`, and all shipped visual assets are local; these production/accessibility corrections do not change the visible result.
