import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { hireWordPressFaqs } from "@/content/hire-wordpress-developers";

export function WordPressFaqSection() {
  return (
    <section className="pb-20 max-[767px]:pb-[60px]" data-section="faq">
      <Container>
        <h2 className="mb-[50px] text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:mb-[30px] max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
          Frequently Asked Questions
        </h2>
        <FaqAccordion
          answerClassName="!font-medium !leading-8 max-[1199px]:!leading-[26px]"
          idPrefix="hire-wordpress-developers-faq"
          items={hireWordPressFaqs}
          questionClassName="!text-lg !leading-[28.8px] max-[1199px]:!text-base"
        />
      </Container>
    </section>
  );
}
