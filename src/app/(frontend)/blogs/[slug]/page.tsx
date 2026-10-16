import type { Metadata } from "next";
import { draftMode } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogDetailPage } from "@/components/sections/blog-details/blog-detail-page";
import { blogPostIndex, getBlogPostBySlug, getRelatedBlogPosts } from "@/content/blog-post-details";
import { draftPreviewCopy } from "@/content/common";
import { createPageMetadata, type PageSeoConfig } from "@/data/seo";
import {
  adaptPayloadPostToBlogPostDetail,
  getPayloadPostBySlug,
} from "@/lib/payload";
import { createBlogPostDetailPageSchema, serializeJsonLd } from "@/lib/schema";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return blogPostIndex.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const draft = await draftMode();
  const rawPayloadPost = await getPayloadPostBySlug(slug, { preview: draft.isEnabled });
  const fallbackPost = await getBlogPostBySlug(slug);

  const post = rawPayloadPost
    ? adaptPayloadPostToBlogPostDetail(rawPayloadPost, fallbackPost)
    : fallbackPost;

  if (!post) return {};

  const page: PageSeoConfig = {
    path: `/blogs/${post.slug}`,
    title: post.seo.title,
    description: post.seo.description,
    keywords: [
      `${post.category} blog`,
      `${post.title} guide`,
      "Dynamic Dreamz blog",
    ],
    openGraphType: "article",
    publishedTime: `${post.date}T00:00:00+00:00`,
    modifiedTime: post.modified,
    image: post.featuredImage
      ? {
          path: post.featuredImage.src,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        }
      : {
          path: "/assets/og/homepage.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
    sitemap: {
      changeFrequency: "monthly",
      priority: 0.6,
    },
  };

  return createPageMetadata(page);
}

export default async function BlogRoute({ params }: BlogRouteProps) {
  const { slug } = await params;
  const draft = await draftMode();
  const rawPayloadPost = await getPayloadPostBySlug(slug, { preview: draft.isEnabled });
  const fallbackPost = await getBlogPostBySlug(slug);

  const post = rawPayloadPost
    ? adaptPayloadPostToBlogPostDetail(rawPayloadPost, fallbackPost)
    : fallbackPost;

  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post);

  return (
    <main id="main-content" data-page="blog-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBlogPostDetailPageSchema(post)),
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
      <BlogDetailPage post={post} relatedPosts={relatedPosts} />
    </main>
  );
}
