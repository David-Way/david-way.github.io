---
title: Why designers should learn VoiceOver
description: Or at least one screen reading software.
date: 2022-08-12
tags:
  - ux
  - a11y
  - voice over
  - screen reader
---

I used to watch our Quality Assurance (QA) Engineer with concern, confusion and a mild sense awe as they interrogated my implemented designs with their magical talking tools.

When explaining why some cryptic combination of keys they were mashing was not resulting in the information or behavior they were expecting I couldn't help but feel defeated. 

The first goal in the debugging process is to reproduce the bug, if you don't know with certainty how to reproduce the bug, you can't know for certain that you've actually solved the problem.

Weary of the lengthy back and forth required to understand and resolve any issues this way, with a whole other (very patient) person in the loop, I decided it was  worth figuring out how to use a Screen Reader myself. 

I'm very glad I did, as learning a how to use these tools, how they worked and the value they provide to a significant subset of our users has helped me to assess designs through a new lense. 

## What is Voice over?

Voice Over is the Screen Reader built into Mac OS. A Screen Reader is a piece of assistive technology, primarily used by people with vision impairments, to consume written content online through audio or touch output.

It's important to note that people with visual impairments aren't the only users of Screen Reader (3% of users report cognitive impairments, 2% had motor disabilities and up to 12% of users have no disability at all. - [source](https://webaim.org/projects/screenreadersurvey8/))

The experience of such a wide potential audience for our designs is important to accommodate and understand and as with most accessibility considerations can help elevate the usability of our designs for all users. 

## How does a screen reader work?

The HTML tags, the attributes we append to them, and how we nest and combine them, imbue semantic meaning to our designs and the content we place inside them. HTML generates two things:
1. GUI, rendered by browser
2. Accessibility Tree, read by a Screen Reader

<div class="u-bleed-container:small">
{% image "./images/a11y-tree.svg", "A diagram of an example accessibility tree, depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader, such as the elements locations, input type, name and state." %}
<figure>A diagram of an example accessibility tree, depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader such, as the elements locations, input type, name and state.</figure>
</div>

### Visual affordances

We're all familiar with affordances in design. An affordance is a compelling indicator as to how an item on a page operates and includes both its perceived and actual functions. Essentially they are features that teach you how to use the functions, or make them more intuitive.
- A handle on a teapot teaches you how to hold it, and the spout suggests what to do next.
- The underline of a link, is an example of a convention based affordances/.
- Using a shopping cart icon to indicate the concept of online purchases would be a metaphorical affordance.
- Making buttons look 3D or clickable through copy, shape and/or color is a crucial affordance.
We use these visually available affordances to make our UI's intuitive to non screen reader users.

## Non-visual affordances

Semantic non-visual affordances required by Voice Over are supplied by using the correct HTML elements and attributes to render our UI. Semantics let us express the affordances we offer to sighted users in a way that a screen reader can announce.

Semantic or meaning is given to content in a document through
- Location in the DOM tree, for example is parent, child or sibling
- Labelling, using headings, aria-labels or related label elements
- Tag type or tag roles, is it a list a button, the sidebar of our site

## How to use a screen reader to 

System Settings > Accessibility > Voice Over > Voice Over training (recommend 20 mins)

How to:
- Turn if on/off: command + F5 (or on expanded keyboard, fn + command + F5)
- Issue Voice Over command: control + option (also referred to as the VO key, use middle and ring finger)
- Move around:
  - Next/Previous: VO + left/right arrow key
  - Go into/Exit out of collection: VO + SHIFT + up/down arrow key (out of a table, into a panel like web page view)
  - Simulate mouse click: (double) VO + SPACE
- Heading skip:  VO + Command + H
- Interrupt Voice Over: control key
- Rotor/Uber key: VO + U
- Change rate in Voice Over Settings: Shift + control + option + command + arrow up/down (press and hold)

Demo task:
- Using wikipedia, find out how many people were on the titanic

<div class="u-bleed-container:medium">
{% image "./images/shortcuts-basic.svg", "A diagram displaying a list of 5 basic commands for VoiceOver, 1. Command + F5 to toggle VoiceOver on/off, 2. Command + Option, this combination is referred to as the VO key, 3. VO key + arrow left/right to navigate next/previous 4. VO key + Space to simulate a double mouse click,  5. VO + Shift + up/down arrow keys to Go into/Exit out of a region." %}
<figure>A diagram displaying a list of 5 basic commands for VoiceOver, 1. Command + F5 to toggle VoiceOver on/off, 2. Command + Option, this combination is referred to as the VO key, 3. VO key + arrow left/right to navigate next/previous 4. VO key + Space to simulate a double mouse click,  5. VO + Shift + up/down arrow keys to Go into/Exit out of a region.</figure>
</div>
