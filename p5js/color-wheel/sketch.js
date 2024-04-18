/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.


let angle = 0;//hue
let sat = 50;//saturation offset from the center
const brightn = 50;

function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	colorMode(HSB, 360, 100, 100, 100);
	angleMode(DEGREES);
	background(30, 0, 0);

}

function draw() {

	if (angle < 360) {
		angle++;
		if (angle === 360) {
			angle = 0;
			if (sat <= 100) {
				sat += 5;
			}
		}
	}

	push();
	noStroke();
	translate(width / 2, height / 2);
	fill(angle, sat, brightn);
	const x = sin(angle) * sat;
	const y = cos(angle) * sat;
	ellipse(x, y, 5);
	pop();
}