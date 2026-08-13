# AEO/GEO Migration Approval: Live vs Migrated

Routes covered: `/`, `/about-us`, `/career`, `/life-dynamicdreamz`,
`/resources`
Live reference: `https://www.dynamicdreamz.com/` and the matching live routes
Live comparison captured: 2026-08-12 and rechecked on 2026-08-13
Implementation date: 2026-08-12
Document updated: 2026-08-13
Approval status: visible changes rejected and reverted; nonvisual improvements retained

## 2026-08-13 Project-Owner Decision

The project owner requested that every visible UI and copy difference covered by
this review be reverted to the current live-site presentation. That decision is
implemented and supersedes the earlier `Changed — approve` status for visible
items in the historical comparison tables below.

- Reverted to live UI: H-01 through H-03; A-03, A-04, and A-06 through A-17;
  C-03 through C-14 plus the five-role-per-city card presentation; L-02 through
  L-11 and L-13 through L-18; R-03 through R-19.
- Synchronized to the current live site instead of the older local baseline:
  H-04 now uses the three August 11, 2026 article cards and project-owned local
  copies of their images.
- Retained because they do not change the visible UI: shared typed facts,
  metadata, explicit content dates, sitemap dates, Organization/Page/Person/
  VideoObject/JobPosting cleanup, canonical path normalization, semantic heading
  hierarchy, intentional alt text, accessible controls, reduced-motion support,
  and project-owned assets.
- Resources heading typography was corrected to the live Montserrat 700 weight
  and letter spacing after the 2026-08-13 desktop/mobile comparison exposed the
  mismatch.
- Open launch blockers restored by the live UI decision: Resources visibly uses
  numeric review claims and a `1000+` Shopify-store statement while Home uses
  `4500+`; Career visibly presents every role in both cities while local PDFs and
  JobPosting data support seven role/location combinations. These require
  business/HR approval before launch.

The `Migrated site` columns below preserve the rejected 2026-08-12 proposals as
an approval history. They do not describe the current visible UI for the IDs in
the first bullet above.

## How To Review This File

Every difference uses the same four-part format:

| Column | Meaning |
| --- | --- |
| ID / area | Stable reference for discussion and approval |
| Existing live site | What the WordPress page currently shows or emits |
| Migrated site | What the 2026-08-12 proposal showed or emitted; the decision section identifies visible items subsequently reverted |
| Reason / status | Why it differs and whether further confirmation is required |

Status meanings:

- **Changed — approve:** implemented migration difference requiring review.
- **Retained:** intentionally kept the same or left unchanged.
- **Implementation-only:** output is unchanged, but its source or technical
  implementation was improved.
- **Needs confirmation:** implemented or retained wording depends on a factual
  or policy decision.
- **Migration pending:** destination is intentionally retained while its route
  is still being built; route availability is excluded from this approval.

This register covers all known visible-copy, metadata, structured-data,
freshness, proof, and AEO/GEO differences for the five built pages. Framework,
asset, accessibility, and interaction differences are summarized where they
affect approval; it is not a line-by-line WordPress-to-Next.js code comparison.

## Development-Stage Route Exception

Planned but unbuilt destinations are intentionally ignored for this approval.
Existing article, service, quote, work, category, job-application, and other
migration-intent URLs remain in the UI and schema. Their route availability,
canonical policy, and redirects must be checked before launch, but no temporary
route workaround is part of this AEO/GEO change.

## Page Review Index

