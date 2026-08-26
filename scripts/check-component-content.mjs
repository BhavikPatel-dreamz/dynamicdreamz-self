import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import process from "node:process";
import ts from "typescript";

const projectRoot = process.cwd();
const sourceRoots = [
  join(projectRoot, "src", "components"),
  join(projectRoot, "src", "app"),
];

// These props carry visible page/business copy. Their values belong in
// src/content/** or src/data/** and should be passed through typed props.
const contentPropNames = new Set([
  "answer",
  "buttonLabel",
  "caption",
  "ctaLabel",
  "description",
  "eyebrow",
  "heading",
  "label",
  "message",
  "placeholder",
  "question",
  "subtitle",
  "text",
]);

// These are intentionally excluded because they are implementation-owned
// accessibility, media, or platform values rather than page copy. They still
// need intentional values, but are not required to live in content modules.
const allowedInlineAttributes = new Set([
  "alt",
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "title",
]);

const contentObjectKeys = new Set([
  ...contentPropNames,
  "body",
  "content",
  "excerpt",
  "intro",
  "items",
  "title",
]);

const technicalOnlyPattern = /^(?:https?:|mailto:|tel:|skype:|javascript:|\/|#|data:)/i;
const symbolOnlyPattern = /^[^\p{L}\p{N}]+$/u;

async function collectSourceFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return [];
  }

  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(directory, entry.name);
      if (entry.isDirectory()) return collectSourceFiles(entryPath);
      return [".ts", ".tsx"].includes(extname(entry.name)) ? [entryPath] : [];
    }),
  );

  return files.flat();
}

function lineNumber(sourceFile, node) {
  return sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile)).line + 1;
}

function hasMeaningfulText(value, { allowSymbols = false } = {}) {
  const text = value.trim();
  if (!text || technicalOnlyPattern.test(text)) return false;
  if (allowSymbols && symbolOnlyPattern.test(text) && text.length <= 2) return false;
  return /[\p{L}\p{N}]/u.test(text);
}

function literalText(node) {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  return null;
}

function simpleExpressionText(node) {
  const direct = literalText(node);
  if (direct !== null) return direct;

  if (ts.isConditionalExpression(node)) {
    return [node.whenTrue, node.whenFalse]
      .map(simpleExpressionText)
      .filter((value) => value !== null)
      .join(" | ");
  }

  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const left = simpleExpressionText(node.left);
    const right = simpleExpressionText(node.right);
    if (left !== null || right !== null) return `${left ?? ""}${right ?? ""}`;
  }

  return null;
}

function addViolation(violations, sourceFile, node, reason, value) {
  const text = String(value).replace(/\s+/g, " ").trim();
  violations.push({
    file: relative(projectRoot, sourceFile.fileName),
    line: lineNumber(sourceFile, node),
    reason,
    value: text.length > 140 ? `${text.slice(0, 137)}...` : text,
  });
}

function inspectFile(file, source, violations) {
  const sourceFile = ts.createSourceFile(
    file,
    source,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );

  function visit(node) {
    if (ts.isJsxText(node) && hasMeaningfulText(node.text, { allowSymbols: true })) {
      addViolation(violations, sourceFile, node, "direct JSX text", node.text);
    }

    if (ts.isJsxAttribute(node)) {
      const attributeName = node.name.text;
      if (!allowedInlineAttributes.has(attributeName) && contentPropNames.has(attributeName)) {
        const value = node.initializer &&
          (ts.isStringLiteral(node.initializer)
            ? node.initializer.text
            : ts.isJsxExpression(node.initializer) && node.initializer.expression
              ? simpleExpressionText(node.initializer.expression)
              : null);
        if (value !== null && hasMeaningfulText(value)) {
          addViolation(violations, sourceFile, node, `inline content prop: ${attributeName}`, value);
        }
      }
    }

    if (ts.isJsxExpression(node) && node.expression && !ts.isJsxAttribute(node.parent)) {
      const value = simpleExpressionText(node.expression);
      if (value !== null && hasMeaningfulText(value, { allowSymbols: true })) {
        addViolation(violations, sourceFile, node, "inline JSX expression text", value);
      }
    }

    if (ts.isPropertyAssignment(node)) {
      const key = ts.isIdentifier(node.name) || ts.isStringLiteral(node.name) ? node.name.text : "";
      const value = literalText(node.initializer);
      if (contentObjectKeys.has(key) && value !== null && hasMeaningfulText(value)) {
        addViolation(violations, sourceFile, node, `inline content object value: ${key}`, value);
      }
    }

    if (ts.isBindingElement(node) && node.initializer) {
      const key = ts.isIdentifier(node.name) ? node.name.text : "";
      const value = literalText(node.initializer);
      if (contentObjectKeys.has(key) && value !== null && hasMeaningfulText(value)) {
        addViolation(violations, sourceFile, node, `inline content default: ${key}`, value);
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
}

const sourceFiles = (await Promise.all(sourceRoots.map(collectSourceFiles))).flat();
const violations = [];

for (const file of sourceFiles) {
  inspectFile(file, await readFile(file, "utf8"), violations);
}

if (violations.length > 0) {
  console.error(`Component content boundary failed with ${violations.length} violation(s):`);
  for (const violation of violations) {
    console.error(
      `- ${violation.file}:${violation.line} ${violation.reason}: ${JSON.stringify(violation.value)}`,
    );
  }
  console.error(
    "Move visible page/business copy into src/content/** or src/data/** and pass it through typed props.\n" +
      "Intentional accessibility/media/platform values may remain inline when they are not page copy.",
  );
  process.exit(1);
}

console.log(`Component content boundary passed (${sourceFiles.length} source files checked).`);
