---
title: The User Experience of Toast Messages
description: The message out of view is a message out of mind
publish: true
date: 2026-07-14
tags:
  - ux
  - design pattern
  - a11y
  - html
---


A toast message or floating notification is a common way to deliver brief messages about the system's state. It neatly informs the user of the successful result of their action and provides warnings or alerts about system status issues, without altering the page layout or occupying real estate within the page flow.

## A11y concerns
Asynchronous updates and messages, like all your other content, need to be communicated in an inclusive way. When implemented correctly, these messages are announced by screen readers when rendered, but do not capture focus for screen reader users or Assistive Technology users.

However, this pattern can still pose significant accessibility issues and should be avoided for the following reasons.

### #1 Out of View for some users
Toast messages are difficult to see for [screen magnifier](https://en.wikipedia.org/wiki/Screen_magnifier) users and commonly render outside of their view.

### #2 Too fast for some 
Toast Messages auto-dismiss before some users can read and act on the content, particularly for distracted or slower-reading users.

### #3 Too slow for others
Depending on the content and value of the toast messages, they can be perceived to linger too long for some users, obscuring the content and actions below them.

### #4 Too intrusive
Toast messages can be distracting for users if overused, occupy space above important real estate, can add additional actions (to dismiss), and can get in the way of the user's next tasks.

### #5 Implementation complexity
Toast messages are challenging to implement so that they are reliably announced to screen reader users and function correctly across a variety of scenarios, such as returning from a modal, updating items on the current page, navigating between pages, or resolving asynchronous or long-running tasks. Achieving this consistency without disrupting focus management is especially difficult. For instance, if a toast with an urgent action (like “Undo”) auto-dismisses without capturing focus, many users will miss it entirely. On the other hand, forcing focus can interrupt the user’s workflow and cause distraction.

In short, the pattern often cannot be optimized for both users who need to act on the toast and those who do not. It hangs around too long for some users and some pieces of content, but not long enough for others. They may be missed entirely by a distracted user or introduce unnecessary haste, challenge, and anxiety to your user's experience.


<!-- ## What patterns should be used?

### Option 1 - Inline modal message

🟩 Pros
* Gives feedback in a location on the page that the user has just interacted with. 
* Can be implemented once for all modals


🟧 Considerations
* Content is temporarily displayed.

🟥 Cons
* Adds friction to workflows due to the time the modal stays around to inform the user of the action result
* A risk that it is implemented/configured for use on all modals, where the action result is much better shown in another way, 
  * For example, on a simple list page, there is no need to show confirmation messages. The content updated on the page in a visible way is enough.

### Option 2 - Inline page message

🟩 Pros
* Pattern has a balanced and appropriate level of emphasis and distraction.
* Content doesn’t cover any other unrelated UI, and so doesn’t need to be dismissed.
* Content is much more likely to be visible to users of screen magnifiers.


🟧 Considerations
* Gives visual feedback in a location the user has interacted with prior to their interaction in the modal/wizard interaction.
* Content is displayed temporarily, but politely announced in full if it remains concise.


🟥 Cons
* The label for an action is temporarily obstructed after the action is complete (the action could still be enabled)

### Option 3 - Inline page message, nearby
🟩 Pros
* Pattern has a balanced and appropriate level of emphasis and distraction.
* Content doesn’t cover any unrelated UI, so it doesn’t need to be dismissed.
* Content is much more likely to be visible to users of screen magnifiers.


🟧 Considerations
* Gives visual feedback in a location the user has interacted with prior to their interaction in the modal/wizard interaction.
* Content is displayed temporarily, but politely announced if it remains concise.

🟥 Cons
* The label for an action is temporarily obstructed after the action is complete (the action could still be enabled) -->


**References**
- [Primer Design System Toasts Guidance](https://primer.style/accessibility/patterns/accessible-notifications-and-messages/)
- [Can you make Toast Messages Accessible Blog post - Adam Silver](https://adamsilver.io/blog/can-you-make-toast-messages-accessible/)

