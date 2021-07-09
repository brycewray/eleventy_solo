---
layout: singlepost
tags: post
title: "Beginner’s luck #3: adding a Zola starter"
subtitle: "And then there were seven"
description: "For those interested in a (somewhat) easy take on Hugo, here’s a starter set for you."
author: Bryce Wray
date: 2021-06-25T16:50:00-05:00
lastmod: 2021-06-26T10:02:00-05:00
discussionId: "2021-06-beginners-luck-3-adding-zola-starter"
featured_image: susan-holt-simpson-H7SCRwU1aiM-unsplash_4608x3072.jpg
featured_image_width: 4608
featured_image_height: 3072
featured_image_alt: "Colorful toy alphabet blocks"
featured_image_caption: |
  <span class="caption">Image: <a href="https://unsplash.com/@shs521?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Susan Holt Simpson</a>; <a href="https://unsplash.com/s/photos/toy-blocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

---

This will be an unusually short entry. I just wanted to advise that I've built my seventh [static site generator (SSG)](https://jamstack.org/generators) [starter set](/posts/2021/03/beginners-luck-update). It uses [Zola](https://getzola.org), and you can find its GitHub repository at [https://github.com/brycewray/zola_solo](https://github.com/brycewray/zola_solo). There's also a [live demo](https://zola-solo.vercel.app).

Unfamiliar with Zola? It's a [Rust](https://rust-lang.org)-based SSG that came about because its creator, [Vincent Prouillet](https://www.vincentprouillet.com/), was using the [Go](https://golang.org)-based [Hugo](https://gohugo.io). He loved the fact that Hugo was a single binary (see my article, "[Eleventy and Hugo: comparing and contrasting](/posts/2020/12/eleventy-hugo-comparing-contrasting)," for some insight into why that can be appealing) but became frustrated by the unwieldiness of Go templating. Instead, he decided to build a very Hugo-like SSG but with much simpler templating, based on his own creation: the [Tera](https://tera.netlify.app/) template engine. If you're familiar with how [Nunjucks](https://mozilla.github.io/nunjucks/) reads and works in [Eleventy](https://11ty.dev), you'll find Tera's syntax and feature set quite familiar and, therefore, comfortable.

If you want to use this starter set, be sure to check the repo README for some important details---especially if you're interested in using footnotes in your Markdown. The README also notes that I don't plan any additional development on this set for the time being. This is for the same reasons as with my Hugo starter sets, mainly that there are certain needed features or compatibilities which each respective SSG lacks, as I [complained a few days ago about Hugo](/posts/2021/06/gems-in-rough-06).

All that aside, I had some nerdy fun building this starter, debugging it, and generally learning more about how Zola works. Perhaps it will similarly appeal to your own geekiness.

**Update, 2021-06-26**: I've now added an **eighth** starter repo. It's [another Zola starter](https://github.com/brycewray/zola_twcss) (with a [demo version](https://zola-twcss.vercel.app) also live), but uses [Tailwind CSS](https://tailwindcss.com)---**including** the [JIT mode](https://tailwindcss.com/docs/just-in-time-mode), which Hugo **still** doesn't support---rather than Sass. Unlike the other repo that I added yesterday, this one likely will stay in active development at least for a while because of Zola's ability to work with Tailwind and JIT, although I still am perturbed by Zola's own shortcomings (notably about footnote-handling).
{.yellowBox}