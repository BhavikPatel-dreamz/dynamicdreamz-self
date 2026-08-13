# Resources Page

Live URL: `https://www.dynamicdreamz.com/resources/`
Local route: `/resources`
Date checked: 2026-08-12
Browser: Microsoft Edge (Chromium, headless parity capture)

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-resources-parity-20260811/live-extended/live-1440x900.png` | `%TEMP%/dd-resources-parity-20260811/local-final/local-1440x900.png` | passed; exact Resources content and full-page height |
| 768x1024 | `%TEMP%/dd-resources-parity-20260811/live-extended/live-768x1024.png` | `%TEMP%/dd-resources-parity-20260811/local-final/local-768x1024.png` | passed; Resources content within 0.23px |
| 390x844 | `%TEMP%/dd-resources-parity-20260811/live-extended/live-390x844.png` | `%TEMP%/dd-resources-parity-20260811/local-final/local-390x844.png` | passed; Resources content within 0.45px |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered page and View Page Source | Exact metadata, canonical, heading order, visible copy, 17 hub links, all 64 dated article cards, story copy, reviews, client logos, counters, CTA, image alt text, and Yoast schema |
| `style.css`, `default-media.css` | Montserrat typography, 1140px content width, global section rhythm, responsive headings, shared CTA and footer styles |
| `assets/css/resources/main.css`, `assets/css/resources/media.css` | Hero spacing, resource-hub columns, accordion geometry, article cards, story split, reviews, logo strip, counter cards, CTA, and 1199/991/767px breakpoints |
| `assets/js/resources.js`, `custom.js`, Owl/Slick behavior | Single-open accordion, article drag carousel, logo autoplay, counter trigger, video pulse, and header/footer interactions |
| Computed styles and screenshots | Full-page boundaries, column widths, card widths, spacing, typography, active accordion heights, section heights, and horizontal overflow at all three viewports |
| Assets | 64 article thumbnails, two accordion icons, three review wordmarks, star strip, counter texture, existing story artwork, and twelve existing canonical client logos |

## Section Inventory

| Section or element | Live behavior/style | Local implementation plan |
| --- | --- | --- |
| Intro hero | White background; 210px desktop/140px responsive top padding; centered 50/66 heading and 18/34 copy | Server-rendered hero with exact content and responsive Tailwind utilities |
| Shopify Resource Hub | Warm `#f7f5ef` background; explanatory copy with gradient checks beside a white rounded accordion; columns stack at tablet | Typed server-rendered copy plus a small accessible accordion Client Component |
| Resource accordion | Shopify open initially; only one category open; active category can close; roughly 400ms slide; 9/4/0/4 links | Real buttons with `aria-expanded`/`aria-controls`, single-open state, equivalent height transition, and empty Magento state preserved |
| Shopify Blogs | 64 source-rendered cards; 3/2/1-card drag layout with partial edge card; no arrows, dots, loop, or autoplay | All 64 cards remain SSR in a native horizontal scroll-snap rail; shared BlogCard primitive; local optimized images; touch, mouse-wheel, and keyboard scrolling without carousel JavaScript |
| Dynamic story | Green-to-blue gradient; desktop title/video/reviews on left and four paragraphs on right; copy appears first on tablet/mobile | Server-rendered responsive split using the shared generic video dialog and existing About story artwork |
| Review proof | Clutch, Upwork, and GoodFirms cards with five-star strip and responsive compact treatment | Typed review items using local wordmarks and star art; matching desktop/mobile layouts |
| Client strip | Twelve logos; six/four/three/two visible by breakpoint; 2s autoplay with pause on hover; infinite and draggable | Existing ClientLogo component and canonical client-logo data rendered through a narrow client-side Slick carousel boundary |
| Trust counters | Four textured white cards; 18+, 150+, 5000+, and 1100+ animate for about two seconds on entry | Small client boundary using IntersectionObserver; stable server-rendered values and reduced-motion completion |
| Quote CTA | Compact green-to-blue banner with centered prompt and light pill button | Server-rendered section using the shared ButtonLink and canonical quote path |
| Site chrome | Existing shared Dynamic Dreamz header, contact widget, and footer | Reuse the root layout components unchanged |

## Measured Responsive Geometry

| Viewport | Key live boundaries |
| --- | --- |
| 1440px | Hub starts at 682.81px and is 1034.34px tall; blog 659.30px; story 1012.88px; logos 164px; counters 600.34px; CTA 119px; page 5125px |
| 768px | Hub starts at 586.03px and is 1502.05px tall; blog 627.39px; story 1700.53px; logos 164px; counters 740.81px; CTA 168px; page 6529px |
| 390px | Hub starts at 718.06px and is 2077.73px tall; blog 633.67px; story 1955.22px; logos 164px; counters 1208.92px; CTA 204px; page 7964px |

