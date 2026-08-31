import { Container } from "@/components/ui/container";
import { termsOfServiceContent } from "@/content/terms-of-service";

export function TermsOfServicePage() {
  const { contactEmail, heroTitle, intro, sections } = termsOfServiceContent;

  return (
    <>
      <section
        className="overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[992px]:pt-[140px] max-[992px]:pb-[46px]"
        aria-labelledby="terms-of-service-title"
      >
        <Container>
          <h1
            id="terms-of-service-title"
            className="inline-block max-w-full font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[992px]:text-[40px] max-[992px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
          >
            {heroTitle}
          </h1>
        </Container>
      </section>

      <section
        className="py-20 max-[992px]:py-[50px]"
        aria-label="Terms of service details"
      >
        <Container>
          <p className="mb-6 text-base leading-[30.4px] font-medium text-muted">
            {intro}
          </p>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 font-sans text-2xl leading-[31.2px] font-bold tracking-[-0.48px] text-ink max-[767px]:text-xl max-[767px]:leading-[31.2px]">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  className="mb-6 text-base leading-[30.4px] font-medium text-muted"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="mb-6 ml-5 list-disc pl-0 text-base leading-[27px] font-medium tracking-[0.32px] text-muted">
                  {section.items.map((item, index) => (
                    <li
                      className={
                        index < section.items.length - 1 ? "mb-[18px]" : undefined
                      }
                      key={`${section.title}-${index}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.closingParagraphs?.map((paragraph) => (
                <p
                  className="mb-6 text-base leading-[30.4px] font-medium text-muted"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="contacy_us_pp mb-6 text-base leading-[30.4px] font-medium text-muted">
            <p>
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
