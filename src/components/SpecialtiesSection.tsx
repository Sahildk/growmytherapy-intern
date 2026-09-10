import React from "react";
import Link from "next/link";

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Anxiety & Panic Therapy",
      description:
        "From chronic overthinking to physical panic symptoms, anxiety can take over quietly. I help you understand what's happening in your nervous system and develop practical, lasting ways to feel more regulated, grounded, and at ease.",
      href: "#specialties",
      hasLink: true,
    },
    {
      title: "Trauma Therapy (EMDR & Somatic)",
      description:
        "Whether shaped by a single painful event or years of difficult experiences, we work at your pace — with EMDR and body-oriented approaches — to process what happened and help you feel safer in your own skin.",
      href: "#specialties",
      hasLink: true,
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "High-achieving adults often reach a point of deep exhaustion without realizing how they got there. Therapy provides a space to slow down, understand the internal pressures driving you, and reconnect with what actually matters.",
      href: "#specialties",
      hasLink: true,
    },
    {
      title: "CBT & Mindfulness",
      description:
        "Using practical, evidence-based tools, we examine thought patterns and beliefs that keep you stuck. Mindfulness-based strategies help you become aware of your experience — so you can respond to life rather than just react.",
      href: "#specialties",
      hasLink: true,
    },
  ];

  return (
    <section id="specialties" className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Section Headline with Script Accent */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-light text-[#2A1F1A] leading-[1.15] tracking-tight">
              <span className="block">My</span>
              <span className="block my-2 sm:my-3 font-script text-[#B5694C] text-[1.26em] lowercase font-normal">
                specialties
              </span>
              <span className="block font-serif font-light">
                include...
              </span>
            </h2>
          </div>

          {/* Right: 2x2 Grid of Specialties */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16">
            {specialties.map((item) => (
              <div key={item.title} className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-[27px] font-serif font-light text-[#2A1F1A] mb-4 tracking-normal">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] sm:text-[15px] text-[#554238] font-light leading-[1.8] mb-6">
                    {item.description}
                  </p>
                </div>
                {item.hasLink ? (
                  <div>
                    <Link
                      href={item.href}
                      className="btn-underline text-[#2A1F1A] hover:text-[#B5694C] tracking-[0.16em] text-[11.5px] uppercase font-medium pb-1 inline-block transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                ) : (
                  <div className="h-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
