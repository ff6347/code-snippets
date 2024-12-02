let x = 0;
let t = 0;

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
}

function draw() {
	background(255);
	t += 0.02;

	// Choose one of these ease-out equations:

	// Linear (no ease)
	x = (1 - t) * width;

	// Quadratic
	x = (1 - pow(1 - t, 2)) * width;

	// Cubic
	x = (1 - pow(1 - t, 3)) * width;

	// Quartic
	x = (1 - pow(1 - t, 4)) * width;

	// Quintic
	x = (1 - pow(1 - t, 5)) * width;

	// Sine based
	x = cos(((1 - t) * PI) / 2) * width;

	// Exponential
	x = (1 - pow(2, -10 * t)) * width;

	circle(x, height / 2, 20);

	if (x >= width) {
		t = 0;
		x = 0;
	}
}
