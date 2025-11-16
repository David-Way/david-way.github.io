---
title: Product Launch Checklist
description: Finalizing your delivery
publish: true
date: 2022-01-16
tags:
  - web design
  - product design
  - a11y
  - checklist
  - html
  - design technologist
---

Your requirements are met, your users are excited, your testing is complete, and your team is racing toward the finish line of another successful delivery…

You probably didn't forget anything, anything that's easy to overlook. Just to be sure though, here's a final polish checklist to put your mind at ease before you push this thing out the door.

## Interaction design

{% checkbox
  "Automated `a11y` testing passes",
  "[Axe Scan](https://www.deque.com/axe/devtools/chrome-browser-extension/) and the [IBM Equal Access Accessibility Checker](https://www.ibm.com/able/toolkit/) can provide automated testing and best practice recommendations.",
  false
%}

{% checkbox
  "Animation can be disabled",
  "Check that `prefers-reduced-motion` preference is honoured. Animations can trigger discomfort for those with vestibular motion disorders.",
  false
%}

{% checkbox
  "Bypass blocks are available",
  "Can people navigate sequentially through content directly access to the primary content of the Web page. Does this page need a [skip link](https://www.w3.org/WAI/WCAG21/Techniques/?general/G1)?",
  false
%}

{% checkbox
  "Consistent and identifiable application states",
  "Does the focus and hover interactions for all interactive elements match?<br/><br/>Is the same language used for system state across the product?",
  false
%}

{% checkbox
  "Navigation and navigability",
  "Can every feature be be Perceived, Operated, Understood by using a keyboard or screen reader. Is the styling, features and content of your product robust? Can it be accessed on a wide variety of browsers and with a wide variety of assistive technologies?",
  false
%}

{% checkbox
  "Pointer gestures are consistent",
  "Are the correct pointers consistently displayed when you hover over and interact with elements on the page?",
  false
%}

{% checkbox
  "Layout consistency, and responsiveness",
  "
  Double and then half your content (simulating language translation). Is that what you expected to happen? Are you seeing unexpected wrapping or truncation? <br/><br/> Change your browser zoom (`cmd`/`ctrl` and `+`/`-`) as your layout changes. Is that what you expected to happen? Are visual relationships between (established through spacing and proximity) maintained across different layouts?",
  false
%}

{% checkbox
  "Tab order and reading order matches",
  "What are the actions on this page? Can you access them using the keyboard only? Can you discover and interact with them using a screen reader? Is the order of content focused in a similar way that a sighted user consumes the content of the page?",
  false
%}

{% checkbox
  "Timing and timeouts are appropriate",
  "Are your session timeouts at least 2-5 minutes? Do you have an interactivity timer that allows users ample time to complete tasks without being interrupted? <br/><br/>Throttle your bandwidth and reload each page. Does your design account for empty and loading states. Are loading times appropriate for the content being delivered? <br/><br/>Are images only as large as they need to be? Is there a significant page re-layout or [jank](https://www.afasterweb.com/2015/08/29/what-the-jank/) caused as content and media finish loading?",
  false
%}

## Content design

{% checkbox
  "Heading structure is valid",
  "Check that the semantic heading elements on the page reflect the page organization, skipping heading ranks can be confusing and should be avoided where possible.",
  false
%}

{% checkbox
  "Alternative text is available",
  "Non decorative images have descriptive alternative text or captioning and transcripts is provided for any embedded, or linked to, video content. Graphs have alternative tables",
  false
%}

{% checkbox
  "Error messaging is helpful",
  "Do the messages associated with any error states you can trigger identify the problem and cause, and provide a solution (if possible)?",
  false
%}

{% checkbox
  "Input feedback in place",
  "Input fields provide feedback at the correct time. Inline errors should validate when the user leaves the field, not during interaction.<br/><br/>Form data that needs to be server side validated should summarize the errors at the top of the form and link to the fields or sections related to the errors.<br/><br/>The correct virtual keyboard type is displayed for each input field (type and input node - text, tel, url, email, numeric, decimal, and search).",
  false
%}

{% checkbox
  "Labels, instructions, page titles, and links have purposeful text",
  "Do your links make sense on their own. Would someone reading the label of a link know the location that link will take them without needing to decern it from surrounding context?<br/><br/>Are the page titles set correctly and consistently across the product?",
  false
%}

## Visual design

{% checkbox
  "Color contrast passes AA minimum",
  "Change your preferred color scheme (light, dark, high contrast mode). Are your focus states, controls, icons, and images still accessible?",
  false
%}

{% checkbox
  "Color usage is purposeful but not overloaded",
  "Use color with purpose and never as decoration. Never use color alone to convey information; ensure that colored text and graphics are understandable when viewed without color. Color-blind and low-vision users may not be able to perceive the color differences, and screen readers do not announce colors to non-sighted readers.",
  false
%}

{% checkbox
  "Content is printable",
  "Check the printed versions of each page. As backgrounds styles will be removed when printing it is important to check that information and state is not lost. This is commonly forgotten with customized checkbox and select form elements.",
  false
%}

{% checkbox
  "Graphics are consistent",
  "Are your icons and pictograms all from the same suite? If not, are the tone, style and stroke sizes consistent?<br/><br/>Is all content sentence case or all title case? Check to make sure you have a single approach.",
  false
%}

{% checkbox
  "Legible typeface usage",
  "Are you displaying [faux fonts](https://fonts.google.com/knowledge/glossary/faux_fake_pseudo_synthesized)/font synthesis?<br/><br/>Are your fonts being applied correctly. Check with a device that doesn't have your selected fonts installed? Are suitable fallback fonts defined?",
  false
%}

🚢🚀🍻 Happy launching!
