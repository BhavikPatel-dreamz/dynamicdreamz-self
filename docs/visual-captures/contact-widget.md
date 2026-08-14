# Floating Contact Widget

Live URL: https://www.dynamicdreamz.com/
Local route: sitewide
Date checked: 2026-08-12
Browser: Chromium, using the supplied live/local comparisons

## 2026-08-14 Route-Specific Bottom Position

The project owner specified different fixed offsets by route. The homepage
widget sits 15px above the viewport bottom; every other route uses an 80px
bottom offset. The right offset, content, link behavior, hover state, and widget
dimensions remain unchanged. The shared widget reads the App Router pathname
inside its small client boundary so the position also updates after client-side
navigation.

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| Desktop / tablet comparison | Supplied in prior footer and About comparisons | Supplied in prior footer and About comparisons | local widget is wider and taller |
| Mobile comparison | Supplied in testimonial comparison | Supplied in testimonial comparison | compact layout retained |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Live page source | Widget structure, CTA text, link, divider, and native 50 x 50 WhatsApp SVG. |
| Live screenshots | Fixed bottom/right placement, overall pill footprint, icon scale, divider, and text proportions. |
| Local component | Local desktop widget used a 240px minimum width, 55px icon, and vertical padding, producing an oversized result. |

## Section Inventory

| Element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| CTA pill | Approximately 210 x 55 px in the supplied desktop comparison. | Set an explicit 210 x 55 px desktop footprint. |
| WhatsApp icon | Native 50 x 50 SVG. | Remove the local 55px enlargement. |
| Text | Small prompt above a 16px bold CTA. | Match with 11px prompt and 16px CTA on desktop. |
| Mobile | Compact pill near the bottom-right corner. | Retain a 200 x 50 px compact variant. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | Fixed at the lower-right edge. | Existing fixed positioning retained. | unchanged |
| Hover / focus | Link remains actionable. | Existing transition and accessible link retained. | unchanged |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop/tablet | Compact 210 x 55 px pill. | Explicit matching footprint. | matched by implementation |
| Up to 767 px | Smaller compact pill. | 200 x 50 px with 40px icon. | retained |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Exact live computed CSS | Global theme stylesheet could not be retrieved reliably; dimensions were measured from supplied captures and native markup. | pending browser verification |
