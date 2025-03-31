/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        fadeInMessage: "fadeInMessage 0.3s ease-out",
        slideIn: "slideIn 0.3s ease-out",
        fadeIn: "fadeIn 0.2s ease-out",
      },
      keyframes: {
        fadeInMessage: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { transform: "translateY(100px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          /* Firefox */
          "scrollbar-width": "none",
          /* IE and Edge */
          "-ms-overflow-style": "none",
          /* Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
