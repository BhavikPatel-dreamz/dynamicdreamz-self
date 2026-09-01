import Link from "next/link";

import { BlogCard } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import type {
  BlogArchiveArticle,
  BlogArchiveCategory,
  BlogArchivePaginationItem,
} from "@/content/blogs";
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
  categories: readonly BlogArchiveCategory[];
  categoriesLabel: string;
  activeCategory?: BlogArchiveCategory["value"];
  pagination: readonly BlogArchivePaginationItem[];
  paginationLabel: string;
  showPagination: boolean;
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-10" viewBox="0 0 57 56" fill="none">
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
  categories,
  categoriesLabel,
  activeCategory,
  pagination,
  paginationLabel,
  showPagination,
}: BlogsArchiveSectionProps) {
  return (
    <section
      className="overflow-hidden py-[60px] max-[991px]:py-[50px]"
      aria-label={categoriesLabel}
      data-blogs-listing
    >
      <Container>
        <form action={search.action} method="get" role="search">
          <div className="relative mx-auto mb-[30px] max-w-[500px]" data-blogs-search-wrap>
            <label className="sr-only" htmlFor="blogs-search">{search.label}</label>
            <input
              id="blogs-search"
              className="h-[53px] w-full rounded-lg border border-[#dadada] bg-white py-[14px] pr-[105px] pl-[25px] text-base leading-[23px] font-medium text-[#202020] placeholder:text-[#999] focus:border-brand-red"
              type="search"
              name="s"
              defaultValue={query}
              placeholder={search.placeholder}
              data-blogs-search
            />
            {activeCategory ? <input type="hidden" name="category" value={activeCategory} /> : null}
            <button
              className="absolute top-1/2 right-[5px] flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md border-0 bg-brand-red p-0 text-white transition-colors duration-300 hover:bg-brand-red-dark focus-visible:bg-brand-red-dark"
              type="submit"
              aria-label={search.submitLabel}
              title={search.submitLabel}
              data-blogs-search-button
            >
              <SearchIcon />
            </button>
          </div>

          <div className="border-t border-[#dadada] pt-[30px] pb-[10px]" data-blogs-filters>
            <nav className="flex flex-wrap items-center justify-center" aria-label={categoriesLabel}>
              {categories.map((category, index) => {
                const isActive = category.value === activeCategory;
                return (
                  <Link
                    className={cn(
                      "mb-5 inline-block text-base leading-[normal] font-medium text-[#090909] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red",
                      index < categories.length - 1 && "mr-[30px]",
                      isActive && "text-brand-red",
                    )}
                    href={category.href}
                    aria-current={isActive ? "page" : undefined}
                    data-blogs-category
                    key={category.value}
                  >
                    {category.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </form>

        {articles.length > 0 ? (
          <div className="-mx-2 flex flex-wrap gap-y-6" data-blogs-grid>
            {articles.map((article) => (
              <div className="w-1/3 px-2 max-[991px]:w-1/2 max-[767px]:w-full" data-blogs-card key={article.href}>
                <BlogCard item={article} variant="archive" />
              </div>
            ))}

            {showPagination ? (
              <nav className="mt-[42px] h-6 w-full text-center leading-6" aria-label={paginationLabel} data-blogs-pagination>
                {pagination.map((item, index) => {
                  if (item.current) {
                    return (
                      <span
                        className="rounded-md bg-[#090909] px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-white"
                        aria-current="page"
                        key={item.label + "-" + index}
                      >
                        {item.label}
                      </span>
                    );
                  }

                  if (!item.href) {
                    return (
                      <span className="px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-muted" aria-hidden="true" key={item.label + "-" + index}>
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
          <p className="mt-[85px] text-center text-xl leading-6 font-medium text-ink max-[767px]:text-lg">
            {search.noResults}
          </p>
        )}
      </Container>
    </section>
  );
}
