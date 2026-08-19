import Image from "next/image";
import { Container } from "@/components/ui/container";

export type ShopifyAppBenefitItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type ShopifyAppBenefitsSectionProps = {
  content: {
    heading: string;
    items: readonly ShopifyAppBenefitItem[];
  };
  className?: string;
};

export function ShopifyAppBenefitsSection({
  content,
  className = "benefit_box_sec pb-20 max-[767px]:pb-[50px]",
}: ShopifyAppBenefitsSectionProps) {
  return (
    <section className={className} data-section="benefits" id="benefits">
      <Container>
        <div className="title-with-text mb-[50px] text-center">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
        </div>
        <div className="benefit_box_main">
          <div className="wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap justify-center">
            {content.items.map((item) => (
              <div
                className="benefit_box mb-[15px] w-1/3 px-[7.5px] max-[991px]:w-1/2 max-[767px]:w-full"
                key={item.title}
              >
                <div className="benefit_text group relative h-full rounded-[10px] border border-[#d9d9d9] bg-white p-[30px_30px_55px_30px] transition-all duration-300 hover:border-transparent hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] before:absolute before:-inset-[2px] before:-z-1 before:rounded-[10px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-all before:duration-300 hover:before:opacity-100">
                  <div className="icon mb-[30px] h-[50px] w-[50px]">
                    <Image
                      alt={item.iconAlt}
                      className="size-full object-contain"
                      height={50}
                      src={item.icon}
                      width={50}
                    />
                  </div>
                  <h3 className="mb-[15px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
