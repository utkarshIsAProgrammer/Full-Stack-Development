// destructuring.....
const [x, y] = [1, 2];
console.log(x, y);

// spread operator.....
const [a, ...b] = [3, 4, 5, 6, 7, 8, 9];
console.log(a, b);

// -----------------------

const p = [1, 2, 3];
// const [q] = p; // // same reference of array
const [...q] = p; // copy of array
q.push("hello");
console.log(p, q);

// -----------------------
