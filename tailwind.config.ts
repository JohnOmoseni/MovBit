import { Raleway } from "next/font/google";
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

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
				border: "var(--border)",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},

				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
			},
			fontFamily: {
				raleway: ["Inter", "Arial", "sans-serif"],
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			fontSize: {
				tiny: "0.7rem",
				base: ["0.85rem", { lineHeight: "1.4" }],
				subtitle: ["clamp(1.1rem, 1vw, 20px)", { lineHeight: "1.2" }],
				secondary: ["clamp(1.5rem, 6vw, 32px) ", { lineHeight: "1.2" }],
				primary: ["clamp(2.5rem, 6vw, 48px)", { lineHeight: "1.2" }],
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
				".transition-sm": {
					transition: "all 0.3s linear",
				},
			};

			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
} satisfies Config;

export default config;
