# Functions and Classes

## (AI generated) Description

The JavaScript sketch outlines the use of functions, arrow functions, and classes to make code more readable and efficient. The features and changes each implementation offer compared to traditional methods are also described. Here's a brief technical summary of the outcome:

- **Functions:** Simplifies repetitive tasks by defining a reusable block of code (`timesTwo` function to multiply a value by 2).
- **Arrow Functions:** Introduced as a concise syntax option:

  - Typically anonymous without their own name property.
  - Do not have their own `this`, capturing it from the enclosing context.
  - Lack their own `arguments` object but can receive parameters.
  - Cannot use `super` or `new.target` and do not have a `prototype` property.
  - Not hoisted, stored in variables, following the variable's hoisting rules.

- **Classes:** Provide syntactic sugar over constructor functions for object creation, making the syntax cleaner and more similar to other object-oriented languages.
  - Replaces the traditional constructor function (`Agent`) with the `class` syntax.
  - Encapsulates constructor logic and methods within the class definition.
  - Demonstrates instantiation and method invocation on the class instance.

The sketch effectively contrasts older JavaScript practices with newer ES2015 (ES6) features, showcasing the evolution towards more concise and powerful code structures.

## Learning Objectives

1. Construct classes as your own helper class
2. Know the different ways how to declare functions
3. Know the difference between arrow functions and "classic" functions
