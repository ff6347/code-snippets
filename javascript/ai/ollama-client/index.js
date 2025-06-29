document.getElementById("send").addEventListener("click", async () => {
	await main();
});

async function main() {
	let loadingDiv = document.getElementById("loading");
	let spinner = document.getElementById("spinner");
	const spinnerData = {
		interval: 80,
		frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
	};
	// create a interval that changes the spinner
	let spinnerInterval = setInterval(() => {
		spinner.innerText = spinnerData.frames.shift();
		spinnerData.frames.push(spinner.innerText);
	}, spinnerData.interval);

	loadingDiv.innerText = "Loading ";
	const urlInput = document.getElementById("url");

	const url = urlInput.value;
	if (url.length === 0) {
		alert("Your URL is to short");
		return;
	}
	const contentInput = document.getElementById("content");
	const content = contentInput.value;
	if (content.length === 0) {
		alert("Your content is to short");
		return;
	}
	console.log("sending...");

	const response = await fetch(`${url}/api/chat`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			stream: false,
			model: "phi3",
			messages: [
				{
					role: "assistant",
					content:
						"You are a helpful asistant that gives very short answers. Keep it ass brief as possible Don't explain yourself. Example: User: ping? You: pong!",
				},
				{ role: "user", content },
			],
		}),
	});
	clearInterval(spinnerInterval);
	loadingDiv.innerText = "Waiting";
	spinner.innerText = "";
	if (!response.ok) {
		const txt = await response.text();
		console.log({ txt });
		throw new Error("Failed to fetch");
	}
	const data = await response.json();
	console.log(data);
	document.querySelector("#target>pre>code").innerText = JSON.stringify(
		data,
		null,
		2,
	);
}