| Page | Main differences to approve | Detailed section |
| --- | --- | --- |
| Home | Live hero/AI copy restored; current live articles synchronized; technical schema/freshness retained | [Home](#home) |
| About Us | Live H1, company answer, story/timeline/value copy restored; technical entity/schema work retained | [About Us](#about-us) |
| Career | Live hero, cards, benefits, and location presentation restored; PDF-supported job schema retained pending HR review | [Career](#career) |
| Life at Dynamic Dreamz | Live H1, culture, hiring, and six FAQ answers restored; metadata/schema retained | [Life at Dynamic Dreamz](#life) |
| Resources | Live hub, taxonomy, proof, reviews, counters, and trust copy restored; semantics/accessibility retained | [Resources](#resources) |

## Shared Differences Across All Five Pages

| ID / area | Existing live site or previous migration | Migrated site | Reason / status |
| --- | --- | --- | --- |
| S-01 — Company facts | `2006`, `5000+`, `150+`, `1100+`, `4500+`, and `1B+` are repeated independently across pages. Resources also uses a conflicting `1000+` Shopify-store statement. | One typed source supplies approved reusable facts to Home, About, shared navigation, and schema. Resources live proof wording is intentionally preserved until its conflict is approved. | Reduces machine-readable and reusable fact drift without changing the requested UI. **Implementation-only; the visible Resources conflict, definitions, and provenance need confirmation.** |
| S-02 — Organization entity | Page graphs used separate partial Organization definitions. Some live graphs also included an ambiguous aggregate rating and unrelated sitewide nodes. | All five pages use one stable Organization identity with legal/public name, logo, contact details, both offices, founding year, team size, official/independent profile URLs, service knowledge, and served regions. | Gives crawlers and answer engines one consistent entity. **Changed — approve.** |
| S-03 — Modification dates | Live or earlier migration output used stale page dates or the build/deployment time. | Every built route has an explicit content-review date in shared SEO data. Page schema and sitemap use the same value. | Prevents a deployment from falsely claiming a content update. **Changed — approve.** |
| S-04 — Sitemap | Earlier migration generated one build-time `lastModified` value for every URL. | Each sitemap entry reads its own route `modifiedTime`; the five current routes resolve to the 2026-08-13 final parity-review date. | Keeps sitemap freshness aligned with page content. **Nonvisual improvement retained.** |
| S-05 — Runtime dependency | Live pages load WordPress/CDN assets, styles, and scripts from the production site. | Migrated pages use project-owned assets and maintainable Next.js/Tailwind components. No shipped media, CSS, or script depends on the live site. | Required migration architecture. **Retained migration decision.** |
| S-06 — Planned routes | Live destinations resolve on WordPress; several matching Next.js routes are not built yet. | Original migration-intent URLs remain in links and relevant schema. | Explicit development-stage exception. **Migration pending; excluded from page approval.** |

Shared implementation files:

- [`src/data/company.ts`](../src/data/company.ts)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)
- [`src/app/sitemap.ts`](../src/app/sitemap.ts)

Shared approval:

- [ ] Approve S-01 through S-05.
- [ ] Request changes to shared items: ________________________________

<a id="home"></a>

## Home (`/`)

Live page: <https://www.dynamicdreamz.com/>  
Migration route: `/`  
Evidence: [`docs/visual-captures/home.md`](visual-captures/home.md)

### Visible Content Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| H-01 — H1 | `Shopify Plus & Enterprise Shopify Solutions` | `Shopify Plus & Complete Shopify Solutions for Global Brands and Agencies` | Earlier migration wording broadens the audience and replaces “Enterprise” with “Complete.” It was not introduced by the 2026-08-12 pass. **Retained existing migration difference; approve or request reversal.** |
| H-02 — Hero answer | `We help DTC brands, B2B businesses and digital agencies build, migrate and scale on Shopify through custom development, B2B solutions, integrations, CRO, performance optimization and ongoing support.` | `Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency helping established DTC brands, B2B merchants, and digital agencies build, migrate, integrate, optimize, and support Shopify commerce experiences.` | Names the entity, credential, audiences, and core services in one reusable answer. **Changed — approve; confirm “established.”** |
| H-03 — AI-delivery paragraph | `To accelerate delivery without compromising quality, our teams use modern AI-powered tools such as Cursor, ChatGPT, Claude, Lovable, Bolt, and n8n, alongside proven development processes.` | `Our teams use AI-assisted tools selectively to accelerate research, prototyping and repetitive delivery tasks. Experienced specialists continue to own implementation, review and quality assurance before release.` | Replaces a volatile tool list and absolute quality wording with selective use and human accountability. **Changed — approve; confirm this reflects the actual process.** |
| H-04 — Latest article cards | Live cards captured on 2026-08-13: `Free vs Paid Shopify Themes: Which One Is Right for Your Store?`, `WooCommerce SEO Guide: How to Rank Your Store Higher in 2026`, and `7 Must-Have Shopify Development Tools for Agencies & Developers`, dated August 11, 2026. | Migrated cards: `Shopify vs WooCommerce India: Which Is Better for Your Online Store?`, `How to Improve Shopify Core Web Vitals and Speed Up Your Store?`, and `7 Wonderful Ecommerce Website Design Tips for Your Shopify Store`, dated August 3, 2026. | Pre-existing migration dataset difference, not changed in the AEO/GEO pass. **Retained; approve the migrated selection or request live-card synchronization.** |
| H-05 — Company statistics | Visible values are `1B+`, `150+`, `4500+`, and `1100+`. | The same values and labels remain visible. They now come from the shared facts source. | No visual copy change. **Implementation-only.** |
| H-06 — Section order and CTAs | Hero, brands, company proof, expertise, selected work, testimonials, partners, and blogs; quote/work/blog CTAs use live-intent paths. | Same section order and migration-intent CTA flow. `/request-quote`, `/our-work`, `/blog`, article paths, and service paths remain. | Preserves the business journey. **Retained; routes are migration pending.** |

### Metadata And Structured-Data Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| H-07 — Meta title | `Shopify Plus Agency & Shopify Platinum Partner \| Dynamic Dreamz` | `Shopify Plus Agency & Platinum Partner \| Dynamic Dreamz` | Removes the second “Shopify” to stay within the repository’s 60-character title limit while preserving primary intent. **Retained existing migration difference — approve.** |
| H-08 — Organization description | Live schema uses a service-led company description that does not exactly match the hero answer. | Organization description uses the entity-first proposal, while the visible hero was restored to live wording on 2026-08-13. | Retains a concise machine-readable entity description without changing the UI. **Nonvisual improvement retained; review the description independently of H-02.** |
| H-09 — Page dates | Live source: `datePublished` `2025-12-12T09:55:48+00:00`; `dateModified` `2026-08-06T13:25:44+00:00`. | Publication date is retained. `dateModified` is `2026-08-13T00:00:00+05:30`. | Records the final parity review instead of deployment time. **Nonvisual improvement retained.** |
| H-10 — Aggregate rating | Live source includes a separate `4.6` / `103` rating node and repeats it on Organization, while visible badges show source-specific proof. | No Organization `aggregateRating` is emitted. Visible source-specific proof badges remain. | Avoids combining or repeating an ambiguous rating. **Changed/retained omission — approve.** |
| H-11 — FAQ schema | Live source emits seven FAQ entries that are not visibly rendered on the homepage. | No FAQPage is emitted for Home. | Structured data must match visible content. **Changed/retained omission — approve.** |
| H-12 — Testimonial videos | Visible testimonials exist, but the live graph does not provide the same complete testimonial-video graph. | Eleven visible testimonials have VideoObject nodes with titles, client context, quotes, thumbnails, YouTube URLs, and real upload dates. | Improves video/entity discovery using visible evidence. **Retained migrated enhancement — approve.** |
| H-13 — Service offers | Live Organization contains an eight-item OfferCatalog. | The same eight planned service offers remain in the Home Organization graph. | Preserves migration/service intent. **Retained; route availability is migration pending.** |

### Home Approval

- [ ] Approve H-01 through H-13.
- [ ] Approve only the new AEO/GEO changes H-02, H-03, H-08 through H-11.
- [ ] Request Home revisions: ________________________________________

Implementation files:

- [`src/content/home.ts`](../src/content/home.ts)
- [`src/components/sections/home/home-hero-section.tsx`](../src/components/sections/home/home-hero-section.tsx)
- [`src/components/sections/home/expertise-section.tsx`](../src/components/sections/home/expertise-section.tsx)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)

<a id="about-us"></a>

## About Us (`/about-us`)

Live page: <https://www.dynamicdreamz.com/about-us/>
Migration route: `/about-us`
Evidence: [`docs/visual-captures/about.md`](visual-captures/about.md)

### Page Identity And Introductory Copy

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| A-01 — Meta title | `Who we are \| A crafting web development solutions` | `About Dynamic Dreamz \| Shopify & Web Development Team` | Replaces unclear grammar with brand, Shopify, web-development, and team intent. **Retained migrated SEO difference — approve.** |
| A-02 — Meta description | `Discover the visionary team at Dynamic Dreamz, experts in web development & digital solutions. Learn about our passion, expertise, and commitment.` | `Founded in 2006, Dynamic Dreamz is a Shopify Platinum Partner with 150+ experts delivering ecommerce, web, mobile and digital commerce solutions.` | Adds specific founding, credential, scale, and capability facts. **Changed — approve; facts require governance approval.** |
| A-03 — H1 | `Agile. Adept. Accurate.` | `About Dynamic Dreamz: Agile. Adept. Accurate.` | Makes the company and page purpose explicit without removing the brand phrase. **Changed — approve.** |
| A-04 — Hero description | `We are an enthusiastic team of 150+ creative designers, pragmatic programmers, client centric business managers, stringent testers and above all visionary leaders who are ready to help your online business to grow and flourish by offering innovative and technology enabled solutions.` | `Founded in 2006, Dynamic Dreamz is an ecommerce, web, and mobile development company with more than 150 specialists. As a Shopify Platinum Partner, we help brands and agencies plan, build, migrate, integrate, and support digital commerce experiences.` | Provides a concise, extractable company answer. **Changed — approve; facts require governance approval.** |
| A-05 — Hero statistics | Values are `5000+ Projects`, `150+ Experts`, and `1100+ Happy Clients`. | Visible values and labels are unchanged; they now read from the shared facts source. | Prevents duplicate hardcoded values. **Implementation-only.** |
| A-06 — Story introduction | `We are a strong team of 150+ creative web designers, technically sound developers, project managers and analysts ready to help you to take your world changing idea from concept to reality.` | `Our multidisciplinary team brings together designers, developers, project managers, analysts, and quality specialists to take ambitious digital ideas from concept to reliable delivery.` | Improves grammar and removes inflated wording while preserving delivery intent. **Changed — approve.** |

### Timeline Differences

| ID / year | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| A-07 — 2006 | `When three young college passed engineers started developing website for an offshore client just for sheer passion. They did not even have proper work place at that time. Dynamic Dreamz was established in that year.` | `Dynamic Dreamz began in 2006 when three engineering graduates started building a website for an offshore client. Their shared interest in digital delivery became the foundation of the company.` | Grammar and clarity improvement; same founding event. **Changed — approve.** |
| A-08 — 2008 | `Soon their work started getting recognition. More and more clients got engaged with Dynamic Dreamz. The company started hiring with 2 employees and shifted to a small office in Surat, India.` | `As its work gained recognition and more clients engaged the team, Dynamic Dreamz hired its first two employees and moved into a small office in Surat, India.` | Grammar and clarity improvement; same milestone. **Changed — approve.** |
| A-09 — 2012 | `The company grew in terms of no. of projects, clients and employees as well. Dynamic Dreamz collaborated with OneIT, Australia` | `The company continued to grow across projects, clients, and employees, and began collaborating with OneIT in Australia.` | Expands abbreviation and fixes sentence structure. **Changed — approve; collaboration fact retained.** |
| A-10 — 2015 | `The company shifted to more spacious office at the center of Surat. Clients are from USA, Canada, European countries and Australia.` | `Dynamic Dreamz moved to a larger office in central Surat while serving clients across the United States, Canada, Europe, and Australia.` | Grammar and geographic clarity improvement. **Changed — approve.** |
| A-11 — 2020 | `Dynamic Dreamz established another development center in Ahmedabad, India.` | Same visible sentence. | No copy change. **Retained.** |
| A-12 — 2023 | `Dynamic Dreamz has been declared as one of the top 10 Shopify developers by UpWork.` | `Dynamic Dreamz continued expanding its Shopify development capabilities and global ecommerce delivery work.` | Removes an unsourced external ranking while retaining the Shopify-growth milestone. **Changed — approve.** |
| A-13 — 2024 | `Dynamic Dreamz proudly celebrates a milestone with a 150+ strong expert team driving innovation and success.` | `Dynamic Dreamz reached the milestone of a 150+-strong expert team supporting clients across design, development, delivery, and quality assurance.` | Replaces generic praise with specific team disciplines; value comes from shared facts. **Changed — approve.** |
| A-14 — 2025 | `Dynamic Dreamz has achieved the prestigious recognition of becoming a Shopify Platinum Partner, marking a new milestone in our journey of excellence.` | `Dynamic Dreamz became a Shopify Platinum Partner, marking a new milestone in its ecommerce delivery journey.` | Removes promotional wording while retaining the credential and year. **Changed — approve; credential requires fact governance.** |

### Core-Value Copy Differences

The first three values—Integrity, Adaptability, and Transparency—remain
unchanged. The final three changed as follows:

| ID / value | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| A-15 — Client Centric Approach | `Tailoring solutions to client goals, we prioritize satisfaction through personalized experiences.` | `We tailor solutions to client goals and prioritize clear, collaborative delivery experiences.` | Makes the sentence direct and avoids a vague satisfaction promise. **Changed — approve.** |
| A-16 — User Centric Design | `Prioritizing user experience, our intuitive and user friendly designs create positive, seamless Experience.` | `We prioritize user experience through intuitive, user-friendly designs that support clear and seamless interactions.` | Corrects grammar, capitalization, and hyphenation. **Changed — approve.** |
| A-17 — Quality Assurance | `Committed to high quality products, our rigorous testing ensures optimal performance, security, and reliability.` | `We apply structured quality assurance and testing to support performance, security, and reliability before release.` | Replaces an absolute “ensures” claim with an accountable process statement. **Changed — approve.** |

### About Schema, Freshness, And Retained Content

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| A-18 — Founder schema | Live visible founder cards contain names, titles, biographies, images, and LinkedIn destinations, while structured founder detail is limited. | Three stable Person nodes reuse the visible names, existing titles, biographies, local images, available LinkedIn profiles, and Organization relationship. | Makes visible leadership evidence machine-readable without inventing credentials. **Changed — approve.** |
| A-19 — Founder titles | Visible titles include two `Co-Founder & CEO` entries and one `Co-Founder & CTO` entry. | The same titles remain in UI and Person schema. | No authoritative replacement was available. **Retained; needs confirmation.** |
| A-20 — 2023 image alt | Live alt describes recognition as a top Shopify developer. | The local image alt still describes recognition even though the visible ranking statement was removed. | This remains inconsistent with A-12 and should be corrected after the milestone meaning is approved. **Needs confirmation; not silently approved.** |
| A-21 — Page dates | Live source: publication `2024-05-02T09:06:11+00:00`, modification `2024-09-06T09:49:01+00:00`. | Publication is retained; modification is `2026-08-13T00:00:00+05:30`. | Records the final parity review. **Nonvisual improvement retained.** |
| A-22 — Structure and media | Timeline order, founder/manager/department sections, video, statistics, images, and value-card order are present on live. | Same section order and media intent; assets are local and interactions are accessible Next.js equivalents. | No redesign. **Retained migration structure.** |

### About Approval

- [ ] Approve A-01 through A-22, except items marked for confirmation.
- [ ] Confirm the existing founder titles.
- [ ] Approve removal of the 2023 ranking and authorize matching alt-text cleanup.
- [ ] Request About revisions: _______________________________________

Implementation files:

- [`src/content/about.ts`](../src/content/about.ts)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)

<a id="career"></a>

## Career (`/career`)

Live page: <https://www.dynamicdreamz.com/career/>
Migration route: `/career`
Evidence: [`docs/visual-captures/career.md`](visual-captures/career.md)

### Page And Section Copy Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| C-01 — Meta title | `Join Our Team for Exciting Opportunities \| Dynamic Dreamz` | `Careers at Dynamic Dreamz \| Surat & Ahmedabad Jobs` | Adds employer, location, and job-search intent. **Changed — approve.** |
| C-02 — Meta description | `Explore career opportunities at Dynamic Dreamz across digital marketing, ecommerce and technology. View current openings in Surat and Ahmedabad.` | Same description. | Already concise and location-specific. **Retained.** |
| C-03 — H1 | `Explore rewarding career in IT, where your talents thrive and possibilities flourish.` | `Careers at Dynamic Dreamz` | Leads with the employer entity and exact page purpose. **Changed — approve.** |
| C-04 — Hero introduction | `We are a strong team of 150+ creative designers, agile developers, quality conscious testers, adept project managers and visionary leaders and we help our clients to achieve their goals.` | `Explore ecommerce, technology, design, marketing, and growth opportunities with Dynamic Dreamz in Surat and Ahmedabad. Join a multidisciplinary team working with global brands and digital agencies.` | Directly answers disciplines, locations, employer, and project audience. **Changed — approve.** |
| C-05 — Opportunities introduction | `Embrace this chance to unleash your potential, ignite your passion, and chart a path where growth knows no limits. Explore rewarding career prospects in IT, where your talents thrive and possibilities flourish.` | `Browse current full-time opportunities, then choose Surat or Ahmedabad to review each role's required experience, posting date, summary, and application link.` | Replaces generic recruitment copy with instructions and available facts. **Changed — approve.** |
| C-06 — Visible freshness | No listing-review date is displayed. | `Current openings reviewed August 12, 2026.` | Makes listing freshness visible without inventing closing dates. **Changed — approve; requires ongoing maintenance.** |
| C-07 — Benefits introduction | `At Dynamic Dreamz, we offer a range of employee benefits designed to maintain work life balance and professional growth of our valued team members.` | `Dynamic Dreamz offers employee benefits designed to support professional growth, wellbeing, and a healthy work-life balance.` | Corrects grammar and removes filler. **Changed — approve; benefits require policy confirmation.** |
| C-08 — Benefit label | `Ample of Employee Engagement Activities` | `Employee Engagement Activities` | Grammar correction without changing the benefit category. **Changed — approve.** |
| C-09 — Culture link | No descriptive link from the benefits section to the Life page. | Adds `Explore life, culture, benefits, and workplace FAQs at Dynamic Dreamz.` linking to `/life-dynamicdreamz`. | Connects the two built recruitment pages and routes candidates to fuller answers. **Changed — approve.** |

### Job Summary Differences

Live cards show title, position count, experience, job type, posting date, PDF,
and application CTA, but not an HTML responsibility summary. Migrated cards add
the following PDF-derived summaries:

| ID / role | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| C-10 — Performance Marketing | No visible summary on card. | `Manage paid campaigns, acquisition, tracking, A/B testing, and performance reporting across major advertising platforms.` | Gives candidates and crawlers a direct role description. **Changed — approve.** |
| C-11 — SEO, AEO and GEO | No visible summary on card. | `Improve organic and AI-search visibility through SEO, AEO, and GEO for ecommerce websites.` | Gives candidates and crawlers a direct role description. **Changed — approve.** |
| C-12 — CRO | No visible summary on card. | `Use analytics, behavior research, and experimentation to improve ecommerce conversion journeys.` | Gives candidates and crawlers a direct role description. **Changed — approve.** |
| C-13 — LinkedIn Growth | No visible summary on card. | `Grow the company's LinkedIn presence through research, relationship building, content, and profile management.` | Gives candidates and crawlers a direct role description. **Changed — approve.** |
| C-14 — Outbound Sales | No visible summary on card. | `Develop international IT-services opportunities through research, outbound prospecting, qualification, and pipeline management.` | Gives candidates and crawlers a direct role description. **Changed — approve.** |

### Location Differences

The live page presents the same five roles when Surat or Ahmedabad is selected.
The migrated page uses each project-owned job PDF as the location source:

| Role | Existing live: Surat | Existing live: Ahmedabad | Migrated: Surat | Migrated: Ahmedabad |
| --- | --- | --- | --- | --- |
| Performance Marketing Specialist | Yes | Yes | Yes | No |
| SEO, AEO and GEO Specialist | Yes | Yes | Yes | Yes |
| Conversion Rate Optimization | Yes | Yes | Yes | No |
| LinkedIn Growth Executive | Yes | Yes | No | Yes |
| Junior Outbound Sales Executive | Yes | Yes | Yes | Yes |

Reason/status: the migrated page reduces ten assumed role/location combinations
to seven PDF-supported combinations. **Changed — approve the PDFs as the current
location authority.**

### Career Schema And Retained Paths

| ID / area | Existing live site or previous migration | Migrated site | Reason / status |
| --- | --- | --- | --- |
| C-15 — JobPosting count | Five roles are exposed under both cities; the previous migrated graph generated ten role/location nodes. | Seven JobPosting nodes are emitted only for the supported locations above. | Prevents inaccurate location-specific job discovery. **Changed — approve.** |
| C-16 — JobPosting description | Description repeated title, job type, experience, and city. | Description includes the visible role summary, full-time/on-site context, city, and experience; `experienceRequirements` is explicit. | Improves job-search clarity and schema/HTML alignment. **Changed — approve.** |
| C-17 — Page dates | Publication date was not centralized; modification used `2026-08-05T13:38:57+00:00`. | Publication is `2024-05-02T09:10:53+00:00`; modification is `2026-08-13T00:00:00+05:30`. | Aligns page schema and sitemap with the final parity review. **Nonvisual improvement retained.** |
| C-18 — Application paths | Apply CTAs use `/career-apply-now` with position and location parameters. | Same URLs and parameters remain in UI and JobPosting nodes. | Preserves the intended recruitment flow. **Retained; route is migration pending.** |
| C-19 — Closing dates | No approved role expiry is shown. | No `validThrough` value was invented. | Avoids false job expiry data. **Retained; needs HR process.** |
| C-20 — CRO experience conflict | Live/card says `1 year to 3 years`; the local role PDF says `2 years to 4 years`. | Visible card and schema currently retain `1 year to 3 years`; summary/location are PDF-derived. | The source conflict remains unresolved. **Needs confirmation before approval.** |

### Career Approval

- [ ] Approve C-01 through C-19.
- [ ] Confirm the seven-row location mapping.
- [ ] Resolve C-20 and authorize the card/PDF/schema update.
- [ ] Request Career revisions: ______________________________________

Implementation files:

- [`src/content/career.ts`](../src/content/career.ts)
- [`src/components/sections/career/career-job-card.tsx`](../src/components/sections/career/career-job-card.tsx)
- [`src/components/sections/career/career-opportunities-section.tsx`](../src/components/sections/career/career-opportunities-section.tsx)
- [`src/components/sections/career/career-benefits-section.tsx`](../src/components/sections/career/career-benefits-section.tsx)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)

<a id="life"></a>

## Life At Dynamic Dreamz (`/life-dynamicdreamz`)

Live page: <https://www.dynamicdreamz.com/life-dynamicdreamz/>
Migration route: `/life-dynamicdreamz`
Evidence:
[`docs/visual-captures/life-dynamicdreamz.md`](visual-captures/life-dynamicdreamz.md)

### Page Identity And Hero Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| L-01 — Meta title | `Discover Our Work Culture \| Maintain Work-Life Balance \| Equal Opportunity Employer` | `Life at Dynamic Dreamz \| Culture & Work-Life Balance` | Reduces an 83-character title to a focused 52-character title while retaining equal-opportunity intent in the description. **Retained migrated SEO difference — approve.** |
| L-02 — H1 | `Where Teamwork Takes the Lead` | `Life at Dynamic Dreamz: Where Teamwork Takes the Lead` | Adds entity and page identity without removing the live phrase. **Changed — approve.** |
| L-03 — Hero description | `Dynamic Dreamz gives ample of opportunities to amplify your potential and let you maintain work life balance. We are deeply committed to create an inclusive workplace irrespective of caste, creed and religion. We are an equal opportunity employer.` | `Dynamic Dreamz provides opportunities to develop your skills while supporting a healthy work-life balance. We are committed to an inclusive, equal-opportunity workplace across our Surat and Ahmedabad offices, regardless of caste, creed, religion, or background.` | Corrects grammar and adds office context while retaining equal-opportunity meaning. **Changed — approve; policy wording needs confirmation.** |
| L-04 — Culture introduction | `The work culture @ Dynamic Dreamz symbolizes a culture of openness, collaboration and trust. Every individual with a quest for knowledge has a voice to add in Dynamic Dreamz.` | `The work culture at Dynamic Dreamz is built around openness, collaboration, trust, and continuous learning. Team members are encouraged to contribute ideas and learn across disciplines.` | Replaces informal notation and vague phrasing with a direct description. **Changed — approve; policy wording needs confirmation.** |

### Culture-Value Differences

| ID / value | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| L-05 — Inclusivity | `A culture that values diversity and inclusivity ensures that everyone feels respected` | `We value diversity and inclusion so team members can contribute in a respectful environment.` | Complete sentence without an absolute guarantee. **Changed — approve.** |
| L-06 — Flexibility | `Offering flexible work arrangements or schedules can accommodate diverse needs.` | `Flexible scheduling within current company policy helps teams accommodate different needs.` | Connects the claim to current policy. **Changed — approve; policy confirmation required.** |
| L-07 — Teamwork | `Promoting teamwork and collaboration over competition can lead to problem solving` | `We promote teamwork and shared problem-solving across design, development, delivery, and support.` | Complete, specific sentence. **Changed — approve.** |
| L-08 — Adaptability | `A culture that values adaptability and embraces change can thrive in environments.` | `We encourage teams to adapt to changing client needs, technologies, and project constraints.` | Replaces an incomplete generic statement with practical context. **Changed — approve.** |
| L-09 — Collaborative Environment | `Creating spaces and platforms that encourage collaboration.` | `Shared spaces and communication practices help colleagues collaborate across roles and offices.` | Explains how collaboration occurs. **Changed — approve.** |
| L-10 — Social Connections | `Facilitating opportunities for social interaction, such as team outings or company events.` | `Team outings, celebrations, and company events create opportunities for colleagues to connect.` | Converts a fragment into a direct sentence. **Changed — approve.** |

### Hiring Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| L-11 — Hiring paragraph | `Your future is full of possibilities, and at Dynamic Dreramz, we provide the tools and opportunities to explore them. Build your future with us, where professional growth is interwoven with personal development.` | `Your future is full of possibilities, and at Dynamic Dreamz, we provide opportunities to explore them. Build your future with us, where professional growth is connected with personal development.` | Corrects the company-name typo and simplifies the sentence. **Changed — approve.** |
| L-12 — Career link | `/career` | `/career` | Uses the migration's canonical no-trailing-slash form. **Retained.** |

### FAQ Differences

Questions remain the same. Every answer changed as shown below:

| ID / question | Existing live answer | Migrated answer | Reason / status |
| --- | --- | --- | --- |
| L-13 — Work culture | `At Dynamic Dreamz, our work culture is centered around collaboration, innovation, and respect. We foster an environment where creativity thrives and ideas are valued. Our teams work closely together, encouraging each other to think outside the box and push boundaries. We believe in a healthy work life balance, ensuring our employees feel supported both professionally and personally. Diversity and inclusivity are at the core of our values, creating a welcoming atmosphere for all.` | `At Dynamic Dreamz, our work culture centers on collaboration, innovation, and respect. Teams work closely together, share ideas, and approach new challenges creatively. We support a healthy work-life balance, and diversity and inclusion are central to creating a welcoming environment.` | Removes repetition and absolute language while preserving meaning. **Changed — approve; policy confirmation required.** |
| L-14 — Development | `There are ample of opportunities for the professional development and growth as we provide our services to clients across spectrum of industry verticals and we leverage cutting-edge technologies hence as an employee you will get an extensive exposure of different domain and technologies.` | `Dynamic Dreamz offers opportunities for professional development through projects across a range of industries and technologies. Employees can gain exposure to different business domains, delivery disciplines, and technical challenges.` | Corrects grammar and removes promotional filler. **Changed — approve; policy confirmation required.** |
| L-15 — Project types | `You will work on variety of web development, eCommerce, CMS and App development projects for the clients across the globe. Each project demands a new approach and poses unforeseen challenges to your analytical thinking.` | `Employees work on web development, ecommerce, CMS, and mobile application projects for clients around the world. Each engagement brings different business requirements and technical challenges.` | Improves grammar and makes the project scope explicit. **Changed — approve.** |
| L-16 — Hours and flexibility | `We are a five-days a week organization. Our team works in day shift as per IST. However, depending upon the client’s requirement, sometimes work schedule may get stretched till late evening. We do not work in night shift.` | `Dynamic Dreamz operates a five-day workweek. Teams work day shifts in IST; client requirements can occasionally extend schedules into the late evening, but the company does not operate a night shift.` | Corrects grammar while preserving the stated working model. **Changed — approve; current policy confirmation required.** |
| L-17 — Permanent remote work | `Generally, we don’t offer work from home on permanent basis. We believe that working together at one place boosts cohesiveness among employees and ultimately it results in more productivity. However, we do allow temporary work from home facility in special cases such as accident or pregnancy.` | `Dynamic Dreamz generally does not offer permanent work from home because teams primarily collaborate from the office. Temporary work-from-home arrangements may be considered in special circumstances under current company policy.` | Removes a productivity claim and sensitive examples while preserving the stated office-first policy and exception concept. **Changed — approve; current policy confirmation required.** |
| L-18 — Health and wellbeing | `At Dynamic Dreamz, we have setup a recreational zone. In this zone we have kept indoor games such as Carrom, Fuss ball, Dart, Cards etc. For health point of view an automatic treadmill has been placed in the zone. For the entertainment of our team, an Android TV is available. Our employees rejuvenate in this recreational zone.` | `Dynamic Dreamz has a recreation zone with indoor games such as carrom, foosball, darts, and cards. A treadmill and Android TV are also available so employees can take a break and recharge.` | Corrects grammar and spelling while retaining the listed facilities. **Changed — approve; facilities need confirmation.** |

### Life Schema, Freshness, And Retained Behavior

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| L-19 — FAQ schema | Six visible questions and answers are represented in FAQPage schema. | The same six visible questions remain; migrated answers and FAQPage are generated from one typed source. | Prevents UI/schema drift. **Retained and strengthened — approve.** |
| L-20 — Page dates | Publication `2024-05-02T09:14:02+00:00`; modification `2024-09-06T09:49:25+00:00`. | Publication is retained; modification is `2026-08-13T00:00:00+05:30`. | Records the final parity review. **Nonvisual improvement retained.** |
| L-21 — FAQ section intro | `Here, we have addressed your concerns and queries that you want to know.` | Same sentence. | Not changed in this pass. **Retained; may be improved later.** |
| L-22 — Structure and interactions | Hero, six value cards, hiring block, six-item accordion, and workplace gallery. | Same section order and default states, with keyboard/ARIA and reduced-motion improvements in the migrated components. | Preserves design while improving accessibility. **Retained migrated behavior — approve.** |
| L-23 — Legacy route | Project references also identify `/life-at-dynamic-dreamz`. | Current built canonical is `/life-dynamicdreamz`; no new redirect was added in this pass. | Covered by route exception. **Migration pending.** |

### Life Approval

- [ ] Approve L-01 through L-23, except policy items awaiting confirmation.
- [ ] Confirm current hours, office/remote model, flexibility, growth, and listed facilities.
- [ ] Request Life revisions: ________________________________________

Implementation files:

- [`src/content/life-dynamicdreamz.ts`](../src/content/life-dynamicdreamz.ts)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)

