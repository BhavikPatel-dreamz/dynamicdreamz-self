import { BlogsArchiveSection } from "@/components/sections/blogs/blogs-archive-section";
import { InnerHeroSection } from "@/components/sections/inner-hero-section";
import {
  blogsPageContent,
  getBlogArchivePagination,
  type BlogArchiveArticle,
  type BlogArchiveCategoryValue,
} from "@/content/blogs";

type BlogsPageProps = {
  articles: readonly BlogArchiveArticle[];
  query: string;
  activeCategory?: BlogArchiveCategoryValue;
  currentPage?: number;
  totalPages?: number;
};

export function BlogsPage({
  articles,
  query,
  activeCategory,
  currentPage = 1,
  totalPages = 1,
}: BlogsPageProps) {
  const pagination = getBlogArchivePagination(currentPage, totalPages, {
    category: activeCategory,
    query,
  });

  return (
    <div className="font-sans">
      <InnerHeroSection title={blogsPageContent.heroTitle} headingId="blogs-page-title" />
      <BlogsArchiveSection
        articles={articles}
        search={blogsPageContent.search}
        query={query}
        categories={blogsPageContent.categories}
        categoriesLabel={blogsPageContent.categoriesLabel}
        activeCategory={activeCategory}
        pagination={pagination}
        paginationLabel={blogsPageContent.paginationLabel}
        showPagination={totalPages > 1}
      />
    </div>
  );
}
