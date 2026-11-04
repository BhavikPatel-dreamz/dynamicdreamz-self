import { Container } from "@/components/ui/container";
import { DeferredAutoplayVideo } from "@/components/ui/deferred-autoplay-video";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { shopifyPlusAgencyContent } from "@/content/home";

const counterToneClasses = {
  green: "bg-[#eff4ef]",
  stone: "bg-[#f4f2ef]",
  peach: "bg-[#f6eee5]",
  lime: "bg-[#f0f6e5]",
} as const;

export type ShopifyPlusAgencyCounter = {
  value: string;
  label: string;
  note?: string;
  tone?: "green" | "stone" | "peach" | "lime";
};

export type ShopifyPlusAgencyContent = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  paragraphs?: readonly string[];
  counters?: readonly ShopifyPlusAgencyCounter[];
  videoSrc?: string;
};

export type ShopifyPlusAgencySectionProps = {
  content?: ShopifyPlusAgencyContent;
};

export function ShopifyPlusAgencySection({ content }: ShopifyPlusAgencySectionProps = {}) {
  const eyebrow = content?.eyebrow ?? shopifyPlusAgencyContent.eyebrow;
  const title = content?.title ?? shopifyPlusAgencyContent.title;
  const intro = content?.intro ?? shopifyPlusAgencyContent.intro;
  const paragraphs =
    content?.paragraphs && content.paragraphs.length > 0
      ? content.paragraphs
      : shopifyPlusAgencyContent.paragraphs;
  const counters =
    content?.counters && content.counters.length > 0
      ? content.counters
      : shopifyPlusAgencyContent.counters;
  const videoSrc = content?.videoSrc || shopifyPlusAgencyContent.videoSrc;

  return (
    <section className="bg-[#fbeed5] py-20 max-[992px]:py-15 max-[768px]:py-10" aria-labelledby="shopify-plus-agency-title">
      <Container>
        <SplitSectionHeading
          className="gap-8 max-[1200px]:mb-5 max-[992px]:gap-0"
          description={intro}
          eyebrow={eyebrow}
          heading={title}
          headingId="shopify-plus-agency-title"
          titleColumnClassName="max-[1200px]:mb-0 max-[992px]:mb-0"
          variant="left"
        />

        <div className="flex flex-wrap justify-between rounded-[30px] bg-[#fafaf7] p-8 max-[1200px]:rounded-[20px] max-[1200px]:p-6 max-[768px]:p-5">
          <div data-aos="fade-up" className="w-[46.816%] max-[768px]:w-full">
            <div className="mb-5 max-w-[575px]">
              {paragraphs.map((paragraph, index) => (
                <p className={index === 0 ? "mb-3.75 text-sm leading-6 font-normal text-muted" : "text-sm leading-[1.8] font-normal text-muted"} key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-[-4px] mb-[-8px] flex flex-wrap">
              {counters.map((counter) => {
                const tone = counter.tone && counter.tone in counterToneClasses ? counter.tone : "green";
                return (
                  <div className="mb-2 w-1/2 px-1 max-[768px]:w-full" key={counter.value}>
                    <div className={`flex h-full min-h-[136px] max-[768px]:min-h-0 flex-col justify-between max-[768px]:justify-start rounded-[20px] p-[18px] max-[768px]:rounded-xl ${counterToneClasses[tone]}`}>
                      <div>
                        <h3 className="h2 font-montreal-bold block text-[35px] leading-[1.4] font-semibold text-ink max-[768px]:text-[24px] max-[768px]:leading-[33.24px] max-[768px]:tracking-[-.48px]">
                          {counter.value}
                        </h3>
                        <span className="mt-[5px] mb-[25px] max-[768px]:mb-5 block text-xs leading-none font-semibold text-[#4d5577] uppercase">{counter.label}</span>
                      </div>
                      {counter.note ? <p className="text-xs leading-none font-medium text-muted">{counter.note}</p> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="relative w-1/2 min-h-[380px] max-[1200px]:min-h-0 overflow-hidden rounded-[20px] max-[768px]:mt-5 max-[768px]:w-full max-[768px]:aspect-[1.37] max-[768px]:rounded-xl"
          >
            <DeferredAutoplayVideo
              className="absolute inset-0 h-full w-full object-cover"
              decorative
              poster="/assets/about/hero-video-poster.webp"
              posterClassName="object-cover"
              posterSizes="(max-width: 991px) 100vw, 50vw"
              preload="metadata"
              src={videoSrc}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
