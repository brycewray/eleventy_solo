// Based on code from Phil Hawksworth -- https://github.com/philhawksworth/rollyourownlazyload/tree/

// Generate a picture tag with just one tiny image src URL which used Netlify image transforms
// this will be our initial image to be progressively enhanced to load larger images

/* shortcode takes the following form...
--- name 'lazypicture' rather than 'lazy-picture' comes from config in .eleventy.js
{% lazypicture "[FILENAME WITHOUT SIZE OR EXT]", "[EXT.]", "[ALT TEXT]"  %}{%- endfor -%}

*/

module.exports = (urlBasic, ext, width, alt) => {
  return `
  <div class="lazywrapper">
    <div class="lazybox">
      <img 
        class="lazybox-img lazyload" 
        data-sizes="auto"
        data-srcset="
        /assets/images/${urlBasic}-300.${ext} 300w, 
        /assets/images/${urlBasic}-600.${ext} 600w,
        /assets/images/${urlBasic}-${width}.${ext} ${width}w,
        "
        data-lowsrc="/assets/images/${urlBasic}-20.${ext}"
        alt="${alt}"
      />
    </div>
  </div>
  `
}