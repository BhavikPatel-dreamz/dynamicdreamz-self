import { getPayload } from "payload";
import config from "@payload-config";
import {
  primaryNavigation,
  footerNavigation,
  type PrimaryNavigationGroup,
  type NavigationGroup,
} from "@/data/navigation";
import type { FooterLinkItem } from "@/components/layout/site-footer";
import type {
  Post,
  CaseStudy,
  Navigation,
  Media,
  Testimonial,
} from "@/types/payload-types";
import type {
  BlogArchiveArticle,
  BlogArchiveCategoryValue,
} from "@/content/blogs";
import type {
  BlogPostDetail,
  BlogContentBlock,
  BlogInlineNode,
  BlogListItem,
} from "@/types/blog-post";
import type { CaseStudyDetail, CaseStudyItem } from "@/types/case-study";
import caseStudiesItemsJson from "@/content/case-studies-items.json";

export async function getPayloadNavigation() {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "navigation" });
  } catch (err) {
    console.warn("Payload getPayloadNavigation warning:", err);
    return null;
  }
}

export async function getPayloadSiteSettings() {
  try {
    const payload = await getPayload({ config });
    return await payload.findGlobal({ slug: "site-settings" });
  } catch (err) {
    console.warn("Payload getPayloadSiteSettings warning:", err);
    return null;
  }
}

export function adaptPayloadNavToPrimary(
  headerNav?: Navigation["headerNav"],
): PrimaryNavigationGroup[] {
  if (!headerNav || !Array.isArray(headerNav) || headerNav.length === 0) {
    return primaryNavigation;
  }

  return headerNav.map((group) => {
    const groupSlug = group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const localMatch = primaryNavigation.find(
      (g) => g.slug === groupSlug || g.label.toLowerCase() === group.title.toLowerCase(),
    );

    const subItems = group.subItems;
    const items =
      subItems && subItems.length > 0
        ? subItems.map((item) => {
            const localItem = localMatch?.items.find(
              (li) => li.href === item.href || li.label.toLowerCase() === item.label.toLowerCase(),
            );
            const iconSrc = "iconSrc" in item && typeof item.iconSrc === "string" && item.iconSrc ? item.iconSrc : undefined;
            const ctaLabel = "ctaLabel" in item && typeof item.ctaLabel === "string" && item.ctaLabel ? item.ctaLabel : undefined;
            return {
              label: item.label,
              href: item.href,
              description: item.description || localItem?.description || "",
              badge: item.badge || localItem?.badge,
              ctaLabel: ctaLabel || localItem?.ctaLabel,
              icon: iconSrc
                ? { src: iconSrc, width: 20, height: 20 }
                : localItem?.icon || {
                    src: "/assets/navigation/header/shopify-development.svg",
                    width: 20,
                    height: 20,
                  },
            };
          })
        : localMatch?.items || [];

    const groupColumns = "columns" in group && typeof group.columns === "number" ? (group.columns as 1 | 2 | 3) : undefined;
    const groupVariant = "variant" in group && typeof group.variant === "string" ? (group.variant as "default" | "work") : undefined;
    const promoData = "promo" in group && group.promo && typeof group.promo === "object" && "title" in group.promo && group.promo.title
      ? {
          title: String(group.promo.title),
          details: String("details" in group.promo ? group.promo.details || "" : ""),
          ctaLabel: String("ctaLabel" in group.promo ? group.promo.ctaLabel || "" : ""),
          ctaHref: String("ctaHref" in group.promo ? group.promo.ctaHref || "" : ""),
        }
      : localMatch?.promo;

    return {
      label: group.title,
      slug: localMatch?.slug || groupSlug,
      columns: groupColumns || localMatch?.columns || 2,
      variant: groupVariant || localMatch?.variant || "default",
      items,
      promo: promoData,
    };
  });
}

export function adaptPayloadFooterColumns(
  footerColumns?: Navigation["footerColumns"],
): NavigationGroup[] {
  if (!footerColumns || !Array.isArray(footerColumns) || footerColumns.length === 0) {
    return footerNavigation;
  }

  return footerColumns.map((col, idx) => {
    const localMatch =
      footerNavigation[idx] ||
      footerNavigation.find((g) => g.label.toLowerCase() === col.title.toLowerCase());

    const links =
      col.links && col.links.length > 0
        ? col.links.map((link) => ({
            label: link.label,
            href: link.href,
          }))
        : localMatch?.links || [];

    return {
      label: col.title || localMatch?.label || `Column ${idx + 1}`,
      links,
    };
  });
}

