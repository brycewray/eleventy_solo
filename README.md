# Repo for brycewray.com

This is the repository from which the [Eleventy](https://11ty.dev)-generated version of [brycewray.com](https://brycewray.com) is built. Unlike its most recent predecessor (an un-updated version of which [remains available](https://github.com/brycewray/eleventy_bundler) for the curious), it is all-Eleventy with no added build tools, most notably [webpack](https://webpack.js.org). While the webpack experience was interesting, I decided this public repo might be of more use without it since, let&rsquo;s face it, dealing with webpack configuration is not everybody&rsquo;s cup of tea.

## Not a starter kit, but&nbsp;.&nbsp;.&nbsp;.

While this is the actual site&rsquo;s repo rather than a starter version thereof, you can turn it into the latter by doing the following:

1. Clone it to a local repo.
2. Make appropriate changes to the `_data` directory&rsquo;s files.
3. Delete from `src` the Markdown files and images (well, maybe you should keep one or two of each around at the start, until you see how things work).

I initially chose to build this site with [Nunjucks](https://mozilla.github.io/nunjucks/) templates after converting its content from the [Go](https://golang.org)-based [Hugo](https://gohugo.io) and the [React](https://reactjs.org)-based [Gatsby](https://gatsbyjs.org); but Eleventy itself is [extremely flexible](https://www.11ty.dev/docs/languages/) in that regard, so go with what you prefer. Indeed, I&rsquo;ve recently changed the site over to JavaScript templates (.11ty.js), following the [amazingly well-documented example](https://gitlab.com/reubenlillie/reubenlillie.com) of [Reuben Lillie's site](https://reubenlillie.com) as well as specific code and articles by [Max Böck](https://mxb.dev/blog/using-webmentions-on-static-sites/) and [Sia Karamalegos](https://sia.codes/posts/webmentions-eleventy-in-depth/).

## What&rsquo;s under the hood

- Eleventy, of course, outfitted with a number of plugins that are probably self-explanatory once you see them in `package.json`.
- [PostCSS](https://postcss.org) and [Tailwind CSS](https://tailwindcss.com).
- [LazyLoad](https://github.com/verlok/lazyload) (sometimes called &ldquo;vanilla-lazyload&rdquo;) and a script, `imgxfm.js`, that uses the [Sharp](https://github.com/lovell/sharp) library&mdash;These handle the site&rsquo;s images, not only lazy-loading them and controlling their sizes but also making them [responsive](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images).
- [Browsersync](https://browsersync.io)&mdash;Although Eleventy comes with Browsersync for Eleventy-only use, I use a separate Browsersync instance so I can config it more to my wishes, particularly for the `testbuild` script in `package.json`. If you don&rsquo;t want or need to do it that way, Eleventy also allows you to [customize its own Browsersync instance](https://11ty.dev/docs/config/#override-browsersync-server-options). **Note**: I have Browsersync&rsquo;s usually-on [ghost mode](https://browsersync.io/docs/options#option-ghostMode) turned **off** because it creeps me out 🙂 when I&rsquo;m testing locally; you, however, might prefer the default &ldquo;on&rdquo; setting.

## Interested in other SSGs?

For those interested in other static site generators, I have also created [Gatsby](https://gatsbyjs.org)- and [Hugo](https://gohugo.io)-based versions of this repo. For more information, see “[Different modes for different code](https://brycewray.com/posts/2020/04/different-modes-different-code).” As for the repo links themselves:

- [Gatsby version](https://github.com/brycewray/gatsby_site_css-grid)
- [Hugo version](https://github.com/brycewray/hugo_site_css-grid)

Please note that I **do not** promise to keep them **fully** up to date with this repo (*i.e*, the real site), but will do so as time and circumstances allow.