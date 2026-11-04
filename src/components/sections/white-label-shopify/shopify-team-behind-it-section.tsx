import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { TextArrowLink } from "@/components/ui/text-arrow-link";
import { whiteLabelShopifyBrandProtection } from "@/content/white-label-shopify-development";
import { cn } from "@/lib/class-names";

export type ShopifyTeamBehindItCard = {
  title: string;
  description: string;
};

export type ShopifyTeamBehindItContent = {
  eyebrow?: string;
  heading: string;
  description?: string;
  cards: readonly ShopifyTeamBehindItCard[];
  ctas?: {
    primary: {
      label: string;
      href: string;
    };
    secondary?: {
      label: string;
      href: string;
      variant?: "outline" | "arrowLink";
    };
  };
};

type ShopifyTeamBehindItSectionProps = {
  content?: ShopifyTeamBehindItContent;
  className?: string;
  hideCtas?: boolean;
};

export function ShopifyTeamBehindItSection({
  content = whiteLabelShopifyBrandProtection,
  className,
  hideCtas = false,
}: ShopifyTeamBehindItSectionProps) {
  return (
    <section
      className={cn(
        "our_shopify_team_behind_it_section bg-[#EFF4EF] py-20 max-[992px]:py-15 max-[768px]:py-10",
        className,
      )}
    >
      <Container>
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-3 gap-5 max-[992px]:grid-cols-2 max-[768px]:grid-cols-1"
        >
          {content.cards.map((card) => (
            <div
              className="flex h-full flex-col justify-between rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[30px] max-[1200px]:p-5"
              key={card.title}
            >
              <div>
                <h3 className="mb-2.5 font-display text-lg font-small leading-[26px] text-[#282828] max-[992px]:text-[16px] max-[992px]:leading-6">
                  {card.title}
                </h3>
                <p className="font-sans text-sm font-small leading-6 text-[#535353]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {!hideCtas && content.ctas ? (
          <div
            data-aos="fade-up"
            className="mt-10 flex flex-wrap items-center justify-center gap-4 max-[768px]:flex-col max-[576px]:w-full [&_a]:max-[576px]:justify-center [&_a]:max-[576px]:w-full"
          >
            <ButtonLink href={content.ctas.primary.href} variant="primary">
              {content.ctas.primary.label}
            </ButtonLink>
            {content.ctas.secondary ? (
              content.ctas.secondary.variant === "arrowLink" ? (
                <TextArrowLink
                  
                  href={content.ctas.secondary.href}
                >
                  {content.ctas.secondary.label}
                </TextArrowLink>
              ) : (
                <ButtonLink href={content.ctas.secondary.href} variant="outline">
                  {content.ctas.secondary.label}
                </ButtonLink>
              )
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
