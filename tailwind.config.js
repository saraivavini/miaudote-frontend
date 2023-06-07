/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: '#EFEFFF',
        background: '#211D28',
        primary: {
          DEFAULT: '#178197',
          100: '#C6E2EA',
          200: '#A0CEDC',
          300: '#7BBACC',
          400: '#58A6BA',
          500: '#3591A7',
          600: '#0D7D93',
          700: '#00687C',
          800: '#005465',
          900: '#00404D',
        }
      },
    },
  },
  plugins: [],
}
