# 10 Print Goto 10

![](./10-print.png)

## (AI generated) Description

This p5.js sketch dynamically generates a grid of diagonal lines within a 500x500 canvas. Each cell in the grid measures 5x5 pixels, and every refresh cycle randomly chooses to draw one of two diagonal lines within a cell, either from the top left to the bottom right or from the top right to the bottom left.

- Begins with an empty, white background.
- Iteratively fills the canvas row by row, column by column, with small diagonal lines.
- The direction of the diagonal lines (`\` or `/`) is determined randomly for each cell.
- Continues this pattern until the entire canvas is filled, at which point the drawing stops automatically.
