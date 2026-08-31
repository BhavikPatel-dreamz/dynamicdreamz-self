import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { shopifyPlusAgencyIndustries } from "@/content/shopify-plus-agency";

export type IndustriesServedContent = {
  heading: string;
  description: string;
  items: readonly {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
};

export function IndustriesServedSection({
  content = shopifyPlusAgencyIndustries,
  className = "industries-served-sec pt-0 pb-20 max-[992px]:pb-[50px]",
}: {
  content?: IndustriesServedContent;
  className?: string;
}) {
  return (
    <section className={className} data-section="industries" id="industries-served">
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[30px]">
          <h2 className="mb-2.5 font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
          <p className="mx-auto max-w-[800px] text-[18px] font-medium leading-[34.2px] text-muted max-[992px]:text-base max-[992px]:leading-[25px]">
            {content.description.split("<br>").map((line, index, lines) => (
              <span key={line}>
                {line}
                {index < lines.length - 1 ? <br className="max-[1199px]:hidden" /> : null}
              </span>
            ))}
          </p>
        </div>
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
      </Container>
    </section>
  );
}
