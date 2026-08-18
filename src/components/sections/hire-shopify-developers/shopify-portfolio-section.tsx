import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { PortfolioProjectCard } from "@/components/ui/portfolio-project-card";
import { hireShopifyPortfolio } from "@/content/hire-shopify-developers";

export function ShopifyPortfolioSection() {
  return (
    <section className="py-20 max-[767px]:py-[60px]" data-section="portfolio" id="shopify-portfolio">
      <Container>
        <div className="text-center">
          <h2 className="font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">Work of our Shopify Developers<br className="max-[767px]:hidden" /> that show our Expertise</h2>
          <p className="mx-auto mt-2.5 max-w-[680px] text-[18px] leading-[34.2px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">We are sure you would like to hear to what our clients says about our Shopify development.</p>
        </div>

        <div className="mt-[42px] grid grid-cols-3 gap-x-[15px] gap-y-[60px] max-[991px]:grid-cols-2 max-[991px]:gap-y-[30px] max-[767px]:mt-[30px] max-[767px]:grid-cols-1">
          {hireShopifyPortfolio.map((item) => (
            <PortfolioProjectCard category="SHOPIFY" eagerImage href={item.href} image={item.image} imageAlt={item.imageAlt} key={item.name} name={item.name} platformMark={{ src: "/assets/platforms/shopify-white.svg", width: 89, height: 26 }} />
          ))}
        </div>

        <div className="mt-[51px] text-center"><ButtonLink href="/our-work" variant="primary">View our work</ButtonLink></div>
      </Container>
    </section>
  );
}
