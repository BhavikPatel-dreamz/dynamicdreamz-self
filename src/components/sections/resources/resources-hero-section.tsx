import { Container } from "@/components/ui/container";
import { resourcesHero } from "@/content/resources";

export type ResourcesHeroSectionProps = {
  title?: string;
  description?: string | readonly string[];
};

export function ResourcesHeroSection({
  title = resourcesHero.title,
  description = resourcesHero.description,
}: ResourcesHeroSectionProps = {}) {
  return (
    <section className="inner-hero-sec pt-[210px] max-[992px]:pt-[140px]" aria-labelledby="resources-title">
      <Container>
        <div className="inner-hero-content text-center">
          <h1 id="resources-title" className="mb-3 text-[50px] leading-[60px] font-normal tracking-normal text-ink max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[768px]:text-[30px] max-[768px]:leading-10">{title}</h1>
          <p className="text-muted max-[992px]:text-[16px] max-[992px]:leading-[30.4px]">{description}</p>
        </div>
      </Container>
    </section>
  );
}
