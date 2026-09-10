import React from "react";
import Image from "next/image";

export default function HopeSection() {
  return (
    <section className="relative w-full bg-[#F8F5F0] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Content Container */}
        <div className="w-full lg:flex-1 pl-6 sm:pl-10 md:pl-16 lg:pl-28 xl:pl-32 pr-6 sm:pr-10 lg:pr-16 max-w-[1020px] mb-12 lg:mb-0">
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-tight mb-12 md:mb-16">
            You&apos;re doing everything right — and still
            <br className="hidden sm:inline" /> feeling like it&apos;s never enough.
          </h2>

          {/* 2-Column Copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <div className="space-y-6">
              <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#B5694C] leading-relaxed">
                At Dr. Maya Reynolds&apos; practice, you&apos;re allowed to slow down.
              </p>
              <p className="text-[15px] sm:text-[15.5px] text-[#554238] font-light leading-[1.8]">
                Many of my clients are thoughtful, capable people who look put-together
                on the outside. But inside, there&apos;s constant worry, a body that won&apos;t settle,
                or a quiet sense that something important has been lost along the way.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-[15px] sm:text-[15.5px] text-[#554238] font-light leading-[1.8]">
                I offer a space to stop performing and start understanding. Together,
                we slow down, go deeper, and help you feel more like yourself — in your
                daily life, not just in our sessions. We integrate CBT, EMDR, and body-oriented
                approaches to create lasting, felt shifts.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Santa Monica Therapy Office - flush against right viewport edge (x=1919) */}
        <div className="w-full lg:w-[46vw] xl:w-[48vw] max-w-[920px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none">
            <Image
              src="/img/hope-welcome.jpg"
              alt="Serene therapy consultation space with comfortable seating and natural light"
              width={920}
              height={760}
              className="w-full aspect-[920/760] object-cover object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
