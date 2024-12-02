const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
	createCanvas(200, 100);
	colorMode(HSL, 360, 100, 100, 100);
	background(50);
	stroke(10);
	noStroke();
	fill(60);
	rect(0, 0, width, s(0.37));
	rectMode(CENTER);
	fill('black');

	rect(x(0.3), y(0.6), s(0.3), s(0.33));

	fill('white');
	rect(x(0.7), y(0.6), s(0.3), s(0.33));
}

function draw() {}

function keyPressed() {
	if (key === 's') {
		const name = prompt('Enter name', `out-${Date.now()}.png`);
		save(name);
	}
}
