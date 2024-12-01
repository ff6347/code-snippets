function setup() {
	createCanvas(300, 300);
	const colorPostion = 0.5;
	let spectralColor = color(spectral.mix('#00357B', '#D79900', colorPostion));

	const spectralColors = [color('#00357B'), spectralColor, color('#D79900')];

	let p5Color = lerpColor(color('#00357B'), color('#D79900'), colorPostion);

	const p5Colors = [color('#00357B'), p5Color, color('#D79900')];
	console.log({ spectralColor, p5Color });
	const step = width / spectralColors.length;
	for (let i = 0; i < spectralColors.length; i++) {
		fill(spectralColors[i]);
		const x = i * step;
		rect(x, 0, step, height / 2);
	}
	for (let i = 0; i < p5Colors.length; i++) {
		fill(p5Colors[i]);
		const x = i * step;
		rect(x, height / 2, step, height / 2);
	}
}

function draw() {}

function keyPressed() {
	if (key === 's') {
		const name = `out-${Date.now()}.png`;
		save(name);
	}
}
