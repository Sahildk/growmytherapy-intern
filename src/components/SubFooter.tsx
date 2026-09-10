import React from "react";
import Link from "next/link";

export default function SubFooter() {
  return (
    <div className="w-full bg-[#9E5A40] py-4 sm:py-5 text-white">
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-28 text-left">
        <p className="text-[11px] sm:text-xs font-light tracking-wide opacity-95">
          <span>License: California Licensed Clinical Psychologist</span>
          <span className="mx-2 opacity-60">|</span>
          <Link href="#terms" className="hover:underline transition-all">
            Terms of Use
          </Link>
          <span className="mx-2 opacity-60">|</span>
          <Link href="#privacy" className="hover:underline transition-all">
            Privacy Policy
          </Link>
          <span className="mx-2 opacity-60">|</span>
          <Link href="#disclaimer" className="hover:underline transition-all">
            Disclaimer
          </Link>
          <span className="mx-2 opacity-60">|</span>
          <span>© 2025 Dr. Maya Reynolds, PsyD. All rights reserved.</span>
        </p>
      </div>
    </div>
  );
}
