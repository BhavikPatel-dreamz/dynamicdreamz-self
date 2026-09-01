# Blogs Visual Capture

- Live URL: `https://www.dynamicdreamz.com/blogs/`
- Local route: `/blogs`
- Date checked: 2026-09-01
- Browser: Google Chrome headless (CDP)
- Viewports: 1440x900, 768x1024, 390x844

## Live Screenshots

- `scratch/blogs-live/live-1440x900.png`
- `scratch/blogs-live/live-768x1024.png`
- `scratch/blogs-live/live-390x844.png`

## Local Screenshots

- `scratch/blogs-live/local-final-1440x900.png`
- `scratch/blogs-live/local-final-768x1024.png`
- `scratch/blogs-live/local-final-390x844.png`

## Sources Inspected

- View source: `scratch/blogs-live/index.html`
- Page CSS: `scratch/blogs-live/main.css`
- Responsive CSS: `scratch/blogs-live/media.css`
- Page JS: `scratch/blogs-live/blogs.js`
- Shared live header and footer behavior already represented by the local shared layout.

## Captured Layout And Styling

- The shared header is 90px high at 1440px and 74px at tablet/mobile widths.
- The hero starts below the header and uses a pale green-to-blue gradient (`#e8f9ef` to `#e6fafd`).
- Desktop hero spacing is 160px top / 85px bottom in the live page stylesheet; at 991px and below it becomes 140px top / 46px bottom, inclusive of the fixed-header offset.
- The archive section uses 60px vertical padding on desktop and 50px at 991px and below.
- The search control is centered at a maximum width of 500px, with an 8px radius, 1px `#dadada` border, 14px vertical padding, and a 40px square red search button inset 5px from the right.
- The category row sits below a full-width `#dadada` divider. Three labels are centered with 30px gaps: `Shopify`, `WordPress`, and `eCommerce`.
- Cards use three columns at desktop, two columns at 768px, and one column below 768px. Column gutters are 16px total and row gap is 24px.
- Card media uses a stable `65.226%` aspect ratio, top-aligned object cropping, 20px radius, and a subtle dark border.
- Metadata appears as small bordered pills. Titles are 18px/30px on desktop and 16px/25px below 1200px.
- Pagination is centered with the active page shown as white text on a black 6px-radius square.

## Responsive Differences

- Desktop: full navigation, three-card grid, 500px search field.
- Tablet: mobile navigation header, two-card grid, otherwise the same centered search and category row.
- Mobile: one-card grid, 16px page gutters, full-width search control, and one category row that still fits without wrapping at 390px.
- The live floating WhatsApp contact widget overlaps lower-right content at all captured sizes; this is provided by the existing local shared layout and is not archive-specific.

## Interaction And Motion

- Search submits a GET request with the `s` query parameter.
- Live category anchors use `href="#"`; the page-specific JS does not implement filtering for those controls.
- Category hover changes text to the theme red. Search-button hover has no archive-specific transition.
- Hovering a card image or title underlines the title. The archive CSS does not animate or scale the image.
- Pagination uses ordinary navigation links with no client-side animation.
- The page JS contains only unrelated tab-positioning and dormant category-dropdown code; neither behavior is used by this archive markup.
- No archive-specific keyframes are present other than an unused loading spinner.
- Focus styling is inherited from the shared site CSS; the page CSS explicitly removes the search field outline, which will not be copied because it weakens keyboard visibility without changing the default visual state.

## Verification

- Computed geometry was captured for live and local 1440px and 390px states in `scratch/blogs-live/live-computed-*.json` and `scratch/blogs-live/local-final-computed-*.json`; the first viewport matches within the previously recorded sub-pixel differences.
- Final local screenshots were captured after the complete 84-post archive and pagination implementation. Desktop, tablet, and mobile first-viewport layout, card media ratios, filter spacing, and WhatsApp overlap remain aligned with the live reference.
- The local implementation uses the slashless URL policy and project-owned assets. Article detail routes remain a documented migration dependency outside this archive-page task.

## Remaining Differences

- The live search form carries a hidden WordPress post-type field and category controls use hash links with JavaScript filtering. The migration keeps the same visible controls while using crawl-safe server query parameters.
- The live archive's category and article detail destinations still require their own route migrations or redirects before launch. Legacy page-number URLs are redirected to the single query-based archive route.
