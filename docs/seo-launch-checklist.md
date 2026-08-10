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
- Canonicals match final production URLs.
- Redirects preserve important old URLs.

## Performance And Core Web Vitals

- Use `next/image` for meaningful raster images.
- Use local fonts through `next/font`.
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
