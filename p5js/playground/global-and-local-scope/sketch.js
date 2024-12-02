// global scope
// variables declared here are accessible to all functions
let y = 0;
const myCanvasWidth = 200;
function setup() {
  // local scope
  // variables declared here are accessible only to setup function

  // setup runs once
  const canvas = createCanvas(myCanvasWidth, 100);
  canvas.parent("sketch");
  background(128);
}

function draw() {
  // local scope
  // variables declared here are accessible only to draw function
  // draw runs all the time
  background(128);
  strokeWeight(20);
  point(myCanvasWidth / 2, y);

  y = y + 1; // increment
  // if condition
  if (y > height) {
    y = 0;
  }
  console.log(y);
}
