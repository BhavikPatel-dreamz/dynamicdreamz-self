# Life @ Dynamic Dreamz Page

Live URL: `https://www.dynamicdreamz.com/life-dynamicdreamz/`
Local route: `/life-dynamicdreamz`
Date checked: 2026-08-13
Browser: Microsoft Edge (Chromium, headless parity capture)

## 2026-08-13 Live-UI Parity Rollback

The project owner requested that all visible Life-page copy match the current
live page. The live page and View Page Source were checked again before editing.
The rollback restores the original H1, hero, work-culture, hiring, and FAQ text.
The canonical Career destination, semantic accordion controls, local assets,
schema synchronization, focus treatment, and reduced-motion handling remain
where they do not change the default live appearance.

| Viewport | Current live screenshot | Post-rollback local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-parity-live-life-1440x900.png` | `/tmp/dd-parity-local-life-1440x900.png` | passed; live hero and content restored |
| 768x1024 | `/tmp/dd-parity-live-life-768x1024.png` | `/tmp/dd-parity-local-life-768x1024.png` | passed; live responsive wrapping restored |
| 390x844 | `/tmp/dd-parity-live-life-390x844.png` | `/tmp/dd-parity-local-life-390x844.png` | passed; no clipping or overflow |

Current live source: `/tmp/dd-live-life-20260813.html`. Life CSS/JS,
computed-style, FAQ transition, gallery timing, hero keyframes, hover/focus,
and responsive sources already listed below remain the interaction baseline.
The rollback supersedes the visible-copy implementation recorded later in this
note; canonical paths, FAQ/content synchronization, semantics, and accessibility
remain retained.

## 2026-08-12 AEO/GEO Scope Captured Before UI Editing

- Keep the built Career CTA relationship and use its canonical no-trailing-slash
  path; planned-route availability elsewhere is outside this audit.
- Add `Life at Dynamic Dreamz` to the H1, improve the hero and culture copy,
  and state the existing Surat and Ahmedabad office context.
- Correct the company-name typo and FAQ grammar while preserving the current
  work-model, hours, flexibility, development, and wellbeing policy meaning.
- Keep the visible FAQ and FAQPage schema sourced from the same typed content.
- Preserve hero decoration, culture-grid, accordion, gallery, hover, focus,
  animation, and responsive contracts. Post-change captures must check the
  longer H1 and answer wrapping at all three existing viewports.

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-life-parity-20260811/live-cards/live-1440x900.png` | `%TEMP%/dd-life-parity-20260811/local-final/local-1440x900.png` | passed |
| 768x1024 | `%TEMP%/dd-life-parity-20260811/live-cards/live-768x1024.png` | `%TEMP%/dd-life-parity-20260811/local-final/local-768x1024.png` | passed |
| 390x844 | `%TEMP%/dd-life-parity-20260811/live-cards/live-390x844.png` | `%TEMP%/dd-life-parity-20260811/local-final/local-390x844.png` | passed |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| View Page Source | Metadata, canonical, robots, heading order, visible copy, Career CTA, 19 gallery images, six culture icons, FAQ content, OG image, and Yoast WebPage/Breadcrumb/Organization/FAQ schema |
| `style.css`, `default-media.css` | Montserrat typography, 1180px container, 80/50px section rhythm, shared red button, colors, and 991/767px responsive typography |
| `assets/css/life-dd/main.css`, `assets/css/life-dd/media.css` | Hero underline and leaf, team image, culture grid, hiring split, accordion geometry, gallery offsets/radii, hover shadow, and 1199/991/767px breakpoints |
| `assets/js/life-dd.js`, `slick.min.js`, `custom.js` | Single-open FAQ behavior, jQuery slide transition, continuous gallery motion, header scroll behavior, and widget behavior |
| Computed styles and screenshots | Section positions, widths, heights, padding, typography, borders, radii, image ratios, open FAQ heights, and full-page desktop/tablet/mobile layout |
| Assets | Team photograph, hiring illustration, six culture icons, decorative leaf, seven page-specific workplace images, twelve canonical images shared from `public/assets/team/events/`, and the canonical 1200x630 company social image |

## Section Inventory

