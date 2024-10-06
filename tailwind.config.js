/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "320px", // Mulai dari sm (640px)
        md: "560px", // Medium screens (768px)
        lg: "1024px", // Large screens (1024px)
        xl: "1280px", // Extra large screens (1280px)
      },
      colors: {
        primary: "#FAC03B",
        secondary: "#a41212",
      },
      keyframes: {
        "focus-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        "focus-in-contract": "focus-in-contract 1s linear 0s 1 normal none",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
