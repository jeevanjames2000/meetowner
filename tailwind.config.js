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
        'xs': '425px', // Small phones
        'sm': '640px', // Phones
        'md': '768px', // Tablets
        'lg': '1024px', // Small desktops or landscape tablets
        'xl': '1280px', // Large desktops
        '2xl': '1536px', // Ultra-wide desktops
        '3xl': '1920px', // Very large screens (gaming monitors, TVs)
      }

    },
    letterSpacing: {
      'extra-wide': '0.3em', // Example: Wider than `tracking-widest`
      'small-wide': '0.1em',
    },
  },
  plugins: [],
};
