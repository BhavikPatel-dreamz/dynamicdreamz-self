# SEO, AEO & GEO Launch Checklist

Use this checklist from the start of each page build. SEO, AEO, and GEO are
engineered into the page architecture, not applied as a final pass. This document
implements the production standards and 12 audit gates from
`docs/SEO-AEO-GEO-PLAYBOOK.md`.

## Sitewide Foundation

- Root metadata has `metadataBase` set to the production domain.
- Root metadata uses a title template such as `%s | Dynamic Dreamz`.
- Search indexing is blocked by default in non-production environments (`noindex` metadata, `X-Robots-Tag`, empty sitemap). Set `ALLOW_SEARCH_INDEXING=true` for production launch.
- `src/app/robots.ts` allows crawl so Google can honor `noindex`. When indexing is enabled, it allows indexable public pages, points to the sitemap, and explicitly permits AI answer/citation bots:
  - `OAI-SearchBot`
  - `ChatGPT-User`
  - `PerplexityBot`
  - `ClaudeBot`
  - `Google-Extended`
  - `Applebot-Extended`
- `src/app/sitemap.ts` includes every indexable route.
- `/llms.txt` and `/llms-full.txt` exist at the domain root, returning clean Markdown entity facts, credentials, core offerings, and canonical links under 600 tokens.
- IndexNow route (`/api/indexnow`) and key verification file exist for instant multi-engine discovery.
- `src/app/not-found.tsx` exists before launch.
- `src/app/global-error.tsx` exists before launch if the app has meaningful
  client-side error boundaries.
- Open Graph and Twitter image assets exist locally.
- Favicon and app icons are branded, not starter assets.
- Analytics, tag manager, and tracking scripts use `next/script` and are loaded
  only after approval.
- Legacy URLs have redirects when final slugs differ.

## Per-Page Metadata

Each indexable page needs:

- `title`: unique, useful, and **60 characters or fewer** — this is the on-page
  100/100 target, because search results truncate longer titles. Defined in
  `pageSeo` (`src/data/seo.ts`), where a build-time guard hard-fails
  `npm run build` on titles outside 15-60 characters, so a title that would
  truncate in SERPs can never ship. When a live-parity title runs long, shorten
  it (drop a redundant word — e.g. a repeated brand/keyword — not the primary
  keyword) rather than raising the cap.
- `description`: unique, specific, and **160 characters or fewer** (aim for
  ~140-160). The same build-time guard hard-fails descriptions outside 70-160
  characters.
- `alternates.canonical`: absolute or metadataBase-relative canonical path.
- `openGraph.title`
- `openGraph.description`
- `openGraph.url`
- `openGraph.siteName`
- `openGraph.images`
- `openGraph.type`
- `twitter.card`
- `twitter.title`
- `twitter.description`
- `twitter.images`
- `robots.index` and `robots.follow` where appropriate.

When migrating an existing live page, compare these fields with View Page Source
from the live URL before changing them. Preserve the current SEO intent unless
there is a clear reason to improve it.

Canonical, `og:url`, sitemap URLs, robots allow paths, schema, and internal
links must use the no-trailing-slash policy. The homepage `/` is the only
structural route exception; absolute homepage URLs use the bare origin without
a terminal slash. `next.config.ts` explicitly sets `trailingSlash: false`, so
`/about-us/` redirects to `/about-us`; source code must link directly to
`/about-us` to avoid that redirect. The policy has two safeguards:

- `absoluteUrl` in `src/lib/seo.ts` emits the homepage as the bare origin and
  normalizes non-root public page URLs before canonical, Open Graph, sitemap,
  and JSON-LD output is created.
- `npm run check:urls` rejects trailing-slash internal route literals and any
  change away from `trailingSlash: false`. It runs within lint and build.

Never copy trailing slashes from the legacy live site and never hand-format a
canonical or `og:url`.

## Structured Data & Semantic Schema (`@graph`)

