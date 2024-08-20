/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "tran": "#345a"
      },
      borderRadius: {
        "round": "50%"
      },
      height: {
        "smscreen": "100svh"
      },
      
    }
  },
  plugins: [],
}

