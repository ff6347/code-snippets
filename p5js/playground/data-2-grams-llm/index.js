/** @type {Record<string, Record<string,number>>} */
let data;
const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // Simplified alphabet
let maxProbability = 0;
function preload() {
	data = loadJSON('map-dataset.json', (dataset) => {
		Object.keys(data).forEach(function (key) {
			const item = data[key];
			Object.keys(item).forEach(function (subKey) {
				const prob = item[subKey];
				if (prob > maxProbability) {
					maxProbability = prob;
				}
			});
		});
		console.log(maxProbability);
	}); // Make sure this JSON is correctly structured and accessible
}

function setup() {
	createCanvas(660, 660); // Increased size to accommodate labels
	noLoop();
	colorMode(HSB, 1); // Using HSB color mode
	textSize(12); // Setting text size for clarity
}

function draw() {
	background(1, 0, 1);

	const gridSize = (width - 60) / alphabet.length; // Adjust grid size for labels
	textAlign(CENTER, CENTER);
	// Draw letter labels on the top and left of the grid
	for (let i = 0; i < alphabet.length; i++) {
		// Top labels
		text(alphabet.charAt(i), 60 + i * gridSize + gridSize / 2, 50);
		// Left labels
		text(alphabet.charAt(i), 40, 60 + i * gridSize + gridSize / 2);
	}

	// Draw the rectangles based on the probability
	for (let i = 0; i < alphabet.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			const letter1 = alphabet.charAt(i);
			const letter2 = alphabet.charAt(j);

			// Checking if data for current letters exists to avoid errors
			if (data[letter1] && data[letter1][letter2]) {
				const prob = data[letter1][letter2];
				const brightness = map(prob, 0, maxProbability, 1, 0.3); // Use your max probability value
				fill(0.0253, 0.5, brightness);
			} else {
				fill(0, 0, 1); // Fallback color for missing data
			}

			rect(60 + i * gridSize, 60 + j * gridSize, gridSize, gridSize);
		}
	}
}
