function setup() {
	createCanvas(500, 500);
	background('lightgoldenrodyellow');
	angleMode(DEGREES);
	let count = 0;
	for (let x = 0; x < width; x += 20) {
		for (let y = 0; y < height; y += 20) {
			push();
			translate(x, y);
			if (count % 2 === 0) {
				line(0, 5, 20, 5);
				line(0, 10, 20, 10);
				line(0, 15, 20, 15);
			} else {
				line(5, 0, 5, 20);
				line(10, 0, 10, 20);
				line(15, 0, 15, 20);
			}

			pop();
			count++;
		}
	}
}

function draw() {}

function keyPressed() {
	if (key === 's') {
		const name = prompt('Save image as:', `out-${Date.now()}.png`);
		save(name);
	}
}
