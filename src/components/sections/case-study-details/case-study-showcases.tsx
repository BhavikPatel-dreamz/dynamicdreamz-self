import Image from "next/image";

import { CaseStudySectionHeading } from "@/components/sections/case-study-details/case-study-section-heading";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { caseStudiesUiCopy } from "@/content/case-studies-ui";
import type {
  CaseStudyColor,
  CaseStudyDesignShowcase,
  CaseStudyShowcase,
  CaseStudyTypeface,
} from "@/types/case-study";

type CaseStudyShowcasesProps = {
  clientName: string;
  wireframes: CaseStudyShowcase | null;
  colors: CaseStudyColor[];
  typefaces: CaseStudyTypeface[];
  design: CaseStudyDesignShowcase | null;
};

function ShowcaseIntro({ showcase }: { showcase: CaseStudyShowcase }) {
  return (
    <Container>
      <div className="grid grid-cols-[32%_68%] max-[1199px]:grid-cols-[25%_75%] max-[992px]:grid-cols-1">
        <div className="pr-[30px] max-[992px]:mb-6 max-[992px]:pr-0">
          <CaseStudySectionHeading>{showcase.heading}</CaseStudySectionHeading>
        </div>
        <RichText html={showcase.html} />
      </div>
    </Container>
  );
}

export function CaseStudyShowcases({
  clientName,
  wireframes,
  colors,
  typefaces,
  design,
}: CaseStudyShowcasesProps) {
  return (
    <>
      {wireframes ? (
        <section aria-label={`${clientName} wireframes`} className="relative pt-[90px] max-[992px]:pt-[60px]">
          <ShowcaseIntro showcase={wireframes} />
          {wireframes.image ? (
            <div className="pt-[107px] max-[992px]:pt-[60px]">
              <Image
                src={wireframes.image.src}
                alt={wireframes.image.alt}
                width={wireframes.image.width}
                height={wireframes.image.height}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          ) : null}
        </section>
      ) : null}

      {colors.length > 0 ? (
        <section aria-labelledby="case-study-colors" className="py-20 max-[992px]:py-[60px]">
          <Container>
            <CaseStudySectionHeading id="case-study-colors" className="mb-[50px] max-[992px]:mb-10">
              {caseStudiesUiCopy.colors}
            </CaseStudySectionHeading>
            <ul className="-mx-2.5 flex flex-wrap">
              {colors.map((color) => (
                <li className="w-1/4 px-2.5 max-[992px]:mb-5 max-[992px]:w-1/2" key={`${color.label}-${color.value}`}>
                  <div className="rounded-[25px] border-[1.3px] border-[#efefef] bg-white p-5 text-center max-[767px]:rounded-[15px] max-[767px]:p-[15px]">
                    <span
                      aria-label={`${color.label} color swatch`}
                      className="block h-[151px] w-full rounded-[20px] shadow-[0_4px_18.8px_rgba(51,51,51,0.12)] max-[767px]:h-[70px] max-[767px]:rounded-[10px]"
                      role="img"
                      style={{ backgroundColor: color.value }}
                    />
                    <h3
                      className="mt-2.5 text-[20px] font-bold leading-[27.4px] tracking-[-0.4px] max-[767px]:mt-0.5 max-[767px]:text-[16px]"
                      style={{ color: color.value }}
                    >
                      {color.label}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {typefaces.length > 0 ? (
        <section aria-labelledby="case-study-typefaces" className="pb-20 max-[992px]:pb-[60px]">
          <Container>
            <CaseStudySectionHeading id="case-study-typefaces" className="mb-10">
              {caseStudiesUiCopy.typeface}
            </CaseStudySectionHeading>
            <div className="flex max-w-[890px] flex-wrap justify-between max-[992px]:-mx-2.5 max-[767px]:mx-0">
              {typefaces.map((typeface, index) => (
                <div
                  className="w-[44.1%] max-[992px]:w-1/2 max-[992px]:px-2.5 max-[767px]:mb-[15px] max-[767px]:w-full max-[767px]:px-0"
                  key={index}
                >
                  {typeface.image ? (
                    <Image
                      src={typeface.image.src}
                      alt={typeface.image.alt}
                      width={typeface.image.width}
                      height={typeface.image.height}
                      sizes="(max-width: 767px) calc(100vw - 32px), 390px"
                      className="h-auto max-w-full"
                    />
                  ) : null}
                  <RichText html={typeface.html} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {design ? (
        <section
          aria-label={`${clientName} design`}
          className="bg-top bg-[length:100%_auto] bg-no-repeat pt-[90px] pb-[110px] max-[992px]:pt-[60px] max-[992px]:pb-[60px]"
          style={design.backgroundImage ? { backgroundImage: `url(${design.backgroundImage})` } : undefined}
        >
          <ShowcaseIntro showcase={design} />
          {design.image ? (
            <div className="overflow-hidden pt-[107px] max-[992px]:pt-[60px]">
              <Image
                src={design.image.src}
                alt={design.image.alt}
                width={design.image.width}
                height={design.image.height}
                sizes="100vw"
                className="h-auto w-full max-[767px]:scale-[1.2]"
              />
            </div>
          ) : null}
        </section>
      ) : null}
    </>
  );
}
