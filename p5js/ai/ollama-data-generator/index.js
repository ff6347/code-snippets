// this is p5 code that loads data from local running ollama
// and displays it in a p5 canvas
// this is a simple example of how to use the ollama API
function preload() {
	if (window.ollama) {
		console.log("ollama is available");
	} else {
		console.log("ollama is not available");
	}
}
const data = [];

let generatingData = false;
function setup() {
	const canvas = createCanvas(100, 100);
	canvas.parent("sketch");
	generatingData = true;
	ollama
		.chat({
			model: "llama3",
			stream: false,
			format: "json",
			messages: [
				{
					role: "system",
					content:
						"You are a p5js data generator. You always reply in JSON and ONLY JSON. No additional explainations, no comments whatsover. You don't add any linebreaks to the generated json. You generate an array of around 10 items in the following schema: `{points: [{x: <number between 0 and 400>, y:<number between 0 and 400>}]}`. Make sure all the points are numbers and all the objects have the same schema. You don't generate any other data. You don't generate any other messages. You don't need to escape the data",
				},
				{ role: "user", content: "Generate data please" },
			],
		})
		.then((response) => {
			// console.log("response", response);
			// data.push(...response.messages);
			generatingData = false;
			const json = JSON.parse(response.message.content);
			console.log("json", json);
			data.push(...json.points);
		})
		.catch((error) => {
			console.error("error", error);
			generatingData = false;
		});
	textAlign(CENTER, CENTER);
}

function draw() {
	rect(0, 0, width, height);
	if (data.length > 0) {
		data.forEach((point) => {
			ellipse(point.x, point.y, 10, 10);
		});
	} else {
		text(generatingData ? "Loading" : "Done", width / 2, height / 2);
	}
}
