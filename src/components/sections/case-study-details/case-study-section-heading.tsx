import { cn } from "@/lib/class-names";

type CaseStudySectionHeadingProps = {
  children: string;
  id?: string;
  className?: string;
};

export function CaseStudySectionHeading({
  children,
  id,
  className,
}: CaseStudySectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "relative pl-5 text-[35px] font-bold leading-normal text-[#282828] before:absolute before:top-1/2 before:left-0 before:h-[34px] before:w-[5px] before:-translate-y-1/2 before:bg-[linear-gradient(112deg,#15c064_-0.6%,#00d1ff_92.42%)] before:content-[''] max-[1199px]:text-[28px] max-[767px]:pl-[15px] max-[767px]:text-[24px] max-[767px]:before:h-[23px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