| Section or element | Live behavior/style | Local implementation plan |
| --- | --- | --- |
| Hero | 230px desktop/140px responsive top padding; centered 50/66 heading; animated gradient underline and leaf; 900px intro; full-width rounded team photo | Server-rendered hero with local imagery, inline underline SVG, scoped keyframes, and reduced-motion handling |
| Our Work Culture | Centered 620px intro; six cards in a bordered 2-column table, one column at tablet, six separate centered cards on mobile | Typed content and reusable Server Component cards with local SVG icons |
| Hiring CTA | Desktop image/text split with image extending 60px left; text appears before image below 992px; shared red CTA links to `/career` | Server-rendered split layout using the shared button component and canonical `/career/` route |
| FAQ | Six bordered items; first open initially; only one item remains open; 300-400ms jQuery slide behavior; plus/minus icons | Small accessible Client Component with buttons, `aria-expanded`, controlled panels, keyboard support, and equivalent transition |
| Gallery | 19-image infinite linear Slick track; 5 slides above 1440, 4 at 1440, 3 below 1200, 2 below 768; even slides offset 40/20px | Scoped CSS marquee with local optimized images, decorative duplicate track, and reduced-motion fallback |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | First FAQ answer open; other five closed; gallery moves continuously | First answer is server-rendered open; the remaining answers are closed; gallery begins its continuous marquee | passed |
| Hover | Culture cells gain `-10px 4px 30px rgba(0,38,31,.06)` shadow; red CTA reverses to outline | Matching culture-card shadow and shared red-button reversal | passed |
| Focus | Live FAQ titles are clickable `div` elements without keyboard semantics | Real buttons, visible keyboard focus, `aria-expanded`, `aria-controls`, and labelled answer regions | intentional accessibility improvement |
| Open/active | Clicking an FAQ closes the previous item and slides the chosen answer open | Controlled single-open accordion with matching 400ms panel transition; the active item can also close | passed |
| Hero motion | Underline redraws over 3s with `cubic-bezier(.47,0,.745,.715)`; leaf rotates 0/-15/0 over 3s ease infinitely | Matching scoped 3s underline and leaf keyframes | passed |
| Gallery timing | Slick uses `speed: 8000`, `autoplaySpeed: 0`, linear infinite movement and does not pause on hover | 152s linear cycle for 19 slides, equivalent to eight seconds per slide, without hover pause | passed |
| Reduced motion | Slick track stops in the audit; live underline continues | Both the gallery and hero decoration stop for `prefers-reduced-motion` | intentional accessibility improvement |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop (1200px+) | 1180px container, 900px hero copy, 2-column culture table, side-by-side hiring content, four visible gallery slides at 1440 | Matching layout and section geometry; page and section heights align exactly at 1440px | passed |
| Tablet (768-991px) | 720px container, 40/60 hero title, one-column culture table, centered hiring text above illustration, three gallery slides | Matching layout; page-content boundaries stay within 0.25px of live | passed |
| Mobile (below 768px) | 16px gutters, intentionally retained 60px hero line-height, individually bordered culture cards, compact FAQ, two gallery slides with 10px radii | Matching layout; page-content boundaries stay within 0.30px of live | passed |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Tablet/mobile hero image rounding | The optimized local image produces a maximum 0.38px difference in responsive content geometry | accepted sub-pixel rendering variance |
| Shared responsive footer height | The existing shared footer starts within 0.30px of live but is 16px shorter at 768px and 24px shorter at 390px; desktop differs by 0.49px | pre-existing shared-layout variance outside this page's content; page sections are aligned |
| FAQ semantics | Live controls are not keyboard-accessible; local uses real buttons and ARIA while preserving the appearance | intentional accessibility improvement |
| Reduced motion | Live leaves the decorative hero underline running; local stops all page animation when reduced motion is requested | intentional accessibility improvement |
| Visible copy | Live H1, hero, culture, hiring, and FAQ wording | restored on 2026-08-13; edited copy remains a deferred proposal |

## 2026-08-12 AEO/GEO Verification (Superseded)

| Viewport | Post-change screenshot | Result |
| --- | --- | --- |
| 1440x900 | `/tmp/dd-aeo-all-pages-20260812/life/life-1440x900.png` | passed |
| 768x1024 | `/tmp/dd-aeo-all-pages-20260812/life/life-768x1024.png` | passed |
| 390x844 | `/tmp/dd-aeo-all-pages-20260812/life/life-390x844.png` | passed |

- The expanded entity-first H1, decorative underline, hero answer, and image fit
  without clipping, overlap, or horizontal document overflow.
- FAQ controls, single-open behavior, focus states, gallery motion, and reduced
  motion remain unchanged.
- Rendered source contains the same six questions in visible content and
  FAQPage schema.
- The shared fixed contact widget can overlay lower viewport content during a
  capture; this behavior predates the AEO/GEO copy work.
