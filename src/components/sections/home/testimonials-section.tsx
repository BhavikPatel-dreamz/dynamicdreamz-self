import { LazyTestimonialCarousel } from "@/components/sections/home/lazy-testimonial-carousel";
import { TestimonialCarouselPlaceholder } from "@/components/sections/home/testimonial-carousel-placeholder";
import { Container } from "@/components/ui/container";
import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeSectionCopy } from "@/content/home";

export type TestimonialsSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function TestimonialsSection({
  title = homeSectionCopy.testimonialsTitle,
  description = homeSectionCopy.testimonialsDescription,
}: TestimonialsSectionProps = {}) {
  return (
    <section className="bg-cream py-[60px] max-[767px]:py-[50px]" aria-labelledby="testimonials-title">
      <Container>

        <div
          data-aos="fade-up"
          className="section_title_with_eyebrow mb-10 flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-5 max-[992px]:gap-0"
        >
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            <SectionHeading id="testimonials-title" className="m-0">
              {title}
            </SectionHeading>
          </div>
          <SectionDescription className="w-[48%] max-[1199px]:w-full">
            {description}
          </SectionDescription>
        </div>
        <div data-aos="fade-up" className="brand_testimonial_slider_wrap">
          <LazyTestimonialCarousel fallback={<TestimonialCarouselPlaceholder />} />
        </div>
      </Container>
    </section>
  );
}
