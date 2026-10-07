import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlockRenderer, type CmsSectionBlock } from "@/components/blocks/block-renderer";
import { draftPreviewCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { getPayloadPageBySlug } from "@/lib/payload";
import { createModularPageSchema, serializeJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

export const dynamicParams = true;

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

  if (!rawPage) {
    return {};
  }

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

export default async function DynamicPageRoute({ params }: DynamicPageRouteProps) {
  const { slug } = await params;
  const pageSlug = slug && slug.length > 0 ? slug.join("/") : "home";
  const draft = await draftMode();
  const rawPage = await getPayloadPageBySlug(pageSlug, { preview: draft.isEnabled });

  if (!rawPage) {
    notFound();
  }

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
            }),
          ),
        }}
      />
      {draft.isEnabled ? (
        <aside
          aria-label="Draft mode indicator"
          className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white shadow-xl"
        >
          <span>{draftPreviewCopy.badge}</span>
          <span aria-hidden="true">{draftPreviewCopy.separator}</span>
          <Link
            className="underline transition-opacity hover:opacity-80 focus-visible:opacity-80"
            href="/api/exit-preview"
            prefetch={false}
          >
            {draftPreviewCopy.exit}
          </Link>
        </aside>
      ) : null}
      <BlockRenderer sections={page.sections} />
    </main>
  );
}
