# Dynamic Dreamz AEO and GEO Strategy

Status: technical work implemented for current migrated routes; visible AEO/GEO
recommendations deferred for live-site parity; evidence and policy approvals
remain
Last audited: 2026-08-13
Scope: current Next.js migration and the implemented indexable routes
Owners: SEO, content, development, leadership, sales, HR, and client-success teams

## Purpose

This document defines how Dynamic Dreamz should improve visibility in answer
engines and generative search experiences while preserving conventional SEO,
brand accuracy, conversion quality, and the live-site migration intent.

It covers:

- The sitewide AEO and GEO operating model.
- Technical discovery and crawler requirements.
- Entity, evidence, content, structured-data, and measurement standards.
- A prioritized implementation roadmap.
- Page-specific improvements for the routes currently built:
  - `/`
  - `/about-us`
  - `/career`
  - `/life-dynamicdreamz`
  - `/resources`
  - `/beauty-cosmetics`
  - `/fashion`
  - `/white-label-shopify-development-services`
  - `/white-label-wordpress-development-services`
  - `/white-label-website-design-services`
  - `/shopify-plus-agency`
  - `/request-quote`

This is the strategy and implementation record. Visible changes proposed and
temporarily implemented on 2026-08-12 were rejected and reverted to live-site
wording on 2026-08-13. The decision is recorded in
`docs/aeo-geo-migration-approval.md`; exact deferred-copy status is tracked in
`docs/page-content-improvements.md`.

## Migration Live-UI Rule

During the Next.js migration, implement AEO/GEO without changing the current
live site's visible UI or page content by default. A request to audit, improve,
or implement AEO/GEO or SEO is approval for accurate nonvisual work only; it is
not approval for a visible rewrite or redesign.

May be implemented without a separate visible-content approval when accurate:

- Metadata, canonicals, robots, sitemap, crawlability, and real freshness data.
- Stable entity relationships and structured data that match visible content
  and approved facts.
- Server-rendering, semantic markup, and accessibility metadata that preserve
  the default visual result.
- Performance and local-asset improvements that preserve appearance, content,
  behavior, and responsive geometry.

Must remain unchanged without explicit project-owner approval of the exact
difference:

- Visible headings, paragraphs, grammar, capitalization, labels, FAQs, CTA
  text, proof/review values, counters, cards, taxonomy, and link text.
- Section order, layout, spacing, typography, color, imagery, animation,
  responsive behavior, and default interaction states.

Record a recommended visible improvement in
`docs/page-content-improvements.md` as `suggested` or `deferred` and preserve it
in this strategy as an unresolved recommendation. Never use hidden text or
schema to substitute for missing visible evidence, and never let nonvisual
schema contradict the live-visible page. If a valid factual, policy, legal,
accessibility, trust, or search-quality fix requires a visible change, document
the risk and request approval before implementation.

## Executive Direction

Dynamic Dreamz should not treat AEO or GEO as separate collections of hacks.
The practical objective is to build a crawlable, internally consistent,
evidence-rich body of content that search engines can rank and generative
systems can retrieve, understand, quote, and cite accurately.

The highest-value work is:

1. Complete the commercial service, work, case-study, contact, quote, job, and
   article routes referenced by the current UI and structured data before
   launch; their development-stage availability is excluded from the current
   eight-page implementation scope.
2. Resolve conflicting facts, URLs, review counts, dates, and service names.
3. Publish answer-first service content backed by project evidence.
4. Convert portfolio items into first-party case studies with approved outcomes.
5. Strengthen authorship, expert review, entity consistency, and independent
   corroboration.
6. Measure citations, qualified visits, and leads instead of treating raw AI
   mentions as the goal.

## AEO and GEO Definitions

### Answer Engine Optimization (AEO)

AEO improves the likelihood that a page supplies a useful direct answer for a
question-based search, featured result, voice result, knowledge experience, or
AI-generated answer.

For this site, AEO means:

- Answering buyer questions clearly and early.
- Using descriptive headings, concise summaries, tables, lists, and genuine
  FAQs where those structures help users.
- Giving enough context for an answer to stand alone without becoming vague.
- Supporting answers with real experience, examples, dates, and evidence.

### Generative Engine Optimization (GEO)

GEO improves the likelihood that generative search systems retrieve, trust,
cite, and accurately describe Dynamic Dreamz content when synthesizing an
answer or recommending a provider.

For this site, GEO means:

- Establishing Dynamic Dreamz as a consistent business entity.
- Publishing specific, non-commodity expertise that adds information not found
  in generic summaries.
- Making claims independently verifiable.
- Providing case-study evidence suitable for citation.
- Maintaining accurate and current content across the site and authoritative
  third-party profiles.

### What AEO and GEO do not mean

- There is no guaranteed AI-ranking schema.
- Structured data does not replace visible content.
- `llms.txt` is not a priority or a Google generative-search requirement.
- Pages do not need to be divided into artificially tiny content fragments.
- Repeating every long-tail query is unnecessary.
- Mass-producing generic articles or location pages is not an authority
  strategy.
- Purchased mentions, manufactured reviews, or unsupported awards must not be
  used.

Google states that generative Search uses foundational SEO practices and does
not require special AI files, special markup, or special schema. The primary
guidance is to publish valuable, non-commodity content, maintain clear technical
structure, and ensure important information is available in crawlable text.

## Authoritative Guidance

