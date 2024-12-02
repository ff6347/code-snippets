# Global and Local Scope

## (AI generated) Description

The p5.js sketch creates an animation within a 200x100 px canvas. Here is a concise technical description of the outcome:

- The canvas background is set to a medium gray color with an RGB value of 128.
- A thick point, with a stroke weight of 20 pixels, moves vertically down the canvas.
- This point starts at the top middle (X-coordinate is half the width of the canvas) of the canvas and moves downward one pixel at a time.
- Once the point reaches the bottom of the canvas, it resets to the top, creating a looping animation.
- The position of the moving point is logged to the console every frame, showing its vertical position as it increments until it resets.

Bullet points summary:

- Medium gray canvas background (`RGB(128, 128, 128)`).
- Canvas size is 200x100 pixels.
- Animated thick point (`strokeWeight(20)`) moves vertically.
- Point resets to top after reaching the bottom, creating a loop.
- Point's vertical position is logged to the console continuously.

In the `sketch.js` code, variables are used across global and local scopes to manipulate the sketch's behavior and appearance:

### Global Scope:

- Variables `y` and `myCanvasWidth` are declared outside functions, making them accessible throughout the sketch. They control the vertical position of a moving point and the canvas width, respectively.

### Local Scope:

- Inside `setup()`, a local variable `canvas` creates and positions the canvas. It's only accessible within `setup()`.
- The `draw()` function does not declare local scope variables but uses `y` from the global scope to animate the point and reset its position.

### Interactions:

- `y`'s value is modified in `draw()`, demonstrating how global variables can be updated in a localized context (within `draw()`), affecting the entire sketch's state.
- Global and local scopes segregate functionality, ensuring variables like `myCanvasWidth` can be globally referenced and controlled, whereas temporary or function-specific operations utilize local scope to avoid conflicts and maintain code organization.
