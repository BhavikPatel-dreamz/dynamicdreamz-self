import Image from "next/image";

import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { contactPageContent } from "@/content/contact";

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
      <path d="M31.33 16c0 8.563-6.904 15.5-15.415 15.5S.5 24.563.5 16 7.404.5 15.915.5 31.33 7.437 31.33 16Z" fill="white" stroke="#efefef" />
      <path d="m18.53 17.742-.396.376s-.94.892-3.506-1.545c-2.566-2.436-1.626-3.329-1.626-3.329l.249-.237c.614-.583.672-1.518.136-2.201l-1.095-1.396c-.663-.846-1.944-.958-2.704-.236L8.225 10.468c-.376.357-.628.82-.598 1.335.078 1.316.702 4.146 4.179 7.45 3.688 3.501 7.149 3.64 8.564 3.514.448-.04.837-.257 1.15-.556l1.233-1.171c.834-.79.599-2.146-.467-2.699l-1.659-.862c-.7-.363-1.551-.256-2.098.263Z" fill="#090909" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
      <path d="M31.33 16c0 8.563-6.904 15.5-15.415 15.5S.5 24.563.5 16 7.404.5 15.915.5 31.33 7.437 31.33 16Z" fill="white" stroke="#efefef" />
      <path d="M7.703 11.622c0-.492.194-.963.54-1.31a1.84 1.84 0 0 1 1.304-.543h12.905c.489 0 .958.195 1.304.543.346.347.54.818.54 1.31v9.267c0 .492-.194.963-.54 1.31a1.84 1.84 0 0 1-1.304.544H9.547c-.49 0-.958-.196-1.304-.544a1.86 1.86 0 0 1-.54-1.31v-9.267Z" fill="#090909" stroke="white" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m7.703 10.717 8.296 5.56 8.297-5.56" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactCard({ kind }: { kind: "sales" | "jobs" }) {
  const contact = contactPageContent.contacts[kind];

  return (
    <div className="flex items-center">
      <Image className="mr-[22px] h-[63px] w-[63px] shrink-0 max-[1199px]:mr-[23px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]" src={contact.icon} alt={contact.iconAlt} width={63} height={63} />
      <div className="flex min-w-0 flex-col">
        <h2 className="mb-[17px] font-sans text-lg leading-[22.32px] font-bold text-ink uppercase max-[1199px]:mb-2.5 max-[1199px]:text-base">{contact.title}</h2>
        <a className="text-base leading-[23.28px] font-medium text-muted transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[1199px]:text-sm max-[1199px]:leading-5" href={contact.phoneHref}>{contact.phone}</a>
        <a className="mt-2.5 text-base leading-[23.28px] font-medium text-muted transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[1199px]:mt-[5px] max-[1199px]:text-sm max-[1199px]:leading-5" href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </div>
  );
}

function OfficeCard({ office }: { office: (typeof contactPageContent.offices)[number] }) {
  return (
    <article className="group/office overflow-hidden rounded-[10px] border-[1.5px] border-[#e4e4e4] bg-white">
      <div className="relative aspect-[555/248] overflow-hidden">
        <Image className="object-cover transition-transform duration-600 group-hover/office:scale-110" src={office.image} alt={office.imageAlt} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) 350px, 555px" />
      </div>
      <div className="p-8 max-[991px]:p-5">
        <div className="flex items-center">
          <h3 className="mr-7 font-sans text-xl leading-[28.8px] font-bold text-ink max-[991px]:mr-5 max-[991px]:text-base max-[991px]:leading-[26px]">{office.city}</h3>
          <a className="inline-flex min-w-0 items-center bg-[linear-gradient(97deg,#15c064_28.5%,#00d1ff_91.82%)] bg-clip-text text-sm leading-normal font-bold text-transparent uppercase" href={office.directionsHref} target="_blank" rel="nofollow noopener noreferrer">
            Get directions
            <Image className="ml-1.5 h-auto w-auto transition-transform duration-300 group-hover/office:translate-x-0.5" src="/assets/contact/icons/directions.svg" alt="" width={14} height={14} />
          </a>
        </div>
        <address className="mt-6 mb-[15px] text-base leading-[27.68px] font-medium text-muted not-italic max-[991px]:mt-[15px] max-[991px]:text-sm max-[991px]:leading-6">{office.address}</address>
        <div className="space-y-2.5">
          <a className="flex items-center text-base leading-[23.28px] font-bold text-[#090909] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[991px]:text-sm" href={office.phoneHref}>
            <span className="mr-2.5 shrink-0"><PhoneIcon /></span>
            {office.phone}
          </a>
          <a className="flex items-center text-base leading-[23.28px] font-bold text-[#090909] transition-colors duration-300 hover:text-brand-red focus-visible:text-brand-red max-[991px]:text-sm" href={`mailto:${office.email}`}>
            <span className="mr-2.5 shrink-0"><MailIcon /></span>
            {office.email}
          </a>
        </div>
      </div>
    </article>
  );
}

