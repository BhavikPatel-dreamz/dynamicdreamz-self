# SEO Launch Checklist

Use this checklist from the start of each page build. SEO is part of the page,
not a final pass.

## Sitewide Foundation

- Root metadata has `metadataBase` set to the production domain.
- Root metadata uses a title template such as `%s | Dynamic Dreamz`.
- `src/app/robots.ts` allows indexable public pages and points to the sitemap.
- `src/app/sitemap.ts` includes every indexable route.
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

- `title`: unique, useful, normally under 60 characters.
- `description`: unique, specific, normally around 140 to 160 characters.
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

Canonical, `og:url`, sitemap URLs, and internal links must use one consistent
trailing-slash policy. Prefer Next.js default no-trailing-slash URLs unless
`trailingSlash: true` is intentionally set in `next.config.ts`; then apply the
chosen policy everywhere.

## Structured Data

Use JSON-LD only when it matches visible page content.

Sitewide:

- Organization
- WebSite

Common page types:

- BreadcrumbList for pages below the homepage
- Service or ProfessionalService for service landing pages
- CollectionPage or ItemList for portfolio and case study indexes
- Article or BlogPosting for blog posts
- FAQPage only when the page visibly contains matching FAQ content
- Person only for real team profile pages with approved details
- VideoObject for visible YouTube/video testimonials or important page videos
  when title, description, thumbnail, upload date, and embed/content URLs are
  known.

Schema quality rules:

- Review/rating schema must match visible page claims or be scoped to the exact
  source it represents.
- Do not mix one aggregate rating with unrelated visible rating badges.
- Do not invent review counts, ratings, upload dates, authors, or social URLs.
- `datePublished` and `dateModified` must be real, not future-dated, and not
  stale hardcoded placeholders.
- Prefer deriving `dateModified` from content data, file metadata, release data,
  or an explicit reviewed date field.

## Content And On-Page SEO

- One clear `h1` per page.
- Headings follow a logical hierarchy.
- First viewport makes the page topic obvious.
- Primary keyword appears naturally in title, description, `h1`, intro, and at
  least one supporting heading where relevant.
- Copy is written for buyers first, search engines second.
- Service pages include proof, process, deliverables, related work, FAQs, and a
  CTA.
- Case studies include client/brand, industry, technology, challenge, solution,
  and outcome where approved.
- Blog pages include author/date only when accurate.
- Internal links point to relevant services, case studies, contact, and blog
  resources.
- External links use `rel="noopener noreferrer"` when opening a new tab.
- Any suggested UI copy changes needed to improve SEO are recorded in
  `docs/page-content-improvements.md` with page name, route, current issue,
  suggested replacement, SEO reason, priority, and status.
- Page copy improvement suggestions should cover visible content, not only meta
  tags: `h1`, hero paragraph, section headings, service-card text, FAQ copy,
  CTA labels, proof/stat copy, image alt text, and internal-link anchor text.

## Technical SEO

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
- Canonicals match final production URLs.
- Redirects preserve important old URLs.
- Twitter metadata includes approved `twitter:site` and `twitter:creator`
  handles when known; omit rather than inventing unknown handles.

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

- Use `next/image` for meaningful raster images.
- Use local fonts through `next/font`.
- Convert large PNG/JPEG source assets to WebP or AVIF when practical.
- Keep raw source assets reasonably sized; do not commit oversized originals
  unless they are needed for generation or fidelity.
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

Then manually check:

- `/robots.txt`
- `/sitemap.xml`
- Homepage metadata
- One service page metadata
- One case study or portfolio page metadata
- Mobile rendering around 390px
- Desktop rendering around 1440px
- Contact CTA paths
- Header and footer links

For launch, also run Lighthouse or equivalent checks for performance,
accessibility, best practices, and SEO.
