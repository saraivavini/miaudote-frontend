/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /text-(white|background|black|primary)/,
    }
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
      backgroundImage: {
        'home-banner': "url('/assets/home-banner.png')"
      },
      fontSize: {
        h1: ['3.5rem', '4rem'],
        h2: ['3rem', '3.5rem'],
        h3: ['2.5rem', '3rem'],
        h4: ['2rem', '2.5rem'],
        h5: ['1.5rem', '2rem'],
        h6: ['1.25rem', '1.5rem'],
        subtitle: ['1rem', 'auto'],
        caption: ['0.75rem', '1rem'],
        'body-sm': ['0.875rem', '1.25rem'],
        'body-md': ['1rem', '1.5rem'],
        'body-lg': ['1.125rem', '1.75rem'],
        'button-sm': ['0.875rem', '1.125rem'],
        'button-md': ['1rem', '1.25rem'],
        'button-lg': ['1.125rem', '1.5rem'],
      }
    },
  },
  plugins: [],
}
