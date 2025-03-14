/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
  			h1: '36px',
  			h2: '28px',
  			h3: '22px',
  			p1: '16px',
  			p2: '14px',
  			small1: '12px',
  			small2: '10px'
  		},
      colors: {
        primary: '#0A1F44', // Deep navy blue
        secondary: '#17A2B8', // Soft cyan
        accent: '#F8F9FA', // Light gray
        background: '#FFFFFF', // White
        text: '#212529', // Dark gray
      },
    },
  },
  plugins: [],
}
