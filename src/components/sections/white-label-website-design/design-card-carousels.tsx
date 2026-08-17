import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import {
  whiteLabelWebsiteDesignAdvantages,
  whiteLabelWebsiteDesignBenefits,
} from "@/content/white-label-website-design";
import { cn } from "@/lib/class-names";
import type { WhiteLabelCapability } from "@/types/white-label-service";

type DesignCardCarouselProps = {
  items: readonly WhiteLabelCapability[];
  ariaLabel: string;
  itemLabel: string;
  variant: "dark" | "light";
};

function DesignCardCarousel({ items, ariaLabel, itemLabel, variant }: DesignCardCarouselProps) {
  const dark = variant === "dark";

  return (
    <HorizontalDragScroll
      ariaLabel={ariaLabel}
      className="relative left-1/2 w-screen -translate-x-1/2 snap-x snap-mandatory [scroll-padding-inline-start:41px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:[scroll-padding-inline-start:calc((100vw-500px)/2+25px)] min-[768px]:[scroll-padding-inline-start:calc((100vw-680px)/2+25px)] min-[992px]:[scroll-padding-inline-start:calc((100vw-920px)/2+25px)] min-[1200px]:[scroll-padding-inline-start:calc((100vw-1140px)/2)]"
      trackClassName="flex w-max gap-2.5 px-[41px] pb-1 min-[576px]:px-[calc((100vw-500px)/2+25px)] min-[767px]:gap-4 min-[768px]:px-[calc((100vw-680px)/2+25px)] min-[992px]:px-[calc((100vw-920px)/2+25px)] min-[1200px]:px-[calc((100vw-1140px)/2)]"
      pagination={{
        itemCount: items.length,
        itemLabel,
        className: "mt-5 mb-5 hidden justify-center gap-3 min-[767px]:hidden max-[767px]:flex",
        dotClassName: cn("size-2.5 cursor-pointer rounded-full border bg-transparent", dark ? "border-white/70" : "border-ink/70"),
        activeDotClassName: dark
          ? "border-transparent bg-linear-to-r from-[#15c064] to-[#00d1ff]"
          : "border-brand-red bg-brand-red",
      }}
    >
      {items.map((item) => (
        <article
          className={cn(
            "mt-5 mb-5 w-[var(--design-card-width)] min-w-0 shrink-0 snap-start rounded-[15px] [--design-card-width:calc(100vw-82px)] min-[576px]:[--design-card-width:450px] min-[767px]:[--design-card-width:217px] min-[768px]:[--design-card-width:307px] min-[992px]:[--design-card-width:427px] min-[1200px]:[--design-card-width:calc((1140px-32px)/3)]",
            dark
              ? "bg-white/5 pt-[30px] pr-5 pb-[35px] pl-5 text-white min-[768px]:pt-[65px] min-[768px]:pr-[27px] min-[768px]:pb-[65px] min-[768px]:pl-[35px]"
              : "bg-cream p-[25px] text-center text-ink min-[768px]:p-8",
          )}
          data-carousel-item
          key={item.title}
        >
          <Image
            className={cn(
              "object-contain",
              dark ? "mb-2.5 w-[50px] min-[768px]:mb-4 min-[768px]:w-[56px] min-[768px]:h-[68px]" : "mx-auto mb-[30px] size-10",
            )}
            src={item.icon}
            alt=""
            width={dark ? 68 : 40}
            height={dark ? 68 : 40}
            aria-hidden="true"
          />
          <h3 className={cn("mb-[15px] font-sans font-bold", dark ? "text-base leading-6 text-white min-[768px]:text-lg min-[768px]:leading-[27px]" : "text-lg leading-[1.28]")}>
            {item.title}
          </h3>
          <p className={cn("leading-[1.9] font-medium", dark ? "text-sm text-white/80 min-[768px]:text-base" : "text-sm text-muted")}>
            {item.description}
          </p>
        </article>
      ))}
    </HorizontalDragScroll>
  );
}

export function WhiteLabelDesignBenefitsSection() {
  return (
    <section className="rounded-b-[50px] bg-dark-green pt-20 pb-[60px] max-[991px]:py-[50px] max-[767px]:rounded-b-[30px]">
      <Container className="max-[575px]:px-4">
        <div className="heading-text mb-5 -mx-3.75 flex items-start justify-between gap-15 max-[991px]:mb-5 max-[991px]:flex-col max-[991px]:gap-0">
          <div className="title w-[42%] px-3.75 max-[991px]:w-full">
            <h2 className="font-sans text-[35px] leading-[1.38] font-bold text-white max-[991px]:mb-5 max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35] lg:text-left text-center tracking-[-1px]">
              Benefits of White Label Website Design Services
            </h2>
          </div>
          <div className="text w-[calc(47%-15px)] px-3.75 max-[991px]:w-full">
            <p className="text-base leading-[1.9] font-medium text-white/80 max-[767px]:leading-[1.9] lg:text-left text-center">
              White label web design services provide many advantages for agencies aiming to grow. It allows businesses to grow without worrying about managing every technical aspect.
            </p>
          </div>
        </div>
        <DesignCardCarousel ariaLabel="White label website design benefits" itemLabel="benefit" items={whiteLabelWebsiteDesignBenefits} variant="dark" />
      </Container>
    </section>
  );
}

export function WhiteLabelDesignAdvantagesSection() {
  return (
    <section className="py-20 max-[991px]:py-[50px]">
      <Container className="max-[575px]:px-4">
        <div className="mb-10 -mx-3.75 flex items-start justify-between max-[991px]:mb-[20px] max-[991px]:flex-col">
          <div className="w-[calc(45%-15px)] px-3.75 max-[991px]:w-full">
            <h2 className="font-sans text-[35px] leading-[1.38] font-bold text-ink max-[991px]:mb-[15px] max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35] lg:text-left text-center tracking-[-.7px]">
              Advantages of White Label <br className="max-[389px]:hidden" /> Web Design for Agenciess
            </h2>
          </div>
          <div className="w-[calc(45%-15px)] px-3.75 max-[991px]:w-full">
            <p className="text-base leading-[1.9] font-medium text-muted lg:text-left text-center">
              Working with a white label partner allows agencies to offer a full suite of web design services without the hassle of handling development in house.
            </p>
          </div>
        </div>
        <DesignCardCarousel ariaLabel="White label web design advantages for agencies" itemLabel="advantage" items={whiteLabelWebsiteDesignAdvantages} variant="light" />
      </Container>
    </section>
  );
}
