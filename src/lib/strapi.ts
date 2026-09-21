/**
 * Strapi API Client & Typed Adapters for Dynamic Dreamz Next.js.
 * Handles fetching, query parameter formatting, authentication headers,
 * caching tags/revalidation, local media URL normalization, and clean
 * data mapping to Next.js application models.
 */

import type {
  StrapiArticle,
  StrapiCaseStudy,
  StrapiFooterColumnElement,
  StrapiGlobal,
  StrapiMedia,
  StrapiNavGroupElement,
  StrapiPage,
  StrapiResponse,
  StrapiTestimonial,
} from "@/types/strapi";
import {
  footerNavigation,
  primaryNavigation,
  type NavigationGroup,
  type PrimaryNavigationGroup,
} from "@/data/navigation";
import type { BlogPostDetail } from "@/types/blog-post";
import type { CaseStudyDetail, CaseStudyItem } from "@/types/case-study";
import type { HappyClientTestimonialItem } from "@/components/sections/happy-client-card";

const STRAPI_BASE_URL = process.env.STRAPI_API_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export interface StrapiFetchOptions {
  params?: Record<string, string | number | boolean | undefined>;
  tags?: string[];
  revalidate?: number;
  preview?: boolean;
}

/**
 * Returns the normalized Strapi base URL, ensuring no trailing slash.
 */
export function getStrapiBaseUrl(): string {
  return STRAPI_BASE_URL.replace(/\/+$/, "");
}

/**
 * Normalizes a media URL from Strapi.
 * Converts local paths like `/uploads/image.webp` into fully qualified
 * URLs (e.g. `http://localhost:1337/uploads/image.webp`), leaving absolute
 * external URLs (e.g. Cloudinary, AWS S3, HTTPS) unchanged.
 */
