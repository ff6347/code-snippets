/**@type {{x: number; y: number}} */
let origin;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");

	origin = createVector(width / 2, height / 2);
}

function draw() {
	randomSeed(10);
	background(255);

	// const targetVector = createVector(
	// 	width / 2 + random(-(width / 8), width / 8),
	// 	height / 2 + random(-(width / 8), width / 8)
	// );
	const targetVector = createVector(mouseX, mouseY);

	// Draw original line
	stroke("red");
	strokeWeight(4);
	line(origin.x, origin.y, targetVector.x, targetVector.y);

	// Get direction vector from origin to mouse
	const direction = p5.Vector.sub(targetVector, origin);

	// Scale the direction vector
	const largerVector = direction.mult(2).add(origin);

	strokeWeight(2);
	stroke("black");
	line(origin.x, origin.y, largerVector.x, largerVector.y);
	strokeWeight(0.5);
	line(origin.x, origin.y, origin.x + 10, origin.y);
	line(targetVector.x, targetVector.y, targetVector.x + 10, targetVector.y);
	line(largerVector.x, largerVector.y, largerVector.x + 10, largerVector.y);
	noStroke();
	text(`origin: ${origin.x}/${origin.y}`, 10, 10);
	text(
		`target: ${targetVector.x.toFixed(2)}/${targetVector.y.toFixed(2)}`,
		10,
		30
	);
	text(
		`direction: ${direction.x.toFixed(2)}/${direction.y.toFixed(2)}`,
		10,
		50
	);
	text(
		"larger: " + largerVector.x.toFixed(2) + "/" + largerVector.y.toFixed(2),
		10,
		70
	);
	text("origin", origin.x + 10, origin.y);
	text("target", targetVector.x + 10, targetVector.y);
	text("larger × 2", largerVector.x + 10, largerVector.y);

	// noLoop();
}
