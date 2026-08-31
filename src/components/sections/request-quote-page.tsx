import { HeaderTwo } from "@/components/sections/request-quote/header-two";
import { QuoteForm } from "@/components/sections/request-quote/quote-form";
import { QuoteLeftColumn } from "@/components/sections/request-quote/quote-left-column";
import { Container } from "@/components/ui/container";

export function RequestQuotePage() {
  return (
    <div className="overflow-x-clip">
      <HeaderTwo />
      <section className="request-quote-sec relative -mt-[111px] overflow-hidden p-0">
        <Container className="min-[1300px]:!max-w-[1360px] min-[1300px]:!px-10">
          <div className="request-quote-main">
            <div className="wrapper flex max-[992px]:flex-col-reverse">
              <div className="left-col-wrapper relative w-1/2 before:absolute before:top-0 before:right-0 before:-z-10 before:h-full before:w-[100vw] before:bg-[#fbf7ed] before:content-[''] max-[992px]:w-full max-[992px]:before:left-1/2 max-[992px]:before:right-1/2 max-[992px]:before:-ml-[50vw] max-[992px]:before:-mr-[50vw]">
                <QuoteLeftColumn />
              </div>
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
