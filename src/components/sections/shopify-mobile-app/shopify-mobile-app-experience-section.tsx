import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

import { cn } from "@/lib/class-names";

export type ShopifyMobileAppMoment = {
  step: string;
  title: string;
  description: string;
};

export type ShopifyMobileAppExperienceContent = {
  eyebrow?: string;
  heading: string | readonly string[];
  description: string | readonly string[];
  moments: readonly ShopifyMobileAppMoment[];
};

export type ShopifyMobileAppExperienceSectionProps = {
  content: ShopifyMobileAppExperienceContent;
  id?: string;
  columns?: 3 | 4;
  className?: string;
};

export function ShopifyMobileAppExperienceSection({
  content,
  id = "shopping_eperience",
  columns = 4,
  className,
}: ShopifyMobileAppExperienceSectionProps) {
  const isThreeCol = columns === 3;

  return (
    <section
      id={id}
      className={cn(
        "mobile-shopping-eperience-sec bg-[#FAFAF7] py-20 max-[992px]:py-15 max-[768px]:py-10",
        className
      )}
    >
      <Container variant="wide">
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          className="mb-[50px]"
        />

        <div
          data-aos="fade-up"
          className={cn(
            "wrapper flex flex-wrap -mx-[10px] -mb-5",
            isThreeCol && "three-col"
          )}
        >
          {content.moments.map((item) => (
            <div
              key={item.step}
              data-aos="fade-up"
              className={cn(
                "eperience-col px-[10px] mb-5 max-[1200px]:w-1/2 max-[768px]:w-full",
                isThreeCol ? "w-1/3" : "w-1/4"
              )}
            >
              <div className="eperience-box flex h-full flex-col justify-start rounded-[20px] border border-[rgba(40,40,40,0.10)] bg-white p-[35px_25px] max-[1400px]:p-[30px_20px]">
                <span className="mb-[15px] block font-montserrat text-[13px] font-bold uppercase leading-5 text-[#ad5151] max-[768px]:mb-2.5">
                  {item.step}
                </span>
                <h3 className="mb-[15px] font-montreal-medium text-[20px] font-medium leading-7 text-[#282828] max-[1400px]:text-[18px] max-[1400px]:leading-[26px] max-[768px]:mb-2.5">
                  {item.title}
                </h3>
                <p className="font-sans text-[14px] font-small leading-[26px] text-[#535353]">
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

