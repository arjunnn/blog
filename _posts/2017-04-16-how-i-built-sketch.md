---
layout: post
title: "How I Built Sketch"
date: "2017-04-16"
tags: projects
---

Over the last week, I built a fun&trade; and cool&trade; web app to draw doodles and simple drawings.
I appropriately named it **Sketch**.

You can check it out here: [https://sketch.arjun.ninja](https://sketch.arjun.ninja)

## Why

I got the idea for Sketch while I was checking out the [article](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) for HTML5 Canvas on MDN.
Now why was I doing that? Because I recently completed Wes Bos' [JavaScript30](https://javascript30.com) course (great course btw, highly recommend!) and used Canvas element in one of the course lessons.
I was immediately blown away by its capabilities and potential.
So to dig deeper, I scoured the internet for resources and found myself on MDN.

## Process

First, I noted down the functionality my app would provide. writing it down helped me focus and build a [Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product).

![User Stories](images/user-stories.jpg)

I started by building whatever I had learned during the Canvas course.
With little effort, I had a canvas to draw on and a function to listen to mouse events and translate them to ink on the canvas.

Here's an initial UI mockup:

![UI Mockup](images/ui-mockup.jpg)

I then added a colour palette, a brush width selector, and a multi-colour brush. The multi-colour brush is my favorite.

<video autoplay="autoplay" loop="loop" muted="muted" width="100%" preload="auto"> <source src="images/sketch-color-selection.mp4"> </video>

I then added touch and multi-touch, with the help of MDN's excellent [guide](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events) to adding touch input to canvases. There was only one feature remaining in my list: Saving sketches as images.

For this, I used the canvas API's `toDataURL()` method to convert the canvas to a base64 encoded string of `image/png` type, which I then set as the `href` in my download link element.

{% highlight html %}

<a href="#" download="drawing.png" onclick="saveImage()" class="action">Download sketch</a>

{% endhighlight %}

The `download` attribute triggers a save dialogue in the browser when the link is clicked.
Unfortunately, this hack was of no use in mobile browsers because apparently mobile browsers don't automatically decode base64 strings.

I said screw it, ship it. And that's how I got to my MVP, 2 days after I started from scratch.
I launched the website on GitHub Pages and got good reviews from my cool friends.

This was v1:

<video autoplay="autoplay" loop="loop" muted="muted" width="100%" preload="auto"> <source src="images/sketch-v1.mp4"> </video>


But the lack of mobile save option still bugged me.
Meanwhile, I thought of another feature:
**A unique share URL for every sketch**.

## Sketch v2
