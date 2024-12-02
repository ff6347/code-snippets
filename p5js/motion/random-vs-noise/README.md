# Noise vs Random

## (AI generated) Description

The sketch produces a dynamic line drawing on a canvas sized 500x100 pixels. Here is a technical breakdown of its outcome:

- The canvas background is initially set to a light gray color (value of 200).
- Two points are drawn every frame, generating a visual effect over time:
  - The first point fluctuates randomly around the middle of the canvas height, creating a noisy pattern.
  - The second point's vertical position is determined by Perlin noise, resulting in a smoother, wave-like motion also centered around the mid-height of the canvas.
- As the `x` coordinate increments with each frame, once it exceeds the canvas's width, it resets to zero, and the background is refreshed to a medium gray color (value of 128), effectively erasing previous drawings and starting the pattern anew.
- The stroke weight for points is set to 1, ensuring fine lines.
- A functionality to save the canvas as "noise.png" is integrated and activated by pressing the "s" key.
