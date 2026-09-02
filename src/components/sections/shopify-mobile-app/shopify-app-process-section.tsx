import Image from "next/image";
import { Container } from "@/components/ui/container";

export type ShopifyAppProcessStep = {
  icon?: string;
  iconAlt?: string;
  title: string;
  description: string;
};

export type ShopifyAppProcessSectionProps = {
  content: {
    heading: string;
    steps: readonly ShopifyAppProcessStep[];
  };
  className?: string;
};

export function ShopifyAppProcessSection({
  content,
  className = "how-app-work-sec overflow-hidden pt-[120px] pb-[75px] max-[992px]:pt-[60px] max-[992px]:pb-[80px]",
}: ShopifyAppProcessSectionProps) {
  return (
    <section className={className} data-section="how-it-works" id="how-it-works">
      <Container>
        <div className="heading-text mb-[90px] text-center max-[992px]:mb-[50px]">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading.includes("<br/>") || content.heading.includes("<br>")
              ? content.heading
                  .replace("<br/>", "<br>")
                  .split("<br>")
                  .map((line, index, lines) => (
                    <span key={line}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))
              : content.heading}
          </h2>
        </div>

        <div className="wrapper relative flex flex-wrap pl-[10px] max-[992px]:flex-col max-[992px]:p-0 after:absolute after:inset-x-0 after:top-0 after:h-[287px] after:-z-1 after:bg-[url('/assets/services/shopify-mobile-app-development/process/curv_shape_bg.svg')] after:bg-contain after:bg-center after:bg-no-repeat max-[992px]:after:h-[calc(100%+20px)] max-[992px]:after:bg-[url('/assets/services/shopify-mobile-app-development/process/mbl_curv_shape_bg.svg')] max-[992px]:after:bg-[length:100%_100%]">
          {content.steps.map((step) => (
            <div
              className="col-block w-1/4 max-[992px]:w-full"
              key={step.title}
            >
              <div className="app-text px-[25px] py-[60px] max-[992px]:px-0 max-[992px]:py-[30px]">
                {step.icon && step.iconAlt ? (
                  <div className="icon mb-[20px] flex h-[66px] w-[66px] items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white">
                    <Image
                      alt={step.iconAlt}
                      height={36}
                      src={step.icon}
                      width={36}
                    />
                  </div>
                ) : null}
                <h3 className="mb-[5px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                  {step.title}
                </h3>
                <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
