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
        'inknut-antiqua': ['Inknut Antiqua', 'serif'],
        'general-sans': ['General Sans', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
         'inter' : ['Inter', 'sans-serif'],
         'dmsans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
       
      },
    },
  },
  plugins: [],
}