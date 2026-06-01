/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        display: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        primary: {
          500: "#3ecf8e",
          600: "#34b97a",
          700: "#fff",
        },
        secondary: {
          500: "#7c83ff",
          600: "#6366f1",
          700: "#4f46e5",
        },
        tertiary: {
          500: "#f59e0b",
        },
        neutral: {
          100: "#f3f4f6",
          300: "#d1d5db",
          500: "#6b7280",
          700: "#374151",
          800: "#1f2937",
          900: "#0f172a",
        },
      },
      borderRadius: {
        lg: "12px",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1s ease both",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