- [Google: Guide to optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: General structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [OpenAI: Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
- [Bing: AI Performance in Bing Webmaster Tools](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Bing: IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby)

## Desired Business Outcomes

AEO and GEO work should support qualified commercial and recruitment outcomes,
not mentions alone.

Primary outcomes:

- More qualified enquiries for Shopify Plus, Shopify migration, Shopify CRO,
  mobile commerce, integrations, maintenance, and white-label delivery.
- More citations for non-branded category and problem-based queries.
- Accurate brand descriptions across AI-generated answers.
- Stronger visibility for proof-led case studies.
- Better discovery of real job openings in Surat and Ahmedabad.
- Higher conversion quality from AI and organic-search referrals.

Secondary outcomes:

- More branded searches.
- More assisted conversions involving service and case-study pages.
- More references to Dynamic Dreamz experts and original research.
- Fewer incorrect or conflicting facts in search and AI answers.

## Audience and Prompt Map

### Enterprise and established ecommerce brands

Typical needs:

- Shopify Plus implementation or replatforming.
- B2B and wholesale commerce.
- ERP, PIM, CRM, fulfillment, subscription, and marketing integrations.
- International storefronts and Shopify Markets.
- Checkout extensibility and custom business workflows.
- Performance, CRO, maintenance, and governance.

Representative prompts:

- Which Shopify Plus agencies can manage an enterprise migration?
- What should a Shopify Plus migration agency handle?
- How do I migrate from Magento to Shopify without losing SEO?
- Which agency can integrate Shopify Plus with an ERP?
- How long does a complex Shopify Plus migration take?

### Growing DTC merchants

Typical needs:

- Store redesigns and theme development.
- Performance and Core Web Vitals.
- CRO and mobile conversion.
- App selection and integrations.
- Ongoing support.

Representative prompts:

- When should a growing brand move to Shopify Plus?
- How much does custom Shopify development cost?
- Should I hire a Shopify agency or a freelancer?
- How can I improve Shopify conversion rate and site speed?

### Digital agencies seeking white-label capacity

Typical needs:

- Confidential delivery.
- Predictable capacity and response times.
- Technical breadth and QA.
- Clear ownership, communication, and escalation.
- Flexible engagement models.

Representative prompts:

- How do I choose a white-label Shopify development partner?
- What should a white-label Shopify agreement include?
- How can an agency scale Shopify delivery without hiring internally?

### Candidates in Surat and Ahmedabad

Typical needs:

- Current roles and exact locations.
- Required experience and responsibilities.
- Work model, hours, benefits, and growth.
- Application process and employer credibility.

Representative prompts:

- Which ecommerce companies are hiring in Surat?
- Are there Shopify developer jobs in Ahmedabad?
- What is the work culture at Dynamic Dreamz?

## Current Repository Baseline

### Strengths

| Area | Current state | AEO/GEO value |
| --- | --- | --- |
| Rendering | Primary content is server-rendered | Content is available without client-side execution |
| Metadata | Unique metadata, canonical, Open Graph, Twitter, and robots directives exist for built pages | Strong conventional search foundation |
| URL policy | No-trailing-slash policy is centralized and build-enforced | Reduces canonical ambiguity and redirect hops |
| Sitemap | Built pages are generated from shared SEO data | Creates a maintainable discovery source |
| Entity schema | Organization and WebSite nodes use stable identifiers | Helps consolidate the Dynamic Dreamz entity |
| Page schema | AboutPage, WebPage, CollectionPage, BreadcrumbList, FAQPage, JobPosting, BlogPosting, and VideoObject are used where intended | Provides machine-readable context when it matches visible content |
| Proof | Shopify, Clutch, Trustpilot, Upwork, GoodFirms, testimonials, clients, and company statistics are visible | Supplies trust and independent corroboration |
| Expertise | Homepage content covers Shopify Plus, migration, B2B, CRO, integrations, white-label work, mobile apps, and support | Establishes broad topical relevance |
| Media | Local images, descriptive alt text, video metadata, and explicit dimensions are present | Supports multimodal search and accessibility |

### Current dependencies and prelaunch migration work

The ten built pages retain the approved technical AEO/GEO work. On 2026-08-13,
the project owner requested that visible copy and UI differences be reverted to
the live-site presentation. Those visible recommendations remain in this file
as deferred work rather than being removed. Planned but unbuilt URLs are
intentionally retained and excluded from current route scoring; they remain
mandatory prelaunch dependencies.

| Priority | Status | Issue | Required action |
| --- | --- | --- | --- |
| P0 | migration pending | Only ten indexable routes are implemented, while navigation and CTAs reference the larger migration | Complete and validate the intended destinations before launch |
| P0 | migration pending | Homepage `OfferCatalog`, Resources `ItemList`, and Career application URLs reference planned routes | Retain during migration; validate every final canonical destination before launch |
| P0 | migration pending | Homepage uses root article slugs while Resources uses `/blogs` paths | Choose the legacy-compatible canonical pattern and redirects during article migration |
| P0 | blocked by live parity | Review scores, counts, and profile URLs are not governed by one current source | Live Resources ratings and counts were restored on 2026-08-13; verify and centralize them before launch |
| P0 | blocked by live parity | Home displays `4500+` Shopify stores while Resources visible story copy says `1000+` | Keep the live UI during migration, then resolve the definition, provenance, and approved display value before launch |
| P1 | implemented | Sitemap and page schema previously used build time or stale `dateModified` values | All ten routes now use explicit content dates from shared SEO records |
| P1 | future route work | Potential Shopify Plus routes have overlapping intent | Create an intent map before building the routes |
| P1 | deferred to article migration | Current article data does not include author or reviewer information | Add approved author, reviewer, biography, evidence, and review-date fields to each article |
| P1 | deferred to case-study migration | Selected work links primarily to external storefronts | Create internal evidence pages with approved scope and outcomes |
| P1 | partially implemented | Major proof claims need definitions and provenance | A typed fact source now centralizes display values and review date; add definitions, source, owner, and formal approval |

## Entity and Fact Governance

Create one typed company-facts source that supplies visible content and schema.
Each fact should have:

- Display value.
- Exact definition.
- Source or internal owner.
- Date last verified.
- Approval status.
- Pages allowed to use it.

Facts requiring central control include:

- Founded in 2006.
- Shopify Platinum Partner status and recognition date.
- Team size.
- Total projects.
- Shopify stores built or launched.
- Clients served.
- Client revenue generated.
- Review platform scores and counts.
- Office addresses.
- Leadership titles.
- Client names and project attribution.
- Case-study results.

### Entity consistency requirements

- Use `Dynamic Dreamz` as the public name and `Dynamic Dreamz Solutions LLP` as
  the legal name where appropriate.
- Use one canonical logo and one canonical production URL.
- Keep addresses, phone, email, founding year, and social URLs consistent.
- Link the Organization entity to genuine official and independent profiles.
- Do not include unverified awards, certifications, ratings, or partners.
- Use the same stable Organization `@id` across all page graphs.
- Avoid defining contradictory partial versions of the same Organization node.

## Technical Discovery and Crawler Strategy

### Google

- Keep pages indexable and eligible to show a snippet.
- Ensure important facts and answers are visible as HTML text.
- Keep internal links descriptive and crawlable.
- Keep canonical URLs, sitemap URLs, structured-data URLs, and navigation URLs
  identical.
- Do not use `nosnippet` or restrictive `max-snippet` rules on content intended
  for generative Search visibility.
- Validate rendered content with URL Inspection and test supported schema with
  the Rich Results Test.

### OpenAI and ChatGPT Search

- Keep `OAI-SearchBot` allowed when ChatGPT Search visibility is desired.
- The current wildcard robots policy allows it unless production infrastructure
  overrides or blocks the request.
- Verify that the CDN, WAF, bot protection, and rate limiting allow OpenAI's
  published search-bot IP ranges.
- Treat `GPTBot` separately: it controls potential model-training use, not
  ChatGPT Search discovery. Leadership should make this policy decision.
- An explicit `OAI-SearchBot` rule is optional if the wildcard rule remains
  permissive, but an explicit policy can make the intent easier to audit.

### Bing and Microsoft AI experiences

- Verify the production property in Bing Webmaster Tools.
- Submit the XML sitemap.
- Implement IndexNow for published, substantially updated, redirected, and
  removed URLs.
- Monitor AI Performance for cited pages, citation volume, and grounding-query
  phrases.

### Robots, sitemap, and dates

- Prefer a clear public-site allow rule rather than generating an allow list
  from the currently implemented pages unless a deliberate deny-by-default
  policy is required.
- Never use robots.txt as the method for removing an indexed page; use the
  correct status, redirect, or `noindex` behavior.
- Include only canonical, indexable, successful URLs in the sitemap.
- Use actual content modification dates, not build or deployment time.
- Notify IndexNow only when a URL was added, materially updated, redirected, or
  deleted.

## Structured-Data Strategy

Structured data should reinforce visible content and entity relationships. It
must not be treated as a substitute for page depth or as a guaranteed GEO
signal.

### Sitewide nodes

- `Organization`
- `WebSite`
- The correct page-type node
- `BreadcrumbList` for non-home routes
- `ImageObject` for the page's primary image

### Page-specific nodes

- `Service` on a fully built service page.
- `Article` or `BlogPosting` on a complete article page.
- `JobPosting` for a real, current, location-specific job.
- `FAQPage` only when the same questions and answers are visible.
- `VideoObject` only with accurate required data and a visible video.
- `ItemList` only for items whose canonical pages exist.
- `Person` only for real approved people with visible supporting information.

### Quality rules

- Every schema URL must resolve successfully to its canonical destination.
- Every schema claim must match visible content.
- Review schema must identify the exact source it represents.
- Do not combine unrelated platform ratings into one aggregate rating.
- Do not invent authors, publish dates, modification dates, outcomes, or review
  counts.
- Use stable `@id` references to connect Organization, WebSite, WebPage,
  Person, Service, Article, and VideoObject nodes.

## Content Architecture

### Commercial service-page template

Each major service page should include the following in a natural page flow:

1. A clear H1 and a direct two- or three-sentence service summary.
2. Who the service is for and when it is not the right fit.
3. Business problems addressed.
4. Deliverables and boundaries.
5. Platform, integration, and architecture capabilities.
6. Process, governance, communication, and QA.
7. Typical timeline or timeline factors.
8. Engagement and pricing model where approved.
9. Relevant case studies with measurable outcomes.
10. Named expert contribution or review.
11. Genuine buyer FAQs.
12. Related service, case-study, resource, and contact links.

### Case-study template

Case studies should be the primary first-party evidence units for commercial
AEO/GEO.

Required fields:

- Client and approved attribution.
- Industry and region.
- Platform before and after.
- Business challenge.
- Technical constraints.
- Scope and deliverables.
- Integrations and architecture.
- Dynamic Dreamz team or specialist role.
- Delivery period.
- Launch date where approved.
- Quantified before-and-after results where approved.
- Qualitative results when measurements are unavailable.
- Client quote and source.
- Screenshots with contextual captions and alt text.
- Related services and resources.

Never manufacture a metric to make a case study appear stronger. A precise,
well-explained qualitative outcome is safer than an unsupported percentage.

### Expert article template

Every article intended to build topical authority should include:

- One clear decision or problem to solve.
- A concise answer or recommendation near the beginning.
- Original practitioner knowledge, examples, checklists, data, or screenshots.
- Assumptions, tradeoffs, limitations, and cases where the advice does not
  apply.
- Named author and relevant role.
- Named reviewer where specialist review occurred.
- Real publish and modification dates.
- Sources for external facts.
- Links to relevant services and case studies.
- A CTA matched to the article's decision stage.

### Content clusters to prioritize

1. Shopify Plus selection and readiness.
2. Magento, WooCommerce, BigCommerce, and custom-platform migrations.
3. Shopify migration data, SEO preservation, redirects, and launch governance.
4. Shopify B2B, wholesale, Markets, checkout, and integration architecture.
5. Shopify performance, Core Web Vitals, and CRO.
6. White-label Shopify delivery and agency operations.
7. Mobile commerce and Shopify-connected apps.
8. Maintenance, support, QA, and incident response.

Do not build several pages that only swap a keyword, platform, or city. Each
page needs a distinct audience, decision, evidence set, and conversion role.

## Independent Authority and Corroboration

Generative recommendations often consider what credible sources say about a
business, not only what the business says about itself.

Priority work:

- Keep the Shopify Partner Directory profile complete and current.
- Keep Clutch, Trustpilot, GoodFirms, Upwork, LinkedIn, and other approved
  profiles consistent.
- Ask for authentic reviews tied to a specific engagement and outcome.
- Pursue client-approved co-marketing and co-authored case studies.
- Contribute expert commentary to reputable Shopify and ecommerce publications,
  events, podcasts, and partner resources.
- Publish original benchmarks or anonymized operational research when the data
  can be documented and approved.
- Earn relevant mentions; do not purchase fake list placements or seed
  inauthentic discussions.

## Measurement Framework

### Baseline prompt set

Maintain a stable set of 25 to 40 prompts across:

- Shopify Plus agency selection.
- Shopify migration.
- Shopify B2B and integrations.
- Shopify CRO and performance.
- White-label development.
- Mobile commerce.
- Branded Dynamic Dreamz facts.
- Dynamic Dreamz careers and work culture.

Run the same prompts monthly in the priority experiences available to the
business. Record:

- Whether Dynamic Dreamz appeared.
- Whether it was cited, listed, or recommended.
- The cited URL.
- The extracted claim.
- Claim accuracy.
- Competing companies and cited pages.
- Query intent.
- Country or locale used for the test.
- Date and model or product surface when visible.

### Search and analytics metrics

- Google Search Console generative AI visibility and standard query/page data.
- Bing AI Performance citations, cited pages, and grounding-query phrases.
- Indexed-page coverage and crawl issues.
- AI referral sessions by source and landing page.
- Qualified enquiries and assisted conversions.
- Consultation bookings.
- Case-study-assisted leads.
- Branded-search growth.
- Conversion rate and engagement quality from AI referrals.

### Reporting principle

Do not report raw prompt mentions as business success. A useful dashboard must
connect visibility to accurate citations, qualified visits, enquiries, and
revenue opportunities.

## Recommended 90-Day Sequence

### Phase 1: Accuracy and eligibility

- Resolve all unbuilt URLs referenced by schema, navigation, articles, jobs,
  and CTAs.
- Standardize article paths.
- Centralize company facts and review data.
- Replace deployment timestamps with content timestamps.
- Verify Google Search Console and Bing Webmaster Tools access.
- Confirm production crawler and WAF behavior.
- Implement IndexNow.

### Phase 2: Commercial coverage

- Complete the priority Shopify service pages.
- Define intent boundaries for overlapping Shopify Plus routes.
- Complete `/our-work`, `/case-study`, `/contact-us`, and `/request-quote`.
- Add internal links from homepage proof and work sections.
- Publish the strongest approved case studies first.

### Phase 3: Citation-worthy expertise

- Migrate the highest-value decision articles rather than the full archive at
  once.
- Add authors, reviewers, dates, sources, and original practitioner insight.
- Add evidence-led service FAQs.
- Begin client co-marketing and expert contribution outreach.
- Establish the monthly prompt and citation baseline.

## Page-Wise Improvements for Currently Built Routes

## Home (`/`)

Status: technical improvements implemented; visible AEO copy deferred and live
UI restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, leadership, and client success

### Page role

Primary brand and commercial discovery page for Shopify Plus, Shopify
development, migration, B2B, CRO, mobile commerce, integrations, white-label
delivery, and ongoing support.

### Current strengths

- The live H1 clearly identifies Shopify Plus and enterprise Shopify intent.
- The hero paragraph states DTC, B2B, migration, checkout, integrations, CRO,
  and support capabilities.
- Shopify and independent review proof appears in the first viewport.
- Visible client brands, statistics, testimonials, integrations, selected work,
  and expert topics provide strong entity and trust context.
- Video testimonials already have `VideoObject` data with real upload dates.
- Metadata and the homepage Organization graph are commercially focused.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Verification or remaining dependency |
| --- | --- | --- | --- | --- | --- |
| P0 | deferred | CTA destinations | `/request-quote`, `/our-work`, and `/blog` are not built | Complete the routes before launch or temporarily point only to working destinations | Project owner approved retaining migration-intent destinations while development is in progress. Original CTA labels and paths are restored; re-audit before launch. |
| P0 | deferred | Article paths | Homepage uses root-level article slugs while Resources uses `/blogs` | Adopt one canonical path pattern and update cards, sitemap, schema, and redirects together | Requires a cross-route canonical and redirect decision; deliberately not changed in this homepage-only task. |
| P0 | deferred | Offer schema | The OfferCatalog includes service pages that are still being migrated | Emit only live service offers before launch | Project owner approved retaining the catalog during active migration. The original eight service offers are restored and must be revalidated when route migration is complete. |
| P0 | blocked by live parity | Proof consistency | Review values lack governance and Home's `4500+` Shopify-store count conflicts with Resources' visible `1000+` wording | Use a centralized, verified proof-data source | Core typed facts and schema are centralized, but live Resources proof copy and numeric reviews were restored at the project owner's request. Definitions, provenance, and approved visible values remain required. |
| P1 | deferred | Selected work | Cards link directly to client sites and do not explain Dynamic Dreamz's role | Link to internal case studies containing scope, platform, constraints, and outcomes; retain a secondary client-site link if approved | Internal case-study routes and approved scope/outcome evidence are not available in this homepage-only task. |
| P1 | blocked | Expertise | Sections explain capabilities but contain little direct evidence | Add one relevant case-study result or delivery example to each priority expertise topic | Client attribution, delivery scope, and outcomes require client-success/leadership approval. |
| P1 | deferred | Internal links | Service descriptions are not yet supported by live service pages | Add descriptive links as each service route launches | Service routes are migration pending; no broken service links were added. |
| P1 | implemented | Freshness | Homepage schema uses the build date as `dateModified` | Use the real approved content-review date | `WebPage.datePublished` preserves the live source date and `dateModified` is the explicit 2026-08-13 final parity review, independent of deployments. |
| P2 | deferred | AI-tools paragraph | A list of tools can distract from buyer outcomes and governance | Reframe around delivery speed, human review, security, QA, and where AI assistance is or is not used | Proposed visible copy was reverted to the live wording on 2026-08-13. Reintroduce only after explicit content approval. |
| P2 | partially implemented | Answer summary | The page explains services but lacks a concise reusable company definition outside metadata/schema | Add a short visible “Who we help” or “Why Dynamic Dreamz” statement before the detailed expertise section | The live hero wording is restored; the entity-first description remains nonvisual in Organization schema. Visible adoption is deferred. |

### Suggested visible answer statement

Status: deferred. The proposal was implemented on 2026-08-12, then reverted to
the live hero wording on 2026-08-13 at the project owner's request.

> Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency helping
> established DTC brands, B2B merchants, and digital agencies build, migrate,
> integrate, optimize, and support Shopify commerce experiences.

This statement should be followed by approved proof, not additional unsupported
superlatives.

### Questions this page should answer or route clearly

- What does Dynamic Dreamz specialize in?
- Is Dynamic Dreamz a Shopify Platinum Partner?
- Does Dynamic Dreamz work with Shopify Plus and B2B brands?
- Can Dynamic Dreamz manage migration, integrations, CRO, and maintenance?
- What kinds of brands and agencies has Dynamic Dreamz supported?
- Where can a buyer see relevant Shopify case studies?

### Structured-data actions

- Keep the stable Organization, WebSite, WebPage, BreadcrumbList, and supported
  VideoObject nodes.
- Revalidate service offers before launch and remove any whose final canonical
  pages do not resolve.
- Keep ratings out of Organization schema unless one precise, visible, and
  policy-compliant rating source is selected.
- Replace build-time page modification with a real content date.

### Verification and remaining gaps

- URL-policy review (2026-08-13): `/` remains the sole structural route
  exception, the absolute homepage URL uses the bare origin, all homepage links
  to non-root pages use slashless destinations, and the source/build guard
  passes.
- Checks completed: live rendered page and View Page Source, live CSS/JS,
  1440x900, 768x1024, and 390x844 live/local captures, rendered local metadata,
  rendered JSON-LD, restored migration-intent links, lint, and production build.
- Implemented items: stable Organization description, current live article-card
  synchronization, shared facts, and explicit content dates. Visible hero and
  AI-delivery copy were restored to the live wording.
- Deferred or blocked: all planned-but-unbuilt route checks during development,
  article canonicalization, internal case studies, proof definitions/provenance,
  current review values, and approved case-study evidence.
- Measurement: track the six homepage target questions above, citations to `/`,
  work/blog/quote CTA engagement after their routes ship, and qualified project
  enquiries after deployment. SEO owns monthly prompt checks; development owns
  the prelaunch route/link audit.

## About Us (`/about-us`)

Status: technical improvements implemented; visible copy deferred and live UI
restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, and business stakeholders

### Page role

Primary entity, history, leadership, expertise, and organizational trust page.
This page should be the clearest first-party source for factual questions about
Dynamic Dreamz.

### Current strengths

- The page includes founding history from 2006 through Shopify Platinum Partner
  recognition in 2025.
- Leadership and department expertise are visible.
- Founder LinkedIn links and biographies are present.
- The page includes a company video, team size, project/client statistics, and
  values.
- `AboutPage`, Organization, founder Person, breadcrumb, primary image, and
  VideoObject nodes are present.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | deferred | H1 clarity | “Agile. Adept. Accurate.” does not identify the page/entity | The entity-first H1 proposal was reverted to the live wording on 2026-08-13; reintroduce only after explicit content approval |
| P0 | blocked | Founder titles | Two founders are listed as Co-Founder & CEO | Existing titles remain unchanged until authoritative confirmation is available |
| P0 | blocked by live parity | Milestone proof | “Top 10 Shopify developers by UpWork” has no approved visible source | The live claim was restored on 2026-08-13; obtain evidence or explicit approval before launch |
| P1 | deferred | Hero description | Introduction is broad and grammatically dated | Entity-first copy was reverted to the live introduction on 2026-08-13; retain the proposal for content approval |
| P1 | partially implemented | Founder biographies | Visible biographies remain brief | Existing biographies, local images, and available LinkedIn profiles now supply Person nodes; deeper expertise needs approved content |
| P1 | implemented | Person schema | Founder nodes contained only name and job title | Three stable Person nodes now include visible biography, image, profile where available, and Organization relationship |
| P1 | partially implemented | Office/entity facts | The page does not contain a dedicated contact-facts block | Shared Organization schema contains both offices; the proposed visible hero facts were reverted and a Contact route remains migration pending |
| P1 | deferred | Timeline copy | Several milestones have grammar problems or vague wording | Edited timeline copy was reverted to live on 2026-08-13; retain as a future content proposal |
| P1 | implemented | Freshness | AboutPage used build time | Schema and sitemap now use the explicit 2026-08-13 final parity-review date |
| P2 | deferred | Department expertise | Leaders are not connected to service authority | Add approved expert authorship/review relationships when service and article pages are migrated |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live H1 and introduction on 2026-08-13.

**H1:**

> About Dynamic Dreamz: Agile. Adept. Accurate.

**Introduction:**

> Founded in 2006, Dynamic Dreamz is an ecommerce, web, and mobile development
> company with a team of more than 150 specialists. As a Shopify Platinum
> Partner, we help brands and agencies plan, build, migrate, integrate, and
> support digital commerce experiences.

### Questions this page should answer

- What is Dynamic Dreamz?
- When was Dynamic Dreamz founded?
- Who founded and leads the company?
- Where are the offices located?
- How large is the team?
- What does Shopify Platinum Partner status mean for clients?
- Which technical disciplines and industries does the team cover?

### Structured-data actions

- Completed: linked visible founders to the Organization with stable Person
  identifiers, local images, existing biographies, and available profiles.
- Completed: shared the Organization and core fact source with all built pages.
- Completed: replaced build-time modification with the 2026-08-13 final review date.
- Blocked: confirm founder titles before changing their visible or structured
  representation.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/about-us`; `/about-us/` redirects to `/about-us`, and the
  source/build URL guard passes.
- Rendered output contains one AboutPage, one shared Organization, three Person
  nodes, BreadcrumbList, WebSite, and the visible company VideoObject.
- Desktop, tablet, and mobile screenshots confirm the live heading,
  introduction, story, timeline, and values are restored without clipping or
  horizontal overflow.
- Remaining: founder-title confirmation, richer approved leadership expertise,
  company-fact provenance, and a future contact/company-facts destination.

## Career (`/career`)

Status: schema improvements retained; visible listing presentation restored to
live on 2026-08-13

Last reviewed: 2026-08-13

Owner: HR, SEO, content, and development

### Page role

Current job discovery and recruitment-conversion page for candidates in Surat
and Ahmedabad.

### Current strengths

- Current roles, experience ranges, job type, dates, positions, and job PDFs are
  structured in typed content.
- The live location tabs and complete five-role presentation are preserved in
  the UI.
- JobPosting schema uses the seven role/location combinations supported by the
  local job PDFs.
- Office addresses, hiring organization, date posted, and application URLs are
  represented.
- Workplace benefits and real team imagery add useful candidate context.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Application route | Apply CTAs and JobPosting URLs target planned `/career-apply-now` | Retained with role/location parameters; validate the application flow before launch |
| P0 | partially implemented; approval required | Location accuracy | The live UI represents every role in both cities, while local PDFs support seven combinations | PDF-supported locations remain in JobPosting schema, while the visible tabs were restored to live. HR must confirm whether the UI or PDFs are authoritative before launch |
| P0 | partially implemented | Job details | Full descriptions exist in PDFs | Role summaries remain in typed data and JobPosting descriptions, but visible card summaries were removed for live parity; full HTML detail remains future work |
| P0 | blocked | Job freshness | Listings lack a visible review date and approved expiry dates | The proposed visible review date was removed for live parity; establish an HR-owned review and expiry process |
| P1 | deferred | H1 and intent | H1 does not lead with employer/location intent | The entity-first H1 and introduction were reverted to live on 2026-08-13 |
| P1 | deferred | Benefits grammar | “Ample of Employee Engagement Activities” is incorrect | Corrected wording was reverted to live on 2026-08-13 |
| P1 | partially implemented | Job schema description | Visible cards do not include role summaries | JobPosting nodes retain PDF-derived summaries, experience, location, and on-site context; visible adoption is deferred |
| P1 | deferred | Candidate FAQs | Policies live only on Life | The descriptive cross-link was removed for live parity on 2026-08-13 |
| P1 | partially implemented; approval required | Office context | Candidates need accurate location/work-model context | Schema contains both office addresses and PDF-supported posting locations, while visible tabs preserve the live presentation pending HR confirmation |
| P2 | migration pending | JobPage structure | All jobs share one index page | Preserve current index/application model until approved job-detail routes and full HTML descriptions are migrated |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hero and opportunities wording on 2026-08-13.

**H1:**

> Careers at Dynamic Dreamz

**Introduction:**

> Explore ecommerce, technology, design, marketing, and growth opportunities
> with Dynamic Dreamz in Surat and Ahmedabad. Join a multidisciplinary team
> working with global brands and digital agencies.

The existing aspirational sentence can remain as supporting copy after this
direct answer.

### Questions this page should answer

- Which jobs are currently open at Dynamic Dreamz?
- Is each role based in Surat, Ahmedabad, or both?
- What experience is required?
- Is the role full-time, office-based, hybrid, or remote?
- What does the interview and application process involve?
- What benefits and growth opportunities are available?
- When does the role close?

### Structured-data actions

- Completed: emit one JobPosting for each of the seven PDF-supported
  job/location combinations.
- Partially completed: structured summaries, experience, posted date, location,
  and on-site context come from typed data and local PDFs. The live UI does not
  expose all of these fields and location alignment awaits HR approval.
- Migration pending: complete the retained application destinations before
  launch.
- Blocked: add `validThrough` only when real expiry dates are approved; remove
  postings promptly when roles close.
- Factual blocker: resolve the CRO `1–3 years` card versus `2–4 years` PDF
  conflict, then update the card, PDF, and schema together.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/career`; `/career/` redirects to `/career`, and the
  source/build URL guard passes.
- Rendered output contains seven JobPosting nodes rather than ten assumed
  combinations, and each identifier includes the supported city.
- Responsive captures confirm the live hero, opportunities copy, five-role tabs,
  cards, benefits wording, and link presentation are restored without clipping
  or horizontal overflow.
- Remaining: confirm whether PDFs or the live tabs are authoritative for job
  locations, then align UI and JobPosting output; application/job-detail
  migration, expiry governance, full HTML qualifications, hiring-process detail,
  and CRO experience confirmation also remain open.

## Life at Dynamic Dreamz (`/life-dynamicdreamz`)

Status: nonvisual SEO improvements implemented; visible copy deferred and live
UI restored on 2026-08-13

Last reviewed: 2026-08-13

Owner: HR, SEO, content, and development

### Page role

Employer-brand and work-culture evidence page supporting recruitment,
candidate questions, and the Career page.

### Current strengths

- The H1 communicates teamwork and culture.
- The page includes inclusivity, flexibility, teamwork, adaptability,
  collaboration, social connection, and wellbeing topics.
- A substantial gallery provides first-party workplace evidence.
- Visible FAQs answer real candidate questions and match FAQPage schema.
- The page links candidates to current openings.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Legacy URL | Project context also identifies `/life-at-dynamic-dreamz` | Confirm the legacy canonical and redirect during prelaunch route work |
| P0 | implemented | Hiring link | CTA used `/career` | Link uses canonical `/career` |
| P0 | deferred | Typo | “Dynamic Dreramz” appears in the live hiring copy | The correction was reverted to live on 2026-08-13; change only with explicit visible-copy approval |
| P1 | deferred | H1 entity clarity | Heading does not identify the page/entity | The entity-first H1 was reverted to the live heading on 2026-08-13 |
| P1 | deferred | Hero grammar and context | First answer uses awkward grammar and lacks office context | Rewritten copy was reverted to live on 2026-08-13; retain as an HR/content proposal |
| P1 | deferred | Culture copy | Value descriptions are fragments or vague | The six revised descriptions were reverted to live on 2026-08-13 |
| P1 | deferred | FAQ grammar | Answers contain grammar and spelling errors | The six edited answers were reverted to live on 2026-08-13 pending HR/content approval |
| P1 | blocked | HR policy accuracy | Work model, hours, late-evening work, pregnancy, and wellbeing language is sensitive | Current wording remains subject to formal policy confirmation |
| P1 | deferred | Gallery context | Gallery lacks approved event names and dates | Add factual captions only when event metadata is available |
| P1 | implemented | Freshness | Schema used an older modification date | Schema and sitemap now use the explicit 2026-08-13 final parity-review date |
| P2 | partially implemented | Career relationship | Recruitment pages need stronger connection | Life uses the canonical `/career` link; the proposed Career-to-Life link was removed for live parity |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hero wording on 2026-08-13; policy language still requires HR review.

**H1:**

> Life at Dynamic Dreamz: Where Teamwork Takes the Lead

**Introduction:**

> Dynamic Dreamz provides opportunities to develop your skills while
> supporting a healthy work-life balance. We are committed to an inclusive
> workplace and equal opportunity regardless of caste, creed, religion, or
> background.

The exact equal-opportunity language should be reviewed by HR before approval.

### Suggested FAQ corrections

Status: deferred. The edited answers were implemented on 2026-08-12 and
reverted to the live wording on 2026-08-13; current policy meaning still
requires confirmation.

- Replace “ample of opportunities” with “ample opportunities.”
- Replace “five-days a week organization” with “five-day workweek.”
- Replace “Fuss ball” with “foosball.”
- Replace “setup a recreational zone” with “set up a recreation zone.”
- Use “work-life balance” consistently.
- State temporary remote-work exceptions only through approved, current HR
  policy language.

### Questions this page should answer

- What is the work culture at Dynamic Dreamz?
- How does the company support professional growth?
- What types of projects do employees work on?
- What are the normal working hours and work model?
- What employee benefits and wellbeing facilities are available?
- Which offices can candidates join?

### Structured-data actions

- Keep FAQPage only while every question and answer remains visible.
- Completed: visible answers and FAQ schema come from the same typed content.
- Update both immediately when approved policy language changes.
- Completed: use the explicit 2026-08-13 final review date.
- Consider adding approved Organization workplace facts, but do not create
  ratings or employment claims that are not visibly substantiated.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/life-dynamicdreamz`; `/life-dynamicdreamz/` redirects to
  `/life-dynamicdreamz`, and the source/build URL guard passes.
- Rendered output contains the same six questions in visible content and
  FAQPage schema.
- Responsive captures confirm the live heading, hero, culture, hiring, and FAQ
  copy are restored at desktop, tablet, and mobile sizes without overflow.
- Remaining: formal policy confirmation, factual event captions, and the
  prelaunch legacy-redirect decision.

## Resources (`/resources`)

Status: technical and semantic improvements implemented; visible copy and
layout restored to live on 2026-08-13

Last reviewed: 2026-08-13

Owner: SEO, content, development, and business stakeholders

### Page role

Shopify and ecommerce knowledge hub for merchants, growth teams, technical
decision-makers, and agency partners.

### Current strengths

- The hub contains a broad Shopify, migration, performance, SEO, AI, B2B,
  white-label, and platform-comparison topic inventory.
- Article cards use titles as descriptive alt text and include real dates.
- The page includes a clear H1, topical navigation, recent articles, brand
  proof, a company video, reviews, and a CTA.
- CollectionPage, ItemList, BlogPosting, BreadcrumbList, Organization,
  WebSite, and VideoObject nodes are modeled.

### Recommended improvements

| Priority | Status | Area | Current issue | Implemented improvement or dependency |
| --- | --- | --- | --- | --- |
| P0 | migration pending | Article availability | Cards and ItemList use planned article routes | Retained under the route exception; migrate and validate priority articles before launch |
| P0 | migration pending | URL consistency | Homepage root paths and Resources `/blogs` paths differ | Decide canonical/redirect policy during article migration |
| P0 | blocked by live parity | Proof consistency | Numeric review values are not governed consistently | Live review counts, ratings, and labels were restored on 2026-08-13; verify and centralize them before launch |
| P0 | blocked by live parity | Shopify-store claim | Resources says `1000+` while Home says `4500+` | The live Resources claim was restored on 2026-08-13; approve one definition and provenance before changing either page |
| P0 | deferred | Unsupported claim | “hundreds and thousands of brands” is vague | The proposed specific-facts copy was reverted to live on 2026-08-13 |
| P1 | deferred | H1 and hero | Heading is conversational and hero relies on rhetorical questions | The direct heading and answer were reverted to live on 2026-08-13 |
| P1 | deferred | Hub copy | Informal phrases and repetition weaken credibility | The concise three-point introduction was reverted to live on 2026-08-13 |
| P1 | deferred | Taxonomy | White-label articles sit under Shopify and Magento is empty | The proposed taxonomy was reverted; the live group names and order are preserved |
| P1 | deferred to article migration | Authorship | Hub data has no approved author or reviewer | Add visible experts, evidence, and dates on each migrated article |
| P1 | deferred to article migration | Commodity content | Several legacy titles use generic list patterns | Add practitioner examples, criteria, limitations, and original evidence when articles migrate |
| P1 | migration pending | Schema depth | ItemList references planned articles and has no article authors | ItemList is intentionally retained now; add full, evidence-matched BlogPosting data on each article page |
| P1 | migration pending | CTA route | `/request-quote` is planned | Retain the CTA and validate before launch |
| P2 | deferred | Trust section | “cutting edge” wording is generic | The concrete capability copy was reverted to live on 2026-08-13 |

### Suggested hero copy

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live heading and introduction on 2026-08-13.

**H1:**

> Shopify and Ecommerce Resources for Growth Teams

**Introduction:**

> Practical guides for merchants, ecommerce leaders, developers, and agency
> partners evaluating Shopify Plus, migrations, performance, CRO,
> integrations, mobile commerce, and white-label delivery.

### Suggested resource-hub introduction

Status: deferred. The proposed copy was implemented on 2026-08-12 and reverted
to the live hub and story wording on 2026-08-13; fact definitions and
provenance remain pending approval.

> Use this resource hub to make informed Shopify and ecommerce decisions. It
> brings together migration guidance, platform comparisons, performance
> methods, SEO practices, and growth topics in one place.

The proposal would identify the Shopify Platinum Partner team, `150+` experts,
`4500+` Shopify store builds, topic coverage, and visible article dates. The
live UI instead retains its current proof wording; author, reviewer,
assumptions, and evidence remain article-level work.

### Initial article migration priorities

Migrate and improve decision-stage content before importing the entire archive:

1. Shopify development cost.
2. Shopify expert cost.
3. Shopify Plus investment/readiness.
4. Shopify Plus migration process.
5. Shopify migration SEO preservation.
6. Shopify data migration risks.
7. Magento or BigCommerce to Shopify migration.
8. Shopify Core Web Vitals.
9. Agency versus freelancer.
10. Choosing a white-label Shopify partner.

Each migrated article should be materially improved with practitioner insight;
copying an old article into the new shell is not sufficient for AEO/GEO.

### Questions this page should answer or route clearly

- Where can merchants find trustworthy Shopify migration guidance?
- How much does Shopify development or expert support cost?
- When is Shopify Plus the right choice?
- What risks should teams plan for during migration?
- How should an agency evaluate a white-label development partner?
- Which Dynamic Dreamz expert wrote or reviewed each recommendation?

### Structured-data actions

- Keep CollectionPage and BreadcrumbList for the hub.
- Retain the migration-intent ItemList during development and validate every
  article URL before launch.
- Move full Article or BlogPosting detail to the corresponding article page.
- Add author and reviewer data only when those people and roles are visible.
- Completed for the hub: use an explicit 2026-08-13 modification date; use
  actual article dates when those routes are migrated.
- Keep the company VideoObject because the video is visible and its source data
  is known.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/resources`; `/resources/` redirects to `/resources`, and
  the source/build URL guard passes.
- Rendered output contains one CollectionPage, shared Organization, WebSite,
  BreadcrumbList, visible company VideoObject, and the intentionally retained
  64-entry ItemList.
- Responsive captures confirm the live H1, introduction, hub taxonomy, story,
  review cards, counters, and trust copy are restored without new overflow. The
  Resources H1, story title, and blog title now also match the live Montserrat
  700 weight and letter spacing.
- Remaining: resolve the visible `1000+`/`4500+` conflict, approve review values,
  document company-fact provenance, add authorship/evidence on article pages,
  decide article canonicals, and validate routes before launch.

## Beauty & Cosmetics (`/beauty-cosmetics`)

Status: implemented; conversion destinations migration pending
Last reviewed: 2026-08-13
Owner: SEO, content, development, and client success
Primary audience: Beauty, cosmetics, skincare, haircare, salon, and wellness
brand founders; ecommerce leaders; and digital-commerce teams
Decision stage: Solution awareness through agency evaluation

### Page role

Present Dynamic Dreamz's industry-specific ecommerce and web-development
experience for beauty and cosmetics brands. The page should connect common
beauty-commerce needs—visual merchandising, responsive storefronts, booking,
virtual try-on/interactive experiences, and social integration—to relevant
delivery capabilities and attributable portfolio evidence. It differs from a
general Shopify service page by leading with beauty-industry context and work.

### Target prompts

- Which agency builds Shopify stores for beauty and cosmetics brands?
- What ecommerce features help skincare, cosmetics, salon, and haircare brands?
- Can Dynamic Dreamz build appointment booking or virtual try-on experiences?
- Which beauty brands has Dynamic Dreamz supported?
- How can a beauty brand request a Shopify or ecommerce project estimate?

### Current strengths and available evidence

- The live page has a clear Beauty & Cosmetics H1, direct industry framing,
  five visible capabilities, and six externally linked portfolio examples.
- Ranavat, Midnight Cosmetics, Conserving Beauty, Lilac ST., Perfect Locks, and
  Luxxi Nails are visibly named and linked; attribution remains subject to
  ongoing client-permission governance.
- All primary content is suitable for server rendering. The migrated page uses
  the approved slashless canonical and retains real publish/modify dates.
- The shared company entity and independently linked partner/review profiles
  provide broader corroboration without requiring unrelated hidden FAQ copy.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | migration pending | Conversion routes | `/request-quote` and `/our-work` are not built in the current migration | Preserve their slashless canonical intent now; build or redirect and validate both before launch | Route migration |
| P0 | implemented | Schema accuracy | Live source injects unrelated sitewide FAQPage schema that is not visible on this route | Emit only page-relevant Organization, WebSite, WebPage, BreadcrumbList, and Service/OfferCatalog nodes | Rendered schema validated 2026-08-13 |
| P1 | implemented | Metadata | The live title is 157 characters and is likely to truncate | Use a concise Beauty & Cosmetics ecommerce-development title and description while preserving intent | Title, description, canonical, Open Graph, and Twitter metadata validated 2026-08-13 |
| P1 | implemented baseline; case studies migration pending | Evidence | Portfolio proof points route only to external storefronts | Preserve visible external links; add internal case studies as those routes migrate and client attribution is approved | Current links preserved; case-study migration and client approval remain |
| P1 | deferred | Answer copy | Hero and industry paragraph do not directly summarize provider, platform, capabilities, and audience in one answer | Add an entity-first answer only after the exact visible wording is approved | Project-owner copy approval |
| P1 | migration pending | Internal links | Page does not route users to relevant built Shopify capabilities or beauty case studies | Add descriptive service and case-study links when their canonical routes exist | Route coverage |
| P2 | deferred | FAQ coverage | Common evaluation questions are not visibly answered | Add only genuinely useful, owner-approved visible FAQs; mirror exact text in FAQPage schema if added | Content approval and factual sourcing |
| P2 | suggested | Authorship/review | No visible practitioner reviewer or last-reviewed label | Add a qualified reviewer and review date only after ownership and credentials are approved | Leadership/content approval |

### Suggested answer copy

Status: deferred pending exact visible-copy approval.

> Dynamic Dreamz helps beauty and cosmetics brands design, build, and optimize
> ecommerce experiences, including responsive Shopify storefronts, appointment
> booking, interactive product experiences, and social integrations.

The current live hero and IT-solutions copy remains the implementation source
for this migration task.

### Entity, evidence, and authorship actions

- Keep Dynamic Dreamz as the provider and Beauty & Cosmetics Ecommerce
  Development as the page's service subject.
- Keep portfolio names, destinations, and visible platform categories aligned
  with the rendered cards; do not add outcome claims without source approval.
- Add internal beauty case studies only when the routes and attribution are
  validated. Do not convert storefront links into unsupported case-study proof.
- Do not invent an author, reviewer, credential, review value, or project result.

### Internal-link and conversion actions

- Retain the live Request a Quote, Get Started, and View Our Work CTA flow.
- Preserve descriptive portfolio names and external destinations with secure
  new-tab attributes and the live nofollow intent.
- As routes ship, connect this page to Shopify development, Shopify Plus,
  Shopify CRO, mobile commerce, and applicable beauty case studies.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service node whose offers match the five visible deliverables.
- Do not emit FAQPage because no FAQ is visible.
- Use the original 2024-05-06 publish date and the real 2026-08-13 migration
  review/modification date; never substitute build time.
- Keep the page indexable, include it in `sitemap.xml`, and include its local
  primary image in the image sitemap field.

### Measurement plan

- Track landing-page impressions/clicks for beauty ecommerce, cosmetics Shopify,
  salon booking, virtual try-on, and beauty web-development queries.
- Sample the target prompts monthly across Google, Bing/Copilot, ChatGPT Search,
  and relevant answer engines; record whether the page or corroborating sources
  are cited.
- Track Request a Quote, Get Started, portfolio, and View Our Work clicks by
  landing page once analytics governance is configured.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, JSON-LD, and
  internal links use `/beauty-cosmetics`; `/beauty-cosmetics/` redirects to
  `/beauty-cosmetics`, and the source/build URL guard passes.
- Checks completed: live rendered/source review, canonical/metadata/date audit,
  heading and CTA inventory, 1440/768/390 visual/computed-style capture,
  animation/hover audit, and asset hash canonicalization.
- Implemented items: server-rendered page content; concise route metadata;
  slashless canonical, Open Graph, and Twitter data; Organization, WebSite,
  WebPage, BreadcrumbList, and page-specific Service/OfferCatalog schema; local
  primary image in the sitemap; meaningful image alts; secure portfolio links;
  and exact live section, copy, and CTA coverage. Rendered HTML checks found one
  H1, no production-asset hotlinks, and all primary answer content before client
  JavaScript.
- Deferred or blocked items: visible answer copy, FAQ, authorship/reviewer,
  internal service/case-study links, and proof outcomes require approval or
  destination-route migration.

## White Label Shopify Development Services (`/white-label-shopify-development-services`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-13

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: digital, ecommerce, branding, and marketing agencies seeking confidential Shopify delivery capacity

Decision stage: commercial evaluation and partner selection

### Page role

Commercial service page for agencies evaluating a white-label Shopify and
Shopify Plus development partner. It covers behind-the-scenes delivery,
automation and AI-adjacent capabilities, service scope, engagement models,
technology coverage, process, confidentiality, and FAQs. Its audience and
confidential agency-delivery intent distinguish it from general Shopify
development and hire-developer routes.

### Target prompts

- How do I choose a white label Shopify development partner for my agency?
- Can a Shopify Platinum Partner deliver Shopify Plus work under our brand and NDA?
- What does white label Shopify development cost?
- Can a white label Shopify team scale up and down with our project pipeline?
- Which Shopify services, integrations, automation, and AI-search work can be delivered white label?
- How does Dynamic Dreamz handle confidentiality, QA, delivery, and ongoing support for agency clients?

### Current strengths and available evidence

- The live H1 and introduction identify digital agencies and the behind-the-scenes delivery model.
- NDA/confidentiality, engagement models, visible prices, process steps, service scope, tools, and ongoing support are present in server-readable copy.
- Independent Clutch, Trustpilot, and Upwork profile links appear in the hero.
- The live page exposes five buyer FAQs and commercially useful pricing information.
- Shopify, Shopify Plus, migration, apps, themes, B2B, checkout, automation, retention, and AI-search topics are covered.
- A page-specific Service schema can be supported by the visible service content without inventing new claims.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | The canonical migrated route was not implemented locally | The slashless route now ships through shared SEO data, robots, sitemap, metadata, and canonical helpers | Verified in rendered output and production build |
| P0 | implemented | Structured data | Live source contains a sitewide hidden FAQ graph plus a page-specific FAQ graph whose six questions do not match the five visible FAQs | The local graph emits Organization, WebSite, WebPage, Service, BreadcrumbList, and one FAQPage sourced from exactly the five visible FAQs | Verified in rendered JSON-LD |
| P0 | blocked by live parity | Proof consistency | Hero says `100+` skilled developers while the counter says `150+`; this page says `1000+` Shopify projects/sites while Home uses `4500+` stores | Approve definitions, provenance, and one consistent set of company proof values, then update all affected UI/schema together | Leadership and fact-owner approval |
| P0 | blocked by live parity | Engagement terms | Pricing introduction says “no retainers and minimum hours,” while the FAQ says there are no minimum hour commitments | Confirm the contractual minimum-hours policy and approve exact visible wording | Sales/legal approval |
| P1 | deferred | FAQ accuracy | The agentic-commerce question is answered with unrelated theme/app/integration copy and misspells Dynamic Dreamz as “Dynamic Dremaz” | Replace it with a direct, approved definition and readiness answer grounded in services actually offered | Product/service-owner and content approval |
| P1 | deferred | Claim support | “fast, secure,” “world-class,” AI citation/recommendation, and Universal Commerce Protocol readiness language lacks visible evidence or qualification | Add approved delivery controls, security boundaries, case evidence, and accurate protocol/readiness details | Delivery/security/client-success evidence |
| P1 | deferred | Case-study evidence | The page has no internal white-label case study, named delivery example, or approved outcome | Add an anonymized or client-approved agency delivery case study with scope, constraints, QA, and outcome | Client-success approval and evidence |
| P1 | migration pending | Conversion route | All primary CTAs target planned `/request-quote` | Retain the migration-intent path now and validate the quote flow before launch | Quote route implementation |
| P1 | suggested | Internal links | The page mentions Shopify Plus, migration, themes, apps, B2B, checkout, and CRO without contextual links | Add descriptive links as each relevant canonical service route ships | Route migration and visible-link approval |
| P1 | suggested | Measurement | White-label partner discovery prompts and lead quality are not tracked as a page-specific cohort | Track target prompts, citations, organic/AI landings, CTA clicks, qualified agency leads, and assisted conversions | SEO/analytics ownership |
| P2 | deferred | Authorship and review | No visible subject-matter reviewer or content-review date is present | Add an approved delivery leader/reviewer and real review date when service-page authorship governance is established | Named expert and approval |

### Suggested answer copy

Deferred under the live-UI preservation gate. The current live introduction
explains the delivery model but should eventually be followed by a concise,
evidence-backed definition of white-label Shopify development, who the service
is for, and the boundaries between the agency and delivery partner. Exact
replacement copy is tracked in `docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Keep Dynamic Dreamz connected to the shared Organization entity and represent
  this route as a Service for digital and ecommerce agencies.
- Do not put the visible Clutch, Trustpilot, and Upwork numbers into aggregate
  rating schema until each source, value, count, and review date is governed.
- Add an approved delivery owner or reviewer only when the person and role are
  visible and current.
- Prioritize an approved white-label case study or anonymized delivery example
  over unsupported superlatives.

### Internal-link and conversion actions

- Keep `/request-quote` as migration pending and verify all CTA occurrences
  before launch.
- Link to Shopify Plus, migration, theme, app, CRO, and case-study routes only
  as those destinations become canonical and available.
- Preserve the independent review-profile links with `nofollow noopener noreferrer`.

### Structured-data, crawler, and freshness actions

- Emit one shared Organization and WebSite node, a WebPage, Service,
  BreadcrumbList, primary ImageObject, and FAQPage containing exactly the five
  visible questions and answers.
- Preserve the live publish timestamp where reliable and use the explicit final
  migration review date rather than deployment time for `dateModified`.
- Add the canonical route and local primary image to the sitemap.
- Confirm the final page is server-rendered, indexable, and contains no runtime
  dependency on the live WordPress site.

### Measurement plan

- SEO owns monthly testing of the six target prompts above.
- Analytics owns organic/AI landing sessions, quote CTA engagement, qualified
  agency enquiries, and assisted conversions from this route.
- Sales categorizes whether leads are agencies, requested service scope, NDA
  requirement, engagement model, and pipeline size so visibility can be tied to
  qualified opportunities.

### Verification and remaining gaps

- URL-policy review (2026-08-13): canonical, Open Graph, sitemap, robots,
  JSON-LD, and internal links use `/white-label-shopify-development-services`;
  the legacy trailing-slash request redirects to the slashless route, and the
  source/build URL guard passes.
- Checks completed: live and local rendered pages, View Page Source, metadata,
  live and local JSON-LD graphs, CSS/JS, desktop/tablet/mobile and full-page
  screenshots, responsive computed geometry, open/close accordion states,
  animation and reduced-motion behavior, header scroll state, links, alt
  handling, local asset enforcement, lint, and production build.
- Implemented items: canonical route, shared metadata and discovery records,
  server-rendered visible content, accessible accordions, local assets,
  route-aware header state, and a page graph with exactly five visible FAQs.
- Deferred or blocked: proof-value reconciliation, contractual minimum-hours
  language, agentic-commerce answer, claim evidence, case studies, authorship,
  internal links to unbuilt routes, and quote-route completion.

## White Label WordPress Development Services (`/white-label-wordpress-development-services`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-13

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: digital, web-design, ecommerce, branding, and marketing
agencies seeking confidential WordPress delivery capacity

Decision stage: commercial evaluation and partner selection

### Page role

Commercial service page for agencies evaluating a white-label WordPress and
WooCommerce development partner. It covers behind-the-scenes delivery, custom
sites, themes, plugins, page builders, performance, engagement models,
technology coverage, process, confidentiality, communication, and support. Its
WordPress/WooCommerce focus distinguishes it from the white-label Shopify,
website-design, general WordPress, and hire-developer routes.

### Target prompts

- How do I choose a white label WordPress development partner for my agency?
- Can a WordPress team deliver websites under our agency brand and NDA?
- What does white label WordPress development cost?
- Can a white label team support WordPress, WooCommerce, custom themes, plugins, and page builders?
- Can a white label WordPress team scale with an agency's project pipeline?
- How does Dynamic Dreamz handle confidentiality, communication, QA, and ongoing support?

### Current strengths and available evidence

- The live H1, hero lead, and introduction identify agencies and the
  behind-the-scenes WordPress delivery model.
- Seven visible buyer FAQs cover confidentiality, ongoing capacity, NDA use,
  preferred tools and hosting, industries, client communication, project tools,
  office locations, and operating hours.
- Visible prices and engagement models give buyers commercially useful context.
- Six service rows and 24 technology marks cover WordPress, WooCommerce,
  custom themes/plugins, Figma conversion, performance, page builders, hosting,
  and adjacent delivery tooling.
- Independent Clutch, Trustpilot, and Upwork profile links appear in the hero.
- The page can be fully server-rendered apart from the two small accordion
  controls.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | The canonical migrated route was not implemented locally | Shipped the slashless route through shared metadata, sitemap, schema, robots, and canonical helpers | Route is statically prerendered; rendered and build verification passed on 2026-08-13 |
| P0 | implemented | Structured data | Live source emits an unrelated sitewide FAQPage in addition to the seven-question page FAQ graph | Emitted Organization, WebSite, WebPage, Service, BreadcrumbList, a primary ImageObject, and exactly one FAQPage sourced from the seven visible FAQs | Rendered JSON-LD parses with seven FAQ items and six service offers |
| P0 | blocked by live parity | Metadata/proof consistency | Live metadata says `18+` years and `97% Client Retention Rate`, while visible content says `20+` years and does not show retention | Preserve intent in accurate local metadata; obtain an owner-approved definition and source before using the retention claim anywhere | Leadership/fact-owner approval |
| P0 | blocked by live parity | Proof governance | `20+` years, `150+` developers, `2500+` reviews, and `1000+` sites are visible but do not yet have definitions/provenance in the shared fact source | Approve definitions, sources, owners, and allowable page usage, then centralize the values | Leadership and fact-owner approval |
| P1 | deferred | Duplicated copy | “Optimized for SEO & Performance” repeats the “Diverse Tech Stack” description | Replace it with an approved performance/SEO delivery-process statement | Content, SEO, and delivery approval |
| P1 | deferred | Claim support | “pixel-perfect,” “faster load times,” “better rankings,” and testing a site “to be ideal” are unsupported or unclear | Use auditable process language and approved delivery controls instead of outcome guarantees | Delivery evidence and visible-copy approval |
| P1 | deferred | Case-study evidence | The page has no visible agency delivery example, internal case study, or approved outcome | Add an anonymized or client-approved WordPress white-label case study with scope, constraints, QA, and outcome | Client-success approval and evidence |
| P1 | migration pending | Conversion route | All primary CTAs target planned `/request-quote` | Retain migration intent and validate the quote flow before launch | Quote route implementation |
| P1 | suggested | Internal links | WooCommerce, WordPress development, theme customization, performance, and hire-developer topics are not linked contextually | Add descriptive links as each canonical service route ships | Route migration and visible-link approval |
| P1 | blocked pending policy review | Operating-hours FAQ | The page gives office locations, fixed hours, and off-hours availability that affect client expectations | Confirm the current locations, hours, and support/call policy before launch | Operations/HR/sales approval |
| P1 | suggested | Measurement | White-label WordPress discovery and lead quality are not tracked as a page cohort | Track target prompts, citations, organic/AI landings, CTA clicks, qualified agency leads, and assisted conversions | SEO/analytics ownership |
| P2 | deferred | Authorship and review | No visible subject-matter reviewer or content-review date is present | Add an approved WordPress delivery leader/reviewer and real review date when service authorship governance exists | Named expert and approval |

### Suggested answer copy

Deferred under the live-UI preservation gate. The current live introduction
identifies the delivery model, but a later approved answer should state who the
service is for, its WordPress/WooCommerce scope, the agency/partner boundary,
and the role of NDA-backed delivery without adding an unsupported result claim.
Exact visible proposals are tracked in `docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Connect the route to the shared Dynamic Dreamz Organization entity and model
  it as a Service for agency partners.
- Do not put source-specific hero review marks into aggregate-rating schema.
- Do not use the unverified retention claim in schema or metadata.
- Prioritize an approved WordPress white-label case study or anonymized delivery
  example over new superlatives.
- Add a delivery owner/reviewer only when the person, role, and review date are
  approved and visible.

### Internal-link and conversion actions

- Keep `/request-quote` as migration pending and verify every CTA occurrence
  before launch.
- Add WordPress, WooCommerce, theme customization, hire-developer, and evidence
  links only as their canonical routes are available.
- Preserve the independent review-profile links with
  `nofollow noopener noreferrer`.

### Structured-data, crawler, and freshness actions

- Emit shared Organization and WebSite nodes plus WebPage, Service,
  BreadcrumbList, primary ImageObject, and FAQPage nodes supported by visible
  content.
- Use the reliable live `datePublished` value of 2024-05-02 and the actual
  migration review date for `dateModified`; never substitute deployment time.
- Add the canonical route and local primary image to the sitemap.
- Verify server rendering, indexability, slashless URL output, and the absence
  of runtime WordPress/theme asset dependencies.

### Measurement plan

- SEO owns monthly checks of the six target prompts above and records cited
  pages, extracted claims, and accuracy.
- Analytics owns organic/AI landing sessions, quote CTA engagement, qualified
  agency enquiries, and assisted conversions.
- Sales categorizes agency leads by WordPress/WooCommerce scope, NDA need,
  engagement model, and pipeline size.

### Verification and remaining gaps

- Checks completed: live and local rendered pages and View Page Source,
  metadata and JSON-LD graphs, heading/CTA/asset inventory, CSS/JS responsive
  rules, service and FAQ states, 1440/768/390 plus full-page comparisons,
  descriptive asset and hash review, server rendering, link and alt handling,
  URL policy, lint, TypeScript, and production build.
- Implemented items: canonical route, shared metadata and discovery records,
  server-rendered live-visible content, local assets, accessible accordions,
  route-aware header handling, Service and BreadcrumbList nodes, and exactly
  one FAQPage sourced from the seven visible questions.
- Deferred or blocked: proof governance, repeated/unsupported visible copy,
  an approved delivery case study, authorship, internal links to unbuilt routes,
  operating-hours confirmation, and quote-route completion.

## White Label Website Design Services (`/white-label-website-design-services`)

Status: implemented; live-visible content preserved

Last reviewed: 2026-08-17

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: digital, branding, marketing, ecommerce, and development
agencies seeking confidential website-design and development capacity

Decision stage: commercial evaluation and white-label partner selection

### Page role

Commercial service page for agencies evaluating a white-label website design
partner. It explains the delivery model, benefits, design and development
scope, AI-assisted capabilities, AI-search preparation, process, industries,
client proof, and common operating questions. It is broader than the
platform-specific Shopify and WordPress white-label routes.

### Target prompts

- What is white label website design, and how does it work for agencies?
- How do I choose a white label web design partner?
- Can a white label partner design responsive ecommerce sites under our brand?
- What process, confidentiality controls, revisions, and handoff should an agency expect?
- Can a white label web design team support AI-assisted tools and technical SEO?
- Which industries and web platforms can Dynamic Dreamz support for agency clients?

### Current strengths and available evidence

- The H1 and introduction explain the agency scaling and behind-the-scenes delivery intent.
- The page covers services, benefits, process, platforms, industries, revision expectations, confidentiality, AI-assisted tooling, AI-search preparation, and eight buyer FAQs.
- Independent Clutch, Trustpilot, and Upwork profile links are visible in the hero.
- The service accordion and FAQ provide extractable answer content when server-rendered.
- A visible testimonial carousel supplies first-party client commentary and links to the source videos.
- Page-specific Service, OfferCatalog, BreadcrumbList, and FAQPage nodes can be supported without adding claims beyond visible copy.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | complete | Route and discovery | The route required slashless canonical and discovery coverage | The route ships through shared metadata, robots, sitemap, canonical, and navigation helpers | URL-policy check, production build, and rendered canonical verified 2026-08-17 |
| P0 | complete | Structured data | Live source includes an unrelated sitewide FAQ graph in addition to page content | Local output emits Organization/WebSite plus WebPage, Service with OfferCatalog, BreadcrumbList, and exactly one FAQPage sourced from the eight visible FAQs | Rendered JSON-LD verified 2026-08-17 |
| P0 | blocked by live parity | Proof governance | `20+` years, `150+` developers, `2500+` reviews, and `1000+` WordPress sites are visible but not governed by one approved source | Approve definitions, evidence, review dates, and allowable page usage before changing UI or using the values in schema | Leadership and fact-owner approval |
| P1 | deferred | AI discovery claims | The page states that AI engines will read, cite, trust, discover, and recommend client sites | Replace guarantees with evidence-backed technical and content practices that can improve machine understanding and retrieval | SEO, technical, legal, and content approval |
| P1 | deferred | Outcome claims | Copy guarantees ranking, speed, security, client satisfaction, higher profit, and faster delivery without evidence or qualification | Use auditable process language and approved case evidence instead of unconditional outcomes | Delivery, security, sales, and client-success evidence |
| P1 | deferred | Case-study evidence | The section is labelled case studies but presents testimonials without project scope, constraints, or outcomes | Add client-approved case studies or anonymized agency-delivery examples with method and evidence | Client-success approval and source evidence |
| P1 | migration pending | Conversion routes | CTAs target planned `/request-quote` and `/schedule-your-consultation` routes | Preserve migration intent now and verify both conversion flows before launch | Route implementation |
| P1 | migration pending | Service route | BigCommerce accordion copy links to planned `/bigcommerce-development` | Keep the descriptive link intent and implement or redirect the destination before launch | BigCommerce route migration |
| P1 | suggested | Internal links | Industry and service mentions are mostly plain text | Add contextual links only as their canonical migrated routes become available and exact visible-link changes are approved | Route migration and visible-link approval |
| P2 | deferred | Authorship and freshness | No visible design/delivery reviewer or review date is present | Add an approved subject-matter reviewer and real review date when service-page governance exists | Named expert and approval |

### Structured-data, crawler, and freshness actions

- Represent the route as a Service for agency partners and expose only the six visible service offers.
- Emit exactly the eight visible FAQs; do not reproduce the unrelated live sitewide FAQ graph.
- Do not add review aggregate, proof counters, performance promises, AI recommendation claims, or profit claims to schema.
- Preserve the reliable live publish date of 2024-12-09 and live modified date of 2026-06-03 until a later substantive review is approved.
- Add the slashless route and its local primary image to the sitemap, keep it indexable in robots, and prevent any runtime dependency on the WordPress site.

### Verification and remaining gaps

- Completed: live rendered/source review, metadata and heading inventory,
  local implementation and assets, rendered canonical/schema checks,
  desktop/tablet/mobile visual comparison, CSS/JS interaction review, section
  map, CTA inventory, URL-policy check, lint, production build, and AEO/GEO
  assessment. The route is statically prerendered.
- Pending: migration coverage for `/request-quote`,
  `/schedule-your-consultation`, and `/bigcommerce-development`; proof
  governance; approved authorship/case-study evidence; and exact approval for
  deferred visible-copy changes.

## Fashion & Apparel (`/fashion`)

Status: technical implementation complete; visible recommendations deferred for live parity
Last reviewed: 2026-08-13
Owner: SEO, content, development, and client success
Primary audience: Fashion, apparel, jewelry, footwear, accessories, and
lifestyle brand founders; ecommerce leaders; and digital-commerce teams
Decision stage: Solution awareness through agency evaluation

### Page role

Industry landing page for fashion and apparel brands evaluating ecommerce,
Shopify, Shopify Plus, responsive design, merchandising, engagement, social
integration, and related web-development support. It differs from general
Shopify service pages by leading with fashion-industry presentation needs and
six visible fashion/lifestyle portfolio examples.

### Target prompts

- Which agency builds Shopify stores for fashion and apparel brands?
- What ecommerce features help fashion, jewelry, footwear, and accessories brands?
- Can Dynamic Dreamz build responsive fashion storefronts and product galleries?
- Which fashion and apparel brands has Dynamic Dreamz supported?
- How can a fashion brand request an ecommerce project estimate?

### Current strengths and available evidence

- The live page has a clear Fashion & Apparel H1, direct industry framing,
  five visible deliverables, and six externally linked portfolio examples.
- SomewhereCo, Donj Jewellery, Bombay Shirt Company, Tropicfeel, Raen, and TEGO
  Fit are visibly named and linked; attribution remains subject to ongoing
  client-permission governance.
- The primary page content can be server rendered and shares an already-audited
  industry layout with the Beauty & Cosmetics route.
- The live publish date is available, and all required visual assets have been
  captured for local ownership and duplicate checking.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | `/fashion` was linked from navigation but was not implemented locally | Built the slashless server-rendered route with shared metadata, robots, sitemap, schema, and canonical helpers | Rendered and build verification complete 2026-08-13 |
| P0 | migration pending | Conversion routes | `/request-quote` and `/our-work` are not built | Preserve their migration-intent paths now; build or redirect and validate both before launch | Route migration |
| P0 | implemented | Schema accuracy | Live source injects an unrelated sitewide FAQPage that is not visible on this route | Emit only page-relevant Organization, WebSite, WebPage, BreadcrumbList, and Service/OfferCatalog nodes | Rendered schema audit complete 2026-08-13 |
| P1 | implemented | Metadata | Live description is 170 characters and exceeds the project’s 160-character target | Preserve intent in a concise route-specific title/description with canonical, Open Graph, and Twitter data | 155-character description and rendered/build audit complete |
| P1 | implemented baseline; case studies migration pending | Evidence | Portfolio proof routes only to external storefronts and does not state scope or outcomes | Preserve the six visible links; add internal case studies only when attribution, scope, and outcomes are approved | Client-success approval and case-study migration |
| P1 | deferred | Claim support | Visible copy says the solution increases retention and sales growth without page-level evidence | Preserve live wording during migration; later qualify it or add approved evidence | Content/client-success approval |
| P1 | migration pending | Internal links | The page does not route to relevant built Shopify capabilities or fashion case studies | Add descriptive service and case-study links as their canonical routes ship | Route coverage and visible-link approval |
| P2 | deferred | Answer copy and FAQs | The page lacks one concise provider/capability answer and visible evaluation FAQs | Add only useful, evidence-backed copy after exact visible wording is approved; mirror any visible FAQ exactly in schema | Content and factual approval |
| P2 | suggested | Authorship/review | No visible practitioner reviewer or content-review label is present | Add an approved reviewer and real review date when service-page governance exists | Leadership/content approval |

### Suggested answer copy

Deferred under the migration live-UI gate. A future answer should identify
Dynamic Dreamz, fashion/apparel audiences, Shopify/Shopify Plus capabilities,
and concrete storefront deliverables without implying guaranteed revenue or
retention outcomes. Exact visible proposals are tracked in
`docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Model the page as a fashion and apparel ecommerce-development Service
  provided by the shared Dynamic Dreamz Organization.
- Keep the six visible brand names and destinations aligned with the rendered
  portfolio; do not add outcome claims or case-study attribution without
  approval.
- Do not invent an author, reviewer, credential, rating, or project result.

### Internal-link and conversion actions

- Preserve the live Request a Quote, Get Started, portfolio, and View our work
  CTA flow using slashless migration-intent paths.
- Keep external project links secure and preserve the live nofollow intent.
- Connect to Shopify development, Shopify Plus, CRO, and fashion case studies
  only as those local destinations become available.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service whose offers match the five visible deliverables.
- Do not emit FAQPage because the route has no visible FAQ content.
- Preserve the real 2024-05-06 publish timestamp and use the actual migration
  review date for modification; never substitute deployment time.
- Keep the page indexable and include its canonical route and local primary
  image in the sitemap.

### Measurement plan

- Track impressions/clicks for fashion ecommerce, apparel Shopify, fashion web
  design, product-gallery, jewelry ecommerce, and responsive-store queries.
- Sample the target prompts monthly across relevant search and answer engines;
  record page citations, claim accuracy, and competing sources.
- Track quote, portfolio, and View our work clicks once analytics governance is
  configured.

### Verification and remaining gaps

- Checks completed: live and local rendered pages, View Page Source,
  metadata/date/canonical, heading/CTA/link/image inventory, JSON-LD, CSS/JS,
  desktop/tablet/mobile screenshots and computed geometry, carousel and hover
  states, page overflow, local runtime asset requests, exact/perceptual asset
  deduplication, URL-policy guard, lint, and production build.
- Implemented items: slashless server-rendered route, shared typed industry
  sections/content, local canonical assets, route metadata/discovery records,
  accurate alt text, and page-relevant WebPage/BreadcrumbList/Service schema.
- Deferred or blocked: visible answer/grammar/claim changes, FAQ, authorship,
  internal case studies/service links, and conversion-route completion require
  approval or destination migration.

## Health & Nutrition (`/healthcare`)

Status: technical implementation and audit complete; visible recommendations deferred
Last reviewed: 2026-08-13
Owner: SEO, content, development, and client success
Primary audience: Health, nutrition, supplements, wellness, healthcare-product,
dental-practice, and digital-agency decision makers
Decision stage: Solution awareness through agency evaluation

### Page role

Industry landing page for health, nutrition, wellness, healthcare-product, and
dental organizations evaluating ecommerce and website delivery. It differs
from the broader Shopify routes by leading with precise product information,
online ordering, responsive presentation, white-label delivery, social
integration, dental-practice website needs, and six visible sector examples.

### Target prompts

- Which agency builds ecommerce stores for health and nutrition brands?
- Can Dynamic Dreamz build healthcare-product and supplement storefronts?
- Does Dynamic Dreamz provide white-label health and nutrition development?
- Can Dynamic Dreamz develop websites for dentists and dental practices?
- Which health and nutrition brands has Dynamic Dreamz supported?

### Current strengths and available evidence

- The live page has a clear Health & Nutrition H1, a separate dental-solutions
  section, five visible deliverables, and six externally linked portfolio examples.
- Naakbar, Nordic Nutrition, Elavate, Nufyx, Turmeric Vitality, and Health Co
  are visibly named and linked; attribution remains subject to ongoing
  client-permission governance.
- The page can reuse the already-audited server-rendered industry layout while
  extending only its typed solution-row contract.
- The live publish date and required local media have been captured and audited
  for exact and perceptual duplicates.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | in progress | Route and discovery | `/healthcare` is linked from navigation but is not implemented locally | Build the slashless server-rendered route with shared metadata, robots, sitemap, schema, and canonical helpers | Rendered/build verification |
| P0 | migration pending | Conversion routes | `/request-quote`, `/dental-clinic-website-development-company`, and `/our-work` are not built | Preserve migration-intent paths now; build or redirect and validate all three before launch | Route migration |
| P0 | in progress | Schema accuracy | Live source injects an unrelated sitewide FAQPage that is not visible on this route | Emit only Organization, WebSite, WebPage, BreadcrumbList, and a page-specific Service/OfferCatalog | Rendered schema audit |
| P1 | in progress | Metadata | The live title is far beyond the project’s 60-character target | Preserve intent in concise route-specific metadata with canonical, Open Graph, and Twitter data | Rendered/build audit |
| P1 | baseline in progress; case studies migration pending | Evidence | Portfolio proof routes only to external storefronts and does not state approved scope or outcomes | Preserve the six visible links; add internal case studies only when attribution, scope, and outcomes are approved | Client-success approval and case-study migration |
| P1 | deferred | Audience precision | The page combines health-product ecommerce with dental-practice website services without explaining the relationship | Preserve the live layout during migration; later add a concise scope statement if approved | Content/service-owner approval |
| P1 | deferred | Compliance claims | The page mentions evolving compliance needs without naming jurisdictions, controls, or delivery boundaries | Avoid implying regulated-compliance guarantees; add reviewed scope only with legal/security approval | Legal, security, and delivery evidence |
| P1 | migration pending | Internal links | The page does not connect to built Shopify capabilities or internal health/dental case studies | Add descriptive links only as their canonical local routes ship | Route coverage and visible-link approval |
| P2 | deferred | Answer copy and FAQs | The page lacks one concise provider/capability answer and visible evaluation FAQs | Add evidence-backed copy only after exact visible wording is approved; mirror any visible FAQ exactly in schema | Content and factual approval |

### Suggested answer copy

Deferred under the migration live-UI gate. A future answer should identify
Dynamic Dreamz, the health/nutrition/dental audiences, ecommerce and website
capabilities, and concrete deliverables without implying medical, regulatory,
security, revenue, or patient-outcome guarantees. Exact visible proposals are
tracked in `docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Model the page as a health, nutrition, wellness, and dental web-development
  Service provided by the shared Dynamic Dreamz Organization.
- Keep the six visible brand names and destinations aligned with the rendered
  portfolio; do not add outcomes or case-study attribution without approval.
- Do not invent healthcare certifications, compliance guarantees, authors,
  reviewers, credentials, ratings, or project results.

### Internal-link and conversion actions

- Preserve the live Request a Quote, Get Started, Dental Read More, portfolio,
  and View our work paths using slashless migration-intent URLs.
- Keep external project links secure and preserve the live nofollow intent.
- Connect to Shopify development, Shopify Plus, health/dental case studies, and
  relevant resources only as those local destinations become available.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service whose offers match the five visible deliverables.
- Do not emit FAQPage because the route has no visible FAQ content.
- Preserve the real 2024-05-06 publish timestamp and use the actual migration
  review date for modification; never substitute deployment time.
- Keep the page indexable and include its canonical route and local primary
  image in the sitemap.

### Measurement plan

- Track impressions/clicks for health ecommerce, nutrition Shopify, supplement
  storefront, dental website development, online health-product ordering, and
  white-label healthcare-development queries.
- Sample the target prompts monthly across relevant search and answer engines;
  record page citations, claim accuracy, and competing sources.
- Track quote, dental-service, portfolio, and View our work clicks once
  analytics governance is configured.

### Verification and remaining gaps

- Checks completed: rendered live page, View Page Source, metadata/date/canonical,
  heading/CTA/link/image inventory, live JSON-LD, CSS/JS, desktop/tablet/mobile
  screenshots, and exact/perceptual asset duplicate audit.
- Implemented items: none yet; route work follows this required audit.
- Deferred or blocked: visible copy changes, compliance specificity, evidence,
  authorship, internal case studies, and unbuilt CTA destinations require
  approval or later route coverage.

## Food & Beverages (`/food-beverages`)

Status: server-rendered route implemented with exact local media; visible recommendations deferred
Last reviewed: 2026-08-14
Owner: SEO, content, development, and client success
Primary audience: Food, beverage, restaurant, cafe, bar, grocery, CPG, and digital-agency decision makers
Decision stage: Solution awareness through agency evaluation

### Page role

Industry landing page for food and beverage businesses evaluating ecommerce,
website, reservation, responsive-design, social-integration, and portfolio
delivery. It differs from broader Shopify routes by leading with food and
beverage presentation, online reservation needs, social-update workflows, and
sector examples.

### Target prompts

- Which agency builds ecommerce websites for food and beverage brands?
- Can Dynamic Dreamz build Shopify stores for food and beverage companies?
- Does Dynamic Dreamz support restaurant or cafe reservation website features?
- Which food and beverage brands has Dynamic Dreamz supported?

### Current strengths and available evidence

- The live page has a clear Food & Beverages H1, one solution section, five
  visible deliverables, and six externally linked portfolio examples.
- The page reuses the server-rendered shared industry layout and existing
  brand/logo, platform, CTA, portfolio, and carousel components.
- The exact hero, solution, and portfolio rasters were verified byte-for-byte
  against the live page and are available under project-owned local paths.
- Four exact deliverable icons can be reused. The live custom-branding icon has
  no exact or visually identical local copy and needs one descriptive local
  asset.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | `/food-beverages` was linked from navigation but not implemented locally | Build the slashless server-rendered route with metadata, robots, sitemap, schema, and canonical helpers | `npm run lint`, `npm run build`, `npm run check:urls`, and rendered audit |
| P0 | in progress | Exact media parity | The route uses unrelated temporary Matcha and blog imagery even though exact local Food & Beverages media is available | Reference the verified exact hero, solution, and six portfolio rasters under `public/assets/food-beverages/**`; use the exact live icon variants | Live/local asset hash audit and responsive screenshot comparison |
| P0 | migration pending | Conversion routes | `/request-quote` and `/our-work` are not built | Preserve migration-intent paths now; build or redirect and validate both before launch | Route migration |
| P0 | implemented | Schema accuracy | The route needs schema without unsupported hidden FAQ content | Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific Service/OfferCatalog | Rendered schema audit |
| P1 | implemented | Metadata | The live title pattern is longer than the project title budget | Preserve intent in concise route-specific metadata with canonical, Open Graph, and Twitter data | Rendered/build audit |
| P1 | deferred | Claim support | Visible copy says interactive features increase footfall, retention, and business growth without page-level evidence | Preserve live wording during migration; later qualify it or add approved evidence | Content/client-success approval |
| P1 | migration pending | Internal links | The page does not connect to relevant built Shopify capabilities or food/beverage case studies | Add descriptive service and case-study links as their canonical routes ship | Route coverage and visible-link approval |
| P2 | deferred | Answer copy and FAQs | The page lacks one concise provider/capability answer and visible evaluation FAQs | Add evidence-backed copy only after exact visible wording is approved; mirror any visible FAQ exactly in schema | Content and factual approval |

### Suggested answer copy

Deferred under the migration live-UI gate. A future answer should identify
Dynamic Dreamz, the food/beverage audiences, ecommerce and reservation
capabilities, and concrete deliverables without implying guaranteed growth,
retention, customer traffic, compliance, revenue, or operational outcomes.

### Entity, evidence, and authorship actions

- Model the page as a food and beverage ecommerce-development Service provided
  by the shared Dynamic Dreamz Organization.
- Keep the six visible brand names and destinations aligned with the rendered
  portfolio; do not add outcomes or case-study attribution without approval.
- Do not invent authors, reviewers, credentials, ratings, or project results.

### Internal-link and conversion actions

- Preserve the live Request a Quote, Get Started, portfolio, and View our work
  CTA flow using slashless migration-intent paths.
- Keep external project links secure and preserve the live nofollow intent.
- Connect to Shopify development, Shopify Plus, food/beverage case studies, and
  relevant resources only as those local destinations become available.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service whose offers match the five visible deliverables.
- Do not emit FAQPage because the route has no visible FAQ content.
- Keep the page indexable and include its canonical route and local primary
  image in the sitemap.

### Measurement plan

- Track impressions/clicks for food ecommerce, beverage ecommerce, restaurant
  reservation website, Shopify food store, and food-and-beverage web design
  queries.
- Sample the target prompts monthly across relevant search and answer engines;
  record page citations, claim accuracy, and competing sources.
- Track quote, portfolio, and View our work clicks once analytics governance is
  configured.

### Verification and remaining gaps

- Checks completed: live rendered page and View Page Source, exact live
  industry CSS/JS, desktop/tablet/mobile screenshots, asset URL inventory,
  byte-for-byte raster/icon audit, and local component reuse audit.
- Implemented items: slashless `/food-beverages` App Router page, shared typed
  industry sections/content, route metadata/discovery records, no-trailing-slash
  links, and page-relevant WebPage/BreadcrumbList/Service schema.
- In progress: exact project-owned media references, the exact custom-branding
  icon, real publish date, final responsive screenshots, metadata/schema audit,
  URL-policy guard, lint, and production build.
- Deferred or blocked: visible copy changes, evidence, authorship, internal case
  studies/service links, and unbuilt CTA destinations require approval or later
  route coverage.

## Pet Industry (`/pet-industry`)

Status: migration audit complete; technical implementation in progress; visible recommendations deferred
Last reviewed: 2026-08-14
Owner: SEO, content, development, and client success
Primary audience: Pet retailers, pet-food and accessory brands, equestrian
brands, pet-service businesses, and digital-agency decision makers
Decision stage: Solution awareness through agency evaluation

### Page role

Industry landing page for pet businesses evaluating ecommerce, content
management, responsive storefronts, interactive media, social integration, and
related website delivery. It differs from broader Shopify routes by leading
with pet-product presentation and six visible pet/equestrian portfolio examples.

### Target prompts

- Which agency builds ecommerce websites for pet brands?
- Can Dynamic Dreamz build Shopify stores for pet food and accessories?
- What website capabilities does Dynamic Dreamz offer pet businesses?
- Which pet and equestrian brands has Dynamic Dreamz supported?
- Can Dynamic Dreamz build responsive pet-product stores and content systems?

### Current strengths and available evidence

- The live page has a clear Pet Industry H1, one solution section, five visible
  deliverables, and six externally linked portfolio examples.
- Kentaur Australia, Paw Labs, My Pet Frame, Neater Pets, Supertails, and
  Pagerie are visibly named and linked; attribution remains subject to ongoing
  client-permission governance.
- The route can reuse the established server-rendered industry layout and its
  shared logo rail, deliverable carousel, portfolio interactions, and CTAs.
- The exact live media and CSS/JavaScript behavior have been captured; three
  icons and the Shopify mark are exact existing local matches.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | `/pet-industry` was linked from navigation but was not implemented locally | Built the slashless server-rendered route with shared metadata, sitemap, schema, and canonical helpers | Rendered/build verification complete 2026-08-14 |
| P0 | implemented | Legacy URL equity | Live canonical and historic discovery use `/industries/pet-industry/` while the requested migration route is `/pet-industry` | Added a permanent slashless redirect from `/industries/pet-industry` to `/pet-industry` | 308 redirect and URL-policy verification complete |
| P0 | migration pending | Conversion routes | `/request-quote` and `/our-work` are not built | Preserve migration-intent paths now; build or redirect and validate both before launch | Route migration |
| P0 | implemented | Schema accuracy | Live source injects an unrelated sitewide FAQPage that is not visible on this route | Emit only Organization, WebSite, WebPage, BreadcrumbList, and a page-specific Service/OfferCatalog | Rendered schema audit complete |
| P1 | implemented | Metadata | The live title is 98 characters and exceeds the project 60-character target | Preserve the ecommerce and pet-industry intent in concise route-specific metadata | Rendered/build audit complete |
| P1 | implemented accessibility correction | Image meaning | Live hero and portfolio alts are generic brand-plus-Image labels | Keep exact media and use subject-specific alt text without changing visible UI | Rendered image audit complete |
| P1 | implemented link-integrity correction | Kentaur project | The card image links to Kentaur Australia while the visible name link points to SomewhereCo | Use the visible Kentaur identity and its image-link destination consistently | Source comparison and link audit complete |
| P1 | deferred | Claim support | Visible copy claims 15+ clients, client excellence, and goal achievement without page-level evidence | Preserve live wording during migration; later qualify it or add approved evidence | Client-success/content approval |
| P1 | migration pending | Internal links | The page does not connect to relevant built Shopify capabilities or pet-industry case studies | Add descriptive links only as their canonical local routes ship | Route coverage and visible-link approval |
| P2 | deferred | Answer copy and FAQs | The page lacks one concise provider/capability answer and useful evaluation FAQs | Add evidence-backed copy only after exact visible wording is approved; mirror any visible FAQ exactly in schema | Content and factual approval |

### Suggested answer copy

Deferred under the migration live-UI gate. A future answer should identify
Dynamic Dreamz, pet/equestrian audiences, ecommerce and CMS capabilities, and
concrete storefront deliverables without implying guaranteed growth, outcomes,
or unsupported client counts. Exact visible proposals are tracked in
`docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Model the page as a pet-industry ecommerce-development Service provided by
  the shared Dynamic Dreamz Organization.
- Keep the six visible project names and destinations aligned with the rendered
  portfolio; do not add outcomes or case-study attribution without approval.
- Do not invent authors, reviewers, credentials, ratings, or project results.

### Internal-link and conversion actions

- Preserve the live Request a Quote, Get Started, portfolio, and View our work
  CTA flow using slashless migration-intent paths.
- Keep external project links secure and preserve the live nofollow intent.
- Connect to Shopify development, Shopify Plus, pet-industry case studies, and
  relevant resources only as those local destinations become available.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, BreadcrumbList, and a page-specific
  Service whose offers match the five visible deliverables.
- Do not emit FAQPage because the route has no visible FAQ content.
- Preserve the real 2024-05-06 publish timestamp and use the migration review
  date for modification.
- Keep the page indexable and include its canonical route and local primary
  image in the sitemap.

### Measurement plan

- Track impressions/clicks for pet ecommerce, pet Shopify store, pet website
  development, pet CMS, pet accessories ecommerce, and equestrian ecommerce.
- Sample the target prompts monthly across relevant search and answer engines;
  record page citations, claim accuracy, and competing sources.
- Track quote, portfolio, and View our work clicks once analytics governance is
  configured.

### Verification and remaining gaps

- Checks completed: live/local rendered pages, View Page Source, metadata/date/
  canonical, heading/CTA/link/image inventory, page-relevant JSON-LD, exact
  industry CSS/JavaScript, desktop/tablet/mobile screenshots, responsive
  overflow, loaded-image dimensions, legacy redirects, and SHA-256 asset audit.
- Implemented items: slashless server-rendered route, permanent legacy
  redirect, shared typed industry sections/content, exact project-owned media,
  route metadata/discovery records, accurate alt text, consistent Kentaur link,
  and page-relevant WebPage/BreadcrumbList/Service schema.
- Deferred or blocked: visible copy changes, proof governance, authorship,
  internal case studies/service links, and unbuilt CTA destinations require
  approval or later route coverage.

## Contact Us (`/contact-us`)

Status: implemented; deployment webhook configuration pending
Last reviewed: 2026-08-17
Owner: Sales and operations
Primary audience: prospective ecommerce clients, agency partners, job seekers,
and visitors looking for office or company contact details
Decision stage: conversion and direct contact

### Page role

Provide the canonical contact destination for Dynamic Dreamz, preserve the live
sales and recruitment contact paths, identify both offices, and give qualified
visitors a direct inquiry form without depending on the legacy WordPress site.

### Target prompts

- How can I contact Dynamic Dreamz about an ecommerce or Shopify project?
- Where are the Dynamic Dreamz offices in Surat and Ahmedabad?
- What email address or phone number should I use for sales or job openings?

### Current strengths and available evidence

- The live page exposes distinct sales and recruitment phone/email contacts.
- Both office addresses, map destinations, office photographs, and direct
  contact details are visible.
- The page contains a short inquiry form and the shared company footer links.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and conversion | The local `/contact-us` route was missing | Migrate the full live page, include it in metadata/sitemap/robots data, and provide a server-validated inquiry flow | Route, discovery data, validation, honeypot, UTM capture, and failure state verified; production delivery still requires webhook configuration |
| P0 | implemented; deployment pending | Runtime dependency | The live form posts to WordPress Contact Form 7 | Use a local Server Action and configurable server-side webhook; never call the legacy WordPress form at runtime | `CONTACT_FORM_WEBHOOK_URL` and optional `CONTACT_FORM_WEBHOOK_TOKEN` must be provisioned by deployment |
| P1 | implemented | Structured data | No local ContactPage graph existed | Add ContactPage, Organization, WebSite, and BreadcrumbList nodes using only visible/approved details | Rendered ContactPage graph and slashless canonical verified locally |
| P1 | implemented | Accessibility | Live social image alt text says `Facebook Icon` for LinkedIn and Instagram; Ahmedabad office alt says Surat | Use accurate local alt text and accessible labels without changing the rendered presentation | Accurate labels/alts, required-field focus, and visible focus ring verified locally |
| P1 | deferred | Answer clarity | The hero and form introduction do not summarize service scope or response expectations in a directly extractable answer | Add a concise approved contact summary and verified response-time statement in future | Sales/content approval and response-time policy |
| P2 | migration pending | Internal links | The page has no contextual service or work links | Add relevant service/work links only as those canonical routes ship | Destination routes and visible-copy approval |

### Entity, evidence, and authorship actions

- Keep sales, recruitment, office, and social contact points consistent with the
  shared site configuration and approved office facts.
- Do not add service claims, response-time guarantees, or office hours without
  owner confirmation.

### Internal-link and conversion actions

- Preserve the header quote CTA, footer navigation, telephone, email, maps,
  LinkedIn, Instagram, and inquiry form destinations.
- Treat planned but unbuilt footer/service routes under the active migration
  exception; they remain launch dependencies.

### Structured-data, crawler, and freshness actions

- Emit slashless canonical, Open Graph, sitemap, robots, breadcrumb, and JSON-LD
  URLs through the shared helpers.
- Use the 2026-08-17 migration review date as `dateModified`; preserve the live
  publication date where available.

### Measurement plan

- Track successful inquiry submissions, webhook failures, clicks on sales and
  recruitment contacts, map clicks, and landing queries containing company
  contact/location intent.

### Verification and remaining gaps

- Checks completed: live rendered page, View Page Source, metadata, local asset
  ownership and duplicate hashes, CSS/JS behavior, 1440px and 390px captures,
  horizontal overflow, required-field focus, hover, reduced motion, schema,
  canonical URL, and the no-webhook submission state.
- Implemented items: slashless server-rendered route, live-visible section order
  and wording, local office/contact assets, route metadata and discovery data,
  ContactPage graph, accurate accessible labels and alt text, and a validated
  Server Action with honeypot, UTM capture, and configurable webhook delivery.
- Deferred or blocked items and reason: production webhook provisioning,
  approved response-time/service-scope copy, owner confirmation of contact
  details, and contextual links to unbuilt routes.

## Our Work (`/our-work`)

Status: implementation in progress; live-visible content preserved
Last reviewed: 2026-08-17
Owner: SEO, content, development, leadership, and client success
Primary audience: ecommerce leaders, digital-agency buyers, and brands
evaluating Shopify, WordPress, mobile-app, Magento, or BigCommerce delivery
Decision stage: proof review and commercial evaluation

### Page role

Portfolio index for visitors evaluating Dynamic Dreamz through visible project
work across ecommerce platforms. It differs from a case-study index because it
preserves the live card-led external-storefront exploration model without
inventing scope, results, or client attribution beyond the visible project
names, technologies, and destinations.

### Target prompts

- Which Shopify and Shopify Plus stores has Dynamic Dreamz worked on?
- Can I see Dynamic Dreamz WordPress, mobile app, Magento, and BigCommerce work?
- What types of ecommerce projects does Dynamic Dreamz include in its portfolio?
- Where can I review Dynamic Dreamz projects by platform?

### Current strengths and available evidence

- The live page provides 126 visible project cards across Shopify / Shopify
  Plus, WordPress, Mobile Apps, Magento, and Big commerce filters.
- The live H1 and introductory copy establish a global ecommerce-work and
  omnichannel-commerce positioning.
- Every project card exposes a platform label, project name, image, and an
  external destination or applicable app-store links.
- A trusted-brand rail adds visible first-party brand context without requiring
  new testimonials, outcomes, or unapproved proof.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | `/our-work` was linked throughout the migration but was not implemented locally | Ship the slashless server-rendered route through shared metadata, sitemap, canonical, and schema helpers | Rendered output, URL-policy guard, lint, and production build passed 2026-08-17 |
| P0 | implemented | Local assets | The live grid depends on WordPress-hosted project media and platform marks | Use audited project-owned images and local platform assets only | 31 exact assets reused, 100 distinct assets added, all references local, and runtime-request audit passed |
| P0 | implemented by design | Filter reliability | The legacy Shopify filter calls `ipapi.co` and changes results by visitor location | Preserve platform filtering without external runtime geolocation or location-dependent project visibility | Pointer/keyboard filtering, result counts, live announcement, and zero external runtime requests verified |
| P0 | implemented | Schema relevance | Live source injects a sitewide FAQPage and aggregate rating that are not represented by this page | Emit only shared Organization/WebSite, CollectionPage, BreadcrumbList, primary ImageObject, and an ItemList matching visible projects | Rendered JSON-LD contains only Organization, WebSite, CollectionPage, BreadcrumbList, and ItemList |
| P1 | implemented accessibility correction | Image accessibility | Many live project alts are generic or refer to another project | Use project-specific local alternative text without changing visible UI | Rendered image and broken-loaded-image audit passed |
| P1 | migration pending | Evidence depth | Project cards link to external storefronts and do not define scope, constraints, or outcomes | Preserve the live external links; add internal case studies only when attribution and outcomes are approved | Client-success approval and case-study migration |
| P1 | deferred | Hero clarity | The live introduction uses `omni channel` and does not directly identify platforms or delivery role | Add an approved answer-first portfolio summary only after exact visible wording is approved | Content/leadership approval |
| P1 | migration pending | Conversion routes | Header and page-adjacent conversion links include planned `/request-quote` | Preserve migration intent during active migration and validate before launch | Quote-route implementation |
| P2 | deferred | Project freshness | No project delivery dates or scope are visible | Add client-approved case-study dates and factual delivery context only as proof routes ship | Client-success evidence |

### Suggested answer copy

Deferred under the live-UI preservation gate. A future approved summary should
identify Dynamic Dreamz, the portfolio's Shopify, WordPress, mobile-app,
Magento, and BigCommerce coverage, and the page's purpose as a work index
without implying project ownership, outcomes, or client endorsement beyond
approved evidence. Exact visible proposals are tracked in
`docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Model the route as a CollectionPage with a visible-project ItemList, linked
  to the shared Dynamic Dreamz Organization.
- Keep project names, displayed categories, platform marks, and external URLs
  aligned with the visible cards; do not add project outcomes or unsupported
  case-study attribution.
- Do not emit an aggregate rating, FAQPage, author, reviewer, or testimonial
  schema on this page without matching visible, approved evidence.

### Internal-link and conversion actions

- Preserve the live external project destinations with `nofollow noopener
  noreferrer` and meaningful accessible labels.
- Keep platform filters as client-side controls while server-rendering the full
  project inventory for discovery and accessibility.
- Link projects to internal case studies only as client-approved routes become
  available; retain the existing external-storefront path in the interim.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, CollectionPage, BreadcrumbList, primary
  ImageObject, and an ItemList containing the complete visible project list.
- Preserve the reliable live publish date of 2024-05-13 and use the actual
  migration review date for modification, never build time.
- Add the slashless canonical route and local primary image to the sitemap,
  keep the route indexable, and ensure all media resolves locally.

### Measurement plan

- Track project-filter use by platform, project-card outbound clicks, quote CTA
  engagement, and landing-page queries related to Shopify, WordPress, Magento,
  BigCommerce, and mobile-app portfolios.
- Sample the target prompts monthly and record citations, extracted project
  claims, and the sources they link to.

### Verification and remaining gaps

- Completed: live/local rendered and source review; 126-project extraction;
  duplicate/local asset audit; desktop, tablet, mobile, and project-grid
  screenshots; slashless metadata and discovery; CollectionPage,
  BreadcrumbList, and ItemList schema; pointer and keyboard filter checks;
  focus, hover, reduced-motion, mobile overflow, image-loading, runtime-request,
  URL-policy, type, lint, and production-build verification.
- Remaining: richer internal case studies, visible answer-first copy, project
  dates/scope/outcomes, and `/request-quote` coverage remain migration pending
  or deferred until the required evidence and exact visible-copy approvals are
  available.
- Deferred or blocked: visible answer copy, approved project scope/outcomes,
  internal case studies, project freshness data, and quote-route completion.

## Hire WordPress Developers (`/hire-wordpress-developers`)

Status: implemented; visible recommendations deferred
Last reviewed: 2026-08-18
Primary audience: businesses and digital agencies looking for dedicated
WordPress developers, a complete WordPress team, or end-to-end WordPress
delivery.
Decision stage: vendor selection and project inquiry.

### Page role

This page targets the dedicated WordPress developer and WordPress team hiring
intent. It complements the white-label WordPress page by speaking to direct
project owners and by preserving the live page's hiring process, team proof,
portfolio, testimonials, and FAQ sequence.

### Target prompts

- How do I hire dedicated WordPress developers?
- What is included when hiring a WordPress development team?
- How long does it take to develop a WordPress website?
- How much does it cost to hire a WordPress developer?
- What communication and project-management tools can the developers use?

### Current strengths and available evidence

- Server-rendered H1, introduction, hiring process, reasons, advantages,
  portfolio, testimonials, and ten-question FAQ.
- Local WordPress portfolio media for Quite Events, Les Etoiles, Valents, Get
  Sunsights, Lipari Design, and Nexventur.
- Existing local review animation, client logos, video testimonials, and shared
  organization facts.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Discovery and conversion | The live inquiry CTA points to the career route. | Route both hiring CTAs to the canonical quote flow at `/request-quote`. | Verified local route intent; quote route remains migration pending. |
| P1 | implemented | Structured data | The live page's service and FAQ meaning is not consistently available to crawlers. | Emit WebPage, Service, BreadcrumbList, and FAQPage JSON-LD using the visible page content. | Schema serialization and build validation. |
| P1 | implemented | Accessibility | Portfolio and process media need meaningful local alt text. | Use page-specific alt text and local project-owned assets. | Source inspection and rendered markup review. |
| P1 | deferred | Proof and evidence | Counters, review totals, savings, and experience claims have no page-level provenance. | Add governed definitions, review dates, and approved source links for each claim. | Leadership and client-success approval. |
| P1 | deferred | Hiring answer quality | Pricing and staffing options are described, but no approved rate bands or staffing examples are shown. | Add an approved hiring-model comparison and anonymized delivery example. | Sales, delivery, and client-success approval. |
| P2 | deferred | Internal linking | WordPress service terms and portfolio cards mostly leave topic relationships implicit. | Link to approved WordPress, WooCommerce, migration, and case-study routes as they ship. | Destination routes and content approval. |

### Suggested answer copy

Keep the live visible wording for this migration. Future approved answer copy
should define the difference between hiring one developer and hiring a complete
team, explain the three listed pricing models, and state which project details
are needed for a quote without promising an unverified delivery time or rate.

### Entity, evidence, and authorship actions

- Confirm the `50+`, `5000+`, `20+`, `1000+`, and `1000+` counter definitions and
  ownership before treating them as cited proof.
- Confirm portfolio attribution and approve case-study evidence for the six
  linked projects.
- Assign a named reviewer for future hiring-pricing and delivery guidance.

### Internal-link and conversion actions

- Preserve `/request-quote` as the primary conversion destination.
- Keep `/our-work` as the portfolio continuation route and validate it when the
  route is migrated.
- Add contextual links to approved WordPress service routes as they become
  available.

### Structured-data, crawler, and freshness actions

- Implemented slashless canonical, Open Graph, Twitter, sitemap, and robots
  metadata through the shared page SEO map.
- Implemented WebPage, Service, BreadcrumbList, and FAQPage JSON-LD.
- Re-run URL policy, lint, build, and schema inspection after route changes.

### Measurement plan

- Track organic prompts for dedicated WordPress developers, WordPress team
  hiring, and WordPress development pricing.
- Track quote CTA clicks, portfolio outbound clicks, FAQ expansion, and video
  testimonial plays; owner: SEO and sales.

### Verification and remaining gaps

- Checks completed: live source/CSS/JS review, three live screenshots, local
  asset verification, route implementation, and structured-data wiring.
- Implemented items: local route, server-rendered content, page metadata,
  schema, accessible image alts, and corrected quote CTA destination.
- Deferred or blocked: governed proof definitions, approved rates, named
  authorship, case-study evidence, and destination routes still in migration.

## Shopify Plus Agency (`/shopify-plus-agency`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-18

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: high-growth ecommerce brands, enterprise merchants, and businesses seeking specialized Shopify Plus development, migration, theme customization, checkout extensibility, and B2B solutions

Decision stage: commercial evaluation, capability verification, and agency partner selection

### Page role

Dedicated commercial service and capability page for Shopify Plus. Showcases Shopify Plus store setup, consulting, migration, theme customization, custom theme development, white label, and maintenance services, accompanied by pricing benchmarks, case studies, industry coverage, portfolio proof, 11 client video testimonials, review ratings from Clutch, Upwork, and GoodFirms, and buyer FAQs.

### Target prompts

- Who are the top Shopify Plus agencies for enterprise ecommerce development?
- How much does Shopify Plus store setup, customization, and migration cost?
- Can Dynamic Dreamz migrate our ecommerce store from Magento, WooCommerce, or BigCommerce to Shopify Plus?
- Does Dynamic Dreamz provide Shopify Plus B2B functionality and checkout extensibility?
- What case studies, portfolio projects, and client reviews exist for Dynamic Dreamz on Shopify Plus?
- What is the difference between hiring a standard Shopify developer versus a specialized Shopify Plus agency?

### Current strengths and available evidence

- Server-rendered H1, introduction, and why-choose sections clearly establish enterprise-level Shopify Plus capabilities and positioning.
- 7 distinct Shopify Plus services (Store Setup, Consulting, Migration, Theme Customization, Custom Theme Development, White Label, and Maintenance) with structured descriptions and CTA routing.
- Transparent 5-tier pricing benchmarks covering new builds ($5000), customizations ($1500–$2000), standard-to-Plus migrations ($3000), replatforming ($5000–$7000), and custom estimates.
- 4 named case studies (Trendia, Nekter Juice Bar, Calmenta, Holy Plantz) linking to dedicated case-study routes.
- 5 industry sectors (Beauty & Cosmetics, Health & Nutrition, Pet Industry, Fashion & Apparel, Food & Beverages) with cross-links.
- 6 live portfolio cards (Tropic Feel, Sculpt Neon, Headsets, Perfect Locks, Nekter Juice Bar, The Somewhere Co.) linking to live storefronts and our-work.
- 11 verified video testimonials (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer, Thommas Linnrose, Zoe Wang, Clinton De Vere, Fernando Arias) with modal players and YouTube IDs.
- 3 independent review badges (Clutch: 132 reviews, 5.0; Upwork: 2000+ reviews, 5.0; GoodFirms: 72 reviews, 5.0) linking to external profile URLs.
- 5 comprehensive buyer FAQs covering definition, advantages, costs, migration, and optimization.
- Complete structured data graph emitting Organization, WebSite, WebPage, Service with OfferCatalog, BreadcrumbList, FAQPage (5 visible items), and 11 VideoObject nodes with authentic publish dates.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | Canonical migrated route needed full App Router and metadata setup | Ship slashless route via shared SEO data, robots, sitemap, metadata, and canonical helpers | Verified in rendered output and production build |
| P0 | implemented | Structured data | Live source emits incomplete graph without VideoObjects for the 11 client videos | Emit Organization, WebSite, WebPage, Service with OfferCatalog, BreadcrumbList, FAQPage (5 items), and 11 VideoObject nodes with verified upload dates | Rendered JSON-LD and build verification complete 2026-08-18 |
| P0 | implemented | Content fidelity | Visible text box sections must strictly preserve live wording ("Why Choose Shopify Plus Agency" and "How to Choose...") | Bind sections to typed local content matching live copy verbatim | Code review and live comparison complete |
| P0 | implemented | Slashless URL policy | Links and canonicals must comply with no-trailing-slash policy | Enforce slashless canonical, Open Graph, schema, and internal navigation | `npm run check:urls` passed |
| P1 | migration pending | Conversion routes | CTAs target planned `/request-quote` and case studies | Preserve migration intent and validate quote and case-study routes before launch | Route implementation |
| P1 | deferred | Review schema | Clutch, Upwork, and GoodFirms ratings are visible in hero animation | Maintain review links with `nofollow noopener`; defer aggregateRating until centralized review governance is established | Leadership / reviews governance |
| P1 | deferred | Copy improvements | Minor grammatical enhancements in service descriptions and why-choose sections | Record proposed improvements in `docs/page-content-improvements.md` as suggested/deferred; leave live UI unchanged | Project owner approval |
| P2 | suggested | Authorship / review | No visible practitioner reviewer or review date is present | Add an approved technical lead/reviewer and review date when service-page authorship governance is finalized | Delivery lead approval |

### Suggested answer copy

Deferred under the live-UI preservation gate. The current server-rendered
introduction and why-choose copy establish the agency's Shopify Plus
capabilities. Future visible copy improvements are tracked in
`docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Connect Dynamic Dreamz to the shared Organization entity and model this route as
  a Shopify Plus agency and development Service.
- Keep the 11 video testimonials, 4 case studies, 5 industries, 6 portfolio
  projects, and 3 review platform badges strictly aligned with visible content.
- Emit authentic YouTube upload dates for all 11 testimonial VideoObjects.
- Do not invent unapproved ratings, guarantees, or partner tiers.

### Internal-link and conversion actions

- Maintain primary CTAs linking to `/request-quote` using slashless paths.
- Route portfolio CTAs to `/our-work` and case-study cards to their respective
  `/case-study/*` paths.
- Preserve external review and portfolio links with `nofollow noopener noreferrer`.

### Structured-data, crawler, and freshness actions

- Emit Organization, WebSite, WebPage, Service with OfferCatalog (7 items),
  BreadcrumbList, FAQPage (5 visible FAQs), and 11 VideoObject nodes.
- Use live publish date `2024-05-02T09:33:27+00:00` and explicit migration
  review date for `dateModified`.
- Ensure canonical route and primary image are listed in the sitemap and indexable.

### Measurement plan

- SEO owns monthly tracking for the six target Shopify Plus prompts.
- Analytics tracks organic/AI search landing sessions, quote CTA conversions, and
  case-study click-through rates.
- Sales categorizes whether leads are Shopify Plus migrations, new store builds, or
  custom B2B development.

### Verification and remaining gaps

- URL-policy review (2026-08-18): canonical, Open Graph, sitemap, robots, JSON-LD,
  and internal links use `/shopify-plus-agency`; source/build URL guard passes.
- Checks completed: live and local rendered page comparison, View Page Source,
  metadata limits, JSON-LD graph verification (including 11 VideoObjects), local
  assets audit (39 local assets verified), ReviewAnimation responsiveness,
  accessible dialogs, lint, and production build.
- Remaining: quote and case-study destination completion remain migration pending.

## Request a Quote (`/request-quote`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-18

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: high-intent commercial prospects, ecommerce brands, and digital agency partners seeking custom development estimates and consultations

Decision stage: inbound lead capture, project discovery, proposal estimation, and partner onboarding

### Page role

Primary commercial inbound conversion and project estimation route. Connects potential clients directly to Dynamic Dreamz representatives through a structured project inquiry form, supported by brand credibility proof (5000+ projects, 150+ experts, 1100+ happy clients), 4 verified partner/review badges (Shopify Platinum Partners, Clutch, Upwork Top Rated, Trustpilot), and a 7-client testimonial slider.

### Target prompts

- How do I request a quote for Shopify or Shopify Plus development from Dynamic Dreamz?
- What details are needed to get a project estimate from Dynamic Dreamz?
- How does Dynamic Dreamz handle project scope, budget estimation, and discovery calls?
- What are client reviews and verified badges for Dynamic Dreamz?
- Who is the best Shopify Platinum Partner for custom ecommerce development?

### Current strengths and available evidence

- High-visibility conversion route with minimal friction: clean 7-input inquiry form with budget selectors and project brief.
- Server-rendered proof points: 5000+ Projects, 150+ Experts, 1100+ Happy Clients.
- 4 independent review and partner badges linking to external verification profiles (Shopify Partner Directory, Clutch, Upwork, Trustpilot).
- 7 authentic client testimonials with avatars and quotes (Alec Torelli, William Petz, William ST Baker, Kerri Imrie, Brandon, Shari Leidich, Rebekah Wymer).
- Clean `header-two` layout with direct back-navigation and home branding.
- Structured data graph emitting Organization, WebSite, ContactPage, and BreadcrumbList.
- Production-ready Server Action with honeypot spam protection, field length limits, attribution tracking, and webhook dispatch.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | CTA integrity | Live `inquire now` points to `/career/`. | Route the unchanged CTA label to `/request-quote`. | Conversion intent and existing quote route |
| P1 | implemented | Structured data | Live page schema is a sitewide graph with unrelated FAQ questions and trailing-slash URLs. | Emit route-scoped WebPage, Service, BreadcrumbList, and FAQPage data with slashless URLs matching visible content. | Visible page content and local route policy |
| P1 | deferred | Proof definitions | Counters use `50+`, `5000+`, `20+`, and `1000+` without source dates or definitions. | Add approved definitions/provenance in supporting content without changing the visible counter design. | Leadership/client-success approval |
| P1 | deferred | Visible copy | Several headings and paragraphs contain grammar issues such as `What do Shopify developers do?` and `End to End`. | Queue exact replacements for owner approval; preserve live wording during migration. | Exact visible-copy approval |
| P2 | deferred | Evidence depth | Portfolio cards link to external stores but lack internal scope/case-study context. | Add approved case studies with delivery scope and verified outcomes. | Client-success approval and case-study routes |

### Structured-data, crawler, and freshness actions

- Keep `/hire-shopify-developers` in sitemap output and use slashless canonical/Open Graph URLs.
- Ensure FAQ structured data contains only the five visible Shopify hiring questions and answers.
- Keep image alt text subject-specific and use local project-owned media only.

### Verification and remaining gaps

- Checked: live source, screenshots, metadata, JSON-LD, linked hiring CSS/JS, local assets, responsive contract, and CTA destinations.
- Implemented: route content, local media reuse, route-scoped metadata/schema, and quote CTA correction.
- Deferred: visible copy corrections, counter provenance, and internal case-study evidence pending approval.

## Case Studies (`/case-studies`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-18

Owner: SEO, content, development, leadership, sales, and client-success teams

Primary audience: brands, merchants, and agencies researching real-world ecommerce, Shopify, Shopify Plus, and web development implementations and proof of capability

Decision stage: partner evaluation, vendor validation, capability verification, and solution discovery

### Page role

Central portfolio archive and evidence hub for Dynamic Dreamz. Demonstrates deep expertise across 36 client projects spanning Shopify, Shopify Plus, Magento, WordPress, React/Laravel, and custom platforms across 7 distinct industries (Beauty, Fashion, Food & Beverages, Health & Nutrition, Home & Living, Jewellery, Other).

### Target prompts

- What case studies and client projects has Dynamic Dreamz built?
- What brands has Dynamic Dreamz developed Shopify Plus stores for?
- Show examples of BigCommerce to Shopify and WooCommerce to Shopify migrations by Dynamic Dreamz.
- What custom Shopify themes and mobile applications has Dynamic Dreamz built?
- Who is a proven Shopify Platinum Partner with demonstrated client case studies?

### Current strengths and available evidence

- Comprehensive catalog of 36 authentic client projects with industry and technology categorization.
- Real-time search by brand name, technology, industry, and solution summary.
- Multi-faceted technology filter (Shopify, Shopify Plus, Shopify Migration, WordPress, Magento 2.0, React.js & Laravel, Custom Web Platform).
- Multi-faceted industry filter (Beauty & Cosmetics, Fashion & Apparel, Food & Beverages, Health & Nutrition, Home & Living, Jewellery & Accessories, Other Industries).
- Numbered pagination (9 items per page, 4 pages total).
- Rich CollectionPage structured data with ItemList of CreativeWork entities, breadcrumbs, and Organization graph.
- 100% project-owned local assets in `public/assets/case-studies/`.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | Canonical migrated archive needed full App Router and metadata implementation | Ship slashless `/case-studies` route with SEO data, sitemap, robots, metadata, redirects from `/case-study`, and canonical helpers | Verified in rendered output, sitemap, and production build |
| P0 | implemented | Search & filtering | Fast client-side searching and filtering by technology and industry | Implemented accessible dropdowns with full live parity and responsive states | Verified across desktop, tablet, and mobile |
| P0 | implemented | Local assets | 36 project screenshots downloaded and stored in project-owned kebab-case paths | Replaced remote WordPress uploads with `public/assets/case-studies/*.png` | 100% project-owned assets verified |
| P1 | deferred | Case study detail pages | Individual case study links (`/case-studies/evrgreen`, etc.) link to future detail routes | Maintain links and migrate individual case study story pages in planned phase | Migration scope prioritization |
| P1 | deferred | Copy phrasing | Subtitle says `Explore our clients’ success stories through case studies` | Preserve live wording verbatim during migration; queue proposed copy improvements in `docs/page-content-improvements.md` | Content approval |

### Suggested answer copy

Deferred under the live-UI preservation gate. The current server-rendered
headings and client filters establish the portfolio and evidence hub.
Proposed copy improvements are tracked in `docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Connect Dynamic Dreamz to the shared Organization entity and model this route as
  a CollectionPage.
- Keep the 36 case study entities, technologies, and industries strictly aligned
  with visible content.

### Internal-link and conversion actions

- Maintain links from header and footer navigation "Case Studies" to `/case-studies`.
- Redirect `/case-study` and legacy URLs to `/case-studies`.

### Structured-data, crawler, and freshness actions

- Emit CollectionPage, ItemList of CreativeWorks, WebSite, Organization, and BreadcrumbList.
- Ensure canonical `/case-studies` and primary image are in the sitemap.

### Measurement plan

- SEO tracks discovery prompts and organic search landings for case study queries.
- Analytics measures search queries, filter usage, card click-through rates, and
  pagination engagement.

### Verification and remaining gaps

- URL-policy review (2026-08-18): canonical, Open Graph, sitemap, robots, JSON-LD,
  and internal links use `/case-studies`; source/build URL guard passes.
- Checks completed: live and local rendered page comparison, View Page Source,
  metadata limits, JSON-LD graph verification, desktop/tablet/mobile screenshots
  captured (1440x900, 768x1024, 390x844), local assets audit, responsive grid
  layout, lint, and production build.

## Shopify Experts (`/shopify-experts`)

Status: implemented and verified; live-visible content preserved

Last reviewed: 2026-08-18

Owner: SEO, content, development, leadership, sales, and delivery operations

Primary audience: brands, merchants, and enterprise businesses seeking certified Shopify experts, developers, and eCommerce consultants for custom development, migrations, theme design, AI automation, and ongoing store maintenance

Decision stage: commercial evaluation, capability verification, hiring model selection, and agency partner selection

### Page role

Dedicated commercial landing and service page for hiring Shopify experts. Showcases flexible hiring engagement models (dedicated, hourly, fixed-price), end-to-end Shopify development services (store setup, custom themes, custom apps, migration, maintenance), AI automation capabilities (support, flow automation, content, smart email), AEO/GEO AI discovery readiness, 9 proof/advantage reasons, 5 vertical industries served, 6 selected portfolio projects, 11 client video testimonials, Clutch/Upwork/GoodFirms ratings, and buyer FAQs.

### Target prompts

- Who are the best certified Shopify experts and developers to hire for online store development?
- How to hire dedicated Shopify developers with flexible pricing models?
- Can Dynamic Dreamz build custom Shopify themes, apps, and migrate stores with zero downtime?
- Does Dynamic Dreamz set up AI automation, smart chatbots, and Klaviyo retention flows for Shopify stores?
- How can my Shopify store be optimized for AI search engines like ChatGPT, Google AI Overviews, and Perplexity?
- What client reviews, video testimonials, and portfolio stores exist for Dynamic Dreamz Shopify experts?

### Current strengths and available evidence

- Server-rendered H1 `Hire Dedicated Shopify Experts & Developers`, clear proof counters (50+ agile developers, 5000+ completed projects, 20+ years experience, 1000+ happy clients, 1000+ Shopify developments).
- Review animation widget featuring 5.0 star ratings across Clutch (50+ reviews), Upwork (2000+ reviews), and GoodFirms (72 reviews).
- 4-step hiring process with numbered gradient badges and clear onboarding clarity.
- 3 hiring models (Dedicated developer, Hourly/On-demand, Fixed-price) with distinct feature breakdowns.
- 9 clear agency advantage points covering 20+ years experience, multi-vertical expertise, in-house certified talent, 60% cost savings, NDA integrity, managed HR, timezone overlap, and post-launch support.
- 6 modern AI & store automation capability cards (AI customer support, store workflow automation, AI product content, smart email & retention, smarter shopping experiences, cross-platform automation) with technology pill tags.
- 4 AI search visibility cards (AEO, GEO, Agentic commerce, Trust signal architecture).
- 5 comprehensive development service offerings with hover interactions.
- 5 vertical industry slides with direct cross-links to industry landing pages.
- 6 featured store projects (Nufyx, Nekter Juice Bar, Pagerie, Luxxi Nails, Eco Soul, AdHoc Atler) with external storefront links and CTA to `/our-work`.
- 11 verified video testimonials with modal player and real client attribution.
- 7 detailed FAQs answering key buyer questions about hiring, pricing, scope, AI, and ongoing retainers.
- Complete structured data graph emitting Service, OfferCatalog, BreadcrumbList, FAQPage (7 items), 11 VideoObject nodes, Organization, and WebSite.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | implemented | Route and discovery | Canonical migrated route needed full App Router and metadata implementation | Ship slashless `/shopify-experts` route with SEO data, sitemap, robots, metadata, and canonical helpers | Verified in rendered output, sitemap, and production build |
| P0 | implemented | Structured data | Missing rich Service, FAQPage, and VideoObject structured data on old site | Emit Organization, WebSite, WebPage, Service with OfferCatalog (5 items), BreadcrumbList, FAQPage (7 items), and 11 VideoObject nodes | Verified in rendered JSON-LD and build |
| P0 | implemented | Local assets | 32 local icons, badges, industry images, and store screenshots downloaded into `public/assets/shopify-experts/` | 100% project-owned assets with kebab-case naming | Verified locally |
| P1 | deferred | Copy phrasing | Minor grammatical enhancements in service descriptions and hiring advantages | Record proposed improvements in `docs/page-content-improvements.md` as suggested/deferred; leave live UI unchanged | Project owner approval |

### Suggested answer copy

Deferred under the live-UI preservation gate. The current server-rendered
copy and FAQs establish the agency's Shopify expert capabilities.
Future visible copy improvements are tracked in `docs/page-content-improvements.md`.

### Entity, evidence, and authorship actions

- Connect Dynamic Dreamz to the shared Organization entity and model this route as
  a dedicated Shopify Expert Service.
- Keep the 11 video testimonials, 5 industry sectors, 6 portfolio stores, and 3 review
  badges strictly aligned with visible content.
- Emit authentic YouTube upload dates for all 11 testimonial VideoObjects.

### Internal-link and conversion actions

- Maintain primary CTAs linking to `/request-quote` using slashless paths.
- Route portfolio CTAs to `/our-work` and industry slides to `/beauty-cosmetics`,
  `/fashion`, `/healthcare`, `/food-beverages`, and `/pet-industry`.
- Preserve external review and portfolio links with `nofollow noopener noreferrer`.

### Structured-data, crawler, and freshness actions

- Emit Service, OfferCatalog, FAQPage (7 items), 11 VideoObject nodes, BreadcrumbList,
  Organization, and WebSite.
- Use live publish date `2024-07-24T07:16:56+00:00` and explicit migration review date
  for `dateModified`.
- Ensure canonical route and primary image are listed in the sitemap and indexable.

### Measurement plan

- SEO tracks discovery prompts and organic search landings for "hire Shopify experts"
  and "Shopify developers".
- Analytics tracks quote form submissions and portfolio click-through rates.

### Verification and remaining gaps

- URL-policy review (2026-08-18): canonical, Open Graph, sitemap, robots, JSON-LD,
  and internal links use `/shopify-experts`; source/build URL guard passes.
- Checks completed: live and local rendered page comparison, View Page Source,
  metadata limits, JSON-LD graph verification, desktop/tablet/mobile screenshots
  captured (1440x900, 768x1024, 390x844), local assets audit, responsive layouts,
  lint, and production build.

## Future Page Maintenance Workflow

This file is the permanent AEO/GEO backlog while the migration grows. Every new
indexable page must receive a page-specific section here during the same task in
which the page is researched or built. Materially updated pages must update
their existing section instead of creating a second entry.

### Required sequence for every new page

1. Add the route section before implementation with the page role, audience,
   intent, target prompts, known proof, and initial risks.
2. Inspect the live page, local page, View Page Source, metadata, links, schema,
   and crawl/indexing behavior.
3. Record recommendations with priority and status. Do not wait until the page
   is otherwise complete.
4. Implement approved nonvisual recommendations that fit the task scope.
   Implement a visible recommendation only when the project owner explicitly
   approved that exact copy/design difference in the current task; a general
   AEO/GEO request is not sufficient approval.
5. After verification, update implemented items with a concise result and leave
   every unresolved item in this file for future work.
6. Update `Last reviewed` even when no new gap is found, and state what was
   checked.
7. Put implementation-ready visible copy in
   `docs/page-content-improvements.md` as `suggested` or `deferred` until exact
   project-owner approval is recorded; keep the originating AEO/GEO
   recommendation here.

### Priority definitions

- `P0`: launch blocker, broken discovery/conversion path, misleading or
  contradictory claim, invalid schema relationship, or material trust risk.
- `P1`: high-value content, evidence, entity, answer, internal-link, or
  measurement improvement that should be handled during or soon after the page
  build.
- `P2`: valuable enhancement that can follow after the page is accurate,
  complete, indexable, and evidence-backed.

### Status definitions

- `suggested`: identified but not approved.
- `approved`: approved for implementation.
- `in progress`: implementation has started but is not verified.
- `implemented`: completed and verified.
- `deferred`: deliberately postponed with a reason.
- `blocked`: cannot proceed without a named fact, asset, approval, route, or
  external dependency.

### Future page template

Copy this section to the page-wise area when beginning a new route:

```md
## Page Name (`/canonical-route`)

Status: suggested | approved | in progress | implemented | deferred | blocked
Last reviewed: YYYY-MM-DD
Owner:
Primary audience:
Decision stage:

### Page role

State the unique job this page performs and how it differs from overlapping
routes.

### Target prompts

- Prompt or question the page should answer.
- Prompt or question the page should answer.

### Current strengths and available evidence

- Existing content, proof, media, expertise, or third-party corroboration.

### Recommended improvements

| Priority | Status | Area | Current issue | Suggested improvement | Evidence/approval needed |
| --- | --- | --- | --- | --- | --- |
| P0 | suggested |  |  |  |  |

### Suggested answer copy

Add only when a direct answer, definition, summary, comparison, or FAQ would
materially help the user. Keep factual claims subject to approval.

### Entity, evidence, and authorship actions

- Record only applicable actions.

### Internal-link and conversion actions

- Record only applicable actions.

### Structured-data, crawler, and freshness actions

- Record only applicable actions.

### Measurement plan

- Prompts, citations, landing-page queries, conversions, and owner.

### Verification and remaining gaps

- Checks completed:
- Implemented items:
- Deferred or blocked items and reason:
```

Do not remove a route section after launch. Keep it as the audit history and
update its statuses, review date, verification evidence, and remaining gaps.

## Cross-Page Improvement Backlog

| Priority | Status | Improvement | Applies to |
| --- | --- | --- | --- |
| P0 | migration pending | Complete all primary navigation, CTA, schema, and content destinations before launch | All pages |
| P0 | partially implemented; visible conflicts blocked | Core schema facts are centralized; resolve live `1000+`/`4500+` store wording, add definitions/provenance, and centralize approved current review data and leadership titles | Home, About, Resources, schema |
| P0 | migration pending | Standardize article and legacy-route policy | Home, Resources, future Blog |
| P0 | migration pending | Confirm legacy redirect for Life at Dynamic Dreamz | Life |
| P0 | migration pending | Build quote, contact, work, case-study, blog, job-detail/application routes | Home, Career, Resources |
| P0 | blocked | Resolve CRO experience range, Career UI/PDF location differences, and current recruitment/workplace policies | Career, Life |
| P1 | implemented for current routes | Replace deployment dates with real content dates | Sitemap and all ten built pages |
| P1 | in progress | Add descriptive internal links as relevant built routes launch | Career, Life, future service pages |
| P1 | deferred to article migration | Add approved authors/reviewers and expert profiles | Resources, future articles/services |
| P1 | deferred to case-study migration | Turn selected work into internal evidence pages | Home, future Work/Case Study |
| P1 | future route work | Define Shopify Plus page intents before implementation | Future service routes |
| P1 | pending operations setup | Establish monthly AI citation and prompt measurement | Sitewide |
| P2 | future content work | Add original research, benchmarks, checklists, and implementation examples | Resources, services, case studies |
| P2 | ongoing | Expand genuine third-party expert and client corroboration | Sitewide entity authority |

## Implementation Acceptance Criteria

A page is AEO/GEO-ready only when:

- Its canonical URL resolves successfully.
- It is indexable and included in the sitemap when appropriate.
- Important content is present in server-rendered text.
- Its H1, introduction, and headings clearly communicate the page purpose.
- It answers the important audience questions for that route.
- Claims are supported, approved, and consistent with the shared fact source.
- Relevant experience or evidence is visible.
- Internal links connect the page to services, proof, resources, and conversion
  destinations.
- Structured data matches visible content and references only live URLs.
- Author, reviewer, publish date, and modification date are accurate where
  applicable.
- Images, video, alt text, captions, and schema describe the same subject.
- Googlebot, Bingbot, and the desired AI search crawlers are not blocked by the
  application or infrastructure.
- The page passes accessibility, SEO, link, schema, lint, and production build
  checks.
- Its target prompts and measurement owner are recorded.

During migration, an unmet criterion that would require an unapproved visible
change is an approval-dependent gap, not permission to alter the UI. Record it
as `suggested`, `deferred`, or `blocked`, preserve the live presentation, and
report it in the task handoff.

During active migration, planned-but-unbuilt destinations may remain in UI and
schema when the project owner explicitly accepts the route exception. That
exception does not waive the full route, redirect, link, and schema validation
required before production launch.

## Governance

- SEO owns search intent, canonical policy, metadata, monitoring, and prompt
  tracking.
- Content owns visible copy, sourcing, authorship, and update schedules.
- Development owns crawlability, rendering, structured data, sitemap, robots,
  redirects, IndexNow, performance, and validation.
- Leadership owns company claims, credentials, positioning, and external
  profiles.
- Client success owns client attribution, testimonials, and outcome approval.
- HR owns job details, work policies, benefits, locations, and expiry status.

Review this strategy quarterly and after major Google, Bing, OpenAI, schema, or
site-architecture changes. Update recommendations when authoritative platform
guidance changes; do not preserve a tactic solely because it is labeled AEO or
GEO.
