import { cn } from "@/lib/class-names";

type RichTextProps = {
  html: string;
  variant?: "default" | "compact" | "services";
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

export function RichText({ html, variant = "default", className }: RichTextProps) {
  if (!html) return null;

  return (
    <div
      className={cn(
        "overflow-x-auto",
        sharedClasses,
        variant === "services" ? serviceListClasses : standardListClasses,
        variant === "compact" && "text-[14px] leading-6 [&_ul>li]:pl-[30px]",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
