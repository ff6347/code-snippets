class Particle {
	constructor(x, y) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0); // Add velocity
		this.maxSpeed = 2; // Maximum speed
		this.maxForce = 0.05; // Maximum steering force
	}

	display() {
		push();
		translate(this.pos.x, this.pos.y);
		circle(0, 0, 10);
		pop();
	}

	update() {
		// Add random movement
		const randomVelocity = p5.Vector.random2D().mult(0.1);
		this.vel.add(randomVelocity);

		// Apply velocity
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);

		// Wrap around screen edges
		if (this.pos.x > width) this.pos.x = 0;
		if (this.pos.y > height) this.pos.y = 0;
		if (this.pos.x < 0) this.pos.x = width;
		if (this.pos.y < 0) this.pos.y = height;
	}

	// New method to avoid other particles
	separate(particles) {
		let desiredSeparation = 20;
		let steer = createVector(0, 0);
		let count = 0;

		// Check distance to every other particle
		particles.forEach((other) => {
			let d = p5.Vector.dist(this.pos, other.pos);
			if (d > 0 && d < desiredSeparation) {
				let diff = p5.Vector.sub(this.pos, other.pos);
				diff.normalize();
				diff.div(d); // Weight by distance
				steer.add(diff);
				count++;
			}
		});

		// Average steering force
		if (count > 0) {
			steer.div(count);
			steer.setMag(this.maxSpeed);
			steer.sub(this.vel);
			steer.limit(this.maxForce);
			this.vel.add(steer);
		}
	}
}

const particles = [];

function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");

	for (let i = 0; i < 42; i++) {
		particles.push(new Particle(random(width), random(height)));
	}
}
function draw() {
	background(255);

	particles.forEach((particle, i, arr) => {
		particle.separate(arr); // Add separation behavior
		particle.update();
		particle.display();

		// Draw lines between close particles
		arr.forEach((p, j) => {
			if (j === i) return;
			if (p.pos.dist(particle.pos) < 15) {
				line(p.pos.x, p.pos.y, particle.pos.x, particle.pos.y);
			}
		});
	});
}
