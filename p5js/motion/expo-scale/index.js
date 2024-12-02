let x = 0;
let y = 0;
let s = 1;
let w = 1;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent('sketch');
	x = width / 2;
	y = height / 2;
	// saveGif("out.gif", 3)
}
function draw() {
	background(255);
	strokeWeight(w);
	circle(x, y, s);
	s *= 1.09;
	w -= 0.005;
	if (s > 150) {
		s = 1;
		w = 1;
	}
}

function keyPressed() {
	if (key === 's') {
		save(`out-${Date.now()}.png`);
	}
}
