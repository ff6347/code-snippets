// @ts-check
class Particle {
	position;
	off;
	speed = 2;
	col;
	/**
	 *
	 * @param {{x:number;y:number}} pos
	 * @param {string} col
	 */
	constructor(pos, col = "white") {
		this.position = pos;
		this.off = createVector(random(-100, 100), random(1));
		this.col = col;
	}
	display() {
		push();
		fill(this.col);
		// noFill();
		circle(this.position.x, this.position.y, 10);
		pop();
	}
	update() {
		this.position.x +=
			noise(this.off.y) * this.speed - this.speed / 2 + cos(this.off.x) * 2;

		this.position.y += noise(this.off.y) * this.speed - this.speed / 2;

		this.off.x += 0.001;
		this.off.y += 0.5;

		if (this.position.x > width) {
			this.position.x = 0;
		}
		if (this.position.x < 0) {
			this.position.x = width;
		}
		if (this.position.y > height) {
			this.position.y = 0;
		}
		if (this.position.y < 0) {
			this.position.y = height;
		}
	}
}
/**@type Array<Particle> */
let particles = [];

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	randomSeed(42);
	particles = Array.from({ length: 100 }).map(
		(_) => new Particle(createVector(random(width), random(height)))
	);

	particles[floor(random(particles.length - 1))].col = "crimson";
}

function draw() {
	background(255, 50);
	strokeWeight(0.5);
	stroke(128);
	particles.forEach((particle, i, arr) => {
		arr.forEach((p, j) => {
			if (i == j) return;

			if (
				dist(
					particle.position.x,
					particle.position.y,
					p.position.x,
					p.position.y
				) <= 30
			) {
				line(
					particle.position.x,
					particle.position.y,
					p.position.x,
					p.position.y
				);
			}
		});
		particle.display();
		particle.update();
	});
}
