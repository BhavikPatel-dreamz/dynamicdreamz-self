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
4. `docs/seo-launch-checklist.md`
5. Relevant local Next.js docs from `node_modules/next/dist/docs/`

## Working Loop

1. Understand the task and map it to a route, component, content area, SEO
   requirement, or asset need.
2. Inspect the current code before editing.
3. If migrating a legacy page, inspect the old URL for content structure,
   headings, CTAs, metadata intent, images, links, and redirect needs.
4. Decide the production structure before touching code.
5. Implement with local data/content and project-owned assets.
6. Add SEO metadata and structured data as part of the same change, not as a
   later cleanup.
7. Check responsive behavior, accessibility, performance risk, and broken links.
8. Run verification commands.
9. Summarize changes, verification, and any missing assets or content approvals.

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
- Prefer Server Components. Add client components only for state, browser APIs,
  animation controls, forms that need client interactivity, or UI widgets.
- Keep route files thin. Put repeated sections in `src/components/sections/`.
- Put navigation, company stats, service lists, route metadata, and page content
  in `src/data/` or `src/content/` when reused.
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

## Migration Workflow For Legacy Pages

When migrating a page from the old site:

1. Record the old URL and final new URL.
2. Capture title intent, `h1`, section order, CTAs, proof points, FAQs, and
   internal links.
3. Identify needed assets and whether they are already local.
4. Create or update local content/data files.
5. Build the page using shared components where appropriate.
6. Add page metadata, canonical URL, OG image, and structured data.
7. Add redirect only if the final URL changes.
8. Add the route to sitemap data.
9. Verify no production code hotlinks the old site.

## Asset Workflow

1. Check `public/assets/` before using any image.
2. If an old-site asset is needed, ask for or use an approved local copy.
3. Put assets in a stable folder by purpose.
4. Use `next/image` for photos, logos, hero images, case study screenshots, and
   testimonial portraits.
5. Give images meaningful alt text unless they are purely decorative.
6. Use stable dimensions, aspect ratios, and responsive sizes to prevent layout
   shift.
7. Never use `dynamicdreamz.com` asset URLs in final code.

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

Then inspect at least:

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

## Done Criteria

A task is complete only when:

- The requested behavior/page exists.
- It follows the project structure.
- It uses local assets/content, not old-site runtime URLs.
- SEO was handled for touched routes.
- Lint and build were run or a clear blocker is documented.
- The final response lists changed files, verification, and open content/assets
  only if any remain.
