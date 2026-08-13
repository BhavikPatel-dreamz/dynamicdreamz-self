# Page Content Improvements

Use this file to track visible page-copy changes that can improve SEO, content
quality, clarity, conversion, or schema consistency while migrating the live
Dynamic Dreamz site.

This is for UI/content changes such as headings, descriptions, section copy,
CTA labels, FAQ wording, proof text, image alt text, and internal-link anchor
text. Keep metadata-only fixes in the relevant code/content files, but record
the visible copy changes here when they affect page quality.

## Relationship To The AEO/GEO Strategy

`docs/aeo-geo-strategy.md` is the permanent source of truth for AEO/GEO
findings, priorities, target prompts, evidence gaps, entity work, crawler work,
schema work, and measurement actions. Keep those recommendations in that file
as new pages are built.

Use this file only for exact visible-copy changes that need content approval or
implementation. When an AEO/GEO recommendation produces a copy change, keep the
original recommendation in the strategy and add the implementation-ready copy
here under the same route. Do not move or delete the strategy item.

## Migration Approval Gate

This file is an approval queue, not automatic permission to edit the UI. During
migration, preserve the current live-site wording and visual content. An SEO,
AEO, GEO, audit, or content-quality request does not authorize any visible
change listed here.

- New visible proposals start as `suggested` or `deferred`.
- Change a proposal to `approved` only when the project owner approves the exact
  visible copy or design difference in the current task.
- Mark it `implemented` only after that approved change is shipped and visually
  verified.
- Technical/schema approval does not approve visible copy.
- If the live UI contains a factual, policy, legal, accessibility, or trust
  problem, document and escalate it; do not silently correct the visible page.

## How To Use

For every page build or one-page SEO audit:

1. Add or update a section for the page name and route.
2. Compare live-site copy, local UI copy, SEO audit findings, and search intent.
3. Record exact recommended replacement copy when content should change.
4. Mark status as `suggested` or `deferred` unless explicit project-owner
   approval exists for the exact visible change; then use `approved`, followed
   by `implemented` only after verification.
5. Do not invent claims, ratings, awards, client names, dates, or metrics.
6. Preserve the live-site UI and content during migration. Record improvements
   for clarity, accessibility, conversion, SEO, AEO, or GEO without implementing
   visible differences until explicitly approved.

## Suggestion Template

```md
## Page Name (`/route`)

Status: suggested | approved | implemented | deferred
Last reviewed: YYYY-MM-DD
Primary SEO intent:

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 |  |  |  | High | suggested |
| Hero description |  |  |  | High | suggested |
| Section heading |  |  |  | Medium | suggested |
| CTA label |  |  |  | Medium | suggested |
| FAQ |  |  |  | Low | suggested |
| Image alt text |  |  |  | Medium | suggested |
```

## Home (`/`)

Status: visible recommendations deferred; live UI restored
Last reviewed: 2026-08-13
Primary SEO intent: Shopify Plus agency, Shopify Platinum Partner, ecommerce
and mobile development company.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Review/rating proof copy | Visible badges and schema rating may not describe the same rating source. | Removed the ambiguous Organization `aggregateRating`; visible source-specific badge copy remains unchanged. | Prevents mismatch between visible review claims and structured data. | High | implemented |
| Video testimonial descriptions | Video carousel has strong testimonials, but schema-ready descriptions may not be visible for every video. | Added VideoObject schema from the visible testimonial title, client, company, quote, YouTube URL, embed URL, and thumbnail URL. | Supports video discovery and improves E-E-A-T without inventing new UI claims. | Medium | implemented |
| Hero answer | We help DTC brands, B2B businesses and digital agencies build, migrate and scale on Shopify through custom development, B2B solutions, integrations, CRO, performance optimization and ongoing support. | Dynamic Dreamz is a Shopify Platinum Partner and Shopify Plus agency helping established DTC brands, B2B merchants, and digital agencies build, migrate, integrate, optimize, and support Shopify commerce experiences. | Supplies a concise, entity-first answer that identifies the company, credential, audience, and core work in visible server-rendered text. | High | deferred; reverted to live copy on 2026-08-13 |
| AI delivery statement | To accelerate delivery without compromising quality, our teams use modern AI-powered tools such as Cursor, ChatGPT, Claude, Lovable, Bolt, and n8n, alongside proven development processes. | Our teams use AI-assisted tools selectively to accelerate research, prototyping and repetitive delivery tasks. Experienced specialists continue to own implementation, review and quality assurance before release. | Reframes a volatile tool list around buyer outcomes, human accountability, and QA without adding an unsupported speed or security result. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Internal-link anchor text | Many navigation/service links are migration pending. | As pages ship, use descriptive anchors such as "Shopify Plus agency", "Shopify migration services", and "white label Shopify development" instead of generic labels where natural. | Improves internal-link context after routes are built. Broken planned routes are excluded from local SEO scoring until launch. | Medium | deferred |

