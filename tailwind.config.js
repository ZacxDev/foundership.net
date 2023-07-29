module.exports = {
  content: ["content/**/*.md", "layouts/**/*.html", "themes/windytheme/content/**/*", "themes/windytheme/layouts/**/*"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
   
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        }
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out',
      }
    },
    colors: {
      'primary': '#FF7605',
      'secondary': '#8598AA', 
      'navyBlue': '#143D59',
      'navyBlueText': '#5C6A77',
      'navyBlueLight': '#EAF3FA',
      'black': '#2B2B2B',
      'white': '#ffffff',
      'footerText': '#646E75',
      'themeWhite': '#f6faff',
      'themeLightNavy': '#CEDFEB',
      'nav': '#8598AA',
    },
  },
};
