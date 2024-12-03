let duration = 1000;
const diam = 10;
let a = 0;
function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");
	strokeWeight(0.4);
	rectMode(CENTER);
	angleMode(DEGREES);
}

function draw() {
	push();
	const easing = easeInOutBounce(
		frameCount % duration,
		-10,
		width / 2,
		duration,
	);
	const easing1 = easeInExpo(frameCount % duration, 0, height / 2, duration);
	stroke(easing % 360, 60, 60, 80);
	const x = easing;
	const y = height / 2 + easing1;
	translate(x, y);
	rotate(a);
	strokeWeight(easing * 0.5);

	line(0, 0, easing, easing1 * pow(3, 3));
	pop();
	a += 0.5;
}
