# Dr. Maya Reynolds, PsyD — Clinical Psychology Practice

A modern, high-conversion, responsive web application for **Dr. Maya Reynolds, PsyD**, a licensed clinical psychologist based in Santa Monica, California specializing in anxiety, trauma, PTSD, burnout, and high-achiever therapy.

Built with **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview & Design Philosophy

This project was developed in two progressive phases:
1. **Pixel-Accurate Architectural Clone**: Replicating the modern, minimalist aesthetic and layout proportions of high-end private therapy practices.
2. **Editorial Redesign for Dr. Maya Reynolds**: Transforming the practice branding with a warm, grounded terracotta and linen palette (`#F8F5F0`, `#2A1F1A`, `#B5694C`), custom typography, authentic office and portrait assets, and an intuitive user experience tailored for high-achieving therapy clients.

---

## 🚀 Key Features & Components

- **✨ Modern Navigation & Mobile Drawer**:
  - Desktop header with smooth dropdown menus for *About*, *Specialties*, and *Methods*.
  - Fullscreen mobile menu overlay matching contemporary mobile UX standards, featuring drill-down submenu views with animated back navigation and an elongated oval CTA pill.
  - Background scroll locking during open mobile navigation state.

- **🌾 Hero Section**:
  - Dual-image balanced composition highlighting Dr. Maya's Santa Monica coastal sanctuary and authentic therapy setting.
  - Expressive serif headers paired with handcrafted script accents and clear CTAs.

- **🎯 Who We Help (Specialties)**:
  - Dynamic service cards detailing *Anxiety & Panic*, *Trauma & PTSD*, *Burnout & Perfectionism*, *High Achievers*, and *Life Transitions*.
  - Curated photographic assets with warm overlays and elegant typography.

- **📖 Dr. Maya Bio & Clinical Philosophy**:
  - Comprehensive clinical background, license credentials (PSY33458), and compassionate philosophy.

- **🏛️ Our Office (Custom Section - Part 3)**:
  - Custom showcase of Dr. Maya Reynolds' Santa Monica practice sanctuary (*123th Street 45 W, Santa Monica, CA 90401*).
  - Editorial presentation of authentic profile photography highlighting exposed brick, arched sunny windows, and restorative reading corner.
  - Pillars of comfort, acoustic confidentiality, in-person and hybrid telehealth availability, and immediate consultation booking prompt.

- **🧠 Evidence-Based Methods**:
  - Breakdown of therapeutic modalities: Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness, and Somatic Experiencing.

- **❓ Interactive FAQ Accordion**:
  - Smooth collapsible accordion addressing common client questions (fees, insurance, format, duration).

- **📅 Booking & Contact Section**:
  - Interactive appointment booking inquiry form with service selection, preferred format (In-Person / Telehealth), and message input.
  - Office location details, parking information, and direct contact options.

- **🌿 Editorial Footer**:
  - Structured site directory, professional disclaimers, crisis hotline resources, and copyright information.

---

## 🎨 Design System & Color Palette

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Background Linen** | `#F8F5F0` | Primary soft, warm canvas |
| **Charcoal Espresso** | `#2A1F1A` | High-contrast editorial typography & primary borders |
| **Terracotta / Rust** | `#B5694C` | Warm therapeutic accent, CTAs, badge labels |
| **Soft Sand Border** | `#E0D4CB` | Subtle divider lines and card borders |
| **Warm Card Fill** | `#EFE9DF` | Secondary card & section backgrounds |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **UI Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PostCSS**: Autoprefixer

---

## 💻 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sahildk/growmytherapy-intern.git
   cd growmytherapy-intern
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/
│   ├── fonts/           # Local web fonts
│   └── img/             # Practice imagery & photography assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout, metadata & fonts
│   │   ├── page.tsx     # Main home landing page
│   │   └── globals.css  # Global styles & Tailwind directives
│   └── components/
│       ├── Header.tsx            # Navigation & Fullscreen Mobile Menu
│       ├── HeroSection.tsx       # Hero banner with dual image layout
│       ├── WhoWeHelpSection.tsx  # Specialties & patient profiles
│       ├── MayaBioSection.tsx    # Dr. Maya Reynolds introduction
│       ├── OurOfficeSection.tsx  # Physical practice sanctuary (Part 3)
│       ├── HowWeWorkSection.tsx  # Therapy modalities & structure
│       ├── HopeSection.tsx       # Office & practice values
│       ├── SpecialtiesSection.tsx# Clinical focus areas & badges
│       ├── HonoringSection.tsx   # Santa Monica practice location
│       ├── BannerQuoteSection.tsx# Editorial quote banner
│       ├── FaqSection.tsx        # Interactive collapsible FAQ
│       ├── AppointmentSection.tsx# Appointment booking form
│       └── Footer.tsx            # Footer navigation & disclaimers
├── tailwind.config.ts   # Tailwind theme configurations
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata & scripts
```

---

## 📄 License & Attribution

Designed and engineered for **Grow My Therapy** internship evaluation. Content and assets curated for **Dr. Maya Reynolds, PsyD**.