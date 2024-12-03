let images = [];
let toggle = false;
let x = -50;
let y = 100;

function preload() {
	const img1 = loadImage("./data/cat-1.png");
	const img2 = loadImage("./data/cat-2.png");
	// images.push(img1);
	// images.push(img2);
	images = [img1, img2];
}

function setup() {
	const canvas = createCanvas(200, 200);
	canvas.parent("sketch");
	background("white");
}

function draw() {
	background("white");

	if (frameCount % 12 === 0) {
		toggle = !toggle;
		x += 15;
	}

	if (toggle) {
		image(images[0], x, y, 50, 42);
	} else {
		image(images[1], x, y, 50, 42);
	}
	if (x > width + 50) {
		x = -50;
		y = random(42, height - 42);
	}
}

function keyPressed() {
	if (key === "s") {
		const name = prompt("Save image as:", `out-${Date.now()}.png`);
		if (name) save(name);
	}
}
