import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Container } from "@/components/ui/container";
import { homeSectionCopy } from "@/content/home";

export function TestimonialsSection() {
  return (
    <section className="bg-cream py-[60px] max-[767px]:py-[50px]">
      <Container>
        <div className="mb-[42px] max-w-[650px] max-[767px]:max-w-none">
          <h2 className="mb-6 text-[43px] leading-[normal] font-medium min-[768px]:max-[991px]:text-[43px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[1.2]">{homeSectionCopy.testimonialsTitle}</h2>
          <p className="text-base leading-[1.9] font-semibold max-[767px]:text-sm">
            {homeSectionCopy.testimonialsDescription}
          </p>
        </div>
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
