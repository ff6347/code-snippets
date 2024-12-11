class Particle {
	position;
	size;
	col;
	off;
	speed = 2;
	ateSomeone = 0;
	isRaised = false;
	maxRaiseSize = 5;
	isDead = false;
	constructor({ x, y, size = 1, col = "white" }) {
		this.position = createVector(x, y);
		this.size = size;
		this.col = col;
		this.off = createVector(random(1000), random(2000, 3000));
	}
	display() {
		fill(this.col);
		circle(this.position.x, this.position.y, this.size + this.ateSomeone);
	}
	update() {
		if (this.isRaised === false) {
			this.size += 0.2;
			if (this.size >= this.maxRaiseSize) {
				this.isRaised = true;
			}
		}
		this.position.x = this.position.x + noise(this.off.x) * this.speed; //random(-1, 1);
		this.position.y = this.position.y + (noise(this.off.y) * this.speed) / 2;

		this.off.add(createVector(random(-1, 1), random(-1, 1)));

		// constrain to canvas
		// if (this.position.x < 0) {
		// 	this.position.x = 0;
		// }
		// if (this.position.x > width) {
		// 	this.position.x = width;
		// }
		// if (this.position.y < 0) {
		// 	this.position.y = 0;
		// }
		// if (this.position.y > height) {
		// 	this.position.y = height;
		// }

		if (this.position.x < 0) {
			this.position.x = width;
		}
		if (this.position.x > width) {
			this.position.x = 0;
		}
		if (this.position.y < 0) {
			this.position.y = height;
		}
		if (this.position.y > height) {
			this.position.y = 0;
		}
	}
}
const particles = [];
const numberOfParticles = 1000;
let particleCount = 0;
let allSpawend = false;
let birthRate = 30;
function setup() {
	const canvas = createCanvas(windowWidth < 400 ? windowWidth - 16 : 400, 400);
	canvas.parent("sketch");

	colorMode(HSL, 360, 100, 100, 100);
	// for (let i = 0; i < 500; i++) {
	// const aParticle = new Particle(
	// {	x:random(width) ,
	// 	y: random(height)}
	// );
	// particles.push(aParticle);
	// }
	//saveGif("out",20)
}

function draw() {
	if (particleCount < numberOfParticles && allSpawend === false) {
		if (frameCount > 100 && frameCount % birthRate === 0) {
			const aParticle = new Particle({
				x: random(width),
				y: random(height),
			});
			particles.push(aParticle);
		}

		particleCount++;
		if (particleCount >= numberOfParticles) {
			allSpawend = true;
		}
		birthRate--;
		if (birthRate < +2) {
			birthRate = 2;
		}
		// else{
		// 	allSpawend = false;
		// }
	}
	background(255);
	particles.forEach((particle, index, innerParticlesList) => {
		particle.display();
		particle.update();

		innerParticlesList.forEach((innerParticle, innerIndex) => {
			if (index === innerIndex) {
				return;
			}

			const distance = particle.position.dist(innerParticle.position);

			if (distance < 20 + particle.size && particle.isRaised) {
				particle.size = map(distance, 20, 0, 5, 10 + particle.ateSomeone);
				particle.col = "crimson";
				innerParticle.col = "crimson";

				line(
					particle.position.x,
					particle.position.y,
					innerParticle.position.x,
					innerParticle.position.y
				);
				if (distance < 2 + particle.size) {
					innerParticle.isDead = true;
					particle.ateSomeone++;
					particle.speed += 0.2;
				}
			} else {
				particle.col = "white";
			}
		});
	});

	for (let i = particles.length - 1; i >= 0; i--) {
		if (particles[i].isDead) {
			particles.splice(i, 1);
		}
	}
}
