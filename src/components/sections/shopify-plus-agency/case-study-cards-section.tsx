import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { sharedUiCopy } from "@/content/common";
import { shopifyPlusAgencyCaseStudies } from "@/content/shopify-plus-agency";
import { cn } from "@/lib/class-names";

export type CaseStudyCardItem = {
  name: string;
  image: string;
  imageAlt: string;
  href: string;
  platform?: string;
  industry?: string;
  ctaLabel?: string;
  description?: string;
  chips?: readonly string[];
};

export type CaseStudyCardsContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  ctaLabel?: string;
  items: readonly CaseStudyCardItem[];
};

function LearnMoreArrow() {
  return (
    <svg
      aria-hidden="true"
      className="ml-2 transition-[margin] duration-300 group-hover/case:ml-3"
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
    >
      <path
        d="M0.996094 5.25C0.58188 5.25 0.246094 5.58579 0.246094 6C0.246094 6.41421 0.58188 6.75 0.996094 6.75V5.25ZM11.5264 6.53033C11.8193 6.23744 11.8193 5.76256 11.5264 5.46967L6.75345 0.696699C6.46056 0.403806 5.98569 0.403806 5.69279 0.696699C5.3999 0.989593 5.3999 1.46447 5.69279 1.75736L9.93543 6L5.69279 10.2426C5.3999 10.5355 5.3999 11.0104 5.69279 11.3033C5.98569 11.5962 6.46056 11.5962 6.75345 11.3033L11.5264 6.53033ZM0.996094 6.75L10.9961 6.75V5.25L0.996094 5.25V6.75Z"
        fill="#D92128"
      />
    </svg>
  );
}

export function CaseStudyCardsSection({
  content = shopifyPlusAgencyCaseStudies,
  className,
}: {
  content?: CaseStudyCardsContent;
  className?: string;
}) {
  return (
    <section className={cn("bg-[#eff4ef] py-20 max-[992px]:py-[50px]", className)} data-section="case-studies" id="case-studies">
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />
        <div className="grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[992px]:gap-4 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <div
              className="group/case relative overflow-hidden rounded-[15px] border border-[#efefef] bg-white transition-shadow duration-300 hover:shadow-[0_10px_50px_rgba(94,94,94,0.08)]"
              key={item.name}
            >
              <Link
                className="relative block h-full"
                href={item.href}
              >
                <div className="relative aspect-[1.9] overflow-hidden">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/case:scale-105"
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 991px) calc(50vw - 40px), 390px"
                  />
                </div>
                <div className="p-5 max-[1199px]:p-4">
                  {item.platform || item.industry ? (
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold leading-5 text-muted">
                      {item.platform ? <span>{item.platform}</span> : null}
                      {item.industry ? (
                        <span className="border-l border-black/20 pl-2">
                          {item.industry}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                  <h3 className="mb-3 text-lg leading-[27px] font-bold tracking-[0.2px] text-ink max-[1199px]:text-base max-[1199px]:leading-6">
                    {item.name}
                  </h3>
                  {item.description ? (
                    <p className="mb-4 text-sm font-medium leading-6 text-muted">
                      {item.description}
                    </p>
                  ) : null}
                  {item.chips?.length ? (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {item.chips.map((chip) => (
                        <span className="rounded-full border border-[#ead7d7] bg-[#fff7f7] px-2.5 py-1 text-[11px] font-semibold leading-4 text-brand-red" key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <span className="flex items-center text-sm leading-none font-bold uppercase text-brand-red underline max-[1199px]:text-xs">
                    {item.ctaLabel ?? content.ctaLabel ?? sharedUiCopy.learnMore}
                    <LearnMoreArrow />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
