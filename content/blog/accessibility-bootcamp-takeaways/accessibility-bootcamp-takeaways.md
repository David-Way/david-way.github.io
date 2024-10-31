I would consider myself reasonably familiar with the accessibility domain. Still, as I've had very little formal training, I decided to attend an accessibility boot camp recently. I was looking forward to better understanding the gaps in my knowledge and converting some of those unknowns into known unknowns. It was a fantastic experience, and very encouraging to see how people engaged the team was. These were my takeaways from the 16-hour event.

## Impact on User Experience: How does accessibility create a more inclusive user experience?

Accessible design is good design. Accessibility removes or lowers barriers and improves the experience for all users (not just those with permanent, temporary, or situational disabilities).

## Product Value: What is the long-term value of prioritizing accessibility in our work?

A product team could solely make a business case for accessibility as it protects from legal action and associated costs. However, having a reputation as having solid commitment to accessibility can help you gain better trust with your customers and users and associate an inclusive image with the product's brand.

The earlier and more frequently you address accessibility defects in the product/feature development process, the less expensive they are to resolve, leaving room for investment in other product areas.

Finally, it is a moral obligation, a point of pride in our work as developers, and a selling point or competitive advantage for the product to be best-in-class AAA accessible.

## Team Collaboration: How can we integrate accessibility into everyone's responsibilities?

Treat accessibility defects as defects and prioritize them based on the impact on the excluded user and the downstream benefits to all other users.

Raise awareness across the team/set processes and standards. Have accessibility specialists/champions and a11y-focused team communication channels to share knowledge. Attend [accessibility courses](https://dequeuniversity.com/curriculum/instructor-led/bootcamp) and recognize employees willing to develop and contribute accessibility skills to the product and company as part of their career advancement.

Teach everyone (Business, Design, Development, and QA) how to use a screen reader to a basic level, and hold sessions where the team tries to achieve tasks in the product using screen readers/or keyboards only and discuss findings and investigate issues.

Be proactive about accessibility issues by adding automated accessibility testing in the Integration/Delivery pipeline. Develop a mature accessibility program.

Add (or link out to) a Web Accessibility Checklist to your Pull Request template, for example.

- [ ] I added new or updated the UI
	- [ ] The new UI elements Keyboard accessible
	- [ ] Is all content translatable?
	- [ ] Are the levels of headings picked so that they show in the correct hierarchical order?
	- [ ] Are all the controls close to what they're controlling? For instance, are the Edit and Delete buttons next to the things they change?
	- [ ] I manually ran the Axe Dev tool and ensured there were no new violations
- [ ] I added a new page
	- [ ] Is the page title updated and announced correctly
- [ ] I added images or Icons
	- [ ] Does information get across in ways other than color alone?
	- [ ] Is the image provided with alternative text or declared as decorative

