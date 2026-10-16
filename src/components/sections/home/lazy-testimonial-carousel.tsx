"use client";

import dynamic from "next/dynamic";

import type { Testimonial } from "@/content/home-client";
import { LazyMount } from "@/components/ui/lazy-mount";

const DynamicTestimonialCarousel = dynamic(
  () =>
    import("@/components/sections/testimonial-carousel").then(
      (mod) => mod.TestimonialCarousel,
    ),
  { ssr: false },
);

type LazyTestimonialCarouselProps = {
  items?: readonly Testimonial[];
  fallback: React.ReactNode;
  rootMargin?: string;
};

export function LazyTestimonialCarousel({
  items,
  fallback,
  rootMargin,
}: LazyTestimonialCarouselProps) {
  return (
    <LazyMount fallback={fallback} rootMargin={rootMargin}>
      <DynamicTestimonialCarousel items={items} />
    </LazyMount>
  );
}
