import Image from "next/image";
import { Container } from "@/components/ui/container";
import { formatBrText } from "@/lib/text-formatting";

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
  className = "benefit_box_sec pb-20 max-[767px]:pb-[50px]",
  id = "benefits",
}: ShopifyAppBenefitsSectionProps) {
  const isJustifyLeft = className.includes("justify-left");
  const isFourColumn = className.includes("four-column") || content.items.length === 4;

  return (
    <section className={className} data-section="benefits" id={id}>
      <Container>
        <div className="title-with-text mb-[50px] text-center max-[767px]:mb-[30px]">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading)}
          </h2>
          {content.description && (
            <p className="mx-auto mt-4 max-w-[950px] font-sans text-base font-medium leading-[27.2px] text-[#535353] max-[767px]:text-sm">
              {formatBrText(content.description)}
            </p>
          )}
        </div>
        <div className="benefit_box_main">
          <div
            className={`wrapper -mx-[7.5px] -mb-[15px] flex flex-wrap ${
              isJustifyLeft ? "justify-start max-[992px]:justify-center" : "justify-center"
            }`}
          >
            {content.items.map((item, idx) => (
              <div
                className={`benefit_box mb-[15px] px-[7.5px] max-[767px]:w-full ${
                  isFourColumn ? "w-1/4 max-[1199px]:w-1/2" : "w-1/3 max-[992px]:w-1/2"
                }`}
                key={item.title ?? idx}
              >
                <div className="benefit_text group relative z-0 h-full rounded-[10px] border border-[#d9d9d9] p-[30px_30px_55px_30px] transition-all duration-300 hover:border-transparent hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] max-[767px]:p-[30px_20px] before:pointer-events-none before:absolute before:-inset-[2px] before:-z-20 before:block before:rounded-[10px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-all before:duration-300 before:ease-in-out hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-[9px] after:bg-white">
                  <div className="icon mb-[30px] h-[50px] w-[50px] max-[767px]:mb-5">
                    <Image
                      alt={item.iconAlt}
                      className="size-full object-contain"
                      height={50}
                      src={item.icon}
                      width={50}
                    />
                  </div>
                  {item.title && (
                    <h3 className="mb-[15px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                      {item.title}
                    </h3>
                  )}
                  <p
                    className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]"
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
