# Visual Parity Capture: Book a Discovery Call

- **Route**: `/book-a-discovery-call`
- **Live URL Reference**: `https://www.dynamicdreamz.com/book-a-discovery-call/`
- **Capture Date**: 2026-09-02
- **Browser**: Google Chrome headless (live capture)
- **Viewports Inspected**:
  - Desktop: 1440x900
  - Tablet: 768x1024
  - Mobile: 390x844
- **Live Screenshots**:
  - `docs/visual-captures/book-a-discovery-call/live-1440.png`
  - `docs/visual-captures/book-a-discovery-call/live-768.png`
  - `docs/visual-captures/book-a-discovery-call/live-390.png`

## Live Structure

1. Shared Dynamic Dreamz header with desktop navigation at 1440px and the mobile drawer trigger at 768px and 390px.
2. Booking section with 140px top and 80px bottom padding on desktop; 90px/60px at <=991px; 80px/40px at <=767px.
3. Left booking information column: eyebrow with red rule, `Talk directly with our CTO.`, explanatory paragraph, Sanjay Patel host card, and three benefit rows.
4. Right white calendar card: 14px inset, 1px translucent border, 24px radius, soft shadow, top bar, and a 500px Calendly inline embed.
5. Shared footer and fixed WhatsApp contact widget.

## Live CSS/JS Sources Inspected

- Live page stylesheet: booking section, host card, benefit rows, calendar card, and Calendly height rules.
- Live responsive stylesheet: 1399px, 1199px, 991px, and 767px column and spacing changes.
- Live shared header stylesheet: header geometry and navigation states.
- Live shared footer stylesheet: footer geometry and responsive presentation.
- Live HTML source `/tmp/dd-discovery.html`
  - Page metadata, semantic structure, Calendly URL, host image, and footer/header link inventory.
- Live JS references
  - Calendly external widget loader, AOS, lead-source tracker, and site custom script were inspected in source. The local migration uses a direct Calendly iframe and does not load legacy scripts.

## Responsive and Interaction Notes

- At >=1200px the booking columns are 36%/55.304%; at 1200px-1399px the info column expands to 41%; at 992px-1199px it is 51% and the calendar is 47%; below 992px the columns stack with the calendar below the benefit list.
- The header switches to the mobile navigation trigger below 1200px. The shared local header preserves that behavior.
- Host and benefit cards have no hover animation. Links and the shared WhatsApp widget retain the site-wide hover/focus transitions.
- Calendly displays its own loading state and interaction inside the iframe. The frame has a stable 500px height to prevent layout shift.
- Reduced-motion handling is provided by the existing global base rules.

## Local Verification

- **Local screenshots**:
  - `docs/visual-captures/book-a-discovery-call/local-1440.png`
  - `docs/visual-captures/book-a-discovery-call/local-768.png`
  - `docs/visual-captures/book-a-discovery-call/local-390.png`
- Desktop and tablet captures match the live layout, spacing, typography, host card, benefit rows, calendar frame, shared header/footer, and WhatsApp widget. The narrow mobile capture now also matches the live eyebrow treatment by hiding the red rule at `<=767px`.
- Remaining runtime variance is limited to Calendly availability/content, which can differ by network and time. The local page intentionally uses the project-owned Sanjay Patel portrait and a direct Calendly iframe instead of the legacy widget loader.
