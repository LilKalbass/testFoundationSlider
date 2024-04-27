/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      fl: '360px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    colors: {
      white: '#fff',
    },
    extend: {
      fontFamily: {

      },
      backgroundImage: {
        review: 'url(/assets/bg.jpg)',
        reviewPhone: 'url(/assets/bgPhone.jpg)',
      },
      boxShadow: {
        primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)'
      },
    },
  },
}
