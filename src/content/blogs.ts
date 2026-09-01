import blogPostIndexJson from "@/content/blog-posts/index.json";

export type BlogArchiveCategoryValue = "shopify" | "wordpress" | "ecommerce" | "big-commerce";

export type BlogArchiveArticle = {
  title: string;
  href: string;
  image: string;
  width: number;
  height: number;
  date: string;
  displayDate: string;
  category: "Shopify" | "WordPress" | "eCommerce" | "Big-Commerce";
  categoryHref: string;
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
}));

export const BLOGS_PAGE_SIZE = 9;
export const BLOGS_TOTAL_PAGES = Math.ceil(blogArchiveArticles.length / BLOGS_PAGE_SIZE);

const blogArchiveCategoryValues = new Set<BlogArchiveCategoryValue>([
  "shopify",
  "wordpress",
  "ecommerce",
  "big-commerce",
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
      : true;
    const matchesQuery = normalizedQuery
      ? article.title.toLocaleLowerCase("en-US").includes(normalizedQuery)
      : true;

    return matchesCategory && matchesQuery;
  });
}

export function getBlogArchivePage(page: number) {
  const safePage = Math.min(Math.max(Math.trunc(page), 1), BLOGS_TOTAL_PAGES);
  const start = (safePage - 1) * BLOGS_PAGE_SIZE;
  return blogArchiveArticles.slice(start, start + BLOGS_PAGE_SIZE);
}

export function getBlogArchivePagination(currentPage: number): BlogArchivePaginationItem[] {
  const safePage = Math.min(Math.max(Math.trunc(currentPage), 1), BLOGS_TOTAL_PAGES);
  const items: BlogArchivePaginationItem[] = [];
  const pageHref = (page: number) => `/blogs?page=${page}`;

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

  if (BLOGS_TOTAL_PAGES <= 5) {
    for (let page = 1; page <= BLOGS_TOTAL_PAGES; page += 1) addPage(page);
  } else if (safePage <= 4) {
    for (let page = 1; page <= Math.min(BLOGS_TOTAL_PAGES, safePage + 2); page += 1) addPage(page);
    if (safePage + 2 < BLOGS_TOTAL_PAGES) addEllipsis();
    addPage(BLOGS_TOTAL_PAGES);
  } else if (safePage >= BLOGS_TOTAL_PAGES - 3) {
    addPage(1);
    addEllipsis();
    for (let page = Math.max(2, safePage - 2); page <= BLOGS_TOTAL_PAGES; page += 1) addPage(page);
  } else {
    addPage(1);
    addEllipsis();
    for (let page = safePage - 2; page <= safePage + 2; page += 1) addPage(page);
    addEllipsis();
    addPage(BLOGS_TOTAL_PAGES);
  }

  if (safePage < BLOGS_TOTAL_PAGES) {
    items.push({ label: "Next page", href: pageHref(safePage + 1), next: true });
  }

  return items;
}