export function normalizeStrapiImageUrl(url: string | null | undefined): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const base = getStrapiBaseUrl();
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${base}${cleanPath}`;
}

/**
 * Safely extracts and normalizes the URL from a StrapiMedia object or URL string.
 */
export function getStrapiMediaUrl(
  media: StrapiMedia | string | null | undefined,
): string {
  if (!media) return "";
  if (typeof media === "string") {
    return normalizeStrapiImageUrl(media);
  }
  return normalizeStrapiImageUrl(media.url);
}

/**
 * Extracts a meaningful alt text from a StrapiMedia object, falling back to a given string.
 */
export function getStrapiMediaAlt(
  media: StrapiMedia | null | undefined,
  fallback = "",
): string {
  if (!media) return fallback;
  return media.alternativeText?.trim() || media.caption?.trim() || media.name?.trim() || fallback;
}

/**
 * Generic typed fetcher for Strapi REST API endpoints.
 */
export async function fetchFromStrapi<T>(
  endpoint: string,
  options: StrapiFetchOptions = {},
): Promise<T> {
  const base = getStrapiBaseUrl();
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  const url = new URL(`/api/${cleanEndpoint}`, base);

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  if (options.preview) {
    url.searchParams.append("status", "draft");
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (STRAPI_TOKEN) {
    headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
  }

  const fetchInit: RequestInit = {
    headers,
  };

  if (options.preview) {
    fetchInit.cache = "no-store";
  } else {
    fetchInit.next = {
      tags: options.tags || [],
      revalidate: options.revalidate !== undefined ? options.revalidate : 3600,
    };
  }

  const res = await fetch(url.toString(), fetchInit);

  if (!res.ok) {
    throw new Error(`Strapi fetch error [${res.status}]: ${res.statusText} at ${url.pathname}`);
  }

  return res.json();
}

// ==============================================================================
// Data Adapters (Strapi Content Models -> Next.js Application Models)
// ==============================================================================

/**
 * Adapts a StrapiArticle entity into the Next.js BlogPostDetail model.
 */
export function adaptStrapiArticleToBlogPost(article: StrapiArticle): BlogPostDetail {
  const primaryCategory = article.categories?.[0];
  const categoryName = primaryCategory?.name || "Shopify";
  const categorySlug = primaryCategory?.slug || "shopify";

  const contentText = `${article.contentBeforeToc || ""} ${article.contentAfterToc || ""}`;
  const wordCount = contentText.trim() ? contentText.trim().split(/\s+/).length : 0;

  return {
    slug: article.slug,
    title: article.title,
    date: article.date || article.publishedAt || article.createdAt || "",
    displayDate: article.displayDate || article.date || "",
    modified: article.updatedAt || article.date || "",
    category: categoryName,
    categoryValue: categorySlug,
    categoryHref: `/blogs?category=${encodeURIComponent(categorySlug)}`,
    featuredImage: {
      src: getStrapiMediaUrl(article.coverImage) || "/assets/blogs/placeholder.webp",
      width: article.coverImage?.width || 1200,
      height: article.coverImage?.height || 630,
      alt: getStrapiMediaAlt(article.coverImage, article.title),
    },
    excerpt: article.excerpt || "",
    author: article.author
      ? {
          name: article.author.name,
          role: article.author.role || "Shopify Expert",
          bio: article.author.bio || "",
          image: getStrapiMediaUrl(article.author.avatar) || "/assets/team/author-default.webp",
        }
      : null,
    contentBeforeToc: article.contentBeforeToc || "",
    contentAfterToc: article.contentAfterToc || "",
    toc: [],
    faqs:
      article.faqs?.map((f) => ({
        question: f.question,
        answer: f.answer,
      })) || [],
    previous: null,
    next: null,
    seo: {
      title: article.seo?.metaTitle || article.title,
      description: article.seo?.metaDescription || article.excerpt || "",
    },
    wordCount,
  };
}

/**
 * Adapts a StrapiCaseStudy entity into the Next.js CaseStudyDetail model.
 */
export function adaptStrapiCaseStudyToDetail(caseStudy: StrapiCaseStudy): CaseStudyDetail {
  const heroMedia = caseStudy.heroImage || caseStudy.thumbnail;
  const heroImage = {
    src: getStrapiMediaUrl(heroMedia) || "/assets/case-studies/placeholder.webp",
    width: heroMedia?.width || 1296,
    height: heroMedia?.height || 648,
    alt: getStrapiMediaAlt(heroMedia, caseStudy.title),
  };

  const narrativeSections = Array.isArray(caseStudy.sections)
    ? caseStudy.sections
    : [];

  return {
    slug: caseStudy.slug,
    clientName: caseStudy.client || caseStudy.title,
    title: caseStudy.title,
    summary: caseStudy.excerpt || "",
    industry: caseStudy.industry || "",
    technology: caseStudy.technology || "",
    location: caseStudy.location || "Global",
    archive: {
      title: caseStudy.title,
      technology: caseStudy.technology || "",
      industry: caseStudy.industry || "",
      excerpt: caseStudy.excerpt || "",
    },
    hero: {
      image: heroImage,
    },
    sections: narrativeSections,
    wireframes: null,
    colors: [],
    typefaces: [],
    design: null,
    seo: {
      title: caseStudy.seo?.metaTitle || caseStudy.title,
      description: caseStudy.seo?.metaDescription || caseStudy.excerpt || "",
      lastModified: caseStudy.updatedAt || "",
    },
  };
}

/**
 * Adapts a StrapiCaseStudy entity into the Next.js CaseStudyItem (listing card) model.
 */
export function adaptStrapiCaseStudyToItem(caseStudy: StrapiCaseStudy): CaseStudyItem {
  const thumbMedia = caseStudy.thumbnail || caseStudy.heroImage;
  return {
    slug: caseStudy.slug,
    title: caseStudy.title,
    technology: caseStudy.technology || "Shopify",
    industry: caseStudy.industry || "Ecommerce",
    excerpt: caseStudy.excerpt || "",
    image: getStrapiMediaUrl(thumbMedia) || "/assets/case-studies/placeholder.webp",
    alt: getStrapiMediaAlt(thumbMedia, caseStudy.title),
    href: `/case-studies/${caseStudy.slug}`,
    tags: caseStudy.tags || [],
  };
}

/**
 * Adapts a StrapiTestimonial entity into HappyClientTestimonialItem for the review carousel.
 */
export function adaptStrapiTestimonial(
  testimonial: StrapiTestimonial,
): HappyClientTestimonialItem {
  return {
    name: testimonial.authorName,
    company: testimonial.company || "",
    quote: testimonial.quote,
    videoId: testimonial.videoId || "",
    image: getStrapiMediaUrl(testimonial.avatar) || "/assets/testimonials/placeholder.webp",
    imageAlt: testimonial.imageAlt || testimonial.authorName,
    logo: getStrapiMediaUrl(testimonial.logo) || undefined,
    logoAlt:
      testimonial.logoAlt || (testimonial.company ? `${testimonial.company} logo` : undefined),
    logoWidth: testimonial.logo?.width,
    logoHeight: testimonial.logo?.height,
  };
}

/**
 * Adapts Strapi navigation groups into Next.js PrimaryNavigationGroup models.
 * Falls back to canonical local navigation definitions if Strapi data is missing.
 */
export function adaptStrapiNavToPrimary(
  strapiGroups?: StrapiNavGroupElement[] | null,
): PrimaryNavigationGroup[] {
  if (!strapiGroups || !Array.isArray(strapiGroups) || strapiGroups.length === 0) {
    return primaryNavigation;
  }

  return strapiGroups.map((group) => {
    const localMatch = primaryNavigation.find(
      (g) => g.slug === group.slug || g.label.toLowerCase() === group.label.toLowerCase(),
    );

    const columns: 1 | 2 | 3 =
      group.columns === 1 || group.columns === 2 || group.columns === 3
        ? group.columns
        : localMatch?.columns || 2;

    const items =
      group.items && group.items.length > 0
        ? group.items.map((item) => {
            const localItem = localMatch?.items.find(
              (li) => li.href === item.href || li.label.toLowerCase() === item.label.toLowerCase(),
            );
            const customIcon = getStrapiMediaUrl(item.icon);
            return {
              label: item.label,
              href: item.href,
              description: item.description || localItem?.description || "",
              badge: item.badge || localItem?.badge,
              ctaLabel: item.ctaLabel || localItem?.ctaLabel,
              icon: customIcon
                ? { src: customIcon, width: 20, height: 20 }
                : localItem?.icon || {
                    src: "/assets/navigation/header/shopify-development.svg",
                    width: 20,
                    height: 20,
                  },
            };
          })
        : localMatch?.items || [];

    const promo = group.promoTitle
      ? {
          title: group.promoTitle,
          details: group.promoDetails || "",
          ctaLabel: group.promoCtaLabel || "Discuss a project",
          ctaHref: group.promoCtaHref || "/contact-us",
        }
      : localMatch?.promo;

    return {
      label: group.label,
      slug: group.slug || localMatch?.slug || group.label.toLowerCase().replace(/\s+/g, "-"),
      columns,
      variant: group.variant === "work" ? "work" : localMatch?.variant || "default",
      items,
      promo,
    };
  });
}

/**
 * Adapts Strapi footer column elements into NavigationGroup models.
 * Falls back to canonical local footer navigation definitions if Strapi data is missing.
 */
export function adaptStrapiFooterColumns(
  columns?: StrapiFooterColumnElement[] | null,
): NavigationGroup[] {
  if (!columns || !Array.isArray(columns) || columns.length === 0) {
    return footerNavigation;
  }

  return columns.map((col, idx) => {
    const localMatch = footerNavigation[idx];
    return {
      label: col.title || localMatch?.label || `Column ${idx + 1}`,
      links:
        col.links && col.links.length > 0
          ? col.links.map((l) => ({
              label: l.label,
              href: l.href,
              description: l.description,
            }))
          : localMatch?.links || [],
    };
  });
}

// ==============================================================================
// High-Level Data Fetching Helpers
// ==============================================================================

/**
 * Fetches all published blog articles from Strapi.
 */
export async function getArticles(
  options: StrapiFetchOptions = {},
): Promise<BlogPostDetail[]> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiArticle[]>>("articles", {
      params: {
        populate: "deep",
        sort: "date:desc",
        ...options.params,
      },
      tags: ["blogs", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const articles = Array.isArray(res?.data) ? res.data : [];
    return articles.map(adaptStrapiArticleToBlogPost);
  } catch (err) {
    console.warn("Strapi getArticles warning, falling back to local content:", err);
    return [];
  }
}

/**
 * Fetches a single blog article by slug from Strapi.
 */
export async function getArticleBySlug(
  slug: string,
  options: StrapiFetchOptions = {},
): Promise<BlogPostDetail | null> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiArticle[]>>("articles", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "deep",
        ...options.params,
      },
      tags: [`blog-${slug}`, "blogs", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const article = res?.data?.[0];
    if (!article) return null;
    return adaptStrapiArticleToBlogPost(article);
  } catch (err) {
    console.warn(`Strapi getArticleBySlug(${slug}) warning:`, err);
    return null;
  }
}

/**
 * Fetches all case studies from Strapi.
 */
export async function getCaseStudies(
  options: StrapiFetchOptions = {},
): Promise<CaseStudyItem[]> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiCaseStudy[]>>("case-studies", {
      params: {
        populate: "deep",
        ...options.params,
      },
      tags: ["case-studies", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const items = Array.isArray(res?.data) ? res.data : [];
    return items.map(adaptStrapiCaseStudyToItem);
  } catch (err) {
    console.warn("Strapi getCaseStudies warning, falling back to local content:", err);
    return [];
  }
}

/**
 * Fetches a single case study by slug from Strapi.
 */
export async function getCaseStudyBySlug(
  slug: string,
  options: StrapiFetchOptions = {},
): Promise<CaseStudyDetail | null> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiCaseStudy[]>>("case-studies", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "deep",
        ...options.params,
      },
      tags: [`case-study-${slug}`, "case-studies", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const caseStudy = res?.data?.[0];
    if (!caseStudy) return null;
    return adaptStrapiCaseStudyToDetail(caseStudy);
  } catch (err) {
    console.warn(`Strapi getCaseStudyBySlug(${slug}) warning:`, err);
    return null;
  }
}

/**
 * Fetches client testimonials from Strapi.
 */
export async function getTestimonials(
  options: StrapiFetchOptions = {},
): Promise<HappyClientTestimonialItem[]> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiTestimonial[]>>("testimonials", {
      params: {
        populate: "deep",
        ...options.params,
      },
      tags: ["testimonials", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const items = Array.isArray(res?.data) ? res.data : [];
    return items.map(adaptStrapiTestimonial);
  } catch (err) {
    console.warn("Strapi getTestimonials warning, falling back to local content:", err);
    return [];
  }
}

/**
 * Fetches global settings (Header, Footer, Company info) from Strapi.
 */
export async function getGlobalSettings(
  options: StrapiFetchOptions = {},
): Promise<StrapiGlobal | null> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiGlobal>>("global", {
      params: {
        populate: "deep",
        ...options.params,
      },
      tags: ["global-settings", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const raw = res?.data as
      | StrapiGlobal
      | { id: number; attributes?: Record<string, unknown> }
      | undefined;
    if (!raw) return null;
    if ("attributes" in raw && raw.attributes) {
      return { ...raw.attributes, id: raw.id } as unknown as StrapiGlobal;
    }
    return raw as StrapiGlobal;
  } catch (err) {
    console.warn("Strapi getGlobalSettings warning, falling back to local config:", err);
    return null;
  }
}

/**
 * Fetches a modular page by slug from Strapi.
 */
export async function getPageBySlug(
  slug: string,
  options: StrapiFetchOptions = {},
): Promise<StrapiPage | null> {
  try {
    const res = await fetchFromStrapi<StrapiResponse<StrapiPage[]>>("pages", {
      params: {
        "filters[slug][$eq]": slug,
        populate: "deep",
        ...options.params,
      },
      tags: [`page-${slug}`, "pages", ...(options.tags || [])],
      revalidate: options.revalidate,
      preview: options.preview,
    });

    const first = res?.data?.[0] as
      | StrapiPage
      | { id: number; attributes?: Record<string, unknown> }
      | undefined;
    if (!first) return null;
    if ("attributes" in first && first.attributes) {
      return { ...first.attributes, id: first.id } as unknown as StrapiPage;
    }
    return first as StrapiPage;
  } catch (err) {
    console.warn(`Strapi getPageBySlug(${slug}) warning:`, err);
    return null;
  }
}
