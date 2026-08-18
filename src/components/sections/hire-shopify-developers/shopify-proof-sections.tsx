import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { hireShopifyAdvantages, hireShopifyReasons } from "@/content/hire-shopify-developers";

const headingClassName = "font-sans text-[35px] leading-[48.475px] font-bold tracking-[-0.7px] text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33px] max-[767px]:tracking-[-0.48px]";

export function ShopifyReasonsSection() {
  return (
    <section className="bg-[linear-gradient(97.18deg,#e8f9ef_28.5%,#e6fafd_91.82%)] py-20 max-[767px]:py-[60px]" id="why-hire-shopify-developers">
      <Container>
        <div className="mb-[50px] text-center max-[767px]:mb-[35px]">
          <h2 className={headingClassName}>Why Choose Dynamic Dreamz for<br className="max-[767px]:hidden" /> Shopify Development</h2>
          <p className="mx-auto mt-2.5 max-w-[720px] text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">
            Our Shopify developers have the ideal balance of expertise in eCommerce business and Shopify technology. For your online business, we can act as a powerful catalyst.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {hireShopifyReasons.map((item) => (
            <article className="group relative z-0 min-h-[330px] rounded-[15px] bg-white px-[30px] pt-10 pb-[60px] before:absolute before:-inset-0.5 before:-z-20 before:rounded-[15px] before:bg-gradient-to-r before:from-[#15c064] before:to-[#00d1ff] before:opacity-0 before:transition-opacity hover:before:opacity-100 after:absolute after:inset-0 after:-z-10 after:rounded-[14px] after:bg-white" key={item.title}>
              <Image className="mb-5 size-[60px] object-contain" src={item.icon} alt={item.iconAlt} width={60} height={60} />
              <h3 className="mb-[5px] font-sans text-base leading-[26.72px] font-bold tracking-[0.32px] text-ink">{item.title}</h3>
              <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ShopifyAdvantagesSection() {
  return (
    <section className="py-20 max-[767px]:py-[60px]" id="shopify-developer-advantages">
      <Container>
        <div className="text-center">
          <h2 className={headingClassName}>Our Advantages of Choosing Dynamic Dreamz<br className="max-[767px]:hidden" /> as a Shopify Developer</h2>
          <p className="mt-2.5 text-base leading-[30.4px] font-medium text-muted max-[767px]:text-sm max-[767px]:leading-[25px]">Get connected with us, and you will witness the difference from day one!</p>
        </div>

        <div className="mt-[60px] grid grid-cols-3 max-[991px]:mt-10 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
          {hireShopifyAdvantages.map((item, index) => (
            <article className={`flex min-h-[250px] flex-col items-center border-[#efefef] px-8 py-[35px] text-center max-[1199px]:px-5 max-[767px]:min-h-0 max-[767px]:py-5 ${index % 3 !== 2 ? "border-r max-[991px]:border-r-0" : ""} ${index < 3 ? "border-b" : ""} ${index % 2 === 0 ? "max-[991px]:border-r" : ""} ${index < 4 ? "max-[991px]:border-b" : ""} ${index < hireShopifyAdvantages.length - 1 ? "max-[767px]:border-r-0 max-[767px]:border-b" : "max-[767px]:border-r-0"}`} key={item.title}>
              <Image className="size-[58px] object-contain" src={item.icon} alt={item.iconAlt} width={58} height={58} />
              <h3 className="mt-5 mb-[15px] font-sans text-base leading-[26px] font-bold text-ink max-[767px]:mt-[15px] max-[767px]:mb-2.5">{item.title}</h3>
              <p className="text-base leading-[27.2px] font-medium tracking-[0.32px] text-muted max-[767px]:text-sm max-[767px]:leading-6">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-[46px] text-center"><ButtonLink href="/request-quote" variant="primary">inquire now</ButtonLink></div>
      </Container>
    </section>
  );
}
