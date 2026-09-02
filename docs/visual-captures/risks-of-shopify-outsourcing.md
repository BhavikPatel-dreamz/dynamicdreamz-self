# Visual Capture Note: Risks of Shopify Outsourcing

**Route**: `/risks-of-shopify-outsourcing`
**Live URL**: `https://www.dynamicdreamz.com/risks-of-shopify-outsourcing/`
**Capture Date**: 2026-09-01
**Browser / viewports**: Headless Chrome; desktop 1440x900, tablet 768x1024, and mobile 390x844.

## Screenshots

- Live desktop: `docs/visual-captures/risks-of-shopify-outsourcing-live-desktop.png`
- Live tablet: `docs/visual-captures/risks-of-shopify-outsourcing-live-tablet.png`
- Live mobile: `docs/visual-captures/risks-of-shopify-outsourcing-live-mobile.png`
- Local desktop: `docs/visual-captures/risks-of-shopify-outsourcing-local-desktop.png`
- Local tablet: `docs/visual-captures/risks-of-shopify-outsourcing-local-tablet.png`
- Local mobile: `docs/visual-captures/risks-of-shopify-outsourcing-local-mobile.png`

## Live Structure Captured

1. **Inner hero (`.inner-hero-sec.risk-shopify-sec`)**: white, centered H1, max-width 830px, 190px top padding and 130px bottom padding on desktop; 140px top and 60px bottom at tablet; 30px H1 / 40px line-height on mobile through the shared theme rules.
2. **Topic/content panel (`.new-web-magento-tab`)**: border-top, 60px top padding, two-column layout with a 367px sticky topic box and a scrollable content column. Topic links scroll to four content headings. The first topic is active by default; active links use Dynamic Dreamz red and a 3px red marker.
3. **FAQ (`.faq-sec`)**: centered “Frequently Asked Questions” heading and six bordered accordion items. The first item is open by default. Desktop item padding is 24px 70px 24px 32px with 32px plus/minus icons; tablet and mobile reduce padding/icon sizes.
4. **Dark CTA (`.thinking-migration-box`)**: full-width content container with the `think-migration.png` background, centered white heading/body/button, 80px bottom spacing.
5. **Gradient quote banner (`.request-banner`)**: shared green-to-cyan gradient with centered heading and white CTA button.

## Source / Behavior Inspected

- View source metadata, headings, links, FAQ markup, and local section DOM around lines 1327-1465 of the captured HTML.
- Live styles: `assets/css/risks-shopify/main.css` and `assets/css/risks-shopify/media.css`; key values recorded above, including 800ms topic scroll animation, 2s `float-up-down` keyframe (no visible hero image on this template), and FAQ border/padding rules.
- Live script: `assets/js/risks-shopify.js`; topic links animate the internal content scroller, the first topic is active by default, and the FAQ allows one open item at a time with the first item initially open.
- Responsive differences: the topic panel stacks above content at <=1199px and loses sticky positioning; the hero bottom padding reduces; FAQ typography and icon dimensions reduce at <=1199px and <=767px.

## Local Verification

- Final browser screenshots were captured at 1440x900, 768x1024, and 390x844 and compared with the matching live captures. The centered hero typography, 830px text measure, whitespace, topic card widths, stacked tablet/mobile behavior, content order, headings, FAQ presentation, and CTA treatments match the live template closely.
- Chrome protocol checks: no horizontal overflow at all three widths; H1 computes to Neue Montreal Medium, weight 500, at 50px/40px/30px; one H1 and six FAQ items render.
- Topic interaction: selecting the second topic moved the internal content scroller from `0` to `746px` and applied the live red active state.
- FAQ interaction: first item is open by default; selecting item two closes item one and opens item two.
- Runtime audit: zero `dynamicdreamz.com` resource requests; the dark CTA resolves `/assets/backgrounds/think-migration.png` locally. Reduced motion falls back to the app-wide 1ms transition/animation rule.
- Intentional implementation difference: the live page relies on jQuery animation; the local version uses a focused React client island and native smooth scrolling while preserving the same default visual and interaction result.
