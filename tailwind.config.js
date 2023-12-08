/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100vh', // Fix typo: '100dvh' to '100vh'
      },

      // Define your custom colors here, including "olive" if needed
      colors: {
        olive: {
          50: '#F7FEE7',
          100: '#ECFDC3',
          200: '#D4F9A2',
          300: '#ADF57D',
          400: '#84E155',
          500: '#5AC728',
          600: '#49A61B',
          700: '#347E0E',
          800: '#23650A',
          900: '#194D08',
        },
        // Define other custom colors here if needed...
      },
    },
  },
  plugins: [],
};


