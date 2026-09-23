import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TextArrowLink } from "@/components/ui/text-arrow-link";
import { whiteLabelShopifyAgencyUseCases } from "@/content/white-label-shopify-development";

type HowAgenciesUseSectionProps = {
  content?: typeof whiteLabelShopifyAgencyUseCases;
};

export function HowAgenciesUseSection({
  content = whiteLabelShopifyAgencyUseCases,
}: HowAgenciesUseSectionProps) {
  return (
    <section className="how_agencies_use_dynamic_dreamz_section bg-[#faf9f5] py-20 max-[991px]:py-12">
      <Container>
        <div className="section_title mb-12 max-[991px]:mb-8">
          {content.eyebrow ? (
            <Eyebrow className="mb-3 text-[#ad5151]">{content.eyebrow}</Eyebrow>
          ) : null}
          <div className="flex flex-wrap items-start justify-between gap-6 max-[991px]:flex-col">
            <h2 className="w-full max-w-[580px] font-sans text-[35px] font-bold leading-[1.3] text-ink max-[991px]:text-[28px] max-[767px]:text-2xl">
              {content.heading}
            </h2>
            {content.description ? (
              <p className="w-full max-w-[540px] font-sans text-base font-medium leading-7 text-[#535353]">
                {content.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {content.cards.map((card) => (
            <div
              className="flex h-full flex-col justify-between rounded-[20px] border border-[rgba(23,30,22,0.10)] bg-white p-[30px_20px] max-[1199px]:p-5"
              key={card.tag}
            >
              <div>
                <span className="mb-5 block font-montserrat text-sm font-bold uppercase tracking-wider text-[#AD5151] max-[1399px]:text-xs">
                  {card.tag}
                </span>
                <h3 className="mb-2.5 font-sans text-[22px] font-medium leading-[1.35] text-[#282828] max-[1399px]:text-lg max-[991px]:text-base">
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
