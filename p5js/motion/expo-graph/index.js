let x = 0;
let y = 0;
let s = 1;
let w = 1;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	y = height;
	// saveGif('out.gif', 3);
	background(255);
}

function draw() {
	// Exponential curve: y = height * e^(-kx)
	y = height * Math.exp(-0.05 * x);

	point(x, y);
	x += 1;

	// Reset when reaching canvas width
	if (x > width) {
		x = 0;
		background(255);
	}
}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
