import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { sharedUiCopy } from "@/content/common";
import type { IndustryPageContent } from "@/types/industry";

type IndustryPortfolioSectionProps = {
  content: IndustryPageContent;
};

export function IndustryPortfolioSection({ content }: IndustryPortfolioSectionProps) {
  const { portfolio, slug } = content;

  return (
    <section
      className="pt-20 pb-[85px] max-[991px]:pt-[50px] max-[991px]:pb-[60.4px]"
      aria-labelledby={`${slug}-portfolio-title`}
      data-industry="portfolio"
    >
      <Container className="max-[575px]:px-4">
        <div className="text-center">
          <h2
            className="mb-2.5 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id={`${slug}-portfolio-title`}
          >
            {portfolio.title}
          </h2>
          <p className="m-0 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
            {portfolio.description}
          </p>
        </div>

        <div className="mt-[60px] flex flex-wrap gap-x-[15px] gap-y-[60px] max-[991px]:mt-[50px] max-[991px]:gap-y-[30px]">
          {portfolio.items.map((item) => (
            <div
              className="w-[calc(33.33%-10px)] max-[991px]:w-[calc(50%-10px)] max-[767px]:w-full"
              key={item.name}
            >
              <PortfolioProjectCard
                category={item.category}
                categoryClassName="mt-[23px] tracking-[1.12px] max-[991px]:mt-[36.8px]"
                href={item.href}
                image={item.image}
                imageAlt={item.imageAlt}
                name={item.name}
                platformMark={{
                  src: item.platformLogo,
                  width: item.platformWidth,
                  height: item.platformHeight,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-[51px] text-center">
          <ButtonLink
            className="min-h-[49px] px-6 py-[15px] text-base leading-[normal] max-[991px]:min-h-[42px] max-[991px]:py-3 max-[991px]:text-sm"
            href="/our-work"
            variant="primary"
          >
            {sharedUiCopy.viewOurWork}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
