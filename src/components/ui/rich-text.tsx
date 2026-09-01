import { cn } from "@/lib/class-names";

type RichTextProps = {
  html: string;
  variant?: "default" | "compact" | "services" | "blog";
  className?: string;
};

const sharedClasses =
  "text-[16px] font-medium leading-[30.4px] text-[#535353] " +
  "[&_p:not(:last-child)]:mb-6 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a:hover]:text-brand-red " +
  "[&_strong]:font-bold [&_strong]:text-[#3f3f3f] [&_h3]:mb-3 [&_h3]:text-[20px] [&_h3]:font-bold [&_h3]:text-[#282828] " +
  "[&_h4]:mb-3 [&_h4]:text-[18px] [&_h4]:font-bold [&_h4]:text-[#282828] [&_table]:w-full [&_table]:border-collapse " +
  "[&_th]:border [&_th]:border-[#dfdfdf] [&_th]:bg-[#f7f7f7] [&_th]:p-3 [&_th]:text-left [&_th]:font-bold " +
  "[&_td]:border [&_td]:border-[#dfdfdf] [&_td]:p-3 max-[767px]:text-[15px] max-[767px]:leading-[28px]";

const standardListClasses =
  "[&_ul]:mb-6 [&_ul]:list-none [&_ul:last-child]:mb-0 [&_ul>li]:relative [&_ul>li]:pl-[34px] " +
  "[&_ul>li:not(:last-child)]:mb-[15px] [&_ul>li]:before:absolute [&_ul>li]:before:top-[3px] [&_ul>li]:before:left-0 " +
  "[&_ul>li]:before:size-[22px] [&_ul>li]:before:bg-[url('/assets/icons/gradient-check.svg')] [&_ul>li]:before:bg-contain " +
  "[&_ul>li]:before:bg-no-repeat [&_ul>li]:before:content-[''] [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 " +
  "[&_ol>li:not(:last-child)]:mb-[15px]";

const serviceListClasses =
  "[&_ul]:flex [&_ul]:flex-wrap [&_ul]:items-center [&_ul]:gap-x-6 [&_ul]:gap-y-0 [&_ul]:list-none " +
  "[&_ul>li]:mb-6 [&_ul>li]:rounded-full [&_ul>li]:bg-[linear-gradient(97deg,#e8f9ef_28.5%,#e6fafd_91.82%)] " +
  "[&_ul>li]:px-[23px] [&_ul>li]:py-[5px]";

const blogClasses =
  "[&_p]:mb-[15px] [&_p:last-child]:mb-0 [&_h2]:mt-[30px] [&_h2]:mb-[15px] [&_h2]:text-[24px] [&_h2]:leading-[normal] [&_h2]:font-normal [&_h2]:text-[#282828] " +
  "[&_h3]:mb-2.5 [&_h3]:text-[20px] [&_h3]:leading-[28.8px] [&_h3]:font-normal [&_h3]:text-[#282828] " +
  "[&_h4]:mb-2.5 [&_h4]:text-[17px] [&_h4]:leading-[24.92px] [&_h4]:font-normal [&_h4]:text-[#282828] " +
  "[&_ol]:mb-6 [&_ul]:mb-6 [&_ol>li]:mb-[18px] [&_ul>li]:mb-[18px] [&_ol>li]:text-[16px] [&_ul>li]:text-[16px] [&_ol>li]:leading-[27px] [&_ul>li]:leading-[27px] [&_ol>li]:tracking-[0.32px] [&_ul>li]:tracking-[0.32px] " +
  "[&_ul>li]:relative [&_ul>li]:pl-[34px] [&_ul>li]:before:absolute [&_ul>li]:before:top-[3px] [&_ul>li]:before:left-0 [&_ul>li]:before:size-[22px] " +
  "[&_ul>li]:before:bg-[url('/assets/icons/bullets-icon.svg')] [&_ul>li]:before:bg-contain [&_ul>li]:before:bg-no-repeat [&_ul>li]:before:content-[''] " +
  "[&_ol_ol]:list-[lower-alpha] [&_ol>li::marker]:font-bold [&_table]:my-6 [&_table]:text-[16px] [&_table]:font-medium [&_img]:h-auto [&_img]:w-full [&_img]:max-w-full [&_figure]:my-6 [&_figure]:text-center [&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-sm " +
  "[&_a]:text-brand-red [&_a]:underline [&_a:hover]:no-underline [&_br]:hidden [&_ul>li>ul]:mt-6 [&_ul>li>ul]:ml-0 " +
  "[&_h2_strong]:font-normal [&_h3_strong]:font-normal [&_h4_strong]:font-normal [&_h5_strong]:font-normal [&_h6_strong]:font-normal " +
  "max-[1199px]:[&_table]:whitespace-nowrap max-[991px]:[&_h2]:mt-5 max-[991px]:[&_h3]:text-[18px] max-[991px]:[&_h3]:leading-[26.8px] max-[991px]:[&_h4]:text-[16px] max-[991px]:[&_h4]:leading-[23.92px]";

export function RichText({ html, variant = "default", className }: RichTextProps) {
  if (!html) return null;

  return (
    <div
      className={cn(
        "overflow-x-auto",
        sharedClasses,
        variant === "services" ? serviceListClasses : standardListClasses,
        variant === "blog" && blogClasses,
        variant === "compact" && "text-[14px] leading-6 [&_ul>li]:pl-[30px]",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
