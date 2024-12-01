function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent('sketch');
	background('white');
	angleMode(DEGREES);
	const step = 10;
	const radius = 20;

	for (let i = radius; i < width - radius * 2; i += step) {
		const t = map(i, radius, width - radius * 2, radius, width - radius * 2);
		const easing = easeInOutQuad(t, radius, width - radius * 2, width - radius);
		console.log(easing);
		circle(easing, height / 2, radius);
	}
}

function draw() {}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
