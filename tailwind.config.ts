import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#FFFFFF33",
        ring: "rgba(255,255,255,0.2)",
        background: {
          DEFAULT: "#060A1A",
          100: "#000B33",
          200: "rgba(27,30,92, 0.6)",
          300: "#000f47",
        },
        foreground: {
          DEFAULT: "#fff",
          100: "rgba(255,255,255,0.5)",
        },
        secondary: {
          DEFAULT: "#353893",
          100: "#7878FA",
        },
      },
      fontFamily: {
        raleway: ["Raleway", "Arial", "sans-serif"],
        inter: ["Inter", "Arial", "sans-serif"],
      },
      fontSize: {
        base: ["0.85rem", { lineHeight: "1.4" }],
        subtitle: ["clamp(1.1rem, 3vw, 20px)", { lineHeight: "1.2" }],
        secondaryFont: ["clamp(2rem, 6vw, 32px) ", { lineHeight: "1.2" }],
        primaryFont: ["clamp(2.5rem, 6vw, 48px)", { lineHeight: "1.2" }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".h-dvh": {
          height: "100dvh",
        },
        "clip-circle": {
          "clip-path": "circle()",
        },
        ".transition-sm": {
          transition: "all 0.3s linear",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
} satisfies Config;

export default config;
