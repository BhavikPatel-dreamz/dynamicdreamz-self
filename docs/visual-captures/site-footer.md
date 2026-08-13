# Site Footer

Live URL: https://www.dynamicdreamz.com/
Local route: http://localhost:3000/
Date checked: 2026-08-13
Browser: Chromium DevTools responsive mode plus Microsoft Edge headless computed-geometry audit

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `%TEMP%/dd-beauty-parity-20260813/live-desktop-full.png` | `%TEMP%/dd-beauty-parity-20260813/local-desktop-full.png` | 852.39px / 852.39px matched |
| 1024x1040 | User-provided left-side capture | User-provided right-side capture | desktop/tablet crossover mismatch identified |
| 390x844 | `%TEMP%/dd-beauty-parity-20260813/live-mobile-full.png` | `%TEMP%/dd-beauty-parity-20260813/local-mobile-full.png` | 1002.30px / 1002.30px matched |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered page | At 1024 px, the live footer uses three columns across two menu rows: Company / Shopify / Web, followed by Mobile / White label / Hire developers. |
| DevTools responsive capture | Section positions, wrapping, menu order, award row, and absence of heading overlap were compared. |
| Local component | `site-footer.tsx` uses a fixed 240px / 545px / 260px grid from 992 px, wider than the available 1024 px viewport content area. |
| Interaction | Footer links and award cards retain their existing hover and focus behavior; no motion controls the grid layout. |

## Section Inventory

| Section or element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Footer navigation at 1024 px | Three equal columns and two rows. Company includes contact details below its links. | Add a dedicated 992–1199 px three-column grid and reserve the existing grouped layout for 1200 px and wider. |
| Award cards | Six cards in one row beneath the menus. | Existing six-column award grid is retained. |
| Legal row | Copyright left; policy links right. | Existing implementation retained. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | Menus are fully visible at 1024 px. | Menus remain fully visible in the new crossover layout. | matched by implementation |
| Hover / focus | Links remain interactive. | Existing states unchanged. | unchanged |
| Accordion | Not used at 1024 px. | Accordion remains limited to 991 px and below. | matched |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| 1200 px and wider | Wide grouped desktop footer. | Existing wide layout retained. | unchanged |
| 992–1199 px | Three columns across two rows. | Dedicated three-column grid added. | matched by implementation |
| 991 px and below | Compact accordion footer. | Existing accordion retained. | unchanged |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| 768px footer height | Live 1039.70px; local 1039.69px. | matched within browser rounding |
| Desktop and mobile footer height | Live/local are 852.39/852.39px and 1002.30/1002.30px. | matched |
