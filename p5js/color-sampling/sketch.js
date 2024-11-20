let img;
const numberOfSectors = 16;
function preload() {
	// preload runs once
	img = loadImage('assets/buddah.png');
}

function setup() {
	ellipseMode(CORNER);
	// setup runs once
	const canvas = createCanvas(256, 256);
	canvas.parent('sketch');
	background(255);
	// load the pixels of the image
	img.loadPixels();
	noStroke();
	// calculate the size of each sector
	const sectors = [];
	const sectorSize = img.width / (256 / numberOfSectors);
	// loop through y and then x of the image generating sectors
	// from which we will sample the colors avarage
	// to have the first loop be for the y coordinate
	// we make sure we work x from x to x + sectorSize
	for (let y = 0; y < img.height; y += sectorSize) {
		for (let x = 0; x < img.width; x += sectorSize) {
			// initialize the sum of red, green, and blue values to 0
			let rSum = 0;
			let gSum = 0;
			let bSum = 0;
			let numPixels = 0;
			// loop through all the pixels in the image within the current sector
			// first in x and then in y
			for (let j = y; j < y + sectorSize; j++) {
				for (let i = x; i < x + sectorSize; i++) {
					// calculate the index of the pixel
					// The pixels are just one long array where we have [r,g,b,a,r,g,b,a,...]
					// se we multiply by 4 to allaws have the offset of 4
					const index = (i + j * img.width) * 4;
					// sum up r,g an b
					rSum += img.pixels[index];
					gSum += img.pixels[index + 1];
					bSum += img.pixels[index + 2];
					numPixels++;
				}
			}

			// calculate the average r,g,b values
			const rAvg = rSum / numPixels;
			const gAvg = gSum / numPixels;
			const bAvg = bSum / numPixels;
			// here you can just draw the posterized image
			// set the fill color to the average color
			// fill(rAvg, gAvg, bAvg);
			// and draw a retangle for the current sector
			// rect(x, y, sectorSize, sectorSize);
			sectors.push({
				x,
				y,
				c: color(rAvg, gAvg, bAvg),
				sectorSize,
				grey: color(calculateGreyscale(rAvg, gAvg, bAvg)),
			});
		}
	}
	// sort the sectors by there c porpertys brightness (which is a p5.Color Object) by their brightness without mutating the original sectors. So we make a copy
	// const sortedByBrightnessSectors = [...sectors].sort(
	// 	(a, b) => brightness(b.c) - brightness(a.c),
	// );
	// sort the sectors by there c porpertys hue (which is a p5.Color Object) by their brightness without mutating the original sectors. So we make a copy
	// const sortedByHueSectors = [...sectors].sort((a, b) => hue(b.c) - hue(a.c));

	// sort the sectors by there c porpertys hue (which is a p5.Color Object) by their brightness without mutating the original sectors. So we make a copy
	const sortedBySatuarationSectors = [...sectors].sort(
		(a, b) => saturation(b.c) - saturation(a.c),
	);

	// const sortedByGreyScaleSectros = [...sectors].sort((a, b) => {
	// 	return (
	// 		// @ts-ignore
	// 		b.grey.levels.slice(0, 3).reduce((acc, curr) => acc + curr, 0) -
	// 		// @ts-ignore
	// 		a.grey.levels.slice(0, 3).reduce((acc, curr) => acc + curr, 0)
	// 	);
	// });

	/**
	 * This function will draw a sector
	 * @param {Object} sector The sector object
	 * @param {number} index The index of the sector
	 */
	const sectorDrawer = (sector, index) => {
		// set the fill color to the color of the sector
		fill(sector.c);
		// and draw a retangle for the current sector
		const x = (index % numberOfSectors) * sector.sectorSize;
		const y = floor(index / numberOfSectors) * sector.sectorSize;
		ellipse(x, y, sector.sectorSize, sector.sectorSize);
	};
	// sortedByBrightnessSectors.forEach(sectorDrawer);
	// sortedByHueSectors.forEach(sectorDrawer);
	// sortedBySatuarationSectors.forEach(sectorDrawer);
	// sortedByGreyScaleSectros.forEach((sector, index) => {
	// 	// set the fill color to the color of the sector
	// 	fill(sector.grey);
	// 	// and draw a retangle for the current sector
	// 	const x = (index % numberOfSectors) * sector.sectorSize;
	// 	const y = floor(index / numberOfSectors) * sector.sectorSize;
	// 	rect(x, y, sector.sectorSize, sector.sectorSize);
	// });
	sectors.forEach(sectorDrawer);
}

function draw() {
	// draw runs all the time
}

/**
 * Calculates the greyscale value of a given RGB color.
 * The luminosity method, also known as the relative luminance, refers to a weighted mean used for converting colors to grayscale or black-and-white representation. The specific weights (i.e., 0.2126 for red, 0.7152 for green, and 0.0722 for blue) reflect the different sensitivity of human vision to different color wavelengths.
 * The origin of these coefficients dates back to the development of the color television standards and color spaces, specifically the Rec. 709 standard defined by the International Telecommunication Union (ITU). This specified the relationship between the digital and the reference electro-optical transfer function for HDTV studio monitors. The coefficients were chosen to maximize the perceived luminance, given that human vision is most sensitive to green light, less to red light, and least to blue light.
 * @param {number} r - The red component of the color (0-255).
 * @param {number} g - The green component of the color (0-255).
 * @param {number} b - The blue component of the color (0-255).
 * @returns {number} The greyscale value of the color (0-255).
 */
function calculateGreyscale(r, g, b) {
	var grey = 0.2126 * r + 0.7152 * g + 0.0722 * b;
	return grey;
}
