# Beauty & Cosmetics Page

Live URL: `https://www.dynamicdreamz.com/beauty-cosmetics/`
Local route: `/beauty-cosmetics`
Date checked: 2026-08-13
Browser: Microsoft Edge (Chromium, headless screenshots and DevTools Protocol computed-style audit)

## 2026-08-14 Deliverable Hover Correction

The project owner supplied a side-by-side live/local hover capture and the live
`.delivers-box` pseudo-element CSS. The local outer gradient layer was stacking
above the white card surface, producing a saturated green/cyan card fill. The
live target keeps that gradient visible only in the 3px outer border area and
places a separate faint green-to-transparent wash over the white interior.
Both layers transition opacity and visibility over 300ms; card content remains
above them. The final supplied comparison showed the local ring slightly too
heavy, so its horizontal and vertical expansion is 2px. Default and responsive
card geometry remain unchanged.

## 2026-08-17 Deliverable Border Clipping Correction

The horizontal scroll viewport also clips vertical overflow because its
`overflow-x-auto` behavior computes the other overflow axis as scrollable. The
deliverable gradient extends 2px beyond each card, so the viewport now reserves
2px of internal space above and below the card rail. This keeps the gradient
ring equally visible on all four sides and prevents unintended vertical
scrolling without changing horizontal drag behavior.

## 2026-08-17 Responsive Carousel Stage Geometry

The supplied screenshots establish two distinct positions. Initially, the first
card aligns with its breakpoint-specific content inset while the carousel
viewport still spans the full browser width. After one item is scrolled, that
first card can remain partially visible at the left browser edge and the second
card occupies the original aligned position. At every breakpoint, the local
rail now places the former viewport offset plus its existing track padding on
the inner track and uses that combined value as scroll padding. Card widths,
gaps, initial alignment, and snap destinations remain unchanged.

The responsive inset calculations use the scroll viewport's `100%` layout
width rather than `100vw`. Viewport units include the desktop scrollbar while
the centered `Container` does not, which shifted the card rail approximately
half a scrollbar width to the right. Using the same layout-width basis aligns
the first card border with the heading content edge while retaining the
full-width carousel viewport.

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-beauty-parity-20260813/live-desktop-top.png` | `%TEMP%/dd-beauty-parity-20260813/local-desktop-top.png` | matched |
| 768x1024 | `%TEMP%/dd-beauty-parity-20260813/live-tablet-top.png` | `%TEMP%/dd-beauty-parity-20260813/local-tablet-top.png` | matched; subpixel header difference only |
| 390x844 | `%TEMP%/dd-beauty-parity-20260813/live-mobile-top.png` | `%TEMP%/dd-beauty-parity-20260813/local-mobile-top.png` | matched |

Full-page baselines use matching `live-*-full.png` and `local-*-full.png`
names in the same temporary folder. That folder also contains the saved live
HTML, inspected CSS/JavaScript, downloaded audit assets, and the final
`live-computed-styles.json` / `local-computed-styles.json` reports. The files
are temporary; the durable measurements and decisions follow.

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Canonical, metadata, dates, heading order, copy, CTAs, 12 brand links, five deliverables, six portfolio links, image dimensions/alts, ARIA and schema |
| `style.css`, `default-media.css` | Montserrat metrics, Bootstrap container widths, 80/50px rhythm, heading scales, buttons, and 991/767px breakpoints |
| `assets/css/industries/main.css`, `assets/css/industries/media.css` | Hero, brand strip, solution split, deliverable cards, portfolio grid/overlays, and 1199/991/767px behavior |
| `assets/js/industries.js`, Slick, Owl and `custom.js` | Brand autoplay, 4/3/2 counts, deliverable drag/dots, hover timing, header behavior and fixed contact widget |
| Edge screenshots and computed styles | Full section geometry, font metrics, cards, pseudo-elements, active slides, hover states and overflow at all required widths |
| Local asset tree and SHA-256 inventory | Page imagery, solution icons, platform marks, arrow, and reuse of the 12 canonical client logos |

## Section Inventory

| Section | Live behavior/style | Local implementation and result |
| --- | --- | --- |
| Hero | 97.18-degree mint/cyan gradient; 190/150px top padding; 50/40/30px H1; red pill CTA; collage sinks 80/70px below the section | Server Component using Container, ButtonLink and the local optimized collage; content and geometry matched |
| Trusted brands | Warm `#fbf7ed`; heading beside rail on desktop and above it below 992px; infinite two-second carousel; 4/3/2 logos | Shared typed client-logo slider uses the 12 existing canonical logo paths; 4/3/2 measured locally |
| IT solutions | 49.6/45.3% split, live typography, 84% image geometry, 10px radius and red CTA; content remains before image responsively | Server Component using Container, ButtonLink and a local optimized 516x434 image; shared data now declares `mobileOrder: "content-first"` explicitly |
| What We Deliver | Desktop heading/copy split, responsive centered stack, five-card drag rail, partial edge preview and five mobile dots | All five cards remain in server HTML; shared drag-scroll boundary has optional labelled pagination; geometry matched |
| Deliverable hover | Green/cyan outer border and faint wash become visible over 300ms | Both pseudo-elements measured at opacity 1 and visible on hover |
| Portfolio | Centered intro; 3/2/1 cards; 15px columns, 60/30px rows; 115% media; category/name and CTA | Six server-rendered cards use local optimized images; card/grid dimensions matched |
| Portfolio hover/focus | 40% black overlay, View Project rises to bottom 30px, platform badge fades and translates in over 500ms | Hover and keyboard-Tab focus-visible both measured overlay opacity 1, bottom 30px, and badge opacity 1 |
| Shared chrome | Existing header, responsive menu, footer and contact widget | Reused; footer minimum heights were recalibrated from these same three live captures |

