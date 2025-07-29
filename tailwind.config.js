/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0373f3",
      },
      backgroundImage: {
        'topbar-gradient': 'linear-gradient(90deg, #0D57C6 0%, #37CFFF 50%, #0F5ED6 100%)',
      },
    },
  },
  plugins: [],
}
