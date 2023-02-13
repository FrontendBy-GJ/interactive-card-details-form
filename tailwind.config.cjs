/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      space: ['Space Grotesk', 'sans-serif'],
    },
    colors: {
      'gradient-one': 'hsl(248,99%,64%)',
      'gradient-two': 'hsl(278,94%,30%)',
      red: 'hsl(0,100%,66%)',
      white: 'hsl(0,0%,100%)',
      'light-violet': 'hsl(270, 3%, 87%)',
      'dark-violet': 'hsl(279, 6%, 55%)',
      'very-dark-violet': 'hsl(278, 68%, 11%)',
    },
    extend: {
      backgroundImage: {
        'card-front': "url('./assets/bg-card-front.png')",
        'card-back': "url('./assets/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
