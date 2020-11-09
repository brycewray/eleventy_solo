
module.exports = {
  plugins: [
    require('postcss-hash')({
      algorithm: "sha512",
      trim: 20,
      manifest: './_data/manifest.json'
    }),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-clean'),
  ],
}