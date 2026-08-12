# AEO and GEO Strategy - Simple Guide

Status: working summary; recommendations still need the approvals noted below  
Based on: [the full AEO/GEO strategy](./aeo-geo-strategy.md)  
Source last audited: 2026-08-12  
Scope: the Next.js migration and the five currently built public pages

## How to use this document

This is the easy-to-read version of the full AEO/GEO strategy. It explains the
business decisions, priorities, owners, and expected results without most of
the technical detail.

The [full strategy](./aeo-geo-strategy.md) remains the source of truth. Update it first
when facts, priorities, page status, or technical recommendations change. Then
update this summary if the change affects leadership decisions or delivery.

## One-minute summary

Dynamic Dreamz does not need a separate set of "AI SEO tricks." The site needs
to be easy to crawl, easy to understand, factually consistent, and supported by
real evidence.

The most important work is:

1. Finish the important pages and links that are currently missing.
2. Use one approved source for company facts, reviews, leadership details, and
   URLs.
3. Publish clear service pages that answer buyer questions directly.
4. Turn project work into useful case studies with approved results.
5. Show who wrote or reviewed expert content and when it was updated.
6. Track accurate citations, qualified visits, enquiries, and revenue impact.

The goal is not simply to make Dynamic Dreamz appear in AI answers. The goal is
to make the company appear accurately for relevant questions and turn that
visibility into qualified business and recruitment enquiries.

## AEO and GEO in simple words

### AEO: Answer Engine Optimization

AEO helps our pages give a clear answer when someone asks a question in Google,
voice search, an answer box, or an AI search experience.

For Dynamic Dreamz, this means:

- Answer important questions near the top of a page.
- Use clear headings, short summaries, useful lists, tables, and real FAQs.
- Give enough context for an answer to make sense on its own.
- Support answers with experience, examples, dates, and evidence.

### GEO: Generative Engine Optimization

GEO helps AI search tools understand, trust, describe, and cite Dynamic Dreamz
correctly.

For Dynamic Dreamz, this means:

- Keep the company name, facts, services, people, and URLs consistent.
- Publish expert information that is more useful than generic articles.
- Support claims with case studies, trusted profiles, and approved evidence.
- Keep content accurate and current.

### What we should not do

- Do not promise that schema or any special file will guarantee AI rankings.
- Do not create thin pages that only repeat keywords.
- Do not publish large amounts of generic AI-written content.
- Do not invent reviews, awards, dates, authors, client results, or credentials.
- Do not buy fake mentions or create false discussions about the company.
- Do not treat `llms.txt` as a launch priority.

Good SEO remains the foundation of both AEO and GEO.

## Business outcomes

Primary outcomes:

- More qualified enquiries for Shopify Plus, migrations, CRO, mobile commerce,
  integrations, maintenance, and white-label delivery.
- More accurate citations for non-branded service and problem-based searches.
- Better visibility for strong case studies and real project experience.
- More accurate answers about Dynamic Dreamz as a company.
- Better discovery of genuine job openings in Surat and Ahmedabad.
- Better-quality leads from organic and AI-assisted search.

Secondary outcomes:

- More branded searches for Dynamic Dreamz.
- More visits that move from advice pages to services and case studies.
- More references to Dynamic Dreamz experts and original research.
- Fewer incorrect or conflicting company facts in search and AI answers.

## Who we need to help

| Audience | What they need | Example question |
| --- | --- | --- |
| Enterprise ecommerce brands | Shopify Plus migration, B2B, integrations, international stores, CRO, and support | Which Shopify Plus agency can manage a complex migration? |
| Growing DTC brands | Redesigns, performance, conversion, apps, and ongoing support | Should I use a Shopify agency or a freelancer? |
| Digital agencies | Confidential white-label capacity, QA, communication, and flexible engagement | How can we scale Shopify delivery without hiring a full internal team? |
| Candidates | Current jobs, locations, experience, work model, benefits, and application steps | Is Dynamic Dreamz hiring Shopify developers in Ahmedabad? |

## Where the migration stands now

### What is already good

