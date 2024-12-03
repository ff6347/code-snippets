function setup() {
	createCanvas(windowWidth, windowHeight);
	background("lightgoldenrodyellow");
}

function draw() {}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
