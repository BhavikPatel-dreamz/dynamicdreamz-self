# WordPress Development Company in India

## 2026-09-01 shared services redesign

- Reference supplied by the project owner: first attached screenshot is the old
  centered-header, stacked-icon card design; second attached screenshot is the
  approved latest design.
- Latest design contract: split heading/description header, two-column compact
  cards, small icon aligned beside the card title, description aligned beneath
  the title, and a centered final card when the item count is odd.
- Responsive behavior: header and cards collapse to one column on smaller
  screens while preserving readable spacing and icon/title alignment.
- At 991px and below, the live responsive reference stacks the header with
  left-aligned heading/copy, keeps 50px before the cards, renders one card per
  row, and preserves the 40px description indent beneath the inline icon/title.
- Hover/focus states: retain the shared gradient-border treatment and linked
  card focus behavior.
- Animation timing: retain the existing 300ms card transitions.
- Page content, section IDs, CTA behavior, links, and image assets remain
  data-driven and unchanged.
- Header heading and description `<br>` markers are normalized to spaces so the
  browser controls line wrapping naturally at every viewport width.
- The split heading/description header is provided by the reusable
  `SplitSectionHeading` UI component. Its `services` variant owns this section's
  current desktop and responsive styling for reuse on other pages.
- The service-benefits timeline introduction now uses the same component's
  `centered` variant, preserving its existing 900px width and typography while
  removing duplicate section-heading markup.
- The centered variant matches the verified live typography: 35px/48.475px
  Neue Montreal Medium at normal weight for the heading and 14px/24px
  Montserrat at normal weight for the description.
- Timeline parity update: the list uses the full shared container, alternating
  unboxed half-width content with 48px center spacing, left-aligned copy on both
  sides, 52px markers positioned 90px from each item's top, and 15px between
  items. Below 992px descriptions use 14px/24px; below 768px the timeline moves
  to a 15px left rail with 40px markers and single-column content.
- `/tmp/wordpress-timeline-desktop.png` at 1440x4800 confirms the rebuilt
  alternating timeline, center markers, unboxed content, and full-container
  proportions against the supplied live screenshot.
- Live CSS verified on 2026-09-01:
  - `style.css?ver=7.1`: Neue Montreal Medium headings, Montserrat body copy,
    `#282828` heading color, and `#535353` body color.
  - `assets/css/services/main.css?ver=1788247685`: card background `#fafaf7`,
    1px `rgba(40,40,40,.08)` border, 20px card padding, 24px icons, 20px/28.8px
    titles, and 14px/24px body copy inherited from the theme base rules.
  - The legacy lift and gradient-border hover rules are commented out on the
    live site, so the compact variant does not apply them.
- Remaining differences: the implementation uses responsive Tailwind utilities
  and the existing project container rather than screenshot-specific fixed
  pixel positioning.
- Local screenshots checked:
  - `/tmp/wordpress-services-desktop.png` at 1440x1800 confirms the split header,
    compact two-column cards, inline icons, and matching section density.
  - `/tmp/wordpress-services-mobile.png` at 390x1400 confirms the page has no
    horizontal overflow; the services section begins below the captured hero.
  - `/tmp/wordpress-services-991.png` at 991x3500 confirms the live-style
    left-aligned header and single-column compact cards at the requested
    responsive breakpoint.
- Mobile anchor-only capture was not used as parity evidence because the local
  sticky header and initial navigation position obscured the target section.

## 2026-09-01 portfolio refresh

- Owner references: attached desktop default-state screenshot and live-site
  hover screenshot for the WordPress portfolio grid.
- Live sources rechecked: captured `services/main.css` and `services/media.css`
  portfolio rules plus the existing local project-card implementation.
- Desktop target: split eyebrow/title and description header, four equal
  columns, 15px column gaps, 60px row gaps, 115% image aspect ratio, red
  uppercase category, project title, and circular diagonal-arrow control.
- Hover/focus target: arrow control changes from white to brand red with a white
  arrow; image receives the existing subtle scale transition. Transition time
  is 300ms for color and 1000ms for image scale.
- Responsive target: two columns at 992px and below, one column at 767px and
  below, with 30px row gaps and a stacked centered heading.
- Reuse decision: extend `SplitSectionHeading` with a portfolio variant and use
  the existing `PortfolioProjectCard` refresh variant rather than duplicating
  card markup.
- Local desktop, hover, tablet, and mobile screenshots: pending implementation.

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
- Portfolio: eight WordPress project cards in a 4/2/1 responsive grid with a
  shared split eyebrow/title header, red category labels, circular arrow
  controls, subtle image scaling, and red arrow hover/focus feedback.
- Testimonials: non-looping, draggable video-card carousel, two visible cards on desktop/tablet and one on mobile. Play buttons have a 1.5-second pulse; the dialog remains keyboard-accessible.
- FAQ: eight items with the first open by default and one expanded item at a time. The live slide transition is approximately 400ms.
- CTA banner: green-to-cyan gradient, white heading, and white pill `request a quote` button.

## Interaction and responsive states checked

- Service-card lift and gradient border on hover/focus.
- Agency-card gradient outline and bottom edge on hover/focus.
- Portfolio image overlay/arrow on hover/focus.
- Refreshed portfolio arrow changes from white to brand red on hover/focus while
  the arrow changes to white; project imagery scales subtly without an overlay.
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

### Portfolio refresh verification

- Desktop: `/tmp/wordpress-portfolio-desktop.png` at 1440px confirms the split
  header, four-column grid, first-row alignment, and arrow controls.
- Tablet: `/tmp/wordpress-portfolio-tablet.png` at 768px confirms the centered
  stacked header and two-column grid.
- Mobile: `/tmp/wordpress-portfolio-mobile.png` at 390px confirms the one-column
  grid with no horizontal overflow.
- Hover/focus behavior is owned by the shared `ourWorkRefresh` card variant and
  uses equivalent `group-hover` and `group-focus` states.
- Portfolio card follow-up: the refreshed image now reveals the shared 40%
  black overlay on pointer hover and keyboard focus while retaining image zoom.
- Overlay color follows the captured live declaration exactly:
  `linear-gradient(0deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,.4) 100%)`.
