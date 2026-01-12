---
title: CSS strategy
description: Thinking of styling with long-term vision in mind, rather than focusing solely on immediate effect.
publish: true
date: 2025-07-09
tags:
  - css
  - web design
---

Powerful modern CSS tooling and features have made achieving the designs we are tasked with achieving easier and more robust than ever.

When the "how" becomes so effortless that it requires little thought, you may lose valuable time for reflection. This can ultimately undermine the deeper understanding of the reasons and situations behind your choices, which often develops through trial and error.

I'll take this opportunity to share a few more nuanced points of view I've pondered up in my years of pushing (and failing to push) pixels that I feel I might have missed if things were always as easy as they are today.


## Mobile first vs Desktop first

The "direction" you write your CSS in should, for simplicity's sake, likely follow whatever convention your team has established already. Ideally, you should implement both options,on a case-by-case basis, and use the direction that results in the least amount of or most elegant code.

Ultimately the key value here is to be thinking and designing in a mobile first mindset. For example, "Space is not a given, space is a progressive enhancement, the pattern I choose will work first in the restrictions of a small screen and adapt to take advantage of any additional space where available". The direction you implement that design in is less important.

## Does using rems means my fonts are responsive?

Responsive fonts _and type settings_ must adjust to screen size, but also to the user's configuration. Remember that browser settings and browser plugins exist to allow users to override the base font size and the zoom level of any site. Your text should respond relatively to maintain hierarchy. Rems is how you achieve this. But don't forget the line lengths, language type direction and your typesetting space also needs to be proportional to maintain the responsive readability of the text.


## When is maintaining an aspect ratio applicable in web design?

Enforcing an aspect ratio, via the padding bottom trick or the modern aspect-ratio property, should be reserved exclusively for graphics content (images, diagrams, video, maps, and some data tables). Responsive design is fundamentally about making the most of available space and avoiding overflow and multidirectional scrolling. The concept of enforcing an aspect ratio goes against this by preventing reflow or fluid resizing (wrapping text will increase in height as it is reduced in width) and risking overflow or two-dimensional scrolling.

However, WCAG Success Criterion 1.4.10 for reflow has specific exceptions for some graphic content, listed above, as there is position and relational information encoded within these elements that cannot easily be adjusted to all screen contexts, and squished images are visually unappealing. Therefore, aspect ratios and the two-dimensional scrolling they risk are permitted and may be recommended.


## Is performance in CSS important? What's worth focusing on?

Finely tuned code splitting, lazy loading/preloading assets, auditing and automating unused styles culling, file  minification, inlining critical above the fold render path styles, optimising animations to use hardware acceleration and avoid triggering repaints. These have the largest effect on the metrics we care the most about, reducing bundle size, minimizing FLOUT and other layout jank, preventing render thread blocking and minimizing time to first paint. CSS is rarely the main cause of performance issues and in some cases the complexity incurred by these methods can be like picking up pennies in front of a steam roller and the energy would be best spent elsewhere (media and JavaScript). These are all worth investing some level of effort into, however...

Low selector specificity will barely nudge the needle on any of these metrics but I single it out for specific "performance" focus for it's outsized effect on the style architecture, agility, scalability and maintainability of a project. Also, developer sanity.

## Design tokens are not just about scalability, reuse, performance, theme-abilty and consistency.

Design tokens are about imbuing meaningful relationships between your design decisions.

Capturing these relationships with meaningful names (and in a single place) makes understanding the downstream effects of changes and implementing accessibility best practices, such as maintaining sufficient color contrast, much simpler.

## What kind of CSS should I use?

Our goal should be to create a styling system that is consistent, scalable, and easy for developers to work with. We can avoid duplicated code, maintain a consistent visual style, and make our stylesheets easier to debug and maintain by by carefully selecting the most appropriate methods of applying styles.

### Custom CSS

If the styles are inherent to the component and are not applicable anywhere else. When you need to specify multiple, component-specific style rules that are not just single values and the styling is complex and tightly coupled to the component’s structure and functionality then write custom CSS. 

Split your styling into global styles (for example, custom properties, typography, utilities) and component specific styles (button, link, card). Then only import the styles you're using on a page.

```scss
.button {
  @include mixins.button-reset()
  background: ...;
  color: ...;
  border: ...;

  &__icon {
    ...
  }

  &--secondary {
    border-color: ...;
  }
}
```

```jsx
import './button.scss' // Button styles are only imported when the button component is imported

export default function Button(){
  return (
    <Button className="button">...</Button>
  );
}
```

### Utility class

If you're adjusting how multiple components arrange between themselves in a simple non-dynamic way or applying a highly repetitive and generalizable single value (e.g. adjusting spacing between static components). This approach helps reduce CSS bloat (drying out you spacing styles) and encourages consistency.

```jsx
<div className="u-padding-block-start:medium">
  <Button className="u-margin-inline-end:small" />
  <Button icon={<Icon className="u-color:success" />} />
</div>
```

### Layout component

When you need to manage the arrangement and spacing of multiple components, especially in a complex or dynamic way, a layout component is the right tool. These are reusable components that encapsulate layout logic, often using Flexbox or Grid.


```jsx
<Stack spacing="medium" align="center" justify="flex-start" as="ul">
  {listItems.map(listItem => (<ListItem>{listItem}</ListItem>))}
</Stack>
```

```jsx
<AutoGrid gap="6">
  {saleNowOn && (
    <ProductCard product={saleProduct} />
  )}

  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</AutoGrid>
```

### Inline styles

Inline styles should be avoided as they are high in specificity and low in reusability. It is also a very restricted way of using CSS as you can't do pseudo, parent, child, sibling or hover/active/visited selectors inline.

Inline styles should be reserved for applying the result of a highly specific JavaScript calculations. For example, as part of a positioning engine.

```jsx
const {targetRef, styles} = usePosition();

return (
  <>
    <Button ref={targetRef}>
      <Icon decorative />
      <span className="u-screen-reader-only">Tooltip</span>
    </Button>
    <div style={styles}>
      Tooltip content
    </div>
  </>
);
```

### CSS In JS

The `C` in `CSS` stands for cascade. The cascading nature of CSS allows us to think systematically or algorithmically about how styles (or multiple styles) are applied to our sites, as well as to make broad-stroke and fine-detail decisions elegantly and predictably. It is one of the language's greatest strengths, however, it is also the thing most new developers struggle with.

CSS-in-js and other similar tools seem like a solution to scoping that we might think we need here. It is actually fighting the grain of CSS. Ignoring any performance effects, which have been reduced substantially over the years, it also enables a mindset that makes maintaining consistency and features like theming more difficult and complex than they need to be.

In a modern component-based web development ecosystem, there is an argument for the isolation and encapsulation that developers aim to achieve with these javascript based solutions. Before reaching for these tools, it might be worth investigating other ways to achieve style scoping, for example, using BEM, CSS modules, and the [`@scope` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope).
