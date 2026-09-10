import React from "react";
import Link from "next/link";

export default function Footer() {
  const practiceAreas = [
    { label: "Anxiety & Panic Therapy", href: "#specialties" },
    { label: "Trauma Therapy (EMDR)", href: "#specialties" },
    { label: "Burnout & Perfectionism", href: "#specialties" },
    { label: "Cognitive Behavioral (CBT)", href: "#methods" },
    { label: "Somatic & Body-Oriented", href: "#methods" },
    { label: "In-Person (Santa Monica)", href: "#contact" },
    { label: "Telehealth Across CA", href: "#contact" },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Dr. Maya", href: "#about-maya" },
    { label: "Specialties", href: "#specialties" },
    { label: "Approach", href: "#about" },
    { label: "FAQs", href: "#faqs" },
    { label: "Book a Session", href: "#contact" },
  ];

  return (
    <footer id="contact" className="w-full bg-white pt-24 pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12">
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-block group mb-6">
              <span className="font-serif text-3xl sm:text-[36px] lg:text-[40px] font-light tracking-wide text-[#2A1F1A] block leading-none">
                Dr. Maya Reynolds
              </span>
              <span className="text-[10px] sm:text-[10.5px] tracking-[0.3em] text-[#B5694C] uppercase font-semibold block mt-2.5 leading-none">
                Licensed Clinical Psychologist
              </span>
            </Link>

            <p className="text-[13px] sm:text-[13.5px] text-[#554238] font-light leading-[1.7] max-w-[340px]">
              Providing thoughtful, evidence-based psychotherapy for adults navigating
              anxiety, trauma, and burnout. Welcoming clients to my quiet Santa Monica
              office and virtually throughout California.
            </p>
          </div>

          {/* Column 2: Navigate (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#2A1F1A] mb-6">
              Navigate
            </h4>
            <ul className="space-y-3 text-[13px] text-[#554238] font-light">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#B5694C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practice Areas (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#2A1F1A] mb-6">
              Practice
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#554238] font-light">
              {practiceAreas.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#B5694C] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-semibold text-[#2A1F1A] mb-6">
                Contact &amp; Location
              </h4>
              <div className="space-y-1.5 text-[13px] text-[#554238] font-light leading-relaxed">
                <p className="font-medium text-[#2A1F1A]">Dr. Maya Reynolds, PsyD</p>
                <p>123th Street 45 W</p>
                <p>Santa Monica, CA 90401</p>
                <p className="pt-2">
                  <a
                    href="mailto:hello@drmayareynolds.com"
                    className="hover:text-[#B5694C] transition-colors"
                  >
                    hello@drmayareynolds.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:3105550194"
                    className="hover:text-[#B5694C] transition-colors"
                  >
                    (310) 555-0194
                  </a>
                </p>
              </div>
            </div>

            <p className="text-[12.5px] text-[#735144] font-light leading-[1.65] mt-8 max-w-[270px]">
              Serving Santa Monica, Venice, Brentwood, Malibu, Pacific Palisades, &amp;
              all of California via telehealth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
