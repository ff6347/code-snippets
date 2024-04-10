/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
/// <reference path="./node_modules/@types/p5/index.d.ts" />
// @ts-check
// Keep these comments alive.
// They will help you while writing code.
let input;
let dropArea;
let img;

function fileHandler(file) {
  console.log(file);
  if (file.type === "image") {
    // we can load the image into an DOM img element
    console.log("it was an image file");
    const imgElt = createImg(file.data, "");
    imgElt.hide();
    // but we can also load it into a p5.Image
    // and draw it to the canvas
    loadImage(file.data, (image) => {
      console.log("image data loaded into p5.Image");
      // letter box it (resize it to fit the canvas)
      if (image.width > image.height) {
        console.log("resize to fit w", width);
        image.resize(width, 0);
      } else {
        console.log("resize to fit h", height);
        image.resize(0, height);
      }
      img = image;
    });
  }
}

/**
 * Taken from the p5.js source
 * https://github.com/processing/p5.js/blob/cdd98d02fc4a96bf819a5b000779889e8bb842f9/src/dom/dom.js#L2028
 */
function fileSelectHandler(event) {
  for (const file of event.target.files) {
    p5.File._load(file, fileHandler);
  }
}

function handleDrop(event) {
  console.log("something was dropped");
}

function setup() {
  const canvas = createCanvas(200, 200);
  canvas.parent("container");
  input = select("input#file");
  dropArea = select("#drop");
  // this is defensive programming.
  // fail early fail often
  if (!input) throw new Error("input element missing");
  if (!dropArea) throw new Error("drop area element missing");
  dropArea.drop(fileHandler, handleDrop);
  // we need to interact a little with the DOM directly
  // since we don't use the createFileInput function
  //https://github.com/processing/p5.js/blob/cdd98d02fc4a96bf819a5b000779889e8bb842f9/src/dom/dom.js#L2025
  input.elt.addEventListener("change", fileSelectHandler, false);
}

function draw() {
  background(255);
  if (img) {
    push();
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(img, 0, 0);
    pop();
  }
}
