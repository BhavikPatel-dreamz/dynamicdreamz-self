import Image from "next/image";
import React from "react";
import { Container } from "@/components/ui/container";
import { blogDetailUiCopy } from "@/content/blog-post-details";
import type { BlogPostDetail } from "@/types/blog-post";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-[27px] w-[27px]" viewBox="0 0 27 27" fill="none">
      <circle
        cx="13.5"
        cy="13.5"
        r="13.5"
        className="fill-[#6e6e6e] transition-colors duration-300 group-hover/author-li:fill-brand-red"
      />
      <path
        d="M8 10.6h2.35v8.05H8V10.6Zm1.17-3.8a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Zm2.67 3.8h2.25v1.1c.43-.76 1.3-1.34 2.45-1.34 2.34 0 2.76 1.51 2.76 3.62v4.67h-2.35v-4.14c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.21v4.21h-2.37V10.6Z"
        fill="white"
      />
    </svg>
  );
}

export function BlogAuthorBioBox({ post }: { post: BlogPostDetail }) {
  if (!post.author) return null;

  return (
    <section className="mt-[42px] max-[767px]:mt-[30px]" aria-label={post.author.name}>
      <Container>
        <div className="flex items-center max-[767px]:flex-col max-[767px]:text-center">
          {post.author.image ? (
            <div className="mr-[25px] w-[220px] shrink-0 max-[767px]:mr-0 max-[767px]:w-full">
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
              <h2 className="m-0 text-[20px] font-bold leading-[28.8px] text-[#282828]">
                {post.author.name.toUpperCase()}
              </h2>
              {post.author.linkedin ? (
                <a
                  href={post.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={blogDetailUiCopy.authorLinkedinLabel}
                  className="group/author-li ml-2.5 inline-block"
                >
                  <LinkedInIcon />
                </a>
              ) : null}
            </div>
            <p className="mb-[9px] text-[14px] font-medium leading-[27px] text-[#535353]">
              {post.author.role}
            </p>
            <p className="m-0 text-[16px] font-medium leading-[30.4px] text-[#535353]">
              {post.author.bio}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
