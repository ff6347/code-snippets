//@ts-check

let centerX = 50;
let centerY = 50;
let radius = 100;
function setup() {
	const canvas = createCanvas(500, 500);
	colorMode(HSL, 360, 100, 100, 100);
	canvas.parent('sketch');
	stroke('black');
	noFill();
	centerX = width / 2;
	centerY = height / 2;
	background('white');

	createAdventskranz();
	createAdventskranz();
	createAdventskranz();
	createAdventskranz();
	createAdventskranz();
	createAdventskranz();
	createAdventskranz();
}
function draw() {}

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 */
function growBranch(x, y, angle) {
	strokeWeight(0.5);
	stroke(random(260, 350), 50, random(40, 100));
	point(x + random(-10, 10), y);
	push();
	translate(x, y);
	rotate(angle + random(PI));
	line(random(5, 50), random(5, 50), -random(5, 50), -random(5, 50));
	pop();
}

function createAdventskranz() {
	let numParticles = 360;
	for (let i = 0; i < numParticles; i++) {
		let angle = (TWO_PI * i) / numParticles;

		let x = centerX + cos(angle) * radius;
		let y = centerY + sin(angle) * radius;

		// Create branching pattern
		growBranch(x, y, angle);
	}
}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
