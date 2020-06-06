---
layout: layouts/posts/singlepostherofit.11ty.js
tags: post
title: "Simulating gatsby-image in Eleventy"
subtitle: "Equipping your site with LQIP"
description: "The (relatively) easy way to get that cool “blur-up” effect."
author: Bryce Wray
date: 2020-06-04T18:30:00-05:00
#lastmod: TBD
discussionId: "2020-06-simulating-gatsby-image-in-eleventy"
featured_image: << TBD >>
featured_image_alt: "<<TBD>>"
featured_image_caption: "Image: <<PERSON TBD>>; <<SOURCE>>"
---

You've seen it in *Medium* articles. You've seen it in online forums running on Discourse. And, of course, you've seen it in virtually every Web site that's built with Gatsby or Gridsome, courtesy of those SSGs' special image plugins.

It's that effect that makes an image start out as a blur and then fade up---"blur up"---to its true self. It looks cool, but it also helps your site performance if you do it the right way.

Typically, it comes with the creation of an array of images to facilitate responsiveness, which is simply good Web citizenship. Again, `gatsby-image` generates that array automatically.

Fortunately, you can give your site these benefits, regardless of the platform and/or SSG you use.

## How it works

First, here's how it works. At least, this is *one* way it can work, because by peeking at many sites' source code you'll quickly see variations.

You provide this for each image:

```html
<div><!-- Background is filled with a tiny version of the image, preferably in Base64 for performance's sake. -->
	<div><!-- This one will contain the picture element for responsive image purposes. -->
		<picture>
			<!-- -->			
		</picture>
	</div>
</div>
```

- A `div` with its background set to be filled a tiny version of the image.

## What's LQIP?

A

### Base64

A

(Be sure to note, as pointed out on that BunnyCDN article, that it's unwise to use Base64-encoded images unless they're small, as are LQIPs.)

## Performance advantages

A

## Code

A

## Wrap-up

A