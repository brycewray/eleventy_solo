# Repo for brycewray.com

This is the repository from which the [Eleventy](https://11ty.dev)-generated version of [brycewray.com](https://brycewray.com) is built.

For a **starter set** based on this repo’s design, please see [eleventy_solo_starter](https://github.com/brycewray/eleventy_solo_starter).

**Note**: If you clone **this** repo (rather than the starter set) for your use, be sure to change the `_data/metadata.json` file to reflect **your** information rather than mine, especially if you want to use `src/utils/analytics.js` with `src/_includes/layouts/partials/head.js` to inject your own Web analytics provider’s code. **However**, I mainly suggest you use this repo **only for reference** and, instead, use the aforementioned [starter set](https://github.com/brycewray/eleventy_solo_starter) if you wish to build your own Eleventy site with (at least at the start) a similar look-and-feel.

## What&rsquo;s under the hood

- Eleventy, of course, outfitted with a number of plugins that are probably self-explanatory once you see them in `package.json`.
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).
- [Cloudinary](https://www.cloudinary.com)’s free tier for handling the site’s images, controlling their sizes, and working with my `lazypicture` shortcode to make them [responsive](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images). Another element of the image-handling is  [LazyLoad](https://github.com/verlok/lazyload) (sometimes called &ldquo;vanilla-lazyload&rdquo;).
- [svrx](https://svrx.io)&mdash;Although Eleventy comes with [Browsersync](https://browsersync.io) for Eleventy-only use, I use a separate Svrx instance so I can config it more to my wishes, particularly for the `testbuild` script in `package.json`. If you don&rsquo;t want or need to do it that way, Eleventy also allows you to [customize its own Browsersync instance](https://11ty.dev/docs/config/#override-browsersync-server-options).