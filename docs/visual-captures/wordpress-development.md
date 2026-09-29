# WordPress Web Development Services

- Live URL: https://www.dynamicdreamz.com/wordpress-development/
- Local route: `/wordpress-development`
- Date checked: 2026-09-29
- Browser: Google Chrome 120 (Headless)
- Viewports captured: 1440x900, 768x1024, 390x844
- Live screenshots: `scratch/live_wp_1440.png`, `scratch/live-wp-dev-services-desktop.png`
- Local screenshots: `scratch/local_wp_1440.png`, `scratch/local-wp-dev-services-desktop.png`, `scratch/local-bottom-services.png`

## Sources inspected

- Live View Page Source: metadata, JSON-LD, headings, CTA links, image alts, FAQ markup, and footer navigation.
- Live styles: `hero_new_section.css`, `delivery_section.css` (`what-we-provide-sec`), `our-work-sec`, `happy-client-sec`, `faq-sec`, `request-banner`.
- Live DOM: `.hero-new-section.hide-logo` with tablet slider, `.what-we-provide-sec.pb-0#services`, `.our-work-sec#our_work`, `.happy-client-sec`, `.faq-sec`, `.request-banner`.

## Visual contract

- Hero: `hero-new-section hide-logo` on `#f7f4e9` background, 91px top padding desktop (60px on tablet/mobile). Left column features eyebrow `Established in 2006` / `Wordpress Development Agency`, H1 `WordPress Web Development Services`, two descriptive paragraphs, primary CTA `REQUEST A QUOTE` -> `/request-quote`, secondary CTA `See Our Work` -> `#our_work`, and 4 proof badges (Shopify Platinum Partner, Clutch 4.9 rating, Trustpilot 4.9 TrustScore, Upwork Top Rated Plus). Right column features the tablet frame with auto-looping slide showcase (7 screenshots) and floating WooCommerce Agency Partner / WordPress Logo badges.
- What We Provide: Split header with eyebrow `Our Services`, H2 `What We Provide` (Montserrat 35px/48.5px bold), and subtitle `Expertly crafting customized WordPress solutions to ensure digital success.`. 9 service cards in 2-column CSS grid (`.services-provide-main .wrapper` -> `.services-box` with `.top-block` holding red `#AD5151` vector SVG icon, 18px bold H3 title, 14px description, and `.bottom-block` holding `text-arrow-link` "READ MORE ↗" on WooCommerce and White Label services). 9th box sits left-aligned in column 1 matching live CSS grid.
- Our Work: Split header with eyebrow `Portfolio`, H2 `A sneak peek into our WordPress Development Expertise`, and subtitle `500+ WordPress websites meticulously crafted and counting...`. 8 project cards (Quite Events, Les Etoiles, Valents, Get Sunsights, Lipari Design, Nexventur, Awaken Media, Budget Maids) in 4-column desktop grid, 2-column tablet, 1-column mobile with WordPress badge, hover overlay, and arrow icon. Bottom CTA button `VIEW OUR WORK` -> `/our-work`.
- Happy Client Testimonials: Eyebrow `Client Stories`, H2 `Don't Just Take Our Word For It`, subtitle with outcomes copy. Video testimonial carousel with 11 client reviews and touch/drag controls.
- FAQ: H2 `Frequently Asked Questions` with 10 accordion items, accordion cards with rounded borders and chevron toggles.
- Request Banner: Full-width teal-to-blue gradient banner with H3 `Want us to help you with your online store?` and white pill CTA `REQUEST A QUOTE` -> `/request-quote`.

## Interaction and motion

- Tablet slider transitions smoothly across the 7 project screenshots with infinite wrap.
- Services cards use live styling with hover transition on arrow link (`color: #282828`, path fill `#282828`).
- Portfolio cards display hover overlay with diagonal arrow and category badge.
- Testimonial carousel supports touch/drag gestures and video dialog popups.
- FAQ accordion opens items with chevron rotation.

## Verification

- `check:urls` passed with no trailing slash.
- `check:component-content` passed with all copy separated into `src/content/wordpress-development.ts`.
- `check:asset-duplicates` passed (0 duplicates).
- `lint` and `build` passed with zero errors.
- Visual parity verified with pixel-level comparison between live and local screenshots (`scratch/local-bottom-services.png` vs `scratch/live-bottom-services.png`).
