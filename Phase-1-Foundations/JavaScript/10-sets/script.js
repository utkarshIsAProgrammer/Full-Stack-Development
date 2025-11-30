const mySet = new Set();

// adding multiple elements.....
mySet.add(1).add(2).add(3);
console.log(mySet);

// delete element.....
mySet.delete(1);
console.log(mySet);

// check element in set.....
console.log(mySet.has(1));

// check set size.....
console.log(mySet.size);

// clear entire set.....
mySet.clear();
console.log(mySet);
