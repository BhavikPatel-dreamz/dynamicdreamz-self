import { LazyTestimonialCarousel } from "@/components/sections/home/lazy-testimonial-carousel";
import { TestimonialCarouselPlaceholder } from "@/components/sections/home/testimonial-carousel-placeholder";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
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
        <SplitSectionHeading
          className="gap-8 max-[1199px]:mb-8 max-[992px]:mb-[30px] max-[992px]:gap-0"
          description={description}
          heading={title}
          headingId="testimonials-title"
          titleColumnClassName="w-[44%] max-[1199px]:max-w-[400px] max-[992px]:w-full max-[992px]:max-w-full max-[992px]:mb-2.5"
          textColumnClassName="w-[48.3%] max-[1199px]:w-1/2 max-[1199px]:max-w-[430px] max-[992px]:w-full max-[992px]:max-w-full"
          pClassName="max-[1199px]:text-[14px] max-[1199px]:leading-[24px] max-[767px]:leading-[1.8]"
          titleClassName="max-[1199px]:text-[35px] max-[1199px]:leading-[48.475px] max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px] max-[767px]:mb-4"
          variant="left"
        />
        <div data-aos="fade-up" className="brand_testimonial_slider_wrap">
          <LazyTestimonialCarousel fallback={<TestimonialCarouselPlaceholder />} />
        </div>
      </Container>
    </section>
  );
}
