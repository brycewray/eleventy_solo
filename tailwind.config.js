module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
    ],
  },
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'tb': '900px', // tablet portrait
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      body: ['Public Sans', 'apple-system', 'sans-serif'],
      codefont: ['Roboto Mono', 'monospace'],
    },
    extend: {
      screens: {
        'dark': {
          'raw': '(prefers-color-scheme: dark)',
        },
      },
      colors: { 
        'mainblue': "#0033ff", // variables.css: 'blue'
        'hovrblue': "#0088ff", // variables.css: 'blueFirst'
        'darkblue': "#0000aa",
        'inkyblue': '#000066',
        'lghtblue': "#00bbff", // variables.css: 'blueLight' (for use with dark mode where supported)          
      },
    },
  },
  variants: {},
  plugins: [],
}
