/* 
shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture [parameters separated by commas] %}
*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <picture>
  <source type="image/webp" srcset="/images/${urlBasic}-20.webp" data-srcset="/images/${urlBasic}-300.webp 300w, /images/${urlBasic}-450.webp 450w, /images/${urlBasic}-600.webp 600w, /images/${urlBasic}-750.webp 750w, /images/${urlBasic}-900.webp 900w, /images/${urlBasic}-1050.webp 1050w, /images/${urlBasic}-1200.webp 1200w, /images/${urlBasic}-1350.webp 1350w, /images/${urlBasic}-1500.webp 1500w, /images/${urlBasic}-${width}.webp ${width}w" />
  <source type="image/${ext}" srcset="/images/${urlBasic}-20.${ext}" data-srcset="/images/${urlBasic}-300.${ext} 300w, /images/${urlBasic}-450.${ext} 450w, /images/${urlBasic}-600.${ext} 600w, /images/${urlBasic}-750.${ext} 750w, /images/${urlBasic}-900.${ext} 900w, /images/${urlBasic}-1050.${ext} 1050w, /images/${urlBasic}-1200.${ext} 1200w, /images/${urlBasic}-1350.${ext} 1350w, /images/${urlBasic}-1500.${ext} 1500w, /images/${urlBasic}-${width}.${ext} ${width}w" />
  <img class="lazyload blur-up containedImage" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  </picture>
  <noscript>
  <img class="containedImage" loading="lazy" src="/images/${urlBasic}-${width}.${ext}" alt="${alt}" />
  </noscript>
  `
}