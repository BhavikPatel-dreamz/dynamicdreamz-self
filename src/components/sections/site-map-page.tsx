import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteMapLinks, type SiteMapLinkItem } from "@/content/site-map";
import { siteMapCopy } from "@/content/site-map";

export type SiteMapPageProps = {
  links?: readonly SiteMapLinkItem[];
  className?: string;
};

export function SiteMapPage({
  links = siteMapLinks,
  className = "standard-text-content pt-[150px] pb-20 max-[991px]:pt-[120px] max-[767px]:pt-[100px] max-[767px]:pb-[50px]",
}: SiteMapPageProps) {
  return (
    <section className={className} data-section="sitemap" id="site-map-content">
      <Container>
        <h1 className="sr-only">{siteMapCopy.title}</h1>
        <ul className="list-none p-0">
          {links.map((item) => (
            <li
              className="relative mb-2.5 pl-[34px] font-sans text-base font-medium leading-normal text-[#252c15]"
              key={item.label}
            >
              <Image
                alt=""
                aria-hidden="true"
                className="absolute top-[1px] left-0 size-[22px]"
                height={22}
                src="/assets/icons/gradient-check.svg"
                width={22}
              />
              <Link
                className="text-[#252c15] transition-colors duration-200 hover:text-brand-red focus-visible:text-brand-red leading-normal tracking-[0.32px]"
                href={item.href}
              >
                {item.label}
              </Link>
              {item.children && item.children.length > 0 ? (
                <ul className="children mt-2.5 ml-5 list-none p-0">
                  {item.children.map((child) => (
                    <li
                      className="relative mb-2.5 pl-[34px] font-sans text-base font-medium leading-normal text-[#252c15]"
                      key={child.label}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        className="absolute top-[1px] left-0 size-[22px]"
                        height={22}
                        src="/assets/icons/gradient-check.svg"
                        width={22}
                      />
                      <Link
                        className="text-[#252c15] transition-colors duration-200 hover:text-brand-red focus-visible:text-brand-red leading-normal tracking-[0.32px]"
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
