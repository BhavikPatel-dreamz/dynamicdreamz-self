import fs from "node:fs";
import path from "node:path";

const envFile = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envFile)) {
  const content = fs.readFileSync(envFile, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

const pagePayload = {
  data: {
    title: "Shopify Speed & Performance Audit",
    slug: "shopify-audit",
    seo: {
      metaTitle: "Shopify Speed & Performance Audit | Dynamic Dreamz",
      metaDescription:
        "Accelerate your Shopify store load times, increase mobile conversions, and optimize Core Web Vitals with our certified audit.",
      keywords: "Shopify speed audit, Shopify CRO, Core Web Vitals, speed optimization",
      preventIndexing: false,
    },
    sections: [
      {
        __component: "sections.hero",
        title: "Shopify Speed & Performance Audit",
        description:
          "Accelerate your Shopify store load times, increase mobile conversions, and optimize Core Web Vitals with our certified audit.",
        subheading: "Expert Technical Audit",
        ctaLabel: "Request an Audit",
        ctaHref: "/request-quote",
        variant: "split",
        showReviews: true,
      },
      {
        __component: "sections.proof-counters",
        heading: "Proven Results For Fast Growing Brands",
        description: "Track record of delivering enterprise-grade ecommerce experiences.",
        counters: [
          { label: "Stores Audited", display: "500+", value: 500, suffix: "+" },
          { label: "Avg Speed Increase", display: "45%", value: 45, suffix: "%" },
          { label: "Conversion Lift", display: "2.4x", value: 2, suffix: "x" },
          { label: "Happy Clients", display: "1100+", value: 1100, suffix: "+" },
        ],
      },
      {
        __component: "sections.faq-accordion",
        heading: "Frequently Asked Questions",
        description: "Learn more about what our Shopify performance audit includes.",
        faqs: [
          {
            question: "What is included in the Shopify performance audit?",
            answer:
              "We evaluate Core Web Vitals, third-party app scripts, theme liquid performance, image compression, and checkout performance.",
          },
          {
            question: "How long does a performance audit take?",
            answer:
              "Typically 3 to 5 business days for a complete technical report and actionable optimization roadmap.",
          },
          {
            question: "Will the audit affect our live store?",
            answer:
              "No, our audit runs non-intrusively in a separate development branch or analysis environment without disrupting shoppers.",
          },
        ],
      },
      {
        __component: "sections.cta-banner",
        heading: "Ready to make your Shopify store lightning fast?",
        description: "Contact our certified Shopify Plus engineers today for a comprehensive performance analysis.",
        btnText: "Get Started",
        btnUrl: "/request-quote",
      },
    ],
  },
};

async function seedPage() {
  console.log(`Seeding modular page 'shopify-audit' into Strapi at ${STRAPI_URL}...`);

  const headers = {
    "Content-Type": "application/json",
  };
  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  // Check if page exists by slug
  const checkRes = await fetch(`${STRAPI_URL}/api/pages?filters[slug][$eq]=shopify-audit`, {
    headers,
  });
  const checkData = await checkRes.json();
  const existing = checkData?.data?.[0];

  let res;
  if (existing) {
    const docId = existing.documentId || existing.id;
    console.log(`Found existing page with id ${existing.id} (documentId: ${docId}), updating...`);
    res = await fetch(`${STRAPI_URL}/api/pages/${docId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(pagePayload),
    });
  } else {
    console.log("Creating new modular page...");
    res = await fetch(`${STRAPI_URL}/api/pages`, {
      method: "POST",
      headers,
      body: JSON.stringify(pagePayload),
    });
  }

  if (!res.ok) {
    const errText = await res.text();
    console.error(`Failed to seed modular page: ${res.status} ${res.statusText}`);
    console.error(errText);
    process.exit(1);
  }

  const json = await res.json();
  console.log("Successfully seeded modular page into Strapi!");
  console.log("Page id:", json?.data?.id, "documentId:", json?.data?.documentId);
}

seedPage().catch((err) => {
  console.error("Error seeding page:", err);
  process.exit(1);
});
