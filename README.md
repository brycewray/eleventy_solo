# Repo for brycewray.com

This is the repository from which the [Eleventy](https://11ty.dev)-generated version of [brycewray.com](https://brycewray.com) is built.

For a **starter set** based on this repo’s design, please see [eleventy_solo_starter](https://github.com/brycewray/eleventy_solo_starter).

**Note**: If you clone **this** repo (rather than the starter set) for your use, be sure to change the `_data/metadata.json` file to reflect **your** information rather than mine, especially if you want to use `src/utils/analytics.js` with `src/_includes/layouts/partials/head.js` to inject your own Web analytics provider’s code.

I initially chose to build this site with [Nunjucks](https://mozilla.github.io/nunjucks/) templates after converting its content from the [Go](https://golang.org)-based [Hugo](https://gohugo.io) and the [React](https://reactjs.org)-based [Gatsby](https://gatsbyjs.org); but Eleventy itself is [extremely flexible](https://www.11ty.dev/docs/languages/) in that regard, so go with what you prefer. Indeed, I’ve recently changed the site over to JavaScript templates (.11ty.js), following the [amazingly well-documented example](https://gitlab.com/reubenlillie/reubenlillie.com) of [Reuben Lillie's site](https://reubenlillie.com) as well as specific code and articles by [Max Böck](https://mxb.dev/blog/using-webmentions-on-static-sites/) and [Sia Karamalegos](https://sia.codes/posts/webmentions-eleventy-in-depth/).

## What&rsquo;s under the hood

- Eleventy, of course, outfitted with a number of plugins that are probably self-explanatory once you see them in `package.json`.
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).
- [LazyLoad](https://github.com/verlok/lazyload) (sometimes called “vanilla-lazyload”) and [Cloudinary](https://www.cloudinary.com)’s free tier. These handle the site’s images, not only lazy-loading them and controlling their sizes but also making them [responsive](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images).
- [svrx](https://svrx.io)&mdash;Although Eleventy comes with [Browsersync](https://browsersync.io) for Eleventy-only use, I use a separate Svrx instance so I can config it more to my wishes, particularly for the `testbuild` script in `package.json`. If you don&rsquo;t want or need to do it that way, Eleventy also allows you to [customize its own Browsersync instance](https://11ty.dev/docs/config/#override-browsersync-server-options).