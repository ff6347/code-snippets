let x = 0;
let t = 0;

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent('sketch');
}

function draw() {
	background(255);

	// Ease in-out using cosine
	t += 0.07;
	x = map(cos(t), 1, -1, 0, width);

	circle(x, height / 2, 20);

	// Reset animation when complete
	if (t > PI) {
		t = 0;
	}
}
