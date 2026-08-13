# Visual Parity Workflow

Use this workflow whenever a page, section, component, animation, hover state,
or responsive layout must match the live Dynamic Dreamz site.

The goal is exact visual and behavior parity, not byte-for-byte old code. Use
the live CSS/JS as migration reference, then rebuild the same result with local,
maintainable Next.js components and Tailwind utilities.

## Non-Negotiable Gate

For any visual migration or visual fix, create or update a capture note before
editing UI code:

```text
docs/visual-captures/<route-or-component>.md
```

Skip this only for copy-only, metadata-only, or link-only work that does not
change layout, style, assets, animation, or responsive behavior.

The capture note must prove what was inspected, not just say "matched live":

- Live URL, local route, date checked, browser, and viewport sizes.
- Live screenshots captured at desktop, tablet, and mobile.
- Local screenshots captured at the same viewport sizes after implementation.
- CSS/JS files or DevTools panels inspected for selectors, computed styles,
  keyframes, transitions, and scroll/interaction scripts.
- Responsive differences observed between desktop, tablet, and mobile.
- Interaction and animation states checked.
- Any intentional differences from the live site and why they are acceptable.

Do not claim visual parity in a final response unless this evidence exists or
the final response clearly says visual parity was not verified.

## AEO/GEO Live-UI Preservation Gate

During migration, an AEO/GEO or SEO task must preserve the live page's default
visible result. Do not change visible wording, heading text, CTA labels,
taxonomy, cards, counters, proof/review text, section order, spacing, styling,
motion, or interaction defaults unless the project owner explicitly approves
the exact visible change in the current task.

Safe nonvisual work includes accurate metadata, canonicals, robots/sitemap,
crawlability, schema that matches visible content, server-rendering
improvements, and semantic/accessibility changes that do not alter the default
appearance. Put any recommended visible improvement in
`docs/page-content-improvements.md` as `suggested` or `deferred`. If a required
fix cannot be made without a visible difference, document it and request
approval before editing UI code.

## Capture First

Before implementing visual work:

1. Open the live URL and the matching local route.
2. Capture desktop, tablet, and mobile screenshots of the live page at roughly
   1440x900, 768x1024, and 390x844. Add extra widths if the live CSS has
   important breakpoints.
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

## Live CSS And JS Capture

The rendered page and View Page Source are not enough. Before rebuilding a
visual section:

1. Identify the live DOM selectors/classes for the section.
2. Inspect computed styles for representative elements, including default,
   hover, focus, active/open, and scrolled states.
3. Open the live CSS files that affect the section and search for the relevant
   selectors, responsive media queries, pseudo-elements, `@keyframes`,
   `transition`, and `animation` declarations.
4. Open the live JS files that affect motion or interaction and search for
   slider, accordion, counter, sticky, scroll-trigger, reveal, marquee, and
   menu behavior.
5. Record exact values that affect visual parity: dimensions, offsets, gaps,
   colors, type sizes, line heights, z-index, transform origins, opacity,
   easing, duration, delay, repeat count, and final/resting state.
6. If live scripts are bundled or minified, use DevTools computed styles,
   Animation panel, screenshots, short recordings, and DOM state changes to
   infer behavior. Mark inferred values clearly in the capture note.

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
- Use clean Tailwind utilities and shared components for styling.
- Do not add custom page, section, component, animation, or one-off layout
  styles to `src/app/globals.css`.
- Keep `src/app/globals.css` minimal for Tailwind setup and unavoidable app-wide
  base rules only.
- If CSS is truly unavoidable for keyframes or complex browser behavior, scope
  it to the component instead of putting it in `globals.css`.
- Keep visually rich page sections as Server Components unless the section
  itself needs browser-only behavior.
- Use a Client Component only when animation or interaction needs browser state,
  measurements, observers, timers, event handlers, or browser APIs.
- If only part of a section is interactive, extract that part as a small Client
  Component and keep the surrounding section server-rendered.
- Add `prefers-reduced-motion` handling for meaningful animations.
- Prefer transform and opacity animations for performance. Avoid scroll or
  animation code that causes layout thrashing.
- Use stable dimensions and explicit responsive constraints for repeated cards,
  sliders, accordions, logos, counters, and media frames so local content cannot
  create layout shift or overflow that the live site does not have.
- Preserve the live interaction model before improving it: click targets,
  active item defaults, autoplay/pause behavior, swipe/drag behavior, keyboard
  behavior, sticky offsets, and menu close behavior should be captured before
  implementation.
- When Tailwind defaults differ from the live site, use project tokens or
  Tailwind arbitrary values to match the live value first. Refactor into shared
  tokens/components only after the same value repeats.

## Verification Loop

Before calling visual work complete:

1. Run the local dev server.
2. Capture local screenshots at the same viewport sizes used for the live
   screenshots.
3. Compare live and local screenshots side by side at roughly 390px, 768px, and
   1440px.
4. Check initial, hover, focus, open, scrolled, and animated states.
5. Verify animation timing, easing, direction, delay, and final state against
   the live site.
6. Verify no text overlap, layout shift, horizontal scroll, broken image crop,
   or missing responsive state.
7. Inspect final code for live-site URLs and remove any runtime dependency.
8. Update the capture note with remaining differences, fixed differences, and
   the final verification result.

If exact parity cannot be reached because an animation is hidden behind a script,
asset, interaction, browser API, or approval blocker, document the missing detail
clearly in the final response and ask for the specific source, recording, or
approval needed.
