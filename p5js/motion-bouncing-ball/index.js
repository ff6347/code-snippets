// @ts-check

/** @type {number} */
let x;

/** @type {number} */
let y;

/** @type {number} */
let ySpeed;

/** @type {number} */
let xSpeed;

function setup() {
	createCanvas(100, 100);
	xSpeed = random(-5, 5);
	ySpeed = random(-5, 5);
	x = width / 2;
	y = height / 2;
}

function draw() {
	background(255, 10);
	circle(x, y, 10);
	x += xSpeed;
	y += ySpeed;
	if (x > width || x < 0) {
		xSpeed *= -1;
		console.log({ ySpeed, xSpeed });
	}
	if (y > height || y < 0) {
		ySpeed *= -1;
		console.log({ ySpeed, xSpeed });
	}
}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
