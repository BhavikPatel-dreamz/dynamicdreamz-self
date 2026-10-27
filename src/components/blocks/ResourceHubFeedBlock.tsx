import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/container";
import { homeSectionCopy, insights } from "@/content/home";
import { cn } from "@/lib/class-names";

export type ResourceHubFeedItem = {
  title: string;
  href: string;
  image?: string | null;
  date: string;
  displayDate: string;
  category?: string;
  categoryHref?: string;
  width?: number | null;
  height?: number | null;
  excerpt?: string;
};

export type ResourceHubFeedBlockProps = {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  items?: readonly ResourceHubFeedItem[];
};

export type InsightsSectionProps = ResourceHubFeedBlockProps;

export function ResourceHubFeedBlock({
  title = homeSectionCopy.insightsTitle,
  ctaLabel = homeSectionCopy.viewAllBlogsCta,
  ctaHref = homeSectionCopy.viewAllBlogsCtaHref,
  className,
  items = insights,
}: ResourceHubFeedBlockProps = {}) {
  return (
    <section className={cn("overflow-hidden bg-white py-20 max-[991px]:py-[50px]", className)}>
      <Container>
        <div data-aos="fade-up" className="mx-auto mb-[47px] max-w-[700px] text-center max-[991px]:mb-[30px]">
          <h2 className="font-montreal-medium text-[43px] font-normal leading-[1.2] tracking-normal text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] mb-6 max-[767px]:mb-4">
            {title}
          </h2>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-3 gap-4 max-[992px]:flex max-[992px]:flex-col max-[992px]:gap-0">
          {items.map((item, index) => {
            const category = item.category ?? "Shopify";
            const categoryHref = item.categoryHref ?? "/blogs?category=shopify";
            const isLast = index === items.length - 1;

            return (
              <article
                key={item.href}
                className={cn(
                  "group/insight min-w-0 max-[992px]:mb-6 max-[992px]:block max-[992px]:border-b max-[992px]:border-[#efefef] max-[992px]:pb-6",
                  isLast && "max-[992px]:mb-0 max-[992px]:border-b-0 max-[992px]:pb-0",
                )}
              >
                <div className="contents max-[992px]:flex max-[992px]:items-stretch max-[992px]:justify-between max-[992px]:gap-5">
                  <Link
                    className="mb-3 block overflow-hidden rounded-[20px] max-[992px]:relative max-[992px]:m-0 max-[992px]:w-2/5 max-[992px]:flex-[1_1_40%] max-[992px]:rounded-[10px]"
                    href={item.href}
                  >
                    <Image
                      className="h-auto w-full object-cover [aspect-ratio:1504/1137] max-[992px]:absolute max-[992px]:inset-0 max-[992px]:h-full max-[992px]:[aspect-ratio:auto]"
                      src={item.image ?? "/assets/og/homepage.png"}
                      alt={item.title}
                      width={item.width ?? 1504}
                      height={item.height ?? 1137}
                      sizes="(max-width: 991px) 40vw, 33vw"
                    />
                  </Link>
                  <div className="max-[992px]:w-[calc(100%-110px)] max-[992px]:flex-[1_1_calc(100%-110px)]">
                    <div className="blog-cate-wrap -mx-1 mb-0 flex flex-wrap items-center max-[767px]:mb-[3px]">
                      <Link className="inline-flex" href={categoryHref}>
                        <span className="blog-cate mx-1 mb-2 flex items-center rounded-[50px] border border-[rgba(40,40,40,0.15)] px-[10px] py-2 text-center text-xs leading-[72%] font-semibold text-muted transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:leading-none max-[767px]:tracking-[0.2px]">
                          {category}
                        </span>
                      </Link>
                      <time
                        className="blog-date mx-1 mb-2 flex items-center rounded-[50px] border border-[rgba(40,40,40,0.15)] px-[10px] py-2 text-center text-xs leading-[72%] font-semibold text-muted max-[767px]:px-[7.5px] max-[767px]:pt-[4.5px] max-[767px]:pb-[2.75px] max-[767px]:text-[10px] max-[767px]:leading-none max-[767px]:tracking-[0.2px]"
                        dateTime={item.date}
                      >
                        {item.displayDate}
                      </time>
                    </div>
                    <div className="blog-title">
                      <Link className="group/title block" href={item.href}>
                        <h3 className="font-montreal-medium text-[20px] leading-[28px] font-normal tracking-normal transition-colors duration-300 ease-in-out group-hover/title:text-brand-red group-focus-visible/title:text-brand-red max-[767px]:text-base max-[767px]:leading-[normal]">
                          {item.title}
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div data-aos="fade-up" className="mt-[50px] flex justify-center max-[767px]:mt-10">
          <ButtonLink
            
            variant="outline"
            href={ctaHref}
          >
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export const InsightsSection = ResourceHubFeedBlock;
export const ResourcesBlogSection = ResourceHubFeedBlock;
export const ResourcesHubSection = ResourceHubFeedBlock;
