// Filename: markovChain.js

// Function to create a Markov chain
function createMarkovChain(text) {
	let words = text.split(" ");
	let markovChain = {};

	for (let i = 0; i < words.length; i++) {
		let word = words[i].toLowerCase();
		if (!markovChain[word]) {
			markovChain[word] = [];
		}
		if (words[i + 1]) {
			markovChain[word].push(words[i + 1].toLowerCase());
		}
	}

	return markovChain;
}

// Function to generate new text from the Markov chain
function generateText(markovChain, startWord, wordCount) {
	let words = [startWord];

	for (let i = 0; i < wordCount; i++) {
		let wordArray = markovChain[words[i]];
		let nextWord = wordArray[Math.floor(Math.random() * wordArray.length)];
		words.push(nextWord);
	}

	return words.join(" ");
}

// Example usage
let text = `Once upon a time, in a peaceful pond nestled in a deep emerald forest, lived a little turtle named Tilly. Even though the pond was a paradise, full of vibrant lotus flowers, shimmering koi movies, and all the cool mud one could sunbathe in, Tilly wanted nothing more than to see the wide wide world.

One sunny morning, Tilly made a bold decision. She pushed herself out of the familiar muddy bank of her home, and embarked on an extraordinary journey. With an adventurous spirit, this small turtle dared to traverse the world’s endless expanse. She knew that away from the pond she was awaited by vibrant valleys, deep rivers, towering mountains, and arid deserts, but no distance was too far, no terrain too treacherous for her adventurous spirit.

In the early days of her venture, Tilly was greeted by vast meadows brimming with colorful flowers whispering in the gentle breeze. Here, she met a diversity of creatures, some swift and sky-dominating, others dwellers of the mysterious underground. Various creatures told countless tales of their lands, which only fueled Tilly's desire to see more.

Traveling further, Tilly braved deep rivers, using determination and patience as her navigational compass. She found friendship in the current, learned the language of waves and the tales they told. The river carried immense power, but also wisdom, only revealing its secrets to the patient and persistent.

As Tilly ascended towering mountains, she witnessed landscapes transforming from forested boiling basins to icy stalagmite-filled plateaus. She learned and understood the rhythm of the land, the ebb and flow of seasons, and marveled at the way the sun splattered various shades on the canvas of the sky.

In the arid deserts, she faced the true test of resilience. Despite the relentless sun and shifting sands, Tilly moved forward. Here she learned the beauty of solitude, the poetry in silence, and the irreplaceable value of finding an oasis.

Every place she moved through, every creature she met along the way, every challenge she overcame, Tilly gathered unparalleled experiences. She soaked in the magnificence of the wide wide world, carrying along not just her small shell, but endless stories she would one day recount.

Tilly, the small turtle, might be tiny for this vast world, but her spirit was anything but. Her bold venture into the wide wide world showed that no matter how small one might feel, there is always a place for us in this grand tapestry of life.`;
let markovChain = createMarkovChain(text);
console.log(markovChain);
let newText = generateText(markovChain, "the", 100);
console.log(newText);
