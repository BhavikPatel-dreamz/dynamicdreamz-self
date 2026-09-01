import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

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
        <SplitSectionHeading
          description={content.description}
          heading={content.heading}
          variant="centered"
        />

        <ol className="relative mt-[70px] w-full list-none p-0 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:z-[5] before:border-l-2 before:border-dashed before:border-[#e5e5e5] before:content-[''] max-[767px]:mt-10 max-[767px]:before:left-[15px]">
          {content.items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                className={`relative mb-[15px] flex w-full last:mb-0 ${
                  isLeft ? "justify-start" : "justify-end"
                } max-[767px]:mb-[30px] max-[767px]:block`}
                key={item.title}
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  className="absolute top-[90px] left-1/2 z-10 size-[52px] -translate-x-1/2 max-[767px]:top-11 max-[767px]:left-[-4px] max-[767px]:size-10 max-[767px]:translate-x-0"
                  height={52}
                  src={markerSrc}
                  width={52}
                />
                <article
                  className={`w-1/2 text-left max-[767px]:w-full max-[767px]:pl-10 ${
                    isLeft
                      ? "pr-12 max-[767px]:pr-0"
                      : "pl-12 max-[767px]:pl-10"
                  }`}
                >
                  <Image
                    alt={item.iconAlt}
                    className="mb-2.5 size-[50px] object-contain max-[767px]:mb-0 max-[767px]:size-10"
                    height={50}
                    src={item.icon}
                    width={50}
                  />
                  <h3 className="mb-[5px] font-montreal-medium text-base font-normal leading-[28.8px] text-ink">
                    {item.title}
                  </h3>
                  <p className="font-sans text-base font-medium leading-[27.2px] tracking-[0.02em] text-muted max-[991px]:text-sm max-[991px]:leading-6">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
