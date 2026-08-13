# About Page

Live URL: `https://www.dynamicdreamz.com/about-us/`
Local route: `/about-us`
Date checked: 2026-08-13
Browser: Google Chrome (Chromium, headless capture)

## 2026-08-13 Live-UI Parity Rollback

The project owner requested restoration of all live-visible UI copy. The live
page and View Page Source were checked again before editing. The rollback
restores the original H1, hero introduction, company-story paragraph, timeline
wording, and value descriptions. Person schema, explicit content dates, local
assets, accessible controls, and other nonvisual implementation improvements
remain unless they change the default rendered UI.

| Viewport | Current live screenshot | Post-rollback local screenshot | Status |
| --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-parity-live-about-1440x900.png` | `/tmp/dd-parity-local-about-1440x900.png` | passed; live H1 and introduction restored |
| 768x1024 | `/tmp/dd-parity-live-about-768x1024.png` | `/tmp/dd-parity-local-about-768x1024.png` | passed; no overflow or section shift |
| 390x844 | `/tmp/dd-parity-live-about-390x844.png` | `/tmp/dd-parity-local-about-390x844.png` | passed; live mobile wrapping restored |

Current live source: `/tmp/dd-live-about-20260813.html`. The About CSS/JS,
computed-style, counter, timeline, video, hover/focus, and responsive sources
listed below remain the captured interaction baseline. The rollback supersedes
the 2026-08-12 visible-copy differences recorded later in this note; Person
schema, explicit content dates, local assets, and accessibility remain retained.

## 2026-08-12 Proposal Captures (Superseded)

| Viewport | Live screenshot | Local baseline | Post-change screenshot | Status |
| --- | --- | --- | --- | --- |
| 1440x900 | `/tmp/dd-about-aeo-20260812/live/live-1440x900.png` | `/tmp/dd-about-aeo-20260812/local-before/local-1440x900.png` | `/tmp/dd-aeo-all-pages-20260812/about/about-1440x900.png` | passed |
| 768x1024 | `/tmp/dd-about-aeo-20260812/live/live-768x1024.png` | `/tmp/dd-about-aeo-20260812/local-before/local-768x1024.png` | `/tmp/dd-aeo-all-pages-20260812/about/about-768x1024.png` | passed |
| 390x844 | `/tmp/dd-about-aeo-20260812/live/live-390x844.png` | `/tmp/dd-about-aeo-20260812/local-before/local-390x844.png` | `/tmp/dd-aeo-all-pages-20260812/about/about-390x844.png` | passed |

## Live Sources Inspected

| Source | What was checked |
| --- | --- |
| Rendered live page and screenshots | Hero hierarchy and wrapping, delivery counters, story intro, timeline, founders, team, values, header, footer, and responsive section order |
| View Page Source saved at `/tmp/dd-about-aeo-20260812/live/about-source.html` | Title, description, canonical, robots, Open Graph, published/modified dates, H1, links, image text, Organization/WebPage/Breadcrumb/FAQ schema, and CSS/JS references |
| `style.css`, `default-media.css`, `assets/css/about/main.css`, `assets/css/about/media.css` | Existing migration's typography, 1180px container, hero spacing, counter panel, timeline, people cards, values grid, and responsive breakpoints |
| `assets/js/about.js`, `slick.min.js`, `odometer.min.js`, `custom.js` | Counter trigger, timeline carousel, video dialog, shared header behavior, and motion timings already represented by the local migration |
| Local source | Existing Server Components, typed About content, local assets, metadata, and JSON-LD before the AEO/GEO edit |

## 2026-08-12 AEO/GEO Scope Captured Before UI Editing

- Add the entity name to the H1 while retaining `Agile. Adept. Accurate.`.
- Replace the broad hero paragraph with a concise, fact-based company answer.
- Improve grammar in the story, timeline, and value descriptions without
  changing section order, imagery, styling, or interaction behavior.
- Replace the unsupported 2023 ranking wording with a non-ranking Shopify
  capability milestone unless an exact source is approved later.
- Reuse visible founder data in Person schema and replace deployment-driven
  freshness with a real content-review date.
- Founder titles remain as migrated from the live page; changing them requires
  a separate factual confirmation.
- Planned routes are excluded from this development-stage audit.

## Motion And Interaction

No motion or interaction implementation is being changed. The counter,
timeline, video, hover, focus, and responsive behavior must remain as captured
by the existing local implementation. Verification focuses on text wrapping,
overflow, section geometry, rendered metadata, and schema after the copy edit.

## 2026-08-12 Proposed Differences (Superseded)

| Difference | Reason | Status |
| --- | --- | --- |
| Local H1 adds `About Dynamic Dreamz` | Answer clarity improvement in this AEO/GEO pass | implemented; pending approval |
| Local hero, story, timeline, and values use edited copy | Copy quality and citation clarity | implemented; pending approval |
| Live source emits an ambiguous aggregate rating and non-visible sitewide FAQ | Schema must match visible, source-specific claims | intentionally omitted locally |
| Local assets and accessible interactions differ technically from WordPress/jQuery | Migration quality requirement | retained |

## 2026-08-12 AEO/GEO Verification

- Inspected post-change captures at 1440x900, 768x1024, and 390x844.
- The longer H1 wraps to two lines on desktop/tablet and three on mobile without
  clipping, overlap, or horizontal document overflow.
- Hero copy and statistic-card geometry remain stable at all three viewports.
- Existing counter, timeline, video, hover, focus, and reduced-motion contracts
  were not changed.
- Rendered source contains one AboutPage, one shared Organization, three founder
  Person nodes, BreadcrumbList, WebSite, and the visible company VideoObject.
