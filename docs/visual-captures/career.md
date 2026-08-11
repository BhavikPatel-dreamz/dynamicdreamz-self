# Career Page

Live URL: `https://www.dynamicdreamz.com/career/`
Local route: `/career`
Date checked: 2026-08-11
Browser: Microsoft Edge (Chromium, headless parity capture)

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-career-parity-20260811/live-loaded/live-1440x900.png` | `%TEMP%/dd-career-parity-20260811/local-final-header/local-1440x900.png` | passed |
| 768x1024 | `%TEMP%/dd-career-parity-20260811/live-loaded/live-768x1024.png` | `%TEMP%/dd-career-parity-20260811/local-final-header/local-768x1024.png` | passed |
| 390x844 | `%TEMP%/dd-career-parity-20260811/live-loaded/live-390x844.png` | `%TEMP%/dd-career-parity-20260811/local-final-header/local-390x844.png` | passed |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| View Page Source | Metadata, canonical, robots, heading order, copy, job data, links, local-asset migration list, image alt text, and desktop/mobile duplicate job markup |
| `style.css`, `default-media.css` | Montserrat typography, 1180px container, shared section rhythm, buttons, colors, and global breakpoints |
| `assets/css/career/main.css`, `assets/css/career/media.css` | Hero, heading split, location filter, job cards, benefits cards, gallery geometry, hover states, and responsive behavior |
| `assets/js/career.js`, `assets/js/custom.js`, `slick.min.js` | Continuous gallery marquee, responsive slide counts, location dropdown, 300ms open/close animation, and active location filtering |
| Assets | Five job icons, five job-description PDFs, eight benefit icons, twelve canonical workplace images shared from `public/assets/team/events/`, and the canonical company OG image |

## Section Inventory

| Section or element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Career hero | White background, centered 50/66 heading, team introduction, 230px top and 55px bottom padding | Copy and exact responsive typography are rendered by a Server Component |
| Current opportunities | Split heading/intro, right-aligned location dropdown, five job cards per location | Job content is server-rendered; only the accessible location selector is a Client Component |
| Job cards | Vacancy pill, role icon/PDF link, three details, Apply now CTA, green-tinted gradient-border hover | Typed local data, local SVG/PDF assets, semantic headings and descriptive link labels |
| Workplace benefits | Eight centered cards in a 4/2/1 grid with icon, gradient hover and 245px desktop height | Reusable server-rendered card grid with local icons and meaningful alt text |
| Workplace gallery | Infinite linear marquee; 5 slides above 1440, then 4/3/2; alternate slides offset vertically | Scoped 96-second CSS marquee, decorative duplicate hidden from accessibility APIs, and reduced-motion fallback |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | Surat jobs selected; menu closed; gallery continuously moves left | Server output contains Surat jobs, the menu is closed, and the gallery begins its linear marquee | passed |
| Hover | Job and benefit cards reveal a green/cyan gradient border and pale green fill; red CTA reverses to outline | Equivalent 300ms card treatments and shared live-style CTA reversal | passed |
| Focus | Dropdown receives focus while open; links use browser/theme focus behavior | Keyboard-opened menu focuses the selected option; global 3px focus-visible outline improves visibility | passed with accessibility improvement |
| Open/active | Dropdown list slides open/closed in 300ms; selecting Ahmedabad swaps the job list and label | Automated browser check observed `aria-expanded=true`, a 104px open menu, an Ahmedabad label, and the Ahmedabad job list | passed |
| Scrolled | Page content scrolls normally under the shared header; no Career-specific sticky behavior | Full-page lazy-load and scroll pass completed with no overflow at all three viewports | passed |
| Animation timing | Gallery uses Slick `speed: 8000`, `autoplaySpeed: 0`, linear infinite motion with no hover pause | 12 slides move in a 96-second linear loop (8 seconds per slide); motion stops when reduced motion is requested | passed |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop (1200px+) | 1180px container, horizontal job cards, four benefit cards, 4 gallery slides at 1440 | Exact 1180px section/header container, horizontal cards, four benefit cards, and four visible gallery slides | passed |
| Tablet (768-991px) | Centered stacked section headings, vertical shadowed job cards, two benefit cards, three gallery slides | Matches the stacked headings/cards, two-column benefits, and three-slide gallery | passed |
| Mobile (below 768px) | 16px gutters, full-width location selector and CTA, one benefit card, two gallery slides with smaller radii/gaps | Matches gutters, full-width controls, one-column benefits, gallery spacing, offsets, and radii | passed |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Gallery section height at 1440px | Local optimized images produce a 0.20px subpixel rounding difference; all section start positions remain within 0.21px | accepted |
| Shared footer total height | Its top edge matches within 0.08px; the existing shared footer is 16px shorter at tablet and 24px shorter at mobile | existing shared component; outside Career content |
| Location control semantics | Live uses non-semantic `div` controls | Intentionally improved to a keyboard-operable ARIA menu without changing its visual result |
| Local Apply-now destination page | `/career-apply-now` is a planned migration route and is not part of this task | migration pending |
