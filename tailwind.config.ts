import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // A deep blue for branding
        secondary: "#facc15", // A warm yellow for contrast
        accent: "#14b8a6", // A fresh teal for highlights
        background: "#f5f5f5", // Light gray for soft backgrounds
        foreground: "#1f2937", // Dark gray for readable text
        card: "#ffffff", // White cards for a clean UI
        border: "#e5e7eb", // Subtle border colors
      },
    },
  },
  plugins: [],
} satisfies Config;
