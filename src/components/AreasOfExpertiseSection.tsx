import React from "react";
import Link from "next/link";

export default function AreasOfExpertiseSection() {
  const col1 = [
    { label: "Anxiety & Panic", href: "#specialties" },
    { label: "Trauma & PTSD", href: "#specialties" },
    { label: "Burnout & Exhaustion", href: "#specialties" },
    { label: "Perfectionism & Inner Critic", href: "#specialties" },
    { label: "Life Transitions", href: "#specialties" },
    { label: "Chronic Stress", href: "#specialties" },
  ];

  const col2 = [
    { label: "Cognitive Behavioral Therapy (CBT)", href: "#specialties" },
    { label: "EMDR Therapy", href: "#specialties" },
    { label: "Mindfulness Practices", href: "#specialties" },
    { label: "Body-Oriented & Somatic", href: "#specialties" },
    { label: "Self-Worth & Identity", href: "#specialties" },
    { label: "...And More.", href: "#specialties" },
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-36">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left: Heading with Script Accent */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-light text-[#2A1F1A] leading-none tracking-tight">
              <span className="block">My areas of</span>
              <span className="block mt-3 lg:mt-4 font-script text-[#B5694C] text-[1.25em] lowercase font-normal">
                expertise
              </span>
            </h2>
          </div>

          {/* Right: 2-Column Bordered Specialty List */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0">
            {/* Column 1 */}
            <div className="flex flex-col">
              {col1.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group py-5 sm:py-6 border-b border-[#E0D4CB] last:border-b-0 flex items-center justify-between"
                >
                  <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-light text-[#3D2E27] group-hover:text-[#B5694C] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              {col2.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group py-5 sm:py-6 border-b border-[#E0D4CB] last:border-b-0 flex items-center justify-between"
                >
                  <span className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase font-light text-[#3D2E27] group-hover:text-[#B5694C] transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
