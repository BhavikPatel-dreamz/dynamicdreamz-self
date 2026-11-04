import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { TextArrowLink } from "@/components/ui/text-arrow-link";
import { sharedUiCopy } from "@/content/common";
import { cn } from "@/lib/class-names";

export type CaseStudyPreviewItem = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  technology: string;
  industry: string;
  tags?: readonly string[];
  ctaLabel?: string;
};

export type ServicesCaseStudiesSectionProps = {
  eyebrow?: string;
  heading: string | readonly string[];
  description?: string | readonly string[];
  items: readonly CaseStudyPreviewItem[];
  id?: string;
  className?: string;
};

export function ServicesCaseStudiesSection({
  eyebrow,
  heading,
  description,
  items,
  id,
  className,
}: ServicesCaseStudiesSectionProps) {
  const isMobileApp =
    id === "shopify-mobile-app-case-studies" ||
    (typeof heading === "string" && heading.toLowerCase().includes("mobile app"));
  const containerClass = isMobileApp
    ? "min-[1400px]:max-w-[1408px] px-[15px]"
    : undefined;

  return (
    <section
      className={cn("see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-15 max-[768px]:py-10", className)}
      id={id}
    >
      <Container className={containerClass}>
        <SplitSectionHeading
          description={description}
          eyebrow={eyebrow}
          heading={heading}
          titleColumnClassName={!description ? "w-full" : undefined}
          variant="left"
        />

        <div className="cs-listing-main three-col -mb-5 flex flex-wrap justify-between">
          {items.map((item) => (
            <article
              key={item.href}
              data-aos="fade-up"
              className="cs-listing-row relative mb-5 flex min-h-full w-[calc(33.33%-10px)] flex-col overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-[0.23s_ease] max-[1200px]:w-[calc(50%-10px)] max-[992px]:w-full"
            >
              <Link
                href={item.href}
                className="cs_list_img cs-col-left relative block overflow-hidden pb-[50%] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#ad5151]"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 991px) 100vw, 430px"
                  className="object-cover shadow-[1px_-3px_10px_0_rgba(0,0,0,0.1)] transition-all duration-1000 hover:scale-105"
                />
              </Link>
              <div className="cs-col-right flex flex-1 flex-col p-[18px]">
                <div className="cs-text flex flex-1 flex-col justify-between">
                  <div className="cs-title">
                    <Link
                      href={item.href}
                      className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad5151]"
                    >
                      <div className="cs-cate-wrapp overflow-hidden">
                        <span className="cs-cate-label relative mb-[7px] line-clamp-1 align-middle font-montserrat text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                          {item.technology}
                          <span className="relative mx-[7px] after:absolute after:right-0 after:top-1/2 after:size-[3px] after:-translate-y-1/2 after:rounded-full after:bg-brand-red after:content-['']" />
                          {item.industry}
                        </span>
                      </div>
                      <h3 className="mb-[15px] line-clamp-2 font-montreal-medium text-[20px] font-normal leading-[1.4] text-[#282828]">
                        {item.title}
                      </h3>
                    </Link>
                    {item.tags && item.tags.length > 0 ? (
                      <div className="cs-meta flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="cs-chip inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] font-montserrat text-[10px] font-semibold uppercase leading-[normal] text-[#565656]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className="cs-visit mt-5 flex border-t border-[rgba(40,40,40,0.08)] pt-5">
                    <TextArrowLink href={item.href}>
                      {item.ctaLabel ?? sharedUiCopy.viewCaseStudy}
                    </TextArrowLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
