"use client";

import { useState } from "react";

import type { BlogTocItem } from "@/types/blog-post";

type BlogTableOfContentsProps = {
  items: readonly BlogTocItem[];
  title: string;
  toggleLabel: string;
};

function ListIcon() {
  return (
    <span className="flex h-[30px] w-[35px] shrink-0 items-center justify-center rounded-[3px] border border-[#ccc] bg-[linear-gradient(to_bottom,#fff_0,#e0e0e0_100%)] text-[#282828] shadow-[inset_0_1px_0_rgb(255_255_255_/_15%),0_1px_1px_rgb(0_0_0_/_7.5%)]">
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
        <path d="M6 6H4v2h2V6Zm14 0H8v2h12V6ZM4 11h2v2H4v-2Zm16 0H8v2h12v-2ZM4 16h2v2H4v-2Zm16 0H8v2h12v-2Z" fill="currentColor" />
      </svg>
      <svg aria-hidden="true" className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.2 9.3 12 3 5.8 9.3a1 1 0 0 0 0 1.4c.2.2.4.3.7.3h11a1 1 0 0 0 .7-1.7ZM5.8 14.7 12 21l6.2-6.3a1 1 0 0 0 0-1.4 1 1 0 0 0-.7-.3h-11a1 1 0 0 0-.7 1.7Z" />
      </svg>
    </span>
  );
}

export function BlogTableOfContents({ items, title, toggleLabel }: BlogTableOfContentsProps) {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;

  return (
    <section className="mt-0 mb-4 w-full border border-[#ddd] bg-[#f7f5ef] pt-5 pr-[26px] pb-1 pl-5" aria-label={title}>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 border-0 bg-transparent p-0 text-left font-montreal-medium text-[24px] font-normal leading-[31px] tracking-0 text-[#282828]"
        aria-expanded={open}
        aria-controls="blog-table-of-contents-list"
        aria-label={toggleLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <ListIcon />
      </button>
      {open ? (
        <nav id="blog-table-of-contents-list" className="mt-[15px]" aria-label={title}>
          <ul className="m-0 list-none p-0">
            {items.map((item) => (
              <li className="m-0 overflow-hidden leading-[1.6]" key={`${item.href}-${item.label}`}>
                <a
                  className="inline-flex text-[14px] font-medium leading-[30.4px] text-[#535353] no-underline transition-colors duration-300 hover:text-brand-red hover:underline focus-visible:text-brand-red"
                  style={{ marginLeft: `${Math.max(0, item.level - 2) * 21}px` }}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </section>
  );
}
