import blogPostIndexJson from "@/content/blog-posts/index.json";

export type BlogArchiveCategoryValue = "shopify" | "wordpress" | "ecommerce" | "big-commerce" | "faqs";

export type BlogArchiveArticle = {
  title: string;
  href: string;
  image?: string | null;
  width?: number | null;
  height?: number | null;
  date: string;
  displayDate: string;
  category: "Shopify" | "WordPress" | "eCommerce" | "Big-Commerce" | "Faqs";
  categoryHref: string;
  excerpt?: string;
};

export type BlogArchiveCategory = {
  label: BlogArchiveArticle["category"];
  value: BlogArchiveCategoryValue;
  href: string;
};

export type BlogArchivePaginationItem = {
  label: string;
  href?: string;
  current?: boolean;
  previous?: boolean;
  next?: boolean;
};

export const blogsPageContent = {
  heroTitle: "Blogs",
  search: {
    action: "/blogs",
    label: "Search blogs",
    placeholder: "Search blog...",
    submitLabel: "Search",
    noResults: "No posts found.",
  },
  categoriesLabel: "Filter blogs by category",
  categories: [
    { label: "Shopify", value: "shopify", href: "/blogs?category=shopify" },
    { label: "WordPress", value: "wordpress", href: "/blogs?category=wordpress" },
    { label: "eCommerce", value: "ecommerce", href: "/blogs?category=ecommerce" },
    { label: "Faqs", value: "faqs", href: "/blogs?category=faqs" },
  ] satisfies readonly BlogArchiveCategory[],
  paginationLabel: "Blog archive pagination",
} as const;

export const blogArchiveArticles: readonly BlogArchiveArticle[] = blogPostIndexJson.map((post) => ({
  title: post.title,
  href: post.href,
  image: post.image,
  width: post.width,
  height: post.height,
  date: post.date,
  displayDate: post.displayDate,
  category: post.category as BlogArchiveArticle["category"],
  categoryHref: post.categoryHref,
  excerpt: post.excerpt,
}));

export const standardBlogArticles = blogArchiveArticles.filter(
  (article) => article.category !== "Faqs",
);

export const BLOGS_PAGE_SIZE = 9;
export const BLOGS_TOTAL_PAGES = Math.ceil(standardBlogArticles.length / BLOGS_PAGE_SIZE);

const blogArchiveCategoryValues = new Set<BlogArchiveCategoryValue>([
  "shopify",
  "wordpress",
  "ecommerce",
  "big-commerce",
  "faqs",
]);

export function normalizeBlogArchiveCategory(value: string): BlogArchiveCategoryValue | undefined {
  return blogArchiveCategoryValues.has(value as BlogArchiveCategoryValue)
    ? (value as BlogArchiveCategoryValue)
    : undefined;
}

export function filterBlogArchiveArticles(
  query = "",
  category?: BlogArchiveCategoryValue,
) {
  const normalizedQuery = query.trim().toLocaleLowerCase("en-US");

  return blogArchiveArticles.filter((article) => {
    const matchesCategory = category
      ? article.category.toLocaleLowerCase("en-US") === category
      : article.category !== "Faqs";
    const matchesQuery = normalizedQuery
      ? article.title.toLocaleLowerCase("en-US").includes(normalizedQuery)
      : true;

    return matchesCategory && matchesQuery;
  });
}

export function getBlogArchivePage(page: number) {
  const safePage = Math.min(Math.max(Math.trunc(page), 1), BLOGS_TOTAL_PAGES);
  const start = (safePage - 1) * BLOGS_PAGE_SIZE;
  return standardBlogArticles.slice(start, start + BLOGS_PAGE_SIZE);
}

export type BlogArchivePaginationOptions = {
  category?: BlogArchiveCategoryValue;
  query?: string;
};

export function getBlogArchivePagination(
  currentPage: number,
  totalPages: number = BLOGS_TOTAL_PAGES,
  options?: BlogArchivePaginationOptions,
): BlogArchivePaginationItem[] {
  const safePage = Math.min(Math.max(Math.trunc(currentPage), 1), totalPages);
  const items: BlogArchivePaginationItem[] = [];

  const pageHref = (page: number) => {
    const params = new URLSearchParams();
    if (options?.query) params.set("s", options.query);
    if (options?.category) params.set("category", options.category);
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return qs ? `/blogs?${qs}` : "/blogs";
  };

  if (safePage > 1) {
    items.push({ label: "Previous page", href: pageHref(safePage - 1), previous: true });
  }

  const addPage = (page: number) => {
    items.push(
      page === safePage
        ? { label: String(page), current: true }
        : { label: String(page), href: pageHref(page) },
    );
  };

  const addEllipsis = () => items.push({ label: "..." });

  if (totalPages <= 5) {
    for (let page = 1; page <= totalPages; page += 1) addPage(page);
  } else if (safePage <= 4) {
    for (let page = 1; page <= Math.min(totalPages, safePage + 2); page += 1) addPage(page);
    if (safePage + 2 < totalPages) addEllipsis();
    addPage(totalPages);
  } else if (safePage >= totalPages - 3) {
    addPage(1);
    addEllipsis();
    for (let page = Math.max(2, safePage - 2); page <= totalPages; page += 1) addPage(page);
  } else {
    addPage(1);
    addEllipsis();
    for (let page = safePage - 2; page <= safePage + 2; page += 1) addPage(page);
    addEllipsis();
    addPage(totalPages);
  }

  if (safePage < totalPages) {
    items.push({ label: "Next page", href: pageHref(safePage + 1), next: true });
  }

  return items;
}
