import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-[60px] max-[767px]:py-[50px]">
      <Container>
        <div className="mb-[42px] max-w-[650px] max-[767px]:max-w-none">
          <SectionHeading className="mb-6 max-[767px]:mb-4">{homeSectionCopy.testimonialsTitle}</SectionHeading>
          <p className="text-base leading-[1.9] font-semibold max-[767px]:text-sm">
            {homeSectionCopy.testimonialsDescription}
          </p>
        </div>
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
