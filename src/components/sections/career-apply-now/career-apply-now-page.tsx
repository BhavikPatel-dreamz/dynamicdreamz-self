import { CareerApplyNowForm } from "@/components/sections/career-apply-now/career-apply-now-form";
import { CareerApplyNowLeftColumn } from "@/components/sections/career-apply-now/career-apply-now-left-column";
import { HeaderTwo } from "@/components/sections/request-quote/header-two";
import { Container } from "@/components/ui/container";

export type CareerApplyNowPageProps = {
  heading?: string;
  phoneLabel?: string;
  phoneNumber?: string;
  phoneHref?: string;
  emailLabel?: string;
  emailAddress?: string;
  emailHref?: string;
  note?: string;
};

export function CareerApplyNowPage({
  heading,
  phoneLabel,
  phoneNumber,
  phoneHref,
  emailLabel,
  emailAddress,
  emailHref,
}: CareerApplyNowPageProps = {}) {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="apply-interivew-sec p-[40px_0_10px_0]">
        <Container className="min-[1300px]:!max-w-[1354px]">
          <div className="apply-interivew-main rounded-[30px] p-[2px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.66)_33.98%,rgba(0,209,255,0)_78.28%)]">
            <div className="wrapper flex flex-wrap justify-between rounded-[30px] bg-white p-[78px] max-[1299px]:p-[78px_60px] max-[1199px]:p-[60px_40px] max-[991px]:flex-col max-[991px]:p-10 max-[767px]:p-[40px_20px] max-[320px]:p-[40px_10px]">
              <CareerApplyNowLeftColumn
                heading={heading}
                phoneLabel={phoneLabel}
                phoneNumber={phoneNumber}
                phoneHref={phoneHref}
                emailLabel={emailLabel}
                emailAddress={emailAddress}
                emailHref={emailHref}
              />
              <CareerApplyNowForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
