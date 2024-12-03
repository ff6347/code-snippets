/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

function setup() {
	// setup runs once
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");
	background(255);

	const step = 5;
	for (let x = step / 2; x < width; x = x + step) {
		for (let y = step / 2; y < height; y += step) {
			push();
			strokeWeight(2);
			translate(x, y);
			if (random() > 0.5) {
				line(-step / 2, -step / 2, step / 2, step / 2);
			} else {
				line(-step / 2, step / 2, step / 2, -step / 2);
			}
			pop();
		}
	}
}

function draw() {
	// draw runs all the time
}
