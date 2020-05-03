module.exports = {
  purge: {
    enabled: true, 
    // normally not necessary but TS 1.4 and Purge don't seem to have their stuff together 
    // re NODE_ENV=production, even if that's declared in the package.json script -- 2020-05-03, 10:04 AM CDT
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
    ],
  },
  theme: {
    fontFamily: {
      body: ['Public Sans', 'system-ui'],
      codefont: ['Roboto Mono', 'monospace'],
    },
  },
  variants: {},
  plugins: [],
}
