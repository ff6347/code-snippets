class Particle {
	x;
	y;
	w;
	h;
	lifetime;
	dead = false;
	a = 0;
	/**
	 *
	 * @param {{x: Number, y: Number, w?: Number, h?: Number, lifetime?: Number}} options
	 */
	constructor({ x, y, w = 10, h = 10, lifetime = 100 }) {
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
		this.lifetime = lifetime;
	}
	display() {
		push();
		fill("black");
		translate(this.x + random(-1, 100) * pow(5, 2), this.y);
		noFill();
		point(0, 0);
		rotate(this.a);
		const l = random(this.w, this.h);
		strokeWeight(0.5);
		line(-l, -l, l, l);
		line(-l, l, l, -l);
		// circle(0, 0, this.w);
		const n = 10;
		const step = 360 / n;
		beginShape();

		ellipse(0, 0, this.w, this.h);
		pop();
	}

	update() {
		if (this.dead) return;
		// this.x += random(-1, 1);
		this.y += random(10);
		this.a += 10;
		this.lifetime--;
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
		if (this.lifetime < 0) {
			this.dead = true;
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

	for (let x = 0; x < width; x += 5) {
		// for (let y = 0; y < height; y += 25) {
		const s = random(10, 100);
		p = new Particle({
			x,
			y: 0,
			w: s + cos(x) * 10,
			h: s + sin(x) * 10,
			lifetime: random(1, 10) * pow(2, 3),
		});
		particles.push(p);
		// }
	}
}

function draw() {
	background(128, 1);
	particles.forEach((p) => {
		p.update();
		p.display();
	});
	for (let i = particles.length - 1; i >= 0; i--) {
		if (particles[i].dead) {
			particles.splice(i, 1);
		}
	}
}

function mouseDragged() {
	const s = random(10, 20);
	p = new Particle({
		x: mouseX,
		y: mouseY,
		w: s,
		h: s,
		lifetime: random(100, 500),
	});
	particles.push(p);
}
