//@ts-check

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
}

function draw() {
	background(128);
	push();
	translate(width / 2, height / 2);
	rotate(QUARTER_PI);
	let y1 = -height / 2;
	for (let i = 0; i < 10; i++) {
		const x1 = 0;
		const x2 = x1;
		y1 += 5;
		const y2 = y1 + 5;
		console.log({ y1, y2 });
		line(x1, y1, x2, y2);
		y1 += 5;
	}
	pop();

	noLoop();
}
