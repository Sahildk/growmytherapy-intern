import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  return (
    <section className="relative w-full bg-[#E8D5CC] py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Copy & CTA */}
        <div className="w-full lg:flex-1 pl-6 sm:pl-10 md:pl-16 lg:pl-28 xl:pl-32 pr-6 sm:pr-10 lg:pr-16 max-w-[1080px] mb-12 lg:mb-0">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-[#735144] font-semibold mb-6">
            My Approach
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-tight mb-12">
            Evidence-based therapy that meets you where you actually are.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-[#3D2E27] font-light text-[15px] sm:text-[15.5px] leading-[1.8]">
            <div className="space-y-6">
              <p className="text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-[#2A1F1A] leading-relaxed">
                I don&apos;t believe in one-size-fits-all therapy.
              </p>
              <p>
                Each session is collaborative, thoughtful, and structured enough to feel
                grounded while leaving plenty of room for genuine reflection. I integrate
                Cognitive Behavioral Therapy (CBT), EMDR, mindfulness, and somatic techniques
                — tailoring each tool to your unique nervous system and life context.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Trauma and anxiety work is paced carefully, with deep emphasis on safety
                and real-world regulation. My goal is never just surface symptom relief —
                it&apos;s helping you build lasting insight, emotional resilience, and a deeper,
                kinder relationship with yourself that supports you long after our work concludes.
              </p>
            </div>
          </div>

          <div className="pt-12 md:pt-14">
            <Link
              href="#about"
              className="btn-underline text-[#2A1F1A] hover:text-[#B5694C] tracking-[0.18em] text-[12px] uppercase font-medium pb-1 inline-block transition-colors"
            >
              Learn More About My Approach
            </Link>
          </div>
        </div>

        {/* Right: Tall Portrait Photography - flush against right viewport edge (x=1919) */}
        <div className="w-full lg:w-[24vw] xl:w-[23vw] max-w-[460px] flex-shrink-0">
          <div className="w-full overflow-hidden shadow-none">
            <Image
              src="/img/how-we-work.jpg"
              alt="Calm private therapy room corner in Santa Monica"
              width={800}
              height={1066}
              className="w-full aspect-[3/4.2] object-cover object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
