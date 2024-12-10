function setup() {
	const canvas = createCanvas(windowWidth - 10, 400);
	canvas.parent("sketch");
	background(255);
}

function draw() {
	background(255);

	// Draw axis lines
	stroke(200);
	line(0, height / 2, width, height / 2); // x axis
	line(width / 2, 0, width / 2, height); // y axis

	// Draw cosine curve
	stroke(0);
	strokeWeight(1);
	for (let x = 0; x < width; x += 10) {
		// Map x to angle (0 to TWO_PI)
		let angle = map(x, 0, width, 0, TWO_PI);
		// Calculate y using cos and map to canvas height
		let y = cos(angle) * 100;
		point(x, height / 2 + y);
	}

	noLoop(); // Stop drawing since it's static
}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
