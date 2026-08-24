# Site Footer

Live URL: https://www.dynamicdreamz.com/
Local route: http://localhost:3000/
Date checked: 2026-08-13
Browser: Chromium DevTools responsive mode plus Microsoft Edge headless computed-geometry audit

## 2026-08-18 Live Footer Refresh

The About page live footer was re-inspected after the production footer changed.
The user-provided desktop screenshot and the rendered live DOM were compared,
and `assets/css/footer.css?ver=1.0.0` was downloaded temporarily for its current
computed layout contract.

| Area | Current live behavior |
| --- | --- |
| Desktop navigation | Five columns: Company, Shopify Solutions, Technology Services, Agency Partnerships plus Hire developers, and More Services plus contact/social links. |
| Desktop breakpoint | `.footer-top.desktop` is visible at 992px and wider. The 1360px container uses 172/238/235/259px primary column widths with space distributed between them; widths compact below 1440px. |
| Responsive navigation | At 991px and below, contact and social links appear first, followed by six collapsed accordion groups. Accordion rows use 18px vertical padding, a 12px plus/minus icon, and a 200ms content transition. |
| Proof badges | Six white cards in one desktop row; two columns with 16px gaps and 60px height below 768px. |
| Legal row | 30px top / 15px bottom desktop spacing; centered stacked layout with a divider and 40px top padding below 768px. |
| Interaction states | Navigation and contact links retain color/opacity hover states. Accordion plus changes to minus while open. |
| Contact colors | Email and phone text use `rgba(40, 40, 40, 0.8)`; their SVG icons remain opaque `#111111`. |
| Link casing | Live footer menu anchors use `text-transform: capitalize`, including desktop and responsive accordion links. |

The local implementation will reuse `SiteFooter`, `Container`, the current local
award assets, and accessible native `details` elements. No production asset or
script is referenced at runtime.

Post-change local captures:

- Desktop, 1440px: `/tmp/dd-footer-local-desktop-full.png`
- Mobile, 390px: `/tmp/dd-footer-local-mobile-full.png`

Both captures confirm the current taxonomy, five-column desktop composition,
mobile contact-first order, six collapsed accordion rows, two-column badge
grid, and responsive legal row without horizontal overflow. The user-supplied
desktop screenshot remains the live visual reference for the refreshed footer.

The live Shopify Solutions taxonomy includes both “Shopify Plus Development”
and “Shopify B2B & Wholesale.” They intentionally share the migrated
`/shopify-plus-agency` destination but remain distinct visible service labels;
only duplicate labels are omitted.

## 2026-08-24 Responsive Typography And Social Recheck

The current live `assets/css/footer.css?ver=1787550780` and the owner-supplied
mobile capture were rechecked for the 991px transition. At `max-width: 991px`,
accordion headings are 16px with 166% line-height, accordion links are
14px/20px, and the social row moves out of the contact block to a centered
position after the proof badges with 30px top spacing. At `max-width: 767px`,
contact and legal text use 11.5px/15px, the legal row uses compact 15px spacing,
and the footer retains 70px bottom padding. Desktop menu headings remain
18px/30px and links remain 14px at 166.182% line-height.

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
