class Particle {
	position;
	target;
	speed = 1;
	maxSpeed = 30;
	minSpeed = 1;
	progress;
	constructor(pos, target) {
		this.position = pos;
		this.target = target;
	}
	display() {
		circle(this.position.x, this.position.y, 10);
	}
	update(target) {
		if (target) {
			this.target = target;
			this.progress = 0; // Reset progress for new target
		}

		// this.target = target ? target : this.target;
		// p5.Vector.sub() subtracts two vectors (target - position)
		// This gives us a vector pointing from current position to target
		let direction = p5.Vector.sub(this.target, this.position);

		// normalize() sets the length of vector to 1
		// This keeps direction but removes magnitude
		direction.normalize();

		// Calculate distance and normalize it to 0-1 range
		let distance = this.position.dist(this.target);
		let maxDist = sqrt(width * width + height * height);
		let normalizedDist = distance / maxDist;

		// Apply easing using sine function
		// sin() produces smooth curve between -1 and 1
		// map it to range between minSpeed and maxSpeed
		this.speed = map(
			sin(normalizedDist * PI),
			0,
			1,
			this.minSpeed,
			this.maxSpeed
		);
		// mult(speed) multiplies the normalized vector by speed
		// This gives us consistent movement speed regardless of distance
		direction.mult(this.speed);

		// add() updates position by adding direction vector
		// position = position + (direction * speed)
		// This moves our particle one "step" towards target
		this.position.add(direction);

		// Optional: Check distance to target
		// let distance = this.position.dist(this.target);
		// // console.log(distance);
		// this.speed = map(distance, 0, sqrt(width * width + height * height), 1,30)
		// console.log(this.speed)
	}
}

let p;
let targetPosition;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");

	const startPosition = createVector(random(width), random(height));
	targetPosition = createVector(mouseX, mouseY);
	p = new Particle(startPosition, targetPosition);
	// saveGif("out.gif", 5, { delay: 1 })
}

function draw() {
	background(255, 200);
	p.display();
	p.update();
	if (frameCount % 50 === 0) {
		p.update(createVector(random(width), random(height)));
	}
}
