/**
 * Why separate the acceleration from the x value?
 * One problem that might occur when we don't do that is that x can't be negative.
 */

let radius = 10;
let x = -radius;
let deccel = 10;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent('sketch');
}

function draw() {
	background(0);
	deccel *= 0.92;
	x += deccel;
	// make sure deccel never gets below 0.1
	if (Math.abs(deccel) < 0.1) {
		deccel = 0.1;
	}

	ellipse(x, 50, radius, radius);
	if (x > width + radius) {
		x = -radius;
		deccel = 10;
	}
}
