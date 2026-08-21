import Image from "next/image";

import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

export type ServiceBenefitTimelineItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export type ServiceBenefitsTimelineSectionProps = {
  content: {
    heading: string;
    description: string;
    items: readonly ServiceBenefitTimelineItem[];
  };
  className?: string;
  id?: string;
  markerSrc?: string;
};

export function ServiceBenefitsTimelineSection({
  content,
  className = "timeline-section overflow-hidden bg-white pt-20 pb-0 max-[767px]:pt-[60px]",
  id = "service-benefits",
  markerSrc = "/assets/services/wordpress-development-company/timeline/timeline-marker.svg",
}: ServiceBenefitsTimelineSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading, "max-[1199px]:hidden")}
          </h2>
          <p className="mt-2.5 text-base font-medium leading-[30.4px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {formatBrText(content.description, "max-[1199px]:hidden")}
          </p>
        </div>

        <ol className="relative mx-auto mt-[58px] max-w-[1030px] before:absolute before:top-[27px] before:bottom-[27px] before:left-1/2 before:border-l-2 before:border-dashed before:border-[#b7b7b7] before:content-[''] max-[991px]:before:left-[25px] max-[767px]:mt-10">
          {content.items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                className="relative grid min-h-[155px] grid-cols-2 pb-[30px] last:pb-0 max-[991px]:block max-[991px]:min-h-0 max-[991px]:pl-[82px] max-[991px]:pb-10 max-[575px]:pl-[70px]"
                key={item.title}
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 z-10 size-[52px] -translate-x-1/2 max-[991px]:left-[25px]"
                  height={52}
                  src={markerSrc}
                  width={52}
                />
                <article
                  className={`flex gap-5 rounded-[10px] bg-white px-8 py-5 shadow-[0_6px_30px_rgba(0,0,0,0.06)] max-[991px]:max-w-none max-[575px]:flex-col max-[575px]:gap-3 max-[575px]:px-5 ${
                    isLeft
                      ? "mr-[62px] text-right max-[991px]:mr-0 max-[991px]:text-left"
                      : "col-start-2 ml-[62px] text-left max-[991px]:ml-0"
                  }`}
                >
                  <Image
                    alt={item.iconAlt}
                    className={`size-[50px] shrink-0 object-contain ${isLeft ? "order-2 max-[991px]:order-none" : ""}`}
                    height={50}
                    src={item.icon}
                    width={50}
                  />
                  <div>
                    <h3 className="mb-1.5 font-sans text-base font-bold leading-[26px] tracking-[0.32px] text-ink">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium leading-[24px] text-muted">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
