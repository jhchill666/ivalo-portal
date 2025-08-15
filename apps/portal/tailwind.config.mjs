/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "!./src/app/**/*.{spec}.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      animation: {
        shake: "shake 0.8s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-4px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(4px)" },
        },
      },
    },
  },
};

export default config;
