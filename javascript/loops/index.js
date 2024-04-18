// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
for (let i = 0; i < 10; i++) {}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
const iterable = [10, 20, 30];
for (const item of iterable) {
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
const object = { a: 1, b: 2, c: 3 };
for (const item in object) {
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
const condition = false;
while (condition) {
  // warning: infinite loop if the condition is always true
  // make sure to have a way to break the loop
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while
const doCondition = false;
do {
  // warning: infinite loop if the condition is always true
} while (doCondition);

// And even more when working with arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// below are two examples. Explore the docs for more like. Array.prototype.some, or Array.prototype.find ...

[].map(function (element, index, array) {});

[].forEach(function (element, index, array) {});

// When working with objects we  have no direct iteration function,
// but we can use utilities for accessing the keys and values

Object.keys({}).map(function (element, index, array) {});
Object.values({}).map(function (element, index, array) {});
