import fs from "node:fs";
import path from "node:path";
import process from "node:process";

// 1. Resolve environment variables
let envToken = process.env.STRAPI_API_TOKEN;
let envUrl = process.env.STRAPI_API_URL;

if (!envToken || !envUrl) {
  try {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf-8");
      for (const line of envContent.split("\n")) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const [key, ...vals] = trimmed.split("=");
        const val = vals.join("=").trim();
        if (key === "STRAPI_API_TOKEN" && !envToken) envToken = val;
        if (key === "STRAPI_API_URL" && !envUrl) envUrl = val;
      }
    }
  } catch {
    // Ignore file read error
  }
}

const STRAPI_URL = (envUrl || "http://localhost:1337").replace(/\/+$/, "");
const STRAPI_TOKEN = envToken;

if (!STRAPI_TOKEN) {
  console.error("❌ STRAPI_API_TOKEN is not defined in process.env or .env file.");
  process.exit(1);
}

const POSTS_DIR = path.resolve(process.cwd(), "src/content/blog-posts/posts");
if (!fs.existsSync(POSTS_DIR)) {
  console.error(`❌ Blog posts directory not found: ${POSTS_DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".json"));

const headers = {
  Authorization: `Bearer ${STRAPI_TOKEN}`,
  "Content-Type": "application/json",
};

async function fetchJson(endpoint, options = {}) {
  const url = `${STRAPI_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
  const res = await fetch(url, {
    headers: { ...headers, ...options.headers },
    ...options,
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }

  if (!res.ok) {
    throw new Error(
      `Request failed [${res.status} ${res.statusText}] at ${url}: ${typeof data === "object" ? JSON.stringify(data) : data}`
    );
  }

  return data;
}

// 2. Ensure Categories Exist
async function ensureCategories() {
  console.log("📁 Checking categories in Strapi...");
  const categoryMap = new Map();

  try {
    const existing = await fetchJson("/api/categories?pagination[pageSize]=100");
    if (Array.isArray(existing?.data)) {
      for (const cat of existing.data) {
        if (cat.slug && cat.documentId) {
          categoryMap.set(cat.slug.toLowerCase(), cat.documentId);
        }
      }
    }
  } catch (err) {
    console.warn("⚠️ Could not fetch existing categories:", err.message);
  }

  const defaultCategories = [
    { name: "Shopify", slug: "shopify", description: "Shopify development, themes, and apps" },
    { name: "eCommerce", slug: "ecommerce", description: "General ecommerce strategy and growth" },
    { name: "WordPress", slug: "wordpress", description: "WordPress and WooCommerce development" },
    { name: "Big-Commerce", slug: "big-commerce", description: "BigCommerce migration and development" },
    { name: "Faqs", slug: "faqs", description: "Frequently asked questions and guides" },
  ];

  for (const cat of defaultCategories) {
    if (!categoryMap.has(cat.slug.toLowerCase())) {
      try {
        const res = await fetchJson("/api/categories", {
          method: "POST",
          body: JSON.stringify({
            data: {
              name: cat.name,
              slug: cat.slug,
              description: cat.description,
            },
          }),
        });
        const docId = res?.data?.documentId;
        if (docId) {
          categoryMap.set(cat.slug.toLowerCase(), docId);
          console.log(`  ➕ Created category: ${cat.name} (${cat.slug}) -> ${docId}`);
        }
      } catch (err) {
        console.error(`  ❌ Failed to create category ${cat.slug}:`, err.message);
      }
    } else {
      console.log(`  ✔ Category exists: ${cat.name} (${cat.slug})`);
    }
  }

  return categoryMap;
}

// 3. Ensure Authors Exist
async function ensureAuthors() {
  console.log("\n👤 Checking authors in Strapi...");
  const authorMap = new Map();

  try {
    const existing = await fetchJson("/api/authors?pagination[pageSize]=100");
    if (Array.isArray(existing?.data)) {
      for (const author of existing.data) {
        if (author.slug && author.documentId) {
          authorMap.set(author.slug.toLowerCase(), author.documentId);
        }
      }
    }
  } catch (err) {
    console.warn("⚠️ Could not fetch existing authors:", err.message);
  }

  const defaultAuthors = [
    {
      name: "Tejal Parekh",
      slug: "tejal-parekh",
      role: "Sr. SEO Expert",
      bio: "Tejal Parekh is a seasoned Senior SEO Expert with a proven track record of driving organic growth for businesses across diverse industries. With a deep understanding of search engine algorithms and a passion for digital marketing, Tejal brings a wealth of expertise to Dynamic Dreamz.",
    },
    {
      name: "Rizwan Shaikh",
      slug: "rizwan-shaikh",
      role: "Content Team Lead",
      bio: "I lead the content team at Dynamic Dreamz, shaping clear, purposeful narratives across blogs, landing pages, and brand communication. With a strong grasp of SEO, storytelling, and buyer intent, I focus on creating content that’s not just readable but also useful, relevant, and built to drive real business outcomes.",
    },
  ];

  for (const author of defaultAuthors) {
    if (!authorMap.has(author.slug.toLowerCase())) {
      try {
        const res = await fetchJson("/api/authors", {
          method: "POST",
          body: JSON.stringify({
            data: {
              name: author.name,
              slug: author.slug,
              role: author.role,
              bio: author.bio,
            },
          }),
        });
        const docId = res?.data?.documentId;
        if (docId) {
          authorMap.set(author.slug.toLowerCase(), docId);
          console.log(`  ➕ Created author: ${author.name} (${author.slug}) -> ${docId}`);
        }
      } catch (err) {
        console.error(`  ❌ Failed to create author ${author.slug}:`, err.message);
      }
    } else {
      console.log(`  ✔ Author exists: ${author.name} (${author.slug})`);
    }
  }

  return authorMap;
}

// 4. Main Migration Function
async function migrateBlogs() {
  console.log("================================================================================");
  console.log(`🚀 Starting Blog Migration to Strapi (${files.length} posts found)`);
  console.log(`   Target Strapi instance: ${STRAPI_URL}`);
  console.log("================================================================================\n");

  const categoryMap = await ensureCategories();
  const authorMap = await ensureAuthors();

  console.log(`\n📝 Migrating ${files.length} blog posts...`);

  let createdCount = 0;
  let updatedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(POSTS_DIR, file);
    let post;
    try {
      post = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    } catch (parseErr) {
      console.error(`❌ [${i + 1}/${files.length}] Failed to parse ${file}:`, parseErr.message);
      failedCount++;
      continue;
    }

    const slug = post.slug;
    const catSlug = (post.categoryValue || post.category || "shopify").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const categoryDocId = categoryMap.get(catSlug) || categoryMap.get("shopify");

    let authorDocId = undefined;
    if (post.author?.name) {
      const aSlug = post.author.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      authorDocId = authorMap.get(aSlug);
    }

    const faqs = Array.isArray(post.faqs)
      ? post.faqs.map((f) => ({
          question: f.question || "",
          answer: f.answer || "",
        }))
      : [];

    const articleData = {
      title: post.title,
      slug: post.slug,
      date: post.date || "",
      displayDate: post.displayDate || post.date || "",
      excerpt: post.excerpt || "",
      contentBeforeToc: post.contentBeforeToc || "",
      contentAfterToc: post.contentAfterToc || "",
      faqs,
      author: authorDocId || undefined,
      categories: categoryDocId ? [categoryDocId] : [],
      seo: {
        metaTitle: post.seo?.title || post.title,
        metaDescription: post.seo?.description || post.excerpt || "",
        keywords: post.seo?.keywords || `${post.category || "Shopify"} blog, ${post.title} guide`,
        preventIndexing: false,
      },
      publishedAt: new Date().toISOString(),
    };

    try {
      // Check if article already exists
      const existing = await fetchJson(
        `/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&status=draft`
      );

      const existingDoc = existing?.data?.[0];

      if (existingDoc && existingDoc.documentId) {
        // Update existing article
        await fetchJson(`/api/articles/${existingDoc.documentId}`, {
          method: "PUT",
          body: JSON.stringify({ data: articleData }),
        });
        updatedCount++;
        console.log(`  🔄 [${i + 1}/${files.length}] Updated: "${post.title.slice(0, 50)}..." (${slug})`);
      } else {
        // Create new article
        await fetchJson("/api/articles", {
          method: "POST",
          body: JSON.stringify({ data: articleData }),
        });
        createdCount++;
        console.log(`  ✅ [${i + 1}/${files.length}] Created: "${post.title.slice(0, 50)}..." (${slug})`);
      }
    } catch (err) {
      failedCount++;
      console.error(`  ❌ [${i + 1}/${files.length}] Error migrating ${slug}:`, err.message);
    }
  }

  console.log("\n================================================================================");
  console.log("🏁 Migration Complete Summary:");
  console.log(`   - Total Files Checked: ${files.length}`);
  console.log(`   - Newly Created:      ${createdCount}`);
  console.log(`   - Updated/Refreshed:  ${updatedCount}`);
  console.log(`   - Failed:             ${failedCount}`);
  console.log("================================================================================\n");

  if (failedCount > 0) {
    process.exit(1);
  }
}

migrateBlogs().catch((err) => {
  console.error("❌ Fatal migration error:", err);
  process.exit(1);
});
