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
clean Tailwind utilities and reusable components.

## Start Every Task This Way

Before implementing code, read these project docs in this order:

1. `docs/project-context.md`
2. `docs/agent-workflow.md`
3. `docs/visual-parity-workflow.md`
4. `docs/seo-launch-checklist.md`
5. `docs/aeo-geo-strategy.md`
6. `docs/page-content-improvements.md`
7. The relevant bundled Next.js docs in `node_modules/next/dist/docs/`

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
- During migration, implement AEO/GEO without changing the live-visible UI or
  page copy by default. An AEO/GEO, SEO, content-quality, or audit request does
  not authorize edits to visible headings, paragraphs, labels, CTA copy,
  counters, proof/review text, cards, taxonomy, section order, styling,
  animation, or default interaction states. Preserve the current live wording
  and visual result, including imperfect grammar or outdated-looking phrasing,
  unless the project owner explicitly approves the exact visible change in the
  current task. Record proposed visible improvements in
  `docs/page-content-improvements.md` as `suggested` or `deferred`; do not
  implement them implicitly.
- Nonvisual AEO/GEO work may improve metadata, canonicals, crawlability,
  sitemap/robots output, server rendering, semantic markup that preserves the
  rendered appearance, accessibility metadata, and structured data. Nonvisual
  work is not permission to introduce unsupported or contradictory claims:
  schema must still match visible content and approved facts. If a valid AEO,
  SEO, accessibility, legal, or factual fix requires a visible change, stop at
  a documented recommendation and request explicit approval.
- Copy/match the live page styling during migration, including desktop and
  mobile variants. Do not preserve old CSS technical debt blindly; translate the
  visual result into maintainable local styles.
- Use clean Tailwind CSS for styling. Do not add custom page, section,
  component, animation, or one-off layout styles to `src/app/globals.css`.
  Keep `globals.css` minimal for Tailwind setup and unavoidable app-wide base
  rules only.
- Component discovery before creation: before creating any new component or
  section, thoroughly inspect `src/components/**`, route-local components, and
  current usages. Do NOT search only by component name or filename; search by
  visual layout, UI pattern (e.g. hero banners, card grids, stat counters, logo
  sliders, review carousels, accordions, video modals, split CTA sections), DOM
  structure, and Tailwind styling classes.
- Strict component reuse & slight extension: ALWAYS prioritize reusing existing
  components (`ButtonLink`, `Container`, `FaqSection`, `AiAutomationSection`,
  `AiDiscoverySection`, `CtaBannerSection`, `ServiceHeroSection`, etc.) over
  writing new code or raw inline markup (e.g. never write raw inline `<a>` tags
  with button styling when `ButtonLink` exists). If an existing component can
  support the requirement with a slight modification (e.g. adding an optional
  typed prop, variant flag, slot, or optional style modifier), MODIFY the
  existing component slightly to support the use case instead of writing extra,
  duplicate, or one-off code.
  CRITICAL: Every modification/extension must be backward-compatible so that all
  existing pages and consumers remain unbroken.
- Pragmatic component creation (only when no match exists): only if after a
  thorough search no similar or adaptable component exists in the codebase,
  build a new component. Do not write extra code or duplicate components when an
  existing component can be adapted with a slight, clean extension.
- Generalize all new components for future reuse: whenever creating a new
  component, design it to be modular, flexible, and generalized. Decouple the UI
  markup from page-specific hardcoded copy or data (pass content via typed props
  or data imports), provide sensible default props, and place reusable
  primitives in `src/components/ui/` or shared sections in
  `src/components/sections/` so future pages can reuse them seamlessly.
- Asset discovery and deduplication: NEVER download live assets directly into
  `public/assets/`. Always follow the 2-step comparison buffer workflow:
  1. **Download to `scratch/` buffer first**: If an asset is needed from the live
     site, download it only into the temporary `scratch/` directory (outside
     `public/assets/`).
  2. **Hash & markup comparison**: Compute its SHA-256 hash and inspect SVG
     paths / visual role against all existing files across the entire
     `public/assets/**` tree (including `brand/`, `clients/`, `team/`, `icons/`,
     `proof/`, `services/`, `process/`, etc.).
  3. **Reuse if match exists**: If an identical or matching asset already exists
     in `public/assets/`, reuse the existing canonical path and delete the
     temporary file from `scratch/`. Do NOT create another copy.
  4. **Clean ingestion only for unique assets**: Only when NO matching asset
     exists anywhere in the project, optimize the asset (convert uncompressed PNG
     to WebP, clean SVG markup) and move it into the appropriate canonical
     `public/assets/<category>/` directory with a clean kebab-case filename.
  5. **Mandatory zero-duplicate verification**: Run a SHA-256 duplicate audit on
     `public/assets/` before completing any migration task. Total duplicate hash
     groups must remain 0.
- For styling and animation work, follow `docs/visual-parity-workflow.md`.
  Inspect live CSS/JS, computed styles, keyframes, transitions, interaction
  states, and screenshots before implementing. Static HTML alone is not enough.
