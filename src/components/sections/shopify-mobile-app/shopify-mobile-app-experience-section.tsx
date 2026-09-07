import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import type { shopifyMobileAppExperience } from "@/content/shopify-mobile-app-development";

type ShopifyMobileAppExperienceSectionProps = {
  content: typeof shopifyMobileAppExperience;
};

export function ShopifyMobileAppExperienceSection({
  content,
}: ShopifyMobileAppExperienceSectionProps) {
  return (
    <section className="mobile-shopping-eperience-sec bg-[#FAFAF7] py-20 max-[991px]:py-[50px]">
      <Container>
        <SplitSectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="mb-[50px] max-[767px]:mb-[30px]"
        />

        <div className="wrapper flex flex-wrap -mx-[10px] -mb-5">
          {content.moments.map((item) => (
            <div
              key={item.step}
              className="eperience-col w-1/4 px-[10px] mb-5 max-[1199px]:w-1/2 max-[767px]:w-full"
            >
              <div className="eperience-box flex h-full flex-col justify-start rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[35px_25px] max-[1399px]:p-[30px_20px]">
                <span className="mb-[15px] block font-montserrat text-[13px] font-bold uppercase leading-5 text-[#ad5151] max-[767px]:mb-2.5">
                  {item.step}
                </span>
                <h3 className="mb-[15px] font-montreal-medium text-[20px] font-medium leading-7 text-[#282828] max-[1399px]:text-[18px] max-[1399px]:leading-[26px] max-[767px]:mb-2.5">
                  {item.title}
                </h3>
                <p className="font-sans text-[15px] font-medium leading-[26px] text-[#535353]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

