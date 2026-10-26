import type { Metadata } from "next";
import { BlogsPage } from "@/components/blog/BlogHubFeed";
import {
  BLOGS_PAGE_SIZE,
  blogsMetadataCopy,
  filterBlogArchiveArticles,
  normalizeBlogArchiveCategory,
} from "@/content/blogs";
import { pageMetadata } from "@/data/seo";
import {
  adaptPayloadPostToArchive,
  filterPayloadArchivePosts,
  getPayloadPosts,
} from "@/lib/payload";
import { createBlogsPageSchema, serializeJsonLd } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

type BlogsRouteProps = {
  searchParams: Promise<{
    s?: string | string[];
    category?: string | string[];
    page?: string | string[];
  }>;
};

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export async function generateMetadata({ searchParams }: BlogsRouteProps): Promise<Metadata> {
  const params = await searchParams;
  const page = Number(firstValue(params.page));
  const category = firstValue(params.category).trim();
  const search = firstValue(params.s).trim();
  const base = pageMetadata.blogs;

  const validPage = Number.isInteger(page) && page > 1 ? page : 1;

  let title = base.title;
  if (category) {
    const formattedCat = category.charAt(0).toUpperCase() + category.slice(1);
    title = `${formattedCat}${blogsMetadataCopy.categorySuffix}`;
  } else if (validPage > 1) {
    title = `${blogsMetadataCopy.pagePrefix}${validPage}${blogsMetadataCopy.titleSuffix}`;
  }

  const queryParams = new URLSearchParams();
  if (category) {
    queryParams.set("category", category);
  }
  if (validPage > 1) {
    queryParams.set("page", String(validPage));
  }
  const queryString = queryParams.toString();
  const canonicalPath = queryString ? `/blogs?${queryString}` : "/blogs";

  return {
    ...base,
    title,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
    },
    robots: search
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}


export default async function BlogsRoute({ searchParams }: BlogsRouteProps) {
  const params = await searchParams;
  const query = firstValue(params.s).trim();
  const requestedCategory = firstValue(params.category).toLowerCase();
  const activeCategory = normalizeBlogArchiveCategory(requestedCategory);

  const payloadPosts = await getPayloadPosts();
  const filteredArticles =
    payloadPosts && payloadPosts.length > 0
      ? filterPayloadArchivePosts(
          payloadPosts.map(adaptPayloadPostToArchive),
          query,
          activeCategory,
        )
      : filterBlogArchiveArticles(query, activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / BLOGS_PAGE_SIZE));
  const requestedPage = Number(firstValue(params.page));
  const currentPage = Number.isInteger(requestedPage) && requestedPage >= 1
    ? Math.min(requestedPage, totalPages)
    : 1;
  const start = (currentPage - 1) * BLOGS_PAGE_SIZE;
  const articles = filteredArticles.slice(start, start + BLOGS_PAGE_SIZE);
  const itemOffset = start;

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBlogsPageSchema(articles, { itemOffset })),
        }}
      />
      <BlogsPage
        articles={articles}
        query={query}
        activeCategory={activeCategory}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </main>
  );
}
