import { Container } from "@/components/ui/container";
import { careerHero } from "@/content/career";

export function CareerHeroSection() {
  return (
    <section
      data-career="hero"
      className="overflow-hidden bg-white pt-[230px] pb-[55px] max-[1199px]:pb-0 max-[992px]:pt-[140px]"
    >
      <Container>
        <div className="text-center">
          <h1 className="mb-6 inline-block text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[992px]:text-[40px] max-[992px]:leading-[60px] max-[767px]:text-[30px] max-[767px]:leading-10">
            {careerHero.title}
          </h1>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[992px]:text-base max-[992px]:leading-[30.4px]">
            {careerHero.descriptionBeforeBreak}
            <br className="max-[992px]:hidden" /> {careerHero.descriptionAfterBreak}
          </p>
        </div>
      </Container>
    </section>
  );
}
