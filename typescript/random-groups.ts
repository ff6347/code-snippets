const names = [
  'Anna',
  'Anne',
  'Arne',
  'Bleona',
  'Hannah',
  'Isabella',
  'Katja',
  'Katya',
  'Leonie',
  'Maryia',
  'Mel',
  'Mira',
  'Mirea',
  'Phil',
];

// create random groups of maximal three names from the names array
// shuffle  array
function shuffle(array) {
  let currentIndex = array.length,
    temp,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

const groups = shuffle(names).reduce((acc, name) => {
  if (acc.length === 0) {
    acc.push([name]);
  } else if (acc[acc.length - 1].length < 3) {
    acc[acc.length - 1].push(name);
  } else {
    acc.push([name]);
  }
  return acc;
}, []);

console.log(groups);