No horizontal document overflow was present in the live desktop, tablet, or mobile capture.

## Motion And Interaction

| State | Live behavior | Local target |
| --- | --- | --- |
| Initial | Shopify panel open; other three panels closed | Same initial server-rendered state |
| Accordion click | Previous panel closes and selected panel slides open in roughly 400ms; open panel can close | Same visible state model with keyboard semantics and a 400ms CSS grid transition |
| Article rail | Owl drag carousel, no autoplay/controls; 3/2/1 cards by breakpoint with partial adjacent card | Native horizontal scroll-snap rail retaining partial-card affordance and all SSR content |
| Story play | Pulsing play control opens YouTube video overlay | Shared accessible dialog, privacy-enhanced YouTube embed, Escape/backdrop close, and matching 1.5s pulse |
| Logo strip | Slick autoplay every 2s, infinite, pause on hover, mouse drag and touch swipe | React Slick with matching responsive slides-to-show, no arrows/dots, 2s autoplay, infinite looping, hover pause, mouse dragging, and touch swiping |
| Counters | Odometer begins once section enters the viewport and runs for about 2s | Intersection-triggered numeric interpolation for about 2s |
| Reduced motion | Live does not consistently stop every decorative animation | Accordion remains operable; marquees/pulse stop and counters immediately show final values |

## Shopify Blogs Rail Follow-up — 2026-08-13

- Screenshots inspected: user-supplied live/local side-by-side desktop capture and user-supplied wide live desktop capture.
- Live source references: previously captured `assets/css/resources/main.css`, `assets/css/resources/media.css`, Owl behavior, and the rendered `/resources/` page documented above. A fresh live fetch returned HTTP 429, so the existing capture plus supplied screenshots are the comparison source for this isolated correction.
- Responsive finding: the live rail initially aligns its first card with the centered content grid, but the draggable viewport spans the full browser width in both directions. After dragging, cards can move visibly through the space left of the heading instead of being clipped at the container boundary. It exposes about four cards on a wide desktop and two cards plus part of the third at the narrower desktop viewport.
- Implementation target: retain the existing three/two/one card-width basis at the 1200px and 768px breakpoints, use a full-viewport rail with a responsive leading spacer for initial content alignment, and preserve native scrolling, snap behavior, keyboard focus, card semantics, and current hover motion.
- Interaction update: match the live Owl carousel's drag affordance with shared pointer drag-to-scroll behavior. Mouse and pen dragging scroll the rail, touch retains native horizontal scrolling, keyboard scrolling remains available, and link activation is suppressed only when pointer movement crosses the drag threshold.
- Snap alignment: the user-supplied before/after screenshots show that each new active card continues to settle on the centered content-grid origin after a drag, while preceding cards stay visible in the full-width area to its left. The rail therefore uses responsive `scroll-padding-inline-start` equal to its leading spacer rather than snapping active cards to the viewport edge.
- Desktop left alignment: the user-supplied red-guide comparison shows the live card edge aligned with the heading's gradient bar/content-grid origin. Local was offset 20px to align with the heading text, so the extra desktop 20px was removed from both the leading spacer and snap padding.
- Remaining checks: compare the next-card exposure at wide desktop and the narrower side-by-side viewport; confirm no document-level horizontal overflow and no change to mobile card sizing.

## Reuse Decisions

| Existing implementation | Decision |
| --- | --- |
| `SiteHeader`, `SiteFooter`, `ContactWidget`, `Container`, `ButtonLink` | Reuse directly |
| Homepage article-card markup | Extract a shared BlogCard primitive and render both Home and Resources variants without changing the Home presentation |
| About video dialog | Extract the dialog behavior/pulse into a generic VideoDialog; keep About as a thin configured wrapper and reuse it in the Resources story |
| `ClientLogo` and homepage client-logo data | Reuse the image primitive and canonical logo records; do not create page-specific duplicate logo files |
| About counters | Reuse its IntersectionObserver approach, but keep Resources card markup separate because its texture, typography, values, and responsive geometry differ materially |
| Life FAQ accordion | Keep separate because Resources has different data, active-arrow treatment, empty category state, geometry, and transition contract |

## Intentional Production Improvements

