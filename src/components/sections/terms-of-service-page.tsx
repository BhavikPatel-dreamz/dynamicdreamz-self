import { Fragment } from "react";
import { Container } from "@/components/ui/container";
import {
  termsOfServiceContent,
  type TermsOfServiceSection,
} from "@/content/terms-of-service";
import { formatBrText } from "@/lib/text-formatting";

export interface TermsOfServiceContentProps {
  heroTitle?: string;
  intro?: string;
  sections?: readonly TermsOfServiceSection[];
  contactEmail?: string;
}

export type TermsOfServicePageProps = {
  content?: TermsOfServiceContentProps;
};

export function TermsOfServicePage({ content }: TermsOfServicePageProps = {}) {
  const heroTitle = content?.heroTitle || termsOfServiceContent.heroTitle;
  const intro = content?.intro || termsOfServiceContent.intro;
  const sections = content?.sections || termsOfServiceContent.sections;
  const contactEmail = content?.contactEmail || termsOfServiceContent.contactEmail;

  return (
    <>
      <section
        className="overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[991px]:pt-[170px] max-[991px]:pb-20"
        aria-labelledby="terms-of-service-title"
      >
        <Container>
          <h1
            id="terms-of-service-title"
            className="inline-block max-w-full font-montreal-medium text-[50px] leading-[60px] font-normal tracking-normal text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
          >
            {heroTitle}
          </h1>
        </Container>
      </section>

      <section
        className="py-20 max-[991px]:py-[50px]"
        aria-label="Terms of service details"
      >
        <Container>
          <p className="mb-[15px] text-base leading-[30.4px] font-medium text-muted">
            {intro}
          </p>

          {sections.map((section) => (
            <Fragment key={section.title}>
              <h2 className="mb-3 font-montreal-medium text-2xl leading-[31.2px] font-normal tracking-[-0.48px] text-ink max-[767px]:mb-2.5 max-[767px]:text-xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-0.4px]">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph, index) => (
                <p
                  className="mb-[15px] text-base leading-[30.4px] font-medium text-muted"
                  key={`${section.title}-p-${index}`}
                >
                  {formatBrText(
                    paragraph.includes("\n")
                      ? paragraph.split("\n")
                      : paragraph,
                  )}
                </p>
              ))}
              {section.items ? (
                <ul className="mb-6 ml-5 list-disc pl-0 text-base leading-[27px] font-medium tracking-[0.32px] text-muted">
                  {section.items.map((item, index) => (
                    <li
                      className="mb-[18px]"
                      key={`${section.title}-item-${index}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.closingParagraphs?.map((paragraph, index) => (
                <p
                  className="mb-[15px] text-base leading-[30.4px] font-medium text-muted"
                  key={`${section.title}-closing-${index}`}
                >
                  {formatBrText(
                    paragraph.includes("\n")
                      ? paragraph.split("\n")
                      : paragraph,
                  )}
                </p>
              ))}
            </Fragment>
          ))}

          <div className="contacy_us_pp text-base leading-[30.4px] font-medium text-muted">
            <p className="mb-0">
              <a
                className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red"
                href={`mailto:${contactEmail}`}
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
