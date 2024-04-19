/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// relevant reference
// - https://p5js.org/reference/#/p5.Image/pixels
// - https://p5js.org/reference/#/p5.Image/loadPixels
// - https://p5js.org/reference/#/p5.Image/updatePixels
let img;
function preload() {
	// preload runs once
	img = loadImage("./assets/panda.png");
}
function setup() {
	// setup runs once
	const canvas = createCanvas(128, 128);
	canvas.parent("sketch");
	background(128);
	img.loadPixels();
	for (let i = 0; i < 4 * (width * height); i += 4) {
		img.pixels[i] = img.pixels[i + floor(random(0, 3))];
		img.pixels[i + 1] = img.pixels[i + floor(random(0, 3))];
		img.pixels[i + 2] = img.pixels[i + floor(random(0, 3))];
		img.pixels[i + 3] = img.pixels[i + floor(random(0, 3))];
	}

	for (let x = 0; x < width; x += 1) {
		for (let y = 0; y < height; y += 1) {
			const c = img.get(x, y);
			img.set(x, constrain(floor(random(height)), 0, height), c);
			//img.set(floor(random(width)), floor(random(height)), c);
		}
	}
	img.updatePixels();

	image(img, 0, 0, width, height);
}

function draw() {
	// draw runs all the time
}
