const coords = [];

function setup() {
	createCanvas(500, 500);
	background('lightgoldenrodyellow');
	angleMode(DEGREES);
	let count = 0;
}

function draw() {
	for (let i = 0; i < coords.length; i++) {
		rect(coords[i][0], coords[i][1], 10, -20);
	}
}

function mousePressed() {
	coords.push([mouseX, mouseY]);
}

function keyPressed() {
	if (key === 'c') {
		console.log(coords);
	}

	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
