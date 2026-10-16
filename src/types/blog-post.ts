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

export type BlogInlineNode =
  | string
  | {
      type: "text";
      text: string;
      bold?: boolean;
      italic?: boolean;
    }
  | {
      type: "link";
      href: string;
      text: string;
      bold?: boolean;
      italic?: boolean;
      target?: string;
      rel?: string;
    }
  | {
      type: "break";
    };

export type BlogListItem = {
  content: (string | BlogInlineNode)[];
  children?: BlogListItem[];
};

export type BlogContentBlock =
  | {
      type: "heading";
      level: 2 | 3 | 4 | 5;
      id?: string;
      text: string;
    }
  | {
      type: "paragraph";
      children: (string | BlogInlineNode)[];
    }
  | {
      type: "list";
      ordered?: boolean;
      items: BlogListItem[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | {
      type: "table";
      headers?: (string | BlogInlineNode)[];
      rows: (string | BlogInlineNode)[][][];
    }
  | {
      type: "hr";
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
  featuredImage: BlogImage | null;
  excerpt: string;
  author: BlogAuthor | null;
  contentBeforeToc: BlogContentBlock[];
  contentAfterToc: BlogContentBlock[];
  toc: BlogTocItem[];
  faqs: BlogFaq[];
  previous: BlogPostNavigationItem | null;
  next: BlogPostNavigationItem | null;
  seo: BlogPostSeo;
  wordCount: number;
};
