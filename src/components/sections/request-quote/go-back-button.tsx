"use client";

import { useRouter } from "next/navigation";

import { sharedUiCopy } from "@/content/common";

export function GoBackButton() {
  const router = useRouter();

  function handleGoBack() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <button
      type="button"
      className="group flex cursor-pointer items-center border-0 bg-transparent p-0 text-base font-bold text-[#404040] transition-colors duration-300 hover:text-[#AD5151] focus-visible:text-[#AD5151]"
      onClick={handleGoBack}
      aria-label="Go back to previous page"
    >
      <svg
        className="mr-2 h-3 w-5 transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19 6.75C19.4142 6.75 19.75 6.41421 19.75 6C19.75 5.58579 19.4142 5.25 19 5.25V6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM19 5.25L1 5.25V6.75L19 6.75V5.25Z"
          fill="currentColor"
        />
      </svg>
      {sharedUiCopy.goBack}
    </button>
  );
}
