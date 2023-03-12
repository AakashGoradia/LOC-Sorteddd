/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', "sans-serif"],
       },
    },
    backgroundImage:
         {
           'Ablack': "url('https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?w=1060&t=st=1678570761~exp=1678571361~hmac=8bf16de3528698807e419536b540b51900c1e8bed32ae96ff87fa07b87371e38')"
         },
  },
  plugins: [],
}