## About Us (`/about-us`)

Status: visible recommendations deferred; live UI restored
Last reviewed: 2026-08-13
Primary SEO intent: company credibility, leadership, history, values, and
Shopify/ecommerce agency trust.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Agile. Adept. Accurate. | About Dynamic Dreamz: Agile. Adept. Accurate. | Makes the company and page purpose explicit while preserving the live brand phrase. | High | deferred; reverted to live copy on 2026-08-13 |
| Hero description | We are an enthusiastic team of 150+ creative designers, pragmatic programmers, client centric business managers, stringent testers and above all visionary leaders who are ready to help your online business to grow and flourish by offering innovative and technology enabled solutions. | Founded in 2006, Dynamic Dreamz is an ecommerce, web, and mobile development company with more than 150 specialists. As a Shopify Platinum Partner, we help brands and agencies plan, build, migrate, integrate, and support digital commerce experiences. | Gives a concise, entity-first answer with founding year, scale, credential, audience, and capabilities. | High | deferred; reverted to live copy on 2026-08-13 |
| Company story | We are a strong team of 150+ creative web designers, technically sound developers, project managers and analysts ready to help you to take your world changing idea from concept to reality. | Our multidisciplinary team brings together designers, developers, project managers, analysts, and quality specialists to take ambitious digital ideas from concept to reliable delivery. | Improves clarity and removes inflated phrasing without changing the delivery intent. | Medium | deferred; reverted to live copy on 2026-08-13 |
| 2023 milestone | Dynamic Dreamz has been declared as one of the top 10 Shopify developers by UpWork. | Dynamic Dreamz continued expanding its Shopify development capabilities and global ecommerce delivery work. | Removes a prominent ranking claim that has no approved visible source. | High | deferred; reverted to live copy on 2026-08-13 |
| Timeline and values | Several entries contain dated grammar, fragments, or vague wording. | Use the migrated concise milestone and value descriptions while preserving dates and factual intent. | Improves extraction and trust without adding new achievements. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Founder titles | Existing founder cards use current live titles. | Keep the current titles until an authoritative confirmation is available. | Prevents an unsupported leadership change. | High | blocked pending factual confirmation |

## Career (`/career`)

