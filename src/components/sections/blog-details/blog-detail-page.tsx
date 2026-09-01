import Image from "next/image";
import Link from "next/link";

import { BlogTableOfContents } from "@/components/sections/blog-details/blog-table-of-contents";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { blogDetailUiCopy } from "@/content/blog-post-details";
import { absoluteUrl } from "@/lib/seo";
import type { BlogPostDetail, BlogPostNavigationItem } from "@/types/blog-post";

type BlogDetailPageProps = {
  post: BlogPostDetail;
};

function BackArrow() {
  return (
    <svg aria-hidden="true" className="h-3 w-5" viewBox="0 0 20 12" fill="none">
      <path d="M19 6.75a.75.75 0 0 0 0-1.5v1.5ZM.47 5.47a.75.75 0 0 0 0 1.06l4.773 4.773a.75.75 0 0 0 1.06-1.06L2.061 6l4.242-4.243A.75.75 0 1 0 5.243.697L.47 5.47ZM19 5.25H1v1.5h18v-1.5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-[27px] w-[27px]" viewBox="0 0 27 27" fill="none">
      <circle cx="13.5" cy="13.5" r="13.5" fill="#0A66C2" />
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
                <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={blogDetailUiCopy.authorLinkedinLabel}>
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
      <nav className="nav-links mx-[-15px] grid grid-cols-2 gap-0 pb-14 max-[767px]:pb-10" aria-label={blogDetailUiCopy.postNavigationLabel}>
        {post.previous ? <PostNavigationLink item={post.previous} direction="previous" /> : <span />}
        {post.next ? <PostNavigationLink item={post.next} direction="next" /> : <span />}
      </nav>
    </Container>
  );
}

export function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <div className="single-blog overflow-x-clip pb-14">
      <section className="pt-[180px] max-[992px]:pt-[140px]" aria-labelledby="blog-post-title">
        <Container className="max-[575px]:px-4">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-sm text-[16px] font-bold text-[#15190f] transition-colors duration-300 hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          >
            <BackArrow />
            {blogDetailUiCopy.goBack}
          </Link>
          <h1 id="blog-post-title" className="mt-10 mb-4 max-w-[1080px] font-montreal-medium text-[35px] leading-[46px] tracking-[-0.7px] text-[#282828] max-[767px]:mt-9 max-[767px]:text-[30px] max-[767px]:leading-10">
            {post.title}
          </h1>
          <div className="mb-[22px] text-[14px] font-medium leading-[21px] tracking-[0.28px] uppercase text-[#090909]">
            <Link className="transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href={post.categoryHref}>
              {post.category}
            </Link>{" "}
            <time
              className={`relative pr-2 after:absolute after:right-0 after:content-['.'] ${post.author ? "" : "after:hidden"}`}
              dateTime={post.date}
            >
              {post.date}
            </time>
            {post.author ? <span> {post.author.name}</span> : null}
          </div>
        </Container>
        <Container className="max-[575px]:px-4">
          <Image
            src={post.featuredImage.src}
            alt={post.featuredImage.alt}
            width={post.featuredImage.width}
            height={post.featuredImage.height}
            sizes="(max-width: 575px) calc(100vw - 32px), (max-width: 1199px) calc(100vw - 40px), 1360px"
            className="h-auto w-full"
            priority
          />
        </Container>
      </section>

      <section className="pt-10 max-[767px]:pt-[28px]" aria-label={post.title}>
        <div className="mx-auto max-w-[750px] px-4">
          <RichText html={post.contentBeforeToc} variant="blog" />
          {post.toc.length ? (
            <BlogTableOfContents
              items={post.toc}
              title={blogDetailUiCopy.tableOfContents}
              toggleLabel={blogDetailUiCopy.tableOfContentsToggle}
            />
          ) : null}
          <RichText html={post.contentAfterToc} variant="blog" />
        </div>
      </section>

      <Container className="max-[575px]:px-4">
        <div className="pb-0 text-[14px] font-medium leading-6 text-[#535353]">
          <span>{blogDetailUiCopy.postedInPrefix} </span>
          <Link className="underline underline-offset-2 transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red" href={post.categoryHref}>{post.category}</Link>
        </div>
      </Container>

      <AuthorCard post={post} />

      <Container>
        <div className="mt-[42px] mb-[24px] flex items-center justify-between border-y border-[#efefef] py-[11px]">
          <h2 className="m-0 text-[18px] font-bold leading-7 text-[#282828] max-[767px]:text-[16px]">{blogDetailUiCopy.shareHeading}</h2>
          <ShareLinks post={post} />
        </div>
      </Container>

      <PostNavigation post={post} />
    </div>
  );
}
