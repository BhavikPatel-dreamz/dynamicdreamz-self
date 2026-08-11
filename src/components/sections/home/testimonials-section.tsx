import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import { Container } from "@/components/ui/container";

export function TestimonialsSection() {
  return (
    <section className="min-h-[907px] bg-cream py-[60px] min-[768px]:max-[991px]:min-h-[1217.34px] max-[767px]:min-h-[1179px] max-[767px]:py-[50px]">
      <Container>
        <div className="mb-[42px] max-w-[650px] max-[767px]:max-w-none">
          <h2 className="mb-6 text-[43px] leading-[normal] font-medium min-[768px]:max-[991px]:text-[43px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[1.2]">Brands That Have Grown With Us</h2>
          <p className="text-base leading-[1.9] font-semibold max-[767px]:text-sm">
            Hear from founders, ecommerce teams and agency partners who rely on Dynamic Dreamz for Shopify builds, migrations, mobile apps, ongoing development and long-term technical support.
          </p>
        </div>
        <TestimonialCarousel />
      </Container>
    </section>
  );
}
