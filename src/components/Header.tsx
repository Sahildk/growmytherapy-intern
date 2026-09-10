"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileSubmenu(null);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const aboutLinks = [
    "About Dr. Maya",
    "Santa Monica Office",
    "Approach & Philosophy",
  ];

  const specialties = [
    "Anxiety & Panic",
    "Trauma & PTSD",
    "Burnout & Perfectionism",
    "High Achievers",
    "Life Transitions",
  ];

  const methods = [
    "Cognitive Behavioral (CBT)",
    "EMDR Therapy",
    "Mindfulness Practices",
    "Somatic & Body-Oriented",
  ];

  return (
    <header className="w-full bg-[#F8F5F0] relative z-50 transition-all duration-200">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28 py-7 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-3xl sm:text-[34px] lg:text-[38px] font-normal tracking-wide text-[#2A1F1A] leading-none">
            Dr. Maya Reynolds
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#B5694C] uppercase font-semibold mt-2 leading-none">
            Licensed Clinical Psychologist
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-[12.5px] font-medium tracking-[0.16em] uppercase text-[#2A1F1A]">
          {/* About Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#about"
              className="nav-link flex items-center gap-1 hover:text-[#B5694C] transition-colors"
            >
              About
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-[#F8F5F0] shadow-md border border-[#E0D4CB] min-w-[220px] py-2">
                {aboutLinks.map((item) => (
                  <Link
                    key={item}
                    href="#about"
                    className="block px-5 py-2 text-[11px] tracking-normal capitalize text-[#3D2E27] hover:bg-[#E8D5CC] hover:text-[#2A1F1A] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Specialties Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#specialties"
              className="nav-link flex items-center gap-1 hover:text-[#B5694C] transition-colors"
            >
              Specialties
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-[#F8F5F0] shadow-md border border-[#E0D4CB] min-w-[240px] py-2">
                {specialties.map((item) => (
                  <Link
                    key={item}
                    href="#specialties"
                    className="block px-5 py-2 text-[11px] tracking-normal capitalize text-[#3D2E27] hover:bg-[#E8D5CC] hover:text-[#2A1F1A] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Methods Dropdown */}
          <div className="relative group py-2">
            <Link
              href="#methods"
              className="nav-link flex items-center gap-1 hover:text-[#B5694C] transition-colors"
            >
              Methods
            </Link>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-[#F8F5F0] shadow-md border border-[#E0D4CB] min-w-[240px] py-2">
                {methods.map((item) => (
                  <Link
                    key={item}
                    href="#methods"
                    className="block px-5 py-2 text-[11px] tracking-normal capitalize text-[#3D2E27] hover:bg-[#E8D5CC] hover:text-[#2A1F1A] transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <Link
            href="#faqs"
            className="nav-link hover:text-[#B5694C] transition-colors"
          >
            FAQs
          </Link>

          {/* Book a Session Button */}
          <Link
            href="#contact"
            className="px-6 h-[50px] rounded-full border border-[#B5694C] text-[11px] tracking-[0.18em] uppercase text-[#B5694C] flex items-center justify-center hover:bg-[#B5694C] hover:text-white transition-all duration-300 ml-4 font-medium"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden p-2 text-[#2A1F1A] hover:opacity-75 focus:outline-none"
          aria-label="Open navigation menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Fullscreen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#F8F5F0] flex flex-col justify-between px-7 py-7 sm:px-10 sm:py-8 lg:hidden animate-in fade-in duration-200">
          {/* Header Row: Brand Logo + Close 'X' */}
          <div className="flex items-start justify-between">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-3xl sm:text-[34px] font-normal tracking-wide text-[#2A1F1A] leading-none">
                Dr. Maya Reynolds
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.28em] text-[#B5694C] uppercase font-semibold mt-2 leading-none">
                Licensed Clinical Psychologist
              </span>
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
              }}
              className="p-1 text-[#2A1F1A] hover:opacity-70 focus:outline-none"
              aria-label="Close navigation menu"
            >
              <X size={30} strokeWidth={1.2} />
            </button>
          </div>

          {/* Middle: Links / Submenus */}
          <div className="my-auto py-8">
            {mobileSubmenu === null ? (
              /* Main Menu Items */
              <nav className="flex flex-col space-y-7 sm:space-y-8">
                <Link
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] hover:text-[#B5694C] transition-colors text-left"
                >
                  About
                </Link>

                <button
                  onClick={() => setMobileSubmenu("specialties")}
                  className="flex items-center justify-between text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] hover:text-[#B5694C] transition-colors text-left w-full group"
                >
                  <span>Specialties</span>
                  <ChevronRight
                    size={26}
                    strokeWidth={1.3}
                    className="text-[#2A1F1A] group-hover:text-[#B5694C] transition-colors"
                  />
                </button>

                <button
                  onClick={() => setMobileSubmenu("methods")}
                  className="flex items-center justify-between text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] hover:text-[#B5694C] transition-colors text-left w-full group"
                >
                  <span>Methods</span>
                  <ChevronRight
                    size={26}
                    strokeWidth={1.3}
                    className="text-[#2A1F1A] group-hover:text-[#B5694C] transition-colors"
                  />
                </button>

                <Link
                  href="#faqs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] hover:text-[#B5694C] transition-colors text-left"
                >
                  FAQs
                </Link>
              </nav>
            ) : mobileSubmenu === "specialties" ? (
              /* Specialties Submenu */
              <div className="flex flex-col">
                <button
                  onClick={() => setMobileSubmenu(null)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#B5694C] hover:opacity-80 transition-opacity mb-8 text-left"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                  <span>Back</span>
                </button>

                <h3 className="text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] mb-6">
                  Specialties
                </h3>

                <div className="flex flex-col space-y-4 pl-1">
                  {specialties.map((item) => (
                    <Link
                      key={item}
                      href="#specialties"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileSubmenu(null);
                      }}
                      className="text-lg text-[#3D2E27] font-light hover:text-[#B5694C] transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* Methods Submenu */
              <div className="flex flex-col">
                <button
                  onClick={() => setMobileSubmenu(null)}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#B5694C] hover:opacity-80 transition-opacity mb-8 text-left"
                >
                  <ChevronLeft size={16} strokeWidth={1.5} />
                  <span>Back</span>
                </button>

                <h3 className="text-[26px] sm:text-[30px] font-light tracking-[0.06em] uppercase text-[#2A1F1A] mb-6">
                  Methods
                </h3>

                <div className="flex flex-col space-y-4 pl-1">
                  {methods.map((item) => (
                    <Link
                      key={item}
                      href="#methods"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileSubmenu(null);
                      }}
                      className="text-lg text-[#3D2E27] font-light hover:text-[#B5694C] transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom: Wide Oval Pill Button */}
          <div className="w-full flex justify-center pb-4 pt-2">
            <Link
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSubmenu(null);
              }}
              className="w-full max-w-[340px] h-[54px] rounded-[50px] border border-[#2A1F1A] text-[12px] sm:text-[13px] tracking-[0.22em] uppercase text-[#2A1F1A] flex items-center justify-center hover:bg-[#2A1F1A] hover:text-[#F8F5F0] transition-all duration-300 font-normal"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
