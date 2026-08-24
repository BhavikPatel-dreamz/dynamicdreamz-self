# Shared header visual parity capture

Reviewed: 2026-08-24

## Scope

The current production header on `https://www.dynamicdreamz.com/` is the visual and content reference for the shared Next.js header. The migration keeps local, slashless routes and the existing accessibility improvements while matching the live navigation labels, menu hierarchy, dimensions, breakpoints, and interactions.

## Captures

Live reference captures:

- `header/live-header-desktop-1440x900.png`
- `header/live-header-shopify-open-1440x900.png`
- `header/live-header-technology-open-1440x900.png`
- `header/live-header-work-open-1440x900.png`
- `header/live-header-tablet-1024x768.png`
- `header/live-header-mobile-390x844.png`
- `header/live-header-mobile-open-390x844.png`
- `header/live-header-mobile-shopify-open-390x844.png`
- `header/live-header-scroll-up-1440x900.png`

Pre-change local captures:

- `header/local-before-header-desktop-1440x900.png`
- `header/local-before-header-shopify-open-1440x900.png`
- `header/local-before-header-work-open-1440x900.png`
- `header/local-before-header-tablet-1024x768.png`
- `header/local-before-header-mobile-open-390x844.png`

Post-change local captures:

- `header/local-after-header-desktop-1440x900.png`
- `header/local-after-header-shopify-open-1440x900.png`
- `header/local-after-header-technology-open-1440x900.png`
- `header/local-after-header-work-open-1440x900.png`
- `header/local-after-header-tablet-1024x768.png`
- `header/local-after-header-mobile-open-390x844.png`
- `header/local-after-header-mobile-shopify-open-390x844.png`
- `header/local-after-header-scroll-up-1440x900.png`

## Sources inspected

- Rendered production homepage at desktop, tablet, and mobile widths.
- Production homepage page source, including the complete header markup and inline SVG icons.
- Production `header.css` and `default-media.css` rules saved in the temporary `scratch/header-audit/` comparison buffer.
- Production `custom.js` header navigation, drawer, and scroll-direction behavior saved in the same temporary buffer.
- Local shared header components, navigation data, button/link primitives, container widths, and current route usages.

## Visual system and measurements

- Desktop header: fixed, 90px high at 1440px, translucent white (`rgba(255,255,255,.6)`), 25px backdrop blur, 500ms ease-in-out scroll transform.
- Desktop content: 1360px maximum container with 20px inner padding; logo displays at 225px wide and the quote CTA at approximately 162.36px by 49px.
- Desktop mega menus: white, 20px radius, 1px `rgba(0,0,0,.1)` border, 20px padding, and `0 18px 48px rgba(0,0,0,.1)` shadow.
- Menu rows: 8px vertical/12px horizontal padding, 11px internal gap, 11px radius, and a 160ms transition to `#f7f4e9` on hover/focus.
- Menu icons: 20px square with the muted red `#ad5151` treatment.
- Shopify menu: 1054px wide, three columns, nine service rows, and a proof/CTA strip separated by a top border.
- Technology menu: 760px wide and two columns. Industries: 652px/two columns. Agency Partnerships: 390px/one column. About: 645px/two columns. Work: 666px/two bordered feature cards.
- Tablet/mobile navigation replaces the desktop menu at 1199px and below. The drawer occupies the viewport, transitions horizontally over 800ms, and locks document scrolling.
- Mobile drawer: 30px top and 20px side padding, 20px/600 top-level labels, subtle row separators, flat icon-led submenu rows, hidden descriptions, and one expanded top-level group at a time.

## Responsive breakpoints

- `1400px`: expanded desktop container/nav spacing.
- `1399px` and below: the quote CTA uses a 14px font with 13px vertical and
  20px horizontal padding, matching the supplied production media rule.
- `1200px`: desktop mega navigation begins.
- `1199px`: tablet/mobile drawer replaces desktop navigation.
- `768px`: compact mobile header layout begins below this point.
- `380px`: extra-small logo adjustment begins below this point.

## Interaction states

- Desktop menus open on pointer hover and keyboard focus; click remains available for touch/keyboard-compatible desktop use.
- Menu rows receive the pale cream hover/focus surface and retain a visible keyboard focus indicator.
- Escape and outside pointer interaction close an open desktop menu.
- The mobile drawer traps focus, closes with Escape, locks body scrolling, and restores focus to its trigger.
- Opening one mobile group closes the previously open group; internal navigation closes the drawer.
- Scrolling down hides the header; scrolling upward reveals the blurred header with shadow; returning to the page top clears directional state.

## Pre-change differences

- The migration still used the former large green Shopify mega menu and older, narrower panels for the other groups.
- The migration switched to the drawer only below 992px, leaving a desktop navigation at 1024px where production now uses the drawer.
- Several menu labels, descriptions, destinations, icons, badges, proof text, and Work card CTAs differed from production.
- Mobile Shopify navigation used a nested legacy service taxonomy instead of the current flat nine-link list.

## Remaining differences

- Intentional URL difference: local navigation uses slashless canonical migration routes instead of production's legacy trailing slashes.
- Intentional interaction improvement: desktop menus and the mobile drawer retain Escape handling, keyboard focus support, outside-click closing, focus containment/restoration, and semantic expanded/hidden state.
- Current production wording (`Al Services`, `IOS`, and `Food Beverages`) is preserved for visual/content parity; proposed corrections are recorded in `docs/page-content-improvements.md`.
- Production and local headless Chromium captures occasionally show transient clipped text or delayed SVG paint inside the fixed blurred header. Geometry, content, normal browser rendering, responsive switching, and interaction state were checked independently of those capture-only paint artifacts.
- No material visual difference remains in the shared header at the audited 1440px, 1024px, and 390px states. The inclusive production breakpoint was additionally verified locally at 1199px, with desktop navigation beginning at 1200px.
- The quote CTA breakpoint boundary was source-verified against the supplied
  production rule (`max-width: 1399px`). The shared button base now translates
  the supplied canonical `.btn, input[type="submit"]` declaration, and the
  header CTA contains only its supplied 1399px font-size and padding override.
