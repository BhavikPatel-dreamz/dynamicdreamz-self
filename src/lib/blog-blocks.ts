import type { BlogContentBlock, BlogInlineNode, BlogListItem } from "@/types/blog-post";

function decodeEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&nbsp;/g, " ");
}

export function parseInlineNodes(html: string): BlogInlineNode[] {
  if (!html) return [];
  const cleaned = html
    .replace(/<span\s+class="ez-toc-section"[^>]*><\/span>/gi, "")
    .replace(/<span\s+class="ez-toc-section-end"><\/span>/gi, "");

  const tokens: BlogInlineNode[] = [];
  const tagRegex = /(<\/?(?:strong|b|em|i|a|br|span)\b(?:"[^"]*"|'[^']*'|[^'">])*?>)/gi;
  const parts = cleaned.split(tagRegex);

  let inLink: { href: string; target?: string; rel?: string; text: string } | null = null;
  let inBold = false;
  let inItalic = false;

  for (const part of parts) {
    if (!part) continue;
    const lower = part.toLowerCase();

    if (lower.startsWith("<a")) {
      const hrefMatch = part.match(/href=["\x27]([^"\x27]*)["\x27]/i);
      const targetMatch = part.match(/target=["\x27]([^"\x27]*)["\x27]/i);
      const relMatch = part.match(/rel=["\x27]([^"\x27]*)["\x27]/i);
      inLink = {
        href: hrefMatch ? hrefMatch[1] : "",
        target: targetMatch ? targetMatch[1] : undefined,
        rel: relMatch ? relMatch[1] : undefined,
        text: "",
      };
      continue;
    }

    if (lower === "</a>") {
      if (inLink) {
        tokens.push({
          type: "link",
          href: inLink.href,
          text: inLink.text,
          bold: inBold || undefined,
          italic: inItalic || undefined,
          target: inLink.target,
          rel: inLink.rel,
        });
        inLink = null;
      }
      continue;
    }

    if (lower.startsWith("<strong") || lower.startsWith("<b")) {
      inBold = true;
      continue;
    }
    if (lower === "</strong>" || lower === "</b>") {
      inBold = false;
      continue;
    }
    if (lower.startsWith("<em") || lower.startsWith("<i")) {
      inItalic = true;
      continue;
    }
    if (lower === "</em>" || lower === "</i>") {
      inItalic = false;
      continue;
    }
    if (lower.startsWith("<br")) {
      tokens.push({ type: "break" });
      continue;
    }
    if (lower.startsWith("<span") || lower === "</span>") {
      continue;
    }

    const text = decodeEntities(part);
    if (inLink) {
      inLink.text += text;
    } else if (inBold || inItalic) {
      tokens.push({
        type: "text",
        text,
        bold: inBold || undefined,
        italic: inItalic || undefined,
      });
    } else {
      tokens.push(text);
    }
  }

  const merged: BlogInlineNode[] = [];
  for (const tok of tokens) {
    if (typeof tok === "string") {
      if (tok.length === 0) continue;
      if (merged.length > 0 && typeof merged[merged.length - 1] === "string") {
        merged[merged.length - 1] = (merged[merged.length - 1] as string) + tok;
      } else {
        merged.push(tok);
      }
    } else {
      merged.push(tok);
    }
  }
  return merged;
}

export function parseHtmlToBlocks(rawHtml: string): BlogContentBlock[] {
  if (!rawHtml || !rawHtml.trim()) return [];
  const blocks: BlogContentBlock[] = [];

  const html = rawHtml.replace(/<!--[\s\S]*?-->/g, "").trim();
  const blockRegex = /<(h[2-6]|p|ul|ol|figure|table|hr)\b((?:"[^"]*"|'[^']*'|[^'">])*?)>([\s\S]*?)<\/\1>|<(hr|img)\b((?:"[^"]*"|'[^']*'|[^'">])*?)\/?>/gi;
  let match: RegExpExecArray | null;

  while ((match = blockRegex.exec(html)) !== null) {
    const tagName = (match[1] || match[4]).toLowerCase();
    const attrs = match[2] || match[5] || "";
    const innerContent = match[3] || "";

    if (tagName.startsWith("h")) {
      const level = parseInt(tagName[1], 10) as 2 | 3 | 4 | 5;
      let id = "";
      const idMatch = attrs.match(/\bid=["\x27]([^"\x27]*)["\x27]/i);
      if (idMatch) {
        id = idMatch[1];
      } else {
        const ezMatch = innerContent.match(/ez-toc-data-id=["\x27](?:#)?([^"\x27]*)["\x27]/i);
        if (ezMatch) id = ezMatch[1];
      }

      const imgMatch = innerContent.match(/<img\b((?:"[^"]*"|'[^']*'|[^'">])*?)\/?>/i);
      if (imgMatch) {
        const iAttrs = imgMatch[1];
        const src = iAttrs.match(/\bsrc=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "";
        const alt = decodeEntities(iAttrs.match(/\balt=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "");
        const w = parseInt(iAttrs.match(/\bwidth=["\x27](\d+)["\x27]/i)?.[1] || "1024", 10);
        const h = parseInt(iAttrs.match(/\bheight=["\x27](\d+)["\x27]/i)?.[1] || "600", 10);
        blocks.push({
          type: "image",
          src,
          alt,
          width: w,
          height: h,
        });
      }

      const rawText = decodeEntities(innerContent.replace(/<[^>]+>/g, "").trim());
      if (rawText) {
        blocks.push({
          type: "heading",
          level,
          id: id || undefined,
          text: rawText,
        });
      }
    } else if (tagName === "p") {
      if (/<img\b/i.test(innerContent)) {
        const pParts = innerContent.split(/(<img\b(?:"[^"]*"|'[^']*'|[^'">])*?\/?>)/gi);
        for (const pPart of pParts) {
          if (!pPart || !pPart.trim()) continue;
          if (pPart.toLowerCase().startsWith("<img")) {
            const src = pPart.match(/\bsrc=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "";
            const alt = decodeEntities(pPart.match(/\balt=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "");
            const w = parseInt(pPart.match(/\bwidth=["\x27](\d+)["\x27]/i)?.[1] || "1024", 10);
            const h = parseInt(pPart.match(/\bheight=["\x27](\d+)["\x27]/i)?.[1] || "600", 10);
            blocks.push({
              type: "image",
              src,
              alt,
              width: w,
              height: h,
            });
          } else {
            const children = parseInlineNodes(pPart.trim());
            if (children.length > 0) {
              blocks.push({ type: "paragraph", children });
            }
          }
        }
      } else {
        const children = parseInlineNodes(innerContent.trim());
        if (children.length > 0) {
          blocks.push({
            type: "paragraph",
            children,
          });
        }
      }
    } else if (tagName === "img") {
      const src = attrs.match(/\bsrc=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "";
      const alt = decodeEntities(attrs.match(/\balt=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "");
      const w = parseInt(attrs.match(/\bwidth=["\x27](\d+)["\x27]/i)?.[1] || "1024", 10);
      const h = parseInt(attrs.match(/\bheight=["\x27](\d+)["\x27]/i)?.[1] || "600", 10);
      blocks.push({
        type: "image",
        src,
        alt,
        width: w,
        height: h,
      });
    } else if (tagName === "ul" || tagName === "ol") {
      const ordered = tagName === "ol";
      const items: BlogListItem[] = [];
      const liRegex = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
      let liMatch: RegExpExecArray | null;
      while ((liMatch = liRegex.exec(innerContent)) !== null) {
        let liInner = liMatch[1].trim();
        let children: BlogListItem[] | undefined = undefined;
        const subListMatch = liInner.match(/<(ul|ol)\b[^>]*>([\s\S]*?)<\/\1>/i);
        if (subListMatch) {
          const subInner = subListMatch[2];
          liInner = liInner.replace(subListMatch[0], "").trim();
          const subItems: BlogListItem[] = [];
          const subLiRegex = /<li\b[^>]*>([\s\S]*?)<\/li>/gi;
          let subLiMatch: RegExpExecArray | null;
          while ((subLiMatch = subLiRegex.exec(subInner)) !== null) {
            subItems.push({
              content: parseInlineNodes(subLiMatch[1].trim()),
            });
          }
          if (subItems.length > 0) children = subItems;
        }
        items.push({
          content: parseInlineNodes(liInner),
          children,
        });
      }
      blocks.push({
        type: "list",
        ordered: ordered || undefined,
        items,
      });
    } else if (tagName === "figure") {
      const imgMatch = innerContent.match(/<img\b((?:"[^"]*"|'[^']*'|[^'">])*?)\/?>/i);
      if (imgMatch) {
        const iAttrs = imgMatch[1];
        const src = iAttrs.match(/\bsrc=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "";
        const alt = decodeEntities(iAttrs.match(/\balt=["\x27]([^"\x27]*)["\x27]/i)?.[1] || "");
        const w = parseInt(iAttrs.match(/\bwidth=["\x27](\d+)["\x27]/i)?.[1] || "1024", 10);
        const h = parseInt(iAttrs.match(/\bheight=["\x27](\d+)["\x27]/i)?.[1] || "600", 10);
        const figcaptionMatch = innerContent.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i);
        const caption = figcaptionMatch
          ? decodeEntities(figcaptionMatch[1].replace(/<[^>]+>/g, "").trim())
          : undefined;
        blocks.push({
          type: "image",
          src,
          alt,
          width: w,
          height: h,
          caption,
        });
      }
    } else if (tagName === "table") {
      const headers: (string | BlogInlineNode)[] = [];
      const rows: (string | BlogInlineNode)[][][] = [];
      const thMatches = [...innerContent.matchAll(/<th\b[^>]*>([\s\S]*?)<\/th>/gi)];
      if (thMatches.length > 0) {
        thMatches.forEach((th) => headers.push(...parseInlineNodes(th[1].trim())));
      }
      const trMatches = [...innerContent.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)];
      trMatches.forEach((tr) => {
        const tdMatches = [...tr[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)];
        if (tdMatches.length > 0) {
          rows.push(tdMatches.map((td) => parseInlineNodes(td[1].trim())));
        }
      });
      blocks.push({
        type: "table",
        headers: headers.length > 0 ? headers : undefined,
        rows,
      });
    } else if (tagName === "hr") {
      blocks.push({ type: "hr" });
    }
  }

  return blocks;
}
