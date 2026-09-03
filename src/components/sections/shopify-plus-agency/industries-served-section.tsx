import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyIndustries } from "@/content/shopify-plus-agency";

export type IndustriesServedContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  bottomDescription?: string;
  items: readonly {
    image: string;
    imageAlt: string;
    title: string;
    eyebrow?: string;
    description: string;
    href?: string;
  }[];
};

export function IndustriesServedSection({
  content = shopifyPlusAgencyIndustries,
  className = "industries-served-sec pt-0 pb-20 max-[992px]:pb-[50px]",
  variant = "carousel",
}: {
  content?: IndustriesServedContent;
  className?: string;
  variant?: "carousel" | "grid";
}) {
  return (
    <section className={className} data-section="industries" id="industries-served">
      <Container>
        <SplitSectionHeading
          className="mb-[50px] gap-10 max-[992px]:mb-[30px] max-[992px]:gap-2.5"
          description={content.description}
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="left"
        />
        {variant === "grid" ? (
          <div className="grid grid-cols-4 gap-[18px] max-[1199px]:grid-cols-3 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            {content.items.map((item) => {
              const card = (
                <div className="h-full overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.06)] bg-[#fafaf7] transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-[185px] overflow-hidden">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover/industry:scale-105"
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 24px), (max-width: 1199px) 30vw, 270px"
                    />
                  </div>
                  <div className="p-5">
                    {item.eyebrow ? (
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.7px] text-muted">
                        {item.eyebrow}
                      </span>
                    ) : null}
                    <h3 className="mb-2.5 font-montserrat text-base font-bold leading-6 text-ink">
                      {item.title}
                    </h3>
                    <p className="m-0 text-sm font-medium leading-6 text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <Link className="group/industry block h-full" href={item.href} key={item.title}>
                  {card}
                </Link>
              ) : (
                <div className="group/industry h-full" key={item.title}>
                  {card}
                </div>
              );
            })}
          </div>
        ) : (
        <HorizontalDragScroll
          ariaLabel="Industries served by Dynamic Dreamz"
          className="relative left-1/2 w-screen -translate-x-1/2 snap-x snap-mandatory [scroll-padding-inline-start:16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:[scroll-padding-inline-start:calc((100vw-500px)/2)] min-[768px]:[scroll-padding-inline-start:calc((100vw-680px)/2)] min-[992px]:[scroll-padding-inline-start:calc((100vw-920px)/2)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1140px)/2)] min-[1400px]:[scroll-padding-inline-start:calc((100vw-1320px)/2)]"
          trackClassName="flex w-max items-stretch gap-5 px-4 py-[10px] min-[576px]:px-[calc((100vw-500px)/2)] min-[768px]:px-[calc((100vw-680px)/2)] min-[992px]:px-[calc((100vw-920px)/2)] min-[1200px]:px-[calc((100vw-1140px)/2)] min-[1400px]:px-[calc((100vw-1320px)/2)]"
        >
          {content.items.map((item) => (
            <div
              className="w-[calc(100vw-32px)] shrink-0 snap-start min-[576px]:w-[500px] min-[768px]:w-[680px] min-[992px]:w-[450px] min-[1200px]:w-[560px] min-[1400px]:w-[650px]"
              data-carousel-item
              key={item.title}
            >
              <div className="group h-full rounded-[10px] bg-[#dfdfdf] p-0.5 transition-[background] duration-300 hover:bg-[linear-gradient(to_right,#15c064,#00d1ff)]">
                <div className="h-full rounded-[8px] bg-white pt-7 pr-7 pb-[43px] pl-7 max-[1199px]:p-[18px]">
                  <div className="relative mb-[25px] overflow-hidden rounded-lg pb-[57%]">
                    <Image
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 991px) calc(100vw - 32px), 590px"
                    />
                  </div>
                  <h3 className="mb-[10px] font-montserrat text-base font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-base font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </HorizontalDragScroll>
        )}
        {content.bottomDescription && (
          <div className="bottom-text mt-[50px] text-center max-[767px]:mt-[30px]">
            <p className="mx-auto max-w-[800px] text-base font-normal leading-[30.4px] text-muted max-[992px]:text-sm max-[992px]:leading-6">
              {content.bottomDescription}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
