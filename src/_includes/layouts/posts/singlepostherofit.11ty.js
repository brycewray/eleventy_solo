exports.data = {
  layout: 'layouts/_default/base.11ty.js'
}

exports.render = function (data) {
  return `
<main class="pt-12">
  <div class="background-hero-image-div">
    <picture>
      <source srcset="/images/${data.featured_image_base}-300.webp 300w, /images/${data.featured_image_base}-450.webp 450w, /images/${data.featured_image_base}-600.webp 600w, /images/${data.featured_image_base}-750.webp 750w, /images/${data.featured_image_base}-900.webp 900w, /images/${data.featured_image_base}-1050.webp 1050w, /images/${data.featured_image_base}-1200.webp 1200w, /images/${data.featured_image_base}-${data.featured_image_width}.webp ${data.featured_image_width}w" class="imgCover" type="image/webp" />
      <source srcset="/images/${data.featured_image_base}-300.${data.featured_image_ext} 300w, /images/${data.featured_image_base}-450.${data.featured_image_ext} 450w, /images/${data.featured_image_base}-600.${data.featured_image_ext} 600w, /images/${data.featured_image_base}-750.${data.featured_image_ext} 750w, /images/${data.featured_image_base}-900.${data.featured_image_ext} 900w, /images/${data.featured_image_base}-1050.${data.featured_image_ext} 1050w, /images/${data.featured_image_base}-1200.${data.featured_image_ext} 1200w, /images/${data.featured_image_base}-${data.featured_image_width}.${data.featured_image_ext} ${data.featured_image_width}w" class="imgCover" type="image/${data.featured_image_ext}" />
      <img src="/images/${data.featured_image_base}-${data.featured_image_width}.${data.featured_image_ext}" alt="${data.featured_image_alt}" class="imgCover" />
    </picture>
    <div class="background-hero-title-block-fit">
      <div class="background-hero-title-text">
        <h1 class="text-center text-4xl md:text-5xl xl:text-6xl md:text-left tracking-tight leading-tight mb-2 text-white">${data.title}</h1>
        <h2 class="text-center text-2xl md:text-left md:text-3xl xl:text-4xl leading-tight tracking-tight text-white italic">
          ${
            data.subtitle
              ? data.subtitle
              : `&nbsp;`
          }
        </h2>
        <p class="hidden not-italic md:block md:text-xl tracking-tight md:mt-3 mb-0 text-white">${data.description}</p>
        <p class="text-base text-center md:text-right mt-3 mb-0 text-white">
          <span style="font-variant: small-caps">published:</span>&nbsp; <strong>${(data.page.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'})}</strong><br />
          <span class="text-sm">
          ${
            data.lastmod !== null && data.lastmod !== undefined
            ? `<span style="font-variant: small-caps">last modified:</span>&nbsp;${(data.lastmod).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'})}`
            : `&nbsp;`
          }
          </span>
        </p>
        <p class="text-center text-white text-xs mt-4 mb-0 md:mb-1 pb-1">
        ${data.featured_image_caption
          ? `${data.featured_image_caption}`
          : `&nbsp;`
        }
        </p>
      </div>
    </div>
  </div>

  <div class="sm:w-5/6 md:w-4/5 xl:w-1/2 mt-10 mr-auto ml-auto px-6 lg:px-16">
    <article>
      ${data.content}
    </article>
  </div>

  ${data.title != "Home page" && data.title != "Posts" && data.title != "The obligatory About Me page"
    ? `
      ${data.oldComments
        ? data.oldComments
        : ``
      }
      ${this.webmentionList(data)}`
    : ``
  }
  
  ${data.title != "The obligatory About Me page"
    ? `<div class="w-full px-8 md:px-0 bg-blue-700 align-middle mt-10 mb-10">
    <h3 class="text-center text-3xl tracking-normal mb-0 pt-2"><a href="/posts" class="border-transparent text-blue-100 hover:text-white italic">Other posts</a></h3>
    ${data.nextPost && data.nextPost.url !== null
      ? `<p class="text-center mt-2 mb-2 text-xl text-white leading-tight tracking-tight">
        <strong>Next</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.nextPost.url}">${data.nextPost.data.title}</a>
      </p>`
      : ``
    }
    ${data.prevPost && data.prevPost.url !== null
      ? `<p class="text-center pb-4 my-0 text-xl text-white leading-tight tracking-tight">
        <strong>Previous</strong>: 
        <a class="border-transparent text-blue-100 hover:text-white hover:border-blue-100" href="${data.prevPost.url}">${data.prevPost.data.title}</a>
      </p>`
      : `<p class="text-xs my-0 py-0 leading-tight">&nbsp;</p>`
    }
    </div>`
    : ``
  }
</main>
`
}