let img;
let img2;
let img3;

// let isInside = false;

const images = [];
let imageIndex = 0;
function preload() {
	img = loadImage(
		"https://hbk-bs.github.io/the-archives-ff6347/assets/images/ff6347-icon-512x512.webp",
	);

	img3 = loadImage("./cat-1.png");

	images.push(img);
	images.push(img3);
}
function setup() {
	createCanvas(200, 200);
	noFill();
}

function draw() {
	if (mouseX > 100 && mouseX < 130 && mouseY > 100 && mouseY < 130) {
		console.log("in");
		rect(100, 100, 30, 30);
		// isInside = true;
		imageIndex = 1;
	} else if (mouseX > 0 && mouseX < 10) {
		imageIndex = 1;
	} else {
		// isInside = false;
		imageIndex = 0;
	}

	image(images[imageIndex], 0, 0);
	rect(0, 0, 10, 10);
	rect(100, 100, 30, 30);
}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
