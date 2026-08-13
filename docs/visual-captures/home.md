# Homepage AEO/GEO Update

Live URL: `https://www.dynamicdreamz.com/`
Local route: `/`
Date checked: 2026-08-13
Browser: Google Chrome 151.0.7922.71 (headless capture)

## 2026-08-13 Live-UI Parity Rollback

The project owner requested that every visible UI change that differs from the
live site be reverted. The live page and View Page Source were checked again on
2026-08-13 before editing. The rollback restores the live hero H1 and answer,
the named AI-tools paragraph, and any later visible copy divergence while
preserving nonvisual metadata, schema, local-asset, accessibility, and
reduced-motion improvements.

| Viewport | Current live screenshot | Post-rollback local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-parity-live-home-1440x900.png` | `/tmp/dd-parity-local-home-1440x900.png` | passed; live hero wording and geometry restored |
| 768x1024 | `/tmp/dd-parity-live-home-768x1024.png` | `/tmp/dd-parity-local-home-768x1024.png` | passed; no copy or CTA overflow |
| 390x844 | `/tmp/dd-parity-live-home-390x844.png` | `/tmp/dd-parity-local-home-390x844.png` | passed; live mobile wrapping restored |

Current live source: `/tmp/dd-live-home-20260813.html`. The linked live
`style.css`, `default-media.css`, homepage CSS, and homepage/custom JavaScript
remain the governing style and interaction sources already enumerated below.
Default, responsive, hover/focus, header-scroll, accordion, carousel, marquee,
and reduced-motion states were rechecked after the rollback. The current live
August 11 article cards were synchronized locally with project-owned images.
Nonvisual Organization wording and explicit content dates remain intentional.

## 2026-08-12 Scope Revision

The project owner confirmed that planned-but-unbuilt route destinations may be
ignored while the migration is under development. The temporary email,
same-page anchor, and Resources-route CTA substitutions from the first AEO/GEO
pass will therefore be reverted to the migration/live-intent destinations.
The homepage service `OfferCatalog` will also be restored because its route
availability is governed by the same development-stage exception. These
reverts restore the captured pre-change CTA labels and geometry; no new visual
design is introduced.

## 2026-08-12 Proposal Captures (Superseded)

| Viewport | Live screenshot | Local screenshot | Result |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-home-live-1440x900.png` | `/tmp/dd-home-local-final-1440x900.png` | passed; entity-first answer remains two lines and all hero controls/proof fit |
| 768x1024 | `/tmp/dd-home-live-768x1024.png` | `/tmp/dd-home-local-final-768x1024.png` | passed; answer remains three lines with no CTA or proof overflow |
| 390x844 | `/tmp/dd-home-live-390x844.png` | `/tmp/dd-home-local-final-390x844.png` | passed; answer wraps cleanly in the existing hero and two-by-two proof grid |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered homepage | Desktop, tablet, and mobile first-viewport layout; section order; H1 and hero answer; CTAs; proof badges; brand grid; expertise; work; testimonials; integrations; latest articles; header; footer; and contact widget |
| View Page Source captured at `/tmp/dynamicdreamz-home-source.html` | Title, meta description, robots, canonical, Open Graph/Twitter data, headings, visible copy, links, alt text, Yoast graph, separate rating schema, non-visible FAQ schema, service `OfferCatalog`, and source asset references |
| `style.css`, `default-media.css` | Shared Montserrat/Montreal typography, buttons, containers, header/footer behavior, colors, focus/hover treatment, and shared responsive rules |
| `shopify-premium-partner.css`, `shopify-premium-partner-media.css` | Hero geometry, 56px desktop H1, 18/28 hero copy, proof row, brand grid, overview, expertise columns, accordion, selected-work rail, testimonials, partner marquees, blog cards, and 1199/991/767/640/379/359px behavior |
| `shopify-premium-partner.js`, `custom.js` | Scroll-direction header state, accessible Slick tab-index repair, 600ms testimonial navigation, 12s linear work rail on desktop, swipe work rail on mobile, expertise accordion behavior, modal video behavior, and review animation triggers |

Temporary source files:

- `/tmp/dd-live-style.css`
- `/tmp/dd-live-media.css`
- `/tmp/dd-live-home.css`
- `/tmp/dd-live-home-media.css`
- `/tmp/dd-live-home.js`
- `/tmp/dd-live-custom.js`

## Captured Live Baseline

| Area | Live result |
| --- | --- |
| Hero H1 | `Shopify Plus & Enterprise Shopify Solutions` |
| Hero answer | States the DTC, B2B, agency, migration, integration, CRO, performance, and support audience/capabilities, but does not define Dynamic Dreamz by name or Shopify Partner status in one reusable sentence |
| Hero layout | 175px desktop top offset; warm gradient; centered 56px/114% H1 on desktop; 38px tablet and 27px mobile treatment; two CTAs; four proof profiles |
| Expertise AI paragraph | Names six AI tools but does not explain human review, security, QA, or delivery governance |
| Structured data | Separate ambiguous 4.6/103 rating node; Organization repeats that aggregate rating; non-visible FAQPage; Organization `OfferCatalog` contains service URLs that are not implemented locally; WebPage uses the live WordPress modification time |
| Section order | Hero, ambitious brands, global agency/stats, expertise, selected work, testimonials, partners, latest blogs |