<a id="resources"></a>

## Resources (`/resources`)

Live page: <https://www.dynamicdreamz.com/resources/>
Migration route: `/resources`
Evidence: [`docs/visual-captures/resources.md`](visual-captures/resources.md)

### Hero And Hub Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| R-01 — Meta title | `Shopify & eCommerce Resources Hub \| Dynamic Dreamz` | Same title. | Already clear and within the title budget. **Retained.** |
| R-02 — Meta description | `Browse Dynamic Dreamz's Shopify resource hub for migration guides, SEO tips, white label insights, and growth strategies to scale your online store.` | Same description. | Already describes topic coverage and audience value. **Retained.** |
| R-03 — H1 | `Everything You Need to Know About Shopify, eCommerce, and Digital Growth!` | `Shopify and Ecommerce Resources for Growth Teams` | Replaces a broad claim with concise topic and audience intent. **Changed — approve.** |
| R-04 — Hero description | `Have you ever wondered what really makes only some Shopify stores scale like never before, and that too effortlessly, while others keep facing struggles just to have some conversions? Or you're just curious about the web design, some smart integrations, or simply the speed, which literally can completely transform an online business? If yes, then you're in the right place.` | `Practical guides for merchants, ecommerce leaders, developers, and agency partners evaluating Shopify Plus, migrations, performance, CRO, integrations, mobile commerce, and white-label delivery.` | Replaces rhetorical questions with an answer-first audience/topic summary. **Changed — approve.** |
| R-05 — Hub point 1 | `This resource hub of ours is built for all the Shopify merchants/shopify experts, all the digital enthusiasts, and even the eCommerce founders, who want to understand all the Hows and Whys behind successful online stores. Here, you're gonna find all the Shopify migration guides to Shopify Plus Agency, numerous store performance tips that are required for design inspiration, latest marketing insights, and numerous growth strategies in one single place!` | `Use this resource hub to make informed Shopify and ecommerce decisions. It brings together migration guidance, platform comparisons, performance methods, SEO practices, and growth topics in one place.` | Removes informal language and keyword repetition. **Changed — approve.** |
| R-06 — Hub point 2 | `So, get your hands on the resourceful content to stay ahead of trends, access proven tactics, & learn directly from our Shopify Platinum Partner team that has already powered 1,000+ stores & helped brands generate over $1 billion in sales.` | `The guidance is informed by a Shopify Platinum Partner team with 150+ experts and experience supporting 4500+ Shopify store builds.` | Replaces the conflicting `1000+` figure with shared sitewide facts. **Changed — approve; definitions/provenance required.** |
| R-07 — Hub point 3 | `So, click and join the detailed list for exclusive insights on Shopify Mobile App Development and more, expert tips, and actionable resources of DynamicDreamz, because it's basically designed to help your Shopify store grow smarter, faster & stronger.` | `Browse decision guides covering Shopify Plus, B2B, CRO, mobile commerce, integrations, and white-label delivery, with publication dates shown on every article card.` | Replaces vague promotion with specific decision topics and freshness evidence. **Changed — approve.** |

