import { LifeFaqAccordion } from "@/components/sections/life-dynamicdreamz/life-faq-accordion";
import { Container } from "@/components/ui/container";
import { lifeFaqSection } from "@/content/life-dynamicdreamz";

export function LifeFaqSection() {
  return (
    <section
      className="pt-0 pb-20 max-[991px]:pb-[50px]"
      data-life="faq"
      aria-labelledby="life-faq-title"
    >
      <Container className="min-[1200px]:!max-w-[1180px] min-[1440px]:!max-w-[1180px]">
        <header className="mx-auto mb-16 max-w-[470px] text-center max-[1199px]:mb-[30px]">
          <h2
            className="mb-6 text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:tracking-[-0.48px]"
            id="life-faq-title"
          >
            {lifeFaqSection.title}
          </h2>
          <p className="text-[18px] leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">
            {lifeFaqSection.description}
          </p>
        </header>

        <LifeFaqAccordion items={lifeFaqSection.items} />
      </Container>
    </section>
  );
}
