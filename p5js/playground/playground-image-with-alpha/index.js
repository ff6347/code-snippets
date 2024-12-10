let img2;
let img3;

let images = [];

let imageIndex = 0;

function preload() {
	// img = loadImage('./adventskranz_alpha.png');
	img2 = loadImage(
		"https://hbk-bs.github.io/the-archives-Annagnb/assets/images/IMG_0521.WEBP"
	);
	img3 = loadImage("./adventskranz3.png");

	// images.push(img);
	// images.push(img2);
	// images.push(img3);

	images = [img2, img3];
}
function setup() {
	createCanvas(400, 400);
	background("lightgoldenrodyellow");
	const button = createButton("index 1");
	const button2 = createButton("index 0");

	button.mousePressed(() => {
		imageIndex = 1;
	});

	button2.mousePressed(() => {
		imageIndex = 0;
	});
}

function draw() {
	background("lightgoldenrodyellow");
	image(images[imageIndex], 0, 0);
}

function keyPressed() {
	if (key === "s") {
		save(`out-${Date.now()}.png`);
	}
}
