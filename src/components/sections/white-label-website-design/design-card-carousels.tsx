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
      className="-mx-2 flex snap-x snap-mandatory gap-[30px] scroll-px-2 px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[991px]:gap-5 max-[767px]:gap-4"
      pagination={{
        itemCount: items.length,
        itemLabel,
        className: "mt-6 flex justify-center gap-2",
        dotClassName: cn("size-2 cursor-pointer rounded-full border bg-transparent", dark ? "border-white/70" : "border-ink/70"),
        activeDotClassName: "border-brand-red bg-brand-red",
      }}
    >
      {items.map((item) => (
        <article
          className={cn(
            "min-h-[310px] min-w-0 shrink-0 basis-[calc((100%-60px)/3)] snap-start rounded-[15px] p-8 max-[991px]:basis-[calc((100%-20px)/2)] max-[767px]:min-h-[290px] max-[767px]:basis-full max-[767px]:p-[25px]",
            dark ? "bg-white/5 text-white" : "bg-cream text-center text-ink",
          )}
          data-carousel-item
          key={item.title}
        >
          <Image
            className={cn("object-contain", dark ? "mb-[30px] size-[68px]" : "mx-auto mb-[30px] size-10")}
            src={item.icon}
            alt=""
            width={dark ? 68 : 40}
            height={dark ? 68 : 40}
            aria-hidden="true"
          />
          <h3 className={cn("mb-[15px] font-sans text-lg leading-[1.28] font-bold", dark && "text-white")}>
            {item.title}
          </h3>
          <p className={cn("text-sm leading-[1.9] font-medium", dark ? "text-white/80" : "text-muted")}>
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
        <div className="mb-5 flex items-start justify-between gap-[60px] max-[991px]:mb-5 max-[991px]:flex-col max-[991px]:gap-0">
          <h2 className="w-[42%] font-sans text-[35px] leading-[1.38] font-bold text-white max-[991px]:mb-5 max-[991px]:w-full max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]">
            Benefits of White Label Website Design Services
          </h2>
          <p className="w-[47%] text-base leading-[1.9] font-medium text-white/80 max-[991px]:w-full max-[767px]:text-sm max-[767px]:leading-[1.9]">
            White label web design services provide many advantages for agencies aiming to grow. It allows businesses to grow without worrying about managing every technical aspect.
          </p>
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
        <div className="mb-10 flex items-start justify-between gap-[60px] max-[991px]:mb-[30px] max-[991px]:flex-col max-[991px]:gap-0">
          <h2 className="w-[45%] font-sans text-[35px] leading-[1.38] font-bold text-ink max-[991px]:mb-[15px] max-[991px]:w-full max-[991px]:text-[30px] max-[767px]:text-2xl max-[767px]:leading-[1.35]">
            Advantages of White Label <br className="max-[767px]:hidden" /> Web Design for Agenciess
          </h2>
          <p className="w-[45%] text-base leading-[1.9] font-medium text-muted max-[991px]:w-full max-[767px]:text-sm">
            Working with a white label partner allows agencies to offer a full suite of web design services without the hassle of handling development in house.
          </p>
        </div>
        <DesignCardCarousel ariaLabel="White label web design advantages for agencies" itemLabel="advantage" items={whiteLabelWebsiteDesignAdvantages} variant="light" />
      </Container>
    </section>
  );
}
