---
title: Accessibility boot camp takeaways
description: Thoughts on how accessible mindset can enhance our product and team goals.
publish: true
date: 2024-11-02
tags:
  - a11y
---

I would consider myself reasonably familiar with the accessibility domain. Still, as I've had very little formal training, I decided to attend an accessibility boot camp recently. I was looking forward to better understanding the gaps in my knowledge and converting some of those unknowns into known unknowns. It was a fantastic experience, and very encouraging to see how people engaged the team was. These were my takeaways from the 16-hour event.

## Impact on User Experience: How does accessibility create a more inclusive user experience?

Accessible design is good design.

{% blockquote "Wikipedia", "https://en.wikipedia.org/wiki/Curb_cut_effect" %}
The curb cut effect is the phenomenon of disability-friendly features being used and appreciated by a larger group than the people they were designed for. For example, many hearing people use closed captioning. The phenomenon is named for curb cuts – miniature ramps comprising parts of sidewalk – which were first made for wheelchair access in particular places, but are now ubiquitous and no longer widely recognized as a disability-accessibility feature. The curb cut effect is a subset of universal design, which is the purposeful design of an environment so that it is accessible to all people regardless of ability or disability.
{% endblockquote %}

Accessibility removes or lowers barriers and improves the experience for all users with and without disabilities.

These benefits extend to those with permanent, temporary, or situational disabilities as well as those of us with future disabilities. The [WHO ICF report](https://www.who.int/health-topics/disability) estimated 1.3 billion people – about 16% of the global population – currently experience significant disability.

| Type of disability | Permanent           | Temporary                 | Situational              |
| :----------------- | :------------------ | :------------------------ | :----------------------- |
| **Physical**       | Missing limb        | Broken/injured limb       | Holding a child          |
| **Visual**         | Blind               | Cataracts/environmental   | Bright sunlight          |
| **Auditory**       | Deaf                | Ear infection/failing aid | In a crowd               |
| **Cognitive**      | Learning disability | Stressed/in an emergency  | Using a foreign language |

## Product Value: What is the long-term value of prioritizing accessibility in our work?

A product team could solely make a business case for accessibility as it protects from legal action and associated costs. However, having a reputation as having solid commitment to accessibility can help you gain better trust with your customers and users and associate an inclusive image with the product's brand.

The earlier and more frequently you address accessibility defects in the product/feature development process, the less expensive they are to resolve, leaving room for investment in other product areas (the push left principle reduces cost).

{% blockquote "Frank Lloyd Wright" %}
You can use an eraser on the drafting table or a sledgehammer on the construction site.
{% endblockquote %}

Finally, it is a moral obligation, a point of pride in our craft as designers and developers, and a selling point or competitive advantage for the product to be best-in-class AAA accessible.

## Team Collaboration: How can we integrate accessibility into everyone's responsibilities?

Treat accessibility defects as defects and prioritize them based on the impact on the excluded user (permanently disabled) and the downstream benefits to all other users (temporarily and situationally disabled).

Develop a mature accessibility program. Raise awareness across the team/set processes and standards. Have accessibility specialists/champions and a11y-focused team communication channels to share knowledge.

Attend accessibility courses and recognize employees willing to develop and contribute accessibility skills to the product and company as part of their career advancement.

Learn about the [POUR principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/):

- Perceivable
- Operable
- Understandable
- Robust

Teach everyone (Business, Design, Development, and QA) how to [use a screen reader to a basic level](/blog/how-to-get-started-with-voice-over), and hold sessions where the team tries to achieve tasks in the product using screen readers/or keyboards only and discuss findings and investigate issues.

Be proactive about accessibility issues by adding automated accessibility testing and linters into the Integration/Delivery pipeline.

Add (or link out to) a Web Accessibility Checklist to your Pull Request template, for example:

```md
- [ ] I added new or updated the UI
  - [ ] The designer has identified and provided embedded screen reader content, for example, icon labels, image provided with alternative text or declared as decorative
  - [ ] Link text labels clearly what the purpose and location of the link
  - [ ] The new UI elements or features are keyboard accessible
  - [ ] The levels of headings show in the correct hierarchical order?
  - [ ] All the controls are close to what they're controlling. For example, Edit and Delete buttons next to the
        things they change.
  - [ ] All content translatable
  - [ ] I manually ran the Axe Dev tool/IBMA tool and ensured there were no new violations
- [ ] I added a new page
  - [ ] Is the page title updated and announced correctly
- [ ] I added images or Icons
  - [ ] Does information get across in ways other than color alone?
  - [ ] Is the image provided with alternative text or declared as decorative
```
