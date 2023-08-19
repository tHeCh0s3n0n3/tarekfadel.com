---
author: Tarek Fadel
pubDatetime: 2023-08-14
updatedDateTime: 2023-08-19T19:39:33+04:00
title: New Static Site
postSlug: new-static-site
featured: true
draft: false
tags:
  - announcements
  - learning
  - development
ogImage: ""
description: >
  Announcing the launch of my new site built using a Static Site Generator [Astro]
---

I've finally converted my site from a PHP site into one created using a Static Site Generator (SSG)

## Table of contents

## Background

I last gave my site a face-lift back in 2011. At the time, I still used PHP to manage the header and footer
of the site so I only needed to write it once.

That has served me very well for the past 12 years, but it had been getting more and more dated as time
went on.

Last year (2022) I decided I'd give it a face-lift and given the "advancements" in web technology I had
4 viable directions I could take this. I will discuss each below, their pros and cons from my perspective, and
why I ultimately settled on a statically generated site. I'll also outline my struggles to get this
far.

## My Options for a New Site

I wanted to take this opportunity to learn something new. Since there was no rush at all to get it done
I decided to take my time and figure out how I wanted to go about it.

The 4 options I came up with were:

1. Use a modern UI framework (think BootStrap) and keep using PHP as the back-end
2. Switch to using something like Lambda/Azure Functions
3. Use a project like mdwiki (or my updated mdwiki-ng)
4. Figure out a way of generating HTML pages and host them on a CDN)

### Giving it a face-lift w/o changing the back-end

The first option appealed to my lazy side. I already know how to make a site dynamic using PHP so all I would
have to do was use an existing UI framework for the front-end.

**Pros**:

1. I only have to learn 1 thing
2. It'll be the quickest to complete

**Cons**:

1. It seemed like the easy way out and didn't serve the purpose
2. I'd still have to maintain the server and keep the site working as PHP versions are
   released (i.e. fix my site to make it work again after breaking changes)
