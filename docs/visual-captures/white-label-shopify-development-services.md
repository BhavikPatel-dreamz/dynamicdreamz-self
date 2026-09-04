# White Label Shopify Development Services Visual Capture

Status: remigrated and visually verified against the redesigned live reference  
Live URL: `https://www.dynamicdreamz.com/white-label-shopify-development-services/`  
Local route: `/white-label-shopify-development-services`

Checked: 2026-09-04  
Browser: Google Chrome headless (desktop 1440px, tablet 768px, mobile 390px emulation)

## 2026-09-04 Full Live Site Redesign Remigration

The live page has undergone a comprehensive redesign with complete layout, section order, and content updates across the entire page:

1. **Hero Section (`hero-new-section`)**:
   - Background `#f7f4e9` (cream), 91px top padding.
   - Left column: H1 with italic accent "White label Shopify Development *for Digital Agencies*", H4 kicker "Your Shopify Technology Partner. An Extension of Your Team.", paragraph explaining overflow/specialist capacity, dual CTAs ("book an agency intro" -> `/book-a-discovery-call/`, "see pricing" -> `#our_white_label_pricing`), and 4 trust/review badges (Shopify Platinum Partner, Clutch 4.9, Trustpilot 4.9, Upwork Top Rated Plus) with clean dividers.
   - Right column: Video container with rounded corners (20px radius) playing `why-dynamic-dreamz.mp4` (`autoplay`, `muted`, `loop`, `playsinline`). On tablet/mobile (<992px), right column video hides per live CSS rules.
2. **Stats Counter Section (`white_label_counter_section`)**:
   - 4 metrics: 50+ Agencies (Supported Worldwide), Platinum Partner (Shopify-focused delivery), 20+ Years (Web & Ecommerce Experience), 150+ Experts (Commerce & Technology). Soft horizontal top/bottom borders and vertical column dividers. Stable text values without layout shift.
3. **Scenario Tabs Section (`scenario-tab-sec`)**:
   - Split layout with "start with your agency" eyebrow, H2 "Where Does Your Agency Need Shopify Support?", and intro paragraph.
   - Left: 6 interactive scenario tabs (Scale Shopify Capacity, Build from Figma, Launch Shopify Plus / B2B, Migrate to Shopify, Integrate & Automate, Build a Mobile App). Active state with red border and subtle tint.
   - Right: Sticky content panel (`#EFF4EF`) showing kicker, heading, description, 6 feature tags with soft shadow, meta recommendation note, and dual CTAs. On mobile, tabs hide and panels stack/scroll.
4. **Portfolio Section (`our-work-sec`)**:
   - Split header with "Portfolio" eyebrow, H2 "Explore Our Work", and 20-year proof paragraph.
   - 4-column responsive grid with 8 verified Shopify project cards: Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHOC Atelier, Bombay Shirt Company, and Holy Plantz. Hover zoom and circular arrow button.
   - Dual CTAs: "VIEW OUR WORK" (primary) and "VIEW PRICING" (outline).
5. **Pricing / Engagement Models (`white_label_wp_develop_plan_section shopify-plus-engagement`)**:
   - Reuses `PricingTableSection` with 3 engagement cards: "Project-Based" (Custom Quote), "Flexible Hourly Support" ($25/hour), and "Dedicated Developer / Team" (From $2,000/month), each with its badge, description, and link with arrow.
6. **Delivery Model Comparison Table (`choose_the_right_delivery_model_section`)**:
   - Eyebrow "Choose the Right Delivery Model", H2 "In-House, Freelancer or a White-Label Shopify Partner?", subtext.
   - Horizontal scrolling responsive table comparing What matters, In-House Hire, Freelancer, and Dynamic Dreamz. Winner column highlighted with cream background, red border, and checkmarks.
   - Dual CTAs: "BOOK AN AGENCY INTRO CALL" and "SEE PRICING AND ENGAGEMENT OPTIONS".
