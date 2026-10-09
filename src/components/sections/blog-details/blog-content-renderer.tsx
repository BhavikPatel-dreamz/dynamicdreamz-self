import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { cn } from "@/lib/class-names";
import type { BlogContentBlock, BlogInlineNode, BlogListItem } from "@/types/blog-post";

type BlogContentRendererProps = {
  blocks: readonly BlogContentBlock[];
  className?: string;
};

function renderInlineNode(node: BlogInlineNode, index: number) {
  if (typeof node === "string") {
    return <Fragment key={index}>{node}</Fragment>;
  }

  if (node.type === "break") {
    return <br className="hidden" key={index} />;
  }

  if (node.type === "text") {
    let content = <Fragment>{node.text}</Fragment>;
    if (node.bold) {
      content = <strong className="font-bold text-[#3f3f3f]">{content}</strong>;
    }
    if (node.italic) {
      content = <em className="italic">{content}</em>;
    }
    return <Fragment key={index}>{content}</Fragment>;
  }

  if (node.type === "link") {
    const isExternal =
      node.href.startsWith("http://") ||
      node.href.startsWith("https://") ||
      node.href.startsWith("mailto:") ||
      node.href.startsWith("tel:");
    const isAnchor = node.href.startsWith("#");

    let linkText = <Fragment>{node.text}</Fragment>;
    if (node.bold) {
      linkText = <strong className="font-bold">{linkText}</strong>;
    }
    if (node.italic) {
      linkText = <em className="italic">{linkText}</em>;
    }

    const linkClasses =
      "text-brand-red underline decoration-1 underline-offset-2 transition-colors duration-200 hover:no-underline";

    if (isExternal) {
      return (
        <a
          className={linkClasses}
          href={node.href}
          key={index}
          rel={node.rel ?? "noopener noreferrer"}
          target={node.target ?? "_blank"}
        >
          {linkText}
        </a>
      );
    }

    if (isAnchor) {
      return (
        <a className={linkClasses} href={node.href} key={index}>
          {linkText}
        </a>
      );
    }

    const slashlessHref =
      node.href.length > 1 && node.href.endsWith("/")
        ? node.href.replace(/\/+$/, "")
        : node.href;

    return (
      <Link className={linkClasses} href={slashlessHref} key={index}>
        {linkText}
      </Link>
    );
  }

  return null;
}

function InlineNodes({ nodes }: { nodes: readonly BlogInlineNode[] }) {
  if (!nodes || nodes.length === 0) return null;
  return <>{nodes.map((node, i) => renderInlineNode(node, i))}</>;
}

function ListItems({ items, ordered }: { items: readonly BlogListItem[]; ordered?: boolean }) {
  return (
    <>
      {items.map((item, index) => {
        if (ordered) {
          return (
            <li
              className="mb-[18px] text-[16px] leading-[27px] tracking-[0.32px]"
              key={index}
            >
              <InlineNodes nodes={item.content} />
              {item.children && item.children.length > 0 ? (
                <ol className="mt-4 list-decimal pl-6">
                  <ListItems items={item.children} ordered />
                </ol>
              ) : null}
            </li>
          );
        }

        return (
          <li
            className="relative mb-[18px] pl-[34px] text-[16px] leading-[27px] tracking-[0.32px] before:absolute before:top-[3px] before:left-0 before:size-[22px] before:bg-[url('/assets/icons/gradient-check.svg')] before:bg-contain before:bg-no-repeat before:content-['']"
            key={index}
          >
            <InlineNodes nodes={item.content} />
            {item.children && item.children.length > 0 ? (
              <ul className="mt-6 ml-0 list-none pl-0">
                <ListItems items={item.children} />
              </ul>
            ) : null}
          </li>
        );
      })}
    </>
  );
}

export function BlogContentRenderer({ blocks, className }: BlogContentRendererProps) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className={cn("blog-content-renderer", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 2) {
              return (
                <h2
                  className="mt-[30px] mb-[15px] text-[24px] leading-normal font-normal text-[#282828] max-[991px]:mt-5"
                  id={block.id}
                  key={index}
                >
                  {block.text}
                </h2>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  className="mb-2.5 text-[20px] leading-[28.8px] font-normal text-[#282828] max-[991px]:text-[18px] max-[991px]:leading-[26.8px]"
                  id={block.id}
                  key={index}
                >
                  {block.text}
                </h3>
              );
            }
            if (block.level === 4) {
              return (
                <h4
                  className="mb-2.5 text-[17px] leading-[24.92px] font-normal text-[#282828] max-[991px]:text-[16px] max-[991px]:leading-[23.92px]"
                  id={block.id}
                  key={index}
                >
                  {block.text}
                </h4>
              );
            }
            return (
              <h5
                className="mb-2.5 text-[16px] leading-6 font-normal text-[#282828]"
                id={block.id}
                key={index}
              >
                {block.text}
              </h5>
            );
          }

          case "paragraph":
            return (
              <p
                className="mb-[15px] text-[16px] font-medium leading-[30.4px] text-[#535353] last:mb-0 max-[767px]:text-[15px] max-[767px]:leading-[28px]"
                key={index}
              >
                <InlineNodes nodes={block.children} />
              </p>
            );

          case "list":
            if (block.ordered) {
              return (
                <ol
                  className="mb-6 list-decimal pl-6 text-[#535353] [&>li::marker]:font-bold [&_ol]:list-[lower-alpha]"
                  key={index}
                >
                  <ListItems items={block.items} ordered />
                </ol>
              );
            }
            return (
              <ul className="mb-6 list-none pl-0 text-[#535353]" key={index}>
                <ListItems items={block.items} />
              </ul>
            );

          case "image":
            return (
              <figure className="my-6 text-center" key={index}>
                <Image
                  alt={block.alt}
                  className="h-auto w-full max-w-full"
                  height={block.height}
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 750px"
                  src={block.src}
                  width={block.width}
                />
                {block.caption ? (
                  <figcaption className="mt-2 text-center text-sm text-[#535353]">
                    {block.caption}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "table":
            return (
              <div
                className="my-6 overflow-x-auto max-[1199px]:whitespace-nowrap"
                key={index}
              >
                <table className="w-full border-collapse text-[16px] font-medium">
                  {block.headers && block.headers.length > 0 ? (
                    <thead>
                      <tr>
                        {block.headers.map((header, hIdx) => (
                          <th
                            className="border border-[#dfdfdf] bg-[#f7f7f7] p-3 text-left font-bold text-[#282828]"
                            key={hIdx}
                          >
                            <InlineNodes nodes={Array.isArray(header) ? header : [header]} />
                          </th>
                        ))}
                      </tr>
                    </thead>
                  ) : null}
                  <tbody>
                    {block.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            className="border border-[#dfdfdf] p-3 text-[#535353]"
                            key={cIdx}
                          >
                            <InlineNodes nodes={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "hr":
            return <hr className="my-6 border-t border-[#dfdfdf]" key={index} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
