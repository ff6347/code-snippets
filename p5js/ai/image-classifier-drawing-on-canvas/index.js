// path/filename: sketch.js
let cnv, clearButton, saveButton;
let px, py; // stores the previous mouse positions
let img;
let classifier;
let labelElement, confidenceElement;
let loadingModel = false;
let classifiying = false;
function preload() {
	const status = select("#status");
	let imageModelURL =
		"https://teachablemachine.withgoogle.com/models/0LQqfdQA7/";
	status.elt.innerText = "Loading model...";
	loadingModel = true;
	classifier = ml5.imageClassifier(imageModelURL + "model.json", function () {
		console.log("model loaded successfully");
		loadingModel = false;
		status.elt.innerText = "Model loaded successfully";
		const interval = setInterval(() => {
			if (!loadingModel) {
				clearInterval(interval);
				status.elt.innerText = "Ready for your drawing...";
			}
		}, 1000);
	});
}

function setup() {
	cnv = createCanvas(200, 200);
	cnv.parent("sketch");
	background(255);

	px = mouseX; // initialize previous mouse x
	py = mouseY; // initialize previous mouse y

	// Button to clear the canvas
	clearButton = createButton("Clear");
	clearButton.parent("buttons");
	clearButton.mousePressed(clearCanvas);

	// Button to save the canvas
	saveButton = createButton("Classify");
	saveButton.parent("buttons");

	saveButton.mousePressed(classifyCanvas);
	strokeCap(ROUND);
	const status = select("#status");
}

function draw() {
	if (mouseIsPressed) {
		let weight = dist(px, py, mouseX, mouseY);
		strokeWeight(constrain(weight, 1, 10));
		line(px, py, mouseX, mouseY);
	}
	px = mouseX; // updates previous mouse x
	py = mouseY; // updates previous mouse y
}

// Function to clear the canvas
function clearCanvas() {
	background(255);
}

// Function to save the canvas as an image
function classifyCanvas() {
	classifiying = true;
	const status = select("#status");
	status.elt.innerText = "Classifying...";
	// save(cnv, "myCanvas.jpg");
	img = get();
	classifier.classify(img, (err, results) => {
		if (err) {
			console.error(err);
			classifiying = false;
			status.elt.innerText = "Error classifying the image";
			return;
		}
		classifiying = false;
		status.elt.innerText = "Classified successfully";
		console.log(results);
		labelElement = select("#label");
		labelElement.elt.innerText = `${results[0].label}`;
		// labelElement.createDiv(`Label: ${results[0].label}`);
		confidenceElement = select("#confidence");
		confidenceElement.elt.innerText = `${(results[0].confidence * 100).toFixed(2)} %`;
		let count = 0;
		const interval = setInterval(() => {
			if (count === 2) {
				clearInterval(interval);
				status.elt.innerText = "Ready for your drawing...";
			}
		}, 1000);
	});
}