### Taxonomy Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| R-08 — First category | Label is `Shopify`, but all nine links are white-label/agency topics. | Label is `White Label & Agency Growth`; the same nine links remain. | Makes the label match its contents. **Changed — approve.** |
| R-09 — Magento category | Empty Magento category is visibly available. | Empty Magento category is not rendered. | Avoids routing users to an empty content group. **Changed — approve.** |
| R-10 — Other categories | WordPress and e-Commerce categories and their links are visible. | Same categories and links remain. | No change. **Retained.** |

### Dynamic Story Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| R-11 — Story paragraph 1 | `At Dynamic Dreamz, we take great pride in being a trusted Shopify Platinum Partner, and with that pride, we keep empowering hundreds and thousands of brands to build, scale & optimise their respective online stores with much confidence.` | `Dynamic Dreamz is a Shopify Platinum Partner helping DTC brands, B2B merchants, and digital agencies build, migrate, integrate, optimize, and support Shopify commerce experiences.` | Removes vague scale language and defines audience/services directly. **Changed — approve.** |
| R-12 — Story paragraph 2 | `Our massive team of experts, which includes 150+ certified Shopify developers, never fails to bring their expertise in Shopify Plus eCommerce design and development, ensuring we create seamless digital experiences for D2C & B2B businesses alike. From the early days, when we were just kicking off, we've launched 1000+ successfully operational online Shopify stores across industries such as fashion, health & wellness, home & lifestyle, cosmetics & beauty, electronics, and luxury goods.` | `Our 150+ experts work across Shopify Plus, ecommerce design and development, mobile applications, performance, CRO, and integrations. Dynamic Dreamz has supported 4500+ Shopify store builds across industries including fashion, health and wellness, home and lifestyle, beauty, electronics, and luxury goods.` | Removes the unsupported “certified” label and aligns the store count with shared proof. **Changed — approve; facts require governance approval.** |
| R-13 — Story paragraph 3 | `With our range of expertise, clients from startups to major global enterprises have collectively generated over $1 billion in online revenue —and not just that —they have driven consistently strong growth & sustainable success through tailor-made Shopify solutions.` | `Client businesses have collectively generated 1B+ in revenue. This company-wide proof point is used consistently across the current migration.` | Keeps the approved metric while removing additional unverified growth/sustainability claims. **Changed — approve; metric definition required.** |
| R-14 — Story paragraph 4 | `At Dynamic Dreamz, every project is built on strategy, creativity, and performance — helping your eCommerce brand reach its full potential.` | `The resources below turn those delivery areas into practical guidance for teams planning platform, migration, performance, and growth decisions.` | Connects company capability back to the purpose of the Resources page. **Changed — approve.** |