Status: visible recommendations deferred; live UI restored
Last reviewed: 2026-08-13
Primary SEO intent: Dynamic Dreamz careers, IT jobs in Surat and Ahmedabad,
digital marketing roles, and ecommerce technology opportunities.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Explore rewarding career in IT, where your talents thrive and possibilities flourish. | Careers at Dynamic Dreamz | Leads with the employer entity and exact page intent. | High | deferred; reverted to live copy on 2026-08-13 |
| Hero introduction | We are a strong team of 150+ creative designers, agile developers, quality conscious testers, adept project managers and visionary leaders and we help our clients to achieve their goals. | Explore ecommerce, technology, design, marketing, and growth opportunities with Dynamic Dreamz in Surat and Ahmedabad. Join a multidisciplinary team working with global brands and digital agencies. | Answers company, disciplines, locations, and project audience directly. | High | deferred; reverted to live copy on 2026-08-13 |
| Opportunities introduction | Aspirational paragraph does not explain the listings. | Browse current full-time opportunities, then choose Surat or Ahmedabad to review each role's required experience, posting date, summary, and application link. | Makes the section scannable and answer-ready. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Job summaries | Full role detail is available only in linked PDFs. | Add a concise, role-specific responsibility summary to every card from its local PDF. | Gives candidates and crawlers meaningful HTML content. | High | deferred in UI; schema-only summaries retained |
| Job locations | Every role appears under Surat and Ahmedabad on the live page. | Show only PDF-supported locations: Performance Marketing and CRO in Surat; LinkedIn Growth in Ahmedabad; SEO/AEO/GEO and Outbound Sales in both. | Prevents inaccurate job discovery and schema. | High | deferred in UI; PDF-supported schema retained pending HR approval |
| Freshness | No visible listing review date. | Current openings reviewed August 12, 2026. | Makes freshness explicit without inventing closing dates. | High | deferred; visible date removed on 2026-08-13 |
| Workplace benefit | Ample of Employee Engagement Activities | Employee Engagement Activities | Corrects grammar without changing the benefit category. | Low | deferred; reverted to live copy on 2026-08-13 |
| Culture link | Benefits do not route candidates to fuller workplace answers. | Explore life, culture, benefits, and workplace FAQs at Dynamic Dreamz. | Connects the two built recruitment pages with descriptive anchor text. | Medium | deferred; removed for live parity on 2026-08-13 |
| CRO experience | Card/live listing says 1–3 years; PDF says 2–4 years. | Confirm one current range, then update visible content, PDF, and schema together. | Avoids giving candidates conflicting requirements. | High | blocked pending factual confirmation |
| Job CTA destination | Apply links keep `/career-apply-now` with role/location parameters. | Retain during active migration and validate the application flow before launch. | Preserves route intent under the approved unbuilt-route exception. | High | migration pending |

## Life @ Dynamic Dreamz (`/life-dynamicdreamz`)

Status: visible recommendations deferred; live UI restored
Last reviewed: 2026-08-13
Primary SEO intent: Dynamic Dreamz work culture, professional growth,
work-life balance, inclusive workplace, and employee experience.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Meta title | Discover Our Work Culture \| Maintain Work-Life Balance \| Equal Opportunity Employer | Life at Dynamic Dreamz \| Culture & Work-Life Balance | Live title is 83 characters and truncates in search results, burying the brand and "Equal Opportunity Employer" tail. Shortened to 52 characters, keeping the page identity plus the two highest-intent topics; equal-opportunity remains in the meta description. Intentional divergence from live. | High | implemented |
| H1 | Where Teamwork Takes the Lead | Life at Dynamic Dreamz: Where Teamwork Takes the Lead | Names the entity and page purpose while preserving the live phrase. | High | deferred; reverted to live copy on 2026-08-13 |
| Hero description | Dynamic Dreamz gives ample of opportunities to amplify your potential and let you maintain work life balance. | Dynamic Dreamz provides opportunities to develop your skills while supporting a healthy work-life balance. We are committed to an inclusive, equal-opportunity workplace across our Surat and Ahmedabad offices, regardless of caste, creed, religion, or background. | Corrects grammar and adds direct office and workplace context from existing page claims. | High | deferred; reverted to live copy on 2026-08-13 |
| Culture introduction and values | Several descriptions are fragments or broad statements. | Use the migrated complete descriptions for inclusivity, flexibility, teamwork, adaptability, collaboration, and social connection. | Improves readability and extraction without adding guarantees. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Hiring paragraph | Your future is full of possibilities, and at Dynamic Dreramz, we provide the tools and opportunities to explore them. | Your future is full of possibilities, and at Dynamic Dreamz, we provide opportunities to explore them. Build your future with us, where professional growth is connected with personal development. | Fixes the company-name typo and removes awkward phrasing. | High | deferred; reverted to live copy on 2026-08-13 |
| Professional-development FAQ | There are ample of opportunities for the professional development and growth... | Dynamic Dreamz offers opportunities for professional development through projects across a range of industries and technologies. Employees can gain exposure to different business domains, delivery disciplines, and technical challenges. | Improves clarity while retaining the stated development intent. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Working-hours FAQ | Live answer uses awkward five-day and late-hours wording. | Dynamic Dreamz operates a five-day workweek. Teams work day shifts in IST; client requirements can occasionally extend schedules into the late evening, but the company does not operate a night shift. | Makes a sensitive candidate answer readable without changing its stated meaning. | High | deferred; reverted to live copy on 2026-08-13 |
| Remote-work FAQ | Live answer says permanent work from home is unavailable, with case-specific exceptions. | Dynamic Dreamz generally does not offer permanent work from home because teams primarily collaborate from the office. Temporary work-from-home arrangements may be considered in special circumstances under current company policy. | Preserves policy meaning in clearer language. | High | deferred; reverted to live copy on 2026-08-13 |
| Health and wellbeing FAQ | We have setup a recreational zone... Fuss ball... For health point of view... | Dynamic Dreamz has a recreation zone with indoor games such as carrom, foosball, darts, and cards. A treadmill and Android TV are also available so employees can take a break and recharge. | Corrects grammar and spelling without changing the listed facilities. | Low | deferred; reverted to live copy on 2026-08-13 |

