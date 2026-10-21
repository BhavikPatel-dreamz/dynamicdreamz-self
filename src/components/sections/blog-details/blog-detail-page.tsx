import Image from "next/image";
import Link from "next/link";

import { BlogContentRenderer } from "@/components/sections/blog-details/blog-content-renderer";
import { BlogRelatedSection } from "@/components/sections/blog-details/blog-related-section";
import { BlogTableOfContents } from "@/components/sections/blog-details/blog-table-of-contents";
import type { BlogCardItem } from "@/components/ui/blog-card";
import { Container } from "@/components/ui/container";
import { blogDetailUiCopy, getRelatedBlogPosts } from "@/content/blog-post-details";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import type { BlogPostDetail, BlogPostNavigationItem } from "@/types/blog-post";

type BlogDetailPageProps = {
  post: BlogPostDetail;
  relatedPosts?: readonly BlogCardItem[];
};

function BackArrow() {
  return (
    <svg aria-hidden="true" className="h-3 w-5" viewBox="0 0 20 12" fill="none">
      <path d="M19 6.75a.75.75 0 0 0 0-1.5v1.5ZM.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 0 0 1.06-1.06L2.061 6l4.242-4.243A.75.75 0 1 0 5.243.697L.47 5.47ZM19 5.25H1v1.5h18v-1.5Z" fill="currentColor" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-auto w-10 shrink-0 max-[767px]:w-9" viewBox="0 0 512 512" fill="none">
      <path d="M178.36 16.84C127.203 34.5867 83.0857 68.2707 52.4877 112.944C21.8896 157.618 6.42368 210.926 8.36172 265.039C10.2998 319.152 29.5396 371.217 63.2551 413.587C96.9706 455.957 143.385 486.399 195.68 500.44C238.077 511.38 282.496 511.861 325.12 501.84C363.733 493.167 399.431 474.615 428.72 448C459.203 419.454 481.329 383.139 492.72 342.96C505.101 299.267 507.304 253.317 499.16 208.64H261.08V307.4H398.96C396.204 323.152 390.299 338.185 381.598 351.601C372.897 365.018 361.578 376.54 348.32 385.48C331.483 396.617 312.504 404.111 292.6 407.48C272.638 411.192 252.162 411.192 232.2 407.48C211.968 403.297 192.828 394.946 176 382.96C148.966 363.824 128.667 336.637 118 305.28C107.153 273.336 107.153 238.704 118 206.76C125.593 184.369 138.145 163.981 154.72 147.12C173.688 127.47 197.701 113.424 224.126 106.523C250.551 99.6223 278.366 100.133 304.52 108C324.951 114.272 343.634 125.23 359.08 140C374.627 124.533 390.147 109.027 405.64 93.48C413.64 85.12 422.36 77.16 430.24 68.6C406.662 46.6591 378.987 29.5863 348.8 18.36C293.828 -1.60042 233.679 -2.13684 178.36 16.84Z" fill="white" />
      <path d="M178.36 16.84C233.675 -2.14971 293.824 -1.62741 348.8 18.32C378.993 29.6226 406.655 46.7776 430.2 68.8C422.2 77.3601 413.76 85.3601 405.6 93.6801C390.08 109.173 374.573 124.613 359.08 140C343.634 125.23 324.951 114.272 304.52 108C278.375 100.106 250.561 99.5652 224.129 106.438C197.697 113.31 173.668 127.331 154.68 146.96C138.105 163.822 125.553 184.209 117.96 206.6L35.04 142.4C64.7204 83.5425 116.11 38.521 178.36 16.84Z" fill="#E43E2B" />
      <path d="M13.04 206C17.4969 183.912 24.8962 162.521 35.04 142.4L117.96 206.76C107.113 238.704 107.113 273.336 117.96 305.28C90.3333 326.613 62.6933 348.053 35.04 369.6C9.64605 319.053 1.90134 261.46 13.04 206Z" fill="#F0B501" />
      <path d="M261.08 208.6H499.16C507.304 253.277 505.101 299.227 492.72 342.92C481.33 383.099 459.203 419.414 428.72 447.96C401.96 427.08 375.08 406.36 348.32 385.48C361.587 376.531 372.911 364.996 381.612 351.565C390.314 338.135 396.215 323.086 398.96 307.32H261.08C261.04 274.44 261.08 241.52 261.08 208.6Z" fill="#3B7DED" />
      <path d="M35 369.6C62.6533 348.267 90.2933 326.827 117.92 305.28C128.608 336.648 148.936 363.836 176 382.96C192.88 394.89 212.061 403.173 232.32 407.28C252.282 410.992 272.758 410.992 292.72 407.28C312.624 403.911 331.603 396.417 348.44 385.28C375.2 406.16 402.08 426.88 428.84 447.76C399.556 474.389 363.857 492.955 325.24 501.64C282.616 511.66 238.197 511.18 195.8 500.24C162.268 491.287 130.947 475.504 103.8 453.88C75.0665 431.067 51.5982 402.319 35 369.6Z" fill="#2BA24C" />
    </svg>
  );
}

