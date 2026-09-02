# Visual Capture: Global Portfolio Showcase Refresh

- **Affected component**: `PortfolioShowcaseSection`
- **Affected usages**: All 67 current page consumers
- **Capture date**: 2026-09-02
- **Status**: Implemented and responsively verified

## References inspected

- User-provided old desktop screenshot: centered heading and description above
  a three-column project grid and centered CTA.
- User-provided approved desktop screenshot: `PORTFOLIO` eyebrow with the title
  in the left header column, description in the right header column, followed by
  the project grid and centered CTA.
- User clarification selected the Shopify Development Company in Chennai
  portfolio as the canonical UI for every shared portfolio section.
- Existing local `PortfolioShowcaseSection`, `SplitSectionHeading`,
  `PortfolioProjectCard`, and all current component usages.
- Existing visual-capture notes for theme customization, WordPress, Shopify,
  ecommerce, and mobile-app portfolio sections.

## Responsive and interaction requirements

- Desktop: Chennai's four-column `liveGrid` is the default; preserve an explicit
  page override only where specialized content requires it.
- Tablet: header stacks and centers through the existing 992px breakpoint;
  project grids retain their existing responsive column rules.
- Mobile: one-column project grid through the existing 767px breakpoint.
- Preserve current project-link hover/focus overlays, image zoom variants,
  platform marks, app-store links, and CTA hover/focus behavior.
- Preserve all page-specific headings, descriptions, categories, project names,
  destinations, images, alt text, and CTA labels.

## Implementation decision

- Make the approved split header the shared default instead of editing 67 page
  files independently.
- Use the Shopify Development Company in Chennai four-column `liveGrid`
  treatment as the canonical component default: split header, compact eyebrow
  spacing, `ourWorkRefresh` cards, and centered CTA. Pages provide their own
  typed content, including optional CTA label and destination values.
- Keep the centered header option for backward-compatible explicit use.
- Store the default `PORTFOLIO` eyebrow in shared content, not component markup.

## Verification completed

- Captured the complete Astra page at 1440px: the portfolio uses the approved
  Chennai split header, four-column `ourWorkRefresh` grid, red categories,
  circular arrow controls, and centered CTA with Astra-specific content.
- Captured the complete Astra page at 390px: the header stacks and centers, and
  project cards render in one column without horizontal overflow.
- Captured the complete Android app development page at 1440px: the split header
  is applied while its explicit four-column layout, tall image aspect ratio,
  app-card presentation, and CTA remain intact.
- Existing card classes were retained for hover/focus overlays, image zoom,
  platform marks, app-store links, and CTA transitions.
- Remaining difference from the approved reference is content-driven: pages
  retain their existing approved headings, descriptions, item counts,
  categories, and project data rather than adopting the reference page's copy.
