import fs from "node:fs";
import path from "node:path";
import { parseHtmlToBlocks } from "../src/lib/blog-blocks.js";

const rootDir = process.cwd();
const postsDir = path.join(rootDir, "src", "content", "blog-posts", "posts");
const files = fs.readdirSync(postsDir).filter((file) => file.endsWith(".json"));

let totalConverted = 0;
for (const file of files) {
  const filePath = path.join(postsDir, file);
  const post = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Check if we need to convert from raw HTML (if strings)
  const rawBefore = typeof post.contentBeforeToc === "string" ? post.contentBeforeToc : null;
  const rawAfter = typeof post.contentAfterToc === "string" ? post.contentAfterToc : null;

  if (rawBefore !== null || rawAfter !== null) {
    post.contentBeforeToc = rawBefore !== null ? parseHtmlToBlocks(rawBefore) : post.contentBeforeToc;
    post.contentAfterToc = rawAfter !== null ? parseHtmlToBlocks(rawAfter) : post.contentAfterToc;
    fs.writeFileSync(filePath, JSON.stringify(post, null, 2) + "\n", "utf8");
    totalConverted++;
  }
}

console.log(`Successfully converted ${totalConverted} blog posts to structured AST blocks.`);
