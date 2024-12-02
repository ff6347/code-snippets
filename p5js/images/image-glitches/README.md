# Glitches

Glitch art is a genre of digital artwork that involves manipulating digital or analog errors, known as glitches, within a variety of visual media. It is often created by intentionally corrupting digital code or physically disrupting electronic devices. The aesthetic of glitch art typically includes visual disturbances, pixelation, color banding and other 'error' effects. The philosophy behind it embraces the idea of errors and unpredictability being sources of intrinsic beauty or authenticity.

Alter the pixels, alter the file.

- See some unconventional examples [using Audacity](https://blogs.umass.edu/Techbytes/2018/03/02/how-to-use-audacity-to-edit-photos/)
- Using a dedicated [library](https://github.com/ffd8/p5.glitch)
- And what others are doing on [reddit](https://www.reddit.com/r/glitch_art/)

## !Hint:

Make sure you can reproduce your work and it stays generative

## (AI genereated) Description

This p5.js sketch manipulates the pixel data of a preloaded image of a panda and displays it on a canvas sized 128x128 pixels. The sketch performs pixel manipulation in two primary ways before rendering the modified image.

- Initially, for every pixel in the image, it randomly substitutes the red, green, blue, and alpha values with values from neighboring pixels. This operation slightly alters the color information in the image, creating a subtly distorted effect.

- In the next step, it iterates through the image pixels again. This time, for each pixel, it randomly selects a new vertical position within the image bounds but retains its horizontal position and color values. This creates a streaky, vertically scrambled effect as pixel rows are randomly repositioned.

Key Points:

- Image processing occurs in the `setup()` function, ensuring it runs once.
- The `preload()` function is used to load the image before any processing.
- Pixel manipulation involves directly accessing and modifying the `pixels` array of the image.
- The sketch does not use the `draw()` function, implying that the image processing and rendering are performed once without animation or interactivity post-rendering.
