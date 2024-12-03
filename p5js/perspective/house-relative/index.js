const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background("lightgoldenrodyellow");
	const horizonY = y(0.55);
	const unitX = width / 10;
	const unitY = height / 10;
	// sun
	strokeWeight(s(0.035));
	stroke("orange");
	fill("coral");
	circle(x(0.25), horizonY - y(0.05), unitX * 2);
	noStroke();
	// house
	noStroke();
	fill("lavender");
	const houseWidth = unitX * 4;

	rect(x(0.3), horizonY - y(0.1), houseWidth, unitY * 2);
	//roof
	quad(
		x(0.3),
		horizonY - y(0.1),
		x(0.3) + unitX / 2,
		horizonY - y(0.1) - unitY,
		x(0.3) + houseWidth - unitX / 2,
		horizonY - y(0.1) - unitY,
		x(0.3) + houseWidth,
		horizonY - y(0.1),
	);
	fill("lightgrey");
	triangle(
		x(0.3) + houseWidth - unitX / 2,
		horizonY - y(0.1) - unitY,
		x(0.3) + houseWidth,
		horizonY - y(0.1),
		x(0.3) + houseWidth - unitX,
		horizonY - y(0.1),
	);
	rect(x(0.3) + houseWidth - unitX, horizonY - y(0.1), unitX, unitY * 2);
	// land
	noStroke();
	fill("darkseagreen");
	rect(x(0), horizonY, width, height);
	// light & shadow
	stroke("lavenderblush");
	strokeWeight(1);
	line(0, horizonY, x(0.6), horizonY);
	stroke("lightgrey");
	strokeWeight(1);
	line(x(0.6), horizonY, x(1), horizonY);
}
function keyPressed() {
	if (key === "s") {
		const name = prompt("Enter name", `out-${Date.now()}.png`);
		save(name);
	}
}
