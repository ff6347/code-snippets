let img;

function preload() {
	img = loadImage('data/kitten-300-200.jpg');
}
function setup() {
	createCanvas(300, 200);
	rectMode(CENTER);
	stroke('white');
	fill('black');
}

function draw() {
	image(img, 0, 0);
	// Get a region of the image.
	let c = get(mouseX - 15, mouseY - 15, 15, 15);

	// mask the image
	rect(width / 2, height / 2, width, height);
	// Display only the region.
	image(c, mouseX - 15, mouseY - 15);
}
