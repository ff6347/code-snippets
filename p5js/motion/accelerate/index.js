/**
 * Why separate the acceleration from the x value?
 * One problem that might occur when we don't do that is that x can't be negative.
 */

let radius = 10;
let x = -radius;
let accel = 1;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
}

function draw() {
	background(0);
	accel *= 1.05;
	x += accel;
	ellipse(x, 50, radius, radius);
	if (x > width + radius) {
		x = -radius;
		accel = 1;
	}
}
