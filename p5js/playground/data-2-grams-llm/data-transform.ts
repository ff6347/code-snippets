// Define the path to the JSON file
const filePath = './dataset.json';

// Use Deno.readTextFile to read the file as a string
const jsonString = await Deno.readTextFile(filePath);
const newDataSet: Record<string, any> = {};

// Use JSON.parse to parse the string into a JavaScript object
const data = JSON.parse(jsonString);

// Log the data to the console
// console.log(data);

data.forEach((item) => {
  // console.log(item);
  Object.keys(item).forEach((key: string) => {
    // console.log(key, item[key]);
    newDataSet[key] = item[key];
  });
});

await Deno.writeTextFile('./map-dataset.json', JSON.stringify(newDataSet));
console.log(newDataSet);
