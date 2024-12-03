class Area {
	x;
	y;
	topIsDark = false;
	bottomIsDark = true;
	size = 10;
	constructor({
		x,
		y,
		bottomIsDark = false,
		topIsDark = false,
		areaSize = 10,
	}) {
		this.x = x;
		this.y = y;
		this.bottomIsDark = bottomIsDark;
		this.topIsDark = topIsDark;
		this.size = areaSize;
	}
	/**
	 * AI generated. Since my math is bad
	 */
	isMouseInTriangle(px, py, x1, y1, x2, y2, x3, y3) {
		// Convert mouse coordinates to local space
		px -= this.x;
		py -= this.y;

		// Calculate area of the triangle
		const area = Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2;

		// Calculate areas of three triangles made between the point and the triangle vertices
		const area1 = Math.abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py)) / 2;
		const area2 = Math.abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py)) / 2;
		const area3 = Math.abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py)) / 2;

		// Point is inside if sum of three areas equals the triangle area
		return Math.abs(area - (area1 + area2 + area3)) < 0.1;
	}
	/**
	 * AI generated. Since my math is bad
	 */
	isMouseOver(mX, mY) {
		// Check top triangle
		const inTop = this.isMouseInTriangle(
			mX,
			mY,
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
		);

		// Check bottom triangle
		const inBottom = this.isMouseInTriangle(
			mX,
			mY,
			this.size / 2,
			this.size / 2,
			this.size / 2,
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
		);

		return { inTop, inBottom };
	}

	/**
	 * Should be called in mousePressed()
	 */
	update(mX, mY) {
		const { inBottom, inTop } = this.isMouseOver(mX, mY);
		if (inTop) {
			// fill("deeppink");
			this.topIsDark = !this.topIsDark;
		}

		if (inBottom) {
			// fill("deepskyblue");
			this.bottomIsDark = !this.bottomIsDark;
		}
	}

	display() {
		push();
		noStroke();

		translate(this.x, this.y);
		if (this.topIsDark) {
			fill("black");
		} else {
			fill("white");
		}

		triangle(
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
		);
		if (this.bottomIsDark) {
			fill("black");
		} else {
			fill("white");
		}

		triangle(
			this.size / 2,
			this.size / 2,
			this.size / 2,
			-this.size / 2,
			-this.size / 2,
			this.size / 2,
		);
		pop();
	}
}

const areas = [];
function setup() {
	const canvas = createCanvas(400, 400);
	canvas.parent("sketch");
	background(128);
	const areaSize = 20;
	for (let x = areaSize / 2; x < width; x += areaSize) {
		for (let y = areaSize / 2; y < height; y += areaSize) {
			const a = new Area({
				x: x,
				y: y,
				bottomIsDark: random() > 0.5 ? true : false,
				topIsDark: random() > 0.5 ? true : false,
				areaSize: areaSize,
			});
			areas.push(a);
		}
	}
}

function draw() {
	areas.forEach((a) => {
		a.display();
	});
}

function mousePressed() {
	areas.forEach((a) => {
		a.update(mouseX, mouseY);
	});
}

function keyPressed() {
	if (key === "s") {
		const name = `out-${Date.now()}.png`;

		save(name);
	}
}
