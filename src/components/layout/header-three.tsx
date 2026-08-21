import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export function HeaderThree() {
  return (
    <header className="header-three w-full py-[43px] max-[991px]:py-[26.5px]">
      <Container>
        <div className="header-row flex items-center justify-between">
          <div className="site-branding">
            <Link
              className="inline-flex shrink-0 -translate-y-[2.5px] max-[991px]:translate-y-0"
              href="/"
              aria-label="Dynamic Dreamz home"
            >
              <Image
                alt="Dynamic Dreamz - Shopify Platinum Partner"
                className="h-auto w-[225px] max-[1199px]:w-[180px] max-[991px]:w-[225px] max-[767px]:w-[170px] max-[379px]:w-[150px]"
                height={39}
                priority
                src={siteConfig.logo}
                width={257}
              />
            </Link>
          </div>

          <div className="contact-us max-[767px]:hidden">
            <ul className="flex items-center">
              <li className="flex items-center">
                <span className="icon mr-3.5 inline-block w-[34px] shrink-0">
                  <Image
                    alt="Skype Icon"
                    className="h-[34px] w-[34px] object-contain"
                    height={34}
                    src="/assets/icons/skype-icon.svg"
                    width={34}
                  />
                </span>
                <span className="text">
                  <span className="mb-2 block text-base font-medium leading-[25px] text-[#535353]">
                    Call us on Skype
                  </span>
                  <a
                    className="block text-base font-bold leading-[25px] text-ink transition-colors hover:text-brand-red"
                    href="skype:dynamicdreamz?chat"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    dynamicdreamz
                  </a>
                </span>
              </li>

              <li className="ml-[60px] flex items-center max-[991px]:ml-5">
                <span className="icon mr-3.5 inline-block w-[37px] shrink-0">
                  <Image
                    alt="Mail Icon"
                    className="h-[35px] w-[37px] object-contain"
                    height={35}
                    src="/assets/icons/envelope-icon.svg"
                    width={37}
                  />
                </span>
                <span className="text">
                  <span className="mb-2 block text-base font-medium leading-[25px] text-[#535353]">
                    Email us
                  </span>
                  <a
                    className="block text-base font-bold leading-[25px] text-ink transition-colors hover:text-brand-red"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