## Resources (`/resources`)

Status: visible recommendations deferred; live UI restored
Last reviewed: 2026-08-13
Primary SEO intent: Shopify resources, ecommerce growth guidance, migration
guides, performance, SEO, and white-label development insights.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| H1 | Long conversational resource heading. | Shopify and Ecommerce Resources for Growth Teams | Makes the primary topic and audience concise. | High | deferred; reverted to live copy on 2026-08-13 |
| Hero introduction | Rhetorical questions about finding useful Shopify information. | Practical guides for merchants, ecommerce leaders, developers, and agency partners evaluating Shopify Plus, migrations, performance, CRO, integrations, mobile commerce, and white-label delivery. | Gives an answer-first summary of audience and coverage. | High | deferred; reverted to live copy on 2026-08-13 |
| Resource-hub introduction | Uses informal phrases such as "you're gonna find," inconsistent Shopify capitalization, and several long sentences. | Use the migrated three-point professional introduction covering decisions, topics, team proof, and visible article dates. | Improves readability and enterprise credibility without changing search intent. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Story proof copy | Says the team empowers "hundreds and thousands of brands," calls 150+ people certified Shopify developers, and separately cites 1,000+ stores. | Use the shared approved proof: Shopify Platinum Partner, 150+ experts, 4500+ Shopify store builds, and 1B+ client revenue generated. | Removes ambiguity and conflicting company figures. | High | deferred; reverted to live copy on 2026-08-13 |
| Review cards | Cards show numeric scores and review counts that are not governed by one current source. | Keep the Clutch, Upwork, and GoodFirms profile links but label them as independent review profiles without numeric values. | Prevents stale or inconsistent review claims. | High | deferred; live counts and ratings restored on 2026-08-13 |
| Experience statistic | 18+ Years of Experience becomes stale each year. | Founded 2006 | Uses a stable, precise fact. | Medium | deferred; live statistic restored on 2026-08-13 |
| Taxonomy | First category is labelled Shopify although its articles are white-label topics; Magento is empty. | Rename the first group White Label & Agency Growth and hide the empty Magento group. | Makes visible classification match actual content. | Medium | deferred; live taxonomy restored on 2026-08-13 |
| Trust description | Uses generic phrases such as "cutting edge web technology and framework." | Dynamic Dreamz combines Shopify, ecommerce, web, and mobile expertise with design, development, quality assurance, and long-term technical support. | Replaces commodity wording with concrete capabilities. | Medium | deferred; reverted to live copy on 2026-08-13 |
| Category link | The live story category uses a non-functional `#` destination. | Link "Shopify" to `/blogs/category/shopify`. | Restores useful navigation and descriptive internal-link context. | High | implemented |
| Article image alt text | Several live WordPress image alts repeat filenames with underscores and punctuation. | Use each visible article title as its thumbnail alt text. | Gives every content image meaningful, page-specific alternative text. | Medium | implemented |
| Heading hierarchy | The live page uses a second `h1` for "Our Dynamic Story,". | Keep the visual treatment but render the story title as an `h2`. | Produces one clear primary heading and a logical page outline. | High | implemented |
| Article authorship | Current hub data has no approved author or reviewer. | Add visible author, reviewer, expertise, evidence, and dates on each article during article migration. | Supports attributable expertise without inventing people or credentials. | High | deferred to article migration |
| Article and CTA paths | Planned `/blogs`, category, and `/request-quote` destinations are not all built. | Retain migration-intent paths now and verify route/redirect coverage before launch. | Follows the approved unbuilt-route exception. | High | migration pending |

