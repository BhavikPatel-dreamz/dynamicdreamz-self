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
} as const;

export const blogPostIndex = blogPostIndexJson;
export const blogPostSlugs = blogPostIndex.map((post) => post.slug);

const blogPostSlugSet = new Set(blogPostSlugs);

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | undefined> {
  if (!blogPostSlugSet.has(slug)) return undefined;
  const postModule = await import(`@/content/blog-posts/posts/${slug}.json`);
  return postModule.default as BlogPostDetail;
}
