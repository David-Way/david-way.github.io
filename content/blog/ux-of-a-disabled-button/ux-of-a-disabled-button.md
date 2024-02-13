---
title: The User Experience of Disabled Buttons
description: The button that wasn't there… When should you use a disabled button?
publish: true
date: 2021-10-11
tags:
  - ux
  - design pattern
  - a11y
  - html
---

## Should you use disabled buttons?

There are two reasons why disabling a button is best avoided.

### 1. State Identification

The difference between a disabled button and a regular button is usually very subtle<sup>\*</sup>, meaning it's a weak indicator of state that may be missed by many of your users.

<i>\* Designing something to look both disabled and identifiable as a button while achieving adequate contrast is tricky.</i>

#### 1.1 What does disabling a button from a Screen Readers perspective mean?

<details>
  <summary>What is a <i>Screen Reader</i>?</summary>

A screen reader is assistive software primarily used by people with low or no vision. It converts the semantic elements on a web page (for example, text, buttons, images, and links) into audible speech or braille.

</details>

A disabled button is non-existent to a Screen Reader user, meaning they don't even get the weak indicator afforded to fully sighted users.

> According to the [World Health Organization](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment), there are an estimated 285 million people in the world who suffer from some level of visual impairment (including anyone from legally blind, to those with less than 20/20 vision).

### 2. Unnecessary Cognitive Load

When a disabled button is intended to act as a visual indicator that something on the page or form needs to be fixed/changed before your user can continue.
To those who can identify them, this usage of a disabled button tells them "something" is wrong and provides no more information on what needs to be corrected (the user may assume that something is wrong with the application and that it needs to be reloaded).

The change required to re-enable a disabled control may be appear to be a simple puzzle for your user but this is an assumption we shouldn't make for all our users.
Introducing this, potentially, minor frustration for users with or without cognitive disabilities or even familiarity with our product is best avoided in keeping with the "Don't make me think" principle.

Due to the contrast issues mentioned before, you can't rely on the contents of the buttons label to aid your user here, as they may not be able to read it.

## Is there another way?

There are more suitable patterns and approaches available that can help us avoid using disabled buttons.
For example, let's look at the typical approach of using a disabled button to prevent progress on an incomplete form.

❌ Don't

- Disable the submit button (hoping your user understands that you mean for them to fully complete the form before continuing)

✅ Do

- Mark all required fields (unless all fields are required or there are more optional fields than required)
- Let the user interact with and traverse the form and identify the enabled submit/continue button (both by its label and location)
- Let them attempt to submit the form
- Inform the user precisely what issue is preventing them from continuing. This can be an inline error message or something like the Toast alert pattern

In other words, allow and use the user's premature interaction with the control as an opportunity to inform or guide them on how to continue.
This principle can be applied to many instances where disabled buttons are commonly used.

<!-- ## When should a disabled button be used

![animation showing an asynchronous action triggered by a button temporarily disabling a button](https://raw.github.ibm.com/DWay/not-important/master/src/images/posts/ux-disabled-buttons/disable-button-pattern.gif) -->
