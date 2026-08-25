import { Container } from "@/components/ui/container";
import { privacyPolicyContent, type PrivacyPolicyInline } from "@/content/privacy-policy";

function InlineContent({ parts }: { parts: readonly PrivacyPolicyInline[] }) {
  return parts.map((part, index) =>
    part.strong ? <strong key={`${part.text}-${index}`}>{part.text}</strong> : <span key={`${part.text}-${index}`}>{part.text}</span>,
  );
}

export function PrivacyPolicyPage() {
  const { contact, contactLabels, heroTitle, sections } = privacyPolicyContent;

  return (
    <>
      <section
        className="overflow-hidden bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] pt-40 pb-[85px] text-center max-[991px]:pt-[140px] max-[991px]:pb-[46px]"
        aria-labelledby="privacy-policy-title"
      >
        <Container>
          <h1
            id="privacy-policy-title"
            className="inline-block max-w-full font-sans text-[50px] leading-[66px] font-bold tracking-[-1px] text-ink max-[991px]:text-[40px] max-[991px]:leading-[50px] max-[767px]:text-[30px] max-[767px]:leading-10"
          >
            {heroTitle}
          </h1>
        </Container>
      </section>

      <section className="py-20 max-[991px]:py-[50px]" aria-label="Privacy and cookies policy details">
        <Container>
          {sections.map((section) => {
            const Heading = section.level === 3 ? "h3" : "h2";
            const headingClass = section.level === 3
              ? "mb-2.5 font-sans text-lg leading-[28.8px] font-bold tracking-[-0.36px] text-ink max-[767px]:text-base max-[767px]:leading-[26px]"
              : "mb-6 font-sans text-2xl leading-[31.2px] font-bold tracking-[-0.48px] text-ink max-[767px]:text-xl max-[767px]:leading-[31.2px]";

            return (
              <div key={section.title}>
                <Heading className={headingClass}>{section.title}</Heading>
                {section.paragraphs?.map((paragraph) => (
                  <p className="mb-6 text-base leading-[30.4px] font-medium text-muted" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className="mb-6 ml-5 list-disc pl-0 text-base leading-[27px] font-medium tracking-[0.32px] text-muted">
                    {section.items.map((item, index) => (
                      <li className={index < section.items.length - 1 ? "mb-[18px]" : undefined} key={`${section.title}-${index}`}>
                        <InlineContent parts={item} />
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}

          <div className="text-base leading-[30.4px] font-medium text-muted">
            <h3 className="mb-2.5 font-sans text-lg leading-[28.8px] font-bold tracking-[-0.36px] text-ink max-[767px]:text-base max-[767px]:leading-[26px]">
              {contact.name}
            </h3>
            <address className="not-italic">
              <strong>{contactLabels.email}</strong>{" "}
              <a className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <br />
              <strong>{contactLabels.phone}</strong>{" "}
              <a className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red" href={contact.phoneHref}>
                {contact.phone}
              </a>
              <br />
              <strong>{contactLabels.address}</strong>{" "}
              <a className="text-[#d92128] underline transition-colors duration-300 hover:no-underline focus-visible:text-brand-red" href={contact.addressHref} target="_blank" rel="noopener noreferrer">
                {contact.address}
              </a>
            </address>
          </div>
        </Container>
      </section>
    </>
  );
}
