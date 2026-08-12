# About Timeline

Live URL: https://www.dynamicdreamz.com/about-us/
Local route: http://localhost:3000/about-us/
Date checked: 2026-08-12
Browser: Chromium (user-provided side-by-side capture)

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| Desktop split view | User-provided left-side capture | User-provided right-side capture | dashed-line angle mismatch identified |
| Tablet | Not supplied | Not captured | pending |
| Mobile | Not supplied | Not captured | pending |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered page screenshot | Dashed connector direction, marker alignment, center low point, and rising right segment. |
| Live page source and `assets/css/about/main.css` | Exact connector widths, offsets, rotations, transform origins, dash gradient, and alternating slide selectors were inspected after the initial page request was rate-limited. |
| Local CSS module | Rotation values matched live originally, but local standard segments used `transform-origin: left center`; live uses the default center origin. The leading segment also used a different origin. |
| Local carousel | Milestone width, alternating content order, scroll behavior, and marker asset were checked and remain unchanged. |

## Section Inventory

| Element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Dashed timeline | Standard segments rotate at 5 and -5 degrees around their center; the initial leading segment rotates 4 degrees with `transform-origin: top`. | Match the live rotation values and origins exactly. |
| Markers | Centered on the dashed connector. | Existing positioning retained. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial | Timeline is horizontally scrollable. | Existing carousel behavior retained. | unchanged |
| Drag | Timeline and connectors move together. | Existing pointer-drag behavior retained. | unchanged |
| Focus | Scroll viewport remains keyboard focusable. | Existing behavior retained. | unchanged |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop comparison | Standard connectors use ±5-degree rotation around their center. | Exact live rotation and transform-origin behavior applied. | matched by implementation |
| Up to 575 px | Not supplied. | Existing shorter connector widths retained. | pending visual review |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Exact computed live CSS | Source stylesheet was inspected; a browser-computed post-change comparison remains outstanding. | source values matched |
| Post-change screenshot at identical scroll offset | Requires browser recapture. | pending verification |
