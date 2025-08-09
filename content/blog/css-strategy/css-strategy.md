---
title: CSS strategy; The Whys and Whens
---

## Mobile first?

The "direction" you write your css in should, for simplicity's sake, likely follow whatever convention your team has established already. Ideally, you should implement both options and use the direction that results in the least amount of or most elegant code, on a case-by-case basis. Ultimately the key part is to be thinking and designing in a mobile first mindset. "Space is not a given, space is a progressive enhancement, the pattern I choose will work first in the restrictions of a small screen and adapt to take advantage of any additional space where available.

## Responsive fonts?

Responsive fonts and type settings must adjust to screen size, but also to the user's configuration. Remember that browser settings and browser plugins exist to allow users to override the base font size and the zoom level of any site. Your text should respond relatively to maintain hierarchy and line lengths of your typesetting and the readability of the text.


## When is the concept of aspect ratio applicable in web design?

Enforcing an aspect ratio, via the padding bottom trick or the modern aspect-ratio property, should be reserved exclusively for graphics content (images, diagrams, video, maps, and some data tables). Responsive design is fundamentally making the most of available space and avoiding overflow and multidirectional scrolling. The concept of enforcing an aspect ratio goes against this by preventing reflow or fluid resizing (wrapping text will increase in height as it is reduced in width) and risking overflow or two-dimensional scrolling. However, WCAG Success Criterion 1.4.10 for reflow has specific exceptions for some graphic content, listed above, as there is position and relational information encoded within these elements that cannot easily be adjusted to all screen contexts, and squished images are visually unappealing. Therefore, aspect ratios and the two-dimensional scrolling they risk are permitted and may be recommended.

