# White Label Website Design Services Visual Capture

Status: live reference captured; local parity fix verified
Live URL: `https://www.dynamicdreamz.com/white-label-website-design-services/`
Local route: `/white-label-website-design-services`

Checked: 2026-08-17
Browser: Google Chrome headless (desktop, tablet, and mobile emulation)

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-website-design-live-1440x900.png` | `source/white-label-website-design-services/local-desktop-1440x900.png` | Hero columns remain side by side and align at the top |
| 768x1024 | `/tmp/white-label-website-design-live-768x1024.png` | `source/white-label-website-design-services/local-tablet-768x1024.png` | Intended stacked hero with 400px artwork constraint verified |
| 390x844 | `/tmp/white-label-website-design-live-390x844.png` | `source/white-label-website-design-services/local-mobile-390x844.png` | Mobile layout verified without horizontal overflow |

## Sources Inspected

| Source | Evidence captured |
| --- | --- |
| Rendered page and View Page Source | Exact visible copy, section and heading order, CTA destinations, review links, image alt intent, metadata, Yoast graph, FAQ content, testimonial order, header/footer, and initial accordion states |
| `style.css?ver=7.0.4` | Montserrat typography, 1180px container, global headings, buttons, FAQ presentation, header, and footer |
| `assets/css/default-media.css?ver=1.0.0` | Global responsive typography, container, button, and spacing behavior |
| `assets/css/services/main.css?ver=all` | Hero, counters, AI sections, service accordion, testimonial, FAQ, colors, dimensions, transitions, and keyframes |
| `assets/css/services/media.css?ver=1.0.0` | 1199px, 991px, 767px, 575px, 389px, and 359px page behavior |
| `assets/js/services.js?ver=1.0.0` | Single-open/closable service accordion, FAQ behavior, carousel setup, and counter observer behavior |
| `assets/js/custom.js?ver=1.0.0` | Header scroll state, menu behavior, testimonial/video controls, and shared interaction setup |
| Live asset set | Hero artwork, proof icons, benefit icons, AI capability icons, process icons, service icons, industry icons, tick icon, and testimonial assets identified for hash comparison and local migration |

Captured source files are stored in
`docs/visual-captures/source/white-label-website-design-services/`.

## Section Inventory And Implementation Map

| Live section | Captured behavior and styling | Local implementation decision |
| --- | --- | --- |
| Hero | Cream `#f7f4e9`; transparent header; page-specific 47.1/45 desktop split with `space-between`; 50/66 H1; local-brand illustration aligned down/right; quote CTA and three review marks | Shared hero uses a 47/45 local split, matching the live text width within about one pixel at the captured desktop container, with mutually exclusive page-variant utilities |
| Proof counters | Four equal columns with 42px icons and dividers; 2x2 tablet and stacked mobile | Reuse the shared white-label proof section and canonical shared proof icons |
| Why choose white label design | Off-white two-column text/accordion; five items; first open; one open at a time; active item can close | Add a focused accessible accordion variant with the live layout and timing |
| Benefits | Dark green split heading/copy followed by a five-card horizontal carousel; one card visible on mobile with dots | Reuse the horizontal drag-scroll primitive with server-rendered cards, buttons, and reduced-motion-safe behavior |
| AI engines | White centered intro and five cream cards; five columns desktop and stacked mobile | Server-rendered responsive card grid with local icons |
| AI discovery | Pale blue rounded section; text/CTA left, four white cards right, then a centered lower CTA | Server-rendered split grid preserving both live CTA destinations and wording |
| Development process | Four connected steps on desktop; vertical red rule and numbered circles on mobile | Server-rendered ordered steps with responsive connector treatment |
| Features | Pale blue section with centered intro and five white cards | Server-rendered responsive five-card grid |
| Agency advantages | White five-card horizontal carousel using one repeated tick icon | Reuse the same accessible carousel shell as the benefits section |
| Web-design services | Dark green two-column six-item accordion; first item open | Extend the shared white-label service accordion only if its API remains coherent; otherwise use a narrow page wrapper |
| Partner selection | Centered pink-tinted rounded text panel | Server-rendered text panel with the exact live copy |
| Industries | Five equal cards with icons; five columns desktop and stacked mobile | Server-rendered industry grid with decorative local icons |
| Case studies | Pale cream testimonial/video carousel; Conscious Poker is the first slide | Extend the shared testimonial carousel with a typed testimonial-data prop and preserve the existing homepage default |
| FAQ | Pale blue; eight white rounded items; first open; single-open and closable | Reuse the accessible FAQ accordion and source FAQPage schema from the same data |
| Site chrome | Transparent header over hero, shared scroll behavior, contact widget, footer, and mobile menu | Reuse root-layout chrome and add the route to the transparent-header allowlist |

