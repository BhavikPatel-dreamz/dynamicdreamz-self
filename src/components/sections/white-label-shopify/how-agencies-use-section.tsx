import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { TextArrowLink } from "@/components/ui/text-arrow-link";
import { whiteLabelShopifyAgencyUseCases } from "@/content/white-label-shopify-development";

export type HowAgenciesUseContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards: readonly {
    tag: string;
    heading: string;
    description: string;
    pill: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
};

type HowAgenciesUseSectionProps = {
  content?: HowAgenciesUseContent;
};

export function HowAgenciesUseSection({
  content = whiteLabelShopifyAgencyUseCases,
}: HowAgenciesUseSectionProps) {
  return (
    <section className="how_agencies_use_dynamic_dreamz_section py-20 max-[992px]:py-15 max-[768px]:py-10">
      <Container>
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />

        <div
          data-aos="fade-up"
          className="wrapper -mx-2.5 -mb-5 flex flex-wrap justify-center"
        >
          {content.cards.map((card) => (
            <div
              className="col mb-5 flex w-1/3 px-2.5 max-[992px]:w-1/2 max-[768px]:w-full"
              key={card.tag}
            >
              <div className="item flex w-full flex-col justify-between rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_20px] max-[1200px]:px-4 max-[1200px]:py-5">
                <div>
                  <span className="mb-5 block font-montserrat text-xs font-bold uppercase leading-[13px] text-[#AD5151] max-[1200px]:text-[10px] max-[1200px]:leading-[16px]">
                    {card.tag}
                  </span>
                  <h3 className="mb-2.5 font-display text-[20px] font-small leading-7 text-[#282828] max-[1200px]:text-[16px] max-[1200px]:leading-[26px]">
                    {card.heading}
                  </h3>
                  <p className="font-sans text-sm font-small leading-6 text-[#535353]">
                    {card.description}
                  </p>
                </div>

                <div className="cta-link mt-[25px] border-t border-[rgba(0,0,0,0.10)] pt-[25px]">
                  <span className="mb-5 inline-block rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] px-2.5 py-1.5 text-xs font-bold leading-normal text-[#282828] max-[1200px]:text-[10px] max-[1200px]:leading-[18px]">
                    {card.pill}
                  </span>
                  <div>
                    <TextArrowLink href={card.ctaHref}>
                      {card.ctaLabel}
                    </TextArrowLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
