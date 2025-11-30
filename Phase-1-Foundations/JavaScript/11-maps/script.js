// creating a map.....
const myMap = new Map();

// adding key-value pairs.....
myMap.set("name", "Alice");
myMap.set("age", 25);
myMap.set("city", "Delhi");
myMap.set(true, "Boolean key");
myMap.set({ id: 1 }, "Object key"); // objects can be keys

// getting values.....
console.log(myMap.get("name"));
console.log(myMap.get(true));

// checking if a key exists.....
console.log(myMap.has("age"));
console.log(myMap.has("country"));

// size of the map.....
console.log("Size:", myMap.size);

// deleting a key-value pair.....
myMap.delete("city");
console.log("Size after delete:", myMap.size);

// clearing the map.....
myMap.clear();
console.log("Size after clear:", myMap.size);
