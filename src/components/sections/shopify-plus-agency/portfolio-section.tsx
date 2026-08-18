import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { shopifyPlusAgencyPortfolio } from "@/content/shopify-plus-agency";

export function PortfolioSection() {
  return (
    <section className="our-work-sec pt-5 pb-20 max-[991px]:pt-0" data-section="portfolio">
      <Container>
        <div className="text-center">
          <h2 className="mb-6 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
            {shopifyPlusAgencyPortfolio.heading}
          </h2>
          <p className="mb-6 text-[18px] leading-[34.2px] font-medium text-muted">
            {shopifyPlusAgencyPortfolio.description}
          </p>
        </div>
        <div className="mt-[42px] flex flex-wrap justify-center gap-x-[15px] gap-y-[60px] max-[991px]:mt-[50px] max-[991px]:gap-y-[30px] max-[767px]:mt-[30px]">
          {shopifyPlusAgencyPortfolio.items.map((item) => (
            <div
              className="w-[calc(33.33%-10px)] max-[991px]:w-[calc(50%-10px)] max-[767px]:w-full"
              key={item.name}
            >
              <PortfolioProjectCard
                category={shopifyPlusAgencyPortfolio.category}
                href={item.href}
                image={item.image}
                imageAlt={item.imageAlt}
                name={item.name}
                platformMark={{
                  src: shopifyPlusAgencyPortfolio.platformMark,
                  width: 113,
                  height: 27,
                }}
              />
            </div>
          ))}
          <div className="view-our-work mt-[51px] w-full text-center">
            <ButtonLink
              aria-label="Dynamic Dreamz - View our work"
              href="/our-work"
              variant="primary"
            >
              View our work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}