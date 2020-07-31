---
layout: layouts/posts/singlepostherofit.11ty.js
tags: post
title: "Goodbye and hello"
subtitle: "Moving from Netlify to Vercel"
description: "How this site gained a new home."
author: Bryce Wray
date: 2020-07-02T22:05:00
lastmod: 2020-08-01T16:00:00
discussionId: "2020-07-goodbye-hello"
featured_image: away-706464_4608x2592.jpg
featured_image_width: 4608
featured_image_height: 2592
featured_image_alt: "An entrance to a pathway in a rural setting"
featured_image_caption: |
  <span class="caption">Image: <a href="https://pixabay.com/users/Gina_Janosch-782007/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=706464">Gina Janosch</a>; <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=706464">Pixabay</a></span>
---

***Note, 2020-08-01**: If you'd already read this before August 1, 2020, be sure to check the **Addendum** at the bottom for a major update. "Goodbye, hello," indeed.* {.yellowBox}

Welcome to a story about an ending---and a beginning.

A few days ago, I [posted](/posts/2020/06/o-say-can-you-ci-cd) about how a user of [Netlify](https://netlify.com), on which I launched this site in September, 2018, could work around the Netlify free tier's monthly limit of 300 build minutes. I also mentioned that one other option was simply to find a different host with fewer restrictions.

However, I didn't *suggest* that course of action to you, mostly because changing hosts is a big deal. It can be fraught with potential perils at worst and headache-inducing inconveniences at best, especially if you've never done it before. And that doesn't even account for all the time and work you have to spend in figuring out which host to pick.

In that same vein, I did mention that I'd been spending "time, research, testing, and tinkering" as I considered possible answers to the build-minutes issue. To be sure, my suggested solution---using scripting on [GitHub](https://github.com) or [GitLab](https://gitlab.com) to do builds on *those* sites, instead, and then deploy them to Netlify---required those efforts. However, it was by no means the *only* reason I made those mental investments.

Before I go on, let's think for a minute about two things.

First, there was Apple's recent [WWDC 2020](https://developer.apple.com/wwdc20/) [announcement](https://www.apple.com/newsroom/2020/06/apple-announces-mac-transition-to-apple-silicon/) that the Mac line of computers would transition from Intel CPUs to Apple Silicon. Apple executive Craig Federighi revealed that all the new macOS features he'd been showing up to that point had actually been running the entire time on Macs with, yep, Apple CPUs.[^Jobs]

[^Jobs]: This was, as all we old Mac geeks recognized, an homage to what the late Steve Jobs did in the 2005 event when he announced the transition from PowerPC CPUs to Intel CPUs. In an attempt to allay developers' concerns about how smoothly Apple could execute such a massive change, Jobs joked that the Mac had "been living a double life" for years---that is, a dedicated team had been secretly developing Intel-compatible Mac hardware and OS versions, just in case such a transition ever became necessary---and that the Mac with which he'd worked since the show's beginning was, indeed, running on an Intel CPU.

Second, there long ago was a series of [television commercials about Palmolive Dishwashing Liquid](https://clickamericana.com/topics/beauty-fashion/palmolive-ads-featuring-madge-the-manicurist). The "plot" (?) usually involved a manicurist telling her customer about how gently this product treated one's hands. Then, when the customer expressed doubt about the claim, the manicurist would say, "You're soaking in it."

Well&nbsp;.&nbsp;.&nbsp;.

This site has been running on a new host for several days. So, if you've been here fairly recently, you've been soaking in it.

Yeah, I explained in that last post how to stay with Netlify; but, in the process of researching other choices, I learned some things that made me decide to take this site elsewhere.

----

## Don't let the door hit me?

To be sure, Netlify's free tier has a ton to offer, so I was determined that the move not be a downgrade in any way. As I researched and tested, I decided I wanted my site's next host to have these five capabilities to which I'd become accustomed with Netlify:
- A reasonably well-performing free tier, but with considerably more leniency where monthly builds are concerned.
- A top-quality [content delivery network (CDN)](https://techterms.com/definition/cdn) in front of it.
- Relatively easy---and, ideally, automatic---deploys from my choice of online Git [repository](https://techterms.com/definition/repository).
- The option to deploy *also* (not *only*) via a [command-line interface (CLI)](https://en.wikipedia.org/wiki/Command-line_interface)[^CLIstuff] if the circumstances ever demand it.
- [Brotli](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html) compression, which is even more efficient than the [gzip](https://en.wikipedia.org/wiki/Gzip) (the smaller the delivered content, the faster the web pages load) that pretty much any host offers.

[^CLIstuff]: While failure to have a CLI isn't a show-stopper by itself, the [advantages I found for that in the getting-around-Netlify post](/posts/2020/06/o-say-can-you-ci-cd) showed the availability of a CLI to be a worthwhile "want." Ya never know&nbsp;.&nbsp;.&nbsp;.

Armed with these "must-haves," I spent several days checking out other vendors known for extra-special-quality hosting of static sites. In the end, the choice came down to three: Google's [Firebase](https://firebase.google.com); the fast-rising [Render](https://render.com); and [Vercel](https://vercel.com) (formerly called ZEIT).

### Firebase

{% lazypicture "Firebase_screen_cap_1280x732.jpg", "Screen capture of firebase.google.com home page as of 2020-07-01", 1280, 732 %}

Despite the obvious advantages of Google's wealth backing it and its popularity in the dev community (albeit mainly among database guys, it seems), Firebase---whose free "Spark" tier [allows](https://firebase.google.com/pricing) far more use in a month than I'd ever accumulate---fell short for two reasons.

First, it lacks Brotli and, if you do a search for "firebase brotli," you'll find several comments from Firebase personnel indicating it's not in the current roadmap, although Google's Addy Osmani [hopes that'll change](https://twitter.com/addyosmani/status/1109949485965180928).

Second, CLI-based deployment is Firebase's *only* method. While that's fine from the desktop Mac (and, I admit, good and geeky fun at times), I sometimes want to [push a change from my iPhone or iPad](/posts/2019/07/roger-copy) with [Working Copy](https://workingcopyapp.com/).

The only thing that kept Firebase in the evaluation process till nearly the end is that it's got the wicked-quick and ultra-consistent [Fastly](https://fastly.com) CDN in front of it. It half-tempted me to go back to my days of running sites off a $2.50/month [VPS](https://techterms.com/definition/vps) which I'd then put behind Fastly, but that's more trouble than I want to handle on a regular basis. Been there, done that.

### Render

{% lazypicture "Render_screen_cap_1280x714.jpg", "Screen capture of render.com home page as of 2020-07-01", 1280, 714 %}

Render was hard to turn down. There is a lot of smart thinking behind it, it's young and eager, and my tests showed its results to be pretty impressive in not just speed but also consistency. It's going to be one to watch in this "space" in the next two or three years. I gave Render a lot of thought, especially given that its free tier for static sites allows 100 GB of up/down bandwidth per month with no other deploy limits *at all*. (I'm sure Render would gently rein you in if you got crazy with the quantity of deployments, but I'd never be in danger of that.)

Unfortunately, some of Render's DX (developer experience)---notably the documentation---is still *somewhat* lacking; my testing showed some inconsistencies in CDN performance as compared to the others; and there's no CLI as yet, although I learned June 28 that one is planned (no ETA). This vendor will get better, and I'll probably give it another look-see before too terribly long. Right now, however, I don't think it's quite ready for how I want to use it.

**That said**, I do encourage you to check it out; you may find Render perfectly fine for your own needs. It's definitely a "comer." Keep your eyes on it. 

### Vercel

{% lazypicture "Vercel_screen_cap_1280x726.jpg", "Screen capture of vercel.com home page as of 2020-07-01", 1280, 726 %}

Best known as the preeminent host for [Next.js](https://next.js.org)-based websites and apps but now branching out with better support for SSGs[^nextSSG], Vercel ticked all my boxes. Since I've also experimented a little with Next.js and admire the thinking and team behind that platform, I already had a good feeling about Vercel.

[^nextSSG]: Next.js isn't an SSG, although it can do that sort of thing, particularly since the [release of Next.js 9.3](https://nextjs.org/blog/next-9-3).

The case for Vercel became even stronger when I found an [article](https://www.nuweba.com/blog/why-we-decided-to-move-our-website-from-netlify-to-zeit) which indicated that Vercel's network performance vs. that of Netlify's was more consistent. Of course, that was referring to each vendor's *paid*-tier hosting, so it was apples and oranges.

Nonetheless, my own checks across several days and in multiple sites' online tests showed that even the Vercel free tier's performance was, indeed a tad more consistent than Netlify's---and equally as fast (sometimes slightly more so) when the two were at their respective bests.

Compared to Netlify's free tier, Vercel's is significantly more generous. [As of this past April](https://github.com/vercel/vercel/discussions/4029), Vercel's free "Hobby" plan allows up to 100 deployments *per day*, with no mention of minutes at all. As with Render's monthly bandwidth cap of 100 GB, I'm sure there's still a limit to what one would be allowed to do---*i.e*, how much data one could pump---*with* that many deployments. Nonetheless, there's no question that will be more than enough capacity for this site going forward, perhaps indefinitely.

By the way: Vercel has stepped up its game on handling various SSGs. When I connected it to my GitHub repo, it auto-detected this was an [Eleventy](https://11ty.dev)-based site and suggested several likely default settings, such as the `_site` folder as the location of the generated site. Very cool. All I had to do was add my [webmention.io](https://webmention.io) token, and I was good to go.

When compared to not only Netlify but also other vendors I tested by actually setting up my content on them, Vercel handled the build process the best.[^fbBuild] In fact, Vercel's setup runs my build-time `imgxfm.js` image-processing script *twice* as quickly.[^hiRes] I don't know what kind of hardware Vercel is running but, *man*, I like that kind of build performance.

[^fbBuild]: There's no way to compare this to how Firebase works, by the way, because you do its builds on a separate system---whether that's your own computer or, say, GitHub or GitLab.

[^hiRes]: Indeed, I took advantage of Vercel's added oomph to raise the quality of the *original* images from which my build creates responsive images, after seeing [this Twitter conversation](https://twitter.com/jensimmons/status/1276187305401860097). That said, the [move to Cloudinary](/posts/2020/08/transformed) rendered that consideration moot, as the 2020-08-01 addendum to this post explains.

Finally, I simply preferred the Vercel DX, especially the developer UI, over that of either the increasingly cluttered Netlify or the getting-there-but-not-there-yet Render---not to mention the you-better-have-time-to-read-a-lot-of-docs Firebase.

So, on June 30, this site moved to Vercel.

I should note also that my site analytics didn't miss a beat, thanks to my [recent decision](/posts/2020/06/fathom-analytics-count-on-it) to convert the site to the totally portable [Fathom Analytics](https://usefathom.com/ref/ZKHYWX)[^affil] from Netlify's servers-locked offering.

[^affil]: Affiliate link. If you use it to get started with Fathom, you'll receive a $10 credit on your first invoice and I'll get a commission.

## Leaving is always a bit weird

One afternoon over two decades ago, I was standing at the wall of my cubicle at a company where I'd spent several years and made many friends and acquaintances. I was about to head to a better-paying job elsewhere, and the two weeks' notice I'd given for that departure was in its final hour. I had finished all the wrap-up, handing-off to others, and the like; so now, truly with nothing to do but wait for it to be the hour when I'd leave that office for the last time, I looked back across the rows of other cubicles, watching as the other folks went about their jobs as usual.

Happy though I was about the pay raise and opportunity the new job was about to give me[^opportunity], as I took in that view I had an eerie feeling in the pit of my stomach combined with a sudden realization of "And now this will all go on without me."

[^opportunity]: I would end up staying there for nearly seventeen years and might still be there to this day, had a nasty budget cut not ended that part of my career.

So it was a strange, *déjà vu*-ish moment for me earlier this week when, after I confirmed the site was up and [running worldwide](https://ns1.com/resources/dns-propagation) on Vercel, I deleted my site's content from the Netlify instance where it had lived since September 19, 2018. My little site was only one of untold multitudes on Netlify, so I'm sure Netlify couldn't care less (especially since my site generated zero dollars for Netlify other than the nine-buck-a-month Netlify Analytics subscription), but---even as it felt good to arrive at Vercel, and I'm really liking it so far---the finality of it all gave me more pause than I'd expected. It was oddly reminiscent of when one moves out of one's parents' home for the last time, in a way I can't truly explain.

But don't get me wrong: leaving one place is followed by arriving at another---with the thrill of that first moment in a new place, a realization that you're starting over with all the opportunities that presents.

Thank you, Netlify, for twenty-one-and-a-half good and interesting months as my home on the web. I am sure you will continue to be a great place for static sites to live, especially where site owners are just getting started.

And thank you, Vercel, for your warm welcome, and for the interesting journey on which we've embarked this week. I look forward to watching your already strong capabilities get even more impressive over time. Building upon the high performance of your platform, I hope to make this site a better place for nice folks to spend some time and learn a thing or two.

----

## Addendum, 2020-08-01

In case you haven't yet seen "[Transformed](/posts/2020/08/transformed)," I just finished moving virtually all my site's images to [Cloudinary](https://cloudinary.com). It turned out the lifting of this image-handling and -storing burden had one additional, nice side-benefit.

It let me **return to Netlify**, slightly over a month after leaving.

Oh, don't get me wrong: I'm not disavowing anything I said in my praise of Vercel, above. The thing is: over the following weeks, I found Vercel lacking in one respect.

After the move, despite the new host's technical advantages, I missed the Netlify community.

Much like my warmth for the Eleventy community (a significant percentage of whose major players *work for* Netlify), I had felt part of a larger group while with Netlify. With Vercel, I gradually came to feel as if I'd moved to a nice, new house with bigger, better, shinier everything, but it just didn't feel like home. I know that's a weird analogy, given the relative youth of both companies, but that's just how it seemed to me.

Here's a lame attempt to explain.

A reporter covering the 1863 National Cemetery dedication where Abraham Lincoln delivered the Gettyburg Address likened the [two-hour speech preceding Lincoln's two-minute classic](https://www.businessinsider.com/edward-everett-also-spoke-at-gettysburg-convention-2013-11) to "Greek sculpture---beautiful, but cold as ice." Well, for reasons hard to put into words, I find that comment vaguely applicable to a comparison between Vercel and Netlify.

Vercel's free tier is technically superior to Netlify's in most ways that matter but, at least for me, the experience just didn't have the same *feel*. Hey, I'm the guy who [brought back hero images](/posts/2020/05/thousand-words-indeed) simply because *I missed seeing them*, their technical and logistical "costs" notwithstanding; so would you expect any more of me?

Anyway: once I had completed the transition from build-time image processing to Cloudinary, and could see that the average build time was now drastically and permanently[^EleventyBuild] shorter, I suddenly realized that there no longer was any reason I couldn't go back to Netlify if I wanted.

[^EleventyBuild]: With all the heavy images gone to Cloudinary, the only site complement that will continue to grow from here on will be the number of posts, and Eleventy builds those lickety-split regardless of their quantity or respective length.

First, I had to make sure I *did* want it.

I created a generic test site (an even more scaled-down version of the [Eleventy starter set I recently posted](/posts/2020/07/beginners-luck)) and deployed its contents to all four hosts I mentioned earlier: Vercel, Netlify, Render, and Firebase. With absolutely identical content on all four, I then could easily run various tests to compare them once again.

As with my pre-Vercel testing, the process of elimination soon reduced the choice to Vercel *vs.* Netlify. (Render had some impressive results but, as was true the first time, fell short on some other items that I'm sure will get fixed in time. Firebase is still geekily interesting but, I suspect, is an afterthought to Google where static sites are concerned; and its performance seemed erratic in my latest tests; so it didn't last long in the comparison.)

Once I did some appropriate code trims here and there to the test repo and ran some more tests, it became clear that the Netlify-hosted version was *close enough*. It would *do*. It might not be the fastest car in the dealership's lot, but it seemed a lot more comfortable to drive.

Of course, switching back from Vercel to Netlify involved some fiddling, [DNS](https://en.wikipedia.org/wiki/Domain_Name_System)-wise[^DNSSECoff], but it was worthwhile. (My domain's old DNS records from the first time around were still there in the account, so that helped a little.) And so, earlier today, this site came home to Netlify.

[^DNSSECoff]: While switching from Netlify's domain name servers to Google's during the site move to Vercel, I'd also activated [DNS System Security Extensions (DNSSEC)](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions). When I first began to return the site to Netlify and point my domain to Netlify's name servers because [that apparently works best with its CDN](https://css-tricks.com/using-your-domain-with-a-netlify-hosted-site/), I found that I first had to *de*-activate DNSSEC---and, quoting [the appropriate Google Support page](https://support.google.com/domains/answer/6387342?hl=en): "When you turn on DNSSEC, it takes roughly 2 hours for DNSSEC to activate completely. When you turn it off, there's a delay of up to 2 **days** before deactivation." [Emphasis added.] As it turned out, it took *every bit* of two days. Lesson learned.

As a result, the post title---"Goodbye, hello"---turned out to be a little more nuanced than I'd originally intended. However things turned out, I am happy to be back within Netlify's "old" but comfy confines and no longer watching its bustling, friendly community from the outside, remembering all too fondly how nice it felt to be even an insignificant part of it.