/// <reference path="../../node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="../../node_modules/@types/p5/global.d.ts" />
/// <reference path="../../node_modules/@types/p5/literals.d.ts" />
/// <reference path="../../node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.

let x = 0;
let y = 0;
let yoff = 0.0;
function setup() {
	// setup runs once
	const canvas = createCanvas(500, 100);
	canvas.parent("sketch");
	background(200);
	y = height / 2;
	strokeWeight(1);
}

function draw() {
	// draw runs all the time

	point(x, random(50) + height / 2);
	point(x, y);
	x++;
	yoff = yoff + 0.01;
	y = noise(yoff) * 50 + height / 2;
	if (x === width) {
		x = 0;
		background(128);
	}
}

function keyPressed() {
	if (key === "s") save("noise.png");
}
