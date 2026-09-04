import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { whiteLabelShopifyBrandProtection } from "@/content/white-label-shopify-development";

type ShopifyTeamBehindItSectionProps = {
  content?: typeof whiteLabelShopifyBrandProtection;
};

export function ShopifyTeamBehindItSection({
  content = whiteLabelShopifyBrandProtection,
}: ShopifyTeamBehindItSectionProps) {
  return (
    <section className="our_shopify_team_behind_it_section bg-[#EFF4EF] py-20 max-[991px]:py-12">
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
              className="flex h-full flex-col justify-between rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[30px] max-[1199px]:p-5"
              key={card.title}
            >
              <div>
                <h3 className="mb-2.5 font-sans text-[22px] font-medium leading-[1.32] text-[#282828] max-[1399px]:text-lg max-[991px]:text-base">
                  {card.title}
                </h3>
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[991px]:text-sm max-[991px]:leading-6">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 max-[767px]:flex-col">
          <ButtonLink href={content.ctas.primary.href} variant="primary">
            {content.ctas.primary.label}
          </ButtonLink>
          <ButtonLink href={content.ctas.secondary.href} variant="outline">
            {content.ctas.secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