- Main page content is rendered on the server and can be read by crawlers.
- The five built pages have unique metadata and canonical URLs.
- Sitemap and URL formatting are centrally managed.
- Organization and website schema use stable identifiers.
- The site shows real trust signals such as partner status, company numbers,
  reviews, testimonials, clients, and team experience.
- Local images, useful alt text, video information, and image dimensions are in
  place.
- Current content covers the main areas in which Dynamic Dreamz wants to be
  known.

### What is not ready

Only these five public pages are currently built:

- `/`
- `/about-us/`
- `/career/`
- `/life-dynamicdreamz/`
- `/resources/`

Many navigation links, CTA links, service URLs, article URLs, case-study URLs,
and job-application URLs are still missing. This is the main launch risk.

## Priority meanings

- `P0` - Must be fixed before launch because it breaks discovery, trust,
  conversion, or structured data.
- `P1` - High-value work to complete during or soon after the relevant page
  build.
- `P2` - Useful improvement after the page is accurate, complete, and working.

## P0 launch blockers

| Blocker | Simple explanation | Required decision or action |
| --- | --- | --- |
| Missing routes | Important navigation and CTA links lead to pages that are not built | Build each required page or temporarily remove the link |
| Broken schema destinations | Some schema points to service, article, and job URLs that do not exist | Include only URLs that work |
| Missing conversion pages | Quote, contact, work, case-study, blog, and job-application journeys are incomplete | Build and test the complete journeys |
| Mixed article URLs | The homepage and Resources page use different URL patterns | Choose one canonical article pattern and redirect the alternatives |
| Conflicting proof | Review counts, ratings, and Shopify store numbers differ between pages | Approve one fact source with definitions and review dates |
| Unsupported claim | "Hundreds and thousands of brands" is too vague to verify | Replace it with a precise approved fact |
| Job location risk | Job schema may show every role in both cities even when that is not true | Store and publish the real locations for each role |
| Life page legacy URL | The old and new Life at Dynamic Dreamz paths may differ | Confirm the final path and add a permanent redirect |

## Company facts need one owner and one source

Create one shared company-facts record for the website and schema. Each fact
must include its meaning, source or owner, last verification date, approval
status, and the pages allowed to use it.

Facts that need central control:

- Founded in 2006.
- Shopify Platinum Partner status and recognition date.
- Team size, projects completed, clients served, and client revenue generated.
- Shopify stores built or launched, including the exact meaning of each number.
- Review platform scores, counts, profile URLs, and last-checked dates.
- Office addresses, phone number, email, and social profiles.
- Leadership names and current titles.
- Client names, project attribution, testimonials, and case-study results.

Public naming should be consistent:

- Brand name: `Dynamic Dreamz`.
- Legal name where needed: `Dynamic Dreamz Solutions LLP`.

## 90-day delivery plan

### Phase 1 - Make the site accurate and eligible

- Fix or remove every link and schema URL that does not work.
- Select one article URL format.
- Centralize approved company facts, reviews, and leadership details.
- Use real content review dates instead of deployment dates.
- Confirm Google Search Console and Bing Webmaster Tools access.
- Confirm that the CDN, firewall, and bot protection allow desired search
  crawlers.
- Add IndexNow for meaningful URL changes.

### Phase 2 - Complete commercial journeys

- Build the priority Shopify service pages.
- Define a different purpose for each similar Shopify Plus page.
- Complete Work, Case Study, Contact, and Request a Quote pages.
- Link homepage proof and portfolio items to internal case studies.
- Publish the strongest approved case studies first.

### Phase 3 - Publish content worth citing

- Migrate the most useful decision-stage articles first, not the full archive.
- Add real authors, reviewers, dates, sources, examples, and limitations.
- Add evidence-led service FAQs based on real buyer questions.
- Pursue approved client co-marketing and expert contributions.
- Start monthly prompt and citation tracking.

## Page-by-page action summary

### Home (`/`)

What is working:

- The page clearly targets Shopify Plus, DTC, B2B, agency, migration,
  integration, CRO, mobile, and support needs.
