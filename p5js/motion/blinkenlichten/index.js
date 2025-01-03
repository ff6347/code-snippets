/*
ACHTUNG!
ALLES TURISTEN UND NONTEKNISCHEN LOOKENSPEEPERS!
DAS KOMPUTERMASCHINE IST NICHT FÜR DER GEFINGERPOKEN UND MITTENGRABEN! ODERWISE IST EASY TO SCHNAPPEN DER SPRINGENWERK, BLOWENFUSEN UND POPPENCORKEN MIT SPITZENSPARKEN.
IST NICHT FÜR GEWERKEN BEI DUMMKOPFEN. DER RUBBERNECKEN SIGHTSEEREN KEEPEN DAS COTTONPICKEN HÄNDER IN DAS POCKETS MUSS.
ZO RELAXEN UND WATSCHEN DER BLINKENLICHTEN.
 */

class Block {
	constructor({ x, y, w, h, r, d = true }) {
		this.pos = createVector(x, y);
		this.color = color("black");
		this.w = w;
		this.h = h;
		this.r = r;
		this.dir = d;
	}
	display() {
		push();
		rectMode(CENTER);
		strokeWeight(3);
		fill(this.color);
		translate(this.pos.x, this.pos.y);
		rect(0, 0, this.w, this.h);
		pop();
	}
	update() {
		this.dir === true
			? this.pos.add(createVector(this.r, 0))
			: this.pos.sub(createVector(this.r, 0));

		if (this.dir === true) {
			if (this.pos.x > width) {
				this.pos.x = this.r / 2;
				this.color = random(1) > 0.5 ? color("black") : color("red");
			}
		} else {
			if (this.pos.x < 0) {
				this.pos.x = width - this.r / 2;
				this.color = random(1) > 0.5 ? color("black") : color("red");
			}
		}
	}
}

const blocks = [];
const rasterSize = 20;
function setup() {
	const canvas = createCanvas(400, 800);
	canvas.parent("sketch");
	background("black");
	let rowCount = 0;
	let dir = true;
	for (let y = rasterSize / 2; y < height; y += rasterSize) {
		if (rowCount % 4) {
			dir = !dir;
		}

		for (let x = rasterSize / 2; x < width; x += rasterSize) {
			blocks.push(
				new Block({
					x,
					y,
					w: rasterSize,
					h: rasterSize,
					r: rasterSize,
					d: dir,
				})
			);
		}
		rowCount++;
	}
}

function draw() {
	background(0);
	blocks.forEach((b) => {
		b.display();
		if (frameCount % 50 === 0) {
			b.update();
		}
	});
}
