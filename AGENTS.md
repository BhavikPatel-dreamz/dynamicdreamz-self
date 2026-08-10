<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dynamic Dreamz Migration Rules

This project is the Next.js migration of https://www.dynamicdreamz.com/.
Treat the current live site as a migration reference only, not as a runtime
dependency.

Migration target: rebuild the live site as closely as practical in Next.js,
including page coverage, route intent, section order, copy intent, CTA flow,
brand feel, responsive behavior, and SEO value. Improve implementation quality,
performance, accessibility, and maintainability while preserving the live site's
business message and search intent.

Style target: match the live site's visual system and component styling before
introducing redesigns. Capture colors, typography, spacing, layout widths,
section backgrounds, buttons, cards, borders, shadows, icon treatments,
animations, hover/focus states, and responsive breakpoints, then rebuild them as
clean local CSS/Tailwind tokens and reusable components.

## Start Every Task This Way

Before implementing code, read these project docs in this order:

1. `docs/project-context.md`
2. `docs/agent-workflow.md`
3. `docs/seo-launch-checklist.md`
4. The relevant bundled Next.js docs in `node_modules/next/dist/docs/`

Use this one-prompt kickoff for future sessions:

```text
Read AGENTS.md and run the Dynamic Dreamz migration workflow. Then complete this task production-ready: <task>.
```

## Product Context

Dynamic Dreamz is a Shopify Plus, ecommerce, web development, and mobile app
agency founded in 2006. The site must present the company as a trusted,
enterprise-capable implementation partner with strong Shopify, Shopify Plus,
migration, white-label, WordPress, ecommerce, mobile app, portfolio, case study,
and thought-leadership content.

Core proof points from the live site:

- 5000+ projects
- 150+ experts
- 1100+ happy clients
- 1B+ client revenue generated
- 4500+ Shopify stores built
- Shopify Platinum Partner positioning

## Hard Rules

- Do not hotlink or fetch production assets from `dynamicdreamz.com` at runtime.
- Do not use the old site as an API, CDN, image host, script host, or data
  source in shipped code.
- Match the live site before redesigning. Any visible design, content, route, or
  CTA change from the live site should be intentional and called out.
- Copy/match the live page styling during migration, including desktop and
  mobile variants. Do not preserve old CSS technical debt blindly; translate the
  visual result into maintainable local styles.
- For each migrated page, inspect both the rendered live page and View Page
  Source. Preserve page structure, metadata intent, headings, links, CTA labels,
  image alt text, ARIA labels, schema data, and other small SEO/accessibility
  details unless there is a production-quality reason to improve them.
- If old-site content or assets are needed, move approved copies into local
  project-owned files such as `src/content/**` and `public/assets/**`.
- If old-site images, documents, icons, logos, or other assets are needed,
  download/copy them during migration into `public/assets/**` and update the
  Next.js code to reference only those local files.
- Local asset filenames must be meaningful and descriptive. If a live-site image
  filename is vague, hashed, keyword-stuffed, or odd, rename the local copy to a
  clean kebab-case name that describes the asset and page/context.
- Build with App Router conventions for the installed Next.js version.
- Prefer Server Components. Use `"use client"` only for the smallest interactive
  component boundary.
- Every route must ship with production SEO: metadata, canonical URL, Open Graph
  data, Twitter data, semantic headings, alt text, and structured data where it
  fits the page type.
- Every image must have intentional alt handling. Use meaningful, page-specific
  alt text for all content images, preserving or improving the live site's alt
  text. Only truly decorative images may use empty alt text, and that choice
  must be intentional.
- Add or update `src/app/sitemap.ts` and `src/app/robots.ts` whenever routes are
  added, removed, or renamed.
- Preserve legacy URL equity with redirects for migrated or renamed pages.
- Verify with `npm run lint` and `npm run build` before calling work complete.
  For visual work, also run the dev server and inspect responsive desktop and
  mobile states.

## Production Structure Preference

Use this structure unless the task clearly calls for a different local pattern:

```text
src/app/                  App Router routes and route-level metadata
src/components/layout/    Header, footer, navigation, shells
src/components/sections/  Page sections used across marketing pages
src/components/ui/        Small reusable UI primitives
src/content/              Local, typed page copy and migration content
src/data/                 Navigation, routes, SEO constants, company facts
src/lib/                  Shared helpers, schema builders, metadata utilities
src/types/                Shared TypeScript types
public/assets/            Project-owned images, logos, icons, OG assets
```

Keep page content structured and reusable. Avoid scattering large arrays of copy
inside page components once content repeats across routes.

## Quality Bar

Production-ready means the page is complete enough to deploy:

- No starter Next.js content, placeholder copy, broken links, or missing mobile
  states.
- No layout shift from images or unstable component dimensions.
- No generic metadata copied between pages.
- No missing, generic, keyword-stuffed, or duplicated image alt text.
- No inaccessible interactive controls.
- No unnecessary client JavaScript.
- No external dependency added unless it clearly reduces risk or complexity.