## Beauty & Cosmetics (`/beauty-cosmetics`)

Status: visible recommendations deferred; live UI preserved
Last reviewed: 2026-08-13
Primary SEO intent: beauty and cosmetics ecommerce development, Shopify beauty
stores, salon booking, interactive commerce, and beauty-industry web solutions.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Meta title | Beauty & Cosmetics Industry Web Development \| eCommerce for Beauty & Cosmetics Industry \| Web Development India \| eCommerce Development Agency \| Dynamic Dreamz | Beauty & Cosmetics Ecommerce Development \| Dynamic Dreamz | Preserves provider and commercial intent within the 60-character title budget. | High | implemented |
| Hero description | Unlock the growth of your beauty & cosmetics business with Dyamic Dreamz | Unlock the growth of your beauty and cosmetics business with Dynamic Dreamz. | Corrects the company-name typo and improves sentence grammar. | High | deferred pending exact visible-copy approval |
| Industry paragraph | We at Dynamic Dreamz, use Shopify eCommerce platform to showcase ‘Before’ and ‘After’ effects of the beauty products. | At Dynamic Dreamz, we use Shopify ecommerce experiences to demonstrate the before-and-after effect of beauty products. | Removes the comma error and makes the capability easier to understand without adding a result claim. | Medium | deferred pending exact visible-copy approval |
| Deliverables introduction | Uses “virtual try ons.” | Use “virtual try-ons.” | Corrects compound-word punctuation. | Low | deferred pending exact visible-copy approval |
| Appointment card | Uses “no shows.” | Use “no-shows.” | Corrects compound-word punctuation. | Low | deferred pending exact visible-copy approval |
| Interactive Features card | Uses “feature rich” and “virtual try ons.” | Use “feature-rich” and “virtual try-ons.” | Improves grammar while preserving the capability claim. | Low | deferred pending exact visible-copy approval |
| Responsive Layouts card | Uses “attention grabbing.” | Use “attention-grabbing.” | Corrects compound-word punctuation. | Low | deferred pending exact visible-copy approval |
| Portfolio introduction | Have a look at our portfolio, how we ‘beautified’ our clients online stores with our seamless IT solutions! | See how our ecommerce solutions helped beauty and cosmetics clients present their brands and products online. | Removes awkward grammar and an unsupported quality adjective while retaining the portfolio intent. | Medium | deferred pending exact visible-copy approval |
| Industry image alt text | Live source incorrectly says “IT Solutions for Food & Beverages Industry Image.” | Makeup artist applying eye makeup for a beauty ecommerce industry section. | Corrects the subject mismatch and gives the content image meaningful alternative text without changing visual UI. | High | implemented |
| Portfolio image alt text | Several live alts are generic or inaccurate, including “Nufyx Image.” | Use brand- and subject-specific descriptions for each visible portfolio image. | Keeps image meaning aligned with the visible brand card. | Medium | implemented |
| CTA destinations | `/request-quote` and `/our-work` are not yet built. | Preserve their canonical path intent during migration and validate or redirect both before launch. | Maintains live CTA flow under the active-migration route exception. | High | migration pending |

## White Label Shopify Development Services (`/white-label-shopify-development-services`)