7. **Brand Protection & Confidentiality (`our_shopify_team_behind_it_section`)**:
   - Eyebrow "Your Brand in Front", H2 "Our Shopify Team Behind It.", subtext.
   - 6 white cards on light mint background: NDA & Confidentiality, White-Label Delivery, Your Workflow, Your Client Your Relationship, Private Client Work, Clear Delivery Visibility.
   - Dual CTAs: "BOOK AN AGENCY INTRO CALL" and "About Dynamic Dreamz ->".
8. **Shopify Technologies & Tools Marquee (`white_label_wide_range_technologies_section`)**:
   - Continuous 100s dual-row opposing marquee of Shopify ecosystem logos, pauses on reduced-motion.
9. **Agency Use Cases (`how_agencies_use_dynamic_dreamz_section`)**:
   - 3 regional/agency profile cards: USA Agency (Performance Marketing), UK / Europe (Branding Agency), Australia / Canada (Ecommerce Agency) with pills and text arrow links.
10. **Partnership Onboarding Steps (`white_label_why_dynamic_dreamz_section white_label_shopify`)**:
    - 6-step onboarding process (Agency Intro Call, NDA & Brief, Scope & Estimate, Join Your Workflow, Build QA & Review, Continue or Scale) rendered in the classic 3-column subtle gradient rule grid.
11. **Client Stories Video Testimonials (`happy-client-sec`)**:
    - Reuses `HappyClientSection` with 11 video testimonial cards, quotes, and brand marks.
12. **FAQ Accordion (`faq-sec bg-sky-blue`)**:
    - Reuses `SplitFaqSection` with "Agency Due Diligence" eyebrow, H2 "White Label Shopify Development FAQ", and 11 buyer FAQs. No post-FAQ CTA banner on the live site.

## 2026-08-14 Restored-Scroll Header Parity

The supplied side-by-side screenshot was checked against the shared local
header behavior and the current live `custom.js` scroll logic. The why-partner
section content and grid geometry match; the apparent top-spacing mismatch is
caused by the header state when the browser restores a nonzero scroll position.

- Live behavior: `updateHeader()` runs on document ready. At an already
  restored nonzero scroll position, it immediately applies `header-down`,
  translating the fixed header out of view.
- Previous local behavior: the initial scroll position was recorded, but the
  header was not evaluated until a later scroll event, leaving it visible over
  the section heading.
- Local target: initialize a restored position above the existing 40px
  threshold as `header-down`; retain the existing upward/downward scroll,
  transition, focus, and navigation behavior.
- Visual effect: the why-partner heading is no longer obscured and matches the
  live screenshot without changing section spacing, copy, grid borders, or
  cards.

## 2026-08-14 Why-Partner Divider Gradients

The project owner supplied the current live positional pseudo-element rules for
the why-partner grid. The previous local implementation used the same
transparent-center-transparent gradient for every divider; the live grid uses
directional edge fades selected by card position.

- Bottom dividers: cards 1 and 4 fade from transparent to `#333`; cards 2 and
  5 remain `#333`; cards 3 and 6 fade from `#333` to transparent.
- Vertical dividers: cards 1 and 2 fade from transparent at the top to `#333`
  at the bottom; Shopify cards 4 and 5 use the supplied horizontal three-stop
  gradient on the one-pixel pseudo-element; cards 7 and 8 use the supplied
  zero-degree transparent-to-`#333` gradient.
- Every divider retains the live `0.2` opacity.
- Mobile keeps the existing single-column horizontal separator treatment and
  hides empty grid cells.

## 2026-08-14 Partnership Connector Arrow Parity

The connector diamonds highlighted in the supplied Lightshot capture were
compared with the current live `services/main.css` and `services/media.css`.
Their dimensions, colors, and offsets were already present locally, but the
transform operations were composed in a different order.

- Desktop live transform: `rotate(45deg) translateY(-50%)` on a 30px square at
  `top: 50%` and `right: -4px`.
