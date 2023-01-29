/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#EFF5FF',
        border: '#D6D9E6',
        denim: '#022959',
        gray: '#9699AA',
        orange: '#FFAF7E',
        pink: '#F9818E',
        purple: '#483EFF',
        'light-blue': '#ABBCFF',
        'light-gray': '#D6D9E6',
        'red-errors': '#EE374A',
        'sky-blue': '#BEE2FD',
        'very-light-gray': '#F8F9FF',
        'denim-hover': '#164A8A',
        'purple-hover': '#928CFF'
      },
      backgroundImage: {
        'mobile-sidebar': 'url("./assets/images/bg-sidebar-mobile.svg")',
        'desktop-sidebar': 'url("./assets/images/bg-sidebar-desktop.svg")',
        checkmark: 'url("./assets/images/icon-checkmark.svg")'
      },
      boxShadow: {
        form: '0px 25px 40px -20px rgba(0, 0, 0, 0.0951141)'
      },
      borderRadius: {
        small: '4px',
        large: '8px',
        sidebar: '10px',
        main: '15px'
      }
    },
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif']
    },
    fontSize: {
      heading: '2rem',
      'heading-mobile': '1.5rem',
      'body-l': '1rem',
      'body-m': '0.875rem',
      'body-s': '0.75rem',
      14: '0.875rem'
    },
    screens: {
      mobile: '375px',
      desktop: '940px'
    }
  },
  plugins: []
}
