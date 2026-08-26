# Shared Eyebrow UI

## 2026-08-26 Tailwind Primitive Consolidation

- References inspected: owner-selected homepage Shopify Plus eyebrow; current
  homepage capture and supplied live CSS; case-study listing, portfolio
  showcase, and our-work eyebrow implementations.
- Shared visual contract: inline line-and-label composition, uppercase label,
  semibold weight, 13px desktop and 12px mobile type, 30px desktop line and
  25px mobile line, and brand-red rule.
- Responsive breakpoints: mobile typography and line width change at 767px;
  callers may select centered or desktop-start/mobile-centered alignment.
- Interaction states and animation: decorative/static content with no hover,
  focus, active, or animation behavior.
- Intentional variants: semantic `p` or `span`, ink/muted/inverse text, 1px or
  2px rule thickness, fixed or responsive rule width, and an `unstyled` escape
  hatch for genuinely different future treatments.
- Excluded pattern: the homepage hero establishment/partner row remains
  specialized because it includes two labels and a separator dot.
- Remaining differences: none expected; refactor preserves each caller's
  existing margin and visibility utilities.
