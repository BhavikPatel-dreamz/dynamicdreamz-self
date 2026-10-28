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
    <section className="how_agencies_use_dynamic_dreamz_section py-20 max-[991px]:py-[50px]">
      <Container>
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1"
        >
          {content.cards.map((card) => (
            <div
              className="flex h-full flex-col justify-between rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_20px] max-[1199px]:p-5"
              key={card.tag}
            >
              <div>
                <span className="mb-5 block font-montserrat text-sm font-bold uppercase text-[#AD5151] max-[1399px]:text-xs">
                  {card.tag}
                </span>
                <h3 className="mb-2.5 font-display text-[22px] font-medium leading-[1.35] text-[#282828] max-[1399px]:text-lg max-[991px]:text-base">
                  {card.heading}
                </h3>
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6">
                  {card.description}
                </p>
              </div>

              <div className="cta-link mt-[25px] border-t border-[rgba(0,0,0,0.10)] pt-[25px]">
                <span className="mb-5 inline-block rounded-[10px] border border-[#D0D0CE] bg-[#FAFAF7] px-2.5 py-1.5 text-sm font-bold leading-normal text-[#282828] max-[1399px]:text-xs">
                  {card.pill}
                </span>
                <div>
                  <TextArrowLink href={card.ctaHref}>
                    {card.ctaLabel}
                  </TextArrowLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
