import { Container } from "@/components/ui/container";
import { WebsiteQuoteForm } from "@/components/ui/website-quote-form";

export type QuestionQuoteContent = {
  heading: string;
  prompt: string;
  phone: {
    label: string;
    display: string;
    href: string;
  };
  email: {
    label: string;
    display: string;
    href: string;
  };
  form: {
    buttonLabel: string;
    inputAriaLabel: string;
    placeholder: string;
  };
  note: string;
};

type QuestionQuoteSectionProps = {
  content: QuestionQuoteContent;
};

export function QuestionQuoteSection({ content }: QuestionQuoteSectionProps) {
  return (
    <section className="py-20" aria-labelledby="mobile-app-question-title">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] bg-[linear-gradient(100.83deg,#000_16.08%,#2b2b2b_90.91%)] px-[15px] py-[60px] text-center text-white before:absolute before:inset-0 before:bg-[url('/assets/services/mobile-application-development/backgrounds/contact-wave.webp')] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-40 before:content-[''] max-[575px]:py-10">
          <div className="relative z-[1]">
            <h2
              className="mb-[18px] font-sans text-[32px] leading-[42px] font-bold tracking-[-0.7px] text-white max-[1199px]:text-[27px] max-[1199px]:leading-[38px] max-[575px]:text-[22px] max-[575px]:leading-8"
              id="mobile-app-question-title"
            >
              {content.heading}
            </h2>
            <p className="mb-5 text-lg leading-[34px] font-medium text-white">
              <strong className="font-bold">{content.prompt}</strong>
            </p>
            <div className="mb-[30px] flex items-center justify-center max-[767px]:flex-col max-[767px]:gap-3">
              <div className="mx-3 text-lg leading-none font-medium max-[767px]:mx-0">
                <strong className="font-bold">{content.phone.label} </strong>
                <a
                  className="text-white transition-colors duration-300 hover:text-[#d4a5a5]"
                  href={content.phone.href}
                >
                  {content.phone.display}
                </a>
              </div>
              <div className="mx-3 text-lg leading-none font-medium max-[767px]:mx-0">
                <strong className="font-bold">{content.email.label} </strong>
                <a
                  className="text-white transition-colors duration-300 hover:text-[#d4a5a5]"
                  href={content.email.href}
                >
                  {content.email.display}
                </a>
              </div>
            </div>

            <WebsiteQuoteForm
              buttonLabel={content.form.buttonLabel}
              className="mx-auto"
              inputAriaLabel={content.form.inputAriaLabel}
              placeholder={content.form.placeholder}
            />
            <span className="mt-[34px] block text-base leading-[30px] font-medium text-white">
              {content.note}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
