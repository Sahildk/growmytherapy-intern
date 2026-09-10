import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F8F5F0] pt-4 pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-24 min-h-[calc(100vh-100px)] flex items-center overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between">
        {/* Left: Dr. Maya Reynolds Santa Monica Office - flush against the very left viewport edge (x=0) */}
        <div className="w-full lg:w-[35vw] max-w-[670px] flex-shrink-0 order-2 lg:order-1">
          <div className="w-full overflow-hidden shadow-none">
            <Image
              src="/img/hero-main.jpg"
              alt="A peaceful, sunlit therapy sanctuary overlooking Santa Monica greenery"
              width={1000}
              height={1350}
              priority
              className="w-full aspect-[3/3.85] object-cover object-center block shadow-none"
            />
          </div>
        </div>

        {/* Center: Main Copy & CTA - prominent typography matching original */}
        <div className="w-full lg:flex-1 order-1 lg:order-2 flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-8 xl:pr-12 lg:max-w-[800px] z-10 py-10 lg:py-16 self-center">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-[12.5px] tracking-[0.2em] uppercase text-[#735144] font-medium leading-[1.7] mb-7 sm:mb-9">
            Individual Therapy In-Person &amp; Online · Santa Monica, CA
            <br className="hidden sm:inline" /> &amp; Across California
          </p>

          {/* Large Headline with Script yourself. */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[68px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-[-0.01em] mb-9 sm:mb-12">
            <span className="block md:whitespace-nowrap">Feel less overwhelmed,</span>
            <span className="block md:whitespace-nowrap">and finally come back</span>
            <span className="block md:whitespace-nowrap">
              to{" "}
              <span className="font-script text-[#B5694C] text-[1.14em] font-normal lowercase inline-block ml-1.5 align-baseline relative top-[1px]">
                yourself.
              </span>
            </span>
          </h1>

          {/* Subhead with generous breathing room */}
          <p className="text-[15.5px] sm:text-[17px] text-[#554238] font-light leading-[1.75] max-w-[540px] mb-10 sm:mb-12">
            Therapy for high-achieving adults navigating anxiety, trauma, and burnout in Santa Monica and across California.
          </p>

          {/* Book Appointment CTA */}
          <div>
            <Link
              href="#contact"
              className="btn-underline text-[#2A1F1A] hover:text-[#B5694C] tracking-[0.18em] text-[12px] uppercase font-medium pb-1 inline-block transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Right: Edge Waves Accent Image - flush against the very right viewport edge (x=1919) */}
        <div className="hidden lg:block w-[300px] flex-shrink-0 order-3 self-end">
          <div className="w-full overflow-hidden shadow-none">
            <Image
              src="/img/hero-waves.jpg"
              alt="Santa Monica Pacific sunset waves"
              width={500}
              height={323}
              className="w-full h-auto object-cover object-left block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
