/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.
// {} ALT + 8 9
// [] ALT + 5 6
function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
	const diam = 40;
	rectMode(CENTER);
	noStroke();
	let colorincrement = 10;
	for (let y = diam / 2; y < height; y = y + diam) {
		for (let x = diam / 2; x < width; x = x + diam) {
			fill((colorincrement + random(70)) % 255, 100);

			colorincrement += 10;
			circle(x, y, random(diam));
			circle(x, y, random(diam));
			circle(x + random(-1, 1), y + random(-1, 1), random(diam));
			circle(x + random(-1, 1), y + random(-1, 1), random(diam));

			circle(x + random(-1, 1), y + random(-1, 1), random(diam));
			rect(x + random(-1, 1), y + random(-1, 1), diam);
			rect(x + random(-1, 1), y + random(-1, 1), diam);
			// circle(x, y, random(diam));
			push();
			stroke(255, 50);
			strokeWeight(0.5);

			circle(x, y, random(diam, diam + 1));
			pop();
		}
	}
}

function draw() {
	// draw runs all the time
}
