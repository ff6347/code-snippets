/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);

	for (let x = 0; x < width; x += 5) {
		for (let y = 0; y < height; y += 5) {
			strokeWeight(random(5));
			point(x, y);
		}
	}
}

function draw() {
	// draw runs all the time
}

function keyPressed() {
	if (key === "s") save("multiples.png");
}