- 2026-08-12: Added `-1px` letter spacing to the Resources H1 at all breakpoints, per the requested typography adjustment. Existing screenshots, responsive sizes, line heights, and interaction states remain the visual baseline; a refreshed screenshot was not required for this isolated tracking change.
- 2026-08-13: Kept three explicit line breaks in the Resources hero description at the live desktop phrase boundaries and documented their removal at `max-width: 1199px`. The copy remains one semantic paragraph and flows naturally without forced breaks on narrower screens.
- 2026-08-12: Centered each desktop review-count badge horizontally over its review card; the established inline tablet/mobile layout remains unchanged.
- 2026-08-13: Rebuilt the review-count badge border with an explicit two-layer `::before` treatment: the pseudo-element supplies the green-to-cyan outer layer and an opaque inner span covers its center, guaranteeing a 1px gradient border rather than a gradient-filled badge at every breakpoint.
- 2026-08-13: Replaced the review card's solid green border with the live-style `::before` image treatment using local, project-owned green-to-cyan SVGs proportioned separately for desktop cards and wide responsive cards. This avoids the distorted, bowed corners caused by stretching a square SVG across a wide card.
- 2026-08-13: Updated the shared video popup to the live dimensions and treatment: 90% width, 800px maximum width, 16:9 aspect ratio, 8px radius, `z-index: 10000`, and a `0 0 20px rgba(0,0,0,.5)` shadow.
- 2026-08-13: Replaced the Resources client-logo CSS marquee with a real Slick carousel to match the live interaction contract: infinite loop, 2-second autoplay, pause on hover, mouse dragging, touch swiping, and responsive 6/4/3/2 visible-logo counts. The section remains server-rendered while only the logo rail is a Client Component.

| Difference from live | Reason |
| --- | --- |
| The story heading is an `h2` instead of a second `h1` | Preserves the visual hierarchy while giving the page one semantic primary heading |
| Accordion headers are real buttons with ARIA state and visible focus | The live clickable `div` controls are not keyboard-accessible |
| Article carousel uses native scrolling | Removes Owl runtime JavaScript while preserving content, responsive card sizing, touch interaction, and SEO visibility |
| Shopify story category links to the canonical category route instead of `#` | Avoids a non-functional visible link |
| Structured data describes the visible collection and breadcrumb only | The live source injects unrelated site-wide FAQ schema that is not visible on this page |
| Reduced-motion users receive static logo/pulse states and completed counters | Accessibility improvement without changing the default visual experience |

## Verification Result

| Check | Result |
| --- | --- |
| Desktop geometry | Hero, hub, article rail, story, logo strip, counters, CTA, and 5125px full-page height match exactly; hub-copy height differs by 0.27px |
| Tablet geometry | All Resources section heights match; accumulated content boundary variance is 0.23px before the shared footer |
| Mobile geometry | All major Resources section heights match; accumulated content boundary variance is 0.45px before the shared footer |
| Accordion | Shopify open initially; WordPress active height matches at desktop/mobile and stays within one sub-pixel line-box rounding at tablet; keyboard focus and ARIA state pass |
| Article rail | 64 SSR cards, four/three/two partially visible cards in the measured viewport, keyboard-scrollable rail, and zero document overflow |
| Video and counters | Privacy-enhanced video dialog opens/closes correctly; counters complete at 18+/150+/5000+/1100+; reduced-motion output is static |
| Assets and content | No runtime production images, no missing image alt attributes, no `#` links, no duplicate asset hashes, and no mojibake in visible Resources content |
| SEO | Exact live title/description/canonical, one H1, 64 dated article headings, and Organization/WebSite/CollectionPage/BreadcrumbList/ItemList/VideoObject graph |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Shared responsive footer height | The existing shared footer is 17px shorter than live at 768px and 25px shorter at 390px; the Resources CTA begins within 0.45px of live before that boundary, and desktop full-page height is exact | pre-existing shared-layout variance outside this route |
| Article rail implementation | Native scroll snap replaces Owl's drag runtime while retaining the same card widths, visible edge card, touch/keyboard access, and all 64 source-rendered articles | intentional performance/accessibility improvement |
| Counter digit transition | Local counters use stable numeric interpolation instead of Odometer's overlapping rolling glyphs; values and two-second viewport trigger match | intentional production-quality implementation |
| Logo position in a screenshot | The local and live autoplay loops can be at different logo positions when a full-page capture reaches the strip | accepted timing phase; item order, breakpoints, motion, and assets match |
| Visible grammar issues | Informal and ambiguous live copy is retained for migration parity | proposed replacements are recorded in `docs/page-content-improvements.md` |
| Linked destination routes | The page intentionally preserves 83 unique CTA, category, article, and resource-guide paths whose destination routes are not yet present in this migration | migration pending; excluded from this route-local SEO score and required before site launch |
