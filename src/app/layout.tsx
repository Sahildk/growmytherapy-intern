import type { Metadata } from "next";
import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA specializing in anxiety, trauma, and burnout therapy for high-achieving adults. In-person & telehealth across California.",
  icons: {
    icon: "/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="font-sans antialiased text-[#2A1F1A] bg-white">
        {children}
      </body>
    </html>
  );
}
