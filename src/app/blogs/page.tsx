import { BlogsPage } from "@/components/sections/blogs-page";
import {
  BLOGS_PAGE_SIZE,
  BLOGS_TOTAL_PAGES,
  filterBlogArchiveArticles,
  getBlogArchivePage,
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
  const requestedPage = Number(firstValue(params.page));
  const currentPage = Number.isInteger(requestedPage) && requestedPage >= 1
    ? Math.min(requestedPage, BLOGS_TOTAL_PAGES)
    : 1;
  const filteredArticles = filterBlogArchiveArticles(query, activeCategory);
  const hasArchiveFilter = Boolean(query || activeCategory);
  const articles = hasArchiveFilter
    ? filteredArticles
    : getBlogArchivePage(currentPage);
  const itemOffset = hasArchiveFilter ? 0 : (currentPage - 1) * BLOGS_PAGE_SIZE;

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(createBlogsPageSchema(articles, { itemOffset })),
        }}
      />
      <BlogsPage articles={articles} query={query} activeCategory={activeCategory} currentPage={currentPage} />
    </main>
  );
}
