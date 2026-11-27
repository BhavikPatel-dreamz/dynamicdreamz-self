"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { BlogCard } from "./RelatedBlogPostsGrid";
import { Container } from "@/components/ui/container";
import {
  BLOGS_PAGE_SIZE,
  buildBlogArchiveHref,
  filterBlogArchiveArticlesList,
  getBlogArchivePagination,
  normalizeBlogArchiveCategory,
  type BlogArchiveArticle,
  type BlogArchiveCategory,
  type BlogArchiveCategoryValue,
} from "@/content/blogs";
import { cn } from "@/lib/class-names";

export type BlogsArchiveSectionProps = {
  allArticles: readonly BlogArchiveArticle[];
  search: {
    action: string;
    label: string;
    placeholder: string;
    submitLabel: string;
    noResults: string;
  };
  initialQuery: string;
  allCategoryLabel: string;
  categories: readonly BlogArchiveCategory[];
  categoriesLabel: string;
  initialCategory?: BlogArchiveCategoryValue;
  initialPage?: number;
  paginationLabel: string;
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-7" viewBox="0 0 57 56" fill="none">
      <circle
        cx="25"
        cy="25"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="32"
        y1="32"
        x2="42"
        y2="42"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.8 3.6 5.2 0 1.6 1.2.4 6 5.2 1.2 10 0 8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PreviousIcon() {
  return (
    <svg aria-hidden="true" width="6" height="10" viewBox="0 0 6 10" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8.8 2.4 5.2 6 1.6 4.8.4 0 5.2 4.8 10 6 8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function isPlainLeftClick(event: React.MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

function parsePageFromHref(href: string): number {
  try {
    const url = new URL(href, "https://example.com");
    const parsed = Number(url.searchParams.get("page"));
    return Number.isInteger(parsed) && parsed >= 1 ? parsed : 1;
  } catch {
    return 1;
  }
}

function parseCategoryFromHref(href: string): BlogArchiveCategoryValue | undefined {
  try {
    const url = new URL(href, "https://example.com");
    const raw = (url.searchParams.get("category") ?? "").toLowerCase();
    return normalizeBlogArchiveCategory(raw);
  } catch {
    return undefined;
  }
}

export function BlogsArchiveSection({
  allArticles,
  search,
  initialQuery,
  allCategoryLabel,
  categories,
  categoriesLabel,
  initialCategory,
  initialPage = 1,
  paginationLabel,
}: BlogsArchiveSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<
    BlogArchiveCategoryValue | undefined
  >(initialCategory);
  const [requestedPage, setRequestedPage] = useState(initialPage);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const nextQuery = (params.get("s") ?? "").trim();
      const nextCategory = normalizeBlogArchiveCategory(
        (params.get("category") ?? "").toLowerCase(),
      );
      const parsedPage = Number(params.get("page"));
      const nextPage =
        Number.isInteger(parsedPage) && parsedPage >= 1 ? parsedPage : 1;
      setQuery(nextQuery);
      setInputValue(nextQuery);
      setActiveCategory(nextCategory);
      setRequestedPage(nextPage);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const filteredArticles = useMemo(
    () => filterBlogArchiveArticlesList(allArticles, query, activeCategory),
    [allArticles, query, activeCategory],
  );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / BLOGS_PAGE_SIZE),
  );
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const start = (currentPage - 1) * BLOGS_PAGE_SIZE;
  const articles = filteredArticles.slice(start, start + BLOGS_PAGE_SIZE);
  const showPagination = totalPages > 1;
  const pagination = useMemo(
    () =>
      getBlogArchivePagination(currentPage, totalPages, {
        category: activeCategory,
        query,
      }),
    [currentPage, totalPages, activeCategory, query],
  );

  const applyFilters = (
    next: {
      nextQuery?: string;
      nextCategory?: BlogArchiveCategoryValue;
      nextPage?: number;
    },
    options?: { scrollToSection?: boolean },
  ) => {
    const resolvedQuery = (next.nextQuery ?? query).trim();
    const resolvedCategory =
      "nextCategory" in next ? next.nextCategory : activeCategory;
    const resolvedPage = next.nextPage ?? 1;

    setQuery(resolvedQuery);
    setInputValue(resolvedQuery);
    setActiveCategory(resolvedCategory);
    setRequestedPage(resolvedPage);

    const nextHref = buildBlogArchiveHref({
      category: resolvedCategory,
      query: resolvedQuery,
      page: resolvedPage,
    });
    const currentUrl = `${window.location.pathname}${window.location.search}`;
    if (currentUrl !== nextHref) {
      window.history.pushState(null, "", nextHref);
    }

    if (options?.scrollToSection && sectionRef.current) {
      const top =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }
  };

  const allCategoryHref = buildBlogArchiveHref({ query });

  return (
    <section
      ref={sectionRef}
      className="blog-sec blog-listing-sec overflow-hidden py-15 max-[992px]:py-10"
      aria-label={categoriesLabel}
      data-blogs-listing
    >
      <Container>
        <div className="blog-filter-main mb-10 max-[992px]:mb-7">
          <div className="search-form">
            <form
              action={search.action}
              method="get"
              role="search"
              className="custom-blog-search flex items-center justify-between gap-5 max-[768px]:flex-col max-[768px]:items-stretch"
              onSubmit={(event) => {
                event.preventDefault();
                applyFilters({ nextQuery: inputValue, nextPage: 1 });
              }}
            >
              <div className="blog-filter-list min-w-0">
                <nav
                  className="blog-category-filter flex items-center gap-2.5 max-[992px]:gap-2 max-[768px]:flex-nowrap max-[768px]:justify-start max-[768px]:overflow-x-auto max-[768px]:whitespace-nowrap max-[768px]:py-0.5 max-[768px]:[scrollbar-width:none] max-[768px]:[&::-webkit-scrollbar]:hidden"
                  aria-label={categoriesLabel}
                >
                  <Link
                    href={allCategoryHref}
                    prefetch={false}
                    onClick={(event) => {
                      if (!isPlainLeftClick(event)) return;
                      event.preventDefault();
                      applyFilters({ nextCategory: undefined, nextPage: 1 });
                    }}
                    className={cn(
                      "cat-link inline-block rounded-[30px] border border-[#dadada] px-[18px] py-2 text-center font-sans text-sm font-medium text-[#090909] transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red max-[992px]:min-w-[60px] max-[992px]:px-[9px] max-[992px]:py-[7px] max-[992px]:text-sm max-[768px]:shrink-0",
                      !activeCategory &&
                        "border-brand-red bg-brand-red text-white",
                    )}
                    aria-current={!activeCategory ? "page" : undefined}
                  >
                    {allCategoryLabel}
                  </Link>

                  {categories.map((category) => {
                    const isActive = category.value === activeCategory;
                    const catHref = buildBlogArchiveHref({
                      category: category.value,
                      query,
                    });

                    return (
                      <Link
                        key={category.value}
                        href={catHref}
                        prefetch={false}
                        onClick={(event) => {
                          if (!isPlainLeftClick(event)) return;
                          event.preventDefault();
                          applyFilters({
                            nextCategory: category.value,
                            nextPage: 1,
                          });
                        }}
                        className={cn(
                          "cat-link inline-block rounded-[30px] border border-[#dadada] px-[18px] py-2 text-center font-sans text-sm font-medium text-[#090909] transition-all duration-300 hover:border-brand-red hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red max-[992px]:min-w-[60px] max-[992px]:px-[9px] max-[992px]:py-[7px] max-[992px]:text-sm max-[768px]:shrink-0",
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

              <div
                className="search-input-wrap relative w-[320px] max-w-full shrink-0 max-[992px]:max-w-[231px] max-[768px]:mx-auto"
                data-blogs-search-wrap
              >
                <label className="sr-only" htmlFor="blogs-search">
                  {search.label}
                </label>
                <input
                  id="blogs-search"
                  className="search-field h-[46px] w-full rounded-lg border border-[#dadada] bg-white py-2.5 pr-[50px] pl-4 text-sm font-medium text-[#202020] placeholder:text-[#999] focus:border-brand-red focus:outline-none"
                  type="search"
                  name="s"
                  value={inputValue}
                  onChange={(event) => {
                    const nextVal = event.target.value;
                    setInputValue(nextVal);
                    if (nextVal.trim() === "" && query !== "") {
                      applyFilters({ nextQuery: "", nextPage: 1 });
                    }
                  }}
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
          <div
            className="blog-wrapper -mx-3.5 flex flex-wrap gap-y-8 max-[768px]:mx-0 max-[768px]:gap-y-6"
            data-blogs-grid
          >
            {articles.map((article) => {
              const isFaq = !article.image || article.category === "Faqs";
              return (
                <div
                  className={cn(
                    "blog-col px-3.5 max-[768px]:px-0",
                    isFaq
                      ? "w-full"
                      : "w-1/3 max-[992px]:w-1/2 max-[768px]:w-full",
                  )}
                  data-blogs-card
                  key={article.href}
                >
                  <BlogCard
                    item={article}
                    variant="archive"
                    prefetchCategory={false}
                    onCategoryClick={(categoryHref, event) => {
                      if (!isPlainLeftClick(event)) return;
                      const parsedCategory = parseCategoryFromHref(categoryHref);
                      if (!parsedCategory) return;
                      event.preventDefault();
                      applyFilters(
                        { nextCategory: parsedCategory, nextPage: 1 },
                        { scrollToSection: true },
                      );
                    }}
                  />
                </div>
              );
            })}

            {showPagination ? (
              <nav
                className="cus-pagination mt-[42px] w-full text-center"
                aria-label={paginationLabel}
                data-blogs-pagination
              >
                {pagination.map((item, index) => {
                  if (item.current) {
                    return (
                      <span
                        className="page-numbers current inline-block rounded-[6px] bg-brand-red px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-white"
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
                        className="page-numbers dots inline-block px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-muted"
                        aria-hidden="true"
                        key={item.label + "-" + index}
                      >
                        {item.label}
                      </span>
                    );
                  }

                  const targetHref = item.href;
                  return (
                    <Link
                      className="page-numbers inline-block px-[11.2px] py-[6.5px] text-base leading-[21px] font-medium tracking-[0.48px] text-muted transition-colors hover:text-brand-red focus-visible:text-brand-red [&_svg]:inline-block"
                      href={targetHref}
                      prefetch={false}
                      onClick={(event) => {
                        if (!isPlainLeftClick(event)) return;
                        event.preventDefault();
                        applyFilters(
                          { nextPage: parsePageFromHref(targetHref) },
                          { scrollToSection: true },
                        );
                      }}
                      aria-label={
                        item.next || item.previous ? item.label : undefined
                      }
                      key={item.label + "-" + item.href}
                    >
                      {item.next ? (
                        <NextIcon />
                      ) : item.previous ? (
                        <PreviousIcon />
                      ) : (
                        item.label
                      )}
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </div>
        ) : (
          <p className="mt-20 text-center text-xl font-medium leading-6 text-ink max-[768px]:text-lg">
            {search.noResults}
          </p>
        )}
      </Container>
    </section>
  );
}
