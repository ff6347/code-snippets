function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
	stroke(200, 50);
}

function draw() {
	const randomVector = createVector(random(-25, 25), random(-25, 25));
	randomVector.normalize();
	randomVector.mult(25);
	// could also be
	// randomVector = p5.Vector.random2D().mult(25)
	line(
		width / 2,
		height / 2,
		width / 2 + randomVector.x,
		height / 2 + randomVector.y
	);
}
