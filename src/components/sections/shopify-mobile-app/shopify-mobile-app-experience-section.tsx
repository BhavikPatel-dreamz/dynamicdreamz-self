import { Container } from "@/components/ui/container";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";

import { cn } from "@/lib/class-names";

export type ShopifyMobileAppMoment = {
  step: string;
  title: string;
  description: string;
  points?: readonly string[];
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
        "mobile-shopping-eperience-sec bg-[#FAFAF7] py-20 max-[992px]:py-15 max-[768px]:py-[50px]",
        className
      )}
    >
      <Container>
        <SplitSectionHeading
          variant="services"
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
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
                <h3 className="mb-[15px] font-montreal-medium text-[20px] font-medium leading-[28.8px] text-[#282828] max-[1400px]:text-[18px] max-[1400px]:leading-[26px] max-[768px]:mb-2.5">
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "font-sans text-sm font-normal leading-6 text-[#535353]",
                    item.points && item.points.length > 0 && "mb-[15px]"
                  )}
                >
                  {item.description}
                </p>
                {item.points && item.points.length > 0 ? (
                  <ul className="m-0 list-none p-0 space-y-[15px]">
                    {item.points.map((pt) => (
                      <li
                        key={pt}
                        className="relative pl-[28px] font-sans text-sm font-normal leading-[18px] text-[#535353]"
                      >
                        <svg
                          aria-hidden="true"
                          className="absolute left-0 top-0.5 size-[18px] shrink-0"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M10.5 0.288675C10.8094 0.110043 11.1906 0.110042 11.5 0.288675L20.0263 5.21132C20.3357 5.38996 20.5263 5.72008 20.5263 6.07735V15.9226C20.5263 16.2799 20.3357 16.61 20.0263 16.7887L11.5 21.7113C11.1906 21.89 10.8094 21.89 10.5 21.7113L1.97372 16.7887C1.66432 16.61 1.47372 16.2799 1.47372 15.9226V6.07735C1.47372 5.72009 1.66432 5.38996 1.97372 5.21132L10.5 0.288675Z"
                            fill="#ad5151"
                          />
                          <path
                            d="M14.4949 7.24637C14.6622 7.0866 14.8849 6.99827 15.1159 7.00003C15.3469 7.00178 15.5682 7.09347 15.7331 7.25576C15.898 7.41806 15.9936 7.63824 15.9997 7.86987C16.0058 8.1015 15.9219 8.32644 15.7658 8.49724L10.7092 14.7144C10.6277 14.8025 10.5294 14.8731 10.42 14.9222C10.3107 14.9712 10.1926 14.9976 10.0729 14.9998C9.95312 15.0021 9.83415 14.9801 9.72308 14.9351C9.61201 14.8902 9.51111 14.8232 9.42642 14.7383L6.28353 11.5861C6.19601 11.5043 6.12581 11.4056 6.07712 11.296C6.02843 11.1864 6.00225 11.0681 6.00014 10.9481C5.99803 10.8282 6.02003 10.709 6.06484 10.5977C6.10964 10.4865 6.17633 10.3854 6.26092 10.3006C6.34551 10.2157 6.44628 10.1489 6.5572 10.1039C6.66813 10.059 6.78694 10.0369 6.90656 10.039C7.02617 10.0411 7.14413 10.0674 7.25341 10.1162C7.36268 10.1651 7.46103 10.2355 7.54259 10.3233L10.0298 12.8167L14.4723 7.27258L14.4949 7.24637Z"
                            fill="white"
                          />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

