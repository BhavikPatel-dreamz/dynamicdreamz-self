import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const sourceRoot = join(projectRoot, "src");
const shouldFix = process.argv.includes("--fix");
const sourceExtensions = new Set([".ts", ".tsx"]);

// Matches quote-delimited internal paths whose pathname ends in `/`, including
// a query or fragment after that slash. The root path `/` is intentionally not
// matched because it is the only valid trailing-slash page URL.
const trailingSlashRoute = /(["'`])(\/(?!\/)[^"'`\r\n]*?[^/"'`\r\n])\/([?#][^"'`\r\n]*)?\1/g;

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(directory, entry.name);
      if (entry.isDirectory()) return collectSourceFiles(entryPath);
      return sourceExtensions.has(extname(entry.name)) ? [entryPath] : [];
    }),
  );
  return files.flat();
}

function slashlessSource(source) {
  return source.replace(trailingSlashRoute, (match, quote, pathname, suffix = "") =>
    `${quote}${pathname}${suffix}${quote}`,
  );
}

const sourceFiles = await collectSourceFiles(sourceRoot);

if (shouldFix) {
  let changedFiles = 0;
  for (const file of sourceFiles) {
    const source = await readFile(file, "utf8");
    const fixedSource = slashlessSource(source);
    if (fixedSource === source) continue;
    await writeFile(file, fixedSource, "utf8");
    changedFiles += 1;
  }
  console.log(`Normalized no-trailing-slash routes in ${changedFiles} source files.`);
}

const violations = [];
for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(trailingSlashRoute)) {
    const line = source.slice(0, match.index).split(/\r?\n/).length;
    violations.push(`${relative(projectRoot, file)}:${line} ${match[0]}`);
  }
}

const nextConfig = await readFile(join(projectRoot, "next.config.ts"), "utf8");
if (!/trailingSlash:\s*false\b/.test(nextConfig)) {
  violations.push("next.config.ts must explicitly set trailingSlash: false");
}

if (violations.length > 0) {
  console.error("No-trailing-slash URL policy failed:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("No-trailing-slash URL policy passed.");
}