export function adaptPayloadFooterBottomLinks(
  footerBottomLinks?: Navigation["footerBottomLinks"],
): FooterLinkItem[] | null {
  if (
    !footerBottomLinks ||
    !Array.isArray(footerBottomLinks) ||
    footerBottomLinks.length === 0
  ) {
    return null;
  }

  return footerBottomLinks.map((link) => ({
    label: link.label,
    href: link.href,
  }));
}

export async function getPayloadPosts(limit = 200) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      limit,
      sort: "-date",
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadPosts warning:", err);
    return [];
  }
}

export async function getPayloadPostBySlug(
  slug: string,
  options?: { preview?: boolean },
) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug } },
      draft: options?.preview,
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadPostBySlug(${slug}) warning:`, err);
    return null;
  }
}

export async function getPayloadCaseStudies(limit = 100) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "case-studies",
      limit,
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadCaseStudies warning:", err);
    return [];
  }
}

export async function getPayloadCaseStudyBySlug(
  slug: string,
  options?: { preview?: boolean },
) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: slug } },
      draft: options?.preview,
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadCaseStudyBySlug(${slug}) warning:`, err);
    return null;
  }
}

export async function getPayloadPageBySlug(
  slug: string,
  options?: { preview?: boolean },
) {
  try {
    const payload = await getPayload({ config });
    const normalizedSlug = slug.replace(/^\/+|\/+$/g, "") || "home";
    const res = await payload.find({
      collection: "pages",
      where: {
        or: [
          { slug: { equals: normalizedSlug } },
          { slug: { equals: `/${normalizedSlug}` } },
        ],
      },
      draft: options?.preview,
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadPageBySlug(${slug}) warning:`, err);
    return null;
  }
}

export type MediaOrId =
  | number
  | Media
  | null
  | undefined
  | {
      url?: string | null;
      src?: string | null;
      alt?: string | null;
      width?: number | null;
      height?: number | null;
    }
  | string;

export function resolveMediaUrl(media?: MediaOrId, fallback = ""): string {
  if (!media) return fallback;
  if (typeof media === "string") return media;
  if (typeof media === "object") {
    if ("url" in media && typeof media.url === "string" && media.url) {
      return media.url;
    }
    if ("src" in media && typeof media.src === "string" && media.src) {
      return media.src;
    }
  }
  return fallback;
}

export function resolveMediaAlt(media?: MediaOrId, fallback = ""): string {
  if (!media || typeof media !== "object") return fallback;
  if ("alt" in media && typeof media.alt === "string" && media.alt.trim()) {
    return media.alt.trim();
  }
  return fallback;
}

export function resolveMediaWidth(media?: MediaOrId, fallback?: number): number | undefined {
  if (!media || typeof media !== "object") return fallback;
  if ("width" in media && typeof media.width === "number" && media.width > 0) {
    return media.width;
  }
  return fallback;
}

export function resolveMediaHeight(media?: MediaOrId, fallback?: number): number | undefined {
  if (!media || typeof media !== "object") return fallback;
  if ("height" in media && typeof media.height === "number" && media.height > 0) {
    return media.height;
  }
  return fallback;
}

export function serializeLexicalToHtml(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const obj = node as {
    root?: unknown;
    children?: unknown[];
    text?: string;
    type?: string;
    tag?: string;
  };
  if (obj.root) return serializeLexicalToHtml(obj.root);
  if (typeof obj.text === "string") return obj.text;
  if (Array.isArray(obj.children)) {
    const inner = obj.children.map(serializeLexicalToHtml).join("");
    if (obj.type === "paragraph") return `<p>${inner}</p>`;
    if (obj.type === "heading") {
      const tag = obj.tag || "h3";
      return `<${tag}>${inner}</${tag}>`;
    }
    if (obj.type === "list") return `<ul>${inner}</ul>`;
    if (obj.type === "listitem") return `<li>${inner}</li>`;
    return inner;
  }
  return "";
}

export function adaptPayloadBlocksToBlogBlocks(blocks: unknown[]): BlogContentBlock[] {
  if (!Array.isArray(blocks) || blocks.length === 0) return [];
  const results: BlogContentBlock[] = [];

  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    const block = b as Record<string, unknown>;
    const blockType = String(block.blockType || block.type || "");

    if (blockType === "blog-heading" || blockType === "heading") {
      const levelNum = Number(block.level || 2);
      const level = (levelNum >= 2 && levelNum <= 5 ? levelNum : 2) as 2 | 3 | 4 | 5;
      const headingAnchorId = block.anchorId || block.id;
      results.push({
        type: "heading",
        level,
        text: String(block.text || ""),
        id: headingAnchorId ? String(headingAnchorId) : undefined,
      });
    } else if (blockType === "blog-paragraph" || blockType === "paragraph") {
      const inlineNodes = Array.isArray(block.inlineNodes) ? block.inlineNodes : null;
      if (inlineNodes && inlineNodes.length > 0) {
        results.push({
          type: "paragraph",
          children: inlineNodes.map((n) => {
            const node = n as Record<string, unknown>;
            if (node.type === "break") return { type: "break" as const };
            if (node.type === "link") {
              return {
                type: "link" as const,
                href: String(node.href || ""),
                text: String(node.text || ""),
                bold: Boolean(node.bold),
                italic: Boolean(node.italic),
                target: node.target === "_blank" ? "_blank" : undefined,
                rel: node.rel ? String(node.rel) : undefined,
              };
            }
            return {
              type: "text" as const,
              text: String(node.text || ""),
              bold: Boolean(node.bold),
              italic: Boolean(node.italic),
            };
          }),
        });
      } else if (Array.isArray(block.children)) {
        results.push({
          type: "paragraph",
          children: block.children as (string | BlogInlineNode)[],
        });
      } else {
        results.push({
          type: "paragraph",
          children: [String(block.text || "")],
        });
      }
    } else if (blockType === "blog-list" || blockType === "list") {
      const rawItems = Array.isArray(block.items) ? block.items : [];
      results.push({
        type: "list",
        ordered: Boolean(block.ordered),
        items: rawItems.map((item) => {
          const it = item as Record<string, unknown>;
          if (Array.isArray(it.content)) return it as unknown as BlogListItem;
          const inlineNodes = Array.isArray(it.inlineNodes) ? it.inlineNodes : null;
          if (inlineNodes && inlineNodes.length > 0) {
            return {
              content: inlineNodes.map((n) => {
                const node = n as Record<string, unknown>;
                if (node.type === "break") return { type: "break" as const };
                if (node.type === "link") {
                  return {
                    type: "link" as const,
                    href: String(node.href || ""),
                    text: String(node.text || ""),
                    bold: Boolean(node.bold),
                    italic: Boolean(node.italic),
                    target: node.target === "_blank" ? "_blank" : undefined,
                  };
                }
                return {
                  type: "text" as const,
                  text: String(node.text || ""),
                  bold: Boolean(node.bold),
                  italic: Boolean(node.italic),
                };
              }),
            };
          }
          return { content: [String(it.text || "")] };
        }),
      });
    } else if (blockType === "blog-image" || blockType === "image") {
      const imgMedia = (block.image ?? block.src) as MediaOrId;
      const src = resolveMediaUrl(imgMedia, typeof block.src === "string" ? block.src : "");
      const alt = resolveMediaAlt(imgMedia, typeof block.alt === "string" ? block.alt : "");
      const width = resolveMediaWidth(imgMedia, Number(block.width || 750)) || 750;
      const height = resolveMediaHeight(imgMedia, Number(block.height || 400)) || 400;
      results.push({
        type: "image",
        src,
        alt,
        width,
        height,
        caption: block.caption ? String(block.caption) : undefined,
      });
    } else if (blockType === "blog-table" || blockType === "table") {
      const rawHeaders = Array.isArray(block.headers) ? block.headers : [];
      const rawRows = Array.isArray(block.rows) ? block.rows : [];
      results.push({
        type: "table",
        headers: rawHeaders.map((h) => {
          if (typeof h === "string") return h;
          const hObj = h as Record<string, unknown>;
          return String(hObj.headerText || "");
        }),
        rows: rawRows.map((r) => {
          const rowObj = r as Record<string, unknown>;
          const cells = Array.isArray(rowObj.cells) ? rowObj.cells : (Array.isArray(r) ? r : []);
          return cells.map((c) => {
            if (typeof c === "string") return [c];
            const cObj = c as Record<string, unknown>;
            return [String(cObj.cellText || "")];
          });
        }),
      });
    } else if (blockType === "blog-divider" || blockType === "divider" || blockType === "hr") {
      results.push({ type: "hr" });
    }
  }

  return results;
}

export function adaptPayloadPostToArchive(
  post: Post,
): BlogArchiveArticle {
  const featured = post.featuredImage;

  let categoryLabel: BlogArchiveArticle["category"] = "Shopify";
  let categoryHref = "/blogs?category=shopify";

  if (post.categories && post.categories.length > 0) {
    const firstCat = post.categories[0];
    if (typeof firstCat === "object" && firstCat !== null) {
      const name = firstCat.name.toLowerCase();
      if (name.includes("wordpress")) {
        categoryLabel = "WordPress";
        categoryHref = "/blogs?category=wordpress";
      } else if (name.includes("ecommerce")) {
        categoryLabel = "eCommerce";
        categoryHref = "/blogs?category=ecommerce";
      } else if (name.includes("big") || name.includes("commerce")) {
        categoryLabel = "Big-Commerce";
        categoryHref = "/blogs?category=big-commerce";
      } else if (name.includes("faq")) {
        categoryLabel = "Faqs";
        categoryHref = "/blogs?category=faqs";
      } else {
        categoryLabel = "Shopify";
        categoryHref = "/blogs?category=shopify";
      }
    }
  }

  const displayDate =
    post.displayDate ||
    (post.date
      ? new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "");

  return {
    title: post.title,
    href: `/blogs/${post.slug}`,
    image: resolveMediaUrl(featured) || null,
    width: resolveMediaWidth(featured) || null,
    height: resolveMediaHeight(featured) || null,
    date: post.date,
    displayDate,
    category: categoryLabel,
    categoryHref,
    excerpt: post.excerpt || "",
  };
}

export function filterPayloadArchivePosts(
  posts: readonly BlogArchiveArticle[],
  query = "",
  category?: BlogArchiveCategoryValue,
): BlogArchiveArticle[] {
  const normalizedQuery = query.trim().toLocaleLowerCase("en-US");

  return posts.filter((post) => {
    const matchesCategory = category
      ? post.category.toLocaleLowerCase("en-US") === category
      : post.category !== "Faqs";
    const matchesQuery = normalizedQuery
      ? post.title.toLocaleLowerCase("en-US").includes(normalizedQuery)
      : true;

    return matchesCategory && matchesQuery;
  });
}

export function adaptPayloadPostToBlogPostDetail(
  post: Post,
  fallbackDetail?: BlogPostDetail,
): BlogPostDetail {
  const featured = post.featuredImage;

  let categoryName = fallbackDetail?.category || "Shopify";
  let categoryValue = fallbackDetail?.categoryValue || "shopify";
  let categoryHref = fallbackDetail?.categoryHref || "/blogs?category=shopify";

  if (post.categories && post.categories.length > 0) {
    const firstCat = post.categories[0];
    if (typeof firstCat === "object" && firstCat !== null) {
      categoryName = firstCat.name;
      categoryValue = firstCat.slug;
      categoryHref = `/blogs?category=${firstCat.slug}`;
    }
  }

  const displayDate =
    post.displayDate || fallbackDetail?.displayDate || post.date;
  const modified =
    post.updatedAt || fallbackDetail?.modified || post.date;

  const author =
    (typeof post.author === "object" && post.author !== null
      ? {
          name: post.author.name,
          role: post.author.role || "Author",
          bio: post.author.bio || "",
          image:
            resolveMediaUrl(post.author.avatar) ||
            post.author.avatarUrl ||
            fallbackDetail?.author?.image ||
            "/assets/blog/authors/rizwanshaikh.webp",
          linkedin: post.author.linkedin || undefined,
        }
      : null) ||
    fallbackDetail?.author ||
    null;

  const featuredUrl = resolveMediaUrl(featured) || fallbackDetail?.featuredImage?.src;
  const featuredAlt = resolveMediaAlt(featured, post.title) || fallbackDetail?.featuredImage?.alt || post.title;
  const featuredWidth = resolveMediaWidth(featured, fallbackDetail?.featuredImage?.width || 1200) || 1200;
  const featuredHeight = resolveMediaHeight(featured, fallbackDetail?.featuredImage?.height || 630) || 630;

  const featuredImage = featuredUrl
    ? {
        src: featuredUrl,
        width: featuredWidth,
        height: featuredHeight,
        alt: featuredAlt,
      }
    : fallbackDetail?.featuredImage || null;

  const faqs =
    post.faqs && post.faqs.length > 0
      ? post.faqs.map((f) => ({ question: f.question, answer: f.answer }))
      : fallbackDetail?.faqs || [];

  const dynamicBefore = adaptPayloadBlocksToBlogBlocks(post.contentBeforeToc as unknown[]);
  const dynamicAfter = adaptPayloadBlocksToBlogBlocks(post.content as unknown[]);

  const contentBeforeToc =
    dynamicBefore.length > 0
      ? dynamicBefore
      : fallbackDetail?.contentBeforeToc || [];

  const contentAfterToc =
    dynamicAfter.length > 0
      ? dynamicAfter
      : fallbackDetail?.contentAfterToc || [];

  const toc =
    post.toc && post.toc.length > 0
      ? post.toc.map((t) => ({ label: t.label, href: t.href, level: t.level || 2 }))
      : fallbackDetail?.toc || [];

  let words = 0;
  for (const b of [...contentBeforeToc, ...contentAfterToc]) {
    if (b.type === "paragraph") {
      for (const c of b.children) {
        if (typeof c === "string") words += c.split(/\s+/).length;
        else if (c.type === "text") words += c.text.split(/\s+/).length;
      }
    } else if (b.type === "heading") {
      words += b.text.split(/\s+/).length;
    }
  }

  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    displayDate,
    modified,
    category: categoryName,
    categoryValue,
    categoryHref,
    featuredImage,
    excerpt: post.excerpt || fallbackDetail?.excerpt || "",
    author,
    contentBeforeToc,
    contentAfterToc,
    toc,
    faqs,
    previous: fallbackDetail?.previous || null,
    next: fallbackDetail?.next || null,
    seo: {
      title:
        post.seo?.metaTitle ||
        fallbackDetail?.seo.title ||
        post.title,
      description:
        post.seo?.metaDescription ||
        fallbackDetail?.seo.description ||
        post.excerpt ||
        "",
    },
    wordCount: words || fallbackDetail?.wordCount || 500,
  };
}

export function adaptPayloadCaseStudiesToItems(
  caseStudies: CaseStudy[],
): CaseStudyItem[] {
  return caseStudies.map((cs) => {
    const fallbackItem = caseStudiesItemsJson.find((item) => item.slug === cs.slug);
    const heroSrc = resolveMediaUrl(cs.heroImage) || fallbackItem?.image || "/assets/case-studies/gnc-india.webp";
    const heroAlt = resolveMediaAlt(cs.heroImage, cs.title) || fallbackItem?.alt || cs.title;
    const rawTags = cs.archive?.tags?.map((t) => t.tag).filter(Boolean) as string[] || [];
    const tags =
      rawTags.length > 0
        ? rawTags
        : ([cs.technology, cs.industry].filter(Boolean) as string[]);

    return {
      slug: cs.slug,
      title: cs.archive?.title || cs.title,
      technology: cs.archive?.technology || cs.technology || fallbackItem?.technology || "Shopify Plus",
      industry: cs.archive?.industry || cs.industry || fallbackItem?.industry || "",
      excerpt: cs.archive?.excerpt || cs.summary || fallbackItem?.excerpt || "",
      image: heroSrc,
      alt: heroAlt,
      href: `/case-studies/${cs.slug}`,
      tags: tags.length > 0 ? tags : (fallbackItem?.tags || ["Shopify Plus"]),
    };
  });
}

export function adaptPayloadCaseStudyToDetail(
  cs: CaseStudy,
  fallbackDetail?: CaseStudyDetail,
): CaseStudyDetail {
  const fallbackItem = caseStudiesItemsJson.find((item) => item.slug === cs.slug);

  const heroSrc = resolveMediaUrl(cs.heroImage) || fallbackDetail?.hero.image.src || fallbackItem?.image || "/assets/case-studies/gnc-india.webp";
  const heroAlt = resolveMediaAlt(cs.heroImage, cs.title) || fallbackDetail?.hero.image.alt || fallbackItem?.alt || cs.title;
  const heroWidth = resolveMediaWidth(cs.heroImage, fallbackDetail?.hero.image.width || 1200) || 1200;
  const heroHeight = resolveMediaHeight(cs.heroImage, fallbackDetail?.hero.image.height || 800) || 800;

  const heroImage = {
    src: heroSrc,
    width: heroWidth,
    height: heroHeight,
    alt: heroAlt,
  };

  const keyMetrics =
    cs.keyMetrics && cs.keyMetrics.items && cs.keyMetrics.items.length > 0
      ? {
          heading: cs.keyMetrics.heading || fallbackDetail?.keyMetrics?.heading || "Key Results & Impact",
          items: cs.keyMetrics.items.map((m) => ({ stat: m.stat, label: m.label })),
        }
      : fallbackDetail?.keyMetrics;

  const challenge = cs.challenge
    ? {
        eyebrow: cs.challenge.eyebrow || fallbackDetail?.challenge?.eyebrow,
        heading: cs.challenge.heading || fallbackDetail?.challenge?.heading || "The Challenge",
        description: cs.challenge.description || fallbackDetail?.challenge?.description || "",
        items: cs.challenge.items && cs.challenge.items.length > 0
          ? cs.challenge.items.map((it) => ({
              number: it.number || "",
              title: it.title || "",
              description: it.description || "",
            }))
          : fallbackDetail?.challenge?.items || [],
      }
    : fallbackDetail?.challenge;

  const solutions = cs.solutions
    ? {
        eyebrow: cs.solutions.eyebrow || fallbackDetail?.solutions?.eyebrow,
        heading: cs.solutions.heading || fallbackDetail?.solutions?.heading || "Our Solution",
        lead: cs.solutions.lead || fallbackDetail?.solutions?.lead || "",
        items: cs.solutions.items && cs.solutions.items.length > 0
          ? cs.solutions.items.map((it) => ({
              number: it.number || "",
              text: it.text || "",
            }))
          : fallbackDetail?.solutions?.items || [],
      }
    : fallbackDetail?.solutions;

  const keyFeatures = cs.keyFeatures
    ? {
        eyebrow: cs.keyFeatures.eyebrow || fallbackDetail?.keyFeatures?.eyebrow,
        heading: cs.keyFeatures.heading || fallbackDetail?.keyFeatures?.heading || "Key Features Delivered",
        isTwoColumn: cs.keyFeatures.isTwoColumn || false,
        items: cs.keyFeatures.items && cs.keyFeatures.items.length > 0
          ? cs.keyFeatures.items.map((it) => ({
              number: it.number || "",
              title: it.title || "",
              description: it.description || undefined,
            }))
          : fallbackDetail?.keyFeatures?.items || [],
      }
    : fallbackDetail?.keyFeatures;

  const projectDelivery = cs.projectDelivery
    ? {
        eyebrow: cs.projectDelivery.eyebrow || fallbackDetail?.projectDelivery?.eyebrow,
        heading: cs.projectDelivery.heading || fallbackDetail?.projectDelivery?.heading || "Project Delivery & Technology",
        items: cs.projectDelivery.items && cs.projectDelivery.items.length > 0
          ? cs.projectDelivery.items.map((it) => ({
              category: it.category || undefined,
              name: it.name || "",
            }))
          : fallbackDetail?.projectDelivery?.items || [],
      }
    : fallbackDetail?.projectDelivery;

  const customSections =
    cs.customSections && cs.customSections.length > 0
      ? cs.customSections.map((s) => ({
          eyebrow: s.eyebrow || undefined,
          heading: s.heading,
          lead: s.lead || undefined,
          description: s.description || undefined,
          items: s.items && s.items.length > 0
            ? s.items.map((i) => ({
                number: i.number || undefined,
                title: i.title || undefined,
                description: i.description || undefined,
                note: i.note || undefined,
              }))
            : undefined,
          takeaways: s.takeaways && s.takeaways.length > 0
            ? s.takeaways.map((t) => t.text || "").filter(Boolean)
            : undefined,
        }))
      : fallbackDetail?.customSections;

  const relatedCaseStudies =
    cs.relatedCaseStudies && cs.relatedCaseStudies.length > 0
      ? cs.relatedCaseStudies
          .map((r) => {
            if (typeof r === "object" && r !== null && "slug" in r && typeof r.slug === "string") {
              return r.slug;
            }
            return "";
          })
          .filter(Boolean) as string[]
      : fallbackDetail?.relatedCaseStudies;

  const heroEyebrows =
    cs.heroEyebrows && cs.heroEyebrows.length > 0
      ? cs.heroEyebrows.map((eb) => eb.text).filter(Boolean)
      : fallbackDetail?.heroEyebrows ||
        ([cs.technology, cs.industry].filter(Boolean) as string[]);

  return {
    slug: cs.slug,
    clientName: cs.clientName || fallbackDetail?.clientName || cs.title,
    title: cs.title,
    summary: cs.summary || fallbackDetail?.summary || "",
    projectTitle: cs.projectTitle || fallbackDetail?.projectTitle || cs.title,
    industry: cs.industry || fallbackDetail?.industry || "",
    technology: cs.technology || fallbackDetail?.technology || "Shopify Plus",
    location: cs.location || fallbackDetail?.location || "Surat, Gujarat, India",
    websiteUrl: cs.websiteUrl || fallbackDetail?.websiteUrl || undefined,
    heroEyebrows,
    archive: {
      title: cs.archive?.title || cs.title,
      technology:
        cs.archive?.technology ||
        cs.technology ||
        fallbackDetail?.archive.technology ||
        "Shopify Plus",
      industry: cs.archive?.industry || cs.industry || fallbackDetail?.archive.industry || "",
      excerpt: cs.archive?.excerpt || cs.summary || fallbackDetail?.archive.excerpt || "",
    },
    hero: {
      image: heroImage,
    },
    keyMetrics,
    challenge,
    solutions,
    keyFeatures,
    projectDelivery,
    relatedCaseStudies,
    customSections,
    seo: {
      title: cs.seo?.metaTitle || fallbackDetail?.seo.title || cs.title,
      description:
        cs.seo?.metaDescription ||
        fallbackDetail?.seo.description ||
        cs.summary ||
        "",
      lastModified:
        cs.updatedAt ||
        fallbackDetail?.seo.lastModified ||
        new Date().toISOString(),
    },
  };
}

export async function getPayloadTestimonials(limit = 100) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "testimonials",
      limit,
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadTestimonials warning:", err);
    return [];
  }
}

export function adaptPayloadTestimonial(
  t: Testimonial,
): {
  title: string;
  quote: string;
  name: string;
  company: string;
  companyHref?: string;
  avatar: string;
  portrait: string;
  logo?: string;
  logoAlt?: string;
  videoId: string;
  videoUploadDate: string;
} {
  return {
    title: t.title || t.quote.slice(0, 50),
    quote: t.quote,
    name: t.clientName,
    company: t.company,
    companyHref: t.companyHref || undefined,
    avatar: resolveMediaUrl(t.avatar) || "/assets/testimonials/shari-leidich.webp",
    portrait: resolveMediaUrl(t.portrait) || resolveMediaUrl(t.avatar) || "/assets/testimonials/shari-leidich-full.webp",
    logo: resolveMediaUrl(t.companyLogo) || undefined,
    logoAlt: t.companyLogoAlt || `${t.company} logo`,
    videoId: t.videoId || "",
    videoUploadDate: t.videoUploadDate || "2024-05-15",
  };
}

export async function getPayloadCategories(limit = 100) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "categories",
      limit,
      sort: "name",
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadCategories warning:", err);
    return [];
  }
}

export async function getPayloadCategoryBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "categories",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadCategoryBySlug(${slug}) warning:`, err);
    return null;
  }
}

export async function getPayloadAuthors(limit = 50) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "authors",
      limit,
      sort: "name",
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadAuthors warning:", err);
    return [];
  }
}

export async function getPayloadAuthorBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "authors",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadAuthorBySlug(${slug}) warning:`, err);
    return null;
  }
}

