// for loop.....
for (let i = 1; i <= 5; i++) {
	console.log(i);
}

// for loop with array.....
let arr = ["a", "b", "c", "d", "e"];
for (let item of arr) {
	console.log(item);
}

// for loop with index and value of array.....
for (let [index, value] of arr.entries()) {
	console.log(index, value);
}

// for loop with string.....
let myStr = "hello!";
for (let element of myStr) {
	console.log(element);
}
