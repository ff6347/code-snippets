/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

// Hexadecimal colors are strings in p5
const hexColor = "#ff6347"; // <- This is "tomato" in hex

/**
 * Draws a label on the canvas at the specified coordinates with the given text.
 *
 * @param {string} txt - The text to be displayed.
 * @param {number} x - The x-coordinate of the label.
 * @param {number} y - The y-coordinate of the label.
 */
function label(txt, x, y) {
	colorMode(RGB, 255, 255, 255);
	fill(0);
	textSize(12);
	text(txt, x, y);
}

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	textFont("monospace");
	noStroke();
	fill(hexColor);
	const rectHeight = height / 4;
	rect(0, 0, width, rectHeight);
	label("hex", 10, 20);

	// RGB colors
	// colorMode() is already implizit RGB
	// https://commons.wikimedia.org/wiki/File:RGB_Cube_Show_lowgamma_cutout_b.png#/media/File:RGB_Cube_Show_lowgamma_cutout_b.png
	// lets make it explzit
	colorMode(RGB, 255, 255, 255, 255);
	// lets extract the values of the hex color in RGB
	const r = red(hexColor);
	const g = green(hexColor);
	const b = blue(hexColor);
	console.log("RGB", r, g, b);
	fill(r, g, b);
	rect(0, rectHeight, width, rectHeight);
	label("rgb", 10, rectHeight + 20);

	// but to make colors more vital we need a different
	// color schema. One that is easier to grasp for humans.
	// HSL/HSB enters the stage
	// https://commons.wikimedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png#/media/File:HSL_color_solid_cylinder_saturation_gray.png
	colorMode(HSB, 360, 100, 100, 100);
	// lets extract the values of the hex color in HSB
	const h = hue(hexColor);
	const s = saturation(hexColor);
	const br = brightness(hexColor);

	console.log("HSB", h, s, br);
	fill(h, s, br);
	rect(0, rectHeight * 2, width, rectHeight);
	label("hsb", 10, rectHeight * 2 + 20);
	colorMode(HSB, 360, 100, 100, 100);

	// now lets do some harmonic colors by offsetung the hue/angle
	const secondaryColor = color((h + 200) % 360, s, br);
	fill(secondaryColor);
	console.log("secondaryColor", secondaryColor);

	rect(0, rectHeight * 3, width / 2, rectHeight);
	const tertiaryColor = color((h + 200 * 200) % 360, s, br);
	fill(tertiaryColor);
	console.log("tertiaryColor", tertiaryColor);
	rect(width / 2, rectHeight * 3, width / 2, rectHeight);
}

function draw() {
	/*not used for now*/
}

function keyPressed() {
	if (key === "S" || key === "s") {
		save("color-chart.png");
	}
	// make it possible to save the sketch as an image
}
