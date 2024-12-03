function setup() {
	createCanvas(100, 100);
	rectMode(CENTER);

	background(220);

	rect(50, 60, 30, 30);
	fill("BLACK");
	noStroke();
	triangle(65, 60, 70, 60, 65, 75);
}

function draw() {}

function onResize() {
	// resizeCanvas(windowWidth, windowHeight);
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
