const prompt = require("prompt-sync")();

console.log("Proceed for age verification.....");
let age = prompt("Enter your age: ");

if (age <= 0) {
	console.log("Unborn are not allowed.");
} else if (age > 120) {
	console.log("Immortals are not allowed!");
} else if (age > 18) {
	console.log("Age verified for watching the movie.");
} else {
	console.log("You are not verified to watch the movie.");
}

// ternary operator......
age <= 0
	? console.log("Unborn are not allowed.")
	: age > 120
	? console.log("Immortals are not allowed!")
	: age > 18
	? console.log("Age verified for watching the movie.")
	: console.log("You are not verified to watch the movie.");
