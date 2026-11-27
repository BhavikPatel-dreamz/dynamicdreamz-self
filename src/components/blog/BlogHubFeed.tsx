import { BlogsArchiveSection } from "./BlogsArchiveClient";
import { Container } from "@/components/ui/container";
import {
  blogsPageContent,
  type BlogArchiveArticle,
  type BlogArchiveCategoryValue,
} from "@/content/blogs";

export type BlogsPageProps = {
  allArticles: readonly BlogArchiveArticle[];
  query: string;
  activeCategory?: BlogArchiveCategoryValue;
  currentPage?: number;
};

export function BlogsPage({
  allArticles,
  query,
  activeCategory,
  currentPage = 1,
}: BlogsPageProps) {
  return (
    <div className="font-sans">
      <div className="inner-hero-sec relative overflow-hidden bg-[#fbeed5] pt-40 pb-[85px] max-[992px]:pt-[140px] max-[992px]:pb-[46px]">
        <Container>
          <div className="inner-hero-content text-center">
            <h1
              id="blogs-page-title"
              className="font-montreal-medium text-[50px] max-w-[770px] mx-auto font-normal leading-[60px] text-[#282828] max-[992px]:text-[30px] max-[768px]:leading-[40px]"
            >
              {blogsPageContent.heroTitle}
            </h1>
          </div>
        </Container>
      </div>

      <BlogsArchiveSection
        key={`${query}|${activeCategory ?? ""}|${currentPage}`}
        allArticles={allArticles}
        search={blogsPageContent.search}
        initialQuery={query}
        allCategoryLabel={blogsPageContent.allCategoryLabel}
        categories={blogsPageContent.categories}
        categoriesLabel={blogsPageContent.categoriesLabel}
        initialCategory={activeCategory}
        initialPage={currentPage}
        paginationLabel={blogsPageContent.paginationLabel}
      />
    </div>
  );
}
