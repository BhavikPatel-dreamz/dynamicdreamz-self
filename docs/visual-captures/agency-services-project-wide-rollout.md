# Agency Services Project-Wide Rollout

- Date: 2026-09-01
- Owner direction: replace every active `ShopifyServicesSection` page usage
  with the reusable `AgencyServicesSection` design.
- Content preservation: retain every page's existing heading, description,
  service title, service description, icon, and destination.
- Shared visual contract: use the compact agency-services card layout, split
  section heading, responsive two-to-one-column grid, and shared card styling.
- Compatibility: `AgencyServicesSection` accepts both `href` and the legacy
  `link` field, plus an optional CTA, so page content does not need duplicate
  adapters.
- Responsive contract: two columns on desktop and one column below 993px.
- Rollout result: 47 legacy page consumers migrated; no active page imports or
  JSX usages of `ShopifyServicesSection` remain.
- Automated verification: TypeScript, lint, all repository policy checks, and
  the production build passed. Lint reports one unrelated existing unused
  `squarespaceFaqs` warning.
