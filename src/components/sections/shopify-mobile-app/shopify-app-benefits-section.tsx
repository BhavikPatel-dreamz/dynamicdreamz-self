import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

export type ShopifyAppBenefitItem = {
  icon: string;
  iconAlt: string;
  title?: string;
  description: string;
};

export type ShopifyAppBenefitsSectionProps = {
  content: {
    heading: string;
    description?: string;
    items: readonly ShopifyAppBenefitItem[];
  };
  className?: string;
  id?: string;
};

export function ShopifyAppBenefitsSection({
  content,
  className = "benefit_box_sec pb-20 max-[767px]:pb-12.5",
  id = "benefits",
}: ShopifyAppBenefitsSectionProps) {
  const isJustifyLeft = className.includes("justify-left");
  const isFourColumn = className.includes("four-column") || content.items.length === 4;

  return (
    <section className={className} data-section="benefits" id={id}>
      <Container>
        <SplitSectionHeading
          variant="centered"
          className="mb-12.5 max-[767px]:mb-7.5"
          heading={content.heading}
          description={content.description}
        />
        <div className="benefit_box_main">
          <div
            className={`wrapper mx-[-7.5px] -mb-3.75 flex flex-wrap ${
              isJustifyLeft ? "justify-start max-[992px]:justify-center" : "justify-center"
            }`}
          >
            {content.items.map((item, idx) => (
              <div
                className={`benefit_box mb-3.75 px-[7.5px] max-[767px]:w-full ${
                  isFourColumn ? "w-1/4 max-[1199px]:w-1/2" : "w-1/3 max-[992px]:w-1/2"
                }`}
                key={item.title ?? idx}
              >
                <div className="benefit_text group relative z-0 h-full rounded-[10px] border border-[#d9d9d9] p-[30px_30px_55px_30px] transition-all duration-300 hover:border-transparent hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] max-[767px]:p-[30px_20px] before:pointer-events-none before:absolute before:-inset-0.5 before:-z-20 before:block before:rounded-[10px] before:bg-linear-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-white">
                  <div className="icon mb-7.5 h-12.5 w-12.5 max-[767px]:mb-5">
                    <Image
                      alt={item.iconAlt}
                      className="size-full object-contain"
                      height={50}
                      src={item.icon}
                      width={50}
                    />
                  </div>
                  {item.title && (
                    <h3 className="mb-3.75 font-montreal-medium text-[16px] font-medium leading-[26.72px] tracking-[0.32px] text-ink">
                      {item.title}
                    </h3>
                  )}
                  <p
                    className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-muted"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
