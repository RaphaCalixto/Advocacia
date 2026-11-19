/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          950: '#15040f',
          900: '#1f0817',
          850: '#270c1e',
          800: '#341027',
          700: '#411531',
          DEFAULT: '#491A36', // Paleta exata enviada pelo usuário
          600: '#581f42',
          500: '#6f2753',
          400: '#8c356b',
          300: '#ab4a86',
          100: '#f5ebf2',
        },
        gold: {
          900: '#3e3122',
          800: '#5c4933',
          700: '#7a6245',
          600: '#947754',
          DEFAULT: '#AD9273', // Paleta exata enviada pelo usuário
          400: '#beaa8f',
          300: '#d0c1ac',
          200: '#e3d9cb',
          100: '#f6f3ed',
          light: '#dfcca9',
        },
        taupe: {
          900: '#37322e',
          700: '#5a534c',
          DEFAULT: '#C1B7AF', // Paleta exata enviada pelo usuário
          400: '#d2cbcaa',
          300: '#dfdad5',
          100: '#f2f0ee',
        },
        alabaster: {
          DEFAULT: '#E9E8E6', // Paleta exata enviada pelo usuário
          50: '#faf9f8',
          100: '#f4f3f2',
          200: '#E9E8E6',
          300: '#dedcd9',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(10, 2, 7, 0.75)',
        'luxury-gold': '0 0 35px -5px rgba(173, 146, 115, 0.22)',
        'luxury-wine': '0 0 45px -5px rgba(73, 26, 54, 0.45)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(173, 146, 115, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-wine': 'radial-gradient(at 15% 15%, #491A36 0px, transparent 65%), radial-gradient(at 85% 85%, #270c1e 0px, transparent 60%)',
      }
    },
  },
  plugins: [],
}
