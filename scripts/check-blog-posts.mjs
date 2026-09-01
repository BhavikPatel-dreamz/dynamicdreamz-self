import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const indexPath = path.join(rootDir, "src", "content", "blog-posts", "index.json");
const postsDir = path.join(rootDir, "src", "content", "blog-posts", "posts");
const seoLimits = { titleMin: 15, titleMax: 60, descriptionMin: 70, descriptionMax: 160 };
const categories = new Set(["Shopify", "WordPress", "eCommerce", "Big-Commerce"]);
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
if (!Array.isArray(index) || index.length !== 84) fail(`Expected 84 blog index entries; found ${index.length}.`);
const slugs = new Set();
for (const entry of index) {
  if (slugs.has(entry.slug)) fail(`Duplicate blog slug: ${entry.slug}`);
  slugs.add(entry.slug);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)) fail(`Invalid blog slug: ${entry.slug}`);
  if (!categories.has(entry.category)) fail(`Invalid category for ${entry.slug}: ${entry.category}`);
  assertAsset({ src: entry.image, width: entry.width, height: entry.height, alt: entry.title }, `${entry.slug} featured image`);
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
  assertAsset(post.featuredImage, `${slug} featured image`);
  if (post.author?.image) {
    const authorAsset = { src: post.author.image, width: 150, height: 150, alt: post.author.name };
    assertAsset(authorAsset, `${slug} author image`);
  }
  if (!post.contentBeforeToc && !post.contentAfterToc) fail(`${slug} has no article content.`);
  const content = `${post.contentBeforeToc}\n${post.contentAfterToc}`;
  if (/(?:href|src)="[^"]*dynamicdreamz\.com|ez-toc-container|href="javascript:/i.test(content)) fail(`${slug} contains an unsafe or runtime live-site reference.`);
  for (const match of content.matchAll(/\bhref="([^"]+)"/gi)) {
    const href = match[1];
    if (!/^\/blogs\/[a-z0-9-]+(?:[?#].*)?$/i.test(href)) continue;
    const linkedSlug = href.slice("/blogs/".length).split(/[?#]/, 1)[0];
    if (!slugs.has(linkedSlug)) fail(`${slug} links to an unknown blog post: ${href}`);
  }
  for (const match of content.matchAll(/<img\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    const tag = match[0];
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1] ?? "";
    const alt = tag.match(/\balt="([^"]*)"/i)?.[1] ?? "";
    assertAsset({ src, width: Number(tag.match(/\bwidth="(\d+)"/i)?.[1]), height: Number(tag.match(/\bheight="(\d+)"/i)?.[1]), alt }, `${slug} inline image`);
  }
  const ids = new Set([...content.matchAll(/<(?:h2|h3|h4|h5|h6)\b[^>]*\bid="([^"]+)"/gi)].map((match) => match[1]));
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
