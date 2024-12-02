# Interact

## (AI genereated) Description

This p5.js sketch creates an interactive visual and logging environment with the following features:

- Displays a static canvas of size 100x100 pixels with a background color of medium gray (128).
- A rectangle is drawn within this canvas, leaving a margin (gutter) of 25 pixels from each edge of the canvas. This results in the rectangle being smaller than the canvas.
- The rectangle's fill color changes to red when the mouse cursor is inside its bounds; otherwise, it remains black.
- Mouse and keyboard interactions are logged in the console:
  - Clicks inside the rectangle log "clicked the rect".
  - Pressing any key logs "key is [key] in keyPressed".
  - Typing a character logs "key is [key] in keyTyped", and if the character is 's', the canvas is saved as a PNG file with a filename based on the current timestamp.
  - Releasing any key logs "key is [key] in keyReleased".

## Instructions

Take a look at https://p5js.org/reference/#group-Events

## Task

- Create an interface for one of your sketches for
  - starting and stopping
  - saving images
  - logging information on and off screen

## Bonus Task

What about adding interface elements to the [DOM][dom]

[dom]: https://p5js.org/reference/#group-DOM
