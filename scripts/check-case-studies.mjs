import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const workspaceRoot = process.cwd();
const contentPath = path.join(workspaceRoot, "src/content/case-study-details.json");
const entries = JSON.parse(await readFile(contentPath, "utf8"));
const errors = [];
const slugs = new Set();
const assetPaths = new Set();
const unsafeHtmlPattern = /<script|javascript:|\son[a-z]+\s*=|\sstyle\s*=/i;
const localAssetPattern = /^\/assets\/[a-zA-Z0-9._/-]+$/;
const approvedEmptyIndustries = new Set(["blubox"]);
const allowedHtmlTags = new Set([
  "a", "b", "br", "em", "h3", "h4", "h5", "h6", "i", "li", "ol", "p",
  "strong", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul",
]);
const allowedHtmlAttributes = {
  a: new Set(["href", "rel", "target"]),
  td: new Set(["colspan", "rowspan"]),
  th: new Set(["colspan", "rowspan"]),
};

function checkText(value, label, slug) {
  if (typeof value !== "string" || !value.trim()) errors.push(`${slug}: missing ${label}`);
}

function checkHtml(value, label, slug) {
  if (typeof value !== "string") {
    errors.push(`${slug}: invalid ${label}`);
    return;
  }
  if (unsafeHtmlPattern.test(value)) errors.push(`${slug}: unsafe markup in ${label}`);
  if (/dynamicdreamz\.com|\/wp-content\//i.test(value)) errors.push(`${slug}: live-site dependency in ${label}`);
  for (const match of value.matchAll(/<\/?([a-z0-9]+)\b([^>]*)>/gi)) {
    const tag = match[1].toLowerCase();
    if (!allowedHtmlTags.has(tag)) errors.push(`${slug}: unsupported <${tag}> tag in ${label}`);
    for (const attribute of match[2].matchAll(/\s([a-z][a-z0-9:-]*)\s*=/gi)) {
      const name = attribute[1].toLowerCase();
      if (!allowedHtmlAttributes[tag]?.has(name)) errors.push(`${slug}: unsupported ${name} attribute in ${label}`);
    }
  }
}

function checkImage(image, label, slug, optional = false) {
  if (!image) {
    if (!optional) errors.push(`${slug}: missing ${label} image`);
    return;
  }
  if (typeof image.src !== "string" || !localAssetPattern.test(image.src)) {
    errors.push(`${slug}: ${label} image must use /assets/`);
  } else {
    assetPaths.add(image.src);
  }
  if (!Number.isInteger(image.width) || image.width <= 0 || !Number.isInteger(image.height) || image.height <= 0) {
    errors.push(`${slug}: invalid ${label} image dimensions`);
  }
  checkText(image.alt, `${label} image alt text`, slug);
}

if (!Array.isArray(entries) || entries.length === 0) {
  errors.push("Case-study content must be a non-empty array.");
} else {
  for (const entry of entries) {
    const slug = entry.slug ?? "unknown-case-study";
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) errors.push(`${slug}: invalid slug`);
    if (slugs.has(slug)) errors.push(`${slug}: duplicate slug`);
    slugs.add(slug);

    for (const field of ["clientName", "title", "summary", "technology", "location"]) {
      checkText(entry[field], field, slug);
    }
    for (const field of ["title", "technology", "excerpt"]) {
      checkText(entry.archive?.[field], `archive.${field}`, slug);
    }
    if (!approvedEmptyIndustries.has(slug)) {
      checkText(entry.industry, "industry", slug);
      checkText(entry.archive?.industry, "archive.industry", slug);
    }
    checkImage(entry.hero?.image, "hero", slug);

    if (!Array.isArray(entry.sections) || entry.sections.length === 0) {
      errors.push(`${slug}: at least one narrative section is required`);
    } else {
      entry.sections.forEach((section, sectionIndex) => {
        const label = `section ${sectionIndex + 1}`;
        checkText(section.heading, `${label} heading`, slug);
        checkHtml(section.html, `${label} HTML`, slug);
        checkImage(section.image, label, slug, true);
        if (!Array.isArray(section.cards)) {
          errors.push(`${slug}: invalid ${label} cards`);
          return;
        }
        section.cards.forEach((card, cardIndex) => {
          const cardLabel = `${label} card ${cardIndex + 1}`;
          checkText(card.heading, `${cardLabel} heading`, slug);
          checkHtml(card.html, `${cardLabel} HTML`, slug);
          checkImage(card.image, cardLabel, slug, true);
        });
      });
    }

    if (entry.wireframes) {
      checkText(entry.wireframes.heading, "wireframes heading", slug);
      checkHtml(entry.wireframes.html, "wireframes HTML", slug);
      checkImage(entry.wireframes.image, "wireframes", slug, true);
    }
    if (!Array.isArray(entry.colors)) errors.push(`${slug}: invalid colors`);
    else {
      entry.colors.forEach((color, index) => {
        checkText(color.label, `color ${index + 1} label`, slug);
        if (!/^#[0-9a-f]{6}$/i.test(color.value ?? "")) errors.push(`${slug}: invalid color ${index + 1} value`);
      });
    }
    if (!Array.isArray(entry.typefaces)) errors.push(`${slug}: invalid typefaces`);
    else {
      entry.typefaces.forEach((typeface, index) => {
        checkImage(typeface.image, `typeface ${index + 1}`, slug, true);
        checkHtml(typeface.html, `typeface ${index + 1} HTML`, slug);
      });
    }
    if (entry.design) {
      checkText(entry.design.heading, "design heading", slug);
      checkHtml(entry.design.html, "design HTML", slug);
      checkImage(entry.design.image, "design", slug, true);
      if (entry.design.backgroundImage) {
        if (!localAssetPattern.test(entry.design.backgroundImage)) {
          errors.push(`${slug}: design background must use /assets/`);
        } else {
          assetPaths.add(entry.design.backgroundImage);
        }
      }
    }

    checkText(entry.seo?.title, "SEO title", slug);
    checkText(entry.seo?.description, "SEO description", slug);
    if (entry.seo?.title?.length < 15 || entry.seo?.title?.length > 60) errors.push(`${slug}: SEO title must be 15-60 characters`);
    if (entry.seo?.description?.length < 70 || entry.seo?.description?.length > 160) {
      errors.push(`${slug}: SEO description must be 70-160 characters`);
    }
    if (Number.isNaN(Date.parse(entry.seo?.lastModified ?? ""))) errors.push(`${slug}: invalid lastModified date`);
  }
}

for (const assetPath of assetPaths) {
  try {
    await access(path.join(workspaceRoot, "public", assetPath));
  } catch {
    errors.push(`Missing asset: ${assetPath}`);
  }
}

if (errors.length > 0) {
  console.error(`Case-study validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${entries.length} case studies and ${assetPaths.size} project-owned asset references.`);
