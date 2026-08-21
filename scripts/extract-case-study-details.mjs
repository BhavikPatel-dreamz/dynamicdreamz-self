import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const scratchDir = path.join(rootDir, "scratch", "case-study-audit");
const sitemapPath = path.join(scratchDir, "sitemap.xml");
const outputPath = path.join(scratchDir, "case-study-details.extracted.json");
const assetManifestPath = path.join(scratchDir, "case-study-assets.json");
const existingContentPath = path.join(rootDir, "src", "content", "case-study-details.json");
const archiveContentPath = path.join(rootDir, "src", "content", "case-studies.ts");

const clientNames = {
  "aetrex": "Aetrex",
  "alyve": "ALYVE",
  "atlantic-naturals": "Atlantic Naturals",
  "ayusunless": "Ayusunless",
  "beauti-software": "Beauti Software",
  "blubox": "BluBox",
  "bombay-shirt-company": "Bombay Shirt Company",
  "calmenta": "Calmenta",
  "candy-prom": "Candy Prom & Evening",
  "consciouspoker": "Conscious Poker",
  "d-shop": "D Shop",
  "daniel-walters": "Daniel Walters",
  "don-j": "Don J",
  "e2ip-technologies": "E2IP Technologies",
  "eczema-milk": "Eczema Milk",
  "eddus-and-co": "EDDUS & Co",
  "essential-whitening": "Essential Whitening",
  "evrgreen": "Evrgreen",
  "factsandsupps": "Facts and Supps",
  "furnified": "Furnified",
  "holy-plantz": "Holy Plantz",
  "nandi-medical": "Nandi Medical",
  "nekter-juice-bar": "Nékter Juice Bar",
  "quite-events": "Quite Events",
  "ranavat": "Ranavat",
  "refacekit": "RefaceKit",
  "renee-cosmetics": "RENÉE Cosmetics",
  "rootedhuman": "Rooted Human",
  "santosh-jewellers": "Santosh Jewellers",
  "sleepycat": "SleepyCat",
  "tankbar": "Tankbar",
  "tipii": "Tipii",
  "trendia": "Trendia",
  "yhus": "YHUS",
  "zedmed": "Zedmed",
};

function decodeHtml(value) {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    hellip: "…",
    ldquo: "“",
    lsquo: "‘",
    lt: "<",
    mdash: "—",
    nbsp: " ",
    ndash: "–",
    quot: '"',
    rdquo: "”",
    rsquo: "’",
  };

  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&([a-z]+);/gi, (entity, name) => named[name.toLowerCase()] ?? entity);
}

function textContent(value) {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function attribute(tag, name) {
  const quoted = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, "i"));
  if (quoted) return decodeHtml(quoted[2]);
  const bare = tag.match(new RegExp(`\\b${name}\\s*=\\s*([^\\s>]+)`, "i"));
  return bare ? decodeHtml(bare[1]) : "";
}

function classesFromTag(tag) {
  return attribute(tag, "class").split(/\s+/).filter(Boolean);
}

function findBalancedDiv(html, startIndex) {
  const openingEnd = html.indexOf(">", startIndex);
  if (openingEnd === -1) return null;

  const tokenPattern = /<\/?div\b[^>]*>/gi;
  tokenPattern.lastIndex = startIndex;
  let depth = 0;
  let token;

  while ((token = tokenPattern.exec(html))) {
    if (token.index === startIndex || token.index > startIndex) {
      if (/^<\/div/i.test(token[0])) {
        depth -= 1;
        if (depth === 0) {
          return {
            start: startIndex,
            end: tokenPattern.lastIndex,
            openingTag: html.slice(startIndex, openingEnd + 1),
            inner: html.slice(openingEnd + 1, token.index),
            outer: html.slice(startIndex, tokenPattern.lastIndex),
          };
        }
      } else {
        depth += 1;
      }
    }
  }

  return null;
}

