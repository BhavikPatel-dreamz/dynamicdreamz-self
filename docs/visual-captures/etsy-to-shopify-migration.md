# Etsy to Shopify Migration - Visual Parity Notes

## Live Site Context
- **Target Page**: `https://www.dynamicdreamz.com/etsy-to-shopify-migration/`
- **Goal**: Perfect visual parity with the live site.

## Capture
1. **Hero**: Split hero with text + red CTA on left, illustration and review badges on right. Handled by `ServiceHeroSection`.
2. **Brand Logos**: Owl carousel of 12 brands. Matches `square-to-shopify-migration` brands exactly. Handled by `IndustryBrandsSection`.
3. **TextBox**: "Why Migrate from Etsy to Shopify?" text box centered. Handled by `TextBoxSection`.
4. **Benefits Grid**: 5 cards detailing benefits. Handled by `ShopifyReasonsSection`.
5. **Things to Consider**: Two center col info boxes layout with a center illustration. Handled by `TwoColCenterImageSection`.
6. **Migration Process**: Step-by-step process with nested bullet points in Steps 4 and 5. Handled by `MigrationProcessSection` properly fed with `categories` in step 4 and 5.
7. **What After Migration / Why Choose Us**: Handled by extending `ThemeWhyChooseSection` with a `variant="top-icon"` for Section 7, and the default `variant="left-icon"` for Section 8.
8. **Testimonials**: Handled by `HappyClientSection`.
9. **FAQ**: 8 FAQs. Handled by `FaqSection`.

## Outcomes
- Verified zero duplicate assets using hash matching. Reused canonical prestashop and generic assets.
- Responsive structures matched for desktop, tablet, and mobile.