## Captured Visual System

- Primary colors: ink `#282828`, muted text `#535353`, brand red `#ad5151`, cream `#f7f4e9`, off-white `#fafaf7`, dark green `#171e16`, pale blue `#e6ecf0`, and soft pink `#f9eeee`.
- Desktop content width is approximately 1180px. Main sections use about 80px vertical rhythm, reducing to about 50px at tablet/mobile breakpoints.
- Hero and split layouts stack below 992px. Multi-column grids progressively reduce at 1199px and 991px, then become single-column at 767px.
- The mobile capture preserves the live H1 at approximately 28px, compact 12px body copy, full-width stacked proof items, single-card carousels, and vertical process connector.
- Rounded section corners, cream cards, thin pale borders, restrained shadows, red accent icons, and dark-green service surfaces match the established migrated white-label system.

## Interaction And Motion

| State | Live behavior | Local target |
| --- | --- | --- |
| Header initial/scrolled | Transparent initially; shared white hide/reveal header after scroll | Existing route-aware shared behavior |
| Buttons | Red/white fill transition with uppercase labels | Shared `ButtonLink` hover and visible focus behavior |
| Why accordion | First open; single-open; current item can close; plus/minus control | Accessible button/region relationships with comparable transition timing |
| Service accordion | First open; one open at a time; current item can close; 700ms panel transition | Existing accessible shared accordion behavior where compatible |
| Benefit/advantage carousels | Owl carousel; multiple cards desktop, one card mobile; pagination dots appear only below 767px | Keyboard-operable horizontal carousel with snap behavior, mobile-only pagination, controls, and reduced-motion handling |
| Testimonial | Previous/next navigation; YouTube lightbox/modal | Shared accessible carousel and dialog, with page-specific slide order |
| FAQ | First open; single-open; current item can close; about 400ms slide | Existing accessible FAQ component and timing |
| Counters | Source observer does not match the rendered counter wrapper reliably; final values remain visible | Stable server-rendered final values without counter JavaScript |

## Known Live Issues To Preserve Or Document

- Preserve the visible heading typo `Advantages of White Label Web Design for Agenciess` until exact visible-copy approval is given.
- Preserve repeated pill copy (`Tidio`, `Tidio`) and awkward visible grammar for migration parity.
- The live page makes unqualified ranking, security, AI citation/recommendation, client-satisfaction, speed, and profit claims. These remain visible for parity but must not be expanded in metadata or schema.
- The live source includes a sitewide FAQ graph unrelated to this page. Local structured data must emit only the visible page FAQs.
- `/request-quote`, `/schedule-your-consultation`, and `/bigcommerce-development` remain migration-intent destinations and require launch coverage.

## Remaining Differences

- At 1440x900, the 1140px hero row now renders a 535.8px text column and 513px media column. Both begin at `y=120`; the hero is 780.4px tall and no longer wraps.
- At 768x1024, the hero stacks at the live breakpoint and constrains the artwork to 400px. Carousel pagination remains hidden.
- At 390x844, the document width equals the viewport width, the hero stacks cleanly, and both page-specific carousels expose five pagination controls.
- The reasons and services accordions, FAQs, horizontal carousels, testimonial navigation, and video dialog were exercised successfully during the route audit.
- `npm run check:urls`, `npm run lint`, and `npm run build` pass. Lint retains one unrelated pre-existing warning in `white-label-shopify-ai-sections.tsx`.
- Remaining differences are limited to documented live-copy/evidence issues and migration-pending `/request-quote`, `/schedule-your-consultation`, and `/bigcommerce-development` destinations.
