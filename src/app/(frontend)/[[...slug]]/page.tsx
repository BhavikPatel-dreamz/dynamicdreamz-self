import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { RenderBlocks, type CmsSectionBlock } from "@/components/RenderBlocks";
import { DraftModeIndicator, RefreshRouteOnSave } from "@/components/preview";
import { draftPreviewCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { getPayloadPageBySlug } from "@/lib/payload";
import { createModularPageSchema, serializeJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";
import { getAllServicePageSlugs, getServicePageEntry } from "@/lib/service-pages-registry";

export const dynamicParams = true;

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
    const canonicalPath = page.seo?.canonicalUrl
      ? page.seo.canonicalUrl.replace(/\/+$/, "") || "/"
      : pageSlug === "home"
        ? "/"
        : `/${pageSlug.replace(/^\/+|\/+$/g, "")}`;
    const canonical = absoluteUrl(canonicalPath);
    const metaImageUrl =
      typeof page.seo?.metaImage === "string"
        ? page.seo.metaImage
        : page.seo?.metaImage?.url;

    return {
      title,
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
    const title = page?.seo?.metaTitle || `${page?.title || "Page"} | Dynamic Dreamz`;
    const description =
      page?.seo?.metaDescription ||
      `${page?.title || "Page"} - Professional web and ecommerce solutions by Dynamic Dreamz.`;
    const canonicalPath = page?.seo?.canonicalUrl
      ? page?.seo.canonicalUrl.replace(/\/+$/, "") || "/"
      : pageSlug === "home"
        ? "/"
        : `/${pageSlug.replace(/^\/+|\/+$/g, "")}`;

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
                sections: pageSections,
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
        <RenderBlocks sections={pageSections} />
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
