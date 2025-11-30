const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// map: doubles each number.....
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10, 12, 14, 16]

// filter: keeps only even numbers.....
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8]

// reduce: calculates the sum.....
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 36
