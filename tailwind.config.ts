import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// DAESNA brand palette — blue + white only, no gradients, no purple
				brand: {
					navy: "#0A2342", // deepest navy — hero bg, footer
					blue: "#1E4D8C", // mid-tone — section accents, borders
					sky: "#3B82F6", // Tailwind blue-500 — CTA buttons, highlights
					pale: "#BFDBFE", // Tailwind blue-200 — soft accent backgrounds
					frost: "#EFF6FF", // Tailwind blue-50  — alternate section bg
					white: "#FFFFFF",
					offwhite: "#F8FAFC",
				},
			},
			fontFamily: {
				sans: [
					"var(--font-inter)",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					"sans-serif",
				],
			},
			borderRadius: {
				xl: "0.75rem",
				"2xl": "1rem",
				"3xl": "1.5rem",
			},
			transitionTimingFunction: {
				smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
			},
		},
	},
	plugins: [],
};

export default config;
