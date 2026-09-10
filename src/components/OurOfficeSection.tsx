import React from "react";
import Image from "next/image";

export default function OurOfficeSection() {
  return (
    <section
      id="office"
      className="relative w-full bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E0D4CB]/70 overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32">
        {/* Top Header: Eyebrow, Non-Colliding Script Headline & Narrative Lead */}
        <div className="max-w-[840px] mb-14 md:mb-18">
          <p className="text-[11.5px] sm:text-[12.5px] tracking-[0.28em] uppercase font-semibold text-[#B5694C] mb-5">
            The Santa Monica Practice Space
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[54px] font-serif font-light text-[#2A1F1A] leading-[1.4] tracking-tight mb-10 sm:mb-14">
            <span className="block mb-5 sm:mb-7 lg:mb-8">A quiet, grounding sanctuary</span>
            <span className="block">
              designed for{" "}
              <span className="font-script text-[#B5694C] text-[0.98em] sm:text-[1.02em] lowercase font-normal inline-block ml-1.5 align-baseline relative top-[2px]">
                healing.
              </span>
            </span>
          </h2>
          <p className="text-[16px] sm:text-[17.5px] text-[#554238] font-light leading-[1.85] max-w-[720px]">
            Therapy works best when your nervous system feels physically and emotionally
            at ease. Dr. Maya Reynolds’ Santa Monica office was intentionally curated as
            an antidote to the noise and pace of daily life—a calm, private space
            where you are invited to slow down, reconnect, and exhale. Sessions are offered in-person in Santa Monica and via secure
            telehealth across California.
          </p>
        </div>

        {/* Asymmetric Editorial Diptych: Curated Practice Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Primary Hero Image: Grand Brick Wall & Window View (7 cols) */}
          <div className="lg:col-span-7 flex flex-col group">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm bg-[#EFE9DF] shadow-md border border-[#E0D4CB]/70">
              <Image
                src="/img/office1.jpeg"
                alt="Dr. Maya Reynolds Santa Monica therapy room with historic brick wall, sunny arched windows, and comfortable seating"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium drop-shadow-sm flex items-center justify-between">
                <span>Therapy Consultation Space</span>
                <span className="opacity-85">Natural Coastal Daylight</span>
              </div>
            </div>
            {/* Natural, Subtle Location & Ambiance Caption */}
            <p className="text-[13px] text-[#735144] font-light tracking-wide mt-3.5 italic flex flex-wrap items-center gap-x-2">
              <span>123th Street 45 W., Santa Monica</span>
              <span className="opacity-40">·</span>
              <span>Expansive historic windows provide soft coastal light for morning &amp; afternoon sessions</span>
            </p>
          </div>

          {/* Secondary Framed Image: Reflection Corner & Library (5 cols) */}
          <div className="lg:col-span-5 flex flex-col lg:pl-4">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.8] overflow-hidden rounded-sm bg-white p-3.5 sm:p-4 shadow-md border border-[#E0D4CB] group">
              <div className="relative w-full h-full overflow-hidden bg-[#EFE9DF]">
                <Image
                  src="/img/office2.jpeg"
                  alt="Dr. Maya Reynolds office interior with curated psychological library, comfortable sofa, and peaceful indoor olive tree"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Editorial Pull Quote with Warm Styling */}
            <div className="mt-6 pt-5 border-t border-[#E0D4CB]">
              <blockquote className="font-serif italic text-[#3D2E27] text-base sm:text-[17.5px] leading-[1.65] mb-2.5">
                “Clients often share that the space itself helps them feel more grounded the moment they walk through the door.”
              </blockquote>
              <p className="text-[11.5px] tracking-[0.22em] uppercase font-semibold text-[#B5694C]">
                — Dr. Maya Reynolds, PsyD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
