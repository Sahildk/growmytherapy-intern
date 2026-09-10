import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MayaBioSection() {
  return (
    <section id="about-maya" className="w-full bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-b border-[#E0D4CB]">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Dr. Maya Reynolds Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] overflow-hidden rounded-sm shadow-md border-8 border-white bg-[#E8D5CC]">
              <Image
                src="/img/maya-portrait.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                width={800}
                height={1000}
                priority
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right: Bio & Background */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag / Eyebrow */}
            <p className="text-[11.5px] sm:text-[12.5px] tracking-[0.22em] uppercase font-semibold text-[#B5694C] mb-4">
              Licensed Clinical Psychologist · Santa Monica, CA
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#2A1F1A] leading-[1.18] tracking-tight mb-6">
              Hi, I&apos;m Dr. Maya Reynolds.
            </h2>

            {/* Subhead with script accent */}
            <p className="text-lg sm:text-xl font-serif text-[#735144] italic mb-8">
              A warm, collaborative space to find your way back to{" "}
              <span className="font-script not-italic text-[#B5694C] text-[1.18em] inline-block ml-1 align-baseline relative top-[1px]">
                yourself.
              </span>
            </p>

            {/* Body Copy */}
            <div className="space-y-5 text-[14.5px] sm:text-[15.5px] text-[#3D2E27] font-light leading-[1.75] mb-8">
              <p>
                I am a licensed clinical psychologist in Santa Monica, California,
                providing thoughtful psychotherapy for adults who look successful and
                capable on the outside, but internally feel exhausted, overwhelmed by
                anxiety, or weighed down by past experiences.
              </p>
              <p>
                My work is grounded in evidence-based modalities including Cognitive
                Behavioral Therapy (CBT), EMDR, and somatic mindfulness. I offer a
                space where you don&apos;t have to perform or keep up appearances — where
                we can slow down, unravel chronic stress patterns, and build lasting,
                felt resilience.
              </p>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-9">
              <span className="px-3.5 py-1.5 bg-white border border-[#E0D4CB] text-[11px] tracking-wider uppercase text-[#735144] font-medium">
                PsyD in Clinical Psychology
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E0D4CB] text-[11px] tracking-wider uppercase text-[#735144] font-medium">
                EMDR Trained Clinician
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E0D4CB] text-[11px] tracking-wider uppercase text-[#735144] font-medium">
                CBT &amp; Somatic Focus
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E0D4CB] text-[11px] tracking-wider uppercase text-[#735144] font-medium">
                In-Person &amp; Telehealth (CA)
              </span>
            </div>

            {/* CTA Link */}
            <div>
              <Link
                href="#contact"
                className="btn-underline text-[#2A1F1A] hover:text-[#B5694C] tracking-[0.16em] text-[12px] uppercase font-medium pb-1 inline-block transition-colors"
              >
                Schedule an Initial Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