- Partner proof, reviews, client brands, statistics, work, integrations, and
  testimonials give strong trust context.
- Video testimonials have useful structured data.

What to do:

- Build the Quote, Work, and Blog destinations before launch.
- Use one article URL pattern everywhere.
- Remove service offers from schema until their pages are live.
- Use approved proof numbers from the shared fact source.
- Link portfolio cards to internal case studies that explain our contribution.
- Add evidence and descriptive links as service pages go live.
- Use a real content review date.
- Add a short, approved statement that explains who Dynamic Dreamz helps.

### About Us (`/about-us/`)

What is working:

- The page explains the company history from 2006 to the 2025 Shopify Platinum
  Partner milestone.
- Leadership, team, values, company video, and business proof are visible.

What to do:

- Make "About Dynamic Dreamz" clear in the main heading or visible page label.
- Confirm the founders' current titles and use them everywhere.
- Link the exact source for the "Top 10 Shopify developers by Upwork" claim, or
  revise/remove it.
- Add a concise company introduction and facts block.
- Improve founder biographies using approved experience and profile details.
- Improve timeline grammar without changing the facts.
- Use a real leadership/content review date.

### Career (`/career/`)

What is working:

- Roles, experience, job type, dates, positions, PDFs, and city filters are
  available.
- Job schema and real workplace images support job discovery.

What to do:

- Build and test the application route with role and location prefilled.
- Publish only the real location or locations for each job.
- Put full approved job details in indexable HTML, not only in a PDF.
- Add a review or expiry date and remove closed jobs quickly.
- Improve the H1 and job descriptions after HR approval.
- Clearly explain office location, work model, hours, hiring steps, growth, and
  benefits.
- Prefer a separate page for each job when enough approved content exists.

### Life at Dynamic Dreamz (`/life-dynamicdreamz/`)

What is working:

- The page shows culture, teamwork, inclusivity, growth, social activity, and
  wellbeing.
- The gallery and visible FAQs give useful first-party evidence.

What to do:

- Confirm the legacy URL and add a permanent redirect if needed.
- Use the canonical `/career/` link and correct the company-name typo.
- Make "Life at Dynamic Dreamz" clear in the heading or page label.
- Correct grammar after HR and content approval.
- Verify sensitive work-from-home, working-hours, pregnancy, and late-evening
  policy statements with HR and add a review date.
- Add factual event captions or dates where approved.
- Keep FAQ schema exactly aligned with the visible answers.

### Resources (`/resources/`)

What is working:

- The hub covers Shopify, migrations, performance, SEO, AI, B2B, white-label,
  and platform comparisons.
- Article cards have descriptive image text and real dates.
- The page includes topics, brand proof, reviews, a company video, and a CTA.

What to do:

- Show articles in the page and schema only after their local routes exist.
- Use one approved article URL pattern.
- Use the same verified reviews and company facts as the homepage.
- Replace vague or conflicting claims.
- Use a shorter, more direct Shopify and ecommerce resources H1 and intro after
  content approval.
- Put articles in the correct categories and hide or explain empty categories.
- Add approved authors, reviewers, expertise, and real review dates.
- Improve generic list articles with examples, decisions, screenshots,
  practical experience, and limitations.
- Build the Request a Quote route and use topic-relevant CTAs.

## Content and evidence standards

### Every important service page should explain

1. What the service is and who it is for.
2. When it may not be the right fit.
3. The business problems it solves.
4. Deliverables, limits, platforms, and integrations.
5. Process, communication, governance, and QA.
6. Timeline factors and approved engagement/pricing information.
7. Related case studies and measurable outcomes.
8. The expert who contributed or reviewed the content.
9. Real buyer FAQs and a clear next step.

### Every strong case study should include

- Approved client attribution, industry, region, and platform details.
- The business challenge and technical constraints.
- Scope, deliverables, integrations, team role, and delivery period.
- Approved quantitative results or a clear qualitative outcome.
- An approved client quote and source when available.
- Useful screenshots, captions, alt text, related services, and resources.

