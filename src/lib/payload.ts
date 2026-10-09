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
} from "@/types/payload-types";
import type {
  BlogArchiveArticle,
  BlogArchiveCategoryValue,
} from "@/content/blogs";
import type { BlogPostDetail } from "@/types/blog-post";
import type { CaseStudyDetail, CaseStudyItem } from "@/types/case-study";

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
            return {
              label: item.label,
              href: item.href,
              description: item.description || localItem?.description || "",
              badge: item.badge || localItem?.badge,
              ctaLabel: localItem?.ctaLabel,
              icon: localItem?.icon || {
                src: "/assets/navigation/header/shopify-development.svg",
                width: 20,
                height: 20,
              },
            };
          })
        : localMatch?.items || [];

    return {
      label: group.title,
      slug: localMatch?.slug || groupSlug,
      columns: localMatch?.columns || 2,
      variant: localMatch?.variant || "default",
      items,
      promo: localMatch?.promo,
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

export function adaptPayloadPostToArchive(
  post: Post,
): BlogArchiveArticle {
  const cover =
    typeof post.coverImage === "object" && post.coverImage !== null
      ? post.coverImage
      : null;

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
    image: cover?.url || null,
    width: cover?.width || null,
    height: cover?.height || null,
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
  const cover =
    typeof post.coverImage === "object" && post.coverImage !== null
      ? post.coverImage
      : null;

  let htmlContent = "";
  if (post.content) {
    if (typeof post.content === "string") {
      htmlContent = post.content;
    } else {
      htmlContent = serializeLexicalToHtml(post.content);
    }
  }

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
            (typeof post.author.avatar === "object" &&
              post.author.avatar?.url) ||
            "/assets/team/vatsal-panchal.webp",
          linkedin: post.author.linkedin || undefined,
        }
      : null) ||
    fallbackDetail?.author ||
    null;

  const featuredImage = cover?.url
    ? {
        src: cover.url,
        width: cover.width || 1200,
        height: cover.height || 630,
        alt: cover.alt || post.title,
      }
    : fallbackDetail?.featuredImage || null;

  const faqs =
    post.faqs && post.faqs.length > 0
      ? post.faqs.map((f) => ({ question: f.question, answer: f.answer }))
      : fallbackDetail?.faqs || [];

  const rawText = htmlContent.replace(/<[^>]+>/g, " ");
  const wordCount = rawText.trim()
    ? rawText.trim().split(/\s+/).length
    : fallbackDetail?.wordCount || 500;

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
    contentBeforeToc: htmlContent || fallbackDetail?.contentBeforeToc || "",
    contentAfterToc: fallbackDetail?.contentAfterToc || "",
    toc: fallbackDetail?.toc || [],
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
    wordCount,
  };
}

export function adaptPayloadCaseStudiesToItems(
  caseStudies: CaseStudy[],
): CaseStudyItem[] {
  return caseStudies.map((cs) => {
    const thumb =
      typeof cs.thumbnail === "object" && cs.thumbnail !== null
        ? cs.thumbnail
        : null;
    const hero =
      typeof cs.heroImage === "object" && cs.heroImage !== null
        ? cs.heroImage
        : null;
    const imageMedia = thumb || hero;

    return {
      slug: cs.slug,
      title: cs.title,
      technology: cs.technology || "Shopify Plus",
      industry: cs.industry || "",
      excerpt: cs.overview || cs.challenge || "",
      image: imageMedia?.url || "/assets/case-studies/default.webp",
      alt: imageMedia?.alt || cs.title,
      href: `/case-studies/${cs.slug}`,
      tags: [cs.technology, cs.industry].filter(Boolean) as string[],
    };
  });
}

export function adaptPayloadCaseStudyToDetail(
  cs: CaseStudy,
  fallbackDetail?: CaseStudyDetail,
): CaseStudyDetail {
  const thumb =
    typeof cs.thumbnail === "object" && cs.thumbnail !== null
      ? cs.thumbnail
      : null;
  const hero =
    typeof cs.heroImage === "object" && cs.heroImage !== null
      ? cs.heroImage
      : null;
  const imageMedia = hero || thumb;

  const heroImage = imageMedia?.url
    ? {
        src: imageMedia.url,
        width: imageMedia.width || 1200,
        height: imageMedia.height || 800,
        alt: imageMedia.alt || cs.title,
      }
    : fallbackDetail?.hero.image || {
        src: "/assets/case-studies/default.webp",
        width: 1200,
        height: 800,
        alt: cs.title,
      };

  const keyMetrics =
    cs.metrics && cs.metrics.length > 0
      ? {
          heading: fallbackDetail?.keyMetrics?.heading || "Key Results & Metrics",
          items: cs.metrics.map((m) => ({ stat: m.value, label: m.label })),
        }
      : fallbackDetail?.keyMetrics;

  const challenge = cs.challenge
    ? {
        eyebrow: fallbackDetail?.challenge?.eyebrow,
        heading: fallbackDetail?.challenge?.heading || "The Challenge",
        description: cs.challenge,
        items: fallbackDetail?.challenge?.items || [],
      }
    : fallbackDetail?.challenge;

  const solutions = cs.solution
    ? {
        eyebrow: fallbackDetail?.solutions?.eyebrow,
        heading: fallbackDetail?.solutions?.heading || "Our Solution",
        lead: cs.solution,
        items: fallbackDetail?.solutions?.items || [],
      }
    : fallbackDetail?.solutions;

  return {
    slug: cs.slug,
    clientName: cs.clientName || fallbackDetail?.clientName || cs.title,
    title: cs.title,
    summary: cs.overview || fallbackDetail?.summary || "",
    projectTitle: fallbackDetail?.projectTitle || cs.title,
    industry: cs.industry || fallbackDetail?.industry || "",
    technology: cs.technology || fallbackDetail?.technology || "Shopify Plus",
    location: fallbackDetail?.location || "Surat, Gujarat, India",
    websiteUrl: cs.websiteUrl || fallbackDetail?.websiteUrl || undefined,
    heroEyebrows:
      fallbackDetail?.heroEyebrows ||
      ([cs.technology, cs.industry].filter(Boolean) as string[]),
    archive: {
      title: cs.title,
      technology:
        cs.technology || fallbackDetail?.archive.technology || "Shopify Plus",
      industry: cs.industry || fallbackDetail?.archive.industry || "",
      excerpt: cs.overview || fallbackDetail?.archive.excerpt || "",
    },
    hero: {
      image: heroImage,
    },
    sections: fallbackDetail?.sections || [],
    wireframes: fallbackDetail?.wireframes || null,
    colors: fallbackDetail?.colors || [],
    typefaces: fallbackDetail?.typefaces || [],
    design: fallbackDetail?.design || null,
    keyMetrics,
    challenge,
    solutions,
    keyFeatures: fallbackDetail?.keyFeatures,
    projectDelivery: fallbackDetail?.projectDelivery,
    relatedCaseStudies: fallbackDetail?.relatedCaseStudies,
    customSections: fallbackDetail?.customSections,
    seo: {
      title: cs.seo?.metaTitle || fallbackDetail?.seo.title || cs.title,
      description:
        cs.seo?.metaDescription ||
        fallbackDetail?.seo.description ||
        cs.overview ||
        "",
      lastModified:
        cs.updatedAt ||
        fallbackDetail?.seo.lastModified ||
        new Date().toISOString(),
    },
  };
}
