import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { CaseStudyShowcase } from "@/types/case-study";

type CaseStudyShowcaseProps = {
  showcase: CaseStudyShowcase;
};

export function CaseStudyShowcaseTop({ showcase }: CaseStudyShowcaseProps) {
  if (!showcase || !showcase.desktopImage) {
    return null;
  }

  const { desktopImage, mobileImage } = showcase;

  return (
    <section
      className="full-width-image-top-section bg-[#eff4ef] py-20 max-[992px]:py-[50px]"
      aria-label="Project showcase overview"
    >
      <Container>
        <div className="image-wrapper mb-0 overflow-hidden" data-aos="fade-up">
          {mobileImage ? (
            <picture>
              <source media="(min-width: 768px)" srcSet={desktopImage.src} />
              <img
                src={mobileImage.src}
                alt={desktopImage.alt || mobileImage.alt || ""}
                width={desktopImage.width}
                height={desktopImage.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </picture>
          ) : (
            <Image
              src={desktopImage.src}
              alt={desktopImage.alt || ""}
              width={desktopImage.width}
              height={desktopImage.height}
              loading="lazy"
              className="w-full h-auto block"
            />
          )}
        </div>
      </Container>
    </section>
  );
}

export function CaseStudyShowcaseBottom({ showcase }: CaseStudyShowcaseProps) {
  if (!showcase || !showcase.desktopImage) {
    return null;
  }

  const { desktopImage, mobileImage, eyebrow, heading, description } = showcase;
  const hasTextHeader = Boolean(eyebrow || heading || description);

  return (
    <section
      className="full-width-image-bottom-section bg-white pt-20 max-[992px]:pt-15 max-[768px]:pt-10"
      aria-label={heading || "Project showcase details"}
    >
      <Container>
        {hasTextHeader ? (
          <div className="section_title_with_eyebrow mb-10 max-[768px]:mb-6" data-aos="fade-up">
            <div className="title">
              {eyebrow ? (
                <Eyebrow as="div" className="mb-4" linePosition="overlay">
                  {eyebrow}
                </Eyebrow>
              ) : null}
              {heading ? (
                <h2 className="mb-4 font-montreal-medium text-[35px] font-normal leading-[1.38] text-ink max-[1200px]:text-[28px] max-[768px]:text-2xl">
                  {heading}
                </h2>
              ) : null}
            </div>
            {description ? (
              <div className="section_text">
                <p className="font-sans text-[16px] font-medium leading-[30.4px] text-[#535353] max-[768px]:text-sm">
                  {description}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="image-wrapper mb-0 overflow-hidden" data-aos="fade-up">
          {mobileImage ? (
            <picture>
              <source media="(min-width: 768px)" srcSet={desktopImage.src} />
              <img
                src={mobileImage.src}
                alt={desktopImage.alt || mobileImage.alt || ""}
                width={desktopImage.width}
                height={desktopImage.height}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block"
              />
            </picture>
          ) : (
            <Image
              src={desktopImage.src}
              alt={desktopImage.alt || ""}
              width={desktopImage.width}
              height={desktopImage.height}
              loading="lazy"
              className="w-full h-auto block"
            />
          )}
        </div>
      </Container>
    </section>
  );
}