function findDivsByClass(html, className) {
  const results = [];
  const openingPattern = /<div\b[^>]*>/gi;
  let match;

  while ((match = openingPattern.exec(html))) {
    if (!classesFromTag(match[0]).includes(className)) continue;
    const element = findBalancedDiv(html, match.index);
    if (!element) continue;
    results.push(element);
    openingPattern.lastIndex = element.end;
  }

  return results;
}

function firstDivByClass(html, className) {
  return findDivsByClass(html, className)[0] ?? null;
}

function firstTagHtml(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match?.[1] ?? "";
}

function normalizeInternalHref(href) {
  if (!href) return "";
  if (/^https?:\/\/(?:www\.)?dynamicdreamz\.com(?:\/|$)/i.test(href)) {
    const url = new URL(href);
    const pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    return `${pathname}${url.search}${url.hash}`;
  }
  return href;
}

function sanitizeRichHtml(value) {
  const allowed = new Set([
    "a", "b", "br", "em", "h3", "h4", "h5", "h6", "i", "li", "ol", "p",
    "strong", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "ul",
  ]);

  return value
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<\/?([a-z0-9]+)\b[^>]*>/gi, (tag, rawName) => {
      const name = rawName.toLowerCase();
      if (!allowed.has(name)) return "";
      if (tag.startsWith("</")) return `</${name}>`;
      if (name === "br") return "<br>";
      if (name === "a") {
        const href = normalizeInternalHref(attribute(tag, "href"));
        if (!href || /^(javascript|data):/i.test(href)) return "";
        const external = /^https?:\/\//i.test(href);
        return `<a href="${href.replace(/"/g, "&quot;")}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>`;
      }
      if (["td", "th"].includes(name)) {
        const colspan = attribute(tag, "colspan").replace(/\D/g, "");
        const rowspan = attribute(tag, "rowspan").replace(/\D/g, "");
        return `<${name}${colspan ? ` colspan="${colspan}"` : ""}${rowspan ? ` rowspan="${rowspan}"` : ""}>`;
      }
      return `<${name}>`;
    })
    .replace(/(?:\r?\n\s*){2,}/g, "\n")
    .trim();
}

function extractImage(html) {
  const tag = html.match(/<img\b[^>]*>/i)?.[0];
  if (!tag) return null;
  const width = Number.parseInt(attribute(tag, "width"), 10);
  const height = Number.parseInt(attribute(tag, "height"), 10);
  return {
    src: attribute(tag, "src"),
    alt: attribute(tag, "alt"),
    ...(Number.isFinite(width) ? { width } : {}),
    ...(Number.isFinite(height) ? { height } : {}),
  };
}

function extractHeading(html) {
  return textContent(firstTagHtml(html, "h2"));
}

function extractTextDivHtml(html) {
  const textDiv = firstDivByClass(html, "text");
  return textDiv ? sanitizeRichHtml(textDiv.inner) : "";
}

function extractCards(sectionHtml) {
  const slider = firstDivByClass(sectionHtml, "scs-card-slider");
  if (!slider) return [];

  return findDivsByClass(slider.inner, "scs-card-item").map((card) => {
    const imageDiv = firstDivByClass(card.inner, "scs-img");
    const textDiv = firstDivByClass(card.inner, "scs-text");
    return {
      heading: textContent(firstTagHtml(textDiv?.inner ?? "", "h3")),
      html: sanitizeRichHtml((textDiv?.inner ?? "").replace(/<h3\b[^>]*>[\s\S]*?<\/h3>/i, "")),
      image: imageDiv ? extractImage(imageDiv.inner) : null,
    };
  });
}

function extractNarrativeSections(html) {
  const main = firstDivByClass(html, "title-with-text-main");
  if (!main) return [];

  return findDivsByClass(main.inner, "title-with-text").map((section) => {
    const imageDiv = firstDivByClass(section.inner, "image-wrapper");
    return {
      heading: extractHeading(section.inner),
      html: extractTextDivHtml(section.inner),
      image: imageDiv ? extractImage(imageDiv.inner) : null,
      cards: extractCards(section.inner),
    };
  });
}

