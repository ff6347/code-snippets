//@ts-nocheck

// @ts-ignore
let imageModelURL = "https://teachablemachine.withgoogle.com/models/GdPa0SVYo/";

let classifier;
// @ts-ignore
let img = null;
// @ts-ignore
let canvas;
let bgcolor = "white";
const defaultMessage = "Drop an\nimage here.";
let message = defaultMessage;
let textColor = "black";
let label = "…?";
let labelElement;
let fontSize = 10;

function preload() {
	classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
	// Prevent default drag behaviors
	window.addEventListener(
		"dragover",
		function (e) {
			e.preventDefault();
			e.stopPropagation();
		},
		false
	);

	window.addEventListener(
		"drop",
		function (e) {
			e.preventDefault();
			e.stopPropagation();
		},
		false
	);

	canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	background(bgcolor);

	// Setup canvas drop handling
	canvas.dragOver(function () {
		message = "Uh yeah, drop it";
		bgcolor = "#ccc";
	});

	canvas.dragLeave(function () {
		bgcolor = "white";
		message = defaultMessage;
	});

	canvas.drop(handleFile, function () {
		bgcolor = "white";
		message = "";
	});

	// Handle file input changes

	const fileInput = select("#file");
	if (fileInput) {
		fileInput.changed(handleFileInput);
	}

	labelElement = select("#label");
	labelElement.html(label);
	textFont("system-ui");
}

function draw() {
	background(bgcolor);
	if (img) {
		// Draw the loaded image
		image(img, 0, 0, width, height);
	}

	// Draw drop instruction text
	textAlign(CENTER, CENTER);
	textSize(fontSize);
	fill(textColor);
	noStroke();
	text(message, width / 2, height / 2);
}

function handleFile(file) {
	if (file.type === "image") {
		img = createImg(file.data, "uploaded image");
		img.hide();
		classifyImage(img);
	} else {
		console.log("Not an image file!");
	}
}
function handleFileInput(event) {
	const file = event.target.files[0];
	if (file && file.type.startsWith("image/")) {
		const reader = new FileReader();
		reader.onload = function (e) {
			img = createImg(e.target.result, "uploaded image");
			img.hide();
			classifyImage(img);
		};
		reader.readAsDataURL(file);
	} else {
		console.log("Not an image file selected!");
	}
}

function classifyImage(image) {
	classifier.classify(image, gotResult);
}

function gotResult(results) {
	console.log(results);
	label = results[0].label;
	labelElement.html(label);
	message = "Oh yeah. \nDrop me another one!";
}