### Review, Trust, And Statistic Differences

| ID / area | Existing live site | Migrated site | Reason / status |
| --- | --- | --- | --- |
| R-15 — Clutch card | `132 Reviews`, five-star graphic, `5.0`. | Clutch wordmark, `Independent review profile`, and `Read reviews`; no numeric value. | Removes an ungoverned score/count while retaining the evidence destination. **Changed — approve.** |
| R-16 — Upwork card | `2000+ Reviews`, five-star graphic, `5.0`; old URL uses `/agencies/dynamicdreamz/`. | Upwork wordmark, `Independent review profile`, and `Read reviews`; URL uses `/ag/dynamicdreamz/`; no numeric value. | Removes an ungoverned score/count and uses the current profile path. **Changed — approve.** |
| R-17 — GoodFirms card | `72 Reviews`, five-star graphic, `5.0`. | GoodFirms wordmark, `Independent review profile`, and `Read reviews`; no numeric value. | Removes an ungoverned score/count while retaining the evidence destination. **Changed — approve.** |
| R-18 — Experience statistic | `18+ Years of Experience` and all four counters animate. | `Founded 2006` is stable; `150+ Experts`, `5000+ Projects Completed`, and `1100+ Happy Clients` retain animation. | Replaces a value that becomes stale each year with a precise founding year. **Changed — approve.** |
| R-19 — Trust description | `From web designs to custom web development, we work with cutting edge web technology and framework.` | `Dynamic Dreamz combines Shopify, ecommerce, web, and mobile expertise with design, development, quality assurance, and long-term technical support.` | Replaces generic wording with concrete capabilities. **Changed — approve.** |

