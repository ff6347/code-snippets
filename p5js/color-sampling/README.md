# Color Sampling

This p5.js sketch loads an image, divides it into a predefined number of sectors, and computes the average color of the pixels within each sector. The program then visualizes these sectors as ellipses, each filled with its sector's average color, effectively creating a posterized and abstracted version of the original image.

Main components include:

- **Image Loading**: Using `preload()` to ensure the image is loaded before it's processed.
- **Sector Analysis**: The image is sliced into sectors based on a specified number of divisions. For each sector, the sketch calculates the average RGB color value.
- **Rendering**: The sketch then draws an ellipse for each sector with its calculated average color.
- **Custom Functions**: Includes a method to convert RGB colors to greyscale, although this particular feature is primarily for demonstration and isn't directly applied in the visualization.

The code exhibits how to work with image pixel data, perform basic color manipulation, and visually represent this data.
