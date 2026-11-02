export function FaqCircleCrossIcon({
  isOpen,
  className,
}: {
  isOpen: boolean;
  className?: string;
}) {
  if (isOpen) {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        height={30}
        viewBox="0 0 30 30"
        width={30}
      >
        <rect
          fill="#282828"
          fillOpacity="0.1"
          height="28"
          rx="14"
          stroke="#282828"
          strokeWidth="2"
          width="28"
          x="1"
          y="1"
        />
        <path
          d="M10.625 10.625L19.375 19.375M10.625 19.375L19.375 10.625"
          stroke="#282828"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={30}
      viewBox="0 0 30 30"
      width={30}
    >
      <rect
        height="28"
        rx="14"
        stroke="#282828"
        strokeWidth="2"
        width="28"
        x="1"
        y="1"
      />
      <path
        d="M8.8125 15H21.1869M14.9997 21.1872V8.81282"
        stroke="#282828"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