### Resources Structure, Schema, And Retained Paths

| ID / area | Existing live site or earlier migration | Migrated site | Reason / status |
| --- | --- | --- | --- |
| R-20 — Story heading level | Live uses a second H1 for `Our Dynamic Story,`. | Same visual heading is rendered as H2. | Keeps one semantic page H1. **Retained migrated SEO improvement — approve.** |
| R-21 — Story category link | Live uses a non-functional `#` destination for `Shopify`. | Link is `/blogs/category/shopify`. | Provides a real descriptive destination. **Retained migrated link improvement; route is migration pending.** |
| R-22 — Article image alt text | Several live thumbnail alts reflect filenames or inconsistent source text. | Each of the 64 article thumbnails uses its visible article title as alt text. | Provides meaningful, page-specific alternatives. **Retained migrated accessibility/SEO improvement — approve.** |
| R-23 — Article inventory | Live renders 64 dated article cards. | All 64 cards remain server-rendered and the ItemList retains all 64 planned article URLs. | Preserves content inventory during migration. **Retained; article routes are migration pending.** |
| R-24 — Article authorship | Hub article data does not show an approved author or reviewer for every article. | No author/reviewer was invented in the hub schema. | Authorship belongs on each migrated article with visible supporting details. **Retained; deferred to article migration.** |
| R-25 — Page dates | Publication `2025-11-10T05:02:09+00:00`; modification `2026-07-15T10:42:41+00:00`. | Publication is retained; modification is `2026-08-13T00:00:00+05:30`. | Records the final parity review. **Nonvisual improvement retained.** |
| R-26 — Structured graph | Live source includes WordPress/Yoast entity output and unrelated sitewide FAQ markup. | Graph contains the shared Organization, WebSite, CollectionPage, BreadcrumbList, visible company VideoObject, and retained 64-item ItemList; no unrelated hidden FAQPage. | Aligns schema with visible hub content. **Changed — approve.** |
| R-27 — Interaction implementation | Live uses jQuery/Owl/Slick behavior for accordion, article rail, logo strip, video, and counters. | Same content and interaction intent use accessible controls, native article scrolling, a focused client boundary, and reduced-motion handling. | Performance and accessibility improvement without redesigning the page. **Retained migrated behavior — approve.** |

