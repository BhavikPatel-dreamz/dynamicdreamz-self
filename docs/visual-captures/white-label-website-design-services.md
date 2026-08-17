# White Label Website Design Services Visual Capture

Status: tablet parity corrections implemented and verified
Live URL: `https://www.dynamicdreamz.com/white-label-website-design-services/`  
Local route: `/white-label-website-design-services`

Checked: 2026-08-17  
Browser: Google Chrome headless (desktop, tablet, and mobile emulation)

## 2026-08-17 Desktop Full-page Correction

Fresh 1440px full-page captures (`/tmp/wl-design-local-1440-current.png`
and `/tmp/wl-design-live-1440-current.png`) confirmed that the local hero's
percentage columns wrap onto separate rows at desktop, while live keeps the
copy and illustration side by side. They also confirmed that live's Benefits
and Advantages carousel viewports continue from the container's left edge to
the right browser edge, exposing part of the fourth card. The desktop hero is
now explicitly non-wrapping, and only these route-local rails extend through
the container's right gutter while retaining container-based card widths.

## 2026-08-17 Full-viewport Carousel Track Correction

The Benefits and Advantages rails require a full-browser-width scroll viewport
at every breakpoint, with the responsive container gutter applied to an inner
track instead of the viewport. This lets a previous card remain visible against
the left browser edge after scrolling while the active card snaps back to the
original container edge. The route now uses matching responsive track padding
and `scroll-padding-inline-start`; the shared drag-scroll primitive exposes the
inner track as an opt-in API so its other consumers are unchanged.

## 2026-08-17 Benefits Card Geometry Correction

The side-by-side desktop capture showed that the full-width rail aligned but
the local dark cards and section were substantially shorter. The captured live
CSS confirms desktop `.delivers-box` padding of `65px 27px 65px 35px`, 68px
icons with a 16px bottom gap, and 16px body copy at 190% line-height. At 767px
and below, live reduces the dark cards to `30px 20px 35px`, 50px icons with a
10px gap, 16px headings, and 14px body copy. These values are now applied only
to the dark Benefits variant; the light Advantages variant is unchanged.

## 2026-08-17 Mobile Stage-padding Correction

The numbered live/local 375px comparison confirms that Owl's 25px stage
padding is added after the normal container gutter and removed twice from the
available item width. The live first card is therefore approximately 293px
wide at 375px, beginning 41px from the viewport edge, while the next card
remains visible. Tablet widths use the same 25px stage padding with two items;
desktop removes it at 1200px. Mobile dots use the live 20px top gap and active
green-to-blue gradient.

## 2026-08-17 Testimonial Video Dialog Correction

The live popup CSS uses a fixed full-viewport flex overlay with an 80% black
backdrop. Its video box is centered, `width: 90%`, capped at `800px`, uses a
16:9 aspect ratio, an 8px radius, and a `0 0 20px rgba(0,0,0,.5)` shadow. The
close control is transparent, white, 50px, and positioned 70px above the video.
The local native dialog now reproduces those dimensions and removes its former
960px maximum, backdrop blur, and white circular close treatment.

## 2026-08-17 Development Process Desktop Correction

The supplied desktop comparison shows the local process title wrapping because
its heading block is capped at 800px; live keeps the 35px heading on one line
and places the paragraph beneath it, moving the step row approximately 45px
upward. Live also uses the captured `process-step-img.svg` treatment: separate
shallow red dashed curves between each 97px numbered circle rather than one
straight dashed rule. The desktop/tablet connector is reproduced as decorative
inline SVG, while the existing vertical mobile timeline remains unchanged.

## 2026-08-17 Hero Column-width Correction

The captured live CSS identifies the website-design route as page ID 2784 and
sets only its hero content column to `47.1%`. Its media column follows the
shared hero widths (`45%` desktop and `40%` below 1200px), while the row uses
`justify-content: space-between`. The local `56% / 42%` pair belongs to the
other captured white-label page variants and is removed from this route only.

The implementation selects mutually exclusive width class sets rather than
rendering both the shared `55%` utility and the route-specific `47.1%` utility.
This avoids Tailwind stylesheet-generation order resolving the conflict in
favor of the shared width.

## 2026-08-17 Industries Grid Separator Correction

The supplied live CSS confirms a three-column desktop grid with `48px` column
padding and `80px` row spacing, reduced to `30px`/`40px` below 1200px. Desktop
vertical gradient separators follow columns 1, 2, and 4. At tablet widths the
grid becomes two columns, separators move to columns 1 and 3, and horizontal
gradient row dividers are added. Mobile becomes one column, removes vertical
separators, and retains horizontal gradient dividers between items. The local
Industries grid now mirrors this ownership and uses the live negative wrapper
margins so separator height and spacing remain consistent.

## 2026-08-17 Tablet Parity Correction

Fresh live and local captures at the supplied 768px reference width isolated
three route-specific differences. The local website-design hero constrained its
artwork wrapper to 400px, while live lets the artwork fill the stacked tablet
container. The Benefits and Advantages rails also omitted Owl's 25px stage
padding/adjacent-card preview and showed pagination above the live mobile-only
range. Finally, the fifth AI capability aligned left instead of occupying a
centered half-width position. The route-specific hero variant and carousel/grid
components now reproduce those live tablet behaviors without changing the
default shared white-label hero or any other page.

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-website-design-live-1440x900.png` | Pending implementation | Hero and first counter row captured |
| 768x1024 | `/tmp/white-label-website-design-live-768-current.png` | `/tmp/white-label-website-design-local-768-after.png` | Matched after route-scoped hero, carousel stage-padding, and AI-card alignment corrections |
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

### 2026-08-17 narrow hero heading correction

- Live breakpoint inspected: `max-width: 389px`.
- Live heading state: `30px` font size, `40px` line height, and `10px` bottom margin.
- Scope: shared white-label hero heading only; wider breakpoints remain unchanged.
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
