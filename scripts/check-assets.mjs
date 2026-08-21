import fs from "node:fs";
import path from "node:path";

function getFiles(dir, exts, files = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      getFiles(fullPath, exts, files);
    } else if (exts.some((ext) => item.name.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const srcFiles = getFiles("src", [".ts", ".tsx", ".json"]);
const missingAssets = new Set();
const assetRegex = /["'`](\/assets\/[^"'`]+)["'`]/g;

for (const file of srcFiles) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const assetPath = match[1];
    if (assetPath.includes("${")) continue;
    const cleanPath = assetPath.split("?")[0].split("#")[0];
    const localPath = path.join("public", cleanPath.replace(/^\//, ""));
    if (!fs.existsSync(localPath)) {
      missingAssets.add(`${assetPath} (referenced in ${file})`);
    }
  }
}

console.log("Total missing asset references:", missingAssets.size);
for (const missing of missingAssets) {
  console.log("MISSING:", missing);
}