function extractShowcase(html, design = false) {
  const sections = findDivsByClass(html, "case-study-design-sec");
  const section = sections.find((item) => classesFromTag(item.openingTag).includes("desing-sec") === design);
  if (!section) return null;
  const imageDiv = firstDivByClass(section.inner, "case-study-design-img");
  const backgroundMatch = attribute(section.openingTag, "style").match(/background-image\s*:\s*url\((['"]?)(.*?)\1\)/i);
  return {
    heading: extractHeading(section.inner),
    html: extractTextDivHtml(section.inner),
    image: imageDiv ? extractImage(imageDiv.inner) : null,
    ...(backgroundMatch?.[2] ? { backgroundImage: decodeHtml(backgroundMatch[2]) } : {}),
  };
}

function extractColors(html) {
  const section = firstDivByClass(html, "case-study-color-sec");
  if (!section) return [];

  return findDivsByClass(section.inner, "color-col").map((column) => {
    const colorCode = firstDivByClass(column.inner, "color-code");
    const style = attribute(colorCode?.openingTag ?? "", "style");
    const background = style.match(/background-color\s*:\s*([^;]+)/i)?.[1]?.trim() ?? "";
    return {
      label: textContent(firstTagHtml(column.inner, "h3")),
      value: background,
    };
  }).filter((color) => color.label && color.value);
}

function extractTypefaces(html) {
  const section = firstDivByClass(html, "cs-typeface-sec");
  if (!section) return [];

  return findDivsByClass(section.inner, "typeface-col").map((column) => {
    const specimen = firstDivByClass(column.inner, "typeface-text");
    const specimenHtml = specimen?.inner ?? column.inner;
    return {
      image: extractImage(specimenHtml),
      html: sanitizeRichHtml(specimenHtml.replace(/<img\b[^>]*>/gi, "")),
    };
  });
}

function firstParagraphAfterHeading(heroHtml) {
  const withoutHeading = heroHtml.replace(/^[\s\S]*?<\/h1>/i, "");
  return textContent(firstTagHtml(withoutHeading, "p"));
}

function extractFacts(heroHtml) {
  const list = firstTagHtml(heroHtml, "ul");
  return [...list.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map((match) => {
    const label = textContent(firstTagHtml(match[1], "span"));
    const value = textContent(match[1].replace(/<span\b[^>]*>[\s\S]*?<\/span>/i, ""));
    return { label, value };
  });
}

function metaContent(html, name) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];
  const tag = tags.find((item) => attribute(item, "name").toLowerCase() === name.toLowerCase());
  return tag ? attribute(tag, "content") : "";
}

function truncateDescription(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= 160) return normalized;
  const slice = normalized.slice(0, 157);
  const breakpoint = slice.lastIndexOf(" ");
  return `${slice.slice(0, breakpoint > 120 ? breakpoint : 157).replace(/[,:;\s-]+$/, "")}…`;
}

function normalizeDescription(liveDescription, summary, clientName) {
  const live = liveDescription.replace(/^"/, "").trim();
  if (live.length >= 70 && live.length <= 160) return live;
  const summaryDescription = truncateDescription(summary);
  if (summaryDescription.length >= 70) return summaryDescription;
  return truncateDescription(`Explore the ${clientName} case study and learn about the project challenge, solution, technology, services, and outcomes delivered by Dynamic Dreamz.`);
}

function normalizeTitle(liveTitle, clientName) {
  if (liveTitle.length >= 15 && liveTitle.length <= 60) return liveTitle;
  return `${clientName} Case Study | Dynamic Dreamz`;
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].flatMap((match) => {
    const loc = textContent(firstTagHtml(match[1], "loc"));
    const slug = loc.match(/\/case-studies\/([^/]+)\/?$/)?.[1];
    if (!slug) return [];
    return [{
      slug,
      lastModified: textContent(firstTagHtml(match[1], "lastmod")),
    }];
  });
}

function readArchiveItems() {
  if (fs.existsSync(existingContentPath)) {
    const existing = JSON.parse(fs.readFileSync(existingContentPath, "utf8"));
    if (existing.every((entry) => entry.archive)) {
      return new Map(existing.map((entry) => [entry.slug, entry.archive]));
    }
  }

  const source = fs.readFileSync(archiveContentPath, "utf8");
  const startMarker = "  items: [";
  const endMarker = "] as CaseStudyItem[],";
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  if (start === -1 || end === -1) {
    throw new Error("Unable to read the current case-study archive items.");
  }
  const items = JSON.parse(source.slice(start + "  items: ".length, end + 1));
  return new Map(items.map((item) => [item.slug, {
    title: item.title,
    technology: item.technology,
    industry: item.industry,
    excerpt: item.excerpt,
  }]));
}

function collectAssets(entry) {
  const results = [];
  const add = (image, role) => {
    if (image?.src) results.push({ url: image.src, slug: entry.slug, role });
  };

  add(entry.hero.image, "hero");
  entry.sections.forEach((section, sectionIndex) => {
    add(section.image, `section-${sectionIndex + 1}`);
    section.cards.forEach((card, cardIndex) => add(card.image, `section-${sectionIndex + 1}-card-${cardIndex + 1}`));
  });
  add(entry.wireframes?.image, "wireframes");
  entry.typefaces.forEach((typeface, index) => add(typeface.image, `typeface-${index + 1}`));
  add(entry.design?.image, "design");
  if (entry.design?.backgroundImage) {
    results.push({ url: entry.design.backgroundImage, slug: entry.slug, role: "design-background" });
  }
  return results;
}

function extractEntry({ slug, lastModified }, archiveItems) {
  const sourcePath = path.join(scratchDir, `${slug}.html`);
  if (!fs.existsSync(sourcePath)) throw new Error(`Missing cached source for ${slug}`);
  const html = fs.readFileSync(sourcePath, "utf8");
  const hero = firstDivByClass(html, "case-study-hero");
  if (!hero) throw new Error(`Missing case-study hero for ${slug}`);

  const title = textContent(firstTagHtml(hero.inner, "h1"));
  const summary = firstParagraphAfterHeading(hero.inner);
  const facts = Object.fromEntries(
    extractFacts(hero.inner).map((item) => [item.label.toLowerCase(), item.value]),
  );
  const clientName = clientNames[slug] ?? slug.split("-").map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ");
  const liveTitle = textContent(firstTagHtml(html, "title"));
  const liveDescription = metaContent(html, "description");
  const archive = archiveItems.get(slug);
  if (!archive) throw new Error(`Missing archive content for ${slug}`);

  return {
    slug,
    clientName,
    title,
    summary,
    industry: facts.industry ?? "",
    technology: facts.technology ?? "",
    location: facts.location ?? "",
    archive,
    hero: {
      image: extractImage(hero.inner),
    },
    sections: extractNarrativeSections(html),
    wireframes: extractShowcase(html, false),
    colors: extractColors(html),
    typefaces: extractTypefaces(html),
    design: extractShowcase(html, true),
    seo: {
      title: normalizeTitle(liveTitle, clientName),
      description: normalizeDescription(liveDescription, summary, clientName),
      liveTitle,
      liveDescription,
      lastModified,
    },
  };
}

if (!fs.existsSync(sitemapPath)) {
  throw new Error(`Missing ${path.relative(rootDir, sitemapPath)}. Download the live XML into scratch first.`);
}

const routes = parseSitemap(fs.readFileSync(sitemapPath, "utf8"));
const archiveItems = readArchiveItems();
const entries = routes.map((route) => extractEntry(route, archiveItems));
const assets = entries.flatMap(collectAssets);
const uniqueAssets = [...new Map(assets.map((asset) => [asset.url, asset])).values()];

fs.writeFileSync(outputPath, `${JSON.stringify(entries, null, 2)}\n`);
fs.writeFileSync(assetManifestPath, `${JSON.stringify(uniqueAssets, null, 2)}\n`);

console.log(`Extracted ${entries.length} case-study routes.`);
console.log(`Found ${uniqueAssets.length} unique detail assets.`);
console.log(`Wrote ${path.relative(rootDir, outputPath)}.`);
console.log(`Wrote ${path.relative(rootDir, assetManifestPath)}.`);