- Stacked layout at `max-width: 991px`: `rotate(45deg) translateX(-50%)`,
  centered at `left: 50%` and positioned `25px` below the card.
- Mobile at `max-width: 767px`: the same stacked transform on a 25px square,
  positioned `20px` below the card.
- The connector continues to inherit the originating card's alternating cream
  or off-white background.
- Rendering correction: the attempted arbitrary combined transform did not
  survive the generated pseudo-element utility output and displayed as a
  square. The connector therefore uses Tailwind's generated 45-degree rotation
  and breakpoint-specific translation utilities, retaining the measured live
  size, color, and offsets while reliably rendering the diamond shape.

## 2026-08-14 AI-Shopping Intro Clearance

Clarification: the requested spacing is above the lower two grid items,
`Agentic commerce` and `Trust signals`, rather than above the section intro.
The section retains its original 50px responsive vertical padding. At the
two-column breakpoint, cards 3 and 4 now receive 30px top padding so their icons
do not begin directly on the horizontal divider. The existing single-column
mobile card padding remains unchanged.

## Screenshots

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/white-label-live-1440x900.png` | `/tmp/white-label-local-1440x900-final.png` | Compared |
| 768x1024 | `/tmp/white-label-live-768x1024.png` | `/tmp/white-label-local-768x1024-final.png` | Compared |
| 390x844 | `/tmp/white-label-live-390x844.png` | `/tmp/white-label-local-390x844-final.png` | Compared |
| 1440px full page | `/tmp/white-label-live-full-1440.png` | `/tmp/white-label-local-full-1440-final.png` | Compared after lazy-load scroll pass |
| 390px full page | `/tmp/white-label-live-full-390.png` | `/tmp/white-label-local-full-390-final.png` | Compared after lazy-load scroll pass |

The live document has no horizontal content overflow. Chrome reported content
widths of 1425px, 753px, and 375px after accounting for its vertical scrollbar
at the three measured browser widths.

## Sources Inspected

| Source | Evidence captured |
| --- | --- |
| Rendered page and View Page Source | Visible copy, heading order, CTA paths, external review links, media attributes, metadata, Yoast graph, page-specific Service/FAQ graph, header/footer, and default accordion state |
| `style.css?ver=7.0.4` | Montserrat base typography, 1180px container, 50/66 H1, 35/48.475 H2, 80px section rhythm, buttons, FAQ cards, and global breakpoints |
| `assets/css/default-media.css?ver=1.0.0` | 991px and 767px global typography, button, container, and section-spacing changes |
| `assets/css/services/main.css?ver=all` | Hero, counters, comparison grid, AI sections, service accordion, pricing cards, technology marquee, partnership steps, FAQ, CTA, colors, borders, dimensions, and keyframes |
| `assets/css/services/media.css?ver=1.0.0` | 1199px, 991px, 767px, and 575px responsive behavior for every page section |
| `assets/js/services.js?ver=1.0.0` | Single-open FAQ and service accordions, 700ms service-panel transition, jQuery FAQ slide behavior, and the counter observer code |
| Computed styles via Chrome DevTools Protocol | Exact desktop/tablet/mobile section boundaries, typography, backgrounds, padding, active panel dimensions, and document geometry |
| Asset contact sheet | All 42 distinct technology/tool logos were rendered in Chrome and identified before assigning meaningful local filenames |

## Section Inventory And Implementation Map

| Live section | Captured behavior and styling | Local implementation decision |
| --- | --- | --- |
| Hero | Cream `#f7f4e9`; transparent header; 120px top padding; 55/45 split; 50/66 H1; illustration bleeds to the lower/right edge; review marks below CTA | Server-rendered section using shared `Container` and `ButtonLink`; local hero/review SVGs; exact live copy |
| Proof counters | Four equal columns with 42px icons, 40px values, soft dividers; 2x2 at tablet and stacked on mobile | Server-rendered list with local icons and stable dimensions; preserve live numbers and labels |
| Why partner | `#fafaf7`; centered title; three-column rule grid containing seven cards and two empty grid cells | Server-rendered grid; preserve the unusual empty cells and live order for parity |
| Delivered under your brand | Dark green `#171e16`; centered intro; four translucent cards in a 2x2 grid | Server-rendered cards with local AI/automation icons and live pills |
| AI-driven shopping | White; four equal columns with soft dividers; 2x2 tablet and stacked mobile | Server-rendered capability grid |
| Service accordion | Dark green; two columns; first item open; one item open at a time; open item can close; 700ms max-height transition | Small accessible Client Component; buttons, ARIA relationships, keyboard support, live default state and timing |
| Flexible plans | Split heading/copy, then three cream 20px-radius cards and centered CTA | Server-rendered pricing section with exact live prices and wording |
| Technologies and tools | `#fafaf7`; two opposing continuously moving logo rows; 202x94 white cards; 100s linear infinite marquee | Server-rendered duplicated logo sequences and component-scoped keyframes; stop motion for reduced-motion users |
| Partnership steps | Four alternating cream/off-white cards with directional diamonds, dashed-ring numbered badges, and bordered confidentiality note | Server-rendered ordered steps; stack vertically below 992px |
| FAQ | Pale blue `#e6ecf0`; first item open; only one open; 400ms jQuery slide behavior; white rounded cards | Reuse/promote the existing accessible FAQ accordion behavior while retaining the live presentation and copy |
| Final CTA | `#fafaf7`; text and button split on desktop, stacked on mobile | Server-rendered section with shared `ButtonLink` and canonical quote path |
| Site chrome | Transparent initial header, white hide/reveal header while scrolling, contact widget, footer, and mobile menu | Reuse shared root-layout chrome; add a route-aware transparent initial header state without changing other routes |

