import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { hireWordPressPortfolio } from "@/content/hire-wordpress-developers";

export function WordPressPortfolioSection() {
  return (
    <section className="pb-20 max-[767px]:pb-[60px]" data-section="portfolio">
      <Container>
        <div className="text-center">
          <h2 className="mb-2.5 font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {hireWordPressPortfolio.heading}
          </h2>
          <p className="mx-auto max-w-[740px] text-[18px] leading-[34.2px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            {hireWordPressPortfolio.description}
          </p>
        </div>

        <div className="mt-[42px] grid grid-cols-3 gap-x-[15px] gap-y-[50px] max-[991px]:grid-cols-2 max-[767px]:mt-[30px] max-[767px]:grid-cols-1 max-[767px]:gap-y-[35px]">
          {hireWordPressPortfolio.items.map((item) => (
            <PortfolioProjectCard
              category="WORDPRESS"
              eagerImage
              href={item.href}
              image={item.image}
              imageAlt={item.imageAlt}
              key={item.name}
              name={item.name}
              platformMark={{
                src: "/assets/platforms/wordpress-woocommerce-white.svg",
                width: 113,
                height: 29,
              }}
            />
          ))}
        </div>

        <div className="mt-[55px] text-center max-[767px]:mt-[40px]">
          <ButtonLink href="/our-work" variant="primary">
            View our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
