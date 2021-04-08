exports.data = {
  layout: 'layouts/_default/base.11ty.js',
}

exports.render = function (data) {
  return /*html*/ `
  <main class="p-0">
    <div class="pt-6 lg:pt-12 lg:flex w-full mr-auto ml-auto">
      <div class="bg-transparent lg:bg-gradient-to-b from-blue-700 to-black lg:dark:bg-gradient-to-b lg:dark:from-black lg:dark:to-blue-700 lg:w-5/12 px-8 lg:px-12 pt-16 lg:text-white text-center lg:text-right">
        <h1 class="lg:leading-normal text-3xl lg:text-4xl 2xl:text-6xl lg:pt-10">Welcome to brycewray.com, offering <a href="/about" class="lg:text-blue-100 lg:border-blue-100">its owner</a>&rsquo;s &ldquo;observations, opinions, and geekiness&rdquo; since&nbsp;2018.</h1>
      </div>
      <div class="text-center lg:text-left lg:w-7/12 px-6 lg:pl-16 lg:pt-16">
      <div class="mt-8 border-blue-700 dark:border-white mx-auto my-auto w-3/5 border-solid border-b-4 lg:hidden"></div>
      <h2 class="h1 mt-4 lg:mt-0 mb-4 lg:mb-10 text-3xl lg:text-5xl 2xl:text-7xl">Latest <a href="/posts/">posts</a></h2>
      ${
        data.collections.post.slice(0,3).map(post => /*html*/ `
      <div class="lg:pr-8">
        <h2 class="not-italic tracking-tight text-2xl lg:text-3xl 2xl:text-4xl"><a href="${post.url}">${post.data.title}</a></h2>
        <p class="font-bold mt-1 mb-0 text-xl lg:text-2xl 2xl:text-3xl">${post.data.subtitle}</p>
        <p class="text-sm tracking-normal my-2 dateInfo">
          <time class="inline" datetime="${this.pub_lastmod(post.date)}}"><strong>${this.pub_lastmod(post.date)}</strong></time>
          ${
            post.data.lastmod
            ? /*html*/ `
          <br />Last modified <time class="inline" datetime="${this.pub_lastmod(post.data.lastmod)}">${this.pub_lastmod(post.data.lastmod)}</time>
            `
            : ``
          }
        </p>
        <p class="text-base mt-1 mb-6 lg:mb-10">
          ${post.data.description}
        </p>
      </div>
        ` 
      ).join('')}

      <p><a href="/posts/"><strong>All ${data.collections.post.length} posts</strong></a> <span class="text-sm"><em>(listed five per page)</em></span></p>
    </div>
  </div>
</main>
`
}