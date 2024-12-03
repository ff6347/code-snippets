// To make repetetive code more readable and maintainable, we can use functions.
const a = 10 * 2;
const b = 22 * 2;
const c = 0.5 * 2;
const d = 5 * 2;
// The above statements can be written as:
function timesTwo(value) {
	return value * 2;
}

// Arrow Functions
// These where added in 2015 to EcmaScript and overcome some problems we had with classic functions
// 1.	Arrow functions are typically anonymous. They don't have their own ﻿name property like named functions.
// 	2.	Arrow functions don't have their own ﻿this. They capture the ﻿this value of the enclosing context.
// 	3.	Arrow functions don't have their own ﻿arguments. The ﻿arguments object is a local variable available within all non-arrow functions. You can still pass arguments to arrow functions, but cannot directly access the ﻿arguments object.
// 	4.	Arrow functions do not have ﻿super. Since arrow functions don't have their own ﻿this, they can't use ﻿super.
// 	5.	Arrow functions do not have a ﻿new.target because they cannot be used as constructors. Arrow functions throw an error when used with new.
// 	6.	Arrow functions do not have a ﻿prototype property because they can't be used as constructors, so there's no point in having one.
// 	7.	Arrow functions are not hoisted like traditional function declarations. This is because arrow functions are stored in variables, and variables (let and const) are not hoisted in the same way as function declarations.
// Please note that while they're very useful for certain tasks due to their short syntax and lexical ﻿this behavior, arrow functions are not a full substitute for traditional functions and their behavior can be confusing in certain contexts.

const timesTwo = (value) => value * 2;

// -----------------------
// Classes
// Classes are syntactic sugar over functions.
// They also where added with ES2015
// Before we did this:

function Agent(x, y) {
	this.x = x;
	this.y = y;
	// make sure this function is invoked with the new keyword.
	if (!(this instanceof Agent)) {
		throw new Error("Constructor Agent requires 'new'");
	}
	this.log = function () {
		console.log(this.x, this.y);
	};
}

const agent = new Agent(10, 10);
agent.log();

// Now we can do this:

class Agent {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	log() {
		console.log(this.x, this.y);
	}
}
