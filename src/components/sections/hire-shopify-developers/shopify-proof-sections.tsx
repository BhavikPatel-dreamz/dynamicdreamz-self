import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatBrText } from "@/lib/text-formatting";

export type ProofSectionItem = {
  title: string | readonly string[];
  description: string | readonly string[];
  icon: string;
  iconAlt: string;
};

export type ProofSectionContent = {
  heading: string | readonly string[];
  description: string | readonly string[];
  items: readonly ProofSectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
};

export function ShopifyReasonsSection({
  content,
  className = "shopify-customization-services-sec mb-20 bg-linear-[97.18deg] from-[#e8f9ef] from-[28.5%] to-[#e6fafd] to-[91.82%] py-20 max-[992px]:py-[60px]",
  id = "why-hire-shopify-developers",
  carouselFullBleed = true,
  carouselItemClassName,
  cardMinHeightClassName = "min-h-[330px]",
  preserveHeadingBreaks = false,
}: {
  content: ProofSectionContent;
  className?: string;
  id?: string;
  layout?: "grid" | "carousel";
  carouselFullBleed?: boolean;
  carouselItemClassName?: string;
  cardMinHeightClassName?: string;
  preserveHeadingBreaks?: boolean;
}) {
  const cards = content.items.map((item) => (
    <article
      data-aos="fade-up"
      className={`group relative h-full ${cardMinHeightClassName} rounded-[15px] bg-white p-0.5 transition-[background] duration-300 hover:bg-[linear-gradient(to_right,#15c064,#00d1ff)] focus-within:bg-[linear-gradient(to_right,#15c064,#00d1ff)] after:absolute after:right-0 after:bottom-0 after:left-0 after:z-20 after:h-3 after:rounded-b-[15px] after:bg-[linear-gradient(to_right,#15c064,#00d1ff)] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100 focus-within:after:opacity-100`}
      key={typeof item.title === "string" ? item.title : item.title.join(" ")}
    >
      <div className="relative z-10 h-full rounded-[13px] bg-white pl-[30px] pr-[20px] pt-[30px] pb-[80px]">
        <Image
          className="mb-5 size-[60px] object-contain"
          src={item.icon}
          alt={item.iconAlt}
          width={60}
          height={60}
        />
        <h3 className="mb-[5px] font-montreal-medium text-base leading-[26.72px] font-medium tracking-[0.32px] text-ink">
          {formatBrText(item.title, "max-[767px]:hidden")}
        </h3>
        <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted">
          {formatBrText(item.description, "max-[767px]:hidden")}
        </p>
      </div>
    </article>
  ));

  const carousel = (
    <HorizontalDragScroll
      ariaLabel={`${(typeof content.heading === "string" ? content.heading : content.heading.join(" ")).replaceAll("<br>", "")} benefits`}
      className={
        carouselFullBleed
          ? "snap-x snap-mandatory overflow-x-auto [--carousel-offset:16px] [scroll-padding-inline-start:var(--carousel-offset)] [scrollbar-width:none] min-[576px]:[--carousel-offset:calc((100vw-540px)/2+16px)] min-[768px]:[--carousel-offset:calc((100vw-720px)/2+20px)] min-[992px]:[--carousel-offset:calc((100vw-960px)/2+20px)] min-[1200px]:[--carousel-offset:calc((100vw-1180px)/2+20px)] min-[1400px]:[--carousel-offset:calc((100vw-1360px)/2+20px)] [&::-webkit-scrollbar]:hidden"
          : "-mx-[25px] snap-x snap-mandatory overflow-x-auto px-[25px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      }
      trackClassName={`flex w-max items-stretch gap-4 ${carouselFullBleed ? "pr-[25px] pl-[var(--carousel-offset)]" : ""}`}
    >
      {cards.map((card, index) => (
        <div
          className={`shrink-0 snap-start ${
            carouselItemClassName ?? (carouselFullBleed
              ? "basis-[calc(100vw-82px)] min-[576px]:basis-[458px] min-[767px]:basis-[246px] min-[768px]:basis-[332px] min-[992px]:basis-[452px] min-[1200px]:basis-[562px] min-[1400px]:basis-[652px]"
              : "basis-[calc(100%-50px)] min-[767px]:basis-[calc((100%-66px)/2)]")
          }`}
          data-carousel-item
          key={typeof content.items[index].title === "string" ? content.items[index].title : content.items[index].title.join(" ")}
        >
          {card}
        </div>
      ))}
    </HorizontalDragScroll>
  );

  return (
    <section className={className} id={id}>
      <Container>
        <div data-aos="fade-up" className="mb-[50px] text-center max-[767px]:mb-[35px]">
          <SectionHeading>
            {formatBrText(
              content.heading,
              preserveHeadingBreaks ? undefined : "max-[992px]:block",
            )}
          </SectionHeading>
          <SectionDescription
            className="mx-auto mt-6 max-w-[720px]"
            textClassName="shopify-proof-sec-details font-normal text-sm leading-[24px]"
          >
            {formatBrText(content.description, "max-[992px]:hidden")}
          </SectionDescription>
        </div>
      </Container>
      {carousel}
    </section>
  );
}

