# Shared Service Hero Reviews

- Date: 2026-08-27
- Approved visual reference: local `/prestashop-to-shopify-migration`, using
  the owner-highlighted Clutch, Upwork, and GoodFirms review-card row.
- Scope inspected: both `ServiceHeroSection` render branches, all 31 consumers,
  the Barcelona hero review cards, Resources story reviews, white-label hero
  review marks, hiring review animation, and request-quote review content.
- Reuse decision: the two service-hero copies and Barcelona cards are the same
  visual/business pattern and will share one component. Resources, white-label,
  hiring, and request-quote use distinct patterns and remain unchanged.
- Desktop target: three equal cards with a 15px gap, 57px top margin, gradient
  one-pixel border, white inset, floating review-count pill, platform wordmark,
  five-star image, and 22px rating.
- Responsive target: below 991px, stack full-width cards centered at a 400px
  maximum, use row-reverse card content, 18px/24px padding, 16px rating, and a
  50px top margin.
- Interaction states: preserve linked cards, focus behavior, external-link
  semantics, and the subtle hover lift.
- Animation timing: 150ms default Tailwind transform transition; no autonomous
  animation.
- Remaining differences: page-specific review counts, logos, intrinsic logo
  sizes, destinations, and accessible text remain supplied by typed content.

## Logo normalization — 2026-08-27

- Comparison: Square supplies 69x19, 78x23, and 105x16 logo dimensions and a
  different GoodFirms asset; PrestaShop supplies 57x19, 64x19, and 86x19.
- Approved target: PrestaShop's platform assets and intrinsic display dimensions
  for Clutch, Upwork, and GoodFirms on every matching hero review panel.
- Implementation plan: keep counts, ratings, destinations, and accessible text
  route-driven, but resolve known platform-logo presentation through shared
  typed content data. Unknown future platforms retain their supplied fallback.
