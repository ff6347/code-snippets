function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	colorMode(HSB);
	const h = 330;
	const sat = 50;
	const brght = 100;
	const a = 90;

	const primaryColor = color(h, sat, brght, a);
	background(primaryColor);

	const secondaryColor = color((h + 180) % 360, sat, brght, a);
	noStroke();
	fill(secondaryColor);
	triangle(0, 100, 100, 0, 100, 50);
	const tertiaryColor = color((h + 180 + 90) % 360, sat, brght, a);
	fill(tertiaryColor);
	triangle(0, 100, 100, 50, 100, 100);
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
