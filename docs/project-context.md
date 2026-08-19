# Dynamic Dreamz Project Context

This repo is the Next.js migration of the company website at
https://www.dynamicdreamz.com/. The live site was checked on 2026-08-10 and
should be used as a reference for content, page intent, brand positioning, and
legacy URL coverage. It must not be used as a runtime dependency.

The migration goal is live-site parity first: rebuild the current website in
Next.js with the same business message, core page coverage, navigation intent,
section structure, CTAs, proof points, SEO targets, and responsive user
experience. Improvements are welcome when they make the site more production
ready, but they should not erase the recognizable Dynamic Dreamz site or change
important search intent without an explicit reason.

For AEO/GEO and SEO work during migration, "improvement" does not authorize a
visible rewrite. Preserve the live rendered UI and content unless the project
owner explicitly approves the exact visible change. Implement safe nonvisual
improvements and keep proposed visible copy/design changes in the documented
approval queue.

Live-site parity includes styles. Match the visual design closely: colors,
typography, spacing scale, max widths, grids, section rhythm, button styles,
cards, borders, shadows, icons, backgrounds, animations, hover/focus states, and
responsive behavior. Recreate the look with clean Tailwind utilities and shared
components rather than depending on or pasting unmanaged old-site CSS.

Exact style parity requires the visual parity workflow. Agents must inspect the
live page, source CSS/JS, computed styles, animation timing, interaction states,
and responsive screenshots before claiming a section matches the live site.

## Current Repo Snapshot