function GooglePreferredBadge() {
  return (
    <div className="right-badge flex w-[300px] shrink-0 justify-end max-[1199px]:mt-6 max-[1199px]:w-full max-[1199px]:justify-start">
      <div className="badge">
        <a
          href={blogDetailUiCopy.googleBadgeUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={blogDetailUiCopy.googleBadgeAriaLabel}
          className="relative inline-flex items-center overflow-hidden rounded-[20px] p-[2px] text-[#282828] transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(24,30,23,0.08),0_2px_6px_rgba(24,30,23,0.08)] before:absolute before:inset-0 before:bg-[conic-gradient(#4285f4,#ea4335,#fbbc05,#34a853,#4285f4)]"
        >
          <div className="relative z-10 inline-flex items-center rounded-[20px] bg-white p-[15px]">
            <GoogleIcon />
            <span className="block w-[calc(100%-40px)] pl-[15px] text-[16px] font-semibold leading-[1.3] text-[#282828] max-[767px]:w-[calc(100%-36px)] max-[767px]:pl-3 max-[767px]:text-[14px]">
              {blogDetailUiCopy.googleBadgePrefix}
              <strong className="font-bold">{blogDetailUiCopy.googleBadgeBrand}</strong>
              <br />
              {blogDetailUiCopy.googleBadgeLine2}
              <br />
              {blogDetailUiCopy.googleBadgeLine3}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-[27px] w-[27px]" viewBox="0 0 27 27" fill="none">
      <circle cx="13.5" cy="13.5" r="13.5" className="fill-[#6e6e6e] transition-colors duration-300 group-hover/author-li:fill-brand-red" />
      <path d="M8 10.6h2.35v8.05H8V10.6Zm1.17-3.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Zm2.67 3.8h2.25v1.1c.43-.76 1.3-1.34 2.45-1.34 2.34 0 2.76 1.51 2.76 3.62v4.67h-2.35v-4.14c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.21h-2.37V10.6Z" fill="white" />
    </svg>
  );
}

function ShareLinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M20.47 2H3.53a1.47 1.47 0 0 0-1.47 1.43v17.14A1.47 1.47 0 0 0 3.53 22h16.94a1.47 1.47 0 0 0 1.47-1.43V3.43A1.47 1.47 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2a1.67 1.67 0 0 0-1.54 1.09c-.08.24-.11.48-.1.73v5h-3v-9h3V11c.27-.47.67-.86 1.15-1.13.47-.26 1.01-.39 1.56-.37 2 0 3.45 1.29 3.45 4.06v5.18Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none">
      <path d="M13.2 21.5h-4v-8.01H7.2l.4-3.98h1.6V7.5a5 5 0 0 1 5-5h3v4h-3a1 1 0 0 0-1 1v2.01h4l-.4 3.98h-3.6v8.01Z" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="none">
      <path d="m15.8 2.2-5.1 5.9-4.05-5.9H2.34l5.84 8.5-6.16 7.1H3.9l5.1-5.9 4.06 5.9h4.31l-5.84-8.5 6.15-7.1h-1.88Zm-2.06 14.1L5.2 3.56h1.48l8.54 12.74h-1.48Z" fill="currentColor" />
    </svg>
  );
}

