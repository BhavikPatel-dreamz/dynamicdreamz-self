import Image from "next/image";
import { Container } from "@/components/ui/container";

export type ShopifyAppFeatureItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

export type ShopifyAppFeaturesSectionProps = {
  content: {
    heading: string;
    centerImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    leftFeatures: readonly ShopifyAppFeatureItem[];
    rightFeatures: readonly ShopifyAppFeatureItem[];
  };
  className?: string;
};

export function ShopifyAppFeaturesSection({
  content,
  className = "shopify-app-features-sec pt-[25px] pb-0 max-[767px]:pt-0",
}: ShopifyAppFeaturesSectionProps) {
  return (
    <section className={className} data-section="features" id="features">
      <Container>
        <div className="heading-text mb-[87px] text-center max-[767px]:mb-[25px]">
          <h2 className="font-sans text-[35px] font-bold leading-[48.475px] tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]">
            {content.heading}
          </h2>
        </div>

        <div className="wrapper -mx-[25px] flex flex-wrap items-center max-[1199px]:-mx-[15px] max-[991px]:-mx-[12px] max-[767px]:mx-0">
          {/* Left column */}
          <div className="features-col-1 w-[32.19%] px-[25px] max-[1199px]:w-[34%] max-[1199px]:px-[15px] max-[991px]:w-[36%] max-[991px]:px-[12px] max-[767px]:order-2 max-[767px]:w-full max-[767px]:px-0">
            <div className="features-text">
              <ul className="m-0 list-none p-0">
                {content.leftFeatures.map((item, idx) => (
                  <li
                    className={`flex py-[40px] ${idx === 0 ? "pt-0" : ""} ${idx !== content.leftFeatures.length - 1 ? "border-b border-[#efefef]" : "max-[767px]:border-b max-[767px]:border-[#efefef]"}`}
                    key={item.title}
                  >
                    <span className="icon mr-[30px] flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef]">
                      <Image
                        alt={item.iconAlt}
                        height={36}
                        src={item.icon}
                        width={36}
                      />
                    </span>
                    <div className="text w-[calc(100%-96px)]">
                      <h3 className="mb-[10px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center Column */}
          <div className="features-col-2 w-[35.6%] px-[25px] text-center max-[1199px]:w-[32%] max-[1199px]:px-[15px] max-[991px]:w-[28%] max-[991px]:px-[12px] max-[767px]:order-1 max-[767px]:mb-8 max-[767px]:w-full max-[767px]:px-0">
            <div className="features-img inline-block">
              <Image
                alt={content.centerImage.alt}
                className="mx-auto h-auto max-w-full"
                height={content.centerImage.height}
                src={content.centerImage.src}
                width={content.centerImage.width}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="features-col-3 w-[32.19%] px-[25px] max-[1199px]:w-[34%] max-[1199px]:px-[15px] max-[991px]:w-[36%] max-[991px]:px-[12px] max-[767px]:order-3 max-[767px]:w-full max-[767px]:px-0">
            <div className="features-text">
              <ul className="m-0 list-none p-0">
                {content.rightFeatures.map((item, idx) => (
                  <li
                    className={`flex py-[40px] ${idx === 0 ? "pt-0 max-[767px]:pt-[40px]" : ""} ${idx !== content.rightFeatures.length - 1 ? "border-b border-[#efefef]" : ""}`}
                    key={item.title}
                  >
                    <span className="icon mr-[30px] flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[12px] border-[1.5px] border-[#efefef]">
                      <Image
                        alt={item.iconAlt}
                        height={36}
                        src={item.icon}
                        width={36}
                      />
                    </span>
                    <div className="text w-[calc(100%-96px)]">
                      <h3 className="mb-[10px] font-sans text-[16px] font-bold leading-[26.72px] tracking-[0.32px] text-ink">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[16px] font-medium leading-[27.2px] tracking-[0.32px] text-[#535353]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
