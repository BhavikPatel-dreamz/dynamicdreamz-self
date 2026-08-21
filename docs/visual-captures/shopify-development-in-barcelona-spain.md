# Visual Capture: Shopify Development in Barcelona

Live URL: https://www.dynamicdreamz.com/shopify-development-in-barcelona-spain/
Local Route: /shopify-development-in-barcelona-spain
Date Checked: 2026-08-21
Status: Production Ready

## Visual Layout & Section Sequence

1. **Lead Hero & Quote Form (`barcelona-spain-sec`)**:
   - **Split 2-Column Layout**:
     - Left Column (40% width on desktop, 49% at 1199px, 100% at 991px):
       - `h1.h2`: "Give us a chance to reach you" (40px desktop, 30px mobile, font-bold).
       - Subtitle: "Our Happy Clients from Spain" with decorative curved underline SVG beneath "Spain".
       - Two dual-direction client logo sliders (Left slider & Right slider in RTL).
       - Three review cards in a row: Clutch (132 reviews, 5.0), Upwork (2000+ reviews, 5.0), GoodFirms (72 reviews, 5.0) with glowing gradient border (`#15c064` to `#00d1ff`).
     - Right Column (57% width on desktop, 49% at 1199px, 100% at 991px):
       - Card container with gradient border wrapper (`linear-gradient(178.87deg, #15c064 11.23%, rgba(0,209,255,0.66) 33.98%, rgba(0,209,255,0) 78.28%)`).
       - Form inside: Full Name, Email, Mobile Phone, Company Name, Website URL, Estimated Budget dropdown, Brief about the project textarea, and "submit inquiry" primary button.
2. **Services Section (`barcelona-services-sec`)**:
   - Centered title "Our Shopify Development Services" with no intro paragraph on this route.
   - 2-column grid of 8 service cards (Shopify Plus, Theme Customization, Figma/XD to Shopify, App Integration, Migration, Maintenance, Shopify 2.0 Migration, White-Label).
   - Card styling: 10px rounded borders, subtle border `#d9d9d9`, hover state with `-translate-y-2.5` and radiant gradient outline `#15c064` to `#00d1ff`.
   - Bottom CTA button: "Let me give you a hand to help you" -> `/request-quote`.
3. **Portfolio Showcase Section (`our-work-sec pt-0`)**:
   - Centered title "Our Shopify Works".
   - 3-column project grid with 6 Spain-focused Shopify client projects (Twojeys, Feners, Midnight Cosmetics, Project Lobster, Tropicfeel, Pedro Miralles).
   - Standard project card interaction (hover overlay, diagonal arrow, slide-up "View Project", and Shopify platform badge).

## CSS & Breakpoints Inspected

- Desktop: 1440px / 1200px+ standard container.
- Tablet: 992px–1199px left/right column 49%/49% split.
- Mobile: 991px and below stacked full-width columns, centered hero text, review badges full-width horizontal rows.
- Mobile: 768px and below single-column form inputs and portfolio cards.

## 2026-08-21 Parity Correction

- Live and local desktop comparison supplied by the project owner showed that the local services intro paragraph was not present on the live Barcelona page.
- The shared services section remains unchanged by default; only the Barcelona route suppresses its heading description.
- The rendered live page and live page source were rechecked on 2026-08-21. The first five local service cards used newer Barcelona-specific copy, while the live page currently uses the longer legacy service copy; the local route now preserves that live wording exactly.
- The live mobile-phone input has no placeholder. The Barcelona route now suppresses the shared form's default phone placeholder without affecting other routes.
- This is static content with no description-specific hover, focus, animation, or interaction state.
- Remaining difference for this correction: none identified.

## Asset Verification

- All 6 portfolio projects reuse canonical images from `public/assets/our-work/projects/` and `public/assets/fashion/portfolio/`.
- All 8 service icons reuse canonical SVG icons from `public/assets/services/` and `public/assets/hire-shopify-developers/`.
- 10 Spain client logos and 4 review SVGs cleanly ingested into `public/assets/barcelona/`.
- SHA-256 duplicate audit: **0 duplicate hash groups**.
