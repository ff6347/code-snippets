//http://www.complexification.net/gallery/machines/substrate/
let cracks = [];
const CRACK_COUNT = 200;
const MAX_CRACKS = 300;

function setup() {
	console.log(`based on http://www.complexification.net/gallery/machines/substrate/
substrate
processing\tjune, 2003\tj.tarbell`);
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(255);
	stroke(0); // Semi-transparent black
	strokeWeight(0.5);

	// Initialize with some random cracks
	for (let i = 0; i < CRACK_COUNT; i++) {
		createCrack();
	}
}

function draw() {
	// Grow each crack
	for (let i = 0; i < cracks.length; i++) {
		if (cracks[i].active) {
			growCrack(cracks[i]);
		}
	}

	// Add new cracks occasionally
	if (frameCount % 10 === 0 && cracks.length < MAX_CRACKS) {
		createCrack();
	}

	// cleanup inactive cracks
	cracks = cracks.filter((crack) => crack.active);
}

function createCrack() {
	// Create a new crack at a random position
	let crack = {
		x: random(width),
		y: random(height),
		angle: random(TWO_PI),
		active: true,
	};
	cracks.push(crack);
}

function growCrack(crack) {
	// console.log('grow');
	// Check if we're still within bounds
	if (crack.x < 0 || crack.x > width || crack.y < 0 || crack.y > height) {
		crack.active = false;
		return;
	}

	// Calculate new position
	let nextX = crack.x + cos(crack.angle);
	let nextY = crack.y + sin(crack.angle);

	// Draw line segment
	// point(nextX, nextY);
	line(crack.x, crack.y, nextX, nextY);

	// Update crack position
	crack.x = nextX;
	crack.y = nextY;

	// Randomly adjust angle slightly
	// crack.angle += random(-0.1, 0.1);

	// Check for intersection with existing lines
	let pixels = get(floor(nextX), floor(nextY));
	let brightness = (pixels[0] + pixels[1] + pixels[2]) / 3;

	// If we hit an existing line (darker pixel), deactivate this crack
	if (brightness < 50) {
		crack.active = false;
		// console.log('inactive');
		// Occasionally start a new crack perpendicular to this one
		if (random() < 0.3) {
			let newCrack = {
				x: crack.x,
				y: crack.y,
				angle: crack.angle + HALF_PI + random(-0.2, 0.2),
				active: true,
			};
			cracks.push(newCrack);
		}
	}
}

function mousePressed() {
	// Clear canvas and restart
	background(255);
	cracks = [];
	for (let i = 0; i < CRACK_COUNT; i++) {
		createCrack();
	}
}
