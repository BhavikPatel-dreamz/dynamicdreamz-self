import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { hireShopifyAdvantages, hireShopifyReasons } from "@/content/hire-shopify-developers";
import { formatBrText } from "@/lib/text-formatting";

const headingClassName = "font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]";

export type ProofSectionItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type ProofSectionContent = {
  heading: string;
  description: string;
  items: readonly ProofSectionItem[];
  ctaLabel?: string;
  ctaHref?: string;
  hideCta?: boolean;
};

const defaultReasonsContent: ProofSectionContent = {
  heading: "Why Choose Dynamic Dreamz for <br> Shopify Development",
  description:
    "Our Shopify developers have the ideal balance of expertise in eCommerce <br> business and Shopify technology. For your online business, <br> we can act as a powerful catalyst.",
  items: hireShopifyReasons,
};

const defaultAdvantagesContent: ProofSectionContent = {
  heading: "Our Advantages of Choosing Dynamic Dreamz as a Shopify Developer",
  description: "Get connected with us, and you will witness the difference from day one!",
  items: hireShopifyAdvantages,
  ctaLabel: "inquire now",
  ctaHref: "/request-quote",
};

export function ShopifyReasonsSection({
  content = defaultReasonsContent,
  className = "shopify-customization-services-sec bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[991px]:py-[60px]",
  id = "why-hire-shopify-developers",
  layout = "grid",
  carouselFullBleed = false,
  carouselItemClassName,
  cardMinHeightClassName = "min-h-[330px]",
  preserveHeadingBreaks = false,
}: {
  content?: ProofSectionContent;
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
      className={`group relative h-full ${cardMinHeightClassName} rounded-[15px] bg-white p-0.5 transition-[background] duration-300 hover:bg-[linear-gradient(to_right,#15c064,#00d1ff)] focus-within:bg-[linear-gradient(to_right,#15c064,#00d1ff)] after:absolute after:right-0 after:bottom-0 after:left-0 after:z-20 after:h-3 after:rounded-b-[15px] after:bg-[linear-gradient(to_right,#15c064,#00d1ff)] after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100 focus-within:after:opacity-100`}
      key={item.title}
    >
      <div className="relative z-10 h-full rounded-[13px] bg-white pl-[30px] pr-[20px] pt-[30px] pb-[80px]">
        <Image
          className="mb-5 size-[60px] object-contain"
          src={item.icon}
          alt={item.iconAlt}
          width={60}
          height={60}
        />
        <h3 className="mb-[5px] font-sans text-base leading-[26.72px] font-bold tracking-[0.32px] text-ink">
          {formatBrText(item.title, "max-[767px]:hidden")}
        </h3>
        <p className={`text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted ${layout === "grid" ? "max-[767px]:text-sm max-[767px]:leading-6" : ""}`}>
          {formatBrText(item.description, "max-[767px]:hidden")}
        </p>
      </div>
    </article>
  ));

  const carousel = (
    <HorizontalDragScroll
      ariaLabel={`${content.heading.replaceAll("<br>", "")} benefits`}
      className={
        carouselFullBleed
          ? "[--carousel-offset:16px] [scroll-padding-inline-start:var(--carousel-offset)] [scrollbar-width:none] min-[576px]:[--carousel-offset:calc((100vw-540px)/2+16px)] min-[768px]:[--carousel-offset:calc((100vw-720px)/2+20px)] min-[992px]:[--carousel-offset:calc((100vw-960px)/2+20px)] min-[1200px]:[--carousel-offset:calc((100vw-1180px)/2+20px)] min-[1400px]:[--carousel-offset:calc((100vw-1360px)/2+20px)] [&::-webkit-scrollbar]:hidden"
          : "-mx-[25px] px-[25px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      }
      trackClassName={`flex items-stretch gap-4 ${carouselFullBleed ? "pr-[25px] pl-[var(--carousel-offset)]" : ""}`}
    >
      {cards.map((card, index) => (
        <div
          className={`shrink-0 snap-start ${
            carouselItemClassName ?? (carouselFullBleed
              ? "basis-[calc(100vw-82px)] min-[576px]:basis-[458px] min-[767px]:basis-[246px] min-[768px]:basis-[332px] min-[992px]:basis-[452px] min-[1200px]:basis-[562px] min-[1400px]:basis-[652px]"
              : "basis-[calc(100%-50px)] min-[767px]:basis-[calc((100%-66px)/2)]")
          }`}
          data-carousel-item
          key={content.items[index].title}
        >
          {card}
        </div>
      ))}
    </HorizontalDragScroll>
  );

  return (
    <section className={className} id={id}>
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[35px]">
          <h2 className={headingClassName}>
            {formatBrText(
              content.heading,
              preserveHeadingBreaks ? undefined : "max-[991px]:block",
            )}
          </h2>
          <p className="shopify-proof-sec-details mx-auto mt-6 max-w-[720px] text-base leading-[34.2px] font-medium text-muted max-[991px]:text-sm max-[991px]:leading-[25px]">
            {formatBrText(content.description, "max-[991px]:hidden")}
          </p>
        </div>

        {layout === "carousel" && !carouselFullBleed ? carousel : null}
        {layout === "grid" ? (
          <div className="flex flex-wrap -mx-2 justify-center">
            {cards.map((card, index) => (
              <div
                className="w-1/3 px-2 mb-4 max-[991px]:w-1/2 max-[767px]:w-full"
                key={content.items[index].title}
              >
                {card}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
      {layout === "carousel" && carouselFullBleed ? carousel : null}
    </section>
  );
}

export function ShopifyAdvantagesSection({
  content = defaultAdvantagesContent,
  columns = 3,
  align = "center",
  className = "py-20 max-[767px]:py-[60px]",
  id = "shopify-developer-advantages",
}: {
  content?: ProofSectionContent;
  columns?: 2 | 3;
  align?: "center" | "left";
  className?: string;
  id?: string;
}) {
  const isTwoCol = columns === 2;
  const isLeftAlign = align === "left";

  return (
    <section className={className} id={id}>
      <Container>
        <div className="mx-auto max-w-[850px] text-center">
          <h2 className={headingClassName}>
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          <p className="mt-2.5 text-lg leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </p>
        </div>

        <div
          className={`mt-[60px] grid max-[767px]:grid-cols-1 ${
            isTwoCol
              ? "grid-cols-2 max-[991px]:grid-cols-2"
              : "grid-cols-3 max-[991px]:grid-cols-2"
          } max-[991px]:mt-10`}
        >
          {content.items.map((item, index) => (
            <article
              className={`flex min-h-[250px] flex-col ${
                isLeftAlign ? "items-start text-left" : "items-center text-center"
              } border-[#efefef] px-8 py-[35px] max-[1199px]:px-5 max-[767px]:min-h-0 max-[767px]:py-5 ${
                isTwoCol
                  ? `${index % 2 === 0 ? "border-r max-[767px]:border-r-0" : ""} ${
                      index < content.items.length - 2 ? "border-b" : ""
                    }`
                  : `${index % 3 !== 2 ? "border-r max-[991px]:border-r-0" : ""} ${
                      index < 3 ? "border-b" : ""
                    } ${index % 2 === 0 ? "max-[991px]:border-r" : ""} ${
                      index < 4 ? "max-[991px]:border-b" : ""
                    }`
              } ${
                index < content.items.length - 1
                  ? "max-[767px]:border-r-0 max-[767px]:border-b"
                  : "max-[767px]:border-r-0"
              }`}
              key={item.title}
            >
              <Image
                className={`size-[58px] object-contain ${isLeftAlign ? "mb-2.5" : ""}`}
                src={item.icon}
                alt={item.iconAlt}
                width={58}
                height={58}
              />
              <h3
                className={`${
                  isLeftAlign ? "mt-0 mb-1.5" : "mt-5 mb-[15px]"
                } font-sans text-base leading-[26px] font-bold text-ink max-[767px]:mt-[15px] max-[767px]:mb-2.5`}
              >
                {item.title}
              </h3>
              <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {!content.hideCta && (
          <div className="mt-[46px] text-center">
            <ButtonLink href={content.ctaHref ?? "/request-quote"} variant="primary">
              {content.ctaLabel ?? "inquire now"}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