## Measured Geometry

| Viewport | Live section boundaries and key geometry |
| --- | --- |
| Desktop 1440 | Hero 866.41px; counters 284.05px; why 863.33px; delivered 1004.50px; AI shopping 579.80px; services 720.28px; pricing 715.47px; tools 531.34px; process 687.81px; FAQ 874.45px; CTA 247.81px; content before footer 7375.25px |
| Tablet 768 | Hero 1161.23px; counters 273.53px; why 839.33px; delivered 1101.66px; AI shopping 693.66px; services 746.41px; pricing 581.89px; tools 436px; process 1216.69px; FAQ 792px; CTA 240.41px |
| Mobile 390 | Hero 1174.84px; counters 490.22px; why 1095.03px; delivered 1659.23px; AI shopping 1275.38px; services 747.11px; pricing 1126.86px; tools 381.47px; process 1229.53px; FAQ 1130.47px; CTA 316.41px |

Desktop H1 computes to Montserrat 700, 50px/66px, `-1px` tracking and a
627x198px box. It becomes 40px/50px at both measured responsive widths; the
mobile H1 occupies 343x200px. Section spacing is 80px desktop, 50px at 991px
and below, with captured section-specific exceptions for the hero, why, tools,
FAQ, and CTA.

## Interaction And Motion

| State | Live behavior | Local target |
| --- | --- | --- |
| Header initial/scrolled | Transparent over the cream hero; shared hide/reveal scroll behavior | Existing shared header behavior |
| Button hover/focus | Red fill slides out over 600ms and border/text become gray; white variant reverses the treatment | Shared `ButtonLink` behavior plus existing visible focus outline |
| Service accordion | First service open; plus/minus control; all other services close when one opens; current item can close; 700ms transition | Same default and single-open model with semantic buttons and ARIA |
| FAQ accordion | First FAQ open; selecting another closes the first; current item can close; jQuery `slideUp/slideDown` default duration (~400ms) | Same state model and 400ms accessible CSS grid transition |
| Technology marquee | Top row moves left, bottom row moves right, both 100s linear infinite | Same direction and timing; pause animation for reduced motion |
| Counter | Source includes a 2s Odometer transition and observer code, but the live selector is `.stats_sections` while markup is `.stats_section`; rendered values are therefore stable in the inspected page | Preserve the rendered stable final values; no unnecessary client animation |
| Responsive | Hero stacks at 991px; counters 2x2 at tablet and one-column at mobile; AI features 2x2 then one-column; services and process stack at tablet; pricing stacks on mobile | Match captured breakpoints and order |

