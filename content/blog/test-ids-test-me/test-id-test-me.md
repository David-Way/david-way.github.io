---
title: These test IDs, they test me
description: More robust, maintainable testing that helps strengthen product accessibility
publish: true
date: 2025-12-09
tags:
  - e2e testing
  - testing library
  - a11y
---

Test IDs provide a quick convenience for testers but no broader value to the product while they slowly become a net detriment to quality of a project and to the other project contributors.

The purpose of attaching test IDs to your UI is to make e2e testing easier, less fragile, and occasionally when swimming in `div` soup, to make it possible in the first place. A worthy endeavour.

However, the cost of relying heavily on this technique is that test IDs quickly become another implementation detail, an overhead and a friction that ultimately erodes the perception of code quality by giving a false perception of test robustness and UI fragility when the opposite can as easily be the case. They are little breadcrumbs that lead you down the road to maintenance hell.

When used as a last resort test IDs can reduce the fragility of e2e tests, but introducing them correctly, for each new piece of UI, and maintaining them as the UI evolves, becomes additional friction/inertia to change and improvement in the project that I believe is often not needed (and not something we can always promise, especially early in an active project).

Instead of relying on test IDs and expecting the markup trees within the tagged element to continue to exist in a very fragile and specific way, it is better to favour accessibility roles and labels, visible user-facing text, and semantic markup for your testing selectors.

What do I mean exactly? Well Playwright has [role-based locators](https://playwright.dev/docs/locators) and Testing Library has [role-based queries](https://testing-library.com/docs/queries/about/). Reading those documents might be more enlightening than anything I can convince you of here. Essentially these selectors enable a more human like mental modal for UI interaction.

Selecting elements by their semantic roles and the content they contain more closely resembles the way software is used by humans. As an aside, if it's hard or impossible to test your UI in this way that is also an indicator you're over-testing or using the wrong tool (ie, don’t test details better covered by visual regression or unit tests) or that your UI is devoid of semantic meaning and is therefore not accessible.

If a piece of UI is implemented accessibly, the above characteristics become unique, stable and intuitive. It solves the fragility problem that test IDs solve, but better and with less work required (benefiting from reuse of the prior accessibility effort).

Let's contrive ourselves up an example, a test that needs to select a button with a particular test-id:

```html
<!-- A needlessly presumptive markdown attribute -->
<button data-test-id="test-id-landing-page-header-logged-in-option-menu-trigger">
  Open menu
</button>
```
```js
// A needlessly brittle and obscure selector
driver.findElement(
  By.cssSelector(
    "[data-test-id='test-id-landing-page-header-logged-in-option-menu-trigger']"
  )
).click();
```

An accessibility defect is discovered, the expanded state of the menu is not communicated to screen reader users. The menu button component needs to be refactored and improved, and so is changed to to something like this:

```html
<!-- A typical markdown adjustment -->
<div class="menu-button__container" aria-owns="mb" data-test-id="...">
  <button aria-haspopup="true" aria-expanded="true" tabindex="0" type="button" aria-controls="mb">
    Open menu
  </button>
</div>
```
```js
// A resilient, accessibility conscious, role based selector
page.getByRole('button', { name: /Open menu/i }).click();
```

The first test ID selector approach will fail if the markup is moderately changed and the maintainer doesn't stop to consider the many instances this component could be referenced multiple times in an end to end testing suite.

However, a test that selects the element using role-based selector and the UI content would continue to work. It would continue to work in the same way the change would continue to work for a human performing those same test interactions manually. This gives us less brittle tests and less tests to update and maintain.

As a bonus, you don't even need to come up with and enforce a scoped naming conventions for test ID strings (to prevent clashing) while then further coupling the piece of UI to a page or location within a page.

Another benefit of this approach is that the test's intention, selectors, and actions are also more readable. When the tests do inevitably break (a piece of labelling copy is updated, a different component is used, it's moved to another page or location on the page), it's easier to understand and reason about why the test failed. Did this test fail because the content was updated, or it was moved to? With the test ID strategy all you know is that some part of your selector did not detect the same markup as when it was written. And now you have to find and replace 400 test selector even though the UI never really broke.