Status: visible recommendations deferred; live UI preserved
Last reviewed: 2026-08-13
Primary SEO intent: white label Shopify development partner for digital
agencies, Shopify Plus delivery, agency outsourcing, and NDA-backed Shopify
services.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Proof values | Hero says `100+` skilled developers and `1000+` completed Shopify projects; counters say `150+` developers and `1000+` sites; Home uses `4500+` Shopify stores. | Use one leadership-approved definition and value for team size and Shopify delivery volume across every affected page. | Conflicting proof weakens trust and cannot be reconciled safely without provenance. | High | blocked pending factual approval |
| Pricing introduction | “no retainers and minimum hours” | “We offer scalable hiring models with no retainers and no minimum-hour commitments — providing you the flexibility to select the best fit for your agency's requirements.” | The current phrase implies minimum hours and contradicts the visible FAQ. | High | deferred pending sales/legal policy confirmation |
| Agentic-commerce FAQ | “Yes! Every Dynamic Dremaz expert specializes in customizing themes, apps, and integrations to meet your client’s requirements.” | “Agentic commerce enables AI assistants to help shoppers discover products and complete commerce tasks. We can assess a Shopify store’s product data, structured data, integrations, and current platform capabilities, then recommend the work needed for supported agentic experiences.” | Answers the actual question and fixes the company-name typo without claiming unsupported protocol readiness. | High | deferred pending service-owner approval |
| Agentic-commerce capability | “Ready for Shopify's Universal Commerce Protocol so AI agents can discover products and build carts.” | “We assess product data, structured data, and supported Shopify capabilities to prepare stores for emerging AI-assisted shopping experiences.” | Avoids presenting evolving protocol support as an unconditional readiness guarantee. | High | deferred pending technical verification and approval |
| Performance claim | “Our services are fast, secure, and optimized for a smooth user experience.” | “Our delivery process includes performance review, quality assurance, and security-conscious implementation for a smooth user experience.” | Replaces absolute outcomes with an auditable delivery-process statement. | Medium | deferred pending delivery/security evidence |
| AI search claims | “We prepare your clients' stores to be discovered, cited, and recommended by AI engines...” | “We improve the technical and content signals that can help AI-powered search systems understand your clients’ stores.” | Avoids implying that citation or recommendation can be guaranteed. | High | deferred pending content approval |
| Final CTA | “start delivering world-class Shopify solutions under your brand.” | “start delivering Shopify solutions under your brand.” | Removes an unsupported superlative while preserving the conversion intent. | Low | deferred |
| Contextual service links | Shopify Plus, migration, themes, apps, B2B, checkout, and CRO are plain text. | Link each service phrase to its canonical local route as that page ships. | Improves topic relationships and buyer navigation without creating broken links. | Medium | migration pending |

## White Label WordPress Development Services (`/white-label-wordpress-development-services`)

Status: visible recommendations deferred; live UI preserved
Last reviewed: 2026-08-13
Primary SEO intent: white label WordPress development partner for digital
agencies, WooCommerce delivery, agency outsourcing, and NDA-backed WordPress
services.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Metadata proof | Live description says `18+ Years of Experience and 97% Client Retention Rate`; the visible page says `20+` years and does not show retention. | Use local metadata that describes the agency service, scope, and delivery model without the conflicting year count or unsupported retention claim. | Prevents a nonvisual search snippet from contradicting visible content or adding ungoverned proof. | High | implemented in metadata during migration |
| Proof values | `20+` years, `150+` Skilled Developers, `2500+` Client Reviews, and `1000+` Sites Delivered. | Use only leadership-approved values with exact definitions, provenance, review dates, and page-usage rules. | The visible values are not yet governed by one approved fact source. | High | blocked pending factual approval |
| SEO/performance reason | “We are experienced in custom themes, plugins, page builders, and hosting solutions.” duplicates the Diverse Tech Stack description. | “Our WordPress delivery process includes technical SEO checks, performance review, responsive QA, and launch validation based on each project’s approved scope.” | Makes the card answer its heading without guaranteeing rankings or speed outcomes. | High | deferred pending delivery/content approval |
| Figma service | “We can convert your Figma designs into pixel-perfect and responsive WordPress websites.” | “We can convert approved Figma designs into responsive WordPress websites, with visual QA against the supplied layouts and breakpoints.” | Replaces an absolute visual-fidelity claim with an auditable review process. | Medium | deferred pending delivery/content approval |
| Performance service | “We help you get faster load times, better rankings, and improved user experience.” | “We review WordPress performance, front-end delivery, caching, media, and technical SEO factors, then implement the improvements approved for the project.” | Avoids guaranteeing rankings and performance outcomes while describing the delivery scope. | High | deferred pending delivery/content approval |
| Development/testing step | “Our expert team develops and tests your website to be ideal.” | “Our team develops the approved WordPress scope and completes functional, responsive, and quality-assurance checks before handoff.” | Replaces unclear wording with a concrete process that still needs delivery-owner confirmation. | Medium | deferred pending delivery approval |
| Support step | “We offer ongoing support after the post-launch.” | “We offer ongoing post-launch support and maintenance while remaining behind the scenes under your agency’s brand.” | Corrects grammar while preserving white-label and support intent. | Low | deferred pending exact visible-copy approval |
| Ongoing-basis FAQ | “Can I hire your team on an ongoing basis?” | “Can I hire your team for ongoing WordPress work?” | Improves grammar and makes the scope explicit. | Low | deferred pending exact visible-copy approval |
| Office-hours FAQ | States two offices, Monday–Friday 9 AM–7 PM IST, and off-hours client-call availability. | Retain only after operations, HR, and sales confirm that the locations, hours, and availability policy are current. | Prevents the page from setting inaccurate support and availability expectations. | High | blocked pending policy confirmation |
| Case-study evidence | No visible WordPress white-label delivery example or approved outcome. | Add an anonymized or client-approved example covering scope, constraints, communication model, QA, confidentiality, and outcome. | Gives agency buyers evidence without exposing a confidential client or inventing a metric. | High | deferred pending evidence and client-success approval |
| Contextual service links | WordPress, WooCommerce, themes, performance, and developer-capacity phrases are plain text. | Link each phrase to its canonical local route as that destination ships. | Improves buyer navigation and topic relationships without creating broken links. | Medium | migration pending |