export function ContactPage() {
  const { contacts, hero, inquiry, offices } = contactPageContent;

  return (
    <>
      <section className="overflow-hidden bg-white pt-[230px] pb-[50px] text-center max-[991px]:pt-[140px]" aria-labelledby="contact-page-title">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <h1 id="contact-page-title" className="inline-block font-sans text-[50px] leading-[66px] font-bold text-ink max-[991px]:text-[40px] max-[991px]:leading-[60px] max-[767px]:text-[30px] max-[767px]:leading-10">{hero.title}</h1>
            <p className="mt-4 text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">{hero.prompt}</p>
            <p className="text-lg leading-[34.2px] font-medium text-muted max-[991px]:text-base max-[991px]:leading-[30.4px]">{hero.description}</p>
          </div>
        </Container>
      </section>

      <section aria-label="Contact details">
        <Container>
          <div className="grid grid-cols-3 overflow-hidden rounded-[20px] border border-[#d9d9d9] max-[991px]:grid-cols-2 max-[767px]:grid-cols-1">
            <div className="px-[38px] py-[42px] max-[1199px]:px-5 max-[1199px]:py-8 max-[991px]:border-b max-[991px]:border-[#d9d9d9]"><ContactCard kind="sales" /></div>
            <div className="border-x border-[#d9d9d9] px-[38px] py-[42px] max-[1199px]:px-5 max-[1199px]:py-8 max-[991px]:border-r-0 max-[991px]:border-b max-[767px]:border-x-0"><ContactCard kind="jobs" /></div>
            <div className="col-span-1 flex items-center justify-center px-[38px] py-[42px] max-[1199px]:px-5 max-[1199px]:py-8 max-[991px]:col-span-2 max-[767px]:col-span-1">
              <div className="mx-auto flex max-w-[150px] flex-col justify-center text-center">
                <h2 className="mb-[17px] font-sans text-lg leading-[22.32px] font-bold text-ink uppercase max-[1199px]:mb-2.5 max-[1199px]:text-base">{contacts.social.title}</h2>
                <ul className="flex items-center justify-center gap-[15px]">
                  {contacts.social.profiles.map((profile) => (
                    <li key={profile.href}>
                      <a href={profile.href} target="_blank" rel="nofollow noopener noreferrer" aria-label={profile.label}>
                        <Image src={profile.icon} alt="" width={35} height={35} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 max-[991px]:py-[50px]" aria-labelledby="offices-title">
        <Container>
          <h2 id="offices-title" className="mb-10 text-center font-sans text-[35px] leading-[48.475px] font-bold text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">Our Offices</h2>
          <div className="grid grid-cols-2 gap-[30px] max-[991px]:gap-5 max-[767px]:grid-cols-1">
            {offices.map((office) => <OfficeCard key={office.city} office={office} />)}
          </div>
        </Container>
      </section>

      <section className="pt-0 pb-20 max-[991px]:pb-[50px]" aria-labelledby="inquiry-title">
        <Container>
          <div className="rounded-[30px] bg-[linear-gradient(178.87deg,#15c064_11.23%,rgba(0,209,255,0.660675)_33.98%,rgba(0,209,255,0)_78.28%)] p-0.5">
            <div className="rounded-[28px] bg-white px-[90px] pt-[90px] pb-[49px] max-[1199px]:p-10 max-[767px]:px-5 max-[767px]:pt-10 max-[767px]:pb-0">
              <div className="mb-[84px] grid grid-cols-[42%_58%] items-center max-[991px]:mb-10 max-[991px]:grid-cols-1 max-[991px]:text-center">
                <h2 id="inquiry-title" className="font-sans text-[35px] leading-[48.475px] font-bold text-ink max-[991px]:text-[30px] max-[991px]:leading-10 max-[767px]:text-2xl max-[767px]:leading-[33.24px]">{inquiry.title}</h2>
                <p className="text-lg leading-[34.2px] font-medium text-muted max-[991px]:mt-4 max-[991px]:text-base max-[991px]:leading-[30.4px]">{inquiry.description}</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
