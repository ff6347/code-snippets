/** @type {number} */
let x;
/** @type {number} */
let y;
/** @type {number} */
let px;
/** @type {number} */
let py;
let handleOffset = 10;

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent('sketch');
	x = random(width);
	y = random(height);
	px = random(width);
	py = random(height);
	stroke('black');
	noFill();
}

function draw() {
	background(255, 23);
	beginShape();
	curveVertex(
		x + random(-handleOffset, handleOffset),
		x + random(-handleOffset, handleOffset),
	);
	curveVertex(x, y);
	curveVertex(px, py);
	curveVertex(
		x - random(-handleOffset, handleOffset),
		y - random(-handleOffset, handleOffset),
	);

	endShape();

	px = x;
	py = y;

	x = random(-width / 2, width / 2) + width / 2;
	y = random(-height / 2, height / 2) + height / 2;
	// line(x, y, width / 2, height / 2);
}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
