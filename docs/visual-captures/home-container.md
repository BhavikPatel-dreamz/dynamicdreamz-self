# Homepage Container

Live URL: https://www.dynamicdreamz.com/
Local route: http://localhost:3000/
Date checked: 2026-08-18
Browser: CSS source comparison

## Viewports

| Viewport | Live rule | Local implementation | Result |
| --- | --- | --- | --- |
| Below 576px | Full width with 20px side padding | Homepage variant uses full width and 20px side padding | matched |
| 576–767px | 540px maximum width | Homepage variant uses 540px maximum width | matched |
| 768–991px | 720px maximum width | Shared breakpoint retained | matched |
| 992–1199px | 960px maximum width | Shared breakpoint retained | matched |
| 1200–1399px | 1180px maximum width | Shared breakpoint retained | matched |
| 1400px and above | 1360px maximum width | Shared breakpoint retained | matched |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| User-provided live CSS | Width, horizontal padding, auto margins, and all five minimum-width breakpoints. |
| Local `Container` component | Existing shared widths and the conflicting 16px padding below 768px. |
| Homepage section usages | All homepage-owned `Container` instances were identified before applying the variant. |

## Section Inventory

| Element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Homepage content containers | 100% width, 20px side padding, auto margins, responsive maximum widths. | Shared container applies the 1360px width at 1400px+. |
| Homepage header container | The global `.container` rule widens the header to 1360px at 1400px+. | Shared header follows the same sitewide container contract. |

## Motion And Interaction

No motion or interactive state affects the container dimensions.

## Responsive Notes

The rule is now sitewide; homepage and inner routes use the same container behavior.

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Post-change screenshots at each breakpoint | Not captured as part of the CSS-value request. | pending visual verification |
