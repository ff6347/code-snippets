// this is a comment
//. this is global scope

const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);
function setup() {
	const canvas = createCanvas(300, 600);
	canvas.parent('sketch');
	colorMode(HSL, 360, 100, 100, 100);
	angleMode(DEGREES);
	// this is function scope
	// setup is executed once
	background(10);
	const numberOfTriangles = 100;
	for (let i = 0; i < numberOfTriangles; i++) {
		push();
		translate(
			x(0.5) + random(-x(0.2), x(0.2)),
			y(0.5) + random(-y(0.5), y(0.5)),
		);
		fill(random(200, 330), 30, 80, random(100));
		rotate(random(360));
		const coords = [];
		a = 0;
		const scaler = width / random(s(0.01), s(0.05));
		while (a < 360) {
			const jitter = random(-10, 10);
			const x = cos(a) * scaler + jitter;
			const y = sin(a) * scaler + jitter;
			coords.push({ x, y });
			a += 100 + random(0, 20);
		}
		// console.log(coords);
		triangle(
			coords[0].x,
			coords[0].y,
			coords[1].x,
			coords[1].y,
			coords[2].x,
			coords[2].y,
		);
		pop();
	}
}

function draw() {}
