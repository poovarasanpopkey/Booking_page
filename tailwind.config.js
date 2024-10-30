/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "color-change": "colorChange 10s infinite",
      },
      keyframes: {
        colorChange: {
          '0%, 100%': { background: 'linear-gradient(to right, #FFEBCC, #CCE7FF)' }, /* Peach to Light Sky Blue */
          '20%': { background: 'linear-gradient(to right, #CCE7FF, #FFF8E7)' }, /* Light Sky Blue to Light Golden */
          '40%': { background: 'linear-gradient(to right, #FFF8E7, #E0FFFF)' }, /* Light Golden to Light Cyan */
          '60%': { background: 'linear-gradient(to right, #E0FFFF, #E6E6FA)' }, /* Light Cyan to Light Pink */
        },
      },
    },
  },
  plugins: [],
};
