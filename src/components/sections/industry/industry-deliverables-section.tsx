import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import type { IndustryDeliverable, IndustryPageContent } from "@/types/industry";

function DeliverableCard({ item }: { item: IndustryDeliverable }) {
  return (
    <article
      className="delivers-box group/card relative isolate h-full w-full rounded-[15px] border border-[#efefef] bg-white px-[27px] py-[65px] pr-[27px] pl-[35px] max-[767px]:px-5 max-[767px]:pt-[30px] max-[767px]:pb-[35px]"
      data-industry-card="deliverable"
    >
      <span
        className="pointer-events-none absolute -inset-x-[2px] -inset-y-[2px] z-0 invisible rounded-[15px] bg-[linear-gradient(to_right,#15c064,#00d1ff)] opacity-0 transition-all duration-300 ease-in-out group-hover/card:visible group-hover/card:opacity-100"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 z-1 rounded-[14px] bg-white"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 z-2 invisible rounded-[15px] bg-[linear-gradient(179.69deg,rgba(21,192,100,0.1)_-20.68%,rgba(0,209,255,0)_49.11%)] opacity-0 transition-all duration-300 ease-in-out group-hover/card:visible group-hover/card:opacity-100"
        aria-hidden="true"
      />
      <div className="relative z-11 mb-4 flex h-[68px] w-[68px] items-center max-[767px]:mb-2.5 max-[767px]:w-[50px]">
        <Image
          className="h-auto max-h-[68px] w-auto"
          src={item.icon}
          alt={item.iconAlt}
          width={item.width}
          height={item.height}
        />
      </div>
      <h3 className="relative z-11 mb-1.5 text-lg leading-[27px] font-bold text-ink max-[767px]:text-base">
        {item.title}
      </h3>
      <p className="relative z-11 m-0 text-base leading-[30.88px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
        {item.description}
      </p>
    </article>
  );
}

type IndustryDeliverablesSectionProps = {
  content: IndustryPageContent;
};

export function IndustryDeliverablesSection({ content }: IndustryDeliverablesSectionProps) {
  const { deliverables, slug } = content;

  return (
    <section
      className="overflow-hidden pb-[3px]"
      aria-labelledby={`${slug}-deliverables-title`}
      data-industry="deliverables"
    >
      <Container className="max-[575px]:px-4">
        <div className="mb-10 -mx-[15px] flex items-center justify-between max-[991px]:mx-0 max-[991px]:flex-col max-[991px]:text-center">
          <div className="w-[calc(35%-15px)] px-[15px] max-[1199px]:w-[calc(40%-15px)] max-[991px]:w-full max-[991px]:p-0">
            <h2
              className="m-0 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:mb-6 max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
              id={`${slug}-deliverables-title`}
            >
              {deliverables.title}
            </h2>
          </div>
          <div className="w-[calc(61.5%-15px)] px-[15px] max-[1199px]:w-[calc(60%-15px)] max-[991px]:w-full max-[991px]:p-0">
            <p className="m-0 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
              {deliverables.description}
            </p>
          </div>
        </div>
      </Container>

      <HorizontalDragScroll
        ariaLabel={deliverables.ariaLabel}
        className="w-full snap-x snap-mandatory scroll-p-[41px] py-[2px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:scroll-p-[calc((100%-540px)/2+45px)] min-[768px]:scroll-p-[calc((100%-720px)/2+45px)] min-[992px]:scroll-p-[calc((100%-960px)/2+45px)] min-[1200px]:scroll-p-[calc((100%-1180px)/2+20px)] min-[1400px]:scroll-p-[calc((100%-1360px)/2+20px)]"
        pagination={{
          itemCount: deliverables.items.length,
          itemLabel: "deliverable",
          className:
            "mt-[30px] hidden h-[20.4px] items-start justify-center gap-2.5 max-[767px]:flex",
          dotClassName:
            "h-2.5 w-2.5 cursor-pointer rounded-full border-[1.5px] border-[#d6d6d6] bg-transparent p-0",
          activeDotClassName:
            "border-transparent bg-[linear-gradient(to_right,#15c064,#00d1ff)]",
        }}
      >
        <div className="flex items-stretch gap-2.5 pl-[41px] min-[576px]:pl-[calc((100%-540px)/2+45px)] min-[768px]:gap-4 min-[768px]:pl-[calc((100%-720px)/2+45px)] min-[992px]:pl-[calc((100%-960px)/2+45px)] min-[1200px]:pl-[calc((100%-1180px)/2+20px)] min-[1400px]:pl-[calc((100%-1360px)/2+20px)]">
          {deliverables.items.map((item) => (
            <div
              className="flex shrink-0 basis-[calc(100vw-82px)] snap-start min-[576px]:basis-[450px] min-[768px]:basis-[307px] min-[992px]:basis-[427px] min-[1200px]:basis-[369.333px]"
              data-carousel-item
              key={item.title}
            >
              <DeliverableCard item={item} />
            </div>
          ))}
        </div>
      </HorizontalDragScroll>
    </section>
  );
}
