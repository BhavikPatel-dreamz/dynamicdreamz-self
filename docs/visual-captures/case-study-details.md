# Case Study Detail Pages

Live route family: `https://www.dynamicdreamz.com/case-studies/{slug}/`
Local route family: `/case-studies/{slug}`
Date checked: 2026-10-06
Browser/source: Google Chrome headless screenshots, rendered live pages, View Page
Source, live CSS (`dd-css/case-study-single-0eebcc2295.css`), live sitemap inventory, and local component audit.

## Representative Viewports

The `sleepycat` and `bombay-shirt-company` routes represent the modern live case study template featuring the complete modular section set:
- `.case-study-hero` (`#F7F4E9` darkcream split hero with dual badge eyebrow, Visit Website CTA, and explore scroll CTA)
- `.case-study-all-ino` (4-column project facts bar)
- `.key-metrics` (optional `#182019` dark pill card with metric counters)
- `.client-challenge` (numbered challenge cards with red "01", "02" counters)
- `.our-solutions` (`#192019` dark green section with numbered solution items)
- `.key-features` (`#eff4ef` pista background with white feature cards)
- `.service-delivered` (two-tone container with `#fbefd7` cream left block and right service items grid)
- `.see-the-work-sec` (optional `#eff4ef` related case studies card grid)

| Viewport | Live screenshot | Local screenshot | Status |
| --- | --- | --- | --- |
| SleepyCat 1440x900 | `docs/visual-captures/case-study-details/live-sleepycat-desktop-1440x900.png` | `docs/visual-captures/case-study-details/local-sleepycat-desktop-1440x900.png` | captured |
| SleepyCat 768x1024 | `docs/visual-captures/case-study-details/live-sleepycat-tablet-768x1024.png` | `docs/visual-captures/case-study-details/local-sleepycat-tablet-768x1024.png` | captured |
| SleepyCat 390x844 | `docs/visual-captures/case-study-details/live-sleepycat-mobile-390x844.png` | `docs/visual-captures/case-study-details/local-sleepycat-mobile-390x844.png` | captured |

## Sources Inspected

| Source | What was checked |
| --- | --- |
| Live CSS `case-study-single-0eebcc2295.css` | Verified all selectors, colors (`--darkcream: #F7F4E9`, `--pista: #eff4ef`, `--dark-green: #192019`, `--theme-red: #ad5151`, `--line: rgba(40,40,40,.11)`), typography (`Montserrat` and `Neue Montreal`), borders, gaps, flex/grid rules, and media query breakpoints at 1399, 1199, 991, 767, and 575px. |
| Rendered live pages (`sleepycat`, `bombay-shirt-company`, `gnc-india`, `don-j`, `custom-neon`, `renee-cosmetics`) | Live DOM inspects revealed full transition to the `single-blog dd` template across all 56 active live case studies. |
| WordPress DOM suppression audit | View Page Source contains `.single-blog.dd > .container` with a back button and `.post-navigation`, but `case-study-single.css` explicitly suppresses them via `.single-case-study .single-blog.dd > .container { display: none }` and `.navigation.post-navigation { display: none }`. In accordance with AGENTS.md rules, these permanently hidden elements are omitted from Next.js. |

## Section Inventory (Live Template Parity)

| Section | Live behavior | Migration contract |
| --- | --- | --- |
| Hero Section | `#F7F4E9` darkcream background, 60px padding, left column (47-50%) with dual category eyebrow (red dash + dot separator), `h1.h2` title, summary paragraph, button group (`Visit Website` external red pill button + `explore case study` scroll link), right column (46-47%) with high-res hero image | `CaseStudyHero` server component rendered with clean Tailwind classes and `ButtonLink` primitives. |
| All Info Bar | 4-column summary bar (`Project` 40%, `Industry` 20%, `Technology` 20%, `Location` 20%) with uppercase 14px bold labels and 16px value text, bordered by `rgba(40,40,40,0.11)` | `CaseStudyAllInfo` server component with responsive grid (4 cols on desktop, 2 cols on tablet, 1 col on mobile). |
| Key Metrics | Optional `#182019` rounded 22px banner, 22% left block with uppercase 12px H2, 78% right block with flex stats (`30px` H3 + 13px label) | `CaseStudyKeyMetrics` server component rendered when metric data exists. |
| Client Challenge | `#explore` section (`pt-80 pb-80`), eyebrow `Client Challenge / Objective`, `h2` `What the Project Needed to Solve`, intro paragraph, and 4-column bordered card grid with red "01", "02" counters | `CaseStudyChallenge` server component with responsive grid matching live count. |
| Our Solutions | Full-width `#192019` dark green section with white text, eyebrow `Our Solution`, `h2` `How We Approached the Project`, lead paragraph, and list of numbered solution points with red "01", "02" markers | `CaseStudySolutions` server component matching max-w-[900px] live reading line. |
| Key Features Delivered | `#eff4ef` pista light green section with eyebrow `Key Features`, `h2` `Key Features Delivered`, and grid of white 18px rounded cards with red counters and bold H3 titles | `CaseStudyKeyFeatures` server component supporting default 3-col and 2-col variants. |
| Project Delivery & Technology | Bordered 22px rounded container with `#fbefd7` cream yellow left block (35%) and right 2-column grid (65%) of service chip items (`Service Delivered` label + bold H5 title) | `CaseStudyServiceDelivered` server component. |
| Explore Our Client Case Studies | Optional `#eff4ef` section with `RELATED CASE STUDIES` eyebrow, `Explore Our Client Case Studies` H2, intro text, and 3-column listing cards matching the archive grid | `CaseStudyRelated` component reusing `CaseStudyCard` in compact 3-column configuration. |

## Responsive Behavior

- **Desktop (1440px+)**: Hero 47/46 split; All Info 40/20/20/20 split; Metrics 22/78 split; Challenges 4 columns; Key Features 3 columns; Service Delivered 35/65 split.
- **Tablet (768px - 991px)**: Hero stacks with image first (`flex-col-reverse`), 40px margin; All Info 2x2 grid (50% each); Metrics stacks vertically; Challenges 2 columns; Key Features 2 columns; Service Delivered stacks vertically.
- **Mobile (< 768px)**: Section vertical paddings reduce from 80px to 50px; All Info stacks into full-width rows with bottom borders; Challenges stack into 1 column; Key Features 1 column; Service Delivered right block items stack full-width.

## Live Sitemap Coverage & Ingestion Status

- **Sitemap Source**: `https://www.dynamicdreamz.com/case-study-sitemap.xml`
- **Total Case Studies Ingested**: 56 live case studies (+ 2 backward-compatible fallback entries: `tipii`, `evrgreen`).
- **Data Ingestion Parity**:
  - Hero Section: 56/56 live titles, summaries, eyebrow tags, and valid project hero images.
  - All Info Bar: 56/56 project titles, industries, technologies, and locations.
  - Key Metrics: 22/56 live metrics banners parsed directly from live pages with matching stat numbers and labels.
  - Client Challenge: 56/56 client challenges with exact live numbered cards.
  - Our Solutions: 56/56 solutions sections with exact live numbered items and lead texts.
  - Key Features Delivered: 56/56 key features delivered with 2-column or 3-column layouts.
  - Project Delivery & Technology: 56/56 service chips containers with dual-tone layouts.
  - Related Case Studies: 35/56 explicit related case study card links, with automatic fallback for the remainder.
  - Custom Modular Sections: Full support for custom section blocks (such as `don-j` Medusa/Next.js architecture).
  - Validation Gates: 100% compliant with `check:case-studies`, `check:urls`, `check:component-content`, and `check:asset-duplicates`.

