import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const indexPath = path.join(rootDir, "src", "content", "blog-posts", "index.json");
const postsDir = path.join(rootDir, "src", "content", "blog-posts", "posts");
const seoLimits = { titleMin: 15, titleMax: 60, descriptionMin: 70, descriptionMax: 160 };
const categories = new Set(["Shopify", "WordPress", "eCommerce", "Big-Commerce", "Faqs"]);
const localAssetPattern = /^\/assets\/[a-zA-Z0-9._/-]+$/;

function fail(message) {
  throw new Error(message);
}

function assertAsset(asset, label) {
  if (!asset || !localAssetPattern.test(asset.src)) fail(`${label} must use a project-owned asset path.`);
  const file = path.join(rootDir, "public", asset.src.slice(1));
  if (!fs.existsSync(file)) fail(`${label} is missing: ${asset.src}`);
  if (!asset.alt?.trim()) fail(`${label} must have intentional alt text.`);
  if (!Number.isFinite(asset.width) || asset.width <= 0 || !Number.isFinite(asset.height) || asset.height <= 0) {
    fail(`${label} has invalid dimensions.`);
  }
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
if (!Array.isArray(index) || index.length !== 119) fail(`Expected 119 blog index entries; found ${index.length}.`);
const slugs = new Set();
for (const entry of index) {
  if (slugs.has(entry.slug)) fail(`Duplicate blog slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) fail(`Invalid blog slug: ${entry.slug}`);
  if (!categories.has(entry.category)) fail(`Invalid category for ${entry.slug}: ${entry.category}`);
  if (entry.category !== "Faqs" && entry.image) {
    assertAsset({ src: entry.image, width: entry.width, height: entry.height, alt: entry.title }, `${entry.slug} featured image`);
  }
  if (entry.seo.title.length < seoLimits.titleMin || entry.seo.title.length > seoLimits.titleMax) fail(`${entry.slug} SEO title is outside ${seoLimits.titleMin}-${seoLimits.titleMax} characters.`);
  if (entry.seo.description.length < seoLimits.descriptionMin || entry.seo.description.length > seoLimits.descriptionMax) fail(`${entry.slug} SEO description is outside ${seoLimits.descriptionMin}-${seoLimits.descriptionMax} characters.`);
}

const detailFiles = fs.readdirSync(postsDir).filter((file) => file.endsWith(".json"));
if (detailFiles.length !== index.length) fail(`Expected ${index.length} detail files; found ${detailFiles.length}.`);

for (const slug of slugs) {
  const file = path.join(postsDir, `${slug}.json`);
  if (!fs.existsSync(file)) fail(`Missing detail file for ${slug}.`);
  const post = JSON.parse(fs.readFileSync(file, "utf8"));
  if (post.slug !== slug) fail(`Detail slug mismatch in ${slug}.`);
  if (post.category !== "Faqs" && post.featuredImage) {
    assertAsset(post.featuredImage, `${slug} featured image`);
  }
  if (post.author?.image) {
    const authorAsset = { src: post.author.image, width: 150, height: 150, alt: post.author.name };
    assertAsset(authorAsset, `${slug} author image`);
  }
  if (!Array.isArray(post.contentBeforeToc) || !Array.isArray(post.contentAfterToc)) {
    fail(`${slug} must have array content blocks for contentBeforeToc and contentAfterToc.`);
  }
  const allBlocks = [...post.contentBeforeToc, ...post.contentAfterToc];
  if (allBlocks.length === 0) fail(`${slug} has no article content blocks.`);

  const ids = new Set();
  function checkInlineNodes(nodes) {
    if (!Array.isArray(nodes)) return;
    for (const node of nodes) {
      if (typeof node === "string") {
        if (/ez-toc-container/i.test(node)) fail(`${slug} contains an unsafe or runtime live-site reference: ${node}`);
      } else if (typeof node === "object" && node !== null) {
        if (node.type === "link") {
          const href = node.href;
          if (/dynamicdreamz\.com|^javascript:/i.test(href)) fail(`${slug} contains an unsafe link: ${href}`);
          if (/^\/blogs\/[a-z0-9-]+(?:[?#].*)?$/i.test(href)) {
            const linkedSlug = href.slice("/blogs/".length).split(/[?#]/, 1)[0];
            if (!slugs.has(linkedSlug)) fail(`${slug} links to an unknown blog post: ${href}`);
          }
        }
      }
    }
  }

  for (const block of allBlocks) {
    if (block.type === "heading") {
      if (block.id) ids.add(block.id);
    } else if (block.type === "paragraph") {
      checkInlineNodes(block.children);
    } else if (block.type === "list") {
      for (const item of block.items) {
        checkInlineNodes(item.content);
        if (item.children) {
          for (const child of item.children) checkInlineNodes(child.content);
        }
      }
    } else if (block.type === "image") {
      assertAsset({ src: block.src, width: block.width, height: block.height, alt: block.alt }, `${slug} inline image`);
    } else if (block.type === "table") {
      if (block.headers) checkInlineNodes(block.headers);
      if (block.rows) {
        for (const row of block.rows) {
          for (const cell of row) checkInlineNodes(cell);
        }
      }
    }
  }

  for (const item of post.toc) {
    if (!item.label || !/^#[^\s]+$/.test(item.href)) fail(`${slug} has an invalid TOC item.`);
    if (!ids.has(item.href.slice(1))) fail(`${slug} TOC target is missing: ${item.href}`);
  }
  for (const relation of ["previous", "next"]) {
    if (post[relation] && !slugs.has(post[relation].slug)) fail(`${slug} has an unknown ${relation} post.`);
  }
  if (post.faqs.some((faq) => !faq.question || !faq.answer)) fail(`${slug} has an incomplete FAQ item.`);
}

console.log(`Checked ${index.length} blog detail records, local assets, metadata, links, fragments, and FAQ data.`);
