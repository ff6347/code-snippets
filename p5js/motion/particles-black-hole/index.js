class MySuperParticle {
	position;
	target;
	speed = 1;
	isDead = false;
	size = 10;
	off;
	constructor(pos, target) {
		this.position = pos;
		this.target = target;
		this.off = createVector(random(1000), random(2000));
	}
	display() {
		push();
		stroke(0);
		fill(255);
		circle(this.position.x, this.position.y, this.size);
		pop();
	}

	update(target) {
		// set the target from the passed in new vector. Currently points at the mouse
		if (target) {
			this.target = target;
		}
		// p5.Vector.sub() subtracts two vectors (target - position)
		// This gives us a vector pointing from current position to target
		let direction = p5.Vector.sub(this.target, this.position);

		// normalize() sets the length of vector to 1
		// This keeps direction but removes magnitude
		direction.normalize();

		// mult(speed) multiplies the normalized vector by speed
		// This gives us consistent movement speed regardless of distance
		direction.mult(this.speed);

		// add() updates position by adding direction vector
		// position = position + (direction * speed)
		// This moves our particle one "step" towards target
		this.position.add(direction);

		this.position.add(createVector(noise(this.off.x), noise(this.off.y)));

		// Optional: Check distance to target
		let distance = this.position.dist(this.target);
		// console.log(distance);
		if (distance < 10) {
			this.position.add(p5.Vector.random2D().mult(0.5));
			this.size = distance;
		}
		if (distance < 2) {
			this.isDead = true;
		}

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

const listOfParticles = [];
let targetPosition;
function setup() {
	const canvas = createCanvas(500, 500);
	canvas.parent("sketch");
	targetPosition = createVector(width / 2, height / 2);
}

function draw() {
	background(255, 100);

	// noStroke();
	fill(128);
	ellipse(width / 2, height / 2 + -1, 30, 10);
	ellipse(width / 2, height / 2 + -2, 30, 10);

	fill(0);
	ellipse(width / 2, height / 2, 30, 10);
	listOfParticles.forEach((eachItemInList) => {
		eachItemInList.display();
		eachItemInList.update();
	});

	for (let j = listOfParticles.length - 1; j >= 0; j--) {
		if (listOfParticles[j].isDead) {
			listOfParticles.splice(j, 1);
		}
	}

	if (frameCount % 30 === 0) {
		listOfParticles.push(
			new MySuperParticle(createVector(random(width), 0), targetPosition)
		);
	}
}
