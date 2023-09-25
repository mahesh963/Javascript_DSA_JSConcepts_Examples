// //In JavaScript, call, bind, and apply are methods that allow you to control the context (the value of this) and pass arguments to functions.

// // call() method
// // The call method is used to invoke a function with a specified this value and a list of arguments passed individually.

let user = {
	name: "Venky",
};

function callMethod(age, profession) {
	return `Hello, ${this.name} is ${age}yrs old and his profession is ${profession}`;
}

console.log(callMethod.call(user, 24, "Jr.Developer"));

// // apply() method --> Here, for apply method we have to pass arguments in array fromat it's diff b/w call() and apply()
// //The apply method is similar to call, but it takes arguments as an array or array-like object

let newuser = {
	name: "Venky",
};

function callMethod(age, profession) {
	return `Hello, ${this.name} is ${age}yrs old and his profession is ${profession}`;
}

console.log(callMethod.apply(newuser, [25, "Developer"]));

// // bind() method
// // The bind method is used to create a new function that, when called, has a specified this value and any   provided arguments. It does not immediately execute the function but returns a new function with the specified context and arguments "bound" to it.
// // it provides the re-usable function()

// let newieuser = {
// 	name: "Venky",
// };

// function callMethod(age, profession) {
// 	return `Hello, ${this.name} is ${age}yrs old and his profession is ${profession}`;
// }

// let createBindFunc = callMethod.bind(newieuser);
// console.log(createBindFunc(26, "Software Developer"));

// // Polyfills for call(), apply() and bind()
// //--> call()
// //let take some example

let car = {
	color: "Red",
	company: "Ferrari",
};

function purchase(currency, price) {
	console.log(
		`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
	);
}

//console.log(purchase.call(car, "$", "100000000"));

//polyfill for call

Function.prototype.myCall = function (context = {}, ...arguments) {
	if (typeof this !== "function") {
		throw new Error("Not a function");
	}
	context.fn = this; //inserted the context i.e., object into function
	context.fn(...arguments); //pass the ...arguments(using spread operator specifices that don't know how many args is passing)
};

// purchase.myCall(car, "$", "100000000");

// //polyfill for apply

Function.prototype.myApply = function (context = {}, args = []) {
	if (typeof this !== "function") {
		throw new Error("Not a function");
	}

	if (!Array.isArray(args)) {
		throw new Error("create an array for args");
	}

	context.fn = this;
	context.fn(...args);
};

purchase.myApply(car, ["$", "90000000"]);

//polyfill for bind()

Function.prototype.myBind = function (context = {}, ...args) {
	if (typeof this !== "function")
		throw new Error(this + "cannot be bound as not callable ");

	context.fn = this;
	return function (...newArgs) {
		return context.fn(...args, ...newArgs);
	};
};

let cars = {
	color: "Blue",
	company: "Swift",
};

function purchased(currency, price) {
	console.log(
		`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
	);
}

let bindFunc = purchased.myBind(cars);

console.log(bindFunc("$", "8600000"));

// <------------------------ Implicit and Explicit Binding ----------------->

// var obj = {
// 	name: "venky",
// 	callMethod: function () {
// 		console.log(this.name);
// 	},
// };

// var obj1 = {
// 	name: "mahesh",
// };

// //obj.callMethod();
// obj.callMethod.call(obj1);