function ShareLinks({ post }: BlogDetailPageProps) {
  const pageUrl = absoluteUrl(`/blogs/${post.slug}`);
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const links = [
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      label: blogDetailUiCopy.shareLabels.facebook,
      icon: <FacebookIcon />,
    },
    {
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      label: blogDetailUiCopy.shareLabels.x,
      icon: <XIcon />,
    },
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      label: blogDetailUiCopy.shareLabels.linkedin,
      icon: <ShareLinkedInIcon />,
    },
  ];

  return (
    <div className="flex items-center gap-6 max-[767px]:gap-2.5">
      {links.map((link) => (
        <a
          className="flex text-[#6e6e6e] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red"
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          key={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function AuthorCard({ post }: BlogDetailPageProps) {
  if (!post.author) return null;
  return (
    <section className="mt-[42px] max-[767px]:mt-[30px]" aria-label={post.author.name}>
      <Container>
        <div className="flex items-center max-[767px]:flex-col max-[767px]:text-center">
          {post.author.image ? (
            <div className="w-[220px] shrink-0 mr-[25px] max-[767px]:mr-0 max-[767px]:w-full">
              <div className="max-[767px]:text-center">
                <Image
                  src={post.author.image}
                  alt={`${post.author.name} - ${post.author.role} at Dynamic Dreamz`}
                  width={211}
                  height={211}
                  sizes="211px"
                  className="h-auto w-[211px] max-w-full rounded-full object-cover max-[767px]:mx-auto"
                />
              </div>
            </div>
          ) : null}
          <div className="w-[calc(100%-245px)] max-[767px]:mt-[10px] max-[767px]:w-full">
            <div className="mb-1 flex items-center gap-2 max-[767px]:justify-center">
              <h2 className="m-0 text-[20px] font-bold leading-[28.8px] text-[#282828]">{post.author.name.toUpperCase()}</h2>
              {post.author.linkedin ? (
                <a
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={blogDetailUiCopy.authorLinkedinLabel}
                  className="group/author-li inline-block ml-2.5"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
            </div>
            <p className="mb-[9px] text-[14px] font-medium leading-[27px] text-[#535353]">{post.author.role}</p>
            <p className="m-0 text-[16px] font-medium leading-[30.4px] text-[#535353]">{post.author.bio}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PostNavigationLink({ item, direction }: { item: BlogPostNavigationItem; direction: "previous" | "next" }) {
  const label = direction === "previous" ? blogDetailUiCopy.previousLabel : blogDetailUiCopy.nextLabel;
  return (
    <Link
      href={`/blogs/${item.slug}`}
      className={`group flex flex-col px-[15px] text-[#282828] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red ${direction === "next" ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="block text-[16px] font-semibold leading-[30px] max-[767px]:hidden">{item.title}</span>
      <span className="mt-[15px] inline-flex items-center gap-2 text-[13px] font-bold leading-5 uppercase text-brand-red max-[767px]:mt-0">
        {direction === "previous" ? <NavArrow direction="previous" /> : null}
        {label}
        {direction === "next" ? <NavArrow direction="next" /> : null}
      </span>
    </Link>
  );
}

function NavArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg aria-hidden="true" className={`h-3 w-[13px] ${direction === "previous" ? "rotate-180" : ""}`} viewBox="0 0 13 12" fill="none">
      <path d="M0 5.25h10.2L7.1 2.1 8.15 1.05 13 6l-4.85 4.95L7.1 9.9l3.1-3.15H0v-1.5Z" fill="currentColor" />
    </svg>
  );
}

function PostNavigation({ post }: BlogDetailPageProps) {
  if (!post.previous && !post.next) return null;
  return (
    <Container>
      <nav className="nav-links mx-[-15px] grid grid-cols-2 gap-0 pt-6 max-[767px]:pt-4" aria-label={blogDetailUiCopy.postNavigationLabel}>
        {post.previous ? <PostNavigationLink item={post.previous} direction="previous" /> : <span />}
        {post.next ? <PostNavigationLink item={post.next} direction="next" /> : <span />}
      </nav>
    </Container>
  );
}

export function BlogDetailPage({ post, relatedPosts }: BlogDetailPageProps) {
  const activeRelatedPosts = relatedPosts ?? getRelatedBlogPosts(post);

  return (
    <div className="single-blog overflow-x-clip pt-[140px] max-[767px]:pt-[100px]">
      <Container className="max-[575px]:px-4">
        <Link
          href={siteConfig.blogsPath}
          className="group mb-[42px] inline-flex items-center gap-2 rounded-sm text-[16px] font-bold text-[#15190f] transition-colors duration-300 hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
        >
          <BackArrow />
          {blogDetailUiCopy.goBack}
        </Link>
      </Container>

      <header className="entry-header mb-5" aria-labelledby="blog-post-title">
        <Container className="max-[575px]:px-4">
          <div className="wrapper flex items-center justify-between max-[1199px]:flex-wrap">
            <div className="left-title w-[calc(100%-300px)] max-[1199px]:w-full">
              <h1 id="blog-post-title" className="mb-4 font-montreal-medium text-[35px] leading-[46px] tracking-[-0.7px] text-[#282828] max-[767px]:text-[30px] max-[767px]:leading-10">
                {post.title}
              </h1>
              <div className="mb-[22px] flex flex-wrap items-center gap-1.5 text-[14px] font-medium leading-[21px] tracking-[0.28px] uppercase text-[#090909]">
                <Link className="relative pr-2 transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red after:absolute after:right-0 after:content-['.']" href={post.categoryHref}>
                  <span>{post.category}</span>
                </Link>{" "}
                <time
                  className={`relative pr-2 ${post.author ? "after:absolute after:right-0 after:content-['.']" : ""}`}
                  dateTime={post.date}
                >
                  {post.date}
                </time>
                {post.author ? <span> {post.author.name}</span> : null}
              </div>
            </div>
            <GooglePreferredBadge />
          </div>
        </Container>
      </header>

      <div className="entry-content">
        <div className="container blog_container mx-auto max-w-[750px] px-4">
          {post.featuredImage ? (
            <div className="post-thumbnail relative mb-4">
              <Image
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                width={post.featuredImage.width}
                height={post.featuredImage.height}
                sizes="(max-width: 767px) 100vw, 750px"
                className="h-auto w-full"
                priority
              />
            </div>
          ) : null}
          <BlogContentRenderer blocks={post.contentBeforeToc} />
          {post.toc.length ? (
            <BlogTableOfContents
              items={post.toc}
              title={blogDetailUiCopy.tableOfContents}
              toggleLabel={blogDetailUiCopy.tableOfContentsToggle}
            />
          ) : null}
          <BlogContentRenderer blocks={post.contentAfterToc} />
        </div>

        <footer className="entry-footer mt-4">
          <Container className="max-[575px]:px-4">
            <div className="pb-0 text-[14px] font-medium leading-6 text-[#535353]">
              <span>{blogDetailUiCopy.postedInPrefix} </span>
              <Link className="underline underline-offset-2 transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href={post.categoryHref}>{post.category}</Link>
            </div>
          </Container>
        </footer>
      </div>

      <AuthorCard post={post} />

      <Container>
        <div className="mt-[42px] mb-[24px] flex items-center justify-between border-y border-[#efefef] py-[11px]">
          <h2 className="m-0 text-[18px] font-bold leading-7 text-[#282828] max-[767px]:text-[16px]">{blogDetailUiCopy.shareHeading}</h2>
          <ShareLinks post={post} />
        </div>
      </Container>

      <PostNavigation post={post} />

      <BlogRelatedSection posts={activeRelatedPosts} />
    </div>
  );
}
