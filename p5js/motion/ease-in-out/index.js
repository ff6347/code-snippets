let x = 0;
let t = 0;

function setup() {
  const canvas = createCanvas(100, 100);
  canvas.parent('sketch');
}

function draw() {
  background(255);
  t += 0.02;

  // Choose one of these ease-in-out equations:

  // Linear (no ease)
  x = t * width;

  // Quadratic
  x = (t < 0.5 ? 2 * t * t : 1 - pow(-2 * t + 2, 2) / 2) * width;

  // Cubic
  x = (t < 0.5 ? 4 * t * t * t : 1 - pow(-2 * t + 2, 3) / 2) * width;

  // Quartic
  x = (t < 0.5 ? 8 * t * t * t * t : 1 - pow(-2 * t + 2, 4) / 2) * width;

  // Quintic
  x = (t < 0.5 ? 16 * t * t * t * t * t : 1 - pow(-2 * t + 2, 5) / 2) * width;

  // Sine (original)
  x = map(cos(t * PI), 1, -1, 0, width);
  // Cleaner sine ease-in-out
	// x = (1 - cos(t * PI)) / 2 * width;
  // Exponential
  x = (t < 0.5
    ? pow(2, 20 * t - 10) / 2
    : (2 - pow(2, -20 * t + 10)) / 2) * width;

  circle(x, height / 2, 20);

  if (t >= 1) {
    t = 0;
  }
}
