// @ts-check

/**
 * @type {{x:number, y:number, w:number, h:number}[]}
 */

let spriteSheet;

let spriteIndex = 0;
/**
 * @type {Image}
 */
let sprites;

function preload() {
	// preload runs once
	sprites = loadImage("./data/sprite.png");
}
function setup() {
	// setup runs once
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(128);
	const imageWidth = sprites.width;
	let x = 0;
	let y = 0;
	/**
	 * The issue is that new Array(20).fill({ x: 0, y: 0, w: 100, h: 100 }) creates an array with 20 references to the same object. So when you modify one object, you modify all of them. To fix this, you can use Array.from() instead of new Array() to create a new object for each element in the array. This wont work:
	// spriteSheet = new Array(20).fill({ x: 0, y: 0, w: 100, h: 100 });
	 */
	spriteSheet = Array.from({ length: 20 }, () => ({
		x: 0,
		y: 0,
		w: 100,
		h: 100,
	}));
	spriteSheet.forEach((_sheet, i, arr) => {
		arr[i].x = x;
		arr[i].y = y;
		x += 100;
		if (x >= imageWidth) {
			x = 0;
			y = 100;
		}
	});
	// frameRate(5);
}

function draw() {
	image(
		sprites.get(
			spriteSheet[spriteIndex].x,
			spriteSheet[spriteIndex].y,
			spriteSheet[spriteIndex].w,
			spriteSheet[spriteIndex].h,
		),
		0,
		0,
		100,
		100,
	);
	// draw runs all the time
	// only updates every n frame
	if (frameCount % 7 === 0) {
		spriteIndex = (spriteIndex + 1) % spriteSheet.length;
	}
}
