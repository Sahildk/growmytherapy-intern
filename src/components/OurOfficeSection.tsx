import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Shield, Sparkles, SunMedium, Clock } from "lucide-react";

export default function OurOfficeSection() {
  const officeFeatures = [
    {
      icon: SunMedium,
      title: "Natural Light & Coastal Warmth",
      description:
        "Large historic arched windows, sheer linen drapery, and soft afternoon light create a serene, grounded atmosphere designed to calm your nervous system.",
    },
    {
      icon: Shield,
      title: "Dedicated Privacy & Discretion",
      description:
        "Tucked into a quiet Santa Monica suite with soundproofing and private waiting, ensuring your therapeutic experience remains completely confidential.",
    },
    {
      icon: Sparkles,
      title: "An Uncluttered, Restorative Space",
      description:
        "Thoughtfully designed with natural textures, comfortable seating, and an absence of sterile clinical distractions—a space where you can finally stop performing.",
    },
  ];

  return (
    <section id="office" className="relative w-full bg-[#F8F5F0] py-20 md:py-28 lg:py-32 border-t border-[#E0D4CB]/60 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-24 xl:px-32">
        {/* Top Header: Section Title & Narrative Lead */}
        <div className="max-w-[900px] mb-14 md:mb-20">
          <p className="text-[11.5px] sm:text-[12.5px] tracking-[0.24em] uppercase font-semibold text-[#B5694C] mb-4">
            The Santa Monica Practice Space
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-serif font-light text-[#2A1F1A] leading-[1.2] tracking-tight mb-7">
            A quiet, grounding sanctuary designed for healing and reflection.
          </h2>
          <p className="text-[16px] sm:text-[17.5px] text-[#554238] font-light leading-[1.8] max-w-[760px]">
            Therapy works best when you feel physically and emotionally at ease.
            Dr. Maya Reynolds’ Santa Monica office was intentionally curated as an
            antidote to the noise and pressure of daily life—a calm, private setting
            where you are invited to slow down, reconnect, and exhale.
          </p>
        </div>

        {/* Photography Showcase: 2 Authentic Profile Office Images with Editorial Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-16 lg:mb-24">
          {/* Primary Office Image (Brick Wall & Window View) */}
          <div className="lg:col-span-7 flex flex-col justify-between group">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-sm bg-[#EFE9DF] shadow-sm">
              <Image
                src="/img/office1.jpeg"
                alt="Dr. Maya Reynolds Santa Monica therapy room featuring historic brick wall, large sunny windows, and comfortable seating"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white text-xs tracking-wider uppercase font-medium drop-shadow-sm flex items-center justify-between">
                <span>Therapy Consultation Living Space</span>
                <span className="text-[11px] opacity-80">Natural Light &amp; Exposed Brick</span>
              </div>
            </div>
            <p className="text-xs text-[#735144] font-light tracking-wide mt-3.5 italic">
              Expansive windows overlooking Santa Monica provide natural sunlight throughout morning and afternoon sessions.
            </p>
          </div>

          {/* Secondary Office Image (Curated Library & Reflection Area) */}
          <div className="lg:col-span-5 flex flex-col justify-between group">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-full min-h-[320px] overflow-hidden rounded-sm bg-[#EFE9DF] shadow-sm">
              <Image
                src="/img/office2.jpeg"
                alt="Dr. Maya Reynolds office interior with curated psychological library, comfortable grey sofa, and peaceful indoor greenery"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white text-xs tracking-wider uppercase font-medium drop-shadow-sm flex items-center justify-between">
                <span>Reading &amp; Reflection Corner</span>
                <span className="text-[11px] opacity-80">Quiet &amp; Restorative</span>
              </div>
            </div>
            <p className="text-xs text-[#735144] font-light tracking-wide mt-3.5 italic">
              A private, distraction-free environment equipped with clinical resources and comfortable conversation seating.
            </p>
          </div>
        </div>

        {/* Feature Cards & Logistical Transparency Callout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-10 border-t border-[#E0D4CB]">
          {officeFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 sm:p-9 border border-[#E0D4CB]/70 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-[#B5694C]/60 hover:shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#E8D5CC]/40 text-[#B5694C] flex items-center justify-center mb-6">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-[#2A1F1A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#554238] font-light leading-[1.75]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Practice Details & Appointment Prompt Bar */}
        <div className="mt-14 sm:mt-16 bg-[#2A1F1A] text-[#F8F5F0] rounded-sm p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-lg">
          <div className="space-y-4 max-w-[700px]">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] font-semibold text-[#B5694C]">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} /> Santa Monica, CA
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} /> In-Person &amp; Hybrid Telehealth
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-light leading-snug">
              Visit the Santa Monica Office or Meet Online
            </h3>
            <p className="text-sm sm:text-[15px] text-[#E0D4CB] font-light leading-relaxed">
              Conveniently situated at <strong className="text-white font-medium">123th Street 45 W, Santa Monica, CA 90401</strong> with
              accessible parking and peaceful access to the coast. In-person therapy is held in our private suite, with secure California-wide telehealth available.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 h-[52px] rounded-full bg-[#B5694C] text-[#F8F5F0] text-[12px] tracking-[0.2em] uppercase font-medium flex items-center justify-center hover:bg-[#9E553B] transition-all duration-300 shadow-md"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
