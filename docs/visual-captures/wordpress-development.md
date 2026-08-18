# WordPress Web Development Services

- Live URL: https://www.dynamicdreamz.com/wordpress-development/
- Local route: `/wordpress-development`
- Date checked: 2026-08-18
- Browser: Chromium 151
- Viewports captured: 1440x900, 768x1024, 390x844
- Live screenshots: live desktop (1440px), live tablet (768px), live mobile (390px)
- Local screenshots: local desktop (1440px), local tablet (768px), local mobile (390px)
- Local capture wait: 2500ms before full-page capture so review animation and portfolio media are visible

## Sources inspected

- View source metadata, JSON-LD, headings, CTA links, image alts, FAQ markup, and footer navigation.
- `wp-content/themes/dynamicdreamz/assets/css/services/main.css`: `.inner-hero-sec`, `.what-we-provide-sec`, `.services-box`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`, `.request-banner`, gradients, hover transformations, and review circle layout.
- `wp-content/themes/dynamicdreamz/assets/css/services/media.css`: 1199px, 991px, 767px, 389px, and 359px responsive rules.
- Live DOM and computed styles for 2-column hero (`w-[55.7%]` left column, `w-[41%]` right column with rotating review animation).

## Visual contract

- Hero: White background, 190px top padding (100px below 991px), 55px bottom padding. Left column features 50px/66px Montserrat H1 (`WordPress Web Development Services`), two descriptive paragraphs, and primary red button CTA (`Request a Quote` -> `/request-quote`). Right column features the staged rotating SVG review animation (Clutch 5.0 / 132 reviews, Upwork 5.0 / 2000+ reviews, GoodFirms 5.0 / 72 reviews). Below 1199px, stacks with centered text and review circle centered below.
- Trusted by Leading Brands: 164px cream background strip (`#fbf7ed`) with "Trusted by Leading Brands" heading on the left and smooth infinite marquee of 10 client brand logos on the right.
- What We Provide: Centered heading (`What We Provide`) and subtitle (`Expertly crafting customized WordPress solutions to ensure digital success.`). 9 service cards in a 2-column grid desktop, 1-column mobile. Each card has a 10px rounded border, 50px icon, bold H3 title, and description paragraph. Hover state lifts the card (`translate-y-[-10px]`) and reveals a linear gradient outline (`#15c064` to `#00d1ff`). Bottom CTA button (`Let me give you a hand to help you` -> `/request-quote`).
- Our Work: Centered H2 (`A sneak peek into our WordPress Development Expertise`) and subtitle (`500+ WordPress websites meticulously crafted and counting...`). 6 WordPress project cards (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur) in 3-column desktop grid, 2-column tablet, 1-column mobile with WordPress badge, hover dark overlay, and "View Project" link. Bottom CTA button (`VIEW OUR WORK` -> `/our-work`).
- Happy Client Testimonials: Video testimonial carousel with 11 client reviews (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe wang, Clinton De Vere, Fernando Arias). 2-up cards desktop, 1-up mobile with custom video dialog.
- FAQ: Centered H2 (`Frequently Asked Questions`) with 10 accordion items. 1st item open by default.
- CTA Banner: Gradient banner (`#15c064` to `#00d1ff`) with heading (`Want us to help you with your online store?`) and white pill CTA button (`REQUEST A QUOTE` -> `/request-quote`).

## Interaction and motion

- Review animation rotates through Clutch, Upwork, and GoodFirms every 5s with staged reveals (scale, opacity, stars, rating, review-pill), disabled on `prefers-reduced-motion`.
- What We Provide cards elevate on hover with gradient border transition.
- Portfolio cards display hover overlay with diagonal arrow and WordPress category badge.
- Testimonial carousel supports touch/drag gestures and video modal popups.
- FAQ accordion opens one item at a time with smooth chevron rotation.

## Remaining differences to verify

- Local header/footer use the migrated shared shell and local assets.
- Trailing slash removed per site-wide URL policy.
- Zero duplicate assets: all brand logos, platform badges, review icons, and project screenshots reuse canonical project-owned assets.
