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

function computeTocNumbers(items: readonly BlogTocItem[]): string[] {
  if (!items || items.length === 0) return [];
  const minLevel = items.reduce((min, item) => Math.min(min, item.level), 2);
  const counters: number[] = [];

  return items.map((item) => {
    const depth = Math.max(0, item.level - minLevel);
    while (counters.length <= depth) {
      counters.push(0);
    }
    counters[depth] = (counters[depth] ?? 0) + 1;
    counters.length = depth + 1;
    return counters.join(".") + ". ";
  });
}

export function BlogTableOfContents({ items, title, toggleLabel }: BlogTableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items.length) return null;

  const numbers = computeTocNumbers(items);

  return (
    <section className="mt-0 mb-4 w-full border border-[#ddd] bg-[#f7f5ef] py-5 pr-[26px] pl-5 max-[768px]:px-4 max-[768px]:py-4" aria-label={title}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="blog-table-of-contents-list"
        aria-label={toggleLabel}
        className="flex w-full cursor-pointer list-none items-center justify-between gap-4 border-0 bg-transparent p-0 text-left font-montreal-medium text-[24px] font-normal leading-[31px] tracking-0 text-[#282828] max-[768px]:text-[20px] max-[768px]:leading-[26px]"
      >
        <span>{title}</span>
        <ListIcon />
      </button>

      <div
        id="blog-table-of-contents-list"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:duration-0 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="overflow-hidden">
          <nav className="mt-[15px]" aria-label={title}>
            <ul className="m-0 list-none p-0">
              {items.map((item, idx) => (
                <li className="m-0 overflow-hidden leading-[1.6]" key={`${item.href}-${item.label}`}>
                  <a
                    className="inline-flex text-[14px] font-medium leading-[30.4px] text-[#535353] no-underline transition-colors duration-300 hover:text-brand-red hover:underline focus-visible:text-brand-red max-[768px]:leading-[26px]"
                    style={{ marginLeft: `${Math.max(0, item.level - 2) * 21}px` }}
                    href={item.href}
                  >
                    <span className="mr-1.5 shrink-0">{numbers[idx]}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