- Framework: Next.js 16.3.0 with App Router
- React: 19.2.8
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`
- Language: TypeScript
- Current state: fresh starter app with `src/app/page.tsx`,
  `src/app/layout.tsx`, and starter public SVG assets
- Existing scripts: `npm run dev`, `npm run build`, `npm run start`,
  `npm run lint`
- `CLAUDE.md` points to `AGENTS.md`, so shared agent instructions belong in
  `AGENTS.md`

## Brand Positioning

Dynamic Dreamz should read as a mature ecommerce technology partner, not a
generic software shop. The strongest positioning themes are:

- Shopify Plus agency and Shopify Platinum Partner
- Trusted ecommerce and mobile development company since 2006
- Shopify development, Shopify migration, Shopify CRO, Shopify app work, and
  white-label Shopify delivery
- WordPress, WooCommerce, Magento, BigCommerce, Webflow, PHP, UI/UX, and mobile
  app development support
- Long-term technical support and maintenance
- Proven work across global ecommerce brands, enterprise projects, and
  industry-specific case studies

## Live Site Observations

Homepage title:

- `Shopify Plus Agency & Shopify Platinum Partner | Dynamic Dreamz`

Homepage hero and credibility content:

- "A Trusted E-commerce & Mobile Development Company Since 2006"
- 5000+ projects
- 150+ experts
- 1100+ happy clients
- 1B+ client revenue generated
- 4500+ Shopify stores built
- CTA: "get a quote" / "request a quote"
- Contact email: `info@dynamicdreamz.com`
- Phone: `+91 9327642007`

Homepage sections found:

- Partnering with ambitious brands
- Globally Trusted Web & App Development Agency
- Our Expertise
- Selected Shopify Plus & Enterprise Ecommerce Work
- Brands That Have Grown With Us
- Our Partners
- Latest Blogs
- Large footer with company, services, mobile, white-label, and hire-developer
  links

## Core Navigation Groups

Company:

- `/about-us`
- `/career`
- `/life-at-dynamic-dreamz`
- `/resources`
- `/contact-us`
- Blog/resources route, exact final slug to confirm during migration

Services:

- `/shopify-development-agency`
- `/shopify-plus-agency`
- `/shopify-experts`
- `/shopify-theme-customization`
- `/shopify-migration`
- `/hire-shopify-developers`
- `/white-label-shopify-development`
- `/shopify-public-app-development`
- `/shopify-cro-services`
- `/shopify-plus-development-agency`
- `/shopify-mobile-app-development`
- `/buy-shopify-hours`
- `/wordpress-web-development`
- `/hire-wordpress-developers`
- `/wordpress-theme-customization`
- `/white-label-wordpress-development`
- `/woocommerce-development`
- `/magento-web-development`
- `/bigcommerce-development`
- `/webflow-development`
- `/ui-ux-design`
- `/php-development`
- `/android-app-development`
- `/ios-app-development`
- `/cross-platform-app-development`

Industries:

- `/beauty-and-cosmetics`
- `/fashion-and-apparel`
- `/health-and-nutrition`
- `/food-and-beverages`
- `/pet-industry`

Work:

- `/portfolio`
- `/case-study`

White label:

- `/white-label-shopify-development`
- `/white-label-wordpress-development`
- `/white-label-website-design`

Confirm exact legacy slugs before adding redirects or changing a route. The
migration's production URL policy is fixed: every non-root page is canonicalized
without a trailing slash, and legacy trailing-slash requests redirect to that
slashless URL.

## About Page Context

The about page emphasizes:

- Agile. Adept. Accurate.
- 150+ team members across design, development, project management, QA, and
  leadership
- Company timeline:
  - 2006: founded by three college-passed engineers doing offshore website work
  - 2008: early growth in Surat, India
  - 2012: growth in projects, clients, employees, and collaboration with OneIT,
    Australia
  - 2015: moved to a larger Surat office; clients across USA, Canada, Europe,
    and Australia
  - 2020: Ahmedabad development center
  - 2023: top 10 Shopify developers by Upwork
  - 2024: 150+ expert team milestone
  - 2025: Shopify Platinum Partner recognition
- Leadership and department heads
- Core values: integrity, adaptability, transparency, client-centric approach,
  user-centric design, quality assurance

## Shopify Development Page Context

The Shopify development page is a key SEO service page. It targets "Shopify
Development Agency" and related commercial-intent terms. It includes:

- Custom store design
- App integration
- Migration to Shopify
- Performance optimization
- Scalable Shopify solutions
- Digital agency and store-owner audience
- Review proof:
  - 5.0 on Clutch, 132 reviews
  - 5.0 on Upwork, 2000+ reviews
  - 5.0 on GoodFirms, 72 reviews
- Service cards for Shopify Plus, theme customization, Figma/XD to Shopify,
  app integration, migration, maintenance, Shopify 2.0 migration, and white
  label Shopify development
- Portfolio glimpses and project links

## Case Study Page Context

The case study index includes filters for technology and industry. Technologies
include Shopify, Shopify Plus, Shopify 2.0, Shopify Dawn, Shopify Hongo,
Shopify Minimalista, WordPress, Magento 2.0, React.js and Laravel, and custom
web platforms. Industries include beauty, healthcare, fashion, supplements,
food and beverage, eyewear, home improvement, luxury, education, entertainment,
and ecommerce.

Visible case studies include:

- Daniel Walters Eyewear
- Aetrex
- Rooted Human
- Eczema Milk
- YHUS
- Nandi Medical
- Facts and Supps
- Zedmed
- Tankbar

## Asset Policy

The old site can be inspected for reference, but production code must use local
or separately approved assets:

- Store project-owned files under `public/assets/`.
- Suggested folders: `brand`, `logos`, `clients`, `case-studies`, `services`,
  `team`, `testimonials`, `blog`, `og`, `icons`, `proof`, `backgrounds`.
- Search the full `public/assets/` tree across all categories before downloading,
  copying, or renaming media. Check visually, by brand/client identity, by SVG
  shapes/paths, and by content hashes—not just by filename. Reuse an existing
  canonical asset whenever the visual content is identical or equivalent.
- If the same asset is used on multiple pages, keep one copy in a neutral
  purpose-based folder such as `public/assets/team/` or `public/assets/clients/`
  and let each page provide its own contextual alt text in content data. Do not
  create page-local copies just to give the file a different page-specific name.
- When no suitable local asset exists, download or copy the required asset into
  the appropriate `public/assets/<category>/` folder during migration. Never
  leave final `src`, CSS URL, OG image URL, favicon URL, or schema image URL
  pointing at the old domain.
- Name local asset files clearly. Use lowercase kebab-case filenames that
  describe the image, brand/client, service, section, or page context. Rename
  vague live filenames such as hashes, random numbers, `image-1`, `banner`, or
  keyword-stuffed names when storing the local copy.
- Preserve useful original asset details when moving assets locally: source
  page, original filename, visible placement, alt text, title/caption if any,
  intrinsic dimensions when known, and whether the image is decorative or
  meaningful.
- Every image needs intentional alt handling. Content images must have
  meaningful alt text that describes the image in the page context. Preserve the
  live site's alt text when it is accurate; improve it when it is missing,
  vague, duplicated, or keyword-stuffed.
- Use `next/image` for meaningful imagery with explicit dimensions, static
  imports, or stable parent aspect ratios.
- Do not point `src` to `https://www.dynamicdreamz.com/...` in final code.
- Do not depend on old WordPress uploads, old scripts, old APIs, or old image
  URLs.
