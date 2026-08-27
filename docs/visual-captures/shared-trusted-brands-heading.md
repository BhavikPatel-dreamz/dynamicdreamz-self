# Shared Trusted Brands Heading Capture Note

- Scope: shared `IndustryBrandsSection` and page-provided `Trusted by Leading Brands` headings.
- Reference inspected: archived live-page sources under `docs/visual-captures/source/` and current local component/content implementations.
- Approved visual change: remove the forced `<br>` between `Trusted by` and `Leading Brands` across production source.
- Responsive behavior: allow the heading to wrap naturally at every viewport width; no breakpoint-specific forced break remains.
- Interaction and animation: unchanged.
- Remaining difference from archived live markup: archived capture evidence retains its original `<br>` intentionally; shipped UI does not.

## Shared component rollout — 2026-08-27

- User-provided desktop references: the approved design uses the standard
  `IndustryBrandsSection` layout with the heading and logo rail on one row; the
  superseded design uses route-owned `our-client-sec` markup.
- Local source inspected: `IndustryBrandsSection`, `ClientLogoSlider`,
  `ResourcesBrandStrip`, all `our-client-sec` source matches, and all current
  `IndustryBrandsSection` consumers.
- CSS/JS sources inspected: current Tailwind classes in the shared section and
  the slider's existing animation implementation; no new CSS or JavaScript is
  required.
- Responsive breakpoints: retain the shared 1199px width adjustment and the
  stacked heading/logo layout below 991.98px.
- Interaction states and animation timings: retain the shared slider's existing
  autoplay, hover, focus, and reduced-motion behavior.
- Implemented difference: replaced the final route-owned brand strip on
  Resources with `IndustryBrandsSection`, while preserving its route-specific
  logo data.
- Verification: production build and all repository policy checks pass. A local
  screenshot was not added because this workspace has no installed browser
  capture runtime; the supplied desktop reference remains the visual baseline.

## Desktop geometry correction — 2026-08-27

- Local screenshot supplied by the owner shows the remaining mismatch on
  `/square-to-shopify-migration`: the heading still wraps because the legacy
  1140px left-padding calculation leaves a narrow title area on wide screens.
- Approved target: the first supplied reference, with the title on one line and
  the strip aligned to the site's wide desktop content geometry.
- Planned correction: use the 1334px inner rail above 1400px and prevent the
  desktop heading from wrapping; retain the existing stacked mobile layout.

## Responsive title typography — 2026-08-27

- Reference: live `/square-to-shopify-migration/` and the archived live
  `.our-client-sec .main-wrapper h2` stylesheet rule.
- Live title typography: `25px` font size, `33px` line height, `600` weight,
  and `-0.02em` letter spacing.
- Media CSS inspected: 1199px, 991px, and 767px rules; none overrides the
  client-section title typography, so the same values apply at every viewport.
- Planned correction: remove compact/mobile title-size overrides from the
  shared component so every page and density uses the live values.

## Owner-provided title rule — 2026-08-27

- Approved source of truth: owner-provided `.our-client-sec h2` CSS.
- Final typography: Montreal Medium, 20px/26.4px, normal letter spacing and
  zero margin; 18px at 1199px and below.
- Scope: every `IndustryBrandsSection` consumer and both density variants.

## Slider Tailwind consolidation — 2026-08-27

- Existing implementation inspected: `ClientLogoSlider`, its React Slick DOM
  contract, and every selector in `client-logo-slider.module.css`.
- Approved implementation change: translate the module's fixed heights,
  alignment, image constraints, responsive padding, grab cursor, compact sizing,
  and reduced-motion duration into component-local Tailwind utilities.
- Visual and interaction target: no change; this is an implementation-only
  consolidation that removes the standalone CSS module.

### Owner-provided CSS correction

- Final approved shared rule: `20px` font size, `26.4px` line height, zero
  margin, and normal letter spacing.
- At `max-width: 1199px`, only the font size changes to `18px`; the `26.4px`
  line height remains in effect.
- This owner-provided rule supersedes the previously recorded 25px archived
  stylesheet value and applies to every `our-client-sec` instance.
