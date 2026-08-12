# Shared Container Widths

Live URLs: https://www.dynamicdreamz.com/ and inner pages
Local routes: sitewide
Date checked: 2026-08-12
Browser: CSS source comparison

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| User-supplied live CSS | Standard and homepage-specific maximum widths and 20px horizontal padding. |
| Local `Container` component | Shared width rules, `home` variant, footer override, and current usages. |

## Width Contract

| Viewport | Standard container | Homepage container |
| --- | --- | --- |
| Below 576px | Full width with 20px gutters | Full width with 20px gutters |
| 576–767px | 540px | 540px |
| 768–991px | 720px | 720px |
| 992–1199px | 960px | 960px |
| 1200–1439px | 1180px | 1180px |
| 1440px and wider | 1180px | 1360px |

## Implementation Notes

- The `home` prop is already applied to homepage section containers.
- The homepage `<main>` carries a server-rendered route marker so the shared header also receives the live `.home .container` width at 1440px+.
- At 1440px+, the homepage navigation keeps its captured 68px logo gap; standard-page navigation uses the live 40px gap. This prevents the About menu from shifting 28px to the right.
- The shared default now remains capped at 1180px beyond the 1200px breakpoint.
- Only the `home` variant receives the 1360px breakpoint at 1440px.
- The footer-specific 1170px override remains unchanged because it follows a separate captured footer contract.

## Remaining Differences

| Difference | Status |
| --- | --- |
| Browser screenshots at every breakpoint | pending visual verification |
