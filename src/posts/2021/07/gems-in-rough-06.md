---
layout: singlepost
title: "Gems in the rough #6"
subtitle: "SUBTITLE"
description: "DESCRIPTION."
author: Bryce Wray
date: 2021-07-02T16:30:00-05:00
#lastmod:
discussionId: "2021-07-gems-in-rough-06"
#featured_image: "IMAGE_0000x9999.EXTENSION"
featured_image_width: 0000
featured_image_height: 9999
featured_image_alt: "ALT TO COME"
featured_image_caption: |
  <span class="caption">CAPTION TO COME</span>
---

Introductory note for the uninitiated: each entry in the "Gems in the rough" series is a collection of tips, explanations, and/or idle observations which I hope will be at least somewhat useful to those of you with websites built by [static site generators (SSGs)](https://jamstack.org/generators).

## Your own Eleventy time machine

Some SSGs, such as [Hugo](https://gohugo.io) and [Jekyll](https://jekyllrb.com), allow you to build your site without including posts to which you've assigned future dates. This can come in handy for any number of reasons; for example, if you want to use multiple devices to work on a post and sync it through pushes to the site's online repository.[^WorkingCopy] Although [Eleventy](https://11ty.dev) doesn't have that capability out of the box, [Saneef H. Ansari](https://saneef.com)'s article, "[Hiding posts with future dates in Eleventy](https://saneef.com/tutorials/hiding-posts-with-future-dates-in-eleventy/)," describes an elegant way to add it. (I even used it to "hide" this post for several days until I was ready to post it.) **But**&nbsp;.&nbsp;.&nbsp;. just be sure that, if your site's config file includes the [Eleventy documentation's `html-minifier` example code](https://www.11ty.dev/docs/config/#transforms-example-minify-html-output) (as is the case for this site), you adjust it [as suggested by David Soards](https://github.com/11ty/eleventy/issues/653#issuecomment-716272434) or your builds will break with an error that includes the lyrical phrase, `outputPath.endsWith is not a function (TypeError)`. Fun stuff.

[^WorkingCopy]: This is essentially the workflow I described a couple of years ago in "[Roger, Copy](/posts/2019/07/roger-copy)," involving the use of the superb [Working Copy](https://workingcopyapp.com/) source-control app for iOS.

## A year, off and on, with Vercel

It's now been a year since [this site began its "lurch" among various hosting vendors](/posts/2020/07/goodbye-hello) after having been on [Netlify](https://netlify.com) from the beginning back in September, 2018. In no particular order, I've used [Render](https://render.com), [Firebase](https://firebase.google.com), [Cloudflare Workers sites](https://workers.cloudflare.com), [Cloudflare Pages](https://pages.cloudflare.com), and even Netlify once again, albeit briefly. However, none of them can quite hold a candle to [Vercel](https://vercel.com), the vendor for which I first left Netlify. I wish Vercel's [Edge Network](https://vercel.com/docs/edge-network/overview) had a lot more points of presence around the world and that it was easier to configure for things like HTTP headers[^VercelHTTP]; but, those items aside, the unmatched speed and rock-solidness of Vercel's build process make it the top dog in the group and keep me coming back.

[^VercelHTTP]: Don't get me wrong: [the process actually isn't that hard](https://vercel.com/docs/edge-network/headers). The issue I have in that regard is that it doesn't appear possible to set a Content Security Policy for only the site's web pages and **not** for its static assets as well (*i.e.*, to avoid ["Best Practices" gripes from Lighthouse](https://web.dev/lighthouse-best-practices/)), while such **is** possible with Cloudflare Pages through use of a Cloudflare Worker as I noted in "[Headers up](/posts/2021/05/headers-up)." And, yes, I have asked---in the [Vercel "Discussions" forum](https://github.com/vercel/vercel/discussions/6330) and in [Stack Overflow](https://stackoverflow.com/questions/67887283/vercel-json-how-to-exclude-multiple-directories-in-header-path-to-regexp).

## Dubya dubya dubya

Not since the late 1990s has it been "cool," or so it's seemed, for companies to promote their websites' URLs with the "www" upfront. They just say, "Visit [whoever].com," and let it go at that. Perhaps influenced by that, I originally linked to this site only as `https://brycewray.com`. However, it turns out there are [sound technical reasons](https://www.yes-www.org/why-use-www/) to use the `www` in there, too (and Vercel agrees for [its own network-specific reasons](https://vercel.com/docs/custom-domains#redirecting-www-domains)), so I've adopted that practice. Indeed, I have whichever hosting vendor I happen to be using at the moment use `www.brycewray.com` as the primary location to which all `brycewray.com` traffic is redirected, rather than vice versa as I formerly did. I also now include `www` in each page's [canonical URL](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls) as specified in the `head` section of its HTML.

## D

D.