All structured data must use a single unified `@graph` JSON-LD array where all
entities link via `@id` pointers (as specified in `docs/SEO-AEO-GEO-PLAYBOOK.md`).
Never output disconnected, isolated `<script type="application/ld+json">` tags.

Sitewide `@graph` nodes:

- `Organization` (and `ProfessionalService`): Canonical entity definition (`@id: ".../#organization"`), legal name, foundingDate (2006), 150+ employees, areaServed, verified aggregate ratings, sameAs links to LinkedIn, Clutch, Trustpilot.
- `WebSite`: Linked to organization via publisher (`@id: ".../#website"`).

Common page types:

- `WebPage` (or specialized subtypes `AboutPage`, `CollectionPage`, `ContactPage`): Linked to `WebSite` via `isPartOf` and `Organization` via `about`.
- `BreadcrumbList`: Linked for pages below the homepage.
- `Service` or `ProfessionalService`: For service landing pages with `OfferCatalog`.
- `CollectionPage` or `ItemList`: For portfolio and case study indexes.
- `Article` or `BlogPosting`: For blog posts with author and datePublished/dateModified.
- `FAQPage`: Linked via `isPartOf` to the `WebPage`, emitted only when the page visibly contains matching FAQ content.
- `Person`: Real team profile pages with approved details.
- `VideoObject`: Visible YouTube/video testimonials or important page videos
  when title, description, thumbnail, upload date, and embed/content URLs are
  known.

Schema quality rules:

- Verify 0 Rich Results errors and 0 Schema.org warnings.
- Build every `VideoObject` through the shared `videoObjectSchema()` helper in
  `src/lib/schema.ts`. Never hand-author a `VideoObject` literal. The helper's
  input type makes `uploadDate` mandatory, so `npm run build` fails if a video
  ships without one. `uploadDate` is a Google-required property; a missing value
  silently disqualifies the video from rich results. Always use the video's real
  publish date (for YouTube, read `uploadDate` from the watch page); never invent
  one.
- Review/rating schema must match visible page claims or be scoped to the exact
  source it represents.
- Do not mix one aggregate rating with unrelated visible rating badges.
- Do not invent review counts, ratings, upload dates, authors, or social URLs.
- `datePublished` and `dateModified` must be real, not future-dated, and not
  stale hardcoded placeholders.
- Prefer deriving `dateModified` from content data, file metadata, release data,
  or an explicit reviewed date field.
- The page-type node (`WebPage`, `AboutPage`, `CollectionPage`, etc.) should
  include a `primaryImageOfPage` `ImageObject` that matches the page's OG image
  (path/width/height), resolved through `absoluteUrl`. Keep this consistent
  across every page — a missing `primaryImageOfPage` on one page while others
  have it is a parity gap to close.

## Content And On-Page SEO

During migration, the live-visible page is the UI/content baseline. Visible
copy changes will not be approved. An SEO, AEO, GEO, or audit task does not
authorize visible copy or design changes. Preserve live headings, paragraphs,
labels, CTAs, proof, cards, taxonomy, section order, and default interactions
100% as-is from the live site.

Metadata and other nonvisual search output must be engineered to the highest
standard, but structured data must still match visible content without
introducing unsupported claims.

- One clear `h1` per page matching live site intent.
- Headings follow a logical hierarchy.
- First viewport makes the page topic obvious.
- Primary keyword appears naturally in title, description, `h1`, intro, and at
  least one supporting heading where relevant.
- Service pages include proof, process, deliverables, related work, FAQs, and a
  CTA as present on the live site.
- Case studies include client/brand, industry, technology, challenge, solution,
  and outcome where approved.
- Blog pages include author/date only when accurate.
- Internal links point to relevant services, case studies, contact, and blog
  resources.
- External links use `rel="noopener noreferrer"` when opening a new tab.

## Technical SEO & SSR DOM Architecture

