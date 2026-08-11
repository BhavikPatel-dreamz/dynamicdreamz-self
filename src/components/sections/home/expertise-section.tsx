import { ExpertiseAccordion } from "@/components/sections/expertise-accordion";
import { Container } from "@/components/ui/container";

export function ExpertiseSection() {
  return (
    <section className="pt-20 pb-[74px] min-[768px]:max-[991px]:py-[50px] max-[767px]:min-h-[1071.67px] max-[767px]:py-[50px]">
      <Container className="flex justify-between max-[991px]:flex-col max-[991px]:items-start">
        <div className="mr-[105px] w-[41%] max-[1199px]:mr-[60px] max-[991px]:mr-0 max-[991px]:w-full">
          <h2 className="text-[35px] leading-[1.385] font-medium min-[768px]:max-[991px]:mb-4 min-[768px]:max-[991px]:text-[30px] min-[768px]:max-[991px]:leading-10 min-[768px]:max-[991px]:tracking-[-0.7px] max-[767px]:mb-4 max-[767px]:text-2xl max-[767px]:leading-[1.2]">Our Expertise</h2>
          <p className="text-base leading-[1.9] font-semibold text-muted max-[767px]:text-sm">
            From strategy and design to development and long-term support, we help brands build, scale, and maintain high-performing digital products. Our expertise spans Shopify development, custom websites, and mobile applications, with a strong focus on performance, usability, and business growth.
          </p>
          <p className="mt-8 text-base leading-[1.9] font-semibold text-muted max-[767px]:mt-7 max-[767px]:text-sm">
            To accelerate delivery without compromising quality, our teams use modern AI-powered tools such as Cursor, ChatGPT, Claude, Lovable, Bolt, and n8n, alongside proven development processes.
          </p>
        </div>
        <ExpertiseAccordion />
      </Container>
    </section>
  );
}
