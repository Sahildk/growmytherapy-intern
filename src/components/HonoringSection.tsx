import React from "react";
import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left: California Coast Trail Photography - flush against the very left viewport edge (x=0) */}
        <div className="w-full lg:w-[53.5vw] max-w-[1026px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none">
            <Image
              src="/img/honoring-coast.jpg"
              alt="California coastal trail overlooking the Pacific ocean at warm golden sunset"
              width={1026}
              height={720}
              priority
              className="w-full aspect-[1026/720] object-cover object-center block"
            />
          </div>
        </div>

        {/* Right: Serif Statement with Script Ampersand */}
        <div className="w-full lg:flex-1 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-20 xl:pr-28 py-10 lg:py-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-tight">
            <span className="block">Honoring where you’ve been</span>
            <span className="block mt-1 sm:mt-2">
              <span className="font-script text-[#B5694C] text-[1.28em] font-normal inline-block mr-2 align-baseline">
                &amp;
              </span>
              helping you find your way
            </span>
            <span className="block mt-1 sm:mt-2">back to yourself.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
