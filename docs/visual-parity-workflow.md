# Visual Parity Workflow

Use this workflow whenever a page, section, component, animation, hover state,
or responsive layout must match the live Dynamic Dreamz site.

The goal is exact visual and behavior parity, not byte-for-byte old code. Use
the live CSS/JS as migration reference, then rebuild the same result with local,
maintainable Next.js, Tailwind, and CSS.

## Capture First

Before implementing visual work:

1. Open the live URL and the matching local route.
2. Capture desktop, tablet, and mobile screenshots of the live page.
3. Inspect View Page Source for linked CSS, scripts, preloads, fonts, images,
   metadata, schema, and asset references.
4. Inspect computed styles for each major pattern: header, nav, mega menu,
   hero, cards, counters, buttons, forms, sliders, accordions, footer, and
   repeated service/content sections.
5. Inspect interaction states: hover, focus, active, open/closed, sticky,
   scrolled, loading, selected, disabled, and error states.
6. Inspect animations: `@keyframes`, `transition`, `animation`, transforms,
   opacity, easing curves, duration, delay, scroll triggers, counters, sliders,
   marquees, sticky behavior, and reveal-on-scroll behavior.
7. Capture responsive differences: breakpoints, column changes, hidden/shown
   content, menu behavior, image crops, spacing changes, and typography changes.

If a network command is required to fetch page source, CSS, JS, or assets for
migration-time inspection, request approval instead of guessing.

## Style Capture Details

Record these values before rebuilding:

- Colors: text, background, brand, accent, border, hover, active, disabled.
- Typography: family, size, weight, line height, casing, letter spacing.
- Layout: max width, gutters, container padding, section padding, gaps, grids,
  flex direction, alignment, ordering, sticky offsets, and z-index.
- Components: button sizes, radii, icons, shadows, borders, cards, badges,
  form controls, tabs, accordions, sliders, counters, and nav menus.
- Media: image dimensions, aspect ratios, object fit, crops, priority/LCP role,
  lazy loading, alt text, and final local filename.
- Motion: keyframe names, transform values, opacity values, easing, duration,
  delay, repeat behavior, trigger, and final/resting states.

## Implementation Rules

- Do not import live CSS, JS, fonts, images, or assets from `dynamicdreamz.com`
  in production code.
- It is allowed to read and copy style values, keyframes, timings, and layout
  rules from the live site during migration.
- Port only the needed style behavior into local code. Avoid dumping large,
  unmanaged old CSS files into the app.
- Prefer Tailwind utilities and shared components for stable patterns.
- Use CSS variables in `src/app/globals.css` for repeated brand colors, spacing,
  shadows, radii, and animation timings.
- Use local `@keyframes` or scoped CSS modules for reusable animation behavior.
- Use a Client Component only when animation or interaction needs browser state,
  measurements, observers, timers, or event handlers.
- Add `prefers-reduced-motion` handling for meaningful animations.
- Prefer transform and opacity animations for performance. Avoid scroll or
  animation code that causes layout thrashing.

## Verification Loop

Before calling visual work complete:

1. Run the local dev server.
2. Compare live and local screenshots at roughly 390px, 768px, and 1440px.
3. Check initial, hover, focus, open, scrolled, and animated states.
4. Verify animation timing, easing, direction, delay, and final state against
   the live site.
5. Verify no text overlap, layout shift, horizontal scroll, broken image crop,
   or missing responsive state.
6. Inspect final code for live-site URLs and remove any runtime dependency.

If exact parity cannot be reached because an animation is hidden behind a script,
asset, interaction, browser API, or approval blocker, document the missing detail
clearly in the final response and ask for the specific source, recording, or
approval needed.
