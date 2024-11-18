function setup() {
	smooth();
	const canvas = createCanvas(700, 200);
	canvas.parent('sketch');
	colorMode(HSL, 360, 100, 100, 100);
	const color1 = color(230, 60, 60);
	const color2 = color(330, 60, 60);
	const steps = 5;
	const palette = spectral.palette(
		`rgb(${red(color1)},${green(color1)},${blue(color1)})`,
		`rgb(${red(color2)},${green(color2)},${blue(color2)})`,
		steps,
	);
	console.log(palette);
	background('white');
	textFont('Bradley Hand', 90);
	textSize(90);
	fill('white');
	textAlign(CENTER, CENTER);

	for (let i = palette.length - 1; i >= 0; i--) {
		// const h = 330 - i * 20;
		// console.log({ h });
		if (i === 0) {
			fill('WHITE');
		} else {
			fill(palette[i]);
			// filter(BLUR, map(i, 5, 0, 0.3, 0));
		}
		text('interaction baby!', width / 2 + i * 2, height / 2 + i * 2);
	}
}

function draw() {}
