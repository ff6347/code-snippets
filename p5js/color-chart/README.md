# Color Chart

## (AI generated) Description

This sketch presents a simple yet effective exploration of color theory using p5.js. The canvas is divided into four horizontal sections, each showcasing a different representation and manipulation of color. Initially, a specific hexadecimal color, referred to as "tomato" (`#ff6347`), fills the first section, with a label for easy identification.

The subsequent section visualizes the same color but breaks it down into its RGB components, illustrating the transition from a hex color code to its equivalent RGB values. This method emphasizes the direct mapping of digital color through red, green, and blue channels.

Moving to the third section, the sketch shifts its focus to the HSB (Hue, Saturation, Brightness) color model. The "tomato" color is once again converted, this time into HSB values. This model provides a more human-friendly approach to understanding color, offering insights into how colors relate to each other in terms of hue, saturation, and brightness.

Finally, the sketch explores color harmonies by generating secondary and tertiary colors based on the original hue. By adjusting the hue value and keeping saturation and brightness constant, new harmonious colors are produced and displayed, showcasing the possibilities of creating visually appealing color schemes.

Overall, this sketch serves as a compact yet comprehensive tool for understanding and exploring color theory, demonstrating how to convert between color models, and experiment with color harmonies, all within the p5.js framework.

## Instructions

In this skech we will explore how to create colors.
We will use the colorMode() function to set the color space and
see how we can create colors in each of it.
Also we will extract colors values for reusage.

- Relevant links are:

* `colorMode` https://p5js.org/reference/#/p5/colorMode
* `color` https://p5js.org/reference/#/p5/color
* `hue` https://p5js.org/reference/#/p5/hue
* `saturation` https://p5js.org/reference/#/p5/saturation
* `brightness` https://p5js.org/reference/#/p5/brightness
* `red` https://p5js.org/reference/#/p5/red
* `green` https://p5js.org/reference/#/p5/green
* `blue` https://p5js.org/reference/#/p5/blue

## Task

Develop your own color chart that has a base color of your liking and creates a harmonic set of colors using different color schemas:

- Create a [analogous color schema][analogous]
- Create a [complementary color schema][complementary]
- Create a [triadic color schema][triadic]
- Create a [tetradic color schema][tetradic]
- Create a own color schema
- and arrange them in one sketch
- GPT says: https://cloud.typingmind.com/share/000461df-80c2-4728-8cac-cf5cc5cd26d2

## Bonus Task

- Explore `lerpColor` https://p5js.org/reference/#/p5/lerpColor

---

[analogous]: https://www.colorpsychology.org/analogous-colors/
[complementary]: https://en.wikipedia.org/wiki/Complementary_colors
[triadic]: https://en.wikipedia.org/wiki/Color_scheme#Triadic
[tetradic]: https://en.wikipedia.org/wiki/Color_scheme#Tetradic
