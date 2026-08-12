# Home Testimonial Carousel

Live URL: https://www.dynamicdreamz.com/
Local route: http://localhost:3000/
Date checked: 2026-08-12
Browser: Chromium DevTools responsive mode (user-provided side-by-side capture)

## Viewports

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | Not supplied for this focused fix | Not captured | pending full-carousel review |
| 768x1024 | Not supplied for this focused fix | Not captured | pending full-carousel review |
| 425x565 | User-provided side-by-side DevTools capture | User-provided side-by-side DevTools capture | Max Sweets logo mismatch identified |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered page / DevTools element tooltip | Live Max Sweets logo renders at 54 x 40 px on mobile; intrinsic asset is 72 x 53 px. |
| CSS files / DevTools styles | The supplied capture shows the logo constrained inside the mobile 40 px-high logo row. No animation affects its dimensions. |
| JS files / DevTools behavior | The logo is static within the active carousel slide; carousel state does not alter its size. |
| Assets | Local `/assets/testimonials/max-sweets-logo.webp` is 72 x 53 px and contains the matching Max Sweets artwork. |

## Section Inventory

| Section or element | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Max Sweets testimonial logo | 54 x 40 px rendered image box at the supplied mobile viewport. | Shared responsive image constraints currently produce 36 x 27 px; add an asset-specific mobile size while retaining shared rules for other logos. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial / active slide | Static logo at 54 x 40 px. | Static logo; size corrected to 54 x 40 px. | matched by implementation |
| Hover / focus | Logo has no independent interactive state. | No independent interactive state. | matched |
| Carousel transition | Logo moves with its slide. | Existing behavior unchanged. | not affected |

## Responsive Notes

| Breakpoint | Live layout | Local layout | Result |
| --- | --- | --- | --- |
| Desktop | Not evaluated in supplied capture. | Existing shared logo sizing retained. | unchanged |
| Tablet | Not evaluated in supplied capture. | Existing shared logo sizing retained. | unchanged |
| Mobile (max 767 px) | Max Sweets image box is 54 x 40 px. | Asset-specific forced width and height produce 54 x 40 px. | matched by implementation |

## Remaining Differences

| Difference | Reason | Status |
| --- | --- | --- |
| Full carousel parity at desktop and tablet | Outside the supplied focused comparison. | pending |
| Post-change browser screenshot | Local browser was not yet re-captured when this note was created. | pending verification |
