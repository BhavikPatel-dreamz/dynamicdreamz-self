import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlockRenderer } from "@/components/blocks/block-renderer";
import { draftPreviewCopy } from "@/content/common";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import { getPageBySlug, getStrapiMediaUrl } from "@/lib/strapi";

interface DynamicPageRouteProps {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({
  params,
}: DynamicPageRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const pageSlug = slug && slug.length > 0 ? slug.join("/") : "home";
  const draft = await draftMode();
  const page = await getPageBySlug(pageSlug, { preview: draft.isEnabled });

  if (!page) {
    return {};
  }

  const title = page.seo?.metaTitle || `${page.title} | Dynamic Dreamz`;
  const description =
    page.seo?.metaDescription ||
    `${page.title} - Professional web and ecommerce solutions by Dynamic Dreamz.`;
  const canonicalPath = page.seo?.canonicalUrl || (pageSlug === "home" ? "/" : `/${pageSlug}`);
  const canonical = absoluteUrl(canonicalPath);
  const metaImage = page.seo?.metaImage ? getStrapiMediaUrl(page.seo.metaImage) : undefined;

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
      images: metaImage
        ? [
            {
              url: metaImage,
              alt: title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: metaImage ? [metaImage] : undefined,
    },
  };
}

export default async function DynamicPageRoute({ params }: DynamicPageRouteProps) {
  const { slug } = await params;
  const pageSlug = slug && slug.length > 0 ? slug.join("/") : "home";
  const draft = await draftMode();
  const page = await getPageBySlug(pageSlug, { preview: draft.isEnabled });

  if (!page) {
    notFound();
  }

  return (
    <main id="main-content" data-page={pageSlug}>
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
