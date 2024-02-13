---
title: "A time management tool for groups"
description: A side project I actually use.
publish: true
date: 2021-02-15
tags:
  - prototype
  - side project
  - interaction design
  - design sprint
  - time management
---

I'm not the most naturally gifted time manager in the world. Time management software and practices are an indispensable pillar of my day-to-day life. Time-blocking, Pomodoro timers, shared calendars, scheduled notifications, I've tried and relied on them all.

{% insettext %}
Some of my recent favorite tools include [TickTick](https://ticktick.com/?language=en_US), the `/remind me` command in [Slack](https://slack.com/intl/en-ie/help/articles/208423427-Set-a-reminder), and any messaging app with scheduled send functionality!
{% endinsettext %}

One area where time management can be extra challenging is when you're also managing other people's time, a familiar experience when running workshops.

In the book [Design Sprints](http://www.gv.com/sprint/), the author Jake Knapp recommends using a [time timer](https://www.timetimer.com/) (originally designed to help a child understand the abstract passage of time vivid and concrete way), as it is particularly effective at keeping participants on track and on time resulting in more efficient meetings.

The value of the concept of a time timer was clear to me. Still, with the limitation of it being a physical object, I would have to remember to carry it with me, and it would be less useful in virtual workshops. I was looking for a personal project and had a free evening, so I decided to prototype a digital solution.

## Requirements

The requirements I prioritized with my implementation were:

- **Tactile** - The interaction should be discoverable, intuitive, and delightful. It should feel like you're using the physical equivalent.
- **Flexibility** - I wanted to be able to make quick adjustments to the timer on the fly. There are always those moments when we could all do with an extra 30 seconds. The time to adjust the clock can't be longer than the extra time needed.
- **Light weight** - Performance and accessibility are essential for any tool. In the middle of a workshop, you need to be able to get up and running quickly.
  - I decided to make this a Progressive Web App (PWA) so it can be installed locally, run offline, and have its own app icon on the device's home screen/taskbar for quick access.
  - To save on bundle size and avoid requesting and serving an audio file, the web AudioContext API would be used to generate the audio or the alarm noise.
  - I used [Light house](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) and [Google Page speed](https://pagespeed.web.dev/) tools to audit the performance and help with applying PWA best practices.

<figure class="u-bleed-container:medium">
{% image "./images/page-speed-score.png", "Page Speed score indicators, 98 Performance, 95 Accessibility, 100 Best Practices, 100 SEO 💪..." %}
<figcaption>
This was the first project I used a tool like <a href="https://pagespeed.web.dev/analysis/https-david-way-github-io-time-timer/xx8pnanrcb?form_factor=mobile">Page Speed</a>.
</figcaption>
</figure>

## User Testing

After deploying the first version I asked a few colleagues to test it. The feedback was positive but most felt that the direction you scroll the time dial could have been more intuitive. Users felt it should be a counterclockwise motion to add time and wind down clockwise. This was an easy fix and matched the design and intent of the original time timer.

Additionally, users felt the relative change in size of the remaining time area was too small to notice when setting longer times and were unsure if the timer was running. To resolve this, I added a ripple animation to the border of the dial to indicate movement when the clock is "ticking" and a toggle switch to display the underlying countdown. Displaying the countdown by default would have been distracting, but having the option to show it helped reassure users the timer was running.

## Conclusion

This was a short but rewarding side project that was a great opportunity the explore some new development tools and techniques.

<div class="u-bleed-container:x-small">
<div class="u-border:device">
{% image "./images/time-timer.gif", "Product preview animation" %}
</div>
<figcaption>
    A year later and this is still a tool I frequently reach for, so feel free to try out the <a href="https://david-way.github.io/time-timer/">time timer web app</a> if it might be helpful to you too.
</figcaption>
</div>
