import { CareerApplyNowForm } from "@/components/sections/career-apply-now/career-apply-now-form";
import { CareerApplyNowLeftColumn } from "@/components/sections/career-apply-now/career-apply-now-left-column";
import { HeaderTwo } from "@/components/sections/request-quote/header-two";
import { Container } from "@/components/ui/container";

export function CareerApplyNowPage() {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="apply-interivew-sec p-[40px_0_10px_0]">
        <Container className="min-[1300px]:!max-w-[1354px]">
          <div className="apply-interivew-main rounded-[30px] p-[2px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.66)_33.98%,rgba(0,209,255,0)_78.28%)]">
            <div className="wrapper flex flex-wrap justify-between rounded-[30px] bg-white p-[78px] max-[1299px]:p-[78px_60px] max-[1199px]:p-[60px_40px] max-[991px]:flex-col max-[991px]:p-10 max-[767px]:p-[40px_20px] max-[320px]:p-[40px_10px]">
              <CareerApplyNowLeftColumn />
              <CareerApplyNowForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
