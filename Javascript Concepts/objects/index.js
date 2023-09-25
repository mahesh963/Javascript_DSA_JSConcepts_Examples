// //Objects Examples
let nums = {
	a: 100,
	b: 200,
	title: "this is string obj",
};

for (keys in nums) {
	if (typeof nums[keys] === "number") {
		nums[keys] = nums[keys] * 2;
	}

	console.log(nums[keys]);
}

// //-->1

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

//===============================================//

// destructing in objects
//=================== < Shallow Copy >============================//
// A shallow copy creates a new object that is a duplicate of the original object, but it only copies references to nested objects or arrays. To create a shallow copy, you can use the spread operator ({...}) for the top-level object:

let user = {
	name: "venky",
	age: 24,
	hobbies: ["cricket", "volleyball"],
	intrest: {
		activity: "music",
	},
};

let shallowCopyobj = { ...user };
shallowCopyobj.name = "mahesh";
shallowCopyobj.hobbies[1] = "Tennis";

console.log("shallowCopyobj", user, shallowCopyobj);

//=================== < Deep Copy >============================//
//A deep copy creates a completely independent copy of the original object, including all nested objects and arrays. To create a deep copy, you can use a custom function or a library like Lodash (if you want to avoid writing a deep copy function from scratch).

let newUser = {
	name: "venky",
	age: 24,
	hobbies: ["cricket", "volleyball"],
	intrest: {
		activity: "music",
	},
};

let deepCopyObj = JSON.parse(JSON.stringify(newUser));

deepCopyObj.hobbies[0] = "dance";

console.log(newUser, deepCopyObj);

//=======================invoke function in object========================//
let usernew = {
	name: "venky",
	greet() {
		return `Hello, ${this.name}`;
	},
	farewell: () => {
		return `Bye, ${this.name}`;
	},
};

console.log(user.greet());
console.log(user.farewell());

//===================Calculator through obj============================//

let calculatorObj = {
	read() {
		a = prompt("a = ", this.a);
		b = prompt("b = ", this.b);
		console.log(`Hello, ${name}!`);
	},
};

calculatorObj.read();

let calc = {
	total: 0,
	add(a) {
		this.total += a;
		return this;
	},
	multiply(b) {
		this.total *= b;
		return this;
	},
};

let result = calc.add(4).multiply(6);

console.log(result.total);

//==============================================================================//
//==============================================================================//
//==============================================================================//

// let user = {
// 	name: "venky",
// 	age: 24,
// 	greet() {
// 		console.log(this.name);
// 	},
// };

// console.log(user.greet());

//==============================================================================//

// let c = { name: "venky" };
// let d;
// //d = c; // Use Object.assign to clone the properties of c
// d = Object.assign({}, c);

// c.age = 26; // Modify the c object
// c.name = "mahi";

// console.log(c); // Output: { name: "venky" }

// console.log([..."venky"]);

// // let data = 3 + 4 + "5";

// // console.log(typeof data);

//==============================================================================//

// function getInfo(member) {
// 	member.name = "venky";
// }

// const person = { name: "mahi" };

// getInfo(person);

// console.log(person);