- The First-10KB Rule: Keep `<header>` DOM size under 4 KB; primary page metadata, `<h1>`, and core entity summary render as early as possible in the server-rendered HTML stream.
- Single-Nav SSR Gate: Render exactly one semantic `<nav aria-label="Primary">` in the SSR HTML. Adapt its layout using responsive CSS. Never render dual mobile/desktop `<nav>` trees in static HTML, and never wrap crawlable links in `inert` or `aria-hidden="true"`.
- Zero-Clone SSR Gate: Infinite marquees/carousels render each item strictly once in static SSR HTML. Duplicate nodes strictly on the client inside `useEffect` or animation controllers, attaching `aria-hidden="true"` to cloned tracks.
- Staging & Preview Shield: All staging, preview, and QA URLs emit `X-Robots-Tag: noindex, nofollow` or equivalent meta robots tags.
- No shipped page has `Create Next App` metadata.
- No starter assets are used as brand assets.
- No important text is only inside an image.
- No duplicate page title/description across indexable routes.
- No broken internal links.
- No runtime image/script dependency on `dynamicdreamz.com`.
- No canonical, OG, Twitter image, favicon, CSS, script, JSON-LD image, or media
  URL depends on `dynamicdreamz.com`; migrate required files locally first.
- Local image filenames are meaningful, lowercase, kebab-case, and descriptive
  of the asset or page context.
- Images have intrinsic dimensions or stable parent aspect ratios.
- Every image has intentional alt handling.
- Content images use meaningful, page-specific alt text.
- Alt text is not missing, generic, duplicated across unrelated images, or
  keyword-stuffed.
- Decorative images have empty alt text only when they are truly decorative.
- Pages do not require client JavaScript for primary content to render.
- Major content sections are Server Components by default; Client Components are
  limited to small interactive controls.
- Canonicals match final production URLs (lowercase, no trailing slash).
- Redirects preserve important old URLs.
- Twitter metadata includes approved `twitter:site` and `twitter:creator`
  handles when known; omit rather than inventing unknown handles.

## AEO & GEO Engineering Standards

- The Answer Capsule Rule: Immediately beneath primary `<h2>` or `<h3>` section headings, provide a 40-to-55-word self-contained summary paragraph without dangling pronouns before breaking into bullets, cards, or deep prose.
- Question-Anchored Subheadings: Convert 30% to 50% of subheadings into natural-language, high-intent buyer questions.
- Deterministic HTML Structures:
  - Native `<table>` with `<thead>`, `<th>`, and `<tbody>` comparing tiers, deliverables, tech specs, or alternatives on commercial landing pages.
  - Ordered lists (`<ol><li>`) for sequential onboarding and implementation workflows.
  - Description lists (`<dl><dt><dd>`) for key-value company facts and SLAs.
- Direct-First FAQ Architecture: FAQ answers start with a direct "Yes.", "No.", or concrete numerical range in sentence 1, addressing timeline, pricing, differentiation, and geography.
- Fact Density & Quantitative Proof: Replace vague adjectives ("world-class", "seamless") with verifiable metrics; case study and portfolio cards display at least two hard data points (percentages, revenue, timeframes, counts).
- Cross-Web Entity Consensus: Founding year (2006), headcount (150+), partner tier (Shopify Platinum Partner), and headquarters match 100% across the site, schema, and external `sameAs` directory profiles.
- Strict Live-UI Preservation: During migration, visible copy is strictly preserved 100% as-is. Visible copy rewrites will not be approved. Achieve 100/100 AEO/GEO indexing through nonvisual technical architecture (SSR HTML, token optimization, `/llms.txt`, and rich connected `@graph` schema).

## Local Development Audit Rules

For a one-page local audit before all routes are migrated, score the page against
the checklist above while ignoring planned-but-unbuilt internal routes. Report
ignored route failures separately as "migration pending".

Do not ignore:

- Broken links to routes that are already implemented.
- Mistyped links.
- Broken hash anchors on the audited page.
- Broken asset URLs.
- Broken metadata, schema, canonical, OG, Twitter, script, CSS, or media URLs.
- Broken external links.

