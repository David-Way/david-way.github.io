---
title: Accessibility boot camp takeaways
description: Thoughts on how accessible mindset can enhance our product and team goals.
publish: true
date: 2024-11-02
tags:
  - a11y
  - design strategy
---

I would consider myself reasonably familiar with the accessibility domain. Still, as I've had very little formal training, I decided to attend an accessibility boot camp recently. I was looking forward to better understanding the gaps in my knowledge and converting some of those unknowns into known unknowns. It was a fantastic experience, and very encouraging to see how people engaged the team was. These were my takeaways from the 16-hour event.

## Impact on User Experience: How does accessibility create a more inclusive user experience?

Accessible design is good design. It removes or lowers barriers and improves the experience for all users with and without disabilities.

{% blockquote "Wikipedia", "https://en.wikipedia.org/wiki/Curb_cut_effect" %}
The curb cut effect is the phenomenon of disability-friendly features being used and appreciated by a larger group than the people they were designed for. For example, many hearing people use closed captioning. The phenomenon is named for curb cuts – miniature ramps comprising parts of sidewalk – which were first made for wheelchair access in particular places, but are now ubiquitous and no longer widely recognized as a disability-accessibility feature. The curb cut effect is a subset of universal design, which is the purposeful design of an environment so that it is accessible to all people regardless of ability or disability.
{% endblockquote %}

These benefits extend to those with permanent, temporary, or situational disabilities as well as those of us with future disabilities. The [WHO ICF report](https://www.who.int/health-topics/disability) estimated 1.3 billion people – about 16% of the global population – currently experience significant disability.

<div class="u-bleed-container:small u-responsive-table-container">

| Type of disability | Permanent           | Temporary                            | Situational              |
| :----------------- | :------------------ | :----------------------------------- | :----------------------- |
| **Physical**       | Missing limb        | Broken/injured limb                  | Holding a child          |
| **Visual**         | Blind               | Cataracts/environmental              | Bright sunlight          |
| **Auditory**       | Deaf                | Ear infection/failing disability aid | In a crowd               |
| **Cognitive**      | Learning disability | Stressed/in an emergency             | Using a foreign language |

</div>

## Product Value: What is the long-term value of prioritizing accessibility in our work?

A product team could solely make a business case for accessibility as it protects from legal action and associated costs. However, having a reputation as having solid commitment to accessibility can help you gain better trust with your customers and users and associate an inclusive image with the product's brand.

The earlier and more frequently you address accessibility defects in the product/feature development process, the less expensive they are to resolve, leaving room for investment in other product areas (the push left principle reduces cost).

{% blockquote "Frank Lloyd Wright" %}
You can use an eraser on the drafting table or a sledgehammer on the construction site.
{% endblockquote %}

Finally, it is a moral obligation, a point of pride in our craft as designers and developers, and a selling point or competitive advantage for the product to be best-in-class AAA accessible.

## Team Collaboration: How can we integrate accessibility into everyone's responsibilities?

Treat accessibility defects as defects and prioritize them based on the impact on the excluded user (permanently disabled) and the downstream benefits to all other users (temporarily and situationally disabled).

Attend accessibility courses and recognize employees willing to develop and contribute accessibility skills to the product and company as part of their career advancement.

Adhoc accessibility audits (or tune-ups) are a good way to get started but it's far better to catch issues before they happen. Be proactive about accessibility issues by adding automated accessibility testing and linters into the Integration/Delivery pipeline and by developing a mature accessibility program. Raise awareness across the team/set processes and standards.

Establish accessibility specialists/champions and a11y-focused team communication channels to share knowledge.

Learn about the [POUR principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/):

- Perceivable
- Operable
- Understandable
- Robust

Teach everyone (Business, Design, Development, and QA) how to [use a screen reader to a basic level](/blog/how-to-get-started-with-voice-over), and hold sessions where the team tries to achieve tasks in the product using screen readers/or keyboards only and discuss findings and investigate issues.

Add (or link out to) a Web Accessibility Checklist to your Pull Request template, for example:

```md
## Definition of done for Design

- [ ] Design has been user tested (include keyboard and screen reader during design review or during prototyping)
- [ ] Design is responsive to all screen zoom levels and viewport widths and supports dynamic content
- [ ] Design is achievable using Design System assets/patterns
- [ ] Empty states and content of varied lengths have been considered
- [ ] Images are marked as decorative, or alt text is provided
- [ ] Colors used meet contrast requirements and are available in the Design System color palette.
- [ ] All information is communicated in ways other than color alone
- [ ] Writing has been reviewed and confirmed to be at the appropriate reading level
- [ ] Design establishes a logical reading and focus order for the information
- [ ] Heading levels show in the correct hierarchical order without skipping
- [ ] Link labels clearly describe what the link is for or where it leads
- [ ] Hidden content has been identified and provided (alternative text for unique regions, clickable elements such as links, icon buttons, or non-decorative images)
- [ ] All controls are close to the things they're controlling
- [ ] I am proud of the level of user experience achieved by the Design
```
