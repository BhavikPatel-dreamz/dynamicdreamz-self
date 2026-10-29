import Link from "next/link";

import { BlogCard } from "./RelatedBlogPostsGrid";
import { Container } from "@/components/ui/container";
import type {
  BlogArchiveArticle,
  BlogArchiveCategory,
  BlogArchiveCategoryValue,
  BlogArchivePaginationItem,
} from "@/content/blogs";
import { blogsPageContent, getBlogArchivePagination } from "@/content/blogs";
import { cn } from "@/lib/class-names";

type BlogsArchiveSectionProps = {
  articles: readonly BlogArchiveArticle[];
  search: {
    action: string;
    label: string;
    placeholder: string;
    submitLabel: string;
    noResults: string;
  };
  query: string;
  allCategoryLabel: string;
  categories: readonly BlogArchiveCategory[];
  categoriesLabel: string;
  activeCategory?: BlogArchiveCategory["value"];
  pagination: readonly BlogArchivePaginationItem[];
  paginationLabel: string;
  showPagination: boolean;
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 57 56" fill="none">
      <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="32" y1="32" x2="42" y2="42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 8.8 3.6 5.2 0 1.6 1.2.4 6 5.2 1.2 10 0 8.8Z" fill="currentColor" />
    </svg>
  );
}

function PreviousIcon() {
  return (
    <svg aria-hidden="true" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 8.8 2.4 5.2 6 1.6 4.8.4 0 5.2 4.8 10 6 8.8Z" fill="currentColor" />
    </svg>
  );
}

export function BlogsArchiveSection({
  articles,
  search,
  query,
  allCategoryLabel,
  categories,
  categoriesLabel,
  activeCategory,
  pagination,
  paginationLabel,
  showPagination,
}: BlogsArchiveSectionProps) {
  return (
    <section
      className="blog-sec blog-listing-sec overflow-hidden py-15 max-[991px]:py-10"
      aria-label={categoriesLabel}
      data-blogs-listing
    >
      <Container>
        <div className="blog-filter-main mb-10 max-[991px]:mb-7">
          <div className="search-form">
            <form
              action={search.action}
              method="get"
              role="search"
              className="custom-blog-search flex flex-wrap items-center justify-between gap-5 max-[991px]:flex-col-reverse max-[991px]:items-stretch"
            >
              <div className="blog-filter-list">
                <nav
                  className="blog-category-filter flex flex-wrap items-center gap-2.5 max-[767px]:gap-2"
                  aria-label={categoriesLabel}
                >
                  <Link
                    href={query ? `/blogs?s=${encodeURIComponent(query)}` : "/blogs"}
                    className={cn(
                      "cat-link inline-block rounded-[30px] border border-[#dadada] px-[18px] py-2 text-center font-sans text-sm font-medium text-[#090909] transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red max-[767px]:px-3.5 max-[767px]:py-1.5 max-[767px]:text-xs",
                      !activeCategory && "border-brand-red bg-brand-red text-white",
                    )}
                    aria-current={!activeCategory ? "page" : undefined}
                  >
                    {allCategoryLabel}
                  </Link>

                  {categories.map((category) => {
                    const isActive = category.value === activeCategory;
                    const catHref = query
                      ? `${category.href}&s=${encodeURIComponent(query)}`
                      : category.href;

                    return (
                      <Link
                        key={category.value}
                        href={catHref}
                        className={cn(
                          "cat-link inline-block rounded-[30px] border border-[#dadada] px-[18px] py-2 text-center font-sans text-sm font-medium text-[#090909] transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red max-[767px]:px-3.5 max-[767px]:py-1.5 max-[767px]:text-xs",
                          isActive && "border-brand-red bg-brand-red text-white",
                        )}
                        aria-current={isActive ? "page" : undefined}
                        data-blogs-category
                      >
                        {category.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="search-input-wrap relative w-[320px] max-w-full max-[991px]:w-full" data-blogs-search-wrap>
                <label className="sr-only" htmlFor="blogs-search">
                  {search.label}
                </label>
                <input
                  id="blogs-search"
                  className="search-field h-[46px] w-full rounded-lg border border-[#dadada] bg-white py-2.5 pr-[50px] pl-4 text-sm font-medium text-[#202020] placeholder:text-[#999] focus:border-brand-red focus:outline-none"
                  type="search"
                  name="s"
                  defaultValue={query}
                  placeholder={search.placeholder}
                  data-blogs-search
                />
                {activeCategory ? (
                  <input type="hidden" name="category" value={activeCategory} />
                ) : null}
                <button
                  className="search-btn absolute top-1/2 right-1.5 flex size-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border-0 bg-brand-red text-white transition-colors duration-300 hover:bg-brand-red-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                  type="submit"
                  aria-label={search.submitLabel}
                  title={search.submitLabel}
                  data-blogs-search-button
                >
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="blog-wrapper -mx-3.5 flex flex-wrap gap-y-8 max-[767px]:mx-0 max-[767px]:gap-y-6" data-blogs-grid>
            {articles.map((article) => {
              const isFaq = !article.image || article.category === "Faqs";
              return (
                <div
                  className={cn(
                    "blog-col px-3.5 max-[767px]:px-0",
                    isFaq ? "w-full" : "w-1/3 max-[991px]:w-1/2 max-[767px]:w-full",
                  )}
                  data-blogs-card
                  key={article.href}
                >
                  <BlogCard item={article} variant="archive" />
                </div>
              );
            })}

            {showPagination ? (
              <nav
                className="mt-10 h-6 w-full text-center leading-6"
                aria-label={paginationLabel}
                data-blogs-pagination
              >
                {pagination.map((item, index) => {
                  if (item.current) {
                    return (
                      <span
                        className="rounded-md bg-[#ad5151hire-shopify-] px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-white"
                        aria-current="page"
                        key={item.label + "-" + index}
                      >
                        {item.label}
                      </span>
                    );
                  }

                  if (!item.href) {
                    return (
                      <span
                        className="px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-muted"
                        aria-hidden="true"
                        key={item.label + "-" + index}
                      >
                        {item.label}
                      </span>
                    );
                  }

                  return (
                    <Link
                      className="px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-muted transition-colors hover:text-brand-red focus-visible:text-brand-red [&_svg]:inline-block"
                      href={item.href}
                      aria-label={item.next || item.previous ? item.label : undefined}
                      key={item.label + "-" + item.href}
                    >
                      {item.next ? <NextIcon /> : item.previous ? <PreviousIcon /> : item.label}
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </div>
        ) : (
          <p className="mt-20 text-center text-xl font-medium leading-6 text-ink max-[767px]:text-lg">
            {search.noResults}
          </p>
        )}
      </Container>
    </section>
  );
}

export type BlogsPageProps = {
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
      <div className="inner-hero-sec relative overflow-hidden bg-[#fbeed5] pt-40 pb-[85px] max-[991px]:pt-[140px] max-[991px]:pb-[46px]">
        <Container>
          <div className="inner-hero-content text-center">
            <h1
              id="blogs-page-title"
              className="font-montreal-medium text-[50px] font-normal leading-[60px] text-[#282828] max-[1199px]:text-[40px] max-[1199px]:leading-[50px] max-[767px]:text-[28px] max-[767px]:leading-[38px]"
            >
              {blogsPageContent.heroTitle}
            </h1>
          </div>
        </Container>
      </div>

      <BlogsArchiveSection
        articles={articles}
        search={blogsPageContent.search}
        query={query}
        allCategoryLabel={blogsPageContent.allCategoryLabel}
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
