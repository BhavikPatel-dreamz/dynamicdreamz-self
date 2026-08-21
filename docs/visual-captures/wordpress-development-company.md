# WordPress Development Company in India

- Live URL: `https://www.dynamicdreamz.com/wordpress-development-company/`
- Local route: `/wordpress-development-company`
- Date checked: 2026-08-21
- Browser: Google Chrome 151 (headless Chromium)
- Viewports captured: 1440x900, 768x1024, and 390x844
- Live screenshots:
  - `docs/visual-captures/source/wordpress-development-company/live-desktop-1440x900.png`
  - `docs/visual-captures/source/wordpress-development-company/live-tablet-768x1024.png`
  - `docs/visual-captures/source/wordpress-development-company/live-mobile-390x844.png`
- Local viewport screenshots:
  - `docs/visual-captures/source/wordpress-development-company/local-desktop-1440x900.png`
  - `docs/visual-captures/source/wordpress-development-company/local-tablet-768x1024.png`
  - `docs/visual-captures/source/wordpress-development-company/local-mobile-390x844.png`
- Local full-page screenshots:
  - `docs/visual-captures/source/wordpress-development-company/local-desktop-1440x900-full.png`
  - `docs/visual-captures/source/wordpress-development-company/local-tablet-768x1024-full.png`
  - `docs/visual-captures/source/wordpress-development-company/local-mobile-390x844-full.png`

## Sources inspected

- Rendered live page and View Page Source: metadata, Yoast JSON-LD, heading order, CTA destinations, image URLs and alt text, external project links, testimonial video URLs, FAQ markup, footer active state, and live script/style dependencies.
- `wp-content/themes/dynamicdreamz/assets/css/services/main.css`: `.inner-hero-sec`, `.single-full-img`, `.review-wrap`, `.our-client-sec`, `.what-we-provide-sec`, `.services-box`, `.shopify-customization-services-sec`, `.timeline_section`, `.timeline`, `.direction-l`, `.direction-r`, `.wordpress-development-process`, `.our-work-sec`, `.happy-client-sec`, `.faq-sec`, and `.request-banner`.
- `wp-content/themes/dynamicdreamz/assets/css/services/media.css`: 1199px, 991px, 767px, 575px, and 389px responsive rules for hero stacking, reviews, cards, timeline, process, portfolio, testimonials, and FAQ layout.
- `wp-content/themes/dynamicdreamz/assets/js/services.js`: trusted-brand autoplay (2 seconds), agency-card and testimonial carousels, FAQ open/close behavior, and review-animation timing.
- Live desktop/tablet/mobile first-viewport screenshots and DOM/computed-value cross-checks against the CSS above.
- Local hydrated desktop/tablet/mobile viewport and full-page screenshots, with
  page geometry and document-width checks through Chrome DevTools Protocol.

## Visual contract

- Hero: white background with 190px desktop top padding and 100px below 992px. Desktop uses a 55.7% text / 41% media split; below 1200px it stacks and centers. The 50px/66px H1 scales to 40px/50px, then 30px/40px. The second paragraph, red pill `get in touch` CTA, local WordPress illustration, and three static review cards appear in that order.
- Trusted brands: cream `#fbeed5` strip with the heading at left on desktop and centered above the autoplaying logo row below 992px. Four logos show at desktop, three at tablet, and two at mobile; autoplay is 2 seconds and pauses for reduced motion locally.
- Services: centered heading and description followed by nine two-column cards (one column below 992px). Cards use 10px radii, 1.5px gray borders, 50px icons, and a 300ms lift/gradient-border hover state.
- Why Dynamic Dreamz: pale green-to-blue gradient section with six white cards displayed as a non-looping horizontal two-card carousel on desktop/tablet and one card on mobile. Cards use 15px radii and reveal a gradient outline/bottom edge on hover.
- Why WordPress: white vertical timeline with a dashed center rule and eight alternating entries at desktop. Below 992px the rule moves left and entries become a single column.
- Process: four-step curved-wave layout at desktop with numbered gradient labels and staggered card heights. Below 992px the wave is removed and steps become a two-column grid; mobile becomes one column.
- Portfolio: six WordPress project cards in a 3/2/1 responsive grid with category badge and dark hover overlay.
- Testimonials: non-looping, draggable video-card carousel, two visible cards on desktop/tablet and one on mobile. Play buttons have a 1.5-second pulse; the dialog remains keyboard-accessible.
- FAQ: eight items with the first open by default and one expanded item at a time. The live slide transition is approximately 400ms.
- CTA banner: green-to-cyan gradient, white heading, and white pill `request a quote` button.

## Interaction and responsive states checked

- Service-card lift and gradient border on hover/focus.
- Agency-card gradient outline and bottom edge on hover/focus.
- Portfolio image overlay/arrow on hover/focus.
- Brand slider autoplay and swipe/drag behavior.
- Agency and testimonial horizontal drag behavior; no looping for either live carousel.
- FAQ first-open state and single-open toggle behavior.
- Header desktop-to-mobile switch, mobile menu button, sticky/clear header state, CTA, and floating WhatsApp control.
- Reduced-motion mode disables the trusted-brand autoplay; its transform stayed
  unchanged across the 2.2-second browser check.
- Local mobile navigation opened and closed with matching `aria-expanded`
  state. The FAQ loaded with only item one open, then transferred the expanded
  state exclusively to item two when activated.
- The provider carousel exposed six cards, six controls, and a keyboard-focusable
  drag region. The testimonial carousel exposed eleven cards, eleven video
  controls, and a keyboard-focusable drag region.
- Desktop, tablet, and mobile document widths matched their viewports after the
  carousel overflow correction (1440/1440, 768/768, and 390/390).

## Remaining intentional differences

- Local URLs are slashless and the page uses the shared migrated header, footer,
  floating controls, and accessible dialogs instead of the legacy WordPress
  shell and trailing-slash URLs.
- The local carousel is a native horizontal scroll/drag region with pagination,
  so its inertial feel differs slightly from Owl Carousel while preserving the
  same two-card/one-card responsive result and non-looping intent.
- Chrome's Next.js development indicator appears in local development captures;
  it is not included in the production build.
