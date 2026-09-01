import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogDetailPage } from "@/components/sections/blog-details/blog-detail-page";
import { blogPostIndex, getBlogPostBySlug } from "@/content/blog-post-details";
import { createPageMetadata, type PageSeoConfig } from "@/data/seo";
import { createBlogPostDetailPageSchema, serializeJsonLd } from "@/lib/schema";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPostIndex.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
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
    image: {
      path: post.featuredImage.src,
      width: post.featuredImage.width,
      height: post.featuredImage.height,
      alt: post.featuredImage.alt,
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
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main id="main-content" data-page="blog-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBlogPostDetailPageSchema(post)),
        }}
      />
      <BlogDetailPage post={post} />
    </main>
  );
}
