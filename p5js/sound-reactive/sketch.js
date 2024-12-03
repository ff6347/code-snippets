/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

// This sketch does not work in firefox atm
// https://github.com/processing/p5.js/issues/3449
let song;
let mic;
let minimum = 1;
let maximum = 0;
let bgColor;
function setup() {
	bgColor = color(0);
	// @ts-ignore
	// eslint-disable-next-line no-undef
	song = loadSound("assets/lucky-dragons_power-melody.mp3");
	createCanvas(100, 100);
	background(bgColor);
	// Create an Audio input
	mic = new p5.AudioIn();

	// start the Audio Input.
	// By default, it does not .connect() (to the computer speakers)
	mic.start();
}

function draw() {
	background(bgColor);
	if (!song.isPlaying()) {
		push();
		textAlign(CENTER, CENTER);
		fill(255);
		translate(width / 2, height / 2);
		text("press to play", 0, 0);
		pop();
	}
	// Get the overall volume (between 0 and 1.0)
	let vol = mic.getLevel();
	// level out the max and min values
	if (vol < minimum) {
		minimum = vol;
	}
	if (vol > maximum) {
		maximum = vol;
	}
	fill(200, 5);
	stroke(0, 5);

	// Draw an ellipse based on volume
	push();
	translate(width / 2, height / 2);
	let h = map(vol, minimum, maximum, -(height / 2), height / 2);
	let s = map(vol, minimum, maximum, 1, width);
	strokeWeight(s);
	ellipse(0, h, s, s);

	pop();
}

function mousePressed() {
	if (song.isPlaying()) {
		// .isPlaying() returns a boolean
		song.stop();
		bgColor = color(0, 10);
	} else {
		song.play();
		bgColor = color(255, 10);
	}
}
