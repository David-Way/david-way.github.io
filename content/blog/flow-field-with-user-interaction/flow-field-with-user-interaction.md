---
title: "User affected noise driven animation"
description: User affected noise driven animation
publish: true
date: 2022-02-15
tags:
  - canvas animation
  - side project
  - interaction design
  - p5.js
---

<div class="u-bleed-container:large u-mt:16">
<div class="u-border:device">
<a href="https://www.davidway.ie/flow-field/">
{% image "./images/flow-field-large.png", "Flow field animation preview" %}
</a>
</div>
<figcaption>
    <a href="https://www.davidway.ie/flow-field/">Try it out</a>.
</figcaption>
</div>

You've likely seen some generative art that uses 3-dimensional Perlin noise to generate a flow field to beautifully animate a bunch of particles. Like me, maybe you've seen the effect before but didn't know that is how it was achieved.

A flow field is just a grid of vectors that smoothly and randomly independently change direction but with local continuity.

Perlin noise is a function that produces a type of random gradient noise. It was initially created to be used in visual effects (for original movie Tron). A good random number generator produces numbers with no relationship and no discernible pattern. However, Perlin noise is helpful because it produces randomness but with a continuous relationship. Like the type of randomness you see in nature, for example, clouds, waves, and patterned textures like marble or wood burls.

It can be animated over time to give a mesmerizing whorly mess that can be used to drive a flow field and push a bunch of particles around a screen. The result is fun to watch, but it would be more engaging if the user could interact with the animation.

It took me a while to devise an approach to achieve having the vectors in the flow field be driven by both the Perlin noise and user input.

The tool I needed was lerp-ing, or linear interpolation. Usually used to animate between two positions, P5.js has a function that works with vectors.

I let the flow field vectors animate as expected. I then took a copy of the flow field grid and copied the values from the default flow field.

```js
 for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xOffset, yOffset, zOffset) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowField[index] = v;
      flowFieldEffector[index] = flowFieldEffector[index].lerp(v, flowFieldEffectorAmount);
      ...
    }
}
```

Next, I took the angle from the user's interaction on the screen and created an effect vector that would be applied to nearby vectors.

```js
var drawAngle = createVector(mouseX, mouseY).angleBetween(
	createVector(pmouseX, pmouseY),
);
var newVectorToImpart = p5.Vector.fromAngle(angle);
newVectorToImpart.setMag(10);
```

I then linearly interpolated the array of effect vectors toward the flow field vectors so that the user's effect would decrease in magnitude with every frame and align its direction with the underlying default flow field vectors.

```js
var flowFieldEffectorCenterIndex =
	Math.floor(mouseX / scl) + Math.floor(mouseY / scl) * cols;
flowFieldEffector[flowFieldEffectorCenterIndex] = newVectorToImpart;
var flowFieldEffectorCenterIndexNeighbors = getPreGeneratedNeighbors(
	flowFieldEffectorCenterIndex,
);
flowFieldEffectorCenterIndexNeighbors.forEach((neighborIndex) => {
	flowFieldEffector[neighborIndex] = newVectorToImpart;
});
```

This results in a an animation that interacts with the users input but in a smooth manner that fades away over time.
