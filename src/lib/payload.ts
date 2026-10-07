import { getPayload } from "payload";
import config from "@payload-config";
import {
  primaryNavigation,
  footerNavigation,
  type PrimaryNavigationGroup,
  type NavigationGroup,
} from "@/data/navigation";
import type { FooterLinkItem } from "@/components/layout/site-footer";
import type { Navigation } from "@/types/payload-types";

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

export async function getPayloadArticles(limit = 100) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "articles",
      limit,
      sort: "-date",
    });
    return res.docs;
  } catch (err) {
    console.warn("Payload getPayloadArticles warning:", err);
    return [];
  }
}

export async function getPayloadArticleBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "articles",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    return res.docs[0] || null;
  } catch (err) {
    console.warn(`Payload getPayloadArticleBySlug(${slug}) warning:`, err);
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

export async function getPayloadCaseStudyBySlug(slug: string) {
  try {
    const payload = await getPayload({ config });
    const res = await payload.find({
      collection: "case-studies",
      where: { slug: { equals: slug } },
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
    const collections = payload.collections as Record<string, unknown>;
    if ("pages" in collections) {
      const result = await (payload as unknown as {
        find: (args: Record<string, unknown>) => Promise<{ docs: unknown[] }>;
      }).find({
        collection: "pages",
        where: { slug: { equals: slug } },
        draft: options?.preview,
        limit: 1,
      });
      return (result.docs[0] as Record<string, unknown>) || null;
    }
    return null;
  } catch (err) {
    console.warn(`Payload getPayloadPageBySlug(${slug}) warning:`, err);
    return null;
  }
}
