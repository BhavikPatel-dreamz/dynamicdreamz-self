import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
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
    <section className="bg-[#fbeed5] py-[43px] max-[991px]:py-[30px]" aria-labelledby="shopify-plus-agency-title">
      <Container>
        <div className="section_title_with_eyebrow  mb-10 flex flex-wrap items-end justify-between gap-8 max-[1199px]:mb-5 max-[991px]:gap-0">
          <div className="title w-[42%] max-[1199px]:w-full max-[1199px]:mb-2.5">
            <Eyebrow as="span" className="mb-4">
              {shopifyPlusAgencyContent.eyebrow}
            </Eyebrow>
            <SectionHeading id="shopify-plus-agency-title" className="m-0">
              {shopifyPlusAgencyContent.title}
            </SectionHeading>
          </div>
          <div className="section_text w-[48%] max-[1199px]:w-full">
            <p className="text-base leading-7 font-medium text-muted">
              {shopifyPlusAgencyContent.intro}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-8 rounded-[30px] bg-[#fafaf7] p-8 max-[1199px]:rounded-[20px] max-[1199px]:p-6 max-[991px]:gap-0">
          <div className="w-[46.816%] max-[991px]:w-full">
            <div className="mb-5 max-w-[568px]">
              {shopifyPlusAgencyContent.paragraphs.map((paragraph, index) => (
                <p className={index === 0 ? "mb-3.75 text-sm leading-6 font-normal text-muted" : "text-sm leading-[1.8] font-medium text-muted"} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-[-4px] mb-[-8px] flex flex-wrap    ">
              {shopifyPlusAgencyContent.counters.map((counter) => (
                <div className="mb-2 w-1/2 px-1 max-[767px]:w-full" key={counter.value}>
                  <div className={`flex h-full min-h-[136px] flex-col justify-between rounded-[20px] p-[18px] max-[767px]:rounded-xl ${counterToneClasses[counter.tone]}`}>
                    <div>
                      <span className="block font-display text-[35px] leading-[1.25] font-bold text-ink max-[991px]:text-[30px]">{counter.value}</span>
                      <span className="mt-[5px] block text-xs leading-none font-semibold text-[#4d5577] uppercase">{counter.label}</span>
                    </div>
                    <p className="text-xs leading-none font-medium text-muted">{counter.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-1/2 min-h-[380px] overflow-hidden rounded-[20px] max-[991px]:mt-5 max-[991px]:w-full max-[991px]:min-h-0 max-[991px]:aspect-[1.37] max-[767px]:rounded-xl">
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
              <source src={shopifyPlusAgencyContent.videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
