import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { RenderBlocks, type CmsSectionBlock } from "@/components/RenderBlocks";
import { DraftModeIndicator, RefreshRouteOnSave } from "@/components/preview";
import { draftPreviewCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { getPayloadPageBySlug, getPayloadAdaptedTestimonials } from "@/lib/payload";
import { createModularPageSchema, serializeJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { getAllServicePageSlugs, getServicePageEntry } from "@/lib/service-pages-registry";

export const dynamicParams = true;

function normalizePagePath(
  rawPath: string | undefined,
  pageSlug: string,
): string {
  const fallback =
    pageSlug === "home" || pageSlug === "index"
      ? "/"
      : `/${pageSlug.replace(/^\/+|\/+$/g, "")}/`;
  if (!rawPath) return fallback;
  let cleaned = rawPath.trim();
  if (!cleaned) return fallback;
  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    try {
      cleaned = new URL(cleaned).pathname || "/";
    } catch {
      cleaned = cleaned.replace(/^https?:\/\/[^/]+/i, "") || "/";
    }
  }
  const normalized = cleaned.replace(/^\/+|\/+$/g, "");
  return normalized ? `/${normalized}/` : "/";
}

export async function generateStaticParams() {
  const allSlugs = getAllServicePageSlugs();
  return [
    { slug: [] },
    ...allSlugs
      .filter((slug) => slug !== "home")
      .map((slug) => ({
        slug: slug.split("/"),
      })),
  ];
}

interface DynamicPageRouteProps {
  params: Promise<{ slug?: string[] }>;
}

interface PageData {
  title?: string;
  sections?: readonly CmsSectionBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    metaImage?: string | { url?: string };
    preventIndexing?: boolean;
  };
}

export async function generateMetadata({
  params,
}: DynamicPageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = slug && slug.length > 0 ? slug.join("/") : "home";
  const draft = await draftMode();
  const rawPage = await getPayloadPageBySlug(pageSlug, { preview: draft.isEnabled });
  const serviceEntry = getServicePageEntry(pageSlug);

  if (rawPage) {
    const page = rawPage as unknown as PageData;
    const title = page.seo?.metaTitle || `${page.title || "Page"} | Dynamic Dreamz`;
    const description =
      page.seo?.metaDescription ||
      `${page.title || "Page"} - Professional web and ecommerce solutions by Dynamic Dreamz.`;
    const canonicalPath = normalizePagePath(page.seo?.canonicalUrl, pageSlug);
    const canonical = absoluteUrl(canonicalPath);
    const metaImageUrl =
      typeof page.seo?.metaImage === "string"
        ? page.seo.metaImage
        : page.seo?.metaImage?.url;

    return {
      title: { absolute: title },
      description,
      alternates: {
        canonical,
      },
      robots: page.seo?.preventIndexing
        ? { index: false, follow: false }
        : { index: true, follow: true },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: siteConfig.name,
        type: "website",
        images: metaImageUrl
          ? [
              {
                url: metaImageUrl,
                alt: title,
              },
            ]
          : undefined,
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: metaImageUrl ? [metaImageUrl] : undefined,
      },
    };
  }

  if (serviceEntry) {
    return serviceEntry.metadata;
  }

  return {};
}

export default async function DynamicPageRoute({ params }: DynamicPageRouteProps) {
  const { slug } = await params;
  const pageSlug = slug && slug.length > 0 ? slug.join("/") : "home";
  const draft = await draftMode();
  const rawPage = await getPayloadPageBySlug(pageSlug, { preview: draft.isEnabled });
  const serviceEntry = getServicePageEntry(pageSlug);

  if (!rawPage && !serviceEntry) {
    notFound();
  }

  const page = rawPage as unknown as PageData | null;
  const pageSections = (page?.sections as readonly CmsSectionBlock[] | undefined) || [];

  // If the page is populated in Payload CMS with modular sections, render from CMS:
  if (pageSections.length > 0) {
    const hasTestimonials = pageSections.some(
      (s) => s.blockType === "testimonials-carousel",
    );
    const testimonials = hasTestimonials
      ? await getPayloadAdaptedTestimonials()
      : undefined;

    const title = page?.seo?.metaTitle || `${page?.title || "Page"} | Dynamic Dreamz`;
    const description =
      page?.seo?.metaDescription ||
      `${page?.title || "Page"} - Professional web and ecommerce solutions by Dynamic Dreamz.`;
    const canonicalPath = normalizePagePath(page?.seo?.canonicalUrl, pageSlug);
    const metaImageUrl =
      typeof page?.seo?.metaImage === "string"
        ? page.seo.metaImage
        : page?.seo?.metaImage?.url;
    const baseSchema = serviceEntry ? serviceEntry.getSchema() : undefined;

    return (
      <main id="main-content" data-page={pageSlug}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(
              createModularPageSchema({
                title,
                description,
                path: canonicalPath,
                metaImageUrl,
                sections: pageSections,
                baseSchema,
              }),
            ),
          }}
        />
        {draft.isEnabled ? (
          <>
            <RefreshRouteOnSave />
            <DraftModeIndicator
              badge={draftPreviewCopy.badge}
              exitLabel={draftPreviewCopy.exit}
              separator={draftPreviewCopy.separator}
            />
          </>
        ) : null}
        <RenderBlocks sections={pageSections} testimonials={testimonials} />
      </main>
    );
  }

  // Otherwise, fall back to the complete verified local migrated page:
  if (serviceEntry) {
    const schema = serviceEntry.getSchema();
    return (
      <main id="main-content" data-page={pageSlug}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(schema),
          }}
        />
        {draft.isEnabled ? (
          <>
            <RefreshRouteOnSave />
            <DraftModeIndicator
              badge={draftPreviewCopy.badge}
              exitLabel={draftPreviewCopy.exit}
              separator={draftPreviewCopy.separator}
            />
          </>
        ) : null}
        {serviceEntry.render()}
      </main>
    );
  }

  notFound();
}
