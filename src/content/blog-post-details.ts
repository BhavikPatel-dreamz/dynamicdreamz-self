import blogPostIndexJson from "@/content/blog-posts/index.json";
import type { BlogPostDetail } from "@/types/blog-post";

export const blogDetailUiCopy = {
  goBack: "Go back",
  metaSeparator: "·",
  shareHeading: "Share this article",
  shareLabels: {
    facebook: "Share this article on Facebook",
    x: "Share this article on X",
    linkedin: "Share this article on LinkedIn",
  },
  postedInPrefix: "Posted in",
  previousLabel: "Previous",
  nextLabel: "Next",
  postNavigationLabel: "Posts",
  tableOfContents: "Table of Contents",
  tableOfContentsToggle: "Toggle Table of Content",
  authorLinkedinLabel: "View author profile on LinkedIn",
  googleBadgeUrl: "https://www.google.com/preferences/source?q=dynamicdreamz.com",
  googleBadgeAriaLabel: "Add Dynamic Dreamz as a preferred source on Google",
  googleBadgePrefix: "Add ",
  googleBadgeBrand: "DYNAMIC DREAMZ",
  googleBadgeLine2: "as a preferred",
  googleBadgeLine3: "source on Google",
  relatedEyebrow: "Latest Insights",
  relatedHeading: "Related Blogs",
  relatedDescription: "Explore practical Shopify, eCommerce, and conversion insights to help you make better decisions for your online store.",
} as const;

export const blogPostIndex = blogPostIndexJson;
export const blogPostSlugs = blogPostIndex.map((post) => post.slug);

const blogPostSlugSet = new Set(blogPostSlugs);

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | undefined> {
  if (!blogPostSlugSet.has(slug)) return undefined;
  const postModule = await import(`@/content/blog-posts/posts/${slug}.json`);
  return postModule.default as BlogPostDetail;
}

export function getRelatedBlogPosts(
  currentPost: { slug: string; category?: string; categoryValue?: string },
  count = 3,
) {
  const currentCategory = currentPost.categoryValue ?? currentPost.category?.toLowerCase();
  const sameCategory = blogPostIndex.filter(
    (post) =>
      post.slug !== currentPost.slug &&
      (post.categoryValue === currentCategory || post.category.toLowerCase() === currentCategory),
  );

  const pool = [...sameCategory];
  if (pool.length < count) {
    const existingSlugs = new Set([currentPost.slug, ...sameCategory.map((p) => p.slug)]);
    for (const post of blogPostIndex) {
      if (!existingSlugs.has(post.slug)) {
        pool.push(post);
        existingSlugs.add(post.slug);
        if (pool.length >= count) break;
      }
    }
  }

  return pool.slice(0, count).map((post) => ({
    title: post.title,
    href: post.href,
    image: post.image,
    date: post.date,
    displayDate: post.displayDate,
    category: post.category,
    categoryHref: post.categoryHref,
    width: post.width,
    height: post.height,
    excerpt: post.excerpt,
  }));
}
