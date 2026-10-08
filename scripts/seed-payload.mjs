import { getPayload } from "payload";
import config from "../payload.config.ts";
import { caseStudyDetails } from "../src/content/case-study-details.ts";
import { footerNavigation, primaryNavigation } from "../src/data/navigation.ts";
import { siteConfig } from "../src/data/site.ts";
import { testimonials } from "../src/content/home-client.ts";
import fs from "node:fs/promises";
import path from "node:path";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

async function runSeed() {
  console.log("Starting Payload CMS seeding...");
  const payload = await getPayload({ config });

  // 1. Seed Site Settings
  console.log("\n1. Seeding Site Settings...");
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      phone: siteConfig.phoneDisplay,
      whatsappNumber: "919825195930",
      email: siteConfig.email,
      skype: "live:dynamicdreamz",
      address: "Surat, Gujarat, India",
      socialLinks: [
        { platform: "linkedin", url: siteConfig.social.linkedin },
        { platform: "instagram", url: siteConfig.social.instagram },
      ],
    },
  });
  console.log("  ✓ Seeded Site Settings");

  // 2. Seed Navigation
  console.log("\n2. Seeding Navigation...");
  await payload.updateGlobal({
    slug: "navigation",
    data: {
      headerNav: primaryNavigation.map((group) => ({
        title: group.label,
        subItems: group.items?.map((item) => ({
          label: item.label,
          href: item.href,
          description: item.description,
          badge: item.badge,
        })),
      })),
      footerColumns: footerNavigation.map((col) => ({
        title: col.label,
        links: col.links.map((link) => ({
          label: link.label,
          href: link.href,
        })),
      })),
      footerBottomLinks: [
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  });
  console.log("  ✓ Seeded Navigation");

  // 3. Seed Categories
  console.log("\n3. Seeding Categories...");
  const standardCategories = [
    { name: "Shopify", slug: "shopify" },
    { name: "WordPress", slug: "wordpress" },
    { name: "eCommerce", slug: "ecommerce" },
    { name: "Big-Commerce", slug: "big-commerce" },
    { name: "Faqs", slug: "faqs" },
  ];

  const categoryMap = new Map();
  for (const cat of standardCategories) {
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      categoryMap.set(cat.slug, existing.docs[0].id);
      categoryMap.set(cat.name.toLowerCase(), existing.docs[0].id);
    } else {
      const created = await payload.create({
        collection: "categories",
        data: cat,
      });
      categoryMap.set(cat.slug, created.id);
      categoryMap.set(cat.name.toLowerCase(), created.id);
      console.log(`  ✓ Created Category: ${cat.name}`);
    }
  }
  const defaultCategoryId = categoryMap.get("shopify");

  // 4. Seed Authors (metadata & bios)
  console.log("\n4. Seeding Authors...");
  const authorsData = [
    {
      name: "Dynamic Dreamz Team",
      role: "Agency Team",
      bio: "Expert Shopify Plus, ecommerce, and web development team at Dynamic Dreamz.",
      linkedin: "https://in.linkedin.com/company/dynamic-dreamz-websolutions",
    },
    {
      name: "Rizwan Shaikh",
      role: "Content Team Lead",
      bio: "I lead the content team at Dynamic Dreamz, shaping clear, purposeful narratives across blogs, landing pages, and brand communication. With a strong grasp of SEO, storytelling, and buyer intent, I focus on creating content that’s not just readable but also useful, relevant, and built to drive real business outcomes.",
      linkedin: "https://in.linkedin.com/company/dynamic-dreamz-websolutions",
    },
    {
      name: "Tejal Parekh",
      role: "Sr. SEO Expert",
      bio: "Tejal Parekh is a seasoned Senior SEO Expert with a proven track record of driving organic growth for businesses across diverse industries. With a deep understanding of search engine algorithms and a passion for digital marketing, Tejal brings a wealth of expertise to Dynamic Dreamz.",
      linkedin: "https://in.linkedin.com/in/tejal-parekh-814310206",
    },
  ];

  const authorMap = new Map();
  for (const author of authorsData) {
    const existing = await payload.find({
      collection: "authors",
      where: { name: { equals: author.name } },
      limit: 1,
    });

    if (existing.docs.length > 0) {
      const existingDoc = existing.docs[0];
      await payload.update({
        collection: "authors",
        id: existingDoc.id,
        data: {
          role: author.role,
          bio: author.bio,
          linkedin: author.linkedin,
        },
      });
      authorMap.set(author.name.toLowerCase(), existingDoc.id);
      console.log(`  ✓ Configured Author: ${author.name}`);
    } else {
      const created = await payload.create({
        collection: "authors",
        data: {
          name: author.name,
          role: author.role,
          bio: author.bio,
          linkedin: author.linkedin,
        },
      });
      authorMap.set(author.name.toLowerCase(), created.id);
      console.log(`  ✓ Created Author: ${author.name}`);
    }
  }

  // 5. Seed Blog Articles (all 116 local posts)
  const blogIndexPath = path.join(process.cwd(), "src/content/blog-posts/index.json");
  const blogIndexRaw = await fs.readFile(blogIndexPath, "utf-8");
  const blogIndex = JSON.parse(blogIndexRaw);

  console.log(`\n5. Seeding ${blogIndex.length} Blog Articles (with Categories & Authors)...`);
  let articlesCreated = 0;
  let articlesUpdated = 0;

  for (const postSummary of blogIndex) {
    const postFilePath = path.join(
      process.cwd(),
      "src/content/blog-posts/posts",
      `${postSummary.slug}.json`,
    );

    try {
      const fileData = await fs.readFile(postFilePath, "utf-8");
      const postDetail = JSON.parse(fileData);

      // Match category
      const catKey = (postDetail.categoryValue || postDetail.category || "")
        .toLowerCase()
        .trim();
      let targetCatId = defaultCategoryId;
      if (catKey.includes("wordpress")) {
        targetCatId = categoryMap.get("wordpress");
      } else if (catKey.includes("ecommerce")) {
        targetCatId = categoryMap.get("ecommerce");
      } else if (catKey.includes("big") || catKey.includes("commerce")) {
        targetCatId = categoryMap.get("big-commerce");
      } else if (catKey.includes("faq")) {
        targetCatId = categoryMap.get("faqs");
      } else {
        targetCatId = categoryMap.get("shopify") || defaultCategoryId;
      }

      // Match author
      const authorKey = (postDetail.author?.name || "").toLowerCase().trim();
      const targetAuthorId =
        authorMap.get(authorKey) || authorMap.get("dynamic dreamz team");

      const existing = await payload.find({
        collection: "articles",
        where: { slug: { equals: postSummary.slug } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        const existingDoc = existing.docs[0];
        await payload.update({
          collection: "articles",
          id: existingDoc.id,
          data: {
            author: targetAuthorId || existingDoc.author,
            categories: targetCatId ? [targetCatId] : existingDoc.categories,
            seo: {
              metaTitle: existingDoc.seo?.metaTitle || postDetail.seo?.title || postDetail.title,
              metaDescription:
                existingDoc.seo?.metaDescription ||
                postDetail.seo?.description ||
                postDetail.excerpt ||
                "",
            },
          },
        });
        articlesUpdated++;
      } else {
        const articleText =
          postDetail.content ||
          postDetail.contentBeforeToc ||
          postDetail.excerpt ||
          postDetail.title ||
          "";

        await payload.create({
          collection: "articles",
          data: {
            title: postDetail.title,
            slug: postDetail.slug,
            date: postDetail.date || new Date().toISOString(),
            displayDate: postDetail.displayDate,
            author: targetAuthorId || undefined,
            categories: targetCatId ? [targetCatId] : [],
            excerpt: postDetail.excerpt || postDetail.title || "",
            content: {
              root: {
                type: "root",
                children: [
                  {
                    type: "paragraph",
                    children: [{ text: articleText }],
                  },
                ],
              },
            },
            faqs: Array.isArray(postDetail.faqs) ? postDetail.faqs : [],
            seo: {
              metaTitle: postDetail.seo?.title || postDetail.title,
              metaDescription:
                postDetail.seo?.description || postDetail.excerpt || "",
            },
          },
        });
        articlesCreated++;
      }
    } catch (err) {
      console.warn(`  ✗ Failed to process article ${postSummary.slug}:`, err.message);
    }
  }
  console.log(`  ✓ Articles: ${articlesCreated} created, ${articlesUpdated} updated`);

  // 6. Seed Case Studies (all 58 case studies)
  console.log(`\n6. Seeding ${caseStudyDetails.length} Case Studies...`);
  let caseStudiesCreated = 0;
  let caseStudiesUpdated = 0;

  for (const cs of caseStudyDetails) {
    try {
      const existing = await payload.find({
        collection: "case-studies",
        where: { slug: { equals: cs.slug } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        const existingDoc = existing.docs[0];
        await payload.update({
          collection: "case-studies",
          id: existingDoc.id,
          data: {
            seo: {
              metaTitle: existingDoc.seo?.metaTitle || cs.seo?.title || cs.title,
              metaDescription:
                existingDoc.seo?.metaDescription ||
                cs.seo?.description ||
                cs.overview ||
                cs.summary ||
                "",
            },
          },
        });
        caseStudiesUpdated++;
      } else {
        const challengeText =
          typeof cs.challenge === "string"
            ? cs.challenge
            : cs.challenge?.description || "";

        const solutionText =
          typeof cs.solution === "string"
            ? cs.solution
            : Array.isArray(cs.solutions)
            ? cs.solutions.join("\n\n")
            : "";

        await payload.create({
          collection: "case-studies",
          data: {
            title: cs.title,
            slug: cs.slug,
            clientName: cs.clientName,
            industry: cs.industry || "",
            technology: cs.technology || "Shopify Plus",
            websiteUrl: cs.websiteUrl || "",
            overview: cs.overview || cs.summary || "",
            challenge: challengeText,
            solution: solutionText,
            metrics:
              cs.results?.metrics?.map((m) => ({
                value: m.value,
                label: m.label,
              })) || [],
            seo: {
              metaTitle: cs.seo?.title || cs.title,
              metaDescription:
                cs.seo?.description || cs.overview || cs.summary || "",
            },
          },
        });
        caseStudiesCreated++;
      }
    } catch (err) {
      console.warn(`  ✗ Failed to process case study ${cs.slug}:`, err.message);
    }
  }
  console.log(`  ✓ Case Studies: ${caseStudiesCreated} created, ${caseStudiesUpdated} updated`);

  // 7. Seed Testimonials (11 testimonials)
  console.log(`\n7. Seeding ${testimonials.length} Testimonials...`);
  let testimonialsCreated = 0;
  let testimonialsUpdated = 0;

  for (const t of testimonials) {
    try {
      const existing = await payload.find({
        collection: "testimonials",
        where: { clientName: { equals: t.name } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        const existingDoc = existing.docs[0];
        await payload.update({
          collection: "testimonials",
          id: existingDoc.id,
          data: {
            company: t.company,
            content: t.quote,
            videoUrl: t.videoId ? `https://www.youtube.com/watch?v=${t.videoId}` : existingDoc.videoUrl,
          },
        });
        testimonialsUpdated++;
      } else {
        await payload.create({
          collection: "testimonials",
          data: {
            clientName: t.name,
            company: t.company,
            content: t.quote,
            rating: 5,
            videoUrl: t.videoId ? `https://www.youtube.com/watch?v=${t.videoId}` : undefined,
          },
        });
        testimonialsCreated++;
      }
    } catch (err) {
      console.warn(`  ✗ Failed to process testimonial for ${t.name}:`, err.message);
    }
  }
  console.log(`  ✓ Testimonials: ${testimonialsCreated} created, ${testimonialsUpdated} updated`);

  // Summary Report
  console.log("\n==========================================");
  console.log("     PAYLOAD CMS SEEDING COMPLETE         ");
  console.log("==========================================");
  console.log(`• Authors Configured:    ${authorsData.length}`);
  console.log(`• Blog Articles:         ${blogIndex.length} (Created: ${articlesCreated}, Updated: ${articlesUpdated})`);
  console.log(`• Case Studies:          ${caseStudyDetails.length} (Created: ${caseStudiesCreated}, Updated: ${caseStudiesUpdated})`);
  console.log(`• Testimonials:          ${testimonials.length} (Created: ${testimonialsCreated}, Updated: ${testimonialsUpdated})`);
  console.log("==========================================\n");

  process.exit(0);
}

runSeed();
