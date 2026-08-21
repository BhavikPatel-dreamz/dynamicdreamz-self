# Adding a Case Study

Case-study detail pages, archive cards, filter options, metadata, structured
data, `robots.txt`, and sitemap entries all derive from one content collection:
`src/content/case-study-details.json`. A new case study does not need a new page
component or route file.

## 1. Prepare project-owned assets

Use final, approved media; never ship a `dynamicdreamz.com` or WordPress upload
URL. If an asset must be collected from the live migration reference, download
it to `scratch/` first, compare its SHA-256 hash and visual role against every
file in `public/assets/**`, and reuse an existing canonical asset when it
matches. Optimize genuinely unique media and place it under:

```text
public/assets/case-studies/details/<slug>/
```

Use descriptive kebab-case filenames and record the real intrinsic width and
height. Every content-bearing image needs concise, project-specific alt text.

## 2. Add one typed content entry

Copy a structurally similar object in `src/content/case-study-details.json` and
add the new object to the collection. Keep the `slug` unique and slashless.
Required content includes:

- client name, visible title, summary, technology, location, and the live or
  approved industry value;
- archive title, technology, industry, excerpt, and hero image;
- at least one ordered narrative section;
- route-specific SEO title (15-60 characters), description (70-160
  characters), and an ISO last-modified date.

The `wireframes`, `colors`, `typefaces`, `design`, section images, and section
cards fields are optional. Keep unused modules empty or `null`, following the
existing entries. Rich text accepts only the small sanitized HTML vocabulary
already used by the collection; scripts, inline event handlers, inline styles,
live-site dependencies, and `javascript:` URLs are rejected.

## 3. What updates automatically

Saving that one entry automatically creates `/case-studies/<slug>` at build
time and adds its archive card, search/filter values, canonical metadata,
Open Graph/Twitter metadata, JSON-LD, robots allow path, and image sitemap
entry. The legacy singular path `/case-study/<slug>` continues to redirect to
the canonical plural route through the shared redirect rule.

## 4. Validate before merging

Run:

```bash
npm run check:case-studies
npm run check:asset-duplicates
npm run lint
npm run build
```

Then inspect the new route at desktop, tablet, and mobile widths and update the
case-study visual capture note plus the route-family sections in
`docs/aeo-geo-strategy.md` and `docs/page-content-improvements.md`. Any visible
copy improvement or unsupported evidence claim remains an approval item; adding
a case study is not permission to invent metrics, dates, attribution, or
outcomes.
