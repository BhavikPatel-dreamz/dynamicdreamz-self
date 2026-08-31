import Image from "next/image";

import { CaseStudySectionHeading } from "@/components/sections/case-study-details/case-study-section-heading";
import { Container } from "@/components/ui/container";
import { HorizontalDragScroll } from "@/components/ui/horizontal-drag-scroll";
import { RichText } from "@/components/ui/rich-text";
import type { CaseStudyNarrativeSection } from "@/types/case-study";

type CaseStudyNarrativeProps = {
  clientName: string;
  sections: CaseStudyNarrativeSection[];
};

function headingId(heading: string, index: number) {
  const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `case-study-${index + 1}-${slug}`;
}

export function CaseStudyNarrative({ clientName, sections }: CaseStudyNarrativeProps) {
  return (
    <section className="overflow-hidden py-[120px] pb-[90px] max-[992px]:py-10 max-[992px]:pb-[60px] max-[767px]:py-[50px]">
      <Container>
        {sections.map((section, sectionIndex) => {
          const id = headingId(section.heading, sectionIndex);
          const services = section.heading.toLowerCase().includes("services provided");

          return (
            <article
              aria-labelledby={id}
              className="border-b border-[#dfdfdf] py-[60px] first:pt-0 last:border-b-0 last:pb-0 max-[1199px]:py-[50px] max-[992px]:py-10 max-[767px]:py-[25px]"
              key={`${section.heading}-${sectionIndex}`}
            >
              <div className="grid grid-cols-[32%_68%] max-[1199px]:grid-cols-[25%_75%] max-[992px]:grid-cols-1">
                <div className="pr-[30px] max-[992px]:mb-6 max-[992px]:pr-0">
                  <CaseStudySectionHeading id={id}>{section.heading}</CaseStudySectionHeading>
                </div>
                <div>
                  {section.image ? (
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width}
                      height={section.image.height}
                      sizes="(max-width: 991px) calc(100vw - 32px), 68vw"
                      className="mb-[30px] h-auto w-full"
                    />
                  ) : null}
                  <RichText html={section.html} variant={services ? "services" : "default"} />
                </div>
              </div>

              {section.cards.length > 0 ? (
                <div className="mt-5">
                  <HorizontalDragScroll
                    ariaLabel={`${clientName} solution details`}
                    className="-mx-4 scroll-px-4 scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    trackClassName="flex items-stretch"
                  >
                    {section.cards.map((card, cardIndex) => (
                      <article
                        data-carousel-item
                        className="w-1/2 shrink-0 snap-start px-4 max-[767px]:w-[88%]"
                        key={`${card.heading}-${cardIndex}`}
                      >
                        {card.image ? (
                          <Image
                            src={card.image.src}
                            alt={card.image.alt}
                            width={card.image.width}
                            height={card.image.height}
                            sizes="(max-width: 767px) 82vw, 50vw"
                            className="mb-5 h-auto w-full rounded-[10px]"
                          />
                        ) : null}
                        <h3 className="mb-3.5 text-[18px] font-bold leading-[30.6px] tracking-[0.36px] text-[#282828]">
                          {card.heading}
                        </h3>
                        <RichText html={card.html} variant="compact" />
                      </article>
                    ))}
                  </HorizontalDragScroll>
                </div>
              ) : null}
            </article>
          );
        })}
      </Container>
    </section>
  );
}
