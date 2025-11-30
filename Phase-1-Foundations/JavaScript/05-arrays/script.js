// creating array statically.....
const arr = [1, 2, 3, 4, 5, true];
console.log(arr);

// creating array dynamically.....
const newArr = new Array(5);
console.log(newArr.length);

// creating array from elements.....
const anotherArr = Array.from("HELLO");
console.log(anotherArr);

// updating array.....
anotherArr[0] = "h";
console.log(anotherArr);

anotherArr[anotherArr.length - 1] = "o";
console.log(anotherArr);

// add element to the end.....
anotherArr[anotherArr.length + 1] = "!";
console.log(anotherArr);

// add item to the last index
arr.push(false);
console.log(arr);

// remove and return last element.....
const popItem = arr.pop();
console.log(arr);
console.log(popItem);

// remove first element.....
arr.shift();
console.log(arr);

// add item to first index.....
arr.unshift("new element");
console.log(arr);

// first index of an element.....
console.log(anotherArr.indexOf("L"));

// last index of an element.....
console.log(anotherArr.lastIndexOf("L"));

// check an element in the array
console.log(anotherArr.includes("o"));

// concatenating arrays
const anotherNewArr = arr.concat(anotherArr);
console.log(anotherNewArr);

// join array elements as a string
const arrStr = anotherNewArr.join("|");
console.log(arrStr);

// array slicing
console.log(arr.slice(1, 3));
console.log(arr.slice(-3, -1));

// remove element using index
const spliceElement = arr.splice(2, 1);
console.log(spliceElement);
