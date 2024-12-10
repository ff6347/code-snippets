const coords = [];

function setup() {
	const canvas = createCanvas(300, 300);
	canvas.parent("sketch");
	background("lightgoldenrodyellow");
	angleMode(DEGREES);

	textSize(14);
	textFont("monospace");
	textAlign(LEFT, TOP);
	textLeading(14 * 1.5);
}

function draw() {
	background("lightgoldenrodyellow");
	fill("black");
	text("press c to log coords to console\npress s to save image", 10, 10);
	fill("white");
	for (let i = 0; i < coords.length; i++) {
		rect(coords[i][0], coords[i][1], 10, -20);
	}
}

function mousePressed() {
	coords.push([mouseX, mouseY]);
}

function keyPressed() {
	if (key === "c") {
		console.log(coords);
	}

	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
