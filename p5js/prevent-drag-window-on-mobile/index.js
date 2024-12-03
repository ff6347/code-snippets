// Prevent dragging the window on mobile

document.addEventListener(
	"touchmove",
	(e) => {
		e.preventDefault();
	},
	{ passive: false },
);

// the rest of the code is just for dragging something

class Particle {
	lifespan = 100;
	opacity = 100;
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	draw() {
		stroke(0, this.opacity);
		fill(100, this.opacity);
		ellipse(this.x, this.y, 10, 10);
	}

	update() {
		this.x += random(-1, 1);
		this.y += random(-1, 1);
		this.lifespan--;
		this.opacity--;
	}

	edges() {
		if (this.x < 0 || this.x > width) {
			this.x *= -1;
		}
		if (this.y < 0 || this.y > height) {
			this.y *= -1;
		}
	}
}

const particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background("lightgoldenrodyellow");
	colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
	background("lightgoldenrodyellow");
	particles.forEach((particle) => {
		particle.draw();
		particle.update();
		particle.edges();
	});
	for (let i = particles.length - 1; i >= 0; i--) {
		if (particles[i].lifespan <= 0) {
			particles.splice(i, 1);
		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
	particles.push(new Particle(mouseX, mouseY));
}
