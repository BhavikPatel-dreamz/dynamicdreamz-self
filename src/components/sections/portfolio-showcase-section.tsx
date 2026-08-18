import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";

export type PortfolioShowcaseItem = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  category?: string;
};

export type PortfolioShowcaseSectionProps = {
  content: {
    heading: string;
    description: string;
    items: readonly PortfolioShowcaseItem[];
    category?: string;
    platformMark?: { src: string; width: number; height: number };
  };
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function PortfolioShowcaseSection({
  content,
  ctaLabel = "View our work",
  ctaHref = "/our-work",
  className = "our-work-sec py-20 max-[767px]:py-[60px]",
}: PortfolioShowcaseSectionProps) {
  const platformMark = content.platformMark ?? {
    src: "/assets/platforms/shopify-white.svg",
    width: 89,
    height: 26,
  };

  return (
    <section className={className} data-section="portfolio" id="portfolio-showcase">
      <Container>
        <div className="text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
          <p className="mx-auto mt-2.5 max-w-[740px] text-[18px] font-medium leading-[34.2px] text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {content.description}
          </p>
        </div>

        <div className="mt-[42px] grid grid-cols-3 gap-x-[15px] gap-y-[60px] max-[991px]:grid-cols-2 max-[991px]:gap-y-[30px] max-[767px]:mt-[30px] max-[767px]:grid-cols-1">
          {content.items.map((item) => (
            <PortfolioProjectCard
              category={item.category ?? content.category ?? "SHOPIFY"}
              eagerImage
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              key={item.name}
              name={item.name}
              platformMark={platformMark}
            />
          ))}
        </div>

        <div className="mt-[51px] text-center max-[767px]:mt-10">
          <ButtonLink href={ctaHref} variant="primary">
            {ctaLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
