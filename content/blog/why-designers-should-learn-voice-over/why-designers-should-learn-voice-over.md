---
title: Why designers should learn VoiceOver
description: Or at least one screen reading software.
date: 2022-08-12
tags:
  - ux
  - a11y
  - voiceover
  - screen reader
---

I used to watch our Quality Assurance (QA) Engineers with concern, confusion, and a mild sense of awe as they interrogated my designs with what I could only describe at the time as their 'magical talking tools' (a screen reader).

When they explained why some cryptic combination of keys they were mashing was not resulting in the information or behavior they were expecting, I couldn't help but feel defeated.

The first goal in the debugging process is to reproduce the bug; you need to know with certainty how to reproduce the bug to know for certain that you've solved the problem.

Resolving complex bugs with another (very patient) person in the loop can be a lengthy process. To speed things up, I decided it was worth figuring out how to use a screen reader myself and I'm very grateful I did. Learning how to use these tools, how they worked, and the value they provide to a significant group of our users has helped me to assess designs through a new lens.

## What is VoiceOver anyway?

[VoiceOver](https://www.apple.com/accessibility/vision/) is the screen reader built into macOS. A screen reader is a piece of assistive technology primarily used by people with vision impairments to consume written content online through audio or touch output.

{% insettext "Screen Reader User Survey", "https://webaim.org/projects/screenreadersurvey8/" %}
It's worth noting that people with visual impairments aren't the only users of screen readers (3% of users report cognitive impairments, 2% have motor disabilities, and up to 12% have no disability at all.)
{% endinsettext %}

When we design for accessibility we elevate the usability of a designs for all users. The non-visual nature of the accommodations required for screen reader users means they can frequently be forgotten or seen as the developers job alone.

Screen reader support is a fundamental requirement to building accessible software (a costly one when left as an afterthought), and such an important aspect of the experience that designers have a lot to contribute to implementing it correctly.

Learning how to use a screen reader will make you better equipped at making inclusive decisions at every step of design process. And if you're reading this on an apple product, good news, you already have a screen reader installed on your device.

## How does a screen reader work with a web browser?

A web browser renders a website’s HTML, CSS, and JavaScript files to construct the web page you designed. The HTML defines the structure and content of the page.

{% insettext %}
CSS adjusts the appearance, and JavaScript adds interactivity and dynamic elements.
{% endinsettext %}

```html
<!-- Example HTML tag containing some "Content" -->
<div>Content</div>

<!-- Example HTML tag with a `role` attribute (with the value alert), containing some "Content" -->
<div role="alert">Content</div>

<div>
	<!-- Example HTML anchor tag, with a `href` attribute, nested in another HTML tag -->
	<a href="https://developer.mozilla.org">MDN</a>
</div>
```

The HTML tags, the attributes we append to them, and how we nest and combine them imbue semantic meaning to the content of our designs. HTML results two things we should be concerned about:

1. The visible UI we see rendered by browser
2. The corresponding accessibility tree, which is the underlying structure that is read by a screen reader

<figure class="u-bleed-container:medium">
  {% image "./images/a11y-tree.svg", "A diagram of an example accessibility tree, depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader, such as the elements locations, input type, name, and state." %}
  <figcaption>A diagram of an example accessibility tree depicting the hierarchical relationship of HTML elements and the implicit information they supply to the screen reader, such as the elements' locations, input type, name, and state.</figcaption>
</figure>

### Visual affordances

We're all familiar with affordances in design. An affordance is a compelling indicator of how an item on a page operates that includes its perceived and actual functions. Essentially, they are features that teach you how to use the functions or make them more intuitive. For example,

- A handle on a teapot teaches you how to hold it, and the spout suggests what to do next.
- The underline of a link is an example of a convention-based affordance.
- Using a shopping cart icon to indicate the concept of online purchases would be a metaphorical affordance.
- Making buttons look 3D or clickable through copy, shape, and/or color is a crucial affordance.

We rely heavily on visually available affordances to make our UI intuitive to non-screen reader users. However, these clues are not available to visually impaired users, so we need to provide equivalent information in non-visual methods.

### Non-visual affordances

Semantic non-visual affordances required by screen readers are provided when using the correct HTML elements and attributes to render our UI. The smantics of HTML let us express the affordances we offer to sighted users in a way that a screen reader can announce.

Semantics or meaning is given to the content in a web page through:

- Hidden and associated content - provided through labelling, using headings, [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) or related label elements
- Containing element - choosing the correct tag type or tag roles: is it a list, a button, or the sidebar of our site?
- The location the elements/content is placed - for example, is it a parent, child, or sibling of another element?

### Working _with_ the screen reader

The following image illustrates two implementations of a page that could be styled to render with a visually identical result. Both of which would provide a significantly different experience for a sighted vs. a screen reader user.

<figure class="u-bleed-container:medium">
  {% image "./images/clear-use-of-semantic-markup.svg", "A diagram displaying two HTML approaches to structure a page of content. One uses semantically correct tags, and the other achieves the same visual result but with only `div` tags." %}
  <figcaption>A diagram displaying two HTML approaches to structure a page of content. One uses semantically correct tags, and the other achieves the same visual result but with only <code>div</code> tags.</figcaption>
</figure>

Being aware of and using the appropriate HTML tags (along with their [implicit roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)) goes a long way to ensuring the content of your page is providing a usable experience for your screen reader users.

Using roles and ARIA attributes provides several additional mechanisms for adding labels, and descriptions and establishing relationships between elements when semantic HTML alone is insufficient.

**Example of a role attribute applied to a HTML tag** - The alert role is used to announce an important and usually time-sensitive message to the user.

```html
<div role="alert">...</div>
```

**Example of aria attributes being applied to a HTML tag** - The aria-expanded attribute is set on an element to indicate if a control is expanded or collapsed, and whether or not the controlled elements are displayed or hidden.

```html
<button aria-expanded="false" aria-controls="widget1">Show widget</button>

<div id="widget1">...</div>
```

### This sounds like a lot...

Learning [every `<html>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and attribute is obviously not a prerequisite to web design. Many tools can enable you to learn at the point of need and help you discover issues and resolve them as you go.

Plenty of resources document common patterns and pitfalls with advice on keyboard interactions you should be aware of and the correct ARIA roles, states, and properties to use. A great example worthy of a bookmark is the [W3 ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/).

Being familiar with using a screen reader enables you to better assess the hidden content and practices you'll need to consider to make your designs a good experience for all of your users.

#### A simple example

Lets explore two solutions to the icon button patterns as an example of how to label an action in both a visual and non-visual way.

In **Option A**, the inner `svg` image element is hidden from the accessibility tree due to the `aria-hidden` attribute. However, the equivalent text content of "Menu" has been provided using the `aria-label` attribute. This results in the screen reader announcing these elements as "Menu button".

```html
<!-- Option A. -->
<button aria-label="Menu">
	<svg focusable="false" aria-hidden="true">
		<path d="m..." />
	</svg>
</button>
```

An alternative technique, **Option B**, delivers the same experience, this time using plain text inside a `span` element that has been visually hidden using a `CSS` class. The content of the `button` is still available to the screen reader.

```html
<!-- Option B. -->
<button type="button">
	<svg aria-hidden="true" focusable="false">
		<path d="m..." />
	</svg>
	<span class="visually-hidden"> Menu </span>
</button>
```

Both example solutions contain visually hidden content, content that you should be aware needs to be there and content you as a designer should be contributing to.

{% insettext %}
Note we didn't need to include the word "button". The screen reader appends that content because of the implicit role of the `button` element.
{% endinsettext %}

If we had labeled the element as "Menu button", a screen reader would annoyingly announce it as "Menu button button". Navigating these subtle gotchas and conventions becomes second nature as you interact with a web document more frequently using a screen reader.

## Testing designs for screen reader experience

Of course, nothing beats testing your designs with someone who primarily accesses the web through assistive technologies like a screen reader. However, familiarizing yourself with the accessibility tools available, how to use a screen reader, and understanding how the screen reader conveys non-visual content will help you make better informed content, layout, and behavioral design.

I have written a concise onboarding guide for designers to [learn the bare minimum to start testing designs with VoiceOver](../how-to-get-started-with-voice-over).

### References

- [W3 ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/patterns/).
- [axe DevTools browser extension](https://www.deque.com/axe/devtools/chrome-browser-extension/).
- [IBM Equal Access Checker](https://www.ibm.com/able/toolkit/tools).
- The [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/) or [Chrome](https://developer.chrome.com/docs/devtools/accessibility/reference/#pane) accessibility inspector panel.
