# Dynamic Dreamz Agent Workflow

Use this workflow whenever implementing, migrating, designing, refactoring, or
reviewing work in this repo.

## One-Prompt Kickoff

Use this prompt at the start of a new agent session:

```text
Read AGENTS.md and run the Dynamic Dreamz migration workflow. Then complete this task production-ready: <task>.
```

The agent should then read:

1. `AGENTS.md`
2. `docs/project-context.md`
3. `docs/agent-workflow.md`
4. `docs/visual-parity-workflow.md`
5. `docs/seo-launch-checklist.md`
6. `docs/page-content-improvements.md`
7. Relevant local Next.js docs from `node_modules/next/dist/docs/`

## Working Loop

1. Understand the task and map it to a route, component, content area, SEO
   requirement, or asset need.
2. Inspect the current code before editing.
3. If migrating a legacy page, inspect the old URL as both a rendered page and
   View Page Source for content structure, headings, CTAs, metadata intent,
   images, links, schema, accessibility details, style details, and redirect
   needs.
4. For visual work, create or update a capture note in
   `docs/visual-captures/` before touching UI code. Record live screenshots,
   local screenshots, CSS/JS sources inspected, computed styles, interaction
   states, animation timings, responsive behavior, and remaining differences.
5. Decide the production structure before touching code.
6. Implement with local data/content and project-owned assets.
7. Add SEO metadata and structured data as part of the same change, not as a
   later cleanup.
8. For visual work, run the visual parity workflow and compare live vs local
   desktop, tablet, mobile, hover, focus, active/open, scrolled, and animation
   states.
9. Check responsive behavior, accessibility, performance risk, and broken links.
10. If SEO/content quality can improve through visible copy changes, update
   `docs/page-content-improvements.md` with page-specific suggestions.
11. Run verification commands.
12. Summarize changes, verification, visual capture notes, and any missing
    assets or content approvals.

## Before Editing Code

Read the relevant Next.js documentation from the installed package. Common
routes:

- App Router pages/layouts:
  `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`
- Project structure:
  `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- Metadata:
  `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
