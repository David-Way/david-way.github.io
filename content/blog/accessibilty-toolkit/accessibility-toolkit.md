---
title: A11y toolkit
description: A list of helpful tools and resources for building accessible digital products.
publish: true
date: 2024-11-22
tags:
  - a11y
  - web design
  - guide
  - tools
---

Humans are the only species for whom tool use is a defining and universal characteristic.

What I value most in good tools is how they embody the toolmakers knowledge and the expertise related to the tasks and needs they were designed to address. They crystallize, refine, and facilitate the sharing of this knowledge and expertise. Good tools can provide solutions while teaching you more about the underlying problems.

When approaching a new domain, finding and deeply learning about available tools can be a great introduction to learning about the domain.

In the last year I've been learning deeply and applying the concepts and principles of accessible digital product design. Here is a list of tools and resources I've found particularly useful.

## Web Design Tools

{% describedlink
  "WebAim Color contrast checker",
  "https://webaim.org/resources/contrastchecker/",
  "Contrast is a measure of the difference in perceived 'luminance' or brightness between two colors. Having enough contrast is vital to ensure users with visual disabilities, must be able to perceive content on the page."
%}
{% describedlink
  "Deque color contrast checker",
  "https://dequeuniversity.com/color-contrast",
  "Much like the WebAim contrast checker but it uses a different algorithm and can give slightly different results. It's worth testing with both tools if your values are just barely meeting minimum contrast requirements."
%}
{% describedlink
  "Deque aria usage patterns",
  "https://dequeuniversity.com/library/",
  "A code library of accessibility focused work in progress examples."
%}
{% describedlink
  "Axe browser extension",
  "https://www.deque.com/axe/browser-extensions/",
  "A free accessibility browser extension."
%}
{% describedlink
  "pagespeed.web.dev",
  "https://pagespeed.web.dev/",
  "Analyze your implementation with PageSpeed Insights. Get your PageSpeed score and use PageSpeed suggestions to make your web site faster and more accessible."
%}
{% describedlink
  "Flesch Kincaid Calculator",
  "https://charactercalculator.com/flesch-reading-ease/",
  "Gauge the accessibility of your written content. An online tool that evaluates the readability of a piece of text. The tool gives both ease of reading score and calculates the reading grade level which equates the texts complexity to an American school grade level."
%}
{% describedlink
  "WebFX",
  "https://www.webfx.com/tools/read-able/",
  "An objective reading grade level assessment tool. Ensure your language is clear and understandable to your target audience."
%}
{% describedlink
  "IBM a11y Figma annotations and guidance kit",
  "https://www.figma.com/community/file/1118184491812988116/ibm-accessibility-design-kit",
  "This Figma library contains bite-sized guidance and handoff assets for accessibility."
%}
{% describedlink
  "WAVE Web Accessibility Evaluation Tools",
  "https://wave.webaim.org/",
  "WAVE® is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities."
%}

## Bookmarklets

<details>
  <summary>What is a bookmarklet?</summary>

A browser bookmarklet is a small piece of JavaScript code saved as a bookmark in a web browser.

Bookmarklets can perform a specific action when clicked and be used to manipulate , interact with the current webpage and its content.

</details>

{% describedlink
  "ANDI",
  "https://www.ssa.gov/accessibility/andi/help/install.html/",
  "Accessible Name & Description Inspector (ANDI) is a free accessibility testing tool."
%}
{% describedlink
  "Full Current Page DOM HTML Validator",
  "https://dequeuniversity.com/validator",
  "This bookmarklet is the most convenient way of using the W3C HTML Validator service."
%}

A long list of very specific bookmarklets can be found on [Paul J. Adam](https://pauljadam.com/bookmarklets.html)'s consultancy site.

## References

<figure>
{% image "./images/uk-gov-dos-donts-a11y-posters.png", "collection of do's and don'ts UK Gov a11y posters" %}

<figcaption>
The <cite><a href="https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/">Dos and don'ts on designing for accessibility</a></cite> by UK Gov Design Team. Print them out and hang them around the studio/office.
</figcaption>
</figure>

{% describedlink
  "ARIA Authoring Practices Guide (APG) Patterns",
  "https://www.w3.org/WAI/ARIA/apg/patterns/",
  "Learn how to make accessible web components and widgets with ARIA roles, states and properties and by implementing keyboard support. Provides one or more ways of implementing each pattern, demonstrated with functional examples."
%}
{% describedlink
  "ARIA Authoring Practices Guide (APG) Names and descriptions",
  "https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/",
  "Learn how to provide elements with accessible names and, where appropriate, accessible descriptions."
%}
{% describedlink
  "W3 A11y fundamentals guide",
  "https://www.w3.org/WAI/fundamentals/",
  "An industry standard resource that provides information for getting started with accessibility"
%}
{% describedlink
  "Bootcamp takeaways - Blog post",
  "https://www.davidway.ie/blog/accessibility-bootcamp-takeaways/",
  "Just a lil blog post I whipped up after completing one of the Deques' bootcamp courses"
%}
{% describedlink
  "Aria attributes; A quick guide",
  "https://www.davidmacd.com/blog/wai-aria-accessbility-for-average-web-developers.html",
  "Developers should be able to understand what aria attributes do and when to use them and, most importantly, when not to use them."
%}
{% describedlink
  "Assistive Technologies support reference",
  "https://a11ysupport.io/",
  "A reference to tell if your code will work with assistive technologies."
%}
{% describedlink
  "Screen Reader Browser combination support reference",
  "https://www.powermapper.com/tests/screen-readers",
  "Overall reliability of HTML, CSS and ARIA features designed for assistive technology in different screen reader / browser combinations."
%}
{% describedlink
  "HTML5 accessibility feature browser support",
  "https://html5accessibility.com/",
  "Get the current accessibility support status of HTML5 features across major browsers."
%}
{% describedlink
  "Accessibility in government, GOV.UK blog",
  "https://accessibility.blog.gov.uk/",
  "A blog that documenting how the GDS accessibility team is rebuilding inclusive digital services across the UK Government."
%}
{% describedlink
  "A11y Cat Digital Accessibility Resources",
  "https://raindrop.io/a11ycat/a11y-cat-digital-accessibility-resources-35893871",
  "A link directory for professionals who work with digital accessibility."
%}
{% describedlink
  "foreveryone.design",
  "https://www.foreveryone.design/",
  "67% of accessibility defects originate in the design process. Shift the fix left by using this library of high-quality resources for UX/UI designers."
%}

## Courses

Here's a list of accessibility training materials, because the best tool box you can fill is the one between your ears...

{% describedlink
  "Accessibility First Design",
  "https://www.linkedin.com/learning/accessibility-first-design/why-accessibility-first-design",
  "A short hour and a half course covering the benefits of an accessibility-first approach to designing digital experiences to build more useful, resilient, and inclusive products."
%}
{% describedlink
  "Deque: Accessibility Bootcamp",
  "https://dequeuniversity.com/curriculum/instructor-led/bootcamp",
  "A two-day bootcamp to equip individuals across various technical roles with the fundamental knowledge and domain specific practical a11y skills."
%}
{% describedlink
  "IAAP Certification program",
  "https://www.accessibilityassociation.org/s/certification",
  "The IAAP Certification program offers professional credentials in accessibility, validating knowledge and skills in creating inclusive digital and physical environments."
%}
