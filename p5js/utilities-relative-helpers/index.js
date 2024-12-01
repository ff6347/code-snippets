const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);
const h = (angle) => ((angle % 360) + 360) % 360;
function setup() {
	createCanvas(250, 250);
	colorMode(HSL, 360, 100, 100, 100);
	rectMode(CENTER);
	background('black');
	push();
	translate(x(0.5), y(0.5));
	fill(0, 50, 50);
	// circle(0, 0, s(0.1));
	// to the left
	const step = 20;
	const range = 360;
	const rectWidth = x(0.5) / (range / step);
	for (let a = -step, count = 0; a > -range; a -= step, count++) {
		fill(h(a), 50, 50);
		console.log(h(a));
		rect(-rectWidth * count, 0, rectWidth, height);
	}

	for (let a = step, count = 0; a < range; a += step, count++) {
		fill(h(a), 50, 50);
		console.log(h(a));
		rect(rectWidth * count, 0, rectWidth, height);
	}

	pop();

	// ellipse(x(0.25), y(0.25), s(0.25), s(0.25));
	// ellipse(x(0.75), y(0.75), s(0.25), s(0.25));
}

function draw() {}
