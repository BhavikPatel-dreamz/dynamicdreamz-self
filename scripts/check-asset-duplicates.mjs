import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const assetsRoot = path.join(process.cwd(), "public/assets");

function filesIn(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(entryPath) : [entryPath];
  });
}

// Canonicalize SVG content (normalize auto-generated gradient/clip IDs, attribute ordering, whitespace)
function canonicalizeSvg(svgString) {
  let clean = svgString.replace(/<!--[\s\S]*?-->/g, "");
  clean = clean.replace(/<([a-zA-Z0-9:-]+)([^>]*)>/g, (match, tagName, attrString) => {
    const isSelfClosing = attrString.trim().endsWith("/");
    let rawAttrs = attrString.trim();
    if (isSelfClosing) {
      rawAttrs = rawAttrs.slice(0, -1).trim();
    }
    const attrRegex = /([a-zA-Z0-9:-]+)=(?:"([^"]*)"|'([^']*)')/g;
    const attrs = [];
    let m;
    while ((m = attrRegex.exec(rawAttrs)) !== null) {
      let name = m[1];
      let val = m[2] !== undefined ? m[2] : m[3];
      // Ignore auto-generated unique IDs and local clip-paths
      if (name === "id") continue;
      if (name === "clip-path") continue;
      if (val.startsWith("url(#")) {
        val = "url(#normalized_ref)";
      }
      attrs.push(`${name}="${val}"`);
    }
    attrs.sort();
    const attrsJoined = attrs.length > 0 ? " " + attrs.join(" ") : "";
    return isSelfClosing ? `<${tagName}${attrsJoined}/>` : `<${tagName}${attrsJoined}>`;
  });
  clean = clean.replace(/>\s+</g, "><").trim();
  return clean;
}

async function run() {
  const files = filesIn(assetsRoot);
  const rawGroups = new Map();
  const svgGroups = new Map();
  const rasterGroups = new Map();

  let sharp = null;
  try {
    const mod = await import("sharp");
    sharp = mod.default ?? mod;
  } catch {
    // Sharp not available in current environment; skip pixel-level decompression
  }

  const rasterExts = new Set([".webp", ".png", ".jpg", ".jpeg"]);

  for (const filePath of files) {
    const relPath = path.relative(process.cwd(), filePath);
    const ext = path.extname(filePath).toLowerCase();

    // 1. Raw byte hash
    const rawBuffer = fs.readFileSync(filePath);
    const rawHash = crypto.createHash("sha256").update(rawBuffer).digest("hex");
    const rawList = rawGroups.get(rawHash) ?? [];
    rawList.push(relPath);
    rawGroups.set(rawHash, rawList);

    // 2. Canonical SVG hash
    if (ext === ".svg") {
      try {
        const svgContent = rawBuffer.toString("utf8");
        const normSvg = canonicalizeSvg(svgContent);
        const svgHash = crypto.createHash("sha256").update(normSvg).digest("hex");
        const svgList = svgGroups.get(svgHash) ?? [];
        svgList.push(relPath);
        svgGroups.set(svgHash, svgList);
      } catch (err) {
        console.warn(`Warning: failed to canonicalize SVG ${relPath}: ${err.message}`);
      }
    }

    // 3. Raw pixel hash for raster images
    if (sharp && rasterExts.has(ext)) {
      try {
        const img = sharp(filePath);
        const meta = await img.metadata();
        const { data } = await img.raw().toBuffer({ resolveWithObject: true });
        const pixelHash = crypto.createHash("sha256").update(data).digest("hex") + `_${meta.width}x${meta.height}`;
        const pixelList = rasterGroups.get(pixelHash) ?? [];
        pixelList.push(relPath);
        rasterGroups.set(pixelHash, pixelList);
      } catch {
        // Not a valid or readable raster image; ignore
      }
    }
  }

  const rawDupes = [...rawGroups.values()].filter((m) => m.length > 1);
  const svgDupes = [...svgGroups.values()].filter((m) => m.length > 1);
  const rasterDupes = [...rasterGroups.values()].filter((m) => m.length > 1);

  let hasError = false;

  if (rawDupes.length > 0) {
    hasError = true;
    console.error(`\nFound ${rawDupes.length} exact byte duplicate asset group(s):`);
    for (const group of rawDupes) {
      console.error(`- ${group.join("\n  ")}`);
    }
  }

  // Filter SVG duplicates that aren't already reported as raw duplicates
  const uniqueSvgDupes = svgDupes.filter((group) => {
    return !rawDupes.some((rawGroup) => rawGroup.every((item) => group.includes(item)));
  });

  if (uniqueSvgDupes.length > 0) {
    hasError = true;
    console.error(`\nFound ${uniqueSvgDupes.length} visually identical SVG duplicate group(s) (differing only in IDs, whitespace, or attribute order):`);
    for (const group of uniqueSvgDupes) {
      console.error(`- ${group.join("\n  ")}`);
    }
  }

  // Filter Raster duplicates that aren't already reported as raw duplicates
  const uniqueRasterDupes = rasterDupes.filter((group) => {
    return !rawDupes.some((rawGroup) => rawGroup.every((item) => group.includes(item)));
  });

  if (uniqueRasterDupes.length > 0) {
    hasError = true;
    console.error(`\nFound ${uniqueRasterDupes.length} visually identical raster pixel duplicate group(s):`);
    for (const group of uniqueRasterDupes) {
      console.error(`- ${group.join("\n  ")}`);
    }
  }

  if (hasError) {
    console.error("\nError: Duplicate assets detected in public/assets/. Consolidate duplicates to a single canonical file and update all references.");
    process.exit(1);
  }

  console.log(`Checked ${files.length} public assets; exact byte duplicates: 0, visual SVG duplicates: 0, pixel raster duplicates: 0.`);
}

run();
