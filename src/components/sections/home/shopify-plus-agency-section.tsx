import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionDescription } from "@/components/ui/section-description";
import { SectionHeading } from "@/components/ui/section-heading";
import { shopifyPlusAgencyContent } from "@/content/home";

const counterToneClasses = {
  green: "bg-[#eff4ef]",
  stone: "bg-[#f4f2ef]",
  peach: "bg-[#f6eee5]",
  lime: "bg-[#f0f6e5]",
} as const;

export function ShopifyPlusAgencySection() {
  return (
    <section className="bg-[#fbeed5] py-[43px] max-[992px]:py-[30px]" aria-labelledby="shopify-plus-agency-title">
      <Container>
        <div className="section_title_with_eyebrow  mb-10 flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-5 max-[992px]:gap-0">
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            <Eyebrow as="span" className="mb-4">
              {shopifyPlusAgencyContent.eyebrow}
            </Eyebrow>
            <SectionHeading id="shopify-plus-agency-title" className="m-0">
              {shopifyPlusAgencyContent.title}
            </SectionHeading>
          </div>
          <SectionDescription className="w-[48%] max-[1199px]:w-full">
            {shopifyPlusAgencyContent.intro}
          </SectionDescription>
        </div>

        <div className="flex flex-wrap justify-between gap-8 rounded-[30px] bg-[#fafaf7] p-8 max-[1199px]:rounded-[20px] max-[1199px]:p-6 max-[992px]:gap-0">
          <div className="w-[46.816%] max-[992px]:w-full">
            <div className="mb-5 max-w-[575px]">
              {shopifyPlusAgencyContent.paragraphs.map((paragraph, index) => (
                <p className={index === 0 ? "mb-3.75 text-sm leading-6 font-normal text-muted" : "text-sm leading-[1.8] font-normal text-muted"} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-[-4px] mb-[-8px] flex flex-wrap    ">
              {shopifyPlusAgencyContent.counters.map((counter) => (
                <div className="mb-2 w-1/2 px-1 max-[767px]:w-full" key={counter.value}>
                  <div className={`flex h-full min-h-[136px] flex-col justify-between rounded-[20px] p-[18px] max-[767px]:rounded-xl ${counterToneClasses[counter.tone]}`}>
                    <div>
                      <span className="font-montreal-medium block text-[35px] leading-[1.4] font-semibold text-ink max-[767px]:text-[24px] max-[767px]:leading-[33.24px] max-[767px]:tracking-[-.48px]">
                        {counter.value}
                      </span>
                      <span className="mt-[5px] block text-xs leading-none font-semibold text-[#4d5577] uppercase">{counter.label}</span>
                    </div>
                    <p className="text-xs leading-none font-medium text-muted">{counter.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-1/2 min-h-[380px] overflow-hidden rounded-[20px] max-[992px]:mt-5 max-[992px]:w-full max-[992px]:min-h-0 max-[992px]:aspect-[1.37] max-[767px]:rounded-xl">
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
              <source src={shopifyPlusAgencyContent.videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
