---
title: Input character limits
description: Input elements should be permissive as possible, then guide them toward minimal compliance were necessary
publish: true
date: 2026-09-21
tags:
  - ux
  - design pattern
  - a11y
  - html
---

**Summary**
- Form design should prioritize user agency over database efficiency. Let users express themselves freely, be permissive as possible, then guide them toward minimal compliance were necessary.
- Don't put hard character limits on input files and text areas. Establish soft boundaries to respect the users workflow.

When designing forms it can be easy to let the cold hard edges of the underlying technology poke out into the users experience. 

Forms are for collecting data and data is stored in database. Database table data types and and cell/column size limits are real constraints for designers to consider but they need not be surfaced in their rawest and unintuitive form directly to the user. 

Most development teams wouldn't think of asking a user for a date in an ISO date format or the number of passengers as an unsigned integer but there are other instances in the same category that do slip by as more acceptable or handled in less than graceful ways.

The most common clash users have with technology limits in form design is the field size limit. Column limits are not something that can often be avoided entirely however how the interaction is handled and communicated is critical to avoid confusing and frustrating users or cluttering the UI.

## What to do

How should you handle a requirement that exists for almost every field in your form but likely is rarely, if ever, encountered?

Telling the user the maximum allowable string length for every field is not the best use of screen real estate or the cognitive bandwidth of the users. 

The best approach is to avoid visibly limiting character counts to very small numbers in general unless there is good reasoning to do so.

Choose proportionate database cell sizes for your data that allows most of your users, remain unaware of the limit most of the time.

## When to do it

There are less common occasions where you want to be explicit and upfront about size of the data you're requesting.

Some valid reasons might include instances where you have repeatedly observed you users entering much more information than is required (though revising your form input design and label/hint/help content should be the first port of call), or it there is a legal reason, convention or regulatory requirements for a piece of data to remain under a certain number of characters. 

> **Some valid examples**
>
> - Valid email addresses are always less than  254 characters
> - A valid SSN number is 9 digits long
> - Any E.164-compliant international phone number cannot exceed 15 digits.
> - Certain protocols have specific sizes associated with them, for example HL7/FHIR standards have values for patient name, Universal Service Identifier etc that are all limited to below <251 characters.

## How to do it

The default approach however, should allow any length to be entered into the field.

When a large threshold is being approached or breached, now is the time to start communicating a fields limit and how the user can adapt their content to the requirements.

It's important to think about any character count as a soft limit where users *may* enter more characters than required but are informed when they've entered too many and by how much they have exceeded the limit.

This leniency allows users to over-type (some users look at the keyboard and don't realize a hard limit has been reached) or copy and paste in their full answers from elsewhere, without their content being silently truncated.

Don't forget to validate the length on submission.

The user is the free to use the text field/area to edit down their content to the required length.


<div class="u-bleed-container:medium">

<iframe height="300" style="width: 100%;" scrolling="no" title="Input character counts and limits" src="https://codepen.io/editor/David-Way/embed/01a0c59b-1c41-7fbe-9a31-fc35de15d3b3?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true">
  See the Pen <a href="https://codepen.io/editor/David-Way/pen/01a0c59b-1c41-7fbe-9a31-fc35de15d3b3">
  Input character counts and limits</a> by David Way (<a href="https://codepen.io/David-Way">@David-Way</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

</div>

## Benefits of this approach

In the above you can see:
- **Clutter is minimized** - State is communicated when necessary as the user approaches the threshold and again when above the threshold
- **User flow is supported** - Users who type looking at the keyboard, or users performing data entry by copy/pasting content from elsewhere, can make adjustments to meet the length requirement without loosing work.
- **No silent failure mode** - Breaches are not silently truncated, but instead can be soft enforced while interacting with the field or hard validated against on page submission.
