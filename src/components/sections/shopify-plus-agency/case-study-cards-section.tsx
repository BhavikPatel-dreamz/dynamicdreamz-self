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


export function CaseStudyCardsSection({
  content = shopifyPlusAgencyCaseStudies,
  className,
}: {
  content?: CaseStudyCardsContent;
  className?: string;
}) {
  return (
    <section
      className={cn("see-the-work-sec bg-[#eff4ef] py-20 max-[992px]:py-[50px]", className)}
      data-section="case-studies"
      id="case-studies"
    >
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />
        <div className="cs-listing-main three-col grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[992px]:gap-4 max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <article
              className="group/case cs-listing-row flex flex-col justify-between overflow-hidden rounded-[20px] border border-[rgba(40,40,40,0.06)] bg-white transition-all duration-300 hover:shadow-[0_10px_50px_rgba(94,94,94,0.08)]"
              key={item.name}
            >
              <Link
                className="cs-wrapper flex h-full flex-col justify-between"
                href={item.href}
              >
                <div className="cs_list_img relative block w-full overflow-hidden pb-[50%]">
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/case:scale-105"
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 991px) calc(50vw - 40px), 390px"
                  />
                </div>
                <div className="cs-col-right flex flex-1 flex-col justify-between p-[18px]">
                  <div className="cs-title">
                    {item.platform || item.industry ? (
                      <div className="cs-cate-wrapp mb-[7px] flex flex-wrap items-center">
                        {item.platform && (
                          <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                            {item.platform}
                          </span>
                        )}
                        {item.industry && (
                          <>
                            <span className="relative mx-[7px] inline-block size-[3px] rounded-full bg-brand-red align-middle" />
                            <span className="text-[10px] font-bold uppercase leading-[1.4] tracking-[0.8px] text-brand-red">
                              {item.industry}
                            </span>
                          </>
                        )}
                      </div>
                    ) : null}
                    <h3 className="mb-[15px] font-montserrat text-[20px] font-bold leading-[1.4] text-ink line-clamp-2">
                      {item.name}
                    </h3>
                    {item.chips?.length ? (
                      <div className="cs-meta flex flex-wrap gap-2">
                        {item.chips.map((chip) => (
                          <span
                            className="cs-chip inline-flex items-center rounded-[50px] border border-[rgba(40,40,40,0.08)] bg-white/75 px-[11px] py-[7px] text-[10px] font-semibold uppercase leading-normal text-[#565656]"
                            key={chip}
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <div className="cs-visit mt-5 border-t border-[rgba(40,40,40,0.08)] pt-5">
                    <span className="inline-flex items-center font-montserrat text-sm font-bold uppercase leading-none text-brand-red transition-colors duration-300 group-hover/case:text-[#282828]">
                      {item.ctaLabel ?? content.ctaLabel ?? sharedUiCopy.learnMore}
                      <svg
                        aria-hidden="true"
                        className="ml-2.5 h-[12px] w-[10px] shrink-0 fill-brand-red transition-colors duration-300 group-hover/case:fill-[#282828]"
                        viewBox="0 0 12 12"
                      >
                        <path d="M0.331035 10.2567C-0.0794748 10.6262 -0.112753 11.2585 0.256706 11.669C0.626165 12.0795 1.25845 12.1128 1.66896 11.7433L0.331035 10.2567ZM11.9986 2.05256C12.0276 1.50104 11.6041 1.03041 11.0526 1.00138L2.065 0.528352C1.51348 0.499324 1.04285 0.922889 1.01382 1.47441C0.984795 2.02593 1.40836 2.49656 1.95988 2.52559L9.94882 2.94606L9.52835 10.935C9.49933 11.4865 9.92289 11.9572 10.4744 11.9862C11.0259 12.0152 11.4966 11.5916 11.5256 11.0401L11.9986 2.05256ZM1.66896 11.7433L11.669 2.74329L10.331 1.25671L0.331035 10.2567L1.66896 11.7433Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
