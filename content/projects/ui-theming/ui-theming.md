---
title: Design System Theming
subTitle: Support and guidance for UI theming, which enables the Government Health and Human Services Design System color scheme to be intuitively customized to the desired branding without the risk of impacting the accessibility of the product.
description: Support and guidance for UI theming, which enables the GHHS Design System color scheme to be intuitively customized to the desired branding without the risk of impacting the accessibility of the product.
publish: false
gridShape: box
order: 1
thumbnail: ui-theming/images/preview.png
date: 2023-06-01
tags:
  - design sprint
  - ui theming
  - design system
  - css custom properties
---

## Project Summary

This was a Design lead project that was completed across two iterations, to explore how to support Design System customization for our [Technical Sales staff]() and [Services Consultant]() users.

This project was prioritized by our Product Owners due to a number of support requests relating to color contrast accessibility issues and new customer Request For Proposals that specified the need for a product that could be customized to match their existing branding and design language.

<details>
  <summary>What is the GHHS Web Design System?</summary>

This Government Health and Human Services Web Design System (GHHS WDS) provides design and front-end development resources for creating websites and digital services to the standard of government.

The system incorporates the highest usability and accessibility standards, helps ensure a consistent experience for all users and builds on the international best practice for government digital services.

**Features**

- Supports all modern browsers
- Provides a set of mobile-first responsive React components that meet [WCAG 2.1 AA](https://www.w3.org/TR/WCAG21/) accessibility standard
- Accessibility guidelines and general usage guidance for each component (when to use, when to consider something else)
- Customizable/theme-able color palette
- Supports globalized content and provides `Right-to-Left`` styles
- Includes a set of responsive templates for UX patterns and page types that occur frequently in government sites

</details>

Colors are a very important factor of the customization and the expression of a brand. The Citizen Engagement product is a white label product built with the GHHS Web Design System and so needs to adapt to each clients branding.

Matching the agencies branding helps to visually demonstrate the flexibility of the product, helps customer visualize the solutions as their own and helps their citizens recognize and trust the product. The ease and developer experience of accessible and compliant customization is equally important for both sales demos and actual customer implementations.

### The challenge (2 - 3 paragraphs)

<details>
<summary>What specific problem, user needs, business requirements, and/or pain points that the project solves. Were there any technical constraints or business KPIs you had to keep in mind? Who are your users and what are their specific needs</summary>
This section specifically looks at the problems the project is trying to address. What are the business requirements, user needs, pain points that the project solves? Who are the end-users and core target market? What platforms was the project for and were there any technical constraints or business KPIs you had to keep in mind
</details>

## Our Users

### Persona 1

<div class="u-bleed-container:x-large">

<div class="l-persona">

<div class="l-persona__container">

<div class="l-persona__meta">

![James Harris profile](./images/logo.png)

#### James Harris

_CSP Sales Tech_

James is 38 years old. He lives in New York.

##### Needs

James’s goal is to show the client the art of the possible and how the product can be customized in a short amount of time.

</div>

<div class="l-persona__content">

##### Does

James needs to create some quick sales demo where he shows possible clients how the product can adapt to their design system. He tries to do as much as possible in the least amount of time. He knows everything he does can be improved and fixed after the sales demo. Once the sales demo is done, James’s job is done and he moves on.

##### Challenges

Customizing is not a usual task for James, he actually finds CSS intimidating and as to ask for help. He likes to compare changing colors to opening Pandora’s box as he is often unsure of the real consequences of the changes he makes.

</div>

<div class="l-persona__quotes">

{% blockquote %}I don't spend very long customizing the UI because I don’t have time. I never get any specific feedback on the UI from the costumer after the sales demo.{% endblockquote %}

{% blockquote %}
I have to make judgment calls when selecting colors because I don’t have clear guidelines.
I find CSS intimidating and I often have to ask for help when customizing.
{% endblockquote %}

{% blockquote %}
I find that touching colors is like opening pandora’s box.
I show customization to create familiarity and resonate with the customer.
{% endblockquote %}

{% blockquote %}
I make sales demos that show the art of the possible.
I never think about the product again once the sales demo is done.
{% endblockquote %}

</div>

</div>

</div>

</div>

### Persona

## The problem

### As-Is

Previously, if a Services Consultants working on an implementation, or a Technical Sales Specialist working on a sales demo, needs to customize the product to match the customers existing branding or portals, there was limited guidance and limited supported options for adapting the colors of the Citizen Engagement UI.

In our Design System documentation site (Storybook), we document a limited subset of options for customization (using our `SASS` variables) - These variables were created, named and organized primarily for the benefit of the Design System development team and not designed with external use in mind. As a result effect of changing them often has un-intuitive results.

### User pain points

Due to the fact that you can pick any color and the design system will dutifully apply it, whether they is suitable or not, the current process exposes risks to the accessibility of the product based on color contrast requirement and thus breaks the design work put into the UI.

Services Consultant who are aware this is a potential issue are anxious to customize the product and have no assurance their changes won't come back to haunt them or be applied in unintuitive or unexpected ways.

### User needs

Robert the **Services Consultant** needs a way to be confident that the color changes that are made wont come back to haunt him so that he can focus on functional customizations.

James the **Sales technician** needs a low effort way demonstrate the possibilities of the product, so that he quickly respond to customer opportunities.

### Project Summary/About this Project (1-2 Paragraphs)

<details>
  <summary>Iteration 1 Activities - Design Thinking Loop (2 weeks)</summary>

Activities:

- User interviews
- As-Is journey mapping and validation
- Comparative analysis
- Ideation/Big Idea Vignettes
- To-Be scenario
- Coded prototyping
- Usability testing

</details>

Outcome:

<details>
  <summary>Iteration 2 - Design Sprint (1 week)</summary>

Over the course of a week my colleague Alizey Auvrey and I, conducted a Design Sprint that included the following activities:

- Interview guide
- UI Theming domain research
- Lightning talks
- Structured user interviews
- Affinity mapping/thematic analysis
- Storyboarding
- Persona generation and validation
- Ideation
  - How Might We's
  - Crazy 8's
- 2 rounds of Prioritization (feasibility/and impact)
- Wireframing
- Prototyping
- Coded proof of concept
- Usability testing and Analysis

</details>

### Solution (As long as needed)

<details>
<summary>What method/process was used to solve the problems? How features addressed the objectives?</summary>
This section is going to be the longest as it showcases how the project goals were achieved. Firstly, outline the design process steps and methods followed during the project outlines the layout of this section. Show your overall project steps, why you chose the methods you used, Recruiters want to see all the relevant design artifacts that you produced from sketches to visual mockups to prototypes.

Other deliverables that you can show:

- Personas
- Sketches
- Interview notes
- Usability tests results
- Whiteboards
- Wireframes
- UI designs
- Prototypes
</details>

### Iteration 1 - Design Thinking loop

#### Levels of customization

Historically, there has been a wide range of efforts placed on customizing the products UI, from almost no customization to considerable amounts.

Some of the more heavily customized implementations of Citizen Engagement (CE), would not have been achievable in a supported manner without this internal development and design knowledge. Some of the results achieved for our sales demo could have potentially been improved with better support for some commonly found branding patterns.

The goal of the UI Theming work is to lower the skill barrier required to confidently customize CE implementations. We'll know this goal is achieved when we have improved visual impact and customer familiarity that developers can achieve in a supported and maintainable way which will allow allow developers to focus more time on functional customization of the product.

For our first concept we added a new Theme panel to the Storybook documentation, visible across all component stories.
Robert could select a starting theme (on the left column), adjust each individual Design token (middle column) and see its affect on the component preview (above). [next slide]

Robert is warned if selecting a color that causes an accessibility issue. Here is an example of Robert selecting a text color that doesn't meet the required contrast ratio for the background color it is placed on.
Finally, once the issues have been resolved, Robert can copy a configuration code snippet (from the panel on the right) to paste into their CE instance to apply their changes. [next slide]

### Feedback

- 🟩 The flow helped the user achieved the goal of allowing the developer to see and have a broad impact their changes (our first problem statement), they really liked being able to see their changes applied in real time.
- 🟩 From and accessibility perspective, they appreciated the immediate warning messages and guidance
  However, after analyzing the attempt it seemed:
- 🟧 It wasn't clear at what level we should give the developer access to the make changes
  - Design token layer - Design tokens are intuitive but still take time to understand their relationships and Changing the color on a per role basis still might not have the effect the user was intending or expecting.
  - Color palette layer that lies under the design tokens, would have taken even more work
  - What ever level we exposed there were style elements achieved in previous customization concepts that would not have been achievable, for example a a customer used a branded header and a contrasting footer.
- 🟥 There is a lot of hidden complexity in how the colors relate to each other and we weren't confident we could guarantee an accessible result can be achieved with any color they might want to use, or that experience wouldn't be frustrating to the developer. We're relying on the user to chose appropriate colors and apply them in appropriate locations, potentially resulting in a cascade of side effect issues for them. The accessibility guidance was helpful but still could required extra work for the developer to understand about color theory to resolve.

With these things in mind we decide to run the design sprint.

### Iteration 2 - Design Sprint

Use Theming to customize the color in the GHHS Design System. The default, that is light, GHHS theme and dark GHHS theme are the starting points to preserve legibility, contrast, and accessibility.
Theming

The following list outlines the concepts that enable Theming of the GHHS Design System:

    Design tokens: an abstracted method of applying color and styles in a consistent, reusable, and scalable way.
    Theme Builder: a tool for configuring and generating accessible values for the design tokens.
    Theme provider: a utility component that you can use to specify a theme for all or a part of the UI in your project.

Design Tokens

Design tokens are a series of variables with strict naming conventions that bridge the gap between the naming and the use or re-use of values in a UI.

Each token represents a design decision that is abstracted and reused throughout the system, and that has a specific role and relationship with the other tokens.

The design tokens are implemented by using CSS Custom Properties, configuration of which can be managed using the GHHS Theme Builder.
Choosing custom colors

The following list outlines considerations when you are choosing appropriate colors for the GHHS Design System:

    Aesthetics: review the basic rules and guidelines of color theory or see some common color schemes below.
    Perception of meaning: consider the emotional impact and cultural significance of the colors that you select because colors can vary depending on the context, such as religion, location, and culture.
    Preserve color conventions: UI color is often used as a supporting affordance, for example, unvisited links are blue, visited links are purple, and red is commonly used for danger or errors.

Where possible, match existing branding and colors. By matching the existing, branding you can help customers to visualize the solutions as their own and help their citizens to recognize and trust the product. The preceding factors were likely considered when existing branding colors were selected.
Common color schemes
Analogous color schemes

Analogous color schemes are usually harmonious and pleasant in their appearance. For example, warm primary colors with warm secondary colors.
Monochromatic color schemes

Monochromatic color, different shades, and tints of the same color when applied to both primary and secondary can give a subtle, conservative, and professional result. For example, light green with a medium or dark green, or a blue-gray with a cool gray.
Complimentary color schemes

Complementary color combinations provide a high contrast and high impact use of color. Apply complimentary color schemes by selecting colors that are opposite each other on the color wheel. For example, a vibrant cyan and a deep orange.

Theme Builder

The Theme Builder applies selected colors to a custom theme but still maintains the relationships between the underlying design tokens. As a result, the Theme Builder maintains the accessibility of the UI.

The relationship between the underlying design tokens is consistent as the selected colors are derived to respect the luminance stops of the colors it is replacing. Keeping the relative brightness, or luminance, of the colors ensures the color contrasts between the design tokens.

GHHS Themes are used to globally modify existing components, or even sections of a page, to fit a specific visual style.
GHHS Theme Builder

Customize the GHHS Design System components styles to fit the specific aesthetic of a brand or existing product.

Theme Provider

The `<ThemeProvider />` utility component to specify either the theme for a page or for a section of a page.

Use the Theme Provider to implement inline theming where a section of a page is styled with a particular theme that differs from the base theme. You might apply a scheme when your branding needs require different patterns of color application, for example a light theme with a dark header.
SASS variables

Previously, customization of the GHHS Design System was accomplished primarily using Sass variables. This method is still supported. However, using the Theme Builder reduces potential accessibility issues.

### Results (1 paragraph)

- Immediate adoption

<details>
<summary>Project success metrics, awards, reflections, project next steps, and/or lessons learned.</summary>
The critical last section concludes the case study by outlining any project success metrics that were achieved, awards that were won. In the case of a project that is not live, reflections and the project’s next steps are sufficient to round up the case study. Try to share any lessons that you learned to demonstrate you are invested in both the project’s life cycle and your career development.
</details>