Before launch, remove this exception: every internal link must resolve or
redirect correctly, and every indexable route must be present in the sitemap.

## Performance And Core Web Vitals

- Preload Budget Cap: Limit `<link rel="preload">` in `<head>` to a maximum of 3 critical resources (1–2 primary variable `.woff2` fonts + 1 above-the-fold LCP image) to eliminate bandwidth contention.
- LCP Image Optimization: The above-the-fold hero visual MUST use `loading="eager"`, `fetchpriority="high"`, and explicit `width` and `height` attributes. Never set `loading="lazy"` on above-the-fold images.
- Icon Consolidation: Replace repetitive decorative `<img src="icon.svg">` tags in headers/cards with inline `<svg aria-hidden="true">` symbols or CSS sprites.
- Use `next/image` for meaningful raster images.
- Use local fonts through `next/font`.
- Convert large PNG/JPEG source assets to WebP or AVIF when practical.
- Keep raw source assets reasonably sized; do not commit oversized originals
  unless they are needed for generation or fidelity. `next/image` optimizes
  delivery, but committed content-image sources should still stay roughly under
  ~200KB each. Flag oversized sources with:
  `find public/assets -type f \( -name '*.webp' -o -name '*.png' -o -name '*.jpg' -o -name '*.jpeg' \) -size +200k -printf '%s\t%p\n' | sort -rn`
- Use video posters plus `preload="none"` or lazy loading for below-the-fold
  videos. Avoid mobile autoplay for heavy videos unless explicitly required.
- Avoid unnecessary animation libraries and large client bundles.
- Lazy load below-the-fold media and heavy client widgets.
- Prioritize the LCP image only when it is actually the LCP element.
- Avoid layout shift from headers, cards, logos, screenshots, and counters.
- Keep third-party scripts minimal and delayed unless required for consent or
  critical business tracking.

## Prelaunch Verification

Run:

```bash
npm run lint
npm run build
```

Then manually verify against the 12 Pre-Release Audit Gates in `docs/SEO-AEO-GEO-PLAYBOOK.md`:

- [ ] 1. Canonical Gate: `<link rel="canonical">` points to production `https://` URL (no trailing slash).
- [ ] 2. Staging Shield Gate: Non-production environments emit `noindex, nofollow`.
- [ ] 3. Single-Nav SSR Gate: Single semantic `<nav aria-label="Primary">` in SSR HTML; no `inert` or `aria-hidden="true"` on crawlable links.
- [ ] 4. Zero-Clone SSR Gate: Marquees/carousels render items once in static SSR HTML.
- [ ] 5. Preload Cap Gate: `<head>` contains `<= 3` `<link rel="preload">` tags; LCP image uses `loading="eager"` and `fetchpriority="high"`.
- [ ] 6. Bot Access Gate: `/robots.txt` explicitly allows `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended`.
- [ ] 7. `/llms.txt` Gate: `/llms.txt` and `/llms-full.txt` return HTTP 200 with clean entity facts and links.
- [ ] 8. Heading & Structure Gate: Exactly one `<h1>`; valid semantic heading hierarchy preserving live copy.
- [ ] 9. Semantic Table Gate: Structured comparisons and tabular data rendered semantically with `<table>` elements where present on live pages.
- [ ] 10. Quantitative Proof Gate: Hard data points present in schema and verified against approved company facts.
- [ ] 11. Schema Graph Gate: Unified `@graph` JSON-LD validates with 0 errors and links all entities via `@id` URIs.
- [ ] 12. Cross-Web Entity Gate: Founding year, headcount, partner tier, and HQ match across site and `sameAs` directories.
- [ ] `/sitemap.xml` contains all indexable public pages.
- [ ] Mobile rendering around 390px and Desktop rendering around 1440px verified.
- [ ] Contact CTA paths, header, and footer links verified.
- [ ] Lighthouse 100/100 score target across Performance, Accessibility, Best Practices, and SEO.
