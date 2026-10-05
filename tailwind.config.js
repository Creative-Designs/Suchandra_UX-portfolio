/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#13161c",
          muted: "#4b5160",
          soft: "#6b7280",
        },
        paper: {
          DEFAULT: "#fbfaf8",
          raised: "#ffffff",
        },
        line: {
          DEFAULT: "#e4e2dd",
          strong: "#cfccc4",
        },
        accent: {
          DEFAULT: "#1f3a5f",
          soft: "#3c5a82",
          tint: "#eaeff5",
        },
        dark: {
          bg: "#0d0f13",
          raised: "#15181f",
          ink: "#eef0f4",
          muted: "#9ca3af",
          line: "#262a33",
          accent: "#7fa3cf",
          accentTint: "#1a2635",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          "'Source Serif 4'",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "1180px",
      },
      fontSize: {
        "display-lg": ["clamp(2.6rem, 4.6vw, 4.2rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 3.2vw, 2.9rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
}