### Resources Approval

- [ ] Approve R-01 through R-27.
- [ ] Approve removal of numeric review scores/counts until a governed source exists.
- [ ] Approve `4500+` as the shared Shopify-store figure, subject to definition/provenance.
- [ ] Request Resources revisions: ___________________________________

Implementation files:

- [`src/content/resources.ts`](../src/content/resources.ts)
- [`src/components/sections/resources/resources-story-section.tsx`](../src/components/sections/resources/resources-story-section.tsx)
- [`src/components/sections/resources/resources-counter-grid.tsx`](../src/components/sections/resources/resources-counter-grid.tsx)
- [`src/components/sections/resources/resources-trust-section.tsx`](../src/components/sections/resources/resources-trust-section.tsx)
- [`src/data/seo.ts`](../src/data/seo.ts)
- [`src/lib/schema.ts`](../src/lib/schema.ts)

## Items Requiring Factual Or Policy Confirmation

| ID | Page(s) | Confirmation needed | Current migration behavior |
| --- | --- | --- | --- |
| F-01 | Shared, Home, About, Resources | Define provenance, owner, and update process for `2006`, `5000+`, `150+`, `1100+`, `4500+`, and `1B+`. | Values are centralized but not represented as independently approved governance records. |
| F-02 | About | Confirm current founder titles. | Existing live titles remain unchanged in visible content and Person schema. |
| F-03 | About | Decide the approved meaning of the 2023 milestone and corresponding image alt. | Live ranking wording and the recognition image alt are restored pending evidence or explicit approval. |
| F-04 | Career | Resolve CRO experience: visible listing says `1–3 years`; PDF says `2–4 years`. | Card/schema retain `1–3 years`; location/summary use the PDF. |
| F-05 | Career | Establish job review/expiry ownership and closing dates. | The live UI has no review date and no `validThrough` is emitted. |
| F-06 | Life, Career | Confirm current working hours, office/remote model, flexibility, growth, benefits, and wellbeing facilities. | Live policy wording and grammar are restored; no new policy claim is introduced. |
| F-07 | Home, Resources | Verify current external review scores/counts and choose whether any qualify for visible/schema use. | Home source-specific badges and Resources numeric review cards are visible; ambiguous aggregate-rating schema remains omitted. |
| F-09 | Career | Confirm whether the live five-role-per-city UI or the location statements in the five local job PDFs are authoritative. | Live UI is preserved; seven PDF-supported role/location combinations are emitted in JobPosting data pending HR approval. |
| F-08 | Resources | Approve article authors/reviewers and evidence during article migration. | No author or reviewer is invented on the hub. |