## Fashion & Apparel (`/fashion`)

Status: visible recommendations deferred; live UI preserved during migration
Last reviewed: 2026-08-13
Primary SEO intent: fashion and apparel ecommerce development, Shopify fashion
stores, responsive merchandising, product galleries, social integration, and
fashion-industry web design.

| Area | Current UI Copy | Suggested UI Copy | Reason | Priority | Status |
| --- | --- | --- | --- | --- | --- |
| Hero description | “Display your fashion statement with style. Let Dynamic Dreamz help you in exhibiting your apparels in the most appealing manner to your customers.” | “Present your fashion brand with style. Dynamic Dreamz can help showcase your apparel in an engaging, customer-friendly ecommerce experience.” | Replaces the nonstandard plural “apparels” and improves clarity without adding a result claim. | High | deferred pending exact visible-copy approval |
| Industry paragraph | Uses “fast paced,” “trend driven,” “Shopify Plus based,” and “hassle free.” | Hyphenate the compound modifiers and simplify the description while preserving the seasonal-fashion and Shopify/Shopify Plus intent. | Improves grammar and extraction. | Medium | deferred pending exact visible-copy approval |
| Deliverables introduction | Says the delivered UI/UX “increases customer retention and sales growth.” | Describe the intended merchandising and usability benefits without guaranteeing retention or sales outcomes, unless approved evidence is added. | Avoids an unsupported outcome claim. | High | deferred pending evidence and exact copy approval |
| Fashion website-design card | Final sentence has no period and the paragraph is long. | Split the zoom/product-detail explanation into concise sentences and add final punctuation. | Improves readability while retaining the feature. | Low | deferred pending exact visible-copy approval |
| Leverage of technology card | “make insights into powerful data analytics” is unclear. | Explain inventory/supply-chain management, engagement, analytics, and forecasting in direct language without claiming unsupported results. | Improves clarity and factual precision. | Medium | deferred pending exact visible-copy approval |
| Portfolio introduction | “clients vision” and “customers perception” omit possessive apostrophes. | “Our Fashion and Apparel Portfolio reflects our clients’ vision and their customers’ perception of fashion.” | Corrects grammar while preserving intent. | Low | deferred pending exact visible-copy approval |
| Donj category label | “WordPress + Wocommerce” | “WordPress + WooCommerce” | Corrects the platform spelling. | Low | deferred pending exact visible-copy approval |
| Portfolio image alt text | Live labels incorrectly identify SomewhereCo as Sambazon and Donj Jewellery as The Huddle Sports Grill. | Use brand- and subject-specific descriptions for all six project images. | Prevents unrelated alt text and accurately describes the visible media. | High | implemented as approved nonvisual accessibility correction |
| CTA destinations | `/request-quote` and `/our-work` are not built. | Preserve their migration-intent paths and validate or redirect both before launch. | Maintains live CTA flow during migration. | High | migration pending |

