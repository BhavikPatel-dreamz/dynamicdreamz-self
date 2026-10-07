# Contact Us

Live URL: https://www.dynamicdreamz.com/contact-us/
Local route: `/contact-us`
Date checked: 2026-10-07
Browser: Chromium 140 headless

## Captures

- Live desktop: `docs/visual-captures/contact-us-live-desktop.png` at 1440px.
- Live tablet: `docs/visual-captures/contact-us-live-tablet.png` at 768px.
- Live mobile: `docs/visual-captures/contact-us-live-mobile.png` at 390px.
- Local desktop: `docs/visual-captures/contact-us-local-desktop.png` at 1440px.
- Local tablet: `docs/visual-captures/contact-us-local-tablet.png` at 768px.
- Local mobile: `docs/visual-captures/contact-us-local-mobile.png` at 390px.

## Sources Inspected

- Rendered live page and View Page Source (live site modified 2026-10-05).
- `scratch/contact-us-live.css`.
- `scratch/extracted-rules-utf8.css`.
- Computed styles from Chrome DevTools for hero, jump pills, inquiry card, office cards, and contact details grid.
- Shared live header/footer CSS for surrounding page geometry.

## Live Structure (October 2026 Redesign)

1. Shared fixed site header.
2. `inner-hero-sec contact-sec` with cream/peach background (`#fbeed5`), eyebrow `Contact Dynamic Dreamz`, H1 `Let’s connect.`, paragraph `Have a project in mind, a question about our work, or need help scaling your store? Drop us a line or visit one of our offices below.`, and 3 anchor jump links (`#message`, `#offices`, `#contact-details`).
3. `#message` Reach out form card: nested within the `#fbeed5` background with negative margin / seamless continuity. White card with 30px radius, 1px border `rgba(40,40,40,0.11)`, `0 28px 70px rgba(0,0,0,0.06)` shadow, eyebrow `Send us a message`, H2 `What can we help you with?`, subtext, 2-column input grid (First name, Last name, Email address, Phone number with +91 country prefix indicator, Project overview, Budget dropdown), bottom row with left-aligned note (`Your message will be directed to the appropriate team.`) and right-aligned `submit inquiry` pill button.
4. `#offices` Our offices section: mint/sage gray background (`#eff4ef`), eyebrow `Send us a message`, H2 `Our offices`, subtext, 2 white cards for Surat and Ahmedabad with city title, address, telephone link with red phone icon, and `GET DIRECTIONS` link with red diagonal arrow icon. Note: live DOM commented out office photos (`<!-- div class="office-img" ... -->`), so only the text and contact info card render per WordPress hidden DOM rules.
5. `#contact-details` Contact Details section: pure white background (`#ffffff`), eyebrow `Other ways to reach us`, H2 `Contact Details`, 4-column compact grid with hover tint `#f7f4e9` for:
   - Sales: email, phone
   - Careers: email, phone, `View Open Positions` link to `/career`
   - Book a Discovery Call: description, `Schedule a Call` link to `/book-a-discovery-call`
   - Follow Us: description, circular LinkedIn & Instagram icons
6. Shared footer and floating WhatsApp contact widget.

## Measured Visual Contract

- Container widths:
  - Hero container: max-w-[1220px] px-5 sm:px-8.
  - Form container: max-w-[1020px] px-5 sm:px-8.
  - Offices container: max-w-[1220px] px-5 sm:px-8.
  - Contact Details container: max-w-[1240px] px-5 sm:px-8.
- Background colors:
  - Hero & Form: `#fbeed5` (cream/peach).
  - Offices: `#eff4ef` (sage/mint gray).
  - Contact Details: `#ffffff` (pure white).
- Typography & Headings:
  - Hero eyebrow: uppercase, tracking `[0.18em]`, text `[11px]`, font medium, text `#282828`.
  - Hero H1: `text-3xl sm:text-4xl md:text-5xl lg:text-[52px]` with `font-medium tracking-tight text-[#282828] leading-[1.08]`.
  - Section H2s: `text-2xl sm:text-3xl md:text-[38px]` with `font-medium text-[#282828] leading-[1.12]`.