- Images:
  `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- Sitemap:
  `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`
- Robots:
  `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md`
- Production checklist:
  `node_modules/next/dist/docs/01-app/02-guides/production-checklist.md`

If a Next.js API feels familiar from memory, still check the local docs. This
project uses Next.js 16.3.0 and may differ from older App Router examples.

## Implementation Standards

- Use TypeScript and keep types close to shared content/data.
- Prefer Server Components by default. Pages, layout pieces, and meaningful
  page sections should render on the server unless they genuinely need browser
  interactivity.
- Add Client Components only for the smallest interactive island that needs
  state, browser APIs, event handlers, timers, observers, measurements,
  animation controls, forms that need client interactivity, or UI widgets.
- Do not mark an entire page or section with `"use client"` when only a menu,
  accordion, carousel, tabs, video control, header behavior, or animation
  controller needs it.
- Keep route files thin. Put meaningful visual/business sections in
  `src/components/sections/`, and keep those section components as Server
  Components whenever possible.
- Use small Client Components inside server-rendered sections for interactive
  controls.
- Put navigation, company stats, service lists, route metadata, and page content
  in `src/data/` or `src/content/` when reused.
- Keep static page SEO metadata in `src/data/seo.ts`. Page files should import
  from this shared source instead of defining full metadata objects inline,
  unless the route needs dynamic `generateMetadata`.
- Style with clean Tailwind utilities and reusable components. Do not add custom
  page, section, component, animation, or one-off layout CSS to
  `src/app/globals.css`.
- Create metadata helpers in `src/lib/metadata.ts` once multiple routes need the
  same rules.
- Create JSON-LD helpers in `src/lib/schema.ts` once structured data repeats.
- Use semantic HTML: one clear `h1`, ordered headings, real links and buttons,
  descriptive labels, and accessible form controls.
- Use `next/link`, `next/image`, `next/font`, and `next/script` rather than raw
  equivalents unless there is a specific reason.
- Avoid adding dependencies for simple UI. If a dependency is justified, explain
  the production benefit.

## SEO Workflow

Every indexable page must include:

- Unique `title`
- Unique `description`
- Canonical URL through `alternates.canonical`
- Open Graph title, description, URL, image, site name, and type
- Twitter card metadata
- Semantic heading structure
- Descriptive image alt text
- Internal links to related services, case studies, and CTA pages
- JSON-LD where useful:
  - Organization and WebSite globally
  - ProfessionalService or Service for service pages
  - BreadcrumbList for nested pages
  - Article or BlogPosting for blogs
  - FAQPage when visible FAQs exist
  - CollectionPage or ItemList for portfolio and case study indexes

Do not ship generic metadata copied from another page. Keep titles concise and
commercially useful. Keep descriptions human-readable and specific.

## Local Single-Page SEO Audit Mode

Use this mode when auditing one local page while the site is still mid-migration.
The target is a 100/100 page-level SEO result after excluding planned routes that
have not been built yet.

- Broken internal links to planned but unbuilt pages may be ignored for the
  score only during local development.
- Ignored links must be reported separately as "migration pending" with the
  target hrefs listed.
- A link is only "migration pending" when it points to an intended Dynamic
  Dreamz route from the navigation, sitemap plan, project context, or migration
  backlog.
- Broken links to already-built routes, mistyped routes, assets, forms,
  anchors, scripts, metadata URLs, or external sites are real failures.
- Launch audits must not ignore any broken internal links.

Everything else is part of the 100% gate:

- Visible page copy supports the target keyword and buyer intent: title, meta
  description, `h1`, intro paragraph, section headings, proof copy, FAQs, CTA
  text, image alt text, and internal-link anchor text.
- Canonical, `og:url`, sitemap URLs, and internal links follow the same trailing
  slash policy.
- Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage, Article, and
  VideoObject schema match visible page content.
- Review and aggregate rating schema matches visible review/rating claims or is
  scoped to the exact review source. Omit uncertain ratings instead of shipping
  inconsistent schema.
- `datePublished` and `dateModified` are accurate and not future-dated. Derive
  `dateModified` from content/build data where possible instead of hardcoding
  stale dates.
- Twitter metadata includes `twitter:site` and `twitter:creator` only when the
  approved company handle is known; do not invent handles.
- Visible videos that are important page content include valid `VideoObject`
  schema when title, description, thumbnail, upload date, and embed/content URL
  are known.
- Heavy source images are converted to optimized formats when quality allows.
  Prefer WebP/AVIF for photos and screenshots, keep SVG for vector logos/icons,
  and avoid large PNGs unless transparency or fidelity requires them.
- Videos use posters and `preload="none"` or lazy loading unless they are
  genuinely critical above-the-fold content. Avoid autoplaying heavy video on
  mobile unless explicitly required by the live-page parity brief.
- No production metadata, schema, image, video, script, CSS, canonical, or OG
  field depends on the old live site domain.

If a 100% result requires visible content changes, write them to
`docs/page-content-improvements.md` before or while implementing the page. Use
the page name and route, and include exact suggested UI copy.

## Migration Workflow For Legacy Pages

When migrating a page from the old site:

1. Record the old URL and final new URL.
2. Inspect the rendered live page at desktop and mobile sizes.
3. Inspect View Page Source for the same URL before implementation.
4. Capture title intent, `h1`, section order, visual hierarchy, CTAs, proof
   points, FAQs, internal links, image alt text, ARIA labels, forms, schema,
   canonical URL, OG/Twitter metadata, style rules, and responsive behavior.
5. Capture the asset map: original URL, intended local path, alt text, visible
   placement, dimensions if known, and whether the asset is decorative or
   meaningful.
6. Download or copy required live-site assets into `public/assets/**` during
   migration using meaningful local filenames, then use only the local copy in
   final code.
7. Copy required source content into typed local files under `src/content/**` or
   `src/data/**`; do not read from the live site at runtime.
8. Rebuild the page to match the live page first. Make improvements only when
   they improve production quality, accessibility, performance, or SEO without
   losing the original search intent.
9. Build the page using shared Server Components for major sections where
   appropriate, with tiny Client Components only for necessary interactivity.
10. Add page metadata, canonical URL, OG image, and structured data.
11. Add redirect only if the final URL changes.
12. Add the route to sitemap data.
13. Verify no production code hotlinks the old site.

## Live Site Capture Checklist

For exact migration work, capture these from the live page before building:

- URL, final route, page title, meta description, canonical, robots, OG, and
  Twitter metadata.
- JSON-LD and any visible content it represents.
- Header, mega menu, footer, breadcrumbs, and active navigation behavior.
- Every visible section in order, including eyebrow text, headings, paragraphs,
  cards, counters, buttons, forms, tabs, sliders, accordions, and FAQs.
- Style details for each major pattern: colors, fonts, font sizes, weights, line
  heights, spacing, max widths, grid/column behavior, backgrounds, borders,
  radii, shadows, button states, card states, hover/focus states, animations,
  sticky behavior, and responsive breakpoints.
- Every internal and external link, including `target`, `rel`, labels, and CTA
  wording.
- Every image or media asset, including original URL, local destination, alt
  text, title, caption, width, height, loading behavior, and priority/LCP role.
- Final local filename for every copied asset. Use clean lowercase kebab-case
  names that describe the asset; do not keep vague, random, hashed, or odd live
  filenames unless the original name is already meaningful.
- Every image's final alt decision: meaningful alt text for content images, or
  intentional empty alt only when the image is truly decorative.
- Accessibility details such as form labels, `aria-label`, `aria-expanded`,
  landmark roles, skip links, focus states, and keyboard-relevant interactions.
- Responsive differences between mobile, tablet, and desktop.

For style and animation parity, also follow
`docs/visual-parity-workflow.md`. Do not skip animation capture just because it
is not obvious in View Page Source.

Final code must be self-contained in this repo. Live-site URLs are allowed only
in migration notes, comments that document provenance, or temporary local
research; they must not remain in production image, script, stylesheet, API,
metadata, or schema references.

Style implementation should match the live visual result, but use local
maintainable code. Prefer Tailwind utilities and shared components over copying
large old-site CSS files directly. Keep `src/app/globals.css` minimal; do not
place page/component styles there.

## Asset Workflow

1. Check `public/assets/` before using any image.
2. If an old-site asset is needed, download/copy it into a local project-owned
   asset folder during migration.
3. Rename the local copy with a meaningful lowercase kebab-case filename if the
   live filename is unclear, random, hashed, generic, or keyword-stuffed.
4. Put assets in a stable folder by purpose.
5. Preserve the original asset's important attributes in local content/data:
   alt text, caption/title, source page, and original placement.
6. Use `next/image` for photos, logos, hero images, case study screenshots, and
   testimonial portraits.
7. Give every content image meaningful, page-specific alt text. Do not use
   generic values like "image", "banner", "logo image", or repeated keyword
   strings.
8. Use empty alt text only for truly decorative images, and make that decision
   intentional.
9. Use stable dimensions, aspect ratios, and responsive sizes to prevent layout
   shift.
10. Never use `dynamicdreamz.com` asset URLs in final code.

## Verification Checklist

Run these before completing implementation work:

```bash
npm run lint
npm run build
```

For UI work, also run:

```bash
npm run dev
```

Then capture and compare live/local screenshots at least:

- Mobile width around 390px
- Tablet width around 768px
- Desktop width around 1440px

Check for:

- No overlapping text or controls
- No horizontal scroll
- Header and footer navigation usable
- CTA links go somewhere real
- Images load with correct aspect ratio
- Page source/head includes expected SEO metadata
- Sitemap and robots output are valid when touched
- Hover, focus, active/open, scrolled, and animated states match the live-site
  capture or are documented as intentional differences
- The relevant `docs/visual-captures/` note lists live CSS/JS sources inspected
  and final responsive comparison results

## Done Criteria

A task is complete only when:

- The requested behavior/page exists.
- It follows the project structure.
- It uses local assets/content, not old-site runtime URLs.
- SEO was handled for touched routes.
- Visual parity evidence was recorded for UI changes, including responsive and
  animation checks, or the final response clearly explains why it could not be
  verified.
- Lint and build were run or a clear blocker is documented.
- The final response lists changed files, verification, and open content/assets
  only if any remain.
