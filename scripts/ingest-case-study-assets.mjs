import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();
const scratchDir = path.join(rootDir, "scratch", "case-study-audit");
const scratchAssetsDir = path.join(scratchDir, "assets");
const manifestPath = path.join(scratchDir, "case-study-assets.json");
const extractedPath = path.join(scratchDir, "case-study-details.extracted.json");
const resolvedPath = path.join(scratchDir, "case-study-assets.resolved.json");
const contentPath = path.join(rootDir, "src", "content", "case-study-details.json");
const publicAssetsDir = path.join(rootDir, "public", "assets");
const ingest = process.argv.includes("--ingest");

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function shortHash(value) {
  return crypto.createHash("sha1").update(value).digest("hex").slice(0, 10);
}

function walkFiles(directory, files = []) {
  if (!fs.existsSync(directory)) return files;
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const itemPath = path.join(directory, item.name);
    if (item.isDirectory()) walkFiles(itemPath, files);
    else files.push(itemPath);
  }
  return files;
}

function cleanSegment(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function extensionFromUrl(url) {
  const pathname = new URL(url).pathname;
  const extension = path.extname(pathname).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".svg", ".webp"].includes(extension) ? extension : ".bin";
}

function scratchPathFor(asset) {
  return path.join(
    scratchAssetsDir,
    `${cleanSegment(asset.slug)}--${cleanSegment(asset.role)}--${shortHash(asset.url)}${extensionFromUrl(asset.url)}`,
  );
}

