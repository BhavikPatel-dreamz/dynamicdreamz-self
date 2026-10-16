import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const workspaceRoot = process.cwd();
const contentPath = path.join(workspaceRoot, "src/content/case-study-details.json");
const entries = JSON.parse(await readFile(contentPath, "utf8"));
const errors = [];
const slugs = new Set();
const assetPaths = new Set();
const localAssetPattern = /^\/assets\/[a-zA-Z0-9._/-]+$/;
const approvedEmptyIndustries = new Set(["blubox"]);

function checkText(value, label, slug) {
  if (typeof value !== "string" || !value.trim()) {
    errors.push(`${slug}: missing ${label}`);
    return;
  }
  if (/<[a-z][\s\S]*>/i.test(value)) {
    errors.push(`${slug}: unexpected HTML in ${label}`);
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

    if (entry.challenge) {
      checkText(entry.challenge.heading, "challenge heading", slug);
      if (!Array.isArray(entry.challenge.items)) errors.push(`${slug}: invalid challenge items`);
      else {
        entry.challenge.items.forEach((item, index) => {
          const hasContent = (typeof item.title === "string" && item.title.trim()) || (typeof item.description === "string" && item.description.trim());
          if (!hasContent) errors.push(`${slug}: challenge item ${index + 1} must have title or description`);
          if (item.title) checkText(item.title, `challenge item ${index + 1} title`, slug);
          if (item.description) checkText(item.description, `challenge item ${index + 1} description`, slug);
        });
      }
    }

    if (entry.solutions) {
      checkText(entry.solutions.heading, "solutions heading", slug);
      if (!Array.isArray(entry.solutions.items)) errors.push(`${slug}: invalid solutions items`);
      else {
        entry.solutions.items.forEach((item, index) => {
          checkText(item.text, `solutions item ${index + 1} text`, slug);
        });
      }
    }

    if (entry.keyFeatures) {
      checkText(entry.keyFeatures.heading, "keyFeatures heading", slug);
      if (!Array.isArray(entry.keyFeatures.items)) errors.push(`${slug}: invalid keyFeatures items`);
      else {
        entry.keyFeatures.items.forEach((item, index) => {
          checkText(item.title, `keyFeatures item ${index + 1} title`, slug);
        });
      }
    }

    if (entry.projectDelivery) {
      checkText(entry.projectDelivery.heading, "projectDelivery heading", slug);
      if (!Array.isArray(entry.projectDelivery.items)) errors.push(`${slug}: invalid projectDelivery items`);
      else {
        entry.projectDelivery.items.forEach((item, index) => {
          checkText(item.name, `projectDelivery item ${index + 1} name`, slug);
        });
      }
    }

    if (entry.keyMetrics) {
      checkText(entry.keyMetrics.heading, "keyMetrics heading", slug);
      if (!Array.isArray(entry.keyMetrics.items)) errors.push(`${slug}: invalid keyMetrics items`);
      else {
        entry.keyMetrics.items.forEach((item, index) => {
          checkText(item.stat, `keyMetrics item ${index + 1} stat`, slug);
          checkText(item.label, `keyMetrics item ${index + 1} label`, slug);
        });
      }
    }

    if (entry.customSections) {
      if (!Array.isArray(entry.customSections)) errors.push(`${slug}: invalid customSections`);
      else {
        entry.customSections.forEach((section, index) => {
          checkText(section.heading, `customSection ${index + 1} heading`, slug);
        });
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
