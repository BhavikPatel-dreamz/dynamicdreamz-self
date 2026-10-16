import { getClientLogo } from "@/content/home";

const industryBrandLinks = [
  { src: "/assets/clients/supertails.svg", href: "https://supertails.com/" },
  { src: "/assets/clients/eleven-eleven.svg", href: "https://11-11.in/" },
  { src: "/assets/clients/bella-vita.svg", href: "https://bellavitaorganic.com/" },
  { src: "/assets/clients/bombay-shirt-company.svg", href: "https://www.bombayshirts.com/" },
  { src: "/assets/clients/popclub.svg", href: "https://popclub.co/" },
  { src: "/assets/clients/sri-sri-tattva.svg", href: "https://www.srisritattva.com/" },
  { src: "/assets/clients/tropicfeel.svg", href: "https://shop.tropicfeel.com/" },
  { src: "/assets/clients/renee.svg", href: "https://www.reneecosmetics.in/" },
  { src: "/assets/clients/royce-chocolate.svg", href: "https://royceindia.com/" },
  { src: "/assets/clients/tego.svg", href: "https://tego.fit/" },
  { src: "/assets/clients/nelter.svg", href: "https://www.nekterjuicebar.com/" },
  { src: "/assets/clients/rare-rabbit.svg", href: "https://thehouseofrare.com/" },
] as const;

export const industryBrandLogos = industryBrandLinks.map(({ src, href }) => ({
  ...getClientLogo(src),
  ...(src.endsWith("nelter.svg") ? { alt: "Nékter Juice Bar logo" } : {}),
  href,
}));
