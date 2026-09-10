import React from "react";
import Image from "next/image";

export default function BannerQuoteSection() {
  return (
    <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden">
      {/* Background Photography */}
      <Image
        src="/img/quote-banner.jpg"
        alt="Santa Monica Pacific coastline at golden dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Subtle Dark Overlay for Legibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left-Aligned Quote */}
      <div className="relative z-10 max-w-[1920px] w-full mx-auto px-6 sm:px-10 md:px-14 lg:px-28 py-20 md:py-28">
        <div className="max-w-2xl lg:max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-serif font-light leading-[1.28] tracking-wide !text-white">
            You don&apos;t have to keep bracing for what comes next.{" "}
            <br className="hidden sm:inline" />
            <span className="italic font-light !text-white">
              There&apos;s a version of your life where you actually feel at ease in it.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