3. As with any dynamic site, I have to keep an eye out for potential security boo-boos
   (my own or others')

I kept that as my backup option if all else failed.

### Using Lambda/Azure Functions

This approached initially appealed to me as it was closer to option 1 while letting
Amazon/Google/Microsoft worry about the infrastructure. I would still have to learn
a UI framework and chop it up into pieces that can be dynamically created on-the-fly.

My primary concern was billing. I'm not made of money, and if (for whatever reason)
something I wrote on my site got a big Reddit hug, I could potentially owe a lot of
money. Also, cloud services have sooo many services to achieve something
simple and to be honest I was intimidated and scared of getting it wrong (and paying
out the nose for the privilege).

**Pros**:

1. Infrastructure is someone else's problem
2. Only spins up when needed (potential cost saving)
3. Gives me hands-on experience with cloud services beyond running my VPSes
4. [Azure Functions] I would be using a programming language I'm VERY familiar
   and comfortable with (C#)

**Cons**:

1. Too many services to manage to achieve the desired result
2. Cost can balloon out of control very quickly w/o me realizing it till the
   bill came due
3. Too many unknowns and I don't know what I don't know

I ultimately decided against this. As I said, I chickened out.

### mdwiki/mdwiki-ng

I've been keeping my personal documentation/wiki using Markdown files and
using a project like [mdwiki](https://dynalon.github.io/mdwiki/#!index.md) to
make them more accessible. Since mdwiki hasn't been updated since 2018 and
browser's security posture has changed since then, it stopped working for me
so I created an updated version [mdwiki-ng](https://github.com/tHeCh0s3n0n3/mdwiki-ng)
with a few additions so it works better for me.

I could use the same and serve my website and easily create markdown files
for the content.

I quickly ran into issues with images and other limitations. Also the fact
that building mdwiki-ng was based on nodejs was an issue since I didn't know
enough to make all the changes I wanted.

**Pros**:

1. Using Markdown files for content is easy
2. Uses something I've already built

**Cons**:

1. mdwiki-ng is built using nodejs (it's npm, but you know what I mean)
   and breaks too often for my liking
2. Seemed too bloated for what I wanted to achieve (~4MB download size)
3. Didn't know enough to modify it exactly to taste

I did give it a go, but I ultimately failed. I wanted the blog section to be
dynamic based on my Markdown files, but I also wanted the ability to have
more complex pages (stuff Markdown doesn't/can't support) all within the same
context.

After a few false starts, each of which lead to abandoning more and more of
my wish-list, I eventually came across Static Site Generators (SSGs) which
I ended up ultimately going with.

### Statically Generated Site

I initially thought that I would build my own using C# and have it spit out
plain HTML pages. The more I thought about it, the longer the number of things
I'd have to build got. I was looking forward to the challenge and had a few ideas
of shortcuts I could take to skip a few steps.

Then serendipity struck. While browsing [r/webdev](https://old.reddit.com/r/webdev)
on Reddit one day and came across the concept that I was aiming to recreate myself
(I didn't know it was a thing).

Now that I knew the name of the thing, a quick search got me a bunch of SSGs.
To my dismay, they were primarily created in nodejs. I already had "experience"
with nodejs and knew that my skills weren't up to par.

**Pros**:

1. Satisfied all my requirements in the project
   a. Something new to learn
   b. Will result in a new website using modern UI frameworks/concepts
2. Will result in a small download size (vs. mdwiki-ng)
3. Result can be hosted anywhere w/o needing any interpreters (static HTML files FTW!)
4. Less infrastructure to worry about
5. Uses Markdown files for posts/content
6. [Learned much later] Can even be built directly on GitHub using GitHub actions

**Cons**:

1. Uses nodejs, an ecosystem I wasn't familiar with at all and which confused the hell
   out of me
2. Too many new concepts to learn, I had a **lot** of catching up to do

Ultimately, I decided to bite the bullet and learn.

Over a period of 1 year, I've started and stopped multiple times. Each time, going a bit
deeper down the rabbit-hole.

This site is the final result!

## How I Got Here

tl;dr: I had to learn **_a lot_**!

It started with learning modern front-end paradigms like FlexBox, the Grid system
(pre-CSS-grid), and modern UI frameworks. Again on r/webdev I came across
[halfmoon](https://www.gethalfmoon.com/) which is a front-end framework with dark-mode
built-in. I tried to shoe-horn it into what I was doing.

Through no fault of halfmoon's it wasn't working for me.

I then came across [Astro](https://astro.build/) which was in beta at the time, and it appeared
to be very flexible. It was obvious quite quickly though that I was suuuper out of my depth.
Too many new concepts to learn and v2 was in alpha so I was also fighting breaking changes
and v1 documentation.

After a few weeks spent trying to get it to work, I abandoned the attempt (I think it was
#3 at that point).

Some time later, and after much reflection, I decided that I needed to learn more basic
concepts such as a javascript front-end framework like AngularJS/ReactJS/VueJS. After
much hemming and hawing (and a fair bit of research) I decided to go with ReactJS.
AngularJS seemed too opinionated to me and VueJS was too new and I didn't want to have
a repeat of my Astro experience.

So I took a couple of ReadJS courses on [PluralSight](https://www.pluralsight.com/)
and then used [this great tutorial](https://handsonreact.com/) to have some hands-on with
ReactJS. I also learned typescript since that appealed to me as someone coming from a
background of strongly typed languages (C/C++/C#) and who has been bitten by
many logic bugs involving loosely typed languages (PHP/Python/Javascript).

Serendipity struck again and I was made aware of a "game" called
[Space Traders API](https://spacetraders.io/ "A unique multiplayer game built on a free Web API").
It's an API only game which has no front-end. That seemed perfect for a simulation of a
real-world project to apply what I learned and use ReactJS. I wouldn't need to bother
with the back-end and can put all my focus on the front-end.

I started playing around with it and creating my own ReactJS client. Then I got side-tracked.

A colleague of mine had used a QR code which tracked visitors. That was not the intention and
I wasn't comfortable with that at all, so I whipped up a quick QR Code generator back-end
and decided to create the front-end in ReactJS and host it on my website for anyone to use
(the URL is secret because I can't afford the server costs were it to get popular).

Here's a screenshot for your though:

![QR Code Generator Site created in ReactJS](/post-images/qrcode-react-site.png)

With that success, I decided to give Astro another go. The reason for that is quite simple;
as I was learning ReactJS, lots of things in Astro started to make sense (JSX components
being chief amongst them). The fact that Astro can natively use ReactJS is a boon for me. It
also does a bunch of other things automatically.

2 other factors helped get me across the line with Astro; first, it had completed the transition
from v1.0 to v2.0. Second, I came across Sat Naing's [astro-paper](https://github.com/satnaing/astro-paper)
theme which essentially does everything I was trying to do initially.

What sealed the deal for me is how simple astro-paper achieves the desired result. That in
combination with my new knowledge means I understand exactly what's going on. It also means
that I can tweak to exactly how I want it. Finally, I like the aesthetic.

Some of tweaks I did:

- Publish date visual tweaks:
  - Removed the time component of the publish date if it's not set (or is midnight)
  - Add the day ordinal and make it a superscript _n_[st|nd|rd|th]
  - Make the pipe `|` character _not_ italic (it looked weird to me)
- Add an "Apps" section:
  - Filters posts based on a specific tag
  - Differentiates between active development and deprecated apps
- Other tweaks:
  - The RSS feed link is now in the footer
  - Add my StackExchange social button and link it to my profile
  - Change the primary color to my personal yellow shade
  - Change the background color of the dark theme to black
  - All code blocks now get line numbers automatically

## Next Steps

- Publish this on GitHub ([Done](https://github.com/tHeCh0s3n0n3/tarekfadel.com))
- Use GitHub actions to generate it every time I push (Done)
- Find a way to automatically pull down the latest "release" once it's available (Done _article coming soon!_)

## Conclusion

So here we are, I now have a shiny (or dark based on your device's settings) new light-weight
website which allows me to author articles in Markdown. It's tweaked just the way I want it
and I understand exactly what's going on from a technical perspective.

All it took was perseverance, a willingness to learn and finding out many ways how _NOT_ to do it.
If you had told me a year ago that I'd not only know ReactJS, but that I'd be comfortable enough
to play around with someone else's code, I'd have asked if you'd forgotten to take your meds or
to share whatever it was you were smoking.

Was it easy? **NO!**

Was it quick? **Absolutely Not!**

Was it worth it? **100%**
