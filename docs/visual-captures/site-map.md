# Site Map Page

Live URL: `https://www.dynamicdreamz.com/site-map/`
Local route: `/site-map`
Date checked: 2026-08-19
Browser/source: Google Chrome headless inspection, rendered live page + View Page Source, live page-specific CSS (`assets/css/standard-page/standard-page.css`, `assets/css/default-media.css`, `style.css`), and local component/asset audit.

## Viewports

| Viewport | Status |
| --- | --- |
| 1440x900 (Desktop) | Verified standard text content layout, accessible H1 landmark, single unordered list with 133 top-level items and 5 nested child items under Industries (total 138 entries), 22px hexagon gradient checkmark bullets (`/assets/icons/gradient-check.svg`), 16px/500 text (`#252c15`), and hover red color transitions (`hover:text-brand-red`). |
| 768x1024 (Tablet) | Verified responsive spacing (`pt-[120px] pb-20`), proper bullet alignment at `top-[1px] left-0`, nested child indentation (`ml-5`), and touch-friendly target padding. |
| 390x844 (Mobile) | Verified single-column stacked layout (`pt-[100px] pb-[50px]`), full-width text wrapping with 34px left padding for bullets, and readable typography across all screen sizes. |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and View Page Source | Document title (`Site Map - Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz`), canonical URL (`https://www.dynamicdreamz.com/site-map/`), 138 total links generated from WordPress pages in alphabetical order, `page_item_has_children` nesting on `Industries`, and standard layout. |
| Live `assets/css/standard-page/standard-page.css` | `.page-template-sitemap .standard-text-content` (padding: 150px 0 80px 0), `.standard-text-content ul li` (bullet icon at `0 3px no-repeat; background-size: 22px; padding-left: 34px`), `.page-template-sitemap .standard-text-content ul li a` (color: #252c15; font-size: 16px; font-weight: 500), `.page-template-sitemap .standard-text-content ul li:not(:last-child)` (margin-bottom: 10px). |
| Assets | Hexagon gradient checkmark icon (`/assets/icons/gradient-check.svg`) verified and reused from existing canonical path with 0 duplicates. |

## Section Inventory

| Section | Live behavior/style | Local implementation notes |
| --- | --- | --- |
| Standard Content List | `.standard-text-content` with 150px top padding, 80px bottom padding, list of 138 links with hexagon gradient checkmark bullets, and nested 5-item industry list. | Built `SiteMapPage` in `src/components/sections/site-map-page.tsx` with typed data from `src/content/site-map.ts`. |

## Motion And Interaction

| State | Live behavior | Local behavior | Result |
| --- | --- | --- | --- |
| Initial load | Alphabetical list rendered on load | Fully server-rendered with zero client JS | verified |
| Link hover | Link text color changes to brand red | `transition-colors hover:text-brand-red focus-visible:text-brand-red` | verified |
| Responsive | Top padding scales smoothly from 150px (desktop) to 120px (tablet) and 100px (mobile) | Responsive Tailwind utility padding classes | verified |

## Pre-Implementation Differences and Decisions

| Difference | Decision | Status |
| --- | --- | --- |
| Live canonical has trailing slash | Slashless `/site-map` per repo URL policy | implemented |
| Live page has no explicit visible H1 | Added `<h1 className="sr-only">Site Map</h1>` for accessibility/SEO standard landmark | implemented |
| Industry subpage paths | Localized `/industries/beauty-cosmetics` -> `/beauty-cosmetics` to match repo App Router structure | implemented |
