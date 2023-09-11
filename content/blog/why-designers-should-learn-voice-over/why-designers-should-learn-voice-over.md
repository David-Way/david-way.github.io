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

## What is VoiceOver?

Voice Over is the Screen Reader built into Mac OS. A Screen Reader is a piece of assistive technology, primarily used by people with vision impairments, to consume written content online through audio or touch output.

It's important to not that that's [more than the number of people currently using the Fire Fox web browser](https://www.browserstack.com/guide/understanding-browser-market-share).

 note that people with visual impairments aren't the only users of Screen Reader (3% of users report cognitive impairments, 2% had motor disabilities and up to 12% of users have no disability at all. ([source](https://webaim.org/projects/screenreadersurvey8/)))

The experience of such a wide potential audience for our designs is important to accommodate and understand and as with most accessibility considerations can help elevate the usability of our designs for all users. 

## How does a screen reader work?

The HTML tags, the attributes we append to them, and how we nest and combine them, imbue semantic meaning to our designs and the content we place inside them. HTML generates two things:
1. GUI, rendered by browser
2. Accessibility Tree, read by a Screen Reader

<figure class="u-bleed-container:medium">
  {% image "./images/a11y-tree.svg", "A diagram of an example accessibility tree, depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader, such as the elements locations, input type, name and state." %}
  <figcaption>A diagram of an example accessibility tree, depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader, such as the elements locations, input type, name and state.</figcaption>
</figure> 

### Visual affordances

We're all familiar with affordances in design. An affordance is a compelling indicator as to how an item on a page operates and includes both its perceived and actual functions. Essentially they are features that teach you how to use the functions, or make them more intuitive.
- A handle on a teapot teaches you how to hold it, and the spout suggests what to do next.
- The underline of a link, is an example of a convention based affordance.
- Using a shopping cart icon to indicate the concept of online purchases would be a metaphorical affordance.
- Making buttons look 3D or clickable through copy, shape and/or color is a crucial affordance.

We rely heavily on visually available affordances to make our UI's intuitive to non screen reader users. These clues are not available to visually impaired users however so we need to be sure to provide equivalent information in non-visual methods.

### Non-visual affordances

Semantic non-visual affordances required by Screen Readers are provided by using the correct HTML elements and attributes to render our UI. Semantics let us express the affordances we offer to sighted users in a way that a screen reader can announce.

Semantics or meaning is given to content in a document through:
- Location in the DOM tree, for example is parent, child or sibling.
- Labelling, using headings, [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) or related label elements.
- Tag type or tag roles, is it a list a button, the sidebar of our site.

### Working *with* the screen reader

The following image illustrates two implementations of a page that could be styled to render with a visually identical result that would provide a very different experience for a sighted vs a screen reader user.

<figure class="u-bleed-container:medium">
  {% image "./images/clear-use-of-semantic-markup.svg", "A diagram displaying two HTML approaches to structure a page of content. One uses semantically correct tags and the other achieves the same visual result but with only `div` tags." %}
  <figcaption>A diagram displaying two HTML approaches to structure a page of content. One uses semantically correct tags and the other achieves the same visual result but with only <code>div</code> tags.</figcaption>
</figure>

Being aware of and using the appropriate HTML tags (along with their [implicit roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)) goes a long way to ensuring the content of your page is providing a usable experience for your screen reader users.

Using ARIA attributes provides several additional mechanisms for adding labels, descriptions and establishing relationships between elements when semantic HTML alone is not sufficient.

The following code illustrates how two solution to the icon button pattern.
In **Option A.* the inner `svg` element is hidden from the accessibility tree due to the `aria-hidden` attribute, however, the necessary text content of "Menu" has been provided using the `aria-label` attribute. This results in the screen reader announcing this elements as "Menu button". Note we didn't need to include the word "button", the screen reader appends that content because of the implicit role of the `button` element.

```html
<!-- Option A. -->
<button aria-label="Menu">
  <svg 
    focusable="false" 
    aria-hidden="true"
  >
    <path d="m1..."/>
  </svg>
</button>
```

An alternative technique, *Option B.* delivers the same experience, this time using plain text inside a `span` element that has been visually hidden using a `CSS` class. The content of the `button` is still available to the screen reader.

```html
<!-- Option B. -->
<button type="button">
    <svg
        role="img"
        aria-hidden="true"
        focusable="false"
    >
        <path d="m1..."/>
    </svg>
    <span class="visually-hidden">
        Menu
    </span>
</button>
```

## Testing designs for screen reader experience

There are 

I've created a previous post as an introduction getting started with VoiceOver the Screen Reader built into MacOs.

There are a number of tools to help assess an web page for accessibility issues

### Other Tools
- [axe DevTools browser extension](https://www.deque.com/axe/devtools/chrome-browser-extension/)
- [IBM Equal Access Checker](https://www.ibm.com/able/toolkit/tools)
- Your browsers accessibility inspector, for [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) or [Chrome](https://developer.chrome.com/docs/devtools/accessibility/reference/#pane)