async function downloadAssets(manifest) {
  fs.mkdirSync(scratchAssetsDir, { recursive: true });
  let completed = 0;
  const failures = [];

  for (let index = 0; index < manifest.length; index += 6) {
    const batch = manifest.slice(index, index + 6);
    await Promise.all(batch.map(async (asset) => {
      const destination = scratchPathFor(asset);
      if (fs.existsSync(destination) && fs.statSync(destination).size > 0) {
        completed += 1;
        return;
      }

      try {
        const response = await fetch(asset.url, {
          headers: { "user-agent": "DynamicDreamzMigration/1.0" },
          redirect: "follow",
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const buffer = Buffer.from(await response.arrayBuffer());
        fs.writeFileSync(destination, buffer);
        completed += 1;
      } catch (error) {
        failures.push(`${asset.url}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }));
    console.log(`Buffered ${Math.min(index + batch.length, manifest.length)}/${manifest.length} assets.`);
  }

  if (failures.length > 0) {
    throw new Error(`Asset downloads failed:\n- ${failures.join("\n- ")}`);
  }
  return completed;
}

function publicPathFor(filePath) {
  return `/${path.relative(path.join(rootDir, "public"), filePath).split(path.sep).join("/")}`;
}

function existingHashMap() {
  const map = new Map();
  for (const filePath of walkFiles(publicAssetsDir)) {
    const hash = sha256(fs.readFileSync(filePath));
    if (!map.has(hash)) map.set(hash, filePath);
  }
  return map;
}

function cleanSvg(buffer) {
  return Buffer.from(
    buffer
      .toString("utf8")
      .replace(/<\?xml[\s\S]*?\?>\s*/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<metadata\b[^>]*>[\s\S]*?<\/metadata>\s*/gi, "")
      .trim(),
  );
}

async function optimizeUniqueAsset(asset, sourceBuffer) {
  const sourceExtension = extensionFromUrl(asset.url);
  if (sourceExtension === ".png") {
    return {
      buffer: await sharp(sourceBuffer).webp({ quality: 90, nearLossless: true, effort: 6 }).toBuffer(),
      extension: ".webp",
    };
  }
  if (sourceExtension === ".svg") {
    return { buffer: cleanSvg(sourceBuffer), extension: ".svg" };
  }
  return { buffer: sourceBuffer, extension: sourceExtension === ".jpeg" ? ".jpg" : sourceExtension };
}

async function dimensionsFor(filePath) {
  const metadata = await sharp(filePath).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error(`Unable to determine stable dimensions for ${path.relative(rootDir, filePath)}`);
  }
  return { width: metadata.width, height: metadata.height };
}

async function resolveAssets(manifest) {
  const hashMap = existingHashMap();
  const resolved = {};
  const plannedNames = new Map();

  for (const asset of manifest) {
    const scratchPath = scratchPathFor(asset);
    const sourceBuffer = fs.readFileSync(scratchPath);
    const sourceHash = sha256(sourceBuffer);
    const exactExistingPath = hashMap.get(sourceHash);
    let canonicalPath = exactExistingPath;
    let resolution = exactExistingPath ? "reused-exact" : "unique";

    if (!canonicalPath) {
      const optimized = await optimizeUniqueAsset(asset, sourceBuffer);
      const optimizedHash = sha256(optimized.buffer);
      const optimizedExistingPath = hashMap.get(optimizedHash);
      if (optimizedExistingPath) {
        canonicalPath = optimizedExistingPath;
        resolution = "reused-optimized";
      } else if (ingest) {
        const sourceName = cleanSegment(path.basename(new URL(asset.url).pathname, path.extname(new URL(asset.url).pathname))) || asset.role;
        const directory = path.join(publicAssetsDir, "case-studies", "details", cleanSegment(asset.slug));
        const key = `${directory}/${sourceName}${optimized.extension}`;
        const existingUrlForName = plannedNames.get(key);
        const fileName = existingUrlForName && existingUrlForName !== asset.url
          ? `${sourceName}-${shortHash(asset.url)}${optimized.extension}`
          : `${sourceName}${optimized.extension}`;
        plannedNames.set(key, asset.url);
        canonicalPath = path.join(directory, fileName);
        fs.mkdirSync(directory, { recursive: true });
        fs.writeFileSync(canonicalPath, optimized.buffer);
        hashMap.set(optimizedHash, canonicalPath);
        resolution = sourceBuffer.equals(optimized.buffer) ? "ingested" : "optimized-and-ingested";
      }
    }

    if (!canonicalPath) {
      resolved[asset.url] = {
        source: asset.url,
        scratchPath: path.relative(rootDir, scratchPath),
        sourceHash,
        resolution: "unique-pending-ingest",
      };
      continue;
    }

    const dimensions = await dimensionsFor(canonicalPath);
    resolved[asset.url] = {
      source: asset.url,
      scratchPath: path.relative(rootDir, scratchPath),
      sourceHash,
      resolution,
      path: publicPathFor(canonicalPath),
      ...dimensions,
    };
  }

  fs.writeFileSync(resolvedPath, `${JSON.stringify(resolved, null, 2)}\n`);
  return resolved;
}

function localizedImage(image, resolved, alt) {
  if (!image) return null;
  const asset = resolved[image.src];
  if (!asset?.path) throw new Error(`No local asset resolution for ${image.src}`);
  return {
    src: asset.path,
    width: asset.width,
    height: asset.height,
    alt,
  };
}

function buildLocalContent(entries, resolved) {
  return entries.map((entry) => ({
    slug: entry.slug,
    clientName: entry.clientName,
    title: entry.title,
    summary: entry.summary,
    industry: entry.industry,
    technology: entry.technology,
    location: entry.location,
    archive: entry.archive,
    hero: {
      image: localizedImage(
        entry.hero.image,
        resolved,
        `${entry.clientName} ${entry.technology} case study storefront`,
      ),
    },
    sections: entry.sections.map((section, sectionIndex) => ({
      heading: section.heading,
      html: section.html,
      image: localizedImage(
        section.image,
        resolved,
        `${entry.clientName} ${section.heading || `project section ${sectionIndex + 1}`} interface`,
      ),
      cards: section.cards.map((card, cardIndex) => ({
        heading: card.heading,
        html: card.html,
        image: localizedImage(
          card.image,
          resolved,
          `${entry.clientName} ${card.heading || `solution ${cardIndex + 1}`} interface`,
        ),
      })),
    })),
    wireframes: entry.wireframes ? {
      heading: entry.wireframes.heading,
      html: entry.wireframes.html,
      image: localizedImage(
        entry.wireframes.image,
        resolved,
        `${entry.clientName} website wireframes`,
      ),
    } : null,
    colors: entry.colors,
    typefaces: entry.typefaces.map((typeface, index) => ({
      image: localizedImage(
        typeface.image,
        resolved,
        `${entry.clientName} typeface specimen ${index + 1}`,
      ),
      html: typeface.html,
    })),
    design: entry.design ? {
      heading: entry.design.heading,
      html: entry.design.html,
      image: localizedImage(
        entry.design.image,
        resolved,
        `${entry.clientName} website design showcase`,
      ),
      backgroundImage: entry.design.backgroundImage
        ? resolved[entry.design.backgroundImage]?.path
        : undefined,
    } : null,
    seo: {
      title: entry.seo.title,
      description: entry.seo.description,
      lastModified: entry.seo.lastModified,
    },
  }));
}

function assertNoDuplicatePublicAssets() {
  const groups = new Map();
  for (const filePath of walkFiles(publicAssetsDir)) {
    const hash = sha256(fs.readFileSync(filePath));
    const items = groups.get(hash) ?? [];
    items.push(path.relative(rootDir, filePath));
    groups.set(hash, items);
  }
  const duplicates = [...groups.values()].filter((items) => items.length > 1);
  if (duplicates.length > 0) {
    throw new Error(`Duplicate public asset hashes found:\n${duplicates.map((items) => items.join("\n")).join("\n\n")}`);
  }
}

if (!fs.existsSync(manifestPath) || !fs.existsSync(extractedPath)) {
  throw new Error("Run scripts/extract-case-study-details.mjs before ingesting assets.");
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const entries = JSON.parse(fs.readFileSync(extractedPath, "utf8"));

await downloadAssets(manifest);
const resolved = await resolveAssets(manifest);
const pending = Object.values(resolved).filter((asset) => !asset.path);

console.log(`${Object.values(resolved).filter((asset) => asset.resolution.startsWith("reused")).length} assets match existing project files.`);
console.log(`${pending.length} unique assets are pending ingestion.`);

if (ingest) {
  const localContent = buildLocalContent(entries, resolved);
  fs.writeFileSync(contentPath, `${JSON.stringify(localContent, null, 2)}\n`);
  assertNoDuplicatePublicAssets();
  console.log(`Wrote ${path.relative(rootDir, contentPath)} with ${localContent.length} entries.`);
  console.log("Public asset duplicate hash groups: 0.");
} else {
  console.log("Audit-only mode complete. Re-run with --ingest after reviewing the scratch manifest.");
}