- Jump navigation pills:
  - 1px border `rgba(40,40,40,0.2)`, 100px pill radius, text `[13px]`, font medium, text `#282828`.
  - Hover state: background `#282828`, text `#ffffff`, transition 300ms.
- Inquiry form card:
  - Background `#ffffff`, border 1px `rgba(40,40,40,0.11)`, radius 30px, shadow `0 28px 70px rgba(0,0,0,0.06)`.
  - Padding: 40px mobile, 52px sm, 70px md, 84px lg.
  - Input fields: 1.5px `#dfdfdf` border, 5px radius, 12px 18px padding, focus ring 2px `#ad5151`, placeholder `#282828`.
  - Phone input: Interactive country picker with flag, dial code, down arrow chevron, search filter box, and full list of 244 countries matching live intl-tel-input coverage.
  - Submit button: pill radius (9999px), background `#ad5151`, text `#ffffff`, uppercase tracking `[0.08em]`, text `[13px]`, font medium.
- Office cards:
  - Background `#ffffff`, border 1px `rgba(40,40,40,0.11)`, radius 20px, shadow `0 14px 40px rgba(0,0,0,0.04)`.
  - Padding: 36px desktop, 28px mobile.
  - Directions CTA: uppercase tracking `[0.14em]`, text `[11px]`, font bold, text `#ad5151`, hover text `#282828`, with diagonal arrow icon.
- Contact Details cards:
  - Background `#ffffff`, border 1px `rgba(40,40,40,0.11)`, radius 18px, padding 32px (mobile 24px).
  - Hover state: background `#f7f4e9`, transition 300ms.
  - Social icons: 36x36 circular buttons, border 1px `rgba(40,40,40,0.15)`, hover background `#282828`, hover text `#ffffff`.

## Interaction States

- Jump anchor buttons smoothly scroll to `#message`, `#offices`, and `#contact-details`.
- Phone country dropdown opens on click, supports instant search filtering by country name/code, keyboard navigation, Escape to close, and outside-click dismiss.
- Contact links change to brand red over 300ms.
- Directions arrow animates subtly on hover.
- Form validation focuses the first invalid field with a clear focus ring.
- Inquiry form supports asynchronous submission with pending/success/error status messages.
- With no delivery webhook configured, a valid submission returns the local fallback status cleanly without unhandled server errors.

## Asset & Icon Decisions

- Canonical diagonal arrow icon rendered via inline SVG matching `public/assets/icons/diagonal-arrow-white.svg` vector path (`M0.331035 10.2567C...`).
- Phone icon matches canonical phone SVG path.
- Social icons (LinkedIn, Instagram) use canonical paths with accessible names.
- Zero duplicate assets across `public/assets/`.

## Verification

- The 1440px desktop side-by-side screenshot comparison confirms 1:1 visual parity across all 4 sections (hero, form card, office cards, contact details grid).
- The 768px tablet comparison confirms exact responsive grid wrapping and spacing.
- The 390px mobile comparison confirms exact mobile card stacking, full-width submit button, and zero horizontal overflow.
- The canonical URL is `https://www.dynamicdreamz.com/contact-us`.
- JSON-LD structured data outputs valid `ContactPage` schema referencing both offices and contact channels.
- `npm run check:urls` passed (0 trailing slashes).
- `npm run check:component-content` passed (525 source files compliant; zero hardcoded copy in components).
- `npm run check:asset-duplicates` passed (0 duplicates).

## Remaining Differences

- The shared migrated header, footer, and floating contact widget are reused as implemented in the site layout shell.
- Cloudflare Turnstile and Contact Form 7 were not copied from WordPress. The local form uses a honeypot, typed client/server validation, and configurable webhook dispatch via `CONTACT_FORM_WEBHOOK_URL`.
- Office photos commented out in live Elementor markup are omitted in local code to eliminate WordPress hidden DOM debt.
