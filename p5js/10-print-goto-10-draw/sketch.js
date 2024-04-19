/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// @ts-check
// Keep these comments above alive. They will help you while writing code.

const step = 5;
let x = step / 2;
let y = step / 2;
function setup() {
  // setup runs once
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background(255);
}

function draw() {
  // draw runs all the time
  push();
  strokeWeight(2);
  translate(x, y);
  if (random() > 0.5) {
    line(-step / 2, -step / 2, step / 2, step / 2);
  } else {
    line(-step / 2, step / 2, step / 2, -step / 2);
  }
  pop();
  if (x < width) {
    x = x + step;
  }
  if (x >= width) {
    x = step / 2;
    y += step;
  }
  if (y >= height) {
    noLoop();
  }
}
