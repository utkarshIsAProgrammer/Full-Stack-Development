// This is a single line comment.

/* 
This is 
a multiline
comment.
*/

// console message types.....
console.log("Hello World!");
console.warn("Warning Message!");
console.error("Error Message!");

// template literals.....
console.log(`4 + 5 = ${4 + 5}`);

// user input.....
const prompt = require("prompt-sync")();
const name = prompt("Enter your name: ");
console.log(name);

// primitive data types.....
// 1. string
console.log("Double quoted string.");
console.log(`Single quoted string.`);
console.log("Backticks string.");

// 2. boolean
console.log(true);
console.log(false);

// 3. number
console.log(55);
console.log(5.5);

// 4. undefined
console.log(undefined);

// 5. null
console.log(null);

// variables.....
var redColor = "red"; // FUNCTION SCOPED
console.log(redColor);

redColor = "#ff0000";
console.log(redColor);

let greenColor = "green"; // BLOCK SCOPED
console.log(greenColor);

greenColor = "#00ff00";
console.log(greenColor);

const blackColor = "#000"; // BLOCK SCOPED
console.log(blackColor);

// arithmetic operators.....
console.log(5 + 5);
console.log(5 - 2);
console.log(5 * 2);
console.log(10 / 2);
console.log(5 ** 2);
console.log(10 % 2);

console.log(6 + "7");
console.log(6 + true);
console.log(6 + false);
console.log("121" - 1);

// type conversion.....
console.log(Number("23") * 2);
console.log(parseInt("23.5") * 2);
console.log(parseFloat("23.56") * 2);
console.log(String(52) - 30);

// comparison operators.....
console.log(5 == "5"); // loose equal to operator
console.log(5 === "5"); // strict equal to operator

console.log(5 != "5"); // loose not equal to operator
console.log(5 !== "5"); // // strict equal to operator

console.log(5 > 6);
console.log(5 >= 6);

console.log(5 < 6);
console.log(5 <= 6);

// logical operators.....
console.log(5 > 2 && 2 < 5);
console.log(5 > 2 || 2 > 5);
console.log(!(2 > 5));
