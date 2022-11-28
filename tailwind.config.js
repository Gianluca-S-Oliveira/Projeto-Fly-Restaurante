/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./src/**/*.{js,jsx,ts,tsx}",
   "./src/pages/*.{js,jsx,ts,tsx}",
   "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(15px)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}
