import Image from "next/image";

import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import type { IndustryDeliverable, IndustryPageContent } from "@/types/industry";

function DeliverableCard({ item }: { item: IndustryDeliverable }) {
  return (
    <article
      className="group/card relative isolate h-full min-h-[335px] w-full overflow-visible rounded-[15px] border border-[#efefef] bg-white px-[27px] py-[65px] pr-[27px] pl-[35px] before:pointer-events-none before:absolute before:-inset-[3px] before:-z-2 before:invisible before:rounded-[15px] before:bg-[linear-gradient(to_right,#15c064,#00d1ff)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] after:pointer-events-none after:absolute after:inset-0 after:z-0 after:invisible after:rounded-[15px] after:bg-[linear-gradient(179.69deg,rgba(21,192,100,0.1)_-20.68%,rgba(0,209,255,0)_49.11%)] after:opacity-0 after:content-[''] hover:before:visible hover:before:opacity-100 hover:after:visible hover:after:opacity-100 min-[768px]:min-h-[492px] min-[992px]:min-h-[434px] max-[767px]:px-5 max-[767px]:pt-[30px] max-[767px]:pb-[35px]"
      data-industry-card="deliverable"
    >
      <div className="relative z-1 mb-4 flex h-[68px] w-[68px] items-center max-[767px]:mb-2.5 max-[767px]:w-[50px]">
        <Image
          className="h-auto max-h-[68px] w-auto"
          src={item.icon}
          alt={item.iconAlt}
          width={item.width}
          height={item.height}
        />
      </div>
      <h3 className="relative z-1 mb-1.5 text-lg leading-[27px] font-bold text-ink max-[767px]:text-base">
        {item.title}
      </h3>
      <p className="relative z-1 m-0 text-base leading-[30.88px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[26px]">
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
        className="ml-4 w-[calc(100vw-16px)] snap-x snap-mandatory scroll-p-[25px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[576px]:ml-[calc((100vw-540px)/2+20px)] min-[576px]:w-[calc(100vw-((100vw-540px)/2+20px))] min-[768px]:ml-[calc((100vw-720px)/2+20px)] min-[768px]:w-[calc(100vw-((100vw-720px)/2+20px))] min-[992px]:ml-[calc((100vw-960px)/2+20px)] min-[992px]:w-[calc(100vw-((100vw-960px)/2+20px))] min-[1200px]:ml-[calc((100vw-1180px)/2+20px)] min-[1200px]:w-[calc(100vw-((100vw-1180px)/2+20px))] min-[1200px]:scroll-p-0"
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
        <div className="flex items-stretch gap-2.5 pl-[25px] min-[768px]:gap-4 min-[1200px]:pl-0">
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
