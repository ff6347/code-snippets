/**
 * Polar coordinates are a way to describe a point's location using:
 * 1.	Distance from origin (radius/r)
 * 2.	Angle from a reference direction (theta/θ)
 * Key conversion formulas:
 * •	Polar to Cartesian:
 *	▪	x = r * cos(θ)
 * 	▪	y = r * sin(θ)
 * •	Cartesian to Polar:
 * 	▪	r = sqrt(x² + y²)
 * 	▪	θ = atan2(y, x)
 */

let angle = 0;
let radius = 40;

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
}

function draw() {
	background(255);
	translate(width / 2, height / 2); // Center origin

	// Draw reference grid
	stroke(200);
	line(-width / 2, 0, width / 2, 0); // x axis
	line(0, -height / 2, 0, height / 2); // y axis
	noFill();
	circle(0, 0, radius * 2); // Reference circle

	// Convert polar to cartesian
	let x = radius * cos(angle);
	let y = radius * sin(angle);

	// Draw point and lines showing radius and angle
	stroke(0);
	line(0, 0, x, y); // Radius line
	fill(0);
	circle(x, y, 10); // Point

	angle += 0.02;
}
