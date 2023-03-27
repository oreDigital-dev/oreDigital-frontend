/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['"outfit"'],
        'Inknut Antiqua':['"inkut Antiqua"']
        
      },
      backgroundImage: {
        'home': "url('../public/image/home.png')",
      },
    },
  },
  plugins: [],
}