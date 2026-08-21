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

const groups = new Map();
const files = filesIn(assetsRoot);

for (const filePath of files) {
  const hash = crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
  const matches = groups.get(hash) ?? [];
  matches.push(path.relative(process.cwd(), filePath));
  groups.set(hash, matches);
}

const duplicates = [...groups.values()].filter((matches) => matches.length > 1);

if (duplicates.length > 0) {
  console.error(`Found ${duplicates.length} duplicate public asset hash group(s):`);
  for (const matches of duplicates) console.error(`- ${matches.join("\n  ")}`);
  process.exit(1);
}

console.log(`Checked ${files.length} public assets; duplicate hash groups: 0.`);
