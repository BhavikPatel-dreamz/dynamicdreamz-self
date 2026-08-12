# Homepage Container

Live URL: https://www.dynamicdreamz.com/
Local route: http://localhost:3000/
Date checked: 2026-08-12
Browser: CSS source comparison

## Viewports

| Viewport | Live rule | Local implementation | Result |
| --- | --- | --- | --- |
| Below 576px | Full width with 20px side padding | Homepage variant uses full width and 20px side padding | matched |
| 576–767px | 540px maximum width | Homepage variant uses 540px maximum width | matched |
| 768–991px | 720px maximum width | Shared breakpoint retained | matched |
| 992–1199px | 960px maximum width | Shared breakpoint retained | matched |
| 1200–1439px | 1180px maximum width | Shared breakpoint retained | matched |
| 1440px and above | 1360px maximum width | Shared breakpoint retained | matched |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| User-provided live CSS | Width, horizontal padding, auto margins, and all five minimum-width breakpoints. |
| Local `Container` component | Existing shared widths and the conflicting 16px padding below 768px. |
| Homepage section usages | All homepage-owned `Container` instances were identified before applying the variant. |

## Section Inventory

| Element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Homepage content containers | 100% width, 20px side padding, auto margins, responsive maximum widths. | Typed `home` variant applies the 1360px homepage content width at 1440px+. |
| Homepage header container | The `.home .container` rule also widens the header to 1360px at 1440px+. | A server-rendered `data-page="home"` marker scopes the header’s 1360px width to `/`; inner-page headers stay at 1180px. |

## Motion And Interaction

No motion or interactive state affects the container dimensions.

## Responsive Notes

The rule is scoped to homepage section containers and the homepage header. Other routes continue using the standard container behavior.

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Post-change screenshots at each breakpoint | Not captured as part of the CSS-value request. | pending visual verification |
