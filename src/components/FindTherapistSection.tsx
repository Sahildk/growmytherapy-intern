import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FindTherapistSection() {
  return (
    <section className="relative w-full bg-[#F8F5F0] py-20 md:py-28 lg:py-36 overflow-hidden flex items-center">
      {/* Left: Journal Writing Image - flush against the very left viewport edge */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[14vw] max-w-[260px] h-[560px] xl:h-[620px] overflow-hidden">
        <Image
          src="/img/therapist-left.jpg"
          alt="Woman writing reflective notes in journal"
          fill
          sizes="(max-width: 1024px) 0vw, 15vw"
          className="object-cover object-right block"
        />
      </div>

      {/* Center & Layout Container */}
      <div className="max-w-[1920px] w-full mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left spacing placeholder on desktop to balance the flush left image */}
          <div className="hidden lg:block w-[14vw] max-w-[260px] flex-shrink-0" />

          {/* Center: Main Appointment Copy & Oval CTA */}
          <div className="w-full lg:flex-1 lg:max-w-[620px] xl:max-w-[660px] flex flex-col justify-center lg:px-8 xl:px-12 z-10">
            <p className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-[#735144] font-semibold mb-6">
              Schedule A Session
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-tight mb-8">
              <span className="block">Find out if we&apos;re the right</span>
              <span className="block mt-1 sm:mt-2">
                fit for{" "}
                <span className="font-script text-[#B5694C] text-[1.18em] lowercase font-normal inline-block ml-1.5 align-baseline relative top-[1px]">
                  you.
                </span>
              </span>
            </h2>

            <p className="text-[15px] sm:text-[15.5px] text-[#3D2E27] font-light leading-[1.8] mb-6">
              Taking the step to reach out to a therapist is an act of courage. I work best with
              adults who are ready to reflect, willing to go a little deeper, and looking for a
              therapist who brings both warmth and evidence-based expertise. If that sounds like you,
              I&apos;d love to connect.
            </p>

            <p className="text-[15px] sm:text-[15.5px] text-[#3D2E27] font-light leading-[1.8] mb-9">
              Click the button below to schedule a free 15-minute consultation.
            </p>

            <div>
              <Link
                href="#contact"
                className="w-[130px] h-[54px] rounded-full border border-[#B5694C] text-[11.5px] tracking-[0.18em] uppercase text-[#B5694C] flex items-center justify-center hover:bg-[#B5694C] hover:text-white transition-all duration-300 font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Right spacing placeholder on desktop to balance the flush right image */}
          <div className="hidden lg:block w-[35vw] max-w-[680px] flex-shrink-0" />

          {/* Mobile/Tablet Fallback for right image */}
          <div className="lg:hidden w-full max-w-[500px] mx-auto mt-10 overflow-hidden aspect-[4/3.8] relative shadow-none">
            <Image
              src="/img/therapist-right.jpg"
              alt="Hands holding warm terracotta mug"
              fill
              className="object-cover object-center block"
            />
          </div>
        </div>
      </div>

      {/* Right: Pointing at Sand Image - flush against the very right viewport edge */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[35vw] max-w-[680px] h-[560px] xl:h-[620px] overflow-hidden">
        <Image
          src="/img/therapist-right.jpg"
          alt="Hands holding warm terracotta mug"
          fill
          sizes="(max-width: 1024px) 0vw, 35vw"
          className="object-cover object-left block"
        />
      </div>
    </section>
  );
}