- If an asset is missing, use an approved local placeholder only temporarily and
  document the missing asset in the task summary.

## Content Policy

- Use the live site as the migration source. Preserve visible copy, CTA wording,
  heading wording and casing, section order, labels, proof text, link intent,
  image presentation, and default interaction content during migration.
- A request to improve SEO, AEO, GEO, content quality, or an audit is not
  approval to rewrite the visible page. Record the exact proposed replacement
  in `docs/page-content-improvements.md` as `suggested` or `deferred`, and keep
  the live copy until the project owner explicitly approves that exact change.
- Implement nonvisual improvements such as metadata, canonical URLs, robots,
  sitemap, crawlability, server rendering, schema, and appearance-preserving
  semantics/accessibility when they are accurate. Schema and metadata must not
  contradict the visible page or introduce unapproved facts.
- If correcting a factual, policy, legal, accessibility, or trust problem needs
  visible text or layout changes, document the issue and request approval rather
  than silently changing the migration UI.
- Inspect View Page Source for each migrated page and capture small details that
  are easy to miss in the rendered page, including meta tags, canonical links,
  Open Graph/Twitter fields, JSON-LD, preload hints, favicon/app icon links,
  image attributes, ARIA labels, form labels, and hidden-but-meaningful text.
- Keep factual claims consistent with approved company facts.
- Do not invent new awards, partners, review counts, revenue numbers, or client
  names.
- If a claim looks outdated or unverifiable, flag it for confirmation before it
  becomes prominent content.
- Keep service pages specific to search intent; avoid one generic template with
  swapped keywords.

## Component Reuse & Generalization Policy

- **Deep Pre-Creation Discovery**: Search `src/components/**` and existing
  imports/usages before creating any component, hook, interactive control,
  layout primitive, or page section. Search by visual pattern, UI layout (heroes,
  card grids, metric counters, logo marquees, testimonial sliders, accordions,
  video dialogs, CTA banners), DOM structure, and Tailwind styling—not just by
  filename.
- **Safe Reuse & Extension**: Reuse a suitable existing component directly. If
  an existing component is close but needs a minor variant or additional prop,
  extend/modify it with optional typed props, variant styles, or slots.
  **Zero Breakage**: Always ensure changes are strictly backward-compatible so
  all existing consumers and pages remain completely intact.
- **Pragmatic Creation**: If no matching or adaptable component exists after a
  proper search, build a new component freely. There is no rigid rule forbidding
  new components when the visual design, semantics, or interaction are distinct.
- **Generalized Component Design**: Whenever building any new component, design
  it to be modular and generalized for future reuse across other pages:
  - Decouple markup from hardcoded page text; pass structured content via typed
    props or data files (`src/content/**`, `src/data/**`).
  - Provide flexible typed props and sensible defaults.
  - Keep shared primitives in `src/components/ui/`, shared site chrome in
    `src/components/layout/`, and reusable marketing sections in
    `src/components/sections/`.
  - Preserve Server Component boundaries; isolate interactive controls in small
    `"use client"` widgets.

## Design Direction

Dynamic Dreamz should feel confident, expert, practical, and modern. It is a
services website for ecommerce buyers and agency partners, so prioritize:

- Clean hierarchy and strong scanning
- Service credibility and conversion CTAs
- Real work, real proof, and clear industry capability
- Mobile-first responsive layouts
- Fast-loading pages and low layout shift
- Clear header/footer navigation for many service pages

Avoid making the site feel like a startup landing page with oversized generic
hero copy and decorative-only graphics. The brand and service category should be
clear in the first viewport.

Visual parity does not mean copying old technical choices. Keep the recognizable
layout, hierarchy, content flow, and brand cues, but rebuild them with local
assets, accessible markup, optimized images, and maintainable components.

When styles are unclear, inspect the live page visually and through browser
computed styles or source CSS. Capture the intended values, then consolidate
them into Tailwind utilities, component props, or shared components. Do not put
page or component styling in `src/app/globals.css`.
