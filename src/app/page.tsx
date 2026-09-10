import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HopeSection from "@/components/HopeSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import BannerQuoteSection from "@/components/BannerQuoteSection";
import AreasOfExpertiseSection from "@/components/AreasOfExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import MayaBioSection from "@/components/MayaBioSection";
import OurOfficeSection from "@/components/OurOfficeSection";
import HonoringSection from "@/components/HonoringSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import FindTherapistSection from "@/components/FindTherapistSection";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Header />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Hope / Welcome Section */}
      <HopeSection />

      {/* 4. Who We Help Section */}
      <WhoWeHelpSection />

      {/* 5. Full-Width Quote Banner Section */}
      <BannerQuoteSection />

      {/* 6. Areas of Expertise Section */}
      <AreasOfExpertiseSection />

      {/* 7. How We Work Section */}
      <HowWeWorkSection />

      {/* 8. Meet Dr. Maya Reynolds Bio Section */}
      <MayaBioSection />

      {/* 9. Our Office Custom Section (Part 3) */}
      <OurOfficeSection />

      {/* 10. Honoring Split Section */}
      <HonoringSection />

      {/* 10. Specialties Section */}
      <SpecialtiesSection />

      {/* 11. Find a Therapist (Appointment CTA) Section */}
      <FindTherapistSection />

      {/* 12. Footer */}
      <Footer />

      {/* 13. SubFooter Bar */}
      <SubFooter />
    </main>
  );
}
