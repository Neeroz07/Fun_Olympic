/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
      colors:{
        main: '#00001C',
        mainbg: '#242528',
        nav: '#beef00',
        nav2: '#657a00',
        subMain: '#00BFFF',
        dry: '#030630',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#E0D5D5',
        coll: '#07ffa0',
        Green: '#030630', 
       yellow: '#00BFFF', 
       ivory: '#FAF5E9',
       blue: '#feb300',
       gold: '#00BFFF',
       teal: '#0C1A1A',
       purple: '#161748'
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

