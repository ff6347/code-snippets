class Particle {
	isRandom = false;
	speed = 1;
	x;
	y;
	w;
	h;
	xoff;
	yoff;
	lifetime;
	dead = false;
	a = 0;
	/**
	 *
	 * @param {{x: Number, y: Number, w?: Number, h?: Number, lifetime?: Number, isRandom?: Boolean}} options
	 */
	constructor({
		x,
		y,
		w = 10,
		h = 10,
		lifetime = 100,
		isRandom = false,
		speed = 1,
	}) {
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.lifetime = lifetime;
		this.isRandom = isRandom;
		this.speed = speed;
		this.xoff = random(1000);
		this.yoff = random(1000);
	}
	display() {
		push();
		if (this.isRandom) {
			stroke("black");
		} else {
			stroke("white");
		}
		translate(this.x, this.y);
		noFill();
		point(0, 0);
		rotate(this.a);
		circle(0, 0, this.w);
		pop();
	}

	update() {
		if (this.isRandom) {
			this.x += random(-this.speed, this.speed);
			this.y += random(-this.speed, this.speed);
		} else {
			this.x += noise(this.xoff) * this.speed - this.speed / 2;
			this.y += noise(this.yoff) * this.speed - this.speed / 2;
			this.xoff += 0.01;
			this.yoff += 0.01;
		}

		// this.xoff = this.xoff % 1000;
		// this.xoff = this.yoff % 1000;

		if (this.x > width) {
			this.x -= 1;
		}
		if (this.x < 0) {
			this.x += 1;
		}
		if (this.y > height) {
			this.y -= 1;
		}
		if (this.y < 0) {
			this.y += 1;
		}
	}
}

/**@type Particle */
let p;
/**@type Array<Particle> */
const particles = [];
function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	angleMode(DEGREES);

	for (let x = 0; x < 100; x++) {
		const s = random(5, 10);

		p = new Particle({
			x: random(width),
			y: random(height),
			w: s,
			h: s,
			lifetime: random(100, 500),
			isRandom: false,
		});
		particles.push(p);
	}
}

function draw() {
	background(128);
	particles.forEach((p) => {
		p.update();
		p.display();
	});
}

function mouseDragged() {
	const s = random(5, 10);
	p = new Particle({
		x: mouseX,
		y: mouseY,
		isRandom: true,
		w: s,
		h: s,
		lifetime: random(100, 500),
	});
	particles.push(p);
}
