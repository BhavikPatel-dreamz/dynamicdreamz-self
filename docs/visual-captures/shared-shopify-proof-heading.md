# Shared Shopify Proof Heading

- Date: 2026-08-27
- Scope: `ShopifyReasonsSection` heading across grid and carousel consumers.
- Current implementation inspected: raw `h2`, local heading class constant,
  `formatBrText`, `preserveHeadingBreaks`, and shared `SectionHeading` usages.
- Approved change: replace the raw heading element with `SectionHeading` so the
  shared 35px responsive display typography is the single source of truth.
- Responsive line-break behavior: unchanged; route-provided breaks remain
  controlled by `preserveHeadingBreaks` and `formatBrText`.
- Interaction and animation: not applicable.

## Shared description

- Approved follow-up: replace the adjacent raw description paragraph with
  `SectionDescription`.
- Preserve section-specific layout (`720px` maximum width, centered, 24px top
  spacing), the `shopify-proof-sec-details` hook, content, and responsive
  `<br>` behavior. Shared paragraph typography becomes the source of truth.
