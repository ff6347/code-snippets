import "https://cdn.jsdelivr.net/npm/@theatre/browser-bundles@0.5.0-insiders.88df1ef/dist/core-and-studio.js";
import p5 from "https://esm.sh/p5@1.11.2";
// We can now access Theatre.core and Theatre.studio from here
const { core, studio } = Theatre;

const { getProject, types } = core;
studio.initialize(); // Start the Theatre.js UI
console.log(core);

document.addEventListener("DOMContentLoaded", (event) => {
	let wWidth = 100;
	let wHeight = 100;
	let x = 10;
	let y = wHeight / 2;
	let w = wWidth / 10;
	let h = w;
	/**
	 * Initializes and sets up the sketch.
	 *
	 * @param {p5} p - The p5 instance.
	 * @return {undefined} This function does not return a value.
	 */
	const sketch = (p) => {
		p.setup = function setup() {
			// setup runs once
			const canvas = p.createCanvas(wWidth, wHeight);
			canvas.parent("sketch");
			p.background(128);
		};
		p.draw = function draw() {
			p.background(128);
			p.ellipse(x, y, w, h);
			// draw runs all the time
		};
	};
	console.log("DOM fully loaded and parsed");
	const div = document.getElementById("sketch");
	if (!div) throw new Error("div#sketch not found");
	new p5(sketch, div);
	const project = getProject("p5.js & Theatre.js");
	const sheet = project.sheet("Animated scene");
	const obj = sheet.object("obj", {
		x: types.number(x, { range: [0, 100] }),
		y: types.number(y, { range: [0, 100] }),
		width: 10,
		height: 10,
	});
	obj.onValuesChange((obj) => {
		x = obj.x;
		y = obj.y;
	});
});
