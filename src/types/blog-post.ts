export type BlogImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type BlogTocItem = {
  label: string;
  href: string;
  level: number;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogAuthor = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
};

export type BlogPostNavigationItem = {
  slug: string;
  title: string;
};

export type BlogPostSeo = {
  title: string;
  description: string;
};

export type BlogPostDetail = {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  modified: string;
  category: string;
  categoryValue: string;
  categoryHref: string;
  featuredImage: BlogImage;
  excerpt: string;
  author: BlogAuthor | null;
  contentBeforeToc: string;
  contentAfterToc: string;
  toc: BlogTocItem[];
  faqs: BlogFaq[];
  previous: BlogPostNavigationItem | null;
  next: BlogPostNavigationItem | null;
  seo: BlogPostSeo;
  wordCount: number;
};