- For visual work, create or update a capture note in `docs/visual-captures/`
  before editing UI code. The note must list live screenshots, local
  screenshots, CSS/JS sources inspected, responsive breakpoints, interaction
  states, animation timings, and remaining differences.
- For each migrated page, inspect both the rendered live page and View Page
  Source. Preserve page structure, metadata intent, headings, links, CTA labels,
  image alt text, ARIA labels, schema data, and other small SEO/accessibility
  details unless there is a production-quality reason to improve them.
- Build with App Router conventions for the installed Next.js version.
- Prefer Server Components everywhere possible. Page sections and layout
  sections should be Server Components by default so content, headings, images,
  links, metadata, and schema render without client JavaScript.
- Use `"use client"` only for the smallest interactive boundary that genuinely
  needs browser state, event handlers, timers, observers, measurements, or
  browser APIs. Do not make an entire page or section a Client Component when
  only a menu, accordion, carousel, tab control, form widget, or animation
  controller needs interactivity.
- Every route must ship with production SEO: metadata, canonical URL, Open Graph
  data, Twitter data, semantic headings, alt text, and structured data where it
  fits the page type.
- Public page URLs must use the no-trailing-slash form everywhere. The homepage
  `/` is the only structural route exception, and absolute homepage URLs must
  serialize as the bare origin without a terminal slash. Keep
  `trailingSlash: false` in `next.config.ts`; write route data and internal
  links as `/about-us`, never `/about-us/`; and ensure canonical, Open Graph,
  sitemap, robots, redirects, and JSON-LD URLs follow the same policy. Do not
  copy the live site's trailing slash into migrated URLs. Run
  `npm run check:urls` before completion; the policy check must remain part of
  both `npm run lint` and `npm run build`.
- For local single-page SEO audits during migration, target 100/100 after
  excluding links to planned but not-yet-built routes. Report those links as
  "migration pending" instead of SEO failures. Before launch, broken internal
  links are never allowed.
- For every new or materially updated indexable page, audit AEO and GEO in the
  same task and add or update that route's page-specific section in
  `docs/aeo-geo-strategy.md`. Keep unresolved AEO/GEO improvements in that file
  with a priority and status; if the audit finds no new gap, record the review
  date and result instead of silently skipping it.
- When a page needs better SEO copy or visible UI content changes, update
  `docs/page-content-improvements.md` with the page name, route, current issue,
  suggested replacement copy, SEO reason, priority, and status. During
  migration, add the item as `suggested` or `deferred` and leave the live UI
  unchanged until the project owner explicitly approves that exact visible
  change. The AEO/GEO strategy remains the source of truth for AEO/GEO
  findings; use the content improvements file as the approval queue for exact
  visible copy rather than moving or deleting the underlying recommendation.
- Every image must have intentional alt handling. Use meaningful, page-specific
  alt text for all content images, preserving or improving the live site's alt
  text. Only truly decorative images may use empty alt text, and that choice
  must be intentional.
- Add or update `src/app/sitemap.ts` and `src/app/robots.ts` whenever routes are
  added, removed, or renamed.
- Preserve legacy URL equity with redirects for migrated or renamed pages.
- Verify with `npm run lint` and `npm run build` before calling work complete.
  For visual work, also run the dev server and inspect responsive desktop and
  mobile states. Do not claim live-site visual parity unless live/local
  screenshot comparison and animation/interaction checks are documented.

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

Treat `src/components/ui/**`, `src/components/layout/**`, and existing shared
sections as the primary foundation for page implementation:
1. **Search Deeply First**: Search by layout structure, visual pattern, and UI
   role—not just filename.
2. **Reuse & Extend Safely**: If an existing component is similar, reuse it or
   extend it with backward-compatible optional typed props/variants. Never break
   existing page usages.
3. **Build Pragmatically**: If no matching or adaptable component exists, build a
   new component without hesitation.
4. **Generalize for Future Pages**: Whenever building a new component, ensure it
   is generalized and modular (typed props, decoupled content/data) so future
   pages can reuse it easily.

Create one component for each meaningful visual/business section when it keeps a
page readable, but keep those section components server-rendered unless they
need direct browser interactivity. Extract the interactive part into a small
Client Component instead of moving the full section to the client.

## Quality Bar

Production-ready means the page is complete enough to deploy:

- No starter Next.js content, placeholder copy, broken links, or missing mobile
  states.
- No layout shift from images or unstable component dimensions.
- No generic metadata copied between pages.
- No missing, generic, keyword-stuffed, or duplicated image alt text.
- No duplicate image/media files stored under different paths or names when one
  canonical project-owned asset can serve every usage.
- No duplicate or near-equivalent components when an existing component can
  satisfy the requirement directly or through a backward-compatible typed variant.
- All newly created components are generalized, cleanly typed, and decoupled from
  hardcoded page data for future reusability.
- No inaccessible interactive controls.
- No unnecessary client JavaScript.
- No external dependency added unless it clearly reduces risk or complexity.
