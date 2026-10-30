import Image from "next/image";
import { Container } from "@/components/ui/container";
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
  className = "how-app-work-sec overflow-hidden pt-[120px] pb-[75px] max-[991px]:pt-[60px] max-[991px]:pb-[80px] max-[767px]:py-[40px]",
}: ShopifyAppProcessSectionProps) {
  return (
    <section className={className} data-section="how-it-works" id="how-it-works">
      <Container>
        <div data-aos="fade-up" className="heading-text mb-[90px] text-center max-[991px]:mb-[50px] max-[767px]:mb-[30px]">
          <h2 className="font-display text-[35px] font-medium leading-[48.475px] tracking-[-0.7px] text-ink max-[992px]:text-[30px] max-[992px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {formatBrText(content.heading)}
          </h2>
        </div>

        <div
          data-aos="fade-up"
          className="wrapper relative flex flex-wrap pl-[10px] max-[767px]:flex-col max-[767px]:p-0 after:absolute after:inset-x-0 after:top-0 after:h-[340px] after:-z-1 after:bg-[url('/assets/services/shopify-mobile-app-development/process/curv_shape_bg.svg')] after:bg-contain after:bg-center after:bg-no-repeat max-[767px]:after:h-[calc(100%+20px)] max-[767px]:after:bg-[url('/assets/services/shopify-mobile-app-development/process/mbl_curv_shape_bg.svg')] max-[767px]:after:bg-[length:100%_100%]"
        >
          {content.steps.map((step) => (
            <div
              data-aos="fade-up"
              className="col-block w-1/4 max-[767px]:w-full"
              key={typeof step.title === "string" ? step.title : step.title.join(" ")}
            >
              <div className="app-text px-[25px] py-[60px] max-[991px]:px-3 max-[991px]:py-[30px] max-[767px]:max-w-[230px] max-[767px]:mx-auto max-[767px]:text-center max-[767px]:px-0 max-[767px]:py-[35px]">
                {step.icon && step.iconAlt ? (
                  <div className="icon mb-[20px] flex h-[66px] w-[66px] items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef] bg-white max-[767px]:mx-auto max-[767px]:mb-3.5 max-[767px]:size-[65px]">
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
