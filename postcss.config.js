const cssnano = require('cssnano')({
  preset: 'default',
})

module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('postcss-import'),
    require('@tailwindcss/jit'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [cssnano]
      : []
  ],
}