## Measured Responsive Geometry

| Viewport | Live / local result |
| --- | --- |
| 1440x900 | Page 4597/4597px; hero 844.41/844.41; brands 164/164; solutions 686.16/686.16; deliverables 579.86/579.86; portfolio 1469.73/1469.73; footer 852.39/852.39; brand slides 4/4; no local overflow |
| 768x1024 | Page 5520/5520px; hero 671.55/671.58; brands 217/217; solutions 1085.63/1085.61; deliverables 690.34/690.34; portfolio 1815.94/1815.88; footer 1039.70/1039.69; brand slides 3/3; no local overflow |
| 390x844 | Page 6901/6901px; hero 505.58/505.55; brands 217/217; solutions 991.25/991.23; deliverables 637.67/637.66; portfolio 3547.66/3547.55; footer 1002.30/1002.30; brand slides 2/2; five visible dots; no local overflow |

The greatest route-section variance is 0.11px and comes from browser rounding.

## Motion and Interaction

| State | Live | Local | Result |
| --- | --- | --- | --- |
| Initial | Live item order before Slick/Owl initialization | Same ordered content is present in server HTML before hydration | matched |
| Brand animation | Infinite, one slide every 2s, 4/3/2 visible, no hover pause | Same timing/counts/no hover pause; pauses for focus and stops for reduced motion | matched with accessibility improvements |
| Deliverable drag | No arrows or autoplay; 3/2/1 full cards with adjacent preview; five mobile dots | Pointer/swipe scrolling, live card sizing and five keyboard-operable labelled dot buttons; clicking dot four moved the rail to scrollLeft 954 and updated `aria-current` | matched with accessible controls |
| Deliverable hover | Both card layers opacity 1/visible after 300ms | Both layers opacity 1/visible | matched |
| Portfolio hover | Overlay opacity 1; view link at bottom 30px; badge opacity 1/translateY(0) after 500ms | Same measured endpoint; also available on focus-visible | matched |
| CTA hover | Red fill slides away over 600ms | Shared ButtonLink behavior | matched by reuse |
| Reduced motion | Live keeps motion running | Emulated reduced motion reported true and the brand-track transform stayed unchanged across 2.6 seconds; manual controls remained available | intentional accessibility improvement |

## Reuse Decisions

| Existing implementation | Decision |
| --- | --- |
| `SiteHeader`, `SiteFooter`, `ContactWidget`, `Container`, `ButtonLink` | Reuse; only evidence-backed footer minimum heights changed |
| `ClientLogo` and home client-logo records | Reuse all 12 logos through a typed canonical lookup; no media copies |
| Resources brand slider | Promote its core to the shared `ClientLogoSlider`; retain the Resources variant behavior |
| `HorizontalDragScroll` | Extend with an optional typed pagination contract; existing callers remain unchanged |
| Homepage selected-work cards | Do not reuse because video marquee, dark shell, ratio and semantics differ materially |
| Industry sections | No equivalent existing section contract; add server-rendered Beauty sections around the two smallest shared client boundaries |

## Asset Canonicalization

- Sixteen required assets were compared by SHA-256 with every file under
  `public/assets/**`; no exact duplicate was added.
- The 12 brand logos reuse existing files under `public/assets/clients/**`.
- Shared icons and platform badges use neutral purpose folders; route imagery
  uses `public/assets/beauty-cosmetics/**`.
- All 28 referenced route assets exist locally. Rendered HTML contains no
  production WordPress/CDN asset hotlinks.

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Focus and reduced-motion handling | The live controls provide weaker keyboard/motion-preference support | intentional accessibility improvement |
| Visible typos and grammar | Exact visible copy changes need project-owner approval | live copy preserved; suggestions tracked in `docs/page-content-improvements.md` |
| `/request-quote` and `/our-work` | Approved active-migration destinations are not built yet | migration pending; required before launch |
