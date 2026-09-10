import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F8F5F0",
        sand: "#E8D5CC",
        sage: "#B5694C",
        "teal-dark": "#9E5A40",
        subfooter: "#9E5A40",
        charcoal: "#2A1F1A",
        body: "#3D2E27",
        faint: "#E0D4CB",
        terracotta: "#B5694C",
        "terracotta-dark": "#9E5A40",
        "dusty-rose": "#C4907A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Infant", "Georgia", "serif"],
        sans: ["var(--font-mulish)", "Mulish", "Muli", "sans-serif"],
        script: ["PrintedMoments", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
