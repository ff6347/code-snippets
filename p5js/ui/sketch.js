/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// They will help you while writing code.



let title = "P5JS";
let titleSize = 300;
let backgroundColor = "#ff6347";
let textColor = 255;
function setup() {
	// setup runs once
	const canvas = createCanvas(200, 200);
	canvas.parent("sketch");
	// the text input filed
	const textInput = createInput(title);
	const aside = select("aside");
	textInput.input(textInputHandler);
	textInput.parent(aside);
	// let the title size input field
	const numberInput = createInput(titleSize.toString(), "number");
	numberInput.input(numberInputHandler);
	numberInput.parent(aside)
	// the background color picker
	const colorInput = createInput(backgroundColor, "color")
	colorInput.parent(aside)
	colorInput.size("100%")
	colorInput.input(colorInputHandler)
	// the text color slider
	const sliderInput = createInput(textColor.toString(), "range");
	sliderInput.parent(aside)
	sliderInput.elt.min = "0";
	sliderInput.elt.max = "255";
	sliderInput.elt.step = "1";
	sliderInput.elt.value = `${textColor}`;
	sliderInput.input(textColorHandler)




	textFont("Rockwell");
}

function draw() {
	// draw runs all the time
	background(backgroundColor);
	fill(textColor);
	textAlign(CENTER, CENTER)
	textStyle(BOLDITALIC);
	textSize(titleSize);
	text(title, width / 2, height / 2);
}

function textInputHandler() {
	console.log("you are typing: ", this.value());
	title = this.value();
}

function numberInputHandler() {
	console.log("you are setting the number: ", this.value(), typeof this.value());
	titleSize = parseInt(this.value());
}
function colorInputHandler() {
	console.log("you are setting the backgroundColor to: ", this.value(), typeof this.value());
	backgroundColor = this.value();
}
function textColorHandler() {
	console.log("you are setting the textColor to: ", this.value(), typeof this.value());
	textColor = this.value();
}