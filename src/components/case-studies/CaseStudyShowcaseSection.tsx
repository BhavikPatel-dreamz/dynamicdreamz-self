import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SplitSectionHeading } from "@/components/ui/split-section-heading";
import { cn } from "@/lib/class-names";
import type { CaseStudyShowcase } from "@/types/case-study";

type CaseStudyShowcaseTopProps = {
  showcase: CaseStudyShowcase;
  hasKeyMetrics?: boolean;
};

export function CaseStudyShowcaseTop({
  showcase,
  hasKeyMetrics = false,
}: CaseStudyShowcaseTopProps) {
  if (!showcase || !showcase.desktopImage) {
    return null;
  }

  const { desktopImage, mobileImage } = showcase;

  return (
    <section
      className={cn(
        "full-width-image-top-section bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
        hasKeyMetrics ? "mt-20 max-[992px]:mt-[50px]" : "mt-0",
      )}
      aria-label={desktopImage.alt}
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

type CaseStudyShowcaseBottomProps = {
  showcase: CaseStudyShowcase;
  followsKeyFeatures?: boolean;
};

export function CaseStudyShowcaseBottom({
  showcase,
  followsKeyFeatures = false,
}: CaseStudyShowcaseBottomProps) {
  if (!showcase || !showcase.desktopImage) {
    return null;
  }

  const { desktopImage, mobileImage, eyebrow, heading, description } = showcase;
  const hasTextHeader = Boolean(eyebrow || heading || description);

  return (
    <section
      className={cn(
        "full-width-image-bottom-section mt-20 max-[992px]:mt-[50px]",
        followsKeyFeatures
          ? "bg-white p-0"
          : "bg-[#eff4ef] py-20 max-[992px]:py-[50px]",
      )}
      aria-label={heading || desktopImage.alt}
    >
      <Container>
        {hasTextHeader ? (
          heading ? (
            <SplitSectionHeading
              description={description}
              eyebrow={eyebrow}
              heading={heading}
              variant="left"
            />
          ) : (
            <div
              className="section_title_with_eyebrow mb-10 max-[992px]:mb-[30px]"
              data-aos="fade-up"
            >
              {eyebrow ? (
                <Eyebrow as="div" className="mb-4" lineThickness="thin">
                  {eyebrow}
                </Eyebrow>
              ) : null}
              {description ? (
                <p className="font-sans text-base font-medium leading-7 text-[#535353] max-[1200px]:text-sm max-[1200px]:leading-6">
                  {description}
                </p>
              ) : null}
            </div>
          )
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