## Intentionally Unchanged Or Deferred

- Planned unbuilt routes are ignored during development and retained exactly for
  migration intent.
- No new service, article, case-study, quote, contact, job-detail, or
  job-application route was built in this work.
- No page section was redesigned or reordered for AEO/GEO.
- Existing local assets, accessibility improvements, reduced-motion behavior,
  and small interactive client boundaries remain.
- Internal evidence-led case studies, article authorship, original research,
  and service-page depth remain future migration work.

## Verification Evidence

| Check | Result |
| --- | --- |
| Live/reference inspection | Rendered live pages, captured live source, page-specific CSS/JS, and migration baselines were reviewed; live content was rechecked on 2026-08-13. |
| Responsive review | Home, About, Career, Life, and Resources passed at 1440x900, 768x1024, and 390x844 with no new clipping or horizontal overflow. |
| Rendered schema | One shared Organization per page; 3 founder Person nodes on About; 7 JobPosting nodes on Career; 6 visible FAQ entries on Life; 64 retained Resources ItemList entries. |
| Sitemap | Five built routes use explicit per-route modification dates. |
| Runtime assets | No production WordPress/CDN asset dependency is present in shipped source. |
| Code validation | `npm run lint`, `npm run build`, rendered schema/sitemap checks, and `git diff --check` passed after the final rollback on 2026-08-13. |
| Documentation update | The approval record, permanent AEO/GEO strategy, visible-copy queue, and five visual-capture notes record the 2026-08-13 owner decision and final verification. |

Detailed evidence files:

- [`docs/visual-captures/home.md`](visual-captures/home.md)
- [`docs/visual-captures/about.md`](visual-captures/about.md)
- [`docs/visual-captures/career.md`](visual-captures/career.md)
- [`docs/visual-captures/life-dynamicdreamz.md`](visual-captures/life-dynamicdreamz.md)
- [`docs/visual-captures/resources.md`](visual-captures/resources.md)
- [`docs/aeo-geo-strategy.md`](aeo-geo-strategy.md)
- [`docs/page-content-improvements.md`](page-content-improvements.md)

## Final Approval Decision

- [ ] Approve all shared and page-specific differences in this file, except
  items explicitly marked as needing confirmation.
- [ ] Approve only the pages checked below:
  - [ ] Home
  - [ ] About Us
  - [ ] Career
  - [ ] Life at Dynamic Dreamz
  - [ ] Resources
- [x] Approve technical/schema changes but request visible-copy revisions.
- [ ] Request factual or policy corrections before approval.
- [x] Reject and revert the visible IDs listed in the 2026-08-13 decision section.

Decision notes / difference IDs: visible differences reverted; H-04 synchronized
to current live content; Resources/Career fact conflicts remain prelaunch
approval blockers.

```text

```

Approver:  
Decision date:
