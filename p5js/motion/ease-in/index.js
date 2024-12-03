let x = 0;
let t = 0;

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
}

function draw() {
	background(255);

	// Ease in using quadratic equation (t^2)
	t += 0.01;

	// Linear (no ease)
	//x = t * width;

	// Quadratic
	// x = t * t * width; // same as below
	// x = pow(t, 2) * width;

	// Cubic
	// x = t * t * t * width; // same as below
	// x = pow(t, 3) * width;

	// Quartic
	// x = pow(t, 4) * width;

	// Quintic
	x = pow(t, 5) * width;

	// Sine based
	// x = (1 - cos(t * PI / 2)) * width;

	// Exponential
	// x = pow(2, 10 * (t - 1)) * width;
	circle(x, height / 2, 20);

	// Reset animation when circle reaches the end
	if (x >= width) {
		t = 0;
		x = 0;
	}
}
