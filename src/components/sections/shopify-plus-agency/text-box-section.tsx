import { Container } from "@/components/ui/container";

type TextBoxSectionProps = {
  heading: string;
  text: string;
  className: string;
};

export function TextBoxSection({ heading, text, className }: TextBoxSectionProps) {
  return (
    <section className={className} data-section="single-text-box">
      <Container>
        <div className="rounded-[20px] bg-[#fbf7ed] px-[55px] py-[70px] max-[1199px]:p-[30px_20px]">
          <div className="mx-[15px] max-[1199px]:mx-0">
            <h2 className="mb-6 text-center font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink">
              {heading}
            </h2>
            <p className="mb-6 text-center text-[18px] leading-[34.2px] font-medium text-[#535353]">
              {text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}