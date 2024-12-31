/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nayeshdaggula/tailify/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Default 'font-sans' class
        custom: ['Open Sans', 'sans-serif'], // Custom class if needed
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xxs': '320px',
        'xxm': '375px',
        'xs': '425px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px'
      }

    },
    letterSpacing: {
      'extra-wide': '0.3em', // Example: Wider than `tracking-widest`
      'small-wide': '0.1em',
    },
  },
  plugins: [],
};
