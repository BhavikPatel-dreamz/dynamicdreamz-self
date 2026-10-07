import { BlogsPage } from "@/components/sections/blogs-page";
import {
  BLOGS_PAGE_SIZE,
  filterBlogArchiveArticles,
  normalizeBlogArchiveCategory,
} from "@/content/blogs";
import { pageMetadata } from "@/data/seo";
import { createBlogsPageSchema, serializeJsonLd } from "@/lib/schema";

export const metadata = pageMetadata.blogs;

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

export default async function BlogsRoute({ searchParams }: BlogsRouteProps) {
  const params = await searchParams;
  const query = firstValue(params.s).trim();
  const requestedCategory = firstValue(params.category).toLowerCase();
  const activeCategory = normalizeBlogArchiveCategory(requestedCategory);
  const filteredArticles = filterBlogArchiveArticles(query, activeCategory);
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
