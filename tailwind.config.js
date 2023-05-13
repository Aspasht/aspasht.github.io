/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arapey:['Arapey','sans'],
        rootkit:['Rokkitt','sans-serif'],
        babylonica:['Babylonica','sans'],
        carattere:['Carattere','sans'],
        righteous:['Righteous','sans']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

