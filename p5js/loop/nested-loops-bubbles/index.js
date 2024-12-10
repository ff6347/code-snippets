function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	// this is function scope
	// setup is executed once
	createCanvas(400, 400);
	background("black");
	const step = 25;

	// noStroke();
	for (let x = step; x < width; x = x + step) {
		for (let y = step; y < height; y = y + step) {
			fill(random(230, 30), 50, 50, random(30));
			console.log({ x, y });
			circle(x, y, random(step, 70));
		}
	}

	function draw() {}
	// frameRate(1);
	// 	fill(random(230, 360), 50, 50);
	// 	circle(x, y, 10);
	// 	console.log({ x, y });
	// 	if (x < width - 10) {
	// 		x = x + 10;
	// 	} else {
	// 		x = 10;
	// 	if (y < height - 10) {
	// 		y = y + 10;
	// 	} else {
	// 		y = 10;
	// 	}
	// 	}
}
