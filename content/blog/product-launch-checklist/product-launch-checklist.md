---
title: Product Launch Checklist
description: Finalizing your delivery
publish: true
date: 2022-01-16
tags:
  - web design
  - product design
  - a11y
  - html
  - design technologist
---

Your requirements are met, your users are excited, your testing is complete, and your team is racing toward the finish line of another successful delivery…

You probably didn't forget anything, but just to be sure, here's a final polish checklist to put your mind at ease before you push this thing out the door.

## Interaction design

**☑️ Automated `a11y` testing passes**

- [Axe Scan](https://www.deque.com/axe/devtools/chrome-browser-extension/) and the [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/toolkit/) can provide automated testing and best practice recommendations.

**☑️ Animation can be disabled**

- Check that `prefers-reduced-motion` preference is honoured. Animations can trigger discomfort for those with vestibular motion disorders.

**☑️ Bypass blocks**

- Can people navigate sequentially through content directly access to the primary content of the Web page. Does this page need a [skip link](https://www.w3.org/WAI/WCAG21/Techniques/?general/G1)?

**☑️ Consistent and identifiable states**

- Does the focus and hover interactions for all interactive elements match?
- Is the same language used for system state across the product?

**☑️ Navigation and navigability**

- Can every feature be be Perceived, Operated, Understood by using a keyboard or screen reader. Is the styling, features and content of your product robust? Can it be accessed on a wide variety of browsers and with a wide variety of assistive technologies?

**☑️ Pointer gestures**

- Are the correct pointers consistently displayed when you hover over and interact with elements on the page?

**☑️ Layout consistency, and responsiveness**

- Double and then half your content (simulating language translation). Is that what you expected to happen? Are you seeing unexpected wrapping or truncation?
- Change your browser zoom (`cmd`/`ctrl` and `+`/`-`) as your layout changes. Is that what you expected to happen? Are visual relationships between (established through spacing and proximity) maintained across different layouts?

**☑️ Tab order and reading order**

- What are the actions on this page? Can you access them using the keyboard only? Can you discover and interact with them using a screen reader? Is the order of content focused in a similar way that a sighted user consumes the content of the page?

**☑️ Timing and timeouts are appropriate**

- Are your session timeouts at least 2-5 minutes? Do you have an interactivity timer that allows users ample time to complete tasks without being interrupted?
- Throttle your bandwidth and reload each page. Does your design account for empty and loading states. Are loading times appropriate for the content being delivered?
- Are images only as large as they need to be? Is there a significant page re-layout or [jank](https://www.afasterweb.com/2015/08/29/what-the-jank/) caused as content and media finish loading?

## Content design

**☑️ Valid heading structure**

- Check that the semantic headings elements on the page reflect the page organization, skipping heading ranks can be confusing and should be avoided where possible.

**☑️ Alternative text**

- Non decorative images have descriptive alternative text or
- Captioning and transcripts is provided for any embedded, or linked to, video content.
- Graphs have alternative tables

**☑️ Error messaging**

- Do the messages associated with any error states you can trigger identify the problem and cause, and provide a solution (if possible)?

**☑️ Input feedback**

- Input fields provide feedback at the correct time Inline errors should validate when the user leaves the field, not during interaction.
- Form data that needs to be server side validated should summarize the errors at the top of the form and link to the fields or sections related to the errors.

**☑️ Labels, instructions, page titles, and purposeful link text**

- Do you links make sense on their own. Would someone reading the label of a link know the location that link will take them without needing to decern it from surrounding context?
- Are the page titles set correctly and consistently across the product?

## Visual design

**☑️ Color contrast**

- Change your preferred color scheme (light, dark, high contrast mode). Are your focus states, controls, icons, and images still accessible?

**☑️ Color usage**

- Use color with purpose and never as decoration. Never use color alone to convey information; ensure that colored text and graphics are understandable when viewed without color. Color-blind and low-vision users may not be able to perceive the color differences, and screen readers do not announce colors to non-sighted readers.

**☑️ Content is printable**

- Check the printed versions of each page. As backgrounds styles will be removed when printing it is important to check that information and state is not lost. This is commonly forgotten with customized checkbox and select form elements.

**☑️ Consistent visuals**

- Are your icons and pictograms all from the same suite? If not, are the tone, style and stroke sizes consistent?
- Is all content sentence case or all title case? Check to make sure you have a single approach.

**☑️ Legible typeface usage**

- Are you displaying [faux fonts](https://fonts.google.com/knowledge/glossary/faux_fake_pseudo_synthesized)/font synthesis?
- Are your fonts being applied correctly. Check with a device that doesn't have your selected fonts installed? Are suitable fallback fonts defined?
