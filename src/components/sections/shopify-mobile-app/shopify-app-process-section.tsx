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
  className = "how-app-work-sec overflow-hidden pt-[120px] pb-[75px] max-[992px]:pt-[60px] max-[992px]:pb-[80px] max-[768px]:py-[40px]",
}: ShopifyAppProcessSectionProps) {
  return (
    <section className={className} data-section="how-it-works" id="how-it-works">
      <Container>
        <SplitSectionHeading
          className="mb-[90px] max-[992px]:mb-[50px] max-[768px]:mb-[30px]"
          eyebrow={content.eyebrow}
          heading={content.heading}
          variant="centered"
        />

        <div
          data-aos="fade-up"
          className="wrapper relative flex flex-wrap pl-[10px] max-[768px]:flex-col max-[768px]:p-0 after:absolute after:inset-x-0 after:top-0 after:h-[340px] after:-z-1 after:bg-[url('/assets/services/shopify-mobile-app-development/process/curv_shape_bg.svg')] after:bg-contain after:bg-center after:bg-no-repeat max-[768px]:after:h-[calc(100%+20px)] max-[768px]:after:bg-[url('/assets/services/shopify-mobile-app-development/process/mbl_curv_shape_bg.svg')] max-[768px]:after:bg-[length:100%_100%]"
        >
          {content.steps.map((step) => (
            <div
              data-aos="fade-up"
              className="col-block w-1/4 max-[768px]:w-full"
              key={typeof step.title === "string" ? step.title : step.title.join(" ")}
            >
              <div className="app-text px-[25px] py-[60px] max-[992px]:px-3 max-[992px]:py-[30px] max-[768px]:max-w-[230px] max-[768px]:mx-auto max-[768px]:text-center max-[768px]:px-0 max-[768px]:py-[35px]">
                {step.icon && step.iconAlt ? (
                  <div className="icon mb-[20px] flex h-[66px] w-[66px] items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white max-[768px]:mx-auto max-[768px]:mb-3.5 max-[768px]:size-[65px]">
                    <Image
                      alt={step.iconAlt}
                      height={36}
                      src={step.icon}
                      width={36}
                    />
                  </div>
                ) : null}
                <h3 className="mb-[5px] font-display text-[20px] font-medium leading-[26.72px] text-ink">
                  {formatBrText(step.title)}
                </h3>
                <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
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
