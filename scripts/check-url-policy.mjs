import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const sourceRoot = join(projectRoot, "src");
const shouldFix = process.argv.includes("--fix");
const sourceExtensions = new Set([".ts", ".tsx", ".json"]);

// Matches internal page route strings in quotes or template literals.
// Pathname must begin with / and not be a system path (assets, api, _next, admin).
const internalRoutePattern = /(["'`])(\/(?!\/|\.well-known|_next|api|assets|admin)(?:[a-zA-Z0-9_.~%-]|\$\{[^}]+\})+(?:\/(?:[a-zA-Z0-9_.~%-]|\$\{[^}]+\})+)*)(\/)?([?#][^"'`\r\n]*)?\1/g;

const ignorePrefixes = ["/assets/", "/api/", "/_next/", "/admin", "/.well-known/"];
const fileExtPattern = /\.(svg|png|jpe?g|webp|avif|ico|xml|txt|json|webmanifest|pdf|mp4|webm|css|js)$/i;

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

function addTrailingSlash(source) {
  return source.replace(internalRoutePattern, (match, quote, pathname, slash, suffix = "") => {
    if (ignorePrefixes.some((p) => pathname.startsWith(p))) return match;
    if (fileExtPattern.test(pathname)) return match;
    if (pathname.includes("*")) return match;
    if (slash) return match;
    return `${quote}${pathname}/${suffix}${quote}`;
  });
}

const sourceFiles = await collectSourceFiles(sourceRoot);

if (shouldFix) {
  let changedFiles = 0;
  for (const file of sourceFiles) {
    const source = await readFile(file, "utf8");
    const fixedSource = addTrailingSlash(source);
    if (fixedSource === source) continue;
    await writeFile(file, fixedSource, "utf8");
    changedFiles += 1;
  }
  console.log(`Normalized trailing-slash routes in ${changedFiles} source files.`);
}

const violations = [];
for (const file of sourceFiles) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(internalRoutePattern)) {
    const [full, , pathname, slash] = match;
    if (ignorePrefixes.some((p) => pathname.startsWith(p))) continue;
    if (fileExtPattern.test(pathname)) continue;
    if (pathname.includes("*")) continue;
    if (slash) continue;

    const line = source.slice(0, match.index).split(/\r?\n/).length;
    violations.push(`${relative(projectRoot, file)}:${line} ${full} (missing trailing slash)`);
  }
}

const nextConfig = await readFile(join(projectRoot, "next.config.ts"), "utf8");
if (!/trailingSlash:\s*true\b/.test(nextConfig)) {
  violations.push("next.config.ts must explicitly set trailingSlash: true");
}

if (violations.length > 0) {
  console.error("Trailing-slash URL policy failed:\n" + violations.map((item) => `- ${item}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Trailing-slash URL policy passed.");
}
