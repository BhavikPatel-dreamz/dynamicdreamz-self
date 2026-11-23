import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { formatBrText } from "@/lib/text-formatting";

export type ShopifyAppProcessStep = {
  icon?: string;
  iconAlt?: string;
  title: string | readonly string[];
  description: string | readonly string[];
};

export type ShopifyAppProcessSectionProps = {
  content: {
    eyebrow?: string;
    heading: string | readonly string[];
    steps: readonly ShopifyAppProcessStep[];
  };
  className?: string;
};

export function ShopifyAppProcessSection({
  content,
  className = "how-app-work-sec overflow-hidden pt-[120px] pb-[75px] max-[1200px]:pt-[60px] max-[1200px]:pb-[80px] max-[768px]:py-[40px]",
}: ShopifyAppProcessSectionProps) {
  return (
    <section className={className} data-section="how-it-works" id="how-it-works">
      <Container>
        <SplitSectionHeading
          className="mb-[90px] max-[1200px]:mb-[50px] max-[992px]:mb-[30px]"
          eyebrow={content.eyebrow}
          heading={content.heading}
          headingBrClassName="max-[389px]:hidden"
          preserveBreaks
          variant="centered"
        />

        <div
          data-aos="fade-up"
          className="wrapper relative flex flex-wrap pl-[10px] max-[768px]:flex-col max-[768px]:p-0 after:absolute after:inset-x-0 after:top-0 after:h-[340px] max-[992px]:after:h-[170px] after:-z-1 after:bg-[url('/assets/services/shopify-mobile-app-development/process/curv_shape_bg.svg')] after:bg-contain after:bg-center after:bg-no-repeat max-[768px]:after:h-[calc(100%+20px)] max-[768px]:after:bg-[url('/assets/services/shopify-mobile-app-development/process/mbl_curv_shape_bg.svg')] max-[768px]:after:bg-[length:100%_100%]"
        >
          {content.steps.map((step) => (
            <div
              data-aos="fade-up"
              className="col-block w-1/4 max-[768px]:w-full"
              key={typeof step.title === "string" ? step.title : step.title.join(" ")}
            >
              <div className="app-text px-[25px] py-[60px] max-[1200px]:pt-[50px] max-[1200px]:px-[20px] max-[1200px]:pb-[40px] max-[992px]:pt-[20px] max-[992px]:pr-[18px] max-[992px]:pb-[10px] max-[992px]:pl-[14px] max-[768px]:max-w-[230px] max-[768px]:mx-auto max-[768px]:pt-[40px] max-[768px]:px-0 max-[768px]:pb-[20px] max-[360px]:pt-[25px] max-[360px]:pb-[30px]">
                {step.icon && step.iconAlt ? (
                  <div className="icon mb-[20px] flex size-[66px] items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white max-[1200px]:size-[50px] max-[1200px]:mb-[10px] max-[992px]:size-[35px] max-[992px]:mb-[5px] max-[992px]:rounded-[6px] max-[768px]:size-[65px] max-[768px]:mb-[15px] max-[768px]:rounded-[12px] max-[390px]:size-[55px] max-[390px]:mb-[10px] max-[360px]:size-[45px] max-[360px]:mb-[5px]">
                    <Image
                      alt={step.iconAlt}
                      className="h-auto w-[36px] max-[1200px]:w-[25px] max-[768px]:w-[36px] max-[390px]:w-[30px] max-[360px]:w-[25px]"
                      height={36}
                      src={step.icon}
                      width={36}
                    />
                  </div>
                ) : null}
                <h3 className="mb-[5px] font-display text-[20px] font-medium leading-[26.72px] text-ink max-[1200px]:text-[14px] max-[1200px]:leading-normal max-[992px]:text-[12px] max-[768px]:text-[14px] max-[768px]:leading-[26.72px]">
                  {formatBrText(step.title)}
                </h3>
                <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353] max-[1200px]:text-[14px] max-[1200px]:leading-[24px] max-[992px]:text-[12px] max-[992px]:leading-[22px] max-[768px]:text-[14px] max-[768px]:leading-[26px]">
                  {formatBrText(step.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
