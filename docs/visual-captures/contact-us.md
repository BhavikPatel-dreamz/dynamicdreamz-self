# Contact Us

Live URL: https://www.dynamicdreamz.com/contact-us/
Local route: `/contact-us`
Date checked: 2026-08-17
Browser: Chromium 140 headless

## Captures

- Live desktop: `docs/visual-captures/contact-us-live-desktop.png` at 1440px.
- Live mobile: `docs/visual-captures/contact-us-live-mobile.png` at 390px.
- Local desktop: `docs/visual-captures/contact-us-local-desktop.png` at
  1440px, with viewport crop in
  `docs/visual-captures/contact-us-local-desktop-viewport.png`.
- Local mobile: `docs/visual-captures/contact-us-local-mobile.png` at 390px.
- Live page source: `docs/visual-captures/source/contact-us-live-page.html`.

## Sources Inspected

- Rendered live page and View Page Source.
- `docs/visual-captures/source/contact-main.css`.
- `docs/visual-captures/source/contact-media.css`.
- `docs/visual-captures/source/dynamicdreamz-style.css`.
- `docs/visual-captures/source/dynamicdreamz-default-media.css`.
- Shared live header/footer CSS for surrounding page geometry.

## Live Structure

1. Fixed shared header.
2. Centered `Connect with us` hero with two supporting lines.
3. Three-column contact panel for sales, jobs, and social profiles.
4. `Our Offices` two-card grid for Surat and Ahmedabad.
5. Gradient-border `Reach Out to Us` inquiry form.
6. Shared footer and floating WhatsApp contact widget.

## Measured Visual Contract

- Desktop content width follows the shared 1180px container.
- Hero: 230px top padding and 50px bottom padding; H1 is 50px/66px.
- Tablet/mobile hero: 140px top padding; H1 becomes 40px/50px below
  992px and 30px/40px below 768px.
- Contact panel: 1px `#d9d9d9` border, 20px radius, equal thirds at
  desktop, two columns at tablet, and one column below 768px.
- Office section: two equal columns with 30px gutter; cards use a 10px
  radius, 1.5px `#e4e4e4` border, 248px media height, and 32px body padding.
- Office media drops to 150px at tablet; cards stack below 768px.
- Inquiry shell: 30px radius, 2px green/cyan gradient border, white inner
  panel with 90px top/side padding and 49px bottom padding.
- Inquiry fields: two columns at desktop, one below 768px; 1.5px
  `#dfdfdf` border, 5px radius, 12px 16px padding; textarea is 136px tall.
- Page sections use 80px vertical spacing at desktop and 50px below 992px.

## Interaction States

- Contact links change to brand red over 300ms.
- Office images scale to 1.1 over 600ms on hover.
- Directions arrow shifts from 6px to 8px left margin over 300ms.
- Submit fill slides out to the right over 600ms on hover.
- Required-field validation focuses `#contact-name`; the local keyboard focus
  ring is 3px and remains clearly visible.
- Office-image hover reaches `scale: 1.1`; reduced-motion mode shortens its
  transition duration to `0.001s`.
- With no delivery webhook configured, a valid submission returns the local
  fallback status and restores the submit button instead of throwing a server
  error.

## Asset Decisions

- The exact two office photographs are stored under
  `public/assets/contact/offices/**`; the full asset tree was hash-checked before
  adding them and contained no identical copies.
- Exact live contact and directions icons are stored under
  `public/assets/contact/icons/**`; the full asset tree contained no identical
  copies.
- Reuse the existing project-owned brand, footer award, social profile, and
  shared layout assets.

## Reuse Decisions

| Existing implementation | Decision |
| --- | --- |
| `SiteHeader`, `SiteFooter`, `ContactWidget`, `Container` | Reuse unchanged |
| Existing footer social SVG implementations | Keep footer unchanged; use the live contact-page icons for exact panel parity |
| Existing metadata and schema helpers | Extend with a typed contact-page entry and ContactPage graph |
| Existing page sections | No current section matches the contact panel, office grid, or inquiry form contract; add one server-rendered contact page section and one narrow client form boundary |

## Verification

- The 1440px live/local viewport comparison preserves section order, container
  width, typography, borders, imagery, form geometry, and CTA styling. The local
  sections sit approximately 8px higher after the hero copy; this is the only
  material contact-page spacing difference in the compared viewport.
- At 390px, the document and viewport widths are both 390px. Office cards are
  350px wide and start 20px from the left edge.
- The canonical is `https://www.dynamicdreamz.com/contact-us`, the page has one
  `Connect with us` H1, and the rendered JSON-LD includes `ContactPage`.
- LinkedIn, Instagram, office-image, and form labels were checked for accurate
  accessible names and alt text.

## Remaining Differences

- The live mobile page clips content and its header CTA horizontally. The local
  route intentionally keeps the same composition without horizontal overflow,
  so the complete CTA, text, cards, and form remain usable at 390px.
- The shared migrated header, footer, and floating contact widget are reused as
  implemented elsewhere in the application; footer taxonomy differences from
  the legacy shell are outside this route's component scope.
- Cloudflare Turnstile and Contact Form 7 were not copied from WordPress. The
  local form uses a honeypot and server-side validation, with delivery configured
  through `CONTACT_FORM_WEBHOOK_URL` and optional
  `CONTACT_FORM_WEBHOOK_TOKEN`.