## Asset Map

- Reuse canonical local brand header, Shopify partner, footer award, and contact
  widget assets already present in `public/assets/**`.
- Added page-owned assets: hero illustration, four proof icons, six service icons,
  eight AI/automation icons, and 42 technology/tool logos.
- Review marks were hash-compared against all existing local assets; the three
  live hero SVGs are distinct and require canonical local copies.
- All source assets are stored locally with descriptive kebab-case names.
  Production code will not reference the live WordPress uploads/theme paths.
- Content images retain the live subject in their alt text. Small card and
  statistic icons are decorative because adjacent text names the same concept.
  Technology logos receive the identified product/company name as alt text.

## Intentional Production Improvements

- Accordion triggers will be real buttons with `aria-expanded`,
  `aria-controls`, labelled regions, keyboard operation, and visible focus.
- The live page has two conflicting FAQ schema blocks, including hidden
  questions not visible in the page. Local `FAQPage` data will describe only
  the five visible FAQs and will share the same typed content as the UI.
- The page will use local optimized assets, Server Components for primary
  content, one small service-accordion client boundary, and the existing small
  FAQ client boundary.
- Reduced-motion users will see static logo rows and near-instant transitions.

## Local Verification Result

- Desktop local section heights match the live measurements exactly for hero,
  delivered-under-brand, AI shopping, tools, process, FAQ, and final CTA. The
  counters and why-partner grid differ by less than 0.05px; pricing differs by
  2px. The live service accordion height changes during its initial jQuery
  slide animation; the local stable open state falls inside the captured live
  range.
- At 768px, every stable section is within 2.02px of the live reference. The
  service accordion again varies only with the live page's load-time animation.
- At 390px, the hero, counters, why grid, delivered cards, pricing, tools,
  process, FAQ, and final CTA are within 0.2px; AI shopping is within 1px. The
  service area is within the live transition range.
- Browser checks confirmed the transparent initial header and white scrolled
  state, first-open/single-open/closable service and FAQ accordions, correct
  ARIA state changes, 100s opposing marquees, and stopped motion under
  `prefers-reduced-motion: reduce`.
- All 155 rendered images have intentional `alt` attributes. No image, script,
  or stylesheet uses a live `dynamicdreamz.com/wp-content` runtime URL.

## Remaining Differences

- Subpixel text rasterization and the live accordion's in-flight load animation
  can produce small screenshot-level differences; section structure, copy,
  default state, breakpoints, and stable geometry are matched.
- Visible factual and copy inconsistencies are intentionally preserved under
  the migration approval gate and recorded in
  `docs/page-content-improvements.md` and `docs/aeo-geo-strategy.md` instead of
  being silently corrected.

## Verification

- URL policy: the canonical, Open Graph URL, JSON-LD identifiers, sitemap entry,
  robots allow path, and internal navigation use the slashless local route. A
  request with the legacy trailing slash returns a permanent redirect to it.
- `npm run lint`: passed with no errors or warnings.
- `npm run build`: passed; Next.js statically prerendered
  `/white-label-shopify-development-services` along with sitemap and robots
  outputs.
- `git diff --check`: passed.
- Local browser audit: metadata/canonical/robots passed; one H1; six expected
  schema nodes; five visible FAQ entities; accordion, header, marquee, and
  reduced-motion states passed; no missing image alt attributes or live
  WordPress asset URLs.