## 2026-08-12 Proposed Homepage-Only Differences (Superseded)

| Difference | AEO/GEO reason | Visual impact |
| --- | --- | --- |
| Replace the hero answer with an entity-first statement naming Dynamic Dreamz, its Shopify Platinum Partner status, audiences, and core Shopify capabilities | Gives answer engines a concise visible definition that matches the Organization description and approved on-page proof | Copy-only change inside the existing hero paragraph; no new section or component |
| Reframe the expertise AI-tools paragraph around selective use, human review, security, and QA | Leads with buyer outcomes and governance instead of a tool list | Copy-only change inside the existing paragraph |
| Use an explicit homepage content-review date for `WebPage.dateModified` | Stops deployments from falsely appearing as substantive content updates | No visual impact |
| Retain the existing local omission of ambiguous rating and non-visible FAQ schema | Keeps structured data aligned with visible, source-specific proof and visible questions only | No visual impact |

## Interaction And Motion Baseline

| State | Live behavior | Local check after implementation |
| --- | --- | --- |
| Header scroll | Header switches direction classes after a 40px threshold | existing local direction-aware header remains unchanged and usable |
| Header/menu hover and open states | Desktop mega menus use hover-capable devices; mobile uses click/touch controls | existing shared desktop/mobile navigation remains unchanged; controls are keyboard focusable |
| Expertise accordion | First item is open; clicking another item closes the current panel and slides the selected panel | existing accessible accordion remains unchanged; first answer is visible in server HTML and controls expose ARIA state |
| Selected work | Continuous 12-second linear desktop rail; one-card mobile rail supports swipe and disables autoplay | existing scoped CSS rail remains animated on desktop and horizontally scrollable on mobile; CTA label and destination match the migration baseline |
| Testimonial | One slide, finite navigation, 600ms ease-in-out transition, disabled end arrows | existing accessible carousel remains unchanged; previous/next and video-dialog controls remain keyboard operable |
| Logo/integration motion | Infinite linear rows; direction alternates where applicable | existing scoped CSS marquee remains unchanged |
| Focus and reduced motion | Live has limited focus/reduced-motion handling; local improvements must remain usable and static when reduced motion is requested | existing local focus-visible and reduced-motion rules remain active; restored migration links retain the shared accessible button treatment |

## Responsive Baseline

- Desktop uses the full navigation, centered hero, horizontal CTA/proof rows,
  split content grids, and animated horizontal media rails.
- Tablet uses the mobile navigation, a 38px hero H1, stacked overview/expertise
  layouts, and a horizontal proof row.
- Mobile uses 16px gutters, a 27px hero H1, stacked hero CTAs, a two-by-two
  proof grid, single-column content, and touch-scrollable work cards.
- The captured live first viewport has no horizontal document overflow at the
  three required widths.

## Final Verification

- The live and updated local first viewport were visually inspected at 1440,
  768, and 390 pixels. The live H1, hero answer, CTA casing, and proof row are
  restored without overlap, clipping, horizontal scroll, or unintended section
  movement.
- The live AI-tools paragraph is restored. The current live August 11 article
  cards and their category links are synchronized locally with project-owned
  images.
- Rendered local source contains the expected canonical and metadata, one
  JSON-LD graph, stable Organization/WebSite/WebPage/BreadcrumbList nodes, and
  eleven supported testimonial `VideoObject` nodes.
- Local structured data contains the restored eight-offer `OfferCatalog` and no
  `aggregateRating` or non-visible `FAQPage`; `WebPage.datePublished` is
  `2025-12-12T09:55:48+00:00` and `dateModified` is the explicit homepage
  review date `2026-08-13T00:00:00+05:30`.
- `/request-quote/`, `/our-work/`, and `/blog/` were confirmed in rendered HTML.
  Their route availability is intentionally excluded during active migration
  and must be checked before launch. Lint and production-build results are
  recorded in the task handoff.

## Remaining Differences And Migration-Pending Items

| Difference | Reason | Status |
| --- | --- | --- |
| Entity-first hero and AI-governance proposals | The project owner requested live visual parity | reverted; retained only as deferred proposals in the content queue |
| Homepage, individual article, shared header/footer, and service destinations may still be unbuilt | The project owner approved ignoring planned-route availability during active migration | migration pending; mandatory prelaunch route audit |
| Organization OfferCatalog includes planned service destinations | The project owner requested restoration of route-related changes during active migration | retained for migration intent; revalidate before launch |
| Selected project cards still link to external storefronts | Internal evidence pages and approved outcomes are not available | deferred; link to internal case studies when built |
| Home displays `4500+` Shopify stores while Resources live story copy says `1000+` | Definitions, provenance, values, and approval date require leadership sign-off | blocked; live UI retained and ambiguous aggregate rating remains excluded |
