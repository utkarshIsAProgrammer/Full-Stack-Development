// creating function.....
function greet(name, age = 12) {
	console.log(name, age);
}

greet("Jane");

// arrow function.....
let func = (name, age) => {
	return name, age;
};

let result = func("John", 13);
console.log(result);

// rest parameter.....
function restFunc(...numbers) {
	return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

let output = restFunc();
console.log(output);
