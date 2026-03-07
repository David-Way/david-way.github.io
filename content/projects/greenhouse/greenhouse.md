---
title: Building a Greenhouse
subTitle: Designing and building a greenhouse.
description: Designing and building a greenhouse for the sunniest corner of the garden.
publish: true
gridShape: tall
order: 4
thumbnail: greenhouse/images/final.jpg
needsModelViewer: true
date: 2025-05-16
tags:
  - woodwork
  - gardening
  - side project
---

Wicklow, where I’m from originally, is Ireland's “Garden County”, but it’s in the slightly less green, but equally lovely Dublin, where I’ve lived for the last 10 years now. After not having a pot or a patch garden for all that time, having a garden now, even a small one, has been a wonderful change.

There are certain charms and challenges to having a small garden and an overly ambitious expectation of what it can produce. Optimized use of space is a design constraint I am familiar with.

## The problem

South-facing and generally bright-ish, at times over the course of the day, not much direct light finds its way to that sodden patch of earth I call my loam.

There is one corner, however, that seems to sit in a near-constant beam of light for the majority of the day. That very same awkward concrete dessert of a corner is also the last vital plot we wrangled into productivity.

Adding a greenhouse seemed like a good use of the space that would otherwise go to waste. Our definition of waste is “any inch not producing or contributing towards something we can eat”.

### Buy, build or borrow?

Why build a greenhouse instead of buying one? I spent a lot of time comparing the limited tall-standing greenhouse options available in my area. They tended to miss my requirements on their size and shape, not being a good fit for the available space (too deep, not wide enough, inefficient use of internal space, etc..), and made with less than ideal materials. I like to minimise the plastic I use around food, and plastic-coated steel tubing doesn't hold up well to Irish humidity. Many of the available options are too cheap and wouldn’t last long, or far too expensive and not worth their cost


## Material choice and requirements

I considered using flame-treated wood and treating it myself. However, cedar soon became my material of choice due to its rot resistance, natural durability, and reduced risk of being set alight in the process. I also like the way cedar slowly silvers in the sun over time.

For the window panels, polycarbonate/plexiglass appears to be commonly used in smaller commercially available greenhouses, the optimisation here seems to be for cost and safe deliver-ability but as those are not my primary goals as well as the fact that I find it doesn’t age very well, I chose to go with glass. Glass just looks better to me, will last longer (baring any accidental breakages) and the added weight will help make sure the structure won’t blow away.

For protection, I chose tung oil as it has a nice balance of properties. It does require multiple coats and yearly maintenance, but it’s food safe and doesn’t overly color the wood. Most pressure-treated woods intended for external use are generally considered food-safe these days, but I like the color and aesthetic of the cedar and tung oil combination over the sickly green tint you get from adding preservatives.

## Design & build

When designing a solution myself, I was able to adapt the proportions to the available space exactly. After measuring and extending the space with a platform, I designed a quick 3d sketch to tune the layout and proportions.

{% set modelViewer = {
  modelPath: "images/greenhouse-sketch.stl",
  description: "An interactive 3D model of a slim and tall greenhouse.",
  height: "620",
  width: "500"
} %}

{% include "components/model-viewer.njk" %}


{% image "./images/greenhouse-drawing.png", "CAD drawings of the greenhouse" %}


I added a top-hinged access panel that can be opened to varying degrees for adjustable ventilation. The doors are latched using small magnets at the top of each door frame. The frames that hold glass have a rabbet to hold the panes, which are held in with silicon. 


{% image "./images/side.jpg", "The side frames" %}

Simple lap joints for the frames

{% image "./images/frame-assembly.jpg", "The main frame going together" %}

The frame goes together.

{% image "./images/back.jpg", "Cedar planks added to the back" %}

The back wall is installed.

{% image "./images/top.jpg", "The top frame added" %}

The top hinge frame is attached.

{% image "./images/doors.jpg", "One door attached" %}

Next, the doors are attached and held in place using magnets.

{% image "./images/final.jpg", "Greenhouse finished" %}

After 4-5 coats of oil, the frame is installed on it's base and the glass panels are held in place with silicon.

{% image "./images/top-open.jpg", "Showing the hinged top frame" %}

### Glass

4 x door panels - 355mm wide x 590mm length 
4 x side panels - 375mm wide x 445mm length 
2 x roof panels - 416mm wide x 509mm length
2 x corner slope panels - 375mm wide x 428mm length long side and 308mm length on the shortside

## The result

{% image "./images/in-the-sun.jpg", "A greenhouse tucked in a sunny corner of a well used garden" %}

A well-suited, fit-for-purpose structure that our seedlings can now call their greenhouse, a green home.