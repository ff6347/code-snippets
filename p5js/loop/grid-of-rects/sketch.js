/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.
const columnNames = "abcdefghijklmnopqrstuvwxyz";
const coords = [];
function setup() {
	rectMode(CENTER);
	angleMode(DEGREES);
	const canvas = createCanvas(200, 200);
	canvas.parent("sketch");
	background(128);
	const horizontal = [];
	let c = 0;
	const step = 10;
	for (let x = step; x <= width - step; x += step) {
		const vertical = [];
		let r = 0;
		for (let y = step; y <= height - step; y += step) {
			vertical.push({
				x,
				y,
				column: columnNames[c % columnNames.length],
				row: r,
			});
			r++;
		}
		horizontal.push(vertical);
		c++;
	}
	horizontal.flat().forEach((e) => {
		push();
		translate(e.x, e.y);
		rotate(10 * columnNames.indexOf(e.column));
		// rotate(5 * e.row);
		rect(0, 0, 5, 5);
		pop();
	});
	console.table(horizontal.flat());
}

function draw() {}
