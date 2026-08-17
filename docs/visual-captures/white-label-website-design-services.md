# White Label Website Design Services Visual Capture

Status: live reference captured; local implementation in progress  
Live URL: `https://www.dynamicdreamz.com/white-label-website-design-services/`  
Local route: `/white-label-website-design-services`

Checked: 2026-08-17  
Browser: Google Chrome headless (desktop, tablet, and mobile emulation)

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-website-design-live-1440x900.png` | Pending implementation | Hero and first counter row captured |
| 768x1024 | `/tmp/white-label-website-design-live-768x1024.png` | Pending implementation | Tablet header, hero stack, and counters captured |
| 390x844 | `/tmp/white-label-website-design-live-390x844.png` | Pending implementation | Mobile header, hero copy, review marks, and artwork entry captured |
| 1440px full page | `/tmp/white-label-website-design-live-full-1440.png` | Pending implementation | Full section order, carousels, accordions, testimonial, FAQ, and footer captured |
| 390px full page | `/tmp/white-label-website-design-live-full-390.png` | Pending implementation | Full mobile stacking, section rhythm, and initial interactive states captured |

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
| Hero | Cream `#f7f4e9`; transparent header; 55/45 desktop split; 50/66 H1; local-brand illustration bleeds down/right; quote CTA and three review marks | Extend the existing shared white-label hero with the exact design-page copy and a project-owned hero asset |
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
| Benefit/advantage carousels | Owl carousel; multiple cards desktop, one card mobile; arrows/dots vary by viewport | Keyboard-operable horizontal carousel with snap behavior, controls, and reduced-motion handling |
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

- Local screenshots, computed geometry, hover/focus capture, carousel movement, accordion transitions, modal playback, and full-page comparisons remain pending implementation.
- Asset hashes and dimensions must be confirmed before finalizing the canonical local asset map.
- Final status will be updated only after URL checks, lint, production build, responsive screenshot comparison, and interaction verification pass.
