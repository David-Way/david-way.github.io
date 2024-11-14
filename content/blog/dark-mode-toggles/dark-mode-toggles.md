---
title: The theme toggle, an empty vanity
description: The best tool might be no tool at all.
publish: true
date: 2023-03-10
tags:
  - ui theming
  - I may be wrong but
---

**<abbr>TLDR</abbr>:** This site has a <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> theme, but it doesn't have a dark/light mode toggle or a theme selector because your browser/device already has one.

The primary goal for this site was to force myself to write more. I always enjoy having written, but I rarely enjoy the act of writing itself.

One of the more enjoyable aspects of having this site is having a place to tinker with things and explore ideas. Sometimes that enjoyment becomes a "productive" distraction from that primary goal.

A <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> theme one of the first things I implemented for this site.

But before adding a feature for a features sake I asked myself the following two questions:

- Should you provide a <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> mode?
- Should I add a theme toggle control?

<div class="u-bleed-container:x-small u-mv:16">

<div class="u-border:device">

<div class="u-display:none-when-color-scheme:dark">
{% image "./images/dark-theme.png", "The not-important site in dark mode" %}
</div>

<div class="u-display:none-when-color-scheme:light">
{% image "./images/light-theme.png", "The not-important site in light mode" %}
</div>

</div>

<figcaption>
This very site, <span class="u-display:none-when-color-scheme:dark">brooding in dark mode</span><span class="u-display:none-when-color-scheme:light">beaming away in light mode</span>.
</figcaption>

</div>

## Question 1: Should you provide a <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> mode?

<div class="u-display:none-when-color-scheme:dark">

A dark color scheme can reduce eye strain, especially in low-light environments, can extend battery life (for certain OLED display types), and some users find dark mode visually appealing and modern.

</div>

<div class="u-display:none-when-color-scheme:light u-bleed-container:default">

Light mode has been the standard for a long time, and many users are accustomed to it, so it has become an expected feature.

Light mode is generally more readable in well-lit environments. A [Human Factors study suggests light mode enhances the legibility of text](https://journals.sagepub.com/doi/abs/10.1177/0018720813515509), and as a result, the reading comprehension and proofreading performance of the reader. Light backgrounds can also be more conducive to displaying accurate colors in some scenarios.

</div>

Neither dark or light mode is objectively superior; each has its merits and pitfalls that depend on individual preferences and other factors out of your control. The most responsible course of action is obviously to offer both a light and dark mode and let the user decide.

Once it was finished implementing the <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> mode, I was slightly embarrassed to say that I was excited to work on a cool toggle switch.

## Question 2: Should I add a theme toggle control?

My initial intuition was that this would be an easy yes. these were honestly the best reasons I could devise:

- **Appeal of Novelty**: Because it will be fun (think of all the time we can spend tweaking the easing curve on an elaborate sun into moon animation) 🤓

- **Optimism bias**: Because it's easy. Once you have the theme designed and implemented in CSS Custom properties, the code to implement switching between modes using a toggle is trivial

- **Bandwagon effect**: Because everyone has one (someone even built a beautiful site dedicated to [cataloging common theme toggle types](https://toggles.dev/))

- **Vanity**: Because I put all this effort into supporting a <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> mode, not every site has one, so why not make it discoverable and easily accessible?

Less than convincing. Perhaps I should have asked a more open question. A question like "How should the user select a theme?".

This is a better question to ask as it opens up the possibilities to a reality that was quick to come to mind.

Users already have a global and robust way to define their preferred theme and browsers do a [good job](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#browser_compatibility) of honoring the application of these preferences.

<figure class="u-bleed-container:small">
{% image "./images/firefox-mode-selector.png", "The Android theme controls also allow for scheduling for when a particular theme should be applied" %}
<figcaption>The Firefox mode selector allows you to explicitly set your preference for the browser or to defer to a preference you've set more broadly at the Operating System level</figcaption>
</figure>

{% insettext %}
However it's important that the default value should be set to use the system preference and that the users shouldn't see a [Flash of inAccurate coloR Theme](https://css-tricks.com/flash-of-inaccurate-color-theme-fart/) which is very likely as the code to store and and respond to previous preference is going to be running after a page’s first render.
{% endinsettext %}

These controls work system-wide/device-wide, often at the Operating System level (where the user can set it once) and at a per-application level where users can automatically adjust their preferred theme based on conditions like the time of day or ambient light conditions.

<figure class="u-bleed-container:x-small">
{% image "./images/android-14-theme-scheduler.png", "The Android theme controls also allow for scheduling for when a particular theme should be applied" %}
<figcaption>The Android theme controls also allow for scheduling for when a particular theme should be applied</figcaption>
</figure>

From a theming perspective, there is nothing unique enough about this site that I should have any reason to think it would be an exception to how a visitor would normally prefer to consume their content.

Adding a theme toggle to the page adds design redundancy at the cost of complicating a simple feature. It's also an extra tab stop for keyboard/screen reader users and an additional eye fixation. It's also extra code to maintain.

{% blockquote "Antoine de Saint-Exupery. (2022). Wit & Wisdom. The Week, (1413), 21." %}
…[Perfection is achieved] not when there is nothing left to add, but when there is nothing left to take away.
{% endblockquote %}

Maybe, the user will never discover and beam in wonder at the exceptional <span class="u-display:none-when-color-scheme:dark">dark</span><span class="u-display:none-when-color-scheme:light">light</span> theme I toiled away on (a noble sacrifice on my part).

But maybe, the best theme toggle is the one the user already has.