Never invent a percentage or result. A precise qualitative outcome is better
than an unsupported number.

### Every expert article should include

- One clear problem and an early answer.
- Original examples, checklists, data, screenshots, or practitioner lessons.
- Assumptions, trade-offs, limitations, and cases where the advice does not
  apply.
- A real author, reviewer when appropriate, publish date, update date, and
  sources.
- Links to relevant services and case studies.
- A CTA that matches the reader's decision stage.

## Technical rules in plain words

- Search engines and AI search crawlers must be able to reach the public site.
- Important answers and facts must exist as readable HTML text.
- Canonical, navigation, sitemap, and schema URLs must match.
- The sitemap must contain only live, indexable, successful pages.
- Schema must describe visible content and link only to working pages.
- Ratings must identify their exact review source.
- Authors, people, dates, results, reviews, and locations must be real.
- Use real content change dates, not the date of every deployment.
- Keep `OAI-SearchBot` allowed if ChatGPT Search visibility is wanted.
- Treat `GPTBot` as a separate leadership decision because it concerns
  potential model-training use, not ChatGPT Search discovery.
- Use IndexNow only when a page is added, materially updated, redirected, or
  removed.

## How success will be measured

Maintain a stable list of 25 to 40 important questions across Shopify Plus,
migrations, B2B, integrations, CRO, performance, white-label services, mobile
commerce, company facts, careers, and culture.

Check the same questions monthly and record:

- Whether Dynamic Dreamz appeared and whether it was cited or recommended.
- Which page was cited and what claim was used.
- Whether the claim was accurate.
- Which competitors and pages were cited.
- Search intent, location, date, and product/model when visible.

Also track:

- Google and Bing search visibility and crawl issues.
- Bing AI citations and grounding queries.
- AI referral visits and their landing pages.
- Qualified enquiries, consultation bookings, and assisted conversions.
- Leads that used a case study before converting.
- Branded-search growth and the quality of AI referral engagement.

Do not report raw AI mentions as success. Connect visibility to accurate
citations, qualified visits, leads, and revenue opportunities.

## Ownership

| Team | Main responsibility |
| --- | --- |
| SEO | Search intent, canonical policy, metadata, monitoring, and prompt tracking |
| Content | Visible copy, sources, authors, reviewers, and update schedules |
| Development | Rendering, crawlability, schema, sitemap, robots, redirects, IndexNow, performance, and validation |
| Leadership | Company claims, credentials, positioning, official profiles, and GPTBot policy |
| Client Success | Client names, testimonials, attribution, and outcome approval |
| HR | Job details, workplace policies, benefits, locations, and expiry status |

## Leadership decisions needed

1. Confirm the P0 launch blockers and owners.
2. Approve the source and definition for every company proof number.
3. Confirm leadership titles and approved official/external profiles.
4. Choose the canonical article URL structure.
5. Approve the order of service, case-study, conversion, and article routes.
6. Confirm the policy for `GPTBot` separately from search crawlers.
7. Ensure HR reviews all job and workplace-policy statements.
8. Approve which client names, quotes, results, and screenshots may be used.

## Definition of AEO/GEO-ready

A page is ready only when:

- Its canonical URL works and is indexable.
- It is in the sitemap when appropriate.
- Important content is server-rendered and easy to understand.
- Its H1, introduction, and headings clearly explain the page.
- It answers the important questions for its audience.
- Its claims are approved, supported, and consistent.
- Relevant project or expert evidence is visible.
- Internal links connect services, proof, resources, and conversion pages.
- Schema matches visible content and uses only working URLs.
- Authors, reviewers, publish dates, and modification dates are accurate.
- Images, videos, alt text, captions, and schema describe the same subject.
- Required search and AI crawlers are not blocked.
- Accessibility, links, schema, SEO, lint, and production build checks pass.
- Target questions and a measurement owner are recorded.

## Review schedule

Review the full strategy every quarter and after major Google, Bing, OpenAI,
schema, or site-architecture changes. Keep page history and unresolved actions
in the full strategy instead of deleting them after launch.
