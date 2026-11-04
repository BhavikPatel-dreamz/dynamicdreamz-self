import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export type ThemeFeaturesBannerContent = {
  eyebrow?: string;
  title?: string;
  heading?: string;
  description?: string;
  items: readonly string[];
};

export type ThemeFeaturesBannerSectionProps = {
  content: ThemeFeaturesBannerContent;
  className?: string;
  id?: string;
};

export function ThemeFeaturesBannerSection({
  content,
  className = "theme-features py-20 max-[992px]:py-15 max-[768px]:py-10",
  id = "theme-features",
}: ThemeFeaturesBannerSectionProps) {
  return (
    <section className={className} id={id}>
      <Container>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-wrap overflow-hidden rounded-[22px] border border-[rgba(40,40,40,0.11)] max-[1200px]:rounded-[16px]"
        >
          <div className="left-block w-[37%] border-r border-[rgba(40,40,40,0.11)] bg-[#fbefd7] p-[30px] max-[1200px]:p-5 max-[992px]:w-full max-[992px]:border-r-0 max-[992px]:border-b max-[992px]:p-[25px_20px]">
            {content.eyebrow && (
              <Eyebrow as="div" className="mb-[15px]" linePosition="overlay">
                {content.eyebrow}
              </Eyebrow>
            )}
            <h2 className="mb-0 text-[32px] font-normal leading-tight tracking-normal text-ink max-[1400px]:text-[28px] max-[992px]:text-2xl">
              {content.title || content.heading}
            </h2>
            {content.description && (
              <div className="section-description mt-2.5">
                <p className="m-0 text-[#535353]">
                  {content.description}
                </p>
              </div>
            )}
          </div>
          <div className="right-block flex w-[63%] max-[992px]:w-full">
            <div className="inner-wrapper flex w-full flex-wrap">
              {content.items.map((item) => (
                <div
                  className="item w-1/2 border-b border-[rgba(40,40,40,0.11)] p-6 max-[992px]:p-5 max-[768px]:w-full max-[768px]:!border-t max-[768px]:!border-b-0 max-[768px]:!border-l-0 max-[768px]:p-[15px_20px] [&:nth-child(even)]:border-l [&:nth-child(even)]:border-[rgba(40,40,40,0.11)] [&:nth-last-of-type(1)]:border-b-0 [&:nth-last-of-type(2)]:border-b-0"
                  key={item}
                >
                  <h5 className="m-0 text-base font-normal tracking-normal text-ink">
                    {item}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
