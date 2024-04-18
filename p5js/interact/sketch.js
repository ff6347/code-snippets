/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference  path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />

let isInside = false;
const gutter = 25;
function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(128);
  const rw = width - gutter * 2;
	const rh = height - gutter * 2
  if (mouseX > gutter && mouseX < rw + gutter && mouseY > gutter && mouseY < rh + gutter) {
    fill("red");
    isInside = true;
  } else {
    fill("black");
    isInside = false;
  }
  rect(gutter, gutter, rw, rh);
}

function keyPressed() {
  console.log(`key is ${key} in keyPressed`);
}

function keyTyped() {
  console.log(`key is ${key} in keyTyped`);
  if(key === 's'){
    saveCanvas("outfile-" + Date.now(),"png")
  }
}

function keyReleased() {
  console.log(`key is ${key} in keyReleased`);
}

function mousePressed() {
  if (isInside) {
    console.log("clicked the rect");
  }
}
