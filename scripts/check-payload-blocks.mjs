import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const blocksDir = path.join(root, "src/payload/blocks");
const pagesCollectionPath = path.join(root, "src/payload/collections/Pages.ts");
const renderBlocksPath = path.join(root, "src/components/RenderBlocks.tsx");

function runCheck() {
  console.log("================================================================");
  console.log("🚀 Running Comprehensive Payload Blocks & Schema Integrity Audit");
  console.log("================================================================\n");

  const errors = [];
  const warnings = [];

  if (!fs.existsSync(blocksDir)) {
    console.error(`❌ Blocks directory not found at ${blocksDir}`);
    process.exit(1);
  }
  if (!fs.existsSync(pagesCollectionPath)) {
    console.error(`❌ Pages.ts not found at ${pagesCollectionPath}`);
    process.exit(1);
  }
  if (!fs.existsSync(renderBlocksPath)) {
    console.error(`❌ RenderBlocks.tsx not found at ${renderBlocksPath}`);
    process.exit(1);
  }

  const pagesContent = fs.readFileSync(pagesCollectionPath, "utf-8");
  const renderBlocksContent = fs.readFileSync(renderBlocksPath, "utf-8");

  // Read all block files (excluding index.ts and subdirectories like blog)
  const blockFiles = fs
    .readdirSync(blocksDir)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts");

  console.log(`Auditing ${blockFiles.length} Payload CMS blocks across the repository...\n`);

  // -------------------------------------------------------------------------
  // PILLAR 1: BLOCK REGISTRATION IN PAGES.TS AND RENDERBLOCKS.TSX
  // -------------------------------------------------------------------------
  console.log("👉 Pillar 1: Verifying block registration in Pages.ts & RenderBlocks.tsx...");
  let registeredCount = 0;

  for (const file of blockFiles) {
    const blockPath = path.join(blocksDir, file);
    const content = fs.readFileSync(blockPath, "utf-8");

    // Extract block slug
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    if (!slugMatch) {
      errors.push(`${file}: Block slug could not be parsed.`);
      continue;
    }
    const slug = slugMatch[1];

    // Extract block export name (e.g. export const ServiceHeroBlock: Block)
    const exportMatch = content.match(/export const ([A-Za-z0-9_]+): Block/);
    const exportName = exportMatch ? exportMatch[1] : null;

    // Check Pages.ts registration
    if (exportName && !pagesContent.includes(exportName)) {
      errors.push(
        `${file} (export ${exportName}): Block is NOT registered in src/payload/collections/Pages.ts!`
      );
    }

    // Check RenderBlocks.tsx case handling
    const casePattern = `case "${slug}":`;
    if (!renderBlocksContent.includes(casePattern)) {
      errors.push(
        `${file} (slug "${slug}"): Missing case "${slug}": in src/components/RenderBlocks.tsx!`
      );
    }

    registeredCount++;
  }
  console.log(`   ✓ ${registeredCount}/${blockFiles.length} blocks verified in Pages.ts and RenderBlocks.tsx.\n`);

  // -------------------------------------------------------------------------
  // PILLAR 2: DUAL-RESOLUTION ASSET INVARIANT (ZERO BROKEN MEDIA FALLBACKS)
  // -------------------------------------------------------------------------
  console.log("👉 Pillar 2: Verifying dual-resolution media fallbacks across all blocks...");
  let uploadFieldsChecked = 0;

  for (const file of blockFiles) {
    const blockPath = path.join(blocksDir, file);
    const content = fs.readFileSync(blockPath, "utf-8");
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    const slug = slugMatch ? slugMatch[1] : file;

    // Find all upload fields in this block
    const uploadMatches = [
      ...content.matchAll(/{\s*(?:[^{}]*?\n)?\s*name:\s*["']([^"']+)["'],\s*type:\s*["']upload["']/g),
    ];

    for (const match of uploadMatches) {
      const fieldName = match[1];
      uploadFieldsChecked++;

      // Invariant: every upload field must have a static fallback field in the block schema
      const possibleFallbacks = [
        `"${fieldName}Src"`,
        `'${fieldName}Src'`,
        `"${fieldName}Url"`,
        `'${fieldName}Url'`,
        `"${fieldName}Fallback"`,
        `'${fieldName}Fallback'`,
        '"src"',
        "'src'",
        '"iconSrc"',
        "'iconSrc'",
        '"logoSrc"',
        "'logoSrc'",
        '"imageSrc"',
        "'imageSrc'",
        '"posterSrc"',
        "'posterSrc'",
        '"avatarSrc"',
        "'avatarSrc'",
        '"videoPosterSrc"',
        "'videoPosterSrc'",
      ];

      const hasFallback = possibleFallbacks.some((fb) => content.includes(fb));
      if (!hasFallback) {
        errors.push(
          `${file} (${slug}): Upload field "${fieldName}" does not have a static fallback text field (e.g. "${fieldName}Src" or "src"). Every upload field MUST have a static fallback.`
        );
      }
    }
  }
  console.log(`   ✓ ${uploadFieldsChecked} upload fields verified for static string fallbacks.\n`);

  // -------------------------------------------------------------------------
  // PILLAR 3: NO BRITTLE RAW STRING VARIANT CONDITIONS
  // -------------------------------------------------------------------------
  console.log("👉 Pillar 3: Auditing admin.condition and variant helper classifications...");

  for (const file of blockFiles) {
    const blockPath = path.join(blocksDir, file);
    const content = fs.readFileSync(blockPath, "utf-8");

    // Prohibit raw siblingData?.variant === "some-string" in condition without centralized helper
    if (file === "ServiceHeroBlock.ts") {
      if (content.includes('siblingData?.variant === "image"')) {
        errors.push(
          'ServiceHeroBlock.ts contains raw `siblingData?.variant === "image"` check. Use `isHeroImageVariant(siblingData?.variant)`.'
        );
      }
      if (content.includes('siblingData?.variant === "video"')) {
        errors.push(
          'ServiceHeroBlock.ts contains raw `siblingData?.variant === "video"` check. Use `isHeroVideoVariant(siblingData?.variant)`.'
        );
      }

      // Check HERO_IMAGE_VARIANTS sync
      const imageVariantsMatch = content.match(
        /export const HERO_IMAGE_VARIANTS = \[([\s\S]*?)\] as const;/
      );
      if (!imageVariantsMatch) {
        errors.push("HERO_IMAGE_VARIANTS array not found in ServiceHeroBlock.ts");
      } else {
        const imageVariants = imageVariantsMatch[1]
          .split(",")
          .map((s) => s.replace(/["'\s]/g, ""))
          .filter(Boolean);

        // Check variants in RenderBlocks that use image
        const variantBlocks = renderBlocksContent.split(
          /if\s*\(\s*variant\s*===\s*["']([^"']+)["']\s*\)/g
        );
        for (let i = 1; i < variantBlocks.length; i += 2) {
          const variantName = variantBlocks[i];
          const body = variantBlocks[i + 1] || "";
          const snippet = body.slice(0, 1500);

          const usesImage =
            snippet.includes("imageUrl") ||
            snippet.includes("image:") ||
            snippet.includes("imageAlt");

          if (usesImage && !imageVariants.includes(variantName)) {
            errors.push(
              `Variant "${variantName}" in RenderBlocks.tsx consumes hero image/mockup but is missing from HERO_IMAGE_VARIANTS in ServiceHeroBlock.ts!`
            );
          }
        }
      }
    }
  }
  console.log("   ✓ Variant condition classification checks passed.\n");

  // -------------------------------------------------------------------------
  // PILLAR 4: TABBED BLOCK MEDIA VARIANT COMPLETENESS
  // -------------------------------------------------------------------------
  console.log("👉 Pillar 4: Verifying media variant classification coverage in tabbed blocks...");

  for (const file of blockFiles) {
    const blockPath = path.join(blocksDir, file);
    const content = fs.readFileSync(blockPath, "utf-8");

    if (content.includes('type: "tabs"') || content.includes("type: 'tabs'")) {
      if (file === "ServiceHeroBlock.ts") {
        // Ensure default fallback variant exists
        if (!content.includes('defaultValue: "video"')) {
          errors.push("ServiceHeroBlock.ts must define `defaultValue: 'video'` to ensure hero variant is never null.");
        }
        // Ensure isHeroVideoVariant returns true on falsy/default variant
        if (!content.includes("!v ||") && !content.includes("!variant ||")) {
          errors.push("isHeroVideoVariant helper in ServiceHeroBlock.ts must return true for falsy/unassigned variants so media tab defaults to video controls.");
        }
      }
    }
  }
  console.log("   ✓ Tabbed blocks verified against empty tab conditions.\n");

  // -------------------------------------------------------------------------
  // PILLAR 5: DUAL-RESOLUTION IMPLEMENTATION IN RENDERBLOCKS.TSX
  // -------------------------------------------------------------------------
  console.log("👉 Pillar 5: Verifying resolveMediaUrl coverage in RenderBlocks.tsx...");
  const blocksRequiringMedia = [
    { slug: "about-founders", mediaFields: ["image"] },
    { slug: "about-story", mediaFields: ["poster", "overlay"] },
    { slug: "about-timeline", mediaFields: ["image"] },
    { slug: "brand-partners", mediaFields: ["logo"] },
    { slug: "cro-barriers", mediaFields: ["icon"] },
    { slug: "cta-banner", mediaFields: ["backgroundImage", "image"] },
    { slug: "life-culture-hiring", mediaFields: ["image", "icon"] },
    { slug: "life-gallery", mediaFields: ["image"] },
    { slug: "partner-directory-proof", mediaFields: ["image"] },
    { slug: "portfolio-showcase", mediaFields: ["image"] },
    { slug: "proof-stats", mediaFields: ["icon"] },
    { slug: "request-quote-hero", mediaFields: ["logo", "avatar"] },
    { slug: "service-hero", mediaFields: ["videoPoster", "image", "bgShape"] },
    { slug: "services-grid", mediaFields: ["icon"] },
    { slug: "testimonials-carousel", mediaFields: ["image", "logo"] },
  ];

  for (const { slug } of blocksRequiringMedia) {
    const casePattern = `case "${slug}":`;
    const casePos = renderBlocksContent.indexOf(casePattern);
    if (casePos === -1) {
      errors.push(`RenderBlocks.tsx is missing case "${slug}":`);
      continue;
    }
    // Find the opening brace of this block case handler (handles fallthrough cases)
    const openBracePos = renderBlocksContent.indexOf("{", casePos);
    // Find the next case that has its own block body or end of switch
    const nextBlockPos = renderBlocksContent.indexOf("case ", openBracePos + 100);
    const caseSnippet = renderBlocksContent.slice(
      casePos,
      nextBlockPos !== -1 ? nextBlockPos : casePos + 25000
    );

    if (!caseSnippet.includes("resolveMediaUrl")) {
      errors.push(
        `RenderBlocks.tsx: Block case "${slug}" does not use resolveMediaUrl for media resolution!`
      );
    }
  }
  console.log(`   ✓ ${blocksRequiringMedia.length} media-rendering blocks verified for resolveMediaUrl in RenderBlocks.tsx.\n`);

  // -------------------------------------------------------------------------
  // RESULTS REPORTING
  // -------------------------------------------------------------------------
  if (warnings.length > 0) {
    console.warn("⚠️ Warnings:");
    for (const w of warnings) {
      console.warn(`   - ${w}`);
    }
  }

  if (errors.length > 0) {
    console.error("❌ PAYLOAD BLOCKS INTEGRITY CHECK FAILED:");
    for (const err of errors) {
      console.error(`   - ${err}`);
    }
    process.exit(1);
  }

  console.log("================================================================");
  console.log("✅ ALL PAYLOAD BLOCK INTEGRITY CHECKS PASSED PRODUCTION-READY!");
  console.log("================================================================\n");
}

runCheck();
