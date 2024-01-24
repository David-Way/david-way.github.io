---
title: Are CSS utilities for color a good idea?
description: Why I avoided color utility classes for a long time...
date: 2021-02-15
tags:
  - design system
  - developer experience
  - a11y
---

A footgun refers to something designed to be highly likely to be used in a way that will cause more problems than it solves.

A CSS utility class applies a single abstracted rule or a collection of simple rules, typically scoped to achieve a particular pattern. In the context of a Design System, it is also an efficient sanctioned/supported way to extend system design decisions to custom components and variants.

Here is an example of a utility class for applying lead typography styles.

```css
/** _utils.scss - how it's made */
.u-type\:lead {
	font-size: 22px;
	font-weight: 400;
	line-height: 34px;
	max-width: 77rem;
}
```

```html
<!-- index.html - how it's used -->
<p class="u-type:lead">
	A lead paragraph is the opening paragraph of an article, book chapter, or
	other written work that summarizes its main ideas.
</p>
```

{% insettext %}
Unless you're working with a utility first approach, prefixing utility classes with a `u-` is a useful way to make the source of its effect more obvious (utilities will often be `!important` with high specificity, overriding other styles, seeing a utility class on an object helps to explain this behavior if it's unexpected)
{% endinsettext %}

Providing utility classes to Design System consumers as part of your established API is an easy decision with clear value. Utility classes help developers:

1. **Maintain consistency** - by making it easy to be consistent with color choices and purpose, spacing, typography, shadows, and other aesthetic flourishes that should be globally applied to all components, compositions, extensions, and custom implementations.
2. **Improve Efficiency** - utility classes can [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) out the styles delivered to the browser by abstracting some of the more commonly applied styles and simplify the work required to use the design language to any extensions or customizations of the Design System contents.
3. **Avoid common issues** - utilities help abstract robust, cross-browser solutions to complex or unintuitive front-end development problems.

## With great power...

Utility classes are very powerful development tool. Our Design System provides utility classes for spacing, elevation, animation, display type, visibility across breakpoints, maintaining aspect ratio, visually joining elements, and scoping different themes inline in a page

Though it was one of the most commonly requested, color was the last category of utilities we included. The primary concerns were accessibility-related but also aesthetic. Our experience with customization didn't trust that these utilities would be used wisely and therefore thought it was safer they never existed in the first place.

I gathered examples of customer requests related to color and analyzed the themes. When a client wants to apply color to a design, they usually intend to elevate the visual impact of a specific element or "make it pop". Balance or visual hierarchy

Status colors
Colors can be used to reflect system status. Conventionally, red represents danger or error, yellow represents a warning, green represents normal or success, and blue represents passive information.

## Solution

What are the accessibility implications of using color as decoration? What are the conventional and cultural connotations of this color. Which users need to receive the information you're imparting with color? Which colors are safe to use, and where are they safe to use? How can color affect the balance and hierarchy of the page?
Is the thing you want to make more impactful going to

These are many questions a designer asks before deciding the appropriate use of a color.

### Automation and tooling

Our product provides a testing suit that comes with an perform automated integrated accessibility testing.

> Another potential solution is to provide an ESLint rule set
> Prefixing classes can also be helpful. Recommend linting class usage and limiting developers to only utility classes.

```js
module.exports = {
	meta: {
		type: "suggestion",
		docs: {
			description: "Manually confirm contrast",
			category: "Possible Accessibility Errors",
			recommended: true,
			url: "https://webaim.org/resources/contrastchecker/",
		},
	},
	create: function (context) {
		return {
			JSXAttribute: (node) => {
				if (
					node.name.name == "className" ||
					node.value.raw.includes("u-color:")
				) {
					context.report({
						node: node,
						message:
							"Manually check this element for color contrast against its background. Include tests for the state.",
					});
				}
			},
		};
	},
};
```

### Documentation and guidance

Document high-level design guidance and technical implementation details next to each other on the same page...

## Example guidance

⚠️ Color should be used with purpose and never as decoration. Never use color alone to convey information. Ensure that colored text and graphics are understandable when viewed without color. [Test your foreground and background color combinations](https://webaim.org/resources/contrastchecker/) to ensure there is enough contrast between them. Colorblind and low-vision users may not be able to perceive the color differences, and screen readers do not announce colors to non-sighted readers.

## Support colors

Conventionally, red represents danger or error, yellow represents a warning, green represents normal or success, and blue represents passive information.

### Success

Use for Success, Confirmed, Completed, or On states.

```html
<element class="u-color:success" />
```

✅ Application submitted
Your reference number is HDJ2123F.
Example of appropriate use of the success color on a status indicator

### Warning

Use for Warning and Caution states.

```html
<element class="u-color:warning" />
```

⚠️ Verification required
Example of appropriate use of the warning color on a status indicator

### Danger

Use for Error, Failure, Reduction, Cancellation, and Incorrect usage states.

```html
<element class="u-color:danger" />
```

`🔻$4.04`

Example of appropriate use of the danger color on an adjustment indicator

### Info

Use for Additional information, Help and Exceptions states.

```html
<element class="u-color:info" />
```

ℹ️ Planned office closure
Example of appropriate use of the info color on a status indicator
