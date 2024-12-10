function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background("white");
	angleMode(DEGREES);
	const step = 10;
	const radius = 20;

	let a = 0;
	for (let i = radius; i < width - radius * 2; i += step) {
		const t = map(i, radius, width - radius * 2, radius, width - radius * 2);
		const easing = easeOutQuad(t, radius, width - radius * 2, width - radius);
		console.log(easing);
		const yOffset = sin(map(i, radius, width - radius * 2, 0, 180)) * 50;

		circle(easing, height / 2 - yOffset, radius);
		a += 10;
	}
}

function draw() {}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
