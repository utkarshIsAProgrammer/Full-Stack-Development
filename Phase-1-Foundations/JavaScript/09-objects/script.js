const obj = {
	name: "Alice",
	age: 19,

	sayHello: function () {
		return "Hello!";
	},

	career: {},
};

// access properties.....
console.log(obj.name);
console.log(obj.age);

// access methods.....
let callFunc = obj.sayHello();
console.log(callFunc);

// delete from an object.....
delete obj.career;
console.log(obj);

// get keys and values.....
console.log(Object.keys(obj));
console.log(Object.values(obj));

// keys using for loop.....
for (let key in obj) {
	console.log(key);
}

// values using for loop.....
for (let key in obj) {
	console.log(obj[key]);
}

const obj2 = {
	hairColor: "black",
	arr: [1, 2, 3],
	name: "Tim", // override previous name
};

// object destructuring.....
const obj3 = { ...obj, ...obj2 };
console.log(obj3);
