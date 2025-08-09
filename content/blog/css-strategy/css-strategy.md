---
title: CSS strategy; The Whys and Whens
description: Thinking of styling with long-term vision in mind, rather than focusing solely on immediate effect.
publish: true
date: 2025-7-9
tags:
  - css
  - web design
---

Powerful modern CSS tooling and features have made achieving desired effects easier and more robust than ever.

When the "how" is so trivial you barely have to think about it you can lose some of the time and as a result the deeper understanding of the Why's and Whens that comes as a side effect of trial and error.

I'll take this opportunity to share a few more nuqnces points of view I've pondered up in my years of pushing (and failing to push) pixels that I feel I might have missed if things were always as easy as they are today.


## Mobile first?

The "direction" you write your CSS in should, for simplicity's sake, likely follow whatever convention your team has established already. Ideally, you should implement both options,on a case-by-case basis, and use the direction that results in the least amount of or most elegant code. Ultimately the key value here is to be thinking and designing in a mobile first mindset. "Space is not a given, space is a progressive enhancement, the pattern I choose will work first in the restrictions of a small screen and adapt to take advantage of any additional space where available".

## Using rems means my fonts are responsive?

Responsive fonts _and type settings_ must adjust to screen size, but also to the user's configuration. Remember that browser settings and browser plugins exist to allow users to override the base font size and the zoom level of any site. Your text should respond relatively to maintain hierarchy. Rems is how you achieve this. But don't forget the line lengths, language type direction and your typesetting space also needs to be proportional to maintain the responsive readability of the text.


## When is the concept of aspect ratio applicable in web design?

Enforcing an aspect ratio, via the padding bottom trick or the modern aspect-ratio property, should be reserved exclusively for graphics content (images, diagrams, video, maps, and some data tables). Responsive design is fundamentally about making the most of available space and avoiding overflow and multidirectional scrolling. The concept of enforcing an aspect ratio goes against this by preventing reflow or fluid resizing (wrapping text will increase in height as it is reduced in width) and risking overflow or two-dimensional scrolling. However, WCAG Success Criterion 1.4.10 for reflow has specific exceptions for some graphic content, listed above, as there is position and relational information encoded within these elements that cannot easily be adjusted to all screen contexts, and squished images are visually unappealing. Therefore, aspect ratios and the two-dimensional scrolling they risk are permitted and may be recommended.


## Is performance in CSS important?

Finely tuned code splitting, lazy loading/preloading assets, auditing and automating unused styles culling, file  minification, inlining critical above the fold render path styles, optimising animations to use hardware acceleration. These have the largest effect on the metrics we care the most about, reducing bundle size, minimizing FLOUT and other layout jank, preventing render thread blocking and minimizing time to first paint.

Low selector specificity will barely nudge the needle on any of these metrics but I single it out for it's outsized effect on the architecture, agility, scalability and maintainability of a project.