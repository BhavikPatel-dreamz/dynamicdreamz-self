# Shared Theme Why-Choose Typography

**Component**: `ThemeWhyChooseSection`
**Date**: 2026-08-27
**Status**: Shared typography primitives adopted

## Visual Reference and Scope
- The section heading and subtitle are shared across theme-customization and migration routes.
- `SectionHeading` supplies the standard responsive H2 typography on desktop, tablet, and mobile.
- `SectionDescription` supplies the subtitle paragraph while retaining the existing section hook, 10px top spacing, 16px size, medium weight, muted color, and 30.4px line height at all breakpoints.
- The shared heading block is centered with `mx-auto` and constrained consistently to `max-w-[920px]` across every consumer.
- The `top-icon` content grid is centered and constrained to 920px. The standard `left-icon` and `top-icon-mobile` grids remain full container width.
- Existing `<br>` visibility at the 1199px breakpoint remains unchanged.

## Interaction and Animation
- The heading block has no interactive or animated states.

## Remaining Differences
- None for the requested shared-component refactor.
