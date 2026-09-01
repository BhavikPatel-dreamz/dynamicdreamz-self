# Shared Service Hero Image Dimensions

- Scope: split-layout pages rendered by `ServiceHeroSection`
- Date checked: 2026-09-01
- Requested visual contract: every `.service-img` hero image uses intrinsic
  dimensions of 469px wide by 224px high.
- Source inspected: the shared `ServiceHeroSection`, all component usages found
  under `src/components/sections/`, and the bundled Next.js image documentation.
- Responsive behavior: the existing `h-auto` class remains in place, allowing
  the image to preserve the 469:224 aspect ratio when constrained by its column.
- Interaction states and animation timings: none; this is a static hero image.
- Live screenshots: not required for this owner-specified shared dimension
  correction.
- Local screenshots: not captured; verification is covered by the shared
  component inspection and project checks.
- Remaining differences: page-specific `imageClassName` values can still impose
  narrower maximum widths while preserving the shared intrinsic ratio.
