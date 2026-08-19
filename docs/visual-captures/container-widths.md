# Shared Container Widths

Live URLs: https://www.dynamicdreamz.com/ and inner pages
Local routes: sitewide
Date checked: 2026-08-18
Browser: CSS source comparison

Shared trusted-brands strip rechecked: 2026-08-19 against the owner-supplied
`.our-client-sec` CSS. The strip uses a 31%/69% split with its left edge based
on a 1140px content width above 1199px, a 30%/70% split based on 920px from
992px through 1199px, and stacked full-width columns at 991px and below. The
mobile title is centered with zero padding and a 20px bottom margin in the
standard variant. The strip has no interactive state or animation of its own;
logo-rail behavior remains owned by `ClientLogoSlider`.

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| User-supplied live CSS | Standard and homepage-specific maximum widths and 20px horizontal padding. |
| User-supplied `.our-client-sec` CSS | Trusted-brands column widths, calculated left padding, 1199px adjustment, and 991px stacked layout. |
| Local `Container` component | Shared width rules, `home` variant, footer override, and current usages. |

## Width Contract

| Viewport | Standard container | Homepage container |
| --- | --- | --- |
| Below 576px | Full width with 20px gutters | Full width with 20px gutters |
| 576–767px | 540px | 540px |
| 768–991px | 720px | 720px |
| 992–1199px | 960px | 960px |
| 1200–1399px | 1180px | 1180px |
| 1400px and wider | 1360px | 1360px |

## Implementation Notes

- The live `1360px` rule now applies to every shared container from `1400px`, not only the homepage.
- Previous route-level `1180px` caps and the footer-specific `1170px` cap are removed so header, main sections, and footer share one alignment system.
- Full-viewport carousel tracks use the matching `1320px` inner content width at `1400px+` after the shared 20px horizontal padding.
- The trusted-brands strip is a legacy full-width split layout rather than a shared `Container`; its supplied desktop padding calculation remains based on `1140px` at all widths above 1199px.

## Remaining Differences

| Difference | Status |
| --- | --- |
| Browser screenshots at every breakpoint | pending visual verification |
