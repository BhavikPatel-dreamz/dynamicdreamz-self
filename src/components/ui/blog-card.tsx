import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/class-names";

export type BlogCardItem = {
  title: string;
  href: string;
  image: string;
  date: string;
  displayDate: string;
  category?: string;
  categoryHref?: string;
  width?: number;
  height?: number;
};

type BlogCardProps = {
  item: BlogCardItem;
  variant: "home" | "resources";
  isLast?: boolean;
};

export function BlogCard({ item, variant, isLast = false }: BlogCardProps) {
  const category = item.category ?? "Shopify";
  const categoryHref = item.categoryHref ?? "/category/shopify";

  if (variant === "resources") {
    return (
      <article className="blog-col group/resource-card h-[405.67px] w-[calc(100cqw-50px)] shrink-0 snap-start min-[768px]:h-[389.39px] min-[768px]:w-[calc((100cqw-25px)/2)] min-[1200px]:h-[405.3px] min-[1200px]:w-[calc((100cqw-50px)/3)]">
        <div className="blog-inner flex h-full flex-col border border-ink/10 bg-white p-5">
          <Link className="relative mb-7 block overflow-hidden pt-[55%]" href={item.href}>
            <Image
              className="object-cover transition-transform duration-300 group-hover/resource-card:scale-[1.03]"
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 767px) calc(100vw - 90px), (max-width: 1199px) calc((100vw - 113px) / 2), 324px"
            />
          </Link>
          <div className="flex items-center justify-between gap-3 pb-6 text-[14px] leading-[1.9] font-medium text-muted uppercase">
            <Link className="transition-colors hover:text-brand-red focus-visible:text-brand-red" href={categoryHref}>{category}</Link>
            <time className="shrink-0" dateTime={item.date}>{item.displayDate}</time>
          </div>
          <h3 className="line-clamp-4 text-[18px] leading-[1.5] font-bold tracking-[-0.32px]">
            <Link className="hover:underline hover:underline-offset-2 focus-visible:underline focus-visible:underline-offset-2" href={item.href}>{item.title}</Link>
          </h3>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("group/insight min-w-0 max-[991px]:mb-6 max-[991px]:block max-[991px]:border-b max-[991px]:border-[#efefef] max-[991px]:pb-6", isLast && "max-[991px]:mb-0 max-[991px]:border-b-0 max-[991px]:pb-0")}>
      <div className="contents max-[991px]:flex max-[991px]:items-stretch max-[991px]:justify-between max-[991px]:gap-5">
        <Link className="mb-5 block overflow-hidden rounded-[20px] max-[991px]:relative max-[991px]:m-0 max-[991px]:w-2/5 max-[991px]:flex-[1_1_40%] max-[991px]:rounded-[10px]" href={item.href}>
          <Image className="h-auto w-full object-cover transition-transform duration-300 [aspect-ratio:1504/1137] group-hover/insight:scale-[1.03] max-[991px]:absolute max-[991px]:inset-0 max-[991px]:h-full max-[991px]:[aspect-ratio:auto]" src={item.image} alt={item.title} width={item.width ?? 1504} height={item.height ?? 1137} sizes="(max-width: 991px) 40vw, 33vw" />
        </Link>
        <div className="max-[991px]:w-[calc(100%-110px)] max-[991px]:flex-[1_1_calc(100%-110px)]">
          <div className="mb-[9px] flex flex-wrap gap-2 max-[767px]:mx-[-4px] max-[767px]:mb-[3px] max-[767px]:gap-0">
            <Link className="inline-flex" href={categoryHref}>
              <span className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium hover:text-brand-red focus-visible:text-brand-red max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]">{category}</span>
            </Link>
            <time className="flex items-center rounded-[50px] border border-ink/15 px-4 py-2 text-sm leading-none font-medium max-[767px]:mx-1 max-[767px]:mb-2 max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:tracking-[0.2px]" dateTime={item.date}>{item.displayDate}</time>
          </div>
          <h3 className="font-display text-xl leading-[30px] font-medium max-[767px]:text-base max-[767px]:leading-[normal]">
            <Link className="hover:underline hover:underline-offset-2 focus-visible:underline focus-visible:underline-offset-2" href={item.href}>{item.title}</Link>
          </h3>
        </div>
      </div>
    </article>
  );
}
