/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030014",
          card: "rgba(10, 10, 20, 0.4)",
          border: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(123, 97, 255, 0.15)",
          blue: "#00f0ff",
          purple: "#7b61ff",
          pink: "#ff007a",
          teal: "#00f5d4",
          success: "#00e676",
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "aurora": "aurora 20s infinite linear",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "border-glow": "border-glow 4s ease infinite",
        "text-gradient": "text-gradient 8s linear infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1) rotate(120deg)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95) rotate(240deg)" },
          "100%": { transform: "translate(0, 0) scale(1) rotate(360deg)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" }
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(0, 240, 255, 0.3)" },
          "50%": { borderColor: "rgba(123, 97, 255, 0.8)" }
        },
        "text-gradient": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        }
      },
      boxShadow: {
        "cyber-glow": "0 0 20px rgba(0, 240, 255, 0.15)",
        "purple-glow": "0 0 20px rgba(123, 97, 255, 0.15)",
        "pink-glow": "0 0 20px rgba(255, 0, 122, 0.15)",
      },
      backdropBlur: {
        "cyber": "16px",
      }
    },
  },
  plugins: [],
}
