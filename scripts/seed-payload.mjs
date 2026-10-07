import { getPayload } from "payload";
import config from "../payload.config.ts";
import { caseStudyDetails } from "../src/content/case-study-details.ts";
import { footerNavigation, primaryNavigation } from "../src/data/navigation.ts";
import { siteConfig } from "../src/data/site.ts";
import fs from "node:fs/promises";
import path from "node:path";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

async function runSeed() {
  console.log("Starting Payload CMS seeding...");
  const payload = await getPayload({ config });

  // 0. Ensure default media asset exists for required upload relations
  let defaultMediaId = null;
  try {
    const existingMedia = await payload.find({ collection: "media", limit: 1 });
    if (existingMedia.docs.length > 0) {
      defaultMediaId = existingMedia.docs[0].id;
    } else {
      const candidatePath = path.resolve(
        process.cwd(),
        "public/assets/trade-theme-customization/hero/trade-theme-customization-service-img.webp",
      );
      const createdMedia = await payload.create({
        collection: "media",
        data: { alt: "Dynamic Dreamz Default Media" },
        filePath: candidatePath,
      });
      defaultMediaId = createdMedia.id;
      console.log(`  ✓ Created default Media placeholder: ID ${defaultMediaId}`);
    }
  } catch (err) {
    console.warn("  ⚠ Notice when preparing default media:", err.message);
  }

  // 1. Seed Site Settings
  console.log("Seeding Site Settings...");
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
  console.log("Seeding Navigation...");
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

  // 3. Seed Blog Articles (all local posts)
  const blogIndexPath = path.join(process.cwd(), "src/content/blog-posts/index.json");
  const blogIndexRaw = await fs.readFile(blogIndexPath, "utf-8");
  const blogIndex = JSON.parse(blogIndexRaw);

  console.log(`Seeding ${blogIndex.length} Blog Articles...`);
  let articlesCreated = 0;
  let articlesSkipped = 0;

  for (const postSummary of blogIndex) {
    const postFilePath = path.join(
      process.cwd(),
      "src/content/blog-posts/posts",
      `${postSummary.slug}.json`,
    );

    try {
      const existing = await payload.find({
        collection: "articles",
        where: { slug: { equals: postSummary.slug } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        articlesSkipped++;
        continue;
      }

      const fileData = await fs.readFile(postFilePath, "utf-8");
      const postDetail = JSON.parse(fileData);

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
          coverImage: defaultMediaId,
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
            metaDescription: postDetail.seo?.description || postDetail.excerpt || "",
          },
        },
      });
      articlesCreated++;
      console.log(`  ✓ Seeded Article: ${postDetail.slug}`);
    } catch (err) {
      console.warn(`  ✗ Failed to seed article ${postSummary.slug}:`, err.message);
    }
  }
  console.log(`Articles seeding done. Created: ${articlesCreated}, Existing: ${articlesSkipped}`);

  // 4. Seed Case Studies (all 58 case studies)
  console.log(`Seeding ${caseStudyDetails.length} Case Studies...`);
  let caseStudiesCreated = 0;
  let caseStudiesSkipped = 0;

  for (const cs of caseStudyDetails) {
    try {
      const existing = await payload.find({
        collection: "case-studies",
        where: { slug: { equals: cs.slug } },
        limit: 1,
      });

      if (existing.docs.length > 0) {
        caseStudiesSkipped++;
        continue;
      }

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
          thumbnail: defaultMediaId,
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
            metaDescription: cs.seo?.description || cs.overview || cs.summary || "",
          },
        },
      });
      caseStudiesCreated++;
      console.log(`  ✓ Seeded Case Study: ${cs.slug}`);
    } catch (err) {
      console.warn(`  ✗ Failed to seed case study ${cs.slug}:`, err.message);
    }
  }
  console.log(`Case studies seeding done. Created: ${caseStudiesCreated}, Existing: ${caseStudiesSkipped}`);

  console.log("Seeding complete!");
  process.exit(0);
}

runSeed